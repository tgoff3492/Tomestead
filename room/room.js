var Wf=0,jh=1,qf=2;var Ks=1,Xf=2,Xr=3,Ai=0,hn=1,Xt=2,Js=0,jr=1,Fn=2,Kh=3,Jh=4,jf=5;var Ys=100,Kf=101,Jf=102,Yf=103,$f=104,Zf=200,Qf=201,ep=202,tp=203,Yh=204,$h=205,np=206,ip=207,sp=208,rp=209,ap=210,op=211,cp=212,lp=213,hp=214,bc=0,xc=1,_c=2,Ar=3,vc=4,yc=5,Mc=6,Sc=7,jc=0,up=1,dp=2,Ri=0,Zh=1,Qh=2,eu=3,po=4,tu=5,nu=6,iu=7,Ih="attached",fp="detached",su=300,$s=301,Kr=302,Kc=303,Jc=304,di=1e3,In=1001,Rr=1002,$t=1003,Yc=1004;var Zs=1005;var on=1006,Jr=1007;var ti=1008;var Gn=1009,ru=1010,au=1011,Yr=1012,$c=1013,fi=1014,Jn=1015,pi=1016,Zc=1017,Qc=1018,Qs=1020,ou=35902,cu=35899,lu=1021,hu=1022,ni=1023,ji=1026,is=1027,el=1028,tl=1029,Ss=1030,nl=1031;var il=1033,mo=33776,go=33777,bo=33778,xo=33779,sl=35840,rl=35841,al=35842,ol=35843,cl=36196,ll=37492,hl=37496,ul=37488,dl=37489,_o=37490,fl=37491,pl=37808,ml=37809,gl=37810,bl=37811,xl=37812,_l=37813,vl=37814,yl=37815,Ml=37816,Sl=37817,El=37818,Tl=37819,wl=37820,Al=37821,Rl=36492,Cl=36494,Pl=36495,Il=36283,Dl=36284,vo=36285,Ll=36286;var Fs=2300,Us=2301,mc=2302,Dh=2303,Lh=2400,Nh=2401,Fh=2402,pp=2500;var uu=0,yo=1,$r=2,mp=3200;var Mo=0,gp=1,ss="",Vt="srgb",Dn="srgb-linear",Na="linear",Et="srgb";var gc=7680;var bp=519,xp=512,_p=513,vp=514,du=515,yp=516,Mp=517,fu=518,pu=519,mu=35044;var gu="300 es",Zn=2e3,Cr=2001;function b0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function x0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sp(){let i=Pr("canvas");return i.style.display="block",i}var jd={},Ir=null;function Fa(...i){let e="THREE."+i.shift();Ir?Ir("log",e,...i):console.log(e,...i)}function Ep(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Be(...i){i=Ep(i);let e="THREE."+i.shift();if(Ir)Ir("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ke(...i){i=Ep(i);let e="THREE."+i.shift();if(Ir)Ir("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ns(...i){let e=i.join(" ");e in jd||(jd[e]=!0,Be(...i))}function Tp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var wp={[bc]:bc,[_c]:Mc,[vc]:vc,[Ar]:yc,[xc]:xc,[Mc]:_c,[Sc]:Sc,[yc]:Ar},Mi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kd=1234567,Pa=Math.PI/180,Os=180/Math.PI;function mi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function bu(i,e){return(i%e+e)%e}function _0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function v0(i,e,t){return i!==e?(t-i)/(e-i):0}function Ia(i,e,t){return(1-t)*i+t*e}function y0(i,e,t,n){return Ia(i,e,1-Math.exp(-t*n))}function M0(i,e=1){return e-Math.abs(bu(i,e*2)-e)}function S0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function E0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function T0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function w0(i,e){return i+Math.random()*(e-i)}function A0(i){return i*(.5-Math.random())}function R0(i){i!==void 0&&(Kd=i);let e=Kd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function C0(i){return i*Pa}function P0(i){return i*Os}function I0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function D0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function xu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function L0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*h,o*l);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Nl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function _u(i,e){if(e.constructor===Float32Array)return i;let t=Nl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function vu(i,e){if(e.constructor===Float32Array)return i;let t=Nl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var jt={DEG2RAD:Pa,RAD2DEG:Os,generateUUID:mi,clamp:at,euclideanModulo:bu,mapLinear:_0,inverseLerp:v0,lerp:Ia,damp:y0,pingpong:M0,smoothstep:S0,smootherstep:E0,randInt:T0,randFloat:w0,randFloatSpread:A0,seededRandom:R0,degToRad:C0,radToDeg:P0,isPowerOfTwo:I0,ceilPowerOfTwo:D0,floorPowerOfTwo:xu,setQuaternionFromProperEuler:L0,normalize:vu,denormalize:_u},wu=class wu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wu.prototype.isVector2=!0;var oe=wu,rn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(u!==x||c!==d||l!==f||h!==g){let m=c*d+l*f+h*g+u*x;m<0&&(d=-d,f=-f,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){let _=Math.acos(m),M=Math.sin(_);p=Math.sin(p*_)/M,o=Math.sin(o*_)/M,c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+x*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+x*o;let _=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=_,l*=_,h*=_,u*=_}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Au=class Au{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ih.copy(this).projectOnVector(e),this.sub(ih)}reflect(e){return this.sub(ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Au.prototype.isVector3=!0;var P=Au,ih=new P,Jd=new rn,Ru=class Ru{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],_=s[1],M=s[4],v=s[7],E=s[2],w=s[5],b=s[8];return r[0]=a*x+o*_+c*E,r[3]=a*m+o*M+c*w,r[6]=a*p+o*v+c*b,r[1]=l*x+h*_+u*E,r[4]=l*m+h*M+u*w,r[7]=l*p+h*v+u*b,r[2]=d*x+f*_+g*E,r[5]=d*m+f*M+g*w,r[8]=d*p+f*v+g*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sh.makeScale(e,t)),this}rotate(e){return Ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sh.makeRotation(-e)),this}translate(e,t){return Ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ru.prototype.isMatrix3=!0;var tt=Ru,sh=new tt,Yd=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$d=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function N0(){let i={enabled:!0,workingColorSpace:Dn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Et&&(s.r=Xi(s.r),s.g=Xi(s.g),s.b=Xi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Et&&(s.r=wr(s.r),s.g=wr(s.g),s.b=wr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ss?Na:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Dn]:{primaries:e,whitePoint:n,transfer:Na,toXYZ:Yd,fromXYZ:$d,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:Yd,fromXYZ:$d,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),i}var ct=N0();function Xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var cr,Ec=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{cr===void 0&&(cr=Pr("canvas")),cr.width=e.width,cr.height=e.height;let s=cr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=cr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Pr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Xi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xi(t[n]/255)*255):t[n]=Xi(t[n]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},F0=0,Dr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(rh(s[a].image)):r.push(rh(s[a]))}else r=rh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function rh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ec.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}var U0=0,ah=new P,cn=class i extends Mi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=In,s=In,r=on,a=ti,o=ni,c=Gn,l=i.DEFAULT_ANISOTROPY,h=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=mi(),this.name="",this.source=new Dr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ah).x}get height(){return this.source.getSize(ah).y}get depth(){return this.source.getSize(ah).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case di:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case Rr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case di:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case Rr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=su;cn.DEFAULT_ANISOTROPY=1;var Cu=class Cu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,v=(f+1)/2,E=(p+1)/2,w=(h+d)/4,b=(u+x)/4,y=(g+m)/4;return M>v&&M>E?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=w/n,r=b/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=y/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=b/r,s=y/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Cu.prototype.isVector4=!0;var St=Cu,Tc=class extends Mi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new cn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Dr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},jn=class extends Tc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ua=class extends cn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var wc=class extends cn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Xc=class Xc{constructor(e,t,n,s,r,a,o,c,l,h,u,d,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,f,g,x,m)}set(e,t,n,s,r,a,o,c,l,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/lr.setFromMatrixColumn(e,0).length(),r=1/lr.setFromMatrixColumn(e,1).length(),a=1/lr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d-x*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(O0,e,k0)}lookAt(e,t,n){let s=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),us.crossVectors(n,qn),us.lengthSq()===0&&(Math.abs(n.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),us.crossVectors(n,qn)),us.normalize(),Bo.crossVectors(qn,us),s[0]=us.x,s[4]=Bo.x,s[8]=qn.x,s[1]=us.y,s[5]=Bo.y,s[9]=qn.y,s[2]=us.z,s[6]=Bo.z,s[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],_=n[3],M=n[7],v=n[11],E=n[15],w=s[0],b=s[4],y=s[8],F=s[12],A=s[1],L=s[5],I=s[9],U=s[13],R=s[2],B=s[6],H=s[10],G=s[14],ie=s[3],X=s[7],$=s[11],Q=s[15];return r[0]=a*w+o*A+c*R+l*ie,r[4]=a*b+o*L+c*B+l*X,r[8]=a*y+o*I+c*H+l*$,r[12]=a*F+o*U+c*G+l*Q,r[1]=h*w+u*A+d*R+f*ie,r[5]=h*b+u*L+d*B+f*X,r[9]=h*y+u*I+d*H+f*$,r[13]=h*F+u*U+d*G+f*Q,r[2]=g*w+x*A+m*R+p*ie,r[6]=g*b+x*L+m*B+p*X,r[10]=g*y+x*I+m*H+p*$,r[14]=g*F+x*U+m*G+p*Q,r[3]=_*w+M*A+v*R+E*ie,r[7]=_*b+M*L+v*B+E*X,r[11]=_*y+M*I+v*H+E*$,r[15]=_*F+M*U+v*G+E*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15],_=c*f-l*d,M=o*f-l*u,v=o*d-c*u,E=a*f-l*h,w=a*d-c*h,b=a*u-o*h;return t*(x*_-m*M+p*v)-n*(g*_-m*E+p*w)+s*(g*M-x*E+p*b)-r*(g*v-x*w+m*b)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],_=t*o-n*a,M=t*c-s*a,v=t*l-r*a,E=n*c-s*o,w=n*l-r*o,b=s*l-r*c,y=h*x-u*g,F=h*m-d*g,A=h*p-f*g,L=u*m-d*x,I=u*p-f*x,U=d*p-f*m,R=_*U-M*I+v*L+E*A-w*F+b*y;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/R;return e[0]=(o*U-c*I+l*L)*B,e[1]=(s*I-n*U-r*L)*B,e[2]=(x*b-m*w+p*E)*B,e[3]=(d*w-u*b-f*E)*B,e[4]=(c*A-a*U-l*F)*B,e[5]=(t*U-s*A+r*F)*B,e[6]=(m*v-g*b-p*M)*B,e[7]=(h*b-d*v+f*M)*B,e[8]=(a*I-o*A+l*y)*B,e[9]=(n*A-t*I-r*y)*B,e[10]=(g*w-x*v+p*_)*B,e[11]=(u*v-h*w-f*_)*B,e[12]=(o*F-a*L-c*y)*B,e[13]=(t*L-n*F+s*y)*B,e[14]=(x*M-g*E-m*_)*B,e[15]=(h*E-u*M+d*_)*B,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,_=c*l,M=c*h,v=c*u,E=n.x,w=n.y,b=n.z;return s[0]=(1-(x+p))*E,s[1]=(f+v)*E,s[2]=(g-M)*E,s[3]=0,s[4]=(f-v)*w,s[5]=(1-(d+p))*w,s[6]=(m+_)*w,s[7]=0,s[8]=(g+M)*b,s[9]=(m-_)*b,s[10]=(1-(d+x))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=lr.set(s[0],s[1],s[2]).length(),o=lr.set(s[4],s[5],s[6]).length(),c=lr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ci.copy(this);let l=1/a,h=1/o,u=1/c;return ci.elements[0]*=l,ci.elements[1]*=l,ci.elements[2]*=l,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=u,ci.elements[9]*=u,ci.elements[10]*=u,t.setFromRotationMatrix(ci),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Zn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===Zn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Cr)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Zn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===Zn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Cr)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Xc.prototype.isMatrix4=!0;var Ye=Xc,lr=new P,ci=new Ye,O0=new P(0,0,0),k0=new P(1,1,1),us=new P,Bo=new P,qn=new P,Zd=new Ye,Qd=new rn,kn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(at(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qd.setFromEuler(this),this.setFromQuaternion(Qd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kn.DEFAULT_ORDER="XYZ";var Lr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},B0=0,ef=new P,hr=new rn,Bi=new Ye,zo=new P,ba=new P,z0=new P,G0=new rn,tf=new P(1,0,0),nf=new P(0,1,0),sf=new P(0,0,1),rf={type:"added"},H0={type:"removed"},ur={type:"childadded",child:null},oh={type:"childremoved",child:null},Dt=class i extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new kn,n=new rn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new tt}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(tf,e)}rotateY(e){return this.rotateOnAxis(nf,e)}rotateZ(e){return this.rotateOnAxis(sf,e)}translateOnAxis(e,t){return ef.copy(e).applyQuaternion(this.quaternion),this.position.add(ef.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tf,e)}translateY(e){return this.translateOnAxis(nf,e)}translateZ(e){return this.translateOnAxis(sf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zo.copy(e):zo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(ba,zo,this.up):Bi.lookAt(zo,ba,this.up),this.quaternion.setFromRotationMatrix(Bi),s&&(Bi.extractRotation(s.matrixWorld),hr.setFromRotationMatrix(Bi),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rf),ur.child=e,this.dispatchEvent(ur),ur.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(H0),oh.child=e,this.dispatchEvent(oh),oh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rf),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,e,z0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,G0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Dt.DEFAULT_UP=new P(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bt=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},V0={type:"move"},Nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(V0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},Go={h:0,s:0,l:0};function ch(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=bu(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ch(a,r,e+1/3),this.g=ch(a,r,e),this.b=ch(a,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=Vt){function n(r){r!==void 0&&parseFloat(r)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){let n=Ap[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return ct.workingToColorSpace(Tn.copy(this),e),Math.round(at(Tn.r*255,0,255))*65536+Math.round(at(Tn.g*255,0,255))*256+Math.round(at(Tn.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(Tn.copy(this),t);let n=Tn.r,s=Tn.g,r=Tn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=Vt){ct.workingToColorSpace(Tn.copy(this),e);let t=Tn.r,n=Tn.g,s=Tn.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ds),this.setHSL(ds.h+e,ds.s+t,ds.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ds),e.getHSL(Go);let n=Ia(ds.h,Go.h,t),s=Ia(ds.s,Go.s,t),r=Ia(ds.l,Go.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new ze;ze.NAMES=Ap;var ks=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},li=new P,zi=new P,lh=new P,Gi=new P,dr=new P,fr=new P,af=new P,hh=new P,uh=new P,dh=new P,fh=new St,ph=new St,mh=new St,qi=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),li.subVectors(e,t),s.cross(li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){li.subVectors(s,t),zi.subVectors(n,t),lh.subVectors(e,t);let a=li.dot(li),o=li.dot(zi),c=li.dot(lh),l=zi.dot(zi),h=zi.dot(lh),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Gi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Gi.x),c.addScaledVector(a,Gi.y),c.addScaledVector(o,Gi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return fh.setScalar(0),ph.setScalar(0),mh.setScalar(0),fh.fromBufferAttribute(e,t),ph.fromBufferAttribute(e,n),mh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(fh,r.x),a.addScaledVector(ph,r.y),a.addScaledVector(mh,r.z),a}static isFrontFacing(e,t,n,s){return li.subVectors(n,t),zi.subVectors(e,t),li.cross(zi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),li.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;dr.subVectors(s,n),fr.subVectors(r,n),hh.subVectors(e,n);let c=dr.dot(hh),l=fr.dot(hh);if(c<=0&&l<=0)return t.copy(n);uh.subVectors(e,s);let h=dr.dot(uh),u=fr.dot(uh);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(dr,a);dh.subVectors(e,r);let f=dr.dot(dh),g=fr.dot(dh);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(fr,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return af.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(af,o);let p=1/(m+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(dr,a).addScaledVector(fr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ln=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hi):hi.fromBufferAttribute(r,a),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ho.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ho.copy(n.boundingBox)),Ho.applyMatrix4(e.matrixWorld),this.union(Ho)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xa),Vo.subVectors(this.max,xa),pr.subVectors(e.a,xa),mr.subVectors(e.b,xa),gr.subVectors(e.c,xa),fs.subVectors(mr,pr),ps.subVectors(gr,mr),Cs.subVectors(pr,gr);let t=[0,-fs.z,fs.y,0,-ps.z,ps.y,0,-Cs.z,Cs.y,fs.z,0,-fs.x,ps.z,0,-ps.x,Cs.z,0,-Cs.x,-fs.y,fs.x,0,-ps.y,ps.x,0,-Cs.y,Cs.x,0];return!gh(t,pr,mr,gr,Vo)||(t=[1,0,0,0,1,0,0,0,1],!gh(t,pr,mr,gr,Vo))?!1:(Wo.crossVectors(fs,ps),t=[Wo.x,Wo.y,Wo.z],gh(t,pr,mr,gr,Vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Hi=[new P,new P,new P,new P,new P,new P,new P,new P],hi=new P,Ho=new Ln,pr=new P,mr=new P,gr=new P,fs=new P,ps=new P,Cs=new P,xa=new P,Vo=new P,Wo=new P,Ps=new P;function gh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ps.fromArray(i,r);let o=s.x*Math.abs(Ps.x)+s.y*Math.abs(Ps.y)+s.z*Math.abs(Ps.z),c=e.dot(Ps),l=t.dot(Ps),h=n.dot(Ps);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var sn=new P,qo=new oe,W0=0,qt=class extends Mi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:W0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mu,this.updateRanges=[],this.gpuType=Jn,this.version=0,this._normalizationScale=e!==void 0?Nl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qo.fromBufferAttribute(this,t),qo.applyMatrix3(e),this.setXY(t,qo.x,qo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):_u(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):vu(e,this.array)}};var Oa=class extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ka=class extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var nt=class extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}},q0=new Ln,_a=new P,bh=new P,Bn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):q0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);let t=_a.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(_a,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(bh)),this.expandByPoint(_a.copy(e.center).sub(bh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},X0=0,$n=new Ye,xh=new Dt,br=new P,Xn=new Ln,va=new Ln,mn=new P,Tt=class i extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(b0(e)?ka:Oa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,n){return $n.makeTranslation(e,t,n),this.applyMatrix4($n),this}scale(e,t,n){return $n.makeScale(e,t,n),this.applyMatrix4($n),this}lookAt(e){return xh.lookAt(e),xh.updateMatrix(),this.applyMatrix4(xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Xn.setFromBufferAttribute(r),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];va.setFromBufferAttribute(o),this.morphTargetsRelative?(mn.addVectors(Xn.min,va.min),Xn.expandByPoint(mn),mn.addVectors(Xn.max,va.max),Xn.expandByPoint(mn)):(Xn.expandByPoint(va.min),Xn.expandByPoint(va.max))}Xn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)mn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(mn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)mn.fromBufferAttribute(o,l),c&&(br.fromBufferAttribute(e,l),mn.add(br)),s=Math.max(s,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new qt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let F=0;F<n.count;F++)o[F]=new P,c[F]=new P;let h=new P,u=new P,d=new P,f=new oe,g=new oe,x=new oe,m=new P,p=new P;function _(F,A,L){l[F]=l[A]=l[L]=1,h.fromBufferAttribute(n,F),u.fromBufferAttribute(n,A),d.fromBufferAttribute(n,L),f.fromBufferAttribute(r,F),g.fromBufferAttribute(r,A),x.fromBufferAttribute(r,L),u.sub(h),d.sub(h),g.sub(f),x.sub(f);let I=1/(g.x*x.y-x.x*g.y);isFinite(I)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(d,-g.y).multiplyScalar(I),p.copy(d).multiplyScalar(g.x).addScaledVector(u,-x.x).multiplyScalar(I),o[F].add(m),o[A].add(m),o[L].add(m),c[F].add(p),c[A].add(p),c[L].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let F=0,A=M.length;F<A;++F){let L=M[F],I=L.start,U=L.count;for(let R=I,B=I+U;R<B;R+=3)_(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let v=new P,E=new P,w=new P,b=new P;function y(F){w.fromBufferAttribute(s,F),b.copy(w);let A=o[F];v.copy(A),v.sub(w.multiplyScalar(w.dot(A))).normalize(),E.crossVectors(b,A);let I=E.dot(c[F])<0?-1:1;a.setXYZW(F,v.x,v.y,v.z,I)}for(let F=0,A=n.count;F<A;++F)l[F]&&y(F);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new qt(d,h,u)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=mu,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=of(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=of(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function of(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=mi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Pn=new P,bs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Nl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyMatrix4(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyNormalMatrix(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.transformDirection(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Fa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Fa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):_u(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):vu(e,this.data.array)}},_h=new P,j0=new P,K0=new tt,ui=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=_h.subVectors(n,t).cross(j0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(_h),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||K0.getNormalMatrix(e),s=this.coplanarPoint(_h).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},J0=0,wn=class extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=jr,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yh,this.blendDst=$h,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gc,this.stencilZFail=gc,this.stencilZPass=gc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ui().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},xs=class extends wn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xr,ya=new P,_r=new P,vr=new P,yr=new oe,Ma=new oe,Rp=new Ye,Xo=new P,Sa=new P,jo=new P,cf=new oe,vh=new oe,lf=new oe,zs=class extends Dt{constructor(e=new xs){if(super(),this.isSprite=!0,this.type="Sprite",xr===void 0){xr=new Tt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Bs(t,5);xr.setIndex([0,1,2,0,2,3]),xr.setAttribute("position",new bs(n,3,0,!1)),xr.setAttribute("uv",new bs(n,2,3,!1))}this.geometry=xr,this.material=e,this.center=new oe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ke('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_r.setFromMatrixScale(this.matrixWorld),Rp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_r.multiplyScalar(-vr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Ko(Xo.set(-.5,-.5,0),vr,a,_r,s,r),Ko(Sa.set(.5,-.5,0),vr,a,_r,s,r),Ko(jo.set(.5,.5,0),vr,a,_r,s,r),cf.set(0,0),vh.set(1,0),lf.set(1,1);let o=e.ray.intersectTriangle(Xo,Sa,jo,!1,ya);if(o===null&&(Ko(Sa.set(-.5,.5,0),vr,a,_r,s,r),vh.set(0,1),o=e.ray.intersectTriangle(Xo,jo,Sa,!1,ya),o===null))return;let c=e.ray.origin.distanceTo(ya);c<e.near||c>e.far||t.push({distance:c,point:ya.clone(),uv:qi.getInterpolation(ya,Xo,Sa,jo,cf,vh,lf,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Ko(i,e,t,n,s,r){yr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ma.x=r*yr.x-s*yr.y,Ma.y=s*yr.x+r*yr.y):Ma.copy(yr),i.copy(e),i.x+=Ma.x,i.y+=Ma.y,i.applyMatrix4(Rp)}var Vi=new P,yh=new P,Jo=new P,Yo=new P,_s=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){yh.copy(e).add(t).multiplyScalar(.5),Jo.copy(t).sub(e).normalize(),Yo.copy(this.origin).sub(yh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Jo),o=Yo.dot(this.direction),c=-Yo.dot(Jo),l=Yo.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(yh).addScaledVector(Jo,d),f}intersectSphere(e,t){if(e.radius<0)return null;Vi.subVectors(e.center,this.origin);let n=Vi.dot(this.direction),s=Vi.dot(Vi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,x=t.y-a.y,m=t.z-a.z,p=n.x-a.x,_=n.y-a.y,M=n.z-a.z,v=Math.abs(c),E=Math.abs(l),w=Math.abs(h),b,y,F,A,L,I,U,R,B,H,G,ie;if(v>=E&&v>=w?(F=c,I=u,B=g,ie=p,c>=0?(b=l,y=h,A=d,L=f,U=x,R=m,H=_,G=M):(b=h,y=l,A=f,L=d,U=m,R=x,H=M,G=_)):E>=w?(F=l,I=d,B=x,ie=_,l>=0?(b=h,y=c,A=f,L=u,U=m,R=g,H=M,G=p):(b=c,y=h,A=u,L=f,U=g,R=m,H=p,G=M)):(F=h,I=f,B=m,ie=M,h>=0?(b=c,y=l,A=u,L=d,U=g,R=x,H=p,G=_):(b=l,y=c,A=d,L=u,U=x,R=g,H=_,G=p)),F===0)return null;let X=b/F,$=y/F,Q=1/F,ge=A-X*I,Ge=L-$*I,Y=U-X*B,ye=R-$*B,Re=H-X*ie,Ee=G-$*ie,le=Re*ye-Ee*Y,Pe=ge*Ee-Ge*Re,vt=Y*Ge-ye*ge;if(s){if(le<0||Pe<0||vt<0)return null}else if((le<0||Pe<0||vt<0)&&(le>0||Pe>0||vt>0))return null;let He=le+Pe+vt;if(He===0)return null;let $e=Q*(le*I+Pe*B+vt*ie);return(He>0?$e<0:$e>0)?null:this.at($e/He,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zt=class extends wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},hf=new Ye,Is=new _s,$o=new Bn,uf=new P,Zo=new P,Qo=new P,ec=new P,Mh=new P,tc=new P,df=new P,nc=new P,ut=class extends Dt{constructor(e=new Tt,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){tc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Mh.fromBufferAttribute(u,e),a?tc.addScaledVector(Mh,h):tc.addScaledVector(Mh.sub(t),h))}t.add(tc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(r),Is.copy(e.ray).recast(e.near),!($o.containsPoint(Is.origin)===!1&&(Is.intersectSphere($o,uf)===null||Is.origin.distanceToSquared(uf)>(e.far-e.near)**2))&&(hf.copy(r).invert(),Is.copy(e.ray).applyMatrix4(hf),!(n.boundingBox!==null&&Is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Is)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,E=M;v<E;v+=3){let w=o.getX(v),b=o.getX(v+1),y=o.getX(v+2);s=ic(this,p,e,n,l,h,u,w,b,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);s=ic(this,a,e,n,l,h,u,_,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,E=M;v<E;v+=3){let w=v,b=v+1,y=v+2;s=ic(this,p,e,n,l,h,u,w,b,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=m,M=m+1,v=m+2;s=ic(this,a,e,n,l,h,u,_,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Y0(i,e,t,n,s,r,a,o){let c;if(e.side===hn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Ai,o),c===null)return null;nc.copy(o),nc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(nc);return l<t.near||l>t.far?null:{distance:l,point:nc.clone(),object:i}}function ic(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Zo),i.getVertexPosition(c,Qo),i.getVertexPosition(l,ec);let h=Y0(i,e,t,n,Zo,Qo,ec,df);if(h){let u=new P;qi.getBarycoord(df,Zo,Qo,ec,u),s&&(h.uv=qi.getInterpolatedAttribute(s,o,c,l,u,new oe)),r&&(h.uv1=qi.getInterpolatedAttribute(r,o,c,l,u,new oe)),a&&(h.normal=qi.getInterpolatedAttribute(a,o,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new P,materialIndex:0};qi.getNormal(Zo,Qo,ec,d.normal),h.face=d,h.barycoord=u}return h}var Ea=new St,ff=new St,pf=new St,$0=new St,mf=new Ye,sc=new P,Sh=new Bn,gf=new Ye,Eh=new _s,Ba=class extends ut{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ih,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ln),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,sc),this.boundingBox.expandByPoint(sc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Bn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,sc),this.boundingSphere.expandByPoint(sc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sh.copy(this.boundingSphere),Sh.applyMatrix4(s),e.ray.intersectsSphere(Sh)!==!1&&(gf.copy(s).invert(),Eh.copy(e.ray).applyMatrix4(gf),!(this.boundingBox!==null&&Eh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Eh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new St,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ih?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===fp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Be("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;ff.fromBufferAttribute(s.attributes.skinIndex,e),pf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Ea.copy(t),t.set(0,0,0,0)):(Ea.set(t.x,t.y,t.z,1),t.set(0,0,0)),Ea.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=pf.getComponent(r);if(a!==0){let o=ff.getComponent(r);mf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector($0.copy(Ea).applyMatrix4(mf),a)}}return t.isVector4&&(t.w=Ea.w),t.applyMatrix4(this.bindMatrixInverse)}},Fr=class extends Dt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ur=class extends cn{constructor(e=null,t=1,n=1,s,r,a,o,c,l=$t,h=$t,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},bf=new Ye,Z0=new Ye,za=class i{constructor(e=[],t=[]){this.uuid=mi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Be("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Z0;bf.multiplyMatrices(o,t[r]),bf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ur(t,e,e,ni,Jn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Be("Skeleton: No bone found with UUID:",r),a=new Fr),this.bones.push(a),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Ki=class extends qt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Mr=new Ye,xf=new Ye,rc=[],_f=new Ln,Q0=new Ye,Ta=new ut,wa=new Bn,Si=class extends ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ki(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Q0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mr),_f.copy(e.boundingBox).applyMatrix4(Mr),this.boundingBox.union(_f)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mr),wa.copy(e.boundingSphere).applyMatrix4(Mr),this.boundingSphere.union(wa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ta.geometry=this.geometry,Ta.material=this.material,Ta.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wa.copy(this.boundingSphere),wa.applyMatrix4(n),e.ray.intersectsSphere(wa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Mr),xf.multiplyMatrices(n,Mr),Ta.matrixWorld=xf,Ta.raycast(e,rc);for(let a=0,o=rc.length;a<o;a++){let c=rc[a];c.instanceId=r,c.object=this,t.push(c)}rc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ki(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ur(new Float32Array(s*this.count),s,this.count,el,Jn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ds=new Bn,eg=new oe(.5,.5),ac=new P,vs=class{constructor(e=new ui,t=new ui,n=new ui,s=new ui,r=new ui,a=new ui){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],_=r[12],M=r[13],v=r[14],E=r[15];if(s[0].setComponents(l-a,f-h,p-g,E-_).normalize(),s[1].setComponents(l+a,f+h,p+g,E+_).normalize(),s[2].setComponents(l+o,f+u,p+x,E+M).normalize(),s[3].setComponents(l-o,f-u,p-x,E-M).normalize(),n)s[4].setComponents(c,d,m,v).normalize(),s[5].setComponents(l-c,f-d,p-m,E-v).normalize();else if(s[4].setComponents(l-c,f-d,p-m,E-v).normalize(),t===Zn)s[5].setComponents(l+c,f+d,p+m,E+v).normalize();else if(t===Cr)s[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(e){Ds.center.set(0,0,0);let t=eg.distanceTo(e.center);return Ds.radius=.7071067811865476+t,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ac.x=s.normal.x>0?e.max.x:e.min.x,ac.y=s.normal.y>0?e.max.y:e.min.y,ac.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ac)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},vf=new Ye,Ac=class i{constructor(){this.coordinateSystem=Zn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];vf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new vs),n[s].setFromProjectionMatrix(vf,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new vs),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Or=class extends wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Rc=new P,Cc=new P,yf=new Ye,Aa=new _s,oc=new Bn,Th=new P,Mf=new P,Gs=class extends Dt{constructor(e=new Tt,t=new Or){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Rc.fromBufferAttribute(t,s-1),Cc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Rc.distanceTo(Cc);e.setAttribute("lineDistance",new nt(n,1))}else Be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oc.copy(n.boundingSphere),oc.applyMatrix4(s),oc.radius+=r,e.ray.intersectsSphere(oc)===!1)return;yf.copy(s).invert(),Aa.copy(e.ray).applyMatrix4(yf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=h.getX(x),_=h.getX(x+1),M=cc(this,e,Aa,c,p,_,x);M&&t.push(M)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=cc(this,e,Aa,c,x,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=cc(this,e,Aa,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=cc(this,e,Aa,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function cc(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Rc.fromBufferAttribute(o,s),Cc.fromBufferAttribute(o,r),t.distanceSqToSegment(Rc,Cc,Th,Mf)>n)return;Th.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Th);if(!(l<e.near||l>e.far))return{distance:l,point:Mf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Sf=new P,Ef=new P,Ga=class extends Gs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Sf.fromBufferAttribute(t,s),Ef.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Sf.distanceTo(Ef);e.setAttribute("lineDistance",new nt(n,1))}else Be("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ha=class extends Gs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},kr=class extends wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Tf=new Ye,Uh=new _s,lc=new Bn,hc=new P,Ji=class extends Dt{constructor(e=new Tt,t=new kr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lc.copy(n.boundingSphere),lc.applyMatrix4(s),lc.radius+=r,e.ray.intersectsSphere(lc)===!1)return;Tf.copy(s).invert(),Uh.copy(e.ray).applyMatrix4(Tf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let m=l.getX(g);hc.fromBufferAttribute(u,m),wf(hc,m,c,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)hc.fromBufferAttribute(u,g),wf(hc,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function wf(i,e,t,n,s,r,a){let o=Uh.distanceSqToPoint(i);if(o<t){let c=new P;Uh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Va=class extends cn{constructor(e=[],t=$s,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wa=class extends cn{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Yi=class extends cn{constructor(e,t,n=fi,s,r,a,o=$t,c=$t,l,h=ji,u=1){if(h!==ji&&h!==is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},qa=class extends Yi{constructor(e,t=fi,n=$s,s,r,a=$t,o=$t,c,l=ji){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Xa=class extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},kt=class i extends Tt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(u,2));function g(x,m,p,_,M,v,E,w,b,y,F){let A=v/b,L=E/y,I=v/2,U=E/2,R=w/2,B=b+1,H=y+1,G=0,ie=0,X=new P;for(let $=0;$<H;$++){let Q=$*L-U;for(let ge=0;ge<B;ge++){let Ge=ge*A-I;X[x]=Ge*_,X[m]=Q*M,X[p]=R,l.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[p]=w>0?1:-1,h.push(X.x,X.y,X.z),u.push(ge/b),u.push(1-$/y),G+=1}}for(let $=0;$<y;$++)for(let Q=0;Q<b;Q++){let ge=d+Q+B*$,Ge=d+Q+B*($+1),Y=d+(Q+1)+B*($+1),ye=d+(Q+1)+B*$;c.push(ge,Ge,ye),c.push(Ge,Y,ye),ie+=6}o.addGroup(f,ie,F),f+=ie,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ja=class i extends Tt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new P,h=new oe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(o,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ln=class i extends Tt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;_(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(d,3)),this.setAttribute("uv",new nt(f,2));function _(){let v=new P,E=new P,w=0,b=(t-e)/n;for(let y=0;y<=r;y++){let F=[],A=y/r,L=A*(t-e)+e;for(let I=0;I<=s;I++){let U=I/s,R=U*c+o,B=Math.sin(R),H=Math.cos(R);E.x=L*B,E.y=-A*n+m,E.z=L*H,u.push(E.x,E.y,E.z),v.set(B,b,H).normalize(),d.push(v.x,v.y,v.z),f.push(U,1-A),F.push(g++)}x.push(F)}for(let y=0;y<s;y++)for(let F=0;F<r;F++){let A=x[F][y],L=x[F+1][y],I=x[F+1][y+1],U=x[F][y+1];(e>0||F!==0)&&(h.push(A,L,U),w+=3),(t>0||F!==r-1)&&(h.push(L,I,U),w+=3)}l.addGroup(p,w,0),p+=w}function M(v){let E=g,w=new oe,b=new P,y=0,F=v===!0?e:t,A=v===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,m*A,0),d.push(0,A,0),f.push(.5,.5),g++;let L=g;for(let I=0;I<=s;I++){let R=I/s*c+o,B=Math.cos(R),H=Math.sin(R);b.x=F*H,b.y=m*A,b.z=F*B,u.push(b.x,b.y,b.z),d.push(0,A,0),w.x=B*.5+.5,w.y=H*.5*A+.5,f.push(w.x,w.y),g++}for(let I=0;I<s;I++){let U=E+I,R=L+I;v===!0?h.push(R,R+1,U):h.push(R+1,R,U),y+=3}l.addGroup(p,y,v===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Br=class i extends ln{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Be("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new oe:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],a=[],o=new P,c=new Ye;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(at(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(at(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},zr=class extends Kn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new oe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Pc=class extends zr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function yu(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Af=new P,Rf=new P,wh=new yu,Ah=new yu,Rh=new yu,ys=class extends Kn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Rf.subVectors(s[0],s[1]).add(s[0]),l=Rf);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Af.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Af),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),wh.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,m),Ah.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,m),Rh.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(wh.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ah.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Rh.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(wh.calc(c),Ah.calc(c),Rh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Cf(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function tg(i,e){let t=1-i;return t*t*e}function ng(i,e){return 2*(1-i)*i*e}function ig(i,e){return i*i*e}function Da(i,e,t,n){return tg(i,e)+ng(i,t)+ig(i,n)}function sg(i,e){let t=1-i;return t*t*t*e}function rg(i,e){let t=1-i;return 3*t*t*i*e}function ag(i,e){return 3*(1-i)*i*i*e}function og(i,e){return i*i*i*e}function La(i,e,t,n,s){return sg(i,e)+rg(i,t)+ag(i,n)+og(i,s)}var Ka=class extends Kn{constructor(e=new oe,t=new oe,n=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(La(e,s.x,r.x,a.x,o.x),La(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ic=class extends Kn{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(La(e,s.x,r.x,a.x,o.x),La(e,s.y,r.y,a.y,o.y),La(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ja=class extends Kn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dc=class extends Kn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ya=class extends Kn{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Da(e,s.x,r.x,a.x),Da(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$a=class extends Kn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Da(e,s.x,r.x,a.x),Da(e,s.y,r.y,a.y),Da(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Za=class extends Kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Cf(o,c.x,l.x,h.x,u.x),Cf(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},Lc=Object.freeze({__proto__:null,ArcCurve:Pc,CatmullRomCurve3:ys,CubicBezierCurve:Ka,CubicBezierCurve3:Ic,EllipseCurve:zr,LineCurve:Ja,LineCurve3:Dc,QuadraticBezierCurve:Ya,QuadraticBezierCurve3:$a,SplineCurve:Za}),Nc=class extends Kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Lc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Qa=class extends Nc{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ja(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ya(this.currentPoint.clone(),new oe(e,t),new oe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ka(this.currentPoint.clone(),new oe(e,t),new oe(n,s),new oe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Za(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new zr(e,t,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},$i=class extends Qa{constructor(e){super(e),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Qa().fromJSON(s))}return this}};function cg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Cp(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=fg(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let h=o,u=c;for(let d=t;d<s;d+=t){let f=i[d],g=i[d+1];f<o&&(o=f),g<c&&(c=g),f>h&&(h=f),g>u&&(u=g)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return eo(r,a,t,o,c,l,0),a}function Cp(i,e,t,n,s){let r;if(s===Eg(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Pf(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Pf(a/n|0,i[a],i[a+1],r);return r&&Gr(r,r.next)&&(no(r),r=r.next),r}function Hs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Gr(t,t.next)||Wt(t.prev,t,t.next)===0)){if(no(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function eo(i,e,t,n,s,r,a){if(!i)return;!a&&r&&xg(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?hg(i,n,s,r):lg(i)){e.push(c.i,i.i,l.i),no(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=ug(Hs(i),e),eo(i,e,t,n,s,r,2)):a===2&&dg(i,e,t,n,s,r):eo(Hs(i),e,t,n,s,r,1);break}}}function lg(i){let e=i.prev,t=i,n=i.next;if(Wt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(s,r,a),u=Math.min(o,c,l),d=Math.max(s,r,a),f=Math.max(o,c,l),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Ra(s,o,r,c,a,l,g.x,g.y)&&Wt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function hg(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Wt(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,c,l),g=Math.min(h,u,d),x=Math.max(o,c,l),m=Math.max(h,u,d),p=Oh(f,g,e,t,n),_=Oh(x,m,e,t,n),M=i.prevZ,v=i.nextZ;for(;M&&M.z>=p&&v&&v.z<=_;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Ra(o,h,c,u,l,d,M.x,M.y)&&Wt(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Ra(o,h,c,u,l,d,v.x,v.y)&&Wt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Ra(o,h,c,u,l,d,M.x,M.y)&&Wt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Ra(o,h,c,u,l,d,v.x,v.y)&&Wt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function ug(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Gr(n,s)&&Ip(n,t,t.next,s)&&to(n,s)&&to(s,n)&&(e.push(n.i,t.i,s.i),no(t),no(t.next),t=i=s),t=t.next}while(t!==i);return Hs(t)}function dg(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&yg(a,o)){let c=Dp(a,o);a=Hs(a,a.next),c=Hs(c,c.next),eo(a,e,t,n,s,r,0),eo(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function fg(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=Cp(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(vg(l))}s.sort(pg);for(let r=0;r<s.length;r++)t=mg(s[r],t);return t}function pg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function mg(i,e){let t=gg(i,e);if(!t)return e;let n=Dp(t,i);return Hs(n,n.next),Hs(t,t.next)}function gg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Gr(i,t))return t;do{if(Gr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Pp(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);to(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&bg(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function bg(i,e){return Wt(i.prev,i,e.prev)<0&&Wt(e.next,i,i.next)<0}function xg(i,e,t,n){let s=i;do s.z===0&&(s.z=Oh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,_g(s)}function _g(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Oh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function vg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Pp(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ra(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Pp(i,e,t,n,s,r,a,o)}function yg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Mg(i,e)&&(to(i,e)&&to(e,i)&&Sg(i,e)&&(Wt(i.prev,i,e.prev)||Wt(i,e.prev,e))||Gr(i,e)&&Wt(i.prev,i,i.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Gr(i,e){return i.x===e.x&&i.y===e.y}function Ip(i,e,t,n){let s=dc(Wt(i,e,t)),r=dc(Wt(i,e,n)),a=dc(Wt(t,n,i)),o=dc(Wt(t,n,e));return!!(s!==r&&a!==o||s===0&&uc(i,t,e)||r===0&&uc(i,n,e)||a===0&&uc(t,i,n)||o===0&&uc(t,e,n))}function uc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function dc(i){return i>0?1:i<0?-1:0}function Mg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ip(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function to(i,e){return Wt(i.prev,i,i.next)<0?Wt(i,e,i.next)>=0&&Wt(i,i.prev,e)>=0:Wt(i,e,i.prev)<0||Wt(i,i.next,e)<0}function Sg(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Dp(i,e){let t=kh(i.i,i.x,i.y),n=kh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Pf(i,e,t,n){let s=kh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function no(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function kh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Eg(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Bh=class{static triangulate(e,t,n=2){return cg(e,t,n)}},Ls=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];If(e),Df(n,e);let a=e.length;t.forEach(If);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Df(n,t[c]);let o=Bh.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function If(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Df(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Vs=class i extends Tt{constructor(e=new $i([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new nt(s,3)),this.setAttribute("uv",new nt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Tg,M,v=!1,E,w,b,y;if(p){M=p.getSpacedPoints(h),v=!0,d=!1;let ee=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(h,ee),w=new P,b=new P,y=new P}d||(m=0,f=0,g=0,x=0);let F=o.extractPoints(l),A=F.shape,L=F.holes;if(!Ls.isClockWise(A)){A=A.reverse();for(let ee=0,ue=L.length;ee<ue;ee++){let fe=L[ee];Ls.isClockWise(fe)&&(L[ee]=fe.reverse())}}function U(ee){let fe=10000000000000001e-36,we=ee[0];for(let be=1;be<=ee.length;be++){let ae=be%ee.length,Ie=ee[ae],je=Ie.x-we.x,Je=Ie.y-we.y,it=je*je+Je*Je,O=Math.max(Math.abs(Ie.x),Math.abs(Ie.y),Math.abs(we.x),Math.abs(we.y)),Gt=fe*O*O;if(it<=Gt){ee.splice(ae,1),be--;continue}we=Ie}}U(A),L.forEach(U);let R=L.length,B=A;for(let ee=0;ee<R;ee++){let ue=L[ee];A=A.concat(ue)}function H(ee,ue,fe){return ue||Ke("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(ue,fe)}let G=A.length;function ie(ee,ue,fe){let we,be,ae,Ie=ee.x-ue.x,je=ee.y-ue.y,Je=fe.x-ee.x,it=fe.y-ee.y,O=Ie*Ie+je*je,Gt=Ie*it-je*Je;if(Math.abs(Gt)>Number.EPSILON){let st=Math.sqrt(O),wt=Math.sqrt(Je*Je+it*it),ve=ue.x-je/st,Lt=ue.y+Ie/st,ke=fe.x-it/wt,Xe=fe.y+Je/wt,C=((ke-ve)*it-(Xe-Lt)*Je)/(Ie*it-je*Je);we=ve+Ie*C-ee.x,be=Lt+je*C-ee.y;let S=we*we+be*be;if(S<=2)return new oe(we,be);ae=Math.sqrt(S/2)}else{let st=!1;Ie>Number.EPSILON?Je>Number.EPSILON&&(st=!0):Ie<-Number.EPSILON?Je<-Number.EPSILON&&(st=!0):Math.sign(je)===Math.sign(it)&&(st=!0),st?(we=-je,be=Ie,ae=Math.sqrt(O)):(we=Ie,be=je,ae=Math.sqrt(O/2))}return new oe(we/ae,be/ae)}let X=[];for(let ee=0,ue=B.length,fe=ue-1,we=ee+1;ee<ue;ee++,fe++,we++)fe===ue&&(fe=0),we===ue&&(we=0),X[ee]=ie(B[ee],B[fe],B[we]);let $=[],Q,ge=X.concat();for(let ee=0,ue=R;ee<ue;ee++){let fe=L[ee];Q=[];for(let we=0,be=fe.length,ae=be-1,Ie=we+1;we<be;we++,ae++,Ie++)ae===be&&(ae=0),Ie===be&&(Ie=0),Q[we]=ie(fe[we],fe[ae],fe[Ie]);$.push(Q),ge=ge.concat(Q)}let Ge;if(m===0)Ge=Ls.triangulateShape(B,L);else{let ee=[],ue=[];for(let fe=0;fe<m;fe++){let we=fe/m,be=f*Math.cos(we*Math.PI/2),ae=g*Math.sin(we*Math.PI/2)+x;for(let Ie=0,je=B.length;Ie<je;Ie++){let Je=H(B[Ie],X[Ie],ae);Pe(Je.x,Je.y,-be),we===0&&ee.push(Je)}for(let Ie=0,je=R;Ie<je;Ie++){let Je=L[Ie];Q=$[Ie];let it=[];for(let O=0,Gt=Je.length;O<Gt;O++){let st=H(Je[O],Q[O],ae);Pe(st.x,st.y,-be),we===0&&it.push(st)}we===0&&ue.push(it)}}Ge=Ls.triangulateShape(ee,ue)}let Y=Ge.length,ye=g+x;for(let ee=0;ee<G;ee++){let ue=d?H(A[ee],ge[ee],ye):A[ee];v?(b.copy(E.normals[0]).multiplyScalar(ue.x),w.copy(E.binormals[0]).multiplyScalar(ue.y),y.copy(M[0]).add(b).add(w),Pe(y.x,y.y,y.z)):Pe(ue.x,ue.y,0)}for(let ee=1;ee<=h;ee++)for(let ue=0;ue<G;ue++){let fe=d?H(A[ue],ge[ue],ye):A[ue];v?(b.copy(E.normals[ee]).multiplyScalar(fe.x),w.copy(E.binormals[ee]).multiplyScalar(fe.y),y.copy(M[ee]).add(b).add(w),Pe(y.x,y.y,y.z)):Pe(fe.x,fe.y,u/h*ee)}for(let ee=m-1;ee>=0;ee--){let ue=ee/m,fe=f*Math.cos(ue*Math.PI/2),we=g*Math.sin(ue*Math.PI/2)+x;for(let be=0,ae=B.length;be<ae;be++){let Ie=H(B[be],X[be],we);Pe(Ie.x,Ie.y,u+fe)}for(let be=0,ae=L.length;be<ae;be++){let Ie=L[be];Q=$[be];for(let je=0,Je=Ie.length;je<Je;je++){let it=H(Ie[je],Q[je],we);v?Pe(it.x,it.y+M[h-1].y,M[h-1].x+fe):Pe(it.x,it.y,u+fe)}}}Re(),Ee();function Re(){let ee=s.length/3;if(d){let ue=0,fe=G*ue;for(let we=0;we<Y;we++){let be=Ge[we];vt(be[2]+fe,be[1]+fe,be[0]+fe)}ue=h+m*2,fe=G*ue;for(let we=0;we<Y;we++){let be=Ge[we];vt(be[0]+fe,be[1]+fe,be[2]+fe)}}else{for(let ue=0;ue<Y;ue++){let fe=Ge[ue];vt(fe[2],fe[1],fe[0])}for(let ue=0;ue<Y;ue++){let fe=Ge[ue];vt(fe[0]+G*h,fe[1]+G*h,fe[2]+G*h)}}n.addGroup(ee,s.length/3-ee,0)}function Ee(){let ee=s.length/3,ue=0;le(B,ue),ue+=B.length;for(let fe=0,we=L.length;fe<we;fe++){let be=L[fe];le(be,ue),ue+=be.length}n.addGroup(ee,s.length/3-ee,1)}function le(ee,ue){let fe=ee.length;for(;--fe>=0;){let we=fe,be=fe-1;be<0&&(be=ee.length-1);for(let ae=0,Ie=h+m*2;ae<Ie;ae++){let je=G*ae,Je=G*(ae+1),it=ue+we+je,O=ue+be+je,Gt=ue+be+Je,st=ue+we+Je;He(it,O,Gt,st)}}}function Pe(ee,ue,fe){c.push(ee),c.push(ue),c.push(fe)}function vt(ee,ue,fe){$e(ee),$e(ue),$e(fe);let we=s.length/3,be=_.generateTopUV(n,s,we-3,we-2,we-1);Ze(be[0]),Ze(be[1]),Ze(be[2])}function He(ee,ue,fe,we){$e(ee),$e(ue),$e(we),$e(ue),$e(fe),$e(we);let be=s.length/3,ae=_.generateSideWallUV(n,s,be-6,be-3,be-2,be-1);Ze(ae[0]),Ze(ae[1]),Ze(ae[3]),Ze(ae[1]),Ze(ae[2]),Ze(ae[3])}function $e(ee){s.push(c[ee*3+0]),s.push(c[ee*3+1]),s.push(c[ee*3+2])}function Ze(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return wg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Lc[s.type]().fromJSON(s)),new i(n,e.options)}},Tg={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new oe(r,a),new oe(o,c),new oe(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new oe(a,1-c),new oe(l,1-u),new oe(d,1-g),new oe(x,1-p)]:[new oe(o,1-c),new oe(h,1-u),new oe(f,1-g),new oe(m,1-p)]}};function wg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var io=class i extends Tt{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=at(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,u=new P,d=new oe,f=new P,g=new P,x=new P,m=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:x.normalize(),c.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let _=0;_<=t;_++){let M=n+_*h*s,v=Math.sin(M),E=Math.cos(M);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*v,u.y=e[w].y,u.z=e[w].x*E,a.push(u.x,u.y,u.z),d.x=_/t,d.y=w/(e.length-1),o.push(d.x,d.y);let b=c[3*w+0]*v,y=c[3*w+1],F=c[3*w+0]*E;l.push(b,y,F)}}for(let _=0;_<t;_++)for(let M=0;M<e.length-1;M++){let v=M+_*e.length,E=v,w=v+e.length,b=v+e.length+1,y=v+1;r.push(E,w,y),r.push(b,y,w)}this.setIndex(r),this.setAttribute("position",new nt(a,3)),this.setAttribute("uv",new nt(o,2)),this.setAttribute("normal",new nt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Ft=class i extends Tt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let _=p*d-a;for(let M=0;M<l;M++){let v=M*u-r;g.push(v,-_,0),x.push(0,0,1),m.push(M/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<o;_++){let M=_+l*p,v=_+l*(p+1),E=_+1+l*(p+1),w=_+1+l*p;f.push(M,v,w),f.push(v,E,w)}this.setIndex(f),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(x,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},so=class i extends Tt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/s,f=new P,g=new oe;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let _=p+m,M=_,v=_+n+1,E=_+n+2,w=_+1;o.push(M,v,w),o.push(v,E,w)}}this.setIndex(o),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Qn=class i extends Tt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new P,d=new P,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let _=[],M=p/n,v=a+M*o,E=e*Math.cos(v),w=Math.sqrt(e*e-E*E),b=0;p===0&&a===0?b=.5/t:p===n&&c===Math.PI&&(b=-.5/t);for(let y=0;y<=t;y++){let F=y/t,A=s+F*r;u.x=-w*Math.cos(A),u.y=E,u.z=w*Math.sin(A),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(F+b,1-M),_.push(l++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){let M=h[p][_+1],v=h[p][_],E=h[p+1][_],w=h[p+1][_+1];(p!==0||a>0)&&f.push(M,v,w),(p!==n-1||c<Math.PI)&&f.push(v,E,w)}this.setIndex(f),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(x,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ei=class i extends Tt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=new P,f=new P,g=new P;for(let x=0;x<=n;x++){let m=a+x/n*o;for(let p=0;p<=s;p++){let _=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let p=(s+1)*x+m-1,_=(s+1)*(x-1)+m-1,M=(s+1)*(x-1)+m,v=(s+1)*x+m;c.push(p,_,v),c.push(_,M,v)}this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Hr=class i extends Tt{constructor(e=new $a(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,c=new P,l=new oe,h=new P,u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(d,3)),this.setAttribute("uv",new nt(f,2));function x(){for(let M=0;M<t;M++)m(M);m(r===!1?t:0),_(),p()}function m(M){h=e.getPointAt(M/t,h);let v=a.normals[M],E=a.binormals[M];for(let w=0;w<=s;w++){let b=w/s*Math.PI*2,y=Math.sin(b),F=-Math.cos(b);c.x=F*v.x+y*E.x,c.y=F*v.y+y*E.y,c.z=F*v.z+y*E.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let M=1;M<=t;M++)for(let v=1;v<=s;v++){let E=(s+1)*(M-1)+(v-1),w=(s+1)*M+(v-1),b=(s+1)*M+v,y=(s+1)*(M-1)+v;g.push(E,w,y),g.push(w,b,y)}}function _(){for(let M=0;M<=t;M++)for(let v=0;v<=s;v++)l.x=M/t,l.y=v/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Lc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function er(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Lf(s))s.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Lf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function An(i){let e={};for(let t=0;t<i.length;t++){let n=er(i[t]);for(let s in n)e[s]=n[s]}return e}function Lf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ag(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Mu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var Lp={clone:er,merge:An},Rg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bn=class extends wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rg,this.fragmentShader=Cg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=Ag(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ze().setHex(s.value);break;case"v2":this.uniforms[n].value=new oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new St().fromArray(s.value);break;case"m3":this.uniforms[n].value=new tt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ye().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Fc=class extends bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ei=class extends wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Nn=class extends ei{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ns('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ns('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ro=class extends wn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=jc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Uc=class extends wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Oc=class extends wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function gs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ca(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Pg(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Nf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function Ig(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Ti=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},kc=class extends Ti{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lh,endingEnd:Lh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Nh:r=e,o=2*t-n;break;case Fh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Nh:a=e,c=2*n-t;break;case Fh:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,_=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*x+.5*g,v=f*m-f*x;for(let E=0;E!==o;++E)r[E]=p*a[h+E]+_*a[l+E]+M*a[c+E]+v*a[u+E];return r}},Bc=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},zc=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Gc=class extends Ti{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),x=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*x+a[c+m]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let x=a[l+g],m=a[c+g],p=f*d+g*2,_=u[p],M=u[p+1],v=e*d+g*2,E=h[v],w=h[v+1],b=Lg(n,t,_,E,s);r[g]=Np(b,x,M,w,m)}return r}};function Np(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Dg(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Lg(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Np(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Dg(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var zn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gs(t,this.TimeBufferType),this.values=gs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:gs(e.times,Array),values:gs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Ca(e.settings)&&(n.settings={inTangents:gs(e.settings.inTangents,Array),outTangents:gs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Gc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Fs:t=this.InterpolantFactoryMethodDiscrete;break;case Us:t=this.InterpolantFactoryMethodLinear;break;case mc:t=this.InterpolantFactoryMethodSmooth;break;case Dh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Be("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fs;case this.InterpolantFactoryMethodLinear:return Us;case this.InterpolantFactoryMethodSmooth:return mc;case this.InterpolantFactoryMethodBezier:return Dh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Ca(this.settings)&&(Ff(this.settings.inTangents,e),Ff(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Ca(this.settings)&&(Uf(this.settings.inTangents,e),Uf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ke("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ke("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ke("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&x0(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Ke("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===mc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ca(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ff(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Uf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=Us;var Zi=class extends zn{constructor(e,t,n){super(e,t,n)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Fs;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var ao=class extends zn{constructor(e,t,n,s){super(e,t,n,s)}};ao.prototype.ValueTypeName="color";var Qi=class extends zn{constructor(e,t,n,s){super(e,t,n,s)}};Qi.prototype.ValueTypeName="number";var Hc=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)rn.slerpFlat(r,0,a,l-o,a,l,c);return r}},es=class extends zn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Hc(this.times,this.values,this.getValueSize(),e)}};es.prototype.ValueTypeName="quaternion";es.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends zn{constructor(e,t,n){super(e,t,n)}};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Fs;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Ms=class extends zn{constructor(e,t,n,s){super(e,t,n,s)}};Ms.prototype.ValueTypeName="vector";var oo=class{constructor(e="",t=-1,n=[],s=pp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=mi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Fg(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(zn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=Pg(c);c=Nf(c,1,h),l=Nf(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Qi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Ng(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qi;case"vector":case"vector2":case"vector3":case"vector4":return Ms;case"color":return ao;case"quaternion":return es;case"bool":case"boolean":return Zi;case"string":return ts}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Fg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Ng(i.type);if(i.times===void 0){let n=[],s=[];Ig(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Ca(i.settings)&&(t.settings={inTangents:gs(i.settings.inTangents,Float32Array),outTangents:gs(i.settings.outTangents,Float32Array)}),t}var yi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Of(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Of(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Of(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Vc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Fp=new Vc,wi=class{constructor(e){this.manager=e!==void 0?e:Fp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};wi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wi={},zh=class extends Error{constructor(e,t){super(e),this.response=t}},Vr=class extends wi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=yi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Wi[e]!==void 0){Wi[e].push({onLoad:t,onProgress:n,onError:s});return}Wi[e]=[],Wi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Be("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Wi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){_();function _(){u.read().then(({done:M,value:v})=>{if(M)p.close();else{x+=v.byteLength;let E=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let w=0,b=h.length;w<b;w++){let y=h[w];y.onProgress&&y.onProgress(E)}p.enqueue(v),_()}},M=>{p.error(M)})}}});return new Response(m)}else throw new zh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{yi.add(`file:${e}`,l);let h=Wi[e];delete Wi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Wi[e];if(h===void 0)throw this.manager.itemError(e),l;delete Wi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Sr=new WeakMap,Wc=class extends wi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=yi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Sr.get(a);u===void 0&&(u=[],Sr.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=Pr("img");function c(){h(),t&&t(this);let u=Sr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Sr.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),yi.remove(`image:${e}`);let d=Sr.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}Sr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),yi.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Ws=class extends wi{constructor(e){super(e)}load(e,t,n,s){let r=new cn,a=new Wc(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},qs=class extends Dt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},co=class extends qs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ch=new Ye,kf=new P,Bf=new P,Wr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vs,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;kf.setFromMatrixPosition(e.matrixWorld),t.position.copy(kf),Bf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Ch.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ch,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Cr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Ch)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},fc=new P,pc=new rn,vi=new P,lo=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fc,pc,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fc,pc,vi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(fc,pc,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fc,pc,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ms=new P,zf=new oe,Gf=new oe,an=class extends lo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ms.x,ms.y).multiplyScalar(-e/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ms.x,ms.y).multiplyScalar(-e/ms.z)}getViewSize(e,t){return this.getViewBounds(e,zf,Gf),t.subVectors(Gf,zf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Pa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Gh=class extends Wr{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Os*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ho=class extends qs{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Gh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Hh=class extends Wr{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0}},xn=class extends qs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Hh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Xs=class extends lo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Vh=class extends Wr{constructor(){super(new Xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},js=class extends qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new Vh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ns=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ph=new WeakMap,uo=class extends wi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Be("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Be("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=yi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{Ph.has(a)===!0?(s&&s(Ph.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return yi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Ph.set(c,l),yi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});yi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Er=-90,Tr=1,qr=class extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new an(Er,Tr,e,t);s.layers=this.layers,this.add(s);let r=new an(Er,Tr,e,t);r.layers=this.layers,this.add(r);let a=new an(Er,Tr,e,t);a.layers=this.layers,this.add(a);let o=new an(Er,Tr,e,t);o.layers=this.layers,this.add(o);let c=new an(Er,Tr,e,t);c.layers=this.layers,this.add(c);let l=new an(Er,Tr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},qc=class extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Su="\\[\\]\\.:\\/",Ug=new RegExp("["+Su+"]","g"),Eu="[^"+Su+"]",Og="[^"+Su.replace("\\.","")+"]",kg=/((?:WC+[\/:])*)/.source.replace("WC",Eu),Bg=/(WCOD+)?/.source.replace("WCOD",Og),zg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eu),Gg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eu),Hg=new RegExp("^"+kg+Bg+zg+Gg+"$"),Vg=["material","materials","bones","map"],Wh=class{constructor(e,t,n){let s=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},It=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ug,"")}static parseTrackName(e){let t=Hg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Vg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Be("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;Ke("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=Wh;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var pS=new Float32Array(1);var Hf=new Ye,fo=class{constructor(e,t,n=0,s=1/0){this.ray=new _s(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Lr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ke("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hf),this}intersectObject(e,t=!0,n=[]){return qh(e,this,n,t),n.sort(Vf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)qh(e[s],this,n,t);return n.sort(Vf),n}};function Vf(i,e){return i.distance-e.distance}function qh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)qh(r[a],e,t,!0)}}var Pu=class Pu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Pu.prototype.isMatrix2=!0;var Xh=Pu;function Tu(i,e,t,n){let s=Wg(n);switch(t){case lu:return i*e;case el:return i*e/s.components*s.byteLength;case tl:return i*e/s.components*s.byteLength;case Ss:return i*e*2/s.components*s.byteLength;case nl:return i*e*2/s.components*s.byteLength;case hu:return i*e*3/s.components*s.byteLength;case ni:return i*e*4/s.components*s.byteLength;case il:return i*e*4/s.components*s.byteLength;case mo:case go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bo:case xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rl:case ol:return Math.max(i,16)*Math.max(e,8)/4;case sl:case al:return Math.max(i,8)*Math.max(e,8)/2;case cl:case ll:case ul:case dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case hl:case _o:case fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case gl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case bl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case xl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case _l:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case vl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case yl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case El:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case wl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Al:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Rl:case Cl:case Pl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Il:case Dl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case vo:case Ll:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wg(i){switch(i){case Gn:case ru:return{byteLength:1,components:1};case Yr:case au:case pi:return{byteLength:2,components:1};case Zc:case Qc:return{byteLength:2,components:4};case fi:case $c:case Jn:return{byteLength:4,components:1};case ou:case cu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function im(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Xg(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var jg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kg=`#ifdef USE_ALPHAHASH
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
#endif`,Jg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$g=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qg=`#ifdef USE_AOMAP
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
#endif`,eb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tb=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,nb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ib=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ab=`#ifdef USE_IRIDESCENCE
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
#endif`,ob=`#ifdef USE_BUMPMAP
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
#endif`,cb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ub=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,db=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,gb=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,bb=`vec3 transformedNormal = objectNormal;
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
#endif`,xb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_b=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Eb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Tb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,wb=`#ifdef USE_ENVMAP
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
#endif`,Ab=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ib=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Db=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lb=`#ifdef USE_GRADIENTMAP
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
}`,Nb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ub=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ob=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,kb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Bb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Wb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qb=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kb=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Jb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$b=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ex=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nx=`#if defined( USE_POINTS_UV )
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
#endif`,ix=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ax=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ox=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cx=`#ifdef USE_MORPHTARGETS
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
#endif`,lx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ux=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,px=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mx=`#ifdef USE_NORMALMAP
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
#endif`,gx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_x=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Mx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ex=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ax=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Cx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Px=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Ix=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Dx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lx=`#ifdef USE_SKINNING
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
#endif`,Nx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fx=`#ifdef USE_SKINNING
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
#endif`,Ux=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ox=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zx=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gx=`#ifdef USE_TRANSMISSION
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
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,qx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jx=`uniform sampler2D t2D;
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
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jx=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zx=`#include <common>
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
}`,Qx=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,e_=`#define DISTANCE
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
}`,t_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s_=`uniform float scale;
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
}`,r_=`uniform vec3 diffuse;
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
}`,a_=`#include <common>
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
}`,o_=`uniform vec3 diffuse;
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
}`,c_=`#define LAMBERT
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
}`,l_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,h_=`#define MATCAP
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
}`,u_=`#define MATCAP
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
}`,d_=`#define NORMAL
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
}`,f_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,p_=`#define PHONG
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
}`,m_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,g_=`#define STANDARD
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
}`,b_=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,x_=`#define TOON
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
}`,__=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,v_=`uniform float size;
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
}`,y_=`uniform vec3 diffuse;
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
}`,M_=`#include <common>
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
}`,S_=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,E_=`uniform float rotation;
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
}`,T_=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:jg,alphahash_pars_fragment:Kg,alphamap_fragment:Jg,alphamap_pars_fragment:Yg,alphatest_fragment:$g,alphatest_pars_fragment:Zg,aomap_fragment:Qg,aomap_pars_fragment:eb,batching_pars_vertex:tb,batching_vertex:nb,begin_vertex:ib,beginnormal_vertex:sb,bsdfs:rb,iridescence_fragment:ab,bumpmap_pars_fragment:ob,clipping_planes_fragment:cb,clipping_planes_pars_fragment:lb,clipping_planes_pars_vertex:hb,clipping_planes_vertex:ub,color_fragment:db,color_pars_fragment:fb,color_pars_vertex:pb,color_vertex:mb,common:gb,defaultnormal_vertex:bb,displacementmap_pars_vertex:xb,displacementmap_vertex:_b,emissivemap_fragment:vb,emissivemap_pars_fragment:yb,colorspace_fragment:Mb,colorspace_pars_fragment:Sb,envmap_fragment:Eb,envmap_common_pars_fragment:Tb,envmap_pars_fragment:wb,envmap_pars_vertex:Ab,envmap_physical_pars_fragment:kb,envmap_vertex:Rb,fog_vertex:Cb,fog_pars_vertex:Pb,fog_fragment:Ib,fog_pars_fragment:Db,gradientmap_pars_fragment:Lb,lightmap_pars_fragment:Nb,lights_lambert_fragment:Fb,lights_lambert_pars_fragment:Ub,lights_pars_begin:Ob,lights_toon_fragment:Bb,lights_toon_pars_fragment:zb,lights_phong_fragment:Gb,lights_phong_pars_fragment:Hb,lights_physical_fragment:Vb,lights_physical_pars_fragment:Wb,lights_fragment_begin:qb,lights_fragment_maps:Xb,lights_fragment_end:jb,lightprobes_pars_fragment:Kb,logdepthbuf_fragment:Jb,logdepthbuf_pars_fragment:Yb,logdepthbuf_pars_vertex:$b,logdepthbuf_vertex:Zb,map_fragment:Qb,map_pars_fragment:ex,map_particle_fragment:tx,map_particle_pars_fragment:nx,metalnessmap_fragment:ix,metalnessmap_pars_fragment:sx,morphinstance_vertex:rx,morphcolor_vertex:ax,morphnormal_vertex:ox,morphtarget_pars_vertex:cx,morphtarget_vertex:lx,normal_fragment_begin:hx,normal_fragment_maps:ux,normal_pars_fragment:dx,normal_pars_vertex:fx,normal_vertex:px,normalmap_pars_fragment:mx,clearcoat_normal_fragment_begin:gx,clearcoat_normal_fragment_maps:bx,clearcoat_pars_fragment:xx,iridescence_pars_fragment:_x,opaque_fragment:vx,packing:yx,premultiplied_alpha_fragment:Mx,project_vertex:Sx,dithering_fragment:Ex,dithering_pars_fragment:Tx,roughnessmap_fragment:wx,roughnessmap_pars_fragment:Ax,shadowmap_pars_fragment:Rx,shadowmap_pars_vertex:Cx,shadowmap_vertex:Px,shadowmask_pars_fragment:Ix,skinbase_vertex:Dx,skinning_pars_vertex:Lx,skinning_vertex:Nx,skinnormal_vertex:Fx,specularmap_fragment:Ux,specularmap_pars_fragment:Ox,tonemapping_fragment:kx,tonemapping_pars_fragment:Bx,transmission_fragment:zx,transmission_pars_fragment:Gx,uv_pars_fragment:Hx,uv_pars_vertex:Vx,uv_vertex:Wx,worldpos_vertex:qx,background_vert:Xx,background_frag:jx,backgroundCube_vert:Kx,backgroundCube_frag:Jx,cube_vert:Yx,cube_frag:$x,depth_vert:Zx,depth_frag:Qx,distance_vert:e_,distance_frag:t_,equirect_vert:n_,equirect_frag:i_,linedashed_vert:s_,linedashed_frag:r_,meshbasic_vert:a_,meshbasic_frag:o_,meshlambert_vert:c_,meshlambert_frag:l_,meshmatcap_vert:h_,meshmatcap_frag:u_,meshnormal_vert:d_,meshnormal_frag:f_,meshphong_vert:p_,meshphong_frag:m_,meshphysical_vert:g_,meshphysical_frag:b_,meshtoon_vert:x_,meshtoon_frag:__,points_vert:v_,points_frag:y_,shadow_vert:M_,shadow_frag:S_,sprite_vert:E_,sprite_frag:T_},Ae={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Pi={basic:{uniforms:An([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:An([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:An([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:An([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:An([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new ze(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:An([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:An([Ae.points,Ae.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:An([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:An([Ae.common,Ae.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:An([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:An([Ae.sprite,Ae.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:An([Ae.common,Ae.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:An([Ae.lights,Ae.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Pi.physical={uniforms:An([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var Fl={r:0,b:0,g:0},w_=new Ye,sm=new tt;sm.set(-1,0,0,0,1,0,0,0,1);function A_(i,e,t,n,s,r){let a=new ze(0),o=s===!0?0:1,c,l,h=null,u=0,d=null;function f(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let v=_.backgroundBlurriness>0;M=e.get(M,v)}return M}function g(_){let M=!1,v=f(_);v===null?m(a,o):v&&v.isColor&&(m(v,1),M=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,M){let v=f(M);v&&v.isCubeTexture?(l===void 0&&(l=new ut(new kt(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:er(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(w_.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(sm),l.material.toneMapped=ct.getTransfer(v.colorSpace)!==Et,(h!==v||u!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ut(new Ft(2,2),new bn({name:"BackgroundMaterial",uniforms:er(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ct.getTransfer(v.colorSpace)!==Et,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,M){_.getRGB(Fl,Mu(i)),t.buffers.color.setClear(Fl.r,Fl.g,Fl.b,M,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:g,addToRenderList:x,dispose:p}}function R_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(L,I,U,R,B){let H=!1,G=u(L,R,U,I);r!==G&&(r=G,l(r.object)),H=f(L,R,U,B),H&&g(L,R,U,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,v(L,I,U,R),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function u(L,I,U,R){let B=R.wireframe===!0,H=n[I.id];H===void 0&&(H={},n[I.id]=H);let G=L.isInstancedMesh===!0?L.id:0,ie=H[G];ie===void 0&&(ie={},H[G]=ie);let X=ie[U.id];X===void 0&&(X={},ie[U.id]=X);let $=X[B];return $===void 0&&($=d(c()),X[B]=$),$}function d(L){let I=[],U=[],R=[];for(let B=0;B<t;B++)I[B]=0,U[B]=0,R[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:R,object:L,attributes:{},index:null}}function f(L,I,U,R){let B=r.attributes,H=I.attributes,G=0,ie=U.getAttributes();for(let X in ie)if(ie[X].location>=0){let Q=B[X],ge=H[X];if(ge===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(ge=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(ge=L.instanceColor)),Q===void 0||Q.attribute!==ge||ge&&Q.data!==ge.data)return!0;G++}return r.attributesNum!==G||r.index!==R}function g(L,I,U,R){let B={},H=I.attributes,G=0,ie=U.getAttributes();for(let X in ie)if(ie[X].location>=0){let Q=H[X];Q===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor));let ge={};ge.attribute=Q,Q&&Q.data&&(ge.data=Q.data),B[X]=ge,G++}r.attributes=B,r.attributesNum=G,r.index=R}function x(){let L=r.newAttributes;for(let I=0,U=L.length;I<U;I++)L[I]=0}function m(L){p(L,0)}function p(L,I){let U=r.newAttributes,R=r.enabledAttributes,B=r.attributeDivisors;U[L]=1,R[L]===0&&(i.enableVertexAttribArray(L),R[L]=1),B[L]!==I&&(i.vertexAttribDivisor(L,I),B[L]=I)}function _(){let L=r.newAttributes,I=r.enabledAttributes;for(let U=0,R=I.length;U<R;U++)I[U]!==L[U]&&(i.disableVertexAttribArray(U),I[U]=0)}function M(L,I,U,R,B,H,G){G===!0?i.vertexAttribIPointer(L,I,U,B,H):i.vertexAttribPointer(L,I,U,R,B,H)}function v(L,I,U,R){x();let B=R.attributes,H=U.getAttributes(),G=I.defaultAttributeValues;for(let ie in H){let X=H[ie];if(X.location>=0){let $=B[ie];if($===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&($=L.instanceColor)),$!==void 0){let Q=$.normalized,ge=$.itemSize,Ge=e.get($);if(Ge===void 0)continue;let Y=Ge.buffer,ye=Ge.type,Re=Ge.bytesPerElement,Ee=ye===i.INT||ye===i.UNSIGNED_INT||$.gpuType===$c;if($.isInterleavedBufferAttribute){let le=$.data,Pe=le.isInterleavedBuffer===!0?le.stride:le.itemSize,vt=$.offset;if(le.isInstancedInterleavedBuffer||le.isInstancedBufferAttribute){for(let He=0;He<X.locationSize;He++)p(X.location+He,le.meshPerAttribute);L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let He=0;He<X.locationSize;He++)m(X.location+He);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let He=0;He<X.locationSize;He++)M(X.location+He,ge/X.locationSize,ye,Q,Pe*Re,(vt+ge/X.locationSize*He)*Re,Ee)}else{if($.isInstancedBufferAttribute){for(let le=0;le<X.locationSize;le++)p(X.location+le,$.meshPerAttribute);L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let le=0;le<X.locationSize;le++)m(X.location+le);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let le=0;le<X.locationSize;le++)M(X.location+le,ge/X.locationSize,ye,Q,ge*Re,ge/X.locationSize*le*Re,Ee)}}else if(G!==void 0){let Q=G[ie];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(X.location,Q);break;case 3:i.vertexAttrib3fv(X.location,Q);break;case 4:i.vertexAttrib4fv(X.location,Q);break;default:i.vertexAttrib1fv(X.location,Q)}}}}_()}function E(){F();for(let L in n){let I=n[L];for(let U in I){let R=I[U];for(let B in R){let H=R[B];for(let G in H)h(H[G].object),delete H[G];delete R[B]}}delete n[L]}}function w(L){if(n[L.id]===void 0)return;let I=n[L.id];for(let U in I){let R=I[U];for(let B in R){let H=R[B];for(let G in H)h(H[G].object),delete H[G];delete R[B]}}delete n[L.id]}function b(L){for(let I in n){let U=n[I];for(let R in U){let B=U[R];if(B[L.id]===void 0)continue;let H=B[L.id];for(let G in H)h(H[G].object),delete H[G];delete B[L.id]}}}function y(L){for(let I in n){let U=n[I],R=L.isInstancedMesh===!0?L.id:0,B=U[R];if(B!==void 0){for(let H in B){let G=B[H];for(let ie in G)h(G[ie].object),delete G[ie];delete B[H]}delete U[R],Object.keys(U).length===0&&delete n[I]}}}function F(){A(),a=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:A,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function C_(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function P_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(b){return!(b!==ni&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){let y=b===pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Gn&&b!==Jn&&!y&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Be("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Be("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:v,maxSamples:E,samples:w}}function I_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new ui,o=new tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let _=r?0:n,M=_*4,v=p.clippingState||null;c.value=v,v=h(g,d,M,f);for(let E=0;E!==M;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=f;M!==x;++M,v+=4)a.copy(u[M]).applyMatrix4(_,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var To=class extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Va(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kt(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:Js});r.uniforms.tEquirect.value=t;let a=new ut(s,r),o=t.minFilter;return t.minFilter===ti&&(t.minFilter=on),new qr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Up=256,D_=3,L_=20,rm=256,am=16,N_=3,F_=new P,U_=new ze,Qr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new qr(1,10,null),this._boxMesh=new ut(new kt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=F_}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,d=c.autoClearColor,f=c.autoClearDepth,g=c.autoClearStencil,x=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(e.background=c.getClearColor(U_));let m=new qr(n,s,h);return m.position.copy(o),m.update(c,e),c.autoClear=u,c.autoClearColor=d,c.autoClearDepth=f,c.autoClearStencil=g,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Up,xu(e))}_fromTexture(e,t){e.mapping===$s||e.mapping===Kr?this._setSize(e.image.length===0?Up:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Op(e,!1,!1),n=Math.log2(e)-D_;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Op(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===$s||e.mapping===Kr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=kp()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=O_(),this._integrationMaterial=k_());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/am);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-N_)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(rm*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=B_());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Op(i,e,t){return new To(i,{minFilter:ti,generateMipmaps:e,type:pi,colorSpace:Dn,depthBuffer:t})}function wo(i,e,t){return new bn({name:i,uniforms:e,vertexShader:ot.cube_vert,fragmentShader:t,side:hn,blending:Js,depthTest:!1,depthWrite:!1})}function O_(){return wo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${rm}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function k_(){return wo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:am}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function B_(){return wo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${L_}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function kp(){return wo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Bp(){return wo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function z_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Kc||f===Jc)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let x=new To(g.height);return x.fromEquirectangularTexture(i,d),e.set(d,x),d.addEventListener("dispose",l),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===Kc||f===Jc,x=f===$s||f===Kr;if(g||x){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Qr(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let _=d.image;return g&&_&&_.height>0||x&&_&&c(_)?(n===null&&(n=new Qr(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===Kc?d.mapping=$s:f===Jc&&(d.mapping=Kr),d}function c(d){let f=0,g=6;for(let x=0;x<g;x++)d[x]!==void 0&&f++;return f===g}function l(d){let f=d.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function G_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ns("WebGLRenderer: "+n+" extension not supported."),s}}}function H_(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){c(g.target)}function c(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let x=r.get(g);x&&(e.remove(x),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(g,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function h(g){let x=g.attributes;for(let m in x)e.update(x[m],i.ARRAY_BUFFER)}function u(g){let x=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let _=x!==null?x.array.length:m.array.length/3-1,M=m.count>=65535?ka:Oa,v=new M(Math.ceil(_/3)*6,1),E=v.array;if(x!==null){let b=x.array;p=x.version;for(let y=0,F=0;y<_;y+=3){let A=b[y+0],L=b[y+1],I=b[y+2];E[F++]=A,E[F++]=L,E[F++]=L,E[F++]=I,E[F++]=I,E[F++]=A}}else{p=m.version;for(let b=0,y=0;b<_;b+=3){let F=b+0,A=b+1,L=b+2;E[y++]=F,E[y++]=A,E[y++]=A,E[y++]=L,E[y++]=L,E[y++]=F}}v.version=p;let w=r.get(g);w&&e.remove(w),r.set(g,v)}function d(g){let x=r.get(g);if(x){let m=g.index;m!==null&&x.version<m.version&&u(g)}else u(g);return r.get(g)}function f(){for(let g in s){let x=s[g].deref();x!==void 0&&c(x)}}return{get:l,update:h,getWireframeAttribute:d,dispose:f}}function V_(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function W_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ke("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function q_(i,e,t){let n=new WeakMap,s=new St;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let F=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",F)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let v=o.attributes.position.count*M,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*E*4*u),b=new Ua(w,v,E,u);b.type=Jn,b.needsUpdate=!0;let y=M*4;for(let A=0;A<u;A++){let L=m[A],I=p[A],U=_[A],R=v*E*4*A;for(let B=0;B<L.count;B++){let H=B*y;f===!0&&(s.fromBufferAttribute(L,B),w[R+H+0]=s.x,w[R+H+1]=s.y,w[R+H+2]=s.z,w[R+H+3]=0),g===!0&&(s.fromBufferAttribute(I,B),w[R+H+4]=s.x,w[R+H+5]=s.y,w[R+H+6]=s.z,w[R+H+7]=0),x===!0&&(s.fromBufferAttribute(U,B),w[R+H+8]=s.x,w[R+H+9]=s.y,w[R+H+10]=s.z,w[R+H+11]=U.itemSize===4?s.w:1)}}d={count:u,texture:b,size:new oe(v,E)},n.set(o,d),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function X_(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var j_={[Zh]:"LINEAR_TONE_MAPPING",[Qh]:"REINHARD_TONE_MAPPING",[eu]:"CINEON_TONE_MAPPING",[po]:"ACES_FILMIC_TONE_MAPPING",[nu]:"AGX_TONE_MAPPING",[iu]:"NEUTRAL_TONE_MAPPING",[tu]:"CUSTOM_TONE_MAPPING"};function K_(i,e,t,n,s,r){let a=new jn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new Tt;h.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new nt([0,2,0,0,2,0],2));let u=new Fc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ut(h,u),f=new Xs(-1,1,1,-1,0,1),g=null,x=null,m=!1,p,_=null,M=[],v=!1;this.setSize=function(E,w){a.setSize(E,w),o!==null&&o.setSize(E,w),c!==null&&c.setSize(E,w);for(let b=0;b<M.length;b++){let y=M[b];y.setSize&&y.setSize(E,w)}},this.setEffects=function(E){M=E,v=M.length>0&&M[0].isRenderPass===!0;let w=a.width,b=a.height;M.length>0&&o===null&&(o=new jn(w,b,{type:pi,depthBuffer:!1,stencilBuffer:!1}),c=new jn(w,b,{type:pi,depthBuffer:!1,stencilBuffer:!1}));let y=s===!0&&M.some(F=>F.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&l===null&&(l=new Yi(w,b),r===!0&&(l.format=is,l.type=Qs)),a.dispose(),a.depthTexture=y?l:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let F=0;F<M.length;F++){let A=M[F];A.setSize&&A.setSize(w,b),y&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(l)}},this.begin=function(E,w){if(m||E.toneMapping===Ri&&M.length===0)return!1;if(_=w,w!==null){let b=w.width,y=w.height;(a.width!==b||a.height!==y)&&this.setSize(b,y)}return v===!1&&E.setRenderTarget(a),p=E.toneMapping,E.toneMapping=Ri,!0},this.hasRenderPass=function(){return v},this.end=function(E,w){E.toneMapping=p,m=!0;let b=a,y=o;for(let F=0;F<M.length;F++){let A=M[F];A.enabled!==!1&&(A.render(E,y,b,w),A.needsSwap!==!1&&(b=y,y=y===o?c:o))}if(g!==E.outputColorSpace||x!==E.toneMapping){g=E.outputColorSpace,x=E.toneMapping,u.defines={},ct.getTransfer(g)===Et&&(u.defines.SRGB_TRANSFER="");let F=j_[x];F&&(u.defines[F]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,E.setRenderTarget(_),E.render(d,f),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var om=new cn,cm=new Yi(1,1),lm=new qa(1),hm=new Ua,um=new wc,dm=new Va,zp=[],Gp=[],Hp=new Float32Array(16),Vp=new Float32Array(9),Wp=new Float32Array(4);function ea(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=zp[s];if(r===void 0&&(r=new Float32Array(s),zp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function un(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function kl(i,e){let t=Gp[e];t===void 0&&(t=new Int32Array(e),Gp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function J_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;i.uniform2fv(this.addr,e),dn(t,e)}}function $_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;i.uniform3fv(this.addr,e),dn(t,e)}}function Z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;i.uniform4fv(this.addr,e),dn(t,e)}}function Q_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(un(t,n))return;Wp.set(n),i.uniformMatrix2fv(this.addr,!1,Wp),dn(t,n)}}function ev(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(un(t,n))return;Vp.set(n),i.uniformMatrix3fv(this.addr,!1,Vp),dn(t,n)}}function tv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(un(t,n))return;Hp.set(n),i.uniformMatrix4fv(this.addr,!1,Hp),dn(t,n)}}function nv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;i.uniform2iv(this.addr,e),dn(t,e)}}function sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;i.uniform3iv(this.addr,e),dn(t,e)}}function rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;i.uniform4iv(this.addr,e),dn(t,e)}}function av(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ov(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;i.uniform2uiv(this.addr,e),dn(t,e)}}function cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;i.uniform3uiv(this.addr,e),dn(t,e)}}function lv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;i.uniform4uiv(this.addr,e),dn(t,e)}}function Bl(i){return i.version===0&&(i.compareFunction=pu,i.needsUpdate=!0),i}function hv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Bl(cm):r=om,t.setTexture2D(e||r,s)}function uv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||um,s)}function dv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Bl(lm):r=dm,t.setTextureCube(e||r,s)}function fv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||hm,s)}function pv(i){switch(i){case 5126:return J_;case 35664:return Y_;case 35665:return $_;case 35666:return Z_;case 35674:return Q_;case 35675:return ev;case 35676:return tv;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return sv;case 35669:case 35673:return rv;case 5125:return av;case 36294:return ov;case 36295:return cv;case 36296:return lv;case 35678:case 36198:case 36298:case 36306:case 35682:return hv;case 35679:case 36299:case 36307:return uv;case 35680:case 36300:case 36308:case 36293:return dv;case 36289:case 36303:case 36311:case 36292:return fv}}function mv(i,e){i.uniform1fv(this.addr,e)}function gv(i,e){let t=ea(e,this.size,2);i.uniform2fv(this.addr,t)}function bv(i,e){let t=ea(e,this.size,3);i.uniform3fv(this.addr,t)}function xv(i,e){let t=ea(e,this.size,4);i.uniform4fv(this.addr,t)}function _v(i,e){let t=ea(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function vv(i,e){let t=ea(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function yv(i,e){let t=ea(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Mv(i,e){i.uniform1iv(this.addr,e)}function Sv(i,e){i.uniform2iv(this.addr,e)}function Ev(i,e){i.uniform3iv(this.addr,e)}function Tv(i,e){i.uniform4iv(this.addr,e)}function wv(i,e){i.uniform1uiv(this.addr,e)}function Av(i,e){i.uniform2uiv(this.addr,e)}function Rv(i,e){i.uniform3uiv(this.addr,e)}function Cv(i,e){i.uniform4uiv(this.addr,e)}function Pv(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);un(n,r)||(i.uniform1iv(this.addr,r),dn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Bl(cm):a=om;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Iv(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);un(n,r)||(i.uniform1iv(this.addr,r),dn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||um,r[a])}function Dv(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);un(n,r)||(i.uniform1iv(this.addr,r),dn(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Bl(lm):a=dm;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function Lv(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);un(n,r)||(i.uniform1iv(this.addr,r),dn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||hm,r[a])}function Nv(i){switch(i){case 5126:return mv;case 35664:return gv;case 35665:return bv;case 35666:return xv;case 35674:return _v;case 35675:return vv;case 35676:return yv;case 5124:case 35670:return Mv;case 35667:case 35671:return Sv;case 35668:case 35672:return Ev;case 35669:case 35673:return Tv;case 5125:return wv;case 36294:return Av;case 36295:return Rv;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Pv;case 35679:case 36299:case 36307:return Iv;case 35680:case 36300:case 36308:case 36293:return Dv;case 36289:case 36303:case 36311:case 36292:return Lv}}var Lu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=pv(t.type)}},Nu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nv(t.type)}},Fu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Iu=/(\w+)(\])?(\[|\.)?/g;function qp(i,e){i.seq.push(e),i.map[e.id]=e}function Fv(i,e,t){let n=i.name,s=n.length;for(Iu.lastIndex=0;;){let r=Iu.exec(n),a=Iu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){qp(t,l===void 0?new Lu(o,i,e):new Nu(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Fu(o),qp(t,u)),t=u}}}var Zr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Fv(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Xp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Uv=37297,Ov=0;function kv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var jp=new tt;function Bv(i){ct._getMatrix(jp,ct.workingColorSpace,i);let e=`mat3( ${jp.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case Na:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Kp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+kv(i.getShaderSource(e),o)}else return r}function zv(i,e){let t=Bv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Gv={[Zh]:"Linear",[Qh]:"Reinhard",[eu]:"Cineon",[po]:"ACESFilmic",[nu]:"AgX",[iu]:"Neutral",[tu]:"Custom"};function Hv(i,e){let t=Gv[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ul=new P;function Vv(){ct.getLuminanceCoefficients(Ul);let i=Ul.x.toFixed(4),e=Ul.y.toFixed(4),t=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}function qv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Eo(i){return i!==""}function Jp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Yp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var jv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uu(i){return i.replace(jv,Kv)}function Kv(i,e){let t=ot[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Uu(t)}var Jv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $p(i){return i.replace(Jv,Yv)}function Yv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var $v={[Ks]:"SHADOWMAP_TYPE_PCF",[Xr]:"SHADOWMAP_TYPE_VSM"};function Zv(i){return $v[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Qv={[Kr]:"ENVMAP_MODE_REFRACTION"};function ey(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Qv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ty={[jc]:"ENVMAP_BLENDING_MULTIPLY",[up]:"ENVMAP_BLENDING_MIX",[dp]:"ENVMAP_BLENDING_ADD"};function ny(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ty[i.combine]||"ENVMAP_BLENDING_NONE"}function iy(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Zv(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=ey(t),u=ny(t),d=Wv(t),f=qv(r),g=s.createProgram(),x,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Eo).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Eo).join(`
`),m.length>0&&(m+=`
`)):(x=[Zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),m=[Zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?ot.tonemapping_pars_fragment:"",t.toneMapping!==Ri?Hv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,zv("linearToOutputTexel",t.outputColorSpace),Vv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Eo).join(`
`)),a=Uu(a),a=Jp(a,t),a=Yp(a,t),o=Uu(o),o=Jp(o,t),o=Yp(o,t),a=$p(a),o=$p(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===gu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=p+x+a,M=p+m+o,v=Xp(s,s.VERTEX_SHADER,_),E=Xp(s,s.FRAGMENT_SHADER,M);s.attachShader(g,v),s.attachShader(g,E),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function w(A){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(g)||"",I=s.getShaderInfoLog(v)||"",U=s.getShaderInfoLog(E)||"",R=L.trim(),B=I.trim(),H=U.trim(),G=!0,ie=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,v,E);else{let X=Kp(s,v,"vertex"),$=Kp(s,E,"fragment");Ke("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+R+`
`+X+`
`+$)}else R!==""?Be("WebGLProgram: Program Info Log:",R):(B===""||H==="")&&(ie=!1);ie&&(A.diagnostics={runnable:G,programLog:R,vertexShader:{log:B,prefix:x},fragmentShader:{log:H,prefix:m}})}s.deleteShader(v),s.deleteShader(E),b=new Zr(s,g),y=Xv(s,g)}let b;this.getUniforms=function(){return b===void 0&&w(this),b};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(g,Uv)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ov++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=E,this}var sy=0,Ou=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ku(e),t.set(e,n)),n}},ku=class{constructor(e){this.id=sy++,this.code=e,this.usedTimes=0}};function ry(i){return i===Ss||i===_o||i===vo}function ay(i,e,t,n,s,r){let a=new Lr,o=new Ou,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,y,F,A,L,I){let U=A.fog,R=L.geometry,B=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?A.environment:null,H=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,G=e.get(b.envMap||B,H),ie=d[b.type],X=n.precision;b.precision!==null&&(X=n.getMaxPrecision(b.precision),X!==b.precision&&Be("WebGLProgram.getParameters:",b.precision,"not supported, using",X,"instead."));let $=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,Q=$!==void 0?$.length:0,ge=0;R.morphAttributes.position!==void 0&&(ge=1),R.morphAttributes.normal!==void 0&&(ge=2),R.morphAttributes.color!==void 0&&(ge=3);let Ge,Y,ye,Re;if(ie){let Te=Pi[ie];Ge=Te.vertexShader,Y=Te.fragmentShader}else{Ge=b.vertexShader,Y=b.fragmentShader;let Te=o.getVertexShaderStage(b),yt=o.getFragmentShaderStage(b);o.update(b,Te,yt),ye=Te.id,Re=yt.id}let Ee=i.getRenderTarget(),le=i.state.buffers.depth.getReversed(),Pe=L.isInstancedMesh===!0,vt=L.isBatchedMesh===!0,He=!!b.map,$e=!!b.matcap,Ze=!!G,ee=Ze&&G.isPMREMTexture===!0,ue=!!b.aoMap,fe=!!b.lightMap,we=!!b.bumpMap&&b.wireframe===!1,be=!!b.normalMap,ae=!!b.displacementMap,Ie=!!b.emissiveMap,je=!!b.metalnessMap,Je=!!b.roughnessMap,it=b.anisotropy>0,O=b.clearcoat>0,Gt=b.diffuseRoughness>0,st=b.dispersion>0,wt=b.retroreflectivity>0,ve=b.iridescence>0,Lt=b.sheen>0,ke=b.transmission>0,Xe=it&&!!b.anisotropyMap,C=O&&!!b.clearcoatMap,S=O&&!!b.clearcoatNormalMap,W=O&&!!b.clearcoatRoughnessMap,ce=Gt&&!!b.diffuseRoughnessMap,ne=ve&&!!b.iridescenceMap,de=ve&&!!b.iridescenceThicknessMap,_e=Lt&&!!b.sheenColorMap,J=Lt&&!!b.sheenRoughnessMap,Z=!!b.specularMap,me=!!b.specularColorMap,N=!!b.specularIntensityMap,D=ke&&!!b.transmissionMap,z=ke&&!!b.thicknessMap,te=!!b.gradientMap,se=!!b.alphaMap,re=b.alphaTest>0,Ce=!!b.alphaHash,We=!!b.extensions,j=Ri;b.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(j=i.toneMapping);let De=ee?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Qe={shaderID:ie,shaderType:b.type,shaderName:b.name,vertexShader:Ge,fragmentShader:Y,defines:b.defines,customVertexShaderID:ye,customFragmentShaderID:Re,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:X,batching:vt,batchingColor:vt&&L._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&L.instanceColor!==null,instancingMorph:Pe&&L.morphTexture!==null,outputColorSpace:Ee===null?i.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:He,matcap:$e,envMap:Ze,envMapMode:Ze&&G.mapping,envMapPMREM:ee,envMapMaxLod:ee?De.length-1:null,envMapSize:ee?De[0].width:null,aoMap:ue,lightMap:fe,bumpMap:we,normalMap:be,displacementMap:ae,emissiveMap:Ie,normalMapObjectSpace:be&&b.normalMapType===gp,normalMapTangentSpace:be&&b.normalMapType===Mo,packedNormalMap:be&&b.normalMapType===Mo&&ry(b.normalMap.format),metalnessMap:je,roughnessMap:Je,anisotropy:it,anisotropyMap:Xe,clearcoat:O,clearcoatMap:C,clearcoatNormalMap:S,clearcoatRoughnessMap:W,diffuseRoughness:Gt,diffuseRoughnessMap:ce,dispersion:st,retroreflection:wt,iridescence:ve,iridescenceMap:ne,iridescenceThicknessMap:de,sheen:Lt,sheenColorMap:_e,sheenRoughnessMap:J,specularMap:Z,specularColorMap:me,specularIntensityMap:N,transmission:ke,transmissionMap:D,thicknessMap:z,gradientMap:te,opaque:b.transparent===!1&&b.blending===jr&&b.alphaToCoverage===!1,alphaMap:se,alphaTest:re,alphaHash:Ce,combine:b.combine,mapUv:He&&f(b.map.channel),aoMapUv:ue&&f(b.aoMap.channel),lightMapUv:fe&&f(b.lightMap.channel),bumpMapUv:we&&f(b.bumpMap.channel),normalMapUv:be&&f(b.normalMap.channel),displacementMapUv:ae&&f(b.displacementMap.channel),emissiveMapUv:Ie&&f(b.emissiveMap.channel),metalnessMapUv:je&&f(b.metalnessMap.channel),roughnessMapUv:Je&&f(b.roughnessMap.channel),anisotropyMapUv:Xe&&f(b.anisotropyMap.channel),clearcoatMapUv:C&&f(b.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&f(b.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ce&&f(b.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&f(b.iridescenceMap.channel),iridescenceThicknessMapUv:de&&f(b.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&f(b.sheenColorMap.channel),sheenRoughnessMapUv:J&&f(b.sheenRoughnessMap.channel),specularMapUv:Z&&f(b.specularMap.channel),specularColorMapUv:me&&f(b.specularColorMap.channel),specularIntensityMapUv:N&&f(b.specularIntensityMap.channel),transmissionMapUv:D&&f(b.transmissionMap.channel),thicknessMapUv:z&&f(b.thicknessMap.channel),alphaMapUv:se&&f(b.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(be||it),vertexNormals:!!R.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!R.attributes.uv&&(He||se),fog:!!U,useFog:b.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||R.attributes.normal===void 0&&be===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:le,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ge,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:I.filter(Te=>Te.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:j,decodeVideoTexture:He&&b.map.isVideoTexture===!0&&ct.getTransfer(b.map.colorSpace)===Et,decodeVideoTextureEmissive:Ie&&b.emissiveMap.isVideoTexture===!0&&ct.getTransfer(b.emissiveMap.colorSpace)===Et,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Xt,flipSided:b.side===hn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:We&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&b.extensions.multiDraw===!0||vt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function x(b){let y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(let F in b.defines)y.push(F),y.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(m(y,b),p(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function m(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapPMREM),b.push(y.envMapMaxLod),b.push(y.envMapSize),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.diffuseRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.numSunLights),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numSunLightShadows),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.numLightProbeGrids),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function p(b,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),b.push(a.mask)}function _(b){let y=d[b.type],F;if(y){let A=Pi[y];F=Lp.clone(A.uniforms)}else F=b.uniforms;return F}function M(b,y){let F=h.get(y);return F!==void 0?++F.usedTimes:(F=new iy(i,y,b,s),l.push(F),h.set(y,F)),F}function v(b){if(--b.usedTimes===0){let y=l.indexOf(b);l[y]=l[l.length-1],l.pop(),h.delete(b.cacheKey),b.destroy()}}function E(b){o.remove(b)}function w(){o.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:_,acquireProgram:M,releaseProgram:v,releaseShaderCache:E,programs:l,dispose:w}}function oy(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function cy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Qp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function em(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,x,m,p){let _=i[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:p},i[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=g,_.materialVariant=a(d),_.groupOrder=x,_.renderOrder=d.renderOrder,_.z=m,_.group=p),e++,_}function c(d,f,g,x,m,p,_){_.reversedDepth===!0&&(m=-m);let M=o(d,f,g,x,m,p);g.transmission>0?n.push(M):g.transparent===!0?s.push(M):t.push(M)}function l(d,f,g,x,m,p){let _=o(d,f,g,x,m,p);g.transmission>0?n.unshift(_):g.transparent===!0?s.unshift(_):t.unshift(_)}function h(d,f){t.length>1&&t.sort(d||cy),n.length>1&&n.sort(f||Qp),s.length>1&&s.sort(f||Qp)}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function ly(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new em,i.set(n,[a])):s>=r.length?(a=new em,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function hy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new ze};break;case"SpotLight":t={position:new P,direction:new P,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function uy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var dy=0;function fy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function py(i){let e=new hy,t=uy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);let s=new P,r=new Ye,a=new Ye;function o(l){let h=0,u=0,d=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,_=0,M=0,v=0,E=0,w=0,b=0,y=0,F=0,A=0;l.sort(fy);for(let I=0,U=l.length;I<U;I++){let R=l[I],B=R.color,H=R.intensity,G=R.distance,ie=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Ss?ie=R.shadow.map.texture:ie=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=B.r*H,u+=B.g*H,d+=B.b*H;else if(R.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(R.sh.coefficients[X],H);A++}else if(R.isSunLight){let X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let $=R.shadow,Q=t.get(R);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[g]=Q,n.sunShadowMap[g]=ie;let ge=$.getViewportCount();for(let Ge=0;Ge<ge;Ge++)n.sunShadowMatrix[x+Ge]=$.getMatrix(Ge),n.sunShadowCascade[x+Ge]=$._cascadeData[Ge];x+=ge,g++}n.sun[f]=X,f++}else if(R.isDirectionalLight){let X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let $=R.shadow,Q=t.get(R);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=ie,n.directionalShadowMatrix[m]=R.shadow.matrix,E++}n.directional[m]=X,m++}else if(R.isSpotLight){let X=e.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(B).multiplyScalar(H),X.distance=G,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,n.spot[_]=X;let $=R.shadow;if(R.map&&(n.spotLightMap[y]=R.map,y++,$.updateMatrices(R),R.castShadow&&F++),n.spotLightMatrix[_]=$.matrix,R.castShadow){let Q=t.get(R);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,n.spotShadow[_]=Q,n.spotShadowMap[_]=ie,b++}_++}else if(R.isRectAreaLight){let X=e.get(R);X.color.copy(B).multiplyScalar(H),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),n.rectArea[M]=X,M++}else if(R.isPointLight){let X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){let $=R.shadow,Q=t.get(R);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,Q.shadowCameraNear=$.camera.near,Q.shadowCameraFar=$.camera.far,n.pointShadow[p]=Q,n.pointShadowMap[p]=ie,n.pointShadowMatrix[p]=R.shadow.matrix,w++}n.point[p]=X,p++}else if(R.isHemisphereLight){let X=e.get(R);X.skyColor.copy(R.color).multiplyScalar(H),X.groundColor.copy(R.groundColor).multiplyScalar(H),n.hemi[v]=X,v++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==_||L.rectAreaLength!==M||L.hemiLength!==v||L.numSunShadows!==g||L.numDirectionalShadows!==E||L.numPointShadows!==w||L.numSpotShadows!==b||L.numSpotMaps!==y||L.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=m,n.spot.length=_,n.rectArea.length=M,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=b,n.spotShadowMap.length=b,n.spotLightMatrix.length=b+y-F,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=A,L.sunLength=f,L.directionalLength=m,L.pointLength=p,L.spotLength=_,L.rectAreaLength=M,L.hemiLength=v,L.numSunShadows=g,L.numDirectionalShadows=E,L.numPointShadows=w,L.numSpotShadows=b,L.numSpotMaps=y,L.numLightProbes=A,n.version=dy++)}function c(l,h){let u=0,d=0,f=0,g=0,x=0,m=0,p=h.matrixWorldInverse;for(let _=0,M=l.length;_<M;_++){let v=l[_];if(v.isSunLight){let E=n.sun[u];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),d++}else if(v.isSpotLight){let E=n.spot[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let E=n.rectArea[x];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function tm(i){let e=new py(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function c(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function l(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function my(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new tm(i),e.set(s,[o])):r>=a.length?(o=new tm(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var gy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,by=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,xy=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],_y=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],nm=new Ye,So=new P,Du=new P;function vy(i,e,t){let n=new vs,s=new oe,r=new oe,a=new St,o=new Uc,c=new Oc,l={},h=t.maxTextureSize,u={[Ai]:hn,[hn]:Ai,[Xt]:Xt},d=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:gy,fragmentShader:by}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Tt;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ut(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ks;let p=this.type;this.render=function(w,b,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Xf&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ks);let F=i.getRenderTarget(),A=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Js),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let U=p!==this.type;U&&b.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(B=>B.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,B=w.length;R<B;R++){let H=w[R],G=H.shadow;if(G===void 0){Be("WebGLShadowMap:",H,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ie=G.getFrameExtents();s.multiply(ie),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,G.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=X,G.map===null||U===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Xr){if(H.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new jn(s.x,s.y,{format:Ss,type:pi,minFilter:on,magFilter:on,generateMipmaps:!1}),G.map.texture.name=H.name+".shadowMap",G.map.depthTexture=new Yi(s.x,s.y,Jn),G.map.depthTexture.name=H.name+".shadowMapDepth",G.map.depthTexture.format=ji,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=$t,G.map.depthTexture.magFilter=$t}else H.isPointLight?(G.map=new To(s.x),G.map.depthTexture=new qa(s.x,fi)):(G.map=new jn(s.x,s.y),G.map.depthTexture=new Yi(s.x,s.y,fi)),G.map.depthTexture.name=H.name+".shadowMap",G.map.depthTexture.format=ji,this.type===Ks?(G.map.depthTexture.compareFunction=X?fu:du,G.map.depthTexture.minFilter=on,G.map.depthTexture.magFilter=on):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=$t,G.map.depthTexture.magFilter=$t);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let $=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();H.isPointLight!==!0&&G.updateMatrices(H,y);let Q=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:y.layers;for(let ge=0;ge<$;ge++){let Ge=G.getCamera(ge);if(H.isPointLight){let Y=G.camera,ye=G.matrix,Re=H.distance||Y.far;Re!==Y.far&&(Y.far=Re,Y.updateProjectionMatrix()),So.setFromMatrixPosition(H.matrixWorld),Y.position.copy(So),Du.copy(Y.position),Du.add(xy[ge]),Y.up.copy(_y[ge]),Y.lookAt(Du),Y.updateMatrixWorld(),ye.makeTranslation(-So.x,-So.y,-So.z),nm.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),G._frustum.setFromProjectionMatrix(nm,Y.coordinateSystem,Y.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,ge),i.clear();else{ge===0&&(i.setRenderTarget(G.map),i.clear());let Y=G.getViewport(ge);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),I.viewport(a)}n=G.getFrustum(ge),v(b,y,Ge,H,Q,this.type)}G.isPointLightShadow!==!0&&this.type===Xr&&_(G,y),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(F,A,L)};function _(w,b){let y=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new jn(s.x,s.y,{format:Ss,type:pi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(b,null,y,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(b,null,y,f,x,null)}function M(w,b,y,F){let A=null,L=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)A=L;else if(A=y.isPointLight===!0?c:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let I=A.uuid,U=b.uuid,R=l[I];R===void 0&&(R={},l[I]=R);let B=R[U];B===void 0&&(B=A.clone(),R[U]=B,b.addEventListener("dispose",E)),A=B}if(A.visible=b.visible,A.wireframe=b.wireframe,F===Xr?A.side=b.shadowSide!==null?b.shadowSide:b.side:A.side=b.shadowSide!==null?b.shadowSide:u[b.side],A.alphaMap=b.alphaMap,A.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,A.map=b.map,A.clipShadows=b.clipShadows,A.clippingPlanes=b.clippingPlanes,A.clipIntersection=b.clipIntersection,A.displacementMap=b.displacementMap,A.displacementScale=b.displacementScale,A.displacementBias=b.displacementBias,A.wireframeLinewidth=b.wireframeLinewidth,A.linewidth=b.linewidth,y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let I=i.properties.get(A);I.light=y}return A}function v(w,b,y,F,A,L){if(w.visible===!1)return;if(w.layers.test(A)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===Xr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);let R=e.update(w),B=w.material;if(Array.isArray(B)){let H=R.groups;for(let G=0,ie=H.length;G<ie;G++){let X=H[G],$=B[X.materialIndex];if($&&$.visible){let Q=M(w,$,F,L);w.onBeforeShadow(i,w,b,y,R,Q,X),i.renderBufferDirect(y,null,R,Q,w,X),w.onAfterShadow(i,w,b,y,R,Q,X)}}}else if(B.visible){let H=M(w,B,F,L);w.onBeforeShadow(i,w,b,y,R,H,null),i.renderBufferDirect(y,null,R,H,w,null),w.onAfterShadow(i,w,b,y,R,H,null)}}let U=w.children;for(let R=0,B=U.length;R<B;R++)v(U[R],b,y,F,A,L)}function E(w){w.target.removeEventListener("dispose",E);for(let y in l){let F=l[y],A=w.target.uuid;A in F&&(F[A].dispose(),delete F[A])}}}function yy(i,e){function t(){let N=!1,D=new St,z=null,te=new St(0,0,0,0);return{setMask:function(se){z!==se&&!N&&(i.colorMask(se,se,se,se),z=se)},setLocked:function(se){N=se},setClear:function(se,re,Ce,We,j){j===!0&&(se*=We,re*=We,Ce*=We),D.set(se,re,Ce,We),te.equals(D)===!1&&(i.clearColor(se,re,Ce,We),te.copy(D))},reset:function(){N=!1,z=null,te.set(-1,0,0,0)}}}function n(){let N=!1,D=!1,z=null,te=null,se=null;return{setReversed:function(re){if(D!==re){let Ce=e.get("EXT_clip_control");re?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),D=re;let We=se;se=null,this.setClear(We)}},getReversed:function(){return D},setTest:function(re){re?le(i.DEPTH_TEST):Pe(i.DEPTH_TEST)},setMask:function(re){z!==re&&!N&&(i.depthMask(re),z=re)},setFunc:function(re){if(D&&(re=wp[re]),te!==re){switch(re){case bc:i.depthFunc(i.NEVER);break;case xc:i.depthFunc(i.ALWAYS);break;case _c:i.depthFunc(i.LESS);break;case Ar:i.depthFunc(i.LEQUAL);break;case vc:i.depthFunc(i.EQUAL);break;case yc:i.depthFunc(i.GEQUAL);break;case Mc:i.depthFunc(i.GREATER);break;case Sc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}te=re}},setLocked:function(re){N=re},setClear:function(re){se!==re&&(se=re,D&&(re=1-re),i.clearDepth(re))},reset:function(){N=!1,z=null,te=null,se=null,D=!1}}}function s(){let N=!1,D=null,z=null,te=null,se=null,re=null,Ce=null,We=null,j=null;return{setTest:function(De){N||(De?le(i.STENCIL_TEST):Pe(i.STENCIL_TEST))},setMask:function(De){D!==De&&!N&&(i.stencilMask(De),D=De)},setFunc:function(De,Qe,Te){(z!==De||te!==Qe||se!==Te)&&(i.stencilFunc(De,Qe,Te),z=De,te=Qe,se=Te)},setOp:function(De,Qe,Te){(re!==De||Ce!==Qe||We!==Te)&&(i.stencilOp(De,Qe,Te),re=De,Ce=Qe,We=Te)},setLocked:function(De){N=De},setClear:function(De){j!==De&&(i.clearStencil(De),j=De)},reset:function(){N=!1,D=null,z=null,te=null,se=null,re=null,Ce=null,We=null,j=null}}}let r=new t,a=new n,o=new s,c={},l=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],x=null,m=!1,p=null,_=null,M=null,v=null,E=null,w=null,b=null,y=new ze(0,0,0),F=0,A=!1,L=null,I=null,U=null,R=null,B=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ie=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=ie>=1):X.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=ie>=2);let $=null,Q={},ge=i.getParameter(i.SCISSOR_BOX),Ge=i.getParameter(i.VIEWPORT),Y=new St().fromArray(ge),ye=new St().fromArray(Ge);function Re(N,D,z,te){let se=new Uint8Array(4),re=i.createTexture();i.bindTexture(N,re),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ce=0;Ce<z;Ce++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(D,0,i.RGBA,1,1,te,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D(D+Ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return re}let Ee={};Ee[i.TEXTURE_2D]=Re(i.TEXTURE_2D,i.TEXTURE_2D,1),Ee[i.TEXTURE_CUBE_MAP]=Re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[i.TEXTURE_2D_ARRAY]=Re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ee[i.TEXTURE_3D]=Re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(i.DEPTH_TEST),a.setFunc(Ar),we(!1),be(jh),le(i.CULL_FACE),ue(Js);function le(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Pe(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function vt(N,D){return d[N]!==D?(i.bindFramebuffer(N,D),d[N]=D,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=D),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=D),!0):!1}function He(N,D){let z=g,te=!1;if(N){z=f.get(D),z===void 0&&(z=[],f.set(D,z));let se=N.textures;if(z.length!==se.length||z[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Ce=se.length;re<Ce;re++)z[re]=i.COLOR_ATTACHMENT0+re;z.length=se.length,te=!0}}else z[0]!==i.BACK&&(z[0]=i.BACK,te=!0);te&&i.drawBuffers(z)}function $e(N){return x!==N?(i.useProgram(N),x=N,!0):!1}let Ze={[Ys]:i.FUNC_ADD,[Kf]:i.FUNC_SUBTRACT,[Jf]:i.FUNC_REVERSE_SUBTRACT};Ze[Yf]=i.MIN,Ze[$f]=i.MAX;let ee={[Zf]:i.ZERO,[Qf]:i.ONE,[ep]:i.SRC_COLOR,[Yh]:i.SRC_ALPHA,[ap]:i.SRC_ALPHA_SATURATE,[sp]:i.DST_COLOR,[np]:i.DST_ALPHA,[tp]:i.ONE_MINUS_SRC_COLOR,[$h]:i.ONE_MINUS_SRC_ALPHA,[rp]:i.ONE_MINUS_DST_COLOR,[ip]:i.ONE_MINUS_DST_ALPHA,[op]:i.CONSTANT_COLOR,[cp]:i.ONE_MINUS_CONSTANT_COLOR,[lp]:i.CONSTANT_ALPHA,[hp]:i.ONE_MINUS_CONSTANT_ALPHA};function ue(N,D,z,te,se,re,Ce,We,j,De){if(N===Js){m===!0&&(Pe(i.BLEND),m=!1);return}if(m===!1&&(le(i.BLEND),m=!0),N!==jf){if(N!==p||De!==A){if((_!==Ys||E!==Ys)&&(i.blendEquation(i.FUNC_ADD),_=Ys,E=Ys),De)switch(N){case jr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fn:i.blendFunc(i.ONE,i.ONE);break;case Kh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ke("WebGLState: Invalid blending: ",N);break}else switch(N){case jr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Kh:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jh:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",N);break}M=null,v=null,w=null,b=null,y.set(0,0,0),F=0,p=N,A=De}return}se=se||D,re=re||z,Ce=Ce||te,(D!==_||se!==E)&&(i.blendEquationSeparate(Ze[D],Ze[se]),_=D,E=se),(z!==M||te!==v||re!==w||Ce!==b)&&(i.blendFuncSeparate(ee[z],ee[te],ee[re],ee[Ce]),M=z,v=te,w=re,b=Ce),(We.equals(y)===!1||j!==F)&&(i.blendColor(We.r,We.g,We.b,j),y.copy(We),F=j),p=N,A=!1}function fe(N,D){N.side===Xt?Pe(i.CULL_FACE):le(i.CULL_FACE);let z=N.side===hn;D&&(z=!z),we(z),N.blending===jr&&N.transparent===!1?ue(Js):ue(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let te=N.stencilWrite;o.setTest(te),te&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ie(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):Pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function we(N){L!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),L=N)}function be(N){N!==Wf?(le(i.CULL_FACE),N!==I&&(N===jh?i.cullFace(i.BACK):N===qf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pe(i.CULL_FACE),I=N}function ae(N){N!==U&&(G&&i.lineWidth(N),U=N)}function Ie(N,D,z){N?(le(i.POLYGON_OFFSET_FILL),(R!==D||B!==z)&&(R=D,B=z,a.getReversed()&&(D=-D,z=-z),i.polygonOffset(D,z))):Pe(i.POLYGON_OFFSET_FILL)}function je(N){N?le(i.SCISSOR_TEST):Pe(i.SCISSOR_TEST)}function Je(N){N===void 0&&(N=i.TEXTURE0+H-1),$!==N&&(i.activeTexture(N),$=N)}function it(N,D,z){z===void 0&&($===null?z=i.TEXTURE0+H-1:z=$);let te=Q[z];te===void 0&&(te={type:void 0,texture:void 0},Q[z]=te),(te.type!==N||te.texture!==D)&&($!==z&&(i.activeTexture(z),$=z),i.bindTexture(N,D||Ee[N]),te.type=N,te.texture=D)}function O(){let N=Q[$];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Gt(){try{i.compressedTexImage2D(...arguments)}catch(N){Ke("WebGLState:",N)}}function st(){try{i.compressedTexImage3D(...arguments)}catch(N){Ke("WebGLState:",N)}}function wt(){try{i.texSubImage2D(...arguments)}catch(N){Ke("WebGLState:",N)}}function ve(){try{i.texSubImage3D(...arguments)}catch(N){Ke("WebGLState:",N)}}function Lt(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Ke("WebGLState:",N)}}function ke(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Ke("WebGLState:",N)}}function Xe(){try{i.texStorage2D(...arguments)}catch(N){Ke("WebGLState:",N)}}function C(){try{i.texStorage3D(...arguments)}catch(N){Ke("WebGLState:",N)}}function S(){try{i.texImage2D(...arguments)}catch(N){Ke("WebGLState:",N)}}function W(){try{i.texImage3D(...arguments)}catch(N){Ke("WebGLState:",N)}}function ce(N){return u[N]!==void 0?u[N]:i.getParameter(N)}function ne(N,D){u[N]!==D&&(i.pixelStorei(N,D),u[N]=D)}function de(N){Y.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Y.copy(N))}function _e(N){ye.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),ye.copy(N))}function J(N,D){let z=l.get(D);z===void 0&&(z=new WeakMap,l.set(D,z));let te=z.get(N);te===void 0&&(te=i.getUniformBlockIndex(D,N.name),i.uniformBlockBinding(D,te,te),z.set(N,te))}function Z(N,D,z){let se=l.get(D).get(N);c[se]!==z&&(i.bindBufferBase(i.UNIFORM_BUFFER,se,z),c[se]=z)}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},$=null,Q={},d={},c={},f=new WeakMap,g=[],x=null,m=!1,p=null,_=null,M=null,v=null,E=null,w=null,b=null,y=new ze(0,0,0),F=0,A=!1,L=null,I=null,U=null,R=null,B=null,Y.set(0,0,i.canvas.width,i.canvas.height),ye.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:le,disable:Pe,bindFramebuffer:vt,drawBuffers:He,useProgram:$e,setBlending:ue,setMaterial:fe,setFlipSided:we,setCullFace:be,setLineWidth:ae,setPolygonOffset:Ie,setScissorTest:je,activeTexture:Je,bindTexture:it,unbindTexture:O,compressedTexImage2D:Gt,compressedTexImage3D:st,texImage2D:S,texImage3D:W,pixelStorei:ne,getParameter:ce,updateUBOMapping:J,uniformBlockBinding:Z,texStorage2D:Xe,texStorage3D:C,texSubImage2D:wt,texSubImage3D:ve,compressedTexSubImage2D:Lt,compressedTexSubImage3D:ke,scissor:de,viewport:_e,reset:me}}function My(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new oe,h=new WeakMap,u=new Set,d,f=new WeakMap,g=new Set,x=new FinalizationRegistry(C=>g.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,S){return m?new OffscreenCanvas(C,S):Pr("canvas")}function _(C,S,W){let ce=1,ne=Xe(C);if((ne.width>W||ne.height>W)&&(ce=W/Math.max(ne.width,ne.height)),ce<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let de=Math.floor(ce*ne.width),_e=Math.floor(ce*ne.height);d===void 0&&(d=p(de,_e));let J=S?p(de,_e):d;return J.width=de,J.height=_e,J.getContext("2d").drawImage(C,0,0,de,_e),Be("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+de+"x"+_e+")."),J}else return"data"in C&&Be("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function M(C){return C.generateMipmaps}function v(C){i.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(C,S,W,ce,ne,de=!1){if(C!==null){if(i[C]!==void 0)return i[C];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let _e;ce&&(_e=e.get("EXT_texture_norm16"),_e||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=S;if(S===i.RED&&(W===i.FLOAT&&(J=i.R32F),W===i.HALF_FLOAT&&(J=i.R16F),W===i.UNSIGNED_BYTE&&(J=i.R8),W===i.UNSIGNED_SHORT&&_e&&(J=_e.R16_EXT),W===i.SHORT&&_e&&(J=_e.R16_SNORM_EXT)),S===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(J=i.R8UI),W===i.UNSIGNED_SHORT&&(J=i.R16UI),W===i.UNSIGNED_INT&&(J=i.R32UI),W===i.BYTE&&(J=i.R8I),W===i.SHORT&&(J=i.R16I),W===i.INT&&(J=i.R32I)),S===i.RG&&(W===i.FLOAT&&(J=i.RG32F),W===i.HALF_FLOAT&&(J=i.RG16F),W===i.UNSIGNED_BYTE&&(J=i.RG8),W===i.UNSIGNED_SHORT&&_e&&(J=_e.RG16_EXT),W===i.SHORT&&_e&&(J=_e.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(J=i.RG8UI),W===i.UNSIGNED_SHORT&&(J=i.RG16UI),W===i.UNSIGNED_INT&&(J=i.RG32UI),W===i.BYTE&&(J=i.RG8I),W===i.SHORT&&(J=i.RG16I),W===i.INT&&(J=i.RG32I)),S===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(J=i.RGB8UI),W===i.UNSIGNED_SHORT&&(J=i.RGB16UI),W===i.UNSIGNED_INT&&(J=i.RGB32UI),W===i.BYTE&&(J=i.RGB8I),W===i.SHORT&&(J=i.RGB16I),W===i.INT&&(J=i.RGB32I)),S===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),W===i.UNSIGNED_INT&&(J=i.RGBA32UI),W===i.BYTE&&(J=i.RGBA8I),W===i.SHORT&&(J=i.RGBA16I),W===i.INT&&(J=i.RGBA32I)),S===i.RGB&&(W===i.UNSIGNED_SHORT&&_e&&(J=_e.RGB16_EXT),W===i.SHORT&&_e&&(J=_e.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),S===i.RGBA){let Z=de?Na:ct.getTransfer(ne);W===i.FLOAT&&(J=i.RGBA32F),W===i.HALF_FLOAT&&(J=i.RGBA16F),W===i.UNSIGNED_BYTE&&(J=Z===Et?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&_e&&(J=_e.RGBA16_EXT),W===i.SHORT&&_e&&(J=_e.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function b(C,S){let W;return C?S===null||S===fi||S===Qs?W=i.DEPTH24_STENCIL8:S===Jn?W=i.DEPTH32F_STENCIL8:S===Yr&&(W=i.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===fi||S===Qs?W=i.DEPTH_COMPONENT24:S===Jn?W=i.DEPTH_COMPONENT32F:S===Yr&&(W=i.DEPTH_COMPONENT16),W}function y(C,S){return M(C)===!0||C.isFramebufferTexture&&C.minFilter!==$t&&C.minFilter!==on?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function F(C){let S=new WeakRef(C);n.get(C).__ref=S,g.add(S),x.register(C,S,S)}function A(C){let S=n.get(C).__ref;S!==void 0&&(g.delete(S),x.unregister(S))}function L(C){U(C.target)}function I(C){R(C.target)}function U(C){C.removeEventListener("dispose",L),A(C),H(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&u.delete(C)}function R(C){C.removeEventListener("dispose",I),A(C),ie(C)}function B(){for(let C of g){let S=C.deref();S!==void 0&&(S.isRenderTarget===!0?R(S):U(S))}g.clear(),u.clear()}function H(C){let S=n.get(C);if(S.__webglInit===void 0)return;let W=C.source,ce=f.get(W);if(ce){let ne=ce[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&G(C),Object.keys(ce).length===0&&f.delete(W)}n.remove(C)}function G(C){let S=n.get(C);i.deleteTexture(S.__webglTexture);let W=C.source,ce=f.get(W);delete ce[S.__cacheKey],a.memory.textures--}function ie(C){let S=n.get(C);S.__depthDisposeCallback&&S.__depthDisposeCallback();let W=C.depthTexture;if(W&&W.renderTarget===C&&U(W),C.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(S.__webglFramebuffer[ne]))for(let de=0;de<S.__webglFramebuffer[ne].length;de++)i.deleteFramebuffer(S.__webglFramebuffer[ne][de]);else i.deleteFramebuffer(S.__webglFramebuffer[ne]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ne])}else{if(Array.isArray(S.__webglFramebuffer))for(let ne=0;ne<S.__webglFramebuffer.length;ne++)i.deleteFramebuffer(S.__webglFramebuffer[ne]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ne=0;ne<S.__webglColorRenderbuffer.length;ne++)S.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ne]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let ce=C.textures;for(let ne=0,de=ce.length;ne<de;ne++){let _e=n.get(ce[ne]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(ce[ne])}n.remove(C)}let X=0;function $(){X=0}function Q(){return X}function ge(C){X=C}function Ge(){let C=X;return C>=s.maxTextures&&Be("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,C}function Y(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.mipmapsAutoUpdate),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function ye(C,S){let W=n.get(C);if(C.isVideoTexture&&Lt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&W.__version!==C.version){let ce=C.image;if(ce===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{fe(W,C,S);return}}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+S)}function Re(C,S){let W=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){fe(W,C,S);return}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+S)}function Ee(C,S){let W=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){fe(W,C,S);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+S)}function le(C,S){let W=n.get(C);if(C.version>0&&W.__version!==C.version){we(W,C,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+S)}let Pe={[di]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[Rr]:i.MIRRORED_REPEAT},vt={[$t]:i.NEAREST,[Yc]:i.NEAREST_MIPMAP_NEAREST,[Zs]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[Jr]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},He={[xp]:i.NEVER,[pu]:i.ALWAYS,[_p]:i.LESS,[du]:i.LEQUAL,[vp]:i.EQUAL,[fu]:i.GEQUAL,[yp]:i.GREATER,[Mp]:i.NOTEQUAL};function $e(C,S){if(S.type===Jn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===on||S.magFilter===Jr||S.magFilter===Zs||S.magFilter===ti||S.minFilter===on||S.minFilter===Jr||S.minFilter===Zs||S.minFilter===ti)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Pe[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Pe[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Pe[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,vt[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,vt[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,He[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===$t||S.minFilter!==Zs&&S.minFilter!==ti||S.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ze(C,S){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",L),F(S));let ce=S.source,ne=f.get(ce);ne===void 0&&(ne={},f.set(ce,ne));let de=Y(S);if(de!==C.__cacheKey){ne[de]===void 0&&(ne[de]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ne[de].usedTimes++;let _e=ne[C.__cacheKey];_e!==void 0&&(ne[C.__cacheKey].usedTimes--,_e.usedTimes===0&&G(S)),C.__cacheKey=de,C.__webglTexture=ne[de].texture}return W}function ee(C,S,W){return Math.floor(Math.floor(C/W)/S)}function ue(C,S,W,ce){let de=C.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,W,ce,S.data);else{de.sort((N,D)=>N.start-D.start);let _e=0;for(let N=1;N<de.length;N++){let D=de[_e],z=de[N],te=D.start+D.count,se=ee(z.start,S.width,4),re=ee(D.start,S.width,4);z.start<=te+1&&se===re&&ee(z.start+z.count-1,S.width,4)===se?D.count=Math.max(D.count,z.start+z.count-D.start):(++_e,de[_e]=z)}de.length=_e+1;let J=t.getParameter(i.UNPACK_ROW_LENGTH),Z=t.getParameter(i.UNPACK_SKIP_PIXELS),me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let N=0,D=de.length;N<D;N++){let z=de[N],te=Math.floor(z.start/4),se=Math.ceil(z.count/4),re=te%S.width,Ce=Math.floor(te/S.width),We=se,j=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ce),t.texSubImage2D(i.TEXTURE_2D,0,re,Ce,We,j,W,ce,S.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(i.UNPACK_SKIP_ROWS,me)}}function fe(C,S,W){let ce=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ce=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ce=i.TEXTURE_3D);let ne=Ze(C,S),de=S.source;t.bindTexture(ce,C.__webglTexture,i.TEXTURE0+W);let _e=n.get(de);if(de.version!==_e.__version||ne===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let j=ct.getPrimaries(ct.workingColorSpace),De=S.colorSpace===ss?null:ct.getPrimaries(S.colorSpace),Qe=S.colorSpace===ss||j===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let Z=_(S.image,!1,s.maxTextureSize);Z=ke(S,Z);let me=r.convert(S.format,S.colorSpace),N=r.convert(S.type),D=w(S.internalFormat,me,N,S.normalized,S.colorSpace,S.isVideoTexture);$e(ce,S);let z,te=S.mipmaps,se=S.isVideoTexture!==!0,re=_e.__version===void 0||ne===!0,Ce=de.dataReady,We=y(S,Z);if(S.isDepthTexture)D=b(S.format===is,S.type),re&&(se?t.texStorage2D(i.TEXTURE_2D,1,D,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,D,Z.width,Z.height,0,me,N,null));else if(S.isDataTexture)if(te.length>0){se&&re&&t.texStorage2D(i.TEXTURE_2D,We,D,te[0].width,te[0].height);for(let j=0,De=te.length;j<De;j++)z=te[j],se?Ce&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,z.width,z.height,me,N,z.data):t.texImage2D(i.TEXTURE_2D,j,D,z.width,z.height,0,me,N,z.data);S.generateMipmaps=!1}else se?(re&&t.texStorage2D(i.TEXTURE_2D,We,D,Z.width,Z.height),Ce&&ue(S,Z,me,N)):t.texImage2D(i.TEXTURE_2D,0,D,Z.width,Z.height,0,me,N,Z.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){se&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,We,D,te[0].width,te[0].height,Z.depth);for(let j=0,De=te.length;j<De;j++)if(z=te[j],S.format!==ni)if(me!==null)if(se){if(Ce)if(S.layerUpdates.size>0){let Qe=Tu(z.width,z.height,S.format,S.type);for(let Te of S.layerUpdates){let yt=z.data.subarray(Te*Qe/z.data.BYTES_PER_ELEMENT,(Te+1)*Qe/z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,Te,z.width,z.height,1,me,yt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,z.width,z.height,Z.depth,me,z.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,D,z.width,z.height,Z.depth,0,z.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?Ce&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,z.width,z.height,Z.depth,me,N,z.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,D,z.width,z.height,Z.depth,0,me,N,z.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{se&&re&&t.texStorage2D(i.TEXTURE_2D,We,D,te[0].width,te[0].height);for(let j=0,De=te.length;j<De;j++)z=te[j],S.format!==ni?me!==null?se?Ce&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,z.width,z.height,me,z.data):t.compressedTexImage2D(i.TEXTURE_2D,j,D,z.width,z.height,0,z.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?Ce&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,z.width,z.height,me,N,z.data):t.texImage2D(i.TEXTURE_2D,j,D,z.width,z.height,0,me,N,z.data)}else if(S.isDataArrayTexture)if(se){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,We,D,Z.width,Z.height,Z.depth),Ce)if(S.layerUpdates.size>0){let j=Tu(Z.width,Z.height,S.format,S.type);for(let De of S.layerUpdates){let Qe=Z.data.subarray(De*j/Z.data.BYTES_PER_ELEMENT,(De+1)*j/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,De,Z.width,Z.height,1,me,N,Qe)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,me,N,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,D,Z.width,Z.height,Z.depth,0,me,N,Z.data);else if(S.isData3DTexture)se?(re&&t.texStorage3D(i.TEXTURE_3D,We,D,Z.width,Z.height,Z.depth),Ce&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,me,N,Z.data)):t.texImage3D(i.TEXTURE_3D,0,D,Z.width,Z.height,Z.depth,0,me,N,Z.data);else if(S.isFramebufferTexture){if(re)if(se)t.texStorage2D(i.TEXTURE_2D,We,D,Z.width,Z.height);else{let j=Z.width,De=Z.height;for(let Qe=0;Qe<We;Qe++)t.texImage2D(i.TEXTURE_2D,Qe,D,j,De,0,me,N,null),j>>=1,De>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Z.parentNode!==j){j.appendChild(Z),u.add(S),j.onpaint=De=>{let Qe=De.changedElements;for(let Te of u)Qe.includes(Te.image)&&(Te.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Z);else{let Qe=i.RGBA,Te=i.RGBA,yt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Qe,Te,yt,Z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(te.length>0){if(se&&re){let j=Xe(te[0]);t.texStorage2D(i.TEXTURE_2D,We,D,j.width,j.height)}for(let j=0,De=te.length;j<De;j++)z=te[j],se?Ce&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,me,N,z):t.texImage2D(i.TEXTURE_2D,j,D,me,N,z);S.generateMipmaps=!1}else if(se){if(re){let j=Xe(Z);t.texStorage2D(i.TEXTURE_2D,We,D,j.width,j.height)}Ce&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,N,Z)}else t.texImage2D(i.TEXTURE_2D,0,D,me,N,Z);M(S)&&S.mipmapsAutoUpdate===!0&&v(ce),_e.__version=de.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function we(C,S,W){if(S.image.length!==6)return;let ce=Ze(C,S),ne=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+W);let de=n.get(ne);if(ne.version!==de.__version||ce===!0){t.activeTexture(i.TEXTURE0+W);let _e=ct.getPrimaries(ct.workingColorSpace),J=S.colorSpace===ss?null:ct.getPrimaries(S.colorSpace),Z=S.colorSpace===ss||_e===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let me=S.isCompressedTexture||S.image[0].isCompressedTexture,N=S.image[0]&&S.image[0].isDataTexture,D=[];for(let Te=0;Te<6;Te++)!me&&!N?D[Te]=_(S.image[Te],!0,s.maxCubemapSize):D[Te]=N?S.image[Te].image:S.image[Te],D[Te]=ke(S,D[Te]);let z=D[0],te=r.convert(S.format,S.colorSpace),se=r.convert(S.type),re=w(S.internalFormat,te,se,S.normalized,S.colorSpace),Ce=S.isVideoTexture!==!0,We=de.__version===void 0||ce===!0,j=ne.dataReady,De=y(S,z);$e(i.TEXTURE_CUBE_MAP,S);let Qe;if(S.isDepthTexture){if(re=b(S.format===is,S.type),We)if(Ce)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,re,z.width,z.height);else for(let Te=0;Te<6;Te++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,re,z.width,z.height,0,te,se,null)}else if(me){Ce&&We&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,re,z.width,z.height);for(let Te=0;Te<6;Te++){Qe=D[Te].mipmaps;for(let yt=0;yt<Qe.length;yt++){let tn=Qe[yt];S.format!==ni?te!==null?Ce?j&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,yt,0,0,tn.width,tn.height,te,tn.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,yt,re,tn.width,tn.height,0,tn.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,yt,0,0,tn.width,tn.height,te,se,tn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,yt,re,tn.width,tn.height,0,te,se,tn.data)}}}else{if(Qe=S.mipmaps,Ce&&We){Qe.length>0&&De++;let Te=Xe(D[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,re,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(N){Ce?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,D[Te].width,D[Te].height,te,se,D[Te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,re,D[Te].width,D[Te].height,0,te,se,D[Te].data);for(let yt=0;yt<Qe.length;yt++){let yn=Qe[yt].image[Te].image;Ce?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,yt+1,0,0,yn.width,yn.height,te,se,yn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,yt+1,re,yn.width,yn.height,0,te,se,yn.data)}}else{Ce?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,te,se,D[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,re,te,se,D[Te]);for(let yt=0;yt<Qe.length;yt++){let tn=Qe[yt];Ce?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,yt+1,0,0,te,se,tn.image[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,yt+1,re,te,se,tn.image[Te])}}}M(S)&&S.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),de.__version=ne.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function be(C,S,W,ce,ne,de){let _e=r.convert(W.format,W.colorSpace),J=r.convert(W.type),Z=w(W.internalFormat,_e,J,W.normalized,W.colorSpace),me=n.get(S),N=n.get(W);if(N.__renderTarget=S,!me.__hasExternalTextures){let D=Math.max(1,S.width>>de),z=Math.max(1,S.height>>de);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,de,Z,D,z,S.depth,0,_e,J,null):t.texImage2D(ne,de,Z,D,z,0,_e,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),ve(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,ne,N.__webglTexture,0,wt(S)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ce,ne,N.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(C,S,W){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){let ce=S.depthTexture,ne=ce&&ce.isDepthTexture?ce.type:null,de=b(S.stencilBuffer,ne),_e=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ve(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt(S),de,S.width,S.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt(S),de,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,de,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,C)}else{let ce=S.textures;for(let ne=0;ne<ce.length;ne++){let de=ce[ne],_e=r.convert(de.format,de.colorSpace),J=r.convert(de.type),Z=w(de.internalFormat,_e,J,de.normalized,de.colorSpace);ve(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt(S),Z,S.width,S.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt(S),Z,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Z,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(C,S,W){let ce=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=n.get(S.depthTexture);ne.__renderTarget=S;let de=ce?S.depthTexture.image[0]:S.depthTexture.image;(!ne.__webglTexture||de.width!==S.width||de.height!==S.height)&&(de.width=S.width,de.height=S.height,S.depthTexture.needsUpdate=!0),ce?le(S.depthTexture,0):ye(S.depthTexture,0);let _e=ne.__webglTexture,J=wt(S),Z=ce?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,me=S.depthTexture.format===is?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===ji)ve(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,Z,_e,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,me,Z,_e,0);else if(S.depthTexture.format===is)ve(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,Z,_e,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,me,Z,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function je(C){let S=n.get(C),W=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let ce=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ce){let ne=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ce.removeEventListener("dispose",ne)};ce.addEventListener("dispose",ne),S.__depthDisposeCallback=ne}S.__boundDepthTexture=ce}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(W)for(let ce=0;ce<6;ce++)Ie(S.__webglFramebuffer[ce],C,ce);else C.texture.mipmaps.length>0?Ie(S.__webglFramebuffer[0],C,0):Ie(S.__webglFramebuffer,C,0);else if(W){S.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ce]),S.__webglDepthbuffer[ce]===void 0)S.__webglDepthbuffer[ce]=i.createRenderbuffer(),ae(S.__webglDepthbuffer[ce],C,!1);else{let ne=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=S.__webglDepthbuffer[ce];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,de)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ae(S.__webglDepthbuffer,C,!1);else{let ne=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,de)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(C,S,W){let ce=n.get(C);S!==void 0&&be(ce.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&je(C)}function it(C){let S=C.texture,W=n.get(C),ce=n.get(S);C.addEventListener("dispose",I),F(C);let ne=C.textures,de=C.isWebGLCubeRenderTarget===!0,_e=ne.length>1;if(_e||(ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture()),ce.__version=S.version,a.memory.textures++),de){W.__webglFramebuffer=[];for(let J=0;J<6;J++)if(S.mipmaps.length>0){W.__webglFramebuffer[J]=[];for(let Z=0;Z<S.mipmaps.length;Z++)W.__webglFramebuffer[J][Z]=i.createFramebuffer()}else W.__webglFramebuffer[J]=i.createFramebuffer()}else{if(S.mipmaps.length>0){W.__webglFramebuffer=[];for(let J=0;J<S.mipmaps.length;J++)W.__webglFramebuffer[J]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(_e)for(let J=0,Z=ne.length;J<Z;J++){let me=n.get(ne[J]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&ve(C)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let J=0;J<ne.length;J++){let Z=ne[J];W.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[J]);let me=r.convert(Z.format,Z.colorSpace),N=r.convert(Z.type),D=w(Z.internalFormat,me,N,Z.normalized,Z.colorSpace,C.isXRRenderTarget===!0),z=wt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,z,D,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,W.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(W.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,ce.__webglTexture),$e(i.TEXTURE_CUBE_MAP,S);for(let J=0;J<6;J++)if(S.mipmaps.length>0)for(let Z=0;Z<S.mipmaps.length;Z++)be(W.__webglFramebuffer[J][Z],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Z);else be(W.__webglFramebuffer[J],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);M(S)?v(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(_e){for(let J=0,Z=ne.length;J<Z;J++){let me=ne[J],N=n.get(me),D=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(D=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(D,N.__webglTexture),$e(D,me),be(W.__webglFramebuffer,C,me,i.COLOR_ATTACHMENT0+J,D,0),M(me)&&v(D)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,ce.__webglTexture),$e(J,S),S.mipmaps.length>0)for(let Z=0;Z<S.mipmaps.length;Z++)be(W.__webglFramebuffer[Z],C,S,i.COLOR_ATTACHMENT0,J,Z);else be(W.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,J,0);M(S)?v(J):S.mipmaps.length>0&&i.texParameteri(J,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&je(C)}function O(C){let S=C.textures;for(let W=0,ce=S.length;W<ce;W++){let ne=S[W];if(M(ne)&&ne.mipmapsAutoUpdate===!0){let de=E(C),_e=n.get(ne).__webglTexture;t.bindTexture(de,_e),v(de),t.unbindTexture()}}}let Gt=[];function st(C){if(C.samples>0){if(ve(C)===!1){let S=C.textures,W=C.width,ce=C.height,ne=i.COLOR_BUFFER_BIT,de=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(C),J=S.length>1;if(J)for(let me=0;me<S.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let me=0;me<S.length;me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[me]);let N=n.get(S[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,W,ce,0,0,W,ce,ne,i.NEAREST),c===!0&&(Gt.length=0,Gt.push(i.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&Gt.push(de),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Gt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let me=0;me<S.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,_e.__webglColorRenderbuffer[me]);let N=n.get(S[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,N,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function wt(C){return Math.min(s.maxSamples,C.samples)}function ve(C){let S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Lt(C){let S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function ke(C,S){let W=C.colorSpace,ce=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==Dn&&W!==ss&&(ct.getTransfer(W)===Et?(ce!==ni||ne!==Gn)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",W)),S}function Xe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=Ge,this.resetTextureUnits=$,this.getTextureUnits=Q,this.setTextureUnits=ge,this.setTexture2D=ye,this.setTexture2DArray=Re,this.setTexture3D=Ee,this.setTextureCube=le,this.rebindTextures=Je,this.setupRenderTarget=it,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=be,this.useMultisampledRTT=ve,this.dispose=B}function Sy(i,e){function t(n,s=ss){let r,a=ct.getTransfer(s);if(n===Gn)return i.UNSIGNED_BYTE;if(n===Zc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ou)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ru)return i.BYTE;if(n===au)return i.SHORT;if(n===Yr)return i.UNSIGNED_SHORT;if(n===$c)return i.INT;if(n===fi)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===pi)return i.HALF_FLOAT;if(n===lu)return i.ALPHA;if(n===hu)return i.RGB;if(n===ni)return i.RGBA;if(n===ji)return i.DEPTH_COMPONENT;if(n===is)return i.DEPTH_STENCIL;if(n===el)return i.RED;if(n===tl)return i.RED_INTEGER;if(n===Ss)return i.RG;if(n===nl)return i.RG_INTEGER;if(n===il)return i.RGBA_INTEGER;if(n===mo||n===go||n===bo||n===xo)if(a===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sl||n===rl||n===al||n===ol)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cl||n===ll||n===hl||n===ul||n===dl||n===_o||n===fl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===cl||n===ll)return a===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===hl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ul)return r.COMPRESSED_R11_EAC;if(n===dl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===_o)return r.COMPRESSED_RG11_EAC;if(n===fl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===pl||n===ml||n===gl||n===bl||n===xl||n===_l||n===vl||n===yl||n===Ml||n===Sl||n===El||n===Tl||n===wl||n===Al)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ml)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_l)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ml)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===El)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Al)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rl||n===Cl||n===Pl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Rl)return a===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Il||n===Dl||n===vo||n===Ll)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Il)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Ey=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ty=`
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

}`,Bu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Xa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new bn({vertexShader:Ey,fragmentShader:Ty,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new Ft(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zu=class extends Mi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new Bu,p={},_=t.getContextAttributes(),M=null,v=null,E=[],w=[],b=new oe,y=null,F=null,A=new an;A.viewport=new St;let L=new an;L.viewport=new St;let I=[A,L],U=new qc,R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ye=E[Y];return ye===void 0&&(ye=new Nr,E[Y]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(Y){let ye=E[Y];return ye===void 0&&(ye=new Nr,E[Y]=ye),ye.getGripSpace()},this.getHand=function(Y){let ye=E[Y];return ye===void 0&&(ye=new Nr,E[Y]=ye),ye.getHandSpace()};function H(Y){let ye=w.indexOf(Y.inputSource);if(ye===-1)return;let Re=E[ye];Re!==void 0&&(Re.update(Y.inputSource,Y.frame,l||a),Re.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",ie);for(let Y=0;Y<E.length;Y++){let ye=w[Y];ye!==null&&(w[Y]=null,E[Y].disconnect(ye))}R=null,B=null,m.reset();for(let Y in p)delete p[Y];if(e.setRenderTarget(M),f=null,d=null,u=null,s=null,v=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(b.width,b.height,!1),F!==null){let Y=F.camera;Y.fov=F.fov,Y.zoom=F.zoom,Y.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",G),s.addEventListener("inputsourceschange",ie),_.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(b),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Ee=null,le=null;_.depth&&(le=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=_.stencil?is:ji,Ee=_.stencil?Qs:fi);let Pe={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Pe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new jn(d.textureWidth,d.textureHeight,{format:ni,type:Gn,depthTexture:new Yi(d.textureWidth,d.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Re={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Re),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new jn(f.framebufferWidth,f.framebufferHeight,{format:ni,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ge.setContext(s),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(Y){for(let ye=0;ye<Y.removed.length;ye++){let Re=Y.removed[ye],Ee=w.indexOf(Re);Ee>=0&&(w[Ee]=null,E[Ee].disconnect(Re))}for(let ye=0;ye<Y.added.length;ye++){let Re=Y.added[ye],Ee=w.indexOf(Re);if(Ee===-1){for(let Pe=0;Pe<E.length;Pe++)if(Pe>=w.length){w.push(Re),Ee=Pe;break}else if(w[Pe]===null){w[Pe]=Re,Ee=Pe;break}if(Ee===-1)break}let le=E[Ee];le&&le.connect(Re)}}function X(Y,ye){ye===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ye.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ye=Y.near,Re=Y.far;m.texture!==null&&(m.depthNear>0&&(ye=m.depthNear),m.depthFar>0&&(Re=m.depthFar)),U.near=L.near=A.near=ye,U.far=L.far=A.far=Re,(R!==U.near||B!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),R=U.near,B=U.far),U.layers.mask=Y.layers.mask|6,A.layers.mask=U.layers.mask&-5,L.layers.mask=U.layers.mask&-3;let Ee=Y.parent,le=U.cameras;X(U,Ee);for(let Pe=0;Pe<le.length;Pe++)X(le[Pe],Ee);U.projectionMatrix.copy(A.projectionMatrix),U.projectionMatrixInverse.copy(A.projectionMatrixInverse),F===null&&Y.isPerspectiveCamera&&(F={camera:Y,fov:Y.fov,zoom:Y.zoom}),$(Y,U,Ee)};function $(Y,ye,Re){Re===null?Y.matrix.copy(ye.matrixWorld):(Y.matrix.copy(Re.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ye.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ye.projectionMatrix),Y.projectionMatrixInverse.copy(ye.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Os*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Y){return p[Y]};let Q=null;function ge(Y,ye){if(h=ye.getViewerPose(l||a),g=ye,h!==null){let Re=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ee=!1;Re.length!==U.cameras.length&&(U.cameras.length=0,Ee=!0);for(let He=0;He<Re.length;He++){let $e=Re[He],Ze=null;if(f!==null)Ze=f.getViewport($e);else{let ue=u.getViewSubImage(d,$e);Ze=ue.viewport,He===0&&(e.setRenderTargetTextures(v,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(v))}let ee=I[He];ee===void 0&&(ee=new an,ee.layers.enable(He),ee.viewport=new St,I[He]=ee),ee.matrix.fromArray($e.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray($e.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),He===0&&(U.matrix.copy(ee.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ee===!0&&U.cameras.push(ee)}let le=s.enabledFeatures;if(le&&le.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let He=u.getDepthInformation(Re[0]);He&&He.isValid&&He.texture&&m.init(He,s.renderState)}if(le&&le.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let He=0;He<Re.length;He++){let $e=Re[He].camera;if($e){let Ze=p[$e];Ze||(Ze=new Xa,p[$e]=Ze);let ee=u.getCameraImage($e);Ze.sourceTexture=ee}}}}for(let Re=0;Re<E.length;Re++){let Ee=w[Re],le=E[Re];Ee!==null&&le!==void 0&&le.update(Ee,ye,l||a)}Q&&Q(Y,ye),ye.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ye}),g=null}let Ge=new im;Ge.setAnimationLoop(ge),this.setAnimationLoop=function(Y){Q=Y},this.dispose=function(){}}},wy=new Ye,fm=new tt;fm.set(-1,0,0,0,1,0,0,0,1);function Ay(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Mu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,M,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,_,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===hn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===hn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p),M=_.envMap,v=_.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(wy.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(fm),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ry(i,e,t,n){let s={},r={};function a(_,M){let v=M.program;n.uniformBlockBinding(_,v,s[_.id])}function o(_,M){let v=s[_.id];v===void 0&&(g(_),v=c(_),s[_.id]=v,_.addEventListener("dispose",m));let E=M.program;n.updateUBOMapping(_,E);let w=e.render.frame;r[_.id]!==w&&(l(_),r[_.id]=w)}function c(_){let M=i.createBuffer(),v=_.__size,E=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,v,E),i.bindBuffer(i.UNIFORM_BUFFER,null),M}function l(_){let M=s[_.id],v=_.uniforms,E=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let w=0,b=v.length;w<b;w++){let y=v[w];if(Array.isArray(y))for(let F=0,A=y.length;F<A;F++)h(y[F],w,F,E);else h(y,w,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(_,M,v,E){if(d(_,M,v,E)===!0){let w=_.__offset,b=_.value;if(Array.isArray(b)){let y=0;for(let F=0;F<b.length;F++){let A=b[F],L=x(A,!0);u(A,_.__data,y),y+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else u(b,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,_.__data)}}function u(_,M,v){typeof _=="number"||typeof _=="boolean"?M[v]=_:_.isMatrix3?(M[v]=_.elements[0],M[v+1]=_.elements[1],M[v+2]=_.elements[2],M[v+3]=0,M[v+4]=_.elements[3],M[v+5]=_.elements[4],M[v+6]=_.elements[5],M[v+7]=0,M[v+8]=_.elements[6],M[v+9]=_.elements[7],M[v+10]=_.elements[8],M[v+11]=0):ArrayBuffer.isView(_)?M.set(_.subarray(0,M.length-v),v):_.toArray(M,v)}function d(_,M,v,E){let w=_.value,b=M+"_"+v;if(Array.isArray(w)){E[b]===void 0&&(E[b]=[]);let y=E[b],F=!1;for(let A=0;A<w.length;A++)f(w[A],y,A)===!0&&(F=!0);return F}return f(w,E,b)}function f(_,M,v){if(M[v]===void 0)return typeof _=="number"||typeof _=="boolean"?M[v]=_:ArrayBuffer.isView(_)?M[v]=_.slice():M[v]=_.clone(),!0;{let E=M[v];if(typeof _=="number"||typeof _=="boolean"){if(E!==_)return M[v]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(E.equals(_)===!1)return E.copy(_),!0}}return!1}function g(_){let M=_.uniforms,v=0,E=16;for(let b=0,y=M.length;b<y;b++){let F=Array.isArray(M[b])?M[b]:[M[b]];for(let A=0,L=F.length;A<L;A++){let I=F[A],U=Array.isArray(I.value)?I.value:[I.value],R=Array.isArray(M[b])||Array.isArray(I.value),B=v;for(let G=0,ie=U.length;G<ie;G++){let X=U[G],$=x(X,R),Q=v%E,ge=Q%$.boundary,Ge=Q+ge;v+=ge,Ge!==0&&E-Ge<$.storage&&(v+=E-Ge),G===0&&(B=v),v+=$.storage}let H=I.type==="int"?Int32Array:I.type==="uint"?Uint32Array:Float32Array;I.__data=new H((v-B)/Float32Array.BYTES_PER_ELEMENT),I.__offset=B}}let w=v%E;return w>0&&(v+=E-w),_.__size=v,_.__cache={},this}function x(_,M){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=16,v.storage=48):_.isMatrix4?(v.boundary=16,v.storage=64):_.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",_),M===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(_){let M=_.target;M.removeEventListener("dispose",m),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let _ in s)i.deleteBuffer(s[_]);s={},r={}}return{bind:a,update:o,dispose:p}}var Cy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ci=null;function Py(){return Ci===null&&(Ci=new Ur(Cy,16,16,Ss,pi),Ci.name="DFG_LUT",Ci.minFilter=on,Ci.magFilter=on,Ci.wrapS=In,Ci.wrapT=In,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}var Ol=class{constructor(e={}){let{canvas:t=Sp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Gn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=f,m=new Set([il,nl,tl]),p=new Set([Gn,fi,Yr,Qs,Zc,Qc]),_=new Uint32Array(4),M=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},E=null,w=null,b=[],y=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,L=!1,I=null,U=null,R=null,B=null;this._outputColorSpace=Vt;let H=0,G=0,ie=null,X=-1,$=null,Q=new St,ge=new St,Ge=null,Y=new ze(0),ye=0,Re=t.width,Ee=t.height,le=1,Pe=null,vt=null,He=new St(0,0,Re,Ee),$e=new St(0,0,Re,Ee),Ze=!1,ee=new vs,ue=new Ac,fe=!1,we=!1,be=new Ye,ae=new P,Ie=new St,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Je=!1;function it(){return ie===null?le:1}let O=n;function Gt(T,k){return t.getContext(T,k)}let st,wt,ve,Lt,ke,Xe,C,S,W,ce,ne,de,_e,J,Z,me,N,D,z,te,se,re,Ce;try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",Te,!1),O===null){let k="webgl2";if(O=Gt(k,T),O===null)throw Gt(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}We()}catch(T){throw t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Ke("WebGLRenderer: "+T.message),T}function We(){st=new G_(O),st.init(),se=new Sy(O,st),wt=new P_(O,st,e,se),ve=new yy(O,st),wt.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),U=O.createFramebuffer(),R=O.createFramebuffer(),B=O.createFramebuffer(),Lt=new W_(O),ke=new oy,Xe=new My(O,st,ve,ke,wt,se,Lt),C=new z_(A),S=new Xg(O),re=new R_(O,S),W=new H_(O,S,Lt,re),ce=new X_(O,W,S,re,Lt),D=new q_(O,wt,Xe),Z=new I_(ke),ne=new ay(A,C,st,wt,re,Z),de=new Ay(A,ke),_e=new ly,J=new my(st),N=new A_(A,C,ve,ce,g,c),me=new vy(A,ce,wt),Ce=new Ry(O,Lt,wt,ve),z=new C_(O,st,Lt),te=new V_(O,st,Lt),Lt.programs=ne.programs,A.capabilities=wt,A.extensions=st,A.properties=ke,A.renderLists=_e,A.shadowMap=me,A.state=ve,A.info=Lt}x!==Gn&&(F=new K_(x,t.width,t.height,o,s,r));let j=new zu(A,O);this.xr=j,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let T=st.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=st.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(T){T!==void 0&&(le=T,this.setSize(Re,Ee,!1))},this.getSize=function(T){return T.set(Re,Ee)},this.setSize=function(T,k,K=!0){if(j.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}Re=T,Ee=k,t.width=Math.floor(T*le),t.height=Math.floor(k*le),K===!0&&(t.style.width=T+"px",t.style.height=k+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(Re*le,Ee*le).floor()},this.setDrawingBufferSize=function(T,k,K){Re=T,Ee=k,le=K,t.width=Math.floor(T*K),t.height=Math.floor(k*K),this.setViewport(0,0,T,k)},this.setEffects=function(T){if(x===Gn){Ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let k=0;k<T.length;k++)if(T[k].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(Q)},this.getViewport=function(T){return T.copy(He)},this.setViewport=function(T,k,K,V){T.isVector4?He.set(T.x,T.y,T.z,T.w):He.set(T,k,K,V),ve.viewport(Q.copy(He).multiplyScalar(it()).round())},this.getScissor=function(T){return T.copy($e)},this.setScissor=function(T,k,K,V){T.isVector4?$e.set(T.x,T.y,T.z,T.w):$e.set(T,k,K,V),ve.scissor(ge.copy($e).multiplyScalar(it()).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(T){ve.setScissorTest(Ze=T)},this.setOpaqueSort=function(T){Pe=T},this.setTransparentSort=function(T){vt=T},this.getClearColor=function(T){return T.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,K=!0){let V=0;if(T){let q=!1;if(ie!==null){let pe=ie.texture.format;q=m.has(pe)}if(q){let pe=ie.texture.type,Me=p.has(pe),xe=N.getClearColor(),Se=N.getClearAlpha(),Ue=xe.r,et=xe.g,ft=xe.b;Me?(_[0]=Ue,_[1]=et,_[2]=ft,_[3]=Se,O.clearBufferuiv(O.COLOR,0,_)):(M[0]=Ue,M[1]=et,M[2]=ft,M[3]=Se,O.clearBufferiv(O.COLOR,0,M))}else V|=O.COLOR_BUFFER_BIT}k&&(V|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),I=T},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),N.dispose(),_e.dispose(),J.dispose(),Xe.dispose(),ke.dispose(),C.dispose(),ce.dispose(),W.dispose(),re.dispose(),Ce.dispose(),ne.dispose(),j.dispose(),j.removeEventListener("sessionstart",da),j.removeEventListener("sessionend",cs),Ct.stop()};function De(T){T.preventDefault(),Fa("WebGLRenderer: Context Lost."),L=!0}function Qe(){Fa("WebGLRenderer: Context Restored."),L=!1;let T=Lt.autoReset,k=me.enabled,K=me.autoUpdate,V=me.needsUpdate,q=me.type;We(),Lt.autoReset=T,me.enabled=k,me.autoUpdate=K,me.needsUpdate=V,me.type=q}function Te(T){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function yt(T){let k=T.target;k.removeEventListener("dispose",yt),tn(k)}function tn(T){yn(T),ke.remove(T)}function yn(T){let k=ke.get(T).programs;k!==void 0&&(k.forEach(function(K){ne.releaseProgram(K)}),T.isShaderMaterial&&ne.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,K,V,q,pe){k===null&&(k=je);let Me=q.isMesh&&q.matrixWorld.determinantAffine()<0,xe=or(T,k,K,V,q);ve.setMaterial(V,Me);let Se=K.index,Ue=1;if(V.wireframe===!0){if(Se=W.getWireframeAttribute(K),Se===void 0)return;Ue=2}let et=K.drawRange,ft=K.attributes.position,Le=et.start*Ue,pt=(et.start+et.count)*Ue;pe!==null&&(Le=Math.max(Le,pe.start*Ue),pt=Math.min(pt,(pe.start+pe.count)*Ue)),Se!==null?(Le=Math.max(Le,0),pt=Math.min(pt,Se.count)):ft!=null&&(Le=Math.max(Le,0),pt=Math.min(pt,ft.count));let nn=pt-Le;if(nn<0||nn===1/0)return;re.setup(q,V,xe,K,Se);let Nt,Pt=z;if(Se!==null&&(Nt=S.get(Se),Pt=te,Pt.setIndex(Nt)),q.isMesh)V.wireframe===!0?(ve.setLineWidth(V.wireframeLinewidth*it()),Pt.setMode(O.LINES)):Pt.setMode(O.TRIANGLES);else if(q.isLine){let Mn=V.linewidth;Mn===void 0&&(Mn=1),ve.setLineWidth(Mn*it()),q.isLineSegments?Pt.setMode(O.LINES):q.isLineLoop?Pt.setMode(O.LINE_LOOP):Pt.setMode(O.LINE_STRIP)}else q.isPoints?Pt.setMode(O.POINTS):q.isSprite&&Pt.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(st.get("WEBGL_multi_draw"))Pt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Mn=q._multiDrawStarts,Ne=q._multiDrawCounts,Cn=q._multiDrawCount,Mt=Se?S.get(Se).bytesPerElement:1,As=ke.get(V).currentProgram.getUniforms();for(let Sn=0;Sn<Cn;Sn++)As.setValue(O,"_gl_DrawID",Sn),Pt.render(Mn[Sn]/Mt,Ne[Sn])}else if(q.isInstancedMesh)Pt.renderInstances(Le,nn,q.count);else if(K.isInstancedBufferGeometry){let Mn=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ne=Math.min(K.instanceCount,Mn);Pt.renderInstances(Le,nn,Ne)}else Pt.render(Le,nn)};function ua(T,k,K,V){I!==null&&T.isNodeMaterial&&I.setObject(V,T),fe===!0&&Z.setState(T,K,!1),T.transparent===!0&&T.side===Xt&&T.forceSinglePass===!1?(T.side=hn,T.needsUpdate=!0,Oi(T,k,V),T.side=Ai,T.needsUpdate=!0,Oi(T,k,V),T.side=Xt):Oi(T,k,V)}this.compile=function(T,k,K=null){K===null&&(K=T),I!==null&&I.renderStart(T,k,K),w=J.get(K),w.init(k),y.push(w),K.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),T!==K&&T.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),w.setupLights(),I!==null&&I.updateLights(w.state.lightsArray),we=this.localClippingEnabled,fe=Z.init(this.clippingPlanes,we),fe===!0&&Z.setGlobalState(this.clippingPlanes,k),I!==null&&me.render(w.state.shadowsArray,K,k);let V=new Set;return T.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let pe=q.material;if(pe)if(Array.isArray(pe))for(let Me=0;Me<pe.length;Me++){let xe=pe[Me];ua(xe,K,k,q),V.add(xe)}else ua(pe,K,k,q),V.add(pe)}),w=y.pop(),I!==null&&I.renderEnd(),V},this.compileAsync=function(T,k,K=null){let V=this.compile(T,k,K);return new Promise(q=>{function pe(){if(V.forEach(function(Me){let Se=ke.get(Me).currentProgram;(Se===void 0||Se.isReady())&&V.delete(Me)}),V.size===0){q(T);return}setTimeout(pe,10)}st.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let os=null;function Ui(T){os&&os(T)}function da(){Ct.stop()}function cs(){Ct.start()}let Ct=new im;Ct.setAnimationLoop(Ui),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(T){os=T,j.setAnimationLoop(T),T===null?Ct.stop():Ct.start()},j.addEventListener("sessionstart",da),j.addEventListener("sessionend",cs),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;I!==null&&I.renderStart(T,k);let K=j.enabled===!0&&j.isPresenting===!0,V=F!==null&&(ie===null||K)&&F.begin(A,ie);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(j.cameraAutoUpdate===!0&&j.updateCamera(k),k=j.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,k,ie),w=J.get(T,y.length),w.init(k),w.state.textureUnits=Xe.getTextureUnits(),y.push(w),be.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?ue.setFromArrayCamera(k):ee.setFromProjectionMatrix(be,Zn,k.reversedDepth),we=this.localClippingEnabled,fe=Z.init(this.clippingPlanes,we),E=_e.get(T,b.length),E.init(),b.push(E),this.info.render.frame++,j.enabled===!0&&j.isPresenting===!0){let Me=A.xr.getDepthSensingMesh();Me!==null&&Jt(Me,k,-1/0,A.sortObjects)}Jt(T,k,0,A.sortObjects),E.finish(),I!==null&&I.updateLights(w.state.lightsArray),A.sortObjects===!0&&E.sort(Pe,vt),Je=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Je&&N.addToRenderList(E,T),this.info.autoReset===!0&&this.info.reset(),fe===!0&&Z.beginShadows();let q=w.state.shadowsArray;if(me.render(q,T,k),fe===!0&&Z.endShadows(),(V&&F.hasRenderPass())===!1){let Me=E.opaque,xe=E.transmissive;if(w.setupLights(),k.isArrayCamera){let Se=k.cameras;if(xe.length>0)for(let Ue=0,et=Se.length;Ue<et;Ue++){let ft=Se[Ue];fa(Me,xe,T,ft)}Je&&N.render(T);for(let Ue=0,et=Se.length;Ue<et;Ue++){let ft=Se[Ue];On(E,T,ft,ft.viewport)}}else xe.length>0&&fa(Me,xe,T,k),Je&&N.render(T),On(E,T,k)}ie!==null&&G===0&&(Xe.updateMultisampleRenderTarget(ie),Xe.updateRenderTargetMipmap(ie)),V&&F.end(A),T.isScene===!0&&T.onAfterRender(A,T,k),re.resetDefaultState(),X=-1,$=null,y.pop(),y.length>0?(w=y[y.length-1],Xe.setTextureUnits(w.state.textureUnits),fe===!0&&Z.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,b.pop(),b.length>0?E=b[b.length-1]:E=null,I!==null&&I.renderEnd()};function Jt(T,k,K,V){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){let Me=k.isArrayCamera?ue:ee;if(!T.frustumCulled||T.intersectsFrustum(Me)){V&&Ie.setFromMatrixPosition(T.matrixWorld).applyMatrix4(be);let xe=ce.update(T),Se=T.material;Se.visible&&E.push(T,xe,Se,K,Ie.z,null,k)}}else if(T.isMesh||T.isLine||T.isPoints){let Me=k.isArrayCamera?ue:ee;if(!T.frustumCulled||T.intersectsFrustum(Me)){let xe=ce.update(T),Se=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ie.copy(T.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ie.copy(xe.boundingSphere.center)),Ie.applyMatrix4(T.matrixWorld).applyMatrix4(be)),Array.isArray(Se)){let Ue=xe.groups;for(let et=0,ft=Ue.length;et<ft;et++){let Le=Ue[et],pt=Se[Le.materialIndex];pt&&pt.visible&&E.push(T,xe,pt,K,Ie.z,Le,k)}}else Se.visible&&E.push(T,xe,Se,K,Ie.z,null,k)}}}let pe=T.children;for(let Me=0,xe=pe.length;Me<xe;Me++)Jt(pe[Me],k,K,V)}function On(T,k,K,V){let{opaque:q,transmissive:pe,transparent:Me}=T;w.setupLightsView(K),fe===!0&&Z.setGlobalState(A.clippingPlanes,K),V&&ve.viewport(Q.copy(V)),q.length>0&&_i(q,k,K),pe.length>0&&_i(pe,k,K),Me.length>0&&_i(Me,k,K),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function fa(T,k,K,V){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){let Le=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new jn(1,1,{generateMipmaps:!0,type:Le?pi:Gn,minFilter:ti,samples:Math.max(4,wt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let pe=w.state.transmissionRenderTarget[V.id],Me=V.viewport||Q;pe.setSize(Me.z*A.transmissionResolutionScale,Me.w*A.transmissionResolutionScale);let xe=A.getRenderTarget(),Se=A.getActiveCubeFace(),Ue=A.getActiveMipmapLevel();A.setRenderTarget(pe),A.getClearColor(Y),ye=A.getClearAlpha(),ye<1&&A.setClearColor(16777215,.5),A.clear(),Je&&N.render(K);let et=A.toneMapping;A.toneMapping=Ri;let ft=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),fe===!0&&Z.setGlobalState(A.clippingPlanes,V),_i(T,K,V),Xe.updateMultisampleRenderTarget(pe),Xe.updateRenderTargetMipmap(pe),st.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let pt=0,nn=k.length;pt<nn;pt++){let Nt=k[pt],{object:Pt,geometry:Mn,material:Ne,group:Cn}=Nt;if(Ne.side===Xt&&Pt.layers.test(V.layers)){let Mt=Ne.side;Ne.side=hn,Ne.needsUpdate=!0,pa(Pt,K,V,Mn,Ne,Cn),Ne.side=Mt,Ne.needsUpdate=!0,Le=!0}}Le===!0&&(Xe.updateMultisampleRenderTarget(pe),Xe.updateRenderTargetMipmap(pe))}A.setRenderTarget(xe,Se,Ue),A.setClearColor(Y,ye),ft!==void 0&&(V.viewport=ft),A.toneMapping=et}function _i(T,k,K){let V=k.isScene===!0?k.overrideMaterial:null;for(let q=0,pe=T.length;q<pe;q++){let Me=T[q],{object:xe,geometry:Se,group:Ue}=Me,et=Me.material;et.allowOverride===!0&&V!==null&&(et=V),xe.layers.test(K.layers)&&pa(xe,k,K,Se,et,Ue)}}function pa(T,k,K,V,q,pe){I!==null&&q.isNodeMaterial&&I.setObject(T,q),T.onBeforeRender(A,k,K,V,q,pe),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(A,k,K,V,T,pe),q.transparent===!0&&q.side===Xt&&q.forceSinglePass===!1?(q.side=hn,q.needsUpdate=!0,A.renderBufferDirect(K,k,V,q,T,pe),q.side=Ai,q.needsUpdate=!0,A.renderBufferDirect(K,k,V,q,T,pe),q.side=Xt):A.renderBufferDirect(K,k,V,q,T,pe),T.onAfterRender(A,k,K,V,q,pe)}function Ut(T){let k=0;for(let K of T)K.texture!==null&&k++;return k}function Oi(T,k,K){k.isScene!==!0&&(k=je);let V=ke.get(T),q=w.state.lights,pe=w.state.shadowsArray,Me=q.state.version,xe=ne.getParameters(T,q.state,pe,k,K,w.state.lightProbeGridArray),Se=ne.getProgramCacheKey(xe),Ue=V.programs;V.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,V.fog=k.fog;let et=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;V.envMap=C.get(T.envMap||V.environment,et),V.envMapRotation=V.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Ue===void 0&&(T.addEventListener("dispose",yt),Ue=new Map,V.programs=Ue,V.programVariants=new Map);let ft=Ue.get(Se);if(ft!==void 0){if(V.currentProgram===ft&&V.lightsStateVersion===Me)return ar(T,xe),ft}else xe.uniforms=ne.getUniforms(T),I!==null&&T.isNodeMaterial&&I.build(T,K,xe),T.onBeforeCompile(xe,A),ft=ne.acquireProgram(xe,Se),Ue.set(Se,ft),V.uniforms=xe.uniforms;let Le=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Le.clippingPlanes=Z.uniform),ar(T,xe),V.needsLights=ma(T),V.lightsStateVersion=Me,V.needsLights&&(Le.ambientLightColor.value=q.state.ambient,Le.lightProbe.value=q.state.probe,Le.sunLights.value=q.state.sun,Le.sunLightShadows.value=q.state.sunShadow,Le.directionalLights.value=q.state.directional,Le.directionalLightShadows.value=q.state.directionalShadow,Le.spotLights.value=q.state.spot,Le.spotLightShadows.value=q.state.spotShadow,Le.rectAreaLights.value=q.state.rectArea,Le.ltc_1.value=q.state.rectAreaLTC1,Le.ltc_2.value=q.state.rectAreaLTC2,Le.pointLights.value=q.state.point,Le.pointLightShadows.value=q.state.pointShadow,Le.hemisphereLights.value=q.state.hemi,Le.sunShadowMatrix.value=q.state.sunShadowMatrix,Le.sunShadowCascade.value=q.state.sunShadowCascade,Le.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Le.spotLightMatrix.value=q.state.spotLightMatrix,Le.spotLightMap.value=q.state.spotLightMap,Le.pointShadowMatrix.value=q.state.pointShadowMatrix),V.numLightProbeGrids=Ut(w.state.lightProbeGridArray),V.currentProgram=ft,V.uniformsList=null,ft}function Oo(T,k,K,V,q){let pe=ke.get(T),Me=pe.currentProgram.id+","+V+","+q,xe=pe.programVariants.get(Me);return xe===void 0?(xe=Oi(T,k,K),pe.programVariants.set(Me,xe)):(pe.currentProgram=xe,pe.uniformsList=null,pe.outputColorSpace=V,pe.toneMapping=q),xe}function nh(T){if(T.uniformsList===null){let k=T.currentProgram.getUniforms();T.uniformsList=Zr.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function ar(T,k){let K=ke.get(T);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.batchingColor=k.batchingColor,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function or(T,k,K,V,q){k.isScene!==!0&&(k=je),Xe.resetTextureUnits();let pe=k.fog,Me=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?k.environment:null,xe=ie===null?A.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:ct.workingColorSpace,Se=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ue=C.get(V.envMap||Me,Se),et=V.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ft=!!K.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Le=!!K.morphAttributes.position,pt=!!K.morphAttributes.normal,nn=!!K.morphAttributes.color,Nt=Ri;V.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Nt=A.toneMapping);let Pt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Mn=Pt!==void 0?Pt.length:0,Ne=ke.get(V),Cn=w.state.lights;if(fe===!0&&(we===!0||T!==$)){let Ht=T===$&&V.id===X;Z.setState(V,T,Ht)}let Mt=!1,As=!1;V.version===Ne.__version?Ne.needsLights&&Ne.lightsStateVersion!==Cn.state.version||q.isBatchedMesh&&Ne.batching===!1||!q.isBatchedMesh&&Ne.batching===!0||q.isBatchedMesh&&Ne.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Ne.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Ne.instancing===!1||!q.isInstancedMesh&&Ne.instancing===!0||q.isSkinnedMesh&&Ne.skinning===!1||!q.isSkinnedMesh&&Ne.skinning===!0||q.isInstancedMesh&&Ne.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ne.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ne.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ne.instancingMorph===!1&&q.morphTexture!==null||Ne.envMap!==Ue||V.fog===!0&&Ne.fog!==pe||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==Z.numPlanes||Ne.numIntersection!==Z.numIntersection)||Ne.vertexAlphas!==et||Ne.vertexTangents!==ft||Ne.morphTargets!==Le||Ne.morphNormals!==pt||Ne.morphColors!==nn||Ne.morphTargetsCount!==Mn||Ne.numLightProbeGrids!==Ut(w.state.lightProbeGridArray)?Mt=!0:(Ne.outputColorSpace!==xe||Ne.toneMapping!==Nt)&&(As=!0):(Mt=!0,Ne.__version=V.version);let Sn=Ne.currentProgram;(Mt===!0||As===!0)&&(Sn=As===!0?Oo(V,k,q,xe,Nt):Oi(V,k,q),I&&V.isNodeMaterial&&I.onUpdateProgram(V,Sn,Ne));let ko=!1,hs=!1,Rs=!1,gt=Sn.getUniforms(),gn=Ne.uniforms;if(ve.useProgram(Sn.program)&&(ko=!0,hs=!0,Rs=!0),V.id!==X&&(X=V.id,hs=!0),ko||$!==T){ve.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),gt.setValue(O,"projectionMatrix",T.projectionMatrix),gt.setValue(O,"viewMatrix",T.matrixWorldInverse);let pn=gt.map.cameraPosition;pn!==void 0&&pn.setValue(O,ae.setFromMatrixPosition(T.matrixWorld)),wt.logarithmicDepthBuffer&&gt.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&gt.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),$!==T&&($=T,hs=!0,Rs=!0)}if(Ne.needsLights&&(Cn.state.sunShadowMap.length>0&&gt.setValue(O,"sunShadowMap",Cn.state.sunShadowMap,Xe),Cn.state.directionalShadowMap.length>0&&gt.setValue(O,"directionalShadowMap",Cn.state.directionalShadowMap,Xe),Cn.state.spotShadowMap.length>0&&gt.setValue(O,"spotShadowMap",Cn.state.spotShadowMap,Xe),Cn.state.pointShadowMap.length>0&&gt.setValue(O,"pointShadowMap",Cn.state.pointShadowMap,Xe)),q.isSkinnedMesh){gt.setOptional(O,q,"bindMatrix"),gt.setOptional(O,q,"bindMatrixInverse");let Ht=q.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),gt.setValue(O,"boneTexture",Ht.boneTexture,Xe))}q.isBatchedMesh&&(gt.setOptional(O,q,"batchingTexture"),gt.setValue(O,"batchingTexture",q._matricesTexture,Xe),gt.setOptional(O,q,"batchingIdTexture"),gt.setValue(O,"batchingIdTexture",q._indirectTexture,Xe),gt.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&gt.setValue(O,"batchingColorTexture",q._colorsTexture,Xe));let oi=K.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&D.update(q,K,Sn),(hs||Ne.receiveShadow!==q.receiveShadow)&&(Ne.receiveShadow=q.receiveShadow,gt.setValue(O,"receiveShadow",q.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&k.environment!==null&&(gn.envMapIntensity.value=k.environmentIntensity),gn.dfgLUT!==void 0&&(gn.dfgLUT.value=Py()),hs){if(gt.setValue(O,"toneMappingExposure",A.toneMappingExposure),Ne.needsLights&&ls(gn,Rs),pe&&V.fog===!0&&de.refreshFogUniforms(gn,pe),de.refreshMaterialUniforms(gn,V,le,Ee,w.state.transmissionRenderTarget[T.id]),Ne.needsLights&&Ne.numLightProbeGrids>0){let Ht=v,pn=0;for(let ki of w.state.lightProbeGridArray)ki.texture!==null&&(Ht.textures[pn]=ki.texture,Ht.min[pn]=ki.boundingBox.min,Ht.max[pn]=ki.boundingBox.max,Ht.resolution[pn]=ki.resolution,pn++);for(let ki in Ht)Ht[ki].length=pn;gn.probesSH.value=Ht.textures,gn.probesMin.value=Ht.min,gn.probesMax.value=Ht.max,gn.probesResolution.value=Ht.resolution}Zr.upload(O,nh(Ne),gn,Xe)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Zr.upload(O,nh(Ne),gn,Xe),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&gt.setValue(O,"center",q.center),gt.setValue(O,"modelViewMatrix",q.modelViewMatrix),gt.setValue(O,"normalMatrix",q.normalMatrix),gt.setValue(O,"modelMatrix",q.matrixWorld),V.uniformsGroups!==void 0){let Ht=V.uniformsGroups;for(let pn=0,ki=Ht.length;pn<ki;pn++){let Xd=Ht[pn];Ce.update(Xd,Sn),Ce.bind(Xd,Sn)}}return Sn}function ls(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.sunLights.needsUpdate=k,T.sunLightShadows.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function ma(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(T,k,K){let V=ke.get(T);V.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),ke.get(T.texture).__webglTexture=k,ke.get(T.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:K,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){let K=ke.get(T);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,K=0){ie=T,H=k,G=K;let V=null,q=!1,pe=!1;if(T){let xe=ke.get(T);if(xe.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(O.FRAMEBUFFER,xe.__webglFramebuffer),Q.copy(T.viewport),ge.copy(T.scissor),Ge=T.scissorTest,ve.viewport(Q),ve.scissor(ge),ve.setScissorTest(Ge),X=-1;return}else if(xe.__webglFramebuffer===void 0)Xe.setupRenderTarget(T);else if(xe.__hasExternalTextures)Xe.rebindTextures(T,ke.get(T.texture).__webglTexture,ke.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let et=T.depthTexture;if(xe.__boundDepthTexture!==et){if(et!==null&&ke.has(et)&&(T.width!==et.image.width||T.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(T)}}let Se=T.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(pe=!0);let Ue=ke.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ue[k])?V=Ue[k][K]:V=Ue[k],q=!0):T.samples>0&&Xe.useMultisampledRTT(T)===!1?V=ke.get(T).__webglMultisampledFramebuffer:Array.isArray(Ue)?V=Ue[K]:V=Ue,Q.copy(T.viewport),ge.copy(T.scissor),Ge=T.scissorTest}else Q.copy(He).multiplyScalar(le).floor(),ge.copy($e).multiplyScalar(le).floor(),Ge=Ze;if(K!==0&&(V=U),ve.bindFramebuffer(O.FRAMEBUFFER,V)&&ve.drawBuffers(T,V),ve.viewport(Q),ve.scissor(ge),ve.setScissorTest(Ge),q){let xe=ke.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,xe.__webglTexture,K)}else if(pe){let xe=k;for(let Se=0;Se<T.textures.length;Se++){let Ue=ke.get(T.textures[Se]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Se,Ue.__webglTexture,K,xe)}}else if(T!==null&&K!==0){let xe=ke.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,xe.__webglTexture,K)}X=-1};function ga(T){let k=ke.get(T);return(k.__readFormat!==T.format||k.__readType!==T.type)&&(k.__readFormat=T.format,k.__readType=T.type,k.__formatReadable=wt.textureFormatReadable(T.format),k.__typeReadable=wt.textureTypeReadable(T.type)),k}this.readRenderTargetPixels=function(T,k,K,V,q,pe,Me,xe=0){if(!(T&&T.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Se=Se[Me],Array.isArray(Se)&&(Se=Se[0])),Se){ve.bindFramebuffer(O.FRAMEBUFFER,Se);try{let Ue=T.textures[xe],et=Ue.format,ft=Ue.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+xe);let Le=ga(Ue);if(Le.__formatReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-V&&K>=0&&K<=T.height-q&&O.readPixels(k,K,V,q,se.convert(et),se.convert(ft),pe)}finally{let Ue=ie!==null?ke.get(ie).__webglFramebuffer:null;ve.bindFramebuffer(O.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(T,k,K,V,q,pe,Me,xe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Se=Se[Me],Array.isArray(Se)&&(Se=Se[0])),Se)if(k>=0&&k<=T.width-V&&K>=0&&K<=T.height-q){ve.bindFramebuffer(O.FRAMEBUFFER,Se);let Ue=T.textures[xe],et=Ue.format,ft=Ue.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+xe);let Le=ga(Ue);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,pt),O.bufferData(O.PIXEL_PACK_BUFFER,pe.byteLength,O.STREAM_READ),O.readPixels(k,K,V,q,se.convert(et),se.convert(ft),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let nn=ie!==null?ke.get(ie).__webglFramebuffer:null;ve.bindFramebuffer(O.FRAMEBUFFER,nn);let Nt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Tp(O,Nt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,pt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,pe),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(pt),O.deleteSync(Nt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,K=0){let V=Math.pow(2,-K),q=Math.floor(T.image.width*V),pe=Math.floor(T.image.height*V),Me=k!==null?k.x:0,xe=k!==null?k.y:0;Xe.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,K,0,0,Me,xe,q,pe),ve.unbindTexture()},this.copyTextureToTexture=function(T,k,K=null,V=null,q=0,pe=0){let Me,xe,Se,Ue,et,ft,Le,pt,nn,Nt=T.isCompressedTexture?T.mipmaps[pe]:T.image;if(K!==null)Me=K.max.x-K.min.x,xe=K.max.y-K.min.y,Se=K.isBox3?K.max.z-K.min.z:1,Ue=K.min.x,et=K.min.y,ft=K.isBox3?K.min.z:0;else{let gt=Math.pow(2,-q);Me=Math.floor(Nt.width*gt),xe=Math.floor(Nt.height*gt),T.isDataArrayTexture?Se=Nt.depth:T.isData3DTexture?Se=Math.floor(Nt.depth*gt):Se=1,Ue=0,et=0,ft=0}V!==null?(Le=V.x,pt=V.y,nn=V.z):(Le=0,pt=0,nn=0);let Pt=se.convert(k.format),Mn=se.convert(k.type),Ne;k.isData3DTexture?(Xe.setTexture3D(k,0),Ne=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Xe.setTexture2DArray(k,0),Ne=O.TEXTURE_2D_ARRAY):(Xe.setTexture2D(k,0),Ne=O.TEXTURE_2D),ve.activeTexture(O.TEXTURE0),ve.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),ve.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),ve.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);let Cn=ve.getParameter(O.UNPACK_ROW_LENGTH),Mt=ve.getParameter(O.UNPACK_IMAGE_HEIGHT),As=ve.getParameter(O.UNPACK_SKIP_PIXELS),Sn=ve.getParameter(O.UNPACK_SKIP_ROWS),ko=ve.getParameter(O.UNPACK_SKIP_IMAGES);ve.pixelStorei(O.UNPACK_ROW_LENGTH,Nt.width),ve.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Nt.height),ve.pixelStorei(O.UNPACK_SKIP_PIXELS,Ue),ve.pixelStorei(O.UNPACK_SKIP_ROWS,et),ve.pixelStorei(O.UNPACK_SKIP_IMAGES,ft);let hs=T.isDataArrayTexture||T.isData3DTexture,Rs=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){let gt=ke.get(T),gn=ke.get(k),oi=ke.get(gt.__renderTarget),Ht=ke.get(gn.__renderTarget);ve.bindFramebuffer(O.READ_FRAMEBUFFER,oi.__webglFramebuffer),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let pn=0;pn<Se;pn++)hs&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ke.get(T).__webglTexture,q,ft+pn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ke.get(k).__webglTexture,pe,nn+pn)),O.blitFramebuffer(Ue,et,Ue+Me,et+xe,Le,pt,Le+Me,pt+xe,O.DEPTH_BUFFER_BIT,O.NEAREST);ve.bindFramebuffer(O.READ_FRAMEBUFFER,null),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||T.isRenderTargetTexture||ke.has(T)){let gt=ke.get(T),gn=ke.get(k);ve.bindFramebuffer(O.READ_FRAMEBUFFER,R),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,B);for(let oi=0;oi<Se;oi++)hs?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,gt.__webglTexture,q,ft+oi):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,gt.__webglTexture,q),Rs?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,gn.__webglTexture,pe,nn+oi):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,gn.__webglTexture,pe),q!==0?O.blitFramebuffer(Ue,et,Ue+Me,et+xe,Le,pt,Le+Me,pt+xe,O.COLOR_BUFFER_BIT,O.NEAREST):Rs?O.copyTexSubImage3D(Ne,pe,Le,pt,nn+oi,Ue,et,Me,xe):O.copyTexSubImage2D(Ne,pe,Le,pt,Ue,et,Me,xe);ve.bindFramebuffer(O.READ_FRAMEBUFFER,null),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Rs?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(Ne,pe,Le,pt,nn,Me,xe,Se,Pt,Mn,Nt.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(Ne,pe,Le,pt,nn,Me,xe,Se,Pt,Nt.data):O.texSubImage3D(Ne,pe,Le,pt,nn,Me,xe,Se,Pt,Mn,Nt):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,pe,Le,pt,Me,xe,Pt,Mn,Nt.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,pe,Le,pt,Nt.width,Nt.height,Pt,Nt.data):O.texSubImage2D(O.TEXTURE_2D,pe,Le,pt,Me,xe,Pt,Mn,Nt);ve.pixelStorei(O.UNPACK_ROW_LENGTH,Cn),ve.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Mt),ve.pixelStorei(O.UNPACK_SKIP_PIXELS,As),ve.pixelStorei(O.UNPACK_SKIP_ROWS,Sn),ve.pixelStorei(O.UNPACK_SKIP_IMAGES,ko),pe===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&O.generateMipmap(Ne),ve.unbindTexture()},this.initRenderTarget=function(T){ke.get(T).__webglFramebuffer===void 0&&Xe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Xe.setTextureCube(T,0):T.isData3DTexture?Xe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Xe.setTexture2DArray(T,0):Xe.setTexture2D(T,0),ve.unbindTexture()},this.resetState=function(){H=0,G=0,ie=null,ve.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var zl=class extends ks{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new kt;e.deleteAttribute("uv");let t=new ei({side:hn}),n=new ei,s=new xn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ut(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Si(e,n,6),o=new Dt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new ut(e,ta(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new ut(e,ta(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new ut(e,ta(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new ut(e,ta(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new ut(e,ta(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new ut(e,ta(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ta(i){return new ro({color:0,emissive:16777215,emissiveIntensity:i})}var Ao=new P;function ii(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Ao.copy(e),Ao[n]=0,Ao.normalize();let l=.5*a/(a+o),h=1-Ao.angleTo(i)/c;return Math.sign(Ao[t])===1?h*l:o/(a+o)+l+l*(1-h)}var na=class i extends kt{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new P,l=new P,h=new P(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,x=new P,m=.5/a;for(let p=0,_=0;p<u.length;p+=3,_+=2)switch(c.fromArray(u,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),u[p+0]=h.x*Math.sign(c.x)+l.x*r,u[p+1]=h.y*Math.sign(c.y)+l.y*r,u[p+2]=h.z*Math.sign(c.z)+l.z*r,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/g)){case 0:x.set(1,0,0),f[_+0]=ii(x,l,"z","y",r,n),f[_+1]=1-ii(x,l,"y","z",r,t);break;case 1:x.set(-1,0,0),f[_+0]=1-ii(x,l,"z","y",r,n),f[_+1]=1-ii(x,l,"y","z",r,t);break;case 2:x.set(0,1,0),f[_+0]=1-ii(x,l,"x","z",r,e),f[_+1]=ii(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),f[_+0]=1-ii(x,l,"x","z",r,e),f[_+1]=1-ii(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),f[_+0]=1-ii(x,l,"x","y",r,e),f[_+1]=1-ii(x,l,"y","x",r,t);break;case 5:x.set(0,0,-1),f[_+0]=ii(x,l,"x","y",r,e),f[_+1]=1-ii(x,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function Gu(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Tt;c.morphTargetsRelative=o;let l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0,f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in u.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(u.attributes[g]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in u.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[g].length!==i[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;a[g]===void 0&&(a[g]=[]),a[g].push(u.morphAttributes[g]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=u.index.count;else if(u.attributes.position!==void 0)g=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,g,h),l+=g}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=pm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let g=pm(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function pm(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new qt(a,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let x=h.getComponent(d,g);o.setComponent(d+u,g,x)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function Hu(i,e){if(e===uu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===$r||e===yo){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===$r)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function mm(i){let e=new Map,t=new Map,n=i.clone();return gm(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function gm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)gm(i.children[n],e.children[n],t)}var Gl=class extends wi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ju(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new $u(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new Ku(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new Xu(t)}),this.register(function(t){return new Hl(t,lt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Hl(t,lt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new ld(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=ns.extractUrlBase(e);a=ns.resolveURL(l,this.path)}else a=ns.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Vr(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===ym){try{a[lt.KHR_BINARY_GLTF]=new hd(e)}catch(u){s&&s(u);return}r=JSON.parse(a[lt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new bd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case lt.KHR_MATERIALS_UNLIT:a[u]=new ju;break;case lt.KHR_DRACO_MESH_COMPRESSION:a[u]=new ud(r,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:a[u]=new dd;break;case lt.KHR_MESH_QUANTIZATION:a[u]=new fd;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Dy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Kt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Xu=class{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new ze(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Dn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new js(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new xn(h),l.distance=u;break;case"spot":l=new ho(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Ii(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},ju=class{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return Zt}extendParams(e,t,n){let s=[];e.color=new ze(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Dn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Vt))}return Promise.all(s)}},Ku=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Ju=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new oe(r,r)}return Promise.all(s)}},Yu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},$u=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Zu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Qu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Dn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Vt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},ed=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},td=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(r[0],r[1],r[2],Dn),Promise.all(s)}},nd=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},id=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(r[0],r[1],r[2],Dn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Vt)),Promise.all(s)}},sd=class{constructor(e){this.parser=e,this.name=lt.EXT_MATERIALS_BUMP}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},rd=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},ad=class{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},od=class{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},cd=class{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Hl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},ld=class{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==si.TRIANGLES&&l.mode!==si.TRIANGLE_STRIP&&l.mode!==si.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let x=new Ye,m=new P,p=new rn,_=new P(1,1,1),M=new Si(g.geometry,g.material,d);for(let E=0;E<d;E++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,E),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,E),c.SCALE&&_.fromBufferAttribute(c.SCALE,E),M.setMatrixAt(E,x.compose(m,p,_));let v=null;for(let E in c)if(E==="_COLOR_0"){let w=c[E];M.instanceColor=new Ki(w.array,w.itemSize,w.normalized)}else if(E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"){if(v===null){let b=M.geometry;v=new Tt,v.name=b.name;for(let y in b.attributes)v.setAttribute(y,b.attributes[y]);for(let y in b.morphAttributes)v.morphAttributes[y]=b.morphAttributes[y];b.index!==null&&v.setIndex(b.index),v.morphTargetsRelative=b.morphTargetsRelative;for(let y of b.groups)v.addGroup(y.start,y.count,y.materialIndex);b.boundingBox!==null&&(v.boundingBox=b.boundingBox.clone()),b.boundingSphere!==null&&(v.boundingSphere=b.boundingSphere.clone()),v.drawRange.start=b.drawRange.start,v.drawRange.count=b.drawRange.count,v.userData=Object.assign({},b.userData),M.geometry=v}let w=c[E];v.setAttribute(E,new Ki(w.array,w.itemSize,w.normalized))}Dt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},ym="glTF",Ro=12,bm={JSON:1313821514,BIN:5130562},hd=class{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ro),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ym)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ro,r=new DataView(e,Ro),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===bm.JSON){let l=new Uint8Array(e,Ro+a,o);this.content=n.decode(l)}else if(c===bm.BIN){let l=Ro+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ud=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=md[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=md[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=ia[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}u(f)},o,l,Dn,d)})})}},dd=class{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},fd=class{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}},Vl=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,x=g-l,m=-2*f+3*d,p=f-d,_=1-m,M=p-d+u;for(let v=0;v!==o;v++){let E=a[x+v+o],w=a[x+v+c]*h,b=a[g+v+o],y=a[g+v]*h;r[v]=_*E+M*w+m*b+p*y}return r}},Ly=new rn,pd=class extends Vl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Ly.fromArray(r).normalize().toArray(r),r}},si={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ia={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},xm={9728:$t,9729:on,9984:Yc,9985:Jr,9986:Zs,9987:ti},_m={33071:In,33648:Rr,10497:di},Vu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},md={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Es={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ny={CUBICSPLINE:void 0,LINEAR:Us,STEP:Fs},Wu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Fy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ei({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ai})),i.DefaultMaterial}function tr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ii(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Uy(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Oy(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ky(i){let e,t=i.extensions&&i.extensions[lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+qu(t.attributes):e=i.indices+":"+qu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+qu(i.targets[n]);return e}function qu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function gd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function By(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var zy=new Ye,bd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Dy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?(this.textureLoader=new Ws(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new uo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Vr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return tr(r,o,s),Ii(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(ns.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Vu[s.type],o=ia[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new qt(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Vu[s.type],l=ia[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(f&&f!==u){let p=Math.floor(d/f),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,M=t.cache.get(_);M||(x=new l(o,p*f,s.count*f/h),M=new Bs(x,f/h),t.cache.add(_,M)),m=new bs(M,c,d%f/h,g)}else o===null?x=new l(s.count*c):x=new l(o,d,s.count*c),m=new qt(x,c,g);if(s.sparse!==void 0){let p=Vu.SCALAR,_=ia[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,E=new _(a[1],M,s.sparse.count*p),w=new l(a[2],v,s.sparse.count*c);o!==null&&(m=new qt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let b=0,y=E.length;b<y;b++){let F=E[b];if(m.setX(F,w[b*c]),c>=2&&m.setY(F,w[b*c+1]),c>=3&&m.setZ(F,w[b*c+2]),c>=4&&m.setW(F,w[b*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=xm[d.magFilter]||on,h.minFilter=xm[d.minFilter]||ti,h.wrapS=_m[d.wrapS]||di,h.wrapT=_m[d.wrapT]||di,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==$t&&h.minFilter!==on,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(f,g){t.parse(d,f,g)})});else{if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;let f=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(d){return new Promise(function(f,g){let x=f;t.isImageBitmapLoader===!0&&(x=function(m){let p=new cn(m);p.needsUpdate=!0,f(p)}),t.load(ns.resolveURL(d,r.path),x,void 0,g)})})}let u=h.then(function(d){return l===!0&&o.revokeObjectURL(c),Ii(d,a),d.userData.mimeType=a.mimeType||By(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[lt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new kr,wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Or,wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ei}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[lt.KHR_MATERIALS_UNLIT]){let u=s[lt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new ze(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Dn),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Vt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Xt);let h=r.alphaMode||Wu.OPAQUE;if(h===Wu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Wu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Zt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new oe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Zt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Zt){let u=r.emissiveFactor;o.emissive=new ze().setRGB(u[0],u[1],u[2],Dn)}return r.emissiveTexture!==void 0&&a!==Zt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Vt)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Ii(u,r),t.associations.set(u,{materials:e}),r.extensions&&tr(s,u,r),u})}createUniqueName(e){let t=It.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return vm(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=ky(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=vm(new Tt,l,t),l.mode===si.TRIANGLE_STRIP?d=d.then(f=>Hu(f,yo)):l.mode===si.TRIANGLE_FAN&&(d=d.then(f=>Hu(f,$r))),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?Fy(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],m=a[f],p,_=l[f];if(m.mode===si.TRIANGLES||m.mode===si.TRIANGLE_STRIP||m.mode===si.TRIANGLE_FAN||m.mode===void 0){let M=r.isSkinnedMesh===!0,v=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");M&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=M&&v?new Ba(x,_):new ut(x,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===si.LINES)p=new Ga(x,_);else if(m.mode===si.LINE_STRIP)p=new Gs(x,_);else if(m.mode===si.LINE_LOOP)p=new Ha(x,_);else if(m.mode===si.POINTS)p=new Ji(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Oy(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ii(p,r),m.extensions&&tr(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&tr(s,u[0],r),u[0];let d=new bt;r.extensions&&tr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new an(jt.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Xs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ii(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Ye;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new za(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,_=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",_)),l.push(g),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let M=0,v=d.length;M<v;M++){let E=d[M],w=f[M],b=g[M],y=x[M],F=m[M];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let A=n._createAnimationTracks(E,w,b,y,F);if(A)for(let L=0;L<A.length;L++)p.push(A[L])}let _=new oo(r,void 0,p);return Ii(_,s),_})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,zy)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new P().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Fr:l.length>1?h=new bt:l.length===1?h=l[0]:h=new Dt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Ii(h,r),r.extensions&&tr(n,h,r),r.matrix!==void 0){let u=new Ye;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new bt;n.name&&(r.name=s.createUniqueName(n.name)),Ii(r,n),n.extensions&&tr(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(mm(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof wn||d instanceof cn)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Es[r.path]===Es.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(Es[r.path]){case Es.weights:h=Qi;break;case Es.rotation:h=es;break;case Es.translation:case Es.scale:h=Ms;break;default:n.itemSize===1?h=Qi:h=Ms;break}let u=s.interpolation!==void 0?Ny[s.interpolation]:Us,d=this._getArrayFromAccessor(n);for(let f=0,g=c.length;f<g;f++){let x=new h(c[f]+"."+Es[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=gd(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof es?pd:Vl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Gy(i,e,t){let n=e.attributes,s=new Ln;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),o.normalized){let h=gd(ia[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new P,c=new P;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=gd(ia[d.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Bn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function vm(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=md[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return ct.workingColorSpace!==Dn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ct.workingColorSpace}" not supported.`),Ii(i,e),Gy(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Uy(i,e.targets,t):i})}var Mm=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var _=new Uint8Array(p.length),M=0;M<p.length;++M){var v=p.charCodeAt(M);_[M]=v>96?v-97:v>64?v-39:v+4}for(var E=0,M=0;M<p.length;++M)_[E++]=_[M]<60?n[_[M]]:(_[M]-60)*64+_[++M];return _.buffer.slice(0,E)}function c(p,_,M,v,E,w,b){var y=p.exports.sbrk,F=v+3&-4,A=y(F*E),L=y(w.length),I=new Uint8Array(p.exports.memory.buffer);I.set(w,L);var U=_(A,v,E,L,w.length);if(U==0&&b&&b(A,F,E),M.set(I.subarray(A,A+v*E)),y(A-y(0)),U!=0)throw new Error("Malformed buffer data: "+U)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var _={object:new Worker(p),pending:0,requests:{}};return _.object.onmessage=function(M){var v=M.data;_.pending-=v.count,_.requests[v.id][v.action](v.value),delete _.requests[v.id]},_}function g(p){for(var _="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),M=new Blob([_],{type:"text/javascript"}),v=URL.createObjectURL(M),E=u.length;E<p;++E)u[E]=f(v);for(var E=p;E<u.length;++E)u[E].object.postMessage({});u.length=p,URL.revokeObjectURL(v)}function x(p,_,M,v,E){for(var w=u[0],b=1;b<u.length;++b)u[b].pending<w.pending&&(w=u[b]);return new Promise(function(y,F){var A=new Uint8Array(M),L=++d;w.pending+=p,w.requests[L]={resolve:y,reject:F},w.object.postMessage({id:L,count:p,size:_,source:A,mode:v,filter:E},[A.buffer])})}function m(p){var _=p.data;self.ready.then(function(M){if(!_.id)return self.close();try{var v=new Uint8Array(_.count*_.size);c(M,M.exports[_.mode],v,_.count,_.size,_.source,M.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:v},[v.buffer])}catch(E){self.postMessage({id:_.id,count:_.count,action:"reject",value:E})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,_,M,v,E){c(r,r.exports.meshopt_decodeVertexBuffer,p,_,M,v,r.exports[l[E]])},decodeIndexBuffer:function(p,_,M,v){c(r,r.exports.meshopt_decodeIndexBuffer,p,_,M,v)},decodeIndexSequence:function(p,_,M,v){c(r,r.exports.meshopt_decodeIndexSequence,p,_,M,v)},decodeGltfBuffer:function(p,_,M,v,E,w){c(r,r.exports[h[E]],p,_,M,v,r.exports[l[w]])},decodeGltfBufferAsync:function(p,_,M,v,E){return u.length>0?x(p,_,M,h[v],l[E]):a.then(function(){var w=new Uint8Array(p*_);return c(r,r.exports[h[v]],w,p,_,M,r.exports[l[E]]),w})}}})();var rt=window.TomesteadRoomHost||null,dt=i=>document.getElementById("rm-"+i),ai=new URLSearchParams(location.search),Om=performance.now(),Hy=new URL("./",import.meta.url),$l=i=>new URL(i,Hy).href,Vy=$l("../tex/"),Wy=[["#6E1F24","#F3E3C3"],["#1F3350","#F0DDB0"],["#4F6B3A","#F4E7C8"],["#C2902F","#2B1C0E"],["#5B2F4A","#F1DDBF"],["#2E5E5E","#F1E3C2"],["#9A4A25","#F7E6C6"],["#3A3A3F","#E9CF8F"],["#A57A4E","#24170C"],["#D9CBA8","#3A2614"],["#2F4A33","#E8C766"],["#8B3A3A","#F5E2C0"]],Sm={walnut:["#8d6440","#7a5232","#5a3a22","#3b2415","#2a190e","#2c1a0f"],oak:["#c99d66","#b48654","#95693d","#6e4b2a","#4f3520","#3a2a1a"],cherry:["#ad5b3e","#8f4530","#6f3222","#4c2116","#331610","#2c130d"],ebony:["#57504b","#3a3532","#2a2624","#1b1817","#121010","#141110"],sage:["#9cad92","#7f9277","#67795f","#4d5c47","#38432f","#2b3328"],white:["#eee6d6","#d4c8b2","#b9ab93","#968872","#7a6d59","#4a4236"]};function km(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function Wl(i){try{return JSON.parse(localStorage.getItem(i))}catch{return null}}function qy(){let i=null;try{i=localStorage.getItem("tomestead.uid")}catch{}let e=i?":"+i:"",t=Wl("tomestead.books.v1"+e);if(!Array.isArray(t)||!t.length){t=[];try{for(let s=0;s<localStorage.length;s++){let r=localStorage.key(s);if(!r||!r.startsWith("tomestead.books.v1"))continue;let a=Wl(r);Array.isArray(a)&&a.length>t.length&&(t=a)}}catch{}}t=(t||[]).filter(s=>s&&s.id&&s.title);let n=Wl("tomestead.prefs.v1"+e)||Wl("tomestead.prefs.v1")||{};return{books:t,theme:n.theme||{},trophies:n.trophies||{},sample:!1}}var Xy=[["The Hobbit","J.R.R. Tolkien",310,5,"read"],["Jane Eyre","Charlotte Bront\xEB",532,4,"read"],["Dune","Frank Herbert",688,5,"read"],["Little Women","Louisa May Alcott",449,4,"read"],["Persuasion","Jane Austen",249,5,"read"],["The Name of the Wind","Patrick Rothfuss",662,4,"reading"],["Middlemarch","George Eliot",880,0,"want"],["Piranesi","Susanna Clarke",272,0,"want"],["Rebecca","Daphne du Maurier",410,4,"read"],["East of Eden","John Steinbeck",601,5,"read"],["Emma","Jane Austen",474,3,"read"],["The Secret Garden","Frances Hodgson Burnett",331,4,"read"],["Circe","Madeline Miller",393,5,"read"],["A Wizard of Earthsea","Ursula K. Le Guin",183,4,"read"],["Les Mis\xE9rables","Victor Hugo",1232,0,"want"],["The Count of Monte Cristo","Alexandre Dumas",1276,5,"read"],["Anne of Green Gables","L.M. Montgomery",320,4,"read"],["Frankenstein","Mary Shelley",280,3,"read"],["The Night Circus","Erin Morgenstern",387,4,"read"],["Wuthering Heights","Emily Bront\xEB",416,3,"read"],["North and South","Elizabeth Gaskell",521,0,"want"],["Watership Down","Richard Adams",476,4,"read"],["The Hound of the Baskervilles","Arthur Conan Doyle",256,4,"read"],["Mansfield Park","Jane Austen",507,3,"read"],["Great Expectations","Charles Dickens",544,4,"read"],["Treasure Island","Robert Louis Stevenson",292,4,"read"],["The Remains of the Day","Kazuo Ishiguro",258,5,"read"],["Howl\u2019s Moving Castle","Diana Wynne Jones",329,5,"reading"],["Moby-Dick","Herman Melville",720,0,"want"],["The Wind in the Willows","Kenneth Grahame",224,4,"read"],["Pride and Prejudice","Jane Austen",432,5,"read"],["Kindred","Octavia E. Butler",287,5,"read"],["The Princess Bride","William Goldman",456,4,"read"],["Stardust","Neil Gaiman",248,4,"read"]];function jy(){return{books:Xy.map(([e,t,n,s,r],a)=>({id:"s"+a,title:e,author:t,pages:n,rating:s,status:r,addedAt:1e12-a*1e7,progress:r==="reading"?Math.round(n*(a%2?.62:.31)):void 0,finished:r==="read"?`2026-${String(1+a%10).padStart(2,"0")}-1${a%9}`:void 0})),theme:{},sample:!0}}function Bm(){let i=rt.data();return{books:(i.books||[]).filter(e=>e&&e.id&&e.title),theme:i.theme||{},trophies:i.trophies||{},sample:!1}}var xt=rt?Bm():(()=>{let i=qy();return i.books.length&&ai.get("sample")!=="1"?i:Object.assign(jy(),{theme:i.theme})})(),nr=Sm[xt.theme.wood]||Sm.oak,Ky=i=>i.format==="audio"&&i.hours?i.hours*30:Number(i.pages)||0,Zl=i=>Wy[((Number.isInteger(i.color)?i.color:km(i.id+i.title)%12)%12+12)%12];function zm(i){if(i==="day"||i==="night")return i;if(i==="clock"){let e=new Date,t=e.getHours()+e.getMinutes()/60,n=e.getMonth(),[s,r]=n>=3&&n<=8?[6.5,20.25]:n===2||n===9?[7.25,19.25]:[7.25,17.75];return t>=s&&t<r?"day":"night"}return matchMedia("(prefers-color-scheme: dark)").matches?"night":"day"}var Rn=ai.get("t")==="night"||ai.get("t")==="day"?ai.get("t"):zm(xt.theme.light||"system"),as=dt("scene"),zt;try{zt=new Ol({canvas:as,antialias:!0,powerPreference:"high-performance"})}catch(i){throw console.error("WebGL renderer failed:",i&&i.message),rt?rt.unavailable():(dt("nogl").hidden=!1,dt("veil").remove()),new Error("WebGL unavailable")}var Ql=matchMedia("(pointer: coarse)").matches,gi=Math.min(window.devicePixelRatio||1,Ql?2:1.75);zt.setPixelRatio(gi);zt.toneMapping=po;zt.shadowMap.enabled=!0;zt.shadowMap.type=Ks;zt.shadowMap.autoUpdate=!1;var Pd=Math.min(8,zt.capabilities.getMaxAnisotropy()),ht=new ks;ht.background=new ze("#140d08");var Gm=new Qr(zt);ht.environment=Gm.fromScene(new zl,.04).texture;Gm.dispose();var fn=new an(50,1,.05,30),Jy=i=>new Promise(e=>{let t=new Image;t.onload=()=>e(t),t.onerror=()=>e(null),t.src=i});function mt(i,{repeat:e=!0,srgb:t=!0}={}){let n=new Wa(i);return t&&(n.colorSpace=Vt),e&&(n.wrapS=n.wrapT=di),n.anisotropy=Pd,n}function en(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function Ts(i,e,t=.85){let[n,s]=en(i?i.width:64,i?i.height:64);return s.fillStyle=e,s.fillRect(0,0,n.width,n.height),i&&(s.globalCompositeOperation="overlay",s.globalAlpha=t,s.drawImage(i,0,0)),n}function Hm(i){let e=i.attributes.position,t=i.attributes.normal,n=i.attributes.uv;for(let s=0;s<e.count;s++){let r=Math.abs(t.getX(s)),a=Math.abs(t.getY(s)),o=Math.abs(t.getZ(s));r>=a&&r>=o?n.setXY(s,e.getZ(s)*Math.sign(t.getX(s)||1)*-1,e.getY(s)):a>=o?n.setXY(s,e.getX(s),e.getZ(s)):n.setXY(s,e.getX(s)*Math.sign(t.getZ(s)||1),e.getY(s))}return n.needsUpdate=!0,i}function ri(i,e,t){let n=i.clone();return n.repeat.set(1/e,1/t),n.needsUpdate=!0,n}var Yn={},Vm=new Ws,Em=["golden_hills","mountain_path","misty_pines","winter_wood","lake_dawn","evening_water","forest_cliffs","pastoral","highland"],Wm={mantel:"golden_hills",nook:"pastoral"},Id={},Yy=i=>{let e=ai.get(i==="mantel"?"paint":"nookpaint");if(e&&Em.includes(e))return e;let t=xt.theme&&xt.theme.paintings||{};return t[i]==="mine"||Em.includes(t[i])?t[i]:Wm[i]},Md=()=>JSON.stringify(xt.theme&&xt.theme.paintings||{});async function Tm(i){let e=Id[i];if(!e)return;let t=Yy(i),n=t==="mine"?`mine:${(xt.theme.paintings||{})[i+"At"]||""}`:t;if(e.userData.key===n)return;e.userData.key=n;let s=null;t==="mine"&&(s=rt&&rt.paintingPhoto?await rt.paintingPhoto(i).catch(()=>null):null),s||(t==="mine"&&(t=Wm[i]),s=$l(`tex/paintings/${t}.webp`));try{let r=await Vm.loadAsync(s);if(e.userData.key!==n){r.dispose();return}r.colorSpace=Vt,r.flipY=!1,r.anisotropy=Pd;let[a,o,c,l]=[.032,.969,.125,.82];r.repeat.set(1/(o-a),1/(l-c)),r.offset.set(-a/(o-a),-c/(l-c));let h=e.map;e.map=r,e.color.set("#ffffff"),e.needsUpdate=!0,h&&h.userData&&h.userData.painting&&h.dispose(),r.userData.painting=!0,Ot()}catch(r){console.warn("painting failed",i,r&&r.message)}}var qm=()=>{Tm("mantel"),Tm("nook")};function sa(i,e){return new Promise(t=>Vm.load($l("tex/"+i+".webp"),n=>{e&&(n.colorSpace=Vt),n.wrapS=n.wrapT=di,n.anisotropy=Pd,t(n)},void 0,()=>t(null)))}async function $y(i){let[e,t,n]=await Promise.all([sa(i+"_diff",!0),sa(i+"_nor"),sa(i+"_arm")]);return e?{map:e,normal:t,arm:n}:null}function Hn(i,e,t,{color:n="#ffffff",rot:s=!1,normalScale:r=1,roughness:a=1}={}){let o=l=>{if(!l)return null;let h=l.clone();return h.repeat.set(1/e,1/t),s&&(h.rotation=Math.PI/2),h.needsUpdate=!0,h},c=o(i.arm);return Ve({map:o(i.map),normalMap:o(i.normal),normalScale:new oe(r,r),roughnessMap:c,aoMap:c,aoMapIntensity:.7,roughness:a,color:n})}var wm=["deskchair","armchair","ottoman","sidetable","oillamp","chandelier","plant","teacup","painting","grandfather","clock","candlestick","vase","elephant"],Zy=new Gl().setMeshoptDecoder(Mm);function Qy(i){return Zy.loadAsync($l("models/"+i+".glb")).then(e=>e.scene).catch(e=>(console.warn("model failed",i,e&&e.message),null))}function Un(i,e,t,n,s=0,r=1,{cast:a=!0}={}){return i?(i.position.set(e,t,n),i.rotation.y=s,i.scale.setScalar(r),i.traverse(o=>{o.isMesh&&(o.castShadow=a,o.receiveShadow=!0,o.userData.model=!0)}),ht.add(i),i):null}function eM(i,e){let t=[];Un(i.armchair,1.75,0,-2,-.5,1),Un(i.ottoman,1.2,0,-1.2,-.4,.8);let n=null;if(i.teacup){i.teacup.updateMatrixWorld(!0);for(let u of[...i.teacup.children]){let d=new Ln().setFromObject(u).getCenter(new P);u.position.x-=d.x,u.position.z-=d.z}Un(i.teacup,2.47,.762,-2.3,2.2,1),n=uM(),n.position.set(2.47,.83,-2.3),ht.add(n)}Un(i.sidetable,2.55,0,-2.38,0,1),Un(i.painting,1.85,1.78,-2.69,0,1.6,{cast:!1})&&i.painting.traverse(u=>{u.isMesh&&/canvas/.test(u.material.name)&&(u.material=u.material.clone(),Id.nook=u.material,u.material.userData.key="pastoral")});let s=null,r=[],a=null;if(i.oillamp){Un(i.oillamp,2.61,.761,-2.44,.4,.9),i.oillamp.traverse(d=>{d.isMesh&&(/flame/.test(d.material.name)&&r.push(d.material),/glass/.test(d.material.name)&&(d.visible=!1))}),s=new xn("#ffae55",0,3.4,2),s.position.set(2.58,1.2,-2.38),ht.add(s),a=Ve({map:mt(dM(),{repeat:!1}),roughness:.9,side:Xt,emissive:"#ffb86b",emissiveIntensity:0});let u=Fe(new ln(.075,.165,.17,40,1,!0),a,ht,{cast:!0,recv:!1});u.position.set(2.61,.761+.72*.62,-2.44);for(let[d,f]of[[.085,.075],[-.085,.165]])Fe(new Ei(f,.004,6,40).rotateX(Math.PI/2),e.brass,ht,{cast:!1}).position.copy(u.position).add(new P(0,d,0))}Un(i.grandfather,-1.6,0,-2.5,0,.95)&&i.grandfather.traverse(u=>{u.isMesh&&/glass/.test(u.material.name)&&(u.material.transparent=!0,u.material.opacity=.18,u.material.depthWrite=!1,u.castShadow=!1)}),Un(i.plant,-2.5,0,-2.25,.6,1.3);let o=null,c=null,l=[];if(i.chandelier){Un(i.chandelier,0,2.97-.908*.85,.05,0,.85,{cast:!1}),i.chandelier.traverse(d=>{d.isMesh&&/bulb/.test(d.material.name)&&l.push(d.material)}),o=new xn("#ffc27a",0,7,2),o.position.set(0,2.35,.05),ht.add(o);let u=new xs({map:mt(Km(),{repeat:!1}),color:"#ffcf8a",blending:Fn,depthWrite:!1,transparent:!0});c=new zs(u),c.scale.set(1.1,1.1,1),c.position.set(0,2.42,.05),ht.add(c)}let h=Dd(i);return{hearth:h,tick(u){n&&(n.material.uniforms.uTime.value=u),h.tick(u)},setLight(u){h.setLight(u),s&&(s.intensity=u.oil),a&&(a.emissiveIntensity=u.oil?.55:0),n&&(n.material.uniforms.uA.value=Rn==="night"?.7:.65),r.forEach(d=>{d.emissive&&d.emissive.set("#ffb35c"),d.emissiveIntensity=u.oil?3:.4}),o&&(o.intensity=u.chand),c&&(c.visible=u.chand>0),l.forEach(d=>{d.emissive&&d.emissive.set("#ffd9a0"),d.emissiveIntensity=u.chand?2.5:.1})}}}function Fe(i,e,t=ht,{cast:n=!0,recv:s=!0}={}){let r=new ut(i,e);return r.castShadow=n,r.receiveShadow=s,t.add(r),r}function qe(i,e,t,n,s,r,a,o=ht,c){let l=new kt(i,e,t);return l.translate(s,r,a),Hm(l),Fe(l,n,o,c)}function ir(i,e=28){return new io(i.map(([t,n])=>new oe(t,n)),e)}var Ve=i=>new ei(i);async function tM(){let i=Promise.race([document.fonts?document.fonts.load('40px "IM Fell English"').catch(()=>{}):Promise.resolve(),new Promise(ae=>setTimeout(ae,1800))]),e={oak:"oak_veneer_01",walnut:"walnut_veneer",cherry:"lacquered_cherry_wood"}[xt.theme.wood||"oak"]||"oak_veneer_01",t=["herringbone_parquet","plastered_wall","wooden_panels","dark_wooden_planks",e,"bark_willow_02","marble_01","castle_brick_07","slate_floor_03"],[n,s,r]=await Promise.all([Promise.all(["floor","wood-v","wood-h","plaster","cloth","leather"].map(ae=>Jy(Vy+ae+".webp"))),Promise.all(t.map($y)).then(ae=>Object.fromEntries(t.map((Ie,je)=>[Ie,ae[je]]))),Promise.all(wm.map(Qy)).then(ae=>Object.fromEntries(wm.map((Ie,je)=>[Ie,ae[je]]))),Promise.all([sa("wool_boucle_nor"),sa("brown_leather_nor"),sa("rug_claret",!0)]).then(([ae,Ie,je])=>{Yn.wool=ae,Yn.leather=Ie,Yn.rug=je})]),[a,o,c,l,h,u]=n;dt("veil-sub").textContent="Shelving the books\u2026";let d=mt(Ts(o,nr[1],.55)),f=mt(Ts(c,nr[1],.55)),g=mt(Ts(o,nr[3],.6)),x=mt(Ts(c,nr[3],.6)),m={caseSide:Ve({map:ri(d,.5,2),roughness:.55}),caseShelf:Ve({map:ri(f,1.6,.3),roughness:.55}),caseDark:Ve({map:ri(g,.5,2),roughness:.6}),recess:Ve({color:nr[5],roughness:.9}),trim:Ve({map:ri(x,1.6,.3),roughness:.5}),beam:Ve({map:ri(x,2.4,.45),roughness:.75}),brass:Ve({color:"#c9a15b",metalness:1,roughness:.32}),gold:Ve({color:"#e0b860",metalness:1,roughness:.22}),ceramic:Ve({color:"#f1ead9",roughness:.25}),paper:Ve({color:"#efe3c8",roughness:.9}),candle:Ve({color:"#efe6cf",roughness:.6,emissive:"#ffb35c",emissiveIntensity:0}),velvet:Ve({color:"#2f4a33",roughness:.92,side:Xt}),terracotta:Ve({color:"#a4593a",roughness:.85}),leaf:Ve({color:"#3f6b35",roughness:.7,side:Xt}),stone:Ve({map:ri(mt(Ts(l,"#7b8092",.9)),.6,.6),roughness:.75}),tomeLeather:Ve({map:mt(Ts(u,"#3b2350",.9)),roughness:.6}),dark:Ve({color:"#1b120b",roughness:.8})},p=s[e];if(p){let ae={oak:"#f0c890",walnut:"#ffffff",cherry:"#ffffff"}[xt.theme.wood||"oak"]||nr[0];m.caseSide=Hn(p,.7,1.4,{color:ae,roughness:1}),m.caseShelf=Hn(p,.7,1.4,{color:ae,rot:!0}),m.caseDark=Hn(p,.7,1.4,{color:new ze(ae).multiplyScalar(.55)}),m.trim=Hn(p,.7,1.4,{color:new ze(ae).multiplyScalar(.5),rot:!0}),m.recessWood=Hn(p,.5,1.4,{color:new ze(ae).multiplyScalar(.2)})}s.dark_wooden_planks&&(m.beam=Hn(s.dark_wooden_planks,2.2,2.2,{color:"#b9a48c"})),Yn.leather&&(m.tomeLeather.normalMap=ri(Yn.leather,.15,.15),m.tomeLeather.needsUpdate=!0),m.bark=s.bark_willow_02?Hn(s.bark_willow_02,.3,.6,{color:"#b49a80"}):Ve({color:"#5a4430",roughness:.9}),m.logs=s.bark_willow_02?Hn(s.bark_willow_02,.3,.6,{color:"#6d5a48"}):Ve({color:"#3a2a1c",roughness:.9}),m.stoneSurround=s.marble_01?Hn(s.marble_01,1,1,{color:"#f4e6d0"}):Ve({color:"#cbbd9f",roughness:.7}),m.firebrick=s.castle_brick_07?Hn(s.castle_brick_07,.7,.7,{color:"#6a4a3e"}):Ve({color:"#3a2420",roughness:.9}),m.slate=s.slate_floor_03?Hn(s.slate_floor_03,.9,.9,{color:"#bdb2a6"}):Ve({color:"#3c3a38",roughness:.6}),m.iron=Ve({color:"#1c1a19",roughness:.55,metalness:.8});let _=mt(a||Ts(null,"#8e5f35")),M=s.herringbone_parquet?Hn(s.herringbone_parquet,1.5,1.5,{color:"#f2dcc2"}):Ve({map:ri(_,2.2,.52),roughness:.62}),v=mt(Ts(l,"#c7ab82",.9)),E=mt(Am()),w=s.plastered_wall,b=w?Hn(w,2.2,2.2,{color:"#ecc995",normalScale:.6}):Ve({map:ri(v,1.6,1.6),roughness:.92}),y=b.map,F=ri(E,1.8,1.8),A=s.wooden_panels?Hn(s.wooden_panels,1.2,1.2,{color:"#d9b48f"}):Ve({map:mt(iM(c)),roughness:.6});s.wooden_panels||A.map.repeat.set(1/1.2,1/.9);let L=Fe(new Ft(6,5.4).rotateX(-Math.PI/2),M,ht,{cast:!1});Hm(L.geometry),qe(6.2,.1,5.6,m.beam,0,3.05,0);for(let ae of[-2.25,-.75,.75,2.25])qe(.18,.22,5.4,m.beam,ae,2.89,0);qe(6.2,3.1,.1,b,0,1.5,-2.75),qe(.1,3.1,5.6,b,3.05,1.5,0),qe(6.2,3.1,.1,b,0,1.5,2.75);let I={z0:-1.3,z1:.1,y0:.85,y1:2.45};qe(.1,I.y0,5.6,b,-3.05,I.y0/2,0),qe(.1,3.1-I.y1,5.6,b,-3.05,(I.y1+3.1)/2,0),qe(.1,I.y1-I.y0,2.8+I.z0,b,-3.05,(I.y0+I.y1)/2,(-2.8+I.z0)/2),qe(.1,I.y1-I.y0,2.8-I.z1,b,-3.05,(I.y0+I.y1)/2,(2.8+I.z1)/2),qe(6,.9,.03,A,0,.45,-2.685),qe(.03,.9,5.4,A,2.985,.45,0),qe(.03,.82,5.4,A,-2.985,.41,0),qe(6,.045,.06,m.trim,0,.92,-2.67),qe(.06,.045,5.4,m.trim,2.97,.92,0),qe(.06,.045,5.4,m.trim,-2.97,.84,0);let U=(I.z0+I.z1)/2,R=I.z1-I.z0,B=I.y1-I.y0;qe(.08,.1,R+.24,m.trim,-2.97,I.y1+.05,U),qe(.09,.04,R+.3,m.trim,-2.965,I.y0-.02,U),qe(.08,B,.1,m.trim,-2.97,(I.y0+I.y1)/2,I.z0-.05),qe(.08,B,.1,m.trim,-2.97,(I.y0+I.y1)/2,I.z1+.05),qe(.04,B,.035,m.trim,-3.04,(I.y0+I.y1)/2,U);for(let ae of[I.y0+B/3,I.y0+2*B/3])qe(.04,.035,R,m.trim,-3.04,ae,U);let H=new Zt({map:mt(Rm("day"),{repeat:!1})});Fe(new Ft(2.6,2.4).rotateY(Math.PI/2),H,ht,{cast:!1,recv:!1}).position.set(-3.6,1.65,U),Fe(new ln(.018,.018,R+1.5,12).rotateX(Math.PI/2),m.brass).position.set(-2.9,I.y1+.2,U);for(let[ae,Ie]of[[I.z0-.33,.48],[I.z1+.33,.48]]){let je=new Ft(Ie,2.15,28,1).rotateY(Math.PI/2),Je=je.attributes.position;for(let O=0;O<Je.count;O++)Je.setX(O,.035*Math.sin(Je.getZ(O)*38)+.015*Math.sin(Je.getZ(O)*97));je.computeVertexNormals(),Fe(je,m.velvet).position.set(-2.88,I.y1+.18-1.075,ae)}let X=lM(m,{cloth:h,leather:u}),$=bM(m,c,r);Dd.M=m;let Q=eM(r,m),ge=vM(m),Ge=Yn.rug?Object.assign(Yn.rug,{wrapS:In,wrapT:In}):mt(sM(),{repeat:!1});Fe(new Ft(Yn.rug?2.8*1580/1520:2.8,1.9).rotateX(-Math.PI/2),Ve({map:Ge,roughness:.96,alphaTest:Yn.rug?.5:0,normalMap:Yn.wool?ri(Yn.wool,.18,.18):null,normalScale:new oe(.6,.6)}),ht,{cast:!1}).position.set(0,.004,-.35),Fe(new Ft(1,1.25).rotateY(-Math.PI/2),Ve({map:mt(Am(!0),{repeat:!1}),roughness:.8}),ht,{cast:!1}).position.set(2.985,1.75,.1),qe(.04,.05,1.12,m.gold,2.98,2.4,.1),qe(.04,.05,1.12,m.gold,2.98,1.1,.1),qe(.04,1.35,.05,m.gold,2.98,1.75,-.45),qe(.04,1.35,.05,m.gold,2.98,1.75,.65);let Re=new co("#ffe6c4","#4a3020",1);ht.add(Re);let Ee=new P(1,-.62,-.3).normalize(),le=new P(-1,.3,-1.1),Pe=new js("#ffb26b",4);Pe.position.copy(le).addScaledVector(Ee,-8),Pe.target.position.copy(le),Pe.castShadow=!0;let vt=Ql?1024:2048;Pe.shadow.mapSize.set(vt,vt),Object.assign(Pe.shadow.camera,{left:-4,right:4,top:4,bottom:-4,near:2,far:16}),Pe.shadow.bias=-4e-4,Pe.shadow.normalBias=.02,Pe.shadow.radius=3,ht.add(Pe,Pe.target);let He=new xn("#ffb87a",1,5,2);He.position.set(-.9,.35,-1),ht.add(He);let $e=new xn("#ffa64d",0,3.2,2);$e.position.set(.55,1.6,-1.7),ht.add($e);let Ze=new xn("#ffd9a8",1,7,2);Ze.position.set(.6,2.4,1.2),ht.add(Ze);let ee=SM(I,Ee),ue=EM(I,Ee),fe={day:{hemi:["#ffe8c8","#4a3020",.55],sun:["#ffb46b",8.5],bounce:3,fill:1.3,fillC:"#ffd9a8",lamp:.6,candle:0,tome:.5,shelf:0,oil:0,chand:0,env:.3,exposure:1,beam:[1,.78,.5],beamA:.85,mote:[1,.9,.7],moteA:1,wall:y,wallC:"#ffffff",sky:"day",bg:"#140d08"},night:{hemi:["#6f86c0","#120c10",.32],sun:["#8fa8ff",1.1],bounce:.25,fill:.7,fillC:"#8094d0",lamp:3.4,candle:1.6,tome:1.6,shelf:1.2,oil:2.8,chand:5.5,env:.08,exposure:1.08,beam:[.55,.66,1],beamA:.22,mote:[.9,.75,.5],moteA:.45,wall:F,wallC:"#ffffff",sky:"night",bg:"#07080e"}},we={day:H.map,night:mt(Rm("night"),{repeat:!1})};function be(){let ae=fe[Rn];Re.color.set(ae.hemi[0]),Re.groundColor.set(ae.hemi[1]),Re.intensity=ae.hemi[2],Pe.color.set(ae.sun[0]),Pe.intensity=ae.sun[1],He.intensity=ae.bounce,He.color.set(Rn==="day"?"#ffb87a":"#7d90d0"),Ze.intensity=ae.fill,Ze.color.set(ae.fillC),$e.intensity=ae.shelf,$.setLight(ae.lamp,ae.candle),Q.setLight(ae),ge.setLight(ae.tome),ht.environmentIntensity=ae.env,zt.toneMappingExposure=ae.exposure,ee.material.uniforms.uColor.value.set(...ae.beam),ee.material.uniforms.uA.value=ae.beamA,ue.material.uniforms.uColor.value.set(...ae.mote),ue.material.uniforms.uA.value=ae.moteA,b.map=ae.wall,b.needsUpdate=!0,H.map=we[ae.sky],H.needsUpdate=!0,ht.background.set(ae.bg),dt("light")&&(dt("light").textContent=Rn==="day"?"\u263E":"\u2600",dt("light").setAttribute("aria-label",Rn==="day"?"Switch to night":"Switch to day")),document.querySelector('meta[name="theme-color"]').setAttribute("content",ae.bg)}return await i,X.paint(),be(),nM(),ht.traverse(ae=>{ae.isMesh&&!ae.userData.dyn&&(ae.updateMatrix(),ae.matrixAutoUpdate=!1)}),zt.shadowMap.needsUpdate=!0,{books:X,desk:$,tome:ge,beam:ee,motes:ue,applyLook:be,furniture:Q}}function nM(){ht.updateMatrixWorld(!0);let i=new Map;ht.traverse(e=>{if(!e.isMesh||e.isInstancedMesh||Array.isArray(e.material)||!e.material.visible||Object.keys(e.userData).length)return;for(let n=e.parent;n;n=n.parent)if(n.userData&&n.userData.dyn)return;let t=e.material.uuid+(e.castShadow?"c":"")+(e.receiveShadow?"r":"");i.has(t)||i.set(t,[]),i.get(t).push(e)});for(let e of i.values()){if(e.length<2)continue;let t=e.map(r=>{let a=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();a.applyMatrix4(r.matrixWorld);for(let o of Object.keys(a.attributes))["position","normal","uv"].includes(o)||a.deleteAttribute(o);return a.clearGroups(),a}),n=Gu(t,!1);if(!n)continue;let s=new ut(n,e[0].material);s.castShadow=e[0].castShadow,s.receiveShadow=e[0].receiveShadow,ht.add(s);for(let r of e)r.parent.remove(r),r.geometry.dispose()}}function Wn(i){let e=i>>>0;return()=>(e=Math.imul(e^e>>>15,1|e)+1831565813>>>0)/4294967296}function Am(i){let e=i?512:1024,[t,n]=en(e,i?640:e),s=Wn(i?9:7);n.fillStyle="#0f1a2b",n.fillRect(0,0,t.width,t.height);let r=n.createRadialGradient(t.width/2,t.height/2,10,t.width/2,t.height/2,t.width*.8);if(r.addColorStop(0,"rgba(60,80,130,.35)"),r.addColorStop(1,"rgba(0,0,0,.25)"),n.fillStyle=r,n.fillRect(0,0,t.width,t.height),n.strokeStyle="rgba(201,161,91,.18)",n.lineWidth=1.5,i){for(let a of[120,180,240])n.beginPath(),n.arc(256,320,a,0,Math.PI*2),n.stroke();for(let a=0;a<12;a++)n.beginPath(),n.moveTo(256,320),n.lineTo(256+Math.cos(a*Math.PI/6)*240,320+Math.sin(a*Math.PI/6)*240),n.stroke()}else n.beginPath(),n.arc(e/2,e/2,e*.42,0,Math.PI*2),n.stroke(),n.beginPath(),n.moveTo(0,e/2),n.lineTo(e,e/2),n.stroke();for(let a=0;a<(i?260:520);a++){let o=s()*t.width,c=s()*t.height,l=s()<.08?2.4:s()*1.3+.4;n.fillStyle=s()<.25?"rgba(230,200,134,.9)":"rgba(239,227,200,.8)",n.beginPath(),n.arc(o,c,l,0,Math.PI*2),n.fill()}n.strokeStyle="rgba(230,200,134,.45)",n.lineWidth=1.2;for(let a=0;a<(i?5:7);a++){let o=s()*t.width,c=s()*t.height;n.beginPath(),n.moveTo(o,c);for(let l=0;l<4;l++)o+=(s()-.5)*140,c+=(s()-.5)*140,n.lineTo(o,c);n.stroke()}return t}function Rm(i){let[e,t]=en(512,512),n=t.createLinearGradient(0,0,0,512);i==="day"?(n.addColorStop(0,"#f7c98d"),n.addColorStop(.55,"#ffdca6"),n.addColorStop(1,"#f2a35e")):(n.addColorStop(0,"#08102a"),n.addColorStop(.6,"#15244a"),n.addColorStop(1,"#25335c")),t.fillStyle=n,t.fillRect(0,0,512,512);let s=Wn(3);if(i==="day"){let r=t.createRadialGradient(330,300,5,330,300,220);r.addColorStop(0,"rgba(255,250,230,1)"),r.addColorStop(.15,"rgba(255,230,170,.8)"),r.addColorStop(1,"rgba(255,200,120,0)"),t.fillStyle=r,t.fillRect(0,0,512,512)}else{for(let r=0;r<120;r++)t.fillStyle=`rgba(255,255,240,${.3+s()*.6})`,t.fillRect(s()*512,s()*330,1.6,1.6);t.fillStyle="#f4efd8",t.beginPath(),t.arc(170,150,34,0,Math.PI*2),t.fill(),t.fillStyle="rgba(244,239,216,.12)",t.beginPath(),t.arc(170,150,80,0,Math.PI*2),t.fill()}t.fillStyle=i==="day"?"rgba(120,90,60,.55)":"rgba(10,14,30,.9)",t.beginPath(),t.moveTo(0,430),t.quadraticCurveTo(250,360,512,420),t.lineTo(512,512),t.lineTo(0,512),t.fill(),t.fillStyle=i==="day"?"rgba(70,60,35,.85)":"#05070f";for(let r=0;r<22;r++){let a=r*25+s()*10,o=50+s()*70;t.beginPath(),t.ellipse(a,470-o/3,18+s()*10,o/2,0,0,Math.PI*2),t.fill()}return t.fillRect(0,465,512,47),e}function iM(i){let[e,t]=en(512,384);return t.fillStyle=nr[2],t.fillRect(0,0,512,384),i&&(t.globalCompositeOperation="overlay",t.globalAlpha=.8,t.drawImage(i,0,0,1024,192,0,0,512,384),t.globalCompositeOperation="source-over",t.globalAlpha=1),t.strokeStyle="rgba(0,0,0,.4)",t.lineWidth=10,t.strokeRect(46,46,420,292),t.strokeStyle="rgba(255,230,190,.18)",t.lineWidth=4,t.strokeRect(58,58,396,268),t.fillStyle="rgba(0,0,0,.35)",t.fillRect(0,0,8,384),t.fillRect(504,0,8,384),e}function sM(){let[i,e]=en(1024,696);e.fillStyle="#6a2128",e.fillRect(0,0,1024,696);let t=Wn(11);for(let n=0;n<14e3;n++)e.fillStyle=`rgba(${t()<.5?"20,4,6":"150,70,70"},${t()*.07})`,e.fillRect(t()*1024,t()*696,3,2);return e.strokeStyle="#4a1419",e.lineWidth=64,e.strokeRect(32,32,960,632),e.strokeStyle="#e3cfa8",e.lineWidth=4,e.strokeRect(78,78,868,540),e.strokeStyle="rgba(201,161,91,.55)",e.lineWidth=2,e.strokeRect(88,88,848,520),i}function rM(i,e,t){let s=(o,c)=>[(t?34-o:o)*.00155,(110-c)*.00155],r=new bt,a=(o,c,l=.11)=>{let h=Fe(new Vs(o,{depth:l,bevelEnabled:!0,bevelSize:.002,bevelThickness:.002,bevelSegments:2,curveSegments:10}),c,r);return h.position.z=-l/2,h};if(i==="brass"){let o=new $i;o.moveTo(...s(4,110)),o.lineTo(...s(4,30)),o.quadraticCurveTo(...s(4,8),...s(26,6)),o.quadraticCurveTo(...s(14,22),...s(14,40)),o.lineTo(...s(14,96)),o.lineTo(...s(30,96)),o.lineTo(...s(30,110)),o.lineTo(...s(4,110)),a(o,e.brass,.1)}else if(i==="oak"||i==="marble"){let o=new $i;i==="oak"?(o.moveTo(...s(2,110)),o.lineTo(...s(2,24)),o.quadraticCurveTo(...s(2,6),...s(18,6)),o.quadraticCurveTo(...s(34,6),...s(34,24)),o.lineTo(...s(34,110)),o.lineTo(...s(2,110))):(o.moveTo(...s(2,110)),o.lineTo(...s(2,18)),o.lineTo(...s(32,18)),o.lineTo(...s(32,110)),o.lineTo(...s(2,110))),a(o,i==="oak"?e.caseDark:Ve({color:"#e9e4da",roughness:.3}),.1),i==="oak"&&Fe(new Qn(.005,10,8),e.brass,r).position.set(18*.00155,84*.00155,.052)}else if(i==="owl"){let o=Ve({color:"#3e3e44",roughness:.5,metalness:.6});qe(.056,.025,.08,o,20*.00155,.0125,0,r);let c=Fe(new Qn(.03,16,12),o,r);c.scale.set(.95,1.45,.85),c.position.set(20*.00155,.065,0);let l=Fe(new Qn(.024,16,12),o,r);l.scale.set(1.05,.95,.9),l.position.set(20*.00155,.118,.002);for(let u of[-1,1]){let d=Fe(new Br(.007,.022,8),o,r);d.position.set(20*.00155+u*.016,.142,0),d.rotation.z=-u*.35,Fe(new Qn(.0065,10,8),Ve({color:"#e6c886",roughness:.3,metalness:.4,emissive:"#3a2a08"}),r).position.set(20*.00155+u*.0095,.121,.02)}let h=Fe(new Br(.004,.01,6),e.brass,r);h.rotation.x=Math.PI,h.position.set(20*.00155,.11,.023)}else if(i==="stones"){let o=[["#6d6a64",19,10,100],["#8c877d",15,9,82],["#5e5b56",12,8,66],["#a39d90",9,6.5,52]];for(let[c,l,h,u]of o){let d=Fe(new Qn(1,16,10),Ve({color:c,roughness:.6}),r);d.scale.set(l*.00155,h*.00155,l*.00155*.8),d.position.set(20*.00155,(110-u)*.00155,0)}}return r}function aM(i){let[e,t]=en(128,128);t.fillStyle=i?"#4f7a3a":"#3d6b2f",t.beginPath(),t.moveTo(64,6),t.bezierCurveTo(118,40,104,104,64,122),t.bezierCurveTo(24,104,10,40,64,6),t.fill(),t.strokeStyle="rgba(210,235,170,.45)",t.lineWidth=3,t.beginPath(),t.moveTo(64,14),t.lineTo(64,118),t.stroke(),t.lineWidth=1.5;for(let n=0;n<5;n++){let s=30+n*17;t.beginPath(),t.moveTo(64,s+8),t.lineTo(38,s),t.moveTo(64,s+8),t.lineTo(90,s),t.stroke()}return e}function oM(){let[i,e]=en(128,128);e.translate(64,64);for(let t=54;t>6;t-=9){e.fillStyle=`hsl(350, ${55+(54-t)*.4}%, ${82-(54-t)*.55}%)`,e.beginPath();for(let n=0;n<=6.3;n+=.3){let s=t*(.82+.18*Math.sin(n*5+t));e.lineTo(Math.cos(n)*s,Math.sin(n)*s)}e.fill(),e.strokeStyle="rgba(120,30,50,.25)",e.lineWidth=1.5,e.stroke()}return i}function cM(i,{W:e,top:t,RISE:n,ZF:s,ivy:r}){let a=Wn(5),o=[],c=e/2-.02;for(let E=0;E<=10;E++){let w=.12+(t-.12)*(E/10);o.push(new P(c+Math.sin(E*1.3)*.012,w,s+.025))}for(let E=.08;E<1.25;E+=.12)o.push(new P(Math.cos(E)*(e/2+.005),t+Math.sin(E)*(n+.01)+Math.cos(E*7)*.01,s+.025));let l=new ys(o);Fe(new Hr(l,120,.006,6,!1),Ve({color:"#5a4a2a",roughness:.9}),i,{recv:!1});let h=Ve({map:mt(aM(!r),{repeat:!1}),alphaTest:.5,side:Xt,roughness:.75}),u=150,d=new Si(new Ft(.045,.045),h,u),f=new Ye,g=new rn,x=new kn,m=new P,p=new P;for(let E=0;E<u;E++){let w=Math.min(1,E/u*1.02+a()*.01);l.getPointAt(w,p),p.x+=(a()-.5)*.07,p.y+=(a()-.5)*.05,p.z+=.005+a()*.02,x.set((a()-.5)*.9,(a()-.5)*.9,a()*6.28),g.setFromEuler(x);let b=.7+a()*.6;m.set(b,b,b),d.setMatrixAt(E,f.compose(p,g,m))}if(d.castShadow=!0,i.add(d),r)return;let _=Ve({map:mt(oM(),{repeat:!1}),alphaTest:.4,roughness:.7,side:Xt}),M=22,v=new Si(new ja(.022,16),_,M);for(let E=0;E<M;E++){l.getPointAt(.12+E/M*.86,p),p.x+=(a()-.5)*.05,p.z+=.03,p.y+=(a()-.5)*.04,x.set((a()-.5)*.5,(a()-.5)*.5,a()*6.28),g.setFromEuler(x);let w=.7+a()*.6;m.set(w,w,w),v.setMatrixAt(E,f.compose(p,g,m))}i.add(v)}function Xl(i,e=512,t=96){let[n,s]=en(e,t),r=s.createLinearGradient(0,0,0,t);return r.addColorStop(0,"#e6c886"),r.addColorStop(.6,"#c9a15b"),r.addColorStop(1,"#9c7637"),s.fillStyle=r,s.beginPath(),s.roundRect(2,2,e-4,t-4,10),s.fill(),s.strokeStyle="rgba(255,255,255,.35)",s.lineWidth=3,s.beginPath(),s.moveTo(12,6),s.lineTo(e-12,6),s.stroke(),s.fillStyle="#3a2610",s.font=`italic ${Math.round(t*.58)}px "IM Fell English", Georgia, serif`,s.textAlign="center",s.textBaseline="middle",s.fillText(i,e/2,t/2+3),n}function lM(i,{cloth:e,leather:t}){let n=new bt;ht.add(n);let s=1.65,r=.4,a=.055,o=.12,c=.43,l=.035,h=3,u=.16,d=.3,f=-2.68,g=f+r,x=f+r/2,m=Ee=>o+Ee*(c+l),p=m(h),_=Object.assign({bookend:"brass",vine:"roses"},xt.theme);qe(s+.04,o,r+.03,i.caseDark,0,o/2,x+.015,n);for(let Ee of[-1,1])qe(a,p+.04-o,r,i.caseSide,Ee*(s/2-a/2),o+(p+.04-o)/2,x,n);let M=i.recessWood||i.recess;qe(s-2*a,p+.04-o,.02,M,0,o+(p+.04-o)/2,f+.01,n);let v=[];for(let Ee=0;Ee<h;Ee++)qe(s-2*a,l,r-.015,i.caseShelf,0,m(Ee)+l/2,x+.0075,n),v.push(m(Ee)+l);qe(s+.03,.045,r+.035,i.caseShelf,0,p+.0225,x+.0175,n);let E=p+.045,w=s/2,b=s/2-a,y=new $i;y.moveTo(-w,0),y.lineTo(-w,u),y.absellipse(0,u,w,d,Math.PI,0,!0),y.lineTo(w,0),y.lineTo(b,0),y.lineTo(b,u),y.absellipse(0,u,b,d-a*.8,0,Math.PI,!1),y.lineTo(-b,0),y.lineTo(-w,0),Fe(new Vs(y,{depth:r,bevelEnabled:!1,curveSegments:48}),i.caseSide,n).position.set(0,E,f);let A=new $i;A.moveTo(-b,0),A.lineTo(-b,u),A.absellipse(0,u,b,d-a*.8,Math.PI,0,!0),A.lineTo(b,0),A.lineTo(-b,0),Fe(new Vs(A,{depth:.02,bevelEnabled:!1,curveSegments:48}),M,n).position.set(0,E,f);let I=[];for(let Ee=0;Ee<=48;Ee++){let le=Math.PI-Ee/48*Math.PI;I.push(new P(Math.cos(le)*(w+.004),E+u+Math.sin(le)*(d+.004),g+.002))}Fe(new Hr(new ys(I),64,.009,8,!1),i.caseShelf,n);let U=p+.045,R=x+.02,B=new bt;n.add(B),B.position.set(-.32,U,R),Fe(ir([[0,0],[.045,0],[.045,.01],[.012,.02],[.012,.09],[.03,.1],[.03,.11],[0,.11]]),i.brass,B);let H=Fe(new ln(.013,.013,.13,14),i.candle,B);H.position.y=.175;let G=jm();G.position.set(-.32,U+.26,R),n.add(G);let ie=new bt;n.add(ie),Fe(ir([[0,0],[.045,0],[.045,.012],[.008,.02],[.008,.06],[0,.06]]),i.brass,ie);let X=Fe(new Qn(.065,24,16),Ve({map:mt(hM(),{repeat:!1}),roughness:.5}),ie);X.position.y=.125,X.rotation.z=.4;let $=Fe(new Ei(.075,.004,6,32,Math.PI*1.2),i.brass,ie);$.position.y=.125,$.rotation.set(0,Math.PI/2,.4-Math.PI/2),ie.position.set(-.04,U,R),[[.26,.032,"#1F3350"],[.23,.028,"#e9dcbc"],[.25,.034,"#6E1F24"]].reduce((Ee,[le,Pe,vt])=>(qe(le,Pe,.17,Ve({color:vt,roughness:.7}),.3,Ee+Pe/2,R,n),Ee+Pe),U),_.vine!=="none"&&cM(n,{W:s,top:E+u,RISE:d,ZF:g,ivy:_.vine==="ivy"});let Q=new bt;Q.userData.dyn=!0,n.add(Q);let ge={meshes:[],hidden:0,count:0,order:null,page:0,pages:1,all:[],paint(){},refill(){Y(ge.page),ge.paint()},showPage(Ee){Y(Ee),ge.paint()}},Ge=n;function Y(Ee=0){Q.traverse(D=>{D.isMesh&&(D.geometry.dispose(),D.material&&D.material.map&&D.material!==ge.mat&&D.material.map.dispose())}),Q.clear(),ge.mat&&(ge.mat.map.dispose(),ge.mat.dispose(),ge.mat=null);let le=Q,Pe=xt.books.filter(D=>(D.status||"read")==="read").length;Fe(new Ft(.2,.034),Ve({map:mt(Xl(`${Pe} read`),{repeat:!1}),roughness:.35,metalness:.6}),le,{cast:!1}).position.set(0,p+.0225,g+.035/2+.0185);let He=["reading","want","read"],$e=(D,z)=>(Number(z.addedAt)||0)-(Number(D.addedAt)||0),Ze=[...xt.books.filter(D=>(D.status||"read")==="reading").sort($e),...d0(xt.books.filter(D=>D.status==="want")),...xt.books.filter(D=>(D.status||"read")==="read").sort($e)],ee={};Ze.forEach(D=>{let z=D.status||"read";ee[z]=(ee[z]||0)+1});let ue=Object.keys(ee).length>1,fe={reading:["owl","stones","oak","marble","brass"],want:["oak","marble","stones","owl","brass"]},we=D=>{if(D!=="reading"&&D!=="want")return _.bookend;let z=_.bookends&&_.bookends[D];if(z)return z;if(_.bookend==="none")return"none";let te=[_.bookend];return D==="want"&&te.push(we("reading")),fe[D].find(se=>!te.includes(se))||_.bookend},be=D=>we(D)==="none"?0:we(D)==="owl"||we(D)==="stones"?.064:.054,ae=-s/2+a+.02,Ie=s/2-a-.02,je=Ie-ae,Je=[],it=null;for(let D of Ze){let z=D.status||"read",te=km(D.id+"|"+D.title),se=Ky(D),re=(se>0?Math.min(66,Math.max(24,18+se/16)):26+(te>>>5)%30)*82e-5,Ce=(176+te%66)*.00118,We=.15+te%5*.011;z!==it&&(it!==null&&Je.push({kind:"end",sec:it,w:be(it)+.035,flip:!0}),Je.push({kind:"end",sec:z,w:be(z)+.004,start:!0}),it=z);let j=z==="reading"?.012:0;Je.push({kind:"book",w:re+.0025+j,b:D,t:re,h:Ce,d:We,lean:j,st:z,variant:(te>>>9)%4})}it!==null&&Je.push({kind:"end",sec:it,w:be(it),flip:!0});let O=Je.reduce((D,z)=>D+z.w,0),Gt=Math.ceil(O/je),st=Gt>h,wt=st?h:Math.min(h,Math.max(Gt,Math.ceil(O/(je*.72)))),ve=st?je:Math.min(je,O/wt+.06),Lt=0,ke=ae,Xe=[];for(let D of Je){if(ke+D.w>ae+ve&&ke>ae){if(D.kind==="end"&&D.flip){Xe.push({...D,abs:Lt,x:ke}),ke+=D.w;continue}Lt++,ke=ae}Xe.push({...D,abs:Lt,x:ke}),ke+=D.w}let C=D=>Math.floor(D.abs/h),S=C(Xe[Xe.length-1]||{abs:0})+1,W=Math.max(0,Math.min(S-1,Ee||0)),ce=Xe.filter(D=>D.kind==="book").map(D=>({b:D.b,page:C(D),st:D.st})),ne=Xe.filter(D=>C(D)===W).map(D=>({...D,row:h-1-D.abs%h})),de=ne.find(D=>D.kind==="book");W>0&&de&&!ne.some(D=>D.kind==="end"&&D.start&&D.sec===de.st)&&ne.unshift({kind:"label",sec:de.st,row:de.row,x:de.x-.004});let _e=[];for(let D=h-1;D>=0;D--){let z=ne.filter(se=>se.row===D&&se.kind!=="label"),te=z.length?Math.max(...z.map(se=>se.x+(se.t||se.w))):ae;_e.push({r:D,from:te+.04})}let J=[];for(let D of ne){let z=v[D.row];if(D.kind==="label"){if(ue){let re={reading:"Reading now",want:"To read",read:"Read"}[D.sec];Fe(new Ft(.15,.022),Ve({map:mt(Xl(`${re} \xB7 ${ee[D.sec]}`,640,96),{repeat:!1}),roughness:.35,metalness:.6}),le,{cast:!1}).position.set(D.x+.075,z-l/2,g+6e-4)}continue}if(D.kind==="end"){let re=we(D.sec);if(re!=="none"){let Ce=rM(re,i,!!D.flip);le.add(Ce),Ce.position.set(D.x+(D.flip?.006:0),z,g-.1)}if(D.start&&ue){let Ce={reading:"Reading now",want:"To read",read:"Read"}[D.sec];Fe(new Ft(.15,.022),Ve({map:mt(Xl(`${Ce} \xB7 ${ee[D.sec]}`,640,96),{repeat:!1}),roughness:.35,metalness:.6}),le,{cast:!1}).position.set(D.x+.08,z-l/2,g+6e-4)}continue}let te=new kt(D.t,D.h,D.d),se=Fe(te,void 0,le);if(se.position.set(D.x+D.t/2+D.lean,z+D.h/2,g-.025-D.d/2),D.lean&&(se.rotation.z=-.07,se.position.x-=.004),se.userData={book:D.b,home:se.position.clone(),homeRot:se.rotation.clone(),dyn:!0,it:D},D.st==="reading"){let re=new ut(new kt(Math.max(.006,D.t*.28),.045,.002),Ve({color:"#9b1d22",roughness:.6}));re.position.set(0,D.h/2+.012,D.d/2-.02),se.add(re)}J.push(se)}let Z=0;for(let D of _e){let z=Ie-D.from;if(z<.22)continue;let te=v[D.r],se=g-.13,re=Z++%3,Ce=D.from+(z>.6?z*.35:.04);if(re===0)[[.24,.035,"#1F3350"],[.22,.03,"#6E1F24"],[.2,.04,"#4F6B3A"]].reduce((We,[j,De,Qe])=>(qe(j,De,.16,Ve({color:Qe,roughness:.7}),Ce+.12,We+De/2,se,le),We+De),te);else if(re===1)Fe(ir([[0,0],[.045,0],[.045,.01],[.012,.02],[.012,.09],[.03,.1],[.03,.11],[0,.11]]),i.brass,le).position.set(Ce+.06,te,se),Fe(new ln(.014,.014,.12,14),i.candle,le).position.set(Ce+.06,te+.17,se);else{Fe(ir([[0,0],[.045,0],[.055,.09],[.06,.09],[.06,.1],[0,.1]]),i.terracotta,le).position.set(Ce+.07,te,se);for(let We=0;We<9;We++){let j=Fe(new Qn(.04,8,6),i.leaf,le);j.scale.set(.5,1.4,.25);let De=We*.7;j.position.set(Ce+.07+Math.cos(De)*.035,te+.15+We%3*.03,se+Math.sin(De)*.035),j.rotation.set(Math.sin(De)*.5,De,Math.cos(De)*.6)}}}let me=null;function N(){let D=J.length,z=2048,te=D<=128?64:D<=252?48:40,se=te*7,re=Math.floor(z/te),Ce=Math.max(1,Math.ceil(D/re)),[We,j]=en(z,Math.min(z,jt.ceilPowerOfTwo(Ce*se))),De=We.height,Qe=yn=>yn?j.createPattern(yn,"repeat"):null,Te=Qe(e),yt=Qe(t);J.forEach((yn,ua)=>{let{book:os,it:Ui}=yn.userData,[da,cs]=Zl(os),Ct=ua%re*te,Jt=Math.floor(ua/re)*se,On=se-14;j.save(),j.beginPath(),j.rect(Ct,Jt,te,se),j.clip(),j.fillStyle=da,j.fillRect(Ct,Jt,te,se);let fa=Ui.variant===3?yt:Te;fa&&(j.globalCompositeOperation="overlay",j.globalAlpha=Ui.st==="want"?.35:.6,j.fillStyle=fa,j.fillRect(Ct,Jt,te,On),j.globalCompositeOperation="source-over",j.globalAlpha=1);let _i=j.createLinearGradient(Ct,0,Ct+te,0);_i.addColorStop(0,"rgba(0,0,0,.42)"),_i.addColorStop(.22,"rgba(255,255,255,.12)"),_i.addColorStop(.55,"rgba(0,0,0,0)"),_i.addColorStop(1,"rgba(0,0,0,.45)"),j.fillStyle=_i,j.fillRect(Ct,Jt,te,On);let pa=Ui.st==="want"?cs:"#e6c886";j.fillStyle=pa,j.strokeStyle=pa;let Ut=te/64;Ui.variant!==2&&(j.fillRect(Ct,Jt+22*Ut,te,3*Ut),j.fillRect(Ct,Jt+On-26*Ut,te,3*Ut)),Ui.variant===1&&(j.fillRect(Ct,Jt+28*Ut,te,1.5*Ut),j.fillRect(Ct,Jt+On-32*Ut,te,1.5*Ut));let Oi=Ui.st==="read"?Math.max(0,Math.min(5,Math.floor(os.rating||0))):0;j.font=`${Math.round(13*Ut)}px serif`,j.textAlign="center",j.textBaseline="middle";for(let Me=0;Me<Oi;Me++)j.fillText("\u2605",Ct+te/2,Jt+38*Ut+Me*13*Ut);let Oo=Jt+(Oi?38*Ut+Oi*13*Ut+6*Ut:40*Ut),ar=Jt+On-64*Ut-Oo;j.save(),j.translate(Ct+te/2,Oo+ar/2),j.rotate(Math.PI/2);let or=Math.min(26*Ut,te*.5);j.font=`${or}px "IM Fell English", Georgia, serif`;let ls=String(os.title);for(;j.measureText(ls).width>ar&&or>14*Ut;)or-=1,j.font=`${or}px "IM Fell English", Georgia, serif`;for(;j.measureText(ls).width>ar&&ls.length>3;)ls=ls.slice(0,-2).trimEnd()+"\u2026";j.fillStyle=Ui.st==="want"?cs:cs==="#2B1C0E"||cs==="#24170C"||cs==="#3A2614"?"#2a1a0c":"#ead19a",j.fillText(ls,0,1),j.restore();let ma=String(os.author||"").trim().split(/\s+/).pop()||"";if(ma){j.save(),j.translate(Ct+te/2,Jt+On-44*Ut),j.rotate(Math.PI/2);let Me=15*Ut;for(j.font=`${Me}px "IM Fell English", Georgia, serif`;j.measureText(ma).width>34*Ut&&Me>9*Ut;)Me-=1,j.font=`${Me}px "IM Fell English", Georgia, serif`;j.fillText(ma,0,1),j.restore()}j.fillStyle=da,j.fillRect(Ct,Jt+On,te,7),j.fillStyle="#e9dcbc",j.fillRect(Ct,Jt+On+7,te,7),j.restore();let ga=Ct/z,T=(Ct+te)/z,k=1-Jt/De,K=1-(Jt+On)/De,V=[(Ct+te/2)/z,1-(Jt+On+3.5)/De],q=[(Ct+te/2)/z,1-(Jt+On+10.5)/De],pe=yn.geometry.attributes.uv;for(let Me=0;Me<6;Me++)for(let xe=0;xe<4;xe++){let Se=Me*4+xe;if(Me===4){let Ue=pe.getX(Se),et=pe.getY(Se);pe.setXY(Se,ga+Ue*(T-ga),K+et*(k-K))}else Me===2||Me===3?pe.setXY(Se,q[0],q[1]):pe.setXY(Se,V[0],V[1])}pe.needsUpdate=!0});let tn=mt(We,{repeat:!1});me=Ve({map:tn,roughness:.72}),J.forEach(yn=>{yn.material=me}),ge.mat=me}Object.assign(ge,{meshes:J,paint:N,hidden:0,count:Ze.length,order:null,page:W,pages:S,all:ce,byId:new Map(J.map(D=>[D.userData.book.id,D]))})}Y();let ye=E+u+d,Re=new ut(new kt(s+.1,ye,r),new Zt({visible:!1}));return Re.position.set(0,ye/2,x),Re.userData.station="shelf",ht.add(Re),ge}function hM(){let[i,e]=en(256,128);e.fillStyle="#d9c9a0",e.fillRect(0,0,256,128);let t=Wn(5);e.fillStyle="#6f8a5a";for(let n=0;n<14;n++)e.beginPath(),e.ellipse(t()*256,20+t()*88,10+t()*26,6+t()*16,t()*3,0,7),e.fill();e.strokeStyle="rgba(90,60,30,.4)";for(let n=1;n<6;n++)e.beginPath(),e.moveTo(0,n*21),e.lineTo(256,n*21),e.stroke();return i}var Xm=`
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f*f*(3.0-2.0*f);
    return mix(mix(hash(i), hash(i+vec2(1,0)), u.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), u.x), u.y); }
  float fbm(vec2 p){ float v = 0.0, a = 0.5; for (int i = 0; i < 5; i++){ v += a*noise(p); p *= 2.03; a *= 0.5; } return v; }`;function uM(){let i=new bn({uniforms:{uTime:{value:0},uA:{value:.42}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform float uTime, uA; varying vec2 vUv;"+Xm+`
      void main(){ vec2 uv = vUv;
        float sway = (fbm(vec2(uv.y*2.0 - uTime*0.4, 3.1)) - 0.5) * 0.7 * uv.y;
        float n = fbm(vec2((uv.x + sway)*4.0, uv.y*3.0 - uTime*0.55));
        float col = smoothstep(0.42, 0.0, abs(uv.x - 0.5 + sway));
        float a = min(1.0, col * smoothstep(0.0, 0.18, uv.y) * pow(1.0 - uv.y, 1.1) * smoothstep(0.3, 0.62, n) * uA * 2.2);
        gl_FragColor = vec4(vec3(0.93, 0.93, 0.95), a); }`,transparent:!0,depthWrite:!1,side:Xt}),e=new bt;e.userData.dyn=!0;for(let t of[0,Math.PI/2]){let n=new ut(new Ft(.14,.32).translate(0,.16,0),i);n.rotation.y=t,n.userData.dyn=!0,n.renderOrder=7,e.add(n)}return e.material=i,e}function dM(){let[i,e]=en(512,128);e.fillStyle="#efe2c6",e.fillRect(0,0,512,128);for(let t=0;t<64;t++)e.fillStyle=t%2?"rgba(120,90,50,.10)":"rgba(255,255,255,.10)",e.fillRect(t*8,0,4,128);return e.fillStyle="#b8935a",e.fillRect(0,0,512,6),e.fillRect(0,122,512,6),i}function Dd(i){let e=new bt;ht.add(e);let t=Dd.M,n=-3,s=1.68,r=.32,a=1.6,o=.9,c=.75,l=1.06;qe(r,l,(a-o)/2,t.stoneSurround,n+r/2,l/2,s-o/2-(a-o)/4,e),qe(r,l,(a-o)/2,t.stoneSurround,n+r/2,l/2,s+o/2+(a-o)/4,e),qe(r,l-c,o,t.stoneSurround,n+r/2,c+(l-c)/2,s,e),qe(.03,c,o,t.firebrick,n+.05,c/2,s,e),qe(r-.07,c,.025,t.firebrick,n+.065+(r-.07)/2,c/2,s-o/2+.0125,e),qe(r-.07,c,.025,t.firebrick,n+.065+(r-.07)/2,c/2,s+o/2-.0125,e),qe(r-.07,.02,o-.05,t.firebrick,n+.065+(r-.07)/2,c-.011,s,e),qe(.72,.04,a+.3,t.slate,n+.36,.02,s,e),qe(.44,.065,a+.26,t.trim,n+.22,l+.0325,s,e),qe(.38,.035,a+.12,t.trim,n+.19,l-.0175,s,e);for(let U of[-1,1])qe(.06,.12,.06,t.trim,n+r+.02,l-.07,s+U*(a/2-.08),e);for(let U of[-.2,0,.2])qe(.26,.015,.012,t.iron,n+.17,.09,s+U,e);for(let U of[-1,1])qe(.012,.09,.012,t.iron,n+.27,.045,s+U*.26,e);let h=[[n+.12,.12,s,.05,.62,.08,0],[n+.21,.125,s-.02,.045,.58,-.12,.05],[n+.16,.19,s+.03,.04,.5,.25,-.2]];for(let[U,R,B,H,G,ie,X]of h){let $=Fe(new ln(H,H*1.05,G,12).rotateX(Math.PI/2),t.logs,e);$.position.set(U,R,B),$.rotation.set(X,ie,0)}Fe(new Ft(.24,.6).rotateX(-Math.PI/2),new Zt({map:mt(pM(),{repeat:!1}),color:"#ffffff"}),e,{cast:!1}).position.set(n+.16,.045,s);let d=new bn({uniforms:{uTime:{value:0},uI:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform float uTime, uI; varying vec2 vUv;"+Xm+`
      void main(){ vec2 uv = vUv;
        float n = fbm(vec2(uv.x*3.2 + 7.0, uv.y*2.4 - uTime*1.7));
        float n2 = fbm(vec2(uv.x*6.0 - 3.0, uv.y*4.0 - uTime*2.6));
        float width = 1.0 - pow(abs(uv.x - 0.5)*2.0, 1.4);
        float f = (n*1.15 + n2*0.35 - uv.y*1.05) * width + 0.25*(1.0 - uv.y)*width;
        f = smoothstep(0.08, 0.62, f);
        vec3 c = mix(vec3(0.85,0.16,0.02), vec3(1.0,0.62,0.16), smoothstep(0.15, 0.6, f));
        c = mix(c, vec3(1.0,0.93,0.68), smoothstep(0.7, 1.0, f));
        gl_FragColor = vec4(c*f*uI, f*uI); }`,transparent:!0,blending:Fn,depthWrite:!1,side:Xt}),f=[];for(let[U,R,B,H]of[[0,.62,.55,0],[.9,.42,.5,-.08],[-.9,.42,.48,.09],[Math.PI/2,.3,.45,0]]){let G=new ut(new Ft(R,B).translate(0,B/2,0),d);G.rotation.y=Math.PI/2+U,G.position.set(n+.17,.08,s+H),G.renderOrder=8,G.userData.dyn=!0,e.add(G),f.push(G)}let g=50,x=new Float32Array(g*3),m=Wn(17);for(let U=0;U<g*3;U++)x[U]=m();let p=new Tt;p.setAttribute("position",new qt(x,3));let _=new bn({uniforms:{uTime:{value:0},uSize:{value:14*gi},uO:{value:new P(n+.17,.12,s)}},vertexShader:`uniform float uTime, uSize; uniform vec3 uO; varying float vA;
      void main(){ vec3 s = position; float life = fract(s.x + uTime*(0.25 + 0.3*s.y));
        vec3 p = uO + vec3((s.z-0.5)*0.12 + sin(uTime*3.0 + s.y*20.0)*0.02, life*0.65, (s.y-0.5)*0.5 + sin(uTime*2.0 + s.z*9.0)*0.03);
        vA = (1.0 - life) * smoothstep(0.0, 0.1, life);
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_PointSize = uSize*(0.4 + s.z)/-mv.z; gl_Position = projectionMatrix*mv; }`,fragmentShader:"varying float vA; void main(){ float d = length(gl_PointCoord-0.5); float a = smoothstep(0.5,0.0,d)*vA; gl_FragColor = vec4(vec3(1.0,0.6,0.2)*a, a); }",transparent:!0,blending:Fn,depthWrite:!1}),M=new Ji(p,_);M.frustumCulled=!1,M.userData.dyn=!0,e.add(M);let v=new xn("#ff8c3a",2,5.5,2);v.position.set(n+.55,.45,s),e.add(v);let E=new ut(new Ft(1.8,1.6).rotateX(-Math.PI/2),new Zt({map:mt(Km(),{repeat:!1}),color:"#ff9a4a",transparent:!0,blending:Fn,depthWrite:!1,opacity:.35}));E.position.set(n+.6,.046,s),E.renderOrder=4,e.add(E);let w=new ut(new kt(.8,1.3,a+.2),new Zt({visible:!1}));w.position.set(n+.4,.65,s),w.userData.station="hearth",e.add(w);let b=l+.065;Un(i.clock,n+.2,b,s,Math.PI/2,1.05);for(let U of[-1,1]){let R=i.candlestick&&(U<0?i.candlestick:i.candlestick.clone());if(R){Un(R,n+.2,b,s+U*.78,0,1.15);let B=jm();B.position.set(n+.2,b+.275,s+U*.78),ht.add(B)}}let y=Un(i.vase,n+.19,b,s-.42,.3,.45);if(i.painting){let U=i.painting.clone(!0);U.traverse(R=>{R.isMesh&&/canvas/.test(R.material.name)&&(R.material=R.material.clone(),R.material.map=null,R.material.color.set("#3a2a1c"),Id.mantel=R.material,R.material.needsUpdate=!0)}),Un(U,n+.005,b+.62,s,Math.PI/2,2.25,{cast:!1})}let F=Un(i.elephant,n+.2,b,s+.42,Math.PI/2+.3,1.7),A=new bt;A.userData.dyn=!0,e.add(A);function L(U){A.traverse(ie=>{ie.isMesh&&(ie.geometry.dispose(),ie.material.map&&(ie.material.map.dispose(),ie.material.dispose()))}),A.clear();let R=Object.keys(U||{}).sort(),B=R.length,H;if(B<=2)H=[-.42,.42].slice(0,B);else{let ie=Math.ceil(B/2),X=B-ie,$=(Q,ge,Ge)=>Ge*(.2+(Q+.5)*(.48/ge));H=[...Array.from({length:ie},(Q,ge)=>$(ge,ie,-1)),...Array.from({length:X},(Q,ge)=>$(ge,X,1))]}H.sort((ie,X)=>Math.abs(X)-Math.abs(ie));let G=B>2?Math.min(.85,.48/Math.ceil(B/2)/.17):.85;R.forEach((ie,X)=>{let $=fM(ie,t);$.scale.setScalar(G),$.position.set(n+.21,b,s+H[X]),$.traverse(Q=>{Q.userData.dyn=!0,Q.isMesh&&(Q.userData.trophy=ie)}),A.add($)}),y&&(y.visible=!R.length),F&&(F.visible=R.length<2),zt.shadowMap.needsUpdate=!0}let I=2;return{setTrophies:L,setLight(U){I=Rn==="night"?4.2:1.6},tick(U){d.uniforms.uTime.value=U,_.uniforms.uTime.value=U;let R=.82+.1*Math.sin(U*9.1)+.08*Math.sin(U*23.7+1.3)*Math.sin(U*3.3);v.intensity=I*R,E.material.opacity=(Rn==="night"?.5:.28)*R}}}function fM(i,e){let t=new bt,n=Fe(new na(.12,.045,.12,2,.006),e.trim,t);n.position.y=.0225,Fe(new Ft(.08,.024).rotateY(Math.PI/2),Ve({map:mt(Xl(String(i),256,76),{repeat:!1}),roughness:.35,metalness:.6}),t,{cast:!1}).position.set(.0605,.0225,0);let r=new bt;r.position.y=.045,r.rotation.y=Math.PI/2,t.add(r),Fe(ir([[0,0],[.05,0],[.05,.016],[.03,.026],[.011,.046],[.011,.09],[.028,.11],[.06,.155],[.067,.205],[.061,.205],[.019,.12],[0,.12]],32),e.gold,r);for(let a of[-1,1]){let o=Fe(new Ei(.032,.0055,8,20,Math.PI),e.gold,r);o.rotation.z=a*-Math.PI/2,o.position.set(a*.064,.17,0)}return t}function pM(){let[i,e]=en(128,256);e.fillStyle="#1a0a04",e.fillRect(0,0,128,256);let t=Wn(8);for(let n=0;n<160;n++){let s=t()*128,r=t()*256,a=3+t()*9,o=e.createRadialGradient(s,r,0,s,r,a);o.addColorStop(0,`rgba(255,${120+t()*100},40,1)`),o.addColorStop(1,"rgba(120,20,0,0)"),e.fillStyle=o,e.beginPath(),e.arc(s,r,a,0,7),e.fill()}return i}function jm(){let i=new xs({map:mt(Jm(),{repeat:!1}),blending:Fn,depthWrite:!1,transparent:!0}),e=new zs(i);return e.scale.set(.03,.06,1),e}function mM(i,e,t){let r=t-.04,a=Fe(new na(.66,.04,1.32,2,.008),i.trim,e);a.position.y=t-.02;let o=Fe(new Ft(.66-.14,1.32-.2).rotateX(-Math.PI/2),Ve({map:mt(gM(),{repeat:!1}),roughness:.55,normalMap:Yn.leather?ri(Yn.leather,.2,.2):null}),e,{cast:!1});o.position.y=t+8e-4;for(let h of[-1,1]){let u=h*.45000000000000007;qe(.66-.06,r-.06,.4,i.caseDark,0,.06+(r-.06)/2,u,e),qe(.66-.02,.06,.42,i.trim,0,.03,u,e);let d=(r-.08)/3;for(let f=0;f<3;f++){let g=.07+d*f+d/2;qe(.014,d-.016,.36,i.caseSide,.66/2-.03+.007,g,u,e),Fe(new ln(.006,.006,.09,8).rotateX(Math.PI/2),i.brass,e).position.set(.66/2-.01,g+d*.15,u);for(let m of[-.045,.045])Fe(new ln(.004,.004,.02,6).rotateZ(Math.PI/2),i.brass,e).position.set(.66/2-.018,g+d*.15,u+m)}}let c=1.32-.84;qe(.66-.06,.1,c,i.caseDark,0,r-.05,0,e),qe(.014,.08,c-.03,i.caseSide,.66/2-.023,r-.05,0,e),Fe(new ln(.006,.006,.12,8).rotateX(Math.PI/2),i.brass,e).position.set(.66/2-.008,r-.05,0),qe(.02,r-.2,c,i.caseDark,-.66/2+.06,.1+(r-.2)/2,0,e)}function gM(){let[i,e]=en(512,1024);e.fillStyle="#284531",e.fillRect(0,0,512,1024);let t=Wn(3);for(let n=0;n<5e3;n++)e.fillStyle=`rgba(${t()<.5?"0,0,0":"120,160,120"},${t()*.06})`,e.fillRect(t()*512,t()*1024,3,3);return e.strokeStyle="#c9a15b",e.lineWidth=5,e.strokeRect(14,14,484,996),e.lineWidth=2,e.strokeRect(28,28,456,968),i}function bM(i,e,t){let n=new bt;ht.add(n),n.position.set(-2.655,0,-.6);let s=.736;mM(i,n,s+.022);let r=new bt;n.add(r),r.position.set(-.17,s+.022,-.46),Fe(ir([[0,0],[.085,0],[.085,.015],[.06,.03],[.012,.035],[0,.035]]),i.brass,r);let a=Fe(new ln(.008,.008,.3,10),i.brass,r);a.position.y=.17;let o=Ve({color:"#1f5a3a",roughness:.15,metalness:.1,emissive:"#2a7a4a",emissiveIntensity:0,side:Xt}),c=Fe(new ln(.075,.075,.3,24,1,!0,0,Math.PI).rotateZ(Math.PI/2),o,r);c.rotation.y=Math.PI/2,c.position.set(.05,.33,0);let l=new Zt({color:"#ffd28a"});Fe(new Qn(.02,12,8),l,r,{cast:!1}).position.set(.05,.31,0);let u=new xn("#ffb35c",1,3.2,2);u.position.set(.06,.27,0),r.add(u);let d=xt.books.find(R=>R.status==="reading")||null,f=new bt;n.add(f),f.userData.dyn=!0,f.position.set(.06,s+.024,0),f.rotation.y=-Math.PI/2;let[g]=d?Zl(d):["#6E1F24"];qe(.36,.008,.25,Ve({color:g,roughness:.6}),0,.004,0,f);let x=Ve({map:mt(xM(d),{repeat:!1}),roughness:.9}),m=new Ft(.34,.23,24,1).rotateX(-Math.PI/2),p=m.attributes.position;for(let R=0;R<p.count;R++){let B=p.getX(R);p.setY(R,.012+.02*Math.sin(Math.min(1,Math.abs(B)/.17)*Math.PI*.5)*(1-Math.abs(B)/.34)-(Math.abs(B)<.01?.006:0))}m.computeVertexNormals();let _=Fe(m,x,f,{cast:!1});_.userData.deskBook=!0;let M=new bt;n.add(M),M.position.set(.17,s+.028,.18),M.rotation.y=.5;for(let R of[-1,1]){let B=Fe(new Ei(.022,.0025,8,24).rotateX(Math.PI/2),i.gold,M);B.position.x=R*.028}let v=Fe(new Ei(.008,.002,6,10,Math.PI),i.gold,M);v.rotation.x=-Math.PI/2;let E=new bt;n.add(E),E.position.set(-.2,s+.022,.5),Fe(ir([[0,0],[.05,0],[.05,.008],[.015,.02],[.015,.04],[.025,.05],[0,.05]]),i.brass,E);let w=Fe(new ln(.016,.017,.14,14),i.candle,E);w.position.y=.12;let b=new xs({map:mt(Jm(),{repeat:!1}),blending:Fn,depthWrite:!1,transparent:!0}),y=new zs(b);y.scale.set(.035,.07,1),y.position.y=.215,E.add(y),y.userData.dyn=!0;let F=new xn("#ff9d47",0,2.2,2);F.position.y=.25,E.add(F),[[.26,.04,"#2E5E5E"],[.24,.032,"#C2902F"],[.22,.045,"#5B2F4A"]].reduce((R,[B,H,G],ie)=>{let X=qe(B*.7,H,B,Ve({color:G,roughness:.65}),0,R+H/2,0,n);return X.position.set(-.16,s+.022,.12),X.rotation.y=ie*.12,R+H},0),t.deskchair&&Un(t.deskchair,-1.98,0,-.6,-Math.PI/2,1);let A=new bt;t.deskchair||n.add(A),A.position.set(.68,0,0),A.rotation.y=Math.PI/2;let L=Fe(new na(.44,.04,.42,2,.015),i.trim,A);L.position.y=.46;for(let[R,B]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let H=Fe(new ln(.014,.018,.47,10),i.trim,A);H.position.set(R*.17,.225,B*.15),H.rotation.set(B*.08,0,-R*.08)}for(let R=0;R<6;R++){let B=Fe(new ln(.008,.008,.42,8),i.trim,A);B.position.set(-.15+R*.06,.69,.19),B.rotation.x=-.1}let I=Fe(new Ei(.24,.018,8,24,Math.PI*.55),i.trim,A);I.rotation.set(-.1,0,Math.PI*.225),I.position.set(0,.68,.21),I.scale.set(1,.5,1);let U=new ut(new kt(1,1.4,1.6),new Zt({visible:!1}));return U.position.set(0,.7,0),U.userData.station="desk",n.add(U),{reading:d,openBook:f,setLight(R,B){u.intensity=R,o.emissiveIntensity=Rn==="night"?.35:.05,l.color.set(Rn==="night"?"#ffe2a8":"#c9b48a"),F.intensity=B,y.visible=B>0,i.candle.emissiveIntensity=B>0?.25:0,this.candleBase=B},tick(R){if(!y.visible)return;let B=.85+.15*Math.sin(R*11.3)*Math.sin(R*6.7+1);F.intensity=this.candleBase*B,y.scale.set(.035,.07*(.92+.12*B),1)}}}function xM(i){let[e,t]=en(1024,692);t.fillStyle="#efe3c8",t.fillRect(0,0,1024,692);let n=t.createLinearGradient(440,0,584,0);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(.5,"rgba(60,40,20,.28)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(440,0,144,692),t.fillStyle="#3a2a1c",t.textAlign="center",t.font='italic 34px "IM Fell English", Georgia, serif',t.fillText(i?String(i.title).slice(0,34):"Chapter One",256,86),t.font='26px "IM Fell English", Georgia, serif',t.fillText(i&&i.author?String(i.author).slice(0,40):"",256,124);let s=Wn(21);t.fillStyle="rgba(58,42,28,.55)";for(let[r,a]of[[70,170],[574,70]])for(let o=0;o<(a===70?19:15);o++){let c=r+(o===0?36:0);for(;c<r+380;){let l=14+s()*46;t.fillRect(c,a+o*30,Math.min(l,r+380-c),7),c+=l+9}}return e}function Km(){let[i,e]=en(128,128),t=e.createRadialGradient(64,64,2,64,64,64);return t.addColorStop(0,"rgba(255,240,210,.9)"),t.addColorStop(.25,"rgba(255,200,120,.35)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),i}function Jm(){let[i,e]=en(64,128),t=e.createRadialGradient(32,84,2,32,74,50);return t.addColorStop(0,"rgba(255,250,220,1)"),t.addColorStop(.25,"rgba(255,190,90,.9)"),t.addColorStop(.6,"rgba(255,120,30,.25)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.beginPath(),e.ellipse(32,72,22,52,0,0,Math.PI*2),e.fill(),i}function _M(i,e,t,n){let s=i.computeFrenetFrames(e,!1),r=i.getLength(),a=[],o=[],c=[],l=[];for(let u=0;u<=e;u++){let d=u/e,f=i.getPointAt(d),g=s.normals[u],x=s.binormals[u],m=n(d);for(let p=0;p<=t;p++){let _=p/t*Math.PI*2,M=Math.cos(_),v=Math.sin(_),E=new P().addScaledVector(g,M).addScaledVector(x,v).normalize();a.push(f.x+E.x*m,f.y+E.y*m,f.z+E.z*m),o.push(E.x,E.y,E.z),c.push(p/t*.25,d*r)}}for(let u=0;u<e;u++)for(let d=0;d<t;d++){let f=u*(t+1)+d,g=f+t+1;l.push(f,g,f+1,g,g+1,f+1)}let h=new Tt;return h.setAttribute("position",new nt(a,3)),h.setAttribute("normal",new nt(o,3)),h.setAttribute("uv",new nt(c,2)),h.setIndex(l),h.toNonIndexed()}function vM(i){let e=new bt;ht.add(e),e.position.set(2.25,0,.1),e.rotation.y=-1.1;let t=Wn(31),n=[];for(let y=0;y<7;y++){let F=y/7*Math.PI*2+t()*.4,A=1.5+t()*.5,L=.3+t()*.18,I=(R,B,H)=>new P(Math.cos(F+H)*R,B,Math.sin(F+H)*R),U=new ys([I(L+.12,0,-.25),I(L,.025,0),I(.2,.09,.35),I(.075,.32,A*.45),I(.055,.55,A*.75),I(.07,.7,A),I(.11+t()*.03,.79,A+.3),I(.14+t()*.03,.815,A+.5)]);n.push(_M(U,90,10,R=>1.35*(R<.14?.01+.042*(R/.14):R<.55?.052-.016*((R-.14)/.41):.036-.026*((R-.55)/.45))))}Fe(Gu(n,!1),i.bark,e);let s=qe(.44,.03,.32,i.trim,0,0,0,e);s.position.set(0,.905,0),s.rotation.x=.32;let r=new bt;e.add(r),r.position.set(0,.93,0),r.rotation.x=.32,r.userData.dyn=!0;let a=mt(yM(),{repeat:!1}),o=Ve({color:"#cfc2a2",roughness:.9,emissive:"#7fc4ff",emissiveMap:a,emissiveIntensity:.6}),c=[];for(let y of[-1,1]){let F=new bt;r.add(F),F.userData.dyn=!0;let A=Fe(new kt(.21,.014,.3),i.tomeLeather,F,{cast:!1});A.position.x=y*.105;let L=Fe(new kt(.195,.03,.28),[i.paper,i.paper,o,i.paper,i.paper,i.paper],F,{cast:!1});L.position.set(y*.1,.022,0);let I=L.geometry.attributes.uv;for(let U=8;U<12;U++)I.setX(U,y<0?I.getX(U)*.5:.5+I.getX(U)*.5);for(let U of[-1,1])Fe(new kt(.03,.016,.03),i.gold,F,{cast:!1}).position.set(y*.195,.001,U*.135);F.userData.sx=y,c.push(F),F.traverse(U=>{U.userData.tome=!0,U.userData.dyn=!0})}let l=mt(MM(),{repeat:!1}),h=new Zt({map:l,transparent:!0,blending:Fn,depthWrite:!1,side:Xt,color:"#9fd0ff"}),u=[.34,.24].map((y,F)=>{let A=Fe(new so(y*.78,y,64).rotateX(-Math.PI/2),h,e,{cast:!1,recv:!1});return A.position.y=1.18+F*.1,A.userData.dyn=!0,A}),d=new xn("#9db8ff",1,3.2,2);d.position.set(0,1.55,.25),e.add(d);let f=140,g=new Float32Array(f*3),x=Wn(99);for(let y=0;y<f;y++)g[y*3]=x(),g[y*3+1]=x(),g[y*3+2]=x();let m=new Tt;m.setAttribute("position",new qt(new Float32Array(f*3),3)),m.setAttribute("seed",new qt(g,3));let p=new bn({uniforms:{uTime:{value:0},uSize:{value:30*gi},uA:{value:1},uBoost:{value:0}},vertexShader:`uniform float uTime, uSize, uBoost; attribute vec3 seed; varying float vA;
      void main(){ float life = fract(seed.x + uTime*(0.06+0.05*seed.y)*(1.0+uBoost*2.0));
        float a = seed.z*6.283 + life*5.0; float rad = 0.08 + 0.22*seed.y*(1.0-life*0.5);
        vec3 p = vec3(cos(a)*rad, 0.98 + life*(0.7+0.5*uBoost), sin(a)*rad);
        vA = smoothstep(0.0,0.15,life)*(1.0-life);
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_PointSize = uSize*(0.5+seed.y)/-mv.z; gl_Position = projectionMatrix*mv; }`,fragmentShader:`uniform float uA; varying float vA;
      void main(){ float d = length(gl_PointCoord-0.5); float a = smoothstep(0.5,0.0,d)*vA*uA; gl_FragColor = vec4(vec3(0.7,0.85,1.0)*a, a); }`,transparent:!0,blending:Fn,depthWrite:!1}),_=new Ji(m,p);_.frustumCulled=!1,e.add(_);let M=new ut(new ln(.5,.5,1.6,12),new Zt({visible:!1}));M.position.y=.8,M.userData.station="tome",e.add(M);let v=.32,E=.32,w=0,b=1;return{group:e,setLight(y){b=y},wake(){v=.06,w=1},rest(){v=.32},tick(y,F){E+=(v-E)*Math.min(1,F*3),w=Math.max(0,w-F*.25);for(let L of c)L.rotation.z=L.userData.sx*E;u[0].rotation.y=y*.25*(1+w*3),u[1].rotation.y=-y*.4*(1+w*3);let A=.8+.2*Math.sin(y*1.7)+w;h.opacity=(Rn==="night"?.9:.55)*Math.min(1.3,A),o.emissiveIntensity=(Rn==="night"?.8:.7)*A,d.intensity=b*A,p.uniforms.uTime.value=y,p.uniforms.uBoost.value=w,p.uniforms.uA.value=Rn==="night"?1:.6},setDpr(y){p.uniforms.uSize.value=30*y}}}function yM(){let[i,e]=en(512,256);e.fillStyle="#000",e.fillRect(0,0,512,256);let t=Wn(42);e.strokeStyle="#fff",e.lineWidth=2.2,e.lineCap="round";for(let n of[0,256])for(let s=0;s<7;s++)for(let r=0;r<6;r++){let a=n+36+r*34,o=30+s*32;e.globalAlpha=.4+t()*.6,e.beginPath();for(let c=0;c<3;c++){let l=t()*6.28;e.moveTo(a+Math.cos(l)*9,o+Math.sin(l)*9),e.lineTo(a+Math.cos(l+2+t())*9,o+Math.sin(l+2+t())*9)}t()<.4&&e.arc(a,o,4+t()*4,0,6.28),e.stroke()}return e.globalAlpha=1,i}function MM(){let[i,e]=en(512,512);e.translate(256,256),e.strokeStyle="rgba(255,255,255,.9)",e.lineWidth=3,e.beginPath(),e.arc(0,0,250,0,7),e.stroke(),e.beginPath(),e.arc(0,0,206,0,7),e.stroke();let t=Wn(77);e.lineWidth=2.5;for(let n=0;n<28;n++){e.save(),e.rotate(n/28*Math.PI*2),e.translate(0,-228),e.beginPath();for(let s=0;s<3;s++){let r=t()*6.28;e.moveTo(Math.cos(r)*9,Math.sin(r)*9),e.lineTo(Math.cos(r+2.2)*9,Math.sin(r+2.2)*9)}e.stroke(),e.restore()}return i}function SM(i,e){let n=[[i.y0,i.z0],[i.y1,i.z0],[i.y1,i.z1],[i.y0,i.z1]].map(([h,u])=>new P(-3,h,u)),s=n.map(h=>h.clone().addScaledVector(e,3.9)),r=[],a=[];for(let h=0;h<4;h++){let u=(h+1)%4;for(let[d,f]of[[n[h],0],[n[u],0],[s[u],1],[n[h],0],[s[u],1],[s[h],1]])r.push(d.x,d.y,d.z),a.push(f)}let o=new Tt;o.setAttribute("position",new nt(r,3)),o.setAttribute("along",new nt(a,1)),o.computeVertexNormals();let c=new bn({uniforms:{uColor:{value:new P(1,.8,.5)},uA:{value:.14},uTime:{value:0},uDir:{value:e}},vertexShader:`attribute float along; varying float vAl; varying vec3 vN; varying vec3 vV; varying vec3 vW;
      void main(){ vAl = along; vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix)*normal); vV = normalize(cameraPosition - w.xyz);
        gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`uniform vec3 uColor, uDir; uniform float uA, uTime; varying float vAl; varying vec3 vN; varying vec3 vV; varying vec3 vW;
      void main(){ float facing = pow(abs(dot(normalize(vN), normalize(vV))), 1.6);
        float fade = pow(1.0 - vAl, 1.4) * smoothstep(0.0, 0.08, vAl + 0.02);
        vec3 q = vW - uDir*((vW.x + 3.0)/uDir.x);   // where this bit of light came through the window
        float shafts = 0.65 + 0.35*sin(q.z*13.0 + 1.3*sin(q.y*5.0)) * sin(q.z*5.3 - q.y*2.1 + 0.7);
        float shimmer = shafts * (0.9 + 0.1*sin(q.z*9.0 + uTime*0.35));
        float a = uA * facing * fade * shimmer; gl_FragColor = vec4(uColor*a, a); }`,transparent:!0,blending:Fn,depthWrite:!1,side:Xt}),l=new ut(o,c);return l.frustumCulled=!1,l.renderOrder=5,l.userData.dyn=!0,ht.add(l),l}function EM(i,e){let t=Ql?260:420,n=new Float32Array(t*3),s=Wn(5);for(let c=0;c<t;c++)n[c*3]=-2.95+s()*3.4,n[c*3+1]=s()*2.7,n[c*3+2]=-2.3+s()*3;let r=new Tt;r.setAttribute("position",new qt(n,3));let a=new bn({uniforms:{uTime:{value:0},uDir:{value:e},uWin:{value:new St(i.y0,i.y1,i.z0,i.z1)},uSize:{value:7*gi},uColor:{value:new P(1,.9,.7)},uA:{value:1}},vertexShader:`uniform float uTime, uSize; uniform vec3 uDir; uniform vec4 uWin; varying float vA;
      void main(){ vec3 s = position; vec3 p = s;
        p.y = mod(s.y - uTime*0.012*(0.5+fract(s.x*7.31)), 2.7) + 0.05;
        p.x += sin(uTime*0.21 + s.z*5.0)*0.06; p.z += cos(uTime*0.17 + s.x*4.0)*0.06;
        float k = (p.x + 3.0)/uDir.x; vec3 q = p - uDir*k;
        float inB = step(0.0,k)*step(uWin.x,q.y)*step(q.y,uWin.y)*step(uWin.z,q.z)*step(q.z,uWin.w);
        float tw = 0.55 + 0.45*sin(uTime*1.7 + s.x*31.0 + s.z*17.0);
        vA = mix(0.07, 1.0, inB) * tw;
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_PointSize = uSize*(0.6+fract(s.z*13.7))*(1.0+inB*0.6)/-mv.z; gl_Position = projectionMatrix*mv; }`,fragmentShader:`uniform vec3 uColor; uniform float uA; varying float vA;
      void main(){ float d = length(gl_PointCoord-0.5); float a = smoothstep(0.5,0.0,d)*vA*uA*0.8; gl_FragColor = vec4(uColor*a, a); }`,transparent:!0,blending:Fn,depthWrite:!1}),o=new Ji(r,a);return o.frustumCulled=!1,o.userData.dyn=!0,o.renderOrder=6,ht.add(o),o}var sr={room:{p:[1,1.65,2.55],t:[-.7,1.05,-1.5],w:4.4,h:2.6,max:5.2},shelf:{p:[0,1.4,-.95],t:[0,1.2,-2.4],w:1.25,h:1,max:2.15},desk:{p:[-1.25,1.55,.55],t:[-2.65,.82,-.6],w:1.5,h:1.2,max:2.4},hearth:{p:[-.5,1.45,2.3],t:[-2.7,.95,1.6],w:2.1,h:2,max:2.9},tome:{p:[.6,1.6,.95],t:[2.25,1.08,.1],w:1.3,h:1.4,max:2.4},nook:{p:[1.45,1.3,-1.35],t:[2.55,.85,-2.35],w:.8,h:.8,max:1.6}},he={pos:new P,dir:new P(0,0,-1),dist:2,yaw:0,pitch:0,vyaw:0,vpitch:0,vx:0},Qt="room",At=null;function Ld(){return innerWidth/innerHeight<1}var Do=null,Ym=null;function la(i){let e=sr[i],t=new P(...e.p),n=new P(...e.t),s=n.clone().sub(t),r=s.length();s.normalize();let a=2*Math.atan(Math.tan(jt.degToRad(fn.fov)/2)*fn.aspect),o=Math.max(e.w/2/Math.tan(a/2),e.h/2/Math.tan(jt.degToRad(fn.fov)/2)),c=Math.min(e.max,Math.max(r,o)),l=n.clone().addScaledVector(s,-c);return i==="shelf"&&Do?wM(s):(l.x=jt.clamp(l.x,-2.75,2.75),l.z=Math.min(l.z,2.6),{pos:l,dir:n.clone().sub(l).normalize(),dist:n.distanceTo(l)})}function TM(){let i=64;for(let e of[".topbar",".toolbar","#timerChip","#roomGoals"]){let t=rt?document.querySelector(e):null;t&&!t.hidden&&t.offsetParent!==null&&(i=Math.max(i,t.getBoundingClientRect().bottom+6))}return i}function wM(i){let e=Math.tan(jt.degToRad(fn.fov)/2),t=e*fn.aspect,n=innerHeight,s=Math.min(.3,TM()/n),r=Math.max(s+.4,(n-132)/n),a=r-s,o=(s+r)/2,[c,l]=Do,[h,u]=Ym,d=(u-h+.08)/a/2/e,f=Math.min(l-c,Ld()?.66:1.25)/2/t,g=jt.clamp(Math.max(d,f),.75,sr.shelf.max),x=2*g*t,m=2*g*e,p;if(l-c<=x-.1)p=(c+l)/2;else{let v=Oe&&Oe.books.meshes.length?t0(Math.max(0,Ni)):null;p=jt.clamp(v?v.userData.home.x:c,c+x/2-.05,l-x/2+.05)}return{pos:new P(p,(h+u)/2-(.5-o)*m,sr.shelf.t[2]).clone().addScaledVector(i,-g),dir:i.clone(),dist:g}}function eh(){if(!Do)return null;let i=Math.tan(jt.degToRad(fn.fov)/2)*fn.aspect,e=2*Math.max(.3,he.pos.z-sr.shelf.t[2])*i,[t,n]=Do;return n-t<=e-.1?null:{lo:t+e/2-.05,hi:n-e/2+.05,perPx:e/innerWidth}}var Lo=matchMedia("(prefers-reduced-motion: reduce)");function ra(i,e=1.5,{arrive:t=!0}={}){_t||(vn(),Rt&&(Rt.userData.anim=-1,Rt=null),Nd(i,e,t),i!=="tome"&&Oe&&Oe.tome.rest(),i==="shelf"&&Oe&&!Oe.books.meshes.length&&rt?xi('<h2>Your shelves are empty</h2><div class="meta">Add the first book and it will stand here, or bring your library over from Goodreads or StoryGraph.</div><div class="acts"><button type="button" data-act="add">Add a book</button><button type="button" class="quiet" data-act="import">Import</button></div>'):i==="shelf"&&Oe&&RM())}function Nd(i,e,t){Lo.matches&&(e=Math.min(e,.35)),Qt=i,he.vx=0,document.querySelectorAll(".stations button").forEach(s=>s.setAttribute("aria-pressed",String(s.dataset.go===i)));let n=la(i);At={t:0,dur:e,flat:Lo.matches,from:{pos:he.pos.clone(),dir:ha(),dist:he.dist},to:n,arrive:t?i:null},he.yaw=0,he.pitch=0,he.vyaw=0,he.vpitch=0,Fi()}function AM(i){i!==Qt||!rt||_t||!dt("card").hidden||document.querySelector("dialog[open]")||(i==="desk"?th():i==="hearth"?Hd():i==="tome"?DM():i==="room"&&PM())}var Cm="tomestead.shelfhint";function RM(){let i=0;try{i=Number(localStorage.getItem(Cm))||0}catch{}if(!(i>=3)){try{localStorage.setItem(Cm,String(i+1))}catch{}CM("Tap a spine to pull it out \xB7 tap it again to read it",4200,1400)}}var Pm=0;function CM(i,e,t=0){setTimeout(()=>{let n=dt("hint");n.textContent=i,n.classList.add("show"),clearTimeout(Pm),Pm=setTimeout(()=>n.classList.remove("show"),e)},t)}var $m="tomestead.tour.v1",Zm=()=>{try{return localStorage.getItem($m)==="1"}catch{return!0}},Qm=()=>{try{localStorage.setItem($m,"1")}catch{}};function PM(){if(rt){if(!xt.books.length)return IM();Zm()||No(0)}}function IM(){xi(`<div class="eyebrow">Welcome</div><h2>This is your reading room</h2>
    <div class="meta">Every book you\u2019ve read, are reading or want to read gets its own spine on the bookcase. Start with one book, or bring your whole library over.</div>
    <div class="acts"><button type="button" data-act="add">Add your first book</button><button type="button" class="quiet" data-act="import">Import from Goodreads or StoryGraph</button><button type="button" class="quiet" data-act="tour">Show me around</button></div>`,"welcome")}var xd=[["Getting around","Tap a place along the bottom (Shelf, Desk, Fireside or Tome) to walk over. Drag anywhere to look around."],["Your bookcase","Tap a spine and it slides out a little. Tap it again and it comes down to the desk and opens. Drag to slide along the shelves; the magnifier finds any book."],["Desk, fire and tome","The desk keeps a reading timer. The fireside holds your streak, calendar, goals and year in books, and your trophies stand on the mantel. Wake the tome for what to read next."],["Everything else","Your reading goals stay at the top. + Add is up there too, and the \u2022\u2022\u2022 menu has imports, backups, tags, Customize (wallpaper, wood, paintings) and Send feedback."]];function No(i){let[e,t]=xd[i],n=i===xd.length-1;xi(`<div class="eyebrow">A quick tour \xB7 ${i+1} of ${xd.length}</div><h2>${e}</h2><div class="meta">${t}</div>
    <div class="acts">${n?'<button type="button" data-act="tour-done">Got it</button>':`<button type="button" data-act="tour-next" data-i="${i+1}">Next</button><button type="button" class="quiet" data-act="tour-done">Skip</button>`}</div>`,"tour")}function DM(){xi(`<div class="eyebrow">The magic tome</div><h2>What should I read next?</h2>
    <div class="meta">The tome reads the books you rate highest and suggests a few you haven\u2019t logged.</div>
    <div class="acts"><button type="button" data-act="wake">Wake the tome</button></div>`,"tome")}var rr=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;function ha(){let i=he.dir.clone(),e=new P().crossVectors(i,new P(0,1,0)).normalize();return i.applyAxisAngle(e,he.pitch).applyAxisAngle(new P(0,1,0),he.yaw),i}function e0(i){if(At){At.t+=i/At.dur;let t=rr(Math.min(1,At.t));if(he.pos.lerpVectors(At.from.pos,At.to.pos,t),he.pos.y+=Math.sin(t*Math.PI)*.08,he.dir.copy(At.from.dir).lerp(At.to.dir,t).normalize(),he.dist=jt.lerp(At.from.dist,At.to.dist,t),At.flat&&(he.pos.y-=Math.sin(t*Math.PI)*.08),At.t>=1){let n=At.arrive;At=null,n&&AM(n)}}else if(!_n&&(he.yaw+=he.vyaw,he.pitch+=he.vpitch,he.vyaw*=.9,he.vpitch*=.9,Math.abs(he.vyaw)<1e-5&&(he.vyaw=0),Math.abs(he.vpitch)<1e-5&&(he.vpitch=0),he.vx)){let t=Qt==="shelf"?eh():null;he.pos.x+=he.vx*i*1e3,he.vx*=Math.pow(.9,i*60),(!t||he.pos.x<=t.lo||he.pos.x>=t.hi)&&(t&&(he.pos.x=jt.clamp(he.pos.x,t.lo,t.hi)),he.vx=0),Math.abs(he.vx)<2e-6&&(he.vx=0)}let e=Ld()?.7:.5;he.yaw=jt.clamp(he.yaw,-e,e),he.pitch=jt.clamp(he.pitch,-.3,.3),fn.position.copy(he.pos),fn.lookAt(he.pos.clone().addScaledVector(ha(),he.dist))}var _n=null,Im=new fo,Dm=new oe;as.addEventListener("pointerdown",i=>{_n={x:i.clientX,y:i.clientY,x0:i.clientX,y0:i.clientY,t:i.timeStamp,moved:0,trail:[[i.timeStamp,i.clientX]]},he.vx=0,At&&At.pan&&(At=null),as.setPointerCapture(i.pointerId),as.classList.add("dragging"),Ot()});as.addEventListener("pointermove",i=>{if(!_n)return;let e=i.clientX-_n.x,t=i.clientY-_n.y;if(_n.x=i.clientX,_n.y=i.clientY,_n.moved+=Math.abs(e)+Math.abs(t),_n.moved<6||_t)return;if(Qt==="shelf"&&!ws){let s=eh();if(s){if(At)return;_n.trail.push([i.timeStamp,i.clientX]),_n.trail.length>8&&_n.trail.shift(),he.pos.x=jt.clamp(he.pos.x-e*s.perPx,s.lo,s.hi),Ot();return}}let n=2.2/Math.max(innerWidth,innerHeight);he.yaw+=e*n,he.pitch+=t*n*.8,he.vyaw=e*n*.6,he.vpitch=t*n*.5,Ot()});function LM(i){if(!_n)return;let e=_n;if(_n=null,as.classList.remove("dragging"),e.moved<8&&i.timeStamp-e.t<450){NM(i.clientX,i.clientY);return}if(Qt==="shelf"&&!_t&&!ws&&!Lo.matches&&e.trail.length>1){let t=eh(),n=i.timeStamp,s=e.trail.filter(([r])=>n-r<110);if(t&&s.length>1){let[r,a]=s[0],[o,c]=s[s.length-1],l=(c-a)/Math.max(16,o-r);Math.abs(l)>.3&&(he.vx=-l*t.perPx,Ot(600))}}}as.addEventListener("pointerup",LM);as.addEventListener("pointercancel",()=>{_n=null,as.classList.remove("dragging")});function NM(i,e){if(!Oe)return;if(_t){_t.phase==="out"||_t.phase==="open"?nS():!rt&&_t.phase==="desk"&&Fo();return}if(Qt==="shelf"){if(ws)return Co();if(bi)return;let r=OM(i,e);if(r&&r===Rt)return ca(r.userData.book.id);if(r)return aa(Kl(r));if(Rt)return oa()}Dm.set(i/innerWidth*2-1,-(e/innerHeight)*2+1),Im.setFromCamera(Dm,fn);let t=Im.intersectObjects(ht.children,!0),n=r=>r.book?"shelf":r.tome?"tome":r.deskBook?"desk":r.trophy?"hearth":r.station||null,s=t.find(r=>n(r.object.userData));if(s){let r=n(s.object.userData),a=t.find(c=>{let l=c.object.userData;return(l.book||l.tome||l.deskBook)&&n(l)===r&&c.distance<s.distance+.8});if(Qt!==r)return ra(r);if(a&&a.object.userData.book)return aa(Kl(a.object));let o=t.find(c=>c.object.userData.trophy&&c.distance<s.distance+.8);if(o)return cS(o.object.userData.trophy);if(r==="tome")return f0();if(r==="desk")return th();if(r==="hearth"&&rt)return Hd()}Rt&&oa(),vn()}var Ni=0,ws=!1,jl="",Li=()=>Oe?Oe.books.all:[],t0=i=>{let e=Li()[i];return e&&e.page===Oe.books.page&&Oe.books.byId.get(e.b.id)||null},Kl=i=>Li().findIndex(e=>e.b.id===i.userData.book.id),FM=new Zt({color:"#ffcf7a",side:hn,transparent:!0,opacity:0,depthWrite:!1,blending:Fn});function n0(i){if(!i.userData.glow){let e=new ut(i.geometry,FM.clone());e.scale.set(1+.007/i.userData.it.t,1+.007/i.userData.it.h,1+.004/i.userData.it.d),e.castShadow=e.receiveShadow=!1,e.renderOrder=2,i.add(e),i.userData.glow=e}return i.userData.glow}function aa(i,{focus:e=!0}={}){let t=Li();if(!t.length||i<0)return!1;if(i=Math.min(t.length-1,i),t[i].page!==Oe.books.page)return Fd(t[i].page,i),!0;Ni=i;let n=t0(i);return n?(Rt!==n&&(Rt&&(Rt.userData.anim=-1),Rt=n,n.userData.anim=0,n0(n),c0(n.userData.book)),e&&kM(n),Ot(900),!0):!1}var bi=null;function Fd(i,e){if(bi){bi.page=i,bi.then=e;return}he.vx=0,Rt&&(Rt.userData.anim=-1,Rt=null),Oe.books.meshes.forEach((t,n)=>{t.userData.leave=-n*.004}),bi={page:i,then:e,t:0},Ot(1500)}function UM(){let{page:i,then:e}=bi;bi=null,Oe.books.showPage(i),qd(),zt.shadowMap.needsUpdate=!0,Oe.books.meshes.forEach((s,r)=>{s.userData.enter=-r*.006});let t=Li();if(Ni=e>=0?Math.min(t.length-1,e):Math.max(0,t.findIndex(s=>s.page===i)),Ot(1600),Fi(),Qt!=="shelf")return;let n=la("shelf");he.yaw=0,he.pitch=0,At={t:0,dur:.7,flat:!0,from:{pos:he.pos.clone(),dir:ha(),dist:he.dist},to:n},e>=0&&aa(Ni,{focus:!1})}var Sd=i=>{let e=i.clone().project(fn);return[(e.x+1)/2*innerWidth,(1-e.y)/2*innerHeight,e]};function OM(i,e){let t=null,n=Math.max(30,innerWidth/16);for(let s of Oe.books.meshes){let r=s.userData.it.h/2,[a,o]=Sd(s.userData.home.clone().add(new P(0,r,0))),[,c]=Sd(s.userData.home.clone().add(new P(0,-r,0)));if(e<o-24||e>c+24)continue;let l=Math.abs(i-a);l<n&&(n=l,t=s)}return t}function kM(i){let[,,e]=Sd(i.userData.home);if(Math.abs(e.x)<.7&&e.y>-.75&&e.y<.8)return;let t=ha(),n=Math.max(.5,i.userData.home.clone().sub(he.pos).dot(t)),s=Math.tan(jt.degToRad(fn.fov)/2),r=s*fn.aspect,o=new P().crossVectors(t,new P(0,1,0)).normalize().multiplyScalar(Math.abs(e.x)>=.7?e.x*r*n*.8:0).add(new P(0,e.y<=-.75||e.y>=.8?(e.y-.25)*s*n:0,0)),c=he.pos.clone().add(o),l=Qt==="shelf"?eh():null;l&&(c.x=jt.clamp(c.x,l.lo,l.hi)),he.dir.copy(t),he.yaw=0,he.pitch=0,At={t:0,dur:.45,flat:!0,pan:!0,from:{pos:he.pos.clone(),dir:t.clone(),dist:he.dist},to:{pos:c,dir:t.clone(),dist:he.dist}}}var i0=i=>i.status||"read",s0='<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="m15.5 15.5 5 5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',Di=document.createElement("div");Di.className="shelf-tools";Di.hidden=!0;Di.innerHTML=`<button type="button" class="st-find" aria-label="Find a book">${s0}</button>
  <span class="st-case"><button type="button" data-case="-1" aria-label="Previous bookcase">\u2039</button><span class="st-n"></span><button type="button" data-case="1" aria-label="Next bookcase">\u203A</button></span>`;dt("card").parentElement.appendChild(Di);function Fi(){let i=Uo&&Qt==="shelf"&&!!Oe&&Oe.books.meshes.length>0&&!_t&&!ws;if(Di.hidden=!i,!i)return;let e=Oe.books.pages,t=Di.querySelector(".st-case");t.hidden=e<2,e>1&&(Di.querySelector(".st-n").textContent=`Bookcase ${Oe.books.page+1} of ${e}`,Di.querySelector('[data-case="-1"]').disabled=Oe.books.page===0,Di.querySelector('[data-case="1"]').disabled=Oe.books.page===e-1)}Di.addEventListener("click",i=>{if(_t)return;if(i.target.closest(".st-find")){r0();return}let e=i.target.closest("[data-case]");if(e&&Oe&&!bi){let t=Oe.books.page+Number(e.dataset.case);t>=0&&t<Oe.books.pages&&(vn(),Fd(t,-1))}Ot()});var _d=i=>String(i||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function BM(i){let e=_d(i).split(/\s+/).filter(Boolean);if(!e.length)return[];let t=new Map(Li().map((s,r)=>[s.b.id,r])),n=[];for(let s of xt.books){let r=_d([s.title,s.author,s.series,s.genre,...Array.isArray(s.tags)?s.tags:[]].join(" "));if(!e.every(c=>r.includes(c)))continue;let a=_d(s.title),o=(a.startsWith(e.join(" "))?0:a.includes(e[0])?1:2)+(t.has(s.id)?0:.5);n.push({b:s,i:t.has(s.id)?t.get(s.id):-1,score:o})}return n.sort((s,r)=>s.score-r.score||String(s.b.title).localeCompare(String(r.b.title))).slice(0,7)}function r0(){ws=!0,he.vx=0,xi(`<form class="sf" role="search" onsubmit="return false">
      <span class="sf-icon">${s0}</span>
      <input type="search" id="rm-find" placeholder="Title, author, series or tag" autocomplete="off" enterkeyhint="go" aria-label="Find a book" value="${Bt(jl)}">
      <button type="button" class="sf-cancel" data-find-cancel>Cancel</button>
    </form>
    <ul class="sf-list" id="rm-find-list" role="listbox"></ul>`,"search"),Fi();let i=dt("find");i.addEventListener("input",()=>{jl=i.value,Lm()}),i.addEventListener("keydown",e=>{if(e.key==="Enter"){let t=dt("find-list").querySelector("[data-hit]");t&&t.click()}e.key==="Escape"&&Co()}),Lm(),setTimeout(()=>i.focus(),30)}function Lm(){let i=BM(jl);dt("find-list").innerHTML=jl.trim()?i.length?i.map(e=>`<li><button type="button" data-hit="${e.i}" data-id="${Bt(e.b.id)}" role="option">
        <span class="sf-t">${Bt(e.b.title)}</span><span class="sf-s">${Bt([e.b.author,e.i<0?"Set aside \xB7 opens the book":Bd[i0(e.b)]+(Oe.books.pages>1?` \xB7 bookcase ${Li()[e.i].page+1}`:"")].filter(Boolean).join(" \xB7 "))}</span></button></li>`).join(""):'<li class="sf-empty">No book on your shelves matches that.</li>':'<li class="sf-empty">Type to find any book on your shelves.</li>'}function Co(i){if(ws=!1,document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),vn(),i!=null&&i>=0){let e=Li()[i];if(e.page!==Oe.books.page){Fd(e.page,i);return}Ni=i;let t=la("shelf");At={t:0,dur:.8,flat:!0,from:{pos:he.pos.clone(),dir:ha(),dist:he.dist},to:t},aa(i,{focus:!1})}}dt("card-body").addEventListener("click",i=>{if(i.target.closest("[data-find-cancel]")){Co();return}let e=i.target.closest("[data-hit]");if(e){let n=Number(e.dataset.hit);if(n<0){Co(),ca(e.dataset.id);return}Co(n);return}let t=i.target.closest("[data-act]");if(t&&t.dataset.act==="putback"){Fo();return}if(t&&rt){let n=t.dataset.id,s=t.dataset.act;s==="progress"?rt.openProgress(n):s==="open"?ca(n):s==="add"?rt.addBook():s==="goals"?rt.openGoals():s==="year"?rt.openYear():s==="calendar"?rt.openCalendar():s==="timer-start"?(rt.startTimer(n),th()):s==="timer-stop"?(vn(),rt.stopTimer()):s==="start"?(vn(),rt.startBook(n)):s==="import"?(vn(),rt.openImport()):s==="tour"?No(0):s==="tour-next"?No(Number(t.dataset.i)):s==="tour-done"?(Qm(),vn()):s==="wake"&&(vn(),f0())}});var Rt=null;function oa(){Rt&&(Rt.userData.anim=-1,Rt=null),vn()}function a0(i,e){let{home:t,homeRot:n}=i.userData;i.position.copy(t),i.position.z+=e*.075,i.position.y+=e*.012,i.rotation.set(n.x+e*.12,n.y+e*.04,n.z*(1-e))}function o0(i){let{home:e,homeRot:t}=i.userData;return{pos:e.clone().add(new P(0,.012,.075)),q:new rn().setFromEuler(new kn(t.x+.12,t.y+.04,0))}}function zM(i){let e=!1;for(let t of Oe.books.meshes){if(t.userData.fly)continue;if(t.userData.leave!==void 0||t.userData.enter!==void 0){let a=t.userData.leave!==void 0,o=a?"leave":"enter";t.userData[o]+=i*(a?5:3.2);let c=rr(jt.clamp(t.userData[o],0,1));t.position.copy(t.userData.home),t.rotation.copy(t.userData.homeRot),t.position.z-=(a?c:1-c)*.32,!a&&t.userData.enter>=1?(delete t.userData.enter,t!==Rt&&t.position.copy(t.userData.home)):(!a||t.userData.leave<1)&&(e=!0);continue}if(t.userData.anim===void 0)continue;let s=t===Rt;t.userData.p=jt.clamp((t.userData.p||0)+(s?i:-i)*4,0,1);let r=rr(t.userData.p);a0(t,r),t.userData.glow&&(t.userData.glow.material.opacity=.22*r),!s&&t.userData.p===0?(delete t.userData.anim,t.position.copy(t.userData.home),t.rotation.copy(t.userData.homeRot)):s&&t.userData.p===1||(e=!0)}return e&&(zt.shadowMap.needsUpdate=!0),e}var GM=new P(-2.57,.758,-.66),_t=null,HM={t:.032,h:.24,d:.16},Nm=new rn().setFromEuler(new kn(0,-.16,Math.PI/2,"YXZ"));function Ud(i){return{pos:GM.clone().add(new P(0,i.t/2+.001,0)).add(new P(0,0,-i.d/2).applyQuaternion(Nm)),q:Nm.clone()}}var VM=(i,e,t,n)=>new P().copy(i).multiplyScalar((1-n)*(1-n)).addScaledVector(e,2*(1-n)*n).addScaledVector(t,n*n);function Fm(i,e){let{home:t,homeRot:n}=i.m.userData,s=i.carry.root,r=new rn().setFromEuler(n),a=t.clone().add(new P(0,.03,.3)),o=Ud(i.it),c=a.clone().lerp(o.pos,.5).add(new P(0,.3,.35)),l=.24;if(e<l){let h=rr(e/l);s.position.lerpVectors(i.p0,a,h),s.quaternion.slerpQuaternions(i.q0,r,h)}else{let h=rr((e-l)/(1-l));s.position.copy(VM(a,c,o.pos,h)),s.quaternion.slerpQuaternions(r,o.q,h)}}function WM(i,e){let t=e?e.userData.it:HM,{t:n,h:s,d:r}=t,a=Math.min(.0035,n*.14),o=s-.006,c=r-.005,[l,h]=Zl(i),u=Ve({color:l,roughness:.7}),d=Ve({color:"#e7dabb",roughness:.95}),f=Ve({map:mt(XM(i,r/s),{repeat:!1}),roughness:.55}),g=b=>{let y=mt(JM(i,b,c/o),{repeat:!1});return Ve({map:y,roughness:.95,emissive:"#ffffff",emissiveMap:y,emissiveIntensity:.3})},x=new bt;x.userData.dyn=!0,ht.add(x);let m=(b,y,F,A,L,I)=>{let U=new ut(b,y);return U.castShadow=!0,U.receiveShadow=!0,U.position.set(A,L,I),F.add(U),U},p=r/2-c/2-5e-4;m(new kt(a,s,r),u,x,-n/2+a/2,0,0),m(new kt(n/2-a,o,c),d,x,(-n/2+a)/2,0,p),m(new Ft(c-.004,o-.004).rotateY(Math.PI/2),g("right"),x,4e-4,0,p);let _=b=>{let y=new Ft(n/2,s),F=u;if(e&&e.material&&e.geometry.attributes.uv){let A=e.geometry.attributes.uv,L=A.getX(16),I=A.getX(17),U=A.getY(16),R=A.getY(18),B=(L+I)/2,[H,G]=b?[B,I]:[L,B];y.attributes.uv.array.set([H,U,G,U,H,R,G,R]),y.attributes.uv.needsUpdate=!0,F=e.material}return{g:y,mat:F}},M=_(!1);m(M.g,M.mat,x,-n/4,0,r/2+4e-4);let v=new bt;v.position.set(0,0,r/2),x.add(v),m(new kt(a,s,r),u,v,n/2-a/2,0,-r/2),m(new kt(n/2-a,o,c),d,v,(n/2-a)/2,0,p-r/2),m(new Ft(r,s).rotateY(Math.PI/2),f,v,n/2+4e-4,0,-r/2),m(new Ft(c-.004,o-.004).rotateY(-Math.PI/2),g("left"),v,-4e-4,0,p-r/2);let E=_(!0);m(E.g,E.mat,v,n/4,0,4e-4),x.traverse(b=>{b.userData.dyn=!0});let w=!0;return c0(i).then(b=>{if(!w||!b)return;let y=f.map;f.map=mt(qM(b,r/s),{repeat:!1}),f.needsUpdate=!0,y.dispose(),Ot()}),{root:x,it:t,setOpen(b){v.rotation.y=-Math.PI*b},dispose(){w=!1,x.traverse(b=>{b.isMesh&&(b.geometry.dispose(),b.material!==(e&&e.material)&&(b.material.map&&b.material.map.dispose(),b.material.dispose()))}),ht.remove(x)}}}var vd=new Map;function c0(i){let e=i.id+"|"+JSON.stringify(i.art||null);return vd.has(e)||vd.set(e,(async()=>{let t=window.TomesteadCovers;if(!t||!t.coverSrc)return null;let n=null;try{n=await t.coverSrc(i,"L")}catch{}return n?new Promise(s=>{let r=new Image;/^(data|blob):/.test(n)||(r.crossOrigin="anonymous");let a=setTimeout(()=>s(null),8e3);r.onload=()=>{clearTimeout(a),s(r.naturalWidth>2?r:null)},r.onerror=()=>{clearTimeout(a),s(null)},r.src=n}):null})()),vd.get(e)}var Jl=512;function qM(i,e){let[t,n]=en(Jl,Math.round(Jl/e)),s=Math.max(t.width/i.naturalWidth,t.height/i.naturalHeight),r=i.naturalWidth*s,a=i.naturalHeight*s;n.drawImage(i,(t.width-r)/2,(t.height-a)/2,r,a);let o=n.createLinearGradient(0,0,t.width*.08,0);return o.addColorStop(0,"rgba(0,0,0,.35)"),o.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=o,n.fillRect(0,0,t.width*.08,t.height),t}var Vn='"IM Fell English", Georgia, serif',yd='-apple-system, "Segoe UI", Roboto, sans-serif';function Ed(i,e,t){let n=[];for(let s of String(e).split(/\n/)){let r="";for(let a of s.split(/\s+/).filter(Boolean)){let o=r?r+" "+a:a;i.measureText(o).width>t&&r?(n.push(r),r=a):r=o}n.push(r)}return n}function XM(i,e){let[t,n]=en(Jl,Math.round(Jl/e)),s=t.width,r=t.height,[a,o]=Zl(i);n.fillStyle=a,n.fillRect(0,0,s,r);let c=n.createRadialGradient(s/2,r*.4,s*.1,s/2,r/2,s*.9);c.addColorStop(0,"rgba(255,255,255,.08)"),c.addColorStop(1,"rgba(0,0,0,.28)"),n.fillStyle=c,n.fillRect(0,0,s,r);let l="#d9b46a";n.strokeStyle=l,n.lineWidth=6,n.strokeRect(s*.09,s*.09,s*.82,r-s*.18),n.lineWidth=2,n.strokeRect(s*.12,s*.12,s*.76,r-s*.24),n.fillStyle=l,n.textAlign="center",n.textBaseline="middle",n.font=`${Math.round(s*.07)}px ${Vn}`,n.fillText("\u2726",s/2,r*.22);let h=s*.11;n.font=`${h}px ${Vn}`;let u=Ed(n,i.title||"",s*.66);for(;u.length>4&&h>s*.07;)h-=2,n.font=`${h}px ${Vn}`,u=Ed(n,i.title||"",s*.66);u=u.slice(0,5);let d=r*.44-(u.length-1)*h*.6;u.forEach((x,m)=>n.fillText(x,s/2,d+m*h*1.2));let f=d+u.length*h*1.2;n.fillRect(s*.4,f,s*.2,3),i.author&&(n.font=`italic ${Math.round(s*.058)}px ${Vn}`,n.fillText(i.author,s/2,f+s*.1));let g=n.createLinearGradient(0,0,s*.08,0);return g.addColorStop(0,"rgba(0,0,0,.35)"),g.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=g,n.fillRect(0,0,s*.08,r),t}var jM={read:"My review",reading:"Thoughts so far",want:"Why I want to read it",dnf:"Why I put it down"},KM={read:"You haven\u2019t written a review yet.",reading:"Nothing noted yet.",want:"No note yet.",dnf:"No note yet."};function JM(i,e,t){let s=Math.round(900/t),r=innerWidth<720,[a,o]=en(900,s);o.fillStyle="#f3e9d2",o.fillRect(0,0,900,s);let c=e==="right"?o.createLinearGradient(0,0,900*.14,0):o.createLinearGradient(900,0,900*.86,0);c.addColorStop(0,"rgba(90,60,25,.28)"),c.addColorStop(1,"rgba(90,60,25,0)"),o.fillStyle=c,o.fillRect(0,0,900,s);let l=900*.1,h=900-l*2,u=s-900*.12,d=900*.12;o.textBaseline="alphabetic",o.textAlign="left";let f="#22170f",g="#5a4a3a",x="#9a6e22",m=(A,L,I,U,R=99)=>{o.font=L,o.fillStyle=I;let B=Ed(o,A,h);for(let H of B.slice(0,R)){if(d+U>u)return!1;d+=U,o.fillText(H,l,d)}return!0},p=A=>{d+=A},_=i0(i),M=Number(i.rating)||0,v=()=>{m(i.title||"",`${900*.072}px ${Vn}`,f,900*.082,3),i.author&&(p(900*.01),m("by "+i.author,`italic ${900*.04}px ${Vn}`,g,900*.05,2)),_==="read"&&(p(900*.02),m(M?u0(M):"Not rated",`${900*.045}px ${Vn}`,x,900*.06,1));let A=_==="reading"?zd(i):null;p(900*.02),m([Bd[_],A?A.text:""].filter(Boolean).join(" \xB7 "),`600 ${900*.03}px ${yd}`,_==="reading"?"#8b2a1f":g,900*.045,1);let L=[i.finished?`Finished ${kd(i.finished)}`:"",i.series?`Series: ${i.series}${i.seriesNo?" #"+i.seriesNo:""}`:"",i.pages?`${i.pages} pages`:""].filter(Boolean);for(let I of L)m(I,`${900*.03}px ${yd}`,g,900*.045,1)},E=()=>{p(900*.04),!(d+900*.06>u)&&(o.font=`${900*.04}px ${Vn}`,o.fillStyle=x,o.textAlign="center",o.fillText("\u2766",900/2,d+900*.03),o.textAlign="left",d+=900*.06)},w=A=>{p(900*.03),m(A,`${900*.045}px ${Vn}`,f,900*.06,1),p(900*.01)},b=()=>{w(jM[_]||"My review"),i.review?m(i.review,`${900*.036}px ${Vn}`,f,900*.052):m(KM[_]||"",`italic ${900*.034}px ${Vn}`,g,900*.05)},y=()=>{w("Favorite lines");let A=Array.isArray(i.quotes)?i.quotes:[];A.length||m("+ Save a line you loved",`${900*.03}px ${yd}`,"#7a4a1a",900*.045,1);for(let L of A.slice(0,3))m("\u201C"+L.text+"\u201D",`italic ${900*.034}px ${Vn}`,f,900*.05,4),p(900*.015)},F=()=>{w("About the book");let A=i.about&&i.about.text;m(A||"No summary yet.",`${A?"":"italic "}${900*.032}px ${Vn}`,A?f:g,900*.048)};return e==="left"?(r||(v(),E()),F()):r?(v(),E(),b(),E(),y()):(b(),E(),y()),(!r||e==="left")&&(o.font=`italic ${900*.032}px ${Vn}`,o.fillStyle=g,o.textAlign="center",o.fillText(e==="left"?"i":"ii",900/2,s-900*.05)),a}function Od(i){let e=innerWidth,t=innerHeight,n=e<720,s,r;n?(s=Math.min(e*.9,440),r=Math.min(s/.68,t*.72),s=r*.68):(r=Math.min(t*.78,660,e*.92/2/.68),s=r*.68);let a=n?e*.05+s/2:e/2,o=t*(n?.45:.47),{h:c,d:l}=i.it,h=l-.005,u=c-.006,d=l/2-h/2-5e-4,f=i.carry.root;f.updateMatrixWorld(!0);let g=new P(0,0,n?d:l/2).applyMatrix4(f.matrixWorld),x=new P(1,0,0).transformDirection(f.matrixWorld),m=new P(0,1,0).transformDirection(f.matrixWorld),p=.2,_=x.clone().multiplyScalar(-Math.cos(p)).addScaledVector(m,Math.sin(p)).normalize(),M=Math.tan(jt.degToRad(fn.fov)/2),v=Math.max(u/r,h/(s*1.08))*t/(2*M),E=new P(0,1,0).addScaledVector(_,-_.y).normalize(),w=new P().crossVectors(_,E).normalize(),b=2*v*M/t;return{pos:g.clone().addScaledVector(w,-(a-e/2)*b).addScaledVector(E,(o-t/2)*b).clone().addScaledVector(_,-v),dir:_,dist:v}}function l0(i,e){Lo.matches&&(e=Math.min(e,.35)),he.yaw=0,he.pitch=0,he.vyaw=0,he.vpitch=0,At={t:0,dur:e,flat:!0,from:{pos:he.pos.clone(),dir:ha(),dist:he.dist},to:i}}var YM=1.45,$M=.8,ZM=1,QM=.65,eS=1.45,Po=i=>Lo.matches?Math.min(i,.4):i;function ca(i){if(!Oe)return;if(_t){_t.phase==="back"&&(_t.pending=i);return}let e=xt.books.find(r=>r.id===i);if(!e)return;vn(),he.vx=0;let t=Oe.books.byId.get(i)||null;Rt&&Rt!==t&&(Rt.userData.anim=-1),Rt=null;let n=WM(e,t),s={id:i,b:e,m:t,it:n.it,carry:n,from:Qt,phase:"out",t:0,dur:Po(YM),camGo:!1,zoomGo:!1,p0:null,q0:null,pending:null};if(t)delete t.userData.anim,t.userData.p=0,t.userData.glow&&(t.userData.glow.material.opacity=0),n.root.position.copy(t.position),n.root.quaternion.copy(t.quaternion),s.p0=t.position.clone(),s.q0=t.quaternion.clone(),t.visible=!1,Ni=Math.max(0,Kl(t));else{let r=Ud(s.it);n.root.position.copy(r.pos),n.root.quaternion.copy(r.q),n.root.visible=!1}_t=s,Oe.desk.openBook.visible=!1,Oe.tome&&Oe.tome.rest(),Fi(),Ot(4e3)}function tS(i){let e=_t;if(!(!e||e.phase==="desk")){if(e.t+=i,e.phase==="out"){let t=Math.min(1,e.t/e.dur);!e.camGo&&t>=.12&&(e.camGo=!0,Nd("desk",e.dur*.92,!1)),e.m&&Fm(e,t),t>=1&&e.camGo&&!At&&(e.carry.root.visible=!0,e.phase="open",e.t=0)}else if(e.phase==="open"){let t=Math.min(1,e.t/Po($M));e.carry.setOpen(rr(t)),!e.zoomGo&&t>=.3&&(e.zoomGo=!0,l0(Od(e),ZM)),t>=1&&e.zoomGo&&!At&&h0()}else if(e.phase==="close"){let t=Math.min(1,Math.max(0,(e.t-Po(.3))/Po(QM)));e.carry.setOpen(1-rr(t)),t>=1&&!At&&iS()}else if(e.phase==="back"){let t=Math.min(1,e.t/e.dur);e.m&&Fm(e,1-t),t>=1&&sS()}zt.shadowMap.needsUpdate=!0,Ot(300)}}function nS(){let i=_t;if(!i||i.phase!=="out"&&i.phase!=="open")return;let e=Ud(i.it);i.carry.root.position.copy(e.pos),i.carry.root.quaternion.copy(e.q),i.carry.root.visible=!0,i.carry.setOpen(1),Qt="desk",document.querySelectorAll(".stations button").forEach(n=>n.setAttribute("aria-pressed",String(n.dataset.go==="desk")));let t=Od(i);At=null,he.pos.copy(t.pos),he.dir.copy(t.dir),he.dist=t.dist,he.yaw=0,he.pitch=0,i.camGo=i.zoomGo=!0,zt.shadowMap.needsUpdate=!0,h0()}function h0(){let i=_t;if(i.phase="desk",zt.shadowMap.needsUpdate=!0,Ot(),rt&&rt.openOnDesk){rt.openOnDesk(i.id,{onClosed:()=>{_t===i&&Fo()}})===!1&&Fo();return}oS(i.b)}function Fo(){let i=_t;!i||i.phase!=="desk"||(rs==="book"&&vn(),i.phase="close",i.t=0,l0(la("desk"),.9),Ot(2500))}function iS(){let i=_t;if(i.phase="back",i.t=0,i.dur=Po(eS),i.m){let t=i.from==="shelf"?o0(i.m):{pos:i.m.userData.home.clone(),q:new rn().setFromEuler(i.m.userData.homeRot)};i.p0=t.pos,i.q0=t.q,Ni=Math.max(0,Kl(i.m))}else i.carry.root.visible=!1;let e=i.from||"room";Nd(e,1.4,!i.pending&&(e==="desk"||e==="hearth"||e==="tome")),Ot(2e3)}function sS(){let i=_t;_t=null,i.carry.dispose(),Oe.desk.openBook.visible=!0;let e=i.m;e&&(e.visible=!0,i.from==="shelf"&&Qt==="shelf"?(Rt=e,e.userData.anim=0,e.userData.p=1,n0(e).material.opacity=.22,a0(e,1)):(e.position.copy(e.userData.home),e.rotation.copy(e.userData.homeRot))),zt.shadowMap.needsUpdate=!0,Fi(),Ot(),i.pending&&setTimeout(()=>ca(i.pending),60)}function rS(){let i=_t;if(!i)return;let e=Oe.books.byId.get(i.id)||null;if(i.m=e,!!e&&(e.visible=!1,i.phase==="back")){let t=i.from==="shelf"?o0(e):{pos:e.userData.home.clone(),q:new rn().setFromEuler(e.userData.homeRot)};i.p0=t.pos,i.q0=t.q}}function aS(){let i=_t;i&&(_t=null,i.carry.dispose(),Oe&&(Oe.desk.openBook.visible=!0),i.m&&(i.m.visible=!0,i.m.position.copy(i.m.userData.home),i.m.rotation.copy(i.m.userData.homeRot)))}var Bt=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function kd(i){try{return new Date(i+"T12:00:00").toLocaleDateString(void 0,{month:"long",day:"numeric",year:"numeric"})}catch{return i}}var Bd={read:"Read",reading:"Reading now",want:"To read",dnf:"Set aside"},u0=i=>{let e=Math.round((Number(i)||0)*2)/2,t=Math.floor(e),n=e-t?1:0;return"\u2605".repeat(t)+(n?"\xBD":"")+"\u2606".repeat(5-t-n)};function zd(i){let e=Number(i.pages)||0,t=Number(i.progress)||0;return t?i.format==="ebook"||i.format==="audio"||!e?{pct:Math.min(100,t),text:`${Math.round(t)}%`}:{pct:Math.min(100,t/e*100),text:`Page ${t} of ${e}`}:null}function Gd(){return xt.sample?'<div class="note">These are sample books. Open this page on the phone where you use Tomestead to see your own shelf here.</div>':""}function oS(i){let e=Number(i.rating)||0,t=i.status==="reading"?zd(i):null,n=[Bd[i.status||"read"],i.pages?`${i.pages} pages`:"",i.format==="audio"&&i.hours?`${i.hours} h audiobook`:"",i.finished?`Finished ${kd(i.finished)}`:""].filter(Boolean).join(" \xB7 ");xi(`<h2>${Bt(i.title)}</h2>${i.author?`<div class="by">${Bt(i.author)}</div>`:""}
    ${e&&(i.status||"read")==="read"?`<div class="stars">${u0(e)}</div>`:""}
    <div class="meta">${Bt(n)}</div>
    ${t?`<div class="bar"><i style="width:${t.pct}%"></i></div><div class="meta">${Bt(t.text)}</div>`:""}
    <div class="note">In the app, the book opens here on the desk to your review.</div>${Gd()}
    <div class="acts"><button type="button" data-act="putback">Put it back</button></div>`,"book")}function cS(i){let e=(xt.trophies||{})[i]||{},t=Number(e.goal)||0;xi(`<div class="eyebrow">On the mantel</div><h2>${Bt(i)} reading goal</h2>
    <div class="meta">${t?`You set out to read ${t} ${t===1?"book":"books"} and did it${e.at?` (${Bt(kd(e.at))})`:""}.`:"Goal reached."}</div>`,"trophy")}function th(){let i=xt.books.filter(n=>n.status==="reading"),e=rt&&rt.timer?rt.timer():null,t=n=>{let s=zd(n),r=e&&e.id===n.id,a=rt?r?`<div class="acts"><button type="button" class="timer-on" data-act="timer-stop" data-id="${Bt(n.id)}"><span class="rec"></span><span data-since="${e.start}">0:00</span> \xB7 Stop</button><button type="button" class="quiet" data-act="open" data-id="${Bt(n.id)}">Open the book</button></div>`:`<div class="acts"><button type="button" data-act="timer-start" data-id="${Bt(n.id)}">${e?"Switch timer here":"Start reading"}</button><button type="button" class="quiet" data-act="progress" data-id="${Bt(n.id)}">Update progress</button><button type="button" class="quiet" data-act="open" data-id="${Bt(n.id)}">Open</button></div>`:"";return`<li${r?' class="timing"':""}><b>${Bt(n.title)}</b>${n.author?` \xB7 <i>${Bt(n.author)}</i>`:""}${s?`<div class="bar"><i style="width:${s.pct}%"></i></div><span class="meta">${Bt(s.text)}</span>`:""}${a}</li>`};if(rt)return xi(`<div class="eyebrow">On the desk</div><h2>${i.length?"Reading now":"Nothing open yet"}</h2>
      ${i.length?`<ul>${i.map(t).join("")}</ul><div class="meta desk-tip">${e?"When you stop, tap Stop and tell it where you got to.":"Start reading runs a timer while you read; stop it to log your time and page."}</div>`:lS()}`,"desk");xi(`<div class="eyebrow">On the desk</div><h2>${i.length?"Reading now":"Nothing open yet"}</h2>
    ${i.length?`<ul>${i.map(t).join("")}</ul>`:'<div class="meta">Start a book and it will lie open here.</div>'}
    <div class="note">In the app, the desk has a reading timer: start it when you sit down, stop it to log your time and page.</div>${Gd()}`,"desk")}function lS(){let i=d0(xt.books.filter(t=>t.status==="want")).slice(0,3);if(!i.length)return'<div class="meta">Start a book and it will lie open here.</div><div class="acts"><button type="button" data-act="add">Add a book</button></div>';let e=xt.books.filter(t=>t.status==="want").length;return`<div class="meta">Pick one from your to-read pile${e>3?` (${e} waiting)`:""} and it will lie open here.</div>
    <ul>${i.map(t=>`<li><b>${Bt(t.title)}</b>${t.author?` \xB7 <i>${Bt(t.author)}</i>`:""}${t.upNext?' <span class="upnext">Up next</span>':""}
      <div class="acts"><button type="button" data-act="start" data-id="${Bt(t.id)}">Start reading</button><button type="button" class="quiet" data-act="open" data-id="${Bt(t.id)}">Open</button></div></li>`).join("")}</ul>
    <div class="acts"><button type="button" class="quiet" data-act="add">Add a different book</button></div>`}function d0(i){return[...i].sort((e,t)=>!e.upNext-!t.upNext||(Number(e.upNext)||0)-(Number(t.upNext)||0)||(Number(t.addedAt)||0)-(Number(e.addedAt)||0))}function f0(){if(Oe.tome.wake(),rt){setTimeout(()=>rt.openRecs(),650);return}let i=xt.books.filter(e=>e.status==="want").slice(0,4);xi(`<div class="eyebrow">The tome stirs\u2026</div><h2>What to read next</h2>
    ${i.length?`<div class="meta">Waiting on your to-read pile:</div><ul>${i.map(e=>`<li><b>${Bt(e.title)}</b>${e.author?` \xB7 <i>${Bt(e.author)}</i>`:""}</li>`).join("")}</ul>`:'<div class="meta">Your to-read pile is empty.</div>'}
    <div class="note">In the app, this is where "What to read next" would open, with picks from Open Library based on the books you rate highest.</div>${Gd()}`)}function Hd(){let i=rt&&rt.streak?rt.streak():null,e=i?i.cur?`<div class="streak"><span class="flame" aria-hidden="true"></span><b>${i.cur}</b> ${i.cur===1?"day":"days"} in a row${i.readToday?"":" \xB7 read today to keep it going"}</div>`:`<div class="meta">${i.best?`Your longest streak is ${i.best} ${i.best===1?"day":"days"}. Read today to start a new one.`:"Read today to start a streak."}</div>`:"";xi(`<div class="eyebrow">By the fire</div><h2>Goals, streaks and trophies</h2>
    ${e}
    <div class="meta">Your streak, goals and year in books live by the fire. Trophies you earn stand on the mantel.</div>
    <div class="acts"><button type="button" data-act="calendar">Reading calendar</button><button type="button" class="quiet" data-act="goals">Reading goals</button><button type="button" class="quiet" data-act="year">Year in review</button></div>`,"hearth")}var rs="",Io=null;function xi(i,e=""){if(rs=e,dt("card-body").innerHTML=i,dt("card").hidden=!1,dt("card").classList.toggle("searchcard",e==="search"),e!=="search"&&(ws=!1),Fi(),clearInterval(Io),Io=null,dt("card-body").querySelector("[data-since]")){let t=()=>dt("card-body").querySelectorAll("[data-since]").forEach(n=>{n.textContent=hS(Date.now()-Number(n.dataset.since))});t(),Io=setInterval(t,1e3)}}function vn(){dt("card").hidden=!0,rs="",ws=!1,clearInterval(Io),Io=null,Fi()}function hS(i){let e=Math.max(0,Math.floor(i/1e3)),t=Math.floor(e/3600),n=Math.floor(e%3600/60),s=r=>String(r).padStart(2,"0");return t?`${t}:${s(n)}:${s(e%60)}`:`${n}:${s(e%60)}`}dt("card").querySelector(".card-x").addEventListener("click",()=>{if(rs==="tour"&&Qm(),_t){Fo();return}rs!=="search"&&oa(),vn()});document.querySelectorAll(".stations button").forEach(i=>i.addEventListener("click",()=>{oa(),ra(i.dataset.go),Ot()}));dt("light")&&dt("light").addEventListener("click",()=>{Rn=Rn==="day"?"night":"day",Oe.applyLook(),Ot()});addEventListener("keydown",i=>{if(!Uo||_t||document.querySelector("dialog[open]")||/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement&&document.activeElement.tagName||""))return;let e=["room","shelf","desk","hearth","tome"];if(Qt==="shelf"&&(i.key==="ArrowRight"||i.key==="ArrowLeft")){aa(Ni+(i.key==="ArrowRight"?1:-1)),Ot();return}if(Qt==="shelf"&&i.key==="Enter"&&Rt){i.preventDefault(),ca(Rt.userData.book.id);return}if(Qt==="shelf"&&(i.key==="/"||i.key==="f"&&(i.metaKey||i.ctrlKey))){i.preventDefault(),r0();return}(i.key==="ArrowRight"||i.key==="ArrowLeft")&&ra(e[(e.indexOf(Qt)+(i.key==="ArrowRight"?1:4))%5]),i.key==="Escape"&&(oa(),vn()),Ot()});var Oe=null,Yl=performance.now(),Um=0,p0=0,Td=0,Yt={busy:[],fpsMoving:0,frames:0,fpsNow:0,tick:performance.now()};function Ot(i=1200){p0=performance.now()+i}function Vd(){if(fn.aspect=innerWidth/innerHeight,fn.fov=Ld()?62:50,fn.updateProjectionMatrix(),zt.setSize(innerWidth,innerHeight,!1),Oe&&!At){let i=_t&&_t.phase==="desk"?Od(_t):la(Qt);he.pos.copy(i.pos),he.dir.copy(i.dir),he.dist=i.dist}Ot()}addEventListener("resize",Vd);var Uo=!0;function m0(i){if(requestAnimationFrame(m0),!Uo)return;let e=!!At||!!_n||!!bi||_t&&_t.phase!=="desk"||!!he.vx||Math.abs(he.vyaw)+Math.abs(he.vpitch)>1e-4||i<p0;if(!e&&i-Um<32)return;let t=Math.min(.1,(i-Yl)/1e3);Yl=i;let n=i/1e3;bi&&(bi.t+=t)>.34&&UM(),e0(t),tS(t),zM(t)&&Ot(300),Oe.desk.tick(n),Oe.tome.tick(n,t),Oe.furniture.tick(n),Oe.beam.material.uniforms.uTime.value=n,Oe.motes.material.uniforms.uTime.value=n;let r=performance.now();if(zt.render(ht,fn),Um=i,Td||(Td=performance.now()),Yt.frames++,e){for(Yt.busy.push(i);Yt.busy.length&&i-Yt.busy[0]>1e3;)Yt.busy.shift();Yt.busy.length>20&&(Yt.fpsMoving=Yt.busy.length),uS(performance.now()-r)}i-Yt.tick>500&&(Yt.fpsNow=Math.round(Yt.frames*1e3/(i-Yt.tick)),Yt.frames=0,Yt.tick=i,dt("perf").hidden||Wd())}var ql=0;function uS(){if(Yt.busy.length<20)return;let i=Yt.busy[Yt.busy.length-1]-Yt.busy[0];(Yt.busy.length-1)*1e3/Math.max(1,i)<40&&gi>1?++ql>45&&(gi=Math.max(1,gi-.25),zt.setPixelRatio(gi),zt.setSize(innerWidth,innerHeight,!1),Oe.tome.setDpr(gi),Oe.motes.material.uniforms.uSize.value=7*gi,ql=0):ql=Math.max(0,ql-1)}function Wd(){let i=performance.getEntriesByType("resource").concat(performance.getEntriesByType("navigation")),e=o=>Math.round(i.filter(o).reduce((c,l)=>c+(l.transferSize||l.encodedBodySize||0),0)/1024),t=e(()=>!0),n=e(o=>/room\.js/.test(o.name)),s=zt.info.render,r=Yt.fpsMoving,a=r>=50?"ok":r>=30?"meh":r?"bad":"";dt("perf").innerHTML=`<b>Speed check</b><br>
    First view: ${((Td-Om)/1e3).toFixed(1)} s<br>
    Downloaded: ${t} KB <span style="opacity:.7">(3D code ${n} KB)</span><br>
    While moving: <span class="${a}">${r?r+" fps":"move to measure"}</span><br>
    Right now: ${Yt.fpsNow} fps${Yt.fpsNow<=31?" (resting)":""}<br>
    Draw calls: ${s.calls} \xB7 ${Math.round(s.triangles/1e3)}k triangles<br>
    Resolution: ${gi.toFixed(2)}\xD7 \xB7 Shadows: drawn once<br>
    Books on the shelf: ${Oe.books.meshes.length}${Oe.books.hidden?` (+${Oe.books.hidden} that don't fit)`:""}`}rt&&ai.get("perf")!=="1"&&(dt("perf-btn").hidden=!0);dt("perf-btn").addEventListener("click",()=>{let i=dt("perf");i.hidden=!i.hidden,dt("perf-btn").setAttribute("aria-expanded",String(!i.hidden)),i.hidden||Wd()});document.addEventListener("visibilitychange",()=>{Yl=performance.now()});function qd(){let i=Oe.books.meshes.map(n=>n.userData.home.y);if(i.length){let n=(Math.min(...i)+Math.max(...i))/2;sr.shelf.t[1]=n,sr.shelf.p[1]=n+.2}let e=Oe.books.meshes.flatMap(n=>[n.userData.home.y-n.userData.it.h/2,n.userData.home.y+n.userData.it.h/2+.03]);Ym=e.length?[Math.min(...e),Math.max(...e)]:null;let t=Oe.books.meshes.flatMap(n=>[n.userData.home.x-n.userData.it.t/2,n.userData.home.x+n.userData.it.t/2]);Do=t.length?[Math.min(...t)-.07,Math.max(...t)+.07]:null}var g0=()=>JSON.stringify([xt.books.map(i=>[i.id,i.title,i.author,i.status,i.rating,i.pages,i.hours,i.format,i.color,i.addedAt,i.upNext]),xt.theme.bookend,xt.theme.bookends]),wd=()=>JSON.stringify(xt.trophies||{}),Ad="",Rd="",Cd="";function dS(){if(!rt||!Oe)return;xt=Bm();let i=g0();if(i!==Ad){Ad=i;let t=Rt&&Rt.userData.book.id;if(Rt=null,Oe.books.refill(),qd(),rS(),Ni=Math.min(Ni,Math.max(0,Li().length-1)),zt.shadowMap.needsUpdate=!0,t&&Qt==="shelf"&&!_t){let n=Li().findIndex(s=>s.b.id===t);n>=0&&Li()[n].page===Oe.books.page&&aa(n,{focus:!1})}Qt==="shelf"&&!Oe.books.meshes.length&&rs!=="search"&&vn(),Fi()}wd()!==Cd&&(Cd=wd(),Oe.furniture.hearth.setTrophies(xt.trophies)),Md()!==Rd&&(Rd=Md(),qm()),!dt("card").hidden&&rs==="desk"&&th(),!dt("card").hidden&&rs==="hearth"&&Hd(),!dt("card").hidden&&rs==="welcome"&&xt.books.length&&(vn(),Zm()||No(0));let e=zm(xt.theme.light||"system");e!==Rn&&(Rn=e,Oe.applyLook()),Ot()}function fS(i){Uo=!!i,Uo?(Yl=performance.now(),Vd(),Ot()):(aS(),oa(),vn()),Fi()}(async()=>{Vd(),Oe=await tM(),Ad=g0(),Rd=Md(),qm(),Cd=wd(),Oe.furniture.hearth.setTrophies(xt.trophies),qd();let i=ai.get("st")&&sr[ai.get("st")]?ai.get("st"):null,e=la(i||"room");he.pos.copy(e.pos),he.dir.copy(e.dir),he.dist=e.dist,i||(he.pos.z=Math.min(2.6,he.pos.z+.9),he.pos.y+=.3,he.pitch=-.12),ai.get("yaw")&&(he.yaw=Number(ai.get("yaw"))),e0(0),zt.compile(ht,fn),requestAnimationFrame(m0),window.TomesteadRoom={refresh:dS,setActive:fS,go:r=>ra(r),openBook:r=>ca(r),tour:()=>{ra("room",1.5,{arrive:!1}),No(0),Ot()}},rt&&rt.ready&&rt.ready(window.TomesteadRoom);let t=window.TomesteadQuotes,n=dt("veil"),s=Math.max(0,(t?Om+t.readMs:0)-performance.now());await new Promise(r=>{if(!s)return r();n.classList.add("ready"),dt("veil-sub").textContent="Tap to step inside";let a=setTimeout(r,s);n.addEventListener("pointerup",()=>{clearTimeout(a),r()},{once:!0})}),t&&t.seen(),requestAnimationFrame(()=>{n.classList.add("gone"),setTimeout(()=>n.remove(),1400),i?(Qt=i,document.querySelectorAll(".stations button").forEach(r=>r.setAttribute("aria-pressed",String(r.dataset.go===i))),Fi()):ra("room",2.6),setTimeout(()=>{dt("hint").classList.add("show"),setTimeout(()=>dt("hint").classList.remove("show"),4200)},i?300:2600),ai.get("perf")==="1"&&(dt("perf").hidden=!1,Wd())})})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
