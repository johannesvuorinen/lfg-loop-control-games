// logic.js — Pure, render-free GEM CASCADE rules.
// No DOM, no three.js. Fully deterministic given an injected RNG.
// A board is a flat Int8Array-like array (plain Array<number>) of length cols*rows.
// Cell value: integer 0..(numColors-1) = a gem color; -1 = EMPTY (hole).
// Index convention: index = row * cols + col, row 0 is the TOP row.

export const EMPTY = -1;

/**
 * Create a board descriptor. The board itself is just `cells` (Array<number>);
 * cols/rows/numColors travel alongside it via this object for convenience.
 */
export function makeBoard(cols, rows, numColors, cells = null) {
  return {
    cols,
    rows,
    numColors,
    cells: cells ? cells.slice() : new Array(cols * rows).fill(EMPTY),
  };
}

export function idx(board, col, row) {
  return row * board.cols + col;
}

export function inBounds(board, col, row) {
  return col >= 0 && col < board.cols && row >= 0 && row < board.rows;
}

export function getCell(board, col, row) {
  return board.cells[idx(board, col, row)];
}

export function setCell(board, col, row, val) {
  board.cells[idx(board, col, row)] = val;
}

/** Deterministic mulberry32 PRNG. Returns a function () => float in [0,1). */
export function makeRng(seed) {
  let a = seed >>> 0;
  return function rng() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function randColor(rng, numColors) {
  return Math.floor(rng() * numColors);
}

/**
 * Find all gems that are part of a horizontal or vertical run of >= minRun
 * same-color gems. Returns a Set of flat indices to clear.
 */
export function findMatches(board, minRun = 3) {
  const { cols, rows } = board;
  const matched = new Set();

  // Horizontal runs.
  for (let r = 0; r < rows; r++) {
    let runStart = 0;
    for (let c = 1; c <= cols; c++) {
      const prev = c > 0 ? getCell(board, c - 1, r) : EMPTY;
      const cur = c < cols ? getCell(board, c, r) : EMPTY;
      const breakRun = c === cols || cur !== prev || cur === EMPTY;
      if (breakRun) {
        const runLen = c - runStart;
        if (prev !== EMPTY && runLen >= minRun) {
          for (let k = runStart; k < c; k++) matched.add(idx(board, k, r));
        }
        runStart = c;
      }
    }
  }

  // Vertical runs.
  for (let c = 0; c < cols; c++) {
    let runStart = 0;
    for (let r = 1; r <= rows; r++) {
      const prev = r > 0 ? getCell(board, c, r - 1) : EMPTY;
      const cur = r < rows ? getCell(board, c, r) : EMPTY;
      const breakRun = r === rows || cur !== prev || cur === EMPTY;
      if (breakRun) {
        const runLen = r - runStart;
        if (prev !== EMPTY && runLen >= minRun) {
          for (let k = runStart; k < r; k++) matched.add(idx(board, c, k));
        }
        runStart = r;
      }
    }
  }

  return matched;
}

export function hasMatches(board, minRun = 3) {
  return findMatches(board, minRun).size > 0;
}

/** True if (a) and (b) are orthogonally adjacent cells. */
export function isAdjacent(a, b) {
  const dc = Math.abs(a.col - b.col);
  const dr = Math.abs(a.row - b.row);
  return dc + dr === 1;
}

/** Mutating swap of two cells (by col/row). */
export function swap(board, a, b) {
  const ia = idx(board, a.col, a.row);
  const ib = idx(board, b.col, b.row);
  const tmp = board.cells[ia];
  board.cells[ia] = board.cells[ib];
  board.cells[ib] = tmp;
}

/**
 * Would swapping a and b create at least one match? Non-mutating:
 * performs the swap on a clone, tests, and reports. Requires adjacency.
 */
export function isValidSwap(board, a, b, minRun = 3) {
  if (!inBounds(board, a.col, a.row) || !inBounds(board, b.col, b.row)) return false;
  if (!isAdjacent(a, b)) return false;
  if (getCell(board, a.col, a.row) === EMPTY || getCell(board, b.col, b.row) === EMPTY) {
    return false;
  }
  const clone = makeBoard(board.cols, board.rows, board.numColors, board.cells);
  swap(clone, a, b);
  return hasMatches(clone, minRun);
}

/**
 * Clear the given set of flat indices (set them EMPTY). Returns count cleared.
 */
export function clearCells(board, indices) {
  let n = 0;
  for (const i of indices) {
    if (board.cells[i] !== EMPTY) {
      board.cells[i] = EMPTY;
      n++;
    }
  }
  return n;
}

/**
 * Apply gravity: within each column, gems fall down into EMPTY cells below.
 * Returns an array of move records {col, fromRow, toRow} for animation.
 */
export function applyGravity(board) {
  const { cols, rows } = board;
  const moves = [];
  for (let c = 0; c < cols; c++) {
    let writeRow = rows - 1; // lowest empty slot we will fill, scanning upward
    for (let r = rows - 1; r >= 0; r--) {
      const v = getCell(board, c, r);
      if (v !== EMPTY) {
        if (writeRow !== r) {
          setCell(board, c, writeRow, v);
          setCell(board, c, r, EMPTY);
          moves.push({ col: c, fromRow: r, toRow: writeRow });
        }
        writeRow--;
      }
    }
  }
  return moves;
}

/**
 * Refill EMPTY cells from the top with fresh random gems.
 * Returns spawn records {col, row, color, spawnIndex} where spawnIndex counts
 * upward from 0 per column (0 = first/topmost newly created in that column,
 * highest index = appears lowest), useful to animate gems dropping in.
 */
export function refill(board, rng) {
  const { cols, rows, numColors } = board;
  const spawns = [];
  for (let c = 0; c < cols; c++) {
    // Count empties in this column.
    let empties = 0;
    for (let r = 0; r < rows; r++) if (getCell(board, c, r) === EMPTY) empties++;
    let made = 0;
    for (let r = 0; r < rows; r++) {
      if (getCell(board, c, r) === EMPTY) {
        const color = randColor(rng, numColors);
        setCell(board, c, r, color);
        // spawnIndex: top-most empty is the deepest drop; give increasing index
        spawns.push({ col: c, row: r, color, spawnIndex: empties - 1 - made });
        made++;
      }
    }
  }
  return spawns;
}

/**
 * Score for clearing `count` gems on cascade step `chain` (1-based).
 * 3 gems = 30 base; each extra gem in the step adds a rising bonus; the chain
 * multiplier rewards cascades. Tunable but kept simple and pure.
 */
export function scoreForClear(count, chain, base = 10) {
  // base per gem, with a small super-linear bonus for big clears.
  const gemPoints = count * base + Math.max(0, count - 3) * base;
  const chainMultiplier = chain; // step 1 = x1, step 2 = x2, ...
  return gemPoints * chainMultiplier;
}

/**
 * Fully resolve a board after a swap: repeatedly clear matches, apply gravity,
 * refill, until no matches remain. PURE w.r.t. the passed board? No — it mutates
 * `board` in place (that is the new committed state) and returns a step log so a
 * renderer can animate each cascade step. Logic-only; no timing.
 *
 * Returns {
 *   steps: [{ cleared:Set, clearedCount, moves:[...], spawns:[...], chain, gained }],
 *   totalGained, maxChain
 * }
 */
export function resolveBoard(board, rng, { minRun = 3, base = 10 } = {}) {
  const steps = [];
  let chain = 0;
  let totalGained = 0;

  while (true) {
    const matches = findMatches(board, minRun);
    if (matches.size === 0) break;
    chain++;
    const clearedCount = clearCells(board, matches);
    const gained = scoreForClear(clearedCount, chain, base);
    totalGained += gained;
    const moves = applyGravity(board);
    const spawns = refill(board, rng);
    steps.push({
      cleared: matches,
      clearedCount,
      moves,
      spawns,
      chain,
      gained,
    });
  }

  return { steps, totalGained, maxChain: chain };
}

/**
 * Build a starting board that has NO initial matches (so the first frame is
 * stable) but DOES contain at least one valid move (so the player isn't stuck).
 */
export function makeInitialBoard(cols, rows, numColors, rng) {
  const board = makeBoard(cols, rows, numColors);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let color;
      let guard = 0;
      do {
        color = randColor(rng, numColors);
        setCell(board, c, r, color);
        guard++;
      } while (createsImmediateMatch(board, c, r) && guard < 50);
    }
  }
  // Guarantee a move exists; if not, reshuffle.
  let guard = 0;
  while (!hasAnyValidMove(board, minRunDefault) && guard < 100) {
    reshuffle(board, rng);
    guard++;
  }
  return board;
}

const minRunDefault = 3;

/** Does the gem just placed at (c,r) complete a run of 3 looking up/left only? */
function createsImmediateMatch(board, c, r) {
  const v = getCell(board, c, r);
  if (v === EMPTY) return false;
  // up
  if (
    r >= 2 &&
    getCell(board, c, r - 1) === v &&
    getCell(board, c, r - 2) === v
  )
    return true;
  // left
  if (
    c >= 2 &&
    getCell(board, c - 1, r) === v &&
    getCell(board, c - 2, r) === v
  )
    return true;
  return false;
}

/** Is there at least one adjacent swap that yields a match? */
export function hasAnyValidMove(board, minRun = 3) {
  const { cols, rows } = board;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // try swap right and swap down (covers all adjacencies without dup)
      if (c + 1 < cols) {
        if (isValidSwap(board, { col: c, row: r }, { col: c + 1, row: r }, minRun)) {
          return true;
        }
      }
      if (r + 1 < rows) {
        if (isValidSwap(board, { col: c, row: r }, { col: c, row: r + 1 }, minRun)) {
          return true;
        }
      }
    }
  }
  return false;
}

/** Randomly re-color the whole board avoiding immediate matches. */
export function reshuffle(board, rng) {
  for (let r = 0; r < board.rows; r++) {
    for (let c = 0; c < board.cols; c++) {
      let color;
      let guard = 0;
      do {
        color = randColor(rng, board.numColors);
        setCell(board, c, r, color);
        guard++;
      } while (createsImmediateMatch(board, c, r) && guard < 50);
    }
  }
  return board;
}
