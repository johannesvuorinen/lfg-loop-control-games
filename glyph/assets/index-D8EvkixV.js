(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const io="171",hu=0,No=1,du=2,rc=1,pu=2,yn=3,zn=0,Bt=1,sn=2,Bn=0,Ui=1,Oo=2,Bo=3,ko=4,mu=5,Qn=100,gu=101,_u=102,vu=103,xu=104,Mu=200,Su=201,yu=202,Eu=203,fs=204,hs=205,Tu=206,bu=207,Au=208,wu=209,Ru=210,Cu=211,Uu=212,Du=213,Pu=214,ds=0,ps=1,ms=2,Li=3,gs=4,_s=5,vs=6,xs=7,ac=0,Lu=1,Iu=2,kn=0,Fu=1,Nu=2,Ou=3,sc=4,Bu=5,ku=6,zu=7,oc=300,Ii=301,Fi=302,Ms=303,Ss=304,ma=306,ys=1e3,ei=1001,Es=1002,cn=1003,Gu=1004,wr=1005,Jt=1006,Da=1007,ti=1008,wn=1009,lc=1010,cc=1011,_r=1012,ro=1013,ii=1014,Tn=1015,xr=1016,ao=1017,so=1018,Ni=1020,uc=35902,fc=1021,hc=1022,ln=1023,dc=1024,pc=1025,Di=1026,Oi=1027,mc=1028,oo=1029,gc=1030,lo=1031,co=1033,$r=33776,ea=33777,ta=33778,na=33779,Ts=35840,bs=35841,As=35842,ws=35843,Rs=36196,Cs=37492,Us=37496,Ds=37808,Ps=37809,Ls=37810,Is=37811,Fs=37812,Ns=37813,Os=37814,Bs=37815,ks=37816,zs=37817,Gs=37818,Vs=37819,Hs=37820,Ws=37821,ia=36492,Xs=36494,Ys=36495,_c=36283,qs=36284,js=36285,Ks=36286,Vu=3200,vc=3201,xc=0,Hu=1,On="",Wt="srgb",Bi="srgb-linear",la="linear",at="srgb",fi=7680,zo=519,Wu=512,Xu=513,Yu=514,Mc=515,qu=516,ju=517,Ku=518,Zu=519,Go=35044,Vo="300 es",bn=2e3,ca=2001;class zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const n=r.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ho=1234567;const dr=Math.PI/180,vr=180/Math.PI;function Gi(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rt[a&255]+Rt[a>>8&255]+Rt[a>>16&255]+Rt[a>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[r&255]+Rt[r>>8&255]+Rt[r>>16&255]+Rt[r>>24&255]).toLowerCase()}function $e(a,e,t){return Math.max(e,Math.min(t,a))}function uo(a,e){return(a%e+e)%e}function Ju(a,e,t,r,n){return r+(a-e)*(n-r)/(t-e)}function Qu(a,e,t){return a!==e?(t-a)/(e-a):0}function pr(a,e,t){return(1-t)*a+t*e}function $u(a,e,t,r){return pr(a,e,1-Math.exp(-t*r))}function ef(a,e=1){return e-Math.abs(uo(a,e*2)-e)}function tf(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function nf(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function rf(a,e){return a+Math.floor(Math.random()*(e-a+1))}function af(a,e){return a+Math.random()*(e-a)}function sf(a){return a*(.5-Math.random())}function of(a){a!==void 0&&(Ho=a);let e=Ho+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lf(a){return a*dr}function cf(a){return a*vr}function uf(a){return(a&a-1)===0&&a!==0}function ff(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function hf(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function df(a,e,t,r,n){const i=Math.cos,s=Math.sin,o=i(t/2),l=s(t/2),c=i((e+r)/2),u=s((e+r)/2),h=i((e-r)/2),f=s((e-r)/2),d=i((r-e)/2),g=s((r-e)/2);switch(n){case"XYX":a.set(o*u,l*h,l*f,o*c);break;case"YZY":a.set(l*f,o*u,l*h,o*c);break;case"ZXZ":a.set(l*h,l*f,o*u,o*c);break;case"XZX":a.set(o*u,l*g,l*d,o*c);break;case"YXY":a.set(l*d,o*u,l*g,o*c);break;case"ZYZ":a.set(l*g,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Ai(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Ut(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const pf={DEG2RAD:dr,RAD2DEG:vr,generateUUID:Gi,clamp:$e,euclideanModulo:uo,mapLinear:Ju,inverseLerp:Qu,lerp:pr,damp:$u,pingpong:ef,smoothstep:tf,smootherstep:nf,randInt:rf,randFloat:af,randFloatSpread:sf,seededRandom:of,degToRad:lf,radToDeg:cf,isPowerOfTwo:uf,ceilPowerOfTwo:ff,floorPowerOfTwo:hf,setQuaternionFromProperEuler:df,normalize:Ut,denormalize:Ai};class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar($e(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos($e(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),i=this.x-e.x,s=this.y-e.y;return this.x=i*r-s*n+e.x,this.y=i*n+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,r,n,i,s,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,s,o,l,c)}set(e,t,r,n,i,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=i,u[5]=l,u[6]=r,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,s=r[0],o=r[3],l=r[6],c=r[1],u=r[4],h=r[7],f=r[2],d=r[5],g=r[8],_=n[0],m=n[3],p=n[6],E=n[1],S=n[4],x=n[7],w=n[2],C=n[5],b=n[8];return i[0]=s*_+o*E+l*w,i[3]=s*m+o*S+l*C,i[6]=s*p+o*x+l*b,i[1]=c*_+u*E+h*w,i[4]=c*m+u*S+h*C,i[7]=c*p+u*x+h*b,i[2]=f*_+d*E+g*w,i[5]=f*m+d*S+g*C,i[8]=f*p+d*x+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-r*i*u+r*o*l+n*i*c-n*s*l}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*s-o*c,f=o*l-u*i,d=c*i-s*l,g=t*h+r*f+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(n*c-u*r)*_,e[2]=(o*r-n*s)*_,e[3]=f*_,e[4]=(u*t-n*l)*_,e[5]=(n*i-o*t)*_,e[6]=d*_,e[7]=(r*l-c*t)*_,e[8]=(s*t-r*i)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,i,s,o){const l=Math.cos(i),c=Math.sin(i);return this.set(r*l,r*c,-r*(l*s+c*o)+s+e,-n*c,n*l,-n*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Pa.makeScale(e,t)),this}rotate(e){return this.premultiply(Pa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pa=new Xe;function Sc(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function ua(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function mf(){const a=ua("canvas");return a.style.display="block",a}const Wo={};function wi(a){a in Wo||(Wo[a]=!0,console.warn(a))}function gf(a,e,t){return new Promise(function(r,n){function i(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:n();break;case a.TIMEOUT_EXPIRED:setTimeout(i,t);break;default:r()}}setTimeout(i,t)})}function _f(a){const e=a.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vf(a){const e=a.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Xo=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yo=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xf(){const a={enabled:!0,workingColorSpace:Bi,spaces:{},convert:function(n,i,s){return this.enabled===!1||i===s||!i||!s||(this.spaces[i].transfer===at&&(n.r=An(n.r),n.g=An(n.g),n.b=An(n.b)),this.spaces[i].primaries!==this.spaces[s].primaries&&(n.applyMatrix3(this.spaces[i].toXYZ),n.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===at&&(n.r=Pi(n.r),n.g=Pi(n.g),n.b=Pi(n.b))),n},fromWorkingColorSpace:function(n,i){return this.convert(n,this.workingColorSpace,i)},toWorkingColorSpace:function(n,i){return this.convert(n,i,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===On?la:this.spaces[n].transfer},getLuminanceCoefficients:function(n,i=this.workingColorSpace){return n.fromArray(this.spaces[i].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,i,s){return n.copy(this.spaces[i].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Bi]:{primaries:e,whitePoint:r,transfer:la,toXYZ:Xo,fromXYZ:Yo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:r,transfer:at,toXYZ:Xo,fromXYZ:Yo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),a}const it=xf();function An(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Pi(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let hi;class Mf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hi===void 0&&(hi=ua("canvas")),hi.width=e.width,hi.height=e.height;const r=hi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=hi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ua("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),i=n.data;for(let s=0;s<i.length;s++)i[s]=An(i[s]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(An(t[r]/255)*255):t[r]=An(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sf=0;class yc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Gi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let i;if(Array.isArray(n)){i=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?i.push(La(n[s].image)):i.push(La(n[s]))}else i=La(n);r.url=i}return t||(e.images[this.uuid]=r),r}}function La(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Mf.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yf=0;class Pt extends zi{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,r=ei,n=ei,i=Jt,s=ti,o=ln,l=wn,c=Pt.DEFAULT_ANISOTROPY,u=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Gi(),this.name="",this.source=new yc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=i,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ys:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case Es:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ys:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case Es:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=oc;Pt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,r=0,n=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*n+s[12]*i,this.y=s[1]*t+s[5]*r+s[9]*n+s[13]*i,this.z=s[2]*t+s[6]*r+s[10]*n+s[14]*i,this.w=s[3]*t+s[7]*r+s[11]*n+s[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,i;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,x=(d+1)/2,w=(p+1)/2,C=(u+f)/4,b=(h+_)/4,R=(g+m)/4;return S>x&&S>w?S<.01?(r=0,n=.707106781,i=.707106781):(r=Math.sqrt(S),n=C/r,i=b/r):x>w?x<.01?(r=.707106781,n=0,i=.707106781):(n=Math.sqrt(x),r=C/n,i=R/n):w<.01?(r=.707106781,n=.707106781,i=0):(i=Math.sqrt(w),r=b/i,n=R/i),this.set(r,n,i,t),this}let E=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-_)/E,this.z=(f-u)/E,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar($e(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ef extends zi{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const n={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const i=new Pt(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);i.flipY=!1,i.generateMipmaps=r.generateMipmaps,i.internalFormat=r.internalFormat,this.textures=[];const s=r.count;for(let o=0;o<s;o++)this.textures[o]=i.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let n=0,i=this.textures.length;n<i;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,n=e.textures.length;r<n;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends Ef{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Ec extends Pt{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=cn,this.minFilter=cn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tf extends Pt{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=cn,this.minFilter=cn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vi{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,i,s,o){let l=r[n+0],c=r[n+1],u=r[n+2],h=r[n+3];const f=i[s+0],d=i[s+1],g=i[s+2],_=i[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-o;const p=l*f+c*d+u*g+h*_,E=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const w=Math.sqrt(S),C=Math.atan2(w,p*E);m=Math.sin(m*C)/w,o=Math.sin(o*C)/w}const x=o*E;if(l=l*m+f*x,c=c*m+d*x,u=u*m+g*x,h=h*m+_*x,m===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,r,n,i,s){const o=r[n],l=r[n+1],c=r[n+2],u=r[n+3],h=i[s],f=i[s+1],d=i[s+2],g=i[s+3];return e[t]=o*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-o*d,e[t+2]=c*g+u*d+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,n=e._y,i=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(r/2),u=o(n/2),h=o(i/2),f=l(r/2),d=l(n/2),g=l(i/2);switch(s){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],i=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=r+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(i-c)*d,this._z=(s-n)*d}else if(r>o&&r>h){const d=2*Math.sqrt(1+r-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(n+s)/d,this._z=(i+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-r-h);this._w=(i-c)/d,this._x=(n+s)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-r-o);this._w=(s-n)/d,this._x=(i+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,i=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=r*u+s*o+n*c-i*l,this._y=n*u+s*l+i*o-r*c,this._z=i*u+s*c+r*l-n*o,this._w=s*u-r*o-n*l-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,n=this._y,i=this._z,s=this._w;let o=s*e._w+r*e._x+n*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=r,this._y=n,this._z=i,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*s+t*this._w,this._x=d*r+t*this._x,this._y=d*n+t*this._y,this._z=d*i+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=s*h+this._w*f,this._x=r*h+this._x*f,this._y=n*h+this._y*f,this._z=i*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),n=Math.sqrt(1-r),i=Math.sqrt(r);return this.set(n*Math.sin(e),n*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,r=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6]*n,this.y=i[1]*t+i[4]*r+i[7]*n,this.z=i[2]*t+i[5]*r+i[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=e.elements,s=1/(i[3]*t+i[7]*r+i[11]*n+i[15]);return this.x=(i[0]*t+i[4]*r+i[8]*n+i[12])*s,this.y=(i[1]*t+i[5]*r+i[9]*n+i[13])*s,this.z=(i[2]*t+i[6]*r+i[10]*n+i[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,i=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*n-o*r),u=2*(o*t-i*n),h=2*(i*r-s*t);return this.x=t+l*c+s*h-o*u,this.y=r+l*u+o*c-i*h,this.z=n+l*h+i*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[4]*r+i[8]*n,this.y=i[1]*t+i[5]*r+i[9]*n,this.z=i[2]*t+i[6]*r+i[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar($e(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,i=e.z,s=t.x,o=t.y,l=t.z;return this.x=n*l-i*o,this.y=i*s-r*l,this.z=r*o-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ia.copy(this).projectOnVector(e),this.sub(Ia)}reflect(e){return this.sub(Ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos($e(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ia=new X,qo=new Vi;class ai{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const i=r.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=i.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,nn):nn.fromBufferAttribute(i,s),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rr.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Rr.copy(r.boundingBox)),Rr.applyMatrix4(e.matrixWorld),this.union(Rr)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),Cr.subVectors(this.max,nr),di.subVectors(e.a,nr),pi.subVectors(e.b,nr),mi.subVectors(e.c,nr),Dn.subVectors(pi,di),Pn.subVectors(mi,pi),Hn.subVectors(di,mi);let t=[0,-Dn.z,Dn.y,0,-Pn.z,Pn.y,0,-Hn.z,Hn.y,Dn.z,0,-Dn.x,Pn.z,0,-Pn.x,Hn.z,0,-Hn.x,-Dn.y,Dn.x,0,-Pn.y,Pn.x,0,-Hn.y,Hn.x,0];return!Fa(t,di,pi,mi,Cr)||(t=[1,0,0,0,1,0,0,0,1],!Fa(t,di,pi,mi,Cr))?!1:(Ur.crossVectors(Dn,Pn),t=[Ur.x,Ur.y,Ur.z],Fa(t,di,pi,mi,Cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _n=[new X,new X,new X,new X,new X,new X,new X,new X],nn=new X,Rr=new ai,di=new X,pi=new X,mi=new X,Dn=new X,Pn=new X,Hn=new X,nr=new X,Cr=new X,Ur=new X,Wn=new X;function Fa(a,e,t,r,n){for(let i=0,s=a.length-3;i<=s;i+=3){Wn.fromArray(a,i);const o=n.x*Math.abs(Wn.x)+n.y*Math.abs(Wn.y)+n.z*Math.abs(Wn.z),l=e.dot(Wn),c=t.dot(Wn),u=r.dot(Wn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const bf=new ai,ir=new X,Na=new X;class Mr{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):bf.setFromPoints(e).getCenter(r);let n=0;for(let i=0,s=e.length;i<s;i++)n=Math.max(n,r.distanceToSquared(e[i]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);const t=ir.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(ir,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Na.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(Na)),this.expandByPoint(ir.copy(e.center).sub(Na))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vn=new X,Oa=new X,Dr=new X,Ln=new X,Ba=new X,Pr=new X,ka=new X;class Tc{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){Oa.copy(e).add(t).multiplyScalar(.5),Dr.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(Oa);const i=e.distanceTo(t)*.5,s=-this.direction.dot(Dr),o=Ln.dot(this.direction),l=-Ln.dot(Dr),c=Ln.lengthSq(),u=Math.abs(1-s*s);let h,f,d,g;if(u>0)if(h=s*l-o,f=s*o-l,g=i*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+s*f+2*o)+f*(s*h+f+2*l)+c}else f=i,h=Math.max(0,-(s*f+o)),d=-h*h+f*(f+2*l)+c;else f=-i,h=Math.max(0,-(s*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-s*i+o)),f=h>0?-i:Math.min(Math.max(-i,-l),i),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-i,-l),i),d=f*(f+2*l)+c):(h=Math.max(0,-(s*i+o)),f=h>0?i:Math.min(Math.max(-i,-l),i),d=-h*h+f*(f+2*l)+c);else f=s>0?-i:i,h=Math.max(0,-(s*f+o)),d=-h*h+f*(f+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(Oa).addScaledVector(Dr,f),d}intersectSphere(e,t){vn.subVectors(e.center,this.origin);const r=vn.dot(this.direction),n=vn.dot(vn)-r*r,i=e.radius*e.radius;if(n>i)return null;const s=Math.sqrt(i-n),o=r-s,l=r+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,i,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(r=(e.min.x-f.x)*c,n=(e.max.x-f.x)*c):(r=(e.max.x-f.x)*c,n=(e.min.x-f.x)*c),u>=0?(i=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(i=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),r>s||i>n||((i>r||isNaN(r))&&(r=i),(s<n||isNaN(n))&&(n=s),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),r>l||o>n)||((o>r||r!==r)&&(r=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,r,n,i){Ba.subVectors(t,e),Pr.subVectors(r,e),ka.crossVectors(Ba,Pr);let s=this.direction.dot(ka),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Ln.subVectors(this.origin,e);const l=o*this.direction.dot(Pr.crossVectors(Ln,Pr));if(l<0)return null;const c=o*this.direction.dot(Ba.cross(Ln));if(c<0||l+c>s)return null;const u=-o*Ln.dot(ka);return u<0?null:this.at(u/s,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,r,n,i,s,o,l,c,u,h,f,d,g,_,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,s,o,l,c,u,h,f,d,g,_,m)}set(e,t,r,n,i,s,o,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=r,p[12]=n,p[1]=i,p[5]=s,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/gi.setFromMatrixColumn(e,0).length(),i=1/gi.setFromMatrixColumn(e,1).length(),s=1/gi.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*i,t[5]=r[5]*i,t[6]=r[6]*i,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,i=e.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(n),c=Math.sin(n),u=Math.cos(i),h=Math.sin(i);if(e.order==="XYZ"){const f=s*u,d=s*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*o,t[4]=g*o-d,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=s*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*o,t[4]=-s*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=s*u,t[9]=_-f*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const f=s*u,d=s*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,d=s*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=s*l,d=s*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=s*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Af,e,wf)}lookAt(e,t,r){const n=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),In.crossVectors(r,Vt),In.lengthSq()===0&&(Math.abs(r.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),In.crossVectors(r,Vt)),In.normalize(),Lr.crossVectors(Vt,In),n[0]=In.x,n[4]=Lr.x,n[8]=Vt.x,n[1]=In.y,n[5]=Lr.y,n[9]=Vt.y,n[2]=In.z,n[6]=Lr.z,n[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,s=r[0],o=r[4],l=r[8],c=r[12],u=r[1],h=r[5],f=r[9],d=r[13],g=r[2],_=r[6],m=r[10],p=r[14],E=r[3],S=r[7],x=r[11],w=r[15],C=n[0],b=n[4],R=n[8],y=n[12],v=n[1],D=n[5],U=n[9],P=n[13],N=n[2],q=n[6],G=n[10],Q=n[14],Y=n[3],K=n[7],j=n[11],I=n[15];return i[0]=s*C+o*v+l*N+c*Y,i[4]=s*b+o*D+l*q+c*K,i[8]=s*R+o*U+l*G+c*j,i[12]=s*y+o*P+l*Q+c*I,i[1]=u*C+h*v+f*N+d*Y,i[5]=u*b+h*D+f*q+d*K,i[9]=u*R+h*U+f*G+d*j,i[13]=u*y+h*P+f*Q+d*I,i[2]=g*C+_*v+m*N+p*Y,i[6]=g*b+_*D+m*q+p*K,i[10]=g*R+_*U+m*G+p*j,i[14]=g*y+_*P+m*Q+p*I,i[3]=E*C+S*v+x*N+w*Y,i[7]=E*b+S*D+x*q+w*K,i[11]=E*R+S*U+x*G+w*j,i[15]=E*y+S*P+x*Q+w*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],i=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+i*l*h-n*c*h-i*o*f+r*c*f+n*o*d-r*l*d)+_*(+t*l*d-t*c*f+i*s*f-n*s*d+n*c*u-i*l*u)+m*(+t*c*h-t*o*d-i*s*h+r*s*d+i*o*u-r*c*u)+p*(-n*o*u-t*l*h+t*o*f+n*s*h-r*s*f+r*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],E=h*m*c-_*f*c+_*l*d-o*m*d-h*l*p+o*f*p,S=g*f*c-u*m*c-g*l*d+s*m*d+u*l*p-s*f*p,x=u*_*c-g*h*c+g*o*d-s*_*d-u*o*p+s*h*p,w=g*h*l-u*_*l-g*o*f+s*_*f+u*o*m-s*h*m,C=t*E+r*S+n*x+i*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=E*b,e[1]=(_*f*i-h*m*i-_*n*d+r*m*d+h*n*p-r*f*p)*b,e[2]=(o*m*i-_*l*i+_*n*c-r*m*c-o*n*p+r*l*p)*b,e[3]=(h*l*i-o*f*i-h*n*c+r*f*c+o*n*d-r*l*d)*b,e[4]=S*b,e[5]=(u*m*i-g*f*i+g*n*d-t*m*d-u*n*p+t*f*p)*b,e[6]=(g*l*i-s*m*i-g*n*c+t*m*c+s*n*p-t*l*p)*b,e[7]=(s*f*i-u*l*i+u*n*c-t*f*c-s*n*d+t*l*d)*b,e[8]=x*b,e[9]=(g*h*i-u*_*i-g*r*d+t*_*d+u*r*p-t*h*p)*b,e[10]=(s*_*i-g*o*i+g*r*c-t*_*c-s*r*p+t*o*p)*b,e[11]=(u*o*i-s*h*i-u*r*c+t*h*c+s*r*d-t*o*d)*b,e[12]=w*b,e[13]=(u*_*n-g*h*n+g*r*f-t*_*f-u*r*m+t*h*m)*b,e[14]=(g*o*n-s*_*n-g*r*l+t*_*l+s*r*m-t*o*m)*b,e[15]=(s*h*n-u*o*n+u*r*l-t*h*l-s*r*f+t*o*f)*b,this}scale(e){const t=this.elements,r=e.x,n=e.y,i=e.z;return t[0]*=r,t[4]*=n,t[8]*=i,t[1]*=r,t[5]*=n,t[9]*=i,t[2]*=r,t[6]*=n,t[10]*=i,t[3]*=r,t[7]*=n,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),i=1-r,s=e.x,o=e.y,l=e.z,c=i*s,u=i*o;return this.set(c*s+r,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+r,u*l-n*s,0,c*l-n*o,u*l+n*s,i*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,i,s){return this.set(1,r,i,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,i=t._x,s=t._y,o=t._z,l=t._w,c=i+i,u=s+s,h=o+o,f=i*c,d=i*u,g=i*h,_=s*u,m=s*h,p=o*h,E=l*c,S=l*u,x=l*h,w=r.x,C=r.y,b=r.z;return n[0]=(1-(_+p))*w,n[1]=(d+x)*w,n[2]=(g-S)*w,n[3]=0,n[4]=(d-x)*C,n[5]=(1-(f+p))*C,n[6]=(m+E)*C,n[7]=0,n[8]=(g+S)*b,n[9]=(m-E)*b,n[10]=(1-(f+_))*b,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let i=gi.set(n[0],n[1],n[2]).length();const s=gi.set(n[4],n[5],n[6]).length(),o=gi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(i=-i),e.x=n[12],e.y=n[13],e.z=n[14],rn.copy(this);const c=1/i,u=1/s,h=1/o;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=h,rn.elements[9]*=h,rn.elements[10]*=h,t.setFromRotationMatrix(rn),r.x=i,r.y=s,r.z=o,this}makePerspective(e,t,r,n,i,s,o=bn){const l=this.elements,c=2*i/(t-e),u=2*i/(r-n),h=(t+e)/(t-e),f=(r+n)/(r-n);let d,g;if(o===bn)d=-(s+i)/(s-i),g=-2*s*i/(s-i);else if(o===ca)d=-s/(s-i),g=-s*i/(s-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,n,i,s,o=bn){const l=this.elements,c=1/(t-e),u=1/(r-n),h=1/(s-i),f=(t+e)*c,d=(r+n)*u;let g,_;if(o===bn)g=(s+i)*h,_=-2*h;else if(o===ca)g=i*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const gi=new X,rn=new ut,Af=new X(0,0,0),wf=new X(1,1,1),In=new X,Lr=new X,Vt=new X,jo=new ut,Ko=new Vi;class mn{constructor(e=0,t=0,r=0,n=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,i=n[0],s=n[4],o=n[8],l=n[1],c=n[5],u=n[9],h=n[2],f=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-s,i)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,i),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,i)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-$e(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return jo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jo,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ko.setFromEuler(this),this.setFromQuaternion(Ko,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class bc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rf=0;const Zo=new X,_i=new Vi,xn=new ut,Ir=new X,rr=new X,Cf=new X,Uf=new Vi,Jo=new X(1,0,0),Qo=new X(0,1,0),$o=new X(0,0,1),el={type:"added"},Df={type:"removed"},vi={type:"childadded",child:null},za={type:"childremoved",child:null};class St extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new X,t=new mn,r=new Vi,n=new X(1,1,1);function i(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(i),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ut},normalMatrix:{value:new Xe}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.multiply(_i),this}rotateOnWorldAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.premultiply(_i),this}rotateX(e){return this.rotateOnAxis(Jo,e)}rotateY(e){return this.rotateOnAxis(Qo,e)}rotateZ(e){return this.rotateOnAxis($o,e)}translateOnAxis(e,t){return Zo.copy(e).applyQuaternion(this.quaternion),this.position.add(Zo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jo,e)}translateY(e){return this.translateOnAxis(Qo,e)}translateZ(e){return this.translateOnAxis($o,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Ir.copy(e):Ir.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(rr,Ir,this.up):xn.lookAt(Ir,rr,this.up),this.quaternion.setFromRotationMatrix(xn),n&&(xn.extractRotation(n.matrixWorld),_i.setFromRotationMatrix(xn),this.quaternion.premultiply(_i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(el),vi.child=e,this.dispatchEvent(vi),vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Df),za.child=e,this.dispatchEvent(za),za.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(el),vi.child=e,this.dispatchEvent(vi),vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const s=this.children[r].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,Cf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,Uf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function i(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=i(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];i(e.shapes,h)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(i(e.materials,this.material[l]));n.material=o}else n.material=i(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(i(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),f=s(e.skeletons),d=s(e.animations),g=s(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),h.length>0&&(r.shapes=h),f.length>0&&(r.skeletons=f),d.length>0&&(r.animations=d),g.length>0&&(r.nodes=g)}return r.object=n,r;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}St.DEFAULT_UP=new X(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new X,Mn=new X,Ga=new X,Sn=new X,xi=new X,Mi=new X,tl=new X,Va=new X,Ha=new X,Wa=new X,Xa=new rt,Ya=new rt,qa=new rt;class on{constructor(e=new X,t=new X,r=new X){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),an.subVectors(e,t),n.cross(an);const i=n.lengthSq();return i>0?n.multiplyScalar(1/Math.sqrt(i)):n.set(0,0,0)}static getBarycoord(e,t,r,n,i){an.subVectors(n,t),Mn.subVectors(r,t),Ga.subVectors(e,t);const s=an.dot(an),o=an.dot(Mn),l=an.dot(Ga),c=Mn.dot(Mn),u=Mn.dot(Ga),h=s*c-o*o;if(h===0)return i.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,g=(s*u-o*l)*f;return i.set(1-d-g,g,d)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(e,t,r,n,i,s,o,l){return this.getBarycoord(e,t,r,n,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(i,Sn.x),l.addScaledVector(s,Sn.y),l.addScaledVector(o,Sn.z),l)}static getInterpolatedAttribute(e,t,r,n,i,s){return Xa.setScalar(0),Ya.setScalar(0),qa.setScalar(0),Xa.fromBufferAttribute(e,t),Ya.fromBufferAttribute(e,r),qa.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(Xa,i.x),s.addScaledVector(Ya,i.y),s.addScaledVector(qa,i.z),s}static isFrontFacing(e,t,r,n){return an.subVectors(r,t),Mn.subVectors(e,t),an.cross(Mn).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),an.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,n,i){return on.getInterpolation(e,this.a,this.b,this.c,t,r,n,i)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,i=this.c;let s,o;xi.subVectors(n,r),Mi.subVectors(i,r),Va.subVectors(e,r);const l=xi.dot(Va),c=Mi.dot(Va);if(l<=0&&c<=0)return t.copy(r);Ha.subVectors(e,n);const u=xi.dot(Ha),h=Mi.dot(Ha);if(u>=0&&h<=u)return t.copy(n);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(r).addScaledVector(xi,s);Wa.subVectors(e,i);const d=xi.dot(Wa),g=Mi.dot(Wa);if(g>=0&&d<=g)return t.copy(i);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(r).addScaledVector(Mi,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return tl.subVectors(i,n),o=(h-u)/(h-u+(d-g)),t.copy(n).addScaledVector(tl,o);const p=1/(m+_+f);return s=_*p,o=f*p,t.copy(r).addScaledVector(xi,s).addScaledVector(Mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ac={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function ja(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class qe{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,r,n=it.workingColorSpace){return this.r=e,this.g=t,this.b=r,it.toWorkingColorSpace(this,n),this}setHSL(e,t,r,n=it.workingColorSpace){if(e=uo(e,1),t=$e(t,0,1),r=$e(r,0,1),t===0)this.r=this.g=this.b=r;else{const i=r<=.5?r*(1+t):r+t-r*t,s=2*r-i;this.r=ja(s,i,e+1/3),this.g=ja(s,i,e),this.b=ja(s,i,e-1/3)}return it.toWorkingColorSpace(this,n),this}setStyle(e,t=Wt){function r(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],s=i.length;if(s===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const r=Ac[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}copyLinearToSRGB(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return it.fromWorkingColorSpace(Ct.copy(this),e),Math.round($e(Ct.r*255,0,255))*65536+Math.round($e(Ct.g*255,0,255))*256+Math.round($e(Ct.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Ct.copy(this),t);const r=Ct.r,n=Ct.g,i=Ct.b,s=Math.max(r,n,i),o=Math.min(r,n,i);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=u<=.5?h/(s+o):h/(2-s-o),s){case r:l=(n-i)/h+(n<i?6:0);break;case n:l=(i-r)/h+2;break;case i:l=(r-n)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Wt){it.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,r=Ct.g,n=Ct.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(Fn),this.setHSL(Fn.h+e,Fn.s+t,Fn.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(Fr);const r=pr(Fn.h,Fr.h,t),n=pr(Fn.s,Fr.s,t),i=pr(Fn.l,Fr.l,t);return this.setHSL(r,n,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,n=this.b,i=e.elements;return this.r=i[0]*t+i[3]*r+i[6]*n,this.g=i[1]*t+i[4]*r+i[7]*n,this.b=i[2]*t+i[5]*r+i[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new qe;qe.NAMES=Ac;let Pf=0;class Hi extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=Ui,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fs,this.blendDst=hs,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Li,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(r.blending=this.blending),this.side!==zn&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==fs&&(r.blendSrc=this.blendSrc),this.blendDst!==hs&&(r.blendDst=this.blendDst),this.blendEquation!==Qn&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Li&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zo&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(r.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(i){const s=[];for(const o in i){const l=i[o];delete l.metadata,s.push(l)}return s}if(t){const i=n(e.textures),s=n(e.images);i.length>0&&(r.textures=i),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let i=0;i!==n;++i)r[i]=t[i].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Sr extends Hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new X,Nr=new Ze;class un{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Go,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,i=this.itemSize;n<i;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Nr.fromBufferAttribute(this,t),Nr.applyMatrix3(e),this.setXY(t,Nr.x,Nr.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ai(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ut(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),r=Ut(r,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),r=Ut(r,this.array),n=Ut(n,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Go&&(e.usage=this.usage),e}}class wc extends un{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Rc extends un{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class ht extends un{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Lf=0;const Kt=new ut,Ka=new St,Si=new X,Ht=new ai,ar=new ai,Mt=new X;class kt extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sc(e)?Rc:wc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const i=new Xe().getNormalMatrix(e);r.applyNormalMatrix(i),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,r){return Kt.makeTranslation(e,t,r),this.applyMatrix4(Kt),this}scale(e,t,r){return Kt.makeScale(e,t,r),this.applyMatrix4(Kt),this}lookAt(e){return Ka.lookAt(e),Ka.updateMatrix(),this.applyMatrix4(Ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new ht(r,3))}else{const r=Math.min(e.length,t.count);for(let n=0;n<r;n++){const i=e[n];t.setXYZ(n,i.x,i.y,i.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const i=t[r];Ht.setFromBufferAttribute(i),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const r=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];ar.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Ht.min,ar.min),Ht.expandByPoint(Mt),Mt.addVectors(Ht.max,ar.max),Ht.expandByPoint(Mt)):(Ht.expandByPoint(ar.min),Ht.expandByPoint(ar.max))}Ht.getCenter(r);let n=0;for(let i=0,s=e.count;i<s;i++)Mt.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(Mt));if(t)for(let i=0,s=t.length;i<s;i++){const o=t[i],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Mt.fromBufferAttribute(o,c),l&&(Si.fromBufferAttribute(e,c),Mt.add(Si)),n=Math.max(n,r.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,n=t.normal,i=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*r.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<r.count;R++)o[R]=new X,l[R]=new X;const c=new X,u=new X,h=new X,f=new Ze,d=new Ze,g=new Ze,_=new X,m=new X;function p(R,y,v){c.fromBufferAttribute(r,R),u.fromBufferAttribute(r,y),h.fromBufferAttribute(r,v),f.fromBufferAttribute(i,R),d.fromBufferAttribute(i,y),g.fromBufferAttribute(i,v),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(D),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),o[R].add(_),o[y].add(_),o[v].add(_),l[R].add(m),l[y].add(m),l[v].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let R=0,y=E.length;R<y;++R){const v=E[R],D=v.start,U=v.count;for(let P=D,N=D+U;P<N;P+=3)p(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const S=new X,x=new X,w=new X,C=new X;function b(R){w.fromBufferAttribute(n,R),C.copy(w);const y=o[R];S.copy(y),S.sub(w.multiplyScalar(w.dot(y))).normalize(),x.crossVectors(C,y);const D=x.dot(l[R])<0?-1:1;s.setXYZW(R,S.x,S.y,S.z,D)}for(let R=0,y=E.length;R<y;++R){const v=E[R],D=v.start,U=v.count;for(let P=D,N=D+U;P<N;P+=3)b(e.getX(P+0)),b(e.getX(P+1)),b(e.getX(P+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let f=0,d=r.count;f<d;f++)r.setXYZ(f,0,0,0);const n=new X,i=new X,s=new X,o=new X,l=new X,c=new X,u=new X,h=new X;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);n.fromBufferAttribute(t,g),i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),u.subVectors(s,i),h.subVectors(n,i),u.cross(h),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,_),c.fromBufferAttribute(r,m),o.add(u),l.add(u),c.add(u),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(_,l.x,l.y,l.z),r.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)n.fromBufferAttribute(t,f+0),i.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,i),h.subVectors(n,i),u.cross(h),r.setXYZ(f+0,u.x,u.y,u.z),r.setXYZ(f+1,u.x,u.y,u.z),r.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new un(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,r=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,r);t.setAttribute(o,c)}const i=this.morphAttributes;for(const o in i){const l=[],c=i[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,r);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let i=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(n[l]=u,i=!0)}i&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const i=e.morphAttributes;for(const c in i){const u=[],h=i[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nl=new ut,Xn=new Tc,Or=new Mr,il=new X,Br=new X,kr=new X,zr=new X,Za=new X,Gr=new X,rl=new X,Vr=new X;class At extends St{constructor(e=new kt,t=new Sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){const o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,i=r.morphAttributes.position,s=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(i&&o){Gr.set(0,0,0);for(let l=0,c=i.length;l<c;l++){const u=o[l],h=i[l];u!==0&&(Za.fromBufferAttribute(h,e),s?Gr.addScaledVector(Za,u):Gr.addScaledVector(Za.sub(t),u))}t.add(Gr)}return t}raycast(e,t){const r=this.geometry,n=this.material,i=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Or.copy(r.boundingSphere),Or.applyMatrix4(i),Xn.copy(e.ray).recast(e.near),!(Or.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(Or,il)===null||Xn.origin.distanceToSquared(il)>(e.far-e.near)**2))&&(nl.copy(i).invert(),Xn.copy(e.ray).applyMatrix4(nl),!(r.boundingBox!==null&&Xn.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Xn)))}_computeIntersections(e,t,r){let n;const i=this.geometry,s=this.material,o=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv1,h=i.attributes.normal,f=i.groups,d=i.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=s[m.materialIndex],E=Math.max(m.start,d.start),S=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=E,w=S;x<w;x+=3){const C=o.getX(x),b=o.getX(x+1),R=o.getX(x+2);n=Hr(this,p,e,r,c,u,h,C,b,R),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=o.getX(m),S=o.getX(m+1),x=o.getX(m+2);n=Hr(this,s,e,r,c,u,h,E,S,x),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=s[m.materialIndex],E=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=E,w=S;x<w;x+=3){const C=x,b=x+1,R=x+2;n=Hr(this,p,e,r,c,u,h,C,b,R),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=m,S=m+1,x=m+2;n=Hr(this,s,e,r,c,u,h,E,S,x),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function If(a,e,t,r,n,i,s,o){let l;if(e.side===Bt?l=r.intersectTriangle(s,i,n,!0,o):l=r.intersectTriangle(n,i,s,e.side===zn,o),l===null)return null;Vr.copy(o),Vr.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(Vr);return c<t.near||c>t.far?null:{distance:c,point:Vr.clone(),object:a}}function Hr(a,e,t,r,n,i,s,o,l,c){a.getVertexPosition(o,Br),a.getVertexPosition(l,kr),a.getVertexPosition(c,zr);const u=If(a,e,t,r,Br,kr,zr,rl);if(u){const h=new X;on.getBarycoord(rl,Br,kr,zr,h),n&&(u.uv=on.getInterpolatedAttribute(n,o,l,c,h,new Ze)),i&&(u.uv1=on.getInterpolatedAttribute(i,o,l,c,h,new Ze)),s&&(u.normal=on.getInterpolatedAttribute(s,o,l,c,h,new X),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new X,materialIndex:0};on.getNormal(Br,kr,zr,f.normal),u.face=f,u.barycoord=h}return u}class Wi extends kt{constructor(e=1,t=1,r=1,n=1,i=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:i,depthSegments:s};const o=this;n=Math.floor(n),i=Math.floor(i),s=Math.floor(s);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,r,t,e,s,i,0),g("z","y","x",1,-1,r,t,-e,s,i,1),g("x","z","y",1,1,e,r,t,n,s,2),g("x","z","y",1,-1,e,r,-t,n,s,3),g("x","y","z",1,-1,e,t,r,n,i,4),g("x","y","z",-1,-1,e,t,-r,n,i,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(h,2));function g(_,m,p,E,S,x,w,C,b,R,y){const v=x/b,D=w/R,U=x/2,P=w/2,N=C/2,q=b+1,G=R+1;let Q=0,Y=0;const K=new X;for(let j=0;j<G;j++){const I=j*D-P;for(let V=0;V<q;V++){const ee=V*v-U;K[_]=ee*E,K[m]=I*S,K[p]=N,c.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[p]=C>0?1:-1,u.push(K.x,K.y,K.z),h.push(V/b),h.push(1-j/R),Q+=1}}for(let j=0;j<R;j++)for(let I=0;I<b;I++){const V=f+I+q*j,ee=f+I+q*(j+1),F=f+(I+1)+q*(j+1),k=f+(I+1)+q*j;l.push(V,ee,k),l.push(ee,F,k),Y+=6}o.addGroup(d,Y,y),d+=Y,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ki(a){const e={};for(const t in a){e[t]={};for(const r in a[t]){const n=a[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function Dt(a){const e={};for(let t=0;t<a.length;t++){const r=ki(a[t]);for(const n in r)e[n]=r[n]}return e}function Ff(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Cc(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Uc={clone:ki,merge:Dt};var Nf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Of=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends Hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nf,this.fragmentShader=Of,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ki(e.uniforms),this.uniformsGroups=Ff(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Dc extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=bn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nn=new X,al=new Ze,sl=new Ze;class Xt extends Dc{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z)}getViewSize(e,t){return this.getViewBounds(e,al,sl),t.subVectors(sl,al)}setViewOffset(e,t,r,n,i,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(dr*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,i=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;i+=s.offsetX*n/l,t-=s.offsetY*r/c,n*=s.width/l,r*=s.height/c}const o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+n,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const yi=-90,Ei=1;class Bf extends St{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Xt(yi,Ei,e,t);n.layers=this.layers,this.add(n);const i=new Xt(yi,Ei,e,t);i.layers=this.layers,this.add(i);const s=new Xt(yi,Ei,e,t);s.layers=this.layers,this.add(s);const o=new Xt(yi,Ei,e,t);o.layers=this.layers,this.add(o);const l=new Xt(yi,Ei,e,t);l.layers=this.layers,this.add(l);const c=new Xt(yi,Ei,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,n,i,s,o,l]=t;for(const c of t)this.remove(c);if(e===bn)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ca)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,s,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(t,i),e.setRenderTarget(r,1,n),e.render(t,s),e.setRenderTarget(r,2,n),e.render(t,o),e.setRenderTarget(r,3,n),e.render(t,l),e.setRenderTarget(r,4,n),e.render(t,c),r.texture.generateMipmaps=_,e.setRenderTarget(r,5,n),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,r.texture.needsPMREMUpdate=!0}}class Pc extends Pt{constructor(e,t,r,n,i,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ii,super(e,t,r,n,i,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kf extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];this.texture=new Pc(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Wi(5,5,5),i=new Gn({name:"CubemapFromEquirect",uniforms:ki(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bt,blending:Bn});i.uniforms.tEquirect.value=t;const s=new At(n,i),o=t.minFilter;return t.minFilter===ti&&(t.minFilter=Jt),new Bf(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,r,n){const i=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,n);e.setRenderTarget(i)}}class fo{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new qe(e),this.near=t,this.far=r}clone(){return new fo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class zf extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Gf extends un{constructor(e,t,r,n=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ja=new X,Vf=new X,Hf=new Xe;class Zn{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=Ja.subVectors(r,t).cross(Vf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Ja),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/n;return i<0||i>1?null:t.copy(e.start).addScaledVector(r,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Hf.getNormalMatrix(e),n=this.coplanarPoint(Ja).applyMatrix4(e),i=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yn=new Mr,Wr=new X;class ho{constructor(e=new Zn,t=new Zn,r=new Zn,n=new Zn,i=new Zn,s=new Zn){this.planes=[e,t,r,n,i,s]}set(e,t,r,n,i,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(n),o[4].copy(i),o[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=bn){const r=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],l=n[3],c=n[4],u=n[5],h=n[6],f=n[7],d=n[8],g=n[9],_=n[10],m=n[11],p=n[12],E=n[13],S=n[14],x=n[15];if(r[0].setComponents(l-i,f-c,m-d,x-p).normalize(),r[1].setComponents(l+i,f+c,m+d,x+p).normalize(),r[2].setComponents(l+s,f+u,m+g,x+E).normalize(),r[3].setComponents(l-s,f-u,m-g,x-E).normalize(),r[4].setComponents(l-o,f-h,m-_,x-S).normalize(),t===bn)r[5].setComponents(l+o,f+h,m+_,x+S).normalize();else if(t===ca)r[5].setComponents(o,h,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(e){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(Wr.x=n.normal.x>0?e.max.x:e.min.x,Wr.y=n.normal.y>0?e.max.y:e.min.y,Wr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lc extends Hi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fa=new X,ha=new X,ol=new ut,sr=new Tc,Xr=new Mr,Qa=new X,ll=new X;class Wf extends St{constructor(e=new kt,t=new Lc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let n=1,i=t.count;n<i;n++)fa.fromBufferAttribute(t,n-1),ha.fromBufferAttribute(t,n),r[n]=r[n-1],r[n]+=fa.distanceTo(ha);e.setAttribute("lineDistance",new ht(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,i=e.params.Line.threshold,s=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Xr.copy(r.boundingSphere),Xr.applyMatrix4(n),Xr.radius+=i,e.ray.intersectsSphere(Xr)===!1)return;ol.copy(n).invert(),sr.copy(e.ray).applyMatrix4(ol);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=r.index,f=r.attributes.position;if(u!==null){const d=Math.max(0,s.start),g=Math.min(u.count,s.start+s.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),E=u.getX(_+1),S=Yr(this,e,sr,l,p,E);S&&t.push(S)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=Yr(this,e,sr,l,_,m);p&&t.push(p)}}else{const d=Math.max(0,s.start),g=Math.min(f.count,s.start+s.count);for(let _=d,m=g-1;_<m;_+=c){const p=Yr(this,e,sr,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Yr(this,e,sr,l,g-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){const o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}}function Yr(a,e,t,r,n,i){const s=a.geometry.attributes.position;if(fa.fromBufferAttribute(s,n),ha.fromBufferAttribute(s,i),t.distanceSqToSegment(fa,ha,Qa,ll)>r)return;Qa.applyMatrix4(a.matrixWorld);const l=e.ray.origin.distanceTo(Qa);if(!(l<e.near||l>e.far))return{distance:l,point:ll.clone().applyMatrix4(a.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:a}}const cl=new X,ul=new X;class Xf extends Wf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let n=0,i=t.count;n<i;n+=2)cl.fromBufferAttribute(t,n),ul.fromBufferAttribute(t,n+1),r[n]=n===0?0:r[n-1],r[n+1]=r[n]+cl.distanceTo(ul);e.setAttribute("lineDistance",new ht(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ri extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Ic extends Pt{constructor(e,t,r,n,i,s,o,l,c,u=Di){if(u!==Di&&u!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===Di&&(r=ii),r===void 0&&u===Oi&&(r=Ni),super(null,n,i,s,o,l,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class po extends kt{constructor(e=1,t=32,r=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:n},t=Math.max(3,t);const i=[],s=[],o=[],l=[],c=new X,u=new Ze;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=r+h/t*n;c.x=e*Math.cos(d),c.y=e*Math.sin(d),s.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(s[f]/e+1)/2,u.y=(s[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)i.push(h,h+1,0);this.setIndex(i),this.setAttribute("position",new ht(s,3)),this.setAttribute("normal",new ht(o,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class mo extends kt{constructor(e=[],t=[],r=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:n};const i=[],s=[];o(n),c(r),u(),this.setAttribute("position",new ht(i,3)),this.setAttribute("normal",new ht(i.slice(),3)),this.setAttribute("uv",new ht(s,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const S=new X,x=new X,w=new X;for(let C=0;C<t.length;C+=3)d(t[C+0],S),d(t[C+1],x),d(t[C+2],w),l(S,x,w,E)}function l(E,S,x,w){const C=w+1,b=[];for(let R=0;R<=C;R++){b[R]=[];const y=E.clone().lerp(x,R/C),v=S.clone().lerp(x,R/C),D=C-R;for(let U=0;U<=D;U++)U===0&&R===C?b[R][U]=y:b[R][U]=y.clone().lerp(v,U/D)}for(let R=0;R<C;R++)for(let y=0;y<2*(C-R)-1;y++){const v=Math.floor(y/2);y%2===0?(f(b[R][v+1]),f(b[R+1][v]),f(b[R][v])):(f(b[R][v+1]),f(b[R+1][v+1]),f(b[R+1][v]))}}function c(E){const S=new X;for(let x=0;x<i.length;x+=3)S.x=i[x+0],S.y=i[x+1],S.z=i[x+2],S.normalize().multiplyScalar(E),i[x+0]=S.x,i[x+1]=S.y,i[x+2]=S.z}function u(){const E=new X;for(let S=0;S<i.length;S+=3){E.x=i[S+0],E.y=i[S+1],E.z=i[S+2];const x=m(E)/2/Math.PI+.5,w=p(E)/Math.PI+.5;s.push(x,1-w)}g(),h()}function h(){for(let E=0;E<s.length;E+=6){const S=s[E+0],x=s[E+2],w=s[E+4],C=Math.max(S,x,w),b=Math.min(S,x,w);C>.9&&b<.1&&(S<.2&&(s[E+0]+=1),x<.2&&(s[E+2]+=1),w<.2&&(s[E+4]+=1))}}function f(E){i.push(E.x,E.y,E.z)}function d(E,S){const x=E*3;S.x=e[x+0],S.y=e[x+1],S.z=e[x+2]}function g(){const E=new X,S=new X,x=new X,w=new X,C=new Ze,b=new Ze,R=new Ze;for(let y=0,v=0;y<i.length;y+=9,v+=6){E.set(i[y+0],i[y+1],i[y+2]),S.set(i[y+3],i[y+4],i[y+5]),x.set(i[y+6],i[y+7],i[y+8]),C.set(s[v+0],s[v+1]),b.set(s[v+2],s[v+3]),R.set(s[v+4],s[v+5]),w.copy(E).add(S).add(x).divideScalar(3);const D=m(w);_(C,v+0,E,D),_(b,v+2,S,D),_(R,v+4,x,D)}}function _(E,S,x,w){w<0&&E.x===1&&(s[S]=E.x-1),x.x===0&&x.z===0&&(s[S]=w/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.vertices,e.indices,e.radius,e.details)}}class go extends mo{constructor(e=1,t=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new go(e.radius,e.detail)}}class si extends kt{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const i=e/2,s=t/2,o=Math.floor(r),l=Math.floor(n),c=o+1,u=l+1,h=e/o,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const E=p*f-s;for(let S=0;S<c;S++){const x=S*h-i;g.push(x,-E,0),_.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const S=E+c*p,x=E+c*(p+1),w=E+1+c*(p+1),C=E+1+c*p;d.push(S,x,C),d.push(x,w,C)}this.setIndex(d),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.width,e.height,e.widthSegments,e.heightSegments)}}class _o extends kt{constructor(e=.5,t=1,r=32,n=1,i=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:n,thetaStart:i,thetaLength:s},r=Math.max(3,r),n=Math.max(1,n);const o=[],l=[],c=[],u=[];let h=e;const f=(t-e)/n,d=new X,g=new Ze;for(let _=0;_<=n;_++){for(let m=0;m<=r;m++){const p=i+m/r*s;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let _=0;_<n;_++){const m=_*(r+1);for(let p=0;p<r;p++){const E=p+m,S=E,x=E+r+1,w=E+r+2,C=E+1;o.push(S,x,C),o.push(x,w,C)}}this.setIndex(o),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class vo extends kt{constructor(e=1,t=.4,r=12,n=48,i=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:n,arc:i},r=Math.floor(r),n=Math.floor(n);const s=[],o=[],l=[],c=[],u=new X,h=new X,f=new X;for(let d=0;d<=r;d++)for(let g=0;g<=n;g++){const _=g/n*i,m=d/r*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/n),c.push(d/r)}for(let d=1;d<=r;d++)for(let g=1;g<=n;g++){const _=(n+1)*d+g-1,m=(n+1)*(d-1)+g-1,p=(n+1)*(d-1)+g,E=(n+1)*d+g;s.push(_,m,E),s.push(m,p,E)}this.setIndex(s),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Zs extends Hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xc,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fc extends Hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nc extends Hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class xo extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Yf extends xo{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const $a=new ut,fl=new X,hl=new X;class Oc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ho,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;fl.setFromMatrixPosition(e.matrixWorld),t.position.copy(fl),hl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hl),t.updateMatrixWorld(),$a.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($a),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply($a)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const dl=new ut,or=new X,es=new X;class qf extends Oc{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,n=this.matrix,i=e.distance||r.far;i!==r.far&&(r.far=i,r.updateProjectionMatrix()),or.setFromMatrixPosition(e.matrixWorld),r.position.copy(or),es.copy(r.position),es.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(es),r.updateMatrixWorld(),n.makeTranslation(-or.x,-or.y,-or.z),dl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dl)}}class Bc extends xo{constructor(e,t,r=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=n,this.shadow=new qf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class kc extends Dc{constructor(e=-1,t=1,r=1,n=-1,i=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=i,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,i,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let i=r-e,s=r+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=c*this.view.offsetX,s=i+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(i,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class jf extends Oc{constructor(){super(new kc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kf extends xo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new jf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Zf extends kt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Jf extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=pl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function pl(){return performance.now()}class $f extends Xf{constructor(e=10,t=10,r=4473924,n=8947848){r=new qe(r),n=new qe(n);const i=t/2,s=e/t,o=e/2,l=[],c=[];for(let f=0,d=0,g=-o;f<=t;f++,g+=s){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const _=f===i?r:n;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const u=new kt;u.setAttribute("position",new ht(l,3)),u.setAttribute("color",new ht(c,3));const h=new Lc({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function ml(a,e,t,r){const n=eh(r);switch(t){case fc:return a*e;case dc:return a*e;case pc:return a*e*2;case mc:return a*e/n.components*n.byteLength;case oo:return a*e/n.components*n.byteLength;case gc:return a*e*2/n.components*n.byteLength;case lo:return a*e*2/n.components*n.byteLength;case hc:return a*e*3/n.components*n.byteLength;case ln:return a*e*4/n.components*n.byteLength;case co:return a*e*4/n.components*n.byteLength;case $r:case ea:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case ta:case na:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case bs:case ws:return Math.max(a,16)*Math.max(e,8)/4;case Ts:case As:return Math.max(a,8)*Math.max(e,8)/2;case Rs:case Cs:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Us:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Ds:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Ps:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Ls:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Is:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Fs:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Ns:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Os:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Bs:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case ks:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case zs:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Gs:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Vs:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Hs:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Ws:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case ia:case Xs:case Ys:return Math.ceil(a/4)*Math.ceil(e/4)*16;case _c:case qs:return Math.ceil(a/4)*Math.ceil(e/4)*8;case js:case Ks:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function eh(a){switch(a){case wn:case lc:return{byteLength:1,components:1};case _r:case cc:case xr:return{byteLength:2,components:1};case ao:case so:return{byteLength:2,components:4};case ii:case ro:case Tn:return{byteLength:4,components:1};case uc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:io}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=io);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zc(){let a=null,e=!1,t=null,r=null;function n(i,s){t(i,s),r=a.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=a.requestAnimationFrame(n),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){a=i}}}function th(a){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=a.createBuffer();a.bindBuffer(l,f),a.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=a.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=a.HALF_FLOAT:d=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=a.SHORT;else if(c instanceof Uint32Array)d=a.UNSIGNED_INT;else if(c instanceof Int32Array)d=a.INT;else if(c instanceof Int8Array)d=a.BYTE;else if(c instanceof Uint8Array)d=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function r(o,l,c){const u=l.array,h=l.updateRanges;if(a.bindBuffer(c,o),h.length===0)a.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];a.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function i(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(a.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:n,remove:i,update:s}}var nh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ih=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ah=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ch=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ph=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Th=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ah=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ch=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ph="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ih=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Oh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Kh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$h=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ed=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,td=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,id=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ad=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,od=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ld=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ud=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,md=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_d=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Md=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ed=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Td=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ad=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ud=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ld=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Id=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Od=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Bd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ep=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,np=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,op=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,up=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_p=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ep=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ap=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Up=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Lp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ip=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:nh,alphahash_pars_fragment:ih,alphamap_fragment:rh,alphamap_pars_fragment:ah,alphatest_fragment:sh,alphatest_pars_fragment:oh,aomap_fragment:lh,aomap_pars_fragment:ch,batching_pars_vertex:uh,batching_vertex:fh,begin_vertex:hh,beginnormal_vertex:dh,bsdfs:ph,iridescence_fragment:mh,bumpmap_pars_fragment:gh,clipping_planes_fragment:_h,clipping_planes_pars_fragment:vh,clipping_planes_pars_vertex:xh,clipping_planes_vertex:Mh,color_fragment:Sh,color_pars_fragment:yh,color_pars_vertex:Eh,color_vertex:Th,common:bh,cube_uv_reflection_fragment:Ah,defaultnormal_vertex:wh,displacementmap_pars_vertex:Rh,displacementmap_vertex:Ch,emissivemap_fragment:Uh,emissivemap_pars_fragment:Dh,colorspace_fragment:Ph,colorspace_pars_fragment:Lh,envmap_fragment:Ih,envmap_common_pars_fragment:Fh,envmap_pars_fragment:Nh,envmap_pars_vertex:Oh,envmap_physical_pars_fragment:jh,envmap_vertex:Bh,fog_vertex:kh,fog_pars_vertex:zh,fog_fragment:Gh,fog_pars_fragment:Vh,gradientmap_pars_fragment:Hh,lightmap_pars_fragment:Wh,lights_lambert_fragment:Xh,lights_lambert_pars_fragment:Yh,lights_pars_begin:qh,lights_toon_fragment:Kh,lights_toon_pars_fragment:Zh,lights_phong_fragment:Jh,lights_phong_pars_fragment:Qh,lights_physical_fragment:$h,lights_physical_pars_fragment:ed,lights_fragment_begin:td,lights_fragment_maps:nd,lights_fragment_end:id,logdepthbuf_fragment:rd,logdepthbuf_pars_fragment:ad,logdepthbuf_pars_vertex:sd,logdepthbuf_vertex:od,map_fragment:ld,map_pars_fragment:cd,map_particle_fragment:ud,map_particle_pars_fragment:fd,metalnessmap_fragment:hd,metalnessmap_pars_fragment:dd,morphinstance_vertex:pd,morphcolor_vertex:md,morphnormal_vertex:gd,morphtarget_pars_vertex:_d,morphtarget_vertex:vd,normal_fragment_begin:xd,normal_fragment_maps:Md,normal_pars_fragment:Sd,normal_pars_vertex:yd,normal_vertex:Ed,normalmap_pars_fragment:Td,clearcoat_normal_fragment_begin:bd,clearcoat_normal_fragment_maps:Ad,clearcoat_pars_fragment:wd,iridescence_pars_fragment:Rd,opaque_fragment:Cd,packing:Ud,premultiplied_alpha_fragment:Dd,project_vertex:Pd,dithering_fragment:Ld,dithering_pars_fragment:Id,roughnessmap_fragment:Fd,roughnessmap_pars_fragment:Nd,shadowmap_pars_fragment:Od,shadowmap_pars_vertex:Bd,shadowmap_vertex:kd,shadowmask_pars_fragment:zd,skinbase_vertex:Gd,skinning_pars_vertex:Vd,skinning_vertex:Hd,skinnormal_vertex:Wd,specularmap_fragment:Xd,specularmap_pars_fragment:Yd,tonemapping_fragment:qd,tonemapping_pars_fragment:jd,transmission_fragment:Kd,transmission_pars_fragment:Zd,uv_pars_fragment:Jd,uv_pars_vertex:Qd,uv_vertex:$d,worldpos_vertex:ep,background_vert:tp,background_frag:np,backgroundCube_vert:ip,backgroundCube_frag:rp,cube_vert:ap,cube_frag:sp,depth_vert:op,depth_frag:lp,distanceRGBA_vert:cp,distanceRGBA_frag:up,equirect_vert:fp,equirect_frag:hp,linedashed_vert:dp,linedashed_frag:pp,meshbasic_vert:mp,meshbasic_frag:gp,meshlambert_vert:_p,meshlambert_frag:vp,meshmatcap_vert:xp,meshmatcap_frag:Mp,meshnormal_vert:Sp,meshnormal_frag:yp,meshphong_vert:Ep,meshphong_frag:Tp,meshphysical_vert:bp,meshphysical_frag:Ap,meshtoon_vert:wp,meshtoon_frag:Rp,points_vert:Cp,points_frag:Up,shadow_vert:Dp,shadow_frag:Pp,sprite_vert:Lp,sprite_frag:Ip},Re={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},dn={basic:{uniforms:Dt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Dt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Dt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Dt([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Dt([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Dt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Dt([Re.points,Re.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Dt([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Dt([Re.common,Re.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Dt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Dt([Re.sprite,Re.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Dt([Re.common,Re.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Dt([Re.lights,Re.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};dn.physical={uniforms:Dt([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const qr={r:0,b:0,g:0},qn=new mn,Fp=new ut;function Np(a,e,t,r,n,i,s){const o=new qe(0);let l=i===!0?0:1,c,u,h=null,f=0,d=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function _(S){let x=!1;const w=g(S);w===null?p(o,l):w&&w.isColor&&(p(w,1),x=!0);const C=a.xr.getEnvironmentBlendMode();C==="additive"?r.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(a.autoClear||x)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function m(S,x){const w=g(x);w&&(w.isCubeTexture||w.mapping===ma)?(u===void 0&&(u=new At(new Wi(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:ki(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),qn.copy(x.backgroundRotation),qn.x*=-1,qn.y*=-1,qn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Fp.makeRotationFromEuler(qn)),u.material.toneMapped=it.getTransfer(w.colorSpace)!==at,(h!==w||f!==w.version||d!==a.toneMapping)&&(u.material.needsUpdate=!0,h=w,f=w.version,d=a.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new At(new si(2,2),new Gn({name:"BackgroundMaterial",uniforms:ki(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=it.getTransfer(w.colorSpace)!==at,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,d=a.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,x){S.getRGB(qr,Cc(a)),r.buffers.color.setClear(qr.r,qr.g,qr.b,x,s)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(S,x=1){o.set(S),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:_,addToRenderList:m,dispose:E}}function Op(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},n=f(null);let i=n,s=!1;function o(v,D,U,P,N){let q=!1;const G=h(P,U,D);i!==G&&(i=G,c(i.object)),q=d(v,P,U,N),q&&g(v,P,U,N),N!==null&&e.update(N,a.ELEMENT_ARRAY_BUFFER),(q||s)&&(s=!1,x(v,D,U,P),N!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return a.createVertexArray()}function c(v){return a.bindVertexArray(v)}function u(v){return a.deleteVertexArray(v)}function h(v,D,U){const P=U.wireframe===!0;let N=r[v.id];N===void 0&&(N={},r[v.id]=N);let q=N[D.id];q===void 0&&(q={},N[D.id]=q);let G=q[P];return G===void 0&&(G=f(l()),q[P]=G),G}function f(v){const D=[],U=[],P=[];for(let N=0;N<t;N++)D[N]=0,U[N]=0,P[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:P,object:v,attributes:{},index:null}}function d(v,D,U,P){const N=i.attributes,q=D.attributes;let G=0;const Q=U.getAttributes();for(const Y in Q)if(Q[Y].location>=0){const j=N[Y];let I=q[Y];if(I===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(I=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(I=v.instanceColor)),j===void 0||j.attribute!==I||I&&j.data!==I.data)return!0;G++}return i.attributesNum!==G||i.index!==P}function g(v,D,U,P){const N={},q=D.attributes;let G=0;const Q=U.getAttributes();for(const Y in Q)if(Q[Y].location>=0){let j=q[Y];j===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(j=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(j=v.instanceColor));const I={};I.attribute=j,j&&j.data&&(I.data=j.data),N[Y]=I,G++}i.attributes=N,i.attributesNum=G,i.index=P}function _(){const v=i.newAttributes;for(let D=0,U=v.length;D<U;D++)v[D]=0}function m(v){p(v,0)}function p(v,D){const U=i.newAttributes,P=i.enabledAttributes,N=i.attributeDivisors;U[v]=1,P[v]===0&&(a.enableVertexAttribArray(v),P[v]=1),N[v]!==D&&(a.vertexAttribDivisor(v,D),N[v]=D)}function E(){const v=i.newAttributes,D=i.enabledAttributes;for(let U=0,P=D.length;U<P;U++)D[U]!==v[U]&&(a.disableVertexAttribArray(U),D[U]=0)}function S(v,D,U,P,N,q,G){G===!0?a.vertexAttribIPointer(v,D,U,N,q):a.vertexAttribPointer(v,D,U,P,N,q)}function x(v,D,U,P){_();const N=P.attributes,q=U.getAttributes(),G=D.defaultAttributeValues;for(const Q in q){const Y=q[Q];if(Y.location>=0){let K=N[Q];if(K===void 0&&(Q==="instanceMatrix"&&v.instanceMatrix&&(K=v.instanceMatrix),Q==="instanceColor"&&v.instanceColor&&(K=v.instanceColor)),K!==void 0){const j=K.normalized,I=K.itemSize,V=e.get(K);if(V===void 0)continue;const ee=V.buffer,F=V.type,k=V.bytesPerElement,te=F===a.INT||F===a.UNSIGNED_INT||K.gpuType===ro;if(K.isInterleavedBufferAttribute){const H=K.data,ne=H.stride,ge=K.offset;if(H.isInstancedInterleavedBuffer){for(let Se=0;Se<Y.locationSize;Se++)p(Y.location+Se,H.meshPerAttribute);v.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Se=0;Se<Y.locationSize;Se++)m(Y.location+Se);a.bindBuffer(a.ARRAY_BUFFER,ee);for(let Se=0;Se<Y.locationSize;Se++)S(Y.location+Se,I/Y.locationSize,F,j,ne*k,(ge+I/Y.locationSize*Se)*k,te)}else{if(K.isInstancedBufferAttribute){for(let H=0;H<Y.locationSize;H++)p(Y.location+H,K.meshPerAttribute);v.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let H=0;H<Y.locationSize;H++)m(Y.location+H);a.bindBuffer(a.ARRAY_BUFFER,ee);for(let H=0;H<Y.locationSize;H++)S(Y.location+H,I/Y.locationSize,F,j,I*k,I/Y.locationSize*H*k,te)}}else if(G!==void 0){const j=G[Q];if(j!==void 0)switch(j.length){case 2:a.vertexAttrib2fv(Y.location,j);break;case 3:a.vertexAttrib3fv(Y.location,j);break;case 4:a.vertexAttrib4fv(Y.location,j);break;default:a.vertexAttrib1fv(Y.location,j)}}}}E()}function w(){R();for(const v in r){const D=r[v];for(const U in D){const P=D[U];for(const N in P)u(P[N].object),delete P[N];delete D[U]}delete r[v]}}function C(v){if(r[v.id]===void 0)return;const D=r[v.id];for(const U in D){const P=D[U];for(const N in P)u(P[N].object),delete P[N];delete D[U]}delete r[v.id]}function b(v){for(const D in r){const U=r[D];if(U[v.id]===void 0)continue;const P=U[v.id];for(const N in P)u(P[N].object),delete P[N];delete U[v.id]}}function R(){y(),s=!0,i!==n&&(i=n,c(i.object))}function y(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:R,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function Bp(a,e,t){let r;function n(c){r=c}function i(c,u){a.drawArrays(r,c,u),t.update(u,r,1)}function s(c,u,h){h!==0&&(a.drawArraysInstanced(r,c,u,h),t.update(u,r,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,r,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)s(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(r,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,r,1)}}this.setMode=n,this.render=i,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function kp(a,e,t,r){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){return!(b!==ln&&r.convert(b)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const R=b===xr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==wn&&r.convert(b)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Tn&&!R)}function l(b){if(b==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),g=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=a.getParameter(a.MAX_TEXTURE_SIZE),m=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),p=a.getParameter(a.MAX_VERTEX_ATTRIBS),E=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),S=a.getParameter(a.MAX_VARYING_VECTORS),x=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,C=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:w,maxSamples:C}}function zp(a){const e=this;let t=null,r=0,n=!1,i=!1;const s=new Zn,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||r!==0||n;return n=f,r=h.length,d},this.beginShadows=function(){i=!0,u(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=a.get(h);if(!n||g===null||g.length===0||i&&!m)i?u(null):c();else{const E=i?0:r,S=E*4;let x=p.clippingState||null;l.value=x,x=u(g,f,S,d);for(let w=0;w!==S;++w)x[w]=t[w];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=d;S!==_;++S,x+=4)s.copy(h[S]).applyMatrix4(E,o),s.normal.toArray(m,x),m[x+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Gp(a){let e=new WeakMap;function t(s,o){return o===Ms?s.mapping=Ii:o===Ss&&(s.mapping=Fi),s}function r(s){if(s&&s.isTexture){const o=s.mapping;if(o===Ms||o===Ss)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new kf(l.height);return c.fromEquirectangularTexture(a,s),e.set(s,c),s.addEventListener("dispose",n),t(c.texture,s.mapping)}else return null}}return s}function n(s){const o=s.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function i(){e=new WeakMap}return{get:r,dispose:i}}const Ci=4,gl=[.125,.215,.35,.446,.526,.582],$n=20,ts=new kc,_l=new qe;let ns=null,is=0,rs=0,as=!1;const Jn=(1+Math.sqrt(5))/2,Ti=1/Jn,vl=[new X(-Jn,Ti,0),new X(Jn,Ti,0),new X(-Ti,0,Jn),new X(Ti,0,Jn),new X(0,Jn,-Ti),new X(0,Jn,Ti),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class xl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100){ns=this._renderer.getRenderTarget(),is=this._renderer.getActiveCubeFace(),rs=this._renderer.getActiveMipmapLevel(),as=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,r,n,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ns,is,rs),this._renderer.xr.enabled=as,e.scissorTest=!1,jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===Fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ns=this._renderer.getRenderTarget(),is=this._renderer.getActiveCubeFace(),rs=this._renderer.getActiveMipmapLevel(),as=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:xr,format:ln,colorSpace:Bi,depthBuffer:!1},n=Ml(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ml(e,t,r);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vp(i)),this._blurMaterial=Hp(i,e,t)}return n}_compileMaterial(e){const t=new At(this._lodPlanes[0],e);this._renderer.compile(t,ts)}_sceneToCubeUV(e,t,r,n){const o=new Xt(90,1,t,r),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(_l),u.toneMapping=kn,u.autoClear=!1;const d=new Sr({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),g=new At(new Wi,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(_l),_=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):E===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const S=this._cubeSize;jr(n,E*S,p>2?S:0,S,S),u.setRenderTarget(n),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===Ii||e.mapping===Fi;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=yl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sl());const i=n?this._cubemapMaterial:this._equirectMaterial,s=new At(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;const l=this._cubeSize;jr(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(s,ts)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let i=1;i<n;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=vl[(n-i-1)%vl.length];this._blur(e,i-1,i,s,o)}t.autoClear=r}_blur(e,t,r,n,i){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,n,"latitudinal",i),this._halfBlur(s,e,r,r,n,"longitudinal",i)}_halfBlur(e,t,r,n,i,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new At(this._lodPlanes[n],c),f=c.uniforms,d=this._sizeLods[r]-1,g=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*$n-1),_=i/g,m=isFinite(i)?1+Math.floor(u*_):$n;m>$n&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$n}`);const p=[];let E=0;for(let b=0;b<$n;++b){const R=b/_,y=Math.exp(-R*R/2);p.push(y),b===0?E+=y:b<m&&(E+=2*y)}for(let b=0;b<p.length;b++)p[b]=p[b]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-r;const x=this._sizeLods[n],w=3*x*(n>S-Ci?n-S+Ci:0),C=4*(this._cubeSize-x);jr(t,w,C,3*x,2*x),l.setRenderTarget(t),l.render(h,ts)}}function Vp(a){const e=[],t=[],r=[];let n=a;const i=a-Ci+1+gl.length;for(let s=0;s<i;s++){const o=Math.pow(2,n);t.push(o);let l=1/o;s>a-Ci?l=gl[s-a+Ci-1]:s===0&&(l=0),r.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*d),S=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let C=0;C<d;C++){const b=C%3*2/3-1,R=C>2?0:-1,y=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];E.set(y,_*g*C),S.set(f,m*g*C);const v=[C,C,C,C,C,C];x.set(v,p*g*C)}const w=new kt;w.setAttribute("position",new un(E,_)),w.setAttribute("uv",new un(S,m)),w.setAttribute("faceIndex",new un(x,p)),e.push(w),n>Ci&&n--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Ml(a,e,t){const r=new ri(a,e,t);return r.texture.mapping=ma,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function jr(a,e,t,r,n){a.viewport.set(e,t,r,n),a.scissor.set(e,t,r,n)}function Hp(a,e,t){const r=new Float32Array($n),n=new X(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Sl(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function yl(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Mo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Wp(a){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ms||l===Ss,u=l===Ii||l===Fi;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new xl(a)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&n(d)?(t===null&&(t=new xl(a)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",i),h.texture):null}}}return o}function n(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function i(o){const l=o.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:s}}function Xp(a){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=a.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const n=t(r);return n===null&&wi("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function Yp(a,e,t,r){const n={},i=new WeakMap;function s(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",s),delete n[f.id];const d=i.get(f);d&&(e.remove(d),i.delete(f)),r.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return n[f.id]===!0||(f.addEventListener("dispose",s),n[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],a.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const E=d.array;_=d.version;for(let S=0,x=E.length;S<x;S+=3){const w=E[S+0],C=E[S+1],b=E[S+2];f.push(w,C,C,b,b,w)}}else if(g!==void 0){const E=g.array;_=g.version;for(let S=0,x=E.length/3-1;S<x;S+=3){const w=S+0,C=S+1,b=S+2;f.push(w,C,C,b,b,w)}}else return;const m=new(Sc(f)?Rc:wc)(f,1);m.version=_;const p=i.get(h);p&&e.remove(p),i.set(h,m)}function u(h){const f=i.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return i.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function qp(a,e,t){let r;function n(f){r=f}let i,s;function o(f){i=f.type,s=f.bytesPerElement}function l(f,d){a.drawElements(r,d,i,f*s),t.update(d,r,1)}function c(f,d,g){g!==0&&(a.drawElementsInstanced(r,d,i,f*s,g),t.update(d,r,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,d,0,i,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,r,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/s,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(r,d,0,i,f,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=d[E]*_[E];t.update(p,r,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function jp(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(i,s,o){switch(t.calls++,s){case a.TRIANGLES:t.triangles+=o*(i/3);break;case a.LINES:t.lines+=o*(i/2);break;case a.LINE_STRIP:t.lines+=o*(i-1);break;case a.LINE_LOOP:t.lines+=o*i;break;case a.POINTS:t.points+=o*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function Kp(a,e,t){const r=new WeakMap,n=new rt;function i(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=r.get(o);if(f===void 0||f.count!==h){let v=function(){R.dispose(),r.delete(o),o.removeEventListener("dispose",v)};var d=v;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let w=o.attributes.position.count*x,C=1;w>e.maxTextureSize&&(C=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const b=new Float32Array(w*C*4*h),R=new Ec(b,w,C,h);R.type=Tn,R.needsUpdate=!0;const y=x*4;for(let D=0;D<h;D++){const U=p[D],P=E[D],N=S[D],q=w*C*4*D;for(let G=0;G<U.count;G++){const Q=G*y;g===!0&&(n.fromBufferAttribute(U,G),b[q+Q+0]=n.x,b[q+Q+1]=n.y,b[q+Q+2]=n.z,b[q+Q+3]=0),_===!0&&(n.fromBufferAttribute(P,G),b[q+Q+4]=n.x,b[q+Q+5]=n.y,b[q+Q+6]=n.z,b[q+Q+7]=0),m===!0&&(n.fromBufferAttribute(N,G),b[q+Q+8]=n.x,b[q+Q+9]=n.y,b[q+Q+10]=n.z,b[q+Q+11]=N.itemSize===4?n.w:1)}}f={count:h,texture:R,size:new Ze(w,C)},r.set(o,f),o.addEventListener("dispose",v)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",s.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(a,"morphTargetBaseInfluence",_),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(a,"morphTargetsTextureSize",f.size)}return{update:i}}function Zp(a,e,t,r){let n=new WeakMap;function i(l){const c=r.render.frame,u=l.geometry,h=e.get(l,u);if(n.get(h)!==c&&(e.update(h),n.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return h}function s(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:i,dispose:s}}const Gc=new Pt,El=new Ic(1,1),Vc=new Ec,Hc=new Tf,Wc=new Pc,Tl=[],bl=[],Al=new Float32Array(16),wl=new Float32Array(9),Rl=new Float32Array(4);function Xi(a,e,t){const r=a[0];if(r<=0||r>0)return a;const n=e*t;let i=Tl[n];if(i===void 0&&(i=new Float32Array(n),Tl[n]=i),e!==0){r.toArray(i,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(i,o)}return i}function gt(a,e){if(a.length!==e.length)return!1;for(let t=0,r=a.length;t<r;t++)if(a[t]!==e[t])return!1;return!0}function _t(a,e){for(let t=0,r=e.length;t<r;t++)a[t]=e[t]}function ga(a,e){let t=bl[e];t===void 0&&(t=new Int32Array(e),bl[e]=t);for(let r=0;r!==e;++r)t[r]=a.allocateTextureUnit();return t}function Jp(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Qp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;a.uniform2fv(this.addr,e),_t(t,e)}}function $p(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;a.uniform3fv(this.addr,e),_t(t,e)}}function em(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;a.uniform4fv(this.addr,e),_t(t,e)}}function tm(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(gt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,r))return;Rl.set(r),a.uniformMatrix2fv(this.addr,!1,Rl),_t(t,r)}}function nm(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(gt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,r))return;wl.set(r),a.uniformMatrix3fv(this.addr,!1,wl),_t(t,r)}}function im(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(gt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,r))return;Al.set(r),a.uniformMatrix4fv(this.addr,!1,Al),_t(t,r)}}function rm(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function am(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;a.uniform2iv(this.addr,e),_t(t,e)}}function sm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;a.uniform3iv(this.addr,e),_t(t,e)}}function om(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;a.uniform4iv(this.addr,e),_t(t,e)}}function lm(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function cm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;a.uniform2uiv(this.addr,e),_t(t,e)}}function um(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;a.uniform3uiv(this.addr,e),_t(t,e)}}function fm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;a.uniform4uiv(this.addr,e),_t(t,e)}}function hm(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n);let i;this.type===a.SAMPLER_2D_SHADOW?(El.compareFunction=Mc,i=El):i=Gc,t.setTexture2D(e||i,n)}function dm(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||Hc,n)}function pm(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||Wc,n)}function mm(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||Vc,n)}function gm(a){switch(a){case 5126:return Jp;case 35664:return Qp;case 35665:return $p;case 35666:return em;case 35674:return tm;case 35675:return nm;case 35676:return im;case 5124:case 35670:return rm;case 35667:case 35671:return am;case 35668:case 35672:return sm;case 35669:case 35673:return om;case 5125:return lm;case 36294:return cm;case 36295:return um;case 36296:return fm;case 35678:case 36198:case 36298:case 36306:case 35682:return hm;case 35679:case 36299:case 36307:return dm;case 35680:case 36300:case 36308:case 36293:return pm;case 36289:case 36303:case 36311:case 36292:return mm}}function _m(a,e){a.uniform1fv(this.addr,e)}function vm(a,e){const t=Xi(e,this.size,2);a.uniform2fv(this.addr,t)}function xm(a,e){const t=Xi(e,this.size,3);a.uniform3fv(this.addr,t)}function Mm(a,e){const t=Xi(e,this.size,4);a.uniform4fv(this.addr,t)}function Sm(a,e){const t=Xi(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function ym(a,e){const t=Xi(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Em(a,e){const t=Xi(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Tm(a,e){a.uniform1iv(this.addr,e)}function bm(a,e){a.uniform2iv(this.addr,e)}function Am(a,e){a.uniform3iv(this.addr,e)}function wm(a,e){a.uniform4iv(this.addr,e)}function Rm(a,e){a.uniform1uiv(this.addr,e)}function Cm(a,e){a.uniform2uiv(this.addr,e)}function Um(a,e){a.uniform3uiv(this.addr,e)}function Dm(a,e){a.uniform4uiv(this.addr,e)}function Pm(a,e,t){const r=this.cache,n=e.length,i=ga(t,n);gt(r,i)||(a.uniform1iv(this.addr,i),_t(r,i));for(let s=0;s!==n;++s)t.setTexture2D(e[s]||Gc,i[s])}function Lm(a,e,t){const r=this.cache,n=e.length,i=ga(t,n);gt(r,i)||(a.uniform1iv(this.addr,i),_t(r,i));for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Hc,i[s])}function Im(a,e,t){const r=this.cache,n=e.length,i=ga(t,n);gt(r,i)||(a.uniform1iv(this.addr,i),_t(r,i));for(let s=0;s!==n;++s)t.setTextureCube(e[s]||Wc,i[s])}function Fm(a,e,t){const r=this.cache,n=e.length,i=ga(t,n);gt(r,i)||(a.uniform1iv(this.addr,i),_t(r,i));for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Vc,i[s])}function Nm(a){switch(a){case 5126:return _m;case 35664:return vm;case 35665:return xm;case 35666:return Mm;case 35674:return Sm;case 35675:return ym;case 35676:return Em;case 5124:case 35670:return Tm;case 35667:case 35671:return bm;case 35668:case 35672:return Am;case 35669:case 35673:return wm;case 5125:return Rm;case 36294:return Cm;case 36295:return Um;case 36296:return Dm;case 35678:case 36198:case 36298:case 36306:case 35682:return Pm;case 35679:case 36299:case 36307:return Lm;case 35680:case 36300:case 36308:case 36293:return Im;case 36289:case 36303:case 36311:case 36292:return Fm}}class Om{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=gm(t.type)}}class Bm{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nm(t.type)}}class km{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const o=n[i];o.setValue(e,t[o.id],r)}}}const ss=/(\w+)(\])?(\[|\.)?/g;function Cl(a,e){a.seq.push(e),a.map[e.id]=e}function zm(a,e,t){const r=a.name,n=r.length;for(ss.lastIndex=0;;){const i=ss.exec(r),s=ss.lastIndex;let o=i[1];const l=i[2]==="]",c=i[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===n){Cl(t,c===void 0?new Om(o,a,e):new Bm(o,a,e));break}else{let h=t.map[o];h===void 0&&(h=new km(o),Cl(t,h)),t=h}}}class ra{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){const i=e.getActiveUniform(t,n),s=e.getUniformLocation(t,i.name);zm(i,s,this)}}setValue(e,t,r,n){const i=this.map[t];i!==void 0&&i.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let i=0,s=t.length;i!==s;++i){const o=t[i],l=r[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.id in t&&r.push(s)}return r}}function Ul(a,e,t){const r=a.createShader(e);return a.shaderSource(r,t),a.compileShader(r),r}const Gm=37297;let Vm=0;function Hm(a,e){const t=a.split(`
`),r=[],n=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let s=n;s<i;s++){const o=s+1;r.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return r.join(`
`)}const Dl=new Xe;function Wm(a){it._getMatrix(Dl,it.workingColorSpace,a);const e=`mat3( ${Dl.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(a)){case la:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Pl(a,e,t){const r=a.getShaderParameter(e,a.COMPILE_STATUS),n=a.getShaderInfoLog(e).trim();if(r&&n==="")return"";const i=/ERROR: 0:(\d+)/.exec(n);if(i){const s=parseInt(i[1]);return t.toUpperCase()+`

`+n+`

`+Hm(a.getShaderSource(e),s)}else return n}function Xm(a,e){const t=Wm(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ym(a,e){let t;switch(e){case Fu:t="Linear";break;case Nu:t="Reinhard";break;case Ou:t="Cineon";break;case sc:t="ACESFilmic";break;case ku:t="AgX";break;case zu:t="Neutral";break;case Bu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Kr=new X;function qm(){it.getLuminanceCoefficients(Kr);const a=Kr.x.toFixed(4),e=Kr.y.toFixed(4),t=Kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jm(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function Km(a){const e=[];for(const t in a){const r=a[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Zm(a,e){const t={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const i=a.getActiveAttrib(e,n),s=i.name;let o=1;i.type===a.FLOAT_MAT2&&(o=2),i.type===a.FLOAT_MAT3&&(o=3),i.type===a.FLOAT_MAT4&&(o=4),t[s]={type:i.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function ur(a){return a!==""}function Ll(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Il(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Js(a){return a.replace(Jm,$m)}const Qm=new Map;function $m(a,e){let t=Ke[e];if(t===void 0){const r=Qm.get(e);if(r!==void 0)t=Ke[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Js(t)}const eg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fl(a){return a.replace(eg,tg)}function tg(a,e,t,r){let n="";for(let i=parseInt(e);i<parseInt(t);i++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return n}function Nl(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ng(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===rc?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===pu?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===yn&&(e="SHADOWMAP_TYPE_VSM"),e}function ig(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ii:case Fi:e="ENVMAP_TYPE_CUBE";break;case ma:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rg(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Fi:e="ENVMAP_MODE_REFRACTION";break}return e}function ag(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case ac:e="ENVMAP_BLENDING_MULTIPLY";break;case Lu:e="ENVMAP_BLENDING_MIX";break;case Iu:e="ENVMAP_BLENDING_ADD";break}return e}function sg(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function og(a,e,t,r){const n=a.getContext(),i=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=ng(t),c=ig(t),u=rg(t),h=ag(t),f=sg(t),d=jm(t),g=Km(i),_=n.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ur).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ur).join(`
`),p.length>0&&(p+=`
`)):(m=[Nl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),p=[Nl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==kn?Ym("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Xm("linearToOutputTexel",t.outputColorSpace),qm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ur).join(`
`)),s=Js(s),s=Ll(s,t),s=Il(s,t),o=Js(o),o=Ll(o,t),o=Il(o,t),s=Fl(s),o=Fl(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Vo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=E+m+s,x=E+p+o,w=Ul(n,n.VERTEX_SHADER,S),C=Ul(n,n.FRAGMENT_SHADER,x);n.attachShader(_,w),n.attachShader(_,C),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function b(D){if(a.debug.checkShaderErrors){const U=n.getProgramInfoLog(_).trim(),P=n.getShaderInfoLog(w).trim(),N=n.getShaderInfoLog(C).trim();let q=!0,G=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(q=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(n,_,w,C);else{const Q=Pl(n,w,"vertex"),Y=Pl(n,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+U+`
`+Q+`
`+Y)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(P===""||N==="")&&(G=!1);G&&(D.diagnostics={runnable:q,programLog:U,vertexShader:{log:P,prefix:m},fragmentShader:{log:N,prefix:p}})}n.deleteShader(w),n.deleteShader(C),R=new ra(n,_),y=Zm(n,_)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=n.getProgramParameter(_,Gm)),v},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=C,this}let lg=0;class cg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),i=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new ug(e),t.set(e,r)),r}}class ug{constructor(e){this.id=lg++,this.code=e,this.usedTimes=0}}function fg(a,e,t,r,n,i,s){const o=new bc,l=new cg,c=new Set,u=[],h=n.logarithmicDepthBuffer,f=n.vertexTextures;let d=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,v,D,U,P){const N=U.fog,q=P.geometry,G=y.isMeshStandardMaterial?U.environment:null,Q=(y.isMeshStandardMaterial?t:e).get(y.envMap||G),Y=Q&&Q.mapping===ma?Q.image.height:null,K=g[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const j=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,I=j!==void 0?j.length:0;let V=0;q.morphAttributes.position!==void 0&&(V=1),q.morphAttributes.normal!==void 0&&(V=2),q.morphAttributes.color!==void 0&&(V=3);let ee,F,k,te;if(K){const ze=dn[K];ee=ze.vertexShader,F=ze.fragmentShader}else ee=y.vertexShader,F=y.fragmentShader,l.update(y),k=l.getVertexShaderID(y),te=l.getFragmentShaderID(y);const H=a.getRenderTarget(),ne=a.state.buffers.depth.getReversed(),ge=P.isInstancedMesh===!0,Se=P.isBatchedMesh===!0,ve=!!y.map,oe=!!y.matcap,Ne=!!Q,L=!!y.aoMap,Oe=!!y.lightMap,be=!!y.bumpMap,we=!!y.normalMap,se=!!y.displacementMap,Ae=!!y.emissiveMap,pe=!!y.metalnessMap,T=!!y.roughnessMap,M=y.anisotropy>0,B=y.clearcoat>0,Z=y.dispersion>0,J=y.iridescence>0,ae=y.sheen>0,he=y.transmission>0,ce=M&&!!y.anisotropyMap,me=B&&!!y.clearcoatMap,De=B&&!!y.clearcoatNormalMap,ue=B&&!!y.clearcoatRoughnessMap,ye=J&&!!y.iridescenceMap,Ee=J&&!!y.iridescenceThicknessMap,Te=ae&&!!y.sheenColorMap,le=ae&&!!y.sheenRoughnessMap,Pe=!!y.specularMap,Ie=!!y.specularColorMap,je=!!y.specularIntensityMap,z=he&&!!y.transmissionMap,fe=he&&!!y.thicknessMap,$=!!y.gradientMap,de=!!y.alphaMap,xe=y.alphaTest>0,_e=!!y.alphaHash,Fe=!!y.extensions;let We=kn;y.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(We=a.toneMapping);const Be={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:ee,fragmentShader:F,defines:y.defines,customVertexShaderID:k,customFragmentShaderID:te,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Se,batchingColor:Se&&P._colorsTexture!==null,instancing:ge,instancingColor:ge&&P.instanceColor!==null,instancingMorph:ge&&P.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:H===null?a.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Bi,alphaToCoverage:!!y.alphaToCoverage,map:ve,matcap:oe,envMap:Ne,envMapMode:Ne&&Q.mapping,envMapCubeUVHeight:Y,aoMap:L,lightMap:Oe,bumpMap:be,normalMap:we,displacementMap:f&&se,emissiveMap:Ae,normalMapObjectSpace:we&&y.normalMapType===Hu,normalMapTangentSpace:we&&y.normalMapType===xc,metalnessMap:pe,roughnessMap:T,anisotropy:M,anisotropyMap:ce,clearcoat:B,clearcoatMap:me,clearcoatNormalMap:De,clearcoatRoughnessMap:ue,dispersion:Z,iridescence:J,iridescenceMap:ye,iridescenceThicknessMap:Ee,sheen:ae,sheenColorMap:Te,sheenRoughnessMap:le,specularMap:Pe,specularColorMap:Ie,specularIntensityMap:je,transmission:he,transmissionMap:z,thicknessMap:fe,gradientMap:$,opaque:y.transparent===!1&&y.blending===Ui&&y.alphaToCoverage===!1,alphaMap:de,alphaTest:xe,alphaHash:_e,combine:y.combine,mapUv:ve&&_(y.map.channel),aoMapUv:L&&_(y.aoMap.channel),lightMapUv:Oe&&_(y.lightMap.channel),bumpMapUv:be&&_(y.bumpMap.channel),normalMapUv:we&&_(y.normalMap.channel),displacementMapUv:se&&_(y.displacementMap.channel),emissiveMapUv:Ae&&_(y.emissiveMap.channel),metalnessMapUv:pe&&_(y.metalnessMap.channel),roughnessMapUv:T&&_(y.roughnessMap.channel),anisotropyMapUv:ce&&_(y.anisotropyMap.channel),clearcoatMapUv:me&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:De&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:le&&_(y.sheenRoughnessMap.channel),specularMapUv:Pe&&_(y.specularMap.channel),specularColorMapUv:Ie&&_(y.specularColorMap.channel),specularIntensityMapUv:je&&_(y.specularIntensityMap.channel),transmissionMapUv:z&&_(y.transmissionMap.channel),thicknessMapUv:fe&&_(y.thicknessMap.channel),alphaMapUv:de&&_(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(we||M),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!q.attributes.uv&&(ve||de),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ne,skinning:P.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:V,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:a.shadowMap.enabled&&D.length>0,shadowMapType:a.shadowMap.type,toneMapping:We,decodeVideoTexture:ve&&y.map.isVideoTexture===!0&&it.getTransfer(y.map.colorSpace)===at,decodeVideoTextureEmissive:Ae&&y.emissiveMap.isVideoTexture===!0&&it.getTransfer(y.emissiveMap.colorSpace)===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===sn,flipSided:y.side===Bt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Fe&&y.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&y.extensions.multiDraw===!0||Se)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function p(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)v.push(D),v.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(E(v,y),S(v,y),v.push(a.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function E(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function S(y,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),y.push(o.mask)}function x(y){const v=g[y.type];let D;if(v){const U=dn[v];D=Uc.clone(U.uniforms)}else D=y.uniforms;return D}function w(y,v){let D;for(let U=0,P=u.length;U<P;U++){const N=u[U];if(N.cacheKey===v){D=N,++D.usedTimes;break}}return D===void 0&&(D=new og(a,v,y,i),u.push(D)),D}function C(y){if(--y.usedTimes===0){const v=u.indexOf(y);u[v]=u[u.length-1],u.pop(),y.destroy()}}function b(y){l.remove(y)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:w,releaseProgram:C,releaseShaderCache:b,programs:u,dispose:R}}function hg(){let a=new WeakMap;function e(s){return a.has(s)}function t(s){let o=a.get(s);return o===void 0&&(o={},a.set(s,o)),o}function r(s){a.delete(s)}function n(s,o,l){a.get(s)[o]=l}function i(){a=new WeakMap}return{has:e,get:t,remove:r,update:n,dispose:i}}function dg(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Ol(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Bl(){const a=[];let e=0;const t=[],r=[],n=[];function i(){e=0,t.length=0,r.length=0,n.length=0}function s(h,f,d,g,_,m){let p=a[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},a[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function o(h,f,d,g,_,m){const p=s(h,f,d,g,_,m);d.transmission>0?r.push(p):d.transparent===!0?n.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=s(h,f,d,g,_,m);d.transmission>0?r.unshift(p):d.transparent===!0?n.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||dg),r.length>1&&r.sort(f||Ol),n.length>1&&n.sort(f||Ol)}function u(){for(let h=e,f=a.length;h<f;h++){const d=a[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:r,transparent:n,init:i,push:o,unshift:l,finish:u,sort:c}}function pg(){let a=new WeakMap;function e(r,n){const i=a.get(r);let s;return i===void 0?(s=new Bl,a.set(r,[s])):n>=i.length?(s=new Bl,i.push(s)):s=i[n],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function mg(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new qe};break;case"SpotLight":t={position:new X,direction:new X,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new X,halfWidth:new X,halfHeight:new X};break}return a[e.id]=t,t}}}function gg(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let _g=0;function vg(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function xg(a){const e=new mg,t=gg(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new X);const n=new X,i=new ut,s=new ut;function o(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)r.probe[y].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,E=0,S=0,x=0,w=0,C=0,b=0;c.sort(vg);for(let y=0,v=c.length;y<v;y++){const D=c[y],U=D.color,P=D.intensity,N=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=U.r*P,h+=U.g*P,f+=U.b*P;else if(D.isLightProbe){for(let G=0;G<9;G++)r.probe[G].addScaledVector(D.sh.coefficients[G],P);b++}else if(D.isDirectionalLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,Y=t.get(D);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,r.directionalShadow[d]=Y,r.directionalShadowMap[d]=q,r.directionalShadowMatrix[d]=D.shadow.matrix,E++}r.directional[d]=G,d++}else if(D.isSpotLight){const G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(U).multiplyScalar(P),G.distance=N,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,r.spot[_]=G;const Q=D.shadow;if(D.map&&(r.spotLightMap[w]=D.map,w++,Q.updateMatrices(D),D.castShadow&&C++),r.spotLightMatrix[_]=Q.matrix,D.castShadow){const Y=t.get(D);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,r.spotShadow[_]=Y,r.spotShadowMap[_]=q,x++}_++}else if(D.isRectAreaLight){const G=e.get(D);G.color.copy(U).multiplyScalar(P),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),r.rectArea[m]=G,m++}else if(D.isPointLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const Q=D.shadow,Y=t.get(D);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,Y.shadowCameraNear=Q.camera.near,Y.shadowCameraFar=Q.camera.far,r.pointShadow[g]=Y,r.pointShadowMap[g]=q,r.pointShadowMatrix[g]=D.shadow.matrix,S++}r.point[g]=G,g++}else if(D.isHemisphereLight){const G=e.get(D);G.skyColor.copy(D.color).multiplyScalar(P),G.groundColor.copy(D.groundColor).multiplyScalar(P),r.hemi[p]=G,p++}}m>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=h,r.ambient[2]=f;const R=r.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==E||R.numPointShadows!==S||R.numSpotShadows!==x||R.numSpotMaps!==w||R.numLightProbes!==b)&&(r.directional.length=d,r.spot.length=_,r.rectArea.length=m,r.point.length=g,r.hemi.length=p,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=x,r.spotShadowMap.length=x,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=x+w-C,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=C,r.numLightProbes=b,R.directionalLength=d,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=E,R.numPointShadows=S,R.numSpotShadows=x,R.numSpotMaps=w,R.numLightProbes=b,r.version=_g++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const S=c[p];if(S.isDirectionalLight){const x=r.directional[h];x.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(m),h++}else if(S.isSpotLight){const x=r.spot[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const x=r.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),s.identity(),i.copy(S.matrixWorld),i.premultiply(m),s.extractRotation(i),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),g++}else if(S.isPointLight){const x=r.point[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const x=r.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:r}}function kl(a){const e=new xg(a),t=[],r=[];function n(u){c.camera=u,t.length=0,r.length=0}function i(u){t.push(u)}function s(u){r.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:i,pushShadow:s}}function Mg(a){let e=new WeakMap;function t(n,i=0){const s=e.get(n);let o;return s===void 0?(o=new kl(a),e.set(n,[o])):i>=s.length?(o=new kl(a),s.push(o)):o=s[i],o}function r(){e=new WeakMap}return{get:t,dispose:r}}const Sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Eg(a,e,t){let r=new ho;const n=new Ze,i=new Ze,s=new rt,o=new Fc({depthPacking:vc}),l=new Nc,c={},u=t.maxTextureSize,h={[zn]:Bt,[Bt]:zn,[sn]:sn},f=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:Sg,fragmentShader:yg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new kt;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new At(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rc;let p=this.type;this.render=function(C,b,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const y=a.getRenderTarget(),v=a.getActiveCubeFace(),D=a.getActiveMipmapLevel(),U=a.state;U.setBlending(Bn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const P=p!==yn&&this.type===yn,N=p===yn&&this.type!==yn;for(let q=0,G=C.length;q<G;q++){const Q=C[q],Y=Q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;n.copy(Y.mapSize);const K=Y.getFrameExtents();if(n.multiply(K),i.copy(Y.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(i.x=Math.floor(u/K.x),n.x=i.x*K.x,Y.mapSize.x=i.x),n.y>u&&(i.y=Math.floor(u/K.y),n.y=i.y*K.y,Y.mapSize.y=i.y)),Y.map===null||P===!0||N===!0){const I=this.type!==yn?{minFilter:cn,magFilter:cn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new ri(n.x,n.y,I),Y.map.texture.name=Q.name+".shadowMap",Y.camera.updateProjectionMatrix()}a.setRenderTarget(Y.map),a.clear();const j=Y.getViewportCount();for(let I=0;I<j;I++){const V=Y.getViewport(I);s.set(i.x*V.x,i.y*V.y,i.x*V.z,i.y*V.w),U.viewport(s),Y.updateMatrices(Q,I),r=Y.getFrustum(),x(b,R,Y.camera,Q,this.type)}Y.isPointLightShadow!==!0&&this.type===yn&&E(Y,R),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,a.setRenderTarget(y,v,D)};function E(C,b){const R=e.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ri(n.x,n.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,a.setRenderTarget(C.mapPass),a.clear(),a.renderBufferDirect(b,null,R,f,_,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,a.setRenderTarget(C.map),a.clear(),a.renderBufferDirect(b,null,R,d,_,null)}function S(C,b,R,y){let v=null;const D=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)v=D;else if(v=R.isPointLight===!0?l:o,a.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const U=v.uuid,P=b.uuid;let N=c[U];N===void 0&&(N={},c[U]=N);let q=N[P];q===void 0&&(q=v.clone(),N[P]=q,b.addEventListener("dispose",w)),v=q}if(v.visible=b.visible,v.wireframe=b.wireframe,y===yn?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:h[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const U=a.properties.get(v);U.light=R}return v}function x(C,b,R,y,v){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===yn)&&(!C.frustumCulled||r.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const P=e.update(C),N=C.material;if(Array.isArray(N)){const q=P.groups;for(let G=0,Q=q.length;G<Q;G++){const Y=q[G],K=N[Y.materialIndex];if(K&&K.visible){const j=S(C,K,y,v);C.onBeforeShadow(a,C,b,R,P,j,Y),a.renderBufferDirect(R,null,P,j,C,Y),C.onAfterShadow(a,C,b,R,P,j,Y)}}}else if(N.visible){const q=S(C,N,y,v);C.onBeforeShadow(a,C,b,R,P,q,null),a.renderBufferDirect(R,null,P,q,C,null),C.onAfterShadow(a,C,b,R,P,q,null)}}const U=C.children;for(let P=0,N=U.length;P<N;P++)x(U[P],b,R,y,v)}function w(C){C.target.removeEventListener("dispose",w);for(const R in c){const y=c[R],v=C.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}const Tg={[ds]:ps,[ms]:vs,[gs]:xs,[Li]:_s,[ps]:ds,[vs]:ms,[xs]:gs,[_s]:Li};function bg(a,e){function t(){let z=!1;const fe=new rt;let $=null;const de=new rt(0,0,0,0);return{setMask:function(xe){$!==xe&&!z&&(a.colorMask(xe,xe,xe,xe),$=xe)},setLocked:function(xe){z=xe},setClear:function(xe,_e,Fe,We,Be){Be===!0&&(xe*=We,_e*=We,Fe*=We),fe.set(xe,_e,Fe,We),de.equals(fe)===!1&&(a.clearColor(xe,_e,Fe,We),de.copy(fe))},reset:function(){z=!1,$=null,de.set(-1,0,0,0)}}}function r(){let z=!1,fe=!1,$=null,de=null,xe=null;return{setReversed:function(_e){if(fe!==_e){const Fe=e.get("EXT_clip_control");fe?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT);const We=xe;xe=null,this.setClear(We)}fe=_e},getReversed:function(){return fe},setTest:function(_e){_e?H(a.DEPTH_TEST):ne(a.DEPTH_TEST)},setMask:function(_e){$!==_e&&!z&&(a.depthMask(_e),$=_e)},setFunc:function(_e){if(fe&&(_e=Tg[_e]),de!==_e){switch(_e){case ds:a.depthFunc(a.NEVER);break;case ps:a.depthFunc(a.ALWAYS);break;case ms:a.depthFunc(a.LESS);break;case Li:a.depthFunc(a.LEQUAL);break;case gs:a.depthFunc(a.EQUAL);break;case _s:a.depthFunc(a.GEQUAL);break;case vs:a.depthFunc(a.GREATER);break;case xs:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}de=_e}},setLocked:function(_e){z=_e},setClear:function(_e){xe!==_e&&(fe&&(_e=1-_e),a.clearDepth(_e),xe=_e)},reset:function(){z=!1,$=null,de=null,xe=null,fe=!1}}}function n(){let z=!1,fe=null,$=null,de=null,xe=null,_e=null,Fe=null,We=null,Be=null;return{setTest:function(ze){z||(ze?H(a.STENCIL_TEST):ne(a.STENCIL_TEST))},setMask:function(ze){fe!==ze&&!z&&(a.stencilMask(ze),fe=ze)},setFunc:function(ze,st,ot){($!==ze||de!==st||xe!==ot)&&(a.stencilFunc(ze,st,ot),$=ze,de=st,xe=ot)},setOp:function(ze,st,ot){(_e!==ze||Fe!==st||We!==ot)&&(a.stencilOp(ze,st,ot),_e=ze,Fe=st,We=ot)},setLocked:function(ze){z=ze},setClear:function(ze){Be!==ze&&(a.clearStencil(ze),Be=ze)},reset:function(){z=!1,fe=null,$=null,de=null,xe=null,_e=null,Fe=null,We=null,Be=null}}}const i=new t,s=new r,o=new n,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,S=null,x=null,w=null,C=null,b=new qe(0,0,0),R=0,y=!1,v=null,D=null,U=null,P=null,N=null;const q=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Q=0;const Y=a.getParameter(a.VERSION);Y.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),G=Q>=1):Y.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),G=Q>=2);let K=null,j={};const I=a.getParameter(a.SCISSOR_BOX),V=a.getParameter(a.VIEWPORT),ee=new rt().fromArray(I),F=new rt().fromArray(V);function k(z,fe,$,de){const xe=new Uint8Array(4),_e=a.createTexture();a.bindTexture(z,_e),a.texParameteri(z,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(z,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Fe=0;Fe<$;Fe++)z===a.TEXTURE_3D||z===a.TEXTURE_2D_ARRAY?a.texImage3D(fe,0,a.RGBA,1,1,de,0,a.RGBA,a.UNSIGNED_BYTE,xe):a.texImage2D(fe+Fe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,xe);return _e}const te={};te[a.TEXTURE_2D]=k(a.TEXTURE_2D,a.TEXTURE_2D,1),te[a.TEXTURE_CUBE_MAP]=k(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[a.TEXTURE_2D_ARRAY]=k(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),te[a.TEXTURE_3D]=k(a.TEXTURE_3D,a.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),H(a.DEPTH_TEST),s.setFunc(Li),be(!1),we(No),H(a.CULL_FACE),L(Bn);function H(z){u[z]!==!0&&(a.enable(z),u[z]=!0)}function ne(z){u[z]!==!1&&(a.disable(z),u[z]=!1)}function ge(z,fe){return h[z]!==fe?(a.bindFramebuffer(z,fe),h[z]=fe,z===a.DRAW_FRAMEBUFFER&&(h[a.FRAMEBUFFER]=fe),z===a.FRAMEBUFFER&&(h[a.DRAW_FRAMEBUFFER]=fe),!0):!1}function Se(z,fe){let $=d,de=!1;if(z){$=f.get(fe),$===void 0&&($=[],f.set(fe,$));const xe=z.textures;if($.length!==xe.length||$[0]!==a.COLOR_ATTACHMENT0){for(let _e=0,Fe=xe.length;_e<Fe;_e++)$[_e]=a.COLOR_ATTACHMENT0+_e;$.length=xe.length,de=!0}}else $[0]!==a.BACK&&($[0]=a.BACK,de=!0);de&&a.drawBuffers($)}function ve(z){return g!==z?(a.useProgram(z),g=z,!0):!1}const oe={[Qn]:a.FUNC_ADD,[gu]:a.FUNC_SUBTRACT,[_u]:a.FUNC_REVERSE_SUBTRACT};oe[vu]=a.MIN,oe[xu]=a.MAX;const Ne={[Mu]:a.ZERO,[Su]:a.ONE,[yu]:a.SRC_COLOR,[fs]:a.SRC_ALPHA,[Ru]:a.SRC_ALPHA_SATURATE,[Au]:a.DST_COLOR,[Tu]:a.DST_ALPHA,[Eu]:a.ONE_MINUS_SRC_COLOR,[hs]:a.ONE_MINUS_SRC_ALPHA,[wu]:a.ONE_MINUS_DST_COLOR,[bu]:a.ONE_MINUS_DST_ALPHA,[Cu]:a.CONSTANT_COLOR,[Uu]:a.ONE_MINUS_CONSTANT_COLOR,[Du]:a.CONSTANT_ALPHA,[Pu]:a.ONE_MINUS_CONSTANT_ALPHA};function L(z,fe,$,de,xe,_e,Fe,We,Be,ze){if(z===Bn){_===!0&&(ne(a.BLEND),_=!1);return}if(_===!1&&(H(a.BLEND),_=!0),z!==mu){if(z!==m||ze!==y){if((p!==Qn||x!==Qn)&&(a.blendEquation(a.FUNC_ADD),p=Qn,x=Qn),ze)switch(z){case Ui:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Oo:a.blendFunc(a.ONE,a.ONE);break;case Bo:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case ko:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ui:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Oo:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case Bo:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case ko:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}E=null,S=null,w=null,C=null,b.set(0,0,0),R=0,m=z,y=ze}return}xe=xe||fe,_e=_e||$,Fe=Fe||de,(fe!==p||xe!==x)&&(a.blendEquationSeparate(oe[fe],oe[xe]),p=fe,x=xe),($!==E||de!==S||_e!==w||Fe!==C)&&(a.blendFuncSeparate(Ne[$],Ne[de],Ne[_e],Ne[Fe]),E=$,S=de,w=_e,C=Fe),(We.equals(b)===!1||Be!==R)&&(a.blendColor(We.r,We.g,We.b,Be),b.copy(We),R=Be),m=z,y=!1}function Oe(z,fe){z.side===sn?ne(a.CULL_FACE):H(a.CULL_FACE);let $=z.side===Bt;fe&&($=!$),be($),z.blending===Ui&&z.transparent===!1?L(Bn):L(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),s.setFunc(z.depthFunc),s.setTest(z.depthTest),s.setMask(z.depthWrite),i.setMask(z.colorWrite);const de=z.stencilWrite;o.setTest(de),de&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ae(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?H(a.SAMPLE_ALPHA_TO_COVERAGE):ne(a.SAMPLE_ALPHA_TO_COVERAGE)}function be(z){v!==z&&(z?a.frontFace(a.CW):a.frontFace(a.CCW),v=z)}function we(z){z!==hu?(H(a.CULL_FACE),z!==D&&(z===No?a.cullFace(a.BACK):z===du?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ne(a.CULL_FACE),D=z}function se(z){z!==U&&(G&&a.lineWidth(z),U=z)}function Ae(z,fe,$){z?(H(a.POLYGON_OFFSET_FILL),(P!==fe||N!==$)&&(a.polygonOffset(fe,$),P=fe,N=$)):ne(a.POLYGON_OFFSET_FILL)}function pe(z){z?H(a.SCISSOR_TEST):ne(a.SCISSOR_TEST)}function T(z){z===void 0&&(z=a.TEXTURE0+q-1),K!==z&&(a.activeTexture(z),K=z)}function M(z,fe,$){$===void 0&&(K===null?$=a.TEXTURE0+q-1:$=K);let de=j[$];de===void 0&&(de={type:void 0,texture:void 0},j[$]=de),(de.type!==z||de.texture!==fe)&&(K!==$&&(a.activeTexture($),K=$),a.bindTexture(z,fe||te[z]),de.type=z,de.texture=fe)}function B(){const z=j[K];z!==void 0&&z.type!==void 0&&(a.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Z(){try{a.compressedTexImage2D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function J(){try{a.compressedTexImage3D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ae(){try{a.texSubImage2D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function he(){try{a.texSubImage3D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function De(){try{a.texStorage2D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ue(){try{a.texStorage3D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ye(){try{a.texImage2D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(){try{a.texImage3D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Te(z){ee.equals(z)===!1&&(a.scissor(z.x,z.y,z.z,z.w),ee.copy(z))}function le(z){F.equals(z)===!1&&(a.viewport(z.x,z.y,z.z,z.w),F.copy(z))}function Pe(z,fe){let $=c.get(fe);$===void 0&&($=new WeakMap,c.set(fe,$));let de=$.get(z);de===void 0&&(de=a.getUniformBlockIndex(fe,z.name),$.set(z,de))}function Ie(z,fe){const de=c.get(fe).get(z);l.get(fe)!==de&&(a.uniformBlockBinding(fe,de,z.__bindingPointIndex),l.set(fe,de))}function je(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),s.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},K=null,j={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,S=null,x=null,w=null,C=null,b=new qe(0,0,0),R=0,y=!1,v=null,D=null,U=null,P=null,N=null,ee.set(0,0,a.canvas.width,a.canvas.height),F.set(0,0,a.canvas.width,a.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:H,disable:ne,bindFramebuffer:ge,drawBuffers:Se,useProgram:ve,setBlending:L,setMaterial:Oe,setFlipSided:be,setCullFace:we,setLineWidth:se,setPolygonOffset:Ae,setScissorTest:pe,activeTexture:T,bindTexture:M,unbindTexture:B,compressedTexImage2D:Z,compressedTexImage3D:J,texImage2D:ye,texImage3D:Ee,updateUBOMapping:Pe,uniformBlockBinding:Ie,texStorage2D:De,texStorage3D:ue,texSubImage2D:ae,texSubImage3D:he,compressedTexSubImage2D:ce,compressedTexSubImage3D:me,scissor:Te,viewport:le,reset:je}}function Ag(a,e,t,r,n,i,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return d?new OffscreenCanvas(T,M):ua("canvas")}function _(T,M,B){let Z=1;const J=pe(T);if((J.width>B||J.height>B)&&(Z=B/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ae=Math.floor(Z*J.width),he=Math.floor(Z*J.height);h===void 0&&(h=g(ae,he));const ce=M?g(ae,he):h;return ce.width=ae,ce.height=he,ce.getContext("2d").drawImage(T,0,0,ae,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ae+"x"+he+")."),ce}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){a.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?a.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function S(T,M,B,Z,J=!1){if(T!==null){if(a[T]!==void 0)return a[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ae=M;if(M===a.RED&&(B===a.FLOAT&&(ae=a.R32F),B===a.HALF_FLOAT&&(ae=a.R16F),B===a.UNSIGNED_BYTE&&(ae=a.R8)),M===a.RED_INTEGER&&(B===a.UNSIGNED_BYTE&&(ae=a.R8UI),B===a.UNSIGNED_SHORT&&(ae=a.R16UI),B===a.UNSIGNED_INT&&(ae=a.R32UI),B===a.BYTE&&(ae=a.R8I),B===a.SHORT&&(ae=a.R16I),B===a.INT&&(ae=a.R32I)),M===a.RG&&(B===a.FLOAT&&(ae=a.RG32F),B===a.HALF_FLOAT&&(ae=a.RG16F),B===a.UNSIGNED_BYTE&&(ae=a.RG8)),M===a.RG_INTEGER&&(B===a.UNSIGNED_BYTE&&(ae=a.RG8UI),B===a.UNSIGNED_SHORT&&(ae=a.RG16UI),B===a.UNSIGNED_INT&&(ae=a.RG32UI),B===a.BYTE&&(ae=a.RG8I),B===a.SHORT&&(ae=a.RG16I),B===a.INT&&(ae=a.RG32I)),M===a.RGB_INTEGER&&(B===a.UNSIGNED_BYTE&&(ae=a.RGB8UI),B===a.UNSIGNED_SHORT&&(ae=a.RGB16UI),B===a.UNSIGNED_INT&&(ae=a.RGB32UI),B===a.BYTE&&(ae=a.RGB8I),B===a.SHORT&&(ae=a.RGB16I),B===a.INT&&(ae=a.RGB32I)),M===a.RGBA_INTEGER&&(B===a.UNSIGNED_BYTE&&(ae=a.RGBA8UI),B===a.UNSIGNED_SHORT&&(ae=a.RGBA16UI),B===a.UNSIGNED_INT&&(ae=a.RGBA32UI),B===a.BYTE&&(ae=a.RGBA8I),B===a.SHORT&&(ae=a.RGBA16I),B===a.INT&&(ae=a.RGBA32I)),M===a.RGB&&B===a.UNSIGNED_INT_5_9_9_9_REV&&(ae=a.RGB9_E5),M===a.RGBA){const he=J?la:it.getTransfer(Z);B===a.FLOAT&&(ae=a.RGBA32F),B===a.HALF_FLOAT&&(ae=a.RGBA16F),B===a.UNSIGNED_BYTE&&(ae=he===at?a.SRGB8_ALPHA8:a.RGBA8),B===a.UNSIGNED_SHORT_4_4_4_4&&(ae=a.RGBA4),B===a.UNSIGNED_SHORT_5_5_5_1&&(ae=a.RGB5_A1)}return(ae===a.R16F||ae===a.R32F||ae===a.RG16F||ae===a.RG32F||ae===a.RGBA16F||ae===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function x(T,M){let B;return T?M===null||M===ii||M===Ni?B=a.DEPTH24_STENCIL8:M===Tn?B=a.DEPTH32F_STENCIL8:M===_r&&(B=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ii||M===Ni?B=a.DEPTH_COMPONENT24:M===Tn?B=a.DEPTH_COMPONENT32F:M===_r&&(B=a.DEPTH_COMPONENT16),B}function w(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==cn&&T.minFilter!==Jt?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function C(T){const M=T.target;M.removeEventListener("dispose",C),R(M),M.isVideoTexture&&u.delete(M)}function b(T){const M=T.target;M.removeEventListener("dispose",b),v(M)}function R(T){const M=r.get(T);if(M.__webglInit===void 0)return;const B=T.source,Z=f.get(B);if(Z){const J=Z[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&y(T),Object.keys(Z).length===0&&f.delete(B)}r.remove(T)}function y(T){const M=r.get(T);a.deleteTexture(M.__webglTexture);const B=T.source,Z=f.get(B);delete Z[M.__cacheKey],s.memory.textures--}function v(T){const M=r.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),r.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let J=0;J<M.__webglFramebuffer[Z].length;J++)a.deleteFramebuffer(M.__webglFramebuffer[Z][J]);else a.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&a.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)a.deleteFramebuffer(M.__webglFramebuffer[Z]);else a.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&a.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&a.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&a.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&a.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=T.textures;for(let Z=0,J=B.length;Z<J;Z++){const ae=r.get(B[Z]);ae.__webglTexture&&(a.deleteTexture(ae.__webglTexture),s.memory.textures--),r.remove(B[Z])}r.remove(T)}let D=0;function U(){D=0}function P(){const T=D;return T>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+n.maxTextures),D+=1,T}function N(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function q(T,M){const B=r.get(T);if(T.isVideoTexture&&se(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(B,T,M);return}}t.bindTexture(a.TEXTURE_2D,B.__webglTexture,a.TEXTURE0+M)}function G(T,M){const B=r.get(T);if(T.version>0&&B.__version!==T.version){F(B,T,M);return}t.bindTexture(a.TEXTURE_2D_ARRAY,B.__webglTexture,a.TEXTURE0+M)}function Q(T,M){const B=r.get(T);if(T.version>0&&B.__version!==T.version){F(B,T,M);return}t.bindTexture(a.TEXTURE_3D,B.__webglTexture,a.TEXTURE0+M)}function Y(T,M){const B=r.get(T);if(T.version>0&&B.__version!==T.version){k(B,T,M);return}t.bindTexture(a.TEXTURE_CUBE_MAP,B.__webglTexture,a.TEXTURE0+M)}const K={[ys]:a.REPEAT,[ei]:a.CLAMP_TO_EDGE,[Es]:a.MIRRORED_REPEAT},j={[cn]:a.NEAREST,[Gu]:a.NEAREST_MIPMAP_NEAREST,[wr]:a.NEAREST_MIPMAP_LINEAR,[Jt]:a.LINEAR,[Da]:a.LINEAR_MIPMAP_NEAREST,[ti]:a.LINEAR_MIPMAP_LINEAR},I={[Wu]:a.NEVER,[Zu]:a.ALWAYS,[Xu]:a.LESS,[Mc]:a.LEQUAL,[Yu]:a.EQUAL,[Ku]:a.GEQUAL,[qu]:a.GREATER,[ju]:a.NOTEQUAL};function V(T,M){if(M.type===Tn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Jt||M.magFilter===Da||M.magFilter===wr||M.magFilter===ti||M.minFilter===Jt||M.minFilter===Da||M.minFilter===wr||M.minFilter===ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(T,a.TEXTURE_WRAP_S,K[M.wrapS]),a.texParameteri(T,a.TEXTURE_WRAP_T,K[M.wrapT]),(T===a.TEXTURE_3D||T===a.TEXTURE_2D_ARRAY)&&a.texParameteri(T,a.TEXTURE_WRAP_R,K[M.wrapR]),a.texParameteri(T,a.TEXTURE_MAG_FILTER,j[M.magFilter]),a.texParameteri(T,a.TEXTURE_MIN_FILTER,j[M.minFilter]),M.compareFunction&&(a.texParameteri(T,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(T,a.TEXTURE_COMPARE_FUNC,I[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===cn||M.minFilter!==wr&&M.minFilter!==ti||M.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");a.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function ee(T,M){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",C));const Z=M.source;let J=f.get(Z);J===void 0&&(J={},f.set(Z,J));const ae=N(M);if(ae!==T.__cacheKey){J[ae]===void 0&&(J[ae]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,B=!0),J[ae].usedTimes++;const he=J[T.__cacheKey];he!==void 0&&(J[T.__cacheKey].usedTimes--,he.usedTimes===0&&y(M)),T.__cacheKey=ae,T.__webglTexture=J[ae].texture}return B}function F(T,M,B){let Z=a.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=a.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=a.TEXTURE_3D);const J=ee(T,M),ae=M.source;t.bindTexture(Z,T.__webglTexture,a.TEXTURE0+B);const he=r.get(ae);if(ae.version!==he.__version||J===!0){t.activeTexture(a.TEXTURE0+B);const ce=it.getPrimaries(it.workingColorSpace),me=M.colorSpace===On?null:it.getPrimaries(M.colorSpace),De=M.colorSpace===On||ce===me?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,M.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,M.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let ue=_(M.image,!1,n.maxTextureSize);ue=Ae(M,ue);const ye=i.convert(M.format,M.colorSpace),Ee=i.convert(M.type);let Te=S(M.internalFormat,ye,Ee,M.colorSpace,M.isVideoTexture);V(Z,M);let le;const Pe=M.mipmaps,Ie=M.isVideoTexture!==!0,je=he.__version===void 0||J===!0,z=ae.dataReady,fe=w(M,ue);if(M.isDepthTexture)Te=x(M.format===Oi,M.type),je&&(Ie?t.texStorage2D(a.TEXTURE_2D,1,Te,ue.width,ue.height):t.texImage2D(a.TEXTURE_2D,0,Te,ue.width,ue.height,0,ye,Ee,null));else if(M.isDataTexture)if(Pe.length>0){Ie&&je&&t.texStorage2D(a.TEXTURE_2D,fe,Te,Pe[0].width,Pe[0].height);for(let $=0,de=Pe.length;$<de;$++)le=Pe[$],Ie?z&&t.texSubImage2D(a.TEXTURE_2D,$,0,0,le.width,le.height,ye,Ee,le.data):t.texImage2D(a.TEXTURE_2D,$,Te,le.width,le.height,0,ye,Ee,le.data);M.generateMipmaps=!1}else Ie?(je&&t.texStorage2D(a.TEXTURE_2D,fe,Te,ue.width,ue.height),z&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,ue.width,ue.height,ye,Ee,ue.data)):t.texImage2D(a.TEXTURE_2D,0,Te,ue.width,ue.height,0,ye,Ee,ue.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ie&&je&&t.texStorage3D(a.TEXTURE_2D_ARRAY,fe,Te,Pe[0].width,Pe[0].height,ue.depth);for(let $=0,de=Pe.length;$<de;$++)if(le=Pe[$],M.format!==ln)if(ye!==null)if(Ie){if(z)if(M.layerUpdates.size>0){const xe=ml(le.width,le.height,M.format,M.type);for(const _e of M.layerUpdates){const Fe=le.data.subarray(_e*xe/le.data.BYTES_PER_ELEMENT,(_e+1)*xe/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,$,0,0,_e,le.width,le.height,1,ye,Fe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,$,0,0,0,le.width,le.height,ue.depth,ye,le.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,$,Te,le.width,le.height,ue.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?z&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,$,0,0,0,le.width,le.height,ue.depth,ye,Ee,le.data):t.texImage3D(a.TEXTURE_2D_ARRAY,$,Te,le.width,le.height,ue.depth,0,ye,Ee,le.data)}else{Ie&&je&&t.texStorage2D(a.TEXTURE_2D,fe,Te,Pe[0].width,Pe[0].height);for(let $=0,de=Pe.length;$<de;$++)le=Pe[$],M.format!==ln?ye!==null?Ie?z&&t.compressedTexSubImage2D(a.TEXTURE_2D,$,0,0,le.width,le.height,ye,le.data):t.compressedTexImage2D(a.TEXTURE_2D,$,Te,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?z&&t.texSubImage2D(a.TEXTURE_2D,$,0,0,le.width,le.height,ye,Ee,le.data):t.texImage2D(a.TEXTURE_2D,$,Te,le.width,le.height,0,ye,Ee,le.data)}else if(M.isDataArrayTexture)if(Ie){if(je&&t.texStorage3D(a.TEXTURE_2D_ARRAY,fe,Te,ue.width,ue.height,ue.depth),z)if(M.layerUpdates.size>0){const $=ml(ue.width,ue.height,M.format,M.type);for(const de of M.layerUpdates){const xe=ue.data.subarray(de*$/ue.data.BYTES_PER_ELEMENT,(de+1)*$/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,de,ue.width,ue.height,1,ye,Ee,xe)}M.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ye,Ee,ue.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Te,ue.width,ue.height,ue.depth,0,ye,Ee,ue.data);else if(M.isData3DTexture)Ie?(je&&t.texStorage3D(a.TEXTURE_3D,fe,Te,ue.width,ue.height,ue.depth),z&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ye,Ee,ue.data)):t.texImage3D(a.TEXTURE_3D,0,Te,ue.width,ue.height,ue.depth,0,ye,Ee,ue.data);else if(M.isFramebufferTexture){if(je)if(Ie)t.texStorage2D(a.TEXTURE_2D,fe,Te,ue.width,ue.height);else{let $=ue.width,de=ue.height;for(let xe=0;xe<fe;xe++)t.texImage2D(a.TEXTURE_2D,xe,Te,$,de,0,ye,Ee,null),$>>=1,de>>=1}}else if(Pe.length>0){if(Ie&&je){const $=pe(Pe[0]);t.texStorage2D(a.TEXTURE_2D,fe,Te,$.width,$.height)}for(let $=0,de=Pe.length;$<de;$++)le=Pe[$],Ie?z&&t.texSubImage2D(a.TEXTURE_2D,$,0,0,ye,Ee,le):t.texImage2D(a.TEXTURE_2D,$,Te,ye,Ee,le);M.generateMipmaps=!1}else if(Ie){if(je){const $=pe(ue);t.texStorage2D(a.TEXTURE_2D,fe,Te,$.width,$.height)}z&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,ye,Ee,ue)}else t.texImage2D(a.TEXTURE_2D,0,Te,ye,Ee,ue);m(M)&&p(Z),he.__version=ae.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function k(T,M,B){if(M.image.length!==6)return;const Z=ee(T,M),J=M.source;t.bindTexture(a.TEXTURE_CUBE_MAP,T.__webglTexture,a.TEXTURE0+B);const ae=r.get(J);if(J.version!==ae.__version||Z===!0){t.activeTexture(a.TEXTURE0+B);const he=it.getPrimaries(it.workingColorSpace),ce=M.colorSpace===On?null:it.getPrimaries(M.colorSpace),me=M.colorSpace===On||he===ce?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,M.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,M.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const De=M.isCompressedTexture||M.image[0].isCompressedTexture,ue=M.image[0]&&M.image[0].isDataTexture,ye=[];for(let de=0;de<6;de++)!De&&!ue?ye[de]=_(M.image[de],!0,n.maxCubemapSize):ye[de]=ue?M.image[de].image:M.image[de],ye[de]=Ae(M,ye[de]);const Ee=ye[0],Te=i.convert(M.format,M.colorSpace),le=i.convert(M.type),Pe=S(M.internalFormat,Te,le,M.colorSpace),Ie=M.isVideoTexture!==!0,je=ae.__version===void 0||Z===!0,z=J.dataReady;let fe=w(M,Ee);V(a.TEXTURE_CUBE_MAP,M);let $;if(De){Ie&&je&&t.texStorage2D(a.TEXTURE_CUBE_MAP,fe,Pe,Ee.width,Ee.height);for(let de=0;de<6;de++){$=ye[de].mipmaps;for(let xe=0;xe<$.length;xe++){const _e=$[xe];M.format!==ln?Te!==null?Ie?z&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe,0,0,_e.width,_e.height,Te,_e.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe,Pe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?z&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe,0,0,_e.width,_e.height,Te,le,_e.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe,Pe,_e.width,_e.height,0,Te,le,_e.data)}}}else{if($=M.mipmaps,Ie&&je){$.length>0&&fe++;const de=pe(ye[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,fe,Pe,de.width,de.height)}for(let de=0;de<6;de++)if(ue){Ie?z&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ye[de].width,ye[de].height,Te,le,ye[de].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Pe,ye[de].width,ye[de].height,0,Te,le,ye[de].data);for(let xe=0;xe<$.length;xe++){const Fe=$[xe].image[de].image;Ie?z&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe+1,0,0,Fe.width,Fe.height,Te,le,Fe.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe+1,Pe,Fe.width,Fe.height,0,Te,le,Fe.data)}}else{Ie?z&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Te,le,ye[de]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Pe,Te,le,ye[de]);for(let xe=0;xe<$.length;xe++){const _e=$[xe];Ie?z&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe+1,0,0,Te,le,_e.image[de]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe+1,Pe,Te,le,_e.image[de])}}}m(M)&&p(a.TEXTURE_CUBE_MAP),ae.__version=J.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function te(T,M,B,Z,J,ae){const he=i.convert(B.format,B.colorSpace),ce=i.convert(B.type),me=S(B.internalFormat,he,ce,B.colorSpace),De=r.get(M),ue=r.get(B);if(ue.__renderTarget=M,!De.__hasExternalTextures){const ye=Math.max(1,M.width>>ae),Ee=Math.max(1,M.height>>ae);J===a.TEXTURE_3D||J===a.TEXTURE_2D_ARRAY?t.texImage3D(J,ae,me,ye,Ee,M.depth,0,he,ce,null):t.texImage2D(J,ae,me,ye,Ee,0,he,ce,null)}t.bindFramebuffer(a.FRAMEBUFFER,T),we(M)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Z,J,ue.__webglTexture,0,be(M)):(J===a.TEXTURE_2D||J>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,Z,J,ue.__webglTexture,ae),t.bindFramebuffer(a.FRAMEBUFFER,null)}function H(T,M,B){if(a.bindRenderbuffer(a.RENDERBUFFER,T),M.depthBuffer){const Z=M.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,ae=x(M.stencilBuffer,J),he=M.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ce=be(M);we(M)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ce,ae,M.width,M.height):B?a.renderbufferStorageMultisample(a.RENDERBUFFER,ce,ae,M.width,M.height):a.renderbufferStorage(a.RENDERBUFFER,ae,M.width,M.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,he,a.RENDERBUFFER,T)}else{const Z=M.textures;for(let J=0;J<Z.length;J++){const ae=Z[J],he=i.convert(ae.format,ae.colorSpace),ce=i.convert(ae.type),me=S(ae.internalFormat,he,ce,ae.colorSpace),De=be(M);B&&we(M)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,De,me,M.width,M.height):we(M)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,De,me,M.width,M.height):a.renderbufferStorage(a.RENDERBUFFER,me,M.width,M.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ne(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=r.get(M.depthTexture);Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const J=Z.__webglTexture,ae=be(M);if(M.depthTexture.format===Di)we(M)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,J,0,ae):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,J,0);else if(M.depthTexture.format===Oi)we(M)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,J,0,ae):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function ge(T){const M=r.get(T),B=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=Z}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ne(M.__webglFramebuffer,T)}else if(B){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=a.createRenderbuffer(),H(M.__webglDepthbuffer[Z],T,!1);else{const J=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer[Z];a.bindRenderbuffer(a.RENDERBUFFER,ae),a.framebufferRenderbuffer(a.FRAMEBUFFER,J,a.RENDERBUFFER,ae)}}else if(t.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=a.createRenderbuffer(),H(M.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,J),a.framebufferRenderbuffer(a.FRAMEBUFFER,Z,a.RENDERBUFFER,J)}t.bindFramebuffer(a.FRAMEBUFFER,null)}function Se(T,M,B){const Z=r.get(T);M!==void 0&&te(Z.__webglFramebuffer,T,T.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),B!==void 0&&ge(T)}function ve(T){const M=T.texture,B=r.get(T),Z=r.get(M);T.addEventListener("dispose",b);const J=T.textures,ae=T.isWebGLCubeRenderTarget===!0,he=J.length>1;if(he||(Z.__webglTexture===void 0&&(Z.__webglTexture=a.createTexture()),Z.__version=M.version,s.memory.textures++),ae){B.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[ce]=[];for(let me=0;me<M.mipmaps.length;me++)B.__webglFramebuffer[ce][me]=a.createFramebuffer()}else B.__webglFramebuffer[ce]=a.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)B.__webglFramebuffer[ce]=a.createFramebuffer()}else B.__webglFramebuffer=a.createFramebuffer();if(he)for(let ce=0,me=J.length;ce<me;ce++){const De=r.get(J[ce]);De.__webglTexture===void 0&&(De.__webglTexture=a.createTexture(),s.memory.textures++)}if(T.samples>0&&we(T)===!1){B.__webglMultisampledFramebuffer=a.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ce=0;ce<J.length;ce++){const me=J[ce];B.__webglColorRenderbuffer[ce]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,B.__webglColorRenderbuffer[ce]);const De=i.convert(me.format,me.colorSpace),ue=i.convert(me.type),ye=S(me.internalFormat,De,ue,me.colorSpace,T.isXRRenderTarget===!0),Ee=be(T);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ee,ye,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ce,a.RENDERBUFFER,B.__webglColorRenderbuffer[ce])}a.bindRenderbuffer(a.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=a.createRenderbuffer(),H(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ae){t.bindTexture(a.TEXTURE_CUBE_MAP,Z.__webglTexture),V(a.TEXTURE_CUBE_MAP,M);for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)te(B.__webglFramebuffer[ce][me],T,M,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ce,me);else te(B.__webglFramebuffer[ce],T,M,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(M)&&p(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let ce=0,me=J.length;ce<me;ce++){const De=J[ce],ue=r.get(De);t.bindTexture(a.TEXTURE_2D,ue.__webglTexture),V(a.TEXTURE_2D,De),te(B.__webglFramebuffer,T,De,a.COLOR_ATTACHMENT0+ce,a.TEXTURE_2D,0),m(De)&&p(a.TEXTURE_2D)}t.unbindTexture()}else{let ce=a.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ce=T.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(ce,Z.__webglTexture),V(ce,M),M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)te(B.__webglFramebuffer[me],T,M,a.COLOR_ATTACHMENT0,ce,me);else te(B.__webglFramebuffer,T,M,a.COLOR_ATTACHMENT0,ce,0);m(M)&&p(ce),t.unbindTexture()}T.depthBuffer&&ge(T)}function oe(T){const M=T.textures;for(let B=0,Z=M.length;B<Z;B++){const J=M[B];if(m(J)){const ae=E(T),he=r.get(J).__webglTexture;t.bindTexture(ae,he),p(ae),t.unbindTexture()}}}const Ne=[],L=[];function Oe(T){if(T.samples>0){if(we(T)===!1){const M=T.textures,B=T.width,Z=T.height;let J=a.COLOR_BUFFER_BIT;const ae=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,he=r.get(T),ce=M.length>1;if(ce)for(let me=0;me<M.length;me++)t.bindFramebuffer(a.FRAMEBUFFER,he.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+me,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,he.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+me,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let me=0;me<M.length;me++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=a.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=a.STENCIL_BUFFER_BIT)),ce){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,he.__webglColorRenderbuffer[me]);const De=r.get(M[me]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,De,0)}a.blitFramebuffer(0,0,B,Z,0,0,B,Z,J,a.NEAREST),l===!0&&(Ne.length=0,L.length=0,Ne.push(a.COLOR_ATTACHMENT0+me),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ne.push(ae),L.push(ae),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,L)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Ne))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ce)for(let me=0;me<M.length;me++){t.bindFramebuffer(a.FRAMEBUFFER,he.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+me,a.RENDERBUFFER,he.__webglColorRenderbuffer[me]);const De=r.get(M[me]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,he.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+me,a.TEXTURE_2D,De,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const M=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[M])}}}function be(T){return Math.min(n.maxSamples,T.samples)}function we(T){const M=r.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function se(T){const M=s.render.frame;u.get(T)!==M&&(u.set(T,M),T.update())}function Ae(T,M){const B=T.colorSpace,Z=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Bi&&B!==On&&(it.getTransfer(B)===at?(Z!==ln||J!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function pe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=U,this.setTexture2D=q,this.setTexture2DArray=G,this.setTexture3D=Q,this.setTextureCube=Y,this.rebindTextures=Se,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=te,this.useMultisampledRTT=we}function wg(a,e){function t(r,n=On){let i;const s=it.getTransfer(n);if(r===wn)return a.UNSIGNED_BYTE;if(r===ao)return a.UNSIGNED_SHORT_4_4_4_4;if(r===so)return a.UNSIGNED_SHORT_5_5_5_1;if(r===uc)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===lc)return a.BYTE;if(r===cc)return a.SHORT;if(r===_r)return a.UNSIGNED_SHORT;if(r===ro)return a.INT;if(r===ii)return a.UNSIGNED_INT;if(r===Tn)return a.FLOAT;if(r===xr)return a.HALF_FLOAT;if(r===fc)return a.ALPHA;if(r===hc)return a.RGB;if(r===ln)return a.RGBA;if(r===dc)return a.LUMINANCE;if(r===pc)return a.LUMINANCE_ALPHA;if(r===Di)return a.DEPTH_COMPONENT;if(r===Oi)return a.DEPTH_STENCIL;if(r===mc)return a.RED;if(r===oo)return a.RED_INTEGER;if(r===gc)return a.RG;if(r===lo)return a.RG_INTEGER;if(r===co)return a.RGBA_INTEGER;if(r===$r||r===ea||r===ta||r===na)if(s===at)if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(r===$r)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ea)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ta)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===na)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=e.get("WEBGL_compressed_texture_s3tc"),i!==null){if(r===$r)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ea)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ta)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===na)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ts||r===bs||r===As||r===ws)if(i=e.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(r===Ts)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bs)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===As)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ws)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rs||r===Cs||r===Us)if(i=e.get("WEBGL_compressed_texture_etc"),i!==null){if(r===Rs||r===Cs)return s===at?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(r===Us)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ds||r===Ps||r===Ls||r===Is||r===Fs||r===Ns||r===Os||r===Bs||r===ks||r===zs||r===Gs||r===Vs||r===Hs||r===Ws)if(i=e.get("WEBGL_compressed_texture_astc"),i!==null){if(r===Ds)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ps)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ls)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Is)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Fs)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ns)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Os)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Bs)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ks)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===zs)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Gs)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Vs)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Hs)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ws)return s===at?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ia||r===Xs||r===Ys)if(i=e.get("EXT_texture_compression_bptc"),i!==null){if(r===ia)return s===at?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Xs)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ys)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===_c||r===qs||r===js||r===Ks)if(i=e.get("EXT_texture_compression_rgtc"),i!==null){if(r===ia)return i.COMPRESSED_RED_RGTC1_EXT;if(r===qs)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===js)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ks)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ni?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:t}}const Rg={type:"move"};class os{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,i=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,r),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,r),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&i!==null&&(n=i),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rg)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=i!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Ri;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Cg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ug=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Dg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const n=new Pt,i=e.properties.get(n);i.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Gn({vertexShader:Cg,fragmentShader:Ug,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new si(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pg extends zi{constructor(e,t){super();const r=this;let n=null,i=1,s=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new Dg,m=t.getContextAttributes();let p=null,E=null;const S=[],x=[],w=new Ze;let C=null;const b=new Xt;b.viewport=new rt;const R=new Xt;R.viewport=new rt;const y=[b,R],v=new Jf;let D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let k=S[F];return k===void 0&&(k=new os,S[F]=k),k.getTargetRaySpace()},this.getControllerGrip=function(F){let k=S[F];return k===void 0&&(k=new os,S[F]=k),k.getGripSpace()},this.getHand=function(F){let k=S[F];return k===void 0&&(k=new os,S[F]=k),k.getHandSpace()};function P(F){const k=x.indexOf(F.inputSource);if(k===-1)return;const te=S[k];te!==void 0&&(te.update(F.inputSource,F.frame,c||s),te.dispatchEvent({type:F.type,data:F.inputSource}))}function N(){n.removeEventListener("select",P),n.removeEventListener("selectstart",P),n.removeEventListener("selectend",P),n.removeEventListener("squeeze",P),n.removeEventListener("squeezestart",P),n.removeEventListener("squeezeend",P),n.removeEventListener("end",N),n.removeEventListener("inputsourceschange",q);for(let F=0;F<S.length;F++){const k=x[F];k!==null&&(x[F]=null,S[F].disconnect(k))}D=null,U=null,_.reset(),e.setRenderTarget(p),d=null,f=null,h=null,n=null,E=null,ee.stop(),r.isPresenting=!1,e.setPixelRatio(C),e.setSize(w.width,w.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){i=F,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(F){if(n=F,n!==null){if(p=e.getRenderTarget(),n.addEventListener("select",P),n.addEventListener("selectstart",P),n.addEventListener("selectend",P),n.addEventListener("squeeze",P),n.addEventListener("squeezestart",P),n.addEventListener("squeezeend",P),n.addEventListener("end",N),n.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(w),n.renderState.layers===void 0){const k={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:i};d=new XRWebGLLayer(n,t,k),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new ri(d.framebufferWidth,d.framebufferHeight,{format:ln,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let k=null,te=null,H=null;m.depth&&(H=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,k=m.stencil?Oi:Di,te=m.stencil?Ni:ii);const ne={colorFormat:t.RGBA8,depthFormat:H,scaleFactor:i};h=new XRWebGLBinding(n,t),f=h.createProjectionLayer(ne),n.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new ri(f.textureWidth,f.textureHeight,{format:ln,type:wn,depthTexture:new Ic(f.textureWidth,f.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await n.requestReferenceSpace(o),ee.setContext(n),ee.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(F){for(let k=0;k<F.removed.length;k++){const te=F.removed[k],H=x.indexOf(te);H>=0&&(x[H]=null,S[H].disconnect(te))}for(let k=0;k<F.added.length;k++){const te=F.added[k];let H=x.indexOf(te);if(H===-1){for(let ge=0;ge<S.length;ge++)if(ge>=x.length){x.push(te),H=ge;break}else if(x[ge]===null){x[ge]=te,H=ge;break}if(H===-1)break}const ne=S[H];ne&&ne.connect(te)}}const G=new X,Q=new X;function Y(F,k,te){G.setFromMatrixPosition(k.matrixWorld),Q.setFromMatrixPosition(te.matrixWorld);const H=G.distanceTo(Q),ne=k.projectionMatrix.elements,ge=te.projectionMatrix.elements,Se=ne[14]/(ne[10]-1),ve=ne[14]/(ne[10]+1),oe=(ne[9]+1)/ne[5],Ne=(ne[9]-1)/ne[5],L=(ne[8]-1)/ne[0],Oe=(ge[8]+1)/ge[0],be=Se*L,we=Se*Oe,se=H/(-L+Oe),Ae=se*-L;if(k.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Ae),F.translateZ(se),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),ne[10]===-1)F.projectionMatrix.copy(k.projectionMatrix),F.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const pe=Se+se,T=ve+se,M=be-Ae,B=we+(H-Ae),Z=oe*ve/T*pe,J=Ne*ve/T*pe;F.projectionMatrix.makePerspective(M,B,Z,J,pe,T),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function K(F,k){k===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(k.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(n===null)return;let k=F.near,te=F.far;_.texture!==null&&(_.depthNear>0&&(k=_.depthNear),_.depthFar>0&&(te=_.depthFar)),v.near=R.near=b.near=k,v.far=R.far=b.far=te,(D!==v.near||U!==v.far)&&(n.updateRenderState({depthNear:v.near,depthFar:v.far}),D=v.near,U=v.far),b.layers.mask=F.layers.mask|2,R.layers.mask=F.layers.mask|4,v.layers.mask=b.layers.mask|R.layers.mask;const H=F.parent,ne=v.cameras;K(v,H);for(let ge=0;ge<ne.length;ge++)K(ne[ge],H);ne.length===2?Y(v,b,R):v.projectionMatrix.copy(b.projectionMatrix),j(F,v,H)};function j(F,k,te){te===null?F.matrix.copy(k.matrixWorld):(F.matrix.copy(te.matrixWorld),F.matrix.invert(),F.matrix.multiply(k.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(k.projectionMatrix),F.projectionMatrixInverse.copy(k.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=vr*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(F){l=F,f!==null&&(f.fixedFoveation=F),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=F)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let I=null;function V(F,k){if(u=k.getViewerPose(c||s),g=k,u!==null){const te=u.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let H=!1;te.length!==v.cameras.length&&(v.cameras.length=0,H=!0);for(let ge=0;ge<te.length;ge++){const Se=te[ge];let ve=null;if(d!==null)ve=d.getViewport(Se);else{const Ne=h.getViewSubImage(f,Se);ve=Ne.viewport,ge===0&&(e.setRenderTargetTextures(E,Ne.colorTexture,f.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(E))}let oe=y[ge];oe===void 0&&(oe=new Xt,oe.layers.enable(ge),oe.viewport=new rt,y[ge]=oe),oe.matrix.fromArray(Se.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(Se.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ve.x,ve.y,ve.width,ve.height),ge===0&&(v.matrix.copy(oe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),H===!0&&v.cameras.push(oe)}const ne=n.enabledFeatures;if(ne&&ne.includes("depth-sensing")){const ge=h.getDepthInformation(te[0]);ge&&ge.isValid&&ge.texture&&_.init(e,ge,n.renderState)}}for(let te=0;te<S.length;te++){const H=x[te],ne=S[te];H!==null&&ne!==void 0&&ne.update(H,k,c||s)}I&&I(F,k),k.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:k}),g=null}const ee=new zc;ee.setAnimationLoop(V),this.setAnimationLoop=function(F){I=F},this.dispose=function(){}}}const jn=new mn,Lg=new ut;function Ig(a,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function r(m,p){p.color.getRGB(m.fogColor.value,Cc(a)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,E,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),h(m,p)):p.isMeshPhongMaterial?(i(m,p),u(m,p)):p.isMeshStandardMaterial?(i(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(i(m,p),g(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),_(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Bt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Bt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),S=E.envMap,x=E.envMapRotation;S&&(m.envMap.value=S,jn.copy(x),jn.x*=-1,jn.y*=-1,jn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),m.envMapRotation.value.setFromMatrix4(Lg.makeRotationFromEuler(jn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function Fg(a,e,t,r){let n={},i={},s=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){const x=S.program;r.uniformBlockBinding(E,x)}function c(E,S){let x=n[E.id];x===void 0&&(g(E),x=u(E),n[E.id]=x,E.addEventListener("dispose",m));const w=S.program;r.updateUBOMapping(E,w);const C=e.render.frame;i[E.id]!==C&&(f(E),i[E.id]=C)}function u(E){const S=h();E.__bindingPointIndex=S;const x=a.createBuffer(),w=E.__size,C=E.usage;return a.bindBuffer(a.UNIFORM_BUFFER,x),a.bufferData(a.UNIFORM_BUFFER,w,C),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,S,x),x}function h(){for(let E=0;E<o;E++)if(s.indexOf(E)===-1)return s.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const S=n[E.id],x=E.uniforms,w=E.__cache;a.bindBuffer(a.UNIFORM_BUFFER,S);for(let C=0,b=x.length;C<b;C++){const R=Array.isArray(x[C])?x[C]:[x[C]];for(let y=0,v=R.length;y<v;y++){const D=R[y];if(d(D,C,y,w)===!0){const U=D.__offset,P=Array.isArray(D.value)?D.value:[D.value];let N=0;for(let q=0;q<P.length;q++){const G=P[q],Q=_(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,a.bufferSubData(a.UNIFORM_BUFFER,U+N,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,N),N+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,U,D.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function d(E,S,x,w){const C=E.value,b=S+"_"+x;if(w[b]===void 0)return typeof C=="number"||typeof C=="boolean"?w[b]=C:w[b]=C.clone(),!0;{const R=w[b];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return w[b]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function g(E){const S=E.uniforms;let x=0;const w=16;for(let b=0,R=S.length;b<R;b++){const y=Array.isArray(S[b])?S[b]:[S[b]];for(let v=0,D=y.length;v<D;v++){const U=y[v],P=Array.isArray(U.value)?U.value:[U.value];for(let N=0,q=P.length;N<q;N++){const G=P[N],Q=_(G),Y=x%w,K=Y%Q.boundary,j=Y+K;x+=K,j!==0&&w-j<Q.storage&&(x+=w-j),U.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=Q.storage}}}const C=x%w;return C>0&&(x+=w-C),E.__size=x,E.__cache={},this}function _(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){const S=E.target;S.removeEventListener("dispose",m);const x=s.indexOf(S.__bindingPointIndex);s.splice(x,1),a.deleteBuffer(n[S.id]),delete n[S.id],delete i[S.id]}function p(){for(const E in n)a.deleteBuffer(n[E]);s=[],n={},i={}}return{bind:l,update:c,dispose:p}}class Ng{constructor(e={}){const{canvas:t=mf(),context:r=null,depth:n=!0,stencil:i=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=r.getContextAttributes().alpha}else d=s;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wt,this.toneMapping=kn,this.toneMappingExposure=1;const x=this;let w=!1,C=0,b=0,R=null,y=-1,v=null;const D=new rt,U=new rt;let P=null;const N=new qe(0);let q=0,G=t.width,Q=t.height,Y=1,K=null,j=null;const I=new rt(0,0,G,Q),V=new rt(0,0,G,Q);let ee=!1;const F=new ho;let k=!1,te=!1;const H=new ut,ne=new ut,ge=new X,Se=new rt,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Ne(){return R===null?Y:1}let L=r;function Oe(A,W){return t.getContext(A,W)}try{const A={alpha:!0,depth:n,stencil:i,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${io}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",_e,!1),L===null){const W="webgl2";if(L=Oe(W,A),L===null)throw Oe(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let be,we,se,Ae,pe,T,M,B,Z,J,ae,he,ce,me,De,ue,ye,Ee,Te,le,Pe,Ie,je,z;function fe(){be=new Xp(L),be.init(),Ie=new wg(L,be),we=new kp(L,be,e,Ie),se=new bg(L,be),we.reverseDepthBuffer&&f&&se.buffers.depth.setReversed(!0),Ae=new jp(L),pe=new hg,T=new Ag(L,be,se,pe,we,Ie,Ae),M=new Gp(x),B=new Wp(x),Z=new th(L),je=new Op(L,Z),J=new Yp(L,Z,Ae,je),ae=new Zp(L,J,Z,Ae),Te=new Kp(L,we,T),ue=new zp(pe),he=new fg(x,M,B,be,we,je,ue),ce=new Ig(x,pe),me=new pg,De=new Mg(be),Ee=new Np(x,M,B,se,ae,d,l),ye=new Eg(x,ae,we),z=new Fg(L,Ae,we,se),le=new Bp(L,be,Ae),Pe=new qp(L,be,Ae),Ae.programs=he.programs,x.capabilities=we,x.extensions=be,x.properties=pe,x.renderLists=me,x.shadowMap=ye,x.state=se,x.info=Ae}fe();const $=new Pg(x,L);this.xr=$,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=be.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=be.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(G,Q,!1))},this.getSize=function(A){return A.set(G,Q)},this.setSize=function(A,W,ie=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,Q=W,t.width=Math.floor(A*Y),t.height=Math.floor(W*Y),ie===!0&&(t.style.width=A+"px",t.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(G*Y,Q*Y).floor()},this.setDrawingBufferSize=function(A,W,ie){G=A,Q=W,Y=ie,t.width=Math.floor(A*ie),t.height=Math.floor(W*ie),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(I)},this.setViewport=function(A,W,ie,re){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,W,ie,re),se.viewport(D.copy(I).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(V)},this.setScissor=function(A,W,ie,re){A.isVector4?V.set(A.x,A.y,A.z,A.w):V.set(A,W,ie,re),se.scissor(U.copy(V).multiplyScalar(Y).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(A){se.setScissorTest(ee=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){j=A},this.getClearColor=function(A){return A.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(A=!0,W=!0,ie=!0){let re=0;if(A){let O=!1;if(R!==null){const Me=R.texture.format;O=Me===co||Me===lo||Me===oo}if(O){const Me=R.texture.type,Ce=Me===wn||Me===ii||Me===_r||Me===Ni||Me===ao||Me===so,Ue=Ee.getClearColor(),Le=Ee.getClearAlpha(),Ve=Ue.r,He=Ue.g,ke=Ue.b;Ce?(g[0]=Ve,g[1]=He,g[2]=ke,g[3]=Le,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Ve,_[1]=He,_[2]=ke,_[3]=Le,L.clearBufferiv(L.COLOR,0,_))}else re|=L.COLOR_BUFFER_BIT}W&&(re|=L.DEPTH_BUFFER_BIT),ie&&(re|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Ee.dispose(),me.dispose(),De.dispose(),pe.dispose(),M.dispose(),B.dispose(),ae.dispose(),je.dispose(),z.dispose(),he.dispose(),$.dispose(),$.removeEventListener("sessionstart",dt),$.removeEventListener("sessionend",Lt),wt.stop()};function de(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const A=Ae.autoReset,W=ye.enabled,ie=ye.autoUpdate,re=ye.needsUpdate,O=ye.type;fe(),Ae.autoReset=A,ye.enabled=W,ye.autoUpdate=ie,ye.needsUpdate=re,ye.type=O}function _e(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Fe(A){const W=A.target;W.removeEventListener("dispose",Fe),We(W)}function We(A){Be(A),pe.remove(A)}function Be(A){const W=pe.get(A).programs;W!==void 0&&(W.forEach(function(ie){he.releaseProgram(ie)}),A.isShaderMaterial&&he.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,ie,re,O,Me){W===null&&(W=ve);const Ce=O.isMesh&&O.matrixWorld.determinant()<0,Ue=xa(A,W,ie,re,O);se.setMaterial(re,Ce);let Le=ie.index,Ve=1;if(re.wireframe===!0){if(Le=J.getWireframeAttribute(ie),Le===void 0)return;Ve=2}const He=ie.drawRange,ke=ie.attributes.position;let Je=He.start*Ve,nt=(He.start+He.count)*Ve;Me!==null&&(Je=Math.max(Je,Me.start*Ve),nt=Math.min(nt,(Me.start+Me.count)*Ve)),Le!==null?(Je=Math.max(Je,0),nt=Math.min(nt,Le.count)):ke!=null&&(Je=Math.max(Je,0),nt=Math.min(nt,ke.count));const lt=nt-Je;if(lt<0||lt===1/0)return;je.setup(O,re,Ue,ie,Le);let ct,Qe=le;if(Le!==null&&(ct=Z.get(Le),Qe=Pe,Qe.setIndex(ct)),O.isMesh)re.wireframe===!0?(se.setLineWidth(re.wireframeLinewidth*Ne()),Qe.setMode(L.LINES)):Qe.setMode(L.TRIANGLES);else if(O.isLine){let Ge=re.linewidth;Ge===void 0&&(Ge=1),se.setLineWidth(Ge*Ne()),O.isLineSegments?Qe.setMode(L.LINES):O.isLineLoop?Qe.setMode(L.LINE_LOOP):Qe.setMode(L.LINE_STRIP)}else O.isPoints?Qe.setMode(L.POINTS):O.isSprite&&Qe.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Qe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))Qe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ge=O._multiDrawStarts,ft=O._multiDrawCounts,tt=O._multiDrawCount,xt=Le?Z.get(Le).bytesPerElement:1,hn=pe.get(re).currentProgram.getUniforms();for(let yt=0;yt<tt;yt++)hn.setValue(L,"_gl_DrawID",yt),Qe.render(Ge[yt]/xt,ft[yt])}else if(O.isInstancedMesh)Qe.renderInstances(Je,lt,O.count);else if(ie.isInstancedBufferGeometry){const Ge=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,ft=Math.min(ie.instanceCount,Ge);Qe.renderInstances(Je,lt,ft)}else Qe.render(Je,lt)};function ze(A,W,ie){A.transparent===!0&&A.side===sn&&A.forceSinglePass===!1?(A.side=Bt,A.needsUpdate=!0,qt(A,W,ie),A.side=zn,A.needsUpdate=!0,qt(A,W,ie),A.side=sn):qt(A,W,ie)}this.compile=function(A,W,ie=null){ie===null&&(ie=A),p=De.get(ie),p.init(W),S.push(p),ie.traverseVisible(function(O){O.isLight&&O.layers.test(W.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),A!==ie&&A.traverseVisible(function(O){O.isLight&&O.layers.test(W.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const re=new Set;return A.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const Me=O.material;if(Me)if(Array.isArray(Me))for(let Ce=0;Ce<Me.length;Ce++){const Ue=Me[Ce];ze(Ue,ie,O),re.add(Ue)}else ze(Me,ie,O),re.add(Me)}),S.pop(),p=null,re},this.compileAsync=function(A,W,ie=null){const re=this.compile(A,W,ie);return new Promise(O=>{function Me(){if(re.forEach(function(Ce){pe.get(Ce).currentProgram.isReady()&&re.delete(Ce)}),re.size===0){O(A);return}setTimeout(Me,10)}be.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let st=null;function ot(A){st&&st(A)}function dt(){wt.stop()}function Lt(){wt.start()}const wt=new zc;wt.setAnimationLoop(ot),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(A){st=A,$.setAnimationLoop(A),A===null?wt.stop():wt.start()},$.addEventListener("sessionstart",dt),$.addEventListener("sessionend",Lt),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(W),W=$.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,W,R),p=De.get(A,S.length),p.init(W),S.push(p),ne.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),F.setFromProjectionMatrix(ne),te=this.localClippingEnabled,k=ue.init(this.clippingPlanes,te),m=me.get(A,E.length),m.init(),E.push(m),$.enabled===!0&&$.isPresenting===!0){const Me=x.xr.getDepthSensingMesh();Me!==null&&zt(Me,W,-1/0,x.sortObjects)}zt(A,W,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(K,j),oe=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,oe&&Ee.addToRenderList(m,A),this.info.render.frame++,k===!0&&ue.beginShadows();const ie=p.state.shadowsArray;ye.render(ie,A,W),k===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=m.opaque,O=m.transmissive;if(p.setupLights(),W.isArrayCamera){const Me=W.cameras;if(O.length>0)for(let Ce=0,Ue=Me.length;Ce<Ue;Ce++){const Le=Me[Ce];fn(re,O,A,Le)}oe&&Ee.render(A);for(let Ce=0,Ue=Me.length;Ce<Ue;Ce++){const Le=Me[Ce];$t(m,A,Le,Le.viewport)}}else O.length>0&&fn(re,O,A,W),oe&&Ee.render(A),$t(m,A,W);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(x,A,W),je.resetDefaultState(),y=-1,v=null,S.pop(),S.length>0?(p=S[S.length-1],k===!0&&ue.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function zt(A,W,ie,re){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||F.intersectsSprite(A)){re&&Se.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ne);const Ce=ae.update(A),Ue=A.material;Ue.visible&&m.push(A,Ce,Ue,ie,Se.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||F.intersectsObject(A))){const Ce=ae.update(A),Ue=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Se.copy(A.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Se.copy(Ce.boundingSphere.center)),Se.applyMatrix4(A.matrixWorld).applyMatrix4(ne)),Array.isArray(Ue)){const Le=Ce.groups;for(let Ve=0,He=Le.length;Ve<He;Ve++){const ke=Le[Ve],Je=Ue[ke.materialIndex];Je&&Je.visible&&m.push(A,Ce,Je,ie,Se.z,ke)}}else Ue.visible&&m.push(A,Ce,Ue,ie,Se.z,null)}}const Me=A.children;for(let Ce=0,Ue=Me.length;Ce<Ue;Ce++)zt(Me[Ce],W,ie,re)}function $t(A,W,ie,re){const O=A.opaque,Me=A.transmissive,Ce=A.transparent;p.setupLightsView(ie),k===!0&&ue.setGlobalState(x.clippingPlanes,ie),re&&se.viewport(D.copy(re)),O.length>0&&It(O,W,ie),Me.length>0&&It(Me,W,ie),Ce.length>0&&It(Ce,W,ie),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function fn(A,W,ie,re){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[re.id]===void 0&&(p.state.transmissionRenderTarget[re.id]=new ri(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?xr:wn,minFilter:ti,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const Me=p.state.transmissionRenderTarget[re.id],Ce=re.viewport||D;Me.setSize(Ce.z,Ce.w);const Ue=x.getRenderTarget();x.setRenderTarget(Me),x.getClearColor(N),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),oe&&Ee.render(ie);const Le=x.toneMapping;x.toneMapping=kn;const Ve=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),p.setupLightsView(re),k===!0&&ue.setGlobalState(x.clippingPlanes,re),It(A,ie,re),T.updateMultisampleRenderTarget(Me),T.updateRenderTargetMipmap(Me),be.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let ke=0,Je=W.length;ke<Je;ke++){const nt=W[ke],lt=nt.object,ct=nt.geometry,Qe=nt.material,Ge=nt.group;if(Qe.side===sn&&lt.layers.test(re.layers)){const ft=Qe.side;Qe.side=Bt,Qe.needsUpdate=!0,vt(lt,ie,re,ct,Qe,Ge),Qe.side=ft,Qe.needsUpdate=!0,He=!0}}He===!0&&(T.updateMultisampleRenderTarget(Me),T.updateRenderTargetMipmap(Me))}x.setRenderTarget(Ue),x.setClearColor(N,q),Ve!==void 0&&(re.viewport=Ve),x.toneMapping=Le}function It(A,W,ie){const re=W.isScene===!0?W.overrideMaterial:null;for(let O=0,Me=A.length;O<Me;O++){const Ce=A[O],Ue=Ce.object,Le=Ce.geometry,Ve=re===null?Ce.material:re,He=Ce.group;Ue.layers.test(ie.layers)&&vt(Ue,W,ie,Le,Ve,He)}}function vt(A,W,ie,re,O,Me){A.onBeforeRender(x,W,ie,re,O,Me),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),O.onBeforeRender(x,W,ie,re,A,Me),O.transparent===!0&&O.side===sn&&O.forceSinglePass===!1?(O.side=Bt,O.needsUpdate=!0,x.renderBufferDirect(ie,W,re,O,A,Me),O.side=zn,O.needsUpdate=!0,x.renderBufferDirect(ie,W,re,O,A,Me),O.side=sn):x.renderBufferDirect(ie,W,re,O,A,Me),A.onAfterRender(x,W,ie,re,O,Me)}function qt(A,W,ie){W.isScene!==!0&&(W=ve);const re=pe.get(A),O=p.state.lights,Me=p.state.shadowsArray,Ce=O.state.version,Ue=he.getParameters(A,O.state,Me,W,ie),Le=he.getProgramCacheKey(Ue);let Ve=re.programs;re.environment=A.isMeshStandardMaterial?W.environment:null,re.fog=W.fog,re.envMap=(A.isMeshStandardMaterial?B:M).get(A.envMap||re.environment),re.envMapRotation=re.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Ve===void 0&&(A.addEventListener("dispose",Fe),Ve=new Map,re.programs=Ve);let He=Ve.get(Le);if(He!==void 0){if(re.currentProgram===He&&re.lightsStateVersion===Ce)return oi(A,Ue),He}else Ue.uniforms=he.getUniforms(A),A.onBeforeCompile(Ue,x),He=he.acquireProgram(Ue,Le),Ve.set(Le,He),re.uniforms=Ue.uniforms;const ke=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ke.clippingPlanes=ue.uniform),oi(A,Ue),re.needsLights=li(A),re.lightsStateVersion=Ce,re.needsLights&&(ke.ambientLightColor.value=O.state.ambient,ke.lightProbe.value=O.state.probe,ke.directionalLights.value=O.state.directional,ke.directionalLightShadows.value=O.state.directionalShadow,ke.spotLights.value=O.state.spot,ke.spotLightShadows.value=O.state.spotShadow,ke.rectAreaLights.value=O.state.rectArea,ke.ltc_1.value=O.state.rectAreaLTC1,ke.ltc_2.value=O.state.rectAreaLTC2,ke.pointLights.value=O.state.point,ke.pointLightShadows.value=O.state.pointShadow,ke.hemisphereLights.value=O.state.hemi,ke.directionalShadowMap.value=O.state.directionalShadowMap,ke.directionalShadowMatrix.value=O.state.directionalShadowMatrix,ke.spotShadowMap.value=O.state.spotShadowMap,ke.spotLightMatrix.value=O.state.spotLightMatrix,ke.spotLightMap.value=O.state.spotLightMap,ke.pointShadowMap.value=O.state.pointShadowMap,ke.pointShadowMatrix.value=O.state.pointShadowMatrix),re.currentProgram=He,re.uniformsList=null,He}function qi(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=ra.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function oi(A,W){const ie=pe.get(A);ie.outputColorSpace=W.outputColorSpace,ie.batching=W.batching,ie.batchingColor=W.batchingColor,ie.instancing=W.instancing,ie.instancingColor=W.instancingColor,ie.instancingMorph=W.instancingMorph,ie.skinning=W.skinning,ie.morphTargets=W.morphTargets,ie.morphNormals=W.morphNormals,ie.morphColors=W.morphColors,ie.morphTargetsCount=W.morphTargetsCount,ie.numClippingPlanes=W.numClippingPlanes,ie.numIntersection=W.numClipIntersection,ie.vertexAlphas=W.vertexAlphas,ie.vertexTangents=W.vertexTangents,ie.toneMapping=W.toneMapping}function xa(A,W,ie,re,O){W.isScene!==!0&&(W=ve),T.resetTextureUnits();const Me=W.fog,Ce=re.isMeshStandardMaterial?W.environment:null,Ue=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Bi,Le=(re.isMeshStandardMaterial?B:M).get(re.envMap||Ce),Ve=re.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,He=!!ie.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),ke=!!ie.morphAttributes.position,Je=!!ie.morphAttributes.normal,nt=!!ie.morphAttributes.color;let lt=kn;re.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(lt=x.toneMapping);const ct=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Qe=ct!==void 0?ct.length:0,Ge=pe.get(re),ft=p.state.lights;if(k===!0&&(te===!0||A!==v)){const pt=A===v&&re.id===y;ue.setState(re,A,pt)}let tt=!1;re.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==ft.state.version||Ge.outputColorSpace!==Ue||O.isBatchedMesh&&Ge.batching===!1||!O.isBatchedMesh&&Ge.batching===!0||O.isBatchedMesh&&Ge.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ge.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ge.instancing===!1||!O.isInstancedMesh&&Ge.instancing===!0||O.isSkinnedMesh&&Ge.skinning===!1||!O.isSkinnedMesh&&Ge.skinning===!0||O.isInstancedMesh&&Ge.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ge.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ge.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ge.instancingMorph===!1&&O.morphTexture!==null||Ge.envMap!==Le||re.fog===!0&&Ge.fog!==Me||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ue.numPlanes||Ge.numIntersection!==ue.numIntersection)||Ge.vertexAlphas!==Ve||Ge.vertexTangents!==He||Ge.morphTargets!==ke||Ge.morphNormals!==Je||Ge.morphColors!==nt||Ge.toneMapping!==lt||Ge.morphTargetsCount!==Qe)&&(tt=!0):(tt=!0,Ge.__version=re.version);let xt=Ge.currentProgram;tt===!0&&(xt=qt(re,W,O));let hn=!1,yt=!1,gn=!1;const et=xt.getUniforms(),Ft=Ge.uniforms;if(se.useProgram(xt.program)&&(hn=!0,yt=!0,gn=!0),re.id!==y&&(y=re.id,yt=!0),hn||v!==A){se.buffers.depth.getReversed()?(H.copy(A.projectionMatrix),_f(H),vf(H),et.setValue(L,"projectionMatrix",H)):et.setValue(L,"projectionMatrix",A.projectionMatrix),et.setValue(L,"viewMatrix",A.matrixWorldInverse);const Tt=et.map.cameraPosition;Tt!==void 0&&Tt.setValue(L,ge.setFromMatrixPosition(A.matrixWorld)),we.logarithmicDepthBuffer&&et.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&et.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),v!==A&&(v=A,yt=!0,gn=!0)}if(O.isSkinnedMesh){et.setOptional(L,O,"bindMatrix"),et.setOptional(L,O,"bindMatrixInverse");const pt=O.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),et.setValue(L,"boneTexture",pt.boneTexture,T))}O.isBatchedMesh&&(et.setOptional(L,O,"batchingTexture"),et.setValue(L,"batchingTexture",O._matricesTexture,T),et.setOptional(L,O,"batchingIdTexture"),et.setValue(L,"batchingIdTexture",O._indirectTexture,T),et.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&et.setValue(L,"batchingColorTexture",O._colorsTexture,T));const Et=ie.morphAttributes;if((Et.position!==void 0||Et.normal!==void 0||Et.color!==void 0)&&Te.update(O,ie,xt),(yt||Ge.receiveShadow!==O.receiveShadow)&&(Ge.receiveShadow=O.receiveShadow,et.setValue(L,"receiveShadow",O.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Ft.envMap.value=Le,Ft.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&W.environment!==null&&(Ft.envMapIntensity.value=W.environmentIntensity),yt&&(et.setValue(L,"toneMappingExposure",x.toneMappingExposure),Ge.needsLights&&yr(Ft,gn),Me&&re.fog===!0&&ce.refreshFogUniforms(Ft,Me),ce.refreshMaterialUniforms(Ft,re,Y,Q,p.state.transmissionRenderTarget[A.id]),ra.upload(L,qi(Ge),Ft,T)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(ra.upload(L,qi(Ge),Ft,T),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&et.setValue(L,"center",O.center),et.setValue(L,"modelViewMatrix",O.modelViewMatrix),et.setValue(L,"normalMatrix",O.normalMatrix),et.setValue(L,"modelMatrix",O.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const pt=re.uniformsGroups;for(let Tt=0,Rn=pt.length;Tt<Rn;Tt++){const jt=pt[Tt];z.update(jt,xt),z.bind(jt,xt)}}return xt}function yr(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function li(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,W,ie){pe.get(A.texture).__webglTexture=W,pe.get(A.depthTexture).__webglTexture=ie;const re=pe.get(A);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=ie===void 0,re.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const ie=pe.get(A);ie.__webglFramebuffer=W,ie.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,ie=0){R=A,C=W,b=ie;let re=!0,O=null,Me=!1,Ce=!1;if(A){const Le=pe.get(A);if(Le.__useDefaultFramebuffer!==void 0)se.bindFramebuffer(L.FRAMEBUFFER,null),re=!1;else if(Le.__webglFramebuffer===void 0)T.setupRenderTarget(A);else if(Le.__hasExternalTextures)T.rebindTextures(A,pe.get(A.texture).__webglTexture,pe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ke=A.depthTexture;if(Le.__boundDepthTexture!==ke){if(ke!==null&&pe.has(ke)&&(A.width!==ke.image.width||A.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(A)}}const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ce=!0);const He=pe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(He[W])?O=He[W][ie]:O=He[W],Me=!0):A.samples>0&&T.useMultisampledRTT(A)===!1?O=pe.get(A).__webglMultisampledFramebuffer:Array.isArray(He)?O=He[ie]:O=He,D.copy(A.viewport),U.copy(A.scissor),P=A.scissorTest}else D.copy(I).multiplyScalar(Y).floor(),U.copy(V).multiplyScalar(Y).floor(),P=ee;if(se.bindFramebuffer(L.FRAMEBUFFER,O)&&re&&se.drawBuffers(A,O),se.viewport(D),se.scissor(U),se.setScissorTest(P),Me){const Le=pe.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+W,Le.__webglTexture,ie)}else if(Ce){const Le=pe.get(A.texture),Ve=W||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Le.__webglTexture,ie||0,Ve)}y=-1},this.readRenderTargetPixels=function(A,W,ie,re,O,Me,Ce){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=pe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ue=Ue[Ce]),Ue){se.bindFramebuffer(L.FRAMEBUFFER,Ue);try{const Le=A.texture,Ve=Le.format,He=Le.type;if(!we.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-re&&ie>=0&&ie<=A.height-O&&L.readPixels(W,ie,re,O,Ie.convert(Ve),Ie.convert(He),Me)}finally{const Le=R!==null?pe.get(R).__webglFramebuffer:null;se.bindFramebuffer(L.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(A,W,ie,re,O,Me,Ce){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=pe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ue=Ue[Ce]),Ue){const Le=A.texture,Ve=Le.format,He=Le.type;if(!we.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-re&&ie>=0&&ie<=A.height-O){se.bindFramebuffer(L.FRAMEBUFFER,Ue);const ke=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ke),L.bufferData(L.PIXEL_PACK_BUFFER,Me.byteLength,L.STREAM_READ),L.readPixels(W,ie,re,O,Ie.convert(Ve),Ie.convert(He),0);const Je=R!==null?pe.get(R).__webglFramebuffer:null;se.bindFramebuffer(L.FRAMEBUFFER,Je);const nt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await gf(L,nt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ke),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Me),L.deleteBuffer(ke),L.deleteSync(nt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,ie=0){A.isTexture!==!0&&(wi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const re=Math.pow(2,-ie),O=Math.floor(A.image.width*re),Me=Math.floor(A.image.height*re),Ce=W!==null?W.x:0,Ue=W!==null?W.y:0;T.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,ie,0,0,Ce,Ue,O,Me),se.unbindTexture()};const ji=L.createFramebuffer(),Ma=L.createFramebuffer();this.copyTextureToTexture=function(A,W,ie=null,re=null,O=0,Me=null){A.isTexture!==!0&&(wi("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,A=arguments[1],W=arguments[2],Me=arguments[3]||0,ie=null),Me===null&&(O!==0?(wi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=O,O=0):Me=0);let Ce,Ue,Le,Ve,He,ke,Je,nt,lt;const ct=A.isCompressedTexture?A.mipmaps[Me]:A.image;if(ie!==null)Ce=ie.max.x-ie.min.x,Ue=ie.max.y-ie.min.y,Le=ie.isBox3?ie.max.z-ie.min.z:1,Ve=ie.min.x,He=ie.min.y,ke=ie.isBox3?ie.min.z:0;else{const Et=Math.pow(2,-O);Ce=Math.floor(ct.width*Et),Ue=Math.floor(ct.height*Et),A.isDataArrayTexture?Le=ct.depth:A.isData3DTexture?Le=Math.floor(ct.depth*Et):Le=1,Ve=0,He=0,ke=0}re!==null?(Je=re.x,nt=re.y,lt=re.z):(Je=0,nt=0,lt=0);const Qe=Ie.convert(W.format),Ge=Ie.convert(W.type);let ft;W.isData3DTexture?(T.setTexture3D(W,0),ft=L.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(T.setTexture2DArray(W,0),ft=L.TEXTURE_2D_ARRAY):(T.setTexture2D(W,0),ft=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,W.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,W.unpackAlignment);const tt=L.getParameter(L.UNPACK_ROW_LENGTH),xt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),hn=L.getParameter(L.UNPACK_SKIP_PIXELS),yt=L.getParameter(L.UNPACK_SKIP_ROWS),gn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ct.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ct.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ve),L.pixelStorei(L.UNPACK_SKIP_ROWS,He),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ke);const et=A.isDataArrayTexture||A.isData3DTexture,Ft=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Et=pe.get(A),pt=pe.get(W),Tt=pe.get(Et.__renderTarget),Rn=pe.get(pt.__renderTarget);se.bindFramebuffer(L.READ_FRAMEBUFFER,Tt.__webglFramebuffer),se.bindFramebuffer(L.DRAW_FRAMEBUFFER,Rn.__webglFramebuffer);for(let jt=0;jt<Le;jt++)et&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pe.get(A).__webglTexture,O,ke+jt),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pe.get(W).__webglTexture,Me,lt+jt)),L.blitFramebuffer(Ve,He,Ce,Ue,Je,nt,Ce,Ue,L.DEPTH_BUFFER_BIT,L.NEAREST);se.bindFramebuffer(L.READ_FRAMEBUFFER,null),se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||A.isRenderTargetTexture||pe.has(A)){const Et=pe.get(A),pt=pe.get(W);se.bindFramebuffer(L.READ_FRAMEBUFFER,ji),se.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ma);for(let Tt=0;Tt<Le;Tt++)et?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Et.__webglTexture,O,ke+Tt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Et.__webglTexture,O),Ft?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pt.__webglTexture,Me,lt+Tt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pt.__webglTexture,Me),O!==0?L.blitFramebuffer(Ve,He,Ce,Ue,Je,nt,Ce,Ue,L.COLOR_BUFFER_BIT,L.NEAREST):Ft?L.copyTexSubImage3D(ft,Me,Je,nt,lt+Tt,Ve,He,Ce,Ue):L.copyTexSubImage2D(ft,Me,Je,nt,Ve,He,Ce,Ue);se.bindFramebuffer(L.READ_FRAMEBUFFER,null),se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ft?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(ft,Me,Je,nt,lt,Ce,Ue,Le,Qe,Ge,ct.data):W.isCompressedArrayTexture?L.compressedTexSubImage3D(ft,Me,Je,nt,lt,Ce,Ue,Le,Qe,ct.data):L.texSubImage3D(ft,Me,Je,nt,lt,Ce,Ue,Le,Qe,Ge,ct):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Me,Je,nt,Ce,Ue,Qe,Ge,ct.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Me,Je,nt,ct.width,ct.height,Qe,ct.data):L.texSubImage2D(L.TEXTURE_2D,Me,Je,nt,Ce,Ue,Qe,Ge,ct);L.pixelStorei(L.UNPACK_ROW_LENGTH,tt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,hn),L.pixelStorei(L.UNPACK_SKIP_ROWS,yt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,gn),Me===0&&W.generateMipmaps&&L.generateMipmap(ft),se.unbindTexture()},this.copyTextureToTexture3D=function(A,W,ie=null,re=null,O=0){return A.isTexture!==!0&&(wi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,re=arguments[1]||null,A=arguments[2],W=arguments[3],O=arguments[4]||0),wi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,ie,re,O)},this.initRenderTarget=function(A){pe.get(A).__webglFramebuffer===void 0&&T.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?T.setTextureCube(A,0):A.isData3DTexture?T.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?T.setTexture2DArray(A,0):T.setTexture2D(A,0),se.unbindTexture()},this.resetState=function(){C=0,b=0,R=null,se.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}function Og(){var a=Object.create(null);function e(n,i){var s=n.id,o=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!a[s])try{l=l.map(function(f){return f&&f.isWorkerModule&&(e(f,function(d){if(d instanceof Error)throw d}),f=a[f.id].value),f}),c=r("<"+o+">.init",c),u&&(u=r("<"+o+">.getTransferables",u));var h=null;typeof c=="function"?h=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),a[s]={id:s,value:h,getTransferables:u},i(h)}catch(f){f&&f.noLog||console.error(f),i(f)}}function t(n,i){var s,o=n.id,l=n.args;(!a[o]||typeof a[o].value!="function")&&i(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(s=a[o]).value.apply(s,l);c&&typeof c.then=="function"?c.then(u,function(h){return i(h instanceof Error?h:new Error(""+h))}):u(c)}catch(h){i(h)}function u(h){try{var f=a[o].getTransferables&&a[o].getTransferables(h);(!f||!Array.isArray(f)||!f.length)&&(f=void 0),i(h,f)}catch(d){console.error(d),i(d)}}}function r(n,i){var s=void 0;self.troikaDefine=function(l){return s=l};var o=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+i+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,s}self.addEventListener("message",function(n){var i=n.data,s=i.messageId,o=i.action,l=i.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:s,success:!1,error:c.stack})}})}function Bg(a){var e=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=a.dependencies,r=a.init;t=Array.isArray(t)?t.map(function(i){return i&&(i=i.onMainThread||i,i._getInitResult&&(i=i._getInitResult())),i}):[];var n=Promise.all(t).then(function(i){return r.apply(null,i)});return e._getInitResult=function(){return n},n},e}var Xc=function(){var a=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),a=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return Xc=function(){return a},a},kg=0,zg=0,ls=!1,mr=Object.create(null),gr=Object.create(null),Qs=Object.create(null);function Yi(a){if((!a||typeof a.init!="function")&&!ls)throw new Error("requires `options.init` function");var e=a.dependencies,t=a.init,r=a.getTransferables,n=a.workerId,i=Bg(a);n==null&&(n="#default");var s="workerModule"+ ++kg,o=a.name||s,l=null;e=e&&e.map(function(u){return typeof u=="function"&&!u.workerModuleData&&(ls=!0,u=Yi({workerId:n,name:"<"+o+"> function dependency: "+u.name,init:`function(){return (
`+aa(u)+`
)}`}),ls=!1),u&&u.workerModuleData&&(u=u.workerModuleData),u});function c(){for(var u=[],h=arguments.length;h--;)u[h]=arguments[h];if(!Xc())return i.apply(void 0,u);if(!l){l=zl(n,"registerModule",c.workerModuleData);var f=function(){l=null,gr[n].delete(f)};(gr[n]||(gr[n]=new Set)).add(f)}return l.then(function(d){var g=d.isCallable;if(g)return zl(n,"callModule",{id:s,args:u});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:s,name:o,dependencies:e,init:aa(t),getTransferables:r&&aa(r)},c.onMainThread=i,c}function Gg(a){gr[a]&&gr[a].forEach(function(e){e()}),mr[a]&&(mr[a].terminate(),delete mr[a])}function aa(a){var e=a.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function Vg(a){var e=mr[a];if(!e){var t=aa(Og);e=mr[a]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+a.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(r){var n=r.data,i=n.messageId,s=Qs[i];if(!s)throw new Error("WorkerModule response with empty or unknown messageId");delete Qs[i],s(n)}}return e}function zl(a,e,t){return new Promise(function(r,n){var i=++zg;Qs[i]=function(s){s.success?r(s.result):n(new Error("Error in worker "+e+" call: "+s.error))},Vg(a).postMessage({messageId:i,action:e,data:t})})}function Yc(){var a=(function(e){function t(K,j,I,V,ee,F,k,te){var H=1-k;te.x=H*H*K+2*H*k*I+k*k*ee,te.y=H*H*j+2*H*k*V+k*k*F}function r(K,j,I,V,ee,F,k,te,H,ne){var ge=1-H;ne.x=ge*ge*ge*K+3*ge*ge*H*I+3*ge*H*H*ee+H*H*H*k,ne.y=ge*ge*ge*j+3*ge*ge*H*V+3*ge*H*H*F+H*H*H*te}function n(K,j){for(var I=/([MLQCZ])([^MLQCZ]*)/g,V,ee,F,k,te;V=I.exec(K);){var H=V[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(ne){return parseFloat(ne)});switch(V[1]){case"M":k=ee=H[0],te=F=H[1];break;case"L":(H[0]!==k||H[1]!==te)&&j("L",k,te,k=H[0],te=H[1]);break;case"Q":{j("Q",k,te,k=H[2],te=H[3],H[0],H[1]);break}case"C":{j("C",k,te,k=H[4],te=H[5],H[0],H[1],H[2],H[3]);break}case"Z":(k!==ee||te!==F)&&j("L",k,te,ee,F);break}}}function i(K,j,I){I===void 0&&(I=16);var V={x:0,y:0};n(K,function(ee,F,k,te,H,ne,ge,Se,ve){switch(ee){case"L":j(F,k,te,H);break;case"Q":{for(var oe=F,Ne=k,L=1;L<I;L++)t(F,k,ne,ge,te,H,L/(I-1),V),j(oe,Ne,V.x,V.y),oe=V.x,Ne=V.y;break}case"C":{for(var Oe=F,be=k,we=1;we<I;we++)r(F,k,ne,ge,Se,ve,te,H,we/(I-1),V),j(Oe,be,V.x,V.y),Oe=V.x,be=V.y;break}}})}var s="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(K,j){var I=K.getContext?K.getContext("webgl",c):K,V=l.get(I);if(!V){let Oe=function(T){var M=F[T];if(!M&&(M=F[T]=I.getExtension(T),!M))throw new Error(T+" not supported");return M},be=function(T,M){var B=I.createShader(M);return I.shaderSource(B,T),I.compileShader(B),B},we=function(T,M,B,Z){if(!k[T]){var J={},ae={},he=I.createProgram();I.attachShader(he,be(M,I.VERTEX_SHADER)),I.attachShader(he,be(B,I.FRAGMENT_SHADER)),I.linkProgram(he),k[T]={program:he,transaction:function(me){I.useProgram(he),me({setUniform:function(ue,ye){for(var Ee=[],Te=arguments.length-2;Te-- >0;)Ee[Te]=arguments[Te+2];var le=ae[ye]||(ae[ye]=I.getUniformLocation(he,ye));I["uniform"+ue].apply(I,[le].concat(Ee))},setAttribute:function(ue,ye,Ee,Te,le){var Pe=J[ue];Pe||(Pe=J[ue]={buf:I.createBuffer(),loc:I.getAttribLocation(he,ue),data:null}),I.bindBuffer(I.ARRAY_BUFFER,Pe.buf),I.vertexAttribPointer(Pe.loc,ye,I.FLOAT,!1,0,0),I.enableVertexAttribArray(Pe.loc),ee?I.vertexAttribDivisor(Pe.loc,Te):Oe("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Pe.loc,Te),le!==Pe.data&&(I.bufferData(I.ARRAY_BUFFER,le,Ee),Pe.data=le)}})}}}k[T].transaction(Z)},se=function(T,M){H++;try{I.activeTexture(I.TEXTURE0+H);var B=te[T];B||(B=te[T]=I.createTexture(),I.bindTexture(I.TEXTURE_2D,B),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_MIN_FILTER,I.NEAREST),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_MAG_FILTER,I.NEAREST)),I.bindTexture(I.TEXTURE_2D,B),M(B,H)}finally{H--}},Ae=function(T,M,B){var Z=I.createFramebuffer();ne.push(Z),I.bindFramebuffer(I.FRAMEBUFFER,Z),I.activeTexture(I.TEXTURE0+M),I.bindTexture(I.TEXTURE_2D,T),I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,T,0);try{B(Z)}finally{I.deleteFramebuffer(Z),I.bindFramebuffer(I.FRAMEBUFFER,ne[--ne.length-1]||null)}},pe=function(){F={},k={},te={},H=-1,ne.length=0};var ge=Oe,Se=be,ve=we,oe=se,Ne=Ae,L=pe,ee=typeof WebGL2RenderingContext<"u"&&I instanceof WebGL2RenderingContext,F={},k={},te={},H=-1,ne=[];I.canvas.addEventListener("webglcontextlost",function(T){pe(),T.preventDefault()},!1),l.set(I,V={gl:I,isWebGL2:ee,getExtension:Oe,withProgram:we,withTexture:se,withTextureFramebuffer:Ae,handleContextLoss:pe})}j(V)}function h(K,j,I,V,ee,F,k,te){k===void 0&&(k=15),te===void 0&&(te=null),u(K,function(H){var ne=H.gl,ge=H.withProgram,Se=H.withTexture;Se("copy",function(ve,oe){ne.texImage2D(ne.TEXTURE_2D,0,ne.RGBA,ee,F,0,ne.RGBA,ne.UNSIGNED_BYTE,j),ge("copy",s,o,function(Ne){var L=Ne.setUniform,Oe=Ne.setAttribute;Oe("aUV",2,ne.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),L("1i","image",oe),ne.bindFramebuffer(ne.FRAMEBUFFER,te||null),ne.disable(ne.BLEND),ne.colorMask(k&8,k&4,k&2,k&1),ne.viewport(I,V,ee,F),ne.scissor(I,V,ee,F),ne.drawArrays(ne.TRIANGLES,0,3)})})})}function f(K,j,I){var V=K.width,ee=K.height;u(K,function(F){var k=F.gl,te=new Uint8Array(V*ee*4);k.readPixels(0,0,V,ee,k.RGBA,k.UNSIGNED_BYTE,te),K.width=j,K.height=I,h(k,te,0,0,V,ee)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:h,resizeWebGLCanvasWithoutClearing:f});function g(K,j,I,V,ee,F){F===void 0&&(F=1);var k=new Uint8Array(K*j),te=V[2]-V[0],H=V[3]-V[1],ne=[];i(I,function(Oe,be,we,se){ne.push({x1:Oe,y1:be,x2:we,y2:se,minX:Math.min(Oe,we),minY:Math.min(be,se),maxX:Math.max(Oe,we),maxY:Math.max(be,se)})}),ne.sort(function(Oe,be){return Oe.maxX-be.maxX});for(var ge=0;ge<K;ge++)for(var Se=0;Se<j;Se++){var ve=Ne(V[0]+te*(ge+.5)/K,V[1]+H*(Se+.5)/j),oe=Math.pow(1-Math.abs(ve)/ee,F)/2;ve<0&&(oe=1-oe),oe=Math.max(0,Math.min(255,Math.round(oe*255))),k[Se*K+ge]=oe}return k;function Ne(Oe,be){for(var we=1/0,se=1/0,Ae=ne.length;Ae--;){var pe=ne[Ae];if(pe.maxX+se<=Oe)break;if(Oe+se>pe.minX&&be-se<pe.maxY&&be+se>pe.minY){var T=p(Oe,be,pe.x1,pe.y1,pe.x2,pe.y2);T<we&&(we=T,se=Math.sqrt(we))}}return L(Oe,be)&&(se=-se),se}function L(Oe,be){for(var we=0,se=ne.length;se--;){var Ae=ne[se];if(Ae.maxX<=Oe)break;var pe=Ae.y1>be!=Ae.y2>be&&Oe<(Ae.x2-Ae.x1)*(be-Ae.y1)/(Ae.y2-Ae.y1)+Ae.x1;pe&&(we+=Ae.y1<Ae.y2?1:-1)}return we!==0}}function _(K,j,I,V,ee,F,k,te,H,ne){F===void 0&&(F=1),te===void 0&&(te=0),H===void 0&&(H=0),ne===void 0&&(ne=0),m(K,j,I,V,ee,F,k,null,te,H,ne)}function m(K,j,I,V,ee,F,k,te,H,ne,ge){F===void 0&&(F=1),H===void 0&&(H=0),ne===void 0&&(ne=0),ge===void 0&&(ge=0);for(var Se=g(K,j,I,V,ee,F),ve=new Uint8Array(Se.length*4),oe=0;oe<Se.length;oe++)ve[oe*4+ge]=Se[oe];h(k,ve,H,ne,K,j,1<<3-ge,te)}function p(K,j,I,V,ee,F){var k=ee-I,te=F-V,H=k*k+te*te,ne=H?Math.max(0,Math.min(1,((K-I)*k+(j-V)*te)/H)):0,ge=K-(I+ne*k),Se=j-(V+ne*te);return ge*ge+Se*Se}var E=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:_,generateIntoFramebuffer:m}),S="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",x="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",w="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",C=new Float32Array([0,0,2,0,0,2]),b=null,R=!1,y={},v=new WeakMap;function D(K){if(!R&&!q(K))throw new Error("WebGL generation not supported")}function U(K,j,I,V,ee,F,k){if(F===void 0&&(F=1),k===void 0&&(k=null),!k&&(k=b,!k)){var te=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!te)throw new Error("OffscreenCanvas or DOM canvas not supported");k=b=te.getContext("webgl",{depth:!1})}D(k);var H=new Uint8Array(K*j*4);u(k,function(ve){var oe=ve.gl,Ne=ve.withTexture,L=ve.withTextureFramebuffer;Ne("readable",function(Oe,be){oe.texImage2D(oe.TEXTURE_2D,0,oe.RGBA,K,j,0,oe.RGBA,oe.UNSIGNED_BYTE,null),L(Oe,be,function(we){N(K,j,I,V,ee,F,oe,we,0,0,0),oe.readPixels(0,0,K,j,oe.RGBA,oe.UNSIGNED_BYTE,H)})})});for(var ne=new Uint8Array(K*j),ge=0,Se=0;ge<H.length;ge+=4)ne[Se++]=H[ge];return ne}function P(K,j,I,V,ee,F,k,te,H,ne){F===void 0&&(F=1),te===void 0&&(te=0),H===void 0&&(H=0),ne===void 0&&(ne=0),N(K,j,I,V,ee,F,k,null,te,H,ne)}function N(K,j,I,V,ee,F,k,te,H,ne,ge){F===void 0&&(F=1),H===void 0&&(H=0),ne===void 0&&(ne=0),ge===void 0&&(ge=0),D(k);var Se=[];i(I,function(ve,oe,Ne,L){Se.push(ve,oe,Ne,L)}),Se=new Float32Array(Se),u(k,function(ve){var oe=ve.gl,Ne=ve.isWebGL2,L=ve.getExtension,Oe=ve.withProgram,be=ve.withTexture,we=ve.withTextureFramebuffer,se=ve.handleContextLoss;if(be("rawDistances",function(Ae,pe){(K!==Ae._lastWidth||j!==Ae._lastHeight)&&oe.texImage2D(oe.TEXTURE_2D,0,oe.RGBA,Ae._lastWidth=K,Ae._lastHeight=j,0,oe.RGBA,oe.UNSIGNED_BYTE,null),Oe("main",S,x,function(T){var M=T.setAttribute,B=T.setUniform,Z=!Ne&&L("ANGLE_instanced_arrays"),J=!Ne&&L("EXT_blend_minmax");M("aUV",2,oe.STATIC_DRAW,0,C),M("aLineSegment",4,oe.DYNAMIC_DRAW,1,Se),B.apply(void 0,["4f","uGlyphBounds"].concat(V)),B("1f","uMaxDistance",ee),B("1f","uExponent",F),we(Ae,pe,function(ae){oe.enable(oe.BLEND),oe.colorMask(!0,!0,!0,!0),oe.viewport(0,0,K,j),oe.scissor(0,0,K,j),oe.blendFunc(oe.ONE,oe.ONE),oe.blendEquationSeparate(oe.FUNC_ADD,Ne?oe.MAX:J.MAX_EXT),oe.clear(oe.COLOR_BUFFER_BIT),Ne?oe.drawArraysInstanced(oe.TRIANGLES,0,3,Se.length/4):Z.drawArraysInstancedANGLE(oe.TRIANGLES,0,3,Se.length/4)})}),Oe("post",s,w,function(T){T.setAttribute("aUV",2,oe.STATIC_DRAW,0,C),T.setUniform("1i","tex",pe),oe.bindFramebuffer(oe.FRAMEBUFFER,te),oe.disable(oe.BLEND),oe.colorMask(ge===0,ge===1,ge===2,ge===3),oe.viewport(H,ne,K,j),oe.scissor(H,ne,K,j),oe.drawArrays(oe.TRIANGLES,0,3)})}),oe.isContextLost())throw se(),new Error("webgl context lost")})}function q(K){var j=!K||K===b?y:K.canvas||K,I=v.get(j);if(I===void 0){R=!0;var V=null;try{var ee=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],F=U(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,K);I=F&&ee.length===F.length&&F.every(function(k,te){return k===ee[te]}),I||(V="bad trial run results",console.info(ee,F))}catch(k){I=!1,V=k.message}V&&console.warn("WebGL SDF generation not supported:",V),R=!1,v.set(j,I)}return I}var G=Object.freeze({__proto__:null,generate:U,generateIntoCanvas:P,generateIntoFramebuffer:N,isSupported:q});function Q(K,j,I,V,ee,F){ee===void 0&&(ee=Math.max(V[2]-V[0],V[3]-V[1])/2),F===void 0&&(F=1);try{return U.apply(G,arguments)}catch(k){return console.info("WebGL SDF generation failed, falling back to JS",k),g.apply(E,arguments)}}function Y(K,j,I,V,ee,F,k,te,H,ne){ee===void 0&&(ee=Math.max(V[2]-V[0],V[3]-V[1])/2),F===void 0&&(F=1),te===void 0&&(te=0),H===void 0&&(H=0),ne===void 0&&(ne=0);try{return P.apply(G,arguments)}catch(ge){return console.info("WebGL SDF generation failed, falling back to JS",ge),_.apply(E,arguments)}}return e.forEachPathCommand=n,e.generate=Q,e.generateIntoCanvas=Y,e.javascript=E,e.pathToLineSegments=i,e.webgl=G,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return a}function Hg(){var a=(function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},r={},n={};r.L=1,n[1]="L",Object.keys(t).forEach(function(se,Ae){r[se]=1<<Ae+1,n[r[se]]=se}),Object.freeze(r);var i=r.LRI|r.RLI|r.FSI,s=r.L|r.R|r.AL,o=r.B|r.S|r.WS|r.ON|r.FSI|r.LRI|r.RLI|r.PDI,l=r.BN|r.RLE|r.LRE|r.RLO|r.LRO|r.PDF,c=r.S|r.WS|r.B|i|r.PDI|l,u=null;function h(){if(!u){u=new Map;var se=function(pe){if(t.hasOwnProperty(pe)){var T=0;t[pe].split(",").forEach(function(M){var B=M.split("+"),Z=B[0],J=B[1];Z=parseInt(Z,36),J=J?parseInt(J,36):0,u.set(T+=Z,r[pe]);for(var ae=0;ae<J;ae++)u.set(++T,r[pe])})}};for(var Ae in t)se(Ae)}}function f(se){return h(),u.get(se.codePointAt(0))||r.L}function d(se){return n[f(se)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function _(se,Ae){var pe=36,T=0,M=new Map,B=Ae&&new Map,Z;return se.split(",").forEach(function J(ae){if(ae.indexOf("+")!==-1)for(var he=+ae;he--;)J(Z);else{Z=ae;var ce=ae.split(">"),me=ce[0],De=ce[1];me=String.fromCodePoint(T+=parseInt(me,pe)),De=String.fromCodePoint(T+=parseInt(De,pe)),M.set(me,De),Ae&&B.set(De,me)}}),{map:M,reverseMap:B}}var m,p,E;function S(){if(!m){var se=_(g.pairs,!0),Ae=se.map,pe=se.reverseMap;m=Ae,p=pe,E=_(g.canonical,!1).map}}function x(se){return S(),m.get(se)||null}function w(se){return S(),p.get(se)||null}function C(se){return S(),E.get(se)||null}var b=r.L,R=r.R,y=r.EN,v=r.ES,D=r.ET,U=r.AN,P=r.CS,N=r.B,q=r.S,G=r.ON,Q=r.BN,Y=r.NSM,K=r.AL,j=r.LRO,I=r.RLO,V=r.LRE,ee=r.RLE,F=r.PDF,k=r.LRI,te=r.RLI,H=r.FSI,ne=r.PDI;function ge(se,Ae){for(var pe=125,T=new Uint32Array(se.length),M=0;M<se.length;M++)T[M]=f(se[M]);var B=new Map;function Z(Nt,tn){var Ot=T[Nt];T[Nt]=tn,B.set(Ot,B.get(Ot)-1),Ot&o&&B.set(o,B.get(o)-1),B.set(tn,(B.get(tn)||0)+1),tn&o&&B.set(o,(B.get(o)||0)+1)}for(var J=new Uint8Array(se.length),ae=new Map,he=[],ce=null,me=0;me<se.length;me++)ce||he.push(ce={start:me,end:se.length-1,level:Ae==="rtl"?1:Ae==="ltr"?0:Io(me,!1)}),T[me]&N&&(ce.end=me,ce=null);for(var De=ee|V|I|j|i|ne|F|N,ue=function(Nt){return Nt+(Nt&1?1:2)},ye=function(Nt){return Nt+(Nt&1?2:1)},Ee=0;Ee<he.length;Ee++){ce=he[Ee];var Te=[{_level:ce.level,_override:0,_isolate:0}],le=void 0,Pe=0,Ie=0,je=0;B.clear();for(var z=ce.start;z<=ce.end;z++){var fe=T[z];if(le=Te[Te.length-1],B.set(fe,(B.get(fe)||0)+1),fe&o&&B.set(o,(B.get(o)||0)+1),fe&De)if(fe&(ee|V)){J[z]=le._level;var $=(fe===ee?ye:ue)(le._level);$<=pe&&!Pe&&!Ie?Te.push({_level:$,_override:0,_isolate:0}):Pe||Ie++}else if(fe&(I|j)){J[z]=le._level;var de=(fe===I?ye:ue)(le._level);de<=pe&&!Pe&&!Ie?Te.push({_level:de,_override:fe&I?R:b,_isolate:0}):Pe||Ie++}else if(fe&i){fe&H&&(fe=Io(z+1,!0)===1?te:k),J[z]=le._level,le._override&&Z(z,le._override);var xe=(fe===te?ye:ue)(le._level);xe<=pe&&Pe===0&&Ie===0?(je++,Te.push({_level:xe,_override:0,_isolate:1,_isolInitIndex:z})):Pe++}else if(fe&ne){if(Pe>0)Pe--;else if(je>0){for(Ie=0;!Te[Te.length-1]._isolate;)Te.pop();var _e=Te[Te.length-1]._isolInitIndex;_e!=null&&(ae.set(_e,z),ae.set(z,_e)),Te.pop(),je--}le=Te[Te.length-1],J[z]=le._level,le._override&&Z(z,le._override)}else fe&F?(Pe===0&&(Ie>0?Ie--:!le._isolate&&Te.length>1&&(Te.pop(),le=Te[Te.length-1])),J[z]=le._level):fe&N&&(J[z]=ce.level);else J[z]=le._level,le._override&&fe!==Q&&Z(z,le._override)}for(var Fe=[],We=null,Be=ce.start;Be<=ce.end;Be++){var ze=T[Be];if(!(ze&l)){var st=J[Be],ot=ze&i,dt=ze===ne;We&&st===We._level?(We._end=Be,We._endsWithIsolInit=ot):Fe.push(We={_start:Be,_end:Be,_level:st,_startsWithPDI:dt,_endsWithIsolInit:ot})}}for(var Lt=[],wt=0;wt<Fe.length;wt++){var zt=Fe[wt];if(!zt._startsWithPDI||zt._startsWithPDI&&!ae.has(zt._start)){for(var $t=[We=zt],fn=void 0;We&&We._endsWithIsolInit&&(fn=ae.get(We._end))!=null;)for(var It=wt+1;It<Fe.length;It++)if(Fe[It]._start===fn){$t.push(We=Fe[It]);break}for(var vt=[],qt=0;qt<$t.length;qt++)for(var qi=$t[qt],oi=qi._start;oi<=qi._end;oi++)vt.push(oi);for(var xa=J[vt[0]],yr=ce.level,li=vt[0]-1;li>=0;li--)if(!(T[li]&l)){yr=J[li];break}var ji=vt[vt.length-1],Ma=J[ji],A=ce.level;if(!(T[ji]&i)){for(var W=ji+1;W<=ce.end;W++)if(!(T[W]&l)){A=J[W];break}}Lt.push({_seqIndices:vt,_sosType:Math.max(yr,xa)%2?R:b,_eosType:Math.max(A,Ma)%2?R:b})}}for(var ie=0;ie<Lt.length;ie++){var re=Lt[ie],O=re._seqIndices,Me=re._sosType,Ce=re._eosType,Ue=J[O[0]]&1?R:b;if(B.get(Y))for(var Le=0;Le<O.length;Le++){var Ve=O[Le];if(T[Ve]&Y){for(var He=Me,ke=Le-1;ke>=0;ke--)if(!(T[O[ke]]&l)){He=T[O[ke]];break}Z(Ve,He&(i|ne)?G:He)}}if(B.get(y))for(var Je=0;Je<O.length;Je++){var nt=O[Je];if(T[nt]&y)for(var lt=Je-1;lt>=-1;lt--){var ct=lt===-1?Me:T[O[lt]];if(ct&s){ct===K&&Z(nt,U);break}}}if(B.get(K))for(var Qe=0;Qe<O.length;Qe++){var Ge=O[Qe];T[Ge]&K&&Z(Ge,R)}if(B.get(v)||B.get(P))for(var ft=1;ft<O.length-1;ft++){var tt=O[ft];if(T[tt]&(v|P)){for(var xt=0,hn=0,yt=ft-1;yt>=0&&(xt=T[O[yt]],!!(xt&l));yt--);for(var gn=ft+1;gn<O.length&&(hn=T[O[gn]],!!(hn&l));gn++);xt===hn&&(T[tt]===v?xt===y:xt&(y|U))&&Z(tt,xt)}}if(B.get(y))for(var et=0;et<O.length;et++){var Ft=O[et];if(T[Ft]&y){for(var Et=et-1;Et>=0&&T[O[Et]]&(D|l);Et--)Z(O[Et],y);for(et++;et<O.length&&T[O[et]]&(D|l|y);et++)T[O[et]]!==y&&Z(O[et],y)}}if(B.get(D)||B.get(v)||B.get(P))for(var pt=0;pt<O.length;pt++){var Tt=O[pt];if(T[Tt]&(D|v|P)){Z(Tt,G);for(var Rn=pt-1;Rn>=0&&T[O[Rn]]&l;Rn--)Z(O[Rn],G);for(var jt=pt+1;jt<O.length&&T[O[jt]]&l;jt++)Z(O[jt],G)}}if(B.get(y))for(var Sa=0,yo=Me;Sa<O.length;Sa++){var Eo=O[Sa],ya=T[Eo];ya&y?yo===b&&Z(Eo,b):ya&s&&(yo=ya)}if(B.get(o)){var Ki=R|y|U,To=Ki|b,Er=[];{for(var ci=[],ui=0;ui<O.length;ui++)if(T[O[ui]]&o){var Zi=se[O[ui]],bo=void 0;if(x(Zi)!==null)if(ci.length<63)ci.push({char:Zi,seqIndex:ui});else break;else if((bo=w(Zi))!==null)for(var Ji=ci.length-1;Ji>=0;Ji--){var Ea=ci[Ji].char;if(Ea===bo||Ea===w(C(Zi))||x(C(Ea))===Zi){Er.push([ci[Ji].seqIndex,ui]),ci.length=Ji;break}}}Er.sort(function(Nt,tn){return Nt[0]-tn[0]})}for(var Ta=0;Ta<Er.length;Ta++){for(var Ao=Er[Ta],Tr=Ao[0],ba=Ao[1],wo=!1,en=0,Aa=Tr+1;Aa<ba;Aa++){var Ro=O[Aa];if(T[Ro]&To){wo=!0;var Co=T[Ro]&Ki?R:b;if(Co===Ue){en=Co;break}}}if(wo&&!en){en=Me;for(var wa=Tr-1;wa>=0;wa--){var Uo=O[wa];if(T[Uo]&To){var Do=T[Uo]&Ki?R:b;Do!==Ue?en=Do:en=Ue;break}}}if(en){if(T[O[Tr]]=T[O[ba]]=en,en!==Ue){for(var Qi=Tr+1;Qi<O.length;Qi++)if(!(T[O[Qi]]&l)){f(se[O[Qi]])&Y&&(T[O[Qi]]=en);break}}if(en!==Ue){for(var $i=ba+1;$i<O.length;$i++)if(!(T[O[$i]]&l)){f(se[O[$i]])&Y&&(T[O[$i]]=en);break}}}}for(var Cn=0;Cn<O.length;Cn++)if(T[O[Cn]]&o){for(var Po=Cn,Ra=Cn,Ca=Me,er=Cn-1;er>=0;er--)if(T[O[er]]&l)Po=er;else{Ca=T[O[er]]&Ki?R:b;break}for(var Lo=Ce,tr=Cn+1;tr<O.length;tr++)if(T[O[tr]]&(o|l))Ra=tr;else{Lo=T[O[tr]]&Ki?R:b;break}for(var Ua=Po;Ua<=Ra;Ua++)T[O[Ua]]=Ca===Lo?Ca:Ue;Cn=Ra}}}for(var Gt=ce.start;Gt<=ce.end;Gt++){var uu=J[Gt],br=T[Gt];if(uu&1?br&(b|y|U)&&J[Gt]++:br&R?J[Gt]++:br&(U|y)&&(J[Gt]+=2),br&l&&(J[Gt]=Gt===0?ce.level:J[Gt-1]),Gt===ce.end||f(se[Gt])&(q|N))for(var Ar=Gt;Ar>=0&&f(se[Ar])&c;Ar--)J[Ar]=ce.level}}return{levels:J,paragraphs:he};function Io(Nt,tn){for(var Ot=Nt;Ot<se.length;Ot++){var Un=T[Ot];if(Un&(R|K))return 1;if(Un&(N|b)||tn&&Un===ne)return 0;if(Un&i){var Fo=fu(Ot);Ot=Fo===-1?se.length:Fo}}return 0}function fu(Nt){for(var tn=1,Ot=Nt+1;Ot<se.length;Ot++){var Un=T[Ot];if(Un&N)break;if(Un&ne){if(--tn===0)return Ot}else Un&i&&tn++}return-1}}var Se="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",ve;function oe(){if(!ve){var se=_(Se,!0),Ae=se.map,pe=se.reverseMap;pe.forEach(function(T,M){Ae.set(M,T)}),ve=Ae}}function Ne(se){return oe(),ve.get(se)||null}function L(se,Ae,pe,T){var M=se.length;pe=Math.max(0,pe==null?0:+pe),T=Math.min(M-1,T==null?M-1:+T);for(var B=new Map,Z=pe;Z<=T;Z++)if(Ae[Z]&1){var J=Ne(se[Z]);J!==null&&B.set(Z,J)}return B}function Oe(se,Ae,pe,T){var M=se.length;pe=Math.max(0,pe==null?0:+pe),T=Math.min(M-1,T==null?M-1:+T);var B=[];return Ae.paragraphs.forEach(function(Z){var J=Math.max(pe,Z.start),ae=Math.min(T,Z.end);if(J<ae){for(var he=Ae.levels.slice(J,ae+1),ce=ae;ce>=J&&f(se[ce])&c;ce--)he[ce]=Z.level;for(var me=Z.level,De=1/0,ue=0;ue<he.length;ue++){var ye=he[ue];ye>me&&(me=ye),ye<De&&(De=ye|1)}for(var Ee=me;Ee>=De;Ee--)for(var Te=0;Te<he.length;Te++)if(he[Te]>=Ee){for(var le=Te;Te+1<he.length&&he[Te+1]>=Ee;)Te++;Te>le&&B.push([le+J,Te+J])}}}),B}function be(se,Ae,pe,T){var M=we(se,Ae,pe,T),B=[].concat(se);return M.forEach(function(Z,J){B[J]=(Ae.levels[Z]&1?Ne(se[Z]):null)||se[Z]}),B.join("")}function we(se,Ae,pe,T){for(var M=Oe(se,Ae,pe,T),B=[],Z=0;Z<se.length;Z++)B[Z]=Z;return M.forEach(function(J){for(var ae=J[0],he=J[1],ce=B.slice(ae,he+1),me=ce.length;me--;)B[he-me]=ce[me]}),B}return e.closingToOpeningBracket=w,e.getBidiCharType=f,e.getBidiCharTypeName=d,e.getCanonicalBracket=C,e.getEmbeddingLevels=ge,e.getMirroredCharacter=Ne,e.getMirroredCharactersMap=L,e.getReorderSegments=Oe,e.getReorderedIndices=we,e.getReorderedString=be,e.openingToClosingBracket=x,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return a}const qc=/\bvoid\s+main\s*\(\s*\)\s*{/g;function $s(a){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(r,n){let i=Ke[n];return i?$s(i):r}return a.replace(e,t)}const bt=[];for(let a=0;a<256;a++)bt[a]=(a<16?"0":"")+a.toString(16);function Wg(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bt[a&255]+bt[a>>8&255]+bt[a>>16&255]+bt[a>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[r&255]+bt[r>>8&255]+bt[r>>16&255]+bt[r>>24&255]).toUpperCase()}const Kn=Object.assign||function(){let a=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let r=arguments[e];if(r)for(let n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])}return a},Xg=Date.now(),Gl=new WeakMap,Vl=new Map;let Yg=1e10;function eo(a,e){const t=Zg(e);let r=Gl.get(a);if(r||Gl.set(a,r=Object.create(null)),r[t])return new r[t];const n=`_onBeforeCompile${t}`,i=function(c,u){a.onBeforeCompile.call(this,c,u);const h=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let f=Vl[h];if(!f){const d=qg(this,c,e,t);f=Vl[h]=d}c.vertexShader=f.vertexShader,c.fragmentShader=f.fragmentShader,Kn(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-Xg}}),this[n]&&this[n](c)},s=function(){return o(e.chained?a:a.clone())},o=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:a}),Object.defineProperty(u,"id",{value:Yg++}),u.uuid=Wg(),u.uniforms=Kn({},c.uniforms,e.uniforms),u.defines=Kn({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=Kn({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:s},isDerivedMaterial:{value:!0},type:{get:()=>a.type,set:c=>{a.type=c}},isDerivedFrom:{writable:!0,configurable:!0,value:function(c){const u=this.baseMaterial;return c===u||u.isDerivedMaterial&&u.isDerivedFrom(c)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return a.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return i},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return a.copy.call(this,c),!a.isShaderMaterial&&!a.isDerivedMaterial&&(Kn(this.extensions,c.extensions),Kn(this.defines,c.defines),Kn(this.uniforms,Uc.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new a.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=eo(a.isDerivedMaterial?a.getDepthMaterial():new Fc({depthPacking:vc}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=eo(a.isDerivedMaterial?a.getDistanceMaterial():new Nc,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),a.dispose.call(this)}}};return r[t]=s,new s}function qg(a,{vertexShader:e,fragmentShader:t},r,n){let{vertexDefs:i,vertexMainIntro:s,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:h,fragmentColorTransform:f,customRewriter:d,timeUniform:g}=r;if(i=i||"",s=s||"",o=o||"",c=c||"",u=u||"",h=h||"",(l||d)&&(e=$s(e)),(f||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=$s(t)),d){let _=d({vertexShader:e,fragmentShader:t});e=_.vertexShader,t=_.fragmentShader}if(f){let _=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,m=>(_.push(m),"")),h=`${f}
${_.join(`
`)}
${h}`}if(g){const _=`
uniform float ${g};
`;i=_+i,c=_+c}return l&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,i=`${i}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,s=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${s}
`,e=e.replace(/\b(position|normal|uv)\b/g,(_,m,p,E)=>/\battribute\s+vec[23]\s+$/.test(E.substr(0,p))?m:`troika_${m}_${n}`),a.map&&a.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=Hl(e,n,i,s,o),t=Hl(t,n,c,u,h),{vertexShader:e,fragmentShader:t}}function Hl(a,e,t,r,n){return(r||n||t)&&(a=a.replace(qc,`
${t}
void troikaOrigMain${e}() {`),a+=`
void main() {
  ${r}
  troikaOrigMain${e}();
  ${n}
}`),a}function jg(a,e){return a==="uniforms"?void 0:typeof e=="function"?e.toString():e}let Kg=0;const Wl=new Map;function Zg(a){const e=JSON.stringify(a,jg);let t=Wl.get(e);return t==null&&Wl.set(e,t=++Kg),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function Jg(){return typeof window>"u"&&(self.window=self),(function(a){var e={parse:function(n){var i=e._bin,s=new Uint8Array(n);if(i.readASCII(s,0,4)=="ttcf"){var o=4;i.readUshort(s,o),o+=2,i.readUshort(s,o),o+=2;var l=i.readUint(s,o);o+=4;for(var c=[],u=0;u<l;u++){var h=i.readUint(s,o);o+=4,c.push(e._readFont(s,h))}return c}return[e._readFont(s,0)]},_readFont:function(n,i){var s=e._bin,o=i;s.readFixed(n,i),i+=4;var l=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:n,_offset:o},h={},f=0;f<l;f++){var d=s.readASCII(n,i,4);i+=4,s.readUint(n,i),i+=4;var g=s.readUint(n,i);i+=4;var _=s.readUint(n,i);i+=4,h[d]={offset:g,length:_}}for(f=0;f<c.length;f++){var m=c[f];h[m]&&(u[m.trim()]=e[m.trim()].parse(n,h[m].offset,h[m].length,u))}return u},_tabOffset:function(n,i,s){for(var o=e._bin,l=o.readUshort(n,s+4),c=s+12,u=0;u<l;u++){var h=o.readASCII(n,c,4);c+=4,o.readUint(n,c),c+=4;var f=o.readUint(n,c);if(c+=4,o.readUint(n,c),c+=4,h==i)return f}return 0}};e._bin={readFixed:function(n,i){return(n[i]<<8|n[i+1])+(n[i+2]<<8|n[i+3])/65540},readF2dot14:function(n,i){return e._bin.readShort(n,i)/16384},readInt:function(n,i){return e._bin._view(n).getInt32(i)},readInt8:function(n,i){return e._bin._view(n).getInt8(i)},readShort:function(n,i){return e._bin._view(n).getInt16(i)},readUshort:function(n,i){return e._bin._view(n).getUint16(i)},readUshorts:function(n,i,s){for(var o=[],l=0;l<s;l++)o.push(e._bin.readUshort(n,i+2*l));return o},readUint:function(n,i){return e._bin._view(n).getUint32(i)},readUint64:function(n,i){return 4294967296*e._bin.readUint(n,i)+e._bin.readUint(n,i+4)},readASCII:function(n,i,s){for(var o="",l=0;l<s;l++)o+=String.fromCharCode(n[i+l]);return o},readUnicode:function(n,i,s){for(var o="",l=0;l<s;l++){var c=n[i++]<<8|n[i++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,i,s){var o=e._bin._tdec;return o&&i==0&&s==n.length?o.decode(n):e._bin.readASCII(n,i,s)},readBytes:function(n,i,s){for(var o=[],l=0;l<s;l++)o.push(n[i+l]);return o},readASCIIArray:function(n,i,s){for(var o=[],l=0;l<s;l++)o.push(String.fromCharCode(n[i+l]));return o},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,i,s,o,l){var c=e._bin,u={},h=i;c.readFixed(n,i),i+=4;var f=c.readUshort(n,i);i+=2;var d=c.readUshort(n,i);i+=2;var g=c.readUshort(n,i);return i+=2,u.scriptList=e._lctf.readScriptList(n,h+f),u.featureList=e._lctf.readFeatureList(n,h+d),u.lookupList=e._lctf.readLookupList(n,h+g,l),u},e._lctf.readLookupList=function(n,i,s){var o=e._bin,l=i,c=[],u=o.readUshort(n,i);i+=2;for(var h=0;h<u;h++){var f=o.readUshort(n,i);i+=2;var d=e._lctf.readLookupTable(n,l+f,s);c.push(d)}return c},e._lctf.readLookupTable=function(n,i,s){var o=e._bin,l=i,c={tabs:[]};c.ltype=o.readUshort(n,i),i+=2,c.flag=o.readUshort(n,i),i+=2;var u=o.readUshort(n,i);i+=2;for(var h=c.ltype,f=0;f<u;f++){var d=o.readUshort(n,i);i+=2;var g=s(n,h,l+d,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(n){for(var i=0,s=0;s<32;s++)(n>>>s&1)!=0&&i++;return i},e._lctf.readClassDef=function(n,i){var s=e._bin,o=[],l=s.readUshort(n,i);if(i+=2,l==1){var c=s.readUshort(n,i);i+=2;var u=s.readUshort(n,i);i+=2;for(var h=0;h<u;h++)o.push(c+h),o.push(c+h),o.push(s.readUshort(n,i)),i+=2}if(l==2){var f=s.readUshort(n,i);for(i+=2,h=0;h<f;h++)o.push(s.readUshort(n,i)),i+=2,o.push(s.readUshort(n,i)),i+=2,o.push(s.readUshort(n,i)),i+=2}return o},e._lctf.getInterval=function(n,i){for(var s=0;s<n.length;s+=3){var o=n[s],l=n[s+1];if(n[s+2],o<=i&&i<=l)return s}return-1},e._lctf.readCoverage=function(n,i){var s=e._bin,o={};o.fmt=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);return i+=2,o.fmt==1&&(o.tab=s.readUshorts(n,i,l)),o.fmt==2&&(o.tab=s.readUshorts(n,i,3*l)),o},e._lctf.coverageIndex=function(n,i){var s=n.tab;if(n.fmt==1)return s.indexOf(i);if(n.fmt==2){var o=e._lctf.getInterval(s,i);if(o!=-1)return s[o+2]+(i-s[o])}return-1},e._lctf.readFeatureList=function(n,i){var s=e._bin,o=i,l=[],c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var h=s.readASCII(n,i,4);i+=4;var f=s.readUshort(n,i);i+=2;var d=e._lctf.readFeatureTable(n,o+f);d.tag=h.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(n,i){var s=e._bin,o=i,l={},c=s.readUshort(n,i);i+=2,c>0&&(l.featureParams=o+c);var u=s.readUshort(n,i);i+=2,l.tab=[];for(var h=0;h<u;h++)l.tab.push(s.readUshort(n,i+2*h));return l},e._lctf.readScriptList=function(n,i){var s=e._bin,o=i,l={},c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var h=s.readASCII(n,i,4);i+=4;var f=s.readUshort(n,i);i+=2,l[h.trim()]=e._lctf.readScriptTable(n,o+f)}return l},e._lctf.readScriptTable=function(n,i){var s=e._bin,o=i,l={},c=s.readUshort(n,i);i+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,o+c));var u=s.readUshort(n,i);i+=2;for(var h=0;h<u;h++){var f=s.readASCII(n,i,4);i+=4;var d=s.readUshort(n,i);i+=2,l[f.trim()]=e._lctf.readLangSysTable(n,o+d)}return l},e._lctf.readLangSysTable=function(n,i){var s=e._bin,o={};s.readUshort(n,i),i+=2,o.reqFeature=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);return i+=2,o.features=s.readUshorts(n,i,l),o},e.CFF={},e.CFF.parse=function(n,i,s){var o=e._bin;(n=new Uint8Array(n.buffer,i,s))[i=0],n[++i],n[++i],n[++i],i++;var l=[];i=e.CFF.readIndex(n,i,l);for(var c=[],u=0;u<l.length-1;u++)c.push(o.readASCII(n,i+l[u],l[u+1]-l[u]));i+=l[l.length-1];var h=[];i=e.CFF.readIndex(n,i,h);var f=[];for(u=0;u<h.length-1;u++)f.push(e.CFF.readDict(n,i+h[u],i+h[u+1]));i+=h[h.length-1];var d=f[0],g=[];i=e.CFF.readIndex(n,i,g);var _=[];for(u=0;u<g.length-1;u++)_.push(o.readASCII(n,i+g[u],g[u+1]-g[u]));if(i+=g[g.length-1],e.CFF.readSubrs(n,i,d),d.CharStrings){i=d.CharStrings,g=[],i=e.CFF.readIndex(n,i,g);var m=[];for(u=0;u<g.length-1;u++)m.push(o.readBytes(n,i+g[u],g[u+1]-g[u]));d.CharStrings=m}if(d.ROS){i=d.FDArray;var p=[];for(i=e.CFF.readIndex(n,i,p),d.FDArray=[],u=0;u<p.length-1;u++){var E=e.CFF.readDict(n,i+p[u],i+p[u+1]);e.CFF._readFDict(n,E,_),d.FDArray.push(E)}i+=p[p.length-1],i=d.FDSelect,d.FDSelect=[];var S=n[i];if(i++,S!=3)throw S;var x=o.readUshort(n,i);for(i+=2,u=0;u<x+1;u++)d.FDSelect.push(o.readUshort(n,i),n[i+2]),i+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(n,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(n,d.charset,d.CharStrings.length)),e.CFF._readFDict(n,d,_),d},e.CFF._readFDict=function(n,i,s){var o;for(var l in i.Private&&(o=i.Private[1],i.Private=e.CFF.readDict(n,o,o+i.Private[0]),i.Private.Subrs&&e.CFF.readSubrs(n,o+i.Private.Subrs,i.Private)),i)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(i[l]=s[i[l]-426+35])},e.CFF.readSubrs=function(n,i,s){var o=e._bin,l=[];i=e.CFF.readIndex(n,i,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,s.Bias=c,s.Subrs=[];for(var h=0;h<l.length-1;h++)s.Subrs.push(o.readBytes(n,i+l[h],l[h+1]-l[h]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,i){for(var s=0;s<n.charset.length;s++)if(n.charset[s]==i)return s;return-1},e.CFF.glyphBySE=function(n,i){return i<0||i>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[i])},e.CFF.readEncoding=function(n,i,s){e._bin;var o=[".notdef"],l=n[i];if(i++,l!=0)throw"error: unknown encoding format: "+l;var c=n[i];i++;for(var u=0;u<c;u++)o.push(n[i+u]);return o},e.CFF.readCharset=function(n,i,s){var o=e._bin,l=[".notdef"],c=n[i];if(i++,c==0)for(var u=0;u<s;u++){var h=o.readUshort(n,i);i+=2,l.push(h)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<s;){h=o.readUshort(n,i),i+=2;var f=0;for(c==1?(f=n[i],i++):(f=o.readUshort(n,i),i+=2),u=0;u<=f;u++)l.push(h),h++}}return l},e.CFF.readIndex=function(n,i,s){var o=e._bin,l=o.readUshort(n,i)+1,c=n[i+=2];if(i++,c==1)for(var u=0;u<l;u++)s.push(n[i+u]);else if(c==2)for(u=0;u<l;u++)s.push(o.readUshort(n,i+2*u));else if(c==3)for(u=0;u<l;u++)s.push(16777215&o.readUint(n,i+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(i+=l*c)-1},e.CFF.getCharString=function(n,i,s){var o=e._bin,l=n[i],c=n[i+1];n[i+2],n[i+3],n[i+4];var u=1,h=null,f=null;l<=20&&(h=l,u=1),l==12&&(h=100*l+c,u=2),21<=l&&l<=27&&(h=l,u=1),l==28&&(f=o.readShort(n,i+1),u=3),29<=l&&l<=31&&(h=l,u=1),32<=l&&l<=246&&(f=l-139,u=1),247<=l&&l<=250&&(f=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(f=256*-(l-251)-c-108,u=2),l==255&&(f=o.readInt(n,i+1)/65535,u=5),s.val=f??"o"+h,s.size=u},e.CFF.readCharString=function(n,i,s){for(var o=i+s,l=e._bin,c=[];i<o;){var u=n[i],h=n[i+1];n[i+2],n[i+3],n[i+4];var f=1,d=null,g=null;u<=20&&(d=u,f=1),u==12&&(d=100*u+h,f=2),u!=19&&u!=20||(d=u,f=2),21<=u&&u<=27&&(d=u,f=1),u==28&&(g=l.readShort(n,i+1),f=3),29<=u&&u<=31&&(d=u,f=1),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255&&(g=l.readInt(n,i+1)/65535,f=5),c.push(g??"o"+d),i+=f}return c},e.CFF.readDict=function(n,i,s){for(var o=e._bin,l={},c=[];i<s;){var u=n[i],h=n[i+1];n[i+2],n[i+3],n[i+4];var f=1,d=null,g=null;if(u==28&&(g=o.readShort(n,i+1),f=3),u==29&&(g=o.readInt(n,i+1),f=5),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255)throw g=o.readInt(n,i+1)/65535,f=5,"unknown number";if(u==30){var _=[];for(f=1;;){var m=n[i+f];f++;var p=m>>4,E=15&m;if(p!=15&&_.push(p),E!=15&&_.push(E),E==15)break}for(var S="",x=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],w=0;w<_.length;w++)S+=x[_[w]];g=parseFloat(S)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],f=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][h],f=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(g),i+=f}return l},e.cmap={},e.cmap.parse=function(n,i,s){n=new Uint8Array(n.buffer,i,s),i=0;var o=e._bin,l={};o.readUshort(n,i),i+=2;var c=o.readUshort(n,i);i+=2;var u=[];l.tables=[];for(var h=0;h<c;h++){var f=o.readUshort(n,i);i+=2;var d=o.readUshort(n,i);i+=2;var g=o.readUint(n,i);i+=4;var _="p"+f+"e"+d,m=u.indexOf(g);if(m==-1){var p;m=l.tables.length,u.push(g);var E=o.readUshort(n,g);E==0?p=e.cmap.parse0(n,g):E==4?p=e.cmap.parse4(n,g):E==6?p=e.cmap.parse6(n,g):E==12?p=e.cmap.parse12(n,g):console.debug("unknown format: "+E,f,d,g),l.tables.push(p)}if(l[_]!=null)throw"multiple tables for one platform+encoding";l[_]=m}return l},e.cmap.parse0=function(n,i){var s=e._bin,o={};o.format=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(n[i+c]);return o},e.cmap.parse4=function(n,i){var s=e._bin,o=i,l={};l.format=s.readUshort(n,i),i+=2;var c=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2;var u=s.readUshort(n,i);i+=2;var h=u/2;l.searchRange=s.readUshort(n,i),i+=2,l.entrySelector=s.readUshort(n,i),i+=2,l.rangeShift=s.readUshort(n,i),i+=2,l.endCount=s.readUshorts(n,i,h),i+=2*h,i+=2,l.startCount=s.readUshorts(n,i,h),i+=2*h,l.idDelta=[];for(var f=0;f<h;f++)l.idDelta.push(s.readShort(n,i)),i+=2;for(l.idRangeOffset=s.readUshorts(n,i,h),i+=2*h,l.glyphIdArray=[];i<o+c;)l.glyphIdArray.push(s.readUshort(n,i)),i+=2;return l},e.cmap.parse6=function(n,i){var s=e._bin,o={};o.format=s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2,o.firstCode=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);i+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(s.readUshort(n,i)),i+=2;return o},e.cmap.parse12=function(n,i){var s=e._bin,o={};o.format=s.readUshort(n,i),i+=2,i+=2,s.readUint(n,i),i+=4,s.readUint(n,i),i+=4;var l=s.readUint(n,i);i+=4,o.groups=[];for(var c=0;c<l;c++){var u=i+12*c,h=s.readUint(n,u+0),f=s.readUint(n,u+4),d=s.readUint(n,u+8);o.groups.push([h,f,d])}return o},e.glyf={},e.glyf.parse=function(n,i,s,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,i){var s=e._bin,o=n._data,l=e._tabOffset(o,"glyf",n._offset)+n.loca[i];if(n.loca[i]==n.loca[i+1])return null;var c={};if(c.noc=s.readShort(o,l),l+=2,c.xMin=s.readShort(o,l),l+=2,c.yMin=s.readShort(o,l),l+=2,c.xMax=s.readShort(o,l),l+=2,c.yMax=s.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(s.readUshort(o,l)),l+=2;var h=s.readUshort(o,l);if(l+=2,o.length-l<h)return null;c.instructions=s.readBytes(o,l,h),l+=h;var f=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<f;u++){var d=o[l];if(l++,c.flags.push(d),(8&d)!=0){var g=o[l];l++;for(var _=0;_<g;_++)c.flags.push(d),u++}}for(c.xs=[],u=0;u<f;u++){var m=(2&c.flags[u])!=0,p=(16&c.flags[u])!=0;m?(c.xs.push(p?o[l]:-o[l]),l++):p?c.xs.push(0):(c.xs.push(s.readShort(o,l)),l+=2)}for(c.ys=[],u=0;u<f;u++)m=(4&c.flags[u])!=0,p=(32&c.flags[u])!=0,m?(c.ys.push(p?o[l]:-o[l]),l++):p?c.ys.push(0):(c.ys.push(s.readShort(o,l)),l+=2);var E=0,S=0;for(u=0;u<f;u++)E+=c.xs[u],S+=c.ys[u],c.xs[u]=E,c.ys[u]=S}else{var x;c.parts=[];do{x=s.readUshort(o,l),l+=2;var w={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(w),w.glyphIndex=s.readUshort(o,l),l+=2,1&x){var C=s.readShort(o,l);l+=2;var b=s.readShort(o,l);l+=2}else C=s.readInt8(o,l),l++,b=s.readInt8(o,l),l++;2&x?(w.m.tx=C,w.m.ty=b):(w.p1=C,w.p2=b),8&x?(w.m.a=w.m.d=s.readF2dot14(o,l),l+=2):64&x?(w.m.a=s.readF2dot14(o,l),l+=2,w.m.d=s.readF2dot14(o,l),l+=2):128&x&&(w.m.a=s.readF2dot14(o,l),l+=2,w.m.b=s.readF2dot14(o,l),l+=2,w.m.c=s.readF2dot14(o,l),l+=2,w.m.d=s.readF2dot14(o,l),l+=2)}while(32&x);if(256&x){var R=s.readUshort(o,l);for(l+=2,c.instr=[],u=0;u<R;u++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(n,i,s,o){var l=i;i+=4;var c=e._bin.readUshort(n,i);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,l+c)}},e.GPOS={},e.GPOS.parse=function(n,i,s,o){return e._lctf.parse(n,i,s,o,e.GPOS.subt)},e.GPOS.subt=function(n,i,s,o){var l=e._bin,c=s,u={};if(u.fmt=l.readUshort(n,s),s+=2,i==1||i==2||i==3||i==7||i==8&&u.fmt<=2){var h=l.readUshort(n,s);s+=2,u.coverage=e._lctf.readCoverage(n,h+c)}if(i==1&&u.fmt==1){var f=l.readUshort(n,s);s+=2,f!=0&&(u.pos=e.GPOS.readValueRecord(n,s,f))}else if(i==2&&u.fmt>=1&&u.fmt<=2){f=l.readUshort(n,s),s+=2;var d=l.readUshort(n,s);s+=2;var g=e._lctf.numOfOnes(f),_=e._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var m=l.readUshort(n,s);s+=2;for(var p=0;p<m;p++){var E=c+l.readUshort(n,s);s+=2;var S=l.readUshort(n,E);E+=2;for(var x=[],w=0;w<S;w++){var C=l.readUshort(n,E);E+=2,f!=0&&(U=e.GPOS.readValueRecord(n,E,f),E+=2*g),d!=0&&(P=e.GPOS.readValueRecord(n,E,d),E+=2*_),x.push({gid2:C,val1:U,val2:P})}u.pairsets.push(x)}}if(u.fmt==2){var b=l.readUshort(n,s);s+=2;var R=l.readUshort(n,s);s+=2;var y=l.readUshort(n,s);s+=2;var v=l.readUshort(n,s);for(s+=2,u.classDef1=e._lctf.readClassDef(n,c+b),u.classDef2=e._lctf.readClassDef(n,c+R),u.matrix=[],p=0;p<y;p++){var D=[];for(w=0;w<v;w++){var U=null,P=null;f!=0&&(U=e.GPOS.readValueRecord(n,s,f),s+=2*g),d!=0&&(P=e.GPOS.readValueRecord(n,s,d),s+=2*_),D.push({val1:U,val2:P})}u.matrix.push(D)}}}else if(i==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(n,l.readUshort(n,s)+c),u.baseCoverage=e._lctf.readCoverage(n,l.readUshort(n,s+2)+c),u.markClassCount=l.readUshort(n,s+4),u.markArray=e.GPOS.readMarkArray(n,l.readUshort(n,s+6)+c),u.baseArray=e.GPOS.readBaseArray(n,l.readUshort(n,s+8)+c,u.markClassCount);else if(i==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(n,l.readUshort(n,s)+c),u.mark2Coverage=e._lctf.readCoverage(n,l.readUshort(n,s+2)+c),u.markClassCount=l.readUshort(n,s+4),u.mark1Array=e.GPOS.readMarkArray(n,l.readUshort(n,s+6)+c),u.mark2Array=e.GPOS.readBaseArray(n,l.readUshort(n,s+8)+c,u.markClassCount);else{if(i==9&&u.fmt==1){var N=l.readUshort(n,s);s+=2;var q=l.readUint(n,s);if(s+=4,o.ltype==9)o.ltype=N;else if(o.ltype!=N)throw"invalid extension substitution";return e.GPOS.subt(n,o.ltype,c+q)}console.debug("unsupported GPOS table LookupType",i,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,i,s){var o=e._bin,l=[];return l.push(1&s?o.readShort(n,i):0),i+=1&s?2:0,l.push(2&s?o.readShort(n,i):0),i+=2&s?2:0,l.push(4&s?o.readShort(n,i):0),i+=4&s?2:0,l.push(8&s?o.readShort(n,i):0),i+=8&s?2:0,l},e.GPOS.readBaseArray=function(n,i,s){var o=e._bin,l=[],c=i,u=o.readUshort(n,i);i+=2;for(var h=0;h<u;h++){for(var f=[],d=0;d<s;d++)f.push(e.GPOS.readAnchorRecord(n,c+o.readUshort(n,i))),i+=2;l.push(f)}return l},e.GPOS.readMarkArray=function(n,i){var s=e._bin,o=[],l=i,c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var h=e.GPOS.readAnchorRecord(n,s.readUshort(n,i+2)+l);h.markClass=s.readUshort(n,i),o.push(h),i+=4}return o},e.GPOS.readAnchorRecord=function(n,i){var s=e._bin,o={};return o.fmt=s.readUshort(n,i),o.x=s.readShort(n,i+2),o.y=s.readShort(n,i+4),o},e.GSUB={},e.GSUB.parse=function(n,i,s,o){return e._lctf.parse(n,i,s,o,e.GSUB.subt)},e.GSUB.subt=function(n,i,s,o){var l=e._bin,c=s,u={};if(u.fmt=l.readUshort(n,s),s+=2,i!=1&&i!=2&&i!=4&&i!=5&&i!=6)return null;if(i==1||i==2||i==4||i==5&&u.fmt<=2||i==6&&u.fmt<=2){var h=l.readUshort(n,s);s+=2,u.coverage=e._lctf.readCoverage(n,c+h)}if(i==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(n,s),s+=2;else if(u.fmt==2){var f=l.readUshort(n,s);s+=2,u.newg=l.readUshorts(n,s,f),s+=2*u.newg.length}}else if(i==2&&u.fmt==1){f=l.readUshort(n,s),s+=2,u.seqs=[];for(var d=0;d<f;d++){var g=l.readUshort(n,s)+c;s+=2;var _=l.readUshort(n,g);u.seqs.push(l.readUshorts(n,g+2,_))}}else if(i==4)for(u.vals=[],f=l.readUshort(n,s),s+=2,d=0;d<f;d++){var m=l.readUshort(n,s);s+=2,u.vals.push(e.GSUB.readLigatureSet(n,c+m))}else if(i==5&&u.fmt==2){if(u.fmt==2){var p=l.readUshort(n,s);s+=2,u.cDef=e._lctf.readClassDef(n,c+p),u.scset=[];var E=l.readUshort(n,s);for(s+=2,d=0;d<E;d++){var S=l.readUshort(n,s);s+=2,u.scset.push(S==0?null:e.GSUB.readSubClassSet(n,c+S))}}}else if(i==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){f=l.readUshort(n,s),s+=2;for(var x=[],w=0;w<f;w++)x.push(e._lctf.readCoverage(n,c+l.readUshort(n,s+2*w)));s+=2*f,d==0&&(u.backCvg=x),d==1&&(u.inptCvg=x),d==2&&(u.ahedCvg=x)}f=l.readUshort(n,s),s+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,s,f)}}else{if(i==7&&u.fmt==1){var C=l.readUshort(n,s);s+=2;var b=l.readUint(n,s);if(s+=4,o.ltype==9)o.ltype=C;else if(o.ltype!=C)throw"invalid extension substitution";return e.GSUB.subt(n,o.ltype,c+b)}console.debug("unsupported GSUB table LookupType",i,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,i){var s=e._bin.readUshort,o=i,l=[],c=s(n,i);i+=2;for(var u=0;u<c;u++){var h=s(n,i);i+=2,l.push(e.GSUB.readSubClassRule(n,o+h))}return l},e.GSUB.readSubClassRule=function(n,i){var s=e._bin.readUshort,o={},l=s(n,i),c=s(n,i+=2);i+=2,o.input=[];for(var u=0;u<l-1;u++)o.input.push(s(n,i)),i+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(n,i,c),o},e.GSUB.readSubstLookupRecords=function(n,i,s){for(var o=e._bin.readUshort,l=[],c=0;c<s;c++)l.push(o(n,i),o(n,i+2)),i+=4;return l},e.GSUB.readChainSubClassSet=function(n,i){var s=e._bin,o=i,l=[],c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var h=s.readUshort(n,i);i+=2,l.push(e.GSUB.readChainSubClassRule(n,o+h))}return l},e.GSUB.readChainSubClassRule=function(n,i){for(var s=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=s.readUshort(n,i);i+=2,c==1&&u--,o[l[c]]=s.readUshorts(n,i,u),i+=2*o[l[c]].length}return u=s.readUshort(n,i),i+=2,o.subst=s.readUshorts(n,i,2*u),i+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(n,i){var s=e._bin,o=i,l=[],c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var h=s.readUshort(n,i);i+=2,l.push(e.GSUB.readLigature(n,o+h))}return l},e.GSUB.readLigature=function(n,i){var s=e._bin,o={chain:[]};o.nglyph=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);i+=2;for(var c=0;c<l-1;c++)o.chain.push(s.readUshort(n,i)),i+=2;return o},e.head={},e.head.parse=function(n,i,s){var o=e._bin,l={};return o.readFixed(n,i),i+=4,l.fontRevision=o.readFixed(n,i),i+=4,o.readUint(n,i),i+=4,o.readUint(n,i),i+=4,l.flags=o.readUshort(n,i),i+=2,l.unitsPerEm=o.readUshort(n,i),i+=2,l.created=o.readUint64(n,i),i+=8,l.modified=o.readUint64(n,i),i+=8,l.xMin=o.readShort(n,i),i+=2,l.yMin=o.readShort(n,i),i+=2,l.xMax=o.readShort(n,i),i+=2,l.yMax=o.readShort(n,i),i+=2,l.macStyle=o.readUshort(n,i),i+=2,l.lowestRecPPEM=o.readUshort(n,i),i+=2,l.fontDirectionHint=o.readShort(n,i),i+=2,l.indexToLocFormat=o.readShort(n,i),i+=2,l.glyphDataFormat=o.readShort(n,i),i+=2,l},e.hhea={},e.hhea.parse=function(n,i,s){var o=e._bin,l={};return o.readFixed(n,i),i+=4,l.ascender=o.readShort(n,i),i+=2,l.descender=o.readShort(n,i),i+=2,l.lineGap=o.readShort(n,i),i+=2,l.advanceWidthMax=o.readUshort(n,i),i+=2,l.minLeftSideBearing=o.readShort(n,i),i+=2,l.minRightSideBearing=o.readShort(n,i),i+=2,l.xMaxExtent=o.readShort(n,i),i+=2,l.caretSlopeRise=o.readShort(n,i),i+=2,l.caretSlopeRun=o.readShort(n,i),i+=2,l.caretOffset=o.readShort(n,i),i+=2,i+=8,l.metricDataFormat=o.readShort(n,i),i+=2,l.numberOfHMetrics=o.readUshort(n,i),i+=2,l},e.hmtx={},e.hmtx.parse=function(n,i,s,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,h=0,f=0;f<o.maxp.numGlyphs;f++)f<o.hhea.numberOfHMetrics&&(u=l.readUshort(n,i),i+=2,h=l.readShort(n,i),i+=2),c.aWidth.push(u),c.lsBearing.push(h);return c},e.kern={},e.kern.parse=function(n,i,s,o){var l=e._bin,c=l.readUshort(n,i);if(i+=2,c==1)return e.kern.parseV1(n,i-2,s,o);var u=l.readUshort(n,i);i+=2;for(var h={glyph1:[],rval:[]},f=0;f<u;f++){i+=2,s=l.readUshort(n,i),i+=2;var d=l.readUshort(n,i);i+=2;var g=d>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;i=e.kern.readFormat0(n,i,h)}return h},e.kern.parseV1=function(n,i,s,o){var l=e._bin;l.readFixed(n,i),i+=4;var c=l.readUint(n,i);i+=4;for(var u={glyph1:[],rval:[]},h=0;h<c;h++){l.readUint(n,i),i+=4;var f=l.readUshort(n,i);i+=2,l.readUshort(n,i),i+=2;var d=f>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;i=e.kern.readFormat0(n,i,u)}return u},e.kern.readFormat0=function(n,i,s){var o=e._bin,l=-1,c=o.readUshort(n,i);i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2;for(var u=0;u<c;u++){var h=o.readUshort(n,i);i+=2;var f=o.readUshort(n,i);i+=2;var d=o.readShort(n,i);i+=2,h!=l&&(s.glyph1.push(h),s.rval.push({glyph2:[],vals:[]}));var g=s.rval[s.rval.length-1];g.glyph2.push(f),g.vals.push(d),l=h}return i},e.loca={},e.loca.parse=function(n,i,s,o){var l=e._bin,c=[],u=o.head.indexToLocFormat,h=o.maxp.numGlyphs+1;if(u==0)for(var f=0;f<h;f++)c.push(l.readUshort(n,i+(f<<1))<<1);if(u==1)for(f=0;f<h;f++)c.push(l.readUint(n,i+(f<<2)));return c},e.maxp={},e.maxp.parse=function(n,i,s){var o=e._bin,l={},c=o.readUint(n,i);return i+=4,l.numGlyphs=o.readUshort(n,i),i+=2,c==65536&&(l.maxPoints=o.readUshort(n,i),i+=2,l.maxContours=o.readUshort(n,i),i+=2,l.maxCompositePoints=o.readUshort(n,i),i+=2,l.maxCompositeContours=o.readUshort(n,i),i+=2,l.maxZones=o.readUshort(n,i),i+=2,l.maxTwilightPoints=o.readUshort(n,i),i+=2,l.maxStorage=o.readUshort(n,i),i+=2,l.maxFunctionDefs=o.readUshort(n,i),i+=2,l.maxInstructionDefs=o.readUshort(n,i),i+=2,l.maxStackElements=o.readUshort(n,i),i+=2,l.maxSizeOfInstructions=o.readUshort(n,i),i+=2,l.maxComponentElements=o.readUshort(n,i),i+=2,l.maxComponentDepth=o.readUshort(n,i),i+=2),l},e.name={},e.name.parse=function(n,i,s){var o=e._bin,l={};o.readUshort(n,i),i+=2;var c=o.readUshort(n,i);i+=2,o.readUshort(n,i);for(var u,h=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],f=i+=2,d=0;d<c;d++){var g=o.readUshort(n,i);i+=2;var _=o.readUshort(n,i);i+=2;var m=o.readUshort(n,i);i+=2;var p=o.readUshort(n,i);i+=2;var E=o.readUshort(n,i);i+=2;var S=o.readUshort(n,i);i+=2;var x,w=h[p],C=f+12*c+S;if(g==0)x=o.readUnicode(n,C,E/2);else if(g==3&&_==0)x=o.readUnicode(n,C,E/2);else if(_==0)x=o.readASCII(n,C,E);else if(_==1)x=o.readUnicode(n,C,E/2);else if(_==3)x=o.readUnicode(n,C,E/2);else{if(g!=1)throw"unknown encoding "+_+", platformID: "+g;x=o.readASCII(n,C,E),console.debug("reading unknown MAC encoding "+_+" as ASCII")}var b="p"+g+","+m.toString(16);l[b]==null&&(l[b]={}),l[b][w!==void 0?w:p]=x,l[b]._lang=m}for(var R in l)if(l[R].postScriptName!=null&&l[R]._lang==1033)return l[R];for(var R in l)if(l[R].postScriptName!=null&&l[R]._lang==0)return l[R];for(var R in l)if(l[R].postScriptName!=null&&l[R]._lang==3084)return l[R];for(var R in l)if(l[R].postScriptName!=null)return l[R];for(var R in l){u=R;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(n,i,s){var o=e._bin.readUshort(n,i);i+=2;var l={};if(o==0)e["OS/2"].version0(n,i,l);else if(o==1)e["OS/2"].version1(n,i,l);else if(o==2||o==3||o==4)e["OS/2"].version2(n,i,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(n,i,l)}return l},e["OS/2"].version0=function(n,i,s){var o=e._bin;return s.xAvgCharWidth=o.readShort(n,i),i+=2,s.usWeightClass=o.readUshort(n,i),i+=2,s.usWidthClass=o.readUshort(n,i),i+=2,s.fsType=o.readUshort(n,i),i+=2,s.ySubscriptXSize=o.readShort(n,i),i+=2,s.ySubscriptYSize=o.readShort(n,i),i+=2,s.ySubscriptXOffset=o.readShort(n,i),i+=2,s.ySubscriptYOffset=o.readShort(n,i),i+=2,s.ySuperscriptXSize=o.readShort(n,i),i+=2,s.ySuperscriptYSize=o.readShort(n,i),i+=2,s.ySuperscriptXOffset=o.readShort(n,i),i+=2,s.ySuperscriptYOffset=o.readShort(n,i),i+=2,s.yStrikeoutSize=o.readShort(n,i),i+=2,s.yStrikeoutPosition=o.readShort(n,i),i+=2,s.sFamilyClass=o.readShort(n,i),i+=2,s.panose=o.readBytes(n,i,10),i+=10,s.ulUnicodeRange1=o.readUint(n,i),i+=4,s.ulUnicodeRange2=o.readUint(n,i),i+=4,s.ulUnicodeRange3=o.readUint(n,i),i+=4,s.ulUnicodeRange4=o.readUint(n,i),i+=4,s.achVendID=[o.readInt8(n,i),o.readInt8(n,i+1),o.readInt8(n,i+2),o.readInt8(n,i+3)],i+=4,s.fsSelection=o.readUshort(n,i),i+=2,s.usFirstCharIndex=o.readUshort(n,i),i+=2,s.usLastCharIndex=o.readUshort(n,i),i+=2,s.sTypoAscender=o.readShort(n,i),i+=2,s.sTypoDescender=o.readShort(n,i),i+=2,s.sTypoLineGap=o.readShort(n,i),i+=2,s.usWinAscent=o.readUshort(n,i),i+=2,s.usWinDescent=o.readUshort(n,i),i+=2},e["OS/2"].version1=function(n,i,s){var o=e._bin;return i=e["OS/2"].version0(n,i,s),s.ulCodePageRange1=o.readUint(n,i),i+=4,s.ulCodePageRange2=o.readUint(n,i),i+=4},e["OS/2"].version2=function(n,i,s){var o=e._bin;return i=e["OS/2"].version1(n,i,s),s.sxHeight=o.readShort(n,i),i+=2,s.sCapHeight=o.readShort(n,i),i+=2,s.usDefault=o.readUshort(n,i),i+=2,s.usBreak=o.readUshort(n,i),i+=2,s.usMaxContext=o.readUshort(n,i),i+=2},e["OS/2"].version5=function(n,i,s){var o=e._bin;return i=e["OS/2"].version2(n,i,s),s.usLowerOpticalPointSize=o.readUshort(n,i),i+=2,s.usUpperOpticalPointSize=o.readUshort(n,i),i+=2},e.post={},e.post.parse=function(n,i,s){var o=e._bin,l={};return l.version=o.readFixed(n,i),i+=4,l.italicAngle=o.readFixed(n,i),i+=4,l.underlinePosition=o.readShort(n,i),i+=2,l.underlineThickness=o.readShort(n,i),i+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,i){var s=n.cmap,o=-1;if(s.p0e4!=null?o=s.p0e4:s.p3e1!=null?o=s.p3e1:s.p1e0!=null?o=s.p1e0:s.p0e3!=null&&(o=s.p0e3),o==-1)throw"no familiar platform and encoding!";var l=s.tables[o];if(l.format==0)return i>=l.map.length?0:l.map[i];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(i<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>i?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[i-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:i+l.idDelta[c])}if(l.format==12){if(i>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var h=l.groups[u];if(h[0]<=i&&i<=h[1])return h[2]+(i-h[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,i){var s={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[i]){var o=n.SVG.entries[i];return o==null?s:(typeof o=="string"&&(o=e.SVG.toPath(o),n.SVG.entries[i]=o),o)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,u=n.CFF.Private;if(c.ROS){for(var h=0;c.FDSelect[h+2]<=i;)h+=2;u=c.FDArray[c.FDSelect[h+1]].Private}e.U._drawCFF(n.CFF.CharStrings[i],l,c,u,s)}else n.glyf&&e.U._drawGlyf(i,n,s);return s},e.U._drawGlyf=function(n,i,s){var o=i.glyf[n];o==null&&(o=i.glyf[n]=e.glyf._parseGlyf(i,n)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,s):e.U._compoGlyph(o,i,s))},e.U._simpleGlyph=function(n,i){for(var s=0;s<n.noc;s++){for(var o=s==0?0:n.endPts[s-1]+1,l=n.endPts[s],c=o;c<=l;c++){var u=c==o?l:c-1,h=c==l?o:c+1,f=1&n.flags[c],d=1&n.flags[u],g=1&n.flags[h],_=n.xs[c],m=n.ys[c];if(c==o)if(f){if(!d){e.U.P.moveTo(i,_,m);continue}e.U.P.moveTo(i,n.xs[u],n.ys[u])}else d?e.U.P.moveTo(i,n.xs[u],n.ys[u]):e.U.P.moveTo(i,(n.xs[u]+_)/2,(n.ys[u]+m)/2);f?d&&e.U.P.lineTo(i,_,m):g?e.U.P.qcurveTo(i,_,m,n.xs[h],n.ys[h]):e.U.P.qcurveTo(i,_,m,(_+n.xs[h])/2,(m+n.ys[h])/2)}e.U.P.closePath(i)}},e.U._compoGlyph=function(n,i,s){for(var o=0;o<n.parts.length;o++){var l={cmds:[],crds:[]},c=n.parts[o];e.U._drawGlyf(c.glyphIndex,i,l);for(var u=c.m,h=0;h<l.crds.length;h+=2){var f=l.crds[h],d=l.crds[h+1];s.crds.push(f*u.a+d*u.b+u.tx),s.crds.push(f*u.c+d*u.d+u.ty)}for(h=0;h<l.cmds.length;h++)s.cmds.push(l.cmds[h])}},e.U._getGlyphClass=function(n,i){var s=e._lctf.getInterval(i,n);return s==-1?0:i[s+2]},e.U._applySubs=function(n,i,s,o){for(var l=n.length-i-1,c=0;c<s.tabs.length;c++)if(s.tabs[c]!=null){var u,h=s.tabs[c];if(!h.coverage||(u=e._lctf.coverageIndex(h.coverage,n[i]))!=-1){if(s.ltype==1)n[i],h.fmt==1?n[i]=n[i]+h.delta:n[i]=h.newg[u];else if(s.ltype==4)for(var f=h.vals[u],d=0;d<f.length;d++){var g=f[d],_=g.chain.length;if(!(_>l)){for(var m=!0,p=0,E=0;E<_;E++){for(;n[i+p+(1+E)]==-1;)p++;g.chain[E]!=n[i+p+(1+E)]&&(m=!1)}if(m){for(n[i]=g.nglyph,E=0;E<_+p;E++)n[i+E+1]=-1;break}}}else if(s.ltype==5&&h.fmt==2)for(var S=e._lctf.getInterval(h.cDef,n[i]),x=h.cDef[S+2],w=h.scset[x],C=0;C<w.length;C++){var b=w[C],R=b.input;if(!(R.length>l)){for(m=!0,E=0;E<R.length;E++){var y=e._lctf.getInterval(h.cDef,n[i+1+E]);if(S==-1&&h.cDef[y+2]!=R[E]){m=!1;break}}if(m){var v=b.substLookupRecords;for(d=0;d<v.length;d+=2)v[d],v[d+1]}}}else if(s.ltype==6&&h.fmt==3){if(!e.U._glsCovered(n,h.backCvg,i-h.backCvg.length)||!e.U._glsCovered(n,h.inptCvg,i)||!e.U._glsCovered(n,h.ahedCvg,i+h.inptCvg.length))continue;var D=h.lookupRec;for(C=0;C<D.length;C+=2){S=D[C];var U=o[D[C+1]];e.U._applySubs(n,i+S,U,o)}}}}},e.U._glsCovered=function(n,i,s){for(var o=0;o<i.length;o++)if(e._lctf.coverageIndex(i[o],n[s+o])==-1)return!1;return!0},e.U.glyphsToPath=function(n,i,s){for(var o={cmds:[],crds:[]},l=0,c=0;c<i.length;c++){var u=i[c];if(u!=-1){for(var h=c<i.length-1&&i[c+1]!=-1?i[c+1]:0,f=e.U.glyphToPath(n,u),d=0;d<f.crds.length;d+=2)o.crds.push(f.crds[d]+l),o.crds.push(f.crds[d+1]);for(s&&o.cmds.push(s),d=0;d<f.cmds.length;d++)o.cmds.push(f.cmds[d]);s&&o.cmds.push("X"),l+=n.hmtx.aWidth[u],c<i.length-1&&(l+=e.U.getPairAdjustment(n,u,h))}}return o},e.U.P={},e.U.P.moveTo=function(n,i,s){n.cmds.push("M"),n.crds.push(i,s)},e.U.P.lineTo=function(n,i,s){n.cmds.push("L"),n.crds.push(i,s)},e.U.P.curveTo=function(n,i,s,o,l,c,u){n.cmds.push("C"),n.crds.push(i,s,o,l,c,u)},e.U.P.qcurveTo=function(n,i,s,o,l){n.cmds.push("Q"),n.crds.push(i,s,o,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,i,s,o,l){for(var c=i.stack,u=i.nStems,h=i.haveWidth,f=i.width,d=i.open,g=0,_=i.x,m=i.y,p=0,E=0,S=0,x=0,w=0,C=0,b=0,R=0,y=0,v=0,D={val:0,size:0};g<n.length;){e.CFF.getCharString(n,g,D);var U=D.val;if(g+=D.size,U=="o1"||U=="o18")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(U=="o3"||U=="o23")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(U=="o4")c.length>1&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),d&&e.U.P.closePath(l),m+=c.pop(),e.U.P.moveTo(l,_,m),d=!0;else if(U=="o5")for(;c.length>0;)_+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,_,m);else if(U=="o6"||U=="o7")for(var P=c.length,N=U=="o6",q=0;q<P;q++){var G=c.shift();N?_+=G:m+=G,N=!N,e.U.P.lineTo(l,_,m)}else if(U=="o8"||U=="o24"){P=c.length;for(var Q=0;Q+6<=P;)p=_+c.shift(),E=m+c.shift(),S=p+c.shift(),x=E+c.shift(),_=S+c.shift(),m=x+c.shift(),e.U.P.curveTo(l,p,E,S,x,_,m),Q+=6;U=="o24"&&(_+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,_,m))}else{if(U=="o11")break;if(U=="o1234"||U=="o1235"||U=="o1236"||U=="o1237")U=="o1234"&&(E=m,S=(p=_+c.shift())+c.shift(),v=x=E+c.shift(),C=x,R=m,_=(b=(w=(y=S+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,p,E,S,x,y,v),e.U.P.curveTo(l,w,C,b,R,_,m)),U=="o1235"&&(p=_+c.shift(),E=m+c.shift(),S=p+c.shift(),x=E+c.shift(),y=S+c.shift(),v=x+c.shift(),w=y+c.shift(),C=v+c.shift(),b=w+c.shift(),R=C+c.shift(),_=b+c.shift(),m=R+c.shift(),c.shift(),e.U.P.curveTo(l,p,E,S,x,y,v),e.U.P.curveTo(l,w,C,b,R,_,m)),U=="o1236"&&(p=_+c.shift(),E=m+c.shift(),S=p+c.shift(),v=x=E+c.shift(),C=x,b=(w=(y=S+c.shift())+c.shift())+c.shift(),R=C+c.shift(),_=b+c.shift(),e.U.P.curveTo(l,p,E,S,x,y,v),e.U.P.curveTo(l,w,C,b,R,_,m)),U=="o1237"&&(p=_+c.shift(),E=m+c.shift(),S=p+c.shift(),x=E+c.shift(),y=S+c.shift(),v=x+c.shift(),w=y+c.shift(),C=v+c.shift(),b=w+c.shift(),R=C+c.shift(),Math.abs(b-_)>Math.abs(R-m)?_=b+c.shift():m=R+c.shift(),e.U.P.curveTo(l,p,E,S,x,y,v),e.U.P.curveTo(l,w,C,b,R,_,m));else if(U=="o14"){if(c.length>0&&!h&&(f=c.shift()+s.nominalWidthX,h=!0),c.length==4){var Y=c.shift(),K=c.shift(),j=c.shift(),I=c.shift(),V=e.CFF.glyphBySE(s,j),ee=e.CFF.glyphBySE(s,I);e.U._drawCFF(s.CharStrings[V],i,s,o,l),i.x=Y,i.y=K,e.U._drawCFF(s.CharStrings[ee],i,s,o,l)}d&&(e.U.P.closePath(l),d=!1)}else if(U=="o19"||U=="o20")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0,g+=u+7>>3;else if(U=="o21")c.length>2&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),m+=c.pop(),_+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,_,m),d=!0;else if(U=="o22")c.length>1&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),_+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,_,m),d=!0;else if(U=="o25"){for(;c.length>6;)_+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,_,m);p=_+c.shift(),E=m+c.shift(),S=p+c.shift(),x=E+c.shift(),_=S+c.shift(),m=x+c.shift(),e.U.P.curveTo(l,p,E,S,x,_,m)}else if(U=="o26")for(c.length%2&&(_+=c.shift());c.length>0;)p=_,E=m+c.shift(),_=S=p+c.shift(),m=(x=E+c.shift())+c.shift(),e.U.P.curveTo(l,p,E,S,x,_,m);else if(U=="o27")for(c.length%2&&(m+=c.shift());c.length>0;)E=m,S=(p=_+c.shift())+c.shift(),x=E+c.shift(),_=S+c.shift(),m=x,e.U.P.curveTo(l,p,E,S,x,_,m);else if(U=="o10"||U=="o29"){var F=U=="o10"?o:s;if(c.length==0)console.debug("error: empty stack");else{var k=c.pop(),te=F.Subrs[k+F.Bias];i.x=_,i.y=m,i.nStems=u,i.haveWidth=h,i.width=f,i.open=d,e.U._drawCFF(te,i,s,o,l),_=i.x,m=i.y,u=i.nStems,h=i.haveWidth,f=i.width,d=i.open}}else if(U=="o30"||U=="o31"){var H=c.length,ne=(Q=0,U=="o31");for(Q+=H-(P=-3&H);Q<P;)ne?(E=m,S=(p=_+c.shift())+c.shift(),m=(x=E+c.shift())+c.shift(),P-Q==5?(_=S+c.shift(),Q++):_=S,ne=!1):(p=_,E=m+c.shift(),S=p+c.shift(),x=E+c.shift(),_=S+c.shift(),P-Q==5?(m=x+c.shift(),Q++):m=x,ne=!0),e.U.P.curveTo(l,p,E,S,x,_,m),Q+=4}else{if((U+"").charAt(0)=="o")throw console.debug("Unknown operation: "+U,n),U;c.push(U)}}}i.x=_,i.y=m,i.nStems=u,i.haveWidth=h,i.width=f,i.open=d};var t=e,r={Typr:t};return a.Typr=t,a.default=r,Object.defineProperty(a,"__esModule",{value:!0}),a})({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function Qg(){return(function(a){var e=Uint8Array,t=Uint16Array,r=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(U,P){for(var N=new t(31),q=0;q<31;++q)N[q]=P+=1<<U[q-1];var G=new r(N[30]);for(q=1;q<30;++q)for(var Q=N[q];Q<N[q+1];++Q)G[Q]=Q-N[q]<<5|q;return[N,G]},l=o(n,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var h=o(i,0)[0],f=new t(32768),d=0;d<32768;++d){var g=(43690&d)>>>1|(21845&d)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,f[d]=((65280&g)>>>8|(255&g)<<8)>>>1}var _=function(U,P,N){for(var q=U.length,G=0,Q=new t(P);G<q;++G)++Q[U[G]-1];var Y,K=new t(P);for(G=0;G<P;++G)K[G]=K[G-1]+Q[G-1]<<1;{Y=new t(1<<P);var j=15-P;for(G=0;G<q;++G)if(U[G])for(var I=G<<4|U[G],V=P-U[G],ee=K[U[G]-1]++<<V,F=ee|(1<<V)-1;ee<=F;++ee)Y[f[ee]>>>j]=I}return Y},m=new e(288);for(d=0;d<144;++d)m[d]=8;for(d=144;d<256;++d)m[d]=9;for(d=256;d<280;++d)m[d]=7;for(d=280;d<288;++d)m[d]=8;var p=new e(32);for(d=0;d<32;++d)p[d]=5;var E=_(m,9),S=_(p,5),x=function(U){for(var P=U[0],N=1;N<U.length;++N)U[N]>P&&(P=U[N]);return P},w=function(U,P,N){var q=P/8|0;return(U[q]|U[q+1]<<8)>>(7&P)&N},C=function(U,P){var N=P/8|0;return(U[N]|U[N+1]<<8|U[N+2]<<16)>>(7&P)},b=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],R=function(U,P,N){var q=new Error(P||b[U]);if(q.code=U,Error.captureStackTrace&&Error.captureStackTrace(q,R),!N)throw q;return q},y=function(U,P,N){var q=U.length;if(!q||N&&!N.l&&q<5)return P||new e(0);var G=!P||N,Q=!N||N.i;N||(N={}),P||(P=new e(3*q));var Y,K=function(le){var Pe=P.length;if(le>Pe){var Ie=new e(Math.max(2*Pe,le));Ie.set(P),P=Ie}},j=N.f||0,I=N.p||0,V=N.b||0,ee=N.l,F=N.d,k=N.m,te=N.n,H=8*q;do{if(!ee){N.f=j=w(U,I,1);var ne=w(U,I+1,3);if(I+=3,!ne){var ge=U[(pe=((Y=I)/8|0)+(7&Y&&1)+4)-4]|U[pe-3]<<8,Se=pe+ge;if(Se>q){Q&&R(0);break}G&&K(V+ge),P.set(U.subarray(pe,Se),V),N.b=V+=ge,N.p=I=8*Se;continue}if(ne==1)ee=E,F=S,k=9,te=5;else if(ne==2){var ve=w(U,I,31)+257,oe=w(U,I+10,15)+4,Ne=ve+w(U,I+5,31)+1;I+=14;for(var L=new e(Ne),Oe=new e(19),be=0;be<oe;++be)Oe[s[be]]=w(U,I+3*be,7);I+=3*oe;var we=x(Oe),se=(1<<we)-1,Ae=_(Oe,we);for(be=0;be<Ne;){var pe,T=Ae[w(U,I,se)];if(I+=15&T,(pe=T>>>4)<16)L[be++]=pe;else{var M=0,B=0;for(pe==16?(B=3+w(U,I,3),I+=2,M=L[be-1]):pe==17?(B=3+w(U,I,7),I+=3):pe==18&&(B=11+w(U,I,127),I+=7);B--;)L[be++]=M}}var Z=L.subarray(0,ve),J=L.subarray(ve);k=x(Z),te=x(J),ee=_(Z,k),F=_(J,te)}else R(1);if(I>H){Q&&R(0);break}}G&&K(V+131072);for(var ae=(1<<k)-1,he=(1<<te)-1,ce=I;;ce=I){var me=(M=ee[C(U,I)&ae])>>>4;if((I+=15&M)>H){Q&&R(0);break}if(M||R(2),me<256)P[V++]=me;else{if(me==256){ce=I,ee=null;break}var De=me-254;if(me>264){var ue=n[be=me-257];De=w(U,I,(1<<ue)-1)+c[be],I+=ue}var ye=F[C(U,I)&he],Ee=ye>>>4;if(ye||R(3),I+=15&ye,J=h[Ee],Ee>3&&(ue=i[Ee],J+=C(U,I)&(1<<ue)-1,I+=ue),I>H){Q&&R(0);break}G&&K(V+131072);for(var Te=V+De;V<Te;V+=4)P[V]=P[V-J],P[V+1]=P[V+1-J],P[V+2]=P[V+2-J],P[V+3]=P[V+3-J];V=Te}}N.l=ee,N.p=ce,N.b=V,ee&&(j=1,N.m=k,N.d=F,N.n=te)}while(!j);return V==P.length?P:(function(le,Pe,Ie){(Ie==null||Ie>le.length)&&(Ie=le.length);var je=new(le instanceof t?t:le instanceof r?r:e)(Ie-Pe);return je.set(le.subarray(Pe,Ie)),je})(P,0,V)},v=new e(0),D=typeof TextDecoder<"u"&&new TextDecoder;try{D.decode(v,{stream:!0})}catch{}return a.convert_streams=function(U){var P=new DataView(U),N=0;function q(){var ve=P.getUint16(N);return N+=2,ve}function G(){var ve=P.getUint32(N);return N+=4,ve}function Q(ve){ge.setUint16(Se,ve),Se+=2}function Y(ve){ge.setUint32(Se,ve),Se+=4}for(var K={signature:G(),flavor:G(),length:G(),numTables:q(),reserved:q(),totalSfntSize:G(),majorVersion:q(),minorVersion:q(),metaOffset:G(),metaLength:G(),metaOrigLength:G(),privOffset:G(),privLength:G()},j=0;Math.pow(2,j)<=K.numTables;)j++;j--;for(var I=16*Math.pow(2,j),V=16*K.numTables-I,ee=12,F=[],k=0;k<K.numTables;k++)F.push({tag:G(),offset:G(),compLength:G(),origLength:G(),origChecksum:G()}),ee+=16;var te,H=new Uint8Array(12+16*F.length+F.reduce((function(ve,oe){return ve+oe.origLength+4}),0)),ne=H.buffer,ge=new DataView(ne),Se=0;return Y(K.flavor),Q(K.numTables),Q(I),Q(j),Q(V),F.forEach((function(ve){Y(ve.tag),Y(ve.origChecksum),Y(ee),Y(ve.origLength),ve.outOffset=ee,(ee+=ve.origLength)%4!=0&&(ee+=4-ee%4)})),F.forEach((function(ve){var oe,Ne=U.slice(ve.offset,ve.offset+ve.compLength);if(ve.compLength!=ve.origLength){var L=new Uint8Array(ve.origLength);oe=new Uint8Array(Ne,2),y(oe,L)}else L=new Uint8Array(Ne);H.set(L,ve.outOffset);var Oe=0;(ee=ve.outOffset+ve.origLength)%4!=0&&(Oe=4-ee%4),H.set(new Uint8Array(Oe).buffer,ve.outOffset+ve.origLength),te=ee+Oe})),ne.slice(0,te)},Object.defineProperty(a,"__esModule",{value:!0}),a})({}).convert_streams}function $g(a,e){const t={M:2,L:2,Q:4,C:6,Z:0},r={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,i=2,s=4,o=8,l=16,c=32;let u;function h(b){if(!u){const R={R:i,L:n,D:s,C:l,U:c,T:o};u=new Map;for(let y in r){let v=0;r[y].split(",").forEach(D=>{let[U,P]=D.split("+");U=parseInt(U,36),P=P?parseInt(P,36):0,u.set(v+=U,R[y]);for(let N=P;N--;)u.set(++v,R[y])})}}return u.get(b)||c}const f=1,d=2,g=3,_=4,m=[null,"isol","init","fina","medi"];function p(b){const R=new Uint8Array(b.length);let y=c,v=f,D=-1;for(let U=0;U<b.length;U++){const P=b.codePointAt(U);let N=h(P)|0,q=f;N&o||(y&(n|s|l)?N&(i|s|l)?(q=g,(v===f||v===g)&&R[D]++):N&(n|c)&&(v===d||v===_)&&R[D]--:y&(i|c)&&(v===d||v===_)&&R[D]--,v=R[U]=q,y=N,D=U,P>65535&&U++)}return R}function E(b,R){const y=[];for(let D=0;D<R.length;D++){const U=R.codePointAt(D);U>65535&&D++,y.push(a.U.codeToGlyph(b,U))}const v=b.GSUB;if(v){const{lookupList:D,featureList:U}=v;let P;const N=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,q=[];U.forEach(G=>{if(N.test(G.tag))for(let Q=0;Q<G.tab.length;Q++){if(q[G.tab[Q]])continue;q[G.tab[Q]]=!0;const Y=D[G.tab[Q]],K=/^(isol|init|fina|medi)$/.test(G.tag);K&&!P&&(P=p(R));for(let j=0;j<y.length;j++)(!P||!K||m[P[j]]===G.tag)&&a.U._applySubs(y,j,Y,D)}})}return y}function S(b,R){const y=new Int16Array(R.length*3);let v=0;for(;v<R.length;v++){const N=R[v];if(N===-1)continue;y[v*3+2]=b.hmtx.aWidth[N];const q=b.GPOS;if(q){const G=q.lookupList;for(let Q=0;Q<G.length;Q++){const Y=G[Q];for(let K=0;K<Y.tabs.length;K++){const j=Y.tabs[K];if(Y.ltype===1){if(a._lctf.coverageIndex(j.coverage,N)!==-1&&j.pos){P(j.pos,v);break}}else if(Y.ltype===2){let I=null,V=D();if(V!==-1){const ee=a._lctf.coverageIndex(j.coverage,R[V]);if(ee!==-1){if(j.fmt===1){const F=j.pairsets[ee];for(let k=0;k<F.length;k++)F[k].gid2===N&&(I=F[k])}else if(j.fmt===2){const F=a.U._getGlyphClass(R[V],j.classDef1),k=a.U._getGlyphClass(N,j.classDef2);I=j.matrix[F][k]}if(I){I.val1&&P(I.val1,V),I.val2&&P(I.val2,v);break}}}}else if(Y.ltype===4){const I=a._lctf.coverageIndex(j.markCoverage,N);if(I!==-1){const V=D(U),ee=V===-1?-1:a._lctf.coverageIndex(j.baseCoverage,R[V]);if(ee!==-1){const F=j.markArray[I],k=j.baseArray[ee][F.markClass];y[v*3]=k.x-F.x+y[V*3]-y[V*3+2],y[v*3+1]=k.y-F.y+y[V*3+1];break}}}else if(Y.ltype===6){const I=a._lctf.coverageIndex(j.mark1Coverage,N);if(I!==-1){const V=D();if(V!==-1){const ee=R[V];if(x(b,ee)===3){const F=a._lctf.coverageIndex(j.mark2Coverage,ee);if(F!==-1){const k=j.mark1Array[I],te=j.mark2Array[F][k.markClass];y[v*3]=te.x-k.x+y[V*3]-y[V*3+2],y[v*3+1]=te.y-k.y+y[V*3+1];break}}}}}}}}else if(b.kern&&!b.cff){const G=D();if(G!==-1){const Q=b.kern.glyph1.indexOf(R[G]);if(Q!==-1){const Y=b.kern.rval[Q].glyph2.indexOf(N);Y!==-1&&(y[G*3+2]+=b.kern.rval[Q].vals[Y])}}}}return y;function D(N){for(let q=v-1;q>=0;q--)if(R[q]!==-1&&(!N||N(R[q])))return q;return-1}function U(N){return x(b,N)===1}function P(N,q){for(let G=0;G<3;G++)y[q*3+G]+=N[G]||0}}function x(b,R){const y=b.GDEF&&b.GDEF.glyphClassDef;return y?a.U._getGlyphClass(R,y):0}function w(...b){for(let R=0;R<b.length;R++)if(typeof b[R]=="number")return b[R]}function C(b){const R=Object.create(null),y=b["OS/2"],v=b.hhea,D=b.head.unitsPerEm,U=w(y&&y.sTypoAscender,v&&v.ascender,D),P={unitsPerEm:D,ascender:U,descender:w(y&&y.sTypoDescender,v&&v.descender,0),capHeight:w(y&&y.sCapHeight,U),xHeight:w(y&&y.sxHeight,U),lineGap:w(y&&y.sTypoLineGap,v&&v.lineGap),supportsCodePoint(N){return a.U.codeToGlyph(b,N)>0},forEachGlyph(N,q,G,Q){let Y=0;const K=1/P.unitsPerEm*q,j=E(b,N);let I=0;const V=S(b,j);return j.forEach((ee,F)=>{if(ee!==-1){let k=R[ee];if(!k){const{cmds:te,crds:H}=a.U.glyphToPath(b,ee);let ne="",ge=0;for(let L=0,Oe=te.length;L<Oe;L++){const be=t[te[L]];ne+=te[L];for(let we=1;we<=be;we++)ne+=(we>1?",":"")+H[ge++]}let Se,ve,oe,Ne;if(H.length){Se=ve=1/0,oe=Ne=-1/0;for(let L=0,Oe=H.length;L<Oe;L+=2){let be=H[L],we=H[L+1];be<Se&&(Se=be),we<ve&&(ve=we),be>oe&&(oe=be),we>Ne&&(Ne=we)}}else Se=oe=ve=Ne=0;k=R[ee]={index:ee,advanceWidth:b.hmtx.aWidth[ee],xMin:Se,yMin:ve,xMax:oe,yMax:Ne,path:ne}}Q.call(null,k,Y+V[F*3]*K,V[F*3+1]*K,I),Y+=V[F*3+2]*K,G&&(Y+=G*q)}I+=N.codePointAt(I)>65535?2:1}),Y}};return P}return function(R){const y=new Uint8Array(R,0,4),v=a._bin.readASCII(y,0,4);if(v==="wOFF")R=e(R);else if(v==="wOF2")throw new Error("woff2 fonts not supported");return C(a.parse(R)[0])}}const e_=Yi({name:"Typr Font Parser",dependencies:[Jg,Qg,$g],init(a,e,t){const r=a(),n=e();return t(r,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function t_(){return(function(a){var e=function(){this.buckets=new Map};e.prototype.add=function(S){var x=S>>5;this.buckets.set(x,(this.buckets.get(x)||0)|1<<(31&S))},e.prototype.has=function(S){var x=this.buckets.get(S>>5);return x!==void 0&&(x&1<<(31&S))!=0},e.prototype.serialize=function(){var S=[];return this.buckets.forEach((function(x,w){S.push((+w).toString(36)+":"+x.toString(36))})),S.join(",")},e.prototype.deserialize=function(S){var x=this;this.buckets.clear(),S.split(",").forEach((function(w){var C=w.split(":");x.buckets.set(parseInt(C[0],36),parseInt(C[1],36))}))};var t=Math.pow(2,8),r=t-1,n=~r;function i(S){var x=(function(C){return C&n})(S).toString(16),w=(function(C){return(C&n)+t-1})(S).toString(16);return"codepoint-index/plane"+(S>>16)+"/"+x+"-"+w+".json"}function s(S,x){var w=S&r,C=x.codePointAt(w/6|0);return((C=(C||48)-48)&1<<w%6)!=0}function o(S,x){var w;(w=S,w.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map((function(C){return C.split("-").map((function(b){return parseInt(b.trim(),16)}))}))).forEach((function(C){var b=C[0],R=C[1];R===void 0&&(R=b),x(b,R)}))}function l(S,x){o(S,(function(w,C){for(var b=w;b<=C;b++)x(b)}))}var c={},u={},h=new WeakMap,f="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(S){var x=h.get(S);return x||(x=new e,l(S.ranges,(function(w){return x.add(w)})),h.set(S,x)),x}var g,_=new Map;function m(S,x,w){return S[x]?x:S[w]?w:(function(C){for(var b in C)return b})(S)}function p(S,x){var w=x;if(!S.includes(w)){w=1/0;for(var C=0;C<S.length;C++)Math.abs(S[C]-x)<Math.abs(w-x)&&(w=S[C])}return w}function E(S){return g||(g=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",(function(x){g.add(x)}))),g.has(S)}return a.CodePointSet=e,a.clearCache=function(){c={},u={}},a.getFontsForString=function(S,x){x===void 0&&(x={});var w,C=x.lang;C===void 0&&(C=/\p{Script=Hangul}/u.test(w=S)?"ko":/\p{Script=Hiragana}|\p{Script=Katakana}/u.test(w)?"ja":"en");var b=x.category;b===void 0&&(b="sans-serif");var R=x.style;R===void 0&&(R="normal");var y=x.weight;y===void 0&&(y=400);var v=(x.dataUrl||f).replace(/\/$/g,""),D=new Map,U=new Uint8Array(S.length),P={},N={},q=new Array(S.length),G=new Map,Q=!1;function Y(I){var V=_.get(I);return V||(V=fetch(v+"/"+I).then((function(ee){if(!ee.ok)throw new Error(ee.statusText);return ee.json().then((function(F){if(!Array.isArray(F)||F[0]!==1)throw new Error("Incorrect schema version; need 1, got "+F[0]);return F[1]}))})).catch((function(ee){if(v!==f)return Q||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+v+'", trying default CDN. '+ee.message),Q=!0),v=f,_.delete(I),Y(I);throw ee})),_.set(I,V)),V}for(var K=function(I){var V=S.codePointAt(I),ee=i(V);q[I]=ee,c[ee]||G.has(ee)||G.set(ee,Y(ee).then((function(F){c[ee]=F}))),V>65535&&(I++,j=I)},j=0;j<S.length;j++)K(j);return Promise.all(G.values()).then((function(){G.clear();for(var I=function(ee){var F=S.codePointAt(ee),k=null,te=c[q[ee]],H=void 0;for(var ne in te){var ge=N[ne];if(ge===void 0&&(ge=N[ne]=new RegExp(ne).test(C||"en")),ge){for(var Se in H=ne,te[ne])if(s(F,te[ne][Se])){k=Se;break}break}}if(!k){e:for(var ve in te)if(ve!==H){for(var oe in te[ve])if(s(F,te[ve][oe])){k=oe;break e}}}k||(console.debug("No font coverage for U+"+F.toString(16)),k="latin"),q[ee]=k,u[k]||G.has(k)||G.set(k,Y("font-meta/"+k+".json").then((function(Ne){u[k]=Ne}))),F>65535&&(ee++,V=ee)},V=0;V<S.length;V++)I(V);return Promise.all(G.values())})).then((function(){for(var I,V=null,ee=0;ee<S.length;ee++){var F=S.codePointAt(ee);if(V&&(E(F)||d(V).has(F)))U[ee]=U[ee-1];else{V=u[q[ee]];var k=P[V.id];if(!k){var te=V.typeforms,H=m(te,b,"sans-serif"),ne=m(te[H],R,"normal"),ge=p((I=te[H])===null||I===void 0?void 0:I[ne],y);k=P[V.id]=v+"/font-files/"+V.id+"/"+H+"."+ne+"."+ge+".woff"}var Se=D.get(k);Se==null&&(Se=D.size,D.set(k,Se)),U[ee]=Se}F>65535&&(ee++,U[ee]=U[ee-1])}return{fontUrls:Array.from(D.keys()),chars:U}}))},Object.defineProperty(a,"__esModule",{value:!0}),a})({})}function n_(a,e){const t=Object.create(null),r=Object.create(null);function n(s,o){const l=c=>{console.error(`Failure loading font ${s}`,c)};try{const c=new XMLHttpRequest;c.open("get",s,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=a(c.response);u.src=s,o(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function i(s,o){let l=t[s];l?o(l):r[s]?r[s].push(o):(r[s]=[o],n(s,c=>{c.src=s,t[s]=c,r[s].forEach(u=>u(c)),delete r[s]}))}return function(s,o,{lang:l,fonts:c=[],style:u="normal",weight:h="normal",unicodeFontsURL:f}={}){const d=new Uint8Array(s.length),g=[];s.length||E();const _=new Map,m=[];if(u!=="italic"&&(u="normal"),typeof h!="number"&&(h=h==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(x=>!x.lang||x.lang.test(l)).reverse(),c.length){let b=0;(function R(y=0){for(let v=y,D=s.length;v<D;v++){const U=s.codePointAt(v);if(b===1&&g[d[v-1]].supportsCodePoint(U)||v>0&&/\s/.test(s[v]))d[v]=d[v-1],b===2&&(m[m.length-1][1]=v);else for(let P=d[v],N=c.length;P<=N;P++)if(P===N){const q=b===2?m[m.length-1]:m[m.length]=[v,v];q[1]=v,b=2}else{d[v]=P;const{src:q,unicodeRange:G}=c[P];if(!G||S(U,G)){const Q=t[q];if(!Q){i(q,()=>{R(v)});return}if(Q.supportsCodePoint(U)){let Y=_.get(Q);typeof Y!="number"&&(Y=g.length,g.push(Q),_.set(Q,Y)),d[v]=Y,b=1;break}}}U>65535&&v+1<D&&(d[v+1]=d[v],v++,b===2&&(m[m.length-1][1]=v))}p()})()}else m.push([0,s.length-1]),p();function p(){if(m.length){const x=m.map(w=>s.substring(w[0],w[1]+1)).join(`
`);e.getFontsForString(x,{lang:l||void 0,style:u,weight:h,dataUrl:f}).then(({fontUrls:w,chars:C})=>{const b=g.length;let R=0;m.forEach(v=>{for(let D=0,U=v[1]-v[0];D<=U;D++)d[v[0]+D]=C[R++]+b;R++});let y=0;w.forEach((v,D)=>{i(v,U=>{g[D+b]=U,++y===w.length&&E()})})})}else E()}function E(){o({chars:d,fonts:g})}function S(x,w){for(let C=0;C<w.length;C++){const[b,R=b]=w[C];if(b<=x&&x<=R)return!0}return!1}}}const i_=Yi({name:"FontResolver",dependencies:[n_,e_,t_],init(a,e,t){return a(e,t())}});function r_(a,e){const r=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",i=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function s({text:g,lang:_,fonts:m,style:p,weight:E,preResolvedFonts:S,unicodeFontsURL:x},w){const C=({chars:b,fonts:R})=>{let y,v;const D=[];for(let U=0;U<b.length;U++)b[U]!==v?(v=b[U],D.push(y={start:U,end:U,fontObj:R[b[U]]})):y.end=U;w(D)};S?C(S):a(g,C,{lang:_,fonts:m,style:p,weight:E,unicodeFontsURL:x})}function o({text:g="",font:_,lang:m,sdfGlyphSize:p=64,fontSize:E=400,fontWeight:S=1,fontStyle:x="normal",letterSpacing:w=0,lineHeight:C="normal",maxWidth:b=1/0,direction:R,textAlign:y="left",textIndent:v=0,whiteSpace:D="normal",overflowWrap:U="normal",anchorX:P=0,anchorY:N=0,metricsOnly:q=!1,unicodeFontsURL:G,preResolvedFonts:Q=null,includeCaretPositions:Y=!1,chunkedBoundsSize:K=8192,colorRanges:j=null},I){const V=h(),ee={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),E=+E,w=+w,b=+b,C=C||"normal",v=+v,s({text:g,lang:m,style:x,weight:S,fonts:typeof _=="string"?[{src:_}]:_,unicodeFontsURL:G,preResolvedFonts:Q},F=>{ee.fontLoad=h()-V;const k=isFinite(b);let te=null,H=null,ne=null,ge=null,Se=null,ve=null,oe=null,Ne=null,L=0,Oe=0,be=D!=="nowrap";const we=new Map,se=h();let Ae=v,pe=0,T=new f;const M=[T];F.forEach(he=>{const{fontObj:ce}=he,{ascender:me,descender:De,unitsPerEm:ue,lineGap:ye,capHeight:Ee,xHeight:Te}=ce;let le=we.get(ce);if(!le){const fe=E/ue,$=C==="normal"?(me-De+ye)*fe:C*E,de=($-(me-De)*fe)/2,xe=Math.min($,(me-De)*fe),_e=(me+De)/2*fe+xe/2;le={index:we.size,src:ce.src,fontObj:ce,fontSizeMult:fe,unitsPerEm:ue,ascender:me*fe,descender:De*fe,capHeight:Ee*fe,xHeight:Te*fe,lineHeight:$,baseline:-de-me*fe,caretTop:_e,caretBottom:_e-xe},we.set(ce,le)}const{fontSizeMult:Pe}=le,Ie=g.slice(he.start,he.end+1);let je,z;ce.forEachGlyph(Ie,E,w,(fe,$,de,xe)=>{$+=pe,xe+=he.start,je=$,z=fe;const _e=g.charAt(xe),Fe=fe.advanceWidth*Pe,We=T.count;let Be;if("isEmpty"in fe||(fe.isWhitespace=!!_e&&new RegExp(n).test(_e),fe.canBreakAfter=!!_e&&i.test(_e),fe.isEmpty=fe.xMin===fe.xMax||fe.yMin===fe.yMax||r.test(_e)),!fe.isWhitespace&&!fe.isEmpty&&Oe++,be&&k&&!fe.isWhitespace&&$+Fe+Ae>b&&We){if(T.glyphAt(We-1).glyphObj.canBreakAfter)Be=new f,Ae=-$;else for(let st=We;st--;)if(st===0&&U==="break-word"){Be=new f,Ae=-$;break}else if(T.glyphAt(st).glyphObj.canBreakAfter){Be=T.splitAt(st+1);const ot=Be.glyphAt(0).x;Ae-=ot;for(let dt=Be.count;dt--;)Be.glyphAt(dt).x-=ot;break}Be&&(T.isSoftWrapped=!0,T=Be,M.push(T),L=b)}let ze=T.glyphAt(T.count);ze.glyphObj=fe,ze.x=$+Ae,ze.y=de,ze.width=Fe,ze.charIndex=xe,ze.fontData=le,_e===`
`&&(T=new f,M.push(T),Ae=-($+Fe+w*E)+v)}),pe=je+z.advanceWidth*Pe+w*E});let B=0;M.forEach(he=>{let ce=!0;for(let me=he.count;me--;){const De=he.glyphAt(me);ce&&!De.glyphObj.isWhitespace&&(he.width=De.x+De.width,he.width>L&&(L=he.width),ce=!1);let{lineHeight:ue,capHeight:ye,xHeight:Ee,baseline:Te}=De.fontData;ue>he.lineHeight&&(he.lineHeight=ue);const le=Te-he.baseline;le<0&&(he.baseline+=le,he.cap+=le,he.ex+=le),he.cap=Math.max(he.cap,he.baseline+ye),he.ex=Math.max(he.ex,he.baseline+Ee)}he.baseline-=B,he.cap-=B,he.ex-=B,B+=he.lineHeight});let Z=0,J=0;if(P&&(typeof P=="number"?Z=-P:typeof P=="string"&&(Z=-L*(P==="left"?0:P==="center"?.5:P==="right"?1:c(P)))),N&&(typeof N=="number"?J=-N:typeof N=="string"&&(J=N==="top"?0:N==="top-baseline"?-M[0].baseline:N==="top-cap"?-M[0].cap:N==="top-ex"?-M[0].ex:N==="middle"?B/2:N==="bottom"?B:N==="bottom-baseline"?-M[M.length-1].baseline:c(N)*B)),!q){const he=e.getEmbeddingLevels(g,R);te=new Uint16Array(Oe),H=new Uint8Array(Oe),ne=new Float32Array(Oe*2),ge={},oe=[1/0,1/0,-1/0,-1/0],Ne=[],Y&&(ve=new Float32Array(g.length*4)),j&&(Se=new Uint8Array(Oe*3));let ce=0,me=-1,De=-1,ue,ye;if(M.forEach((Ee,Te)=>{let{count:le,width:Pe}=Ee;if(le>0){let Ie=0;for(let xe=le;xe--&&Ee.glyphAt(xe).glyphObj.isWhitespace;)Ie++;let je=0,z=0;if(y==="center")je=(L-Pe)/2;else if(y==="right")je=L-Pe;else if(y==="justify"&&Ee.isSoftWrapped){let xe=0;for(let _e=le-Ie;_e--;)Ee.glyphAt(_e).glyphObj.isWhitespace&&xe++;z=(L-Pe)/xe}if(z||je){let xe=0;for(let _e=0;_e<le;_e++){let Fe=Ee.glyphAt(_e);const We=Fe.glyphObj;Fe.x+=je+xe,z!==0&&We.isWhitespace&&_e<le-Ie&&(xe+=z,Fe.width+=z)}}const fe=e.getReorderSegments(g,he,Ee.glyphAt(0).charIndex,Ee.glyphAt(Ee.count-1).charIndex);for(let xe=0;xe<fe.length;xe++){const[_e,Fe]=fe[xe];let We=1/0,Be=-1/0;for(let ze=0;ze<le;ze++)if(Ee.glyphAt(ze).charIndex>=_e){let st=ze,ot=ze;for(;ot<le;ot++){let dt=Ee.glyphAt(ot);if(dt.charIndex>Fe)break;ot<le-Ie&&(We=Math.min(We,dt.x),Be=Math.max(Be,dt.x+dt.width))}for(let dt=st;dt<ot;dt++){const Lt=Ee.glyphAt(dt);Lt.x=Be-(Lt.x+Lt.width-We)}break}}let $;const de=xe=>$=xe;for(let xe=0;xe<le;xe++){const _e=Ee.glyphAt(xe);$=_e.glyphObj;const Fe=$.index,We=he.levels[_e.charIndex]&1;if(We){const Be=e.getMirroredCharacter(g[_e.charIndex]);Be&&_e.fontData.fontObj.forEachGlyph(Be,0,0,de)}if(Y){const{charIndex:Be,fontData:ze}=_e,st=_e.x+Z,ot=_e.x+_e.width+Z;ve[Be*4]=We?ot:st,ve[Be*4+1]=We?st:ot,ve[Be*4+2]=Ee.baseline+ze.caretBottom+J,ve[Be*4+3]=Ee.baseline+ze.caretTop+J;const dt=Be-me;dt>1&&u(ve,me,dt),me=Be}if(j){const{charIndex:Be}=_e;for(;Be>De;)De++,j.hasOwnProperty(De)&&(ye=j[De])}if(!$.isWhitespace&&!$.isEmpty){const Be=ce++,{fontSizeMult:ze,src:st,index:ot}=_e.fontData,dt=ge[st]||(ge[st]={});dt[Fe]||(dt[Fe]={path:$.path,pathBounds:[$.xMin,$.yMin,$.xMax,$.yMax]});const Lt=_e.x+Z,wt=_e.y+Ee.baseline+J;ne[Be*2]=Lt,ne[Be*2+1]=wt;const zt=Lt+$.xMin*ze,$t=wt+$.yMin*ze,fn=Lt+$.xMax*ze,It=wt+$.yMax*ze;zt<oe[0]&&(oe[0]=zt),$t<oe[1]&&(oe[1]=$t),fn>oe[2]&&(oe[2]=fn),It>oe[3]&&(oe[3]=It),Be%K===0&&(ue={start:Be,end:Be,rect:[1/0,1/0,-1/0,-1/0]},Ne.push(ue)),ue.end++;const vt=ue.rect;if(zt<vt[0]&&(vt[0]=zt),$t<vt[1]&&(vt[1]=$t),fn>vt[2]&&(vt[2]=fn),It>vt[3]&&(vt[3]=It),te[Be]=Fe,H[Be]=ot,j){const qt=Be*3;Se[qt]=ye>>16&255,Se[qt+1]=ye>>8&255,Se[qt+2]=ye&255}}}}}),ve){const Ee=g.length-me;Ee>1&&u(ve,me,Ee)}}const ae=[];we.forEach(({index:he,src:ce,unitsPerEm:me,ascender:De,descender:ue,lineHeight:ye,capHeight:Ee,xHeight:Te})=>{ae[he]={src:ce,unitsPerEm:me,ascender:De,descender:ue,lineHeight:ye,capHeight:Ee,xHeight:Te}}),ee.typesetting=h()-se,I({glyphIds:te,glyphFontIndices:H,glyphPositions:ne,glyphData:ge,fontData:ae,caretPositions:ve,glyphColors:Se,chunkedBounds:Ne,fontSize:E,topBaseline:J+M[0].baseline,blockBounds:[Z,J-B,Z+L,J],visibleBounds:oe,timings:ee})})}function l(g,_){o({...g,metricsOnly:!0},m=>{const[p,E,S,x]=m.blockBounds;_({width:S-p,height:x-E})})}function c(g){let _=g.match(/^([\d.]+)%$/),m=_?parseFloat(_[1]):NaN;return isNaN(m)?0:m/100}function u(g,_,m){const p=g[_*4],E=g[_*4+1],S=g[_*4+2],x=g[_*4+3],w=(E-p)/m;for(let C=0;C<m;C++){const b=(_+C)*4;g[b]=p+w*C,g[b+1]=p+w*(C+1),g[b+2]=S,g[b+3]=x}}function h(){return(self.performance||Date).now()}function f(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return f.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(g){let _=f.flyweight;return _.data=this.data,_.index=g,_},splitAt(g){let _=new f;return _.data=this.data.splice(g*d.length),_}},f.flyweight=d.reduce((g,_,m,p)=>(Object.defineProperty(g,_,{get(){return this.data[this.index*d.length+m]},set(E){this.data[this.index*d.length+m]=E}}),g),{data:null,index:0}),{typeset:o,measure:l}}const ni=()=>(self.performance||Date).now(),_a=Yc();let Xl;function a_(a,e,t,r,n,i,s,o,l,c,u=!0){return u?o_(a,e,t,r,n,i,s,o,l,c).then(null,h=>(Xl||(console.warn("WebGL SDF generation failed, falling back to JS",h),Xl=!0),ql(a,e,t,r,n,i,s,o,l,c))):ql(a,e,t,r,n,i,s,o,l,c)}const sa=[],s_=5;let to=0;function jc(){const a=ni();for(;sa.length&&ni()-a<s_;)sa.shift()();to=sa.length?setTimeout(jc,0):0}const o_=(...a)=>new Promise((e,t)=>{sa.push(()=>{const r=ni();try{_a.webgl.generateIntoCanvas(...a),e({timing:ni()-r})}catch(n){t(n)}}),to||(to=setTimeout(jc,0))}),l_=4,c_=2e3,Yl={};let u_=0;function ql(a,e,t,r,n,i,s,o,l,c){const u="TroikaTextSDFGenerator_JS_"+u_++%l_;let h=Yl[u];return h||(h=Yl[u]={workerModule:Yi({name:u,workerId:u,dependencies:[Yc,ni],init(f,d){const g=f().javascript.generate;return function(..._){const m=d();return{textureData:g(..._),timing:d()-m}}},getTransferables(f){return[f.textureData.buffer]}}),requests:0,idleTimer:null}),h.requests++,clearTimeout(h.idleTimer),h.workerModule(a,e,t,r,n,i).then(({textureData:f,timing:d})=>{const g=ni(),_=new Uint8Array(f.length*4);for(let m=0;m<f.length;m++)_[m*4+c]=f[m];return _a.webglUtils.renderImageData(s,_,o,l,a,e,1<<3-c),d+=ni()-g,--h.requests===0&&(h.idleTimer=setTimeout(()=>{Gg(u)},c_)),{timing:d}})}function f_(a){a._warm||(_a.webgl.isSupported(a),a._warm=!0)}const h_=_a.webglUtils.resizeWebGLCanvasWithoutClearing,fr={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},d_=new qe;function bi(){return(self.performance||Date).now()}const jl=Object.create(null);function Kc(a,e){a=g_({},a);const t=bi(),r=[];if(a.font&&r.push({label:"user",src:__(a.font)}),a.font=r,a.text=""+a.text,a.sdfGlyphSize=a.sdfGlyphSize||fr.sdfGlyphSize,a.unicodeFontsURL=a.unicodeFontsURL||fr.unicodeFontsURL,a.colorRanges!=null){let f={};for(let d in a.colorRanges)if(a.colorRanges.hasOwnProperty(d)){let g=a.colorRanges[d];typeof g!="number"&&(g=d_.set(g).getHex()),f[d]=g}a.colorRanges=f}Object.freeze(a);const{textureWidth:n,sdfExponent:i}=fr,{sdfGlyphSize:s}=a,o=n/s*4;let l=jl[s];if(!l){const f=document.createElement("canvas");f.width=n,f.height=s*256/o,l=jl[s]={glyphCount:0,sdfGlyphSize:s,sdfCanvas:f,sdfTexture:new Pt(f,void 0,void 0,void 0,Jt,Jt),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,p_(l)}const{sdfTexture:c,sdfCanvas:u}=l;Qc(a).then(f=>{const{glyphIds:d,glyphFontIndices:g,fontData:_,glyphPositions:m,fontSize:p,timings:E}=f,S=[],x=new Float32Array(d.length*4);let w=0,C=0;const b=bi(),R=_.map(P=>{let N=l.glyphsByFont.get(P.src);return N||l.glyphsByFont.set(P.src,N=new Map),N});d.forEach((P,N)=>{const q=g[N],{src:G,unitsPerEm:Q}=_[q];let Y=R[q].get(P);if(!Y){const{path:ee,pathBounds:F}=f.glyphData[G][P],k=Math.max(F[2]-F[0],F[3]-F[1])/s*(fr.sdfMargin*s+.5),te=l.glyphCount++,H=[F[0]-k,F[1]-k,F[2]+k,F[3]+k];R[q].set(P,Y={path:ee,atlasIndex:te,sdfViewBox:H}),S.push(Y)}const{sdfViewBox:K}=Y,j=m[C++],I=m[C++],V=p/Q;x[w++]=j+K[0]*V,x[w++]=I+K[1]*V,x[w++]=j+K[2]*V,x[w++]=I+K[3]*V,d[N]=Y.atlasIndex}),E.quads=(E.quads||0)+(bi()-b);const y=bi();E.sdf={};const v=u.height,D=Math.ceil(l.glyphCount/o),U=Math.pow(2,Math.ceil(Math.log2(D*s)));U>v&&(console.info(`Increasing SDF texture size ${v}->${U}`),h_(u,n,U),c.dispose()),Promise.all(S.map(P=>Zc(P,l,a.gpuAccelerateSDF).then(({timing:N})=>{E.sdf[P.atlasIndex]=N}))).then(()=>{S.length&&!l.contextLost&&(Jc(l),c.needsUpdate=!0),E.sdfTotal=bi()-y,E.total=bi()-t,e(Object.freeze({parameters:a,sdfTexture:c,sdfGlyphSize:s,sdfExponent:i,glyphBounds:x,glyphAtlasIndices:d,glyphColors:f.glyphColors,caretPositions:f.caretPositions,chunkedBounds:f.chunkedBounds,ascender:f.ascender,descender:f.descender,lineHeight:f.lineHeight,capHeight:f.capHeight,xHeight:f.xHeight,topBaseline:f.topBaseline,blockBounds:f.blockBounds,visibleBounds:f.visibleBounds,timings:f.timings}))})}),Promise.resolve().then(()=>{l.contextLost||f_(u)})}function Zc({path:a,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:r,sdfCanvas:n,contextLost:i},s){if(i)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=fr,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),h=u%(o/r)*r,f=Math.floor(u/(o/r))*r,d=e%4;return a_(r,r,a,t,c,l,n,h,f,d,s)}function p_(a){const e=a.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),a.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),a.contextLost=!1;const r=[];a.glyphsByFont.forEach(n=>{n.forEach(i=>{r.push(Zc(i,a,!0))})}),Promise.all(r).then(()=>{Jc(a),a.sdfTexture.needsUpdate=!0})})}function m_({font:a,characters:e,sdfGlyphSize:t},r){let n=Array.isArray(e)?e.join(`
`):""+e;Kc({font:a,sdfGlyphSize:t,text:n},r)}function g_(a,e){for(let t in e)e.hasOwnProperty(t)&&(a[t]=e[t]);return a}let Zr;function __(a){return Zr||(Zr=typeof document>"u"?{}:document.createElement("a")),Zr.href=a,Zr.href}function Jc(a){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=a,{width:r,height:n}=e,i=a.sdfCanvas.getContext("webgl");let s=t.image.data;(!s||s.length!==r*n*4)&&(s=new Uint8Array(r*n*4),t.image={width:r,height:n,data:s},t.flipY=!1,t.isDataTexture=!0),i.readPixels(0,0,r,n,i.RGBA,i.UNSIGNED_BYTE,s)}}const v_=Yi({name:"Typesetter",dependencies:[r_,i_,Hg],init(a,e,t){return a(e,t())}}),Qc=Yi({name:"Typesetter",dependencies:[v_],init(a){return function(e){return new Promise(t=>{a.typeset(e,t)})}},getTransferables(a){const e=[];for(let t in a)a[t]&&a[t].buffer&&e.push(a[t].buffer);return e}});Qc.onMainThread;const Kl={};function x_(a){let e=Kl[a];return e||(e=Kl[a]=new si(1,1,a,a).translate(.5,.5,0)),e}const M_="aTroikaGlyphBounds",Zl="aTroikaGlyphIndex",S_="aTroikaGlyphColor";class y_ extends Zf{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new Mr,this.boundingBox=new ai}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=x_(e);["position","normal","uv"].forEach(r=>{this.attributes[r]=t.attributes[r].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,r,n,i){this.updateAttributeData(M_,e,4),this.updateAttributeData(Zl,t,1),this.updateAttributeData(S_,i,3),this._blockBounds=r,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:r}=this;if(t){const{PI:n,floor:i,min:s,max:o,sin:l,cos:c}=Math,u=n/2,h=n*2,f=Math.abs(t),d=e[0]/f,g=e[2]/f,_=i((d+u)/h)!==i((g+u)/h)?-f:s(l(d)*f,l(g)*f),m=i((d-u)/h)!==i((g-u)/h)?f:o(l(d)*f,l(g)*f),p=i((d+n)/h)!==i((g+n)/h)?f*2:o(f-c(d)*f,f-c(g)*f);r.min.set(_,e[1],t<0?-p:0),r.max.set(m,e[3],t<0?0:p)}else r.min.set(e[0],e[1],0),r.max.set(e[2],e[3],0);r.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(Zl).count,r=this._chunkedBounds;if(r)for(let n=r.length;n--;){t=r[n].end;let i=r[n].rect;if(i[1]<e.w&&i[3]>e.y&&i[0]<e.z&&i[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,r){const n=this.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(this.setAttribute(e,new Gf(t,r)),delete this._maxInstanceCount,this.dispose()):n&&this.deleteAttribute(e)}}const E_=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,T_=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,b_=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,A_=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function w_(a){const e=eo(a,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Ze},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new rt(0,0,0,0)},uTroikaClipRect:{value:new rt(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Ze},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new qe},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Xe},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:E_,vertexTransform:T_,fragmentDefs:b_,fragmentColorTransform:A_,customRewriter({vertexShader:t,fragmentShader:r}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(r)&&(r=r.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(qc,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:r}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const So=new Sr({color:16777215,side:sn,transparent:!0}),Jl=8421504,Ql=new ut,Jr=new X,cs=new X,lr=[],R_=new X,us="+x+y";function $l(a){return Array.isArray(a)?a[0]:a}let $c=()=>{const a=new At(new si(1,1),So);return $c=()=>a,a},eu=()=>{const a=new At(new si(1,1,32,1),So);return eu=()=>a,a};const C_={type:"syncstart"},U_={type:"synccomplete"},tu=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],D_=tu.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class nu extends At{constructor(){const e=new y_;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Jl,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=us,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(C_),Kc({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const r=this._queuedSyncs;r&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{r.forEach(n=>n&&n())})),this.dispatchEvent(U_),e&&e()})))}onBeforeRender(e,t,r,n,i,s){this.sync(),i.isTroikaTextMaterial&&this._prepareForRender(i)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return w_(e)}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=So.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function r(){t.removeEventListener("dispose",r),e.dispose()})),this.hasOutline()){let r=e._outlineMtl;return r||(r=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),r.isTextOutlineMaterial=!0,r.depthWrite=!1,r.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),r.dispose()})),[r,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return $l(this.material).getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return $l(this.material).getDistanceMaterial()}set customDistanceMaterial(e){}_prepareForRender(e){const t=e.isTextOutlineMaterial,r=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:o,blockBounds:l}=n;r.uTroikaSDFTexture.value=o,r.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),r.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,r.uTroikaSDFExponent.value=n.sdfExponent,r.uTroikaTotalBounds.value.fromArray(l),r.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,u=0,h=0,f,d,g,_=0,m=0;if(t){let{outlineWidth:E,outlineOffsetX:S,outlineOffsetY:x,outlineBlur:w,outlineOpacity:C}=this;c=this._parsePercent(E)||0,u=Math.max(0,this._parsePercent(w)||0),f=C,_=this._parsePercent(S)||0,m=this._parsePercent(x)||0}else h=Math.max(0,this._parsePercent(this.strokeWidth)||0),h&&(g=this.strokeColor,r.uTroikaStrokeColor.value.set(g??Jl),d=this.strokeOpacity,d==null&&(d=1)),f=this.fillOpacity;r.uTroikaEdgeOffset.value=c,r.uTroikaPositionOffset.value.set(_,m),r.uTroikaBlurRadius.value=u,r.uTroikaStrokeWidth.value=h,r.uTroikaStrokeOpacity.value=d,r.uTroikaFillOpacity.value=f??1,r.uTroikaCurveRadius.value=this.curveRadius||0;let p=this.clipRect;if(p&&Array.isArray(p)&&p.length===4)r.uTroikaClipRect.value.fromArray(p);else{const E=(this.fontSize||.1)*100;r.uTroikaClipRect.value.set(l[0]-E,l[1]-E,l[2]+E,l[3]+E)}this.geometry.applyClipRect(r.uTroikaClipRect.value)}r.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const i=t?this.outlineColor||0:this.color;if(i==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new qe;(i!==o._input||typeof i=="object")&&o.set(o._input=i)}let s=this.orientation||us;if(s!==e._orientation){let o=r.uTroikaOrient.value;s=s.replace(/[^-+xyz]/g,"");let l=s!==us&&s.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,h,f]=l;Jr.set(0,0,0)[u]=c==="-"?1:-1,cs.set(0,0,0)[f]=h==="-"?-1:1,Ql.lookAt(R_,Jr.cross(cs),cs),o.setFromMatrix4(Ql)}else o.identity();e._orientation=s}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),r=t?parseFloat(t[1]):NaN;e=(isNaN(r)?0:r/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Ze){t.copy(e);const r=this.curveRadius;return r&&(t.x=Math.atan2(e.x,Math.abs(r)-Math.abs(e.z))*Math.abs(r)),t}worldPositionToTextCoords(e,t=new Ze){return Jr.copy(e),this.localPositionToTextCoords(this.worldToLocal(Jr),t)}raycast(e,t){const{textRenderInfo:r,curveRadius:n}=this;if(r){const i=r.blockBounds,s=n?eu():$c(),o=s.geometry,{position:l,uv:c}=o.attributes;for(let u=0;u<c.count;u++){let h=i[0]+c.getX(u)*(i[2]-i[0]);const f=i[1]+c.getY(u)*(i[3]-i[1]);let d=0;n&&(d=n-Math.cos(h/n)*n,h=Math.sin(h/n)*n),l.setXYZ(u,h,f,d)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,s.matrixWorld=this.matrixWorld,s.material.side=this.material.side,lr.length=0,s.raycast(e,lr);for(let u=0;u<lr.length;u++)lr[u].object=this,t.push(lr[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,D_.forEach(r=>{this[r]=e[r]}),this}clone(){return new this.constructor().copy(this)}}tu.forEach(a=>{const e="_private_"+a;Object.defineProperty(nu.prototype,a,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});new ai;new qe;const iu="./fonts/kenpixel.ttf";function P_(a){return new Promise(e=>{let t=!1;const r=()=>{t||(t=!0,e())};try{m_({font:iu,characters:a},r)}catch{r()}setTimeout(r,4e3)})}class L_{constructor(e,{size:t=2.4,color:r=10466047}={}){this.char=e,this.collected=!1,this.group=new Ri;const n=new nu;n.text=e,n.font=iu,n.fontSize=t,n.anchorX="center",n.anchorY="middle",n.color=r,n.outlineWidth="5%",n.outlineColor=332575,n.outlineBlur="8%",n.material.toneMapped=!1,n.sync(),this.text=n,this.group.add(n),this._baseColor=new qe(r),this._phase=Math.random()*Math.PI*2}get object3d(){return this.group}setColor(e){this._baseColor.set(e),this.text.color=e,this.text.sync()}update(e,t){this.group.position.y=this._baseY+Math.sin(e*1.3+this._phase)*.28,t?this.text.quaternion.copy(t):this.text.rotation.y=Math.sin(e*.6+this._phase)*.5}placeAt(e,t,r){this.group.position.set(e,t,r),this._baseY=t}dispose(){this.text.dispose(),this.group.remove(this.text)}}function I_(a,e){return[...a].map(t=>new L_(t,e))}window.__errs=[];window.addEventListener("error",a=>window.__errs.push(String(a.message)));window.addEventListener("unhandledrejection",a=>window.__errs.push("promise: "+String(a.reason)));const da=["LFG","MINI","GLYPH","1234"],En=30,F_=2.6,oa={pending:10466047,next:6220500,done:4906624},N_=document.getElementById("app"),Vn=new Ng({antialias:!0,alpha:!1});Vn.setPixelRatio(Math.min(window.devicePixelRatio,2));Vn.setSize(window.innerWidth,window.innerHeight);Vn.outputColorSpace=Wt;Vn.toneMapping=sc;Vn.toneMappingExposure=1.05;N_.appendChild(Vn.domElement);const Yt=new zf;Yt.background=new qe(724506);Yt.fog=new fo(724506,34,78);const Qt=new Xt(58,window.innerWidth/window.innerHeight,.1,200);Yt.add(new Yf(10467071,1184806,.9));const ru=new Kf(16777215,1.15);ru.position.set(12,22,10);Yt.add(ru);const au=new Bc(6220500,.8,120);au.position.set(-14,10,-8);Yt.add(au);function O_(){const a=new Zs({color:1317424,roughness:.95,metalness:.05}),e=new At(new po(En,64),a);e.rotation.x=-Math.PI/2,e.position.y=-.02,Yt.add(e);const t=new $f(En*2,40,3003583,1909824);t.material.opacity=.35,t.material.transparent=!0,Yt.add(t);const r=new At(new _o(En-.35,En,96),new Sr({color:3003583,transparent:!0,opacity:.5,side:sn}));r.rotation.x=-Math.PI/2,r.position.y=.01,Yt.add(r);const n=new Zs({color:1778244,roughness:.8,metalness:.2});for(let i=0;i<10;i++){const s=i/10*Math.PI*2,o=En+6+i%3*3,l=10+i%4*6,c=new At(new Wi(2,l,2),n);c.position.set(Math.cos(s)*o,l/2-2,Math.sin(s)*o),Yt.add(c)}}function B_(){const a=new Ri,e=new At(new go(.85,0),new Zs({color:6220500,emissive:810837,emissiveIntensity:.6,roughness:.3,metalness:.6}));a.add(e);const t=new At(new vo(1.25,.07,12,40),new Sr({color:6220500}));t.rotation.x=Math.PI/2,a.add(t);const r=new Bc(6220500,1.1,14);return a.add(r),a.position.set(0,3,10),Yt.add(a),{group:a,body:e,ring:t}}O_();const pn=B_(),Ye={word:"",glyphs:[],idx:0,score:0,solved:!1,wordCursor:0,freezeCam:!1},Qr=document.getElementById("flash"),su=document.getElementById("win"),k_=document.getElementById("score"),z_=document.getElementById("progress"),ec=document.getElementById("target"),G_=document.getElementById("win-word");function va(){ec.innerHTML="",[...Ye.word].forEach((a,e)=>{const t=document.createElement("span");t.className="ch"+(e<Ye.idx?" done":e===Ye.idx?" next":""),t.textContent=a,ec.appendChild(t)}),z_.textContent=`${Ye.idx}/${Ye.word.length}`,k_.textContent=String(Ye.score)}function pa(a,e,t=480){Qr.textContent=a,Qr.style.color=e,Qr.classList.add("show"),clearTimeout(pa._t),pa._t=setTimeout(()=>Qr.classList.remove("show"),t)}function V_(){const a=Ye.glyphs.length,e=[...Array(a).keys()];for(let r=e.length-1;r>0;r--){const n=Math.random()*(r+1)|0;[e[r],e[n]]=[e[n],e[r]]}const t=En*1.3;Ye.glyphs.forEach((r,n)=>{const i=e[n],s=a===1?.5:i/(a-1),o=(s-.5)*t,l=-En*.32-Math.abs(s-.5)*En*.5,c=3.2+(i%3-1)*2.6;r.placeAt(o,c,l),Yt.add(r.object3d)})}function ou(){Ye.glyphs.forEach((a,e)=>{a.collected?a.setColor(oa.done):e===Ye.idx?a.setColor(oa.next):a.setColor(oa.pending)})}function lu(a){Ye.glyphs.forEach(e=>{Yt.remove(e.object3d),e.dispose()}),Ye.word=a,Ye.glyphs=I_(a,{size:3}),Ye.idx=0,Ye.solved=!1,V_(),ou(),va(),G_.textContent=a,su.classList.remove("show")}function H_(a){a.collected=!0,a.setColor(oa.done),Ye.idx+=1,Ye.score+=100,pa("+100","#4ade80",380),ou(),va(),Ye.idx>=Ye.word.length&&X_()}function W_(){Ye.score=Math.max(0,Ye.score-10),pa("✗","#f87171",320),va(),hr.t=.32}function X_(){Ye.solved=!0,Ye.score+=250,va(),su.classList.add("show"),setTimeout(()=>{Ye.wordCursor=(Ye.wordCursor+1)%da.length,lu(da[Ye.wordCursor])},1900)}const hr={t:0},Zt=Object.create(null);window.addEventListener("keydown",a=>{Zt[a.code]=!0,["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(a.code)&&a.preventDefault()});window.addEventListener("keyup",a=>{Zt[a.code]=!1});const cr=new X;function Y_(a){const t=new X;(Zt.KeyW||Zt.ArrowUp)&&(t.z-=1),(Zt.KeyS||Zt.ArrowDown)&&(t.z+=1),(Zt.KeyA||Zt.ArrowLeft)&&(t.x-=1),(Zt.KeyD||Zt.ArrowRight)&&(t.x+=1),Zt.KeyQ&&(t.y+=1),Zt.KeyE&&(t.y-=1),t.lengthSq()>0&&t.normalize(),cr.addScaledVector(t,46*a),cr.multiplyScalar(Math.pow(.0023,a));const r=pn.group.position;r.addScaledVector(cr,a);const n=Math.hypot(r.x,r.z),i=En-1.5;n>i&&(r.x*=i/n,r.z*=i/n,cr.x*=.3,cr.z*=.3),r.y=pf.clamp(r.y,1.2,12)}const tc=new X;function q_(a){if(Ye.freezeCam)return;const e=pn.group.position,t=new X(e.x*.4,e.y+7.5,e.z+16.5);if(Qt.position.lerp(t,1-Math.pow(1e-4,a)),tc.lerp(new X(e.x*.3,e.y+1,e.z-6),1-Math.pow(1e-4,a)),hr.t>0){hr.t=Math.max(0,hr.t-a);const r=hr.t*.9;Qt.position.x+=(Math.random()-.5)*r,Qt.position.y+=(Math.random()-.5)*r}Qt.lookAt(tc)}function no(){const a=pn.group.position;for(let e=0;e<Ye.glyphs.length;e++){const t=Ye.glyphs[e];if(!t.collected&&a.distanceTo(t.object3d.position)<=F_){e===Ye.idx?H_(t):W_();break}}}const nc=new Qf,ic=new Vi;function cu(){requestAnimationFrame(cu);const a=Math.min(nc.getDelta(),.05),e=nc.elapsedTime;Ye.solved||(Y_(a),no()),q_(a),ic.copy(Qt.quaternion);for(const t of Ye.glyphs)t.update(e,ic);pn.body.rotation.y+=a*1.4,pn.body.rotation.x+=a*.7,pn.ring.rotation.z+=a*.8,Vn.render(Yt,Qt)}window.addEventListener("resize",()=>{Qt.aspect=window.innerWidth/window.innerHeight,Qt.updateProjectionMatrix(),Vn.setSize(window.innerWidth,window.innerHeight)});window.__glyph={state:Ye,teleportToNext(){const a=Ye.glyphs[Ye.idx];a&&pn.group.position.copy(a.object3d.position).add(new X(0,0,.1))},collectAll(){let a=0;for(;!Ye.solved&&a++<50;){const e=Ye.glyphs[Ye.idx];if(!e)break;pn.group.position.copy(e.object3d.position),no()}},showcase(a=1){for(let e=0;e<a;e++){const t=Ye.glyphs[Ye.idx];if(!t)break;pn.group.position.copy(t.object3d.position),no()}pn.group.position.set(0,3.4,13),Ye.freezeCam=!0,Qt.position.set(.5,9.5,30),Qt.lookAt(0,3.4,-6)}};(async function(){const e=[...new Set(da.join("").split(""))].join("");await P_(e),lu(da[Ye.wordCursor]),Qt.position.set(0,11,27),Qt.lookAt(0,3,0),cu()})();
