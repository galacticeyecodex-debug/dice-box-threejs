(function(vt,Et){typeof exports=="object"&&typeof module<"u"?module.exports=Et():typeof define=="function"&&define.amd?define(Et):(vt=typeof globalThis<"u"?globalThis:vt||self,vt["dice-box-threejs"]=Et())})(this,function(){"use strict";var bg=Object.defineProperty;var Mg=(vt,Et,Pn)=>Et in vt?bg(vt,Et,{enumerable:!0,configurable:!0,writable:!0,value:Pn}):vt[Et]=Pn;var ja=(vt,Et,Pn)=>(Mg(vt,typeof Et!="symbol"?Et+"":Et,Pn),Pn);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vt="143",qt="srgb",_n="srgb-linear",kr="300 es";class Dn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ws=Math.PI/180,bs=180/Math.PI;function rn(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ct[a&255]+ct[a>>8&255]+ct[a>>16&255]+ct[a>>24&255]+"-"+ct[e&255]+ct[e>>8&255]+"-"+ct[e>>16&15|64]+ct[e>>24&255]+"-"+ct[t&63|128]+ct[t>>8&255]+"-"+ct[t>>16&255]+ct[t>>24&255]+ct[n&255]+ct[n>>8&255]+ct[n>>16&255]+ct[n>>24&255]).toLowerCase()}function xt(a,e,t){return Math.max(e,Math.min(t,a))}function Ya(a,e){return(a%e+e)%e}function Ms(a,e,t){return(1-t)*a+t*e}function Ur(a){return(a&a-1)===0&&a!==0}function Ss(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}class ye{constructor(e=0,t=0){ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tt{constructor(){Tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,r,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=r,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],r=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],g=n[5],m=n[8],p=i[0],f=i[3],_=i[6],v=i[1],y=i[4],x=i[7],M=i[2],S=i[5],L=i[8];return s[0]=o*p+r*v+c*M,s[3]=o*f+r*y+c*S,s[6]=o*_+r*x+c*L,s[1]=l*p+h*v+d*M,s[4]=l*f+h*y+d*S,s[7]=l*_+h*x+d*L,s[2]=u*p+g*v+m*M,s[5]=u*f+g*y+m*S,s[8]=u*_+g*x+m*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],r=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*r*l-n*s*h+n*r*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],r=e[5],c=e[6],l=e[7],h=e[8],d=h*o-r*l,u=r*c-h*s,g=l*s-o*c,m=t*d+n*u+i*g;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/m;return e[0]=d*p,e[1]=(i*l-h*n)*p,e[2]=(r*n-i*o)*p,e[3]=u*p,e[4]=(h*t-i*c)*p,e[5]=(i*s-r*t)*p,e[6]=g*p,e[7]=(n*c-l*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,r){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*r)+o+e,-i*l,i*c,-i*(-l*o+c*r)+r+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],o=i[3],r=i[6],c=i[1],l=i[4],h=i[7];return i[0]=t*s+n*c,i[3]=t*o+n*l,i[6]=t*r+n*h,i[1]=-n*s+t*c,i[4]=-n*o+t*l,i[7]=-n*r+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Gr(a){for(let e=a.length-1;e>=0;--e)if(a[e]>65535)return!0;return!1}function Ii(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function vn(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Bi(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const Es={[qt]:{[_n]:vn},[_n]:{[qt]:Bi}},Dt={legacyMode:!0,get workingColorSpace(){return _n},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.legacyMode||e===t||!e||!t)return a;if(Es[e]&&Es[e][t]!==void 0){const n=Es[e][t];return a.r=n(a.r),a.g=n(a.g),a.b=n(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}},Wr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},et={r:0,g:0,b:0},It={h:0,s:0,l:0},zi={h:0,s:0,l:0};function Ts(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function Ni(a,e){return e.r=a.r,e.g=a.g,e.b=a.b,e}class we{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=_n){return this.r=e,this.g=t,this.b=n,Dt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=_n){if(e=Ya(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ts(o,s,e+1/3),this.g=Ts(o,s,e),this.b=Ts(o,s,e-1/3)}return Dt.toWorkingColorSpace(this,i),this}setStyle(e,t=qt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],r=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Dt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Dt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){const c=parseFloat(s[1])/360,l=parseInt(s[2],10)/100,h=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(c,l,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Dt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Dt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=qt){const n=Wr[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vn(e.r),this.g=vn(e.g),this.b=vn(e.b),this}copyLinearToSRGB(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return Dt.fromWorkingColorSpace(Ni(this,et),e),xt(et.r*255,0,255)<<16^xt(et.g*255,0,255)<<8^xt(et.b*255,0,255)<<0}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_n){Dt.fromWorkingColorSpace(Ni(this,et),t);const n=et.r,i=et.g,s=et.b,o=Math.max(n,i,s),r=Math.min(n,i,s);let c,l;const h=(r+o)/2;if(r===o)c=0,l=0;else{const d=o-r;switch(l=h<=.5?d/(o+r):d/(2-o-r),o){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=_n){return Dt.fromWorkingColorSpace(Ni(this,et),t),e.r=et.r,e.g=et.g,e.b=et.b,e}getStyle(e=qt){return Dt.fromWorkingColorSpace(Ni(this,et),e),e!==qt?`color(${e} ${et.r} ${et.g} ${et.b})`:`rgb(${et.r*255|0},${et.g*255|0},${et.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(It),It.h+=e,It.s+=t,It.l+=n,this.setHSL(It.h,It.s,It.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(It),e.getHSL(zi);const n=Ms(It.h,zi.h,t),i=Ms(It.s,zi.s,t),s=Ms(It.l,zi.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}we.NAMES=Wr;let In;class Vr{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{In===void 0&&(In=Ii("canvas")),In.width=e.width,In.height=e.height;const n=In.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=In}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ii("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=vn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vn(t[n]/255)*255):t[n]=vn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Hr{constructor(e=null){this.isSource=!0,this.uuid=rn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,r=i.length;o<r;o++)i[o].isDataTexture?s.push(As(i[o].image)):s.push(As(i[o]))}else s=As(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function As(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Vr.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $a=0;class yt extends Dn{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,n=1001,i=1001,s=1006,o=1008,r=1023,c=1009,l=1,h=3e3){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$a++}),this.uuid=rn(),this.name="",this.source=new Hr(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=c,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}yt.DEFAULT_IMAGE=null,yt.DEFAULT_MAPPING=300;class Ue{constructor(e=0,t=0,n=0,i=1){Ue.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],g=c[5],m=c[9],p=c[2],f=c[6],_=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-p)<.01&&Math.abs(m-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+p)<.1&&Math.abs(m+f)<.1&&Math.abs(l+g+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,x=(g+1)/2,M=(_+1)/2,S=(h+u)/4,L=(d+p)/4,w=(m+f)/4;return y>x&&y>M?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=S/n,s=L/n):x>M?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=S/i,s=w/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=L/s,i=w/s),this.set(n,i,s,t),this}let v=Math.sqrt((f-m)*(f-m)+(d-p)*(d-p)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(f-m)/v,this.y=(d-p)/v,this.z=(u-h)/v,this.w=Math.acos((l+g+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xn extends Dn{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ue(0,0,e,t),this.scissorTest=!1,this.viewport=new Ue(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new yt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:1006,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Hr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qr extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Za extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,r){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=s[o+0],g=s[o+1],m=s[o+2],p=s[o+3];if(r===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(r===1){e[t+0]=u,e[t+1]=g,e[t+2]=m,e[t+3]=p;return}if(d!==p||c!==u||l!==g||h!==m){let f=1-r;const _=c*u+l*g+h*m+d*p,v=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const M=Math.sqrt(y),S=Math.atan2(M,_*v);f=Math.sin(f*S)/M,r=Math.sin(r*S)/M}const x=r*v;if(c=c*f+u*x,l=l*f+g*x,h=h*f+m*x,d=d*f+p*x,f===1-r){const M=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=M,l*=M,h*=M,d*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){const r=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=s[o],u=s[o+1],g=s[o+2],m=s[o+3];return e[t]=r*m+h*d+c*g-l*u,e[t+1]=c*m+h*u+l*d-r*g,e[t+2]=l*m+h*g+r*u-c*d,e[t+3]=h*m-r*d-c*u-l*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,o=e._order,r=Math.cos,c=Math.sin,l=r(n/2),h=r(i/2),d=r(s/2),u=c(n/2),g=c(i/2),m=c(s/2);switch(o){case"XYZ":this._x=u*h*d+l*g*m,this._y=l*g*d-u*h*m,this._z=l*h*m+u*g*d,this._w=l*h*d-u*g*m;break;case"YXZ":this._x=u*h*d+l*g*m,this._y=l*g*d-u*h*m,this._z=l*h*m-u*g*d,this._w=l*h*d+u*g*m;break;case"ZXY":this._x=u*h*d-l*g*m,this._y=l*g*d+u*h*m,this._z=l*h*m+u*g*d,this._w=l*h*d-u*g*m;break;case"ZYX":this._x=u*h*d-l*g*m,this._y=l*g*d+u*h*m,this._z=l*h*m-u*g*d,this._w=l*h*d+u*g*m;break;case"YZX":this._x=u*h*d+l*g*m,this._y=l*g*d+u*h*m,this._z=l*h*m-u*g*d,this._w=l*h*d-u*g*m;break;case"XZY":this._x=u*h*d-l*g*m,this._y=l*g*d-u*h*m,this._z=l*h*m+u*g*d,this._w=l*h*d+u*g*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],r=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+r+d;if(u>0){const g=.5/Math.sqrt(u+1);this._w=.25/g,this._x=(h-c)*g,this._y=(s-l)*g,this._z=(o-i)*g}else if(n>r&&n>d){const g=2*Math.sqrt(1+n-r-d);this._w=(h-c)/g,this._x=.25*g,this._y=(i+o)/g,this._z=(s+l)/g}else if(r>d){const g=2*Math.sqrt(1+r-n-d);this._w=(s-l)/g,this._x=(i+o)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+d-n-r);this._w=(o-i)/g,this._x=(s+l)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,r=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*r+i*l-s*c,this._y=i*h+o*c+s*r-n*l,this._z=s*h+o*l+n*c-i*r,this._w=o*h-n*r-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let r=o*e._w+n*e._x+i*e._y+s*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-r*r;if(c<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*n+t*this._x,this._y=g*i+t*this._y,this._z=g*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,r),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xr.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,r=e.z,c=e.w,l=c*t+o*i-r*n,h=c*n+r*t-s*i,d=c*i+s*n-o*t,u=-s*t-o*n-r*i;return this.x=l*c+u*-s+h*-r-d*-o,this.y=h*c+u*-o+d*-s-l*-r,this.z=d*c+u*-r+l*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,r=t.y,c=t.z;return this.x=i*c-s*r,this.y=s*o-n*c,this.z=n*r-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Cs.copy(this).projectOnVector(e),this.sub(Cs)}reflect(e){return this.sub(Cs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cs=new N,Xr=new Bn;class pi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,r=-1/0;for(let c=0,l=e.length;c<l;c+=3){const h=e[c],d=e[c+1],u=e[c+2];h<t&&(t=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>o&&(o=d),u>r&&(r=u)}return this.min.set(t,n,i),this.max.set(s,o,r),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,r=-1/0;for(let c=0,l=e.count;c<l;c++){const h=e.getX(c),d=e.getY(c),u=e.getZ(c);h<t&&(t=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>o&&(o=d),u>r&&(r=u)}return this.min.set(t,n,i),this.max.set(s,o,r),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,r=s.count;o<r;o++)yn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(yn)}else n.boundingBox===null&&n.computeBoundingBox(),Ls.copy(n.boundingBox),Ls.applyMatrix4(e.matrixWorld),this.union(Ls);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mi),Oi.subVectors(this.max,mi),zn.subVectors(e.a,mi),Nn.subVectors(e.b,mi),On.subVectors(e.c,mi),on.subVectors(Nn,zn),an.subVectors(On,Nn),wn.subVectors(zn,On);let t=[0,-on.z,on.y,0,-an.z,an.y,0,-wn.z,wn.y,on.z,0,-on.x,an.z,0,-an.x,wn.z,0,-wn.x,-on.y,on.x,0,-an.y,an.x,0,-wn.y,wn.x,0];return!Fs(t,zn,Nn,On,Oi)||(t=[1,0,0,0,1,0,0,0,1],!Fs(t,zn,Nn,On,Oi))?!1:(ki.crossVectors(on,an),t=[ki.x,ki.y,ki.z],Fs(t,zn,Nn,On,Oi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return yn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xt=[new N,new N,new N,new N,new N,new N,new N,new N],yn=new N,Ls=new pi,zn=new N,Nn=new N,On=new N,on=new N,an=new N,wn=new N,mi=new N,Oi=new N,ki=new N,bn=new N;function Fs(a,e,t,n,i){for(let s=0,o=a.length-3;s<=o;s+=3){bn.fromArray(a,s);const r=i.x*Math.abs(bn.x)+i.y*Math.abs(bn.y)+i.z*Math.abs(bn.z),c=e.dot(bn),l=t.dot(bn),h=n.dot(bn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>r)return!1}return!0}const Ka=new pi,jr=new N,Ui=new N,Rs=new N;class kn{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ka.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Rs.subVectors(e,this.center);const t=Rs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Rs.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?Ui.set(0,0,1).multiplyScalar(e.radius):Ui.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(jr.copy(e.center).add(Ui)),this.expandByPoint(jr.copy(e.center).sub(Ui)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jt=new N,Ps=new N,Gi=new N,ln=new N,Ds=new N,Wi=new N,Is=new N;class Bs{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jt.copy(this.direction).multiplyScalar(t).add(this.origin),jt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ps.copy(e).add(t).multiplyScalar(.5),Gi.copy(t).sub(e).normalize(),ln.copy(this.origin).sub(Ps);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Gi),r=ln.dot(this.direction),c=-ln.dot(Gi),l=ln.lengthSq(),h=Math.abs(1-o*o);let d,u,g,m;if(h>0)if(d=o*c-r,u=o*r-c,m=s*h,d>=0)if(u>=-m)if(u<=m){const p=1/h;d*=p,u*=p,g=d*(d+o*u+2*r)+u*(o*d+u+2*c)+l}else u=s,d=Math.max(0,-(o*u+r)),g=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(o*u+r)),g=-d*d+u*(u+2*c)+l;else u<=-m?(d=Math.max(0,-(-o*s+r)),u=d>0?-s:Math.min(Math.max(-s,-c),s),g=-d*d+u*(u+2*c)+l):u<=m?(d=0,u=Math.min(Math.max(-s,-c),s),g=u*(u+2*c)+l):(d=Math.max(0,-(o*s+r)),u=d>0?s:Math.min(Math.max(-s,-c),s),g=-d*d+u*(u+2*c)+l);else u=o>0?-s:s,d=Math.max(0,-(o*u+r)),g=-d*d+u*(u+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(Gi).multiplyScalar(u).add(Ps),g}intersectSphere(e,t){jt.subVectors(e.center,this.origin);const n=jt.dot(this.direction),i=jt.dot(jt)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),r=n-o,c=n+o;return r<0&&c<0?null:r<0?this.at(c,t):this.at(r,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,r,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),d>=0?(r=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(r=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||r>i)||((r>n||n!==n)&&(n=r),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,jt)!==null}intersectTriangle(e,t,n,i,s){Ds.subVectors(t,e),Wi.subVectors(n,e),Is.crossVectors(Ds,Wi);let o=this.direction.dot(Is),r;if(o>0){if(i)return null;r=1}else if(o<0)r=-1,o=-o;else return null;ln.subVectors(this.origin,e);const c=r*this.direction.dot(Wi.crossVectors(ln,Wi));if(c<0)return null;const l=r*this.direction.dot(Ds.cross(ln));if(l<0||c+l>o)return null;const h=-r*ln.dot(Is);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,r,c,l,h,d,u,g,m,p,f){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=r,_[13]=c,_[2]=l,_[6]=h,_[10]=d,_[14]=u,_[3]=g,_[7]=m,_[11]=p,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Un.setFromMatrixColumn(e,0).length(),s=1/Un.setFromMatrixColumn(e,1).length(),o=1/Un.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),r=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=o*h,g=o*d,m=r*h,p=r*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=g+m*l,t[5]=u-p*l,t[9]=-r*c,t[2]=p-u*l,t[6]=m+g*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*h,g=c*d,m=l*h,p=l*d;t[0]=u+p*r,t[4]=m*r-g,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-r,t[2]=g*r-m,t[6]=p+u*r,t[10]=o*c}else if(e.order==="ZXY"){const u=c*h,g=c*d,m=l*h,p=l*d;t[0]=u-p*r,t[4]=-o*d,t[8]=m+g*r,t[1]=g+m*r,t[5]=o*h,t[9]=p-u*r,t[2]=-o*l,t[6]=r,t[10]=o*c}else if(e.order==="ZYX"){const u=o*h,g=o*d,m=r*h,p=r*d;t[0]=c*h,t[4]=m*l-g,t[8]=u*l+p,t[1]=c*d,t[5]=p*l+u,t[9]=g*l-m,t[2]=-l,t[6]=r*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,g=o*l,m=r*c,p=r*l;t[0]=c*h,t[4]=p-u*d,t[8]=m*d+g,t[1]=d,t[5]=o*h,t[9]=-r*h,t[2]=-l*h,t[6]=g*d+m,t[10]=u-p*d}else if(e.order==="XZY"){const u=o*c,g=o*l,m=r*c,p=r*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+p,t[5]=o*h,t[9]=g*d-m,t[2]=m*d-g,t[6]=r*h,t[10]=p*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ja,e,Qa)}lookAt(e,t,n){const i=this.elements;return wt.subVectors(e,t),wt.lengthSq()===0&&(wt.z=1),wt.normalize(),cn.crossVectors(n,wt),cn.lengthSq()===0&&(Math.abs(n.z)===1?wt.x+=1e-4:wt.z+=1e-4,wt.normalize(),cn.crossVectors(n,wt)),cn.normalize(),Vi.crossVectors(wt,cn),i[0]=cn.x,i[4]=Vi.x,i[8]=wt.x,i[1]=cn.y,i[5]=Vi.y,i[9]=wt.y,i[2]=cn.z,i[6]=Vi.z,i[10]=wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],r=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],g=n[13],m=n[2],p=n[6],f=n[10],_=n[14],v=n[3],y=n[7],x=n[11],M=n[15],S=i[0],L=i[4],w=i[8],T=i[12],R=i[1],D=i[5],I=i[9],z=i[13],C=i[2],B=i[6],P=i[10],V=i[14],G=i[3],O=i[7],X=i[11],Q=i[15];return s[0]=o*S+r*R+c*C+l*G,s[4]=o*L+r*D+c*B+l*O,s[8]=o*w+r*I+c*P+l*X,s[12]=o*T+r*z+c*V+l*Q,s[1]=h*S+d*R+u*C+g*G,s[5]=h*L+d*D+u*B+g*O,s[9]=h*w+d*I+u*P+g*X,s[13]=h*T+d*z+u*V+g*Q,s[2]=m*S+p*R+f*C+_*G,s[6]=m*L+p*D+f*B+_*O,s[10]=m*w+p*I+f*P+_*X,s[14]=m*T+p*z+f*V+_*Q,s[3]=v*S+y*R+x*C+M*G,s[7]=v*L+y*D+x*B+M*O,s[11]=v*w+y*I+x*P+M*X,s[15]=v*T+y*z+x*V+M*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],r=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],g=e[14],m=e[3],p=e[7],f=e[11],_=e[15];return m*(+s*c*d-i*l*d-s*r*u+n*l*u+i*r*g-n*c*g)+p*(+t*c*g-t*l*u+s*o*u-i*o*g+i*l*h-s*c*h)+f*(+t*l*d-t*r*g-s*o*d+n*o*g+s*r*h-n*l*h)+_*(-i*r*h-t*c*d+t*r*u+i*o*d-n*o*u+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],r=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],g=e[11],m=e[12],p=e[13],f=e[14],_=e[15],v=d*f*l-p*u*l+p*c*g-r*f*g-d*c*_+r*u*_,y=m*u*l-h*f*l-m*c*g+o*f*g+h*c*_-o*u*_,x=h*p*l-m*d*l+m*r*g-o*p*g-h*r*_+o*d*_,M=m*d*c-h*p*c-m*r*u+o*p*u+h*r*f-o*d*f,S=t*v+n*y+i*x+s*M;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/S;return e[0]=v*L,e[1]=(p*u*s-d*f*s-p*i*g+n*f*g+d*i*_-n*u*_)*L,e[2]=(r*f*s-p*c*s+p*i*l-n*f*l-r*i*_+n*c*_)*L,e[3]=(d*c*s-r*u*s-d*i*l+n*u*l+r*i*g-n*c*g)*L,e[4]=y*L,e[5]=(h*f*s-m*u*s+m*i*g-t*f*g-h*i*_+t*u*_)*L,e[6]=(m*c*s-o*f*s-m*i*l+t*f*l+o*i*_-t*c*_)*L,e[7]=(o*u*s-h*c*s+h*i*l-t*u*l-o*i*g+t*c*g)*L,e[8]=x*L,e[9]=(m*d*s-h*p*s-m*n*g+t*p*g+h*n*_-t*d*_)*L,e[10]=(o*p*s-m*r*s+m*n*l-t*p*l-o*n*_+t*r*_)*L,e[11]=(h*r*s-o*d*s-h*n*l+t*d*l+o*n*g-t*r*g)*L,e[12]=M*L,e[13]=(h*p*i-m*d*i+m*n*u-t*p*u-h*n*f+t*d*f)*L,e[14]=(m*r*i-o*p*i-m*n*c+t*p*c+o*n*f-t*r*f)*L,e[15]=(o*d*i-h*r*i+h*n*c-t*d*c-o*n*u+t*r*u)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,r=e.y,c=e.z,l=s*o,h=s*r;return this.set(l*o+n,l*r-i*c,l*c+i*r,0,l*r+i*c,h*r+n,h*c-i*o,0,l*c-i*r,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,r=t._z,c=t._w,l=s+s,h=o+o,d=r+r,u=s*l,g=s*h,m=s*d,p=o*h,f=o*d,_=r*d,v=c*l,y=c*h,x=c*d,M=n.x,S=n.y,L=n.z;return i[0]=(1-(p+_))*M,i[1]=(g+x)*M,i[2]=(m-y)*M,i[3]=0,i[4]=(g-x)*S,i[5]=(1-(u+_))*S,i[6]=(f+v)*S,i[7]=0,i[8]=(m+y)*L,i[9]=(f-v)*L,i[10]=(1-(u+p))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Un.set(i[0],i[1],i[2]).length();const o=Un.set(i[4],i[5],i[6]).length(),r=Un.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Bt.copy(this);const l=1/s,h=1/o,d=1/r;return Bt.elements[0]*=l,Bt.elements[1]*=l,Bt.elements[2]*=l,Bt.elements[4]*=h,Bt.elements[5]*=h,Bt.elements[6]*=h,Bt.elements[8]*=d,Bt.elements[9]*=d,Bt.elements[10]*=d,t.setFromRotationMatrix(Bt),n.x=s,n.y=o,n.z=r,this}makePerspective(e,t,n,i,s,o){const r=this.elements,c=2*s/(t-e),l=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),u=-(o+s)/(o-s),g=-2*o*s/(o-s);return r[0]=c,r[4]=0,r[8]=h,r[12]=0,r[1]=0,r[5]=l,r[9]=d,r[13]=0,r[2]=0,r[6]=0,r[10]=u,r[14]=g,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(e,t,n,i,s,o){const r=this.elements,c=1/(t-e),l=1/(n-i),h=1/(o-s),d=(t+e)*c,u=(n+i)*l,g=(o+s)*h;return r[0]=2*c,r[4]=0,r[8]=0,r[12]=-d,r[1]=0,r[5]=2*l,r[9]=0,r[13]=-u,r[2]=0,r[6]=0,r[10]=-2*h,r[14]=-g,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Un=new N,Bt=new Ve,Ja=new N(0,0,0),Qa=new N(1,1,1),cn=new N,Vi=new N,wt=new N,Yr=new Ve,$r=new Bn;class gi{constructor(e=0,t=0,n=0,i=gi.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],r=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin(xt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(r,g));break;case"XZY":this._z=Math.asin(-xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $r.setFromEuler(this),this.setFromQuaternion($r,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}gi.DefaultOrder="XYZ",gi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class zs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let el=0;const Zr=new N,Gn=new Bn,Yt=new Ve,Hi=new N,_i=new N,tl=new N,nl=new Bn,Kr=new N(1,0,0),Jr=new N(0,1,0),Qr=new N(0,0,1),il={type:"added"},eo={type:"removed"};class ot extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:el++}),this.uuid=rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ot.DefaultUp.clone();const e=new N,t=new gi,n=new Bn,i=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Tt}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=ot.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gn.setFromAxisAngle(e,t),this.quaternion.multiply(Gn),this}rotateOnWorldAxis(e,t){return Gn.setFromAxisAngle(e,t),this.quaternion.premultiply(Gn),this}rotateX(e){return this.rotateOnAxis(Kr,e)}rotateY(e){return this.rotateOnAxis(Jr,e)}rotateZ(e){return this.rotateOnAxis(Qr,e)}translateOnAxis(e,t){return Zr.copy(e).applyQuaternion(this.quaternion),this.position.add(Zr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kr,e)}translateY(e){return this.translateOnAxis(Jr,e)}translateZ(e){return this.translateOnAxis(Qr,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Yt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hi.copy(e):Hi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yt.lookAt(_i,Hi,this.up):Yt.lookAt(Hi,_i,this.up),this.quaternion.setFromRotationMatrix(Yt),i&&(Yt.extractRotation(i.matrixWorld),Gn.setFromRotationMatrix(Yt),this.quaternion.premultiply(Gn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(il)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eo)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(eo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Yt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,e,tl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,nl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(r,c){return r[c.uuid]===void 0&&(r[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const c=r.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let c=0,l=this.material.length;c<l;c++)r.push(s(e.materials,this.material[c]));i.material=r}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const c=this.animations[r];i.animations.push(s(e.animations,c))}}if(t){const r=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),g=o(e.animations),m=o(e.nodes);r.length>0&&(n.geometries=r),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),g.length>0&&(n.animations=g),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(r){const c=[];for(const l in r){const h=r[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ot.DefaultUp=new N(0,1,0),ot.DefaultMatrixAutoUpdate=!0;const zt=new N,$t=new N,Ns=new N,Zt=new N,Wn=new N,Vn=new N,to=new N,Os=new N,ks=new N,Us=new N;class kt{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),zt.subVectors(e,t),i.cross(zt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){zt.subVectors(i,t),$t.subVectors(n,t),Ns.subVectors(e,t);const o=zt.dot(zt),r=zt.dot($t),c=zt.dot(Ns),l=$t.dot($t),h=$t.dot(Ns),d=o*l-r*r;if(d===0)return s.set(-2,-1,-1);const u=1/d,g=(l*c-r*h)*u,m=(o*h-r*c)*u;return s.set(1-g-m,m,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Zt),Zt.x>=0&&Zt.y>=0&&Zt.x+Zt.y<=1}static getUV(e,t,n,i,s,o,r,c){return this.getBarycoord(e,t,n,i,Zt),c.set(0,0),c.addScaledVector(s,Zt.x),c.addScaledVector(o,Zt.y),c.addScaledVector(r,Zt.z),c}static isFrontFacing(e,t,n,i){return zt.subVectors(n,t),$t.subVectors(e,t),zt.cross($t).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zt.subVectors(this.c,this.b),$t.subVectors(this.a,this.b),zt.cross($t).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return kt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,r;Wn.subVectors(i,n),Vn.subVectors(s,n),Os.subVectors(e,n);const c=Wn.dot(Os),l=Vn.dot(Os);if(c<=0&&l<=0)return t.copy(n);ks.subVectors(e,i);const h=Wn.dot(ks),d=Vn.dot(ks);if(h>=0&&d<=h)return t.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Wn,o);Us.subVectors(e,s);const g=Wn.dot(Us),m=Vn.dot(Us);if(m>=0&&g<=m)return t.copy(s);const p=g*l-c*m;if(p<=0&&l>=0&&m<=0)return r=l/(l-m),t.copy(n).addScaledVector(Vn,r);const f=h*m-g*d;if(f<=0&&d-h>=0&&g-m>=0)return to.subVectors(s,i),r=(d-h)/(d-h+(g-m)),t.copy(i).addScaledVector(to,r);const _=1/(f+p+u);return o=p*_,r=u*_,t.copy(n).addScaledVector(Wn,o).addScaledVector(Vn,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let sl=0;class Kt extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sl++}),this.uuid=rn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===1;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const r in s){const c=s[r];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vi extends Kt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $e=new N,qi=new ye;class at{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new we),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new ye),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new N),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new Ue),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qi.fromBufferAttribute(this,t),qi.applyMatrix3(e),this.setXY(t,qi.x,qi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.applyMatrix3(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.applyMatrix4(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.applyNormalMatrix(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.transformDirection(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class no extends at{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class io extends at{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tt extends at{constructor(e,t,n){super(new Float32Array(e),t,n)}}let rl=0;const At=new Ve,Gs=new ot,Hn=new N,bt=new pi,xi=new pi,st=new N;class ht extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rl++}),this.uuid=rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gr(e)?io:no)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Tt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return At.makeRotationFromQuaternion(e),this.applyMatrix4(At),this}rotateX(e){return At.makeRotationX(e),this.applyMatrix4(At),this}rotateY(e){return At.makeRotationY(e),this.applyMatrix4(At),this}rotateZ(e){return At.makeRotationZ(e),this.applyMatrix4(At),this}translate(e,t,n){return At.makeTranslation(e,t,n),this.applyMatrix4(At),this}scale(e,t,n){return At.makeScale(e,t,n),this.applyMatrix4(At),this}lookAt(e){return Gs.lookAt(e),Gs.updateMatrix(),this.applyMatrix4(Gs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hn).negate(),this.translate(Hn.x,Hn.y,Hn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];bt.setFromBufferAttribute(s),this.morphTargetsRelative?(st.addVectors(this.boundingBox.min,bt.min),this.boundingBox.expandByPoint(st),st.addVectors(this.boundingBox.max,bt.max),this.boundingBox.expandByPoint(st)):(this.boundingBox.expandByPoint(bt.min),this.boundingBox.expandByPoint(bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(bt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const r=t[s];xi.setFromBufferAttribute(r),this.morphTargetsRelative?(st.addVectors(bt.min,xi.min),bt.expandByPoint(st),st.addVectors(bt.max,xi.max),bt.expandByPoint(st)):(bt.expandByPoint(xi.min),bt.expandByPoint(xi.max))}bt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)st.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(st));if(t)for(let s=0,o=t.length;s<o;s++){const r=t[s],c=this.morphTargetsRelative;for(let l=0,h=r.count;l<h;l++)st.fromBufferAttribute(r,l),c&&(Hn.fromBufferAttribute(e,l),st.add(Hn)),i=Math.max(i,n.distanceToSquared(st))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,r=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new at(new Float32Array(4*r),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let R=0;R<r;R++)l[R]=new N,h[R]=new N;const d=new N,u=new N,g=new N,m=new ye,p=new ye,f=new ye,_=new N,v=new N;function y(R,D,I){d.fromArray(i,R*3),u.fromArray(i,D*3),g.fromArray(i,I*3),m.fromArray(o,R*2),p.fromArray(o,D*2),f.fromArray(o,I*2),u.sub(d),g.sub(d),p.sub(m),f.sub(m);const z=1/(p.x*f.y-f.x*p.y);!isFinite(z)||(_.copy(u).multiplyScalar(f.y).addScaledVector(g,-p.y).multiplyScalar(z),v.copy(g).multiplyScalar(p.x).addScaledVector(u,-f.x).multiplyScalar(z),l[R].add(_),l[D].add(_),l[I].add(_),h[R].add(v),h[D].add(v),h[I].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let R=0,D=x.length;R<D;++R){const I=x[R],z=I.start,C=I.count;for(let B=z,P=z+C;B<P;B+=3)y(n[B+0],n[B+1],n[B+2])}const M=new N,S=new N,L=new N,w=new N;function T(R){L.fromArray(s,R*3),w.copy(L);const D=l[R];M.copy(D),M.sub(L.multiplyScalar(L.dot(D))).normalize(),S.crossVectors(w,D);const z=S.dot(h[R])<0?-1:1;c[R*4]=M.x,c[R*4+1]=M.y,c[R*4+2]=M.z,c[R*4+3]=z}for(let R=0,D=x.length;R<D;++R){const I=x[R],z=I.start,C=I.count;for(let B=z,P=z+C;B<P;B+=3)T(n[B+0]),T(n[B+1]),T(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new at(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,g=n.count;u<g;u++)n.setXYZ(u,0,0,0);const i=new N,s=new N,o=new N,r=new N,c=new N,l=new N,h=new N,d=new N;if(e)for(let u=0,g=e.count;u<g;u+=3){const m=e.getX(u+0),p=e.getX(u+1),f=e.getX(u+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,f),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),r.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,f),r.add(h),c.add(h),l.add(h),n.setXYZ(m,r.x,r.y,r.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let u=0,g=t.count;u<g;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const o=n[i].array,r=e.attributes[i],c=r.array,l=r.itemSize*t,h=Math.min(c.length,o.length-l);for(let d=0,u=l;d<h;d++,u++)o[u]=c[d]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)st.fromBufferAttribute(e,t),st.normalize(),e.setXYZ(t,st.x,st.y,st.z)}toNonIndexed(){function e(r,c){const l=r.array,h=r.itemSize,d=r.normalized,u=new l.constructor(c.length*h);let g=0,m=0;for(let p=0,f=c.length;p<f;p++){r.isInterleavedBufferAttribute?g=c[p]*r.data.stride+r.offset:g=c[p]*h;for(let _=0;_<h;_++)u[m++]=l[g++]}return new at(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ht,n=this.index.array,i=this.attributes;for(const r in i){const c=i[r],l=e(c,n);t.setAttribute(r,l)}const s=this.morphAttributes;for(const r in s){const c=[],l=s[r];for(let h=0,d=l.length;h<d;h++){const u=l[h],g=e(u,n);c.push(g)}t.morphAttributes[r]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,c=o.length;r<c;r++){const l=o[r];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const g=l[d];h.push(g.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,g=d.length;u<g;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const so=new Ve,qn=new Bs,Ws=new kn,hn=new N,un=new N,dn=new N,Vs=new N,Hs=new N,qs=new N,Xi=new N,ji=new N,Yi=new N,$i=new ye,Zi=new ye,Ki=new ye,Xs=new N,Ji=new N;class Ge extends ot{constructor(e=new ht,t=new vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(s),e.ray.intersectsSphere(Ws)===!1)||(so.copy(s).invert(),qn.copy(e.ray).applyMatrix4(so),n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1))return;let o;const r=n.index,c=n.attributes.position,l=n.morphAttributes.position,h=n.morphTargetsRelative,d=n.attributes.uv,u=n.attributes.uv2,g=n.groups,m=n.drawRange;if(r!==null)if(Array.isArray(i))for(let p=0,f=g.length;p<f;p++){const _=g[p],v=i[_.materialIndex],y=Math.max(_.start,m.start),x=Math.min(r.count,Math.min(_.start+_.count,m.start+m.count));for(let M=y,S=x;M<S;M+=3){const L=r.getX(M),w=r.getX(M+1),T=r.getX(M+2);o=Qi(this,v,e,qn,c,l,h,d,u,L,w,T),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,m.start),f=Math.min(r.count,m.start+m.count);for(let _=p,v=f;_<v;_+=3){const y=r.getX(_),x=r.getX(_+1),M=r.getX(_+2);o=Qi(this,i,e,qn,c,l,h,d,u,y,x,M),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let p=0,f=g.length;p<f;p++){const _=g[p],v=i[_.materialIndex],y=Math.max(_.start,m.start),x=Math.min(c.count,Math.min(_.start+_.count,m.start+m.count));for(let M=y,S=x;M<S;M+=3){const L=M,w=M+1,T=M+2;o=Qi(this,v,e,qn,c,l,h,d,u,L,w,T),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,m.start),f=Math.min(c.count,m.start+m.count);for(let _=p,v=f;_<v;_+=3){const y=_,x=_+1,M=_+2;o=Qi(this,i,e,qn,c,l,h,d,u,y,x,M),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function ol(a,e,t,n,i,s,o,r){let c;if(e.side===1?c=n.intersectTriangle(o,s,i,!0,r):c=n.intersectTriangle(i,s,o,e.side!==2,r),c===null)return null;Ji.copy(r),Ji.applyMatrix4(a.matrixWorld);const l=t.ray.origin.distanceTo(Ji);return l<t.near||l>t.far?null:{distance:l,point:Ji.clone(),object:a}}function Qi(a,e,t,n,i,s,o,r,c,l,h,d){hn.fromBufferAttribute(i,l),un.fromBufferAttribute(i,h),dn.fromBufferAttribute(i,d);const u=a.morphTargetInfluences;if(s&&u){Xi.set(0,0,0),ji.set(0,0,0),Yi.set(0,0,0);for(let m=0,p=s.length;m<p;m++){const f=u[m],_=s[m];f!==0&&(Vs.fromBufferAttribute(_,l),Hs.fromBufferAttribute(_,h),qs.fromBufferAttribute(_,d),o?(Xi.addScaledVector(Vs,f),ji.addScaledVector(Hs,f),Yi.addScaledVector(qs,f)):(Xi.addScaledVector(Vs.sub(hn),f),ji.addScaledVector(Hs.sub(un),f),Yi.addScaledVector(qs.sub(dn),f)))}hn.add(Xi),un.add(ji),dn.add(Yi)}a.isSkinnedMesh&&(a.boneTransform(l,hn),a.boneTransform(h,un),a.boneTransform(d,dn));const g=ol(a,e,t,n,hn,un,dn,Xs);if(g){r&&($i.fromBufferAttribute(r,l),Zi.fromBufferAttribute(r,h),Ki.fromBufferAttribute(r,d),g.uv=kt.getUV(Xs,hn,un,dn,$i,Zi,Ki,new ye)),c&&($i.fromBufferAttribute(c,l),Zi.fromBufferAttribute(c,h),Ki.fromBufferAttribute(c,d),g.uv2=kt.getUV(Xs,hn,un,dn,$i,Zi,Ki,new ye));const m={a:l,b:h,c:d,normal:new N,materialIndex:0};kt.getNormal(hn,un,dn,m.normal),g.face=m}return g}class Xn extends ht{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const r=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,g=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(d,2));function m(p,f,_,v,y,x,M,S,L,w,T){const R=x/L,D=M/w,I=x/2,z=M/2,C=S/2,B=L+1,P=w+1;let V=0,G=0;const O=new N;for(let X=0;X<P;X++){const Q=X*D-z;for(let U=0;U<B;U++){const J=U*R-I;O[p]=J*v,O[f]=Q*y,O[_]=C,l.push(O.x,O.y,O.z),O[p]=0,O[f]=0,O[_]=S>0?1:-1,h.push(O.x,O.y,O.z),d.push(U/L),d.push(1-X/w),V+=1}}for(let X=0;X<w;X++)for(let Q=0;Q<L;Q++){const U=u+Q+B*X,J=u+Q+B*(X+1),te=u+(Q+1)+B*(X+1),ie=u+(Q+1)+B*X;c.push(U,J,ie),c.push(J,te,ie),G+=6}r.addGroup(g,G,T),g+=G,u+=V}}static fromJSON(e){return new Xn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function jn(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ut(a){const e={};for(let t=0;t<a.length;t++){const n=jn(a[t]);for(const i in n)e[i]=n[i]}return e}function al(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}const ll={clone:jn,merge:ut};var cl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends Kt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cl,this.fragmentShader=hl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jn(e.uniforms),this.uniformsGroups=al(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ro extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class gt extends ro{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ws*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const r=this.filmOffset;r!==0&&(s+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yn=90,$n=1;class ul extends ot{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new gt(Yn,$n,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new N(1,0,0)),this.add(i);const s=new gt(Yn,$n,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new N(-1,0,0)),this.add(s);const o=new gt(Yn,$n,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new N(0,1,0)),this.add(o);const r=new gt(Yn,$n,e,t);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(new N(0,-1,0)),this.add(r);const c=new gt(Yn,$n,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new N(0,0,1)),this.add(c);const l=new gt(Yn,$n,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new N(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,r,c,l]=this.children,h=e.getRenderTarget(),d=e.toneMapping,u=e.xr.enabled;e.toneMapping=0,e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,r),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(h),e.toneMapping=d,e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class oo extends yt{constructor(e,t,n,i,s,o,r,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:301,super(e,t,n,i,s,o,r,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dl extends xn{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new oo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Xn(5,5,5),s=new fn({name:"CubemapFromEquirect",uniforms:jn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;const o=new Ge(i,s),r=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new ul(1,10,this).update(e,o),t.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const js=new N,fl=new N,pl=new Tt;class Mn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=js.subVectors(n,t).cross(fl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(js),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||pl.getNormalMatrix(e),i=this.coplanarPoint(js).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new kn,es=new N;class Ys{constructor(e=new Mn,t=new Mn,n=new Mn,i=new Mn,s=new Mn,o=new Mn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(n),r[3].copy(i),r[4].copy(s),r[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],r=n[3],c=n[4],l=n[5],h=n[6],d=n[7],u=n[8],g=n[9],m=n[10],p=n[11],f=n[12],_=n[13],v=n[14],y=n[15];return t[0].setComponents(r-i,d-c,p-u,y-f).normalize(),t[1].setComponents(r+i,d+c,p+u,y+f).normalize(),t[2].setComponents(r+s,d+l,p+g,y+_).normalize(),t[3].setComponents(r-s,d-l,p-g,y-_).normalize(),t[4].setComponents(r-o,d-h,p-m,y-v).normalize(),t[5].setComponents(r+o,d+h,p+m,y+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Zn)}intersectsSprite(e){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(es.x=i.normal.x>0?e.max.x:e.min.x,es.y=i.normal.y>0?e.max.y:e.min.y,es.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(es)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ao(){let a=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function ml(a,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const d=l.array,u=l.usage,g=a.createBuffer();a.bindBuffer(h,g),a.bufferData(h,d,u),l.onUploadCallback();let m;if(d instanceof Float32Array)m=5126;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)m=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=5123;else if(d instanceof Int16Array)m=5122;else if(d instanceof Uint32Array)m=5125;else if(d instanceof Int32Array)m=5124;else if(d instanceof Int8Array)m=5120;else if(d instanceof Uint8Array)m=5121;else if(d instanceof Uint8ClampedArray)m=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:m,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,d){const u=h.array,g=h.updateRange;a.bindBuffer(d,l),g.count===-1?a.bufferSubData(d,0,u):(t?a.bufferSubData(d,g.offset*u.BYTES_PER_ELEMENT,u,g.offset,g.count):a.bufferSubData(d,g.offset*u.BYTES_PER_ELEMENT,u.subarray(g.offset,g.offset+g.count)),g.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(a.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);d===void 0?n.set(l,i(l,h)):d.version<l.version&&(s(d.buffer,l,h),d.version=l.version)}return{get:o,remove:r,update:c}}class yi extends ht{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,r=Math.floor(n),c=Math.floor(i),l=r+1,h=c+1,d=e/r,u=t/c,g=[],m=[],p=[],f=[];for(let _=0;_<h;_++){const v=_*u-o;for(let y=0;y<l;y++){const x=y*d-s;m.push(x,-v,0),p.push(0,0,1),f.push(y/r),f.push(1-_/c)}}for(let _=0;_<c;_++)for(let v=0;v<r;v++){const y=v+l*_,x=v+l*(_+1),M=v+1+l*(_+1),S=v+1+l*_;g.push(y,x,S),g.push(x,M,S)}this.setIndex(g),this.setAttribute("position",new tt(m,3)),this.setAttribute("normal",new tt(p,3)),this.setAttribute("uv",new tt(f,2))}static fromJSON(e){return new yi(e.width,e.height,e.widthSegments,e.heightSegments)}}var gl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,_l=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bl="vec3 transformed = vec3( position );",Ml=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sl=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,El=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Tl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Al=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Cl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ll=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Il=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Bl=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,zl=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
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
#endif`,Nl=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ol=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ul=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wl="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vl=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hl=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,ql=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xl=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yl=`#ifdef USE_ENVMAP
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
#endif`,$l=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ql=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,ec=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,tc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nc=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,ic=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,sc=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,rc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,ac=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,cc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,hc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,uc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,pc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_c=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sc=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ec=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Tc=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ac=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Cc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Lc=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Ic=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Bc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,zc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Nc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Oc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kc=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Uc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xc=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,jc=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yc=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,$c=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kc=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Jc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qc=`#ifdef USE_SKINNING
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
#endif`,eh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,th=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ih=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sh=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,rh=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,oh=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ah=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,lh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,ch=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,hh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,uh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,dh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Le={alphamap_fragment:gl,alphamap_pars_fragment:_l,alphatest_fragment:vl,alphatest_pars_fragment:xl,aomap_fragment:yl,aomap_pars_fragment:wl,begin_vertex:bl,beginnormal_vertex:Ml,bsdfs:Sl,iridescence_fragment:El,bumpmap_pars_fragment:Tl,clipping_planes_fragment:Al,clipping_planes_pars_fragment:Cl,clipping_planes_pars_vertex:Ll,clipping_planes_vertex:Fl,color_fragment:Rl,color_pars_fragment:Pl,color_pars_vertex:Dl,color_vertex:Il,common:Bl,cube_uv_reflection_fragment:zl,defaultnormal_vertex:Nl,displacementmap_pars_vertex:Ol,displacementmap_vertex:kl,emissivemap_fragment:Ul,emissivemap_pars_fragment:Gl,encodings_fragment:Wl,encodings_pars_fragment:Vl,envmap_fragment:Hl,envmap_common_pars_fragment:ql,envmap_pars_fragment:Xl,envmap_pars_vertex:jl,envmap_physical_pars_fragment:sc,envmap_vertex:Yl,fog_vertex:$l,fog_pars_vertex:Zl,fog_fragment:Kl,fog_pars_fragment:Jl,gradientmap_pars_fragment:Ql,lightmap_fragment:ec,lightmap_pars_fragment:tc,lights_lambert_vertex:nc,lights_pars_begin:ic,lights_toon_fragment:rc,lights_toon_pars_fragment:oc,lights_phong_fragment:ac,lights_phong_pars_fragment:lc,lights_physical_fragment:cc,lights_physical_pars_fragment:hc,lights_fragment_begin:uc,lights_fragment_maps:dc,lights_fragment_end:fc,logdepthbuf_fragment:pc,logdepthbuf_pars_fragment:mc,logdepthbuf_pars_vertex:gc,logdepthbuf_vertex:_c,map_fragment:vc,map_pars_fragment:xc,map_particle_fragment:yc,map_particle_pars_fragment:wc,metalnessmap_fragment:bc,metalnessmap_pars_fragment:Mc,morphcolor_vertex:Sc,morphnormal_vertex:Ec,morphtarget_pars_vertex:Tc,morphtarget_vertex:Ac,normal_fragment_begin:Cc,normal_fragment_maps:Lc,normal_pars_fragment:Fc,normal_pars_vertex:Rc,normal_vertex:Pc,normalmap_pars_fragment:Dc,clearcoat_normal_fragment_begin:Ic,clearcoat_normal_fragment_maps:Bc,clearcoat_pars_fragment:zc,iridescence_pars_fragment:Nc,output_fragment:Oc,packing:kc,premultiplied_alpha_fragment:Uc,project_vertex:Gc,dithering_fragment:Wc,dithering_pars_fragment:Vc,roughnessmap_fragment:Hc,roughnessmap_pars_fragment:qc,shadowmap_pars_fragment:Xc,shadowmap_pars_vertex:jc,shadowmap_vertex:Yc,shadowmask_pars_fragment:$c,skinbase_vertex:Zc,skinning_pars_vertex:Kc,skinning_vertex:Jc,skinnormal_vertex:Qc,specularmap_fragment:eh,specularmap_pars_fragment:th,tonemapping_fragment:nh,tonemapping_pars_fragment:ih,transmission_fragment:sh,transmission_pars_fragment:rh,uv_pars_fragment:oh,uv_pars_vertex:ah,uv_vertex:lh,uv2_pars_fragment:ch,uv2_pars_vertex:hh,uv2_vertex:uh,worldpos_vertex:dh,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,distanceRGBA_frag:`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,meshphong_frag:`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`},oe={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Tt},uv2Transform:{value:new Tt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Tt}}},Ut={basic:{uniforms:ut([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:ut([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.fog,oe.lights,{emissive:{value:new we(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:ut([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:ut([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:ut([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new we(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:ut([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:ut([oe.points,oe.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:ut([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:ut([oe.common,oe.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:ut([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:ut([oe.sprite,oe.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},cube:{uniforms:ut([oe.envmap,{opacity:{value:1}}]),vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:ut([oe.common,oe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:ut([oe.lights,oe.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Ut.physical={uniforms:ut([Ut.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ye(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};function fh(a,e,t,n,i,s){const o=new we(0);let r=i===!0?0:1,c,l,h=null,d=0,u=null;function g(p,f){let _=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=e.get(v));const y=a.xr,x=y.getSession&&y.getSession();x&&x.environmentBlendMode==="additive"&&(v=null),v===null?m(o,r):v&&v.isColor&&(m(v,1),_=!0),(a.autoClear||_)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),v&&(v.isCubeTexture||v.mapping===306)?(l===void 0&&(l=new Ge(new Xn(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:jn(Ut.cube.uniforms),vertexShader:Ut.cube.vertexShader,fragmentShader:Ut.cube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,S,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(h!==v||d!==v.version||u!==a.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=a.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ge(new yi(2,2),new fn({name:"BackgroundMaterial",uniforms:jn(Ut.background.uniforms),vertexShader:Ut.background.vertexShader,fragmentShader:Ut.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==a.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=a.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function m(p,f){t.buffers.color.setClear(p.r,p.g,p.b,f,s)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),r=f,m(o,r)},getClearAlpha:function(){return r},setClearAlpha:function(p){r=p,m(o,r)},render:g}}function ph(a,e,t,n){const i=a.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,r={},c=f(null);let l=c,h=!1;function d(C,B,P,V,G){let O=!1;if(o){const X=p(V,P,B);l!==X&&(l=X,g(l.object)),O=_(C,V,P,G),O&&v(C,V,P,G)}else{const X=B.wireframe===!0;(l.geometry!==V.id||l.program!==P.id||l.wireframe!==X)&&(l.geometry=V.id,l.program=P.id,l.wireframe=X,O=!0)}G!==null&&t.update(G,34963),(O||h)&&(h=!1,w(C,B,P,V),G!==null&&a.bindBuffer(34963,t.get(G).buffer))}function u(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function g(C){return n.isWebGL2?a.bindVertexArray(C):s.bindVertexArrayOES(C)}function m(C){return n.isWebGL2?a.deleteVertexArray(C):s.deleteVertexArrayOES(C)}function p(C,B,P){const V=P.wireframe===!0;let G=r[C.id];G===void 0&&(G={},r[C.id]=G);let O=G[B.id];O===void 0&&(O={},G[B.id]=O);let X=O[V];return X===void 0&&(X=f(u()),O[V]=X),X}function f(C){const B=[],P=[],V=[];for(let G=0;G<i;G++)B[G]=0,P[G]=0,V[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:P,attributeDivisors:V,object:C,attributes:{},index:null}}function _(C,B,P,V){const G=l.attributes,O=B.attributes;let X=0;const Q=P.getAttributes();for(const U in Q)if(Q[U].location>=0){const te=G[U];let ie=O[U];if(ie===void 0&&(U==="instanceMatrix"&&C.instanceMatrix&&(ie=C.instanceMatrix),U==="instanceColor"&&C.instanceColor&&(ie=C.instanceColor)),te===void 0||te.attribute!==ie||ie&&te.data!==ie.data)return!0;X++}return l.attributesNum!==X||l.index!==V}function v(C,B,P,V){const G={},O=B.attributes;let X=0;const Q=P.getAttributes();for(const U in Q)if(Q[U].location>=0){let te=O[U];te===void 0&&(U==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),U==="instanceColor"&&C.instanceColor&&(te=C.instanceColor));const ie={};ie.attribute=te,te&&te.data&&(ie.data=te.data),G[U]=ie,X++}l.attributes=G,l.attributesNum=X,l.index=V}function y(){const C=l.newAttributes;for(let B=0,P=C.length;B<P;B++)C[B]=0}function x(C){M(C,0)}function M(C,B){const P=l.newAttributes,V=l.enabledAttributes,G=l.attributeDivisors;P[C]=1,V[C]===0&&(a.enableVertexAttribArray(C),V[C]=1),G[C]!==B&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,B),G[C]=B)}function S(){const C=l.newAttributes,B=l.enabledAttributes;for(let P=0,V=B.length;P<V;P++)B[P]!==C[P]&&(a.disableVertexAttribArray(P),B[P]=0)}function L(C,B,P,V,G,O){n.isWebGL2===!0&&(P===5124||P===5125)?a.vertexAttribIPointer(C,B,P,G,O):a.vertexAttribPointer(C,B,P,V,G,O)}function w(C,B,P,V){if(n.isWebGL2===!1&&(C.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const G=V.attributes,O=P.getAttributes(),X=B.defaultAttributeValues;for(const Q in O){const U=O[Q];if(U.location>=0){let J=G[Q];if(J===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(J=C.instanceColor)),J!==void 0){const te=J.normalized,ie=J.itemSize,H=t.get(J);if(H===void 0)continue;const Ee=H.buffer,_e=H.type,ve=H.bytesPerElement;if(J.isInterleavedBufferAttribute){const le=J.data,Oe=le.stride,Me=J.offset;if(le.isInstancedInterleavedBuffer){for(let ge=0;ge<U.locationSize;ge++)M(U.location+ge,le.meshPerAttribute);C.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ge=0;ge<U.locationSize;ge++)x(U.location+ge);a.bindBuffer(34962,Ee);for(let ge=0;ge<U.locationSize;ge++)L(U.location+ge,ie/U.locationSize,_e,te,Oe*ve,(Me+ie/U.locationSize*ge)*ve)}else{if(J.isInstancedBufferAttribute){for(let le=0;le<U.locationSize;le++)M(U.location+le,J.meshPerAttribute);C.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let le=0;le<U.locationSize;le++)x(U.location+le);a.bindBuffer(34962,Ee);for(let le=0;le<U.locationSize;le++)L(U.location+le,ie/U.locationSize,_e,te,ie*ve,ie/U.locationSize*le*ve)}}else if(X!==void 0){const te=X[Q];if(te!==void 0)switch(te.length){case 2:a.vertexAttrib2fv(U.location,te);break;case 3:a.vertexAttrib3fv(U.location,te);break;case 4:a.vertexAttrib4fv(U.location,te);break;default:a.vertexAttrib1fv(U.location,te)}}}}S()}function T(){I();for(const C in r){const B=r[C];for(const P in B){const V=B[P];for(const G in V)m(V[G].object),delete V[G];delete B[P]}delete r[C]}}function R(C){if(r[C.id]===void 0)return;const B=r[C.id];for(const P in B){const V=B[P];for(const G in V)m(V[G].object),delete V[G];delete B[P]}delete r[C.id]}function D(C){for(const B in r){const P=r[B];if(P[C.id]===void 0)continue;const V=P[C.id];for(const G in V)m(V[G].object),delete V[G];delete P[C.id]}}function I(){z(),h=!0,l!==c&&(l=c,g(l.object))}function z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:I,resetDefaultState:z,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:x,disableUnusedAttributes:S}}function mh(a,e,t,n){const i=n.isWebGL2;let s;function o(l){s=l}function r(l,h){a.drawArrays(s,l,h),t.update(h,s,1)}function c(l,h,d){if(d===0)return;let u,g;if(i)u=a,g="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[g](s,l,h,d),t.update(h,s,d)}this.setMode=o,this.render=r,this.renderInstances=c}function gh(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&a instanceof WebGL2ComputeRenderingContext;let r=t.precision!==void 0?t.precision:"highp";const c=s(r);c!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",c,"instead."),r=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=a.getParameter(34930),u=a.getParameter(35660),g=a.getParameter(3379),m=a.getParameter(34076),p=a.getParameter(34921),f=a.getParameter(36347),_=a.getParameter(36348),v=a.getParameter(36349),y=u>0,x=o||e.has("OES_texture_float"),M=y&&x,S=o?a.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:S}}function _h(a){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Mn,r=new Tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u,g){const m=d.length!==0||u||n!==0||i;return i=u,t=h(d,g,0),n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,l()},this.setState=function(d,u,g){const m=d.clippingPlanes,p=d.clipIntersection,f=d.clipShadows,_=a.get(d);if(!i||m===null||m.length===0||s&&!f)s?h(null):l();else{const v=s?0:n,y=v*4;let x=_.clippingState||null;c.value=x,x=h(m,u,y,g);for(let M=0;M!==y;++M)x[M]=t[M];_.clippingState=x,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,g,m){const p=d!==null?d.length:0;let f=null;if(p!==0){if(f=c.value,m!==!0||f===null){const _=g+p*4,v=u.matrixWorldInverse;r.getNormalMatrix(v),(f===null||f.length<_)&&(f=new Float32Array(_));for(let y=0,x=g;y!==p;++y,x+=4)o.copy(d[y]).applyMatrix4(v,r),o.normal.toArray(f,x),f[x+3]=o.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function vh(a){let e=new WeakMap;function t(o,r){return r===303?o.mapping=301:r===304&&(o.mapping=302),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const r=o.mapping;if(r===303||r===304)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new dl(c.height/2);return l.fromEquirectangularTexture(a,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const r=o.target;r.removeEventListener("dispose",i);const c=e.get(r);c!==void 0&&(e.delete(r),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class xh extends ro{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,r=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,r-=h*this.view.offsetY,c=r-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,r,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Kn=4,lo=[.125,.215,.35,.446,.526,.582],Sn=20,$s=new xh,co=new we;let Zs=null;const En=(1+Math.sqrt(5))/2,Jn=1/En,ho=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,En,Jn),new N(0,En,-Jn),new N(Jn,0,En),new N(-Jn,0,En),new N(En,Jn,0),new N(-En,Jn,0)];class Ks{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Zs=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=po(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zs),e.scissorTest=!1,ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zs=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,encoding:3e3,depthBuffer:!1},i=uo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uo(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yh(s)),this._blurMaterial=wh(s,e,t)}return i}_compileMaterial(e){const t=new Ge(this._lodPlanes[0],e);this._renderer.compile(t,$s)}_sceneToCubeUV(e,t,n,i){const r=new gt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(co),h.toneMapping=0,h.autoClear=!1;const g=new vi({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),m=new Ge(new Xn,g);let p=!1;const f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,p=!0):(g.color.copy(co),p=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(r.up.set(0,c[_],0),r.lookAt(l[_],0,0)):v===1?(r.up.set(0,0,c[_]),r.lookAt(0,l[_],0)):(r.up.set(0,c[_],0),r.lookAt(0,0,l[_]));const y=this._cubeSize;ts(i,v*y,_>2?y:0,y,y),h.setRenderTarget(i),p&&h.render(m,r),h.render(e,r)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===301||e.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=po()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fo());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ge(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=e;const c=this._cubeSize;ts(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,$s)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ho[(i-1)%ho.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,r){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ge(this._lodPlanes[i],l),u=l.uniforms,g=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Sn-1),p=s/m,f=isFinite(s)?1+Math.floor(h*p):Sn;f>Sn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Sn}`);const _=[];let v=0;for(let L=0;L<Sn;++L){const w=L/p,T=Math.exp(-w*w/2);_.push(T),L===0?v+=T:L<f&&(v+=2*T)}for(let L=0;L<_.length;L++)_[L]=_[L]/v;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=_,u.latitudinal.value=o==="latitudinal",r&&(u.poleAxis.value=r);const{_lodMax:y}=this;u.dTheta.value=m,u.mipInt.value=y-n;const x=this._sizeLods[i],M=3*x*(i>y-Kn?i-y+Kn:0),S=4*(this._cubeSize-x);ts(t,M,S,3*x,2*x),c.setRenderTarget(t),c.render(d,$s)}}function yh(a){const e=[],t=[],n=[];let i=a;const s=a-Kn+1+lo.length;for(let o=0;o<s;o++){const r=Math.pow(2,i);t.push(r);let c=1/r;o>a-Kn?c=lo[o-a+Kn-1]:o===0&&(c=0),n.push(c);const l=1/(r-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],g=6,m=6,p=3,f=2,_=1,v=new Float32Array(p*m*g),y=new Float32Array(f*m*g),x=new Float32Array(_*m*g);for(let S=0;S<g;S++){const L=S%3*2/3-1,w=S>2?0:-1,T=[L,w,0,L+2/3,w,0,L+2/3,w+1,0,L,w,0,L+2/3,w+1,0,L,w+1,0];v.set(T,p*m*S),y.set(u,f*m*S);const R=[S,S,S,S,S,S];x.set(R,_*m*S)}const M=new ht;M.setAttribute("position",new at(v,p)),M.setAttribute("uv",new at(y,f)),M.setAttribute("faceIndex",new at(x,_)),e.push(M),i>Kn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uo(a,e,t){const n=new xn(a,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ts(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function wh(a,e,t){const n=new Float32Array(Sn),i=new N(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:Sn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Js(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function fo(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Js(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function po(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Js(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Js(){return`

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
	`}function bh(a){let e=new WeakMap,t=null;function n(r){if(r&&r.isTexture){const c=r.mapping,l=c===303||c===304,h=c===301||c===302;if(l||h)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let d=e.get(r);return t===null&&(t=new Ks(a)),d=l?t.fromEquirectangular(r,d):t.fromCubemap(r,d),e.set(r,d),d.texture}else{if(e.has(r))return e.get(r).texture;{const d=r.image;if(l&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new Ks(a));const u=l?t.fromEquirectangular(r):t.fromCubemap(r);return e.set(r,u),r.addEventListener("dispose",s),u.texture}else return null}}}return r}function i(r){let c=0;const l=6;for(let h=0;h<l;h++)r[h]!==void 0&&c++;return c===l}function s(r){const c=r.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Mh(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Sh(a,e,t,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete i[u.id];const g=s.get(u);g&&(e.remove(g),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function r(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const m in u)e.update(u[m],34962);const g=d.morphAttributes;for(const m in g){const p=g[m];for(let f=0,_=p.length;f<_;f++)e.update(p[f],34962)}}function l(d){const u=[],g=d.index,m=d.attributes.position;let p=0;if(g!==null){const v=g.array;p=g.version;for(let y=0,x=v.length;y<x;y+=3){const M=v[y+0],S=v[y+1],L=v[y+2];u.push(M,S,S,L,L,M)}}else{const v=m.array;p=m.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const M=y+0,S=y+1,L=y+2;u.push(M,S,S,L,L,M)}}const f=new(Gr(u)?io:no)(u,1);f.version=p;const _=s.get(d);_&&e.remove(_),s.set(d,f)}function h(d){const u=s.get(d);if(u){const g=d.index;g!==null&&u.version<g.version&&l(d)}else l(d);return s.get(d)}return{get:r,update:c,getWireframeAttribute:h}}function Eh(a,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}let r,c;function l(u){r=u.type,c=u.bytesPerElement}function h(u,g){a.drawElements(s,g,r,u*c),t.update(g,s,1)}function d(u,g,m){if(m===0)return;let p,f;if(i)p=a,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,g,r,u*c,m),t.update(g,s,m)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=d}function Th(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,r){switch(t.calls++,o){case 4:t.triangles+=r*(s/3);break;case 1:t.lines+=r*(s/2);break;case 3:t.lines+=r*(s-1);break;case 2:t.lines+=r*s;break;case 0:t.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ah(a,e){return a[0]-e[0]}function Ch(a,e){return Math.abs(e[1])-Math.abs(a[1])}function Qs(a,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),a.divideScalar(t)}function Lh(a,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Ue,r=[];for(let l=0;l<8;l++)r[l]=[l,0];function c(l,h,d,u){const g=l.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=m!==void 0?m.length:0;let f=s.get(h);if(f===void 0||f.count!==p){let B=function(){z.dispose(),s.delete(h),h.removeEventListener("dispose",B)};f!==void 0&&f.texture.dispose();const y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],w=h.morphAttributes.color||[];let T=0;y===!0&&(T=1),x===!0&&(T=2),M===!0&&(T=3);let R=h.attributes.position.count*T,D=1;R>e.maxTextureSize&&(D=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const I=new Float32Array(R*D*4*p),z=new qr(I,R,D,p);z.type=1015,z.needsUpdate=!0;const C=T*4;for(let P=0;P<p;P++){const V=S[P],G=L[P],O=w[P],X=R*D*4*P;for(let Q=0;Q<V.count;Q++){const U=Q*C;y===!0&&(o.fromBufferAttribute(V,Q),V.normalized===!0&&Qs(o,V),I[X+U+0]=o.x,I[X+U+1]=o.y,I[X+U+2]=o.z,I[X+U+3]=0),x===!0&&(o.fromBufferAttribute(G,Q),G.normalized===!0&&Qs(o,G),I[X+U+4]=o.x,I[X+U+5]=o.y,I[X+U+6]=o.z,I[X+U+7]=0),M===!0&&(o.fromBufferAttribute(O,Q),O.normalized===!0&&Qs(o,O),I[X+U+8]=o.x,I[X+U+9]=o.y,I[X+U+10]=o.z,I[X+U+11]=O.itemSize===4?o.w:1)}}f={count:p,texture:z,size:new ye(R,D)},s.set(h,f),h.addEventListener("dispose",B)}let _=0;for(let y=0;y<g.length;y++)_+=g[y];const v=h.morphTargetsRelative?1:1-_;u.getUniforms().setValue(a,"morphTargetBaseInfluence",v),u.getUniforms().setValue(a,"morphTargetInfluences",g),u.getUniforms().setValue(a,"morphTargetsTexture",f.texture,t),u.getUniforms().setValue(a,"morphTargetsTextureSize",f.size)}else{const m=g===void 0?0:g.length;let p=n[h.id];if(p===void 0||p.length!==m){p=[];for(let x=0;x<m;x++)p[x]=[x,0];n[h.id]=p}for(let x=0;x<m;x++){const M=p[x];M[0]=x,M[1]=g[x]}p.sort(Ch);for(let x=0;x<8;x++)x<m&&p[x][1]?(r[x][0]=p[x][0],r[x][1]=p[x][1]):(r[x][0]=Number.MAX_SAFE_INTEGER,r[x][1]=0);r.sort(Ah);const f=h.morphAttributes.position,_=h.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const M=r[x],S=M[0],L=M[1];S!==Number.MAX_SAFE_INTEGER&&L?(f&&h.getAttribute("morphTarget"+x)!==f[S]&&h.setAttribute("morphTarget"+x,f[S]),_&&h.getAttribute("morphNormal"+x)!==_[S]&&h.setAttribute("morphNormal"+x,_[S]),i[x]=L,v+=L):(f&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),_&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const y=h.morphTargetsRelative?1:1-v;u.getUniforms().setValue(a,"morphTargetBaseInfluence",y),u.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:c}}function Fh(a,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);return i.get(d)!==l&&(e.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",r)===!1&&c.addEventListener("dispose",r),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),d}function o(){i=new WeakMap}function r(c){const l=c.target;l.removeEventListener("dispose",r),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const mo=new yt,go=new qr,_o=new Za,vo=new oo,xo=[],yo=[],wo=new Float32Array(16),bo=new Float32Array(9),Mo=new Float32Array(4);function Qn(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let s=xo[i];if(s===void 0&&(s=new Float32Array(i),xo[i]=s),e!==0){n.toArray(s,0);for(let o=1,r=0;o!==e;++o)r+=t,a[o].toArray(s,r)}return s}function dt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function ft(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function ns(a,e){let t=yo[e];t===void 0&&(t=new Int32Array(e),yo[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function Rh(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Ph(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;a.uniform2fv(this.addr,e),ft(t,e)}}function Dh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;a.uniform3fv(this.addr,e),ft(t,e)}}function Ih(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;a.uniform4fv(this.addr,e),ft(t,e)}}function Bh(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Mo.set(n),a.uniformMatrix2fv(this.addr,!1,Mo),ft(t,n)}}function zh(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;bo.set(n),a.uniformMatrix3fv(this.addr,!1,bo),ft(t,n)}}function Nh(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;wo.set(n),a.uniformMatrix4fv(this.addr,!1,wo),ft(t,n)}}function Oh(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function kh(a,e){const t=this.cache;dt(t,e)||(a.uniform2iv(this.addr,e),ft(t,e))}function Uh(a,e){const t=this.cache;dt(t,e)||(a.uniform3iv(this.addr,e),ft(t,e))}function Gh(a,e){const t=this.cache;dt(t,e)||(a.uniform4iv(this.addr,e),ft(t,e))}function Wh(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Vh(a,e){const t=this.cache;dt(t,e)||(a.uniform2uiv(this.addr,e),ft(t,e))}function Hh(a,e){const t=this.cache;dt(t,e)||(a.uniform3uiv(this.addr,e),ft(t,e))}function qh(a,e){const t=this.cache;dt(t,e)||(a.uniform4uiv(this.addr,e),ft(t,e))}function Xh(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||mo,i)}function jh(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||_o,i)}function Yh(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||vo,i)}function $h(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||go,i)}function Zh(a){switch(a){case 5126:return Rh;case 35664:return Ph;case 35665:return Dh;case 35666:return Ih;case 35674:return Bh;case 35675:return zh;case 35676:return Nh;case 5124:case 35670:return Oh;case 35667:case 35671:return kh;case 35668:case 35672:return Uh;case 35669:case 35673:return Gh;case 5125:return Wh;case 36294:return Vh;case 36295:return Hh;case 36296:return qh;case 35678:case 36198:case 36298:case 36306:case 35682:return Xh;case 35679:case 36299:case 36307:return jh;case 35680:case 36300:case 36308:case 36293:return Yh;case 36289:case 36303:case 36311:case 36292:return $h}}function Kh(a,e){a.uniform1fv(this.addr,e)}function Jh(a,e){const t=Qn(e,this.size,2);a.uniform2fv(this.addr,t)}function Qh(a,e){const t=Qn(e,this.size,3);a.uniform3fv(this.addr,t)}function eu(a,e){const t=Qn(e,this.size,4);a.uniform4fv(this.addr,t)}function tu(a,e){const t=Qn(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function nu(a,e){const t=Qn(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function iu(a,e){const t=Qn(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function su(a,e){a.uniform1iv(this.addr,e)}function ru(a,e){a.uniform2iv(this.addr,e)}function ou(a,e){a.uniform3iv(this.addr,e)}function au(a,e){a.uniform4iv(this.addr,e)}function lu(a,e){a.uniform1uiv(this.addr,e)}function cu(a,e){a.uniform2uiv(this.addr,e)}function hu(a,e){a.uniform3uiv(this.addr,e)}function uu(a,e){a.uniform4uiv(this.addr,e)}function du(a,e,t){const n=e.length,i=ns(t,n);a.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||mo,i[s])}function fu(a,e,t){const n=e.length,i=ns(t,n);a.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||_o,i[s])}function pu(a,e,t){const n=e.length,i=ns(t,n);a.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||vo,i[s])}function mu(a,e,t){const n=e.length,i=ns(t,n);a.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||go,i[s])}function gu(a){switch(a){case 5126:return Kh;case 35664:return Jh;case 35665:return Qh;case 35666:return eu;case 35674:return tu;case 35675:return nu;case 35676:return iu;case 5124:case 35670:return su;case 35667:case 35671:return ru;case 35668:case 35672:return ou;case 35669:case 35673:return au;case 5125:return lu;case 36294:return cu;case 36295:return hu;case 36296:return uu;case 35678:case 36198:case 36298:case 36306:case 35682:return du;case 35679:case 36299:case 36307:return fu;case 35680:case 36300:case 36308:case 36293:return pu;case 36289:case 36303:case 36311:case 36292:return mu}}class _u{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Zh(t.type)}}class vu{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=gu(t.type)}}class xu{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const r=i[s];r.setValue(e,t[r.id],n)}}}const er=/(\w+)(\])?(\[|\.)?/g;function So(a,e){a.seq.push(e),a.map[e.id]=e}function yu(a,e,t){const n=a.name,i=n.length;for(er.lastIndex=0;;){const s=er.exec(n),o=er.lastIndex;let r=s[1];const c=s[2]==="]",l=s[3];if(c&&(r=r|0),l===void 0||l==="["&&o+2===i){So(t,l===void 0?new _u(r,a,e):new vu(r,a,e));break}else{let d=t.map[r];d===void 0&&(d=new xu(r),So(t,d)),t=d}}}class is{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);yu(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const r=t[s],c=n[r.id];c.needsUpdate!==!1&&r.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Eo(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let wu=0;function bu(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const r=o+1;n.push(`${r===e?">":" "} ${r}: ${t[o]}`)}return n.join(`
`)}function Mu(a){switch(a){case 3e3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function To(a,e,t){const n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+bu(a.getShaderSource(e),o)}else return i}function Su(a,e){const t=Mu(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Eu(a,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="OptimizedCineon";break;case 4:t="ACESFilmic";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Tu(a){return[a.extensionDerivatives||!!a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wi).join(`
`)}function Au(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Cu(a,e){const t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=a.getActiveAttrib(e,i),o=s.name;let r=1;s.type===35674&&(r=2),s.type===35675&&(r=3),s.type===35676&&(r=4),t[o]={type:s.type,location:a.getAttribLocation(e,o),locationSize:r}}return t}function wi(a){return a!==""}function Ao(a,e){return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Co(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Lu=/^[ \t]*#include +<([\w\d./]+)>/gm;function tr(a){return a.replace(Lu,Fu)}function Fu(a,e){const t=Le[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return tr(t)}const Ru=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Pu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lo(a){return a.replace(Pu,Fo).replace(Ru,Du)}function Du(a,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Fo(a,e,t,n)}function Fo(a,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ro(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Iu(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function Bu(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zu(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function Nu(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function Ou(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ku(a,e,t,n){const i=a.getContext(),s=t.defines;let o=t.vertexShader,r=t.fragmentShader;const c=Iu(t),l=Bu(t),h=zu(t),d=Nu(t),u=Ou(t),g=t.isWebGL2?"":Tu(t),m=Au(s),p=i.createProgram();let f,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[m].filter(wi).join(`
`),f.length>0&&(f+=`
`),_=[g,m].filter(wi).join(`
`),_.length>0&&(_+=`
`)):(f=[Ro(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wi).join(`
`),_=[g,Ro(t),"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Le.tonemapping_pars_fragment:"",t.toneMapping!==0?Eu("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.encodings_pars_fragment,Su("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wi).join(`
`)),o=tr(o),o=Ao(o,t),o=Co(o,t),r=tr(r),r=Ao(r,t),r=Co(r,t),o=Lo(o),r=Lo(r),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["#define varying in",t.glslVersion===kr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=v+f+o,x=v+_+r,M=Eo(i,35633,y),S=Eo(i,35632,x);if(i.attachShader(p,M),i.attachShader(p,S),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),a.debug.checkShaderErrors){const T=i.getProgramInfoLog(p).trim(),R=i.getShaderInfoLog(M).trim(),D=i.getShaderInfoLog(S).trim();let I=!0,z=!0;if(i.getProgramParameter(p,35714)===!1){I=!1;const C=To(i,M,"vertex"),B=To(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+C+`
`+B)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(R===""||D==="")&&(z=!1);z&&(this.diagnostics={runnable:I,programLog:T,vertexShader:{log:R,prefix:f},fragmentShader:{log:D,prefix:_}})}i.deleteShader(M),i.deleteShader(S);let L;this.getUniforms=function(){return L===void 0&&(L=new is(i,p)),L};let w;return this.getAttributes=function(){return w===void 0&&(w=Cu(i,p)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=wu++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=S,this}let Uu=0;class Gu{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new Wu(e);t.set(e,n)}return t.get(e)}}class Wu{constructor(e){this.id=Uu++,this.code=e,this.usedTimes=0}}function Vu(a,e,t,n,i,s,o){const r=new zs,c=new Gu,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let g=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(w,T,R,D,I){const z=D.fog,C=I.geometry,B=w.isMeshStandardMaterial?D.environment:null,P=(w.isMeshStandardMaterial?t:e).get(w.envMap||B),V=!!P&&P.mapping===306?P.image.height:null,G=m[w.type];w.precision!==null&&(g=i.getMaxPrecision(w.precision),g!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const O=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,X=O!==void 0?O.length:0;let Q=0;C.morphAttributes.position!==void 0&&(Q=1),C.morphAttributes.normal!==void 0&&(Q=2),C.morphAttributes.color!==void 0&&(Q=3);let U,J,te,ie;if(G){const Oe=Ut[G];U=Oe.vertexShader,J=Oe.fragmentShader}else U=w.vertexShader,J=w.fragmentShader,c.update(w),te=c.getVertexShaderID(w),ie=c.getFragmentShaderID(w);const H=a.getRenderTarget(),Ee=w.alphaTest>0,_e=w.clearcoat>0,ve=w.iridescence>0;return{isWebGL2:h,shaderID:G,shaderName:w.type,vertexShader:U,fragmentShader:J,defines:w.defines,customVertexShaderID:te,customFragmentShaderID:ie,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,instancing:I.isInstancedMesh===!0,instancingColor:I.isInstancedMesh===!0&&I.instanceColor!==null,supportsVertexTextures:u,outputEncoding:H===null?a.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:3e3,map:!!w.map,matcap:!!w.matcap,envMap:!!P,envMapMode:P&&P.mapping,envMapCubeUVHeight:V,lightMap:!!w.lightMap,aoMap:!!w.aoMap,emissiveMap:!!w.emissiveMap,bumpMap:!!w.bumpMap,normalMap:!!w.normalMap,objectSpaceNormalMap:w.normalMapType===1,tangentSpaceNormalMap:w.normalMapType===0,decodeVideoTexture:!!w.map&&w.map.isVideoTexture===!0&&w.map.encoding===3001,clearcoat:_e,clearcoatMap:_e&&!!w.clearcoatMap,clearcoatRoughnessMap:_e&&!!w.clearcoatRoughnessMap,clearcoatNormalMap:_e&&!!w.clearcoatNormalMap,iridescence:ve,iridescenceMap:ve&&!!w.iridescenceMap,iridescenceThicknessMap:ve&&!!w.iridescenceThicknessMap,displacementMap:!!w.displacementMap,roughnessMap:!!w.roughnessMap,metalnessMap:!!w.metalnessMap,specularMap:!!w.specularMap,specularIntensityMap:!!w.specularIntensityMap,specularColorMap:!!w.specularColorMap,opaque:w.transparent===!1&&w.blending===1,alphaMap:!!w.alphaMap,alphaTest:Ee,gradientMap:!!w.gradientMap,sheen:w.sheen>0,sheenColorMap:!!w.sheenColorMap,sheenRoughnessMap:!!w.sheenRoughnessMap,transmission:w.transmission>0,transmissionMap:!!w.transmissionMap,thicknessMap:!!w.thicknessMap,combine:w.combine,vertexTangents:!!w.normalMap&&!!C.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,vertexUvs:!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatMap||!!w.clearcoatRoughnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||!!w.displacementMap||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||!!w.sheenColorMap||!!w.sheenRoughnessMap,uvsVertexOnly:!(!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||w.transmission>0||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||w.sheen>0||!!w.sheenColorMap||!!w.sheenRoughnessMap)&&!!w.displacementMap,fog:!!z,useFog:w.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!w.flatShading,sizeAttenuation:w.sizeAttenuation,logarithmicDepthBuffer:d,skinning:I.isSkinnedMesh===!0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:Q,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:a.shadowMap.enabled&&R.length>0,shadowMapType:a.shadowMap.type,toneMapping:w.toneMapped?a.toneMapping:0,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===2,flipSided:w.side===1,useDepthPacking:!!w.depthPacking,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:w.extensions&&w.extensions.derivatives,extensionFragDepth:w.extensions&&w.extensions.fragDepth,extensionDrawBuffers:w.extensions&&w.extensions.drawBuffers,extensionShaderTextureLOD:w.extensions&&w.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function f(w){const T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)T.push(R),T.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(_(T,w),v(T,w),T.push(a.outputEncoding)),T.push(w.customProgramCacheKey),T.join()}function _(w,T){w.push(T.precision),w.push(T.outputEncoding),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.combine),w.push(T.vertexUvs),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function v(w,T){r.disableAll(),T.isWebGL2&&r.enable(0),T.supportsVertexTextures&&r.enable(1),T.instancing&&r.enable(2),T.instancingColor&&r.enable(3),T.map&&r.enable(4),T.matcap&&r.enable(5),T.envMap&&r.enable(6),T.lightMap&&r.enable(7),T.aoMap&&r.enable(8),T.emissiveMap&&r.enable(9),T.bumpMap&&r.enable(10),T.normalMap&&r.enable(11),T.objectSpaceNormalMap&&r.enable(12),T.tangentSpaceNormalMap&&r.enable(13),T.clearcoat&&r.enable(14),T.clearcoatMap&&r.enable(15),T.clearcoatRoughnessMap&&r.enable(16),T.clearcoatNormalMap&&r.enable(17),T.iridescence&&r.enable(18),T.iridescenceMap&&r.enable(19),T.iridescenceThicknessMap&&r.enable(20),T.displacementMap&&r.enable(21),T.specularMap&&r.enable(22),T.roughnessMap&&r.enable(23),T.metalnessMap&&r.enable(24),T.gradientMap&&r.enable(25),T.alphaMap&&r.enable(26),T.alphaTest&&r.enable(27),T.vertexColors&&r.enable(28),T.vertexAlphas&&r.enable(29),T.vertexUvs&&r.enable(30),T.vertexTangents&&r.enable(31),T.uvsVertexOnly&&r.enable(32),T.fog&&r.enable(33),w.push(r.mask),r.disableAll(),T.useFog&&r.enable(0),T.flatShading&&r.enable(1),T.logarithmicDepthBuffer&&r.enable(2),T.skinning&&r.enable(3),T.morphTargets&&r.enable(4),T.morphNormals&&r.enable(5),T.morphColors&&r.enable(6),T.premultipliedAlpha&&r.enable(7),T.shadowMapEnabled&&r.enable(8),T.physicallyCorrectLights&&r.enable(9),T.doubleSided&&r.enable(10),T.flipSided&&r.enable(11),T.useDepthPacking&&r.enable(12),T.dithering&&r.enable(13),T.specularIntensityMap&&r.enable(14),T.specularColorMap&&r.enable(15),T.transmission&&r.enable(16),T.transmissionMap&&r.enable(17),T.thicknessMap&&r.enable(18),T.sheen&&r.enable(19),T.sheenColorMap&&r.enable(20),T.sheenRoughnessMap&&r.enable(21),T.decodeVideoTexture&&r.enable(22),T.opaque&&r.enable(23),w.push(r.mask)}function y(w){const T=m[w.type];let R;if(T){const D=Ut[T];R=ll.clone(D.uniforms)}else R=w.uniforms;return R}function x(w,T){let R;for(let D=0,I=l.length;D<I;D++){const z=l[D];if(z.cacheKey===T){R=z,++R.usedTimes;break}}return R===void 0&&(R=new ku(a,T,w,s),l.push(R)),R}function M(w){if(--w.usedTimes===0){const T=l.indexOf(w);l[T]=l[l.length-1],l.pop(),w.destroy()}}function S(w){c.remove(w)}function L(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:y,acquireProgram:x,releaseProgram:M,releaseShaderCache:S,programs:l,dispose:L}}function Hu(){let a=new WeakMap;function e(s){let o=a.get(s);return o===void 0&&(o={},a.set(s,o)),o}function t(s){a.delete(s)}function n(s,o,r){a.get(s)[o]=r}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function qu(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Po(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Do(){const a=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(d,u,g,m,p,f){let _=a[e];return _===void 0?(_={id:d.id,object:d,geometry:u,material:g,groupOrder:m,renderOrder:d.renderOrder,z:p,group:f},a[e]=_):(_.id=d.id,_.object=d,_.geometry=u,_.material=g,_.groupOrder=m,_.renderOrder=d.renderOrder,_.z=p,_.group=f),e++,_}function r(d,u,g,m,p,f){const _=o(d,u,g,m,p,f);g.transmission>0?n.push(_):g.transparent===!0?i.push(_):t.push(_)}function c(d,u,g,m,p,f){const _=o(d,u,g,m,p,f);g.transmission>0?n.unshift(_):g.transparent===!0?i.unshift(_):t.unshift(_)}function l(d,u){t.length>1&&t.sort(d||qu),n.length>1&&n.sort(u||Po),i.length>1&&i.sort(u||Po)}function h(){for(let d=e,u=a.length;d<u;d++){const g=a[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:r,unshift:c,finish:h,sort:l}}function Xu(){let a=new WeakMap;function e(n,i){let s;return a.has(n)===!1?(s=new Do,a.set(n,[s])):i>=a.get(n).length?(s=new Do,a.get(n).push(s)):s=a.get(n)[i],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function ju(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new we};break;case"SpotLight":t={position:new N,direction:new N,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new N,halfWidth:new N,halfHeight:new N};break}return a[e.id]=t,t}}}function Yu(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let $u=0;function Zu(a,e){return(e.castShadow?1:0)-(a.castShadow?1:0)}function Ku(a,e){const t=new ju,n=Yu(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new N);const s=new N,o=new Ve,r=new Ve;function c(h,d){let u=0,g=0,m=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,f=0,_=0,v=0,y=0,x=0,M=0,S=0;h.sort(Zu);const L=d!==!0?Math.PI:1;for(let T=0,R=h.length;T<R;T++){const D=h[T],I=D.color,z=D.intensity,C=D.distance,B=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=I.r*z*L,g+=I.g*z*L,m+=I.b*z*L;else if(D.isLightProbe)for(let P=0;P<9;P++)i.probe[P].addScaledVector(D.sh.coefficients[P],z);else if(D.isDirectionalLight){const P=t.get(D);if(P.color.copy(D.color).multiplyScalar(D.intensity*L),D.castShadow){const V=D.shadow,G=n.get(D);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=D.shadow.matrix,x++}i.directional[p]=P,p++}else if(D.isSpotLight){const P=t.get(D);if(P.position.setFromMatrixPosition(D.matrixWorld),P.color.copy(I).multiplyScalar(z*L),P.distance=C,P.coneCos=Math.cos(D.angle),P.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),P.decay=D.decay,D.castShadow){const V=D.shadow,G=n.get(D);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=B,i.spotShadowMatrix[_]=D.shadow.matrix,S++}i.spot[_]=P,_++}else if(D.isRectAreaLight){const P=t.get(D);P.color.copy(I).multiplyScalar(z),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),i.rectArea[v]=P,v++}else if(D.isPointLight){const P=t.get(D);if(P.color.copy(D.color).multiplyScalar(D.intensity*L),P.distance=D.distance,P.decay=D.decay,D.castShadow){const V=D.shadow,G=n.get(D);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,G.shadowCameraNear=V.camera.near,G.shadowCameraFar=V.camera.far,i.pointShadow[f]=G,i.pointShadowMap[f]=B,i.pointShadowMatrix[f]=D.shadow.matrix,M++}i.point[f]=P,f++}else if(D.isHemisphereLight){const P=t.get(D);P.skyColor.copy(D.color).multiplyScalar(z*L),P.groundColor.copy(D.groundColor).multiplyScalar(z*L),i.hemi[y]=P,y++}}v>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=g,i.ambient[2]=m;const w=i.hash;(w.directionalLength!==p||w.pointLength!==f||w.spotLength!==_||w.rectAreaLength!==v||w.hemiLength!==y||w.numDirectionalShadows!==x||w.numPointShadows!==M||w.numSpotShadows!==S)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=v,i.point.length=f,i.hemi.length=y,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotShadowMatrix.length=S,w.directionalLength=p,w.pointLength=f,w.spotLength=_,w.rectAreaLength=v,w.hemiLength=y,w.numDirectionalShadows=x,w.numPointShadows=M,w.numSpotShadows=S,i.version=$u++)}function l(h,d){let u=0,g=0,m=0,p=0,f=0;const _=d.matrixWorldInverse;for(let v=0,y=h.length;v<y;v++){const x=h[v];if(x.isDirectionalLight){const M=i.directional[u];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),u++}else if(x.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),m++}else if(x.isRectAreaLight){const M=i.rectArea[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(_),r.identity(),o.copy(x.matrixWorld),o.premultiply(_),r.extractRotation(o),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),p++}else if(x.isPointLight){const M=i.point[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(_),g++}else if(x.isHemisphereLight){const M=i.hemi[f];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(_),f++}}}return{setup:c,setupView:l,state:i}}function Io(a,e){const t=new Ku(a,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function r(d){i.push(d)}function c(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:r}}function Ju(a,e){let t=new WeakMap;function n(s,o=0){let r;return t.has(s)===!1?(r=new Io(a,e),t.set(s,[r])):o>=t.get(s).length?(r=new Io(a,e),t.get(s).push(r)):r=t.get(s)[o],r}function i(){t=new WeakMap}return{get:n,dispose:i}}class Bo extends Kt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qu extends Kt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new N,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ed=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,td=`uniform sampler2D shadow_pass;
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
}`;function nd(a,e,t){let n=new Ys;const i=new ye,s=new ye,o=new Ue,r=new Bo({depthPacking:3201}),c=new Qu,l={},h=t.maxTextureSize,d={0:1,1:0,2:2},u=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:ed,fragmentShader:td}),g=u.clone();g.defines.HORIZONTAL_PASS=1;const m=new ht;m.setAttribute("position",new at(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Ge(m,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(x,M,S){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||x.length===0)return;const L=a.getRenderTarget(),w=a.getActiveCubeFace(),T=a.getActiveMipmapLevel(),R=a.state;R.setBlending(0),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let D=0,I=x.length;D<I;D++){const z=x[D],C=z.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;i.copy(C.mapSize);const B=C.getFrameExtents();if(i.multiply(B),s.copy(C.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/B.x),i.x=s.x*B.x,C.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/B.y),i.y=s.y*B.y,C.mapSize.y=s.y)),C.map===null){const V=this.type!==3?{minFilter:1003,magFilter:1003}:{};C.map=new xn(i.x,i.y,V),C.map.texture.name=z.name+".shadowMap",C.camera.updateProjectionMatrix()}a.setRenderTarget(C.map),a.clear();const P=C.getViewportCount();for(let V=0;V<P;V++){const G=C.getViewport(V);o.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),R.viewport(o),C.updateMatrices(z,V),n=C.getFrustum(),y(M,S,C.camera,z,this.type)}C.isPointLightShadow!==!0&&this.type===3&&_(C,S),C.needsUpdate=!1}f.needsUpdate=!1,a.setRenderTarget(L,w,T)};function _(x,M){const S=e.update(p);u.defines.VSM_SAMPLES!==x.blurSamples&&(u.defines.VSM_SAMPLES=x.blurSamples,g.defines.VSM_SAMPLES=x.blurSamples,u.needsUpdate=!0,g.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new xn(i.x,i.y)),u.uniforms.shadow_pass.value=x.map.texture,u.uniforms.resolution.value=x.mapSize,u.uniforms.radius.value=x.radius,a.setRenderTarget(x.mapPass),a.clear(),a.renderBufferDirect(M,null,S,u,p,null),g.uniforms.shadow_pass.value=x.mapPass.texture,g.uniforms.resolution.value=x.mapSize,g.uniforms.radius.value=x.radius,a.setRenderTarget(x.map),a.clear(),a.renderBufferDirect(M,null,S,g,p,null)}function v(x,M,S,L,w,T){let R=null;const D=S.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(D!==void 0?R=D:R=S.isPointLight===!0?c:r,a.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const I=R.uuid,z=M.uuid;let C=l[I];C===void 0&&(C={},l[I]=C);let B=C[z];B===void 0&&(B=R.clone(),C[z]=B),R=B}return R.visible=M.visible,R.wireframe=M.wireframe,T===3?R.side=M.shadowSide!==null?M.shadowSide:M.side:R.side=M.shadowSide!==null?M.shadowSide:d[M.side],R.alphaMap=M.alphaMap,R.alphaTest=M.alphaTest,R.clipShadows=M.clipShadows,R.clippingPlanes=M.clippingPlanes,R.clipIntersection=M.clipIntersection,R.displacementMap=M.displacementMap,R.displacementScale=M.displacementScale,R.displacementBias=M.displacementBias,R.wireframeLinewidth=M.wireframeLinewidth,R.linewidth=M.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(S.matrixWorld),R.nearDistance=L,R.farDistance=w),R}function y(x,M,S,L,w){if(x.visible===!1)return;if(x.layers.test(M.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&w===3)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,x.matrixWorld);const D=e.update(x),I=x.material;if(Array.isArray(I)){const z=D.groups;for(let C=0,B=z.length;C<B;C++){const P=z[C],V=I[P.materialIndex];if(V&&V.visible){const G=v(x,V,L,S.near,S.far,w);a.renderBufferDirect(S,null,D,G,x,P)}}}else if(I.visible){const z=v(x,I,L,S.near,S.far,w);a.renderBufferDirect(S,null,D,z,x,null)}}const R=x.children;for(let D=0,I=R.length;D<I;D++)y(R[D],M,S,L,w)}}function id(a,e,t){const n=t.isWebGL2;function i(){let k=!1;const he=new Ue;let $=null;const ce=new Ue(0,0,0,0);return{setMask:function(ae){$!==ae&&!k&&(a.colorMask(ae,ae,ae,ae),$=ae)},setLocked:function(ae){k=ae},setClear:function(ae,Pe,rt,Ye,mn){mn===!0&&(ae*=Ye,Pe*=Ye,rt*=Ye),he.set(ae,Pe,rt,Ye),ce.equals(he)===!1&&(a.clearColor(ae,Pe,rt,Ye),ce.copy(he))},reset:function(){k=!1,$=null,ce.set(-1,0,0,0)}}}function s(){let k=!1,he=null,$=null,ce=null;return{setTest:function(ae){ae?Ee(2929):_e(2929)},setMask:function(ae){he!==ae&&!k&&(a.depthMask(ae),he=ae)},setFunc:function(ae){if($!==ae){if(ae)switch(ae){case 0:a.depthFunc(512);break;case 1:a.depthFunc(519);break;case 2:a.depthFunc(513);break;case 3:a.depthFunc(515);break;case 4:a.depthFunc(514);break;case 5:a.depthFunc(518);break;case 6:a.depthFunc(516);break;case 7:a.depthFunc(517);break;default:a.depthFunc(515)}else a.depthFunc(515);$=ae}},setLocked:function(ae){k=ae},setClear:function(ae){ce!==ae&&(a.clearDepth(ae),ce=ae)},reset:function(){k=!1,he=null,$=null,ce=null}}}function o(){let k=!1,he=null,$=null,ce=null,ae=null,Pe=null,rt=null,Ye=null,mn=null;return{setTest:function(qe){k||(qe?Ee(2960):_e(2960))},setMask:function(qe){he!==qe&&!k&&(a.stencilMask(qe),he=qe)},setFunc:function(qe,sn,Rt){($!==qe||ce!==sn||ae!==Rt)&&(a.stencilFunc(qe,sn,Rt),$=qe,ce=sn,ae=Rt)},setOp:function(qe,sn,Rt){(Pe!==qe||rt!==sn||Ye!==Rt)&&(a.stencilOp(qe,sn,Rt),Pe=qe,rt=sn,Ye=Rt)},setLocked:function(qe){k=qe},setClear:function(qe){mn!==qe&&(a.clearStencil(qe),mn=qe)},reset:function(){k=!1,he=null,$=null,ce=null,ae=null,Pe=null,rt=null,Ye=null,mn=null}}}const r=new i,c=new s,l=new o,h=new WeakMap,d=new WeakMap;let u={},g={},m=new WeakMap,p=[],f=null,_=!1,v=null,y=null,x=null,M=null,S=null,L=null,w=null,T=!1,R=null,D=null,I=null,z=null,C=null;const B=a.getParameter(35661);let P=!1,V=0;const G=a.getParameter(7938);G.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(G)[1]),P=V>=1):G.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),P=V>=2);let O=null,X={};const Q=a.getParameter(3088),U=a.getParameter(2978),J=new Ue().fromArray(Q),te=new Ue().fromArray(U);function ie(k,he,$){const ce=new Uint8Array(4),ae=a.createTexture();a.bindTexture(k,ae),a.texParameteri(k,10241,9728),a.texParameteri(k,10240,9728);for(let Pe=0;Pe<$;Pe++)a.texImage2D(he+Pe,0,6408,1,1,0,6408,5121,ce);return ae}const H={};H[3553]=ie(3553,3553,1),H[34067]=ie(34067,34069,6),r.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ee(2929),c.setFunc(3),Fe(!1),He(1),Ee(2884),it(0);function Ee(k){u[k]!==!0&&(a.enable(k),u[k]=!0)}function _e(k){u[k]!==!1&&(a.disable(k),u[k]=!1)}function ve(k,he){return g[k]!==he?(a.bindFramebuffer(k,he),g[k]=he,n&&(k===36009&&(g[36160]=he),k===36160&&(g[36009]=he)),!0):!1}function le(k,he){let $=p,ce=!1;if(k)if($=m.get(he),$===void 0&&($=[],m.set(he,$)),k.isWebGLMultipleRenderTargets){const ae=k.texture;if($.length!==ae.length||$[0]!==36064){for(let Pe=0,rt=ae.length;Pe<rt;Pe++)$[Pe]=36064+Pe;$.length=ae.length,ce=!0}}else $[0]!==36064&&($[0]=36064,ce=!0);else $[0]!==1029&&($[0]=1029,ce=!0);ce&&(t.isWebGL2?a.drawBuffers($):e.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function Oe(k){return f!==k?(a.useProgram(k),f=k,!0):!1}const Me={[100]:32774,[101]:32778,[102]:32779};if(n)Me[103]=32775,Me[104]=32776;else{const k=e.get("EXT_blend_minmax");k!==null&&(Me[103]=k.MIN_EXT,Me[104]=k.MAX_EXT)}const ge={[200]:0,[201]:1,[202]:768,[204]:770,[210]:776,[208]:774,[206]:772,[203]:769,[205]:771,[209]:775,[207]:773};function it(k,he,$,ce,ae,Pe,rt,Ye){if(k===0){_===!0&&(_e(3042),_=!1);return}if(_===!1&&(Ee(3042),_=!0),k!==5){if(k!==v||Ye!==T){if((y!==100||S!==100)&&(a.blendEquation(32774),y=100,S=100),Ye)switch(k){case 1:a.blendFuncSeparate(1,771,1,771);break;case 2:a.blendFunc(1,1);break;case 3:a.blendFuncSeparate(0,769,0,1);break;case 4:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case 1:a.blendFuncSeparate(770,771,1,771);break;case 2:a.blendFunc(770,1);break;case 3:a.blendFuncSeparate(0,769,0,1);break;case 4:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}x=null,M=null,L=null,w=null,v=k,T=Ye}return}ae=ae||he,Pe=Pe||$,rt=rt||ce,(he!==y||ae!==S)&&(a.blendEquationSeparate(Me[he],Me[ae]),y=he,S=ae),($!==x||ce!==M||Pe!==L||rt!==w)&&(a.blendFuncSeparate(ge[$],ge[ce],ge[Pe],ge[rt]),x=$,M=ce,L=Pe,w=rt),v=k,T=null}function lt(k,he){k.side===2?_e(2884):Ee(2884);let $=k.side===1;he&&($=!$),Fe($),k.blending===1&&k.transparent===!1?it(0):it(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.premultipliedAlpha),c.setFunc(k.depthFunc),c.setTest(k.depthTest),c.setMask(k.depthWrite),r.setMask(k.colorWrite);const ce=k.stencilWrite;l.setTest(ce),ce&&(l.setMask(k.stencilWriteMask),l.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),l.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Be(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Ee(32926):_e(32926)}function Fe(k){R!==k&&(k?a.frontFace(2304):a.frontFace(2305),R=k)}function He(k){k!==0?(Ee(2884),k!==D&&(k===1?a.cullFace(1029):k===2?a.cullFace(1028):a.cullFace(1032))):_e(2884),D=k}function Je(k){k!==I&&(P&&a.lineWidth(k),I=k)}function Be(k,he,$){k?(Ee(32823),(z!==he||C!==$)&&(a.polygonOffset(he,$),z=he,C=$)):_e(32823)}function Lt(k){k?Ee(3089):_e(3089)}function Ft(k){k===void 0&&(k=33984+B-1),O!==k&&(a.activeTexture(k),O=k)}function F(k,he){O===null&&Ft();let $=X[O];$===void 0&&($={type:void 0,texture:void 0},X[O]=$),($.type!==k||$.texture!==he)&&(a.bindTexture(k,he||H[k]),$.type=k,$.texture=he)}function E(){const k=X[O];k!==void 0&&k.type!==void 0&&(a.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Z(){try{a.compressedTexImage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{a.texSubImage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{a.texSubImage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function be(){try{a.texStorage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function j(){try{a.texStorage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{a.texImage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{a.texImage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(k){J.equals(k)===!1&&(a.scissor(k.x,k.y,k.z,k.w),J.copy(k))}function fe(k){te.equals(k)===!1&&(a.viewport(k.x,k.y,k.z,k.w),te.copy(k))}function Te(k,he){let $=d.get(he);$===void 0&&($=new WeakMap,d.set(he,$));let ce=$.get(k);ce===void 0&&(ce=a.getUniformBlockIndex(he,k.name),$.set(k,ce))}function ze(k,he){const ce=d.get(he).get(k);h.get(k)!==ce&&(a.uniformBlockBinding(he,ce,k.__bindingPointIndex),h.set(k,ce))}function je(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},O=null,X={},g={},m=new WeakMap,p=[],f=null,_=!1,v=null,y=null,x=null,M=null,S=null,L=null,w=null,T=!1,R=null,D=null,I=null,z=null,C=null,J.set(0,0,a.canvas.width,a.canvas.height),te.set(0,0,a.canvas.width,a.canvas.height),r.reset(),c.reset(),l.reset()}return{buffers:{color:r,depth:c,stencil:l},enable:Ee,disable:_e,bindFramebuffer:ve,drawBuffers:le,useProgram:Oe,setBlending:it,setMaterial:lt,setFlipSided:Fe,setCullFace:He,setLineWidth:Je,setPolygonOffset:Be,setScissorTest:Lt,activeTexture:Ft,bindTexture:F,unbindTexture:E,compressedTexImage2D:Z,texImage2D:me,texImage3D:de,updateUBOMapping:Te,uniformBlockBinding:ze,texStorage2D:be,texStorage3D:j,texSubImage2D:ee,texSubImage3D:ne,compressedTexSubImage2D:se,scissor:pe,viewport:fe,reset:je}}function sd(a,e,t,n,i,s,o){const r=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let p;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(F,E){return _?new OffscreenCanvas(F,E):Ii("canvas")}function y(F,E,Z,ee){let ne=1;if((F.width>ee||F.height>ee)&&(ne=ee/Math.max(F.width,F.height)),ne<1||E===!0)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap){const se=E?Ss:Math.floor,be=se(ne*F.width),j=se(ne*F.height);p===void 0&&(p=v(be,j));const me=Z?v(be,j):p;return me.width=be,me.height=j,me.getContext("2d").drawImage(F,0,0,be,j),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+be+"x"+j+")."),me}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),F;return F}function x(F){return Ur(F.width)&&Ur(F.height)}function M(F){return r?!1:F.wrapS!==1001||F.wrapT!==1001||F.minFilter!==1003&&F.minFilter!==1006}function S(F,E){return F.generateMipmaps&&E&&F.minFilter!==1003&&F.minFilter!==1006}function L(F){a.generateMipmap(F)}function w(F,E,Z,ee,ne=!1){if(r===!1)return E;if(F!==null){if(a[F]!==void 0)return a[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let se=E;return E===6403&&(Z===5126&&(se=33326),Z===5131&&(se=33325),Z===5121&&(se=33321)),E===33319&&(Z===5126&&(se=33328),Z===5131&&(se=33327),Z===5121&&(se=33323)),E===6408&&(Z===5126&&(se=34836),Z===5131&&(se=34842),Z===5121&&(se=ee===3001&&ne===!1?35907:32856),Z===32819&&(se=32854),Z===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function T(F,E,Z){return S(F,Z)===!0||F.isFramebufferTexture&&F.minFilter!==1003&&F.minFilter!==1006?Math.log2(Math.max(E.width,E.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?E.mipmaps.length:1}function R(F){return F===1003||F===1004||F===1005?9728:9729}function D(F){const E=F.target;E.removeEventListener("dispose",D),z(E),E.isVideoTexture&&m.delete(E)}function I(F){const E=F.target;E.removeEventListener("dispose",I),B(E)}function z(F){const E=n.get(F);if(E.__webglInit===void 0)return;const Z=F.source,ee=f.get(Z);if(ee){const ne=ee[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&C(F),Object.keys(ee).length===0&&f.delete(Z)}n.remove(F)}function C(F){const E=n.get(F);a.deleteTexture(E.__webglTexture);const Z=F.source,ee=f.get(Z);delete ee[E.__cacheKey],o.memory.textures--}function B(F){const E=F.texture,Z=n.get(F),ee=n.get(E);if(ee.__webglTexture!==void 0&&(a.deleteTexture(ee.__webglTexture),o.memory.textures--),F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)a.deleteFramebuffer(Z.__webglFramebuffer[ne]),Z.__webglDepthbuffer&&a.deleteRenderbuffer(Z.__webglDepthbuffer[ne]);else{if(a.deleteFramebuffer(Z.__webglFramebuffer),Z.__webglDepthbuffer&&a.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&a.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let ne=0;ne<Z.__webglColorRenderbuffer.length;ne++)Z.__webglColorRenderbuffer[ne]&&a.deleteRenderbuffer(Z.__webglColorRenderbuffer[ne]);Z.__webglDepthRenderbuffer&&a.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(F.isWebGLMultipleRenderTargets)for(let ne=0,se=E.length;ne<se;ne++){const be=n.get(E[ne]);be.__webglTexture&&(a.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(E[ne])}n.remove(E),n.remove(F)}let P=0;function V(){P=0}function G(){const F=P;return F>=c&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+c),P+=1,F}function O(F){const E=[];return E.push(F.wrapS),E.push(F.wrapT),E.push(F.magFilter),E.push(F.minFilter),E.push(F.anisotropy),E.push(F.internalFormat),E.push(F.format),E.push(F.type),E.push(F.generateMipmaps),E.push(F.premultiplyAlpha),E.push(F.flipY),E.push(F.unpackAlignment),E.push(F.encoding),E.join()}function X(F,E){const Z=n.get(F);if(F.isVideoTexture&&Lt(F),F.isRenderTargetTexture===!1&&F.version>0&&Z.__version!==F.version){const ee=F.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(Z,F,E);return}}t.activeTexture(33984+E),t.bindTexture(3553,Z.__webglTexture)}function Q(F,E){const Z=n.get(F);if(F.version>0&&Z.__version!==F.version){_e(Z,F,E);return}t.activeTexture(33984+E),t.bindTexture(35866,Z.__webglTexture)}function U(F,E){const Z=n.get(F);if(F.version>0&&Z.__version!==F.version){_e(Z,F,E);return}t.activeTexture(33984+E),t.bindTexture(32879,Z.__webglTexture)}function J(F,E){const Z=n.get(F);if(F.version>0&&Z.__version!==F.version){ve(Z,F,E);return}t.activeTexture(33984+E),t.bindTexture(34067,Z.__webglTexture)}const te={[1e3]:10497,[1001]:33071,[1002]:33648},ie={[1003]:9728,[1004]:9984,[1005]:9986,[1006]:9729,[1007]:9985,[1008]:9987};function H(F,E,Z){if(Z?(a.texParameteri(F,10242,te[E.wrapS]),a.texParameteri(F,10243,te[E.wrapT]),(F===32879||F===35866)&&a.texParameteri(F,32882,te[E.wrapR]),a.texParameteri(F,10240,ie[E.magFilter]),a.texParameteri(F,10241,ie[E.minFilter])):(a.texParameteri(F,10242,33071),a.texParameteri(F,10243,33071),(F===32879||F===35866)&&a.texParameteri(F,32882,33071),(E.wrapS!==1001||E.wrapT!==1001)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(F,10240,R(E.magFilter)),a.texParameteri(F,10241,R(E.minFilter)),E.minFilter!==1003&&E.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(E.type===1015&&e.has("OES_texture_float_linear")===!1||r===!1&&E.type===1016&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(a.texParameterf(F,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function Ee(F,E){let Z=!1;F.__webglInit===void 0&&(F.__webglInit=!0,E.addEventListener("dispose",D));const ee=E.source;let ne=f.get(ee);ne===void 0&&(ne={},f.set(ee,ne));const se=O(E);if(se!==F.__cacheKey){ne[se]===void 0&&(ne[se]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),ne[se].usedTimes++;const be=ne[F.__cacheKey];be!==void 0&&(ne[F.__cacheKey].usedTimes--,be.usedTimes===0&&C(E)),F.__cacheKey=se,F.__webglTexture=ne[se].texture}return Z}function _e(F,E,Z){let ee=3553;E.isDataArrayTexture&&(ee=35866),E.isData3DTexture&&(ee=32879);const ne=Ee(F,E),se=E.source;if(t.activeTexture(33984+Z),t.bindTexture(ee,F.__webglTexture),se.version!==se.__currentVersion||ne===!0){a.pixelStorei(37440,E.flipY),a.pixelStorei(37441,E.premultiplyAlpha),a.pixelStorei(3317,E.unpackAlignment),a.pixelStorei(37443,0);const be=M(E)&&x(E.image)===!1;let j=y(E.image,be,!1,h);j=Ft(E,j);const me=x(j)||r,de=s.convert(E.format,E.encoding);let pe=s.convert(E.type),fe=w(E.internalFormat,de,pe,E.encoding,E.isVideoTexture);H(ee,E,me);let Te;const ze=E.mipmaps,je=r&&E.isVideoTexture!==!0,k=se.__currentVersion===void 0||ne===!0,he=T(E,j,me);if(E.isDepthTexture)fe=6402,r?E.type===1015?fe=36012:E.type===1014?fe=33190:E.type===1020?fe=35056:fe=33189:E.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===1026&&fe===6402&&E.type!==1012&&E.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=1014,pe=s.convert(E.type)),E.format===1027&&fe===6402&&(fe=34041,E.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=1020,pe=s.convert(E.type))),k&&(je?t.texStorage2D(3553,1,fe,j.width,j.height):t.texImage2D(3553,0,fe,j.width,j.height,0,de,pe,null));else if(E.isDataTexture)if(ze.length>0&&me){je&&k&&t.texStorage2D(3553,he,fe,ze[0].width,ze[0].height);for(let $=0,ce=ze.length;$<ce;$++)Te=ze[$],je?t.texSubImage2D(3553,$,0,0,Te.width,Te.height,de,pe,Te.data):t.texImage2D(3553,$,fe,Te.width,Te.height,0,de,pe,Te.data);E.generateMipmaps=!1}else je?(k&&t.texStorage2D(3553,he,fe,j.width,j.height),t.texSubImage2D(3553,0,0,0,j.width,j.height,de,pe,j.data)):t.texImage2D(3553,0,fe,j.width,j.height,0,de,pe,j.data);else if(E.isCompressedTexture){je&&k&&t.texStorage2D(3553,he,fe,ze[0].width,ze[0].height);for(let $=0,ce=ze.length;$<ce;$++)Te=ze[$],E.format!==1023?de!==null?je?t.compressedTexSubImage2D(3553,$,0,0,Te.width,Te.height,de,Te.data):t.compressedTexImage2D(3553,$,fe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(3553,$,0,0,Te.width,Te.height,de,pe,Te.data):t.texImage2D(3553,$,fe,Te.width,Te.height,0,de,pe,Te.data)}else if(E.isDataArrayTexture)je?(k&&t.texStorage3D(35866,he,fe,j.width,j.height,j.depth),t.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,de,pe,j.data)):t.texImage3D(35866,0,fe,j.width,j.height,j.depth,0,de,pe,j.data);else if(E.isData3DTexture)je?(k&&t.texStorage3D(32879,he,fe,j.width,j.height,j.depth),t.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,de,pe,j.data)):t.texImage3D(32879,0,fe,j.width,j.height,j.depth,0,de,pe,j.data);else if(E.isFramebufferTexture){if(k)if(je)t.texStorage2D(3553,he,fe,j.width,j.height);else{let $=j.width,ce=j.height;for(let ae=0;ae<he;ae++)t.texImage2D(3553,ae,fe,$,ce,0,de,pe,null),$>>=1,ce>>=1}}else if(ze.length>0&&me){je&&k&&t.texStorage2D(3553,he,fe,ze[0].width,ze[0].height);for(let $=0,ce=ze.length;$<ce;$++)Te=ze[$],je?t.texSubImage2D(3553,$,0,0,de,pe,Te):t.texImage2D(3553,$,fe,de,pe,Te);E.generateMipmaps=!1}else je?(k&&t.texStorage2D(3553,he,fe,j.width,j.height),t.texSubImage2D(3553,0,0,0,de,pe,j)):t.texImage2D(3553,0,fe,de,pe,j);S(E,me)&&L(ee),se.__currentVersion=se.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function ve(F,E,Z){if(E.image.length!==6)return;const ee=Ee(F,E),ne=E.source;if(t.activeTexture(33984+Z),t.bindTexture(34067,F.__webglTexture),ne.version!==ne.__currentVersion||ee===!0){a.pixelStorei(37440,E.flipY),a.pixelStorei(37441,E.premultiplyAlpha),a.pixelStorei(3317,E.unpackAlignment),a.pixelStorei(37443,0);const se=E.isCompressedTexture||E.image[0].isCompressedTexture,be=E.image[0]&&E.image[0].isDataTexture,j=[];for(let $=0;$<6;$++)!se&&!be?j[$]=y(E.image[$],!1,!0,l):j[$]=be?E.image[$].image:E.image[$],j[$]=Ft(E,j[$]);const me=j[0],de=x(me)||r,pe=s.convert(E.format,E.encoding),fe=s.convert(E.type),Te=w(E.internalFormat,pe,fe,E.encoding),ze=r&&E.isVideoTexture!==!0,je=ne.__currentVersion===void 0||ee===!0;let k=T(E,me,de);H(34067,E,de);let he;if(se){ze&&je&&t.texStorage2D(34067,k,Te,me.width,me.height);for(let $=0;$<6;$++){he=j[$].mipmaps;for(let ce=0;ce<he.length;ce++){const ae=he[ce];E.format!==1023?pe!==null?ze?t.compressedTexSubImage2D(34069+$,ce,0,0,ae.width,ae.height,pe,ae.data):t.compressedTexImage2D(34069+$,ce,Te,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?t.texSubImage2D(34069+$,ce,0,0,ae.width,ae.height,pe,fe,ae.data):t.texImage2D(34069+$,ce,Te,ae.width,ae.height,0,pe,fe,ae.data)}}}else{he=E.mipmaps,ze&&je&&(he.length>0&&k++,t.texStorage2D(34067,k,Te,j[0].width,j[0].height));for(let $=0;$<6;$++)if(be){ze?t.texSubImage2D(34069+$,0,0,0,j[$].width,j[$].height,pe,fe,j[$].data):t.texImage2D(34069+$,0,Te,j[$].width,j[$].height,0,pe,fe,j[$].data);for(let ce=0;ce<he.length;ce++){const Pe=he[ce].image[$].image;ze?t.texSubImage2D(34069+$,ce+1,0,0,Pe.width,Pe.height,pe,fe,Pe.data):t.texImage2D(34069+$,ce+1,Te,Pe.width,Pe.height,0,pe,fe,Pe.data)}}else{ze?t.texSubImage2D(34069+$,0,0,0,pe,fe,j[$]):t.texImage2D(34069+$,0,Te,pe,fe,j[$]);for(let ce=0;ce<he.length;ce++){const ae=he[ce];ze?t.texSubImage2D(34069+$,ce+1,0,0,pe,fe,ae.image[$]):t.texImage2D(34069+$,ce+1,Te,pe,fe,ae.image[$])}}}S(E,de)&&L(34067),ne.__currentVersion=ne.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function le(F,E,Z,ee,ne){const se=s.convert(Z.format,Z.encoding),be=s.convert(Z.type),j=w(Z.internalFormat,se,be,Z.encoding);n.get(E).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,j,E.width,E.height,E.depth,0,se,be,null):t.texImage2D(ne,0,j,E.width,E.height,0,se,be,null)),t.bindFramebuffer(36160,F),Be(E)?u.framebufferTexture2DMultisampleEXT(36160,ee,ne,n.get(Z).__webglTexture,0,Je(E)):a.framebufferTexture2D(36160,ee,ne,n.get(Z).__webglTexture,0),t.bindFramebuffer(36160,null)}function Oe(F,E,Z){if(a.bindRenderbuffer(36161,F),E.depthBuffer&&!E.stencilBuffer){let ee=33189;if(Z||Be(E)){const ne=E.depthTexture;ne&&ne.isDepthTexture&&(ne.type===1015?ee=36012:ne.type===1014&&(ee=33190));const se=Je(E);Be(E)?u.renderbufferStorageMultisampleEXT(36161,se,ee,E.width,E.height):a.renderbufferStorageMultisample(36161,se,ee,E.width,E.height)}else a.renderbufferStorage(36161,ee,E.width,E.height);a.framebufferRenderbuffer(36160,36096,36161,F)}else if(E.depthBuffer&&E.stencilBuffer){const ee=Je(E);Z&&Be(E)===!1?a.renderbufferStorageMultisample(36161,ee,35056,E.width,E.height):Be(E)?u.renderbufferStorageMultisampleEXT(36161,ee,35056,E.width,E.height):a.renderbufferStorage(36161,34041,E.width,E.height),a.framebufferRenderbuffer(36160,33306,36161,F)}else{const ee=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ne=0;ne<ee.length;ne++){const se=ee[ne],be=s.convert(se.format,se.encoding),j=s.convert(se.type),me=w(se.internalFormat,be,j,se.encoding),de=Je(E);Z&&Be(E)===!1?a.renderbufferStorageMultisample(36161,de,me,E.width,E.height):Be(E)?u.renderbufferStorageMultisampleEXT(36161,de,me,E.width,E.height):a.renderbufferStorage(36161,me,E.width,E.height)}}a.bindRenderbuffer(36161,null)}function Me(F,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,F),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const ee=n.get(E.depthTexture).__webglTexture,ne=Je(E);if(E.depthTexture.format===1026)Be(E)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,ne):a.framebufferTexture2D(36160,36096,3553,ee,0);else if(E.depthTexture.format===1027)Be(E)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,ne):a.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function ge(F){const E=n.get(F),Z=F.isWebGLCubeRenderTarget===!0;if(F.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Me(E.__webglFramebuffer,F)}else if(Z){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]=a.createRenderbuffer(),Oe(E.__webglDepthbuffer[ee],F,!1)}else t.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=a.createRenderbuffer(),Oe(E.__webglDepthbuffer,F,!1);t.bindFramebuffer(36160,null)}function it(F,E,Z){const ee=n.get(F);E!==void 0&&le(ee.__webglFramebuffer,F,F.texture,36064,3553),Z!==void 0&&ge(F)}function lt(F){const E=F.texture,Z=n.get(F),ee=n.get(E);F.addEventListener("dispose",I),F.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=a.createTexture()),ee.__version=E.version,o.memory.textures++);const ne=F.isWebGLCubeRenderTarget===!0,se=F.isWebGLMultipleRenderTargets===!0,be=x(F)||r;if(ne){Z.__webglFramebuffer=[];for(let j=0;j<6;j++)Z.__webglFramebuffer[j]=a.createFramebuffer()}else{if(Z.__webglFramebuffer=a.createFramebuffer(),se)if(i.drawBuffers){const j=F.texture;for(let me=0,de=j.length;me<de;me++){const pe=n.get(j[me]);pe.__webglTexture===void 0&&(pe.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&F.samples>0&&Be(F)===!1){const j=se?E:[E];Z.__webglMultisampledFramebuffer=a.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,Z.__webglMultisampledFramebuffer);for(let me=0;me<j.length;me++){const de=j[me];Z.__webglColorRenderbuffer[me]=a.createRenderbuffer(),a.bindRenderbuffer(36161,Z.__webglColorRenderbuffer[me]);const pe=s.convert(de.format,de.encoding),fe=s.convert(de.type),Te=w(de.internalFormat,pe,fe,de.encoding),ze=Je(F);a.renderbufferStorageMultisample(36161,ze,Te,F.width,F.height),a.framebufferRenderbuffer(36160,36064+me,36161,Z.__webglColorRenderbuffer[me])}a.bindRenderbuffer(36161,null),F.depthBuffer&&(Z.__webglDepthRenderbuffer=a.createRenderbuffer(),Oe(Z.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,ee.__webglTexture),H(34067,E,be);for(let j=0;j<6;j++)le(Z.__webglFramebuffer[j],F,E,36064,34069+j);S(E,be)&&L(34067),t.unbindTexture()}else if(se){const j=F.texture;for(let me=0,de=j.length;me<de;me++){const pe=j[me],fe=n.get(pe);t.bindTexture(3553,fe.__webglTexture),H(3553,pe,be),le(Z.__webglFramebuffer,F,pe,36064+me,3553),S(pe,be)&&L(3553)}t.unbindTexture()}else{let j=3553;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(r?j=F.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(j,ee.__webglTexture),H(j,E,be),le(Z.__webglFramebuffer,F,E,36064,j),S(E,be)&&L(j),t.unbindTexture()}F.depthBuffer&&ge(F)}function Fe(F){const E=x(F)||r,Z=F.isWebGLMultipleRenderTargets===!0?F.texture:[F.texture];for(let ee=0,ne=Z.length;ee<ne;ee++){const se=Z[ee];if(S(se,E)){const be=F.isWebGLCubeRenderTarget?34067:3553,j=n.get(se).__webglTexture;t.bindTexture(be,j),L(be),t.unbindTexture()}}}function He(F){if(r&&F.samples>0&&Be(F)===!1){const E=F.isWebGLMultipleRenderTargets?F.texture:[F.texture],Z=F.width,ee=F.height;let ne=16384;const se=[],be=F.stencilBuffer?33306:36096,j=n.get(F),me=F.isWebGLMultipleRenderTargets===!0;if(me)for(let de=0;de<E.length;de++)t.bindFramebuffer(36160,j.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+de,36161,null),t.bindFramebuffer(36160,j.__webglFramebuffer),a.framebufferTexture2D(36009,36064+de,3553,null,0);t.bindFramebuffer(36008,j.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,j.__webglFramebuffer);for(let de=0;de<E.length;de++){se.push(36064+de),F.depthBuffer&&se.push(be);const pe=j.__ignoreDepthValues!==void 0?j.__ignoreDepthValues:!1;if(pe===!1&&(F.depthBuffer&&(ne|=256),F.stencilBuffer&&(ne|=1024)),me&&a.framebufferRenderbuffer(36008,36064,36161,j.__webglColorRenderbuffer[de]),pe===!0&&(a.invalidateFramebuffer(36008,[be]),a.invalidateFramebuffer(36009,[be])),me){const fe=n.get(E[de]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,fe,0)}a.blitFramebuffer(0,0,Z,ee,0,0,Z,ee,ne,9728),g&&a.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),me)for(let de=0;de<E.length;de++){t.bindFramebuffer(36160,j.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+de,36161,j.__webglColorRenderbuffer[de]);const pe=n.get(E[de]).__webglTexture;t.bindFramebuffer(36160,j.__webglFramebuffer),a.framebufferTexture2D(36009,36064+de,3553,pe,0)}t.bindFramebuffer(36009,j.__webglMultisampledFramebuffer)}}function Je(F){return Math.min(d,F.samples)}function Be(F){const E=n.get(F);return r&&F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Lt(F){const E=o.render.frame;m.get(F)!==E&&(m.set(F,E),F.update())}function Ft(F,E){const Z=F.encoding,ee=F.format,ne=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||F.format===1035||Z!==3e3&&(Z===3001?r===!1?e.has("EXT_sRGB")===!0&&ee===1023?(F.format=1035,F.minFilter=1006,F.generateMipmaps=!1):E=Vr.sRGBToLinear(E):(ee!==1023||ne!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Z)),E}this.allocateTextureUnit=G,this.resetTextureUnits=V,this.setTexture2D=X,this.setTexture2DArray=Q,this.setTexture3D=U,this.setTextureCube=J,this.rebindTextures=it,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Be}function rd(a,e,t){const n=t.isWebGL2;function i(s,o=null){let r;if(s===1009)return 5121;if(s===1017)return 32819;if(s===1018)return 32820;if(s===1010)return 5120;if(s===1011)return 5122;if(s===1012)return 5123;if(s===1013)return 5124;if(s===1014)return 5125;if(s===1015)return 5126;if(s===1016)return n?5131:(r=e.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===1021)return 6406;if(s===1023)return 6408;if(s===1024)return 6409;if(s===1025)return 6410;if(s===1026)return 6402;if(s===1027)return 34041;if(s===1028)return 6403;if(s===1022)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===1035)return r=e.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(s===1029)return 36244;if(s===1030)return 33319;if(s===1031)return 33320;if(s===1033)return 36249;if(s===33776||s===33777||s===33778||s===33779)if(o===3001)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(s===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===35840||s===35841||s===35842||s===35843)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===36196)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===37492||s===37496)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(s===37492)return o===3001?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(s===37496)return o===3001?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===37808||s===37809||s===37810||s===37811||s===37812||s===37813||s===37814||s===37815||s===37816||s===37817||s===37818||s===37819||s===37820||s===37821)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(s===37808)return o===3001?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===37809)return o===3001?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===37810)return o===3001?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===37811)return o===3001?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===37812)return o===3001?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===37813)return o===3001?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===37814)return o===3001?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===37815)return o===3001?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===37816)return o===3001?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===37817)return o===3001?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===37818)return o===3001?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===37819)return o===3001?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===37820)return o===3001?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===37821)return o===3001?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===36492)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(s===36492)return o===3001?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===1020?n?34042:(r=e.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:i}}class od extends gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ss extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ad={type:"move"};class nr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const r=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const p of e.hand.values()){const f=t.getJointPose(p,n);if(l.joints[p.jointName]===void 0){const v=new ss;v.matrixAutoUpdate=!1,v.visible=!1,l.joints[p.jointName]=v,l.add(v)}const _=l.joints[p.jointName];f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=f.radius),_.visible=f!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),g=.02,m=.005;l.inputState.pinching&&u>g+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=g-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));r!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(ad)))}return r!==null&&(r.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}}class ld extends yt{constructor(e,t,n,i,s,o,r,c,l,h){if(h=h!==void 0?h:1026,h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===1026&&(n=1014),n===void 0&&h===1027&&(n=1020),super(null,i,s,o,r,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=r!==void 0?r:1003,this.minFilter=c!==void 0?c:1003,this.flipY=!1,this.generateMipmaps=!1}}class cd extends Dn{constructor(e,t){super();const n=this;let i=null,s=1,o=null,r="local-floor",c=null,l=null,h=null,d=null,u=null,g=null;const m=t.getContextAttributes();let p=null,f=null;const _=[],v=[],y=new gt;y.layers.enable(1),y.viewport=new Ue;const x=new gt;x.layers.enable(2),x.viewport=new Ue;const M=[y,x],S=new od;S.layers.enable(1),S.layers.enable(2);let L=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let X=_[O];return X===void 0&&(X=new nr,_[O]=X),X.getTargetRaySpace()},this.getControllerGrip=function(O){let X=_[O];return X===void 0&&(X=new nr,_[O]=X),X.getGripSpace()},this.getHand=function(O){let X=_[O];return X===void 0&&(X=new nr,_[O]=X),X.getHandSpace()};function T(O){const X=v.indexOf(O.inputSource);if(X===-1)return;const Q=_[X];Q!==void 0&&Q.dispatchEvent({type:O.type,data:O.inputSource})}function R(){i.removeEventListener("select",T),i.removeEventListener("selectstart",T),i.removeEventListener("selectend",T),i.removeEventListener("squeeze",T),i.removeEventListener("squeezestart",T),i.removeEventListener("squeezeend",T),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",D);for(let O=0;O<_.length;O++){const X=v[O];X!==null&&(v[O]=null,_[O].disconnect(X))}L=null,w=null,e.setRenderTarget(p),u=null,d=null,h=null,i=null,f=null,G.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",R),i.addEventListener("inputsourceschange",D),m.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,t,X),i.updateRenderState({baseLayer:u}),f=new xn(u.framebufferWidth,u.framebufferHeight,{format:1023,type:1009,encoding:e.outputEncoding})}else{let X=null,Q=null,U=null;m.depth&&(U=m.stencil?35056:33190,X=m.stencil?1027:1026,Q=m.stencil?1020:1014);const J={colorFormat:32856,depthFormat:U,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(J),i.updateRenderState({layers:[d]}),f=new xn(d.textureWidth,d.textureHeight,{format:1023,type:1009,depthTexture:new ld(d.textureWidth,d.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:m.stencil,encoding:e.outputEncoding,samples:m.antialias?4:0});const te=e.properties.get(f);te.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await i.requestReferenceSpace(r),G.setContext(i),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function D(O){for(let X=0;X<O.removed.length;X++){const Q=O.removed[X],U=v.indexOf(Q);U>=0&&(v[U]=null,_[U].dispatchEvent({type:"disconnected",data:Q}))}for(let X=0;X<O.added.length;X++){const Q=O.added[X];let U=v.indexOf(Q);if(U===-1){for(let te=0;te<_.length;te++)if(te>=v.length){v.push(Q),U=te;break}else if(v[te]===null){v[te]=Q,U=te;break}if(U===-1)break}const J=_[U];J&&J.dispatchEvent({type:"connected",data:Q})}}const I=new N,z=new N;function C(O,X,Q){I.setFromMatrixPosition(X.matrixWorld),z.setFromMatrixPosition(Q.matrixWorld);const U=I.distanceTo(z),J=X.projectionMatrix.elements,te=Q.projectionMatrix.elements,ie=J[14]/(J[10]-1),H=J[14]/(J[10]+1),Ee=(J[9]+1)/J[5],_e=(J[9]-1)/J[5],ve=(J[8]-1)/J[0],le=(te[8]+1)/te[0],Oe=ie*ve,Me=ie*le,ge=U/(-ve+le),it=ge*-ve;X.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(it),O.translateZ(ge),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const lt=ie+ge,Fe=H+ge,He=Oe-it,Je=Me+(U-it),Be=Ee*H/Fe*lt,Lt=_e*H/Fe*lt;O.projectionMatrix.makePerspective(He,Je,Be,Lt,lt,Fe)}function B(O,X){X===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(X.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;S.near=x.near=y.near=O.near,S.far=x.far=y.far=O.far,(L!==S.near||w!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,w=S.far);const X=O.parent,Q=S.cameras;B(S,X);for(let J=0;J<Q.length;J++)B(Q[J],X);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),O.position.copy(S.position),O.quaternion.copy(S.quaternion),O.scale.copy(S.scale),O.matrix.copy(S.matrix),O.matrixWorld.copy(S.matrixWorld);const U=O.children;for(let J=0,te=U.length;J<te;J++)U[J].updateMatrixWorld(!0);Q.length===2?C(S,y,x):S.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(u!==null)return u.fixedFoveation},this.setFoveation=function(O){d!==null&&(d.fixedFoveation=O),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=O)};let P=null;function V(O,X){if(l=X.getViewerPose(c||o),g=X,l!==null){const Q=l.views;u!==null&&(e.setRenderTargetFramebuffer(f,u.framebuffer),e.setRenderTarget(f));let U=!1;Q.length!==S.cameras.length&&(S.cameras.length=0,U=!0);for(let J=0;J<Q.length;J++){const te=Q[J];let ie=null;if(u!==null)ie=u.getViewport(te);else{const Ee=h.getViewSubImage(d,te);ie=Ee.viewport,J===0&&(e.setRenderTargetTextures(f,Ee.colorTexture,d.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(f))}let H=M[J];H===void 0&&(H=new gt,H.layers.enable(J),H.viewport=new Ue,M[J]=H),H.matrix.fromArray(te.transform.matrix),H.projectionMatrix.fromArray(te.projectionMatrix),H.viewport.set(ie.x,ie.y,ie.width,ie.height),J===0&&S.matrix.copy(H.matrix),U===!0&&S.cameras.push(H)}}for(let Q=0;Q<_.length;Q++){const U=v[Q],J=_[Q];U!==null&&J!==void 0&&J.update(U,X,c||o)}P&&P(O,X),g=null}const G=new ao;G.setAnimationLoop(V),this.setAnimationLoop=function(O){P=O},this.dispose=function(){}}}function hd(a,e){function t(p,f){p.fogColor.value.copy(f.color),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,_,v,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),h(p,f)):f.isMeshPhongMaterial?(i(p,f),l(p,f)):f.isMeshStandardMaterial?(i(p,f),d(p,f),f.isMeshPhysicalMaterial&&u(p,f,y)):f.isMeshMatcapMaterial?(i(p,f),g(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),m(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?r(p,f,_,v):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===1&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===1&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const x=a.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*x}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let v;f.map?v=f.map:f.specularMap?v=f.specularMap:f.displacementMap?v=f.displacementMap:f.normalMap?v=f.normalMap:f.bumpMap?v=f.bumpMap:f.roughnessMap?v=f.roughnessMap:f.metalnessMap?v=f.metalnessMap:f.alphaMap?v=f.alphaMap:f.emissiveMap?v=f.emissiveMap:f.clearcoatMap?v=f.clearcoatMap:f.clearcoatNormalMap?v=f.clearcoatNormalMap:f.clearcoatRoughnessMap?v=f.clearcoatRoughnessMap:f.iridescenceMap?v=f.iridescenceMap:f.iridescenceThicknessMap?v=f.iridescenceThicknessMap:f.specularIntensityMap?v=f.specularIntensityMap:f.specularColorMap?v=f.specularColorMap:f.transmissionMap?v=f.transmissionMap:f.thicknessMap?v=f.thicknessMap:f.sheenColorMap?v=f.sheenColorMap:f.sheenRoughnessMap&&(v=f.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let y;f.aoMap?y=f.aoMap:f.lightMap&&(y=f.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function r(p,f,_,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*_,p.scale.value=v*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let y;f.map?y=f.map:f.alphaMap&&(y=f.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function u(p,f,_){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===1&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function m(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function ud(a,e,t,n){let i={},s={},o=[];const r=t.isWebGL2?a.getParameter(35375):0;function c(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function l(v,y){let x=i[v.id];x===void 0&&(m(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",f));const M=y.program;n.updateUBOMapping(v,M);const S=e.render.frame;s[v.id]!==S&&(u(v),s[v.id]=S)}function h(v){const y=d();v.__bindingPointIndex=y;const x=a.createBuffer(),M=v.__size,S=v.usage;return a.bindBuffer(35345,x),a.bufferData(35345,M,S),a.bindBuffer(35345,null),a.bindBufferBase(35345,y,x),x}function d(){for(let v=0;v<r;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const y=i[v.id],x=v.uniforms,M=v.__cache;a.bindBuffer(35345,y);for(let S=0,L=x.length;S<L;S++){const w=x[S];if(g(w,S,M)===!0){const T=w.value,R=w.__offset;typeof T=="number"?(w.__data[0]=T,a.bufferSubData(35345,R,w.__data)):(w.value.isMatrix3?(w.__data[0]=w.value.elements[0],w.__data[1]=w.value.elements[1],w.__data[2]=w.value.elements[2],w.__data[3]=w.value.elements[0],w.__data[4]=w.value.elements[3],w.__data[5]=w.value.elements[4],w.__data[6]=w.value.elements[5],w.__data[7]=w.value.elements[0],w.__data[8]=w.value.elements[6],w.__data[9]=w.value.elements[7],w.__data[10]=w.value.elements[8],w.__data[11]=w.value.elements[0]):T.toArray(w.__data),a.bufferSubData(35345,R,w.__data))}}a.bindBuffer(35345,null)}function g(v,y,x){const M=v.value;if(x[y]===void 0)return typeof M=="number"?x[y]=M:x[y]=M.clone(),!0;if(typeof M=="number"){if(x[y]!==M)return x[y]=M,!0}else{const S=x[y];if(S.equals(M)===!1)return S.copy(M),!0}return!1}function m(v){const y=v.uniforms;let x=0;const M=16;let S=0;for(let L=0,w=y.length;L<w;L++){const T=y[L],R=p(T);if(T.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=x,L>0){S=x%M;const D=M-S;S!==0&&D-R.boundary<0&&(x+=M-S,T.__offset=x)}x+=R.storage}return S=x%M,S>0&&(x+=M-S),v.__size=x,v.__cache={},this}function p(v){const y=v.value,x={boundary:0,storage:0};return typeof y=="number"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function f(v){const y=v.target;y.removeEventListener("dispose",f);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),a.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function _(){for(const v in i)a.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:c,update:l,dispose:_}}function dd(){const a=Ii("canvas");return a.style.display="block",a}function zo(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:dd(),t=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,s=a.antialias!==void 0?a.antialias:!1,o=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,r=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,c=a.powerPreference!==void 0?a.powerPreference:"default",l=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=a.alpha!==void 0?a.alpha:!1;let d=null,u=null;const g=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=3e3,this.physicallyCorrectLights=!1,this.toneMapping=0,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let f=!1,_=0,v=0,y=null,x=-1,M=null;const S=new Ue,L=new Ue;let w=null,T=e.width,R=e.height,D=1,I=null,z=null;const C=new Ue(0,0,T,R),B=new Ue(0,0,T,R);let P=!1;const V=new Ys;let G=!1,O=!1,X=null;const Q=new Ve,U=new ye,J=new N,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ie(){return y===null?D:1}let H=t;function Ee(A,W){for(let Y=0;Y<A.length;Y++){const q=A[Y],K=e.getContext(q,W);if(K!==null)return K}return null}try{const A={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:r,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vt}`),e.addEventListener("webglcontextlost",Te,!1),e.addEventListener("webglcontextrestored",ze,!1),e.addEventListener("webglcontextcreationerror",je,!1),H===null){const W=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&W.shift(),H=Ee(W,A),H===null)throw Ee(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let _e,ve,le,Oe,Me,ge,it,lt,Fe,He,Je,Be,Lt,Ft,F,E,Z,ee,ne,se,be,j,me,de;function pe(){_e=new Mh(H),ve=new gh(H,_e,a),_e.init(ve),j=new rd(H,_e,ve),le=new id(H,_e,ve),Oe=new Th,Me=new Hu,ge=new sd(H,_e,le,Me,ve,j,Oe),it=new vh(p),lt=new bh(p),Fe=new ml(H,ve),me=new ph(H,_e,Fe,ve),He=new Sh(H,Fe,Oe,me),Je=new Fh(H,He,Fe,Oe),ne=new Lh(H,ve,ge),E=new _h(Me),Be=new Vu(p,it,lt,_e,ve,me,E),Lt=new hd(p,Me),Ft=new Xu,F=new Ju(_e,ve),ee=new fh(p,it,le,Je,h,o),Z=new nd(p,Je,ve),de=new ud(H,Oe,ve,le),se=new mh(H,_e,Oe,ve),be=new Eh(H,_e,Oe,ve),Oe.programs=Be.programs,p.capabilities=ve,p.extensions=_e,p.properties=Me,p.renderLists=Ft,p.shadowMap=Z,p.state=le,p.info=Oe}pe();const fe=new cd(p,H);this.xr=fe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=_e.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=_e.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(A){A!==void 0&&(D=A,this.setSize(T,R,!1))},this.getSize=function(A){return A.set(T,R)},this.setSize=function(A,W,Y){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=A,R=W,e.width=Math.floor(A*D),e.height=Math.floor(W*D),Y!==!1&&(e.style.width=A+"px",e.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(T*D,R*D).floor()},this.setDrawingBufferSize=function(A,W,Y){T=A,R=W,D=Y,e.width=Math.floor(A*Y),e.height=Math.floor(W*Y),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(C)},this.setViewport=function(A,W,Y,q){A.isVector4?C.set(A.x,A.y,A.z,A.w):C.set(A,W,Y,q),le.viewport(S.copy(C).multiplyScalar(D).floor())},this.getScissor=function(A){return A.copy(B)},this.setScissor=function(A,W,Y,q){A.isVector4?B.set(A.x,A.y,A.z,A.w):B.set(A,W,Y,q),le.scissor(L.copy(B).multiplyScalar(D).floor())},this.getScissorTest=function(){return P},this.setScissorTest=function(A){le.setScissorTest(P=A)},this.setOpaqueSort=function(A){I=A},this.setTransparentSort=function(A){z=A},this.getClearColor=function(A){return A.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(A=!0,W=!0,Y=!0){let q=0;A&&(q|=16384),W&&(q|=256),Y&&(q|=1024),H.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",ze,!1),e.removeEventListener("webglcontextcreationerror",je,!1),Ft.dispose(),F.dispose(),Me.dispose(),it.dispose(),lt.dispose(),Je.dispose(),me.dispose(),de.dispose(),Be.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Pe),fe.removeEventListener("sessionend",rt),X&&(X.dispose(),X=null),Ye.stop()};function Te(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function ze(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const A=Oe.autoReset,W=Z.enabled,Y=Z.autoUpdate,q=Z.needsUpdate,K=Z.type;pe(),Oe.autoReset=A,Z.enabled=W,Z.autoUpdate=Y,Z.needsUpdate=q,Z.type=K}function je(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function k(A){const W=A.target;W.removeEventListener("dispose",k),he(W)}function he(A){$(A),Me.remove(A)}function $(A){const W=Me.get(A).programs;W!==void 0&&(W.forEach(function(Y){Be.releaseProgram(Y)}),A.isShaderMaterial&&Be.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,Y,q,K,xe){W===null&&(W=te);const Se=K.isMesh&&K.matrixWorld.determinant()<0,Ce=vg(A,W,Y,q,K);le.setMaterial(q,Se);let Ae=Y.index;const ke=Y.attributes.position;if(Ae===null){if(ke===void 0||ke.count===0)return}else if(Ae.count===0)return;let Re=1;q.wireframe===!0&&(Ae=He.getWireframeAttribute(Y),Re=2),me.setup(K,q,Ce,Y,Ae);let De,Xe=se;Ae!==null&&(De=Fe.get(Ae),Xe=be,Xe.setIndex(De));const Rn=Ae!==null?Ae.count:ke.count,ui=Y.drawRange.start*Re,di=Y.drawRange.count*Re,Ht=xe!==null?xe.start*Re:0,Ne=xe!==null?xe.count*Re:1/0,fi=Math.max(ui,Ht),Qe=Math.min(Rn,ui+di,Ht+Ne)-1,Pt=Math.max(0,Qe-fi+1);if(Pt!==0){if(K.isMesh)q.wireframe===!0?(le.setLineWidth(q.wireframeLinewidth*ie()),Xe.setMode(1)):Xe.setMode(4);else if(K.isLine){let gn=q.linewidth;gn===void 0&&(gn=1),le.setLineWidth(gn*ie()),K.isLineSegments?Xe.setMode(1):K.isLineLoop?Xe.setMode(2):Xe.setMode(3)}else K.isPoints?Xe.setMode(0):K.isSprite&&Xe.setMode(4);if(K.isInstancedMesh)Xe.renderInstances(fi,Pt,K.count);else if(Y.isInstancedBufferGeometry){const gn=Math.min(Y.instanceCount,Y._maxInstanceCount);Xe.renderInstances(fi,Pt,gn)}else Xe.render(fi,Pt)}},this.compile=function(A,W){u=F.get(A),u.init(),m.push(u),A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(u.pushLight(Y),Y.castShadow&&u.pushShadow(Y))}),u.setupLights(p.physicallyCorrectLights),A.traverse(function(Y){const q=Y.material;if(q)if(Array.isArray(q))for(let K=0;K<q.length;K++){const xe=q[K];Br(xe,A,Y)}else Br(q,A,Y)}),m.pop(),u=null};let ce=null;function ae(A){ce&&ce(A)}function Pe(){Ye.stop()}function rt(){Ye.start()}const Ye=new ao;Ye.setAnimationLoop(ae),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(A){ce=A,fe.setAnimationLoop(A),A===null?Ye.stop():Ye.start()},fe.addEventListener("sessionstart",Pe),fe.addEventListener("sessionend",rt),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;A.autoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(W),W=fe.getCamera()),A.isScene===!0&&A.onBeforeRender(p,A,W,y),u=F.get(A,m.length),u.init(),m.push(u),Q.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),V.setFromProjectionMatrix(Q),O=this.localClippingEnabled,G=E.init(this.clippingPlanes,O,W),d=Ft.get(A,g.length),d.init(),g.push(d),mn(A,W,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(I,z),G===!0&&E.beginShadows();const Y=u.state.shadowsArray;if(Z.render(Y,A,W),G===!0&&E.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(d,A),u.setupLights(p.physicallyCorrectLights),W.isArrayCamera){const q=W.cameras;for(let K=0,xe=q.length;K<xe;K++){const Se=q[K];qe(d,A,Se,Se.viewport)}}else qe(d,A,W);y!==null&&(ge.updateMultisampleRenderTarget(y),ge.updateRenderTargetMipmap(y)),A.isScene===!0&&A.onAfterRender(p,A,W),me.resetDefaultState(),x=-1,M=null,m.pop(),m.length>0?u=m[m.length-1]:u=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function mn(A,W,Y,q){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)u.pushLight(A),A.castShadow&&u.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||V.intersectsSprite(A)){q&&J.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Q);const Se=Je.update(A),Ce=A.material;Ce.visible&&d.push(A,Se,Ce,Y,J.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==Oe.render.frame&&(A.skeleton.update(),A.skeleton.frame=Oe.render.frame),!A.frustumCulled||V.intersectsObject(A))){q&&J.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Q);const Se=Je.update(A),Ce=A.material;if(Array.isArray(Ce)){const Ae=Se.groups;for(let ke=0,Re=Ae.length;ke<Re;ke++){const De=Ae[ke],Xe=Ce[De.materialIndex];Xe&&Xe.visible&&d.push(A,Se,Xe,Y,J.z,De)}}else Ce.visible&&d.push(A,Se,Ce,Y,J.z,null)}}const xe=A.children;for(let Se=0,Ce=xe.length;Se<Ce;Se++)mn(xe[Se],W,Y,q)}function qe(A,W,Y,q){const K=A.opaque,xe=A.transmissive,Se=A.transparent;u.setupLightsView(Y),xe.length>0&&sn(K,W,Y),q&&le.viewport(S.copy(q)),K.length>0&&Rt(K,W,Y),xe.length>0&&Rt(xe,W,Y),Se.length>0&&Rt(Se,W,Y),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function sn(A,W,Y){const q=ve.isWebGL2;X===null&&(X=new xn(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:q&&s===!0?4:0})),p.getDrawingBufferSize(U),q?X.setSize(U.x,U.y):X.setSize(Ss(U.x),Ss(U.y));const K=p.getRenderTarget();p.setRenderTarget(X),p.clear();const xe=p.toneMapping;p.toneMapping=0,Rt(A,W,Y),p.toneMapping=xe,ge.updateMultisampleRenderTarget(X),ge.updateRenderTargetMipmap(X),p.setRenderTarget(K)}function Rt(A,W,Y){const q=W.isScene===!0?W.overrideMaterial:null;for(let K=0,xe=A.length;K<xe;K++){const Se=A[K],Ce=Se.object,Ae=Se.geometry,ke=q===null?Se.material:q,Re=Se.group;Ce.layers.test(Y.layers)&&_g(Ce,W,Y,Ae,ke,Re)}}function _g(A,W,Y,q,K,xe){A.onBeforeRender(p,W,Y,q,K,xe),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(p,W,Y,q,A,xe),K.transparent===!0&&K.side===2?(K.side=1,K.needsUpdate=!0,p.renderBufferDirect(Y,W,q,K,A,xe),K.side=0,K.needsUpdate=!0,p.renderBufferDirect(Y,W,q,K,A,xe),K.side=2):p.renderBufferDirect(Y,W,q,K,A,xe),A.onAfterRender(p,W,Y,q,K,xe)}function Br(A,W,Y){W.isScene!==!0&&(W=te);const q=Me.get(A),K=u.state.lights,xe=u.state.shadowsArray,Se=K.state.version,Ce=Be.getParameters(A,K.state,xe,W,Y),Ae=Be.getProgramCacheKey(Ce);let ke=q.programs;q.environment=A.isMeshStandardMaterial?W.environment:null,q.fog=W.fog,q.envMap=(A.isMeshStandardMaterial?lt:it).get(A.envMap||q.environment),ke===void 0&&(A.addEventListener("dispose",k),ke=new Map,q.programs=ke);let Re=ke.get(Ae);if(Re!==void 0){if(q.currentProgram===Re&&q.lightsStateVersion===Se)return qa(A,Ce),Re}else Ce.uniforms=Be.getUniforms(A),A.onBuild(Y,Ce,p),A.onBeforeCompile(Ce,p),Re=Be.acquireProgram(Ce,Ae),ke.set(Ae,Re),q.uniforms=Ce.uniforms;const De=q.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(De.clippingPlanes=E.uniform),qa(A,Ce),q.needsLights=yg(A),q.lightsStateVersion=Se,q.needsLights&&(De.ambientLightColor.value=K.state.ambient,De.lightProbe.value=K.state.probe,De.directionalLights.value=K.state.directional,De.directionalLightShadows.value=K.state.directionalShadow,De.spotLights.value=K.state.spot,De.spotLightShadows.value=K.state.spotShadow,De.rectAreaLights.value=K.state.rectArea,De.ltc_1.value=K.state.rectAreaLTC1,De.ltc_2.value=K.state.rectAreaLTC2,De.pointLights.value=K.state.point,De.pointLightShadows.value=K.state.pointShadow,De.hemisphereLights.value=K.state.hemi,De.directionalShadowMap.value=K.state.directionalShadowMap,De.directionalShadowMatrix.value=K.state.directionalShadowMatrix,De.spotShadowMap.value=K.state.spotShadowMap,De.spotShadowMatrix.value=K.state.spotShadowMatrix,De.pointShadowMap.value=K.state.pointShadowMap,De.pointShadowMatrix.value=K.state.pointShadowMatrix);const Xe=Re.getUniforms(),Rn=is.seqWithValue(Xe.seq,De);return q.currentProgram=Re,q.uniformsList=Rn,Re}function qa(A,W){const Y=Me.get(A);Y.outputEncoding=W.outputEncoding,Y.instancing=W.instancing,Y.skinning=W.skinning,Y.morphTargets=W.morphTargets,Y.morphNormals=W.morphNormals,Y.morphColors=W.morphColors,Y.morphTargetsCount=W.morphTargetsCount,Y.numClippingPlanes=W.numClippingPlanes,Y.numIntersection=W.numClipIntersection,Y.vertexAlphas=W.vertexAlphas,Y.vertexTangents=W.vertexTangents,Y.toneMapping=W.toneMapping}function vg(A,W,Y,q,K){W.isScene!==!0&&(W=te),ge.resetTextureUnits();const xe=W.fog,Se=q.isMeshStandardMaterial?W.environment:null,Ce=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:3e3,Ae=(q.isMeshStandardMaterial?lt:it).get(q.envMap||Se),ke=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Re=!!q.normalMap&&!!Y.attributes.tangent,De=!!Y.morphAttributes.position,Xe=!!Y.morphAttributes.normal,Rn=!!Y.morphAttributes.color,ui=q.toneMapped?p.toneMapping:0,di=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ht=di!==void 0?di.length:0,Ne=Me.get(q),fi=u.state.lights;if(G===!0&&(O===!0||A!==M)){const St=A===M&&q.id===x;E.setState(q,A,St)}let Qe=!1;q.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==fi.state.version||Ne.outputEncoding!==Ce||K.isInstancedMesh&&Ne.instancing===!1||!K.isInstancedMesh&&Ne.instancing===!0||K.isSkinnedMesh&&Ne.skinning===!1||!K.isSkinnedMesh&&Ne.skinning===!0||Ne.envMap!==Ae||q.fog===!0&&Ne.fog!==xe||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==E.numPlanes||Ne.numIntersection!==E.numIntersection)||Ne.vertexAlphas!==ke||Ne.vertexTangents!==Re||Ne.morphTargets!==De||Ne.morphNormals!==Xe||Ne.morphColors!==Rn||Ne.toneMapping!==ui||ve.isWebGL2===!0&&Ne.morphTargetsCount!==Ht)&&(Qe=!0):(Qe=!0,Ne.__version=q.version);let Pt=Ne.currentProgram;Qe===!0&&(Pt=Br(q,W,K));let gn=!1,Pi=!1,zr=!1;const mt=Pt.getUniforms(),Di=Ne.uniforms;if(le.useProgram(Pt.program)&&(gn=!0,Pi=!0,zr=!0),q.id!==x&&(x=q.id,Pi=!0),gn||M!==A){if(mt.setValue(H,"projectionMatrix",A.projectionMatrix),ve.logarithmicDepthBuffer&&mt.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),M!==A&&(M=A,Pi=!0,zr=!0),q.isShaderMaterial||q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshStandardMaterial||q.envMap){const St=mt.map.cameraPosition;St!==void 0&&St.setValue(H,J.setFromMatrixPosition(A.matrixWorld))}(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&mt.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial||q.isShadowMaterial||K.isSkinnedMesh)&&mt.setValue(H,"viewMatrix",A.matrixWorldInverse)}if(K.isSkinnedMesh){mt.setOptional(H,K,"bindMatrix"),mt.setOptional(H,K,"bindMatrixInverse");const St=K.skeleton;St&&(ve.floatVertexTextures?(St.boneTexture===null&&St.computeBoneTexture(),mt.setValue(H,"boneTexture",St.boneTexture,ge),mt.setValue(H,"boneTextureSize",St.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Nr=Y.morphAttributes;if((Nr.position!==void 0||Nr.normal!==void 0||Nr.color!==void 0&&ve.isWebGL2===!0)&&ne.update(K,Y,q,Pt),(Pi||Ne.receiveShadow!==K.receiveShadow)&&(Ne.receiveShadow=K.receiveShadow,mt.setValue(H,"receiveShadow",K.receiveShadow)),Pi&&(mt.setValue(H,"toneMappingExposure",p.toneMappingExposure),Ne.needsLights&&xg(Di,zr),xe&&q.fog===!0&&Lt.refreshFogUniforms(Di,xe),Lt.refreshMaterialUniforms(Di,q,D,R,X),is.upload(H,Ne.uniformsList,Di,ge)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(is.upload(H,Ne.uniformsList,Di,ge),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&mt.setValue(H,"center",K.center),mt.setValue(H,"modelViewMatrix",K.modelViewMatrix),mt.setValue(H,"normalMatrix",K.normalMatrix),mt.setValue(H,"modelMatrix",K.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const St=q.uniformsGroups;for(let Or=0,wg=St.length;Or<wg;Or++)if(ve.isWebGL2){const Xa=St[Or];de.update(Xa,Pt),de.bind(Xa,Pt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pt}function xg(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function yg(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(A,W,Y){Me.get(A.texture).__webglTexture=W,Me.get(A.depthTexture).__webglTexture=Y;const q=Me.get(A);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=Y===void 0,q.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,W){const Y=Me.get(A);Y.__webglFramebuffer=W,Y.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,Y=0){y=A,_=W,v=Y;let q=!0;if(A){const Ae=Me.get(A);Ae.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),q=!1):Ae.__webglFramebuffer===void 0?ge.setupRenderTarget(A):Ae.__hasExternalTextures&&ge.rebindTextures(A,Me.get(A.texture).__webglTexture,Me.get(A.depthTexture).__webglTexture)}let K=null,xe=!1,Se=!1;if(A){const Ae=A.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture)&&(Se=!0);const ke=Me.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(K=ke[W],xe=!0):ve.isWebGL2&&A.samples>0&&ge.useMultisampledRTT(A)===!1?K=Me.get(A).__webglMultisampledFramebuffer:K=ke,S.copy(A.viewport),L.copy(A.scissor),w=A.scissorTest}else S.copy(C).multiplyScalar(D).floor(),L.copy(B).multiplyScalar(D).floor(),w=P;if(le.bindFramebuffer(36160,K)&&ve.drawBuffers&&q&&le.drawBuffers(A,K),le.viewport(S),le.scissor(L),le.setScissorTest(w),xe){const Ae=Me.get(A.texture);H.framebufferTexture2D(36160,36064,34069+W,Ae.__webglTexture,Y)}else if(Se){const Ae=Me.get(A.texture),ke=W||0;H.framebufferTextureLayer(36160,36064,Ae.__webglTexture,Y||0,ke)}x=-1},this.readRenderTargetPixels=function(A,W,Y,q,K,xe,Se){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Me.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce){le.bindFramebuffer(36160,Ce);try{const Ae=A.texture,ke=Ae.format,Re=Ae.type;if(ke!==1023&&j.convert(ke)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Re===1016&&(_e.has("EXT_color_buffer_half_float")||ve.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Re!==1009&&j.convert(Re)!==H.getParameter(35738)&&!(Re===1015&&(ve.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-q&&Y>=0&&Y<=A.height-K&&H.readPixels(W,Y,q,K,j.convert(ke),j.convert(Re),xe)}finally{const Ae=y!==null?Me.get(y).__webglFramebuffer:null;le.bindFramebuffer(36160,Ae)}}},this.copyFramebufferToTexture=function(A,W,Y=0){const q=Math.pow(2,-Y),K=Math.floor(W.image.width*q),xe=Math.floor(W.image.height*q);ge.setTexture2D(W,0),H.copyTexSubImage2D(3553,Y,0,0,A.x,A.y,K,xe),le.unbindTexture()},this.copyTextureToTexture=function(A,W,Y,q=0){const K=W.image.width,xe=W.image.height,Se=j.convert(Y.format),Ce=j.convert(Y.type);ge.setTexture2D(Y,0),H.pixelStorei(37440,Y.flipY),H.pixelStorei(37441,Y.premultiplyAlpha),H.pixelStorei(3317,Y.unpackAlignment),W.isDataTexture?H.texSubImage2D(3553,q,A.x,A.y,K,xe,Se,Ce,W.image.data):W.isCompressedTexture?H.compressedTexSubImage2D(3553,q,A.x,A.y,W.mipmaps[0].width,W.mipmaps[0].height,Se,W.mipmaps[0].data):H.texSubImage2D(3553,q,A.x,A.y,Se,Ce,W.image),q===0&&Y.generateMipmaps&&H.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(A,W,Y,q,K=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=A.max.x-A.min.x+1,Se=A.max.y-A.min.y+1,Ce=A.max.z-A.min.z+1,Ae=j.convert(q.format),ke=j.convert(q.type);let Re;if(q.isData3DTexture)ge.setTexture3D(q,0),Re=32879;else if(q.isDataArrayTexture)ge.setTexture2DArray(q,0),Re=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,q.flipY),H.pixelStorei(37441,q.premultiplyAlpha),H.pixelStorei(3317,q.unpackAlignment);const De=H.getParameter(3314),Xe=H.getParameter(32878),Rn=H.getParameter(3316),ui=H.getParameter(3315),di=H.getParameter(32877),Ht=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;H.pixelStorei(3314,Ht.width),H.pixelStorei(32878,Ht.height),H.pixelStorei(3316,A.min.x),H.pixelStorei(3315,A.min.y),H.pixelStorei(32877,A.min.z),Y.isDataTexture||Y.isData3DTexture?H.texSubImage3D(Re,K,W.x,W.y,W.z,xe,Se,Ce,Ae,ke,Ht.data):Y.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Re,K,W.x,W.y,W.z,xe,Se,Ce,Ae,Ht.data)):H.texSubImage3D(Re,K,W.x,W.y,W.z,xe,Se,Ce,Ae,ke,Ht),H.pixelStorei(3314,De),H.pixelStorei(32878,Xe),H.pixelStorei(3316,Rn),H.pixelStorei(3315,ui),H.pixelStorei(32877,di),K===0&&q.generateMipmaps&&H.generateMipmap(Re),le.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?ge.setTextureCube(A,0):A.isData3DTexture?ge.setTexture3D(A,0):A.isDataArrayTexture?ge.setTexture2DArray(A,0):ge.setTexture2D(A,0),le.unbindTexture()},this.resetState=function(){_=0,v=0,y=null,le.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class fd extends zo{}fd.prototype.isWebGL1Renderer=!0;class No extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class pd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const pt=new N;class rs{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new at(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new rs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Oo extends Kt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ei;const bi=new N,ti=new N,ni=new N,ii=new ye,Mi=new ye,ko=new Ve,os=new N,Si=new N,as=new N,Uo=new ye,ir=new ye,Go=new ye;class md extends ot{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",ei===void 0){ei=new ht;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new pd(t,5);ei.setIndex([0,1,2,0,2,3]),ei.setAttribute("position",new rs(n,3,0,!1)),ei.setAttribute("uv",new rs(n,2,3,!1))}this.geometry=ei,this.material=e!==void 0?e:new Oo,this.center=new ye(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ti.setFromMatrixScale(this.matrixWorld),ko.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ni.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ti.multiplyScalar(-ni.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;ls(os.set(-.5,-.5,0),ni,o,ti,i,s),ls(Si.set(.5,-.5,0),ni,o,ti,i,s),ls(as.set(.5,.5,0),ni,o,ti,i,s),Uo.set(0,0),ir.set(1,0),Go.set(1,1);let r=e.ray.intersectTriangle(os,Si,as,!1,bi);if(r===null&&(ls(Si.set(-.5,.5,0),ni,o,ti,i,s),ir.set(0,1),r=e.ray.intersectTriangle(os,as,Si,!1,bi),r===null))return;const c=e.ray.origin.distanceTo(bi);c<e.near||c>e.far||t.push({distance:c,point:bi.clone(),uv:kt.getUV(bi,os,Si,as,Uo,ir,Go,new ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ls(a,e,t,n,i,s){ii.subVectors(a,t).addScalar(.5).multiply(n),i!==void 0?(Mi.x=s*ii.x-i*ii.y,Mi.y=i*ii.x+s*ii.y):Mi.copy(ii),a.copy(e),a.x+=Mi.x,a.y+=Mi.y,a.applyMatrix4(ko)}class sr extends Kt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wo=new Ve,rr=new Bs,cs=new kn,hs=new N;class or extends ot{constructor(e=new ht,t=new sr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere),cs.applyMatrix4(i),cs.radius+=s,e.ray.intersectsSphere(cs)===!1)return;Wo.copy(i).invert(),rr.copy(e.ray).applyMatrix4(Wo);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=r*r,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,o.start),g=Math.min(l.count,o.start+o.count);for(let m=u,p=g;m<p;m++){const f=l.getX(m);hs.fromBufferAttribute(d,f),Vo(hs,f,c,i,e,t,this)}}else{const u=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let m=u,p=g;m<p;m++)hs.fromBufferAttribute(d,m),Vo(hs,m,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}function Vo(a,e,t,n,i,s,o){const r=rr.distanceSqToPoint(a);if(r<t){const c=new N;rr.closestPointToPoint(a,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(r),point:c,index:e,face:null,object:o})}}class si extends yt{constructor(e,t,n,i,s,o,r,c,l){super(e,t,n,i,s,o,r,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ar extends ht{constructor(e=1,t=1,n=1,i=8,s=1,o=!1,r=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],g=[];let m=0;const p=[],f=n/2;let _=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new tt(d,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(g,2));function v(){const x=new N,M=new N;let S=0;const L=(t-e)/n;for(let w=0;w<=s;w++){const T=[],R=w/s,D=R*(t-e)+e;for(let I=0;I<=i;I++){const z=I/i,C=z*c+r,B=Math.sin(C),P=Math.cos(C);M.x=D*B,M.y=-R*n+f,M.z=D*P,d.push(M.x,M.y,M.z),x.set(B,L,P).normalize(),u.push(x.x,x.y,x.z),g.push(z,1-R),T.push(m++)}p.push(T)}for(let w=0;w<i;w++)for(let T=0;T<s;T++){const R=p[T][w],D=p[T+1][w],I=p[T+1][w+1],z=p[T][w+1];h.push(R,D,z),h.push(D,I,z),S+=6}l.addGroup(_,S,0),_+=S}function y(x){const M=m,S=new ye,L=new N;let w=0;const T=x===!0?e:t,R=x===!0?1:-1;for(let I=1;I<=i;I++)d.push(0,f*R,0),u.push(0,R,0),g.push(.5,.5),m++;const D=m;for(let I=0;I<=i;I++){const C=I/i*c+r,B=Math.cos(C),P=Math.sin(C);L.x=T*P,L.y=f*R,L.z=T*B,d.push(L.x,L.y,L.z),u.push(0,R,0),S.x=B*.5+.5,S.y=P*.5*R+.5,g.push(S.x,S.y),m++}for(let I=0;I<i;I++){const z=M+I,C=D+I;x===!0?h.push(C,C+1,z):h.push(C+1,C,z),w+=3}l.addGroup(_,w,x===!0?1:2),_+=w}}static fromJSON(e){return new ar(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lr extends ht{constructor(e=.5,t=1,n=8,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const r=[],c=[],l=[],h=[];let d=e;const u=(t-e)/i,g=new N,m=new ye;for(let p=0;p<=i;p++){for(let f=0;f<=n;f++){const _=s+f/n*o;g.x=d*Math.cos(_),g.y=d*Math.sin(_),c.push(g.x,g.y,g.z),l.push(0,0,1),m.x=(g.x/t+1)/2,m.y=(g.y/t+1)/2,h.push(m.x,m.y)}d+=u}for(let p=0;p<i;p++){const f=p*(n+1);for(let _=0;_<n;_++){const v=_+f,y=v,x=v+n+1,M=v+n+2,S=v+1;r.push(y,x,S),r.push(x,M,S)}}this.setIndex(r),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(h,2))}static fromJSON(e){return new lr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class gd extends Kt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new we(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class cr extends Kt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _d extends Kt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new we(16777215),this.specular=new we(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hr extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class vd extends hr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ot.DefaultUp),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ho=new Ve,qo=new N,Xo=new N;class jo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;qo.setFromMatrixPosition(e.matrixWorld),t.position.copy(qo),Xo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xo),t.updateMatrixWorld(),Ho.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ho),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xd extends jo{constructor(){super(new gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=bs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class yd extends hr{constructor(e,t,n=0,i=Math.PI/3,s=0,o=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ot.DefaultUp),this.updateMatrix(),this.target=new ot,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.shadow=new xd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Yo=new Ve,Ei=new N,ur=new N;class wd extends jo{constructor(){super(new gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ye(4,2),this._viewportCount=6,this._viewports=[new Ue(2,1,1,1),new Ue(0,1,1,1),new Ue(3,1,1,1),new Ue(1,1,1,1),new Ue(3,0,1,1),new Ue(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ei.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ei),ur.copy(n.position),ur.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ur),n.updateMatrixWorld(),i.makeTranslation(-Ei.x,-Ei.y,-Ei.z),Yo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yo)}}class $o extends hr{constructor(e,t,n=0,i=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new wd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class bd{constructor(e,t,n=0,i=1/0){this.ray=new Bs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new zs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return dr(e,this,n,t),n.sort(Zo),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)dr(e[i],this,n,t);return n.sort(Zo),n}}function Zo(a,e){return a.distance-e.distance}function dr(a,e,t,n){if(a.layers.test(e.layers)&&a.raycast(e,t),n===!0){const i=a.children;for(let s=0,o=i.length;s<o;s++)dr(i[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vt}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vt);class Nt{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new b);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new b);const n=this.elements,i=e.x,s=e.y,o=e.z;return t.x=n[0]*i+n[1]*s+n[2]*o,t.y=n[3]*i+n[4]*s+n[5]*o,t.z=n[6]*i+n[7]*s+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new Nt);const n=this.elements,i=e.elements,s=t.elements,o=n[0],r=n[1],c=n[2],l=n[3],h=n[4],d=n[5],u=n[6],g=n[7],m=n[8],p=i[0],f=i[1],_=i[2],v=i[3],y=i[4],x=i[5],M=i[6],S=i[7],L=i[8];return s[0]=o*p+r*v+c*M,s[1]=o*f+r*y+c*S,s[2]=o*_+r*x+c*L,s[3]=l*p+h*v+d*M,s[4]=l*f+h*y+d*S,s[5]=l*_+h*x+d*L,s[6]=u*p+g*v+m*M,s[7]=u*f+g*y+m*S,s[8]=u*_+g*x+m*L,t}scale(e,t){t===void 0&&(t=new Nt);const n=this.elements,i=t.elements;for(let s=0;s!==3;s++)i[3*s+0]=e.x*n[3*s+0],i[3*s+1]=e.y*n[3*s+1],i[3*s+2]=e.z*n[3*s+2];return t}solve(e,t){t===void 0&&(t=new b);const n=3,i=4,s=[];let o,r;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(r=0;r<3;r++)s[o+i*r]=this.elements[o+3*r];s[3+4*0]=e.x,s[3+4*1]=e.y,s[3+4*2]=e.z;let c=3;const l=c;let h;const d=4;let u;do{if(o=l-c,s[o+i*o]===0){for(r=o+1;r<l;r++)if(s[o+i*r]!==0){h=d;do u=d-h,s[u+i*o]+=s[u+i*r];while(--h);break}}if(s[o+i*o]!==0)for(r=o+1;r<l;r++){const g=s[o+i*r]/s[o+i*o];h=d;do u=d-h,s[u+i*r]=u<=o?0:s[u+i*r]-s[u+i*o]*g;while(--h)}}while(--c);if(t.z=s[2*i+3]/s[2*i+2],t.y=(s[1*i+3]-s[1*i+2]*t.z)/s[1*i+1],t.x=(s[0*i+3]-s[0*i+2]*t.z-s[0*i+1]*t.y)/s[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let n=0;n<9;n++)e+=this.elements[n]+t;return e}reverse(e){e===void 0&&(e=new Nt);const t=3,n=6,i=Md;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let r=3;const c=r;let l;const h=n;let d;do{if(s=c-r,i[s+n*s]===0){for(o=s+1;o<c;o++)if(i[s+n*o]!==0){l=h;do d=h-l,i[d+n*s]+=i[d+n*o];while(--l);break}}if(i[s+n*s]!==0)for(o=s+1;o<c;o++){const u=i[s+n*o]/i[s+n*s];l=h;do d=h-l,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*u;while(--l)}}while(--r);s=2;do{o=s-1;do{const u=i[s+n*o]/i[s+n*s];l=n;do d=n-l,i[d+n*o]=i[d+n*o]-i[d+n*s]*u;while(--l)}while(o--)}while(--s);s=2;do{const u=1/i[s+n*s];l=n;do d=n-l,i[d+n*s]=i[d+n*s]*u;while(--l)}while(s--);s=2;do{o=2;do{if(d=i[t+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,o,d)}while(o--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,s=e.w,o=t+t,r=n+n,c=i+i,l=t*o,h=t*r,d=t*c,u=n*r,g=n*c,m=i*c,p=s*o,f=s*r,_=s*c,v=this.elements;return v[3*0+0]=1-(u+m),v[3*0+1]=h-_,v[3*0+2]=d+f,v[3*1+0]=h+_,v[3*1+1]=1-(l+m),v[3*1+2]=g-p,v[3*2+0]=d-f,v[3*2+1]=g+p,v[3*2+2]=1-(l+u),this}transpose(e){e===void 0&&(e=new Nt);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const Md=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class b{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new b);const n=e.x,i=e.y,s=e.z,o=this.x,r=this.y,c=this.z;return t.x=r*s-c*i,t.y=c*n-o*s,t.z=o*i-r*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new b(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new b(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Nt([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new b);const t=this.x,n=this.y,i=this.z;let s=Math.sqrt(t*t+n*n+i*i);return s>0?(s=1/s,e.x=t*s,e.y=n*s,e.z=i*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,r=e.z;return Math.sqrt((s-t)*(s-t)+(o-n)*(o-n)+(r-i)*(r-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,r=e.z;return(s-t)*(s-t)+(o-n)*(o-n)+(r-i)*(r-i)}scale(e,t){t===void 0&&(t=new b);const n=this.x,i=this.y,s=this.z;return t.x=e*n,t.y=e*i,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new b),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new b),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new b),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=Sd,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=Ed;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,e)):(o.set(0,1,0),i.cross(o,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,s=this.y,o=this.z;n.x=i+(e.x-i)*t,n.y=s+(e.y-s)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Ko),Ko.almostEquals(e,t)}clone(){return new b(this.x,this.y,this.z)}}b.ZERO=new b(0,0,0),b.UNIT_X=new b(1,0,0),b.UNIT_Y=new b(0,1,0),b.UNIT_Z=new b(0,0,1);const Sd=new b,Ed=new b,Ko=new b;class Mt{constructor(e){e===void 0&&(e={}),this.lowerBound=new b,this.upperBound=new b,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const s=this.lowerBound,o=this.upperBound,r=n;s.copy(e[0]),r&&r.vmult(s,s),o.copy(s);for(let c=1;c<e.length;c++){let l=e[c];r&&(r.vmult(l,Jo),l=Jo),l.x>o.x&&(o.x=l.x),l.x<s.x&&(s.x=l.x),l.y>o.y&&(o.y=l.y),l.y<s.y&&(s.y=l.y),l.z>o.z&&(o.z=l.z),l.z<s.z&&(s.z=l.z)}return t&&(t.vadd(s,s),t.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new Mt().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound,o=i.x<=n.x&&n.x<=s.x||t.x<=s.x&&s.x<=n.x,r=i.y<=n.y&&n.y<=s.y||t.y<=s.y&&s.y<=n.y,c=i.z<=n.z&&n.z<=s.z||t.z<=s.z&&s.z<=n.z;return o&&r&&c}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound;return t.x<=i.x&&n.x>=s.x&&t.y<=i.y&&n.y>=s.y&&t.z<=i.z&&n.z>=s.z}getCorners(e,t,n,i,s,o,r,c){const l=this.lowerBound,h=this.upperBound;e.copy(l),t.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),i.set(l.x,h.y,h.z),s.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),r.set(l.x,l.y,h.z),c.copy(h)}toLocalFrame(e,t){const n=Qo,i=n[0],s=n[1],o=n[2],r=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,r,c,l,h,d);for(let u=0;u!==8;u++){const g=n[u];e.pointToLocal(g,g)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=Qo,i=n[0],s=n[1],o=n[2],r=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,r,c,l,h,d);for(let u=0;u!==8;u++){const g=n[u];e.pointToWorld(g,g)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,s=1/t.y,o=1/t.z,r=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,g=Math.max(Math.max(Math.min(r,c),Math.min(l,h)),Math.min(d,u)),m=Math.min(Math.min(Math.max(r,c),Math.max(l,h)),Math.max(d,u));return!(m<0||g>m)}}const Jo=new b,Qo=[new b,new b,new b,new b,new b,new b,new b,new b];class ea{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:s}=t;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class ta{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,e)}return this}}class Ze{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new b),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=Td,i=Ad;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new Ze);const n=this.x,i=this.y,s=this.z,o=this.w,r=e.x,c=e.y,l=e.z,h=e.w;return t.x=n*h+o*r+i*l-s*c,t.y=i*h+o*c+s*r-n*l,t.z=s*h+o*l+n*c-i*r,t.w=o*h-n*r-i*c-s*l,t}inverse(e){e===void 0&&(e=new Ze);const t=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(e);const o=1/(t*t+n*n+i*i+s*s);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new Ze),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new b);const n=e.x,i=e.y,s=e.z,o=this.x,r=this.y,c=this.z,l=this.w,h=l*n+r*s-c*i,d=l*i+c*n-o*s,u=l*s+o*i-r*n,g=-o*n-r*i-c*s;return t.x=h*l+g*-o+d*-c-u*-r,t.y=d*l+g*-r+u*-o-h*-c,t.z=u*l+g*-c+h*-r-d*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,s;const o=this.x,r=this.y,c=this.z,l=this.w;switch(t){case"YZX":const h=o*r+c*l;if(h>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,s=0),n===void 0){const d=o*o,u=r*r,g=c*c;n=Math.atan2(2*r*l-2*o*c,1-2*u-2*g),i=Math.asin(2*h),s=Math.atan2(2*o*l-2*r*c,1-2*d-2*g)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=s}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const s=Math.cos(e/2),o=Math.cos(t/2),r=Math.cos(n/2),c=Math.sin(e/2),l=Math.sin(t/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=c*o*r+s*l*h,this.y=s*l*r-c*o*h,this.z=s*o*h+c*l*r,this.w=s*o*r-c*l*h):i==="YXZ"?(this.x=c*o*r+s*l*h,this.y=s*l*r-c*o*h,this.z=s*o*h-c*l*r,this.w=s*o*r+c*l*h):i==="ZXY"?(this.x=c*o*r-s*l*h,this.y=s*l*r+c*o*h,this.z=s*o*h+c*l*r,this.w=s*o*r-c*l*h):i==="ZYX"?(this.x=c*o*r-s*l*h,this.y=s*l*r+c*o*h,this.z=s*o*h-c*l*r,this.w=s*o*r+c*l*h):i==="YZX"?(this.x=c*o*r+s*l*h,this.y=s*l*r+c*o*h,this.z=s*o*h-c*l*r,this.w=s*o*r-c*l*h):i==="XZY"&&(this.x=c*o*r-s*l*h,this.y=s*l*r-c*o*h,this.z=s*o*h+c*l*r,this.w=s*o*r+c*l*h),this}clone(){return new Ze(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new Ze);const i=this.x,s=this.y,o=this.z,r=this.w;let c=e.x,l=e.y,h=e.z,d=e.w,u,g,m,p,f;return g=i*c+s*l+o*h+r*d,g<0&&(g=-g,c=-c,l=-l,h=-h,d=-d),1-g>1e-6?(u=Math.acos(g),m=Math.sin(u),p=Math.sin((1-t)*u)/m,f=Math.sin(t*u)/m):(p=1-t,f=t),n.x=p*i+f*c,n.y=p*s+f*l,n.z=p*o+f*h,n.w=p*r+f*d,n}integrate(e,t,n,i){i===void 0&&(i=new Ze);const s=e.x*n.x,o=e.y*n.y,r=e.z*n.z,c=this.x,l=this.y,h=this.z,d=this.w,u=t*.5;return i.x+=u*(s*d+o*h-r*l),i.y+=u*(o*d+r*c-s*h),i.z+=u*(r*d+s*l-o*c),i.w+=u*(-s*c-o*l-r*h),i}}const Td=new b,Ad=new b,Cd={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class ue{constructor(e){e===void 0&&(e={}),this.id=ue.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}ue.idCounter=0,ue.types=Cd;class Ie{constructor(e){e===void 0&&(e={}),this.position=new b,this.quaternion=new Ze,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return Ie.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return Ie.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new b),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new b),n.vsub(e,i),t.conjugate(na),na.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new b),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new b),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new b),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const na=new Ze;class Tn extends ue{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=e;super({type:ue.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new b;for(let s=0;s!==e.length;s++){const o=e[s],r=o.length;for(let c=0;c!==r;c++){const l=(c+1)%r;t[o[c]].vsub(t[o[l]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new b;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];Tn.computeNormal(i,s,o,t)}static computeNormal(e,t,n,i){const s=new b,o=new b;t.vsub(e,o),n.vsub(t,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,s,o,r,c,l){const h=new b;let d=-1,u=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){h.copy(n.faceNormals[m]),s.vmult(h,h);const p=h.dot(o);p>u&&(u=p,d=m)}const g=[];for(let m=0;m<n.faces[d].length;m++){const p=n.vertices[n.faces[d][m]],f=new b;f.copy(p),s.vmult(f,f),i.vadd(f,f),g.push(f)}d>=0&&this.clipFaceAgainstHull(o,e,t,g,r,c,l)}findSeparatingAxis(e,t,n,i,s,o,r,c){const l=new b,h=new b,d=new b,u=new b,g=new b,m=new b;let p=Number.MAX_VALUE;const f=this;if(f.uniqueAxes)for(let _=0;_!==f.uniqueAxes.length;_++){n.vmult(f.uniqueAxes[_],l);const v=f.testSepAxis(l,e,t,n,i,s);if(v===!1)return!1;v<p&&(p=v,o.copy(l))}else{const _=r?r.length:f.faces.length;for(let v=0;v<_;v++){const y=r?r[v]:v;l.copy(f.faceNormals[y]),n.vmult(l,l);const x=f.testSepAxis(l,e,t,n,i,s);if(x===!1)return!1;x<p&&(p=x,o.copy(l))}}if(e.uniqueAxes)for(let _=0;_!==e.uniqueAxes.length;_++){s.vmult(e.uniqueAxes[_],h);const v=f.testSepAxis(h,e,t,n,i,s);if(v===!1)return!1;v<p&&(p=v,o.copy(h))}else{const _=c?c.length:e.faces.length;for(let v=0;v<_;v++){const y=c?c[v]:v;h.copy(e.faceNormals[y]),s.vmult(h,h);const x=f.testSepAxis(h,e,t,n,i,s);if(x===!1)return!1;x<p&&(p=x,o.copy(h))}}for(let _=0;_!==f.uniqueEdges.length;_++){n.vmult(f.uniqueEdges[_],u);for(let v=0;v!==e.uniqueEdges.length;v++)if(s.vmult(e.uniqueEdges[v],g),u.cross(g,m),!m.almostZero()){m.normalize();const y=f.testSepAxis(m,e,t,n,i,s);if(y===!1)return!1;y<p&&(p=y,o.copy(m))}}return i.vsub(t,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,i,s,o){const r=this;Tn.project(r,e,n,i,fr),Tn.project(t,e,s,o,pr);const c=fr[0],l=fr[1],h=pr[0],d=pr[1];if(c<d||h<l)return!1;const u=c-d,g=h-l;return u<g?u:g}calculateLocalInertia(e,t){const n=new b,i=new b;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,r=n.z-i.z;t.x=1/12*e*(2*o*2*o+2*r*2*r),t.y=1/12*e*(2*s*2*s+2*r*2*r),t.z=1/12*e*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,s,o,r){const c=new b,l=new b,h=new b,d=new b,u=new b,g=new b,m=new b,p=new b,f=this,_=[],v=i,y=_;let x=-1,M=Number.MAX_VALUE;for(let R=0;R<f.faces.length;R++){c.copy(f.faceNormals[R]),n.vmult(c,c);const D=c.dot(e);D<M&&(M=D,x=R)}if(x<0)return;const S=f.faces[x];S.connectedFaces=[];for(let R=0;R<f.faces.length;R++)for(let D=0;D<f.faces[R].length;D++)S.indexOf(f.faces[R][D])!==-1&&R!==x&&S.connectedFaces.indexOf(R)===-1&&S.connectedFaces.push(R);const L=S.length;for(let R=0;R<L;R++){const D=f.vertices[S[R]],I=f.vertices[S[(R+1)%L]];D.vsub(I,l),h.copy(l),n.vmult(h,h),t.vadd(h,h),d.copy(this.faceNormals[x]),n.vmult(d,d),t.vadd(d,d),h.cross(d,u),u.negate(u),g.copy(D),n.vmult(g,g),t.vadd(g,g);const z=S.connectedFaces[R];m.copy(this.faceNormals[z]);const C=this.getPlaneConstantOfFace(z);p.copy(m),n.vmult(p,p);const B=C-p.dot(t);for(this.clipFaceAgainstPlane(v,y,p,B);v.length;)v.shift();for(;y.length;)v.push(y.shift())}m.copy(this.faceNormals[x]);const w=this.getPlaneConstantOfFace(x);p.copy(m),n.vmult(p,p);const T=w-p.dot(t);for(let R=0;R<v.length;R++){let D=p.dot(v[R])+T;if(D<=s&&(console.log(`clamped: depth=${D} to minDist=${s}`),D=s),D<=o){const I=v[R];if(D<=1e-6){const z={point:I,normal:p,depth:D};r.push(z)}}}}clipFaceAgainstPlane(e,t,n,i){let s,o;const r=e.length;if(r<2)return t;let c=e[e.length-1],l=e[0];s=n.dot(c)+i;for(let h=0;h<r;h++){if(l=e[h],o=n.dot(l)+i,s<0)if(o<0){const d=new b;d.copy(l),t.push(d)}else{const d=new b;c.lerp(l,s/(s-o),d),t.push(d)}else if(o<0){const d=new b;c.lerp(l,s/(s-o),d),t.push(d),t.push(l)}c=l,s=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new b);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(n[s],i[s]),e.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new b);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=this.vertices;let o,r,c,l,h,d,u=new b;for(let g=0;g<s.length;g++){u.copy(s[g]),t.vmult(u,u),e.vadd(u,u);const m=u;(o===void 0||m.x<o)&&(o=m.x),(l===void 0||m.x>l)&&(l=m.x),(r===void 0||m.y<r)&&(r=m.y),(h===void 0||m.y>h)&&(h=m.y),(c===void 0||m.z<c)&&(c=m.z),(d===void 0||m.z>d)&&(d=m.z)}n.set(o,r,c),i.set(l,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new b);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let s=0;s<n;s++){const o=i[s];t.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];t.vmult(o,o)}}if(e)for(let s=0;s<n;s++){const o=i[s];o.vadd(e,o)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,s=null,o=new b;this.getAveragePointLocal(o);for(let r=0;r<this.faces.length;r++){let c=i[r];const l=t[n[r][0]],h=new b;e.vsub(l,h);const d=c.dot(h),u=new b;o.vsub(l,u);const g=c.dot(u);if(d<0&&g>0||d>0&&g<0)return!1}return s?1:-1}static project(e,t,n,i,s){const o=e.vertices.length,r=Ld;let c=0,l=0;const h=Fd,d=e.vertices;h.setZero(),Ie.vectorToLocalFrame(n,i,t,r),Ie.pointToLocalFrame(n,i,h,h);const u=h.dot(r);l=c=d[0].dot(r);for(let g=1;g<o;g++){const m=d[g].dot(r);m>c&&(c=m),m<l&&(l=m)}if(l-=u,c-=u,l>c){const g=l;l=c,c=g}s[0]=c,s[1]=l}}const fr=[],pr=[];new b;const Ld=new b,Fd=new b;class mr extends ue{constructor(e){super({type:ue.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=b,s=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],r=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new Tn({vertices:s,faces:o,axes:r});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new b),mr.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let s=0;s!==n.length;s++)t.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)pn.set(s[o][0],s[o][1],s[o][2]),t.vmult(pn,pn),e.vadd(pn,pn),n(pn.x,pn.y,pn.z)}calculateWorldAABB(e,t,n,i){const s=this.halfExtents;Gt[0].set(s.x,s.y,s.z),Gt[1].set(-s.x,s.y,s.z),Gt[2].set(-s.x,-s.y,s.z),Gt[3].set(-s.x,-s.y,-s.z),Gt[4].set(s.x,-s.y,-s.z),Gt[5].set(s.x,s.y,-s.z),Gt[6].set(-s.x,s.y,-s.z),Gt[7].set(s.x,-s.y,s.z);const o=Gt[0];t.vmult(o,o),e.vadd(o,o),i.copy(o),n.copy(o);for(let r=1;r<8;r++){const c=Gt[r];t.vmult(c,c),e.vadd(c,c);const l=c.x,h=c.y,d=c.z;l>i.x&&(i.x=l),h>i.y&&(i.y=h),d>i.z&&(i.z=d),l<n.x&&(n.x=l),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const pn=new b,Gt=[new b,new b,new b,new b,new b,new b,new b,new b],gr={DYNAMIC:1,STATIC:2,KINEMATIC:4},_r={AWAKE:0,SLEEPY:1,SLEEPING:2};class re extends ta{constructor(e){e===void 0&&(e={}),super(),this.id=re.idCounter++,this.index=-1,this.world=null,this.vlambda=new b,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new b,this.previousPosition=new b,this.interpolatedPosition=new b,this.initPosition=new b,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new b,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new b,this.force=new b;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?re.STATIC:re.DYNAMIC,typeof e.type==typeof re.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=re.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new b,this.quaternion=new Ze,this.initQuaternion=new Ze,this.previousQuaternion=new Ze,this.interpolatedQuaternion=new Ze,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new b,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new b,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new b,this.invInertia=new b,this.invInertiaWorld=new Nt,this.invMassSolve=0,this.invInertiaSolve=new b,this.invInertiaWorldSolve=new Nt,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new b(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new b(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Mt,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new b,this.isTrigger=Boolean(e.isTrigger),e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=re.AWAKE,this.wakeUpAfterNarrowphase=!1,e===re.SLEEPING&&this.dispatchEvent(re.wakeupEvent)}sleep(){this.sleepState=re.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===re.AWAKE&&n<i?(this.sleepState=re.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(re.sleepyEvent)):t===re.SLEEPY&&n>i?this.wakeUp():t===re.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(re.sleepEvent))}}updateSolveMassProperties(){this.sleepState===re.SLEEPING||this.type===re.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new b),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new b),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new b),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new b),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new b,s=new Ze;return t&&i.copy(t),n&&s.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let s=0;s!==n;s++){const o=e[s];o.updateBoundingSphereRadius();const r=t[s].length(),c=o.boundingSphereRadius;r+c>i&&(i=r+c)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,s=Rd,o=Pd,r=this.quaternion,c=this.aabb,l=Dd;for(let h=0;h!==i;h++){const d=e[h];r.vmult(t[h],s),s.vadd(this.position,s),r.mult(n[h],o),d.calculateWorldAABB(s,o,l.lowerBound,l.upperBound),h===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=Id,i=Bd;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new b),this.type!==re.DYNAMIC)return;this.sleepState===re.SLEEPING&&this.wakeUp();const n=Nd;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new b),this.type!==re.DYNAMIC)return;const n=Od,i=kd;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===re.DYNAMIC&&(this.sleepState===re.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new b),this.type!==re.DYNAMIC)return;this.sleepState===re.SLEEPING&&this.wakeUp();const n=t,i=Ud;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Gd;n.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new b),this.type!==re.DYNAMIC)return;const n=Wd,i=Vd;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=Hd;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),mr.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new b;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===re.DYNAMIC||this.type===re.KINEMATIC)||this.sleepState===re.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,r=this.force,c=this.torque,l=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,g=h*e;i.x+=r.x*g*u.x,i.y+=r.y*g*u.y,i.z+=r.z*g*u.z;const m=d.elements,p=this.angularFactor,f=c.x*p.x,_=c.y*p.y,v=c.z*p.z;s.x+=e*(m[0]*f+m[1]*_+m[2]*v),s.y+=e*(m[3]*f+m[4]*_+m[5]*v),s.z+=e*(m[6]*f+m[7]*_+m[8]*v),o.x+=i.x*e,o.y+=i.y*e,o.z+=i.z*e,l.integrate(this.angularVelocity,e,this.angularFactor,l),t&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}re.idCounter=0,re.COLLIDE_EVENT_NAME="collide",re.DYNAMIC=gr.DYNAMIC,re.STATIC=gr.STATIC,re.KINEMATIC=gr.KINEMATIC,re.AWAKE=_r.AWAKE,re.SLEEPY=_r.SLEEPY,re.SLEEPING=_r.SLEEPING,re.wakeupEvent={type:"wakeup"},re.sleepyEvent={type:"sleepy"},re.sleepEvent={type:"sleep"};const Rd=new b,Pd=new Ze,Dd=new Mt,Id=new Nt,Bd=new Nt,zd=new Nt,Nd=new b,Od=new b,kd=new b,Ud=new b,Gd=new b,Wd=new b,Vd=new b,Hd=new b;class ia{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!((e.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&re.STATIC)!==0||e.sleepState===re.SLEEPING)&&((t.type&re.STATIC)!==0||t.sleepState===re.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const s=qd;t.position.vsub(e.position,s);const o=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<o&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=Xd,i=jd,s=Yd,o=e.length;for(let r=0;r!==o;r++)i[r]=e[r],s[r]=t[r];e.length=0,t.length=0;for(let r=0;r!==o;r++){const c=i[r].id,l=s[r].id,h=c<l?`${c},${l}`:`${l},${c}`;n[h]=r,n.keys.push(h)}for(let r=0;r!==n.keys.length;r++){const c=n.keys.pop(),l=n[c];e.push(i[l]),t.push(s[l]),delete n[c]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new b;e.position.vsub(t.position,n);const i=e.shapes[0],s=t.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const qd=new b;new b,new Ze,new b;const Xd={keys:[]},jd=[],Yd=[];new b,new b,new b;class $d extends ia{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,s=i.length;let o,r;for(let c=0;c!==s;c++)for(let l=0;l!==c;l++)o=i[c],r=i[l],this.needBroadphaseCollision(o,r)&&this.intersectionTest(o,r,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const s=e.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&n.push(s)}return n}}class us{constructor(){this.rayFromWorld=new b,this.rayToWorld=new b,this.hitNormalWorld=new b,this.hitPointWorld=new b,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,s,o,r){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=r}}let sa,ra,oa,aa,la,ca,ha;const vr={CLOSEST:1,ANY:2,ALL:4};sa=ue.types.SPHERE,ra=ue.types.PLANE,oa=ue.types.BOX,aa=ue.types.CYLINDER,la=ue.types.CONVEXPOLYHEDRON,ca=ue.types.HEIGHTFIELD,ha=ue.types.TRIMESH;class Ke{get[sa](){return this._intersectSphere}get[ra](){return this._intersectPlane}get[oa](){return this._intersectBox}get[aa](){return this._intersectConvex}get[la](){return this._intersectConvex}get[ca](){return this._intersectHeightfield}get[ha](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new b),t===void 0&&(t=new b),this.from=e.clone(),this.to=t.clone(),this.direction=new b,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Ke.ANY,this.result=new us,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||Ke.ANY,this.result=t.result||new us,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(ua),xr.length=0,e.broadphase.aabbQuery(e,ua,xr),this.intersectBodies(xr),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=Zd,s=Kd;for(let o=0,r=e.shapes.length;o<r;o++){const c=e.shapes[o];if(!(n&&!c.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],s),e.quaternion.vmult(e.shapeOffsets[o],i),i.vadd(e.position,i),this.intersectShape(c,s,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const s=this.from;if(df(s,this.direction,n)>e.boundingSphereRadius)return;const r=this[e.type];r&&r.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,s)}_intersectPlane(e,t,n,i,s){const o=this.from,r=this.to,c=this.direction,l=new b(0,0,1);t.vmult(l,l);const h=new b;o.vsub(n,h);const d=h.dot(l);r.vsub(n,h);const u=h.dot(l);if(d*u>0||o.distanceTo(r)<d)return;const g=l.dot(c);if(Math.abs(g)<this.precision)return;const m=new b,p=new b,f=new b;o.vsub(n,m);const _=-l.dot(m)/g;c.scale(_,p),o.vadd(p,f),this.reportIntersection(l,f,s,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,s=this.from;t.x=Math.min(i.x,s.x),t.y=Math.min(i.y,s.y),t.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(e,t,n,i,s){e.data,e.elementSize;const o=Jd;o.from.copy(this.from),o.to.copy(this.to),Ie.pointToLocalFrame(n,t,o.from,o.from),Ie.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();const r=Qd;let c,l,h,d;c=l=0,h=d=e.data.length-1;const u=new Mt;o.getAABB(u),e.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,r,!0),c=Math.max(c,r[0]),l=Math.max(l,r[1]),e.getIndexOfPosition(u.upperBound.x,u.upperBound.y,r,!0),h=Math.min(h,r[0]+1),d=Math.min(d,r[1]+1);for(let g=c;g<h;g++)for(let m=l;m<d;m++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(g,m,u),!!u.overlapsRay(o)){if(e.getConvexTrianglePillar(g,m,!1),Ie.pointToWorldFrame(n,t,e.pillarOffset,ds),this._intersectConvex(e.pillarConvex,t,ds,i,s,da),this.result.shouldStop)return;e.getConvexTrianglePillar(g,m,!0),Ie.pointToWorldFrame(n,t,e.pillarOffset,ds),this._intersectConvex(e.pillarConvex,t,ds,i,s,da)}}}_intersectSphere(e,t,n,i,s){const o=this.from,r=this.to,c=e.radius,l=(r.x-o.x)**2+(r.y-o.y)**2+(r.z-o.z)**2,h=2*((r.x-o.x)*(o.x-n.x)+(r.y-o.y)*(o.y-n.y)+(r.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,u=h**2-4*l*d,g=ef,m=tf;if(!(u<0))if(u===0)o.lerp(r,u,g),g.vsub(n,m),m.normalize(),this.reportIntersection(m,g,s,i,-1);else{const p=(-h-Math.sqrt(u))/(2*l),f=(-h+Math.sqrt(u))/(2*l);if(p>=0&&p<=1&&(o.lerp(r,p,g),g.vsub(n,m),m.normalize(),this.reportIntersection(m,g,s,i,-1)),this.result.shouldStop)return;f>=0&&f<=1&&(o.lerp(r,f,g),g.vsub(n,m),m.normalize(),this.reportIntersection(m,g,s,i,-1))}}_intersectConvex(e,t,n,i,s,o){const r=nf,c=fa,l=o&&o.faceList||null,h=e.faces,d=e.vertices,u=e.faceNormals,g=this.direction,m=this.from,p=this.to,f=m.distanceTo(p),_=l?l.length:h.length,v=this.result;for(let y=0;!v.shouldStop&&y<_;y++){const x=l?l[y]:y,M=h[x],S=u[x],L=t,w=n;c.copy(d[M[0]]),L.vmult(c,c),c.vadd(w,c),c.vsub(m,c),L.vmult(S,r);const T=g.dot(r);if(Math.abs(T)<this.precision)continue;const R=r.dot(c)/T;if(!(R<0)){g.scale(R,_t),_t.vadd(m,_t),Ot.copy(d[M[0]]),L.vmult(Ot,Ot),w.vadd(Ot,Ot);for(let D=1;!v.shouldStop&&D<M.length-1;D++){Wt.copy(d[M[D]]),Vt.copy(d[M[D+1]]),L.vmult(Wt,Wt),L.vmult(Vt,Vt),w.vadd(Wt,Wt),w.vadd(Vt,Vt);const I=_t.distanceTo(m);!(Ke.pointInTriangle(_t,Ot,Wt,Vt)||Ke.pointInTriangle(_t,Wt,Ot,Vt))||I>f||this.reportIntersection(r,_t,s,i,x)}}}}_intersectTrimesh(e,t,n,i,s,o){const r=sf,c=hf,l=uf,h=fa,d=rf,u=of,g=af,m=cf,p=lf,f=e.indices;e.vertices;const _=this.from,v=this.to,y=this.direction;l.position.copy(n),l.quaternion.copy(t),Ie.vectorToLocalFrame(n,t,y,d),Ie.pointToLocalFrame(n,t,_,u),Ie.pointToLocalFrame(n,t,v,g),g.x*=e.scale.x,g.y*=e.scale.y,g.z*=e.scale.z,u.x*=e.scale.x,u.y*=e.scale.y,u.z*=e.scale.z,g.vsub(u,d),d.normalize();const x=u.distanceSquared(g);e.tree.rayQuery(this,l,c);for(let M=0,S=c.length;!this.result.shouldStop&&M!==S;M++){const L=c[M];e.getNormal(L,r),e.getVertex(f[L*3],Ot),Ot.vsub(u,h);const w=d.dot(r),T=r.dot(h)/w;if(T<0)continue;d.scale(T,_t),_t.vadd(u,_t),e.getVertex(f[L*3+1],Wt),e.getVertex(f[L*3+2],Vt);const R=_t.distanceSquared(u);!(Ke.pointInTriangle(_t,Wt,Ot,Vt)||Ke.pointInTriangle(_t,Ot,Wt,Vt))||R>x||(Ie.vectorToWorldFrame(t,r,p),Ie.pointToWorldFrame(n,t,_t,m),this.reportIntersection(p,m,s,i,L))}c.length=0}reportIntersection(e,t,n,i,s){const o=this.from,r=this.to,c=o.distanceTo(t),l=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Ke.ALL:this.hasHit=!0,l.set(o,r,e,t,n,i,c),l.hasHit=!0,this.callback(l);break;case Ke.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,r,e,t,n,i,c));break;case Ke.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,r,e,t,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,An),n.vsub(t,Ti),e.vsub(t,yr);const s=An.dot(An),o=An.dot(Ti),r=An.dot(yr),c=Ti.dot(Ti),l=Ti.dot(yr);let h,d;return(h=c*r-o*l)>=0&&(d=s*l-o*r)>=0&&h+d<s*c-o*o}}Ke.CLOSEST=vr.CLOSEST,Ke.ANY=vr.ANY,Ke.ALL=vr.ALL;const ua=new Mt,xr=[],Ti=new b,yr=new b,Zd=new b,Kd=new Ze,_t=new b,Ot=new b,Wt=new b,Vt=new b;new b,new us;const da={faceList:[0]},ds=new b,Jd=new Ke,Qd=[],ef=new b,tf=new b,nf=new b;new b,new b;const fa=new b,sf=new b,rf=new b,of=new b,af=new b,lf=new b,cf=new b;new Mt;const hf=[],uf=new Ie,An=new b,fs=new b;function df(a,e,t){t.vsub(a,An);const n=An.dot(e);return e.scale(n,fs),fs.vadd(a,fs),t.distanceTo(fs)}class ri extends ia{static checkBounds(e,t,n){let i,s;n===0?(i=e.position.x,s=t.position.x):n===1?(i=e.position.y,s=t.position.y):n===2&&(i=e.position.z,s=t.position.z);const o=e.boundingRadius,r=t.boundingRadius,c=i+o;return s-r<c}static insertionSortX(e){for(let t=1,n=e.length;t<n;t++){const i=e[t];let s;for(s=t-1;s>=0&&!(e[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)e[s+1]=e[s];e[s+1]=i}return e}static insertionSortY(e){for(let t=1,n=e.length;t<n;t++){const i=e[t];let s;for(s=t-1;s>=0&&!(e[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)e[s+1]=e[s];e[s+1]=i}return e}static insertionSortZ(e){for(let t=1,n=e.length;t<n;t++){const i=e[t];let s;for(s=t-1;s>=0&&!(e[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)e[s+1]=e[s];e[s+1]=i}return e}constructor(e){super(),this.axisList=[],this.world=null,this.axisIndex=0;const t=this.axisList;this._addBodyHandler=n=>{t.push(n.body)},this._removeBodyHandler=n=>{const i=t.indexOf(n.body);i!==-1&&t.splice(i,1)},e&&this.setWorld(e)}setWorld(e){this.axisList.length=0;for(let t=0;t<e.bodies.length;t++)this.axisList.push(e.bodies[t]);e.removeEventListener("addBody",this._addBodyHandler),e.removeEventListener("removeBody",this._removeBodyHandler),e.addEventListener("addBody",this._addBodyHandler),e.addEventListener("removeBody",this._removeBodyHandler),this.world=e,this.dirty=!0}collisionPairs(e,t,n){const i=this.axisList,s=i.length,o=this.axisIndex;let r,c;for(this.dirty&&(this.sortList(),this.dirty=!1),r=0;r!==s;r++){const l=i[r];for(c=r+1;c<s;c++){const h=i[c];if(!!this.needBroadphaseCollision(l,h)){if(!ri.checkBounds(l,h,o))break;this.intersectionTest(l,h,t,n)}}}}sortList(){const e=this.axisList,t=this.axisIndex,n=e.length;for(let i=0;i!==n;i++){const s=e[i];s.aabbNeedsUpdate&&s.updateAABB()}t===0?ri.insertionSortX(e):t===1?ri.insertionSortY(e):t===2&&ri.insertionSortZ(e)}autoDetectAxis(){let e=0,t=0,n=0,i=0,s=0,o=0;const r=this.axisList,c=r.length,l=1/c;for(let g=0;g!==c;g++){const m=r[g],p=m.position.x;e+=p,t+=p*p;const f=m.position.y;n+=f,i+=f*f;const _=m.position.z;s+=_,o+=_*_}const h=t-e*e*l,d=i-n*n*l,u=o-s*s*l;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(e,t,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let s="x";i===1&&(s="y"),i===2&&(s="z");const o=this.axisList;t.lowerBound[s],t.upperBound[s];for(let r=0;r<o.length;r++){const c=o[r];c.aabbNeedsUpdate&&c.updateAABB(),c.aabb.overlaps(t)&&n.push(c)}return n}}class ff{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class pa{constructor(){this.spatial=new b,this.rotational=new b}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class Ai{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Ai.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new pa,this.jacobianElementB=new pa,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,s=e,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*e-i*t-o*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return e.spatial.dot(s)+t.spatial.dot(o)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,r=n.angularVelocity,c=i.angularVelocity;return e.multiplyVectors(s,r)+t.multiplyVectors(o,c)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,r=n.wlambda,c=i.wlambda;return e.multiplyVectors(s,r)+t.multiplyVectors(o,c)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,r=i.force,c=i.torque,l=n.invMassSolve,h=i.invMassSolve;return s.scale(l,ma),r.scale(h,ga),n.invInertiaWorldSolve.vmult(o,_a),i.invInertiaWorldSolve.vmult(c,va),e.multiplyVectors(ma,_a)+t.multiplyVectors(ga,va)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,r=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve;let l=s+o;return r.vmult(e.rotational,ps),l+=ps.dot(e.rotational),c.vmult(t.rotational,ps),l+=ps.dot(t.rotational),l}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=pf;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,o),i.wlambda.addScaledVector(e,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(e,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Ai.idCounter=0;const ma=new b,ga=new b,_a=new b,va=new b,ps=new b,pf=new b;class mf extends Ai{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new b,this.rj=new b,this.ni=new b}computeB(e){const t=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,r=this.rj,c=gf,l=_f,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,g=s.angularVelocity;s.force,s.torque;const m=vf,p=this.jacobianElementA,f=this.jacobianElementB,_=this.ni;o.cross(_,c),r.cross(_,l),_.negate(p.spatial),c.negate(p.rotational),f.spatial.copy(_),f.rotational.copy(l),m.copy(s.position),m.vadd(r,m),m.vsub(i.position,m),m.vsub(o,m);const v=_.dot(m),y=this.restitution+1,x=y*u.dot(_)-y*h.dot(_)+g.dot(l)-d.dot(c),M=this.computeGiMf();return-v*t-x*n-e*M}getImpactVelocityAlongNormal(){const e=xf,t=yf,n=wf,i=bf,s=Mf;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,s),this.ni.dot(s)}}const gf=new b,_f=new b,vf=new b,xf=new b,yf=new b,wf=new b,bf=new b,Mf=new b;new b,new b,new b,new b,new b,new b,new b,new b,new b,new b;class xa extends Ai{constructor(e,t,n){super(e,t,-n,n),this.ri=new b,this.rj=new b,this.t=new b}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=Sf,o=Ef,r=this.t;n.cross(r,s),i.cross(r,o);const c=this.jacobianElementA,l=this.jacobianElementB;r.negate(c.spatial),s.negate(c.rotational),l.spatial.copy(r),l.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*t-e*d}}const Sf=new b,Ef=new b;class Cn{constructor(e,t,n){n=ff.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Cn.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Cn.idCounter=0;class Ln{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=Ln.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}Ln.idCounter=0,new b,new b,new b,new b,new b,new b,new b,new b,new b,new b,new b,new b,new b,new b,new b,new b,new b,new b,new b,new Ke,new b,new b,new b,new b(1,0,0),new b(0,1,0),new b(0,0,1),new b,new b,new b,new b,new b,new b,new b,new b,new b,new b,new b,new b,new b,new b,new b,new b,new b,new b,new b,new b;class Tf extends Tn{constructor(e,t,n,i){if(e===void 0&&(e=1),t===void 0&&(t=1),n===void 0&&(n=1),i===void 0&&(i=8),e<0)throw new Error("The cylinder radiusTop cannot be negative.");if(t<0)throw new Error("The cylinder radiusBottom cannot be negative.");const s=i,o=[],r=[],c=[],l=[],h=[],d=Math.cos,u=Math.sin;o.push(new b(-t*u(0),-n*.5,t*d(0))),l.push(0),o.push(new b(-e*u(0),n*.5,e*d(0))),h.push(1);for(let m=0;m<s;m++){const p=2*Math.PI/s*(m+1),f=2*Math.PI/s*(m+.5);m<s-1?(o.push(new b(-t*u(p),-n*.5,t*d(p))),l.push(2*m+2),o.push(new b(-e*u(p),n*.5,e*d(p))),h.push(2*m+3),c.push([2*m,2*m+1,2*m+3,2*m+2])):c.push([2*m,2*m+1,1,0]),(s%2===1||m<s/2)&&r.push(new b(-u(f),0,d(f)))}c.push(l),r.push(new b(0,1,0));const g=[];for(let m=0;m<h.length;m++)g.push(h[h.length-m-1]);c.push(g),super({vertices:o,faces:c,axes:r}),this.type=ue.types.CYLINDER,this.radiusTop=e,this.radiusBottom=t,this.height=n,this.numSegments=i}}class Ci extends ue{constructor(){super({type:ue.types.PLANE}),this.worldNormal=new b,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new b),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,i){Jt.set(0,0,1),t.vmult(Jt,Jt);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),Jt.x===1?i.x=e.x:Jt.x===-1&&(n.x=e.x),Jt.y===1?i.y=e.y:Jt.y===-1&&(n.y=e.y),Jt.z===1?i.z=e.z:Jt.z===-1&&(n.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Jt=new b;new b,new b,new b,new b,new b,new b,new b,new b,new b,new b,new Mt,new b,new Mt,new b,new b,new b,new b,new b,new b,new b,new Mt,new b,new Ie,new Mt;class Af{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class Cf extends Af{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,r=o.length,c=t.bodies,l=c.length,h=e;let d,u,g,m,p,f;if(r!==0)for(let x=0;x!==l;x++)c[x].updateSolveMassProperties();const _=Ff,v=Rf,y=Lf;_.length=r,v.length=r,y.length=r;for(let x=0;x!==r;x++){const M=o[x];y[x]=0,v[x]=M.computeB(h),_[x]=1/M.computeC()}if(r!==0){for(let S=0;S!==l;S++){const L=c[S],w=L.vlambda,T=L.wlambda;w.set(0,0,0),T.set(0,0,0)}for(n=0;n!==i;n++){m=0;for(let S=0;S!==r;S++){const L=o[S];d=v[S],u=_[S],f=y[S],p=L.computeGWlambda(),g=u*(d-p-L.eps*f),f+g<L.minForce?g=L.minForce-f:f+g>L.maxForce&&(g=L.maxForce-f),y[S]+=g,m+=g>0?g:-g,L.addToWlambda(g)}if(m*m<s)break}for(let S=0;S!==l;S++){const L=c[S],w=L.velocity,T=L.angularVelocity;L.vlambda.vmul(L.linearFactor,L.vlambda),w.vadd(L.vlambda,w),L.wlambda.vmul(L.angularFactor,L.wlambda),T.vadd(L.wlambda,T)}let x=o.length;const M=1/h;for(;x--;)o[x].multiplier=y[x]*M}return n}}const Lf=[],Ff=[],Rf=[];re.STATIC;class Pf{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class Df extends Pf{constructor(){super(...arguments),this.type=b}constructObject(){return new b}}const We={sphereSphere:ue.types.SPHERE,spherePlane:ue.types.SPHERE|ue.types.PLANE,boxBox:ue.types.BOX|ue.types.BOX,sphereBox:ue.types.SPHERE|ue.types.BOX,planeBox:ue.types.PLANE|ue.types.BOX,convexConvex:ue.types.CONVEXPOLYHEDRON,sphereConvex:ue.types.SPHERE|ue.types.CONVEXPOLYHEDRON,planeConvex:ue.types.PLANE|ue.types.CONVEXPOLYHEDRON,boxConvex:ue.types.BOX|ue.types.CONVEXPOLYHEDRON,sphereHeightfield:ue.types.SPHERE|ue.types.HEIGHTFIELD,boxHeightfield:ue.types.BOX|ue.types.HEIGHTFIELD,convexHeightfield:ue.types.CONVEXPOLYHEDRON|ue.types.HEIGHTFIELD,sphereParticle:ue.types.PARTICLE|ue.types.SPHERE,planeParticle:ue.types.PLANE|ue.types.PARTICLE,boxParticle:ue.types.BOX|ue.types.PARTICLE,convexParticle:ue.types.PARTICLE|ue.types.CONVEXPOLYHEDRON,cylinderCylinder:ue.types.CYLINDER,sphereCylinder:ue.types.SPHERE|ue.types.CYLINDER,planeCylinder:ue.types.PLANE|ue.types.CYLINDER,boxCylinder:ue.types.BOX|ue.types.CYLINDER,convexCylinder:ue.types.CONVEXPOLYHEDRON|ue.types.CYLINDER,heightfieldCylinder:ue.types.HEIGHTFIELD|ue.types.CYLINDER,particleCylinder:ue.types.PARTICLE|ue.types.CYLINDER,sphereTrimesh:ue.types.SPHERE|ue.types.TRIMESH,planeTrimesh:ue.types.PLANE|ue.types.TRIMESH};class If{get[We.sphereSphere](){return this.sphereSphere}get[We.spherePlane](){return this.spherePlane}get[We.boxBox](){return this.boxBox}get[We.sphereBox](){return this.sphereBox}get[We.planeBox](){return this.planeBox}get[We.convexConvex](){return this.convexConvex}get[We.sphereConvex](){return this.sphereConvex}get[We.planeConvex](){return this.planeConvex}get[We.boxConvex](){return this.boxConvex}get[We.sphereHeightfield](){return this.sphereHeightfield}get[We.boxHeightfield](){return this.boxHeightfield}get[We.convexHeightfield](){return this.convexHeightfield}get[We.sphereParticle](){return this.sphereParticle}get[We.planeParticle](){return this.planeParticle}get[We.boxParticle](){return this.boxParticle}get[We.convexParticle](){return this.convexParticle}get[We.cylinderCylinder](){return this.convexConvex}get[We.sphereCylinder](){return this.sphereConvex}get[We.planeCylinder](){return this.planeConvex}get[We.boxCylinder](){return this.boxConvex}get[We.convexCylinder](){return this.convexConvex}get[We.heightfieldCylinder](){return this.heightfieldCylinder}get[We.particleCylinder](){return this.particleCylinder}get[We.sphereTrimesh](){return this.sphereTrimesh}get[We.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Df,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,s,o){let r;this.contactPointPool.length?(r=this.contactPointPool.pop(),r.bi=e,r.bj=t):r=new mf(e,t),r.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const c=this.currentContactMaterial;r.restitution=c.restitution,r.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const l=n.material||e.material,h=i.material||t.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(r.restitution=l.restitution*h.restitution),r.si=s||n,r.sj=o||i,r}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,s=e.si,o=e.sj,r=this.world,c=this.currentContactMaterial;let l=c.friction;const h=s.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(l=h.friction*d.friction),l>0){const u=l*(r.frictionGravity||r.gravity).length();let g=n.invMass+i.invMass;g>0&&(g=1/g);const m=this.frictionEquationPool,p=m.length?m.pop():new xa(n,i,u*g),f=m.length?m.pop():new xa(n,i,u*g);return p.bi=f.bi=n,p.bj=f.bj=i,p.minForce=f.minForce=-u*g,p.maxForce=f.maxForce=u*g,p.ri.copy(e.ri),p.rj.copy(e.rj),f.ri.copy(e.ri),f.rj.copy(e.rj),e.ni.tangents(p.t,f.t),p.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,r.dt),f.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,r.dt),p.enabled=f.enabled=e.enabled,t.push(p,f),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Fn.setZero(),oi.setZero(),ai.setZero();const s=t.bi;t.bj;for(let r=0;r!==e;r++)t=this.result[this.result.length-1-r],t.bi!==s?(Fn.vadd(t.ni,Fn),oi.vadd(t.ri,oi),ai.vadd(t.rj,ai)):(Fn.vsub(t.ni,Fn),oi.vadd(t.rj,oi),ai.vadd(t.ri,ai));const o=1/e;oi.scale(o,n.ri),ai.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Fn.normalize(),Fn.tangents(n.t,i.t)}getContacts(e,t,n,i,s,o,r){this.contactPointPool=s,this.frictionEquationPool=r,this.result=i,this.frictionResult=o;const c=Nf,l=Of,h=Bf,d=zf;for(let u=0,g=e.length;u!==g;u++){const m=e[u],p=t[u];let f=null;m.material&&p.material&&(f=n.getContactMaterial(m.material,p.material)||null);const _=m.type&re.KINEMATIC&&p.type&re.STATIC||m.type&re.STATIC&&p.type&re.KINEMATIC||m.type&re.KINEMATIC&&p.type&re.KINEMATIC;for(let v=0;v<m.shapes.length;v++){m.quaternion.mult(m.shapeOrientations[v],c),m.quaternion.vmult(m.shapeOffsets[v],h),h.vadd(m.position,h);const y=m.shapes[v];for(let x=0;x<p.shapes.length;x++){p.quaternion.mult(p.shapeOrientations[x],l),p.quaternion.vmult(p.shapeOffsets[x],d),d.vadd(p.position,d);const M=p.shapes[x];if(!(y.collisionFilterMask&M.collisionFilterGroup&&M.collisionFilterMask&y.collisionFilterGroup)||h.distanceTo(d)>y.boundingSphereRadius+M.boundingSphereRadius)continue;let S=null;y.material&&M.material&&(S=n.getContactMaterial(y.material,M.material)||null),this.currentContactMaterial=S||f||n.defaultContactMaterial;const L=y.type|M.type,w=this[L];if(w){let T=!1;y.type<M.type?T=w.call(this,y,M,h,d,c,l,m,p,y,M,_):T=w.call(this,M,y,d,h,l,c,p,m,y,M,_),T&&_&&(n.shapeOverlapKeeper.set(y.id,M.id),n.bodyOverlapKeeper.set(m.id,p.id))}}}}}sphereSphere(e,t,n,i,s,o,r,c,l,h,d){if(d)return n.distanceSquared(i)<(e.radius+t.radius)**2;const u=this.createContactEquation(r,c,e,t,l,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(e.radius,u.ri),u.rj.scale(-t.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(r.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(c.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(e,t,n,i,s,o,r,c,l,h,d){const u=this.createContactEquation(r,c,e,t,l,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(e.radius,u.ri),n.vsub(i,ms),u.ni.scale(u.ni.dot(ms),ya),ms.vsub(ya,u.rj),-ms.dot(u.ni)<=e.radius){if(d)return!0;const g=u.ri,m=u.rj;g.vadd(n,g),g.vsub(r.position,g),m.vadd(i,m),m.vsub(c.position,m),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(e,t,n,i,s,o,r,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,s,o,r,c,e,t,d)}sphereBox(e,t,n,i,s,o,r,c,l,h,d){const u=this.v3pool,g=hp;n.vsub(i,gs),t.getSideNormals(g,o);const m=e.radius;let p=!1;const f=dp,_=fp,v=pp;let y=null,x=0,M=0,S=0,L=null;for(let P=0,V=g.length;P!==V&&p===!1;P++){const G=ap;G.copy(g[P]);const O=G.length();G.normalize();const X=gs.dot(G);if(X<O+m&&X>0){const Q=lp,U=cp;Q.copy(g[(P+1)%3]),U.copy(g[(P+2)%3]);const J=Q.length(),te=U.length();Q.normalize(),U.normalize();const ie=gs.dot(Q),H=gs.dot(U);if(ie<J&&ie>-J&&H<te&&H>-te){const Ee=Math.abs(X-O-m);if((L===null||Ee<L)&&(L=Ee,M=ie,S=H,y=O,f.copy(G),_.copy(Q),v.copy(U),x++,d))return!0}}}if(x){p=!0;const P=this.createContactEquation(r,c,e,t,l,h);f.scale(-m,P.ri),P.ni.copy(f),P.ni.negate(P.ni),f.scale(y,f),_.scale(M,_),f.vadd(_,f),v.scale(S,v),f.vadd(v,P.rj),P.ri.vadd(n,P.ri),P.ri.vsub(r.position,P.ri),P.rj.vadd(i,P.rj),P.rj.vsub(c.position,P.rj),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult)}let w=u.get();const T=up;for(let P=0;P!==2&&!p;P++)for(let V=0;V!==2&&!p;V++)for(let G=0;G!==2&&!p;G++)if(w.set(0,0,0),P?w.vadd(g[0],w):w.vsub(g[0],w),V?w.vadd(g[1],w):w.vsub(g[1],w),G?w.vadd(g[2],w):w.vsub(g[2],w),i.vadd(w,T),T.vsub(n,T),T.lengthSquared()<m*m){if(d)return!0;p=!0;const O=this.createContactEquation(r,c,e,t,l,h);O.ri.copy(T),O.ri.normalize(),O.ni.copy(O.ri),O.ri.scale(m,O.ri),O.rj.copy(w),O.ri.vadd(n,O.ri),O.ri.vsub(r.position,O.ri),O.rj.vadd(i,O.rj),O.rj.vsub(c.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}u.release(w),w=null;const R=u.get(),D=u.get(),I=u.get(),z=u.get(),C=u.get(),B=g.length;for(let P=0;P!==B&&!p;P++)for(let V=0;V!==B&&!p;V++)if(P%3!==V%3){g[V].cross(g[P],R),R.normalize(),g[P].vadd(g[V],D),I.copy(n),I.vsub(D,I),I.vsub(i,I);const G=I.dot(R);R.scale(G,z);let O=0;for(;O===P%3||O===V%3;)O++;C.copy(n),C.vsub(z,C),C.vsub(D,C),C.vsub(i,C);const X=Math.abs(G),Q=C.length();if(X<g[O].length()&&Q<m){if(d)return!0;p=!0;const U=this.createContactEquation(r,c,e,t,l,h);D.vadd(z,U.rj),U.rj.copy(U.rj),C.negate(U.ni),U.ni.normalize(),U.ri.copy(U.rj),U.ri.vadd(i,U.ri),U.ri.vsub(n,U.ri),U.ri.normalize(),U.ri.scale(m,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(r.position,U.ri),U.rj.vadd(i,U.rj),U.rj.vsub(c.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}}u.release(R,D,I,z,C)}planeBox(e,t,n,i,s,o,r,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,s,o,r,c,e,t,d)}convexConvex(e,t,n,i,s,o,r,c,l,h,d,u,g){const m=Lp;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,s,i,o,m,u,g)){const p=[],f=Fp;e.clipAgainstHull(n,s,t,i,o,m,-100,100,p);let _=0;for(let v=0;v!==p.length;v++){if(d)return!0;const y=this.createContactEquation(r,c,e,t,l,h),x=y.ri,M=y.rj;m.negate(y.ni),p[v].normal.negate(f),f.scale(p[v].depth,f),p[v].point.vadd(f,x),M.copy(p[v].point),x.vsub(n,x),M.vsub(i,M),x.vadd(n,x),x.vsub(r.position,x),M.vadd(i,M),M.vsub(c.position,M),this.result.push(y),_++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&_&&this.createFrictionFromAverage(_)}}sphereConvex(e,t,n,i,s,o,r,c,l,h,d){const u=this.v3pool;n.vsub(i,mp);const g=t.faceNormals,m=t.faces,p=t.vertices,f=e.radius;let _=!1;for(let v=0;v!==p.length;v++){const y=p[v],x=xp;o.vmult(y,x),i.vadd(x,x);const M=vp;if(x.vsub(n,M),M.lengthSquared()<f*f){if(d)return!0;_=!0;const S=this.createContactEquation(r,c,e,t,l,h);S.ri.copy(M),S.ri.normalize(),S.ni.copy(S.ri),S.ri.scale(f,S.ri),x.vsub(i,S.rj),S.ri.vadd(n,S.ri),S.ri.vsub(r.position,S.ri),S.rj.vadd(i,S.rj),S.rj.vsub(c.position,S.rj),this.result.push(S),this.createFrictionEquationsFromContact(S,this.frictionResult);return}}for(let v=0,y=m.length;v!==y&&_===!1;v++){const x=g[v],M=m[v],S=yp;o.vmult(x,S);const L=wp;o.vmult(p[M[0]],L),L.vadd(i,L);const w=bp;S.scale(-f,w),n.vadd(w,w);const T=Mp;w.vsub(L,T);const R=T.dot(S),D=Sp;if(n.vsub(L,D),R<0&&D.dot(S)>0){const I=[];for(let z=0,C=M.length;z!==C;z++){const B=u.get();o.vmult(p[M[z]],B),i.vadd(B,B),I.push(B)}if(op(I,S,n)){if(d)return!0;_=!0;const z=this.createContactEquation(r,c,e,t,l,h);S.scale(-f,z.ri),S.negate(z.ni);const C=u.get();S.scale(-R,C);const B=u.get();S.scale(-f,B),n.vsub(i,z.rj),z.rj.vadd(B,z.rj),z.rj.vadd(C,z.rj),z.rj.vadd(i,z.rj),z.rj.vsub(c.position,z.rj),z.ri.vadd(n,z.ri),z.ri.vsub(r.position,z.ri),u.release(C),u.release(B),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);for(let P=0,V=I.length;P!==V;P++)u.release(I[P]);return}else for(let z=0;z!==M.length;z++){const C=u.get(),B=u.get();o.vmult(p[M[(z+1)%M.length]],C),o.vmult(p[M[(z+2)%M.length]],B),i.vadd(C,C),i.vadd(B,B);const P=gp;B.vsub(C,P);const V=_p;P.unit(V);const G=u.get(),O=u.get();n.vsub(C,O);const X=O.dot(V);V.scale(X,G),G.vadd(C,G);const Q=u.get();if(G.vsub(n,Q),X>0&&X*X<P.lengthSquared()&&Q.lengthSquared()<f*f){if(d)return!0;const U=this.createContactEquation(r,c,e,t,l,h);G.vsub(i,U.rj),G.vsub(n,U.ni),U.ni.normalize(),U.ni.scale(f,U.ri),U.rj.vadd(i,U.rj),U.rj.vsub(c.position,U.rj),U.ri.vadd(n,U.ri),U.ri.vsub(r.position,U.ri),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult);for(let J=0,te=I.length;J!==te;J++)u.release(I[J]);u.release(C),u.release(B),u.release(G),u.release(Q),u.release(O);return}u.release(C),u.release(B),u.release(G),u.release(Q),u.release(O)}for(let z=0,C=I.length;z!==C;z++)u.release(I[z])}}}planeConvex(e,t,n,i,s,o,r,c,l,h,d){const u=Ep,g=Tp;g.set(0,0,1),s.vmult(g,g);let m=0;const p=Ap;for(let f=0;f!==t.vertices.length;f++)if(u.copy(t.vertices[f]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,p),g.dot(p)<=0){if(d)return!0;const v=this.createContactEquation(r,c,e,t,l,h),y=Cp;g.scale(g.dot(p),y),u.vsub(y,y),y.vsub(n,v.ri),v.ni.copy(g),u.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(r.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(c.position,v.rj),this.result.push(v),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(e,t,n,i,s,o,r,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,s,o,r,c,e,t,d)}sphereHeightfield(e,t,n,i,s,o,r,c,l,h,d){const u=t.data,g=e.radius,m=t.elementSize,p=Wp,f=Gp;Ie.pointToLocalFrame(i,o,n,f);let _=Math.floor((f.x-g)/m)-1,v=Math.ceil((f.x+g)/m)+1,y=Math.floor((f.y-g)/m)-1,x=Math.ceil((f.y+g)/m)+1;if(v<0||x<0||_>u.length||y>u[0].length)return;_<0&&(_=0),v<0&&(v=0),y<0&&(y=0),x<0&&(x=0),_>=u.length&&(_=u.length-1),v>=u.length&&(v=u.length-1),x>=u[0].length&&(x=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);const M=[];t.getRectMinMax(_,y,v,x,M);const S=M[0],L=M[1];if(f.z-g>L||f.z+g<S)return;const w=this.result;for(let T=_;T<v;T++)for(let R=y;R<x;R++){const D=w.length;let I=!1;if(t.getConvexTrianglePillar(T,R,!1),Ie.pointToWorldFrame(i,o,t.pillarOffset,p),n.distanceTo(p)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(I=this.sphereConvex(e,t.pillarConvex,n,p,s,o,r,c,e,t,d)),d&&I||(t.getConvexTrianglePillar(T,R,!0),Ie.pointToWorldFrame(i,o,t.pillarOffset,p),n.distanceTo(p)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(I=this.sphereConvex(e,t.pillarConvex,n,p,s,o,r,c,e,t,d)),d&&I))return!0;if(w.length-D>2)return}}boxHeightfield(e,t,n,i,s,o,r,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,s,o,r,c,e,t,d)}convexHeightfield(e,t,n,i,s,o,r,c,l,h,d){const u=t.data,g=t.elementSize,m=e.boundingSphereRadius,p=kp,f=Up,_=Op;Ie.pointToLocalFrame(i,o,n,_);let v=Math.floor((_.x-m)/g)-1,y=Math.ceil((_.x+m)/g)+1,x=Math.floor((_.y-m)/g)-1,M=Math.ceil((_.y+m)/g)+1;if(y<0||M<0||v>u.length||x>u[0].length)return;v<0&&(v=0),y<0&&(y=0),x<0&&(x=0),M<0&&(M=0),v>=u.length&&(v=u.length-1),y>=u.length&&(y=u.length-1),M>=u[0].length&&(M=u[0].length-1),x>=u[0].length&&(x=u[0].length-1);const S=[];t.getRectMinMax(v,x,y,M,S);const L=S[0],w=S[1];if(!(_.z-m>w||_.z+m<L))for(let T=v;T<y;T++)for(let R=x;R<M;R++){let D=!1;if(t.getConvexTrianglePillar(T,R,!1),Ie.pointToWorldFrame(i,o,t.pillarOffset,p),n.distanceTo(p)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(D=this.convexConvex(e,t.pillarConvex,n,p,s,o,r,c,null,null,d,f,null)),d&&D||(t.getConvexTrianglePillar(T,R,!0),Ie.pointToWorldFrame(i,o,t.pillarOffset,p),n.distanceTo(p)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(D=this.convexConvex(e,t.pillarConvex,n,p,s,o,r,c,null,null,d,f,null)),d&&D))return!0}}sphereParticle(e,t,n,i,s,o,r,c,l,h,d){const u=Ip;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=e.radius*e.radius){if(d)return!0;const m=this.createContactEquation(c,r,t,e,l,h);u.normalize(),m.rj.copy(u),m.rj.scale(e.radius,m.rj),m.ni.copy(u),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(e,t,n,i,s,o,r,c,l,h,d){const u=Rp;u.set(0,0,1),r.quaternion.vmult(u,u);const g=Pp;if(i.vsub(r.position,g),u.dot(g)<=0){if(d)return!0;const p=this.createContactEquation(c,r,t,e,l,h);p.ni.copy(u),p.ni.negate(p.ni),p.ri.set(0,0,0);const f=Dp;u.scale(u.dot(i),f),i.vsub(f,f),p.rj.copy(f),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}boxParticle(e,t,n,i,s,o,r,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,s,o,r,c,e,t,d)}convexParticle(e,t,n,i,s,o,r,c,l,h,d){let u=-1;const g=zp,m=Np;let p=null;const f=Bp;if(f.copy(i),f.vsub(n,f),s.conjugate(wa),wa.vmult(f,f),e.pointIsInside(f)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let _=0,v=e.faces.length;_!==v;_++){const y=[e.worldVertices[e.faces[_][0]]],x=e.worldFaceNormals[_];i.vsub(y[0],ba);const M=-x.dot(ba);if(p===null||Math.abs(M)<Math.abs(p)){if(d)return!0;p=M,u=_,g.copy(x)}}if(u!==-1){const _=this.createContactEquation(c,r,t,e,l,h);g.scale(p,m),m.vadd(i,m),m.vsub(n,m),_.rj.copy(m),g.negate(_.ni),_.ri.set(0,0,0);const v=_.ri,y=_.rj;v.vadd(i,v),v.vsub(c.position,v),y.vadd(n,y),y.vsub(r.position,y),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,s,o,r,c,l,h,d){return this.convexHeightfield(t,e,i,n,o,s,c,r,l,h,d)}particleCylinder(e,t,n,i,s,o,r,c,l,h,d){return this.convexParticle(t,e,i,n,o,s,c,r,l,h,d)}sphereTrimesh(e,t,n,i,s,o,r,c,l,h,d){const u=Xf,g=jf,m=Yf,p=$f,f=Zf,_=Kf,v=tp,y=qf,x=Vf,M=np;Ie.pointToLocalFrame(i,o,n,f);const S=e.radius;v.lowerBound.set(f.x-S,f.y-S,f.z-S),v.upperBound.set(f.x+S,f.y+S,f.z+S),t.getTrianglesInAABB(v,M);const L=Hf,w=e.radius*e.radius;for(let z=0;z<M.length;z++)for(let C=0;C<3;C++)if(t.getVertex(t.indices[M[z]*3+C],L),L.vsub(f,x),x.lengthSquared()<=w){if(y.copy(L),Ie.pointToWorldFrame(i,o,y,L),L.vsub(n,x),d)return!0;let B=this.createContactEquation(r,c,e,t,l,h);B.ni.copy(x),B.ni.normalize(),B.ri.copy(B.ni),B.ri.scale(e.radius,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(r.position,B.ri),B.rj.copy(L),B.rj.vsub(c.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}for(let z=0;z<M.length;z++)for(let C=0;C<3;C++){t.getVertex(t.indices[M[z]*3+C],u),t.getVertex(t.indices[M[z]*3+(C+1)%3],g),g.vsub(u,m),f.vsub(g,_);const B=_.dot(m);f.vsub(u,_);let P=_.dot(m);if(P>0&&B<0&&(f.vsub(u,_),p.copy(m),p.normalize(),P=_.dot(p),p.scale(P,_),_.vadd(u,_),_.distanceTo(f)<e.radius)){if(d)return!0;const G=this.createContactEquation(r,c,e,t,l,h);_.vsub(f,G.ni),G.ni.normalize(),G.ni.scale(e.radius,G.ri),G.ri.vadd(n,G.ri),G.ri.vsub(r.position,G.ri),Ie.pointToWorldFrame(i,o,_,_),_.vsub(c.position,G.rj),Ie.vectorToWorldFrame(o,G.ni,G.ni),Ie.vectorToWorldFrame(o,G.ri,G.ri),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}}const T=Jf,R=Qf,D=ep,I=Wf;for(let z=0,C=M.length;z!==C;z++){t.getTriangleVertices(M[z],T,R,D),t.getNormal(M[z],I),f.vsub(T,_);let B=_.dot(I);if(I.scale(B,_),f.vsub(_,_),B=_.distanceTo(f),Ke.pointInTriangle(_,T,R,D)&&B<e.radius){if(d)return!0;let P=this.createContactEquation(r,c,e,t,l,h);_.vsub(f,P.ni),P.ni.normalize(),P.ni.scale(e.radius,P.ri),P.ri.vadd(n,P.ri),P.ri.vsub(r.position,P.ri),Ie.pointToWorldFrame(i,o,_,_),_.vsub(c.position,P.rj),Ie.vectorToWorldFrame(o,P.ni,P.ni),Ie.vectorToWorldFrame(o,P.ri,P.ri),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult)}}M.length=0}planeTrimesh(e,t,n,i,s,o,r,c,l,h,d){const u=new b,g=kf;g.set(0,0,1),s.vmult(g,g);for(let m=0;m<t.vertices.length/3;m++){t.getVertex(m,u);const p=new b;p.copy(u),Ie.pointToWorldFrame(i,o,p,u);const f=Uf;if(u.vsub(n,f),g.dot(f)<=0){if(d)return!0;const v=this.createContactEquation(r,c,e,t,l,h);v.ni.copy(g);const y=Gf;g.scale(f.dot(g),y),u.vsub(y,y),v.ri.copy(y),v.ri.vsub(r.position,v.ri),v.rj.copy(u),v.rj.vsub(c.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const Fn=new b,oi=new b,ai=new b,Bf=new b,zf=new b,Nf=new Ze,Of=new Ze,kf=new b,Uf=new b,Gf=new b,Wf=new b,Vf=new b;new b;const Hf=new b,qf=new b,Xf=new b,jf=new b,Yf=new b,$f=new b,Zf=new b,Kf=new b,Jf=new b,Qf=new b,ep=new b,tp=new Mt,np=[],ms=new b,ya=new b,ip=new b,sp=new b,rp=new b;function op(a,e,t){let n=null;const i=a.length;for(let s=0;s!==i;s++){const o=a[s],r=ip;a[(s+1)%i].vsub(o,r);const c=sp;r.cross(e,c);const l=rp;t.vsub(o,l);const h=c.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const gs=new b,ap=new b,lp=new b,cp=new b,hp=[new b,new b,new b,new b,new b,new b],up=new b,dp=new b,fp=new b,pp=new b,mp=new b,gp=new b,_p=new b,vp=new b,xp=new b,yp=new b,wp=new b,bp=new b,Mp=new b,Sp=new b;new b,new b;const Ep=new b,Tp=new b,Ap=new b,Cp=new b,Lp=new b,Fp=new b,Rp=new b,Pp=new b,Dp=new b,Ip=new b,wa=new Ze,Bp=new b;new b;const zp=new b,ba=new b,Np=new b,Op=new b,kp=new b,Up=[0],Gp=new b,Wp=new b;class Ma{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,s=n.length,o=i.length;let r=0;for(let c=0;c<s;c++){let l=!1;const h=n[c];for(;h>i[r];)r++;l=h===i[r],l||Sa(e,h)}r=0;for(let c=0;c<o;c++){let l=!1;const h=i[c];for(;h>n[r];)r++;l=n[r]===h,l||Sa(t,h)}}}function Sa(a,e){a.push((e&4294901760)>>16,e&65535)}const wr=(a,e)=>a<e?`${a}-${e}`:`${e}-${a}`;class Vp{constructor(){this.data={keys:[]}}get(e,t){const n=wr(e,t);return this.data[n]}set(e,t,n){const i=wr(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=wr(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class Hp extends ta{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new b,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new b,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new $d,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new Cf,this.constraints=[],this.narrowphase=new If(this),this.collisionMatrix=new ea,this.collisionMatrixPrevious=new ea,this.bodyOverlapKeeper=new Ma,this.shapeOverlapKeeper=new Ma,this.contactmaterials=[],this.contactMaterialTable=new Vp,this.defaultMaterial=new Ln("default"),this.defaultContactMaterial=new Cn(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof us?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=Ke.ALL,n.from=e,n.to=t,n.callback=i,br.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=Ke.ANY,n.from=e,n.to=t,n.result=i,br.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=Ke.CLOSEST,n.from=e,n.to=t,n.result=i,br.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof re&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=nt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=nt.now();let s=0;for(;this.accumulator>=e&&s<n&&(this.internalStep(e),this.accumulator-=e,s++,!(nt.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const o=this.accumulator/e;for(let r=0;r!==this.bodies.length;r++){const c=this.bodies[r];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=$p,i=Zp,s=this.bodies.length,o=this.bodies,r=this.solver,c=this.gravity,l=this.doProfiling,h=this.profile,d=re.DYNAMIC;let u=-1/0;const g=this.constraints,m=Yp;c.length();const p=c.x,f=c.y,_=c.z;let v=0;for(l&&(u=nt.now()),v=0;v!==s;v++){const z=o[v];if(z.type===d){const C=z.force,B=z.mass;C.x+=B*p,C.y+=B*f,C.z+=B*_}}for(let z=0,C=this.subsystems.length;z!==C;z++)this.subsystems[z].update();l&&(u=nt.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(h.broadphase=nt.now()-u);let y=g.length;for(v=0;v!==y;v++){const z=g[v];if(!z.collideConnected)for(let C=n.length-1;C>=0;C-=1)(z.bodyA===n[C]&&z.bodyB===i[C]||z.bodyB===n[C]&&z.bodyA===i[C])&&(n.splice(C,1),i.splice(C,1))}this.collisionMatrixTick(),l&&(u=nt.now());const x=jp,M=t.length;for(v=0;v!==M;v++)x.push(t[v]);t.length=0;const S=this.frictionEquations.length;for(v=0;v!==S;v++)m.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,x,this.frictionEquations,m),l&&(h.narrowphase=nt.now()-u),l&&(u=nt.now()),v=0;v<this.frictionEquations.length;v++)r.addEquation(this.frictionEquations[v]);const L=t.length;for(let z=0;z!==L;z++){const C=t[z],B=C.bi,P=C.bj,V=C.si,G=C.sj;let O;if(B.material&&P.material?O=this.getContactMaterial(B.material,P.material)||this.defaultContactMaterial:O=this.defaultContactMaterial,O.friction,B.material&&P.material&&(B.material.friction>=0&&P.material.friction>=0&&B.material.friction*P.material.friction,B.material.restitution>=0&&P.material.restitution>=0&&(C.restitution=B.material.restitution*P.material.restitution)),r.addEquation(C),B.allowSleep&&B.type===re.DYNAMIC&&B.sleepState===re.SLEEPING&&P.sleepState===re.AWAKE&&P.type!==re.STATIC){const X=P.velocity.lengthSquared()+P.angularVelocity.lengthSquared(),Q=P.sleepSpeedLimit**2;X>=Q*2&&(B.wakeUpAfterNarrowphase=!0)}if(P.allowSleep&&P.type===re.DYNAMIC&&P.sleepState===re.SLEEPING&&B.sleepState===re.AWAKE&&B.type!==re.STATIC){const X=B.velocity.lengthSquared()+B.angularVelocity.lengthSquared(),Q=B.sleepSpeedLimit**2;X>=Q*2&&(P.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(B,P,!0),this.collisionMatrixPrevious.get(B,P)||(Li.body=P,Li.contact=C,B.dispatchEvent(Li),Li.body=B,P.dispatchEvent(Li)),this.bodyOverlapKeeper.set(B.id,P.id),this.shapeOverlapKeeper.set(V.id,G.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=nt.now()-u,u=nt.now()),v=0;v!==s;v++){const z=o[v];z.wakeUpAfterNarrowphase&&(z.wakeUp(),z.wakeUpAfterNarrowphase=!1)}for(y=g.length,v=0;v!==y;v++){const z=g[v];z.update();for(let C=0,B=z.equations.length;C!==B;C++){const P=z.equations[C];r.addEquation(P)}}r.solve(e,this),l&&(h.solve=nt.now()-u),r.removeAllEquations();const w=Math.pow;for(v=0;v!==s;v++){const z=o[v];if(z.type&d){const C=w(1-z.linearDamping,e),B=z.velocity;B.scale(C,B);const P=z.angularVelocity;if(P){const V=w(1-z.angularDamping,e);P.scale(V,P)}}}this.dispatchEvent(Xp),l&&(u=nt.now());const R=this.stepnumber%(this.quatNormalizeSkip+1)===0,D=this.quatNormalizeFast;for(v=0;v!==s;v++)o[v].integrate(e,R,D);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=nt.now()-u),this.stepnumber+=1,this.dispatchEvent(qp);let I=!0;if(this.allowSleep)for(I=!1,v=0;v!==s;v++){const z=o[v];z.sleepTick(this.time),z.sleepState!==re.SLEEPING&&(I=!0)}this.hasActiveBodies=I}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(Qt,en),e){for(let s=0,o=Qt.length;s<o;s+=2)Fi.bodyA=this.getBodyById(Qt[s]),Fi.bodyB=this.getBodyById(Qt[s+1]),this.dispatchEvent(Fi);Fi.bodyA=Fi.bodyB=null}if(t){for(let s=0,o=en.length;s<o;s+=2)Ri.bodyA=this.getBodyById(en[s]),Ri.bodyB=this.getBodyById(en[s+1]),this.dispatchEvent(Ri);Ri.bodyA=Ri.bodyB=null}Qt.length=en.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Qt,en),n){for(let s=0,o=Qt.length;s<o;s+=2){const r=this.getShapeById(Qt[s]),c=this.getShapeById(Qt[s+1]);tn.shapeA=r,tn.shapeB=c,r&&(tn.bodyA=r.body),c&&(tn.bodyB=c.body),this.dispatchEvent(tn)}tn.bodyA=tn.bodyB=tn.shapeA=tn.shapeB=null}if(i){for(let s=0,o=en.length;s<o;s+=2){const r=this.getShapeById(en[s]),c=this.getShapeById(en[s+1]);nn.shapeA=r,nn.shapeB=c,r&&(nn.bodyA=r.body),c&&(nn.bodyB=c.body),this.dispatchEvent(nn)}nn.bodyA=nn.bodyB=nn.shapeA=nn.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Mt;const br=new Ke,nt=globalThis.performance||{};if(!nt.now){let a=Date.now();nt.timing&&nt.timing.navigationStart&&(a=nt.timing.navigationStart),nt.now=()=>Date.now()-a}new b;const qp={type:"postStep"},Xp={type:"preStep"},Li={type:re.COLLIDE_EVENT_NAME,body:null,contact:null},jp=[],Yp=[],$p=[],Zp=[],Qt=[],en=[],Fi={type:"beginContact",bodyA:null,bodyB:null},Ri={type:"endContact",bodyA:null,bodyB:null},tn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},nn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class Ea{constructor(e){typeof e=="object"&&(e=e.notation),this.set=[],this.setkeys=[],this.setid=0,this.groups=[],this.totalDice=0,this.op="",this.constant=null,this.result=[],this.error=!1,this.boost=1,this.notation="",this.vectors=[],(!e||e=="0")&&(this.error=!0),this.parseNotation(e)}parseNotation(e){if(e){let u=e.split("!").length-1||0;u>0&&(this.boost=Math.min(Math.max(u,0),3)*4),e=e.split("!").join(""),e=e.split(" ").join("");let g=e.split("(").length-1,m=e.split(")").length-1;g!=m&&(this.error=!0)}const t=this.notation.length>0?"+":"";this.notation+=t+e;let n=e.split("@"),i=n[0],s=new RegExp(/(\+|\-|\*|\/|\%|\^|){0,1}()(\d*)([a-z]+\d+|[a-z]+|)(?:\{([a-z]+)(.*?|)\}|)()/,"i"),o=new RegExp(/(\b)*(\-\d+|\d+)(\b)*/,"gi"),r,c=0,l=30,h=0,d=0;for(;!this.error&&i.length>0&&(r=s.exec(i))!==null&&c<l;){c++,i=i.substring(r[0].length);let u=r[1],g=r[2]&&r[2].length>0,m=r[3],p=r[4],f=r[5]||"",_=r[6]||"",v=r[7]&&r[7].length>0,y=!0;g&&(h+=r[2].length),_=_.split(","),(!_||_.length<1)&&(_=""),_.shift(),c==1&&i.length==0&&!p&&u&&m?(p="d20",this.op=u,this.constant=parseInt(m),m=1):c>1&&i.length==0&&!p&&(this.op=u,this.constant=parseInt(m),y=!1),y&&this.addSet(m,p,d,h,f,_,u),v&&(h-=r[7].length,d+=r[7].length)}!this.error&&n[1]&&(r=n[1].match(o))!==null&&this.result.push(...r)}stringify(e=!0){let t="";if(this.set.length<1)return t;for(let n=0;n<this.set.length;n++){let i=this.set[n];t+=n>0&&i.op?i.op:"",t+=i.num+i.type,i.func&&(t+="{",t+=i.func?i.func:"",t+=i.args?","+(Array.isArray(i.args)?i.args.join(","):i.args):"",t+="}")}return t+=this.constant?this.op+""+Math.abs(this.constant):"",e&&this.result&&this.result.length>0&&(t+="@"+this.result.join(",")),this.boost>1&&(t+="!".repeat(this.boost/4)),t}addSet(e,t,n=0,i=0,s="",o="",r="+"){e=Math.abs(parseInt(e||1));let c=r+""+t+n+i+s+o,l=this.setkeys[c]!=null,h={};l&&(h=this.set[this.setkeys[c]-1]),e>0&&(h.num=l?e+h.num:e,h.type=t,h.sid=this.setid,h.gid=n,h.glvl=i,s&&(h.func=s),o&&(h.args=o),r&&(h.op=r),l?this.set[this.setkeys[c]-1]=h:this.setkeys[c]=this.set.push(h)),l||++this.setid}static mergeNotation(e,t){return{...e,constant:e.constant+t.constant,notation:e.notation+"+"+t.notation,set:[...e.set,...t.set],totalDice:e.vectors.length+t.vectors.length,vectors:[...e.vectors,...t.vectors]}}}const Mr={d2:{name:"d2",labels:["1","2"],values:[1,2],inertia:8,mass:400,scale:.9,system:"dweird"},dc:{type:"d2",name:"Coin",labels:["textures/silvercoin/tail.png","textures/silvercoin/heads.png"],setBumpMaps:["textures/silvercoin/tail_bump.png","textures/silvercoin/heads_bump.png"],values:[0,1],inertia:8,mass:400,scale:.9,colorset:"coin_silver"},d1:{name:"One-sided Dice",type:"d6",labels:["1"],values:[1,1],scale:.9,system:"dweird"},d3:{name:"Three-Sided Dice",type:"d6",labels:["1","2","3"],values:[1,3],scale:.9,system:"dweird"},df:{name:"Fudge Dice",type:"d6",labels:["-","0","+"],values:[-1,1],scale:.9,system:"dweird"},d4:{name:"Four-Sided Dice",labels:["1","2","3","4"],values:[1,4],inertia:5,scale:1.2},d6:{name:"Six-Sided Dice (Numbers)",labels:["1","2","3","4","5","6"],values:[1,6],scale:.9},dpip:{name:"Six-Sided Dice (Pips)",type:"d6",labels:[`   
 \u2B24 
   `,`\u2B24  
   
  \u2B24`,`\u2B24  
 \u2B24 
  \u2B24`,`\u2B24 \u2B24
   
\u2B24 \u2B24`,`\u2B24 \u2B24
 \u2B24 
\u2B24 \u2B24`,`\u2B24 \u2B24
\u2B24 \u2B24
\u2B24 \u2B24`],values:[1,6],scale:.9,font:"monospace"},dsex:{name:"Sex-Sided Emoji Dice",type:"d6",labels:["\u{1F346}","\u{1F351}","\u{1F44C}","\u{1F4A6}","\u{1F64F}","\u{1F4A5}"],values:[1,6],scale:.9,display:"labels",system:"dweird"},dpoker:{name:"Poker Dice (9-Ace)",type:"d6",labels:["A","9","10","J","Q","K"],values:[1,6],scale:.9,display:"labels",system:"dweird",font:"Times New Roman"},dspanpoker:{name:"Spanish Poker Dice (7-Ace)",type:"d8",labels:["A","7","8","9","10","J","Q","K"],values:[1,8],display:"labels",system:"dweird",font:"Times New Roman"},disotope:{name:"Radioactive Twelve-Sided Dice",type:"d12",labels:["","","","","","","","","","","","\u2622\uFE0F"],values:[0,0,0,0,0,0,0,0,0,0,0,1],mass:350,inertia:8,scale:.9,system:"dweird"},dsuit:{name:"Four-Suited Dice",type:"d4",labels:["\u2660\uFE0F","\u2665\uFE0F","\u2666\uFE0F","\u2663\uFE0F"],values:[1,4],inertia:5,scale:1.2,display:"labels",system:"dweird"},d8:{name:"Eight-Sided Dice",labels:["1","2","3","4","5","6","7","8"],values:[1,8]},d10:{name:"Ten-Sided Dice (Single Digit)",labels:["1","2","3","4","5","6","7","8","9","0"],values:[1,10],mass:350,inertia:9,scale:.9},d100:{name:"Ten-Sided Dice (Tens Digit)",type:"d10",labels:["10","20","30","40","50","60","70","80","90","00"],values:[10,100,10],mass:350,inertia:9,scale:.9},d12:{name:"Twelve-Sided Dice",labels:["1","2","3","4","5","6","7","8","9","10","11","12"],values:[1,12],mass:350,inertia:8,scale:.9},d20:{name:"Twenty-Sided Dice",labels:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"],values:[1,20],mass:400,inertia:6},dabi:{name:"Star Wars RPG: Ability Dice",type:"d8",labels:["s","a",`s
a`,`s
s`,"a","s",`a
a`,""],values:[1,8],font:"SWRPG-Symbol-Regular",color:"#00FF00",colorset:"swrpg_abi",display:"labels",system:"swrpg"},ddif:{name:"Star Wars RPG: Difficulty Dice",type:"d8",labels:["t","f",`f
t`,"t","",`t
t`,`f
f`,"t"],values:[1,8],font:"SWRPG-Symbol-Regular",color:"#8000FC",colorset:"swrpg_dif",display:"labels",system:"swrpg"},dpro:{name:"Star Wars RPG: Proficiency Dice",type:"d12",labels:[`a
a`,"a",`a
a`,"x","s",`s
a`,"s",`s
a`,`s
s`,`s
a`,`s
s`,""],values:[1,12],mass:350,inertia:8,scale:.9,font:"SWRPG-Symbol-Regular",color:"#FFFF00",colorset:"swrpg_pro",display:"labels",system:"swrpg"},dcha:{name:"Star Wars RPG: Challenge Dice",type:"d12",labels:[`t
t`,"t",`t
t`,"t",`t
f`,"f",`t
f`,"f",`f
f`,"y",`f
f`,""],values:[1,12],mass:350,inertia:8,scale:.9,font:"SWRPG-Symbol-Regular",color:"#FF0000",colorset:"swrpg_cha",display:"labels",system:"swrpg"},dfor:{name:"Star Wars RPG: Force Dice",type:"d12",labels:["z",`Z
Z`,"z",`Z
Z`,"z",`Z
Z`,"z","Z","z","Z","z",`z
z`],values:[1,12],mass:350,inertia:8,scale:.9,font:"SWRPG-Symbol-Regular",color:"#FFFFFF",colorset:"swrpg_for",display:"labels",system:"swrpg"},dboo:{name:"Star Wars RPG: Boost Dice",type:"d6",labels:[`s  
  a`,`a  
  a`,"s","a","",""],values:[1,6],scale:.9,font:"SWRPG-Symbol-Regular",color:"#00FFFF",colorset:"swrpg_boo",display:"labels",system:"swrpg"},dset:{name:"Star Wars RPG: Setback Dice",type:"d6",labels:["","t","f"],values:[1,3],scale:.9,font:"SWRPG-Symbol-Regular",color:"#111111",colorset:"swrpg_set",display:"labels",system:"swrpg"},swar:{name:"Star Wars Armada: Red Attack Dice",type:"d8",labels:["F","F",`F
F`,"E","E","G","",""],values:[1,8],font:"Armada-Symbol-Regular",color:"#FF0000",colorset:"swa_red",display:"labels",system:"swarmada"},swab:{name:"Star Wars Armada: Blue Attack Dice",type:"d8",labels:["F","F","F","F","E","E","G","G"],values:[1,8],font:"Armada-Symbol-Regular",color:"#0000FF",colorset:"swa_blue",display:"labels",system:"swarmada"},swak:{name:"Star Wars Armada: Black Attack Dice",type:"d8",labels:["F","F","F","F",`F
E`,`F
E`,"",""],values:[1,8],font:"Armada-Symbol-Regular",color:"#111111",colorset:"swa_black",display:"labels",system:"swarmada"},xwatk:{name:"Star Wars X-Wing: Red Attack Dice",type:"d8",labels:["c","d","d","d","f","f","",""],values:[1,8],font:"XWing-Symbol-Regular",color:"#FF0000",colorset:"xwing_red",display:"labels",system:"xwing"},xwdef:{name:"Star Wars X-Wing: Green Defense Dice",type:"d8",labels:["e","e","e","f","f","","",""],values:[1,8],font:"XWing-Symbol-Regular",color:"#00FF00",colorset:"xwing_green",display:"labels",system:"xwing"},swlar:{name:"Star Wars Legion: Red Attack Dice",type:"d8",labels:["h","h","h","h","h","c","o",""],values:[1,8],font:"Legion-Symbol-Regular",color:"#FF0000",colorset:"swl_atkred",display:"labels",system:"legion"},swlab:{name:"Star Wars Legion: Black Attack Dice",type:"d8",labels:["h","h","h","","","c","o",""],values:[1,8],font:"Legion-Symbol-Regular",color:"#111111",colorset:"swl_atkblack",display:"labels",system:"legion"},swlaw:{name:"Star Wars Legion: White Attack Dice",type:"d8",labels:["h","","","","","c","o",""],values:[1,8],font:"Legion-Symbol-Regular",color:"#FFFFFF",colorset:"swl_atkwhite",display:"labels",system:"legion"},swldr:{name:"Star Wars Legion: Red Defense Dice",type:"d6",labels:["s","s","s","d","",""],values:[1,6],scale:.9,font:"Legion-Symbol-Regular",color:"#FF0000",colorset:"swl_defred",display:"labels",system:"legion"},swldw:{name:"Star Wars Legion: White Defense Dice",type:"d6",labels:["s","","","d","",""],values:[1,6],scale:.9,font:"Legion-Symbol-Regular",color:"#FFFFFF",colorset:"swl_defwhite",display:"labels",system:"legion"}},Ct={d4:{vertices:[[1,1,1],[-1,-1,1],[-1,1,-1],[1,-1,-1]],faces:[[1,0,2,1],[0,1,3,2],[0,3,2,3],[1,2,3,4]]},d6:{vertices:[[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]],faces:[[0,3,2,1,1],[1,2,6,5,2],[0,1,5,4,3],[3,7,6,2,4],[0,4,7,3,5],[4,5,6,7,6]]},d8:{vertices:[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],faces:[[0,2,4,1],[0,4,3,2],[0,3,5,3],[0,5,2,4],[1,3,4,5],[1,4,2,6],[1,2,5,7],[1,5,3,8]]},d10:{vertices:[[1,0,-.105],[.809,.5877,.105],[.309,.951,-.105],[-.309,.951,.105],[-.809,.5877,-.105],[-1,0,.105],[-.809,-.587,-.105],[-.309,-.951,.105],[.309,-.951,-.105],[.809,-.5877,.105],[0,0,-1],[0,0,1]],faces:[[5,6,7,11,0],[4,3,2,10,1],[1,2,3,11,2],[0,9,8,10,3],[7,8,9,11,4],[8,7,6,10,5],[9,0,1,11,6],[2,1,0,10,7],[3,4,5,11,8],[6,5,4,10,9]]},d12:{vertices:[[0,.618,1.618],[0,.618,-1.618],[0,-.618,1.618],[0,-.618,-1.618],[1.618,0,.618],[1.618,0,-.618],[-1.618,0,.618],[-1.618,0,-.618],[.618,1.618,0],[.618,-1.618,0],[-.618,1.618,0],[-.618,-1.618,0],[1,1,1],[1,1,-1],[1,-1,1],[1,-1,-1],[-1,1,1],[-1,1,-1],[-1,-1,1],[-1,-1,-1]],faces:[[2,14,4,12,0,1],[15,9,11,19,3,2],[16,10,17,7,6,3],[6,7,19,11,18,4],[6,18,2,0,16,5],[18,11,9,14,2,6],[1,17,10,8,13,7],[1,13,5,15,3,8],[13,8,12,4,5,9],[5,4,14,9,15,10],[0,12,8,10,16,11],[3,19,7,17,1,12]]},d20:{vertices:[[-1,1.618,0],[1,1.618,0],[-1,-1.618,0],[1,-1.618,0],[0,-1,1.618],[0,1,1.618],[0,-1,-1.618],[0,1,-1.618],[1.618,0,-1],[1.618,0,1],[-1.618,0,-1],[-1.618,0,1]],faces:[[0,11,5,1],[0,5,1,2],[0,1,7,3],[0,7,10,4],[0,10,11,5],[1,5,9,6],[5,11,4,7],[11,10,2,8],[10,7,6,9],[7,1,8,10],[3,9,4,11],[3,4,2,12],[3,2,6,13],[3,6,8,14],[3,8,9,15],[4,9,5,16],[2,4,11,17],[6,2,10,18],[8,6,7,19],[9,8,1,20]]}},Kp={name:"",scale:1,font:"Arial",color:"",labels:[],valueMap:[],values:[],normals:[],mass:300,inertia:13,geometry:null,display:"values",system:"d20"};class Jp{constructor(e){if(!Mr.hasOwnProperty(e))return console.error("dice type unavailable");Object.assign(this,Kp,Mr[e]),this.shape=Mr[e].type||e,this.type=e,this.setLabels(this.labels),this.setValues(this.values[0],this.values[1],this.values[2]),this.setValueMap(this.valueMap),this.bumpMaps&&this.setBumpMaps(this.bumpMaps)}setValues(e=1,t=20,n=1){this.values=this.range(e,t,n)}setValueMap(e){for(let t=0;t<this.values.length;t++){let n=this.values[t];e[n]!=null&&(this.valueMap[n]=e[n])}}registerFaces(e,t="labels"){let n;if(t=="labels"?n=this.labels:n=this.normals,n.unshift(""),["d2","d10"].includes(this.shape)||n.unshift(""),this.shape=="d4"){let i=e[0],s=e[1],o=e[2],r=e[3];this.labels=[[[],[0,0,0],[s,r,o],[i,o,r],[s,i,r],[i,s,o]],[[],[0,0,0],[s,o,r],[o,i,r],[s,r,i],[o,s,i]],[[],[0,0,0],[r,o,s],[o,r,i],[r,s,i],[o,i,s]],[[],[0,0,0],[r,s,o],[i,r,o],[r,i,s],[i,o,s]]]}else Array.prototype.push.apply(n,e)}setLabels(e){this.loadTextures(e,this.registerFaces.bind(this),"labels")}setBumpMaps(e){this.loadTextures(e,this.registerFaces.bind(this),"bump")}loadTextures(e,t,n){let i=0,s=e.length,o=/\.(PNG|JPG|GIF|WEBP)$/i,r=Array(e.length),c=!1;for(let l=0;l<s;l++){if(e[l]==""||!e[l].match(o)){r[l]=e[l],++i;continue}c=!0,r[l]=new Image,r[l].onload=function(){++i>=s&&t(r,n)},r[l].src=e[l]}c||t(r,n)}range(e,t,n=1){for(var i=[e],s=e;s<t;)i.push(s+=n||1);return i}}const Sr={none:{name:"Plastic"},perfectmetal:{name:"Perfect Metal",color:14540253,roughness:0,metalness:1,envMapIntensity:1},metal:{name:"Metal",color:14540253,roughness:.5,metalness:.6,envMapIntensity:1},wood:{name:"Wood",color:14540253,roughness:.9,metalness:0,envMapIntensity:1},glass:{name:"Glass",color:14540253,roughness:.1,metalness:0,envMapIntensity:1}};function Ta(a){return Math.min(Math.max(Number(a)||0,0),1)}function Qp(a,e,t){return!(t>0)||!(a!=null&&a.emissive)||!e?!1:(a.emissiveMap=e,a.emissive=new we(16777215),a.emissiveIntensity=t,!0)}const em=9,tm=6,nm=4.5,im=12,sm=6,rm=.85,om=.7,am=.12,lm=.55,Aa=2,_s=(a,e,t)=>Math.min(Math.max(a,e),t);function cm(a=[],e=Aa){if(!Array.isArray(a)||!(e>0))return[];const t=a.filter(h=>h&&!h.shade&&h.intensity>0);if(t.length<=e)return t.map(({x:h,y:d,z:u,color:g,intensity:m,distance:p})=>({x:h,y:d,z:u,color:g,intensity:m,distance:p}));let n=1/0,i=-1/0,s=1/0,o=-1/0;for(const h of t)h.x<n&&(n=h.x),h.x>i&&(i=h.x),h.y<s&&(s=h.y),h.y>o&&(o=h.y);const r=i-n>=o-s?"x":"y",c=[...t].sort((h,d)=>h[r]-d[r]),l=[];for(let h=0;h<e;h+=1){const d=Math.floor(h*c.length/e),u=Math.floor((h+1)*c.length/e),g=c.slice(d,u);if(!g.length)continue;let m=0,p=0,f=0,_=0,v=0,y=0;for(const x of g)m+=x.intensity,p+=x.x*x.intensity,f+=x.y*x.intensity,_+=x.z*x.intensity,x.intensity>v&&(v=x.intensity),x.distance>y&&(y=x.distance);l.push({x:p/m,y:f/m,z:_/m,color:g[0].color,intensity:Math.min(v*1.4,m*.65),distance:y*1.25})}return l}function Er(a){const e=/^#([0-9a-f]{6})$/i.exec(String(a||""));if(!e)return!1;const t=parseInt(e[1],16);return(.2126*(t>>16&255)+.7152*(t>>8&255)+.0722*(t&255))/255<am}function hm(a={}){const e=(a==null?void 0:a.light)||(a==null?void 0:a.background)||"#ffffff";return{level:Ta(a==null?void 0:a.glow),color:e,reach:Er(e)?lm:1}}function um(a,e=0){const t=Number(a)+Number(e||0),n=Math.sin(t*17.3)*.5+Math.sin(t*7.1+1.3)*.3+Math.sin(t*29.7+4.1)*.2;return _s(.85+n*.15,.7,1)}function dm({level:a,radius:e,height:t,opacity:n=1,reach:i=1}){const s=_s(a,0,1)*_s(n,0,1),o=_s(t/(e*sm),0,1);return{pool:{scale:e*(em+tm*o)*i,opacity:Math.min(rm,s*1.8*(1-.6*o))},halo:{scale:e*nm*i,opacity:Math.min(om,s*1.4)},light:{intensity:s*2.2,distance:e*im}}}function fm(a,e=null,t=1){const n=(e==null?void 0:e.composite)==="destination-in"||t<1;return a.opacity=t,a.transparent=n,a.depthTest=!0,a.depthWrite=!n||t>=.5,a.needsUpdate=!0,a}const pm=180,mm=24,gm=256,_m=16;function vm(a,{isPlainEdge:e=!1,maxSize:t=gm}={}){if(e)return _m;const n=Math.max(1,Number(a)||1),i=Math.pow(2,Math.floor(Math.log(n)/Math.log(2)))*4;return Math.min(t,Math.max(128,i))}function xm(a){if(!a||typeof a!="object")return"";const e=typeof a.customProgramCacheKey=="function"?a.customProgramCacheKey():"";return[a.type||"",e,a.map?"M":"",a.bumpMap?"B":"",a.emissiveMap?"E":"",a.flatShading?"F":"",a.depthPacking||0].join("|")}class ym{constructor(e=mm){this.maxEntries=Math.max(1,e),this.map=new Map}get size(){return this.map.size}keepOrDispose(e){var n,i,s,o,r;if(!e||typeof e!="object")return;const t=xm(e);if(!t){(n=e.dispose)==null||n.call(e);return}if(this.map.has(t)){const c=this.map.get(t);if(c===e)return;this.map.delete(t),this.map.set(t,c),(i=e.dispose)==null||i.call(e);return}for(("map"in e)&&(e.map=null),("bumpMap"in e)&&(e.bumpMap=null),("emissiveMap"in e)&&(e.emissiveMap=null),(o=(s=e.userData)==null?void 0:s.lwUniforms)!=null&&o.uLwLabelMap&&(e.userData.lwUniforms.uLwLabelMap.value=null),this.map.set(t,e);this.map.size>this.maxEntries;){const c=this.map.keys().next().value,l=this.map.get(c);this.map.delete(c),(r=l==null?void 0:l.dispose)==null||r.call(l)}}clear(){var e;for(const t of this.map.values())(e=t==null?void 0:t.dispose)==null||e.call(t);this.map.clear()}}class wm{constructor(e=pm){this.maxEntries=Math.max(1,e),this.map=new Map}get size(){return this.map.size}get(e){if(!this.map.has(e))return null;const t=this.map.get(e);return this.map.delete(e),this.map.set(e,t),t}set(e,t){if(this.map.has(e)){const n=this.map.get(e);this.map.delete(e),n!==t&&Tr(n)}for(this.map.set(e,t);this.map.size>this.maxEntries;){const n=this.map.keys().next().value,i=this.map.get(n);this.map.delete(n),Tr(i)}}clear(){for(const e of this.map.values())Tr(e);this.map.clear()}}function Tr(a){var e,t,n,i,s,o;!a||typeof a!="object"||((t=(e=a.composite)==null?void 0:e.dispose)==null||t.call(e),(i=(n=a.bump)==null?void 0:n.dispose)==null||i.call(n),(o=(s=a.glow)==null?void 0:s.dispose)==null||o.call(s))}function Ca(a,e=null){var i,s,o;if(!a)return;const t=r=>{var c;return e?e.keepOrDispose(r):(c=r==null?void 0:r.dispose)==null?void 0:c.call(r)},n=Array.isArray(a.material)?a.material:a.material?[a.material]:[];for(const r of n)t(r);a.customDepthMaterial&&(t(a.customDepthMaterial),a.customDepthMaterial=null),((i=a.userData)==null?void 0:i.clonedGeometry)&&a.geometry&&((o=(s=a.geometry).dispose)==null||o.call(s),a.userData.clonedGeometry=!1)}function La(a,e,t,n){if(!a||!(t>0))return;const i=a.groups[a.groups.length-1];i&&i.materialIndex===n&&i.start+i.count===e?i.count+=t:a.addGroup(e,t,n)}const Fa={serif:"bold {size}pt 'Palatino Linotype', 'Book Antiqua', Palatino, 'Times New Roman', 'Liberation Serif', serif",sans:"bold {size}pt 'Segoe UI', 'Trebuchet MS', 'DejaVu Sans', Arial, sans-serif",mono:"bold {size}pt 'Cascadia Mono', Consolas, 'DejaVu Sans Mono', 'Courier New', monospace",display:"700 {size}pt 'Cinzel', 'Trajan Pro', 'Copperplate', 'Cambria', 'Palatino Linotype', 'Times New Roman', serif",classic:"{size}pt Arial, 'Liberation Sans', sans-serif"},Ra={d2:{cx:.5,cy:.5,maxW:.54,maxH:.54,baseScale:1},d6:{cx:.5,cy:.5,maxW:.54,maxH:.54,baseScale:1},d8:{cx:.5,cy:.53,maxW:.36,maxH:.34,baseScale:.92},d10:{cx:.5,cy:.575,maxW:.33,maxH:.29,baseScale:.78},d12:{cx:.5,cy:.5,maxW:.43,maxH:.4,baseScale:.92},d20:{cx:.5,cy:.53,maxW:.34,maxH:.31,baseScale:.86}};function bm(a,e){const t=Ra[a]||Ra.d6;return{cx:e*t.cx,cy:e*t.cy,maxW:e*t.maxW,maxH:e*t.maxH,baseScale:t.baseScale}}function Ar(a,e,t){const n=a==null?void 0:a.actualBoundingBoxAscent,i=a==null?void 0:a.actualBoundingBoxDescent,s=a==null?void 0:a.actualBoundingBoxLeft,o=a==null?void 0:a.actualBoundingBoxRight;if(Number.isFinite(n)&&Number.isFinite(i)&&n+i>0){const r=Number.isFinite(s)&&Number.isFinite(o)&&s+o>0,c=r?e+(s-o)/2:e,l=t+(n-i)/2;return{x:c,y:l,width:r?s+o:a.width||0,height:n+i,exact:!0}}return{x:e,y:t,width:(a==null?void 0:a.width)||0,height:0,exact:!1}}function Mm(a,e,t,n,i){let s=1;return e>0&&n>0&&(s=Math.min(s,n/e)),t>0&&i>0&&(s=Math.min(s,i/t)),s<1?Math.max(4,a*s):a}function Pa(a,e,t){const n=Math.max(1,Number(t)||16),i=String(a||"").trim().toLowerCase();return i&&Fa[i]?Fa[i].replace("{size}",String(n)):i?`${n}pt ${String(a).trim()}`:`${n}pt ${e||"Arial"}`}function Sm(a){if(!a)return"";const e=a.edge;return(Array.isArray(e)?e.length>0:Boolean(e&&String(e).trim()))?e:a.background}const Da=["swirl","marble_vein","nebula","hammered","magma"];function Em(a){let e=Number(a)|0||1;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Tm(a){if(!a)return null;const e=typeof a=="string"?a:a.procedural||a.name||"",t=String(e).toLowerCase();return Da.includes(t)?t:null}function Am(a,{ctx:e,bumpCtx:t=null,glowCtx:n=null,size:i,seed:s=1,accent:o="#ffffff"}){var c,l,h,d,u,g,m;if(!e||!(i>0)||!Da.includes(a))return!1;const r=Em(s*7919+a.length*131);if(e.save(),(c=t==null?void 0:t.save)==null||c.call(t),(l=n==null?void 0:n.save)==null||l.call(n),a==="swirl"){const p=r()*Math.PI*2,f=i*(.35+r()*.3),_=i*(.35+r()*.3);for(let y=0;y<14;y+=1){const x=p+y*.45;e.beginPath();const M=y/14*i;e.moveTo(-i*.1,M);for(let S=0;S<=i*1.1;S+=i/8){const L=Math.sin(S/i*Math.PI*2.5+x)*i*.09,w=Math.cos(M/i*Math.PI*2+x)*i*.05;e.lineTo(S,M+L+w)}e.strokeStyle=y%2===0?"rgba(255,255,255,0.18)":"rgba(0,0,0,0.16)",e.lineWidth=i*(.04+r()*.05),e.lineCap="round",e.stroke()}const v=e.createRadialGradient(f,_,i*.04,f,_,i*.55);v.addColorStop(0,"rgba(255,255,255,0.22)"),v.addColorStop(1,"rgba(0,0,0,0.12)"),e.fillStyle=v,e.fillRect(0,0,i,i)}else if(a==="marble_vein"){for(let p=0;p<6;p+=1){const f=r()*i,_=r()*i,v=e.createRadialGradient(f,_,0,f,_,i*(.28+r()*.3));v.addColorStop(0,p%2===0?"rgba(255,255,255,0.14)":"rgba(0,0,0,0.10)"),v.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=v,e.fillRect(0,0,i,i)}for(let p=0;p<7;p+=1){let f=r()*i,_=p%2===0?0:r()*i;const v=(r()-.5)*i*.14,y=i/10;e.beginPath(),(h=t==null?void 0:t.beginPath)==null||h.call(t),e.moveTo(f,_),(d=t==null?void 0:t.moveTo)==null||d.call(t,f,_);for(let M=0;M<12;M+=1)f+=v+(r()-.5)*i*.12,_+=y*(.6+r()*.7),e.lineTo(f,_),(u=t==null?void 0:t.lineTo)==null||u.call(t,f,_);const x=Math.max(1,i*(.004+r()*.01));e.strokeStyle=p%3===0?"rgba(255,255,255,0.28)":"rgba(0,0,0,0.22)",e.lineWidth=x,e.stroke(),t&&(t.strokeStyle="rgba(180,180,180,0.6)",t.lineWidth=x,t.stroke())}}else if(a==="nebula"){for(let p=0;p<6;p+=1){const f=r()*i,_=r()*i,v=i*(.22+r()*.36),y=e.createRadialGradient(f,_,0,f,_,v),x=p%3===0?"rgba(170,120,255,0.24)":p%3===1?"rgba(90,190,255,0.20)":"rgba(255,120,200,0.18)";y.addColorStop(0,x),y.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=y,e.fillRect(0,0,i,i)}for(let p=0;p<55;p+=1){const f=r()*i,_=r()*i,v=Math.max(.7,i*(.0025+r()*.007)),y=.45+r()*.55;e.fillStyle=`rgba(255,255,255,${y.toFixed(2)})`,e.beginPath(),e.arc(f,_,v,0,Math.PI*2),e.fill(),n&&p<18&&(n.fillStyle=`rgba(210,225,255,${(y*.7).toFixed(2)})`,n.beginPath(),n.arc(f,_,v*1.1,0,Math.PI*2),n.fill())}}else if(a==="hammered")for(let f=0;f<48;f+=1){const _=r()*i,v=r()*i,y=i*(.06+r()*.09),x=e.createRadialGradient(_-y*.25,v-y*.25,y*.05,_,v,y);if(x.addColorStop(0,"rgba(255,255,255,0.16)"),x.addColorStop(.65,"rgba(0,0,0,0.08)"),x.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=x,e.beginPath(),e.arc(_,v,y,0,Math.PI*2),e.fill(),t){const M=t.createRadialGradient(_,v,0,_,v,y);M.addColorStop(0,"rgba(130,130,130,0.75)"),M.addColorStop(.8,"rgba(235,235,235,0.35)"),M.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=M,t.beginPath(),t.arc(_,v,y,0,Math.PI*2),t.fill()}}else if(a==="magma"){e.fillStyle="rgba(18,8,6,0.35)",e.fillRect(0,0,i,i);for(let p=0;p<9;p+=1){let f=r()*i,_=r()*i;const v=[[f,_]];for(let x=0;x<7;x+=1)f+=(r()-.5)*i*.24,_+=(r()-.5)*i*.24,v.push([f,_]);const y=(x,M,S)=>{!x||(x.beginPath(),v.forEach(([L,w],T)=>T===0?x.moveTo(L,w):x.lineTo(L,w)),x.strokeStyle=M,x.lineWidth=S,x.lineCap="round",x.lineJoin="round",x.stroke())};y(e,"rgba(255,95,20,0.55)",i*.028),y(e,o||"#ffd15c",i*.011),y(t,"rgba(40,40,40,0.9)",i*.024),y(n,"rgba(255,115,25,0.85)",i*.02)}}return e.restore(),(g=t==null?void 0:t.restore)==null||g.call(t),(m=n==null?void 0:n.restore)==null||m.call(n),!0}const Ia={gem:{color:16777215,strength:.28,power:2.8,mode:0},fire:{color:16739098,strength:.9,power:2,mode:1},frost:{color:12578815,strength:.46,power:2.4,mode:2},storm:{color:16770155,strength:.52,power:2.5,mode:3},arcane:{color:13666559,strength:.46,power:2.3,mode:4},shadow:{color:9067760,strength:.55,power:2.2,mode:5}};function Cm(a,e){const t=String(a||"").trim().toLowerCase();return t&&Ia[t]?t:t==="none"?null:e==="glass"?"gem":null}const Lm=["float lwHash(vec3 p) {","  p = fract(p * 0.3183099 + 0.1);","  p *= 17.0;","  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));","}","float lwNoise(vec3 x) {","  vec3 i = floor(x);","  vec3 f = fract(x);","  f = f * f * (3.0 - 2.0 * f);","  return mix(","    mix(mix(lwHash(i), lwHash(i + vec3(1.0, 0.0, 0.0)), f.x),","        mix(lwHash(i + vec3(0.0, 1.0, 0.0)), lwHash(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),","    mix(mix(lwHash(i + vec3(0.0, 0.0, 1.0)), lwHash(i + vec3(1.0, 0.0, 1.0)), f.x),","        mix(lwHash(i + vec3(0.0, 1.0, 1.0)), lwHash(i + vec3(1.0, 1.0, 1.0)), f.x), f.y), f.z);","}","float lwFbm2(vec3 p) {","  float v = 0.625 * lwNoise(p);","  p = p * 2.03 + vec3(1.7, 9.2, 3.1);","  v += 0.3125 * lwNoise(p);","  return v;","}","float lwFbm(vec3 p) {","  float v = 0.0;","  float a = 0.5357;","  for (int i = 0; i < 3; i++) {","    v += a * lwNoise(p);","    p = p * 2.03 + vec3(1.7, 9.2, 3.1);","    a *= 0.5;","  }","  return v;","}"].join(`
`),Ba=a=>a==="fire"||a==="shadow";function Fm(a=null){return a&&!Ba(a)?{declarations:"",body:""}:{declarations:"varying vec3 vLwObj;",body:"vLwObj = normalize(position);"}}const za=["  vec3 lwP = vLwObj * 2.6;","  float lwT = uLwTime;","  vec3 lwWarp = vec3(lwFbm2(lwP + vec3(0.0, 0.0, lwT * 0.9)), lwFbm2(lwP + vec3(5.2, 1.3, -lwT * 0.7)), lwFbm2(lwP + vec3(2.1, 7.7, lwT * 0.5)));","  float lwN = lwFbm(lwP * 1.7 + lwWarp * 2.4 + vec3(0.0, -lwT * 1.4, -lwT * 1.1));","  float lwFlame = smoothstep(0.38, 0.78, lwN);","  vec3 lwFire = mix(vec3(0.55, 0.04, 0.0), vec3(1.0, 0.42, 0.04), smoothstep(0.42, 0.66, lwN));","  lwFire = mix(lwFire, vec3(1.0, 0.88, 0.5), smoothstep(0.68, 0.88, lwN));","  float lwFlick = 0.86 + 0.14 * sin(lwT * 13.0 + lwN * 9.0);","  gl_FragColor.rgb *= mix(1.0, mix(0.45, 1.0, lwFlame), lwOpen);","  gl_FragColor.rgb += lwFire * (lwFlame * 0.85 + lwFresnel * 0.7) * uLwRimStrength * lwFlick * lwOpen * gl_FragColor.a;","  gl_FragColor.rgb += vec3(1.0, 0.8, 0.45) * lwLabel * 0.32 * lwFlick * gl_FragColor.a;"],Na=["  vec3 lwP = vLwObj * 2.0;","  float lwT = uLwTime * 0.35;","  vec3 lwWarp = vec3(lwFbm2(lwP + vec3(0.0, 0.0, lwT)), lwFbm2(lwP + vec3(3.1, 1.7, -lwT)), lwFbm2(lwP + vec3(7.3, 2.2, lwT * 0.6)));","  float lwSmoke = lwFbm(lwP * 1.4 + lwWarp * 3.0);","  float lwWisp = smoothstep(0.5, 0.62, lwSmoke) * (1.0 - smoothstep(0.62, 0.8, lwSmoke));","  float lwBreath = 0.8 + 0.2 * sin(uLwTime * 1.6);","  gl_FragColor.rgb *= mix(1.0, mix(0.22, 0.95, smoothstep(0.25, 0.75, lwSmoke)), lwOpen);","  gl_FragColor.rgb += uLwRimColor * (lwWisp * 0.55 + lwFresnel * 0.9 * lwBreath) * uLwRimStrength * lwOpen * gl_FragColor.a;","  gl_FragColor.rgb += vec3(0.86, 0.78, 1.0) * lwLabel * 0.3 * gl_FragColor.a;"];function Rm(a=null){const e=!a||Ba(a),t=["uniform float uLwTime;","uniform vec3 uLwRimColor;","uniform float uLwRimStrength;","uniform float uLwRimPower;",...a?[]:["uniform float uLwEffectMode;"],...e?["uniform sampler2D uLwLabelMap;","uniform float uLwHasLabel;","varying vec3 vLwObj;",Lm]:[]].join(`
`),n=["{","  vec3 lwViewDir = normalize(vViewPosition);","  float lwNdotV = clamp(abs(dot(normalize(normal), lwViewDir)), 0.0, 1.0);","  float lwFresnel = pow(1.0 - lwNdotV, uLwRimPower);"],i=["  float lwLabel = 0.0;","  #ifdef USE_UV","  if (uLwHasLabel > 0.5) lwLabel = clamp(texture2D(uLwLabelMap, vUv).r * 1.6, 0.0, 1.0);","  #endif","  float lwOpen = 1.0 - lwLabel;"];if(a==="gem")return{declarations:t,body:[...n,"  gl_FragColor.rgb += uLwRimColor * lwFresnel * uLwRimStrength * gl_FragColor.a;","}"].join(`
`)};if(a==="frost")return{declarations:t,body:[...n,"  float lwMod = 0.85 + 0.18 * cos(uLwTime * 2.4 + lwNdotV * 6.0);","  gl_FragColor.rgb += uLwRimColor * lwFresnel * uLwRimStrength * lwMod * gl_FragColor.a;","}"].join(`
`)};if(a==="storm")return{declarations:t,body:[...n,"  float lwFlash = pow(max(0.0, sin(uLwTime * 7.5)), 8.0);","  float lwMod = 0.55 + 0.95 * lwFlash;","  gl_FragColor.rgb += uLwRimColor * lwFresnel * uLwRimStrength * lwMod * gl_FragColor.a;","}"].join(`
`)};if(a==="arcane")return{declarations:t,body:[...n,"  float lwShift = 0.5 + 0.5 * sin(uLwTime * 2.8 + lwNdotV * 4.0);","  vec3 lwTint = mix(uLwRimColor, vec3(0.45, 0.85, 1.0), lwShift * 0.45);","  float lwMod = 0.8 + 0.25 * lwShift;","  gl_FragColor.rgb += lwTint * lwFresnel * uLwRimStrength * lwMod * gl_FragColor.a;","}"].join(`
`)};if(a==="fire")return{declarations:t,body:[...n,...i,...za,"}"].join(`
`)};if(a==="shadow")return{declarations:t,body:[...n,...i,...Na,"}"].join(`
`)};const s=[...n,...i,"  vec3 lwTint = uLwRimColor;","  float lwMod = 1.0;","  if (uLwEffectMode > 0.5 && uLwEffectMode < 1.5) {",...za,"  } else if (uLwEffectMode >= 1.5 && uLwEffectMode < 2.5) {","    lwMod = 0.85 + 0.18 * cos(uLwTime * 2.4 + lwNdotV * 6.0);","  } else if (uLwEffectMode >= 2.5 && uLwEffectMode < 3.5) {","    float lwFlash = pow(max(0.0, sin(uLwTime * 7.5)), 8.0);","    lwMod = 0.55 + 0.95 * lwFlash;","  } else if (uLwEffectMode >= 3.5 && uLwEffectMode < 4.5) {","    float lwShift = 0.5 + 0.5 * sin(uLwTime * 2.8 + lwNdotV * 4.0);","    lwTint = mix(uLwRimColor, vec3(0.45, 0.85, 1.0), lwShift * 0.45);","    lwMod = 0.8 + 0.25 * lwShift;","  } else if (uLwEffectMode >= 4.5) {",...Na,"  }","  if (uLwEffectMode < 0.5 || (uLwEffectMode > 1.5 && uLwEffectMode < 4.5)) {","    gl_FragColor.rgb += lwTint * lwFresnel * uLwRimStrength * lwMod * gl_FragColor.a;","  }","}"].join(`
`);return{declarations:t,body:s}}function Pm(a,e,t,n=null){const i=e?Ia[e]:null;if(!i||!a||typeof a!="object")return!1;const s=new we(n||i.color),o=Rm(e),r=Fm(e),c={uLwRimColor:{value:s},uLwRimStrength:{value:i.strength},uLwRimPower:{value:i.power},uLwEffectMode:{value:i.mode},uLwLabelMap:{value:null},uLwHasLabel:{value:0}},l=a.onBeforeCompile;return a.customProgramCacheKey=()=>`lw-dice-effect-${e}`,a.onBeforeCompile=(h,d)=>{typeof l=="function"&&l.call(a,h,d),c.uLwHasLabel.value=c.uLwLabelMap.value?1:0,Object.assign(h.uniforms,c,{uLwTime:t}),r.declarations&&typeof h.vertexShader=="string"&&(h.vertexShader=h.vertexShader.replace("void main() {",`${r.declarations}
void main() {`).replace("#include <begin_vertex>",`#include <begin_vertex>
${r.body}`)),h.fragmentShader=h.fragmentShader.replace("void main() {",`${o.declarations}
void main() {`).replace("#include <dithering_fragment>",`${o.body}
#include <dithering_fragment>`)},a.userData={...a.userData||{},lwEffect:e,lwUniforms:c},!0}function Dm(a,e){var n;const t=(n=a==null?void 0:a.userData)==null?void 0:n.lwUniforms;return!t||!e?!1:(t.uLwLabelMap.value=e,t.uLwHasLabel.value=1,!0)}const Cr={star:(a,e)=>{a.beginPath();for(let t=0;t<10;t+=1){const n=-Math.PI/2+t*Math.PI/5,i=t%2===0?e:e*.42,s=Math.cos(n)*i,o=Math.sin(n)*i;t===0?a.moveTo(s,o):a.lineTo(s,o)}a.closePath()},sun:(a,e)=>{a.beginPath(),a.arc(0,0,e*.44,0,Math.PI*2);for(let t=0;t<8;t+=1){const n=t*Math.PI/4,i=n-.14,s=n+.14;a.moveTo(Math.cos(i)*e*.56,Math.sin(i)*e*.56),a.lineTo(Math.cos(n)*e,Math.sin(n)*e),a.lineTo(Math.cos(s)*e*.56,Math.sin(s)*e*.56),a.closePath()}},moon:(a,e)=>{a.beginPath(),a.arc(0,0,e*.85,.35*Math.PI,1.65*Math.PI,!1),a.arc(e*.36,0,e*.68,1.45*Math.PI,.55*Math.PI,!0),a.closePath()},sword:(a,e)=>{a.beginPath(),a.moveTo(0,-e),a.lineTo(e*.18,-e*.65),a.lineTo(e*.14,e*.35),a.lineTo(e*.52,e*.35),a.lineTo(e*.52,e*.52),a.lineTo(e*.12,e*.52),a.lineTo(e*.12,e*.96),a.lineTo(-e*.12,e*.96),a.lineTo(-e*.12,e*.52),a.lineTo(-e*.52,e*.52),a.lineTo(-e*.52,e*.35),a.lineTo(-e*.14,e*.35),a.lineTo(-e*.18,-e*.65),a.closePath()},shield:(a,e)=>{a.beginPath(),a.moveTo(0,-e*.9),a.lineTo(e*.78,-e*.58),a.lineTo(e*.68,e*.18),a.quadraticCurveTo(e*.45,e*.72,0,e*.95),a.quadraticCurveTo(-e*.45,e*.72,-e*.68,e*.18),a.lineTo(-e*.78,-e*.58),a.closePath()},skull:(a,e)=>{a.beginPath(),a.arc(0,-e*.14,e*.66,Math.PI,0,!1),a.lineTo(e*.6,e*.22),a.lineTo(e*.36,e*.42),a.lineTo(e*.32,e*.82),a.lineTo(-e*.32,e*.82),a.lineTo(-e*.36,e*.42),a.lineTo(-e*.6,e*.22),a.closePath(),a.moveTo(-e*.1,-e*.04),a.arc(-e*.25,-e*.04,e*.15,0,Math.PI*2,!0),a.moveTo(e*.4,-e*.04),a.arc(e*.25,-e*.04,e*.15,0,Math.PI*2,!0),a.moveTo(0,e*.14),a.lineTo(-e*.09,e*.34),a.lineTo(e*.09,e*.34),a.closePath()},diamond:(a,e)=>{a.beginPath(),a.moveTo(0,-e*.95),a.lineTo(e*.72,0),a.lineTo(0,e*.95),a.lineTo(-e*.72,0),a.closePath()},spark:(a,e)=>{a.beginPath();for(let t=0;t<8;t+=1){const n=t*Math.PI/4,i=t%2===0?e:e*.26,s=Math.cos(n)*i,o=Math.sin(n)*i;t===0?a.moveTo(s,o):a.lineTo(s,o)}a.closePath()},"fate-plus":(a,e)=>{const t=e*.26;a.beginPath(),a.moveTo(-t,-e*.8),a.lineTo(t,-e*.8),a.lineTo(t,-t),a.lineTo(e*.8,-t),a.lineTo(e*.8,t),a.lineTo(t,t),a.lineTo(t,e*.8),a.lineTo(-t,e*.8),a.lineTo(-t,t),a.lineTo(-e*.8,t),a.lineTo(-e*.8,-t),a.lineTo(-t,-t),a.closePath()},"fate-minus":(a,e)=>{const t=e*.26;a.beginPath(),a.rect(-e*.8,-t,e*1.6,t*2)}};function vs(a){if(typeof a!="string")return null;const e=a.trim();if(e.startsWith("icon:")){const t=e.slice(5).trim().toLowerCase();return Cr[t]?{kind:"builtin",name:t}:null}if(e.startsWith("svg:")){const t=e.slice(4).trim();return t?{kind:"svg",d:t}:null}return null}function Im(a){if(!Array.isArray(a)||a.length<4)return null;const[e,t,n,i]=a;return[[[],[0,0,0],[t,i,n],[e,n,i],[t,e,i],[e,t,n]],[[],[0,0,0],[t,n,i],[n,e,i],[t,i,e],[n,t,e]],[[],[0,0,0],[i,n,t],[n,i,e],[i,t,e],[n,e,t]],[[],[0,0,0],[i,t,n],[e,i,n],[i,e,t],[e,n,t]]]}function li(a,e,{cx:t,cy:n,radius:i,fill:s,stroke:o=null,lineWidth:r=4}){if(!a||!e)return!1;if(a.save(),a.translate(t,n),e.kind==="builtin"&&Cr[e.name])return Cr[e.name](a,i),o&&(a.strokeStyle=o,a.lineWidth=r,a.lineJoin="round",a.stroke()),a.fillStyle=s,a.fill(),a.restore(),!0;if(e.kind==="svg"&&typeof Path2D=="function"){a.scale(i,i);const c=new Path2D(e.d);return o&&(a.strokeStyle=o,a.lineWidth=r/Math.max(1,i),a.lineJoin="round",a.stroke(c)),a.fillStyle=s,a.fill(c),a.restore(),!0}return a.restore(),!1}const Bm={baseScale:100,bumpMapping:!0},hi=class{constructor(e){this.geometries={},this.materials_cache=new wm,this.cache_hits=0,this.cache_misses=0,this.label_color="",this.dice_color="",this.edge_color="",this.label_outline="",this.label_font="",this.dice_texture="",this.dice_material="",this.dice_effect="",this.shaderTime={value:0},this.material_options={specular:16777215,color:11908533,shininess:5,flatShading:!0},Object.assign(this,Bm,e)}updateConfig(e={}){var n;const t=(n=e.baseScale)!=null?n:e.scale;Object.assign(this,e),t&&t!==this._builtScale&&(this.baseScale=t,this.scaleGeometry())}setBumpMapping(e){this.bumpMapping=e,this.materials_cache.clear()}labelledPreset(e,t){if(!Array.isArray(t)||!t.length)return e;if(e.shape==="d4"){const i=Im(t);return i?Object.assign(Object.create(Object.getPrototypeOf(e)),e,{labels:i}):e}const n=["d2","d10"].includes(e.shape)?[""]:["",""];return Object.assign(Object.create(Object.getPrototypeOf(e)),e,{labels:[...n,...t]})}create(e,t,n=null){let i=this.get(e);if(!i)return null;const s=this.labelledPreset(i,n);let o=this.geometries[e];if(o||(o=this.createGeometry(i.shape,i.scale*this.baseScale),this.geometries[e]=o,this._builtScale=this.baseScale),!o)return null;this.setMaterialInfo();let r=new Ge(o,this.createMaterials(s,this.baseScale/2,1));switch(r.userData={...r.userData||{},shownPreset:s},r.result=[],r.shape=i.shape,r.rerolls=0,r.resultReason="natural",r.mass=i.mass,r.getFaceValue=function(){let c=this.resultReason,l=new N(0,0,this.shape=="d4"?-1:1),h,d=Math.PI*2,u=this.geometry.getAttribute("normal").array;for(let v=0,y=this.geometry.groups.length;v<y;++v){let x=this.geometry.groups[v];if(x.materialIndex==0)continue;let M=x.start*3,L=new N(u[M],u[M+1],u[M+2]).clone().applyQuaternion(this.body.quaternion).angleTo(l);L<d&&(d=L,h=x)}let g=h.materialIndex-1,m=2;const p=hi.dice[this.notation.type];if(this.shape=="d4"){let v=g-1==0?5:g;return{value:g,label:p.labels[g-1][v][0],reason:c}}["d10","d2"].includes(this.shape)&&(g+=1,m-=1);let f=p.values[(g-1)%p.values.length],_=p.labels[(g-1)%(p.labels.length-2)+m];return{value:f,label:_,reason:c}},r.storeRolledValue=function(c){this.resultReason=c||this.resultReason,this.result.push(this.getFaceValue())},r.getLastValue=function(){return!this.result||this.result.length<1?{value:void 0,label:"",reason:""}:this.result[this.result.length-1]},r.ignoreLastValue=function(c){let l=this.getLastValue();l.value!==void 0&&(l.ignore=c,this.setLastValue(l))},r.setLastValue=function(c){if(!(!this.result||this.result.length<1)&&!(!c||c.length<1))return this.result[this.result.length-1]=c},i.color&&(r.material[0].color=new we(i.color),r.material[0].emissive=new we(i.color),r.material[0].emissiveIntensity=1,r.material[0].needsUpdate=!0),i.values.length){case 1:return this.fixmaterials(r,1);case 2:return this.fixmaterials(r,2);case 3:return this.fixmaterials(r,3);default:return r}}get(e){let t;return hi.dice.hasOwnProperty(e)?t=hi.dice[e]:(t=new Jp(e),hi.dice[e]=t),t}getGeometry(e){return this.geometries[e]}scaleGeometry(){Object.values(this.geometries).forEach(e=>{var t;return(t=e==null?void 0:e.dispose)==null?void 0:t.call(e)}),this.geometries={},this._builtScale=this.baseScale}createMaterials(e,t,n,i=!0,s=0){var g,m,p,f;let o=[],r=e.labels;e.shape=="d4"&&(r=e.labels[s],t=this.baseScale/2,n=this.baseScale*2);const c=this.dice_material!="none"?Cm(this.dice_effect,this.dice_material):null,l=((g=Sr[this.dice_material])==null?void 0:g.metalness)||0,h=Boolean(this.label_glow>0&&l>0||c==="fire"||c==="shadow");for(var d=0;d<r.length;++d){var u;this.dice_material!="none"?(u=new cr(Sr[this.dice_material]),u.envMapIntensity=((p=(m=Sr[this.dice_material])==null?void 0:m.envMapIntensity)!=null?p:1)*(this.shine||0),c&&Pm(u,c,this.shaderTime,((f=this.colordata)==null?void 0:f.rim)||null)):u=new _d(this.material_options);let _;if(d==0){let v={name:"none"};!(this.edge_color_rand&&this.edge_color_rand!==this.dice_color_rand)&&this.dice_texture_rand.composite!="source-over"&&(v=this.dice_texture_rand);const x=!v.name||v.name==="none";_=this.createTextMaterial(e,r,d,t,n,v,this.label_color_rand,this.label_outline_rand,this.edge_color_rand,i,{needBump:!1,needGlow:!1,isPlainEdge:x}),u.map=_.composite,this.applyGlow(u,_)}else{const v=Boolean(e.shape!="d4"&&e.normals[d]),y=Boolean(this.bumpMapping&&!v);if(_=this.createTextMaterial(e,r,d,t,n,this.dice_texture_rand,this.label_color_rand,this.label_outline_rand,this.dice_color_rand,i,{needBump:y,needGlow:h,isPlainEdge:!1}),u.map=_.composite,Dm(u,_.glow),this.label_glow>0&&l>0&&_.glow&&u.emissive&&(u.emissiveMap=_.glow,u.emissive=new we(16777215),u.emissiveIntensity=this.label_glow*l),this.applyGlow(u,_),this.bumpMapping){{let x=.75;t>35&&(x=1),t>40&&(x=2.5),t>45&&(x=4),u.bumpScale=x}_.bump&&(u.bumpMap=_.bump),v&&(u.bumpMap=new yt(e.normals[d]),u.bumpScale=4,u.bumpMap.needsUpdate=!0)}}fm(u,d===0&&this.dice_texture_rand.composite!=="source-over"?this.dice_texture_rand:d===0?null:this.dice_texture_rand,1),o.push(u)}return o}createTextMaterial(e,t,n,i,s,o,r,c,l,h,{needBump:d=!0,needGlow:u=!0,isPlainEdge:g=!1}={}){if(t[n]===void 0)return null;o=o||this.dice_texture_rand,r=r||this.label_color_rand,c=c||this.label_outline_rand,l=l||this.dice_color_rand,h=h==null?!0:h;let m=t[n],p=!1,f=m;m instanceof HTMLImageElement?f=m.src:m instanceof Array&&m.forEach(Q=>{f+=Q.src});const _=this.label_font||e.font||"",v=`${d?"B":""}${u?"G":""}${g?"E":""}`;let y=e.type+f+n+o.name+r+c+l+_+v;e.shape=="d4"&&(y=e.type+f+o.name+r+c+l+_+v);const x=h?this.materials_cache.get(y):null;if(x!=null)return this.cache_hits++,x;const M=e.shape=="d4"?i+s:i+i*2*s,S=vm(M,{isPlainEdge:g,maxSize:this.maxTextureSize||256}),L=Math.max(1.5,Math.round(S/512*5*10)/10),w=Math.max(1.5,Math.round(S/512*4*10)/10);let T=document.createElement("canvas");T.width=T.height=S;let R=T.getContext("2d",{alpha:!0}),D=null,I=null;d&&(D=document.createElement("canvas"),D.width=D.height=S,I=D.getContext("2d",{alpha:!0}));let z=null,C=null;if(u&&(z=document.createElement("canvas"),z.width=z.height=S,C=z.getContext("2d",{alpha:!1}),C.fillStyle="#000000",C.fillRect(0,0,S,S)),R.fillStyle=l,R.fillRect(0,0,T.width,T.height),I&&(I.fillStyle="#FFFFFF",I.fillRect(0,0,D.width,D.height)),g&&n===0){const U={composite:new si(T),bump:null,glow:null};return h&&(this.cache_misses++,this.materials_cache.set(y,U)),U}const B=Tm(o);if(B?(Am(B,{ctx:R,bumpCtx:I,glowCtx:C,size:T.width,seed:n+1,accent:r}),R.globalCompositeOperation="source-over"):o.texture&&o.name!=""&&o.name!="none"?(R.globalCompositeOperation=o.composite||"source-over",R.drawImage(o.texture,0,0,T.width,T.height),R.globalCompositeOperation="source-over",I&&o.bump&&(I.globalCompositeOperation="source-over",I.drawImage(o.bump,0,0,T.width,T.height))):R.globalCompositeOperation="source-over",R.globalCompositeOperation="source-over",R.textAlign="center",R.textBaseline="middle",I&&(I.textAlign="center",I.textBaseline="middle"),C&&(C.textAlign="center",C.textBaseline="middle"),e.shape!="d4"){let U={d8:{even:-7.5,odd:-127.5},d10:{all:-6},d12:{all:5},d20:{all:-7.5}}[e.shape];if(U){let J;if(U.hasOwnProperty("all")?J=U.all:n>0&&n%2!=0?J=U.odd:J=U.even,J&&J!=0){var P=T.width/2,V=T.height/2;const te=J*(Math.PI/180);R.translate(P,V),R.rotate(te),R.translate(-P,-V),I&&(I.translate(P,V),I.rotate(te),I.translate(-P,-V)),C&&(C.translate(P,V),C.rotate(te),C.translate(-P,-V))}}if(m instanceof HTMLImageElement)p=!0,R.drawImage(m,0,0,m.width,m.height,0,0,T.width,T.height);else if(vs(m)){const J=vs(m),te=T.width/2,ie=e.shape==="d10"?T.height*.56:T.height/2,H=T.width*(e.shape==="d10"?.18:.25),Ee=c!="none"&&c!=l;li(R,J,{cx:te,cy:ie,radius:H,fill:r,stroke:Ee?c:null,lineWidth:L}),I&&li(I,J,{cx:te,cy:ie,radius:H,fill:"#000000",stroke:Ee?"#000000":null,lineWidth:L}),C&&li(C,J,{cx:te,cy:ie,radius:H,fill:r})}else{const J=bm(e.shape,S);let te=S/(1+2*s)*J.baseScale,ie=m.split(`
`);ie.length>1&&(te=te/ie.length);const H=Fe=>{const He=Pa(this.label_font,e.font,Fe);R.font=He,I&&(I.font=He),C&&(C.font=He)},Ee=Fe=>{R.textBaseline=Fe,I&&(I.textBaseline=Fe),C&&(C.textBaseline=Fe)};Ee("alphabetic"),H(te);const _e=ie.map(Fe=>Fe.trim()||Fe);let ve=0,le=0,Oe=!0;for(const Fe of _e){const He=Ar(R.measureText(Fe),J.cx,J.cy);He.exact||(Oe=!1),He.width>ve&&(ve=He.width),He.height>le&&(le=He.height)}const Me=Mm(te,ve,le*ie.length,J.maxW,J.maxH);Me!==te&&(te=Me,H(te)),Oe||Ee("middle");const ge=(le>0?le*(Me/te||1):R.measureText("M").width)*1.25,it=ge*(ie.length-1),lt=c!="none"&&c!=l;for(let Fe=0,He=ie.length;Fe<He;Fe++){let Je=ie[Fe].trim();const Be=Je=="6"||Je=="9",Lt=Math.max(2,S*.017),Ft=Math.max(3,S*.028),F=J.cy-it/2+Fe*ge-(Be?Lt*.85:0),E=Ar(R.measureText(ie[Fe]),J.cx,F);if(lt&&(R.strokeStyle=c,R.lineWidth=L,R.strokeText(ie[Fe],E.x,E.y),I&&(I.strokeStyle="#000000",I.lineWidth=L,I.strokeText(ie[Fe],E.x,E.y))),R.fillStyle=r,R.fillText(ie[Fe],E.x,E.y),I&&(I.fillStyle="#000000",I.fillText(ie[Fe],E.x,E.y)),C&&(C.fillStyle=r,C.fillText(ie[Fe],E.x,E.y)),Be){const Z=J.cx,ee=F+(E.height>0?E.height/2:te*.45)+Ft,ne=(se,be,j)=>{!se||(se.beginPath(),se.arc(Z,ee,Lt,0,Math.PI*2),j&&(se.strokeStyle=j,se.lineWidth=Math.max(1.2,L*.75),se.stroke()),se.fillStyle=be,se.fill())};ne(R,r,lt?c:null),ne(I,"#000000",lt?"#000000":null),ne(C,r,null)}}}}else{var P=T.width/2,V=T.height/2;const J=Pa(this.label_font,e.font,S/128*21);R.font=J,I&&(I.font=J),C&&(C.font=J),R.textBaseline="alphabetic",I&&(I.textBaseline="alphabetic"),C&&(C.textBaseline="alphabetic");const te=V-S*.265;for(let ie=0;ie<m.length;ie++){if(m[ie]instanceof HTMLImageElement){let H=m[ie].width/T.width;R.drawImage(m[ie],0,0,m[ie].width,m[ie].height,100/H,25/H,60/H,60/H)}else if(vs(m[ie])){const H=vs(m[ie]),Ee=c!="none"&&c!=l,_e=S*.095;li(R,H,{cx:P,cy:te,radius:_e,fill:r,stroke:Ee?c:null,lineWidth:w}),I&&li(I,H,{cx:P,cy:te,radius:_e,fill:"#000000",stroke:Ee?"#000000":null,lineWidth:w}),C&&li(C,H,{cx:P,cy:te,radius:_e,fill:r})}else{const H=Ar(R.measureText(m[ie]),P,te);H.exact||(R.textBaseline="middle",I&&(I.textBaseline="middle"),C&&(C.textBaseline="middle")),c!="none"&&c!=l&&(R.strokeStyle=c,R.lineWidth=L,R.strokeText(m[ie],H.x,H.y),I&&(I.strokeStyle="#000000",I.lineWidth=L,I.strokeText(m[ie],H.x,H.y))),R.fillStyle=r,R.fillText(m[ie],H.x,H.y),I&&(I.fillStyle="#000000",I.fillText(m[ie],H.x,H.y)),C&&(C.fillStyle=r,C.fillText(m[ie],H.x,H.y))}R.translate(P,V),R.rotate(Math.PI*2/3),R.translate(-P,-V),I&&(I.translate(P,V),I.rotate(Math.PI*2/3),I.translate(-P,-V)),C&&(C.translate(P,V),C.rotate(Math.PI*2/3),C.translate(-P,-V))}}var G=new si(T),O=!p&&D?new si(D):null,X=z?new si(z):null;return h&&(this.cache_misses++,this.materials_cache.set(y,{composite:G,bump:O,glow:X})),{composite:G,bump:O,glow:X}}applyColorSet(e){var t;this.colordata=e,this.label_color=e.foreground,this.dice_color=e.background,this.label_outline=e.outline,this.label_font=e.font||"",this.dice_texture=e.texture,this.dice_material=((t=e==null?void 0:e.texture)==null?void 0:t.material)||"none",this.edge_color=Sm(e),this.dice_glow=Er(e.light)?0:Ta(e.glow),this.dice_effect=e.effect||""}applyGlow(e,t){Qp(e,t==null?void 0:t.composite,this.dice_glow)}setMaterialInfo(e=""){let t=this.colordata,n=this.dice_texture,i=this.dice_material;if(this.dice_color_rand="",this.label_color_rand="",this.label_outline_rand="",this.dice_texture_rand="",this.dice_material_rand="",this.edge_color_rand="",Array.isArray(this.dice_color)){var s=Math.floor(Math.random()*this.dice_color.length);Array.isArray(this.label_color)&&this.label_color.length==this.dice_color.length&&(this.label_color_rand=this.label_color[s],Array.isArray(this.label_outline)&&this.label_outline.length==this.label_color.length&&(this.label_outline_rand=this.label_outline[s])),Array.isArray(this.dice_texture)&&this.dice_texture.length==this.dice_color.length&&(this.dice_texture_rand=this.dice_texture[s],this.dice_material_rand=this.dice_texture_rand.material),Array.isArray(this.edge_color)&&this.edge_color.length==this.dice_color.length&&(this.edge_color_rand=this.edge_color[s]),this.dice_color_rand=this.dice_color[s]}else this.dice_color_rand=this.dice_color;if(this.edge_color_rand=="")if(Array.isArray(this.edge_color)){var s=Math.floor(Math.random()*this.edge_color.length);this.edge_color_rand=this.edge_color[s]}else this.edge_color_rand=this.edge_color;if(this.label_color_rand==""&&Array.isArray(this.label_color)){var s=this.label_color[Math.floor(Math.random()*this.label_color.length)];Array.isArray(this.label_outline)&&this.label_outline.length==this.label_color.length&&(this.label_outline_rand=this.label_outline[s]),this.label_color_rand=this.label_color[s]}else this.label_color_rand==""&&(this.label_color_rand=this.label_color);if(this.label_outline_rand==""&&Array.isArray(this.label_outline)){var s=this.label_outline[Math.floor(Math.random()*this.label_outline.length)];this.label_outline_rand=this.label_outline[s]}else this.label_outline_rand==""&&(this.label_outline_rand=this.label_outline);this.dice_texture_rand==""&&Array.isArray(this.dice_texture)?(this.dice_texture_rand=this.dice_texture[Math.floor(Math.random()*this.dice_texture.length)],this.dice_material_rand=this.dice_texture_rand.material||this.dice_material):this.dice_texture_rand==""&&(this.dice_texture_rand=this.dice_texture,this.dice_material_rand=this.dice_texture_rand.material||this.dice_material),this.dice_material_rand==""&&Array.isArray(this.dice_material)?this.dice_material_rand=this.dice_material[Math.floor(Math.random()*this.dice_material.length)]:this.dice_material_rand==""&&(this.dice_material_rand=this.dice_material),this.colordata&&this.colordata.id!=t.id&&this.applyColorSet(t,n,i)}calc_texture_size(e){return Math.pow(2,Math.floor(Math.log(e)/Math.log(2)))}createGeometry(e,t,n=!1){const i=n?"create_shape":"create_geom";switch(e){case"d2":var s=new ar(1*t,1*t,.1*t,32);return s.cannon_shape=new Tf(1*t,1*t,.1*t,8),s;case"d4":return this[i](Ct.d4.vertices,Ct.d4.faces,t,-.1,Math.PI*7/6,.96);case"d6":return this[i](Ct.d6.vertices,Ct.d6.faces,t,.1,Math.PI/4,.96);case"d8":return this[i](Ct.d8.vertices,Ct.d8.faces,t,0,-Math.PI/4/2,.965);case"d10":return this[i](Ct.d10.vertices,Ct.d10.faces,t,.3,Math.PI,.945);case"d12":return this[i](Ct.d12.vertices,Ct.d12.faces,t,.2,-Math.PI/4/2,.968);case"d20":return this[i](Ct.d20.vertices,Ct.d20.faces,t,-.2,-Math.PI/4/2,.955);default:return console.error(`Geometry for ${e} is not available`),null}}fixmaterials(e,t){for(let i=0,s=e.geometry.groups.length;i<s;++i){var n=e.geometry.groups[i].materialIndex-2;if(n<t)continue;let o=n%t;e.geometry.groups[i].materialIndex=o+2}return e.geometry.elementsNeedUpdate=!0,e}create_shape(e,t,n){for(var i=new Array(e.length),s=0;s<e.length;++s)i[s]=new N().fromArray(e[s]).normalize();for(var o=new Array(e.length),r=new Array(t.length),s=0;s<i.length;++s){var c=i[s];o[s]=new b(c.x*n,c.y*n,c.z*n)}for(var s=0;s<t.length;++s)r[s]=t[s].slice(0,t[s].length-1);return new Tn({vertices:o,faces:r})}make_geom(e,t,n,i,s){let o=new ht;for(let m=0;m<e.length;++m)e[m]=e[m].multiplyScalar(n);let r=[];const c=[],l=[],h=new N,d=new N;let u,g=0;for(let m=0;m<t.length;++m){let p=t[m],f=p.length-1,_=Math.PI*2/f;u=p[f]+1;for(let y=0;y<f-2;++y)r.push(...e[p[0]].toArray()),r.push(...e[p[y+1]].toArray()),r.push(...e[p[y+2]].toArray()),h.subVectors(e[p[y+2]],e[p[y+1]]),d.subVectors(e[p[0]],e[p[y+1]]),h.cross(d),h.normalize(),c.push(...h.toArray()),c.push(...h.toArray()),c.push(...h.toArray()),l.push((Math.cos(s)+1+i)/2/(1+i),(Math.sin(s)+1+i)/2/(1+i)),l.push((Math.cos(_*(y+1)+s)+1+i)/2/(1+i),(Math.sin(_*(y+1)+s)+1+i)/2/(1+i)),l.push((Math.cos(_*(y+2)+s)+1+i)/2/(1+i),(Math.sin(_*(y+2)+s)+1+i)/2/(1+i));let v=(f-2)*3;La(o,g,v,u),g+=v}return o.setAttribute("position",new tt(r,3)),o.setAttribute("normal",new tt(c,3)),o.setAttribute("uv",new tt(l,2)),o.boundingSphere=new kn(new N,n),o}make_d10_geom(e,t,n,i,s){let o=new ht;for(let y=0;y<e.length;++y)e[y]=e[y].multiplyScalar(n);let r=[];const c=[],l=[],h=new N,d=new N;let u,g=0;for(let y=0;y<t.length;++y){let x=t[y],M=x.length-1,S=Math.PI*2/M;u=x[M]+1;var m=.65,p=.85,f=1-1*p,_=1-.895/1.105*p,v=1;for(let w=0;w<M-2;++w)r.push(...e[x[0]].toArray()),r.push(...e[x[w+1]].toArray()),r.push(...e[x[w+2]].toArray()),h.subVectors(e[x[w+2]],e[x[w+1]]),d.subVectors(e[x[0]],e[x[w+1]]),h.cross(d),h.normalize(),c.push(...h.toArray()),c.push(...h.toArray()),c.push(...h.toArray()),t[y][t[y].length-1]==-1||w>=2?(l.push((Math.cos(s)+1+i)/2/(1+i),(Math.sin(s)+1+i)/2/(1+i)),l.push((Math.cos(S*(w+1)+s)+1+i)/2/(1+i),(Math.sin(S*(w+1)+s)+1+i)/2/(1+i)),l.push((Math.cos(S*(w+2)+s)+1+i)/2/(1+i),(Math.sin(S*(w+2)+s)+1+i)/2/(1+i))):w==0?(l.push(.5-m/2,_),l.push(.5,f),l.push(.5+m/2,_)):w==1&&(l.push(.5-m/2,_),l.push(.5+m/2,_),l.push(.5,v));let L=(M-2)*3;La(o,g,L,u),g+=L}return o.setAttribute("position",new tt(r,3)),o.setAttribute("normal",new tt(c,3)),o.setAttribute("uv",new tt(l,2)),o.boundingSphere=new kn(new N,n),o}chamfer_geom(e,t,n){for(var i=[],s=[],o=new Array(e.length),r=0;r<e.length;++r)o[r]=[];for(var r=0;r<t.length;++r){for(var c=t[r],l=c.length-1,h=new N,d=new Array(l),u=0;u<l;++u){var g=e[c[u]].clone();h.add(g),o[c[u]].push(d[u]=i.push(g)-1)}h.divideScalar(l);for(var u=0;u<l;++u){var g=i[d[u]];g.subVectors(g,h).multiplyScalar(n).addVectors(g,h)}d.push(c[l]),s.push(d)}for(var r=0;r<t.length-1;++r)for(var u=r+1;u<t.length;++u){for(var m=[],p=-1,f=0;f<t[r].length-1;++f){var _=t[u].indexOf(t[r][f]);_>=0&&_<t[u].length-1&&(p>=0&&f!=p+1?m.unshift([r,f],[u,_]):m.push([r,f],[u,_]),p=f)}m.length==4&&s.push([s[m[0][0]][m[0][1]],s[m[1][0]][m[1][1]],s[m[3][0]][m[3][1]],s[m[2][0]][m[2][1]],-1])}for(var r=0;r<o.length;++r){for(var v=o[r],d=[v[0]],y=v.length-1;y;){for(var f=t.length;f<s.length;++f){var x=s[f].indexOf(d[d.length-1]);if(x>=0&&x<4){--x==-1&&(x=3);var M=s[f][x];if(v.indexOf(M)>=0){d.push(M);break}}}--y}d.push(-1),s.push(d)}return{vectors:i,faces:s}}create_geom(e,t,n,i,s,o){for(var r=new Array(e.length),c=0;c<e.length;++c)r[c]=new N().fromArray(e[c]).normalize();var l=this.chamfer_geom(r,t,o);if(t.length!=10)var h=this.make_geom(l.vectors,l.faces,n,i,s);else var h=this.make_d10_geom(l.vectors,l.faces,n,i,s);return h.cannon_shape=this.create_shape(e,t,n),h.name="d"+t.length,h}};let xs=hi;ja(xs,"dice",{});const Lr={cloudy:{name:"Clouds (Transparent)",composite:"destination-in",source:"textures/cloudy.webp",source_bump:"textures/cloudy.alt.webp"},cloudy_2:{name:"Clouds",composite:"multiply",source:"textures/cloudy.alt.webp",source_bump:"textures/cloudy.alt.webp"},fire:{name:"Fire",composite:"multiply",source:"textures/fire.webp",source_bump:"textures/fire.webp",material:"metal"},marble:{name:"Marble",composite:"multiply",source:"textures/marble.webp",source_bump:"",material:"glass"},water:{name:"Water",composite:"destination-in",source:"textures/water.webp",source_bump:"textures/water.webp",material:"glass"},ice:{name:"Ice",composite:"destination-in",source:"textures/ice.webp",source_bump:"textures/ice.webp",material:"glass"},paper:{name:"Paper",composite:"multiply",source:"textures/paper.webp",source_bump:"textures/paper-bump.webp",material:"wood"},speckles:{name:"Speckles",composite:"multiply",source:"textures/speckles.webp",source_bump:"textures/speckles.webp",material:"none"},glitter:{name:"Glitter",composite:"multiply",source:"textures/glitter.webp",source_bump:"textures/glitter-bump.webp",material:"none"},glitter_2:{name:"Glitter (Transparent)",composite:"destination-in",source:"textures/glitter-alpha.webp",source_bump:"",material:"none"},stars:{name:"Stars",composite:"multiply",source:"textures/stars.webp",source_bump:"textures/stars.webp",material:"none"},stainedglass:{name:"Stained Glass",composite:"multiply",source:"textures/stainedglass.webp",source_bump:"textures/stainedglass-bump.webp",material:"glass"},wood:{name:"Wood",composite:"multiply",source:"textures/wood.webp",source_bump:"textures/wood.webp",material:"wood"},stone:{name:"Stone",composite:"multiply",source:"textures/stone.webp",source_bump:"textures/stone.webp",material:"wood"},metal:{name:"Stainless Steel",composite:"multiply",source:"textures/metal.webp",source_bump:"textures/metal-bump.webp",material:"metal"},skulls:{name:"Skulls",composite:"multiply",source:"textures/skulls.webp",source_bump:"textures/skulls.webp"},leopard:{name:"Leopard",composite:"multiply",source:"textures/leopard.webp",source_bump:"textures/leopard.webp",material:"wood"},tiger:{name:"Tiger",composite:"multiply",source:"textures/tiger.webp",source_bump:"textures/tiger.webp",material:"wood"},cheetah:{name:"Cheetah",composite:"multiply",source:"textures/cheetah.webp",source_bump:"textures/cheetah.webp",material:"wood"},dragon:{name:"Dragon",composite:"multiply",source:"textures/dragon.webp",source_bump:"textures/dragon-bump.webp",material:"none"},lizard:{name:"Lizard",composite:"multiply",source:"textures/lizard.webp",source_bump:"textures/lizard.webp",material:"none"},bird:{name:"Bird",composite:"multiply",source:"textures/feather.webp",source_bump:"textures/feather-bump.webp",material:"wood"},astral:{name:"Astral Sea",composite:"multiply",source:"textures/astral.webp",source_bump:"textures/stars.webp",material:"none"},acleaf:{name:"AC Leaf",composite:"multiply",source:"textures/acleaf.webp",source_bump:"textures/acleaf.webp",material:"none"},thecage:{name:"Nicholas Cage",composite:"multiply",source:"textures/thecage.webp",source_bump:"",material:"metal"},isabelle:{name:"Isabelle",composite:"source-over",source:"textures/isabelle.webp",source_bump:"",material:"none"},bronze01:{name:"bronze01",composite:"difference",source:"textures/bronze01.webp",source_bump:"",material:"metal"},bronze02:{name:"bronze02",composite:"difference",source:"textures/bronze02.webp",source_bump:"",material:"metal"},bronze03:{name:"bronze03",composite:"difference",source:"textures/bronze03.webp",source_bump:"",material:"metal"},bronze03a:{name:"bronze03a",composite:"difference",source:"textures/bronze03a.webp",source_bump:"",material:"metal"},bronze03b:{name:"bronze03b",composite:"difference",source:"textures/bronze03b.webp",source_bump:"",material:"metal"},bronze04:{name:"bronze04",composite:"difference",source:"textures/bronze04.webp",source_bump:"",material:"metal"},none:{name:"none",composite:"source-over",source:"",source_bump:"",material:""},swirl:{name:"Resin Swirl",procedural:"swirl",composite:"source-over",source:"",source_bump:"",material:"glass"},marble_vein:{name:"Marble Veins",procedural:"marble_vein",composite:"source-over",source:"",source_bump:"",material:"glass"},nebula:{name:"Nebula",procedural:"nebula",composite:"source-over",source:"",source_bump:"",material:"glass"},hammered:{name:"Hammered Metal",procedural:"hammered",composite:"source-over",source:"",source_bump:"",material:"metal"},magma:{name:"Magma Cracks",procedural:"magma",composite:"source-over",source:"",source_bump:"",material:"metal"},"":{name:"~ Preset ~",composite:"source-over",source:"",source_bump:"",material:""}},Oa={coin_default:{name:"Gold Coin",description:"Gold Dragonhead Coin",category:"Other",foreground:"#f6c928",background:"#f6c928",outline:"none",texture:"metal"},coin_silver:{name:"Silver Coin",description:"Gold Dragonhead Coin",category:"Other",foreground:"#f6c928",background:"#f6c928",outline:"none",texture:"metal"},radiant:{name:"Radiant",category:"Damage Types",foreground:"#F9B333",background:"#FFFFFF",outline:"",texture:"paper",description:"Radiant"},fire:{name:"Fire",category:"Damage Types",foreground:"#f8d84f",background:["#f8d84f","#f9b02d","#f43c04","#910200","#4c1009"],outline:"black",texture:"fire",description:"Fire"},ice:{name:"Ice",category:"Damage Types",foreground:"#60E9FF",background:["#214fa3","#3c6ac1","#253f70","#0b56e2","#09317a"],outline:"black",texture:"ice",description:"Ice"},poison:{name:"Poison",category:"Damage Types",foreground:"#D6A8FF",background:["#313866","#504099","#66409e","#934fc3","#c949fc"],outline:"black",texture:"cloudy",description:"Poison"},acid:{name:"Acid",category:"Damage Types",foreground:"#A9FF70",background:["#a6ff00","#83b625","#5ace04","#69f006","#b0f006","#93bc25"],outline:"black",texture:"marble",description:"Acid"},thunder:{name:"Thunder",category:"Damage Types",foreground:"#FFC500",background:"#7D7D7D",outline:"black",texture:"cloudy",description:"Thunder"},lightning:{name:"Lightning",category:"Damage Types",foreground:"#FFC500",background:["#f17105","#f3ca40","#eddea4","#df9a57","#dea54b"],outline:"#7D7D7D",texture:"ice",description:"Lightning"},air:{name:"Air",category:"Damage Types",foreground:"#ffffff",background:["#d0e5ea","#c3dee5","#a4ccd6","#8dafb7","#80a4ad"],outline:"black",texture:"cloudy",description:"Air"},water:{name:"Water",category:"Damage Types",foreground:"#60E9FF",background:["#87b8c4","#77a6b2","#6b98a3","#5b8691","#4b757f"],outline:"black",texture:"water",description:"Water"},earth:{name:"Earth",category:"Damage Types",foreground:"#6C9943",background:["#346804","#184200","#527f22","#3a1d04","#56341a","#331c17","#5a352a","#302210"],outline:"black",texture:"speckles",description:"Earth"},force:{name:"Force",category:"Damage Types",foreground:"white",background:["#FF97FF","#FF68FF","#C651C6"],outline:"#570000",texture:"stars",description:"Force"},psychic:{name:"Psychic",category:"Damage Types",foreground:"#D6A8FF",background:["#313866","#504099","#66409E","#934FC3","#C949FC","#313866"],outline:"black",texture:"speckles",description:"Psychic"},necrotic:{name:"Necrotic",category:"Damage Types",foreground:"#ffffff",background:"#6F0000",outline:"black",texture:"skulls",description:"Necrotic"},breebaby:{name:"Pastel Sunset",category:"Custom Sets",foreground:["#5E175E","#564A5E","#45455E","#3D5A5E","#1E595E","#5E3F3D","#5E1E29","#283C5E","#25295E"],background:["#FE89CF","#DFD4F2","#C2C2E8","#CCE7FA","#A1D9FC","#F3C3C2","#EB8993","#8EA1D2","#7477AD"],outline:"white",texture:"marble",description:"Pastel Sunset, for Breyanna"},pinkdreams:{name:"Pink Dreams",category:"Custom Sets",foreground:"white",background:["#ff007c","#df73ff","#f400a1","#df00ff","#ff33cc"],outline:"#570000",texture:"skulls",description:"Pink Dreams, for Ethan"},inspired:{name:"Inspired",category:"Custom Sets",foreground:"#FFD800",background:"#C4C4B6",outline:"#8E8E86",texture:"none",description:"Inspired, for Austin"},bloodmoon:{name:"Blood Moon",category:"Custom Sets",foreground:"#CDB800",background:"#6F0000",outline:"black",texture:"marble",description:"Blood Moon, for Jared"},starynight:{name:"Stary Night",category:"Custom Sets",foreground:"#4F708F",background:["#091636","#233660","#4F708F","#8597AD","#E2E2E2"],outline:"white",texture:"speckles",description:"Stary Night, for Mai"},glitterparty:{name:"Glitter Party",category:"Custom Sets",foreground:"white",background:["#FFB5F5","#7FC9FF","#A17FFF"],outline:"none",texture:"glitter",description:"Glitter Party, for Austin"},astralsea:{name:"Astral Sea",category:"Custom Sets",foreground:"#565656",background:"white",outline:"none",texture:"astral",description:"The Astral Sea, for Austin"},bronze:{name:"Thylean Bronze",description:"Thylean Bronze by @SpencerThayer",category:"Custom Sets",foreground:["#FF9159","#FFB066","#FFBF59","#FFD059"],background:["#705206","#7A4E06","#643100","#7A2D06"],outline:["#3D2D03","#472D04","#301700","#471A04"],edge:["#FF5D0D","#FF7B00","#FFA20D","#FFBA0D"],texture:["bronze01","bronze02","bronze03","bronze03a","bronze03b","bronze04"]},dragons:{name:"Here be Dragons",category:"Custom Sets",foreground:"#FFFFFF",background:["#B80000","#4D5A5A","#5BB8FF","#7E934E","#FFFFFF","#F6ED7C","#7797A3","#A78437","#862C1A","#FFDF8A"],outline:"black",texture:["dragon","lizard"],description:"Here be Dragons"},birdup:{name:"Bird Up",category:"Custom Sets",foreground:"#FFFFFF",background:["#F11602","#FFC000","#6EC832","#0094BC","#05608D","#FEABB3","#F75680","#F3F0DF","#C7A57F"],outline:"black",texture:"bird",description:"Bird Up!"},tigerking:{name:"Tiger King",category:"Other",foreground:"#ffffff",background:"#FFCC40",outline:"black",texture:["leopard","tiger","cheetah"],description:"Leopard Print"},covid:{name:"COViD",category:"Other",foreground:"#A9FF70",background:["#a6ff00","#83b625","#5ace04","#69f006","#b0f006","#93bc25"],outline:"black",texture:"fire",description:"Covid-19"},acleaf:{name:"Animal Crossing",category:"Other",foreground:"#00FF00",background:"#07540A",outline:"black",texture:"acleaf",description:"Animal Crossing Leaf"},isabelle:{name:"Isabelle",category:"Other",foreground:"white",background:"#FEE5CC",outline:"black",texture:"isabelle",description:"Isabelle"},thecage:{name:"Nicholas Cage",category:"Other",foreground:"#ffffff",background:"#ffffff",outline:"black",texture:"thecage",description:"Nicholas Cage"},test:{name:"Test",category:"Colors",foreground:["#00FF00","#0000FF","#FF0000"],background:["#FF0000","#00FF00","#0000FF"],outline:"black",texture:"none",description:"Test"},rainbow:{name:"Rainblow",category:"Colors",foreground:["#FF5959","#FFA74F","#FFFF56","#59FF59","#2374FF","#00FFFF","#FF59FF"],background:["#900000","#CE3900","#BCBC00","#00B500","#00008E","#008282","#A500A5"],outline:"black",texture:"none",description:"Rainblow"},black:{name:"Black",category:"Colors",foreground:"#ffffff",background:"#000000",outline:"black",texture:"none",description:"Black"},white:{name:"White",category:"Colors",foreground:"#000000",background:"#FFFFFF",outline:"#FFFFFF",texture:"none",description:"White"},swrpg_abi:{name:"Star Wars RPG - Ability",category:"Star Wars\u2122 RPG",foreground:"#00FF00",background:["#3D9238","#52B848","#5EAC56","#9ECB9A"],outline:"#000000",texture:"cloudy_2",description:"Star Wars\u2122 RPG Ability Dice"},swrpg_pro:{name:"Star Wars RPG - Proficiency",category:"Star Wars\u2122 RPG",foreground:"#FFFF00",background:["#CABB1C","#F9E33B","#FFE900","#F0E49D"],outline:"#000000",texture:"paper",description:"Star Wars\u2122 RPG Proficiency Dice"},swrpg_dif:{name:"Star Wars RPG - Difficulty",category:"Star Wars\u2122 RPG",foreground:"#8000FC",background:["#39165F","#664B84","#50247E","#745F88"],outline:"#000000",texture:"cloudy_2",description:"Star Wars\u2122 RPG Difficulty Dice"},swrpg_cha:{name:"Star Wars RPG - Challenge",category:"Star Wars\u2122 RPG",foreground:"#FF0000",background:["#A91F32","#EB4254","#E51836","#BA3645"],outline:"#000000",texture:"paper",description:"Star Wars\u2122 RPG Challenge Dice"},swrpg_boo:{name:"Star Wars RPG - Boost",category:"Star Wars\u2122 RPG",foreground:"#00FFFF",background:["#4B9DC6","#689FC4","#85CFF2","#8FC0D8"],outline:"#000000",texture:"glitter",description:"Star Wars\u2122 RPG Boost Dice"},swrpg_set:{name:"Star Wars RPG - Setback",category:"Star Wars\u2122 RPG",foreground:"#111111",background:["#252223","#241F21","#282828","#111111"],outline:"#ffffff",texture:"glitter",description:"Star Wars\u2122 RPG Setback Dice"},swrpg_for:{name:"Star Wars RPG - Force",category:"Star Wars\u2122 RPG",foreground:"#000000",background:["#F3F3F3","#D3D3D3","#BABABA","#FFFFFF"],outline:"#FFFFFF",texture:"stars",description:"Star Wars\u2122 RPG Force Dice"},swa_red:{name:"Armada Attack - Red",category:"Star Wars\u2122 Armada",foreground:"#ffffff",background:["#440D19","#8A1425","#C72336","#C04551"],outline:"none",texture:"stainedglass",description:"Star Wars\u2122 Armada Red Attack Dice"},swa_blue:{name:"Armada Attack - Blue",category:"Star Wars\u2122 Armada",foreground:"#ffffff",background:["#212642","#28286E","#2B348C","#3D4BB5","#5D64AB"],outline:"none",texture:"stainedglass",description:"Star Wars\u2122 Armada Blue Attack Dice"},swa_black:{name:"Armada Attack - Black",category:"Star Wars\u2122 Armada",foreground:"#ffffff",background:["#252223","#241F21","#282828","#111111"],outline:"none",texture:"stainedglass",description:"Star Wars\u2122 Armada Black Attack Dice"},xwing_red:{name:"X-Wing Attack - Red",category:"Star Wars\u2122 X-Wing",foreground:"#ffffff",background:["#440D19","#8A1425","#C72336","#C04551"],outline:"none",texture:"stars",description:"Star Wars\u2122 X-Wing Red Attack Dice"},xwing_green:{name:"X-Wing Attack - Green",category:"Star Wars\u2122 X-Wing",foreground:"#ffffff",background:["#3D9238","#52B848","#5EAC56","#9ECB9A"],outline:"none",texture:"stars",description:"Star Wars\u2122 X-Wing Green Attack Dice"},swl_atkred:{name:"Legion Attack - Red",category:"Star Wars\u2122 Legion",foreground:"#ffffff",background:["#440D19","#8A1425","#C72336","#C04551"],outline:"none",texture:"fire",description:"Star Wars\u2122 Legion Red Attack Dice"},swl_atkblack:{name:"Legion Attack - Black",category:"Star Wars\u2122 Legion",foreground:"#ffffff",background:["#252223","#241F21","#282828","#111111"],outline:"none",texture:"fire",description:"Star Wars\u2122 Legion Black Attack Dice"},swl_atkwhite:{name:"Legion Attack - White",category:"Star Wars\u2122 Legion",foreground:"#000000",background:["#ffffff","#DFF4FA","#BCBCBC","#F1EDE2","#F2ECE0"],outline:"none",texture:"fire",description:"Star Wars\u2122 Legion White Attack Dice"},swl_defred:{name:"Legion Defense - Red",category:"Star Wars\u2122 Legion",foreground:"#ffffff",background:["#440D19","#8A1425","#C72336","#C04551"],outline:"none",texture:"fire",description:"Star Wars\u2122 Legion Red Defense Dice"},swl_defwhite:{name:"Legion Defense - White",category:"Star Wars\u2122 Legion",foreground:"#000000",background:["#ffffff","#DFF4FA","#BCBCBC","#F1EDE2","#F2ECE0"],outline:"none",texture:"fire",description:"Star Wars\u2122 Legion White Defense Dice"}};class zm{constructor(e={}){this.colorsets={},this.imageCache=new Map,this.assetPath=e.assetPath,this.assetUrl=e.assetUrl}async ImageLoader(e){if(Array.isArray(e))return Promise.all(e.map(n=>this.ImageLoader(n)));const t=[];return e.source&&e.source!=""&&t.push(this.loadImage(e.source).then(n=>{e.texture=n})),e.source_bump&&e.source_bump!=""&&t.push(this.loadImage(e.source_bump).then(n=>{e.bump=n})),t.length&&await Promise.all(t),e}loadImage(e){const t=typeof this.assetUrl=="function"?this.assetUrl(e):this.assetPath+e;if(this.imageCache.has(t))return this.imageCache.get(t);const n=new Promise((i,s)=>{let o=new Image;o.onload=()=>i(o),o.crossOrigin="anonymous",o.src=t,o.onerror=r=>s(r)}).catch(i=>{this.imageCache.delete(t),console.error("Unable to load image texture")});return this.imageCache.set(t,n),n}async getColorSet(e){let t,n;if(typeof e=="string"&&(t=e),typeof e=="object"&&(t=e.colorset),this.colorsets.hasOwnProperty(t))return this.colorsets[t];let i={...Oa[t]};return n=e.texture||i.texture,i.texture=this.getTexture(n),i.texture=await this.ImageLoader(i.texture),e.material&&(i.texture.material=e.material),this.colorsets[t]=i,i}async makeColorSet(e={}){const t=`custom:${JSON.stringify(e)}`;if(this.colorsets.hasOwnProperty(t))return this.colorsets[t];let n=Oa.white,i=Object.assign({},n,e),s=this.getTexture(i.texture);return i.texture=await this.ImageLoader(s),e.material&&(i.texture.material=e.material),i.name.toLowerCase()==="white"&&(i.name=`${Date.now()}`),this.colorsets[t]=i,i}getTexture(e){if(Array.isArray(e)){let t=[];for(let n=0,i=e.length;n<i;n++)t.push(this.getTexture(e[n]));return t}return Lr.hasOwnProperty(e)?{...Lr[e]}:{...Lr.none}}}const Nm={default:{name:"Solid Color",author:"MajorVictory",showColorPicker:!0,surface:"wood_tray",colors:{fg:"#9794ff",bg:"#0b1a3e"},cubeMap:["envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg"]},"blue-felt":{name:"Blue Felt",author:"MajorVictory",showColorPicker:!0,surface:"felt",colors:{fg:"#9794ff",bg:"#0b1a3e"},cubeMap:["envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg"]},"red-felt":{name:"Red Felt",author:"MajorVictory",showColorPicker:!0,surface:"felt",colors:{fg:"#ff9494",bg:"#4d1e1e"},cubeMap:["envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg"]},"green-felt":{name:"Green Felt",author:"MajorVictory",showColorPicker:!0,surface:"felt",colors:{fg:"#97ff94",bg:"#244d1e"},cubeMap:["envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg","envmap.jpg"]},taverntable:{name:"Old Tavern Table",author:"MajorVictory",showColorPicker:!0,surface:"wood_table",colors:{fg:"#9794ff",bg:"#0b1a3e"},cubeMap:["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]},mahogany:{name:"(Mah-Hog-Any)",author:"MajorVictory",showColorPicker:!0,surface:"wood_table",colors:{fg:"#9794ff",bg:"#0b1a3e"},cubeMap:["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]},stainless:{name:"Stainless Steel",author:"MajorVictory",showColorPicker:!0,surface:"metal",colors:{fg:"#9794ff",bg:"#0b1a3e"},cubeMap:["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]},cyberpunk:{name:"Neo-New-Future-City",author:"MajorVictory",showColorPicker:!0,surface:"metal",colors:{fg:"#3494A6",bg:"#440B28"},cubeMap:["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]},cagetown:{name:"Cage Town",author:"MajorVictory",showColorPicker:!0,surface:"wood_table",colors:{fg:"#D7A866",bg:"#282811"},cubeMap:["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]}},Om=a=>{let e;return function(){let t=this,n=arguments;e&&window.cancelAnimationFrame(e),e=window.requestAnimationFrame(function(){a.apply(t,n)})}},km=2.1,ka=.15;function Um(a){return Number.isFinite(a)?Math.min(1,Math.max(0,a)):0}function Gm({width:a,height:e,strength:t=1,spread:n=ka,random:i=Math.random}){const s=Math.max(1,Math.hypot(a,e)),o=i()*Math.PI*2,r={x:Math.cos(o)*s,y:Math.sin(o)*s},c=1+Um(n)*(i()*2-1),l=km*s*t*c;return{vector:r,dist:s,boost:l}}const Ua={fire:{rate:130,restRate:26,life:[.5,1.2],size:[.4,.85],end:.2,rise:3.2,spread:1.1,trail:.12,colors:["#ffe27a","#ffb02e","#ff6a12","#e0300a"],opacity:1,soft:2.2,ground:!1,linger:2.4,max:160},shadow:{rate:90,restRate:14,life:[1.1,2.3],size:[1.3,2.4],end:2.2,rise:1.1,spread:.7,trail:.06,colors:["#5a4682","#43345f","#6e5a99","#33284a"],opacity:.42,soft:1.1,ground:!0,linger:3,max:110}},Wm=40,Fr=(a,e,t)=>Math.min(Math.max(a,e),t);function Vm(a={}){var t,n;const e=String((n=(t=a==null?void 0:a.aura)!=null?t:a==null?void 0:a.effect)!=null?n:"").toLowerCase();return(a==null?void 0:a.aura)==="none"||!Ua[e]?null:{id:e,...Ua[e]}}function Hm(a,e,t,n=0,i=1){if(!a||!(t>0)||!(i>0))return{count:0,carry:n};const s=Fr(e/Wm,0,1),o=(a.restRate+(a.rate-a.restRate)*s)*i,r=n+o*Math.min(t,.1),c=Math.floor(r);return{count:c,carry:r-c}}function qm(a,e,t){if(!(t>0)||e>=t)return{alive:!1,alpha:0,scale:0};const n=Fr(e/t,0,1),i=Fr(n/.12,0,1),s=a.opacity*i*(1-n)*(1-n*.4),o=1+(a.end-1)*n;return{alive:!0,alpha:s,scale:o}}const Xm=["attribute float aSize;","attribute float aAlpha;","attribute vec3 aColor;","uniform float uScale;","varying float vAlpha;","varying vec3 vColor;","void main() {","  vAlpha = aAlpha;","  vColor = aColor;","  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);","  gl_PointSize = aSize * uScale / -mvPosition.z;","  gl_Position = projectionMatrix * mvPosition;","}"].join(`
`),jm=["uniform float uSoft;","varying float vAlpha;","varying vec3 vColor;","void main() {","  float d = length(gl_PointCoord - vec2(0.5)) * 2.0;","  float a = pow(clamp(1.0 - d, 0.0, 1.0), uSoft) * vAlpha;","  if (a < 0.004) discard;","  gl_FragColor = vec4(vColor, a);","}"].join(`
`);class Ym{constructor(e,t){this.aura=e,this.scene=t,this.max=e.max*6,this.particles=[],this.palette=e.colors.map(i=>new we(i));const n=new ht;n.setAttribute("position",new at(new Float32Array(this.max*3),3)),n.setAttribute("aSize",new at(new Float32Array(this.max),1)),n.setAttribute("aAlpha",new at(new Float32Array(this.max),1)),n.setAttribute("aColor",new at(new Float32Array(this.max*3),3)),n.setDrawRange(0,0),this.material=new fn({vertexShader:Xm,fragmentShader:jm,uniforms:{uScale:{value:1},uSoft:{value:e.soft}},transparent:!0,depthWrite:!1,depthTest:!0,blending:1}),this.points=new or(n,this.material),this.points.frustumCulled=!1,this.points.renderOrder=2,t.add(this.points)}emit(e,t,n){var o,r,c;const{aura:i}=this,s=(o=e.body)==null?void 0:o.velocity;for(let l=0;l<n&&this.particles.length<this.max;l++){const h=Math.random()*Math.PI*2,d=Math.random()*t*.7;this.particles.push({x:e.position.x+Math.cos(h)*d,y:e.position.y+Math.sin(h)*d,z:i.ground?t*(.25+Math.random()*.15):e.position.z+t*.4,vx:((r=s==null?void 0:s.x)!=null?r:0)*i.trail+(Math.random()-.5)*i.spread*t,vy:((c=s==null?void 0:s.y)!=null?c:0)*i.trail+(Math.random()-.5)*i.spread*t+i.rise*t*(.6+Math.random()*.8),vz:i.ground?0:t*.5,age:0,life:i.life[0]+Math.random()*(i.life[1]-i.life[0]),size:t*(i.size[0]+Math.random()*(i.size[1]-i.size[0])),color:this.palette[Math.floor(Math.random()*this.palette.length)]})}}step(e,t){const n=this.points.geometry,i=n.attributes.position.array,s=n.attributes.aSize.array,o=n.attributes.aAlpha.array,r=n.attributes.aColor.array,c=this.aura.ground?.8:2.4;let l=0;return this.particles=this.particles.filter(h=>{h.age+=e;const d=qm(this.aura,h.age,h.life);return d.alive?(h.vx+=Math.sin(h.age*7+h.life*13)*c*e*h.size,h.x+=h.vx*e,h.y+=h.vy*e,h.z+=h.vz*e,i[l*3]=h.x,i[l*3+1]=h.y,i[l*3+2]=h.z,s[l]=h.size*d.scale,o[l]=d.alpha,r[l*3]=h.color.r,r[l*3+1]=h.color.g,r[l*3+2]=h.color.b,l++,!0):!1}),n.setDrawRange(0,l),n.attributes.position.needsUpdate=!0,n.attributes.aSize.needsUpdate=!0,n.attributes.aAlpha.needsUpdate=!0,n.attributes.aColor.needsUpdate=!0,this.material.uniforms.uScale.value=t,l}clear(){this.particles=[],this.points.geometry.setDrawRange(0,0)}dispose(){this.scene.remove(this.points),this.points.geometry.dispose(),this.material.dispose()}}const $m=700,Zm=.68,Km=1.25;function Jm(a,e,t=100){if(!(a>0)||!(e>0)||!(t>0))return t||100;const n=Math.min(a,e),i=Math.min(Km,Math.max(Zm,n/$m));return Math.round(t*i)}function Qm(a,e){return Math.abs((Number(a)||0)-(Number(e)||0))>=2}const eg=600,tg=520;function ng(a,e){const t=Number(a)||0,n=Number(e)||0;return t>0&&t<=eg||t>0&&n>0&&Math.min(t,n)<=tg?{tier:"compact",shadowMapSize:512,auraScale:.6,maxTextureSize:256}:{tier:"standard",shadowMapSize:1024,auraScale:1,maxTextureSize:256}}const Rr=10;function ig(a,e=1/60){const t=[],n=[],i=Math.max(0,Number(a)||0);return{pushFrame(s){var r;const o=new Float32Array(i*Rr);for(let c=0;c<i;c+=1){const l=(r=s[c])==null?void 0:r.body;if(!l)continue;const h=c*Rr;o[h]=l.position.x,o[h+1]=l.position.y,o[h+2]=l.position.z,o[h+3]=l.quaternion.x,o[h+4]=l.quaternion.y,o[h+5]=l.quaternion.z,o[h+6]=l.quaternion.w,o[h+7]=l.velocity.x,o[h+8]=l.velocity.y,o[h+9]=l.velocity.z}t.push(o)},pushSound(s){n.push({step:t.length,...s})},finish(){return{diceCount:i,stepSeconds:e>0?e:1/60,frames:t,sounds:n,soundCursor:0}}}}function sg(a,e,t,n){const i=t*Rr,s=1-n,o=a[i]*s+e[i]*n,r=a[i+1]*s+e[i+1]*n,c=a[i+2]*s+e[i+2]*n,l=a[i+3],h=a[i+4],d=a[i+5],u=a[i+6];let g=e[i+3],m=e[i+4],p=e[i+5],f=e[i+6];l*g+h*m+d*p+u*f<0&&(g=-g,m=-m,p=-p,f=-f);let _=l*s+g*n,v=h*s+m*n,y=d*s+p*n,x=u*s+f*n;const M=Math.hypot(_,v,y,x)||1;return _/=M,v/=M,y/=M,x/=M,{x:o,y:r,z:c,qx:_,qy:v,qz:y,qw:x,vx:a[i+7]*s+e[i+7]*n,vy:a[i+8]*s+e[i+8]*n,vz:a[i+9]*s+e[i+9]*n}}function rg(a,e){var h;const t=((h=a==null?void 0:a.frames)==null?void 0:h.length)||0;if(t===0)return{frame0:null,frame1:null,t:0,done:!0,dueSounds:[]};const n=t-1,i=Math.max(0,e/a.stepSeconds),s=i>=n,o=s?n:Math.floor(i),r=s?n:Math.min(n,o+1),c=s?0:i-o,l=[];for(;a.soundCursor<a.sounds.length&&a.sounds[a.soundCursor].step<=(s?t:r);)l.push(a.sounds[a.soundCursor]),a.soundCursor+=1;return{frame0:a.frames[o],frame1:a.frames[r],t:c,done:s,dueSounds:l}}const Pr=350;function ys(a){var n,i;if(!a)return"plastic";const e=typeof a=="string"?a:(Array.isArray(a.texture)?(n=a.texture[0])==null?void 0:n.material:(i=a.texture)==null?void 0:i.material)||a.material||"",t=String(e).match(/wood|metal/i);return t?t[0].toLowerCase():"plastic"}function Ga({speed:a,mass:e=Pr,volume:t=100,random:n=Math.random}){const i=Math.min(1,Math.max(0,(Number(t)||0)/100)),s=Math.min(Math.max(0,a/8e3),i),o=Math.max(150,Math.min(600,Number(e)||Pr)),r=Math.pow(Pr/o,.25),c=.96+Math.min(.1,Math.max(0,(a-250)/16e3)),l=.96+n()*.08,h=Math.min(1.35,Math.max(.72,r*c*l));return{gain:s,playbackRate:h}}function og(a){if(typeof a!="string"||!a.startsWith("data:"))return null;const e=a.indexOf(",");if(e<0||!a.slice(0,e).includes(";base64"))return null;const n=atob(a.slice(e+1)),i=new Uint8Array(n.length);for(let s=0;s<n.length;s+=1)i[s]=n.charCodeAt(s);return i.buffer}function Wa(a,e,{gain:t,playbackRate:n}){var i;if(!(!a||!(t>0))){if(e&&typeof AudioBuffer<"u"&&a instanceof AudioBuffer)try{e.state==="suspended"&&((i=e.resume)==null||i.call(e).catch(()=>{}));const s=e.createBufferSource(),o=e.createGain();s.buffer=a,s.playbackRate.value=n,o.gain.value=t,s.connect(o),o.connect(e.destination),s.start(0);return}catch{}if(typeof a.play=="function")try{a.volume=t,"playbackRate"in a&&(a.playbackRate=n),a.currentTime&&(a.currentTime=0),a.play().catch(()=>{})}catch{}}}const Dr={gold:{color:16763210,gravity:1.6,lift:.9,spread:1,swirl:0},fire:{color:16743209,gravity:-.35,lift:1.3,spread:.75,swirl:1.8},frost:{color:10217727,gravity:.35,lift:.3,spread:1.35,swirl:.4},storm:{color:16770140,gravity:.2,lift:.6,spread:1.5,swirl:0},arcane:{color:13206271,gravity:-.15,lift:.7,spread:1.05,swirl:3.6},shadow:{color:9137863,gravity:-.25,lift:.8,spread:.85,swirl:1.4}};function ag(a="gold",e=null){const t=String(a||"gold").toLowerCase(),n=Dr[t]||Dr.gold;return{...n,style:Dr[t]?t:"gold",color:e!=null?e:n.color}}function lg(a){var c,l,h,d,u,g;if(!((l=(c=a==null?void 0:a.geometry)==null?void 0:c.groups)!=null&&l.length)||a.shape==="d4")return null;const e=(d=(h=a.geometry).getAttribute)==null?void 0:d.call(h,"normal");if(!(e!=null&&e.array))return null;const t=e.array,n=a.quaternion||((u=a.body)==null?void 0:u.quaternion),i=new N(0,0,1),s=new N;let o=null,r=Math.PI*2;for(let m=0;m<a.geometry.groups.length;m+=1){const p=a.geometry.groups[m];if(!p||p.materialIndex===0)continue;const f=((g=p.start)!=null?g:m*3)*3;s.set(t[f],t[f+1],t[f+2]),n&&s.applyQuaternion(n);const _=s.angleTo(i);_<r&&(r=_,o=p.materialIndex)}return o}function Ir(a,e=!1){var i;const t=(Array.isArray(a==null?void 0:a.material)?a.material:[a==null?void 0:a.material]).filter(s=>s==null?void 0:s.emissive);if(!e||!Array.isArray(a==null?void 0:a.material))return t;const n=lg(a);return n!=null&&((i=a.material[n])==null?void 0:i.emissive)?[a.material[n]]:t}function cg(a){const e=Math.min(1,Math.max(0,a));return Math.sin(e*Math.PI*5)*(1-e)*(1-e)*.32}function hg(a,{spacing:e=180,maxWidth:t=900,rowGap:n=e}={}){if(!(a>0))return[];const i=Math.max(1,e),s=Math.max(1,Math.min(a,Math.floor(Math.max(i,t)/i))),o=Math.ceil(a/s),r=[];for(let c=0;c<a;c+=1){const l=Math.floor(c/s),h=l===o-1?a-l*s:s,u=(c-l*s-(h-1)/2)*i,g=((o-1)/2-l)*n;r.push({x:u,y:g})}return r}function Va(a){const e=Math.min(1,Math.max(0,a));return e*e*(3-2*e)}function ug(a,e,t){if(!t||!(t.width>0)||!(t.height>0))return null;const n=(a-t.left)/t.width*2-1,i=-((e-t.top)/t.height*2-1);return n<-1||n>1||i<-1||i>1?null:{x:n||0,y:i||0}}class dg extends No{constructor(){super();const e=new Xn;e.deleteAttribute("uv");const t=new cr({side:1}),n=new cr,i=new $o(16777215,5,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new Ge(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new Ge(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const r=new Ge(e,n);r.position.set(-5.607,-.754,-.758),r.rotation.set(0,.994,0),r.scale.set(1.97,1.534,3.955),this.add(r);const c=new Ge(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new Ge(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new Ge(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const d=new Ge(e,n);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const u=new Ge(e,ci(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);const g=new Ge(e,ci(50));g.position.set(-16.109,18.021,-8.207),g.scale.set(.1,2.425,2.751),this.add(g);const m=new Ge(e,ci(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const p=new Ge(e,ci(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);const f=new Ge(e,ci(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const _=new Ge(e,ci(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}}function ci(a){const e=new vi;return e.color.setScalar(a),e}const Ha={coin:6,metal:12,plastic:15,wood:12},fg={felt:7,wood_table:7,wood_tray:7,metal:9},pg=["theme_colorset","theme_texture","theme_material","theme_customColorset"],mg={assetPath:"./",framerate:1/60,sounds:!1,volume:100,color_spotlight:15720405,shadows:!0,theme_surface:"green-felt",sound_dieMaterial:"plastic",theme_customColorset:null,theme_colorset:"white",theme_texture:"",theme_material:"glass",gravity_multiplier:400,light_intensity:.7,baseScale:100,strength:1,throw_spread:ka,throw_start:.9,wall_bounce:1,shine:0,label_glow:0,assetUrl:null,iterationLimit:1e3,onRollComplete:()=>{},onRerollComplete:()=>{},onAddDiceComplete:()=>{},onRemoveDiceComplete:()=>{}};class gg{constructor(e,t={}){this.initialized=!1,this.container=document.querySelector(e),this.dimensions=new ye(this.container.clientWidth,this.container.clientHeight),this.adaptive_timestep=!1,this.last_time=0,this.running=!1,this.rolling=!1,this.threadid,this.display={currentWidth:null,currentHeight:null,containerWidth:null,containerHeight:null,aspect:null,scale:null},this.cameraHeight={max:null,close:null,medium:null,far:null},this.scene=new No,this.world=new Hp,this.dice_body_material=new Ln,this.sounds_table={},this.sounds_dice=[],this.lastSoundType="",this.lastSoundStep=0,this.lastSound=0,this.iteration,this.renderer,this.barrier,this.camera,this.light,this.light_amb,this.desk,this.box_body={},this.bodies=[],this.meshes=[],this.diceList=[],this.notationVectors=null,this.dieIndex=0,this.soundDelay=10,this.animstate="",this.selector={animate:!0,rotate:!0,intersected:null,dice:[]},Object.assign(this,mg,t),this.DiceColors=new zm({assetPath:this.assetPath,assetUrl:this.assetUrl}),this.DiceFactory=new xs({baseScale:this.baseScale,shine:this.shine,label_glow:this.label_glow}),this.DiceFactory.setBumpMapping(!0),this.surface=Nm[this.theme_surface].surface}enableShadows(){this.shadows=!0,this.renderer&&(this.renderer.shadowMap.enabled=this.shadows),this.light&&(this.light.castShadow=this.shadows),this.desk&&(this.desk.receiveShadow=this.shadows)}disableShadows(){this.shadows=!1,this.renderer&&(this.renderer.shadowMap.enabled=this.shadows),this.light&&(this.light.castShadow=this.shadows),this.desk&&(this.desk.receiveShadow=this.shadows)}async initialize(){if(this.renderer=new zo({antialias:!0,alpha:!0}),this.container.appendChild(this.renderer.domElement),this.renderer.shadowMap.enabled=this.shadows,this.renderer.shadowMap.type=2,this.renderer.setClearColor(0,0),this.scene.onBeforeRender=()=>{var e;(e=this.DiceFactory)!=null&&e.shaderTime&&(this.DiceFactory.shaderTime.value=(typeof performance<"u"?performance.now():Date.now())/1e3),this.updateDieLights(),this.updateAuras()},this.programKeeper=new ym,this._activePostLoops=0,this.auraScale=1,this._playback=null,this._recorder=null,this.dieLightPool=Array.from({length:Aa},()=>{const e=new $o(16777215,0,1,2);return this.scene.add(e),e}),this.shine>0){const e=new Ks(this.renderer);this.scene.environment=e.fromScene(new dg,.04).texture,e.dispose()}this.setDimensions(this.dimensions),this.world.gravity.set(0,0,-9.8*this.gravity_multiplier),this.world.broadphase=new ri(this.world),this.world.solver.iterations=14,this.world.allowSleep=!0,this.makeWorldBox(),this.resizeWorld(),await this.loadTheme({colorset:this.theme_colorset,texture:this.theme_texture,material:this.theme_material}).catch(e=>{throw new Error("Unable to load theme")}),this.sounds&&await this.loadSounds().catch(e=>{throw new Error("Unable to load sounds")}),this.initialized=!0,this.renderer.render(this.scene,this.camera)}makeWorldBox(){Object.keys(this.box_body).length&&(this.world.removeBody(this.box_body.desk),this.world.removeBody(this.box_body.topWall),this.world.removeBody(this.box_body.bottomWall),this.world.removeBody(this.box_body.leftWall),this.world.removeBody(this.box_body.rightWall));const e=new Ln,t=new Ln;this.world.addContactMaterial(new Cn(e,this.dice_body_material,{mass:0,friction:.6,restitution:.5})),this.world.addContactMaterial(new Cn(t,this.dice_body_material,{mass:0,friction:.6,restitution:this.wall_bounce})),this.world.addContactMaterial(new Cn(this.dice_body_material,this.dice_body_material,{mass:0,friction:.6,restitution:.5})),this.box_body.desk=new re({allowSleep:!1,mass:0,shape:new Ci,material:e}),this.world.addBody(this.box_body.desk),this.box_body.topWall=new re({allowSleep:!1,mass:0,shape:new Ci,material:t}),this.box_body.topWall.quaternion.setFromAxisAngle(new b(1,0,0),Math.PI/2),this.box_body.topWall.position.set(0,this.display.containerHeight*.93,0),this.world.addBody(this.box_body.topWall),this.box_body.bottomWall=new re({allowSleep:!1,mass:0,shape:new Ci,material:t}),this.box_body.bottomWall.quaternion.setFromAxisAngle(new b(1,0,0),-Math.PI/2),this.box_body.bottomWall.position.set(0,-this.display.containerHeight*.93,0),this.world.addBody(this.box_body.bottomWall),this.box_body.leftWall=new re({allowSleep:!1,mass:0,shape:new Ci,material:t}),this.box_body.leftWall.quaternion.setFromAxisAngle(new b(0,1,0),-Math.PI/2),this.box_body.leftWall.position.set(this.display.containerWidth*.93,0,0),this.world.addBody(this.box_body.leftWall),this.box_body.rightWall=new re({allowSleep:!1,mass:0,shape:new Ci,material:t}),this.box_body.rightWall.quaternion.setFromAxisAngle(new b(0,1,0),Math.PI/2),this.box_body.rightWall.position.set(-this.display.containerWidth*.93,0,0),this.world.addBody(this.box_body.rightWall)}async loadTheme(e){let t;this.theme_customColorset?t=await this.DiceColors.makeColorSet(this.theme_customColorset):t=await this.DiceColors.getColorSet(e),this.DiceFactory.applyColorSet(t),this.colorData=t}assetSource(e){return typeof this.assetUrl=="function"?this.assetUrl(e):this.assetPath+e}soundMaterial(){return ys(this.colorData)}getAudioContext(){if(this._audioCtx)return this._audioCtx;const e=typeof window<"u"&&(window.AudioContext||window.webkitAudioContext);if(!e)return null;try{return this._audioCtx=new e,this._audioCtx}catch{return null}}async loadSoundSet(e,t,n,i){if(e.hasOwnProperty(t)||!n)return;e[t]=[];const s=await Promise.all(Array.from({length:n},(o,r)=>{const c=this.assetSource(i(r+1));return c?this.decodeOrLoadAudio(c):Promise.resolve(void 0)}));e[t]=s.filter(Boolean)}async decodeOrLoadAudio(e){const t=this.getAudioContext();if(t&&typeof t.decodeAudioData=="function")try{let n=og(e);if(!n&&typeof fetch=="function"){const i=await fetch(e);i.ok&&(n=await i.arrayBuffer())}if(n)return await t.decodeAudioData(n.slice(0))}catch{}return this.loadAudio(e)}async loadSounds(e=[]){this.sound_dieMaterial=this.soundMaterial(),await this.loadSoundSet(this.sounds_table,this.surface,fg[this.surface],n=>`sounds/surfaces/surface_${this.surface}${n}.mp3`),await this.loadSoundSet(this.sounds_dice,"coin",Ha.coin,n=>`sounds/dicehit/dicehit_coin${n}.mp3`);const t=[...new Set([this.sound_dieMaterial,...e].filter(Boolean))];await Promise.all(t.map(n=>this.loadSoundSet(this.sounds_dice,n,Ha[n],i=>`sounds/dicehit/dicehit_${n}${i}.mp3`)))}loadAudio(e){return new Promise((t,n)=>{let i=new Audio;setTimeout(()=>t(void 0),5e3),i.oncanplaythrough=()=>t(i),i.crossOrigin="anonymous",i.src=e,i.onerror=s=>n(s)}).catch(t=>{console.error("Unable to load audio")})}async updateConfig(e={}){const t=pg.some(n=>n in e);"theme_colorset"in e&&!("theme_customColorset"in e)&&(e={...e,theme_customColorset:null}),Object.assign(this,e),"gravity_multiplier"in e&&this.world&&this.world.gravity.set(0,0,-9.8*this.gravity_multiplier),"wall_bounce"in e&&this.world&&this.makeWorldBox(),"shadows"in e&&(this.shadows?this.enableShadows():this.disableShadows()),"light_intensity"in e&&this.light&&(this.light.intensity=this.light_intensity),t&&await this.loadTheme({colorset:this.theme_colorset,texture:this.theme_texture,material:this.theme_material}),this.sounds&&(t||"sounds"in e)&&this.initialized&&await this.loadSounds()}highlightDice(e=[],{color:t=16769146,intensity:n=.22,duration:i=420}={}){const s=e.map(h=>this.diceList[h]).filter(Boolean);if(!s.length||!this.renderer)return Promise.resolve();const o=new we(t),r=s.flatMap(h=>Ir(h,!0)),c=r.map(h=>h.emissiveIntensity||0);r.forEach(h=>{h.emissive=o.clone()});const l=h=>{const d=Va(h);r.forEach((u,g)=>{u.emissiveIntensity=c[g]+(n-c[g])*d}),this.renderer.render(this.scene,this.camera)};return!(i>0)||typeof requestAnimationFrame!="function"?(l(1),Promise.resolve()):new Promise(h=>{this._activePostLoops+=1;const d=performance.now(),u=g=>{const m=Math.min(1,(g-d)/i);if(l(m),m>=1){this._activePostLoops=Math.max(0,this._activePostLoops-1),h();return}requestAnimationFrame(u)};requestAnimationFrame(u)})}arrangeDice(e=null,{duration:t=420}={}){const i=(Array.isArray(e)?e:this.diceList.map((d,u)=>u)).map(d=>this.diceList[d]).filter(Boolean);if(i.length<2||!this.renderer)return Promise.resolve();const o=Math.max(...i.map(d=>{var u;return d.geometry.boundingSphere||d.geometry.computeBoundingSphere(),((u=d.geometry.boundingSphere)==null?void 0:u.radius)||this.DiceFactory.baseScale}))*2.45,r=Math.max(o,(this.display.containerWidth||400)*1.45),c=hg(i.length,{spacing:o,maxWidth:r,rowGap:o}),l=i.map(d=>({x:d.position.x,y:d.position.y,z:d.position.z})),h=d=>{const u=Va(d);i.forEach((g,m)=>{const p=l[m].x+(c[m].x-l[m].x)*u,f=l[m].y+(c[m].y-l[m].y)*u;g.position.set(p,f,l[m].z),g.body&&g.body.position.set(p,f,l[m].z)}),this.renderer.render(this.scene,this.camera)};return!(t>0)||typeof requestAnimationFrame!="function"?(h(1),Promise.resolve()):new Promise(d=>{this._activePostLoops+=1;const u=performance.now(),g=m=>{const p=Math.min(1,(m-u)/t);if(h(p),p>=1){this._activePostLoops=Math.max(0,this._activePostLoops-1),d();return}requestAnimationFrame(g)};requestAnimationFrame(g)})}pickDie(e,t){var s;if(!((s=this.renderer)!=null&&s.domElement)||!this.camera||!this.diceList.length)return-1;const n=ug(e,t,this.renderer.domElement.getBoundingClientRect());if(!n)return-1;this._raycaster||(this._raycaster=new bd),this._raycaster.setFromCamera(new ye(n.x,n.y),this.camera);const i=this._raycaster.intersectObjects(this.diceList,!1);return i.length?this.diceList.indexOf(i[0].object):-1}setHoverDie(e,{color:t=16766315}={}){var s;const n=typeof e=="number"&&e>=0?this.diceList[e]:null;if(!n||!this.scene){this._hoverRing&&(this._hoverRing.visible=!1),this.renderer&&this.camera&&this.renderer.render(this.scene,this.camera);return}n.geometry.boundingSphere||n.geometry.computeBoundingSphere();const i=((s=n.geometry.boundingSphere)==null?void 0:s.radius)||this.DiceFactory.baseScale;if(!this._hoverRing){const o=new lr(1.12,1.26,48),r=new vi({color:t,transparent:!0,opacity:.68,side:2,depthWrite:!1});this._hoverRing=new Ge(o,r),this.scene.add(this._hoverRing)}this._hoverRing.material.color.set(t),this._hoverRing.position.set(n.position.x,n.position.y,1.2),this._hoverRing.scale.set(i,i,1),this._hoverRing.visible=!0,this.renderer&&this.camera&&this.renderer.render(this.scene,this.camera)}async fadeAwayDice(e=650){const t=this.diceList.map((n,i)=>i);t.length&&await this.fadeDice(t,0,e),this.clearDice()}celebrateDice(e=[],{color:t=null,style:n="gold",faceOnly:i=!0,duration:s=1800,sparks:o=120}={}){const r=e.map(p=>this.diceList[p]).filter(Boolean);if(!r.length||!this.renderer||typeof requestAnimationFrame!="function")return Promise.resolve();const c=ag(n,t),l=new we(c.color),h=r.flatMap(p=>Ir(p,i)),d=h.map(p=>({map:p.emissiveMap,intensity:p.emissiveIntensity}));h.forEach(p=>{p.emissive=l.clone(),p.emissiveIntensity=0,p.emissiveMap&&(p.emissiveMap=null,p.needsUpdate=!0)});const u=this.display.scale*5,g=this.sparkTexture(),m=r.map(p=>{const f=new Float32Array(o*3),_=[];for(let M=0;M<o;M++){const S=Math.random()*Math.PI*2,L=u*c.spread*(.45+Math.random()*.75);_.push(new N(Math.cos(S)*L,Math.sin(S)*L,u*c.lift*(.4+Math.random()*.9))),f.set([p.position.x,p.position.y,p.position.z],M*3)}const v=new ht;v.setAttribute("position",new at(f,3));const y=new sr({color:l,map:g,size:this.display.scale*1.5,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1,blending:2}),x=new or(v,y);return this.scene.add(x),{mesh:p,points:x,positions:f,velocities:_,origin:p.position.clone(),scale:p.scale.clone()}});return new Promise(p=>{this._activePostLoops+=1;const f=performance.now(),_=v=>{const y=Math.min(1,(v-f)/s),x=y*s/1e3,M=(.5+.5*Math.cos(y*Math.PI*6))*(1-y);if(h.forEach(S=>{S.emissiveIntensity=.28+.72*M}),m.forEach(({mesh:S,points:L,positions:w,velocities:T,origin:R,scale:D})=>{const I=y<.2?Math.sin(y/.2*Math.PI)*.25:0;S.scale.set(D.x*(1+I),D.y*(1+I),D.z*(1+I));const z=c.swirl*x,C=z?Math.cos(z):1,B=z?Math.sin(z):0;T.forEach((P,V)=>{const G=P.x*x,O=P.y*x;w[V*3]=R.x+(G*C-O*B),w[V*3+1]=R.y+(G*B+O*C),w[V*3+2]=Math.max(0,R.z+P.z*x-u*c.gravity*x*x)}),L.geometry.attributes.position.needsUpdate=!0,L.material.opacity=1-y*y}),this.renderer.render(this.scene,this.camera),y<1){requestAnimationFrame(_);return}m.forEach(({mesh:S,points:L,scale:w})=>{S.scale.copy(w),this.scene.remove(L),L.geometry.dispose(),L.material.dispose()}),h.forEach((S,L)=>{d[L].map?(S.emissiveMap=d[L].map,S.emissiveIntensity=Math.max(d[L].intensity,.7),S.needsUpdate=!0):S.emissiveIntensity=.3}),this.renderer.render(this.scene,this.camera),this._activePostLoops=Math.max(0,this._activePostLoops-1),p()};requestAnimationFrame(_)})}fumbleDice(e=[],{duration:t=1050,color:n=12069156,puffs:i=48}={}){const s=e.map(u=>this.diceList[u]).filter(Boolean);if(!s.length||!this.renderer||typeof requestAnimationFrame!="function")return Promise.resolve();const o=new we(n),r=this.sparkTexture(),c=this.display.scale*3,l=s.map(u=>{const g=new Float32Array(i*3),m=[];for(let S=0;S<i;S++){const L=Math.random()*Math.PI*2,w=c*(.3+Math.random()*.65);m.push(new N(Math.cos(L)*w,Math.sin(L)*w,c*(.45+Math.random()*.7))),g.set([u.position.x,u.position.y,u.position.z],S*3)}const p=new ht;p.setAttribute("position",new at(g,3));const f=new sr({color:o,map:r,size:this.display.scale*2.4,transparent:!0,opacity:.85,depthTest:!1,depthWrite:!1,blending:2}),_=new or(p,f);this.scene.add(_);const v=(Array.isArray(u.material)?u.material:[u.material]).filter(Boolean),y=v.map(S=>S.color?S.color.clone():null),x=Ir(u,!0),M=x.map(S=>({color:S.emissive.clone(),intensity:S.emissiveIntensity,map:S.emissiveMap}));return x.forEach(S=>{S.emissiveMap&&(S.emissiveMap=null,S.needsUpdate=!0),S.emissive.copy(o)}),{mesh:u,points:_,positions:g,velocities:m,origin:u.position.clone(),baseQuat:u.quaternion.clone(),mats:v,baseColors:y,faceMats:x,faceBefore:M}}),h=new N(1,.35,0).normalize(),d=new Bn;return new Promise(u=>{this._activePostLoops+=1;const g=performance.now(),m=p=>{const f=Math.min(1,(p-g)/t),_=f*t/1e3,v=cg(f),y=1-.3*Math.sin(f*Math.PI),x=Math.sin(f*Math.PI);if(d.setFromAxisAngle(h,v),l.forEach(({mesh:M,points:S,positions:L,velocities:w,origin:T,baseQuat:R,mats:D,baseColors:I,faceMats:z})=>{M.quaternion.copy(R).premultiply(d),D.forEach((C,B)=>{C.color&&I[B]&&C.color.copy(I[B]).multiplyScalar(y)}),z.forEach(C=>{C.emissiveIntensity=.25+x*.85}),w.forEach((C,B)=>{L[B*3]=T.x+C.x*_,L[B*3+1]=T.y+C.y*_,L[B*3+2]=T.z+C.z*_}),S.geometry.attributes.position.needsUpdate=!0,S.material.opacity=.85*(1-f*f)}),this.renderer.render(this.scene,this.camera),f<1){requestAnimationFrame(m);return}l.forEach(({mesh:M,points:S,baseQuat:L,mats:w,baseColors:T,faceMats:R,faceBefore:D})=>{M.quaternion.copy(L),w.forEach((I,z)=>{I.color&&T[z]&&I.color.copy(T[z])}),R.forEach((I,z)=>{D[z].map&&(I.emissiveMap=D[z].map,I.needsUpdate=!0),I.emissiveIntensity=.32}),this.scene.remove(S),S.geometry.dispose(),S.material.dispose()}),this.renderer.render(this.scene,this.camera),this._activePostLoops=Math.max(0,this._activePostLoops-1),u()};requestAnimationFrame(m)})}sparkTexture(){if(this.sparkMap)return this.sparkMap;const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.2,"rgba(255,245,215,0.95)"),n.addColorStop(.5,"rgba(255,215,120,0.35)"),n.addColorStop(1,"rgba(255,190,80,0)"),t.fillStyle=n,t.fillRect(0,0,64,64),this.sparkMap=new si(e),this.sparkMap}shadowFade(e){var i,s;if((s=(i=e.customDepthMaterial)==null?void 0:i.userData)!=null&&s.shadowFade)return e.customDepthMaterial.userData.shadowFade;const t={value:1},n=new Bo({depthPacking:3201});return n.customProgramCacheKey=()=>"lw-shadow-fade",n.userData.shadowFade=t,n.onBeforeCompile=o=>{o.uniforms.shadowStrength=t,o.fragmentShader=o.fragmentShader.replace("void main() {",["uniform float shadowStrength;","float lwDither(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }","void main() {","	if (lwDither(gl_FragCoord.xy) >= shadowStrength) discard;"].join(`
`))},e.customDepthMaterial=n,t}fadeDice(e=[],t=.3,n=900){const i=e.map(h=>this.diceList[h]).filter(Boolean),s=i.flatMap(h=>Array.isArray(h.material)?h.material:[h.material]),o=s.map(h=>h.opacity),r=i.map(h=>this.shadowFade(h)),c=r.map(h=>h.value);s.forEach(h=>{h.transparent=!0});const l=h=>{const d=h*h*(3-2*h);s.forEach((u,g)=>{u.opacity=o[g]+(t-o[g])*d}),r.forEach((u,g)=>{u.value=c[g]+(t-c[g])*d}),this.renderer&&this.renderer.render(this.scene,this.camera)};return new Promise(h=>{let d=!1;const u=()=>{d&&(this._activePostLoops=Math.max(0,this._activePostLoops-1),d=!1),l(1),i.forEach(p=>{p.castShadow=this.shadows&&t>0}),this.renderer&&this.renderer.render(this.scene,this.camera),h()};if(!i.length||!(n>0)||typeof requestAnimationFrame!="function"){u();return}d=!0,this._activePostLoops+=1;const g=performance.now(),m=p=>{const f=Math.min(1,(p-g)/n);if(f>=1){u();return}l(f),requestAnimationFrame(m)};requestAnimationFrame(m)})}setDimensions(e){const t=(e==null?void 0:e.x)||this.container.clientWidth,n=(e==null?void 0:e.y)||this.container.clientHeight;if(!(t>0)||!(n>0))return;this.display.currentWidth=this.container.clientWidth/2,this.display.currentHeight=this.container.clientHeight/2,e?(this.display.containerWidth=e.x,this.display.containerHeight=e.y):(this.display.containerWidth=this.display.currentWidth,this.display.containerHeight=this.display.currentHeight),this.display.aspect=Math.min(this.display.currentWidth/this.display.containerWidth,this.display.currentHeight/this.display.containerHeight),this.display.scale=Math.sqrt(this.display.containerWidth*this.display.containerWidth+this.display.containerHeight*this.display.containerHeight)/13;const i=ng(t,n);this.auraScale=i.auraScale,this.DiceFactory&&(this.DiceFactory.maxTextureSize=i.maxTextureSize);const s=Jm(t,n,this.baseScale);switch(this.DiceFactory&&Qm(this.DiceFactory.baseScale,s)&&this.DiceFactory.updateConfig({baseScale:s}),this.makeWorldBox(),this.renderer.setSize(this.display.currentWidth*2,this.display.currentHeight*2),this.cameraHeight.max=this.display.currentHeight/this.display.aspect/Math.tan(10*Math.PI/180),this.cameraHeight.medium=this.cameraHeight.max/1.5,this.cameraHeight.far=this.cameraHeight.max,this.cameraHeight.close=this.cameraHeight.max/2,this.camera&&this.scene.remove(this.camera),this.camera=new gt(20,this.display.currentWidth/this.display.currentHeight,1,this.cameraHeight.max*1.3),this.animstate){case"selector":this.camera.position.z=this.selector.dice.length>9?this.cameraHeight.far:this.selector.dice.length<6?this.cameraHeight.close:this.cameraHeight.medium;break;case"throw":case"afterthrow":default:this.camera.position.z=this.cameraHeight.far}this.camera.lookAt(new N(0,0,0));const o=Math.max(this.display.containerWidth,this.display.containerHeight);this.light&&this.scene.remove(this.light),this.light_amb&&this.scene.remove(this.light_amb),this.light=new yd(this.color_spotlight,this.light_intensity),this.light.position.set(-o/2,o/2,o*3),this.light.target.position.set(0,0,0),this.light.distance=o*5,this.light.angle=Math.PI/4,this.light.castShadow=this.shadows,this.light.shadow.camera.near=o/10,this.light.shadow.camera.far=o*5,this.light.shadow.camera.fov=50,this.light.shadow.bias=.001,this.light.shadow.mapSize.width=i.shadowMapSize,this.light.shadow.mapSize.height=i.shadowMapSize,this.scene.add(this.light),this.light_amb=new vd(16777147,6776689,this.light_intensity),this.scene.add(this.light_amb),this.desk&&this.scene.remove(this.desk);let r=new gd;r.opacity=.5,this.desk=new Ge(new yi(this.display.containerWidth*6,this.display.containerHeight*6,1,1),r),this.desk.receiveShadow=this.shadows,this.scene.add(this.desk),this.renderer.render(this.scene,this.camera)}resizeWorld(){const t=Om(()=>{const n=this.renderer.domElement,i=this.container.clientWidth,s=this.container.clientHeight,o=n.width!==i||n.height!==s;return o&&this.setDimensions(new ye(this.container.clientWidth,this.container.clientHeight)),o});window.addEventListener("resize",t),window.addEventListener("orientationchange",t),typeof ResizeObserver=="function"&&this.container&&(this._resizeObserver=new ResizeObserver(t),this._resizeObserver.observe(this.container))}vectorRand({x:e,y:t}){let n=Math.random()*Math.PI/5-Math.PI/5/2,i={x:e*Math.cos(n)-t*Math.sin(n),y:e*Math.sin(n)+t*Math.cos(n)};return i.x==0&&(i.x=.01),i.y==0&&(i.y=.01),i}getNotationVectors(e,t,n,i){let s=new Ea(e);for(let o in s.set){const r=this.DiceFactory.get(s.set[o].type);let c=s.set[o].num,l=s.set[o].op,h=s.set[o].sid,d=s.set[o].gid,u=s.set[o].glvl,g=s.set[o].func,m=s.set[o].args;for(let p=0;p<c;p++){let f=this.vectorRand(t);f.x/=i,f.y/=i;let _={x:this.display.containerWidth*(f.x>0?-1:1)*this.throw_start,y:this.display.containerHeight*(f.y>0?-1:1)*this.throw_start,z:Math.random()*200+200},v=Math.abs(f.x/f.y);v>1?_.y/=v:_.x*=v;let y=this.vectorRand(t);y.x/=i,y.y/=i;let x,M,S;r.shape!="d2"?(x={x:y.x*n,y:y.y*n,z:-10},M={x:-(Math.random()*f.y*5+r.inertia*f.y),y:Math.random()*f.x*5+r.inertia*f.x,z:0},S={x:Math.random(),y:Math.random(),z:Math.random(),a:Math.random()}):(x={x:y.x*n/10,y:y.y*n/10,z:3e3},M={x:12*r.inertia,y:1*r.inertia,z:0},S={x:1,y:1,z:Math.random(),a:Math.random()}),s.vectors.push({index:this.dieIndex++,type:r.type,op:l,sid:h,gid:d,glvl:u,func:g,args:m,pos:_,velocity:x,angle:M,axis:S})}}return s}swapDiceFace(e,t){var p;const n=this.DiceFactory.get(e.notation.type);if(e.resultReason="forced",n.shape=="d4"){this.swapDiceFace_D4(e,t);return}n.values;let i=parseInt(e.getLastValue().value);t=parseInt(t),e.notation.type=="d10"&&i==0&&(i=10),e.notation.type=="d100"&&i==0&&(i=100),e.notation.type=="d100"&&i>0&&i<10&&(i*=10),e.notation.type=="d10"&&t==0&&(t=10),e.notation.type=="d100"&&t==0&&(t=100),e.notation.type=="d100"&&t>0&&t<10&&(t*=10);let s=n.values.indexOf(i),o=n.values.indexOf(t);if(s<0||o<0||s==o)return;let r=e.geometry.clone(),c=[],l=[],h=2;n.shape=="d10"&&(h=1);let d,u=o+h;n.shape!="d2"?(d=s+h,u=o+h):(d=s+1,u=o+1);for(var g=0,m=r.groups.length;g<m;++g){const _=r.groups[g].materialIndex;if(_==d){c.push(g);continue}if(_==u){l.push(g);continue}}if(!(c.length<=0||l.length<=0)){for(let f=0,_=l.length;f<_;f++)r.groups[l[f]].materialIndex=d;for(let f=0,_=c.length;f<_;f++)r.groups[c[f]].materialIndex=u;((p=e.userData)==null?void 0:p.clonedGeometry)&&e.geometry&&e.geometry.dispose(),e.geometry=r,e.userData={...e.userData||{},clonedGeometry:!0},e.result=[]}}swapDiceFace_D4(e,t){var r,c;const n=this.DiceFactory.get(e.notation.type);let i=parseInt(e.getLastValue().value);if(t=parseInt(t),!(i>=1&&i<=4))return;let s=t-i,o=e.geometry.clone();for(let l=0,h=o.groups.length;l<h;++l){const d=o.groups[l];let u=d.materialIndex;if(u!=0){for(u+=s-1;u>4;)u-=4;for(;u<1;)u+=4;d.materialIndex=u+1}}s!=0&&(s<0&&(s+=4),(Array.isArray(e.material)?e.material:e.material?[e.material]:[]).forEach(h=>{var d;return(d=h==null?void 0:h.dispose)==null?void 0:d.call(h)}),e.material=this.DiceFactory.createMaterials(((r=e.userData)==null?void 0:r.shownPreset)||n,0,0,!1,s)),((c=e.userData)==null?void 0:c.clonedGeometry)&&e.geometry&&e.geometry.dispose(),e.geometry=o,e.userData={...e.userData||{},clonedGeometry:!0}}spawnDice(e,t=!1){var c,l,h;const{pos:n,axis:i,angle:s,velocity:o}=e;let r;if(t)r=t,r.stopped=0,this.world.removeBody(r.body);else{const d=this.diceList.length,u=(c=this.dieLooks)==null?void 0:c[d];if(u&&this.DiceFactory.applyColorSet(u),r=this.DiceFactory.create(e.type,this.colorData,(h=(l=this.dieLabels)==null?void 0:l[d])!=null?h:null),u&&this.DiceFactory.applyColorSet(this.colorData),!r)return;r.notation=e,r.result=[],r.stopped=0,r.castShadow=this.shadows,r.soundMaterial=ys(u!=null?u:this.colorData),this.scene.add(r),this.diceList.push(r),this.addDieLight(r,u!=null?u:this.colorData),this.addDieAura(r,u!=null?u:this.colorData)}r.body=new re({allowSleep:!0,sleepSpeedLimit:75,sleepTimeLimit:.9,mass:r.mass,shape:r.geometry.cannon_shape,material:this.dice_body_material}),r.body.type=re.DYNAMIC,r.body.position.set(n.x,n.y,n.z),r.body.quaternion.setFromAxisAngle(new b(i.x,i.y,i.z),i.a*Math.PI*2),r.body.angularVelocity.set(s.x,s.y,s.z),r.body.velocity.set(o.x,o.y,o.z),r.body.linearDamping=.1,r.body.angularDamping=.1,r.body.diceShape=r.shape,r.body.soundMaterial=r.soundMaterial||this.sound_dieMaterial,r.body.sleepState=0,r.body.addEventListener("collide",this.eventCollide.bind(this)),this.world.addBody(r.body)}playCollisionSound(e,{speed:t,mass:n,diceShape:i,soundMaterial:s}){if(!(!this.sounds||this.volume<=0))if(e==="dice"){const o=i==="d2"?"coin":s||this.sound_dieMaterial,r=this.sounds_dice[o]||this.sounds_dice[this.sound_dieMaterial]||[],c=r[Math.floor(Math.random()*r.length)];c&&Wa(c,this._audioCtx,Ga({speed:t,mass:n,volume:this.volume}))}else{const o=this.sounds_table[this.surface]||[],r=o[Math.floor(Math.random()*o.length)];r&&Wa(r,this._audioCtx,Ga({speed:t,mass:n,volume:this.volume}))}}eventCollide({body:e,target:t}){var c;if(!e)return;const n=this.animstate=="simulate";if(n&&!this._recorder||!n&&(!this.sounds||this.volume<=0))return;let i=n?this.iteration*this.framerate*1e3:Date.now(),s=e.mass>0?"dice":"table";const o=(c=e.world)==null?void 0:c.stepnumber;if((this.lastSoundStep==o||this.lastSound>i)&&s!="dice"||(this.lastSoundStep==o||this.lastSound>i)&&s=="dice"&&this.lastSoundType=="dice")return;let r=null;if(e.mass>0){let l=e.velocity.length();if(l<250)return;r={kind:"dice",speed:l,mass:e.mass,diceShape:e.diceShape,soundMaterial:e.soundMaterial},this.lastSoundType="dice"}else{let l=t.velocity.length();if(l<250)return;r={kind:"table",speed:l,mass:t.mass},this.lastSoundType="table"}this.lastSoundStep=o,this.lastSound=i+this.soundDelay,n?this._recorder.pushSound(r):this.playCollisionSound(r.kind,r)}checkForRethrow(e){let t=e.notation.func?e.notation.func.toLowerCase():"",n,i=!1;if(t!=""&&n&&n.method){t=e.notation.func.toLowerCase();let s=e.notation.args||"";i=n.method(e,s)}return i}throwFinished(){const e=this.iteration>this.iterationLimit;for(let t=0,n=this.diceList.length;t<n;++t){const i=this.diceList[t],s=re.SLEEPING;if(i.body.sleepState<s&&!e)return!1;if(i.body.sleepState==s||e){if(i.body.type===re.KINEMATIC)continue;let o=!1;if(i.result.length==0?(i.storeRolledValue(i.resultReason),o=this.checkForRethrow(i)):i.result.length>0&&i.rerolling&&(i.rerolling=!1,i.storeRolledValue("reroll"),o=this.checkForRethrow(i)),o)return i.rerolls+=1,i.rerolling=!0,i.body.wakeUp(),i.body.type=re.DYNAMIC,i.body.angularVelocity=new b(25,25,25),i.body.velocity=new b(0,0,3e3),!1;i.rerolling=!1,i.body.type=re.KINEMATIC}}return!0}simulateThrow(){this.animstate="simulate",this.iteration=0,this.rolling=!0,this.lastSound=0,this.lastSoundStep=-1;const e=ig(this.diceList.length,this.framerate);for(this._recorder=e,e.pushFrame(this.diceList);!this.throwFinished(!0);)++this.iteration,this.world.step(this.framerate),e.pushFrame(this.diceList);this._recorder=null,this._playback=e.finish()}applyPlaybackFrame(e,t,n,i=!1){var o,r;const s=Math.min(this.diceList.length,(r=(o=this._playback)==null?void 0:o.diceCount)!=null?r:this.diceList.length);for(let c=0;c<s;c+=1){const l=this.diceList[c];if(!l)continue;const h=sg(e,t,c,n);l.position.set(h.x,h.y,h.z),l.quaternion.set(h.qx,h.qy,h.qz,h.qw),l.body&&(i?(l.body.position.set(h.x,h.y,h.z),l.body.quaternion.set(h.qx,h.qy,h.qz,h.qw),l.body.velocity.set(0,0,0),l.body.angularVelocity.set(0,0,0),l.body.type=re.KINEMATIC):l.body.velocity.set(h.vx,h.vy,h.vz))}}animateThrow(e,t){this.animstate="throw";const n=this._playback;if(n&&n.frames.length>0){const r=typeof performance<"u"?performance.now():Date.now();this._playbackStart||(this._playbackStart=r);const c=(r-this._playbackStart)/1e3,{frame0:l,frame1:h,t:d,done:u,dueSounds:g}=rg(n,c);this.applyPlaybackFrame(l,h,d,u);for(const m of g)this.playCollisionSound(m.kind,m);if(this.renderer.render(this.scene,this.camera),this.running==e&&u){this._playback=null,this._playbackStart=0;for(const m of this.diceList)m&&m.result.length===0&&m.storeRolledValue(m.resultReason);this.running=!1,this.rolling=!1,this.animstate="afterthrow",this.lingerAuras(),t&&t.call(this,this.notationVectors);return}this.running==e&&requestAnimationFrame(()=>{this.animateThrow(e,t)});return}let i=Date.now();this.last_time=this.last_time||i-this.framerate*1e3;let s=(i-this.last_time)/1e3;++this.iteration;let o=Math.min(4,Math.floor(s/this.framerate));for(let r=0;r<o;r++)this.world.step(this.framerate),++this.steps;for(const r of this.diceList)r!=null&&r.body&&(r.position.copy(r.body.position),r.quaternion.copy(r.body.quaternion));if(this.renderer.render(this.scene,this.camera),this.last_time=i,this.running==e&&this.throwFinished()){this.running=!1,this.rolling=!1,this.animstate="afterthrow",this.lingerAuras(),t&&t.call(this,this.notationVectors);return}this.running==e&&requestAnimationFrame(()=>{this.animateThrow(e,t)})}animateAfterThrow(e){this.animstate="afterthrow";let t=Date.now(),n=(t-this.last_time)/1e3;n>3&&(n=this.framerate),this.running=!1,this.last_time=t,this.renderer.render(this.scene,this.camera),this.running==e&&((i,s,o)=>{!o&&n<this.framerate?setTimeout(()=>{requestAnimationFrame(()=>{i.call(this,s)})},(this.framerate-n)*1e3):requestAnimationFrame(()=>{i.call(this,s)})}).bind(this)(this.animateAfterThrow,e,this.adaptive_timestep)}startClickThrow(e){this.rolling&&(this.clearDice(),this.rolling=!1);const{vector:t,dist:n,boost:i}=Gm({width:this.display.currentWidth,height:this.display.currentHeight,strength:this.strength,spread:this.throw_spread});return this.getNotationVectors(e,t,i,n)}glowTexture(){if(this.glowTextureCache)return this.glowTextureCache;const e=128,t=document.createElement("canvas");t.width=e,t.height=e;const n=t.getContext("2d"),i=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);return i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.3,"rgba(255,255,255,0.55)"),i.addColorStop(.65,"rgba(255,255,255,0.15)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,e,e),this.glowTextureCache=new si(t),this.glowTextureCache}addDieLight(e,t){var u,g;const{level:n,color:i,reach:s}=hm(t);if(!(n>0)||!this.scene)return;e.geometry.boundingSphere||e.geometry.computeBoundingSphere();const o=((u=e.geometry.boundingSphere)==null?void 0:u.radius)||1,r=new we(i),c={map:this.glowTexture(),color:r,transparent:!0,opacity:0,depthWrite:!1};this.glowPlaneGeometry||(this.glowPlaneGeometry=new yi(1,1));const l=new Ge(this.glowPlaneGeometry,new vi(c)),h=new md(new Oo(c));this.scene.add(l,h);const d=(g=t==null?void 0:t.flicker)!=null?g:(t==null?void 0:t.effect)==="fire";e.userData.dieLight={level:n,radius:o,reach:s,color:i,shade:Er(i),pool:l,halo:h,flicker:d,seed:Math.random()*100}}updateDieLights(){var i,s,o;const e=(typeof performance<"u"?performance.now():Date.now())/1e3,t=[];for(const r of this.diceList){const c=(i=r.userData)==null?void 0:i.dieLight;if(!c)continue;const l=Array.isArray(r.material)?r.material[0]:r.material,h=c.flicker?um(e,c.seed):1,d=(r.visible===!1?0:(s=l==null?void 0:l.opacity)!=null?s:1)*h,{x:u,y:g,z:m}=r.position,p=dm({level:c.level,radius:c.radius,height:Math.max(0,m-c.radius),opacity:d,reach:c.reach});c.pool.position.set(u,g,.5),c.pool.scale.set(p.pool.scale,p.pool.scale,1),c.pool.material.opacity=p.pool.opacity,c.halo.position.set(u,g,Math.max(.5,m-c.radius*.9)),c.halo.scale.set(p.halo.scale,p.halo.scale,1),c.halo.material.opacity=p.halo.opacity,!c.shade&&p.light.intensity>0&&t.push({x:u,y:g,z:m,color:c.color,intensity:p.light.intensity,distance:p.light.distance,shade:!1})}if(!((o=this.dieLightPool)!=null&&o.length))return;const n=cm(t,this.dieLightPool.length);for(let r=0;r<this.dieLightPool.length;r+=1){const c=this.dieLightPool[r],l=n[r];l?(c.color.set(l.color),c.position.set(l.x,l.y,l.z),c.intensity=l.intensity,c.distance=l.distance):c.intensity=0}}removeDieLight(e){var n;const t=(n=e==null?void 0:e.userData)==null?void 0:n.dieLight;!t||(this.scene.remove(t.pool,t.halo),this.programKeeper?(this.programKeeper.keepOrDispose(t.pool.material),this.programKeeper.keepOrDispose(t.halo.material)):(t.pool.material.dispose(),t.halo.material.dispose()),delete e.userData.dieLight)}addDieAura(e,t){var i;const n=Vm(t);!n||!this.scene||(e.geometry.boundingSphere||e.geometry.computeBoundingSphere(),this.auraFields=this.auraFields||{},this.auraFields[n.id]||(this.auraFields[n.id]=new Ym(n,this.scene)),e.userData.aura={id:n.id,radius:((i=e.geometry.boundingSphere)==null?void 0:i.radius)||1,carry:0,until:1/0})}updateAuras(){var s,o,r,c,l,h,d;if(!this.auraFields)return;const e=typeof performance<"u"?performance.now():Date.now(),t=Math.min(.1,Math.max(0,(e-(this._auraLast||e))/1e3));this._auraLast=e;for(const u of this.diceList){const g=(s=u.userData)==null?void 0:s.aura,m=g&&this.auraFields[g.id];if(!m||e>g.until)continue;const p=Array.isArray(u.material)?u.material[1]:u.material;if(u.visible===!1||((o=p==null?void 0:p.opacity)!=null?o:1)<.6)continue;const f=(r=u.body)!=null&&r.velocity?u.body.velocity.length()/g.radius:0,{count:_,carry:v}=Hm(m.aura,f,t,g.carry,(c=this.auraScale)!=null?c:1);g.carry=v,_&&m.emit(u,g.radius,_)}const i=(((h=(l=this.renderer)==null?void 0:l.domElement)==null?void 0:h.height)||1)/2/Math.tan((((d=this.camera)==null?void 0:d.fov)||20)*Math.PI/360);this._auraAlive=Object.values(this.auraFields).reduce((u,g)=>u+g.step(t,i),0)}lingerAuras(){var i,s,o;const e=typeof performance<"u"?performance.now():Date.now();let t=!1;for(const r of this.diceList){const c=(i=r.userData)==null?void 0:i.aura;if(!c)continue;const l=(s=this.auraFields)==null?void 0:s[c.id];c.until=e+((o=l==null?void 0:l.aura.linger)!=null?o:0)*1e3,t=!0}if(!t||this._auraLoop||typeof requestAnimationFrame!="function")return;this._auraLoop=!0;const n=()=>{const r=this.diceList.some(c=>{var l;return((l=c.userData)==null?void 0:l.aura)&&(typeof performance<"u"?performance.now():Date.now())<=c.userData.aura.until});if(this.rolling||!this.renderer||!r&&!this._auraAlive){this._auraLoop=!1,this.renderer&&!this.rolling&&!(this._activePostLoops>0)&&this.renderer.render(this.scene,this.camera);return}this._activePostLoops>0||this.renderer.render(this.scene,this.camera),requestAnimationFrame(n)};requestAnimationFrame(n)}clearDice(){this.running=!1,this._playback=null,this._playbackStart=0,this._recorder=null,this._hoverRing&&(this._hoverRing.visible=!1),Object.values(this.auraFields||{}).forEach(t=>t.clear()),this._auraAlive=0;let e;for(;e=this.diceList.pop();)this.removeDieLight(e),this.scene.remove(e),e.body&&this.world.removeBody(e.body),Ca(e,this.programKeeper);this.dieLightPool&&this.dieLightPool.forEach(t=>{t.intensity=0}),this.renderer.render(this.scene,this.camera),setTimeout(()=>{this.renderer.render(this.scene,this.camera)},100)}getDiceResults(e){if(e!==void 0)return{type:this.diceList[e].shape,sides:parseInt(this.diceList[e].shape.substring(1)),id:e,...this.diceList[e].result.at(-1)};let t=0;const n=this.notationVectors.constant?parseInt(`${this.notationVectors.op}${this.notationVectors.constant}`):0;let i=n;return{notation:this.notationVectors.notation,sets:this.notationVectors.set.map(o=>{const r=t+o.num-1;let c=0;const l=[];for(let d=t;d<=r;d++){if(this.diceList[t].result.at(-1).reason==="remove"){t++;continue}l.push({type:o.type,sides:parseInt(o.type.substring(1)),id:t,...this.diceList[t].result.at(-1)}),c+=this.diceList[t].result.at(-1).value,t++}const h={num:o.num,type:o.type,sides:parseInt(o.type.substring(1)),rolls:l,total:c};return i+=c,h}),modifier:n,total:i}}async roll(e,{looks:t=null}={}){if(this.dieLooks=t?await Promise.all(t.map(n=>n?this.DiceColors.makeColorSet(n):null)):null,this.dieLabels=t?t.map(n=>{var i;return(i=n==null?void 0:n.labels)!=null?i:null}):null,this.sounds&&this.dieLooks&&await this.loadSounds(this.dieLooks.map(n=>ys(n))),this.notationVectors=this.startClickThrow(e),this.notationVectors)return new Promise((n,i)=>{this.rollDice(()=>{const s=this.getDiceResults();this.onRollComplete(s);const o=new CustomEvent("rollComplete",{detail:s});document.dispatchEvent(o),n(s)})})}async reroll(e){return this._playback=null,this._playbackStart=0,this.rolling=!0,this.running=Date.now(),this.iteration=0,new Promise((t,n)=>{e.forEach(i=>{const s=this.diceList[i];s.rerolls+=1,s.rerolling=!0,s.body.wakeUp(),s.body.type=re.DYNAMIC,s.body.angularVelocity=new b(25,25,25),s.body.velocity=new b(0,0,3e3)}),this.animateThrow(this.running,()=>{const i=e.map(o=>this.getDiceResults(o));this.onRerollComplete(i);const s=new CustomEvent("rerollComplete",{detail:i});document.dispatchEvent(s),t(i)})})}async add(e,{looks:t=null}={}){var r,c;let n=this.diceList.length;if(!n)return this.roll(e,{looks:t});const i=t?await Promise.all(t.map(l=>l?this.DiceColors.makeColorSet(l):null)):[];this.sounds&&i.length&&await this.loadSounds(i.map(l=>ys(l))),this.dieLooks=[],this.dieLabels=[],i.forEach((l,h)=>{var d,u;this.dieLooks[n+h]=l,this.dieLabels[n+h]=(u=(d=t[h])==null?void 0:d.labels)!=null?u:null});let s=this.startClickThrow(e),o=[];for(let l=0,h=s.vectors.length;l<h;++l)this.spawnDice(s.vectors[l]);this.simulateThrow(),this.steps=0,this.iteration=0;for(let l=0,h=s.vectors.length;l<h;++l){const d=n+l;!this.diceList[d]||o.push(d)}if(s.result&&s.result.length>0)for(let l=0;l<s.result.length;l++){const h=n+l;let d=this.diceList[h];!d||d.getLastValue().value!=s.result[l]&&this.swapDiceFace(d,s.result[l])}return(c=(r=this._playback)==null?void 0:r.frames)!=null&&c.length&&this.applyPlaybackFrame(this._playback.frames[0],this._playback.frames[0],0,!1),this._playbackStart=0,this.notationVectors=Ea.mergeNotation(this.notationVectors,s),new Promise((l,h)=>{const d=()=>{const u=o.map(m=>this.getDiceResults(m));this.onAddDiceComplete(u);const g=new CustomEvent("addDiceComplete",{detail:u});document.dispatchEvent(g),l(u)};this.rolling=!0,this.running=Date.now(),this.last_time=0,this.animateThrow(this.running,d)})}async remove(e){return new Promise((t,n)=>{const i=[];e.forEach(o=>{const r=this.diceList[o];r.body&&this.world.removeBody(r.body),this.removeDieLight(r),this.scene.remove(r),r.storeRolledValue("remove"),i.push(this.getDiceResults(o)),Ca(r,this.programKeeper)}),this.renderer.render(this.scene,this.camera),this.onRemoveDiceComplete(i);const s=new CustomEvent("removeDiceComplete",{detail:i});document.dispatchEvent(s),t(i)})}rollDice(e){var t,n;if(this.notationVectors.error){e.call(this);return}this.clearDice();for(let i=0,s=this.notationVectors.vectors.length;i<s;++i)this.spawnDice(this.notationVectors.vectors[i]);if(this.simulateThrow(),this.steps=0,this.iteration=0,this.notationVectors.result&&this.notationVectors.result.length>0)for(let i=0;i<this.notationVectors.result.length;i++){let s=this.diceList[i];!s||s.getLastValue().value!=this.notationVectors.result[i]&&this.swapDiceFace(s,this.notationVectors.result[i])}(n=(t=this._playback)==null?void 0:t.frames)!=null&&n.length&&this.applyPlaybackFrame(this._playback.frames[0],this._playback.frames[0],0,!1),this._playbackStart=0,this.rolling=!0,this.running=Date.now(),this.last_time=0,this.animateThrow(this.running,e)}}return gg});
