var _p=0,fu=1,vp=2;var Qs=1,yp=2,$r=3,Ii=0,un=1,$t=2,er=0,Zr=1,Jn=2,pu=3,mu=4,Mp=5;var tr=100,Sp=101,wp=102,Ep=103,Tp=104,Ap=200,Rp=201,Cp=202,Pp=203,gu=204,bu=205,Ip=206,Dp=207,Lp=208,Np=209,Fp=210,Up=211,kp=212,Op=213,Bp=214,Rc=0,Cc=1,Pc=2,Ir=3,Ic=4,Dc=5,Lc=6,Nc=7,sl=0,zp=1,Hp=2,Di=0,xu=1,_u=2,vu=3,yo=4,yu=5,Mu=6,Su=7,$h="attached",Gp="detached",wu=300,nr=301,Qr=302,rl=303,al=304,fi=1e3,Dn=1001,Dr=1002,en=1003,ol=1004;var ir=1005;var ln=1006,ea=1007;var ti=1008;var Gn=1009,Eu=1010,Tu=1011,ta=1012,cl=1013,pi=1014,Yn=1015,mi=1016,ll=1017,hl=1018,sr=1020,Au=35902,Ru=35899,Cu=1021,Pu=1022,ni=1023,Zi=1026,ls=1027,ul=1028,dl=1029,Es=1030,fl=1031;var pl=1033,Mo=33776,So=33777,wo=33778,Eo=33779,ml=35840,gl=35841,bl=35842,xl=35843,_l=36196,vl=37492,yl=37496,Ml=37488,Sl=37489,To=37490,wl=37491,El=37808,Tl=37809,Al=37810,Rl=37811,Cl=37812,Pl=37813,Il=37814,Dl=37815,Ll=37816,Nl=37817,Fl=37818,Ul=37819,kl=37820,Ol=37821,Bl=36492,zl=36494,Hl=36495,Gl=36283,Vl=36284,Ao=36285,Wl=36286;var zs=2300,Hs=2301,Tc=2302,Zh=2303,Qh=2400,eu=2401,tu=2402,Vp=2500;var Iu=0,Ro=1,na=2,Wp=3200;var Co=0,qp=1,hs="",Xt="srgb",Ln="srgb-linear",za="linear",Dt="srgb";var Ac=7680;var Xp=519,jp=512,Kp=513,Jp=514,Du=515,Yp=516,$p=517,Lu=518,Nu=519,Fu=35044;var Uu="300 es",Qn=2e3,Lr=2001;function Qg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function e0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zp(){let i=Nr("canvas");return i.style.display="block",i}var Sf={},Fr=null;function Ha(...i){let e="THREE."+i.shift();Fr?Fr("log",e,...i):console.log(e,...i)}function Qp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xe(...i){i=Qp(i);let e="THREE."+i.shift();if(Fr)Fr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function et(...i){i=Qp(i);let e="THREE."+i.shift();if(Fr)Fr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Bs(...i){let e=i.join(" ");e in Sf||(Sf[e]=!0,Xe(...i))}function em(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var tm={[Rc]:Rc,[Pc]:Lc,[Ic]:Ic,[Ir]:Dc,[Cc]:Cc,[Lc]:Pc,[Nc]:Nc,[Dc]:Ir},Ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wf=1234567,Ua=Math.PI/180,Gs=180/Math.PI;function gi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function lt(i,e,t){return Math.max(e,Math.min(t,i))}function ku(i,e){return(i%e+e)%e}function t0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function n0(i,e,t){return i!==e?(t-i)/(e-i):0}function ka(i,e,t){return(1-t)*i+t*e}function i0(i,e,t,n){return ka(i,e,1-Math.exp(-t*n))}function s0(i,e=1){return e-Math.abs(ku(i,e*2)-e)}function r0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function a0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function o0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function c0(i,e){return i+Math.random()*(e-i)}function l0(i){return i*(.5-Math.random())}function h0(i){i!==void 0&&(wf=i);let e=wf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function u0(i){return i*Ua}function d0(i){return i*Gs}function f0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function p0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ou(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function m0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*h,o*l);break;default:Xe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ql(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Bu(i,e){if(e.constructor===Float32Array)return i;let t=ql(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function zu(i,e){if(e.constructor===Float32Array)return i;let t=ql(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Ht={DEG2RAD:Ua,RAD2DEG:Gs,generateUUID:gi,clamp:lt,euclideanModulo:ku,mapLinear:t0,inverseLerp:n0,lerp:ka,damp:i0,pingpong:s0,smoothstep:r0,smootherstep:a0,randInt:o0,randFloat:c0,randFloatSpread:l0,seededRandom:h0,degToRad:u0,radToDeg:d0,isPowerOfTwo:f0,ceilPowerOfTwo:p0,floorPowerOfTwo:Ou,setQuaternionFromProperEuler:m0,normalize:zu,denormalize:Bu},Xu=class Xu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xu.prototype.isVector2=!0;var de=Xu,rn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(u!==x||c!==d||l!==f||h!==g){let m=c*d+l*f+h*g+u*x;m<0&&(d=-d,f=-f,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){let _=Math.acos(m),M=Math.sin(_);p=Math.sin(p*_)/M,o=Math.sin(o*_)/M,c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+x*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+x*o;let _=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=_,l*=_,h*=_,u*=_}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ju=class ju{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ef.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ef.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sh.copy(this).projectOnVector(e),this.sub(Sh)}reflect(e){return this.sub(Sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ju.prototype.isVector3=!0;var P=ju,Sh=new P,Ef=new rn,Ku=class Ku{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],_=s[1],M=s[4],v=s[7],w=s[2],T=s[5],b=s[8];return r[0]=a*x+o*_+c*w,r[3]=a*m+o*M+c*T,r[6]=a*p+o*v+c*b,r[1]=l*x+h*_+u*w,r[4]=l*m+h*M+u*T,r[7]=l*p+h*v+u*b,r[2]=d*x+f*_+g*w,r[5]=d*m+f*M+g*T,r[8]=d*p+f*v+g*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wh.makeScale(e,t)),this}rotate(e){return Bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wh.makeRotation(-e)),this}translate(e,t){return Bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ku.prototype.isMatrix3=!0;var st=Ku,wh=new st,Tf=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Af=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function g0(){let i={enabled:!0,workingColorSpace:Ln,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Dt&&(s.r=$i(s.r),s.g=$i(s.g),s.b=$i(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Dt&&(s.r=Pr(s.r),s.g=Pr(s.g),s.b=Pr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hs?za:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ln]:{primaries:e,whitePoint:n,transfer:za,toXYZ:Tf,fromXYZ:Af,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:n,transfer:Dt,toXYZ:Tf,fromXYZ:Af,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),i}var ut=g0();function $i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var dr,Fc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{dr===void 0&&(dr=Nr("canvas")),dr.width=e.width,dr.height=e.height;let s=dr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=dr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Nr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=$i(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($i(t[n]/255)*255):t[n]=$i(t[n]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},b0=0,Ur=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Eh(s[a].image)):r.push(Eh(s[a]))}else r=Eh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Eh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}var x0=0,Th=new P,hn=class i extends Ai{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Dn,s=Dn,r=ln,a=ti,o=ni,c=Gn,l=i.DEFAULT_ANISOTROPY,h=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=gi(),this.name="",this.source=new Ur(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Th).x}get height(){return this.source.getSize(Th).y}get depth(){return this.source.getSize(Th).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fi:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case Dr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fi:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case Dr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=wu;hn.DEFAULT_ANISOTROPY=1;var Ju=class Ju{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,v=(f+1)/2,w=(p+1)/2,T=(h+d)/4,b=(u+x)/4,y=(g+m)/4;return M>v&&M>w?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=b/n):v>w?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=y/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=b/r,s=y/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ju.prototype.isVector4=!0;var Ct=Ju,Uc=class extends Ai{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new hn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ur(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},jn=class extends Uc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ga=class extends hn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var kc=class extends hn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var il=class il{constructor(e,t,n,s,r,a,o,c,l,h,u,d,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,f,g,x,m)}set(e,t,n,s,r,a,o,c,l,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new il().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/fr.setFromMatrixColumn(e,0).length(),r=1/fr.setFromMatrixColumn(e,1).length(),a=1/fr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d-x*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_0,e,v0)}lookAt(e,t,n){let s=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),ps.crossVectors(n,qn),ps.lengthSq()===0&&(Math.abs(n.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),ps.crossVectors(n,qn)),ps.normalize(),Yo.crossVectors(qn,ps),s[0]=ps.x,s[4]=Yo.x,s[8]=qn.x,s[1]=ps.y,s[5]=Yo.y,s[9]=qn.y,s[2]=ps.z,s[6]=Yo.z,s[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],_=n[3],M=n[7],v=n[11],w=n[15],T=s[0],b=s[4],y=s[8],L=s[12],C=s[1],D=s[5],k=s[9],F=s[13],A=s[2],z=s[6],V=s[10],H=s[14],Q=s[3],j=s[7],ee=s[11],ie=s[15];return r[0]=a*T+o*C+c*A+l*Q,r[4]=a*b+o*D+c*z+l*j,r[8]=a*y+o*k+c*V+l*ee,r[12]=a*L+o*F+c*H+l*ie,r[1]=h*T+u*C+d*A+f*Q,r[5]=h*b+u*D+d*z+f*j,r[9]=h*y+u*k+d*V+f*ee,r[13]=h*L+u*F+d*H+f*ie,r[2]=g*T+x*C+m*A+p*Q,r[6]=g*b+x*D+m*z+p*j,r[10]=g*y+x*k+m*V+p*ee,r[14]=g*L+x*F+m*H+p*ie,r[3]=_*T+M*C+v*A+w*Q,r[7]=_*b+M*D+v*z+w*j,r[11]=_*y+M*k+v*V+w*ee,r[15]=_*L+M*F+v*H+w*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15],_=c*f-l*d,M=o*f-l*u,v=o*d-c*u,w=a*f-l*h,T=a*d-c*h,b=a*u-o*h;return t*(x*_-m*M+p*v)-n*(g*_-m*w+p*T)+s*(g*M-x*w+p*b)-r*(g*v-x*T+m*b)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],_=t*o-n*a,M=t*c-s*a,v=t*l-r*a,w=n*c-s*o,T=n*l-r*o,b=s*l-r*c,y=h*x-u*g,L=h*m-d*g,C=h*p-f*g,D=u*m-d*x,k=u*p-f*x,F=d*p-f*m,A=_*F-M*k+v*D+w*C-T*L+b*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/A;return e[0]=(o*F-c*k+l*D)*z,e[1]=(s*k-n*F-r*D)*z,e[2]=(x*b-m*T+p*w)*z,e[3]=(d*T-u*b-f*w)*z,e[4]=(c*C-a*F-l*L)*z,e[5]=(t*F-s*C+r*L)*z,e[6]=(m*v-g*b-p*M)*z,e[7]=(h*b-d*v+f*M)*z,e[8]=(a*k-o*C+l*y)*z,e[9]=(n*C-t*k-r*y)*z,e[10]=(g*T-x*v+p*_)*z,e[11]=(u*v-h*T-f*_)*z,e[12]=(o*L-a*D-c*y)*z,e[13]=(t*D-n*L+s*y)*z,e[14]=(x*M-g*w-m*_)*z,e[15]=(h*w-u*M+d*_)*z,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,_=c*l,M=c*h,v=c*u,w=n.x,T=n.y,b=n.z;return s[0]=(1-(x+p))*w,s[1]=(f+v)*w,s[2]=(g-M)*w,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(d+p))*T,s[6]=(m+_)*T,s[7]=0,s[8]=(g+M)*b,s[9]=(m-_)*b,s[10]=(1-(d+x))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=fr.set(s[0],s[1],s[2]).length(),o=fr.set(s[4],s[5],s[6]).length(),c=fr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),li.copy(this);let l=1/a,h=1/o,u=1/c;return li.elements[0]*=l,li.elements[1]*=l,li.elements[2]*=l,li.elements[4]*=h,li.elements[5]*=h,li.elements[6]*=h,li.elements[8]*=u,li.elements[9]*=u,li.elements[10]*=u,t.setFromRotationMatrix(li),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Qn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===Qn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Lr)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Qn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===Qn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Lr)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};il.prototype.isMatrix4=!0;var nt=il,fr=new P,li=new nt,_0=new P(0,0,0),v0=new P(1,1,1),ps=new P,Yo=new P,qn=new P,Rf=new nt,Cf=new rn,On=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cf.setFromEuler(this),this.setFromQuaternion(Cf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var kr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},y0=0,Pf=new P,pr=new rn,Wi=new nt,$o=new P,Sa=new P,M0=new P,S0=new rn,If=new P(1,0,0),Df=new P(0,1,0),Lf=new P(0,0,1),Nf={type:"added"},w0={type:"removed"},mr={type:"childadded",child:null},Ah={type:"childremoved",child:null},Ot=class i extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new On,n=new rn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new st}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(If,e)}rotateY(e){return this.rotateOnAxis(Df,e)}rotateZ(e){return this.rotateOnAxis(Lf,e)}translateOnAxis(e,t){return Pf.copy(e).applyQuaternion(this.quaternion),this.position.add(Pf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(If,e)}translateY(e){return this.translateOnAxis(Df,e)}translateZ(e){return this.translateOnAxis(Lf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$o.copy(e):$o.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(Sa,$o,this.up):Wi.lookAt($o,Sa,this.up),this.quaternion.setFromRotationMatrix(Wi),s&&(Wi.extractRotation(s.matrixWorld),pr.setFromRotationMatrix(Wi),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nf),mr.child=e,this.dispatchEvent(mr),mr.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(w0),Ah.child=e,this.dispatchEvent(Ah),Ah.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nf),mr.child=e,this.dispatchEvent(mr),mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,e,M0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,S0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ot.DEFAULT_UP=new P(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wt=class extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}},E0={type:"move"},Or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(E0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},nm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function Rh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ut.workingColorSpace){if(e=ku(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Rh(a,r,e+1/3),this.g=Rh(a,r,e),this.b=Rh(a,r,e-1/3)}return ut.colorSpaceToWorking(this,s),this}setStyle(e,t=Xt){function n(r){r!==void 0&&parseFloat(r)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){let n=nm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return ut.workingToColorSpace(wn.copy(this),e),Math.round(lt(wn.r*255,0,255))*65536+Math.round(lt(wn.g*255,0,255))*256+Math.round(lt(wn.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(wn.copy(this),t);let n=wn.r,s=wn.g,r=wn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=Xt){ut.workingToColorSpace(wn.copy(this),e);let t=wn.r,n=wn.g,s=wn.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ms),this.setHSL(ms.h+e,ms.s+t,ms.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ms),e.getHSL(Zo);let n=ka(ms.h,Zo.h,t),s=ka(ms.s,Zo.s,t),r=ka(ms.l,Zo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new Ke;Ke.NAMES=nm;var Vs=class extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},hi=new P,qi=new P,Ch=new P,Xi=new P,gr=new P,br=new P,Ff=new P,Ph=new P,Ih=new P,Dh=new P,Lh=new Ct,Nh=new Ct,Fh=new Ct,Yi=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),hi.subVectors(e,t),s.cross(hi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){hi.subVectors(s,t),qi.subVectors(n,t),Ch.subVectors(e,t);let a=hi.dot(hi),o=hi.dot(qi),c=hi.dot(Ch),l=qi.dot(qi),h=qi.dot(Ch),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Xi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Xi.x),c.addScaledVector(a,Xi.y),c.addScaledVector(o,Xi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Lh.setScalar(0),Nh.setScalar(0),Fh.setScalar(0),Lh.fromBufferAttribute(e,t),Nh.fromBufferAttribute(e,n),Fh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Lh,r.x),a.addScaledVector(Nh,r.y),a.addScaledVector(Fh,r.z),a}static isFrontFacing(e,t,n,s){return hi.subVectors(n,t),qi.subVectors(e,t),hi.cross(qi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),hi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;gr.subVectors(s,n),br.subVectors(r,n),Ph.subVectors(e,n);let c=gr.dot(Ph),l=br.dot(Ph);if(c<=0&&l<=0)return t.copy(n);Ih.subVectors(e,s);let h=gr.dot(Ih),u=br.dot(Ih);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(gr,a);Dh.subVectors(e,r);let f=gr.dot(Dh),g=br.dot(Dh);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(br,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ff.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Ff,o);let p=1/(m+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(gr,a).addScaledVector(br,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ui):ui.fromBufferAttribute(r,a),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qo.copy(n.boundingBox)),Qo.applyMatrix4(e.matrixWorld),this.union(Qo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wa),ec.subVectors(this.max,wa),xr.subVectors(e.a,wa),_r.subVectors(e.b,wa),vr.subVectors(e.c,wa),gs.subVectors(_r,xr),bs.subVectors(vr,_r),Ns.subVectors(xr,vr);let t=[0,-gs.z,gs.y,0,-bs.z,bs.y,0,-Ns.z,Ns.y,gs.z,0,-gs.x,bs.z,0,-bs.x,Ns.z,0,-Ns.x,-gs.y,gs.x,0,-bs.y,bs.x,0,-Ns.y,Ns.x,0];return!Uh(t,xr,_r,vr,ec)||(t=[1,0,0,0,1,0,0,0,1],!Uh(t,xr,_r,vr,ec))?!1:(tc.crossVectors(gs,bs),t=[tc.x,tc.y,tc.z],Uh(t,xr,_r,vr,ec))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ji=[new P,new P,new P,new P,new P,new P,new P,new P],ui=new P,Qo=new bn,xr=new P,_r=new P,vr=new P,gs=new P,bs=new P,Ns=new P,wa=new P,ec=new P,tc=new P,Fs=new P;function Uh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Fs.fromArray(i,r);let o=s.x*Math.abs(Fs.x)+s.y*Math.abs(Fs.y)+s.z*Math.abs(Fs.z),c=e.dot(Fs),l=t.dot(Fs),h=n.dot(Fs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var sn=new P,nc=new de,T0=0,Kt=class extends Ai{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:T0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fu,this.updateRanges=[],this.gpuType=Yn,this.version=0,this._normalizationScale=e!==void 0?ql(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)nc.fromBufferAttribute(this,t),nc.applyMatrix3(e),this.setXY(t,nc.x,nc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Bu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):zu(e,this.array)}};var Va=class extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Wa=class extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var at=class extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}},A0=new bn,Ea=new P,kh=new P,Bn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):A0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ea.subVectors(e,this.center);let t=Ea.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ea,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ea.copy(e.center).add(kh)),this.expandByPoint(Ea.copy(e.center).sub(kh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},R0=0,Zn=new nt,Oh=new Ot,yr=new P,Xn=new bn,Ta=new bn,gn=new P,Lt=class i extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qg(e)?Wa:Va)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,n){return Zn.makeTranslation(e,t,n),this.applyMatrix4(Zn),this}scale(e,t,n){return Zn.makeScale(e,t,n),this.applyMatrix4(Zn),this}lookAt(e){return Oh.lookAt(e),Oh.updateMatrix(),this.applyMatrix4(Oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new at(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Xn.setFromBufferAttribute(r),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ta.setFromBufferAttribute(o),this.morphTargetsRelative?(gn.addVectors(Xn.min,Ta.min),Xn.expandByPoint(gn),gn.addVectors(Xn.max,Ta.max),Xn.expandByPoint(gn)):(Xn.expandByPoint(Ta.min),Xn.expandByPoint(Ta.max))}Xn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)gn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(gn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)gn.fromBufferAttribute(o,l),c&&(yr.fromBufferAttribute(e,l),gn.add(yr)),s=Math.max(s,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Kt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let L=0;L<n.count;L++)o[L]=new P,c[L]=new P;let h=new P,u=new P,d=new P,f=new de,g=new de,x=new de,m=new P,p=new P;function _(L,C,D){l[L]=l[C]=l[D]=1,h.fromBufferAttribute(n,L),u.fromBufferAttribute(n,C),d.fromBufferAttribute(n,D),f.fromBufferAttribute(r,L),g.fromBufferAttribute(r,C),x.fromBufferAttribute(r,D),u.sub(h),d.sub(h),g.sub(f),x.sub(f);let k=1/(g.x*x.y-x.x*g.y);isFinite(k)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(d,-g.y).multiplyScalar(k),p.copy(d).multiplyScalar(g.x).addScaledVector(u,-x.x).multiplyScalar(k),o[L].add(m),o[C].add(m),o[D].add(m),c[L].add(p),c[C].add(p),c[D].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let L=0,C=M.length;L<C;++L){let D=M[L],k=D.start,F=D.count;for(let A=k,z=k+F;A<z;A+=3)_(e.getX(A+0),e.getX(A+1),e.getX(A+2))}let v=new P,w=new P,T=new P,b=new P;function y(L){T.fromBufferAttribute(s,L),b.copy(T);let C=o[L];v.copy(C),v.sub(T.multiplyScalar(T.dot(C))).normalize(),w.crossVectors(b,C);let k=w.dot(c[L])<0?-1:1;a.setXYZW(L,v.x,v.y,v.z,k)}for(let L=0,C=n.count;L<C;++L)l[L]&&y(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Kt(d,h,u)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ws=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fu,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Uf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Uf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Uf(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=gi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var In=new P,vs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?ql(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyMatrix4(e),this.setXYZ(t,In.x,In.y,In.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyNormalMatrix(e),this.setXYZ(t,In.x,In.y,In.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.transformDirection(e),this.setXYZ(t,In.x,In.y,In.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ha("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ha("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Bu(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):zu(e,this.data.array)}},Bh=new P,C0=new P,P0=new st,di=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Bh.subVectors(n,t).cross(C0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Bh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||P0.getNormalMatrix(e),s=this.coplanarPoint(Bh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},I0=0,En=class extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=Zr,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gu,this.blendDst=bu,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ac,this.stencilZFail=Ac,this.stencilZPass=Ac,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new di().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new de().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new de().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Br=class extends En{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Mr,Aa=new P,Sr=new P,wr=new P,Er=new de,Ra=new de,im=new nt,ic=new P,Ca=new P,sc=new P,kf=new de,zh=new de,Of=new de,qa=class extends Ot{constructor(e=new Br){if(super(),this.isSprite=!0,this.type="Sprite",Mr===void 0){Mr=new Lt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ws(t,5);Mr.setIndex([0,1,2,0,2,3]),Mr.setAttribute("position",new vs(n,3,0,!1)),Mr.setAttribute("uv",new vs(n,2,3,!1))}this.geometry=Mr,this.material=e,this.center=new de(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&et('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Sr.setFromMatrixScale(this.matrixWorld),im.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),wr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Sr.multiplyScalar(-wr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;rc(ic.set(-.5,-.5,0),wr,a,Sr,s,r),rc(Ca.set(.5,-.5,0),wr,a,Sr,s,r),rc(sc.set(.5,.5,0),wr,a,Sr,s,r),kf.set(0,0),zh.set(1,0),Of.set(1,1);let o=e.ray.intersectTriangle(ic,Ca,sc,!1,Aa);if(o===null&&(rc(Ca.set(-.5,.5,0),wr,a,Sr,s,r),zh.set(0,1),o=e.ray.intersectTriangle(ic,sc,Ca,!1,Aa),o===null))return;let c=e.ray.origin.distanceTo(Aa);c<e.near||c>e.far||t.push({distance:c,point:Aa.clone(),uv:Yi.getInterpolation(Aa,ic,Ca,sc,kf,zh,Of,new de),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function rc(i,e,t,n,s,r){Er.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ra.x=r*Er.x-s*Er.y,Ra.y=s*Er.x+r*Er.y):Ra.copy(Er),i.copy(e),i.x+=Ra.x,i.y+=Ra.y,i.applyMatrix4(im)}var Ki=new P,Hh=new P,ac=new P,oc=new P,ys=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Hh.copy(e).add(t).multiplyScalar(.5),ac.copy(t).sub(e).normalize(),oc.copy(this.origin).sub(Hh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ac),o=oc.dot(this.direction),c=-oc.dot(ac),l=oc.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Hh).addScaledVector(ac,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ki.subVectors(e.center,this.origin);let n=Ki.dot(this.direction),s=Ki.dot(Ki)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,x=t.y-a.y,m=t.z-a.z,p=n.x-a.x,_=n.y-a.y,M=n.z-a.z,v=Math.abs(c),w=Math.abs(l),T=Math.abs(h),b,y,L,C,D,k,F,A,z,V,H,Q;if(v>=w&&v>=T?(L=c,k=u,z=g,Q=p,c>=0?(b=l,y=h,C=d,D=f,F=x,A=m,V=_,H=M):(b=h,y=l,C=f,D=d,F=m,A=x,V=M,H=_)):w>=T?(L=l,k=d,z=x,Q=_,l>=0?(b=h,y=c,C=f,D=u,F=m,A=g,V=M,H=p):(b=c,y=h,C=u,D=f,F=g,A=m,V=p,H=M)):(L=h,k=f,z=m,Q=M,h>=0?(b=c,y=l,C=u,D=d,F=g,A=x,V=p,H=_):(b=l,y=c,C=d,D=u,F=x,A=g,V=_,H=p)),L===0)return null;let j=b/L,ee=y/L,ie=1/L,we=C-j*k,We=D-ee*k,Z=F-j*z,Me=A-ee*z,Pe=V-j*Q,je=H-ee*Q,ve=Pe*Me-je*Z,Be=we*je-We*Pe,At=Z*We-Me*we;if(s){if(ve<0||Be<0||At<0)return null}else if((ve<0||Be<0||At<0)&&(ve>0||Be>0||At>0))return null;let Ie=ve+Be+At;if(Ie===0)return null;let Re=ie*(ve*k+Be*z+At*Q);return(Ie>0?Re<0:Re>0)?null:this.at(Re/Ie,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},an=class extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Bf=new nt,Us=new ys,cc=new Bn,zf=new P,lc=new P,hc=new P,uc=new P,Gh=new P,dc=new P,Hf=new P,fc=new P,bt=class extends Ot{constructor(e=new Lt,t=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){dc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Gh.fromBufferAttribute(u,e),a?dc.addScaledVector(Gh,h):dc.addScaledVector(Gh.sub(t),h))}t.add(dc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cc.copy(n.boundingSphere),cc.applyMatrix4(r),Us.copy(e.ray).recast(e.near),!(cc.containsPoint(Us.origin)===!1&&(Us.intersectSphere(cc,zf)===null||Us.origin.distanceToSquared(zf)>(e.far-e.near)**2))&&(Bf.copy(r).invert(),Us.copy(e.ray).applyMatrix4(Bf),!(n.boundingBox!==null&&Us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Us)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,w=M;v<w;v+=3){let T=o.getX(v),b=o.getX(v+1),y=o.getX(v+2);s=pc(this,p,e,n,l,h,u,T,b,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);s=pc(this,a,e,n,l,h,u,_,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,w=M;v<w;v+=3){let T=v,b=v+1,y=v+2;s=pc(this,p,e,n,l,h,u,T,b,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=m,M=m+1,v=m+2;s=pc(this,a,e,n,l,h,u,_,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function D0(i,e,t,n,s,r,a,o){let c;if(e.side===un?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Ii,o),c===null)return null;fc.copy(o),fc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(fc);return l<t.near||l>t.far?null:{distance:l,point:fc.clone(),object:i}}function pc(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,lc),i.getVertexPosition(c,hc),i.getVertexPosition(l,uc);let h=D0(i,e,t,n,lc,hc,uc,Hf);if(h){let u=new P;Yi.getBarycoord(Hf,lc,hc,uc,u),s&&(h.uv=Yi.getInterpolatedAttribute(s,o,c,l,u,new de)),r&&(h.uv1=Yi.getInterpolatedAttribute(r,o,c,l,u,new de)),a&&(h.normal=Yi.getInterpolatedAttribute(a,o,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new P,materialIndex:0};Yi.getNormal(lc,hc,uc,d.normal),h.face=d,h.barycoord=u}return h}var Pa=new Ct,Gf=new Ct,Vf=new Ct,L0=new Ct,Wf=new nt,mc=new P,Vh=new Bn,qf=new nt,Wh=new ys,Xa=class extends bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$h,this.bindMatrix=new nt,this.bindMatrixInverse=new nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,mc),this.boundingBox.expandByPoint(mc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Bn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,mc),this.boundingSphere.expandByPoint(mc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vh.copy(this.boundingSphere),Vh.applyMatrix4(s),e.ray.intersectsSphere(Vh)!==!1&&(qf.copy(s).invert(),Wh.copy(e.ray).applyMatrix4(qf),!(this.boundingBox!==null&&Wh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Wh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ct,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===$h?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Gp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Xe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Gf.fromBufferAttribute(s.attributes.skinIndex,e),Vf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Pa.copy(t),t.set(0,0,0,0)):(Pa.set(t.x,t.y,t.z,1),t.set(0,0,0)),Pa.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Vf.getComponent(r);if(a!==0){let o=Gf.getComponent(r);Wf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(L0.copy(Pa).applyMatrix4(Wf),a)}}return t.isVector4&&(t.w=Pa.w),t.applyMatrix4(this.bindMatrixInverse)}},zr=class extends Ot{constructor(){super(),this.isBone=!0,this.type="Bone"}},Hr=class extends hn{constructor(e=null,t=1,n=1,s,r,a,o,c,l=en,h=en,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Xf=new nt,N0=new nt,ja=class i{constructor(e=[],t=[]){this.uuid=gi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Xe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new nt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new nt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:N0;Xf.multiplyMatrices(o,t[r]),Xf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Hr(t,e,e,ni,Yn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Xe("Skeleton: No bone found with UUID:",r),a=new zr),this.bones.push(a),this.boneInverses.push(new nt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Qi=class extends Kt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Tr=new nt,jf=new nt,gc=[],Kf=new bn,F0=new nt,Ia=new bt,Da=new Bn,Ri=class extends bt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,F0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Tr),Kf.copy(e.boundingBox).applyMatrix4(Tr),this.boundingBox.union(Kf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Tr),Da.copy(e.boundingSphere).applyMatrix4(Tr),this.boundingSphere.union(Da)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ia.geometry=this.geometry,Ia.material=this.material,Ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Da.copy(this.boundingSphere),Da.applyMatrix4(n),e.ray.intersectsSphere(Da)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Tr),jf.multiplyMatrices(n,Tr),Ia.matrixWorld=jf,Ia.raycast(e,gc);for(let a=0,o=gc.length;a<o;a++){let c=gc[a];c.instanceId=r,c.object=this,t.push(c)}gc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Qi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hr(new Float32Array(s*this.count),s,this.count,ul,Yn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ks=new Bn,U0=new de(.5,.5),bc=new P,Ms=class{constructor(e=new di,t=new di,n=new di,s=new di,r=new di,a=new di){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],_=r[12],M=r[13],v=r[14],w=r[15];if(s[0].setComponents(l-a,f-h,p-g,w-_).normalize(),s[1].setComponents(l+a,f+h,p+g,w+_).normalize(),s[2].setComponents(l+o,f+u,p+x,w+M).normalize(),s[3].setComponents(l-o,f-u,p-x,w-M).normalize(),n)s[4].setComponents(c,d,m,v).normalize(),s[5].setComponents(l-c,f-d,p-m,w-v).normalize();else if(s[4].setComponents(l-c,f-d,p-m,w-v).normalize(),t===Qn)s[5].setComponents(l+c,f+d,p+m,w+v).normalize();else if(t===Lr)s[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ks.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(e){ks.center.set(0,0,0);let t=U0.distanceTo(e.center);return ks.radius=.7071067811865476+t,ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(bc.x=s.normal.x>0?e.max.x:e.min.x,bc.y=s.normal.y>0?e.max.y:e.min.y,bc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(bc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Jf=new nt,Oc=class i{constructor(){this.coordinateSystem=Qn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Jf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ms),n[s].setFromProjectionMatrix(Jf,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ms),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Gr=class extends En{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Bc=new P,zc=new P,Yf=new nt,La=new ys,xc=new Bn,qh=new P,$f=new P,qs=class extends Ot{constructor(e=new Lt,t=new Gr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Bc.fromBufferAttribute(t,s-1),zc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Bc.distanceTo(zc);e.setAttribute("lineDistance",new at(n,1))}else Xe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xc.copy(n.boundingSphere),xc.applyMatrix4(s),xc.radius+=r,e.ray.intersectsSphere(xc)===!1)return;Yf.copy(s).invert(),La.copy(e.ray).applyMatrix4(Yf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=h.getX(x),_=h.getX(x+1),M=_c(this,e,La,c,p,_,x);M&&t.push(M)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=_c(this,e,La,c,x,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=_c(this,e,La,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=_c(this,e,La,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function _c(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Bc.fromBufferAttribute(o,s),zc.fromBufferAttribute(o,r),t.distanceSqToSegment(Bc,zc,qh,$f)>n)return;qh.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(qh);if(!(l<e.near||l>e.far))return{distance:l,point:$f.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Zf=new P,Qf=new P,Ka=class extends qs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Zf.fromBufferAttribute(t,s),Qf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Zf.distanceTo(Qf);e.setAttribute("lineDistance",new at(n,1))}else Xe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ja=class extends qs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Vr=class extends En{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ep=new nt,nu=new ys,vc=new Bn,yc=new P,es=class extends Ot{constructor(e=new Lt,t=new Vr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vc.copy(n.boundingSphere),vc.applyMatrix4(s),vc.radius+=r,e.ray.intersectsSphere(vc)===!1)return;ep.copy(s).invert(),nu.copy(e.ray).applyMatrix4(ep);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let m=l.getX(g);yc.fromBufferAttribute(u,m),tp(yc,m,c,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)yc.fromBufferAttribute(u,g),tp(yc,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function tp(i,e,t,n,s,r,a){let o=nu.distanceSqToPoint(i);if(o<t){let c=new P;nu.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ya=class extends hn{constructor(e=[],t=nr,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$a=class extends hn{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ts=class extends hn{constructor(e,t,n=pi,s,r,a,o=en,c=en,l,h=Zi,u=1){if(h!==Zi&&h!==ls)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ur(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Za=class extends ts{constructor(e,t=pi,n=nr,s,r,a=en,o=en,c,l=Zi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Qa=class extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Vt=class i extends Lt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(u,2));function g(x,m,p,_,M,v,w,T,b,y,L){let C=v/b,D=w/y,k=v/2,F=w/2,A=T/2,z=b+1,V=y+1,H=0,Q=0,j=new P;for(let ee=0;ee<V;ee++){let ie=ee*D-F;for(let we=0;we<z;we++){let We=we*C-k;j[x]=We*_,j[m]=ie*M,j[p]=A,l.push(j.x,j.y,j.z),j[x]=0,j[m]=0,j[p]=T>0?1:-1,h.push(j.x,j.y,j.z),u.push(we/b),u.push(1-ee/y),H+=1}}for(let ee=0;ee<y;ee++)for(let ie=0;ie<b;ie++){let we=d+ie+z*ee,We=d+ie+z*(ee+1),Z=d+(ie+1)+z*(ee+1),Me=d+(ie+1)+z*ee;c.push(we,We,Me),c.push(We,Z,Me),Q+=6}o.addGroup(f,Q,L),f+=Q,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var eo=class i extends Lt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new P,h=new de;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(o,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},zn=class i extends Lt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;_(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(f,2));function _(){let v=new P,w=new P,T=0,b=(t-e)/n;for(let y=0;y<=r;y++){let L=[],C=y/r,D=C*(t-e)+e;for(let k=0;k<=s;k++){let F=k/s,A=F*c+o,z=Math.sin(A),V=Math.cos(A);w.x=D*z,w.y=-C*n+m,w.z=D*V,u.push(w.x,w.y,w.z),v.set(z,b,V).normalize(),d.push(v.x,v.y,v.z),f.push(F,1-C),L.push(g++)}x.push(L)}for(let y=0;y<s;y++)for(let L=0;L<r;L++){let C=x[L][y],D=x[L+1][y],k=x[L+1][y+1],F=x[L][y+1];(e>0||L!==0)&&(h.push(C,D,F),T+=3),(t>0||L!==r-1)&&(h.push(D,k,F),T+=3)}l.addGroup(p,T,0),p+=T}function M(v){let w=g,T=new de,b=new P,y=0,L=v===!0?e:t,C=v===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*C,0),d.push(0,C,0),f.push(.5,.5),g++;let D=g;for(let k=0;k<=s;k++){let A=k/s*c+o,z=Math.cos(A),V=Math.sin(A);b.x=L*V,b.y=m*C,b.z=L*z,u.push(b.x,b.y,b.z),d.push(0,C,0),T.x=z*.5+.5,T.y=V*.5*C+.5,f.push(T.x,T.y),g++}for(let k=0;k<s;k++){let F=w+k,A=D+k;v===!0?h.push(A,A+1,F):h.push(A+1,A,F),y+=3}l.addGroup(p,y,v===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wr=class i extends zn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new de:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],a=[],o=new P,c=new nt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(lt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(lt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},qr=class extends Kn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new de){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Hc=class extends qr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Hu(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var np=new P,ip=new P,Xh=new Hu,jh=new Hu,Kh=new Hu,Ss=class extends Kn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(ip.subVectors(s[0],s[1]).add(s[0]),l=ip);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(np.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=np),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Xh.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,m),jh.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,m),Kh.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Xh.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),jh.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Kh.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Xh.calc(c),jh.calc(c),Kh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function sp(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function k0(i,e){let t=1-i;return t*t*e}function O0(i,e){return 2*(1-i)*i*e}function B0(i,e){return i*i*e}function Oa(i,e,t,n){return k0(i,e)+O0(i,t)+B0(i,n)}function z0(i,e){let t=1-i;return t*t*t*e}function H0(i,e){let t=1-i;return 3*t*t*i*e}function G0(i,e){return 3*(1-i)*i*i*e}function V0(i,e){return i*i*i*e}function Ba(i,e,t,n,s){return z0(i,e)+H0(i,t)+G0(i,n)+V0(i,s)}var to=class extends Kn{constructor(e=new de,t=new de,n=new de,s=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new de){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ba(e,s.x,r.x,a.x,o.x),Ba(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Gc=class extends Kn{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ba(e,s.x,r.x,a.x,o.x),Ba(e,s.y,r.y,a.y,o.y),Ba(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},no=class extends Kn{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vc=class extends Kn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},io=class extends Kn{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Oa(e,s.x,r.x,a.x),Oa(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},so=class extends Kn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Oa(e,s.x,r.x,a.x),Oa(e,s.y,r.y,a.y),Oa(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ro=class extends Kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(sp(o,c.x,l.x,h.x,u.x),sp(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new de().fromArray(s))}return this}},Wc=Object.freeze({__proto__:null,ArcCurve:Hc,CatmullRomCurve3:Ss,CubicBezierCurve:to,CubicBezierCurve3:Gc,EllipseCurve:qr,LineCurve:no,LineCurve3:Vc,QuadraticBezierCurve:io,QuadraticBezierCurve3:so,SplineCurve:ro}),qc=class extends Kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Wc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},ao=class extends qc{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new no(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new io(this.currentPoint.clone(),new de(e,t),new de(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new to(this.currentPoint.clone(),new de(e,t),new de(n,s),new de(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ro(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new qr(e,t,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ns=class extends ao{constructor(e){super(e),this.uuid=gi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ao().fromJSON(s))}return this}};function W0(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=sm(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=J0(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let h=o,u=c;for(let d=t;d<s;d+=t){let f=i[d],g=i[d+1];f<o&&(o=f),g<c&&(c=g),f>h&&(h=f),g>u&&(u=g)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return oo(r,a,t,o,c,l,0),a}function sm(i,e,t,n,s){let r;if(s===ab(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=rp(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=rp(a/n|0,i[a],i[a+1],r);return r&&Xr(r,r.next)&&(lo(r),r=r.next),r}function Xs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Xr(t,t.next)||jt(t.prev,t,t.next)===0)){if(lo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function oo(i,e,t,n,s,r,a){if(!i)return;!a&&r&&eb(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?X0(i,n,s,r):q0(i)){e.push(c.i,i.i,l.i),lo(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=j0(Xs(i),e),oo(i,e,t,n,s,r,2)):a===2&&K0(i,e,t,n,s,r):oo(Xs(i),e,t,n,s,r,1);break}}}function q0(i){let e=i.prev,t=i,n=i.next;if(jt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(s,r,a),u=Math.min(o,c,l),d=Math.max(s,r,a),f=Math.max(o,c,l),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Na(s,o,r,c,a,l,g.x,g.y)&&jt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function X0(i,e,t,n){let s=i.prev,r=i,a=i.next;if(jt(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,c,l),g=Math.min(h,u,d),x=Math.max(o,c,l),m=Math.max(h,u,d),p=iu(f,g,e,t,n),_=iu(x,m,e,t,n),M=i.prevZ,v=i.nextZ;for(;M&&M.z>=p&&v&&v.z<=_;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Na(o,h,c,u,l,d,M.x,M.y)&&jt(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Na(o,h,c,u,l,d,v.x,v.y)&&jt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Na(o,h,c,u,l,d,M.x,M.y)&&jt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Na(o,h,c,u,l,d,v.x,v.y)&&jt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function j0(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Xr(n,s)&&am(n,t,t.next,s)&&co(n,s)&&co(s,n)&&(e.push(n.i,t.i,s.i),lo(t),lo(t.next),t=i=s),t=t.next}while(t!==i);return Xs(t)}function K0(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ib(a,o)){let c=om(a,o);a=Xs(a,a.next),c=Xs(c,c.next),oo(a,e,t,n,s,r,0),oo(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function J0(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=sm(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(nb(l))}s.sort(Y0);for(let r=0;r<s.length;r++)t=$0(s[r],t);return t}function Y0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function $0(i,e){let t=Z0(i,e);if(!t)return e;let n=om(t,i);return Xs(n,n.next),Xs(t,t.next)}function Z0(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Xr(i,t))return t;do{if(Xr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&rm(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);co(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Q0(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Q0(i,e){return jt(i.prev,i,e.prev)<0&&jt(e.next,i,i.next)<0}function eb(i,e,t,n){let s=i;do s.z===0&&(s.z=iu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,tb(s)}function tb(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function iu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function nb(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function rm(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Na(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&rm(i,e,t,n,s,r,a,o)}function ib(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!sb(i,e)&&(co(i,e)&&co(e,i)&&rb(i,e)&&(jt(i.prev,i,e.prev)||jt(i,e.prev,e))||Xr(i,e)&&jt(i.prev,i,i.next)>0&&jt(e.prev,e,e.next)>0)}function jt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Xr(i,e){return i.x===e.x&&i.y===e.y}function am(i,e,t,n){let s=Sc(jt(i,e,t)),r=Sc(jt(i,e,n)),a=Sc(jt(t,n,i)),o=Sc(jt(t,n,e));return!!(s!==r&&a!==o||s===0&&Mc(i,t,e)||r===0&&Mc(i,n,e)||a===0&&Mc(t,i,n)||o===0&&Mc(t,e,n))}function Mc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Sc(i){return i>0?1:i<0?-1:0}function sb(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&am(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function co(i,e){return jt(i.prev,i,i.next)<0?jt(i,e,i.next)>=0&&jt(i,i.prev,e)>=0:jt(i,e,i.prev)<0||jt(i,i.next,e)<0}function rb(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function om(i,e){let t=su(i.i,i.x,i.y),n=su(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function rp(i,e,t,n){let s=su(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function lo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function su(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ab(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var ru=class{static triangulate(e,t,n=2){return W0(e,t,n)}},Os=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];ap(e),op(n,e);let a=e.length;t.forEach(ap);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,op(n,t[c]);let o=ru.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function ap(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function op(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var js=class i extends Lt{constructor(e=new ns([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new at(s,3)),this.setAttribute("uv",new at(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:ob,M,v=!1,w,T,b,y;if(p){M=p.getSpacedPoints(h),v=!0,d=!1;let re=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(h,re),T=new P,b=new P,y=new P}d||(m=0,f=0,g=0,x=0);let L=o.extractPoints(l),C=L.shape,D=L.holes;if(!Os.isClockWise(C)){C=C.reverse();for(let re=0,me=D.length;re<me;re++){let ge=D[re];Os.isClockWise(ge)&&(D[re]=ge.reverse())}}function F(re){let ge=10000000000000001e-36,Ee=re[0];for(let xe=1;xe<=re.length;xe++){let Ye=xe%re.length,De=re[Ye],ce=De.x-Ee.x,Le=De.y-Ee.y,ze=ce*ce+Le*Le,N=Math.max(Math.abs(De.x),Math.abs(De.y),Math.abs(Ee.x),Math.abs(Ee.y)),Mt=ge*N*N;if(ze<=Mt){re.splice(Ye,1),xe--;continue}Ee=De}}F(C),D.forEach(F);let A=D.length,z=C;for(let re=0;re<A;re++){let me=D[re];C=C.concat(me)}function V(re,me,ge){return me||et("ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(me,ge)}let H=C.length;function Q(re,me,ge){let Ee,xe,Ye,De=re.x-me.x,ce=re.y-me.y,Le=ge.x-re.x,ze=ge.y-re.y,N=De*De+ce*ce,Mt=De*ze-ce*Le;if(Math.abs(Mt)>Number.EPSILON){let He=Math.sqrt(N),ct=Math.sqrt(Le*Le+ze*ze),fe=me.x-ce/He,vt=me.y+De/He,Ge=ge.x-ze/ct,$e=ge.y+Le/ct,R=((Ge-fe)*ze-($e-vt)*Le)/(De*ze-ce*Le);Ee=fe+De*R-re.x,xe=vt+ce*R-re.y;let S=Ee*Ee+xe*xe;if(S<=2)return new de(Ee,xe);Ye=Math.sqrt(S/2)}else{let He=!1;De>Number.EPSILON?Le>Number.EPSILON&&(He=!0):De<-Number.EPSILON?Le<-Number.EPSILON&&(He=!0):Math.sign(ce)===Math.sign(ze)&&(He=!0),He?(Ee=-ce,xe=De,Ye=Math.sqrt(N)):(Ee=De,xe=ce,Ye=Math.sqrt(N/2))}return new de(Ee/Ye,xe/Ye)}let j=[];for(let re=0,me=z.length,ge=me-1,Ee=re+1;re<me;re++,ge++,Ee++)ge===me&&(ge=0),Ee===me&&(Ee=0),j[re]=Q(z[re],z[ge],z[Ee]);let ee=[],ie,we=j.concat();for(let re=0,me=A;re<me;re++){let ge=D[re];ie=[];for(let Ee=0,xe=ge.length,Ye=xe-1,De=Ee+1;Ee<xe;Ee++,Ye++,De++)Ye===xe&&(Ye=0),De===xe&&(De=0),ie[Ee]=Q(ge[Ee],ge[Ye],ge[De]);ee.push(ie),we=we.concat(ie)}let We;if(m===0)We=Os.triangulateShape(z,D);else{let re=[],me=[];for(let ge=0;ge<m;ge++){let Ee=ge/m,xe=f*Math.cos(Ee*Math.PI/2),Ye=g*Math.sin(Ee*Math.PI/2)+x;for(let De=0,ce=z.length;De<ce;De++){let Le=V(z[De],j[De],Ye);Be(Le.x,Le.y,-xe),Ee===0&&re.push(Le)}for(let De=0,ce=A;De<ce;De++){let Le=D[De];ie=ee[De];let ze=[];for(let N=0,Mt=Le.length;N<Mt;N++){let He=V(Le[N],ie[N],Ye);Be(He.x,He.y,-xe),Ee===0&&ze.push(He)}Ee===0&&me.push(ze)}}We=Os.triangulateShape(re,me)}let Z=We.length,Me=g+x;for(let re=0;re<H;re++){let me=d?V(C[re],we[re],Me):C[re];v?(b.copy(w.normals[0]).multiplyScalar(me.x),T.copy(w.binormals[0]).multiplyScalar(me.y),y.copy(M[0]).add(b).add(T),Be(y.x,y.y,y.z)):Be(me.x,me.y,0)}for(let re=1;re<=h;re++)for(let me=0;me<H;me++){let ge=d?V(C[me],we[me],Me):C[me];v?(b.copy(w.normals[re]).multiplyScalar(ge.x),T.copy(w.binormals[re]).multiplyScalar(ge.y),y.copy(M[re]).add(b).add(T),Be(y.x,y.y,y.z)):Be(ge.x,ge.y,u/h*re)}for(let re=m-1;re>=0;re--){let me=re/m,ge=f*Math.cos(me*Math.PI/2),Ee=g*Math.sin(me*Math.PI/2)+x;for(let xe=0,Ye=z.length;xe<Ye;xe++){let De=V(z[xe],j[xe],Ee);Be(De.x,De.y,u+ge)}for(let xe=0,Ye=D.length;xe<Ye;xe++){let De=D[xe];ie=ee[xe];for(let ce=0,Le=De.length;ce<Le;ce++){let ze=V(De[ce],ie[ce],Ee);v?Be(ze.x,ze.y+M[h-1].y,M[h-1].x+ge):Be(ze.x,ze.y,u+ge)}}}Pe(),je();function Pe(){let re=s.length/3;if(d){let me=0,ge=H*me;for(let Ee=0;Ee<Z;Ee++){let xe=We[Ee];At(xe[2]+ge,xe[1]+ge,xe[0]+ge)}me=h+m*2,ge=H*me;for(let Ee=0;Ee<Z;Ee++){let xe=We[Ee];At(xe[0]+ge,xe[1]+ge,xe[2]+ge)}}else{for(let me=0;me<Z;me++){let ge=We[me];At(ge[2],ge[1],ge[0])}for(let me=0;me<Z;me++){let ge=We[me];At(ge[0]+H*h,ge[1]+H*h,ge[2]+H*h)}}n.addGroup(re,s.length/3-re,0)}function je(){let re=s.length/3,me=0;ve(z,me),me+=z.length;for(let ge=0,Ee=D.length;ge<Ee;ge++){let xe=D[ge];ve(xe,me),me+=xe.length}n.addGroup(re,s.length/3-re,1)}function ve(re,me){let ge=re.length;for(;--ge>=0;){let Ee=ge,xe=ge-1;xe<0&&(xe=re.length-1);for(let Ye=0,De=h+m*2;Ye<De;Ye++){let ce=H*Ye,Le=H*(Ye+1),ze=me+Ee+ce,N=me+xe+ce,Mt=me+xe+Le,He=me+Ee+Le;Ie(ze,N,Mt,He)}}}function Be(re,me,ge){c.push(re),c.push(me),c.push(ge)}function At(re,me,ge){Re(re),Re(me),Re(ge);let Ee=s.length/3,xe=_.generateTopUV(n,s,Ee-3,Ee-2,Ee-1);qe(xe[0]),qe(xe[1]),qe(xe[2])}function Ie(re,me,ge,Ee){Re(re),Re(me),Re(Ee),Re(me),Re(ge),Re(Ee);let xe=s.length/3,Ye=_.generateSideWallUV(n,s,xe-6,xe-3,xe-2,xe-1);qe(Ye[0]),qe(Ye[1]),qe(Ye[3]),qe(Ye[1]),qe(Ye[2]),qe(Ye[3])}function Re(re){s.push(c[re*3+0]),s.push(c[re*3+1]),s.push(c[re*3+2])}function qe(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return cb(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Wc[s.type]().fromJSON(s)),new i(n,e.options)}},ob={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new de(r,a),new de(o,c),new de(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new de(a,1-c),new de(l,1-u),new de(d,1-g),new de(x,1-p)]:[new de(o,1-c),new de(h,1-u),new de(f,1-g),new de(m,1-p)]}};function cb(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ho=class i extends Lt{constructor(e=[new de(0,-.5),new de(.5,0),new de(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=lt(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,u=new P,d=new de,f=new P,g=new P,x=new P,m=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:x.normalize(),c.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let _=0;_<=t;_++){let M=n+_*h*s,v=Math.sin(M),w=Math.cos(M);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*v,u.y=e[T].y,u.z=e[T].x*w,a.push(u.x,u.y,u.z),d.x=_/t,d.y=T/(e.length-1),o.push(d.x,d.y);let b=c[3*T+0]*v,y=c[3*T+1],L=c[3*T+0]*w;l.push(b,y,L)}}for(let _=0;_<t;_++)for(let M=0;M<e.length-1;M++){let v=M+_*e.length,w=v,T=v+e.length,b=v+e.length+1,y=v+1;r.push(w,T,y),r.push(b,y,T)}this.setIndex(r),this.setAttribute("position",new at(a,3)),this.setAttribute("uv",new at(o,2)),this.setAttribute("normal",new at(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var zt=class i extends Lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let _=p*d-a;for(let M=0;M<l;M++){let v=M*u-r;g.push(v,-_,0),x.push(0,0,1),m.push(M/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<o;_++){let M=_+l*p,v=_+l*(p+1),w=_+1+l*(p+1),T=_+1+l*p;f.push(M,v,T),f.push(v,w,T)}this.setIndex(f),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},uo=class i extends Lt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/s,f=new P,g=new de;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let _=p+m,M=_,v=_+n+1,w=_+n+2,T=_+1;o.push(M,v,T),o.push(v,w,T)}}this.setIndex(o),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var is=class i extends Lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new P,d=new P,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let _=[],M=p/n,v=a+M*o,w=e*Math.cos(v),T=Math.sqrt(e*e-w*w),b=0;p===0&&a===0?b=.5/t:p===n&&c===Math.PI&&(b=-.5/t);for(let y=0;y<=t;y++){let L=y/t,C=s+L*r;u.x=-T*Math.cos(C),u.y=w,u.z=T*Math.sin(C),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(L+b,1-M),_.push(l++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){let M=h[p][_+1],v=h[p][_],w=h[p+1][_],T=h[p+1][_+1];(p!==0||a>0)&&f.push(M,v,T),(p!==n-1||c<Math.PI)&&f.push(v,w,T)}this.setIndex(f),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ks=class i extends Lt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=new P,f=new P,g=new P;for(let x=0;x<=n;x++){let m=a+x/n*o;for(let p=0;p<=s;p++){let _=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let p=(s+1)*x+m-1,_=(s+1)*(x-1)+m-1,M=(s+1)*(x-1)+m,v=(s+1)*x+m;c.push(p,_,v),c.push(_,M,v)}this.setIndex(c),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var jr=class i extends Lt{constructor(e=new so(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,c=new P,l=new de,h=new P,u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(f,2));function x(){for(let M=0;M<t;M++)m(M);m(r===!1?t:0),_(),p()}function m(M){h=e.getPointAt(M/t,h);let v=a.normals[M],w=a.binormals[M];for(let T=0;T<=s;T++){let b=T/s*Math.PI*2,y=Math.sin(b),L=-Math.cos(b);c.x=L*v.x+y*w.x,c.y=L*v.y+y*w.y,c.z=L*v.z+y*w.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let M=1;M<=t;M++)for(let v=1;v<=s;v++){let w=(s+1)*(M-1)+(v-1),T=(s+1)*M+(v-1),b=(s+1)*M+v,y=(s+1)*(M-1)+v;g.push(w,T,y),g.push(T,b,y)}}function _(){for(let M=0;M<=t;M++)for(let v=0;v<=s;v++)l.x=M/t,l.y=v/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Wc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function rr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(cp(s))s.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(cp(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function An(i){let e={};for(let t=0;t<i.length;t++){let n=rr(i[t]);for(let s in n)e[s]=n[s]}return e}function cp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function lb(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var cm={clone:rr,merge:An},hb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ub=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_n=class extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hb,this.fragmentShader=ub,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=lb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ke().setHex(s.value);break;case"v2":this.uniforms[n].value=new de().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ct().fromArray(s.value);break;case"m3":this.uniforms[n].value=new st().fromArray(s.value);break;case"m4":this.uniforms[n].value=new nt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Xc=class extends _n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ei=class extends En{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Nn=class extends ei{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Bs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Bs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var fo=class extends En{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=sl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},jc=class extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Kc=class extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function _s(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Fa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function db(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function lp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function fb(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Ci=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Jc=class extends Ci{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qh,endingEnd:Qh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case eu:r=e,o=2*t-n;break;case tu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case eu:a=e,c=2*n-t;break;case tu:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,_=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*x+.5*g,v=f*m-f*x;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+_*a[l+w]+M*a[c+w]+v*a[u+w];return r}},Yc=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},$c=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Zc=class extends Ci{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),x=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*x+a[c+m]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let x=a[l+g],m=a[c+g],p=f*d+g*2,_=u[p],M=u[p+1],v=e*d+g*2,w=h[v],T=h[v+1],b=mb(n,t,_,w,s);r[g]=lm(b,x,M,T,m)}return r}};function lm(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function pb(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function mb(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=lm(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=pb(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Hn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_s(t,this.TimeBufferType),this.values=_s(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_s(e.times,Array),values:_s(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Fa(e.settings)&&(n.settings={inTangents:_s(e.settings.inTangents,Array),outTangents:_s(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Zc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case zs:t=this.InterpolantFactoryMethodDiscrete;break;case Hs:t=this.InterpolantFactoryMethodLinear;break;case Tc:t=this.InterpolantFactoryMethodSmooth;break;case Zh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zs;case this.InterpolantFactoryMethodLinear:return Hs;case this.InterpolantFactoryMethodSmooth:return Tc;case this.InterpolantFactoryMethodBezier:return Zh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Fa(this.settings)&&(hp(this.settings.inTangents,e),hp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Fa(this.settings)&&(up(this.settings.inTangents,e),up(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(et("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(et("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){et("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){et("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&e0(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){et("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Tc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Fa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function hp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function up(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=Hs;var ss=class extends Hn{constructor(e,t,n){super(e,t,n)}};ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=zs;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var po=class extends Hn{constructor(e,t,n,s){super(e,t,n,s)}};po.prototype.ValueTypeName="color";var rs=class extends Hn{constructor(e,t,n,s){super(e,t,n,s)}};rs.prototype.ValueTypeName="number";var Qc=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)rn.slerpFlat(r,0,a,l-o,a,l,c);return r}},as=class extends Hn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Qc(this.times,this.values,this.getValueSize(),e)}};as.prototype.ValueTypeName="quaternion";as.prototype.InterpolantFactoryMethodSmooth=void 0;var os=class extends Hn{constructor(e,t,n){super(e,t,n)}};os.prototype.ValueTypeName="string";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=zs;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var ws=class extends Hn{constructor(e,t,n,s){super(e,t,n,s)}};ws.prototype.ValueTypeName="vector";var mo=class{constructor(e="",t=-1,n=[],s=Vp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=gi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(bb(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Hn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=db(c);c=lp(c,1,h),l=lp(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new rs(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function gb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return rs;case"vector":case"vector2":case"vector3":case"vector4":return ws;case"color":return po;case"quaternion":return as;case"bool":case"boolean":return ss;case"string":return os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function bb(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=gb(i.type);if(i.times===void 0){let n=[],s=[];fb(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Fa(i.settings)&&(t.settings={inTangents:_s(i.settings.inTangents,Float32Array),outTangents:_s(i.settings.outTangents,Float32Array)}),t}var Ti={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(dp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!dp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function dp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var el=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},hm=new el,Pi=class{constructor(e){this.manager=e!==void 0?e:hm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Pi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ji={},au=class extends Error{constructor(e,t){super(e),this.response=t}},Kr=class extends Pi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ti.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ji[e]!==void 0){Ji[e].push({onLoad:t,onProgress:n,onError:s});return}Ji[e]=[],Ji[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Xe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ji[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){_();function _(){u.read().then(({done:M,value:v})=>{if(M)p.close();else{x+=v.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let T=0,b=h.length;T<b;T++){let y=h[T];y.onProgress&&y.onProgress(w)}p.enqueue(v),_()}},M=>{p.error(M)})}}});return new Response(m)}else throw new au(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Ti.add(`file:${e}`,l);let h=Ji[e];delete Ji[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Ji[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ji[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ar=new WeakMap,tl=class extends Pi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ti.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Ar.get(a);u===void 0&&(u=[],Ar.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=Nr("img");function c(){h(),t&&t(this);let u=Ar.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Ar.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Ti.remove(`image:${e}`);let d=Ar.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}Ar.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ti.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Js=class extends Pi{constructor(e){super(e)}load(e,t,n,s){let r=new hn,a=new tl(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ys=class extends Ot{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},go=class extends Ys{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Jh=new nt,fp=new P,pp=new P,Jr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ms,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;fp.setFromMatrixPosition(e.matrixWorld),t.position.copy(fp),pp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Jh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Jh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Lr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Jh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},wc=new P,Ec=new rn,Ei=new P,bo=class extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wc,Ec,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Ec,Ei.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(wc,Ec,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Ec,Ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xs=new P,mp=new de,gp=new de,cn=class extends bo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(Ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xs.x,xs.y).multiplyScalar(-e/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xs.x,xs.y).multiplyScalar(-e/xs.z)}getViewSize(e,t){return this.getViewBounds(e,mp,gp),t.subVectors(gp,mp)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ua*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ou=class extends Jr{constructor(){super(new cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Gs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},xo=class extends Ys{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ou}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},cu=class extends Jr{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0}},Tn=class extends Ys{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new cu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},$s=class extends bo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},lu=class extends Jr{constructor(){super(new $s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zs=class extends Ys{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new lu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var cs=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Yh=new WeakMap,_o=class extends Pi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Xe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Xe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ti.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{Yh.has(a)===!0?(s&&s(Yh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ti.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Yh.set(c,l),Ti.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ti.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Rr=-90,Cr=1,Yr=class extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new cn(Rr,Cr,e,t);s.layers=this.layers,this.add(s);let r=new cn(Rr,Cr,e,t);r.layers=this.layers,this.add(r);let a=new cn(Rr,Cr,e,t);a.layers=this.layers,this.add(a);let o=new cn(Rr,Cr,e,t);o.layers=this.layers,this.add(o);let c=new cn(Rr,Cr,e,t);c.layers=this.layers,this.add(c);let l=new cn(Rr,Cr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},nl=class extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Vu="\\[\\]\\.:\\/",xb=new RegExp("["+Vu+"]","g"),Wu="[^"+Vu+"]",_b="[^"+Vu.replace("\\.","")+"]",vb=/((?:WC+[\/:])*)/.source.replace("WC",Wu),yb=/(WCOD+)?/.source.replace("WCOD",_b),Mb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wu),Sb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wu),wb=new RegExp("^"+vb+yb+Mb+Sb+"$"),Eb=["material","materials","bones","map"],hu=class{constructor(e,t,n){let s=n||kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},kt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xb,"")}static parseTrackName(e){let t=wb.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Eb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;et("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};kt.Composite=hu;kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cw=new Float32Array(1);var bp=new nt,vo=class{constructor(e,t,n=0,s=1/0){this.ray=new ys(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new kr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return bp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bp),this}intersectObject(e,t=!0,n=[]){return uu(e,this,n,t),n.sort(xp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)uu(e[s],this,n,t);return n.sort(xp),n}};function xp(i,e){return i.distance-e.distance}function uu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)uu(r[a],e,t,!0)}}var Yu=class Yu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Yu.prototype.isMatrix2=!0;var du=Yu;function qu(i,e,t,n){let s=Tb(n);switch(t){case Cu:return i*e;case ul:return i*e/s.components*s.byteLength;case dl:return i*e/s.components*s.byteLength;case Es:return i*e*2/s.components*s.byteLength;case fl:return i*e*2/s.components*s.byteLength;case Pu:return i*e*3/s.components*s.byteLength;case ni:return i*e*4/s.components*s.byteLength;case pl:return i*e*4/s.components*s.byteLength;case Mo:case So:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wo:case Eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gl:case xl:return Math.max(i,16)*Math.max(e,8)/4;case ml:case bl:return Math.max(i,8)*Math.max(e,8)/2;case _l:case vl:case Ml:case Sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yl:case To:case wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case El:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Al:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Il:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case kl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ol:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Bl:case zl:case Hl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Gl:case Vl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ao:case Wl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tb(i){switch(i){case Gn:case Eu:return{byteLength:1,components:1};case ta:case Tu:case mi:return{byteLength:2,components:1};case ll:case hl:return{byteLength:2,components:4};case pi:case cl:case Yn:return{byteLength:4,components:1};case Au:case Ru:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Dm(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Rb(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Cb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pb=`#ifdef USE_ALPHAHASH
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
#endif`,Ib=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Db=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fb=`#ifdef USE_AOMAP
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
#endif`,Ub=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kb=`#ifdef USE_BATCHING
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
#endif`,Ob=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gb=`#ifdef USE_IRIDESCENCE
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
#endif`,Vb=`#ifdef USE_BUMPMAP
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
#endif`,Wb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$b=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Zb=`#define PI 3.141592653589793
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
} // validated`,Qb=`vec3 transformedNormal = objectNormal;
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
#endif`,ex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ix=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sx="gl_FragColor = linearToOutputTexel( gl_FragColor );",rx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ax=`#ifdef USE_ENVMAP
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
#endif`,ox=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,cx=`#ifdef USE_ENVMAP
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
#endif`,lx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hx=`#ifdef USE_ENVMAP
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
#endif`,ux=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,px=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mx=`#ifdef USE_GRADIENTMAP
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
}`,gx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_x=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,vx=`#ifdef USE_ENVMAP
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
#endif`,yx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ex=`PhysicalMaterial material;
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
#endif`,Tx=`uniform sampler2D dfgLUT;
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
}`,Ax=`
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
#endif`,Rx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Px=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Ix=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ux=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ox=`#if defined( USE_POINTS_UV )
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
#endif`,Bx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gx=`#if defined( USE_MORPHCOLORS )
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
#endif`,Vx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wx=`#ifdef USE_MORPHTARGETS
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
#endif`,qx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$x=`#ifdef USE_NORMALMAP
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
#endif`,Zx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,s_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,f_=`float getShadowMask() {
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
}`,p_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m_=`#ifdef USE_SKINNING
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
#endif`,g_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b_=`#ifdef USE_SKINNING
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
#endif`,x_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,__=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,M_=`#ifdef USE_TRANSMISSION
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
#endif`,S_=`#ifdef USE_TRANSMISSION
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
#endif`,w_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,R_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C_=`uniform sampler2D t2D;
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
}`,P_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I_=`uniform float backgroundBlurriness;
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
}`,D_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N_=`#include <common>
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
}`,F_=`#if DEPTH_PACKING == 3200
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
}`,U_=`#define DISTANCE
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
}`,k_=`#define DISTANCE
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
}`,O_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z_=`uniform float scale;
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
}`,H_=`uniform vec3 diffuse;
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
}`,G_=`#include <common>
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
}`,V_=`uniform vec3 diffuse;
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
}`,W_=`#define LAMBERT
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
}`,q_=`#define LAMBERT
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
}`,X_=`#define MATCAP
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
}`,j_=`#define MATCAP
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
}`,K_=`#define NORMAL
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
}`,J_=`#define NORMAL
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
}`,Y_=`#define PHONG
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
}`,$_=`#define PHONG
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
}`,Z_=`#define STANDARD
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
}`,Q_=`#define STANDARD
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
}`,ev=`#define TOON
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
}`,tv=`#define TOON
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
}`,nv=`uniform float size;
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
}`,iv=`uniform vec3 diffuse;
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
}`,sv=`#include <common>
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
}`,rv=`uniform vec3 color;
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
}`,av=`uniform float rotation;
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
}`,ov=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:Cb,alphahash_pars_fragment:Pb,alphamap_fragment:Ib,alphamap_pars_fragment:Db,alphatest_fragment:Lb,alphatest_pars_fragment:Nb,aomap_fragment:Fb,aomap_pars_fragment:Ub,batching_pars_vertex:kb,batching_vertex:Ob,begin_vertex:Bb,beginnormal_vertex:zb,bsdfs:Hb,iridescence_fragment:Gb,bumpmap_pars_fragment:Vb,clipping_planes_fragment:Wb,clipping_planes_pars_fragment:qb,clipping_planes_pars_vertex:Xb,clipping_planes_vertex:jb,color_fragment:Kb,color_pars_fragment:Jb,color_pars_vertex:Yb,color_vertex:$b,common:Zb,defaultnormal_vertex:Qb,displacementmap_pars_vertex:ex,displacementmap_vertex:tx,emissivemap_fragment:nx,emissivemap_pars_fragment:ix,colorspace_fragment:sx,colorspace_pars_fragment:rx,envmap_fragment:ax,envmap_common_pars_fragment:ox,envmap_pars_fragment:cx,envmap_pars_vertex:lx,envmap_physical_pars_fragment:vx,envmap_vertex:hx,fog_vertex:ux,fog_pars_vertex:dx,fog_fragment:fx,fog_pars_fragment:px,gradientmap_pars_fragment:mx,lightmap_pars_fragment:gx,lights_lambert_fragment:bx,lights_lambert_pars_fragment:xx,lights_pars_begin:_x,lights_toon_fragment:yx,lights_toon_pars_fragment:Mx,lights_phong_fragment:Sx,lights_phong_pars_fragment:wx,lights_physical_fragment:Ex,lights_physical_pars_fragment:Tx,lights_fragment_begin:Ax,lights_fragment_maps:Rx,lights_fragment_end:Cx,lightprobes_pars_fragment:Px,logdepthbuf_fragment:Ix,logdepthbuf_pars_fragment:Dx,logdepthbuf_pars_vertex:Lx,logdepthbuf_vertex:Nx,map_fragment:Fx,map_pars_fragment:Ux,map_particle_fragment:kx,map_particle_pars_fragment:Ox,metalnessmap_fragment:Bx,metalnessmap_pars_fragment:zx,morphinstance_vertex:Hx,morphcolor_vertex:Gx,morphnormal_vertex:Vx,morphtarget_pars_vertex:Wx,morphtarget_vertex:qx,normal_fragment_begin:Xx,normal_fragment_maps:jx,normal_pars_fragment:Kx,normal_pars_vertex:Jx,normal_vertex:Yx,normalmap_pars_fragment:$x,clearcoat_normal_fragment_begin:Zx,clearcoat_normal_fragment_maps:Qx,clearcoat_pars_fragment:e_,iridescence_pars_fragment:t_,opaque_fragment:n_,packing:i_,premultiplied_alpha_fragment:s_,project_vertex:r_,dithering_fragment:a_,dithering_pars_fragment:o_,roughnessmap_fragment:c_,roughnessmap_pars_fragment:l_,shadowmap_pars_fragment:h_,shadowmap_pars_vertex:u_,shadowmap_vertex:d_,shadowmask_pars_fragment:f_,skinbase_vertex:p_,skinning_pars_vertex:m_,skinning_vertex:g_,skinnormal_vertex:b_,specularmap_fragment:x_,specularmap_pars_fragment:__,tonemapping_fragment:v_,tonemapping_pars_fragment:y_,transmission_fragment:M_,transmission_pars_fragment:S_,uv_pars_fragment:w_,uv_pars_vertex:E_,uv_vertex:T_,worldpos_vertex:A_,background_vert:R_,background_frag:C_,backgroundCube_vert:P_,backgroundCube_frag:I_,cube_vert:D_,cube_frag:L_,depth_vert:N_,depth_frag:F_,distance_vert:U_,distance_frag:k_,equirect_vert:O_,equirect_frag:B_,linedashed_vert:z_,linedashed_frag:H_,meshbasic_vert:G_,meshbasic_frag:V_,meshlambert_vert:W_,meshlambert_frag:q_,meshmatcap_vert:X_,meshmatcap_frag:j_,meshnormal_vert:K_,meshnormal_frag:J_,meshphong_vert:Y_,meshphong_frag:$_,meshphysical_vert:Z_,meshphysical_frag:Q_,meshtoon_vert:ev,meshtoon_frag:tv,points_vert:nv,points_frag:iv,shadow_vert:sv,shadow_frag:rv,sprite_vert:av,sprite_frag:ov},Ae={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Ni={basic:{uniforms:An([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:An([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:An([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:An([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:An([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ke(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:An([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:An([Ae.points,Ae.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:An([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:An([Ae.common,Ae.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:An([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:An([Ae.sprite,Ae.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:An([Ae.common,Ae.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:An([Ae.lights,Ae.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ni.physical={uniforms:An([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new st},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var Xl={r:0,b:0,g:0},cv=new nt,Lm=new st;Lm.set(-1,0,0,0,1,0,0,0,1);function lv(i,e,t,n,s,r){let a=new Ke(0),o=s===!0?0:1,c,l,h=null,u=0,d=null;function f(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let v=_.backgroundBlurriness>0;M=e.get(M,v)}return M}function g(_){let M=!1,v=f(_);v===null?m(a,o):v&&v.isColor&&(m(v,1),M=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,M){let v=f(M);v&&v.isCubeTexture?(l===void 0&&(l=new bt(new Vt(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:rr(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(cv.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Lm),l.material.toneMapped=ut.getTransfer(v.colorSpace)!==Dt,(h!==v||u!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new bt(new zt(2,2),new _n({name:"BackgroundMaterial",uniforms:rr(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ut.getTransfer(v.colorSpace)!==Dt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,M){_.getRGB(Xl,Gu(i)),t.buffers.color.setClear(Xl.r,Xl.g,Xl.b,M,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:g,addToRenderList:x,dispose:p}}function hv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(D,k,F,A,z){let V=!1,H=u(D,A,F,k);r!==H&&(r=H,l(r.object)),V=f(D,A,F,z),V&&g(D,A,F,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,v(D,k,F,A),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function u(D,k,F,A){let z=A.wireframe===!0,V=n[k.id];V===void 0&&(V={},n[k.id]=V);let H=D.isInstancedMesh===!0?D.id:0,Q=V[H];Q===void 0&&(Q={},V[H]=Q);let j=Q[F.id];j===void 0&&(j={},Q[F.id]=j);let ee=j[z];return ee===void 0&&(ee=d(c()),j[z]=ee),ee}function d(D){let k=[],F=[],A=[];for(let z=0;z<t;z++)k[z]=0,F[z]=0,A[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:F,attributeDivisors:A,object:D,attributes:{},index:null}}function f(D,k,F,A){let z=r.attributes,V=k.attributes,H=0,Q=F.getAttributes();for(let j in Q)if(Q[j].location>=0){let ie=z[j],we=V[j];if(we===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(we=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(we=D.instanceColor)),ie===void 0||ie.attribute!==we||we&&ie.data!==we.data)return!0;H++}return r.attributesNum!==H||r.index!==A}function g(D,k,F,A){let z={},V=k.attributes,H=0,Q=F.getAttributes();for(let j in Q)if(Q[j].location>=0){let ie=V[j];ie===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor));let we={};we.attribute=ie,ie&&ie.data&&(we.data=ie.data),z[j]=we,H++}r.attributes=z,r.attributesNum=H,r.index=A}function x(){let D=r.newAttributes;for(let k=0,F=D.length;k<F;k++)D[k]=0}function m(D){p(D,0)}function p(D,k){let F=r.newAttributes,A=r.enabledAttributes,z=r.attributeDivisors;F[D]=1,A[D]===0&&(i.enableVertexAttribArray(D),A[D]=1),z[D]!==k&&(i.vertexAttribDivisor(D,k),z[D]=k)}function _(){let D=r.newAttributes,k=r.enabledAttributes;for(let F=0,A=k.length;F<A;F++)k[F]!==D[F]&&(i.disableVertexAttribArray(F),k[F]=0)}function M(D,k,F,A,z,V,H){H===!0?i.vertexAttribIPointer(D,k,F,z,V):i.vertexAttribPointer(D,k,F,A,z,V)}function v(D,k,F,A){x();let z=A.attributes,V=F.getAttributes(),H=k.defaultAttributeValues;for(let Q in V){let j=V[Q];if(j.location>=0){let ee=z[Q];if(ee===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),ee!==void 0){let ie=ee.normalized,we=ee.itemSize,We=e.get(ee);if(We===void 0)continue;let Z=We.buffer,Me=We.type,Pe=We.bytesPerElement,je=Me===i.INT||Me===i.UNSIGNED_INT||ee.gpuType===cl;if(ee.isInterleavedBufferAttribute){let ve=ee.data,Be=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,At=ee.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let Ie=0;Ie<j.locationSize;Ie++)p(j.location+Ie,ve.meshPerAttribute);D.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ie=0;Ie<j.locationSize;Ie++)m(j.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let Ie=0;Ie<j.locationSize;Ie++)M(j.location+Ie,we/j.locationSize,Me,ie,Be*Pe,(At+we/j.locationSize*Ie)*Pe,je)}else{if(ee.isInstancedBufferAttribute){for(let ve=0;ve<j.locationSize;ve++)p(j.location+ve,ee.meshPerAttribute);D.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ve=0;ve<j.locationSize;ve++)m(j.location+ve);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let ve=0;ve<j.locationSize;ve++)M(j.location+ve,we/j.locationSize,Me,ie,we*Pe,we/j.locationSize*ve*Pe,je)}}else if(H!==void 0){let ie=H[Q];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(j.location,ie);break;case 3:i.vertexAttrib3fv(j.location,ie);break;case 4:i.vertexAttrib4fv(j.location,ie);break;default:i.vertexAttrib1fv(j.location,ie)}}}}_()}function w(){L();for(let D in n){let k=n[D];for(let F in k){let A=k[F];for(let z in A){let V=A[z];for(let H in V)h(V[H].object),delete V[H];delete A[z]}}delete n[D]}}function T(D){if(n[D.id]===void 0)return;let k=n[D.id];for(let F in k){let A=k[F];for(let z in A){let V=A[z];for(let H in V)h(V[H].object),delete V[H];delete A[z]}}delete n[D.id]}function b(D){for(let k in n){let F=n[k];for(let A in F){let z=F[A];if(z[D.id]===void 0)continue;let V=z[D.id];for(let H in V)h(V[H].object),delete V[H];delete z[D.id]}}}function y(D){for(let k in n){let F=n[k],A=D.isInstancedMesh===!0?D.id:0,z=F[A];if(z!==void 0){for(let V in z){let H=z[V];for(let Q in H)h(H[Q].object),delete H[Q];delete z[V]}delete F[A],Object.keys(F).length===0&&delete n[k]}}}function L(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function uv(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function dv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(b){return!(b!==ni&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){let y=b===mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Gn&&b!==Yn&&!y&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Xe("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Xe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:v,maxSamples:w,samples:T}}function fv(i){let e=this,t=null,n=0,s=!1,r=!1,a=new di,o=new st,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let _=r?0:n,M=_*4,v=p.clippingState||null;c.value=v,v=h(g,d,M,f);for(let w=0;w!==M;++w)v[w]=t[w];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=f;M!==x;++M,v+=4)a.copy(u[M]).applyMatrix4(_,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Do=class extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ya(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vt(5,5,5),r=new _n({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:er});r.uniforms.tEquirect.value=t;let a=new bt(s,r),o=t.minFilter;return t.minFilter===ti&&(t.minFilter=ln),new Yr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},um=256,pv=3,mv=20,Nm=256,Fm=16,gv=3,bv=new P,xv=new Ke,sa=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Yr(1,10,null),this._boxMesh=new bt(new Vt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=bv}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,d=c.autoClearColor,f=c.autoClearDepth,g=c.autoClearStencil,x=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(e.background=c.getClearColor(xv));let m=new Yr(n,s,h);return m.position.copy(o),m.update(c,e),c.autoClear=u,c.autoClearColor=d,c.autoClearDepth=f,c.autoClearStencil=g,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(um,Ou(e))}_fromTexture(e,t){e.mapping===nr||e.mapping===Qr?this._setSize(e.image.length===0?um:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=dm(e,!1,!1),n=Math.log2(e)-pv;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=dm(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===nr||e.mapping===Qr?(this._cubemapMaterial===null&&(this._cubemapMaterial=pm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=fm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=_v(),this._integrationMaterial=vv());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Fm);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-gv)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(Nm*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=yv());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function dm(i,e,t){return new Do(i,{minFilter:ti,generateMipmaps:e,type:mi,colorSpace:Ln,depthBuffer:t})}function Lo(i,e,t){return new _n({name:i,uniforms:e,vertexShader:ht.cube_vert,fragmentShader:t,side:un,blending:er,depthTest:!1,depthWrite:!1})}function _v(){return Lo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Nm}u

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
	`)}function vv(){return Lo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Fm}},`

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
	`)}function yv(){return Lo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${mv}
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
	`)}function fm(){return Lo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function pm(){return Lo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Mv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===rl||f===al)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let x=new Do(g.height);return x.fromEquirectangularTexture(i,d),e.set(d,x),d.addEventListener("dispose",l),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===rl||f===al,x=f===nr||f===Qr;if(g||x){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new sa(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let _=d.image;return g&&_&&_.height>0||x&&_&&c(_)?(n===null&&(n=new sa(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===rl?d.mapping=nr:f===al&&(d.mapping=Qr),d}function c(d){let f=0,g=6;for(let x=0;x<g;x++)d[x]!==void 0&&f++;return f===g}function l(d){let f=d.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Sv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Bs("WebGLRenderer: "+n+" extension not supported."),s}}}function wv(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){c(g.target)}function c(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let x=r.get(g);x&&(e.remove(x),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(g,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function h(g){let x=g.attributes;for(let m in x)e.update(x[m],i.ARRAY_BUFFER)}function u(g){let x=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let _=x!==null?x.array.length:m.array.length/3-1,M=m.count>=65535?Wa:Va,v=new M(Math.ceil(_/3)*6,1),w=v.array;if(x!==null){let b=x.array;p=x.version;for(let y=0,L=0;y<_;y+=3){let C=b[y+0],D=b[y+1],k=b[y+2];w[L++]=C,w[L++]=D,w[L++]=D,w[L++]=k,w[L++]=k,w[L++]=C}}else{p=m.version;for(let b=0,y=0;b<_;b+=3){let L=b+0,C=b+1,D=b+2;w[y++]=L,w[y++]=C,w[y++]=C,w[y++]=D,w[y++]=D,w[y++]=L}}v.version=p;let T=r.get(g);T&&e.remove(T),r.set(g,v)}function d(g){let x=r.get(g);if(x){let m=g.index;m!==null&&x.version<m.version&&u(g)}else u(g);return r.get(g)}function f(){for(let g in s){let x=s[g].deref();x!==void 0&&c(x)}}return{get:l,update:h,getWireframeAttribute:d,dispose:f}}function Ev(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Tv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:et("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Av(i,e,t){let n=new WeakMap,s=new Ct;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let L=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",L)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let v=o.attributes.position.count*M,w=1;v>e.maxTextureSize&&(w=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*w*4*u),b=new Ga(T,v,w,u);b.type=Yn,b.needsUpdate=!0;let y=M*4;for(let C=0;C<u;C++){let D=m[C],k=p[C],F=_[C],A=v*w*4*C;for(let z=0;z<D.count;z++){let V=z*y;f===!0&&(s.fromBufferAttribute(D,z),T[A+V+0]=s.x,T[A+V+1]=s.y,T[A+V+2]=s.z,T[A+V+3]=0),g===!0&&(s.fromBufferAttribute(k,z),T[A+V+4]=s.x,T[A+V+5]=s.y,T[A+V+6]=s.z,T[A+V+7]=0),x===!0&&(s.fromBufferAttribute(F,z),T[A+V+8]=s.x,T[A+V+9]=s.y,T[A+V+10]=s.z,T[A+V+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:b,size:new de(v,w)},n.set(o,d),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Rv(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Cv={[xu]:"LINEAR_TONE_MAPPING",[_u]:"REINHARD_TONE_MAPPING",[vu]:"CINEON_TONE_MAPPING",[yo]:"ACES_FILMIC_TONE_MAPPING",[Mu]:"AGX_TONE_MAPPING",[Su]:"NEUTRAL_TONE_MAPPING",[yu]:"CUSTOM_TONE_MAPPING"};function Pv(i,e,t,n,s,r){let a=new jn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new Lt;h.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new at([0,2,0,0,2,0],2));let u=new Xc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new bt(h,u),f=new $s(-1,1,1,-1,0,1),g=null,x=null,m=!1,p,_=null,M=[],v=!1;this.setSize=function(w,T){a.setSize(w,T),o!==null&&o.setSize(w,T),c!==null&&c.setSize(w,T);for(let b=0;b<M.length;b++){let y=M[b];y.setSize&&y.setSize(w,T)}},this.setEffects=function(w){M=w,v=M.length>0&&M[0].isRenderPass===!0;let T=a.width,b=a.height;M.length>0&&o===null&&(o=new jn(T,b,{type:mi,depthBuffer:!1,stencilBuffer:!1}),c=new jn(T,b,{type:mi,depthBuffer:!1,stencilBuffer:!1}));let y=s===!0&&M.some(L=>L.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&l===null&&(l=new ts(T,b),r===!0&&(l.format=ls,l.type=sr)),a.dispose(),a.depthTexture=y?l:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let L=0;L<M.length;L++){let C=M[L];C.setSize&&C.setSize(T,b),y&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(w,T){if(m||w.toneMapping===Di&&M.length===0)return!1;if(_=T,T!==null){let b=T.width,y=T.height;(a.width!==b||a.height!==y)&&this.setSize(b,y)}return v===!1&&w.setRenderTarget(a),p=w.toneMapping,w.toneMapping=Di,!0},this.hasRenderPass=function(){return v},this.end=function(w,T){w.toneMapping=p,m=!0;let b=a,y=o;for(let L=0;L<M.length;L++){let C=M[L];C.enabled!==!1&&(C.render(w,y,b,T),C.needsSwap!==!1&&(b=y,y=y===o?c:o))}if(g!==w.outputColorSpace||x!==w.toneMapping){g=w.outputColorSpace,x=w.toneMapping,u.defines={},ut.getTransfer(g)===Dt&&(u.defines.SRGB_TRANSFER="");let L=Cv[x];L&&(u.defines[L]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,w.setRenderTarget(_),w.render(d,f),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var Um=new hn,km=new ts(1,1),Om=new Za(1),Bm=new Ga,zm=new kc,Hm=new Ya,mm=[],gm=[],bm=new Float32Array(16),xm=new Float32Array(9),_m=new Float32Array(4);function ra(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=mm[s];if(r===void 0&&(r=new Float32Array(s),mm[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function dn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function fn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Jl(i,e){let t=gm[e];t===void 0&&(t=new Int32Array(e),gm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Iv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;i.uniform2fv(this.addr,e),fn(t,e)}}function Lv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;i.uniform3fv(this.addr,e),fn(t,e)}}function Nv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;i.uniform4fv(this.addr,e),fn(t,e)}}function Fv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;_m.set(n),i.uniformMatrix2fv(this.addr,!1,_m),fn(t,n)}}function Uv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;xm.set(n),i.uniformMatrix3fv(this.addr,!1,xm),fn(t,n)}}function kv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;bm.set(n),i.uniformMatrix4fv(this.addr,!1,bm),fn(t,n)}}function Ov(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Bv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;i.uniform2iv(this.addr,e),fn(t,e)}}function zv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;i.uniform3iv(this.addr,e),fn(t,e)}}function Hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;i.uniform4iv(this.addr,e),fn(t,e)}}function Gv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Vv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;i.uniform2uiv(this.addr,e),fn(t,e)}}function Wv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;i.uniform3uiv(this.addr,e),fn(t,e)}}function qv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;i.uniform4uiv(this.addr,e),fn(t,e)}}function Yl(i){return i.version===0&&(i.compareFunction=Nu,i.needsUpdate=!0),i}function Xv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Yl(km):r=Um,t.setTexture2D(e||r,s)}function jv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||zm,s)}function Kv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Yl(Om):r=Hm,t.setTextureCube(e||r,s)}function Jv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Bm,s)}function Yv(i){switch(i){case 5126:return Iv;case 35664:return Dv;case 35665:return Lv;case 35666:return Nv;case 35674:return Fv;case 35675:return Uv;case 35676:return kv;case 5124:case 35670:return Ov;case 35667:case 35671:return Bv;case 35668:case 35672:return zv;case 35669:case 35673:return Hv;case 5125:return Gv;case 36294:return Vv;case 36295:return Wv;case 36296:return qv;case 35678:case 36198:case 36298:case 36306:case 35682:return Xv;case 35679:case 36299:case 36307:return jv;case 35680:case 36300:case 36308:case 36293:return Kv;case 36289:case 36303:case 36311:case 36292:return Jv}}function $v(i,e){i.uniform1fv(this.addr,e)}function Zv(i,e){let t=ra(e,this.size,2);i.uniform2fv(this.addr,t)}function Qv(i,e){let t=ra(e,this.size,3);i.uniform3fv(this.addr,t)}function ey(i,e){let t=ra(e,this.size,4);i.uniform4fv(this.addr,t)}function ty(i,e){let t=ra(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ny(i,e){let t=ra(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function iy(i,e){let t=ra(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function sy(i,e){i.uniform1iv(this.addr,e)}function ry(i,e){i.uniform2iv(this.addr,e)}function ay(i,e){i.uniform3iv(this.addr,e)}function oy(i,e){i.uniform4iv(this.addr,e)}function cy(i,e){i.uniform1uiv(this.addr,e)}function ly(i,e){i.uniform2uiv(this.addr,e)}function hy(i,e){i.uniform3uiv(this.addr,e)}function uy(i,e){i.uniform4uiv(this.addr,e)}function dy(i,e,t){let n=this.cache,s=e.length,r=Jl(t,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Yl(km):a=Um;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function fy(i,e,t){let n=this.cache,s=e.length,r=Jl(t,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||zm,r[a])}function py(i,e,t){let n=this.cache,s=e.length,r=Jl(t,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Yl(Om):a=Hm;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function my(i,e,t){let n=this.cache,s=e.length,r=Jl(t,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Bm,r[a])}function gy(i){switch(i){case 5126:return $v;case 35664:return Zv;case 35665:return Qv;case 35666:return ey;case 35674:return ty;case 35675:return ny;case 35676:return iy;case 5124:case 35670:return sy;case 35667:case 35671:return ry;case 35668:case 35672:return ay;case 35669:case 35673:return oy;case 5125:return cy;case 36294:return ly;case 36295:return hy;case 36296:return uy;case 35678:case 36198:case 36298:case 36306:case 35682:return dy;case 35679:case 36299:case 36307:return fy;case 35680:case 36300:case 36308:case 36293:return py;case 36289:case 36303:case 36311:case 36292:return my}}var Qu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yv(t.type)}},ed=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gy(t.type)}},td=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},$u=/(\w+)(\])?(\[|\.)?/g;function vm(i,e){i.seq.push(e),i.map[e.id]=e}function by(i,e,t){let n=i.name,s=n.length;for($u.lastIndex=0;;){let r=$u.exec(n),a=$u.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){vm(t,l===void 0?new Qu(o,i,e):new ed(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new td(o),vm(t,u)),t=u}}}var ia=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);by(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function ym(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var xy=37297,_y=0;function vy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Mm=new st;function yy(i){ut._getMatrix(Mm,ut.workingColorSpace,i);let e=`mat3( ${Mm.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(i)){case za:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Sm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+vy(i.getShaderSource(e),o)}else return r}function My(i,e){let t=yy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Sy={[xu]:"Linear",[_u]:"Reinhard",[vu]:"Cineon",[yo]:"ACESFilmic",[Mu]:"AgX",[Su]:"Neutral",[yu]:"Custom"};function wy(i,e){let t=Sy[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var jl=new P;function Ey(){ut.getLuminanceCoefficients(jl);let i=jl.x.toFixed(4),e=jl.y.toFixed(4),t=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ty(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function Ay(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ry(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Io(i){return i!==""}function wm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Em(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Cy=/^[ \t]*#include +<([\w\d./]+)>/gm;function nd(i){return i.replace(Cy,Py)}function Py(i,e){let t=ht[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return nd(t)}var Iy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tm(i){return i.replace(Iy,Dy)}function Dy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Am(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Ly={[Qs]:"SHADOWMAP_TYPE_PCF",[$r]:"SHADOWMAP_TYPE_VSM"};function Ny(i){return Ly[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Fy={[Qr]:"ENVMAP_MODE_REFRACTION"};function Uy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Fy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ky={[sl]:"ENVMAP_BLENDING_MULTIPLY",[zp]:"ENVMAP_BLENDING_MIX",[Hp]:"ENVMAP_BLENDING_ADD"};function Oy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ky[i.combine]||"ENVMAP_BLENDING_NONE"}function By(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Ny(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Uy(t),u=Oy(t),d=Ty(t),f=Ay(r),g=s.createProgram(),x,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Io).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Io).join(`
`),m.length>0&&(m+=`
`)):(x=[Am(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),m=[Am(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?ht.tonemapping_pars_fragment:"",t.toneMapping!==Di?wy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,My("linearToOutputTexel",t.outputColorSpace),Ey(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Io).join(`
`)),a=nd(a),a=wm(a,t),a=Em(a,t),o=nd(o),o=wm(o,t),o=Em(o,t),a=Tm(a),o=Tm(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===Uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=p+x+a,M=p+m+o,v=ym(s,s.VERTEX_SHADER,_),w=ym(s,s.FRAGMENT_SHADER,M);s.attachShader(g,v),s.attachShader(g,w),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(C){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(g)||"",k=s.getShaderInfoLog(v)||"",F=s.getShaderInfoLog(w)||"",A=D.trim(),z=k.trim(),V=F.trim(),H=!0,Q=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,v,w);else{let j=Sm(s,v,"vertex"),ee=Sm(s,w,"fragment");et("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+A+`
`+j+`
`+ee)}else A!==""?Xe("WebGLProgram: Program Info Log:",A):(z===""||V==="")&&(Q=!1);Q&&(C.diagnostics={runnable:H,programLog:A,vertexShader:{log:z,prefix:x},fragmentShader:{log:V,prefix:m}})}s.deleteShader(v),s.deleteShader(w),b=new ia(s,g),y=Ry(s,g)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(g,xy)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_y++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=w,this}var zy=0,id=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new sd(e),t.set(e,n)),n}},sd=class{constructor(e){this.id=zy++,this.code=e,this.usedTimes=0}};function Hy(i){return i===Es||i===To||i===Ao}function Gy(i,e,t,n,s,r){let a=new kr,o=new id,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,y,L,C,D,k){let F=C.fog,A=D.geometry,z=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?C.environment:null,V=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,H=e.get(b.envMap||z,V),Q=d[b.type],j=n.precision;b.precision!==null&&(j=n.getMaxPrecision(b.precision),j!==b.precision&&Xe("WebGLProgram.getParameters:",b.precision,"not supported, using",j,"instead."));let ee=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,ie=ee!==void 0?ee.length:0,we=0;A.morphAttributes.position!==void 0&&(we=1),A.morphAttributes.normal!==void 0&&(we=2),A.morphAttributes.color!==void 0&&(we=3);let We,Z,Me,Pe;if(Q){let ne=Ni[Q];We=ne.vertexShader,Z=ne.fragmentShader}else{We=b.vertexShader,Z=b.fragmentShader;let ne=o.getVertexShaderStage(b),St=o.getFragmentShaderStage(b);o.update(b,ne,St),Me=ne.id,Pe=St.id}let je=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Be=D.isInstancedMesh===!0,At=D.isBatchedMesh===!0,Ie=!!b.map,Re=!!b.matcap,qe=!!H,re=qe&&H.isPMREMTexture===!0,me=!!b.aoMap,ge=!!b.lightMap,Ee=!!b.bumpMap&&b.wireframe===!1,xe=!!b.normalMap,Ye=!!b.displacementMap,De=!!b.emissiveMap,ce=!!b.metalnessMap,Le=!!b.roughnessMap,ze=b.anisotropy>0,N=b.clearcoat>0,Mt=b.diffuseRoughness>0,He=b.dispersion>0,ct=b.retroreflectivity>0,fe=b.iridescence>0,vt=b.sheen>0,Ge=b.transmission>0,$e=ze&&!!b.anisotropyMap,R=N&&!!b.clearcoatMap,S=N&&!!b.clearcoatNormalMap,G=N&&!!b.clearcoatRoughnessMap,le=Mt&&!!b.diffuseRoughnessMap,te=fe&&!!b.iridescenceMap,B=fe&&!!b.iridescenceThicknessMap,se=vt&&!!b.sheenColorMap,q=vt&&!!b.sheenRoughnessMap,K=!!b.specularMap,oe=!!b.specularColorMap,I=!!b.specularIntensityMap,$=Ge&&!!b.transmissionMap,Y=Ge&&!!b.thicknessMap,be=!!b.gradientMap,O=!!b.alphaMap,ae=b.alphaTest>0,pe=!!b.alphaHash,Ve=!!b.extensions,he=Di;b.toneMapped&&(je===null||je.isXRRenderTarget===!0)&&(he=i.toneMapping);let ke=re?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,it={shaderID:Q,shaderType:b.type,shaderName:b.name,vertexShader:We,fragmentShader:Z,defines:b.defines,customVertexShaderID:Me,customFragmentShaderID:Pe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:j,batching:At,batchingColor:At&&D._colorsTexture!==null,instancing:Be,instancingColor:Be&&D.instanceColor!==null,instancingMorph:Be&&D.morphTexture!==null,outputColorSpace:je===null?i.outputColorSpace:je.isXRRenderTarget===!0?je.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Ie,matcap:Re,envMap:qe,envMapMode:qe&&H.mapping,envMapPMREM:re,envMapMaxLod:re?ke.length-1:null,envMapSize:re?ke[0].width:null,aoMap:me,lightMap:ge,bumpMap:Ee,normalMap:xe,displacementMap:Ye,emissiveMap:De,normalMapObjectSpace:xe&&b.normalMapType===qp,normalMapTangentSpace:xe&&b.normalMapType===Co,packedNormalMap:xe&&b.normalMapType===Co&&Hy(b.normalMap.format),metalnessMap:ce,roughnessMap:Le,anisotropy:ze,anisotropyMap:$e,clearcoat:N,clearcoatMap:R,clearcoatNormalMap:S,clearcoatRoughnessMap:G,diffuseRoughness:Mt,diffuseRoughnessMap:le,dispersion:He,retroreflection:ct,iridescence:fe,iridescenceMap:te,iridescenceThicknessMap:B,sheen:vt,sheenColorMap:se,sheenRoughnessMap:q,specularMap:K,specularColorMap:oe,specularIntensityMap:I,transmission:Ge,transmissionMap:$,thicknessMap:Y,gradientMap:be,opaque:b.transparent===!1&&b.blending===Zr&&b.alphaToCoverage===!1,alphaMap:O,alphaTest:ae,alphaHash:pe,combine:b.combine,mapUv:Ie&&f(b.map.channel),aoMapUv:me&&f(b.aoMap.channel),lightMapUv:ge&&f(b.lightMap.channel),bumpMapUv:Ee&&f(b.bumpMap.channel),normalMapUv:xe&&f(b.normalMap.channel),displacementMapUv:Ye&&f(b.displacementMap.channel),emissiveMapUv:De&&f(b.emissiveMap.channel),metalnessMapUv:ce&&f(b.metalnessMap.channel),roughnessMapUv:Le&&f(b.roughnessMap.channel),anisotropyMapUv:$e&&f(b.anisotropyMap.channel),clearcoatMapUv:R&&f(b.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&f(b.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:le&&f(b.diffuseRoughnessMap.channel),iridescenceMapUv:te&&f(b.iridescenceMap.channel),iridescenceThicknessMapUv:B&&f(b.iridescenceThicknessMap.channel),sheenColorMapUv:se&&f(b.sheenColorMap.channel),sheenRoughnessMapUv:q&&f(b.sheenRoughnessMap.channel),specularMapUv:K&&f(b.specularMap.channel),specularColorMapUv:oe&&f(b.specularColorMap.channel),specularIntensityMapUv:I&&f(b.specularIntensityMap.channel),transmissionMapUv:$&&f(b.transmissionMap.channel),thicknessMapUv:Y&&f(b.thicknessMap.channel),alphaMapUv:O&&f(b.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(xe||ze),vertexNormals:!!A.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!A.attributes.uv&&(Ie||O),fog:!!F,useFog:b.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||A.attributes.normal===void 0&&xe===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ve,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:A.attributes.position!==void 0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:we,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:k.filter(ne=>ne.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:Ie&&b.map.isVideoTexture===!0&&ut.getTransfer(b.map.colorSpace)===Dt,decodeVideoTextureEmissive:De&&b.emissiveMap.isVideoTexture===!0&&ut.getTransfer(b.emissiveMap.colorSpace)===Dt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===$t,flipSided:b.side===un,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ve&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&b.extensions.multiDraw===!0||At)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return it.vertexUv1s=c.has(1),it.vertexUv2s=c.has(2),it.vertexUv3s=c.has(3),c.clear(),it}function x(b){let y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(let L in b.defines)y.push(L),y.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(m(y,b),p(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function m(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapPMREM),b.push(y.envMapMaxLod),b.push(y.envMapSize),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.diffuseRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.numSunLights),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numSunLightShadows),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.numLightProbeGrids),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function p(b,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),b.push(a.mask)}function _(b){let y=d[b.type],L;if(y){let C=Ni[y];L=cm.clone(C.uniforms)}else L=b.uniforms;return L}function M(b,y){let L=h.get(y);return L!==void 0?++L.usedTimes:(L=new By(i,y,b,s),l.push(L),h.set(y,L)),L}function v(b){if(--b.usedTimes===0){let y=l.indexOf(b);l[y]=l[l.length-1],l.pop(),h.delete(b.cacheKey),b.destroy()}}function w(b){o.remove(b)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:_,acquireProgram:M,releaseProgram:v,releaseShaderCache:w,programs:l,dispose:T}}function Vy(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Wy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Rm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Cm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,x,m,p){let _=i[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:p},i[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=g,_.materialVariant=a(d),_.groupOrder=x,_.renderOrder=d.renderOrder,_.z=m,_.group=p),e++,_}function c(d,f,g,x,m,p,_){_.reversedDepth===!0&&(m=-m);let M=o(d,f,g,x,m,p);g.transmission>0?n.push(M):g.transparent===!0?s.push(M):t.push(M)}function l(d,f,g,x,m,p){let _=o(d,f,g,x,m,p);g.transmission>0?n.unshift(_):g.transparent===!0?s.unshift(_):t.unshift(_)}function h(d,f){t.length>1&&t.sort(d||Wy),n.length>1&&n.sort(f||Rm),s.length>1&&s.sort(f||Rm)}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function qy(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Cm,i.set(n,[a])):s>=r.length?(a=new Cm,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Xy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Ke};break;case"SpotLight":t={position:new P,direction:new P,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function jy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Ky=0;function Jy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Yy(i){let e=new Xy,t=jy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);let s=new P,r=new nt,a=new nt;function o(l){let h=0,u=0,d=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,_=0,M=0,v=0,w=0,T=0,b=0,y=0,L=0,C=0;l.sort(Jy);for(let k=0,F=l.length;k<F;k++){let A=l[k],z=A.color,V=A.intensity,H=A.distance,Q=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Es?Q=A.shadow.map.texture:Q=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)h+=z.r*V,u+=z.g*V,d+=z.b*V;else if(A.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(A.sh.coefficients[j],V);C++}else if(A.isSunLight){let j=e.get(A);if(j.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let ee=A.shadow,ie=t.get(A);ie.shadowIntensity=ee.intensity,ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),n.sunShadow[g]=ie,n.sunShadowMap[g]=Q;let we=ee.getViewportCount();for(let We=0;We<we;We++)n.sunShadowMatrix[x+We]=ee.getMatrix(We),n.sunShadowCascade[x+We]=ee._cascadeData[We];x+=we,g++}n.sun[f]=j,f++}else if(A.isDirectionalLight){let j=e.get(A);if(j.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let ee=A.shadow,ie=t.get(A);ie.shadowIntensity=ee.intensity,ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,n.directionalShadow[m]=ie,n.directionalShadowMap[m]=Q,n.directionalShadowMatrix[m]=A.shadow.matrix,w++}n.directional[m]=j,m++}else if(A.isSpotLight){let j=e.get(A);j.position.setFromMatrixPosition(A.matrixWorld),j.color.copy(z).multiplyScalar(V),j.distance=H,j.coneCos=Math.cos(A.angle),j.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),j.decay=A.decay,n.spot[_]=j;let ee=A.shadow;if(A.map&&(n.spotLightMap[y]=A.map,y++,ee.updateMatrices(A),A.castShadow&&L++),n.spotLightMatrix[_]=ee.matrix,A.castShadow){let ie=t.get(A);ie.shadowIntensity=ee.intensity,ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,n.spotShadow[_]=ie,n.spotShadowMap[_]=Q,b++}_++}else if(A.isRectAreaLight){let j=e.get(A);j.color.copy(z).multiplyScalar(V),j.halfWidth.set(A.width*.5,0,0),j.halfHeight.set(0,A.height*.5,0),n.rectArea[M]=j,M++}else if(A.isPointLight){let j=e.get(A);if(j.color.copy(A.color).multiplyScalar(A.intensity),j.distance=A.distance,j.decay=A.decay,A.castShadow){let ee=A.shadow,ie=t.get(A);ie.shadowIntensity=ee.intensity,ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,ie.shadowCameraNear=ee.camera.near,ie.shadowCameraFar=ee.camera.far,n.pointShadow[p]=ie,n.pointShadowMap[p]=Q,n.pointShadowMatrix[p]=A.shadow.matrix,T++}n.point[p]=j,p++}else if(A.isHemisphereLight){let j=e.get(A);j.skyColor.copy(A.color).multiplyScalar(V),j.groundColor.copy(A.groundColor).multiplyScalar(V),n.hemi[v]=j,v++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==_||D.rectAreaLength!==M||D.hemiLength!==v||D.numSunShadows!==g||D.numDirectionalShadows!==w||D.numPointShadows!==T||D.numSpotShadows!==b||D.numSpotMaps!==y||D.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=_,n.rectArea.length=M,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=b,n.spotShadowMap.length=b,n.spotLightMatrix.length=b+y-L,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=C,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=_,D.rectAreaLength=M,D.hemiLength=v,D.numSunShadows=g,D.numDirectionalShadows=w,D.numPointShadows=T,D.numSpotShadows=b,D.numSpotMaps=y,D.numLightProbes=C,n.version=Ky++)}function c(l,h){let u=0,d=0,f=0,g=0,x=0,m=0,p=h.matrixWorldInverse;for(let _=0,M=l.length;_<M;_++){let v=l[_];if(v.isSunLight){let w=n.sun[u];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),d++}else if(v.isSpotLight){let w=n.spot[g];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let w=n.rectArea[x];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let w=n.hemi[m];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function Pm(i){let e=new Yy(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function c(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function l(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function $y(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Pm(i),e.set(s,[o])):r>=a.length?(o=new Pm(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Zy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qy=`uniform sampler2D shadow_pass;
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
}`,eM=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],tM=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Im=new nt,Po=new P,Zu=new P;function nM(i,e,t){let n=new Ms,s=new de,r=new de,a=new Ct,o=new jc,c=new Kc,l={},h=t.maxTextureSize,u={[Ii]:un,[un]:Ii,[$t]:$t},d=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:Zy,fragmentShader:Qy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Lt;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new bt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qs;let p=this.type;this.render=function(T,b,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===yp&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Qs);let L=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),k=i.state;k.setBlending(er),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let F=p!==this.type;F&&b.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(z=>z.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,z=T.length;A<z;A++){let V=T[A],H=V.shadow;if(H===void 0){Xe("WebGLShadowMap:",V,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let Q=H.getFrameExtents();s.multiply(Q),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,H.mapSize.y=r.y));let j=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=j,H.map===null||F===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===$r){if(V.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new jn(s.x,s.y,{format:Es,type:mi,minFilter:ln,magFilter:ln,generateMipmaps:!1}),H.map.texture.name=V.name+".shadowMap",H.map.depthTexture=new ts(s.x,s.y,Yn),H.map.depthTexture.name=V.name+".shadowMapDepth",H.map.depthTexture.format=Zi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=en,H.map.depthTexture.magFilter=en}else V.isPointLight?(H.map=new Do(s.x),H.map.depthTexture=new Za(s.x,pi)):(H.map=new jn(s.x,s.y),H.map.depthTexture=new ts(s.x,s.y,pi)),H.map.depthTexture.name=V.name+".shadowMap",H.map.depthTexture.format=Zi,this.type===Qs?(H.map.depthTexture.compareFunction=j?Lu:Du,H.map.depthTexture.minFilter=ln,H.map.depthTexture.magFilter=ln):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=en,H.map.depthTexture.magFilter=en);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let ee=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();V.isPointLight!==!0&&H.updateMatrices(V,y);let ie=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:y.layers;for(let we=0;we<ee;we++){let We=H.getCamera(we);if(V.isPointLight){let Z=H.camera,Me=H.matrix,Pe=V.distance||Z.far;Pe!==Z.far&&(Z.far=Pe,Z.updateProjectionMatrix()),Po.setFromMatrixPosition(V.matrixWorld),Z.position.copy(Po),Zu.copy(Z.position),Zu.add(eM[we]),Z.up.copy(tM[we]),Z.lookAt(Zu),Z.updateMatrixWorld(),Me.makeTranslation(-Po.x,-Po.y,-Po.z),Im.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Im,Z.coordinateSystem,Z.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,we),i.clear();else{we===0&&(i.setRenderTarget(H.map),i.clear());let Z=H.getViewport(we);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),k.viewport(a)}n=H.getFrustum(we),v(b,y,We,V,ie,this.type)}H.isPointLightShadow!==!0&&this.type===$r&&_(H,y),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(L,C,D)};function _(T,b){let y=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new jn(s.x,s.y,{format:Es,type:mi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(b,null,y,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(b,null,y,f,x,null)}function M(T,b,y,L){let C=null,D=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)C=D;else if(C=y.isPointLight===!0?c:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let k=C.uuid,F=b.uuid,A=l[k];A===void 0&&(A={},l[k]=A);let z=A[F];z===void 0&&(z=C.clone(),A[F]=z,b.addEventListener("dispose",w)),C=z}if(C.visible=b.visible,C.wireframe=b.wireframe,L===$r?C.side=b.shadowSide!==null?b.shadowSide:b.side:C.side=b.shadowSide!==null?b.shadowSide:u[b.side],C.alphaMap=b.alphaMap,C.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,C.map=b.map,C.clipShadows=b.clipShadows,C.clippingPlanes=b.clippingPlanes,C.clipIntersection=b.clipIntersection,C.displacementMap=b.displacementMap,C.displacementScale=b.displacementScale,C.displacementBias=b.displacementBias,C.wireframeLinewidth=b.wireframeLinewidth,C.linewidth=b.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let k=i.properties.get(C);k.light=y}return C}function v(T,b,y,L,C,D){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===$r)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let A=e.update(T),z=T.material;if(Array.isArray(z)){let V=A.groups;for(let H=0,Q=V.length;H<Q;H++){let j=V[H],ee=z[j.materialIndex];if(ee&&ee.visible){let ie=M(T,ee,L,D);T.onBeforeShadow(i,T,b,y,A,ie,j),i.renderBufferDirect(y,null,A,ie,T,j),T.onAfterShadow(i,T,b,y,A,ie,j)}}}else if(z.visible){let V=M(T,z,L,D);T.onBeforeShadow(i,T,b,y,A,V,null),i.renderBufferDirect(y,null,A,V,T,null),T.onAfterShadow(i,T,b,y,A,V,null)}}let F=T.children;for(let A=0,z=F.length;A<z;A++)v(F[A],b,y,L,C,D)}function w(T){T.target.removeEventListener("dispose",w);for(let y in l){let L=l[y],C=T.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}function iM(i,e){function t(){let I=!1,$=new Ct,Y=null,be=new Ct(0,0,0,0);return{setMask:function(O){Y!==O&&!I&&(i.colorMask(O,O,O,O),Y=O)},setLocked:function(O){I=O},setClear:function(O,ae,pe,Ve,he){he===!0&&(O*=Ve,ae*=Ve,pe*=Ve),$.set(O,ae,pe,Ve),be.equals($)===!1&&(i.clearColor(O,ae,pe,Ve),be.copy($))},reset:function(){I=!1,Y=null,be.set(-1,0,0,0)}}}function n(){let I=!1,$=!1,Y=null,be=null,O=null;return{setReversed:function(ae){if($!==ae){let pe=e.get("EXT_clip_control");ae?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),$=ae;let Ve=O;O=null,this.setClear(Ve)}},getReversed:function(){return $},setTest:function(ae){ae?ve(i.DEPTH_TEST):Be(i.DEPTH_TEST)},setMask:function(ae){Y!==ae&&!I&&(i.depthMask(ae),Y=ae)},setFunc:function(ae){if($&&(ae=tm[ae]),be!==ae){switch(ae){case Rc:i.depthFunc(i.NEVER);break;case Cc:i.depthFunc(i.ALWAYS);break;case Pc:i.depthFunc(i.LESS);break;case Ir:i.depthFunc(i.LEQUAL);break;case Ic:i.depthFunc(i.EQUAL);break;case Dc:i.depthFunc(i.GEQUAL);break;case Lc:i.depthFunc(i.GREATER);break;case Nc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}be=ae}},setLocked:function(ae){I=ae},setClear:function(ae){O!==ae&&(O=ae,$&&(ae=1-ae),i.clearDepth(ae))},reset:function(){I=!1,Y=null,be=null,O=null,$=!1}}}function s(){let I=!1,$=null,Y=null,be=null,O=null,ae=null,pe=null,Ve=null,he=null;return{setTest:function(ke){I||(ke?ve(i.STENCIL_TEST):Be(i.STENCIL_TEST))},setMask:function(ke){$!==ke&&!I&&(i.stencilMask(ke),$=ke)},setFunc:function(ke,it,ne){(Y!==ke||be!==it||O!==ne)&&(i.stencilFunc(ke,it,ne),Y=ke,be=it,O=ne)},setOp:function(ke,it,ne){(ae!==ke||pe!==it||Ve!==ne)&&(i.stencilOp(ke,it,ne),ae=ke,pe=it,Ve=ne)},setLocked:function(ke){I=ke},setClear:function(ke){he!==ke&&(i.clearStencil(ke),he=ke)},reset:function(){I=!1,$=null,Y=null,be=null,O=null,ae=null,pe=null,Ve=null,he=null}}}let r=new t,a=new n,o=new s,c={},l=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],x=null,m=!1,p=null,_=null,M=null,v=null,w=null,T=null,b=null,y=new Ke(0,0,0),L=0,C=!1,D=null,k=null,F=null,A=null,z=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Q=0,j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(j)[1]),H=Q>=1):j.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),H=Q>=2);let ee=null,ie={},we=i.getParameter(i.SCISSOR_BOX),We=i.getParameter(i.VIEWPORT),Z=new Ct().fromArray(we),Me=new Ct().fromArray(We);function Pe(I,$,Y,be){let O=new Uint8Array(4),ae=i.createTexture();i.bindTexture(I,ae),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let pe=0;pe<Y;pe++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,O):i.texImage2D($+pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,O);return ae}let je={};je[i.TEXTURE_2D]=Pe(i.TEXTURE_2D,i.TEXTURE_2D,1),je[i.TEXTURE_CUBE_MAP]=Pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),je[i.TEXTURE_2D_ARRAY]=Pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),je[i.TEXTURE_3D]=Pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ve(i.DEPTH_TEST),a.setFunc(Ir),Ee(!1),xe(fu),ve(i.CULL_FACE),me(er);function ve(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Be(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function At(I,$){return d[I]!==$?(i.bindFramebuffer(I,$),d[I]=$,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=$),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=$),!0):!1}function Ie(I,$){let Y=g,be=!1;if(I){Y=f.get($),Y===void 0&&(Y=[],f.set($,Y));let O=I.textures;if(Y.length!==O.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,pe=O.length;ae<pe;ae++)Y[ae]=i.COLOR_ATTACHMENT0+ae;Y.length=O.length,be=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,be=!0);be&&i.drawBuffers(Y)}function Re(I){return x!==I?(i.useProgram(I),x=I,!0):!1}let qe={[tr]:i.FUNC_ADD,[Sp]:i.FUNC_SUBTRACT,[wp]:i.FUNC_REVERSE_SUBTRACT};qe[Ep]=i.MIN,qe[Tp]=i.MAX;let re={[Ap]:i.ZERO,[Rp]:i.ONE,[Cp]:i.SRC_COLOR,[gu]:i.SRC_ALPHA,[Fp]:i.SRC_ALPHA_SATURATE,[Lp]:i.DST_COLOR,[Ip]:i.DST_ALPHA,[Pp]:i.ONE_MINUS_SRC_COLOR,[bu]:i.ONE_MINUS_SRC_ALPHA,[Np]:i.ONE_MINUS_DST_COLOR,[Dp]:i.ONE_MINUS_DST_ALPHA,[Up]:i.CONSTANT_COLOR,[kp]:i.ONE_MINUS_CONSTANT_COLOR,[Op]:i.CONSTANT_ALPHA,[Bp]:i.ONE_MINUS_CONSTANT_ALPHA};function me(I,$,Y,be,O,ae,pe,Ve,he,ke){if(I===er){m===!0&&(Be(i.BLEND),m=!1);return}if(m===!1&&(ve(i.BLEND),m=!0),I!==Mp){if(I!==p||ke!==C){if((_!==tr||w!==tr)&&(i.blendEquation(i.FUNC_ADD),_=tr,w=tr),ke)switch(I){case Zr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jn:i.blendFunc(i.ONE,i.ONE);break;case pu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:et("WebGLState: Invalid blending: ",I);break}else switch(I){case Zr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case pu:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mu:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",I);break}M=null,v=null,T=null,b=null,y.set(0,0,0),L=0,p=I,C=ke}return}O=O||$,ae=ae||Y,pe=pe||be,($!==_||O!==w)&&(i.blendEquationSeparate(qe[$],qe[O]),_=$,w=O),(Y!==M||be!==v||ae!==T||pe!==b)&&(i.blendFuncSeparate(re[Y],re[be],re[ae],re[pe]),M=Y,v=be,T=ae,b=pe),(Ve.equals(y)===!1||he!==L)&&(i.blendColor(Ve.r,Ve.g,Ve.b,he),y.copy(Ve),L=he),p=I,C=!1}function ge(I,$){I.side===$t?Be(i.CULL_FACE):ve(i.CULL_FACE);let Y=I.side===un;$&&(Y=!Y),Ee(Y),I.blending===Zr&&I.transparent===!1?me(er):me(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let be=I.stencilWrite;o.setTest(be),be&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),De(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ve(i.SAMPLE_ALPHA_TO_COVERAGE):Be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(I){D!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),D=I)}function xe(I){I!==_p?(ve(i.CULL_FACE),I!==k&&(I===fu?i.cullFace(i.BACK):I===vp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Be(i.CULL_FACE),k=I}function Ye(I){I!==F&&(H&&i.lineWidth(I),F=I)}function De(I,$,Y){I?(ve(i.POLYGON_OFFSET_FILL),(A!==$||z!==Y)&&(A=$,z=Y,a.getReversed()&&($=-$,Y=-Y),i.polygonOffset($,Y))):Be(i.POLYGON_OFFSET_FILL)}function ce(I){I?ve(i.SCISSOR_TEST):Be(i.SCISSOR_TEST)}function Le(I){I===void 0&&(I=i.TEXTURE0+V-1),ee!==I&&(i.activeTexture(I),ee=I)}function ze(I,$,Y){Y===void 0&&(ee===null?Y=i.TEXTURE0+V-1:Y=ee);let be=ie[Y];be===void 0&&(be={type:void 0,texture:void 0},ie[Y]=be),(be.type!==I||be.texture!==$)&&(ee!==Y&&(i.activeTexture(Y),ee=Y),i.bindTexture(I,$||je[I]),be.type=I,be.texture=$)}function N(){let I=ie[ee];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Mt(){try{i.compressedTexImage2D(...arguments)}catch(I){et("WebGLState:",I)}}function He(){try{i.compressedTexImage3D(...arguments)}catch(I){et("WebGLState:",I)}}function ct(){try{i.texSubImage2D(...arguments)}catch(I){et("WebGLState:",I)}}function fe(){try{i.texSubImage3D(...arguments)}catch(I){et("WebGLState:",I)}}function vt(){try{i.compressedTexSubImage2D(...arguments)}catch(I){et("WebGLState:",I)}}function Ge(){try{i.compressedTexSubImage3D(...arguments)}catch(I){et("WebGLState:",I)}}function $e(){try{i.texStorage2D(...arguments)}catch(I){et("WebGLState:",I)}}function R(){try{i.texStorage3D(...arguments)}catch(I){et("WebGLState:",I)}}function S(){try{i.texImage2D(...arguments)}catch(I){et("WebGLState:",I)}}function G(){try{i.texImage3D(...arguments)}catch(I){et("WebGLState:",I)}}function le(I){return u[I]!==void 0?u[I]:i.getParameter(I)}function te(I,$){u[I]!==$&&(i.pixelStorei(I,$),u[I]=$)}function B(I){Z.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Z.copy(I))}function se(I){Me.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Me.copy(I))}function q(I,$){let Y=l.get($);Y===void 0&&(Y=new WeakMap,l.set($,Y));let be=Y.get(I);be===void 0&&(be=i.getUniformBlockIndex($,I.name),i.uniformBlockBinding($,be,be),Y.set(I,be))}function K(I,$,Y){let O=l.get($).get(I);c[O]!==Y&&(i.bindBufferBase(i.UNIFORM_BUFFER,O,Y),c[O]=Y)}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},ee=null,ie={},d={},c={},f=new WeakMap,g=[],x=null,m=!1,p=null,_=null,M=null,v=null,w=null,T=null,b=null,y=new Ke(0,0,0),L=0,C=!1,D=null,k=null,F=null,A=null,z=null,Z.set(0,0,i.canvas.width,i.canvas.height),Me.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ve,disable:Be,bindFramebuffer:At,drawBuffers:Ie,useProgram:Re,setBlending:me,setMaterial:ge,setFlipSided:Ee,setCullFace:xe,setLineWidth:Ye,setPolygonOffset:De,setScissorTest:ce,activeTexture:Le,bindTexture:ze,unbindTexture:N,compressedTexImage2D:Mt,compressedTexImage3D:He,texImage2D:S,texImage3D:G,pixelStorei:te,getParameter:le,updateUBOMapping:q,uniformBlockBinding:K,texStorage2D:$e,texStorage3D:R,texSubImage2D:ct,texSubImage3D:fe,compressedTexSubImage2D:vt,compressedTexSubImage3D:Ge,scissor:B,viewport:se,reset:oe}}function sM(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new de,h=new WeakMap,u=new Set,d,f=new WeakMap,g=new Set,x=new FinalizationRegistry(R=>g.delete(R)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,S){return m?new OffscreenCanvas(R,S):Nr("canvas")}function _(R,S,G){let le=1,te=$e(R);if((te.width>G||te.height>G)&&(le=G/Math.max(te.width,te.height)),le<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let B=Math.floor(le*te.width),se=Math.floor(le*te.height);d===void 0&&(d=p(B,se));let q=S?p(B,se):d;return q.width=B,q.height=se,q.getContext("2d").drawImage(R,0,0,B,se),Xe("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+B+"x"+se+")."),q}else return"data"in R&&Xe("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function M(R){return R.generateMipmaps}function v(R){i.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(R,S,G,le,te,B=!1){if(R!==null){if(i[R]!==void 0)return i[R];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let se;le&&(se=e.get("EXT_texture_norm16"),se||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=S;if(S===i.RED&&(G===i.FLOAT&&(q=i.R32F),G===i.HALF_FLOAT&&(q=i.R16F),G===i.UNSIGNED_BYTE&&(q=i.R8),G===i.UNSIGNED_SHORT&&se&&(q=se.R16_EXT),G===i.SHORT&&se&&(q=se.R16_SNORM_EXT)),S===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(q=i.R8UI),G===i.UNSIGNED_SHORT&&(q=i.R16UI),G===i.UNSIGNED_INT&&(q=i.R32UI),G===i.BYTE&&(q=i.R8I),G===i.SHORT&&(q=i.R16I),G===i.INT&&(q=i.R32I)),S===i.RG&&(G===i.FLOAT&&(q=i.RG32F),G===i.HALF_FLOAT&&(q=i.RG16F),G===i.UNSIGNED_BYTE&&(q=i.RG8),G===i.UNSIGNED_SHORT&&se&&(q=se.RG16_EXT),G===i.SHORT&&se&&(q=se.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(q=i.RG8UI),G===i.UNSIGNED_SHORT&&(q=i.RG16UI),G===i.UNSIGNED_INT&&(q=i.RG32UI),G===i.BYTE&&(q=i.RG8I),G===i.SHORT&&(q=i.RG16I),G===i.INT&&(q=i.RG32I)),S===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(q=i.RGB8UI),G===i.UNSIGNED_SHORT&&(q=i.RGB16UI),G===i.UNSIGNED_INT&&(q=i.RGB32UI),G===i.BYTE&&(q=i.RGB8I),G===i.SHORT&&(q=i.RGB16I),G===i.INT&&(q=i.RGB32I)),S===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),G===i.UNSIGNED_INT&&(q=i.RGBA32UI),G===i.BYTE&&(q=i.RGBA8I),G===i.SHORT&&(q=i.RGBA16I),G===i.INT&&(q=i.RGBA32I)),S===i.RGB&&(G===i.UNSIGNED_SHORT&&se&&(q=se.RGB16_EXT),G===i.SHORT&&se&&(q=se.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),S===i.RGBA){let K=B?za:ut.getTransfer(te);G===i.FLOAT&&(q=i.RGBA32F),G===i.HALF_FLOAT&&(q=i.RGBA16F),G===i.UNSIGNED_BYTE&&(q=K===Dt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&se&&(q=se.RGBA16_EXT),G===i.SHORT&&se&&(q=se.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function b(R,S){let G;return R?S===null||S===pi||S===sr?G=i.DEPTH24_STENCIL8:S===Yn?G=i.DEPTH32F_STENCIL8:S===ta&&(G=i.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===pi||S===sr?G=i.DEPTH_COMPONENT24:S===Yn?G=i.DEPTH_COMPONENT32F:S===ta&&(G=i.DEPTH_COMPONENT16),G}function y(R,S){return M(R)===!0||R.isFramebufferTexture&&R.minFilter!==en&&R.minFilter!==ln?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function L(R){let S=new WeakRef(R);n.get(R).__ref=S,g.add(S),x.register(R,S,S)}function C(R){let S=n.get(R).__ref;S!==void 0&&(g.delete(S),x.unregister(S))}function D(R){F(R.target)}function k(R){A(R.target)}function F(R){R.removeEventListener("dispose",D),C(R),V(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function A(R){R.removeEventListener("dispose",k),C(R),Q(R)}function z(){for(let R of g){let S=R.deref();S!==void 0&&(S.isRenderTarget===!0?A(S):F(S))}g.clear(),u.clear()}function V(R){let S=n.get(R);if(S.__webglInit===void 0)return;let G=R.source,le=f.get(G);if(le){let te=le[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&H(R),Object.keys(le).length===0&&f.delete(G)}n.remove(R)}function H(R){let S=n.get(R);i.deleteTexture(S.__webglTexture);let G=R.source,le=f.get(G);delete le[S.__cacheKey],a.memory.textures--}function Q(R){let S=n.get(R);S.__depthDisposeCallback&&S.__depthDisposeCallback();let G=R.depthTexture;if(G&&G.renderTarget===R&&F(G),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(S.__webglFramebuffer[te]))for(let B=0;B<S.__webglFramebuffer[te].length;B++)i.deleteFramebuffer(S.__webglFramebuffer[te][B]);else i.deleteFramebuffer(S.__webglFramebuffer[te]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[te])}else{if(Array.isArray(S.__webglFramebuffer))for(let te=0;te<S.__webglFramebuffer.length;te++)i.deleteFramebuffer(S.__webglFramebuffer[te]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let te=0;te<S.__webglColorRenderbuffer.length;te++)S.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[te]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let le=R.textures;for(let te=0,B=le.length;te<B;te++){let se=n.get(le[te]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),a.memory.textures--),n.remove(le[te])}n.remove(R)}let j=0;function ee(){j=0}function ie(){return j}function we(R){j=R}function We(){let R=j;return R>=s.maxTextures&&Xe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),j+=1,R}function Z(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.mipmapsAutoUpdate),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function Me(R,S){let G=n.get(R);if(R.isVideoTexture&&vt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){let le=R.image;if(le===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(G,R,S);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+S)}function Pe(R,S){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){ge(G,R,S);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+S)}function je(R,S){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){ge(G,R,S);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+S)}function ve(R,S){let G=n.get(R);if(R.version>0&&G.__version!==R.version){Ee(G,R,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+S)}let Be={[fi]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[Dr]:i.MIRRORED_REPEAT},At={[en]:i.NEAREST,[ol]:i.NEAREST_MIPMAP_NEAREST,[ir]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[ea]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},Ie={[jp]:i.NEVER,[Nu]:i.ALWAYS,[Kp]:i.LESS,[Du]:i.LEQUAL,[Jp]:i.EQUAL,[Lu]:i.GEQUAL,[Yp]:i.GREATER,[$p]:i.NOTEQUAL};function Re(R,S){if(S.type===Yn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===ln||S.magFilter===ea||S.magFilter===ir||S.magFilter===ti||S.minFilter===ln||S.minFilter===ea||S.minFilter===ir||S.minFilter===ti)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Be[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Be[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Be[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,At[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,At[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ie[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===en||S.minFilter!==ir&&S.minFilter!==ti||S.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function qe(R,S){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",D),L(S));let le=S.source,te=f.get(le);te===void 0&&(te={},f.set(le,te));let B=Z(S);if(B!==R.__cacheKey){te[B]===void 0&&(te[B]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),te[B].usedTimes++;let se=te[R.__cacheKey];se!==void 0&&(te[R.__cacheKey].usedTimes--,se.usedTimes===0&&H(S)),R.__cacheKey=B,R.__webglTexture=te[B].texture}return G}function re(R,S,G){return Math.floor(Math.floor(R/G)/S)}function me(R,S,G,le){let B=R.updateRanges;if(B.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,G,le,S.data);else{B.sort((I,$)=>I.start-$.start);let se=0;for(let I=1;I<B.length;I++){let $=B[se],Y=B[I],be=$.start+$.count,O=re(Y.start,S.width,4),ae=re($.start,S.width,4);Y.start<=be+1&&O===ae&&re(Y.start+Y.count-1,S.width,4)===O?$.count=Math.max($.count,Y.start+Y.count-$.start):(++se,B[se]=Y)}B.length=se+1;let q=t.getParameter(i.UNPACK_ROW_LENGTH),K=t.getParameter(i.UNPACK_SKIP_PIXELS),oe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let I=0,$=B.length;I<$;I++){let Y=B[I],be=Math.floor(Y.start/4),O=Math.ceil(Y.count/4),ae=be%S.width,pe=Math.floor(be/S.width),Ve=O,he=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(i.UNPACK_SKIP_ROWS,pe),t.texSubImage2D(i.TEXTURE_2D,0,ae,pe,Ve,he,G,le,S.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,K),t.pixelStorei(i.UNPACK_SKIP_ROWS,oe)}}function ge(R,S,G){let le=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(le=i.TEXTURE_3D);let te=qe(R,S),B=S.source;t.bindTexture(le,R.__webglTexture,i.TEXTURE0+G);let se=n.get(B);if(B.version!==se.__version||te===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let he=ut.getPrimaries(ut.workingColorSpace),ke=S.colorSpace===hs?null:ut.getPrimaries(S.colorSpace),it=S.colorSpace===hs||he===ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let K=_(S.image,!1,s.maxTextureSize);K=Ge(S,K);let oe=r.convert(S.format,S.colorSpace),I=r.convert(S.type),$=T(S.internalFormat,oe,I,S.normalized,S.colorSpace,S.isVideoTexture);Re(le,S);let Y,be=S.mipmaps,O=S.isVideoTexture!==!0,ae=se.__version===void 0||te===!0,pe=B.dataReady,Ve=y(S,K);if(S.isDepthTexture)$=b(S.format===ls,S.type),ae&&(O?t.texStorage2D(i.TEXTURE_2D,1,$,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,$,K.width,K.height,0,oe,I,null));else if(S.isDataTexture)if(be.length>0){O&&ae&&t.texStorage2D(i.TEXTURE_2D,Ve,$,be[0].width,be[0].height);for(let he=0,ke=be.length;he<ke;he++)Y=be[he],O?pe&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,Y.width,Y.height,oe,I,Y.data):t.texImage2D(i.TEXTURE_2D,he,$,Y.width,Y.height,0,oe,I,Y.data);S.generateMipmaps=!1}else O?(ae&&t.texStorage2D(i.TEXTURE_2D,Ve,$,K.width,K.height),pe&&me(S,K,oe,I)):t.texImage2D(i.TEXTURE_2D,0,$,K.width,K.height,0,oe,I,K.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){O&&ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ve,$,be[0].width,be[0].height,K.depth);for(let he=0,ke=be.length;he<ke;he++)if(Y=be[he],S.format!==ni)if(oe!==null)if(O){if(pe)if(S.layerUpdates.size>0){let it=qu(Y.width,Y.height,S.format,S.type);for(let ne of S.layerUpdates){let St=Y.data.subarray(ne*it/Y.data.BYTES_PER_ELEMENT,(ne+1)*it/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,ne,Y.width,Y.height,1,oe,St)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,Y.width,Y.height,K.depth,oe,Y.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,$,Y.width,Y.height,K.depth,0,Y.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,Y.width,Y.height,K.depth,oe,I,Y.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,$,Y.width,Y.height,K.depth,0,oe,I,Y.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{O&&ae&&t.texStorage2D(i.TEXTURE_2D,Ve,$,be[0].width,be[0].height);for(let he=0,ke=be.length;he<ke;he++)Y=be[he],S.format!==ni?oe!==null?O?pe&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,Y.width,Y.height,oe,Y.data):t.compressedTexImage2D(i.TEXTURE_2D,he,$,Y.width,Y.height,0,Y.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?pe&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,Y.width,Y.height,oe,I,Y.data):t.texImage2D(i.TEXTURE_2D,he,$,Y.width,Y.height,0,oe,I,Y.data)}else if(S.isDataArrayTexture)if(O){if(ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ve,$,K.width,K.height,K.depth),pe)if(S.layerUpdates.size>0){let he=qu(K.width,K.height,S.format,S.type);for(let ke of S.layerUpdates){let it=K.data.subarray(ke*he/K.data.BYTES_PER_ELEMENT,(ke+1)*he/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ke,K.width,K.height,1,oe,I,it)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,oe,I,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,$,K.width,K.height,K.depth,0,oe,I,K.data);else if(S.isData3DTexture)O?(ae&&t.texStorage3D(i.TEXTURE_3D,Ve,$,K.width,K.height,K.depth),pe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,oe,I,K.data)):t.texImage3D(i.TEXTURE_3D,0,$,K.width,K.height,K.depth,0,oe,I,K.data);else if(S.isFramebufferTexture){if(ae)if(O)t.texStorage2D(i.TEXTURE_2D,Ve,$,K.width,K.height);else{let he=K.width,ke=K.height;for(let it=0;it<Ve;it++)t.texImage2D(i.TEXTURE_2D,it,$,he,ke,0,oe,I,null),he>>=1,ke>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let he=i.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),K.parentNode!==he){he.appendChild(K),u.add(S),he.onpaint=ke=>{let it=ke.changedElements;for(let ne of u)it.includes(ne.image)&&(ne.needsUpdate=!0)},he.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let it=i.RGBA,ne=i.RGBA,St=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,it,ne,St,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(be.length>0){if(O&&ae){let he=$e(be[0]);t.texStorage2D(i.TEXTURE_2D,Ve,$,he.width,he.height)}for(let he=0,ke=be.length;he<ke;he++)Y=be[he],O?pe&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,oe,I,Y):t.texImage2D(i.TEXTURE_2D,he,$,oe,I,Y);S.generateMipmaps=!1}else if(O){if(ae){let he=$e(K);t.texStorage2D(i.TEXTURE_2D,Ve,$,he.width,he.height)}pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,I,K)}else t.texImage2D(i.TEXTURE_2D,0,$,oe,I,K);M(S)&&S.mipmapsAutoUpdate===!0&&v(le),se.__version=B.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Ee(R,S,G){if(S.image.length!==6)return;let le=qe(R,S),te=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);let B=n.get(te);if(te.version!==B.__version||le===!0){t.activeTexture(i.TEXTURE0+G);let se=ut.getPrimaries(ut.workingColorSpace),q=S.colorSpace===hs?null:ut.getPrimaries(S.colorSpace),K=S.colorSpace===hs||se===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let oe=S.isCompressedTexture||S.image[0].isCompressedTexture,I=S.image[0]&&S.image[0].isDataTexture,$=[];for(let ne=0;ne<6;ne++)!oe&&!I?$[ne]=_(S.image[ne],!0,s.maxCubemapSize):$[ne]=I?S.image[ne].image:S.image[ne],$[ne]=Ge(S,$[ne]);let Y=$[0],be=r.convert(S.format,S.colorSpace),O=r.convert(S.type),ae=T(S.internalFormat,be,O,S.normalized,S.colorSpace),pe=S.isVideoTexture!==!0,Ve=B.__version===void 0||le===!0,he=te.dataReady,ke=y(S,Y);Re(i.TEXTURE_CUBE_MAP,S);let it;if(S.isDepthTexture){if(ae=b(S.format===ls,S.type),Ve)if(pe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ae,Y.width,Y.height);else for(let ne=0;ne<6;ne++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ae,Y.width,Y.height,0,be,O,null)}else if(oe){pe&&Ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,ae,Y.width,Y.height);for(let ne=0;ne<6;ne++){it=$[ne].mipmaps;for(let St=0;St<it.length;St++){let Qt=it[St];S.format!==ni?be!==null?pe?he&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,St,0,0,Qt.width,Qt.height,be,Qt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,St,ae,Qt.width,Qt.height,0,Qt.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pe?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,St,0,0,Qt.width,Qt.height,be,O,Qt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,St,ae,Qt.width,Qt.height,0,be,O,Qt.data)}}}else{if(it=S.mipmaps,pe&&Ve){it.length>0&&ke++;let ne=$e($[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,ae,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(I){pe?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,$[ne].width,$[ne].height,be,O,$[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ae,$[ne].width,$[ne].height,0,be,O,$[ne].data);for(let St=0;St<it.length;St++){let wi=it[St].image[ne].image;pe?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,St+1,0,0,wi.width,wi.height,be,O,wi.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,St+1,ae,wi.width,wi.height,0,be,O,wi.data)}}else{pe?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,be,O,$[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ae,be,O,$[ne]);for(let St=0;St<it.length;St++){let Qt=it[St];pe?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,St+1,0,0,be,O,Qt.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,St+1,ae,be,O,Qt.image[ne])}}}M(S)&&S.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),B.__version=te.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function xe(R,S,G,le,te,B){let se=r.convert(G.format,G.colorSpace),q=r.convert(G.type),K=T(G.internalFormat,se,q,G.normalized,G.colorSpace),oe=n.get(S),I=n.get(G);if(I.__renderTarget=S,!oe.__hasExternalTextures){let $=Math.max(1,S.width>>B),Y=Math.max(1,S.height>>B);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,B,K,$,Y,S.depth,0,se,q,null):t.texImage2D(te,B,K,$,Y,0,se,q,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),fe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,te,I.__webglTexture,0,ct(S)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,te,I.__webglTexture,B),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(R,S,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){let le=S.depthTexture,te=le&&le.isDepthTexture?le.type:null,B=b(S.stencilBuffer,te),se=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;fe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct(S),B,S.width,S.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct(S),B,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,B,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,R)}else{let le=S.textures;for(let te=0;te<le.length;te++){let B=le[te],se=r.convert(B.format,B.colorSpace),q=r.convert(B.type),K=T(B.internalFormat,se,q,B.normalized,B.colorSpace);fe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct(S),K,S.width,S.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct(S),K,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,K,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(R,S,G){let le=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=n.get(S.depthTexture);te.__renderTarget=S;let B=le?S.depthTexture.image[0]:S.depthTexture.image;(!te.__webglTexture||B.width!==S.width||B.height!==S.height)&&(B.width=S.width,B.height=S.height,S.depthTexture.needsUpdate=!0),le?ve(S.depthTexture,0):Me(S.depthTexture,0);let se=te.__webglTexture,q=ct(S),K=le?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,oe=S.depthTexture.format===ls?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Zi)fe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,K,se,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,oe,K,se,0);else if(S.depthTexture.format===ls)fe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,K,se,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,oe,K,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ce(R){let S=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let le=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),le){let te=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,le.removeEventListener("dispose",te)};le.addEventListener("dispose",te),S.__depthDisposeCallback=te}S.__boundDepthTexture=le}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(G)for(let le=0;le<6;le++)De(S.__webglFramebuffer[le],R,le);else R.texture.mipmaps.length>0?De(S.__webglFramebuffer[0],R,0):De(S.__webglFramebuffer,R,0);else if(G){S.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[le]),S.__webglDepthbuffer[le]===void 0)S.__webglDepthbuffer[le]=i.createRenderbuffer(),Ye(S.__webglDepthbuffer[le],R,!1);else{let te=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=S.__webglDepthbuffer[le];i.bindRenderbuffer(i.RENDERBUFFER,B),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,B)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Ye(S.__webglDepthbuffer,R,!1);else{let te=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,B),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,B)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(R,S,G){let le=n.get(R);S!==void 0&&xe(le.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&ce(R)}function ze(R){let S=R.texture,G=n.get(R),le=n.get(S);R.addEventListener("dispose",k),L(R);let te=R.textures,B=R.isWebGLCubeRenderTarget===!0,se=te.length>1;if(se||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=S.version,a.memory.textures++),B){G.__webglFramebuffer=[];for(let q=0;q<6;q++)if(S.mipmaps.length>0){G.__webglFramebuffer[q]=[];for(let K=0;K<S.mipmaps.length;K++)G.__webglFramebuffer[q][K]=i.createFramebuffer()}else G.__webglFramebuffer[q]=i.createFramebuffer()}else{if(S.mipmaps.length>0){G.__webglFramebuffer=[];for(let q=0;q<S.mipmaps.length;q++)G.__webglFramebuffer[q]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(se)for(let q=0,K=te.length;q<K;q++){let oe=n.get(te[q]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&fe(R)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let q=0;q<te.length;q++){let K=te[q];G.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[q]);let oe=r.convert(K.format,K.colorSpace),I=r.convert(K.type),$=T(K.internalFormat,oe,I,K.normalized,K.colorSpace,R.isXRRenderTarget===!0),Y=ct(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,$,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,G.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Ye(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(B){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),Re(i.TEXTURE_CUBE_MAP,S);for(let q=0;q<6;q++)if(S.mipmaps.length>0)for(let K=0;K<S.mipmaps.length;K++)xe(G.__webglFramebuffer[q][K],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,K);else xe(G.__webglFramebuffer[q],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);M(S)?v(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(se){for(let q=0,K=te.length;q<K;q++){let oe=te[q],I=n.get(oe),$=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&($=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,I.__webglTexture),Re($,oe),xe(G.__webglFramebuffer,R,oe,i.COLOR_ATTACHMENT0+q,$,0),M(oe)&&v($)}t.unbindTexture()}else{let q=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(q=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(q,le.__webglTexture),Re(q,S),S.mipmaps.length>0)for(let K=0;K<S.mipmaps.length;K++)xe(G.__webglFramebuffer[K],R,S,i.COLOR_ATTACHMENT0,q,K);else xe(G.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,q,0);M(S)?v(q):S.mipmaps.length>0&&i.texParameteri(q,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&ce(R)}function N(R){let S=R.textures;for(let G=0,le=S.length;G<le;G++){let te=S[G];if(M(te)&&te.mipmapsAutoUpdate===!0){let B=w(R),se=n.get(te).__webglTexture;t.bindTexture(B,se),v(B),t.unbindTexture()}}}let Mt=[];function He(R){if(R.samples>0){if(fe(R)===!1){let S=R.textures,G=R.width,le=R.height,te=i.COLOR_BUFFER_BIT,B=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=n.get(R),q=S.length>1;if(q)for(let oe=0;oe<S.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let oe=0;oe<S.length;oe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[oe]);let I=n.get(S[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,I,0)}i.blitFramebuffer(0,0,G,le,0,0,G,le,te,i.NEAREST),c===!0&&(Mt.length=0,Mt.push(i.COLOR_ATTACHMENT0+oe),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Mt.push(B),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let oe=0;oe<S.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,se.__webglColorRenderbuffer[oe]);let I=n.get(S[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,I,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){let S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ct(R){return Math.min(s.maxSamples,R.samples)}function fe(R){let S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function vt(R){let S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Ge(R,S){let G=R.colorSpace,le=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Ln&&G!==hs&&(ut.getTransfer(G)===Dt?(le!==ni||te!==Gn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",G)),S}function $e(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=We,this.resetTextureUnits=ee,this.getTextureUnits=ie,this.setTextureUnits=we,this.setTexture2D=Me,this.setTexture2DArray=Pe,this.setTexture3D=je,this.setTextureCube=ve,this.rebindTextures=Le,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=fe,this.dispose=z}function rM(i,e){function t(n,s=hs){let r,a=ut.getTransfer(s);if(n===Gn)return i.UNSIGNED_BYTE;if(n===ll)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Au)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ru)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Eu)return i.BYTE;if(n===Tu)return i.SHORT;if(n===ta)return i.UNSIGNED_SHORT;if(n===cl)return i.INT;if(n===pi)return i.UNSIGNED_INT;if(n===Yn)return i.FLOAT;if(n===mi)return i.HALF_FLOAT;if(n===Cu)return i.ALPHA;if(n===Pu)return i.RGB;if(n===ni)return i.RGBA;if(n===Zi)return i.DEPTH_COMPONENT;if(n===ls)return i.DEPTH_STENCIL;if(n===ul)return i.RED;if(n===dl)return i.RED_INTEGER;if(n===Es)return i.RG;if(n===fl)return i.RG_INTEGER;if(n===pl)return i.RGBA_INTEGER;if(n===Mo||n===So||n===wo||n===Eo)if(a===Dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ml||n===gl||n===bl||n===xl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_l||n===vl||n===yl||n===Ml||n===Sl||n===To||n===wl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_l||n===vl)return a===Dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yl)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ml)return r.COMPRESSED_R11_EAC;if(n===Sl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===To)return r.COMPRESSED_RG11_EAC;if(n===wl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===El||n===Tl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Dl||n===Ll||n===Nl||n===Fl||n===Ul||n===kl||n===Ol)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===El)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tl)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Al)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rl)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cl)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pl)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Il)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dl)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ll)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nl)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fl)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ul)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kl)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ol)return a===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bl||n===zl||n===Hl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Bl)return a===Dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gl||n===Vl||n===Ao||n===Wl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var aM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oM=`
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

}`,rd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Qa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new _n({vertexShader:aM,fragmentShader:oM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new zt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ad=class extends Ai{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new rd,p={},_=t.getContextAttributes(),M=null,v=null,w=[],T=[],b=new de,y=null,L=null,C=new cn;C.viewport=new Ct;let D=new cn;D.viewport=new Ct;let k=[C,D],F=new nl,A=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Me=w[Z];return Me===void 0&&(Me=new Or,w[Z]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(Z){let Me=w[Z];return Me===void 0&&(Me=new Or,w[Z]=Me),Me.getGripSpace()},this.getHand=function(Z){let Me=w[Z];return Me===void 0&&(Me=new Or,w[Z]=Me),Me.getHandSpace()};function V(Z){let Me=T.indexOf(Z.inputSource);if(Me===-1)return;let Pe=w[Me];Pe!==void 0&&(Pe.update(Z.inputSource,Z.frame,l||a),Pe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Q);for(let Z=0;Z<w.length;Z++){let Me=T[Z];Me!==null&&(T[Z]=null,w[Z].disconnect(Me))}A=null,z=null,m.reset();for(let Z in p)delete p[Z];if(e.setRenderTarget(M),f=null,d=null,u=null,s=null,v=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(b.width,b.height,!1),L!==null){let Z=L.camera;Z.fov=L.fov,Z.zoom=L.zoom,Z.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Q),_.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(b),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pe=null,je=null,ve=null;_.depth&&(ve=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Pe=_.stencil?ls:Zi,je=_.stencil?sr:pi);let Be={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Be),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new jn(d.textureWidth,d.textureHeight,{format:ni,type:Gn,depthTexture:new ts(d.textureWidth,d.textureHeight,je,void 0,void 0,void 0,void 0,void 0,void 0,Pe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Pe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Pe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new jn(f.framebufferWidth,f.framebufferHeight,{format:ni,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),We.setContext(s),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(Z){for(let Me=0;Me<Z.removed.length;Me++){let Pe=Z.removed[Me],je=T.indexOf(Pe);je>=0&&(T[je]=null,w[je].disconnect(Pe))}for(let Me=0;Me<Z.added.length;Me++){let Pe=Z.added[Me],je=T.indexOf(Pe);if(je===-1){for(let Be=0;Be<w.length;Be++)if(Be>=T.length){T.push(Pe),je=Be;break}else if(T[Be]===null){T[Be]=Pe,je=Be;break}if(je===-1)break}let ve=w[je];ve&&ve.connect(Pe)}}function j(Z,Me){Me===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Me.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let Me=Z.near,Pe=Z.far;m.texture!==null&&(m.depthNear>0&&(Me=m.depthNear),m.depthFar>0&&(Pe=m.depthFar)),F.near=D.near=C.near=Me,F.far=D.far=C.far=Pe,(A!==F.near||z!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),A=F.near,z=F.far),F.layers.mask=Z.layers.mask|6,C.layers.mask=F.layers.mask&-5,D.layers.mask=F.layers.mask&-3;let je=Z.parent,ve=F.cameras;j(F,je);for(let Be=0;Be<ve.length;Be++)j(ve[Be],je);F.projectionMatrix.copy(C.projectionMatrix),F.projectionMatrixInverse.copy(C.projectionMatrixInverse),L===null&&Z.isPerspectiveCamera&&(L={camera:Z,fov:Z.fov,zoom:Z.zoom}),ee(Z,F,je)};function ee(Z,Me,Pe){Pe===null?Z.matrix.copy(Me.matrixWorld):(Z.matrix.copy(Pe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(Me.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(Me.projectionMatrix),Z.projectionMatrixInverse.copy(Me.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Gs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Z){return p[Z]};let ie=null;function we(Z,Me){if(h=Me.getViewerPose(l||a),g=Me,h!==null){let Pe=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let je=!1;Pe.length!==F.cameras.length&&(F.cameras.length=0,je=!0);for(let Ie=0;Ie<Pe.length;Ie++){let Re=Pe[Ie],qe=null;if(f!==null)qe=f.getViewport(Re);else{let me=u.getViewSubImage(d,Re);qe=me.viewport,Ie===0&&(e.setRenderTargetTextures(v,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(v))}let re=k[Ie];re===void 0&&(re=new cn,re.layers.enable(Ie),re.viewport=new Ct,k[Ie]=re),re.matrix.fromArray(Re.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Re.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(qe.x,qe.y,qe.width,qe.height),Ie===0&&(F.matrix.copy(re.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),je===!0&&F.cameras.push(re)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let Ie=u.getDepthInformation(Pe[0]);Ie&&Ie.isValid&&Ie.texture&&m.init(Ie,s.renderState)}if(ve&&ve.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let Ie=0;Ie<Pe.length;Ie++){let Re=Pe[Ie].camera;if(Re){let qe=p[Re];qe||(qe=new Qa,p[Re]=qe);let re=u.getCameraImage(Re);qe.sourceTexture=re}}}}for(let Pe=0;Pe<w.length;Pe++){let je=T[Pe],ve=w[Pe];je!==null&&ve!==void 0&&ve.update(je,Me,l||a)}ie&&ie(Z,Me),Me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Me}),g=null}let We=new Dm;We.setAnimationLoop(we),this.setAnimationLoop=function(Z){ie=Z},this.dispose=function(){}}},cM=new nt,Gm=new st;Gm.set(-1,0,0,0,1,0,0,0,1);function lM(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Gu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,M,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,_,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p),M=_.envMap,v=_.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(cM.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Gm),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function hM(i,e,t,n){let s={},r={};function a(_,M){let v=M.program;n.uniformBlockBinding(_,v,s[_.id])}function o(_,M){let v=s[_.id];v===void 0&&(g(_),v=c(_),s[_.id]=v,_.addEventListener("dispose",m));let w=M.program;n.updateUBOMapping(_,w);let T=e.render.frame;r[_.id]!==T&&(l(_),r[_.id]=T)}function c(_){let M=i.createBuffer(),v=_.__size,w=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,v,w),i.bindBuffer(i.UNIFORM_BUFFER,null),M}function l(_){let M=s[_.id],v=_.uniforms,w=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,b=v.length;T<b;T++){let y=v[T];if(Array.isArray(y))for(let L=0,C=y.length;L<C;L++)h(y[L],T,L,w);else h(y,T,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(_,M,v,w){if(d(_,M,v,w)===!0){let T=_.__offset,b=_.value;if(Array.isArray(b)){let y=0;for(let L=0;L<b.length;L++){let C=b[L],D=x(C,!0);u(C,_.__data,y),y+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else u(b,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,_.__data)}}function u(_,M,v){typeof _=="number"||typeof _=="boolean"?M[v]=_:_.isMatrix3?(M[v]=_.elements[0],M[v+1]=_.elements[1],M[v+2]=_.elements[2],M[v+3]=0,M[v+4]=_.elements[3],M[v+5]=_.elements[4],M[v+6]=_.elements[5],M[v+7]=0,M[v+8]=_.elements[6],M[v+9]=_.elements[7],M[v+10]=_.elements[8],M[v+11]=0):ArrayBuffer.isView(_)?M.set(_.subarray(0,M.length-v),v):_.toArray(M,v)}function d(_,M,v,w){let T=_.value,b=M+"_"+v;if(Array.isArray(T)){w[b]===void 0&&(w[b]=[]);let y=w[b],L=!1;for(let C=0;C<T.length;C++)f(T[C],y,C)===!0&&(L=!0);return L}return f(T,w,b)}function f(_,M,v){if(M[v]===void 0)return typeof _=="number"||typeof _=="boolean"?M[v]=_:ArrayBuffer.isView(_)?M[v]=_.slice():M[v]=_.clone(),!0;{let w=M[v];if(typeof _=="number"||typeof _=="boolean"){if(w!==_)return M[v]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(w.equals(_)===!1)return w.copy(_),!0}}return!1}function g(_){let M=_.uniforms,v=0,w=16;for(let b=0,y=M.length;b<y;b++){let L=Array.isArray(M[b])?M[b]:[M[b]];for(let C=0,D=L.length;C<D;C++){let k=L[C],F=Array.isArray(k.value)?k.value:[k.value],A=Array.isArray(M[b])||Array.isArray(k.value),z=v;for(let H=0,Q=F.length;H<Q;H++){let j=F[H],ee=x(j,A),ie=v%w,we=ie%ee.boundary,We=ie+we;v+=we,We!==0&&w-We<ee.storage&&(v+=w-We),H===0&&(z=v),v+=ee.storage}let V=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new V((v-z)/Float32Array.BYTES_PER_ELEMENT),k.__offset=z}}let T=v%w;return T>0&&(v+=w-T),_.__size=v,_.__cache={},this}function x(_,M){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=16,v.storage=48):_.isMatrix4?(v.boundary=16,v.storage=64):_.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",_),M===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(_){let M=_.target;M.removeEventListener("dispose",m),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let _ in s)i.deleteBuffer(s[_]);s={},r={}}return{bind:a,update:o,dispose:p}}var uM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Li=null;function dM(){return Li===null&&(Li=new Hr(uM,16,16,Es,mi),Li.name="DFG_LUT",Li.minFilter=ln,Li.magFilter=ln,Li.wrapS=Dn,Li.wrapT=Dn,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}var Kl=class{constructor(e={}){let{canvas:t=Zp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Gn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=f,m=new Set([pl,fl,dl]),p=new Set([Gn,pi,ta,sr,ll,hl]),_=new Uint32Array(4),M=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},w=null,T=null,b=[],y=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,k=null,F=null,A=null,z=null;this._outputColorSpace=Xt;let V=0,H=0,Q=null,j=-1,ee=null,ie=new Ct,we=new Ct,We=null,Z=new Ke(0),Me=0,Pe=t.width,je=t.height,ve=1,Be=null,At=null,Ie=new Ct(0,0,Pe,je),Re=new Ct(0,0,Pe,je),qe=!1,re=new Ms,me=new Oc,ge=!1,Ee=!1,xe=new nt,Ye=new P,De=new Ct,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Le=!1;function ze(){return Q===null?ve:1}let N=n;function Mt(E,U){return t.getContext(E,U)}let He,ct,fe,vt,Ge,$e,R,S,G,le,te,B,se,q,K,oe,I,$,Y,be,O,ae,pe;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",ne,!1),N===null){let U="webgl2";if(N=Mt(U,E),N===null)throw Mt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(E){throw t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),et("WebGLRenderer: "+E.message),E}function Ve(){He=new Sv(N),He.init(),O=new rM(N,He),ct=new dv(N,He,e,O),fe=new iM(N,He),ct.reversedDepthBuffer&&d&&fe.buffers.depth.setReversed(!0),F=N.createFramebuffer(),A=N.createFramebuffer(),z=N.createFramebuffer(),vt=new Tv(N),Ge=new Vy,$e=new sM(N,He,fe,Ge,ct,O,vt),R=new Mv(C),S=new Rb(N),ae=new hv(N,S),G=new wv(N,S,vt,ae),le=new Rv(N,G,S,ae,vt),$=new Av(N,ct,$e),K=new fv(Ge),te=new Gy(C,R,He,ct,ae,K),B=new lM(C,Ge),se=new qy,q=new $y(He),I=new lv(C,R,fe,le,g,c),oe=new nM(C,le,ct),pe=new hM(N,vt,ct,fe),Y=new uv(N,He,vt),be=new Ev(N,He,vt),vt.programs=te.programs,C.capabilities=ct,C.extensions=He,C.properties=Ge,C.renderLists=se,C.shadowMap=oe,C.state=fe,C.info=vt}x!==Gn&&(L=new Pv(x,t.width,t.height,o,s,r));let he=new ad(C,N);this.xr=he,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let E=He.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=He.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(E){E!==void 0&&(ve=E,this.setSize(Pe,je,!1))},this.getSize=function(E){return E.set(Pe,je)},this.setSize=function(E,U,J=!0){if(he.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}Pe=E,je=U,t.width=Math.floor(E*ve),t.height=Math.floor(U*ve),J===!0&&(t.style.width=E+"px",t.style.height=U+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(Pe*ve,je*ve).floor()},this.setDrawingBufferSize=function(E,U,J){Pe=E,je=U,ve=J,t.width=Math.floor(E*J),t.height=Math.floor(U*J),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(x===Gn){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){Xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ie)},this.getViewport=function(E){return E.copy(Ie)},this.setViewport=function(E,U,J,W){E.isVector4?Ie.set(E.x,E.y,E.z,E.w):Ie.set(E,U,J,W),fe.viewport(ie.copy(Ie).multiplyScalar(ze()).round())},this.getScissor=function(E){return E.copy(Re)},this.setScissor=function(E,U,J,W){E.isVector4?Re.set(E.x,E.y,E.z,E.w):Re.set(E,U,J,W),fe.scissor(we.copy(Re).multiplyScalar(ze()).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(E){fe.setScissorTest(qe=E)},this.setOpaqueSort=function(E){Be=E},this.setTransparentSort=function(E){At=E},this.getClearColor=function(E){return E.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,J=!0){let W=0;if(E){let X=!1;if(Q!==null){let ye=Q.texture.format;X=m.has(ye)}if(X){let ye=Q.texture.type,Ne=p.has(ye),_e=I.getClearColor(),Se=I.getClearAlpha(),Te=_e.r,tt=_e.g,ot=_e.b;Ne?(_[0]=Te,_[1]=tt,_[2]=ot,_[3]=Se,N.clearBufferuiv(N.COLOR,0,_)):(M[0]=Te,M[1]=tt,M[2]=ot,M[3]=Se,N.clearBufferiv(N.COLOR,0,M))}else W|=N.COLOR_BUFFER_BIT}U&&(W|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(W|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&N.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),k=E},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),I.dispose(),se.dispose(),q.dispose(),$e.dispose(),Ge.dispose(),R.dispose(),le.dispose(),G.dispose(),ae.dispose(),pe.dispose(),te.dispose(),he.dispose(),he.removeEventListener("sessionstart",va),he.removeEventListener("sessionend",Ps),Cn.stop()};function ke(E){E.preventDefault(),Ha("WebGLRenderer: Context Lost."),D=!0}function it(){Ha("WebGLRenderer: Context Restored."),D=!1;let E=vt.autoReset,U=oe.enabled,J=oe.autoUpdate,W=oe.needsUpdate,X=oe.type;Ve(),vt.autoReset=E,oe.enabled=U,oe.autoUpdate=J,oe.needsUpdate=W,oe.type=X}function ne(E){et("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function St(E){let U=E.target;U.removeEventListener("dispose",St),Qt(U)}function Qt(E){wi(E),Ge.remove(E)}function wi(E){let U=Ge.get(E).programs;U!==void 0&&(U.forEach(function(J){te.releaseProgram(J)}),E.isShaderMaterial&&te.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,J,W,X,ye){U===null&&(U=ce);let Ne=X.isMesh&&X.matrixWorld.determinantAffine()<0,_e=Ko(E,U,J,W,X);fe.setMaterial(W,Ne);let Se=J.index,Te=1;if(W.wireframe===!0){if(Se=G.getWireframeAttribute(J),Se===void 0)return;Te=2}let tt=J.drawRange,ot=J.attributes.position,Ue=tt.start*Te,pt=(tt.start+tt.count)*Te;ye!==null&&(Ue=Math.max(Ue,ye.start*Te),pt=Math.min(pt,(ye.start+ye.count)*Te)),Se!==null?(Ue=Math.max(Ue,0),pt=Math.min(pt,Se.count)):ot!=null&&(Ue=Math.max(Ue,0),pt=Math.min(pt,ot.count));let nn=pt-Ue;if(nn<0||nn===1/0)return;ae.setup(X,W,_e,J,Se);let Bt,Ut=Y;if(Se!==null&&(Bt=S.get(Se),Ut=be,Ut.setIndex(Bt)),X.isMesh)W.wireframe===!0?(fe.setLineWidth(W.wireframeLinewidth*ze()),Ut.setMode(N.LINES)):Ut.setMode(N.TRIANGLES);else if(X.isLine){let yn=W.linewidth;yn===void 0&&(yn=1),fe.setLineWidth(yn*ze()),X.isLineSegments?Ut.setMode(N.LINES):X.isLineLoop?Ut.setMode(N.LINE_LOOP):Ut.setMode(N.LINE_STRIP)}else X.isPoints?Ut.setMode(N.POINTS):X.isSprite&&Ut.setMode(N.TRIANGLES);if(X.isBatchedMesh)if(He.get("WEBGL_multi_draw"))Ut.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let yn=X._multiDrawStarts,Oe=X._multiDrawCounts,Pn=X._multiDrawCount,Rt=Se?S.get(Se).bytesPerElement:1,Ds=Ge.get(W).currentProgram.getUniforms();for(let Mn=0;Mn<Pn;Mn++)Ds.setValue(N,"_gl_DrawID",Mn),Ut.render(yn[Mn]/Rt,Oe[Mn])}else if(X.isInstancedMesh)Ut.renderInstances(Ue,nn,X.count);else if(J.isInstancedBufferGeometry){let yn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Oe=Math.min(J.instanceCount,yn);Ut.renderInstances(Ue,nn,Oe)}else Ut.render(Ue,nn)};function Xo(E,U,J,W){k!==null&&E.isNodeMaterial&&k.setObject(W,E),ge===!0&&K.setState(E,J,!1),E.transparent===!0&&E.side===$t&&E.forceSinglePass===!1?(E.side=un,E.needsUpdate=!0,oi(E,U,W),E.side=Ii,E.needsUpdate=!0,oi(E,U,W),E.side=$t):oi(E,U,W)}this.compile=function(E,U,J=null){J===null&&(J=E),k!==null&&k.renderStart(E,U,J),T=q.get(J),T.init(U),y.push(T),J.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),E!==J&&E.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights(),k!==null&&k.updateLights(T.state.lightsArray),Ee=this.localClippingEnabled,ge=K.init(this.clippingPlanes,Ee),ge===!0&&K.setGlobalState(this.clippingPlanes,U),k!==null&&oe.render(T.state.shadowsArray,J,U);let W=new Set;return E.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let ye=X.material;if(ye)if(Array.isArray(ye))for(let Ne=0;Ne<ye.length;Ne++){let _e=ye[Ne];Xo(_e,J,U,X),W.add(_e)}else Xo(ye,J,U,X),W.add(ye)}),T=y.pop(),k!==null&&k.renderEnd(),W},this.compileAsync=function(E,U,J=null){let W=this.compile(E,U,J);return new Promise(X=>{function ye(){if(W.forEach(function(Ne){let Se=Ge.get(Ne).currentProgram;(Se===void 0||Se.isReady())&&W.delete(Ne)}),W.size===0){X(E);return}setTimeout(ye,10)}He.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let _a=null;function Gi(E){_a&&_a(E)}function va(){Cn.stop()}function Ps(){Cn.start()}let Cn=new Dm;Cn.setAnimationLoop(Gi),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(E){_a=E,he.setAnimationLoop(E),E===null?Cn.stop():Cn.start()},he.addEventListener("sessionstart",va),he.addEventListener("sessionend",Ps),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;k!==null&&k.renderStart(E,U);let J=he.enabled===!0&&he.isPresenting===!0,W=L!==null&&(Q===null||J)&&L.begin(C,Q);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(U),U=he.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,U,Q),T=q.get(E,y.length),T.init(U),T.state.textureUnits=$e.getTextureUnits(),y.push(T),xe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?me.setFromArrayCamera(U):re.setFromProjectionMatrix(xe,Qn,U.reversedDepth),Ee=this.localClippingEnabled,ge=K.init(this.clippingPlanes,Ee),w=se.get(E,b.length),w.init(),b.push(w),this.info.render.frame++,he.enabled===!0&&he.isPresenting===!0){let Ne=C.xr.getDepthSensingMesh();Ne!==null&&hr(Ne,U,-1/0,C.sortObjects)}hr(E,U,0,C.sortObjects),w.finish(),k!==null&&k.updateLights(T.state.lightsArray),C.sortObjects===!0&&w.sort(Be,At),Le=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Le&&I.addToRenderList(w,E),this.info.autoReset===!0&&this.info.reset(),ge===!0&&K.beginShadows();let X=T.state.shadowsArray;if(oe.render(X,E,U),ge===!0&&K.endShadows(),(W&&L.hasRenderPass())===!1){let Ne=w.opaque,_e=w.transmissive;if(T.setupLights(),U.isArrayCamera){let Se=U.cameras;if(_e.length>0)for(let Te=0,tt=Se.length;Te<tt;Te++){let ot=Se[Te];Yt(Ne,_e,E,ot)}Le&&I.render(E);for(let Te=0,tt=Se.length;Te<tt;Te++){let ot=Se[Te];ds(w,E,ot,ot.viewport)}}else _e.length>0&&Yt(Ne,_e,E,U),Le&&I.render(E),ds(w,E,U)}Q!==null&&H===0&&($e.updateMultisampleRenderTarget(Q),$e.updateRenderTargetMipmap(Q)),W&&L.end(C),E.isScene===!0&&E.onAfterRender(C,E,U),ae.resetDefaultState(),j=-1,ee=null,y.pop(),y.length>0?(T=y[y.length-1],$e.setTextureUnits(T.state.textureUnits),ge===!0&&K.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,b.pop(),b.length>0?w=b[b.length-1]:w=null,k!==null&&k.renderEnd()};function hr(E,U,J,W){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){let Ne=U.isArrayCamera?me:re;if(!E.frustumCulled||E.intersectsFrustum(Ne)){W&&De.setFromMatrixPosition(E.matrixWorld).applyMatrix4(xe);let _e=le.update(E),Se=E.material;Se.visible&&w.push(E,_e,Se,J,De.z,null,U)}}else if(E.isMesh||E.isLine||E.isPoints){let Ne=U.isArrayCamera?me:re;if(!E.frustumCulled||E.intersectsFrustum(Ne)){let _e=le.update(E),Se=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),De.copy(E.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),De.copy(_e.boundingSphere.center)),De.applyMatrix4(E.matrixWorld).applyMatrix4(xe)),Array.isArray(Se)){let Te=_e.groups;for(let tt=0,ot=Te.length;tt<ot;tt++){let Ue=Te[tt],pt=Se[Ue.materialIndex];pt&&pt.visible&&w.push(E,_e,pt,J,De.z,Ue,U)}}else Se.visible&&w.push(E,_e,Se,J,De.z,null,U)}}}let ye=E.children;for(let Ne=0,_e=ye.length;Ne<_e;Ne++)hr(ye[Ne],U,J,W)}function ds(E,U,J,W){let{opaque:X,transmissive:ye,transparent:Ne}=E;T.setupLightsView(J),ge===!0&&K.setGlobalState(C.clippingPlanes,J),W&&fe.viewport(ie.copy(W)),X.length>0&&Wt(X,U,J),ye.length>0&&Wt(ye,U,J),Ne.length>0&&Wt(Ne,U,J),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Yt(E,U,J,W){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){let Ue=He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new jn(1,1,{generateMipmaps:!0,type:Ue?mi:Gn,minFilter:ti,samples:Math.max(4,ct.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ut.workingColorSpace})}let ye=T.state.transmissionRenderTarget[W.id],Ne=W.viewport||ie;ye.setSize(Ne.z*C.transmissionResolutionScale,Ne.w*C.transmissionResolutionScale);let _e=C.getRenderTarget(),Se=C.getActiveCubeFace(),Te=C.getActiveMipmapLevel();C.setRenderTarget(ye),C.getClearColor(Z),Me=C.getClearAlpha(),Me<1&&C.setClearColor(16777215,.5),C.clear(),Le&&I.render(J);let tt=C.toneMapping;C.toneMapping=Di;let ot=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),ge===!0&&K.setGlobalState(C.clippingPlanes,W),Wt(E,J,W),$e.updateMultisampleRenderTarget(ye),$e.updateRenderTargetMipmap(ye),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let pt=0,nn=U.length;pt<nn;pt++){let Bt=U[pt],{object:Ut,geometry:yn,material:Oe,group:Pn}=Bt;if(Oe.side===$t&&Ut.layers.test(W.layers)){let Rt=Oe.side;Oe.side=un,Oe.needsUpdate=!0,kn(Ut,J,W,yn,Oe,Pn),Oe.side=Rt,Oe.needsUpdate=!0,Ue=!0}}Ue===!0&&($e.updateMultisampleRenderTarget(ye),$e.updateRenderTargetMipmap(ye))}C.setRenderTarget(_e,Se,Te),C.setClearColor(Z,Me),ot!==void 0&&(W.viewport=ot),C.toneMapping=tt}function Wt(E,U,J){let W=U.isScene===!0?U.overrideMaterial:null;for(let X=0,ye=E.length;X<ye;X++){let Ne=E[X],{object:_e,geometry:Se,group:Te}=Ne,tt=Ne.material;tt.allowOverride===!0&&W!==null&&(tt=W),_e.layers.test(J.layers)&&kn(_e,U,J,Se,tt,Te)}}function kn(E,U,J,W,X,ye){k!==null&&X.isNodeMaterial&&k.setObject(E,X),E.onBeforeRender(C,U,J,W,X,ye),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(C,U,J,W,E,ye),X.transparent===!0&&X.side===$t&&X.forceSinglePass===!1?(X.side=un,X.needsUpdate=!0,C.renderBufferDirect(J,U,W,X,E,ye),X.side=Ii,X.needsUpdate=!0,C.renderBufferDirect(J,U,W,X,E,ye),X.side=$t):C.renderBufferDirect(J,U,W,X,E,ye),E.onAfterRender(C,U,J,W,X,ye)}function ya(E){let U=0;for(let J of E)J.texture!==null&&U++;return U}function oi(E,U,J){U.isScene!==!0&&(U=ce);let W=Ge.get(E),X=T.state.lights,ye=T.state.shadowsArray,Ne=X.state.version,_e=te.getParameters(E,X.state,ye,U,J,T.state.lightProbeGridArray),Se=te.getProgramCacheKey(_e),Te=W.programs;W.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,W.fog=U.fog;let tt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;W.envMap=R.get(E.envMap||W.environment,tt),W.envMapRotation=W.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Te===void 0&&(E.addEventListener("dispose",St),Te=new Map,W.programs=Te,W.programVariants=new Map);let ot=Te.get(Se);if(ot!==void 0){if(W.currentProgram===ot&&W.lightsStateVersion===Ne)return ur(E,_e),ot}else _e.uniforms=te.getUniforms(E),k!==null&&E.isNodeMaterial&&k.build(E,J,_e),E.onBeforeCompile(_e,C),ot=te.acquireProgram(_e,Se),Te.set(Se,ot),W.uniforms=_e.uniforms;let Ue=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ue.clippingPlanes=K.uniform),ur(E,_e),W.needsLights=Ma(E),W.lightsStateVersion=Ne,W.needsLights&&(Ue.ambientLightColor.value=X.state.ambient,Ue.lightProbe.value=X.state.probe,Ue.sunLights.value=X.state.sun,Ue.sunLightShadows.value=X.state.sunShadow,Ue.directionalLights.value=X.state.directional,Ue.directionalLightShadows.value=X.state.directionalShadow,Ue.spotLights.value=X.state.spot,Ue.spotLightShadows.value=X.state.spotShadow,Ue.rectAreaLights.value=X.state.rectArea,Ue.ltc_1.value=X.state.rectAreaLTC1,Ue.ltc_2.value=X.state.rectAreaLTC2,Ue.pointLights.value=X.state.point,Ue.pointLightShadows.value=X.state.pointShadow,Ue.hemisphereLights.value=X.state.hemi,Ue.sunShadowMatrix.value=X.state.sunShadowMatrix,Ue.sunShadowCascade.value=X.state.sunShadowCascade,Ue.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ue.spotLightMatrix.value=X.state.spotLightMatrix,Ue.spotLightMap.value=X.state.spotLightMap,Ue.pointShadowMatrix.value=X.state.pointShadowMatrix),W.numLightProbeGrids=ya(T.state.lightProbeGridArray),W.currentProgram=ot,W.uniformsList=null,ot}function jo(E,U,J,W,X){let ye=Ge.get(E),Ne=ye.currentProgram.id+","+W+","+X,_e=ye.programVariants.get(Ne);return _e===void 0?(_e=oi(E,U,J),ye.programVariants.set(Ne,_e)):(ye.currentProgram=_e,ye.uniformsList=null,ye.outputColorSpace=W,ye.toneMapping=X),_e}function Gt(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=ia.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function ur(E,U){let J=Ge.get(E);J.outputColorSpace=U.outputColorSpace,J.batching=U.batching,J.batchingColor=U.batchingColor,J.instancing=U.instancing,J.instancingColor=U.instancingColor,J.instancingMorph=U.instancingMorph,J.skinning=U.skinning,J.morphTargets=U.morphTargets,J.morphNormals=U.morphNormals,J.morphColors=U.morphColors,J.morphTargetsCount=U.morphTargetsCount,J.numClippingPlanes=U.numClippingPlanes,J.numIntersection=U.numClipIntersection,J.vertexAlphas=U.vertexAlphas,J.vertexTangents=U.vertexTangents,J.toneMapping=U.toneMapping}function Ko(E,U,J,W,X){U.isScene!==!0&&(U=ce),$e.resetTextureUnits();let ye=U.fog,Ne=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?U.environment:null,_e=Q===null?C.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ut.workingColorSpace,Se=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Te=R.get(W.envMap||Ne,Se),tt=W.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ot=!!J.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ue=!!J.morphAttributes.position,pt=!!J.morphAttributes.normal,nn=!!J.morphAttributes.color,Bt=Di;W.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Bt=C.toneMapping);let Ut=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,yn=Ut!==void 0?Ut.length:0,Oe=Ge.get(W),Pn=T.state.lights;if(ge===!0&&(Ee===!0||E!==ee)){let qt=E===ee&&W.id===j;K.setState(W,E,qt)}let Rt=!1,Ds=!1;W.version===Oe.__version?Oe.needsLights&&Oe.lightsStateVersion!==Pn.state.version||X.isBatchedMesh&&Oe.batching===!1||!X.isBatchedMesh&&Oe.batching===!0||X.isBatchedMesh&&Oe.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Oe.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Oe.instancing===!1||!X.isInstancedMesh&&Oe.instancing===!0||X.isSkinnedMesh&&Oe.skinning===!1||!X.isSkinnedMesh&&Oe.skinning===!0||X.isInstancedMesh&&Oe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Oe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Oe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Oe.instancingMorph===!1&&X.morphTexture!==null||Oe.envMap!==Te||W.fog===!0&&Oe.fog!==ye||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==K.numPlanes||Oe.numIntersection!==K.numIntersection)||Oe.vertexAlphas!==tt||Oe.vertexTangents!==ot||Oe.morphTargets!==Ue||Oe.morphNormals!==pt||Oe.morphColors!==nn||Oe.morphTargetsCount!==yn||Oe.numLightProbeGrids!==ya(T.state.lightProbeGridArray)?Rt=!0:(Oe.outputColorSpace!==_e||Oe.toneMapping!==Bt)&&(Ds=!0):(Rt=!0,Oe.__version=W.version);let Mn=Oe.currentProgram;(Rt===!0||Ds===!0)&&(Mn=Ds===!0?jo(W,U,X,_e,Bt):oi(W,U,X),k&&W.isNodeMaterial&&k.onUpdateProgram(W,Mn,Oe));let Jo=!1,fs=!1,Ls=!1,Tt=Mn.getUniforms(),xn=Oe.uniforms;if(fe.useProgram(Mn.program)&&(Jo=!0,fs=!0,Ls=!0),W.id!==j&&(j=W.id,fs=!0),Jo||ee!==E){fe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Tt.setValue(N,"projectionMatrix",E.projectionMatrix),Tt.setValue(N,"viewMatrix",E.matrixWorldInverse);let mn=Tt.map.cameraPosition;mn!==void 0&&mn.setValue(N,Ye.setFromMatrixPosition(E.matrixWorld)),ct.logarithmicDepthBuffer&&Tt.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Tt.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),ee!==E&&(ee=E,fs=!0,Ls=!0)}if(Oe.needsLights&&(Pn.state.sunShadowMap.length>0&&Tt.setValue(N,"sunShadowMap",Pn.state.sunShadowMap,$e),Pn.state.directionalShadowMap.length>0&&Tt.setValue(N,"directionalShadowMap",Pn.state.directionalShadowMap,$e),Pn.state.spotShadowMap.length>0&&Tt.setValue(N,"spotShadowMap",Pn.state.spotShadowMap,$e),Pn.state.pointShadowMap.length>0&&Tt.setValue(N,"pointShadowMap",Pn.state.pointShadowMap,$e)),X.isSkinnedMesh){Tt.setOptional(N,X,"bindMatrix"),Tt.setOptional(N,X,"bindMatrixInverse");let qt=X.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Tt.setValue(N,"boneTexture",qt.boneTexture,$e))}X.isBatchedMesh&&(Tt.setOptional(N,X,"batchingTexture"),Tt.setValue(N,"batchingTexture",X._matricesTexture,$e),Tt.setOptional(N,X,"batchingIdTexture"),Tt.setValue(N,"batchingIdTexture",X._indirectTexture,$e),Tt.setOptional(N,X,"batchingColorTexture"),X._colorsTexture!==null&&Tt.setValue(N,"batchingColorTexture",X._colorsTexture,$e));let ci=J.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&$.update(X,J,Mn),(fs||Oe.receiveShadow!==X.receiveShadow)&&(Oe.receiveShadow=X.receiveShadow,Tt.setValue(N,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&U.environment!==null&&(xn.envMapIntensity.value=U.environmentIntensity),xn.dfgLUT!==void 0&&(xn.dfgLUT.value=dM()),fs){if(Tt.setValue(N,"toneMappingExposure",C.toneMappingExposure),Oe.needsLights&&yf(xn,Ls),ye&&W.fog===!0&&B.refreshFogUniforms(xn,ye),B.refreshMaterialUniforms(xn,W,ve,je,T.state.transmissionRenderTarget[E.id]),Oe.needsLights&&Oe.numLightProbeGrids>0){let qt=v,mn=0;for(let Vi of T.state.lightProbeGridArray)Vi.texture!==null&&(qt.textures[mn]=Vi.texture,qt.min[mn]=Vi.boundingBox.min,qt.max[mn]=Vi.boundingBox.max,qt.resolution[mn]=Vi.resolution,mn++);for(let Vi in qt)qt[Vi].length=mn;xn.probesSH.value=qt.textures,xn.probesMin.value=qt.min,xn.probesMax.value=qt.max,xn.probesResolution.value=qt.resolution}ia.upload(N,Gt(Oe),xn,$e)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ia.upload(N,Gt(Oe),xn,$e),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Tt.setValue(N,"center",X.center),Tt.setValue(N,"modelViewMatrix",X.modelViewMatrix),Tt.setValue(N,"normalMatrix",X.normalMatrix),Tt.setValue(N,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){let qt=W.uniformsGroups;for(let mn=0,Vi=qt.length;mn<Vi;mn++){let Mf=qt[mn];pe.update(Mf,Mn),pe.bind(Mf,Mn)}}return Mn}function yf(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.sunLights.needsUpdate=U,E.sunLightShadows.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Ma(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(E,U,J){let W=Ge.get(E);W.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Ge.get(E.texture).__webglTexture=U,Ge.get(E.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:J,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){let J=Ge.get(E);J.__webglFramebuffer=U,J.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,J=0){Q=E,V=U,H=J;let W=null,X=!1,ye=!1;if(E){let _e=Ge.get(E);if(_e.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(N.FRAMEBUFFER,_e.__webglFramebuffer),ie.copy(E.viewport),we.copy(E.scissor),We=E.scissorTest,fe.viewport(ie),fe.scissor(we),fe.setScissorTest(We),j=-1;return}else if(_e.__webglFramebuffer===void 0)$e.setupRenderTarget(E);else if(_e.__hasExternalTextures)$e.rebindTextures(E,Ge.get(E.texture).__webglTexture,Ge.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let tt=E.depthTexture;if(_e.__boundDepthTexture!==tt){if(tt!==null&&Ge.has(tt)&&(E.width!==tt.image.width||E.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$e.setupDepthRenderbuffer(E)}}let Se=E.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(ye=!0);let Te=Ge.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Te[U])?W=Te[U][J]:W=Te[U],X=!0):E.samples>0&&$e.useMultisampledRTT(E)===!1?W=Ge.get(E).__webglMultisampledFramebuffer:Array.isArray(Te)?W=Te[J]:W=Te,ie.copy(E.viewport),we.copy(E.scissor),We=E.scissorTest}else ie.copy(Ie).multiplyScalar(ve).floor(),we.copy(Re).multiplyScalar(ve).floor(),We=qe;if(J!==0&&(W=F),fe.bindFramebuffer(N.FRAMEBUFFER,W)&&fe.drawBuffers(E,W),fe.viewport(ie),fe.scissor(we),fe.setScissorTest(We),X){let _e=Ge.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,_e.__webglTexture,J)}else if(ye){let _e=U;for(let Se=0;Se<E.textures.length;Se++){let Te=Ge.get(E.textures[Se]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Se,Te.__webglTexture,J,_e)}}else if(E!==null&&J!==0){let _e=Ge.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,_e.__webglTexture,J)}j=-1};function Is(E){let U=Ge.get(E);return(U.__readFormat!==E.format||U.__readType!==E.type)&&(U.__readFormat=E.format,U.__readType=E.type,U.__formatReadable=ct.textureFormatReadable(E.format),U.__typeReadable=ct.textureTypeReadable(E.type)),U}this.readRenderTargetPixels=function(E,U,J,W,X,ye,Ne,_e=0){if(!(E&&E.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ge.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ne!==void 0&&(Se=Se[Ne],Array.isArray(Se)&&(Se=Se[0])),Se){fe.bindFramebuffer(N.FRAMEBUFFER,Se);try{let Te=E.textures[_e],tt=Te.format,ot=Te.type;E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+_e);let Ue=Is(Te);if(Ue.__formatReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-W&&J>=0&&J<=E.height-X&&N.readPixels(U,J,W,X,O.convert(tt),O.convert(ot),ye)}finally{let Te=Q!==null?Ge.get(Q).__webglFramebuffer:null;fe.bindFramebuffer(N.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(E,U,J,W,X,ye,Ne,_e=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Ge.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ne!==void 0&&(Se=Se[Ne],Array.isArray(Se)&&(Se=Se[0])),Se)if(U>=0&&U<=E.width-W&&J>=0&&J<=E.height-X){fe.bindFramebuffer(N.FRAMEBUFFER,Se);let Te=E.textures[_e],tt=Te.format,ot=Te.type;E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+_e);let Ue=Is(Te);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,pt),N.bufferData(N.PIXEL_PACK_BUFFER,ye.byteLength,N.STREAM_READ),N.readPixels(U,J,W,X,O.convert(tt),O.convert(ot),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let nn=Q!==null?Ge.get(Q).__webglFramebuffer:null;fe.bindFramebuffer(N.FRAMEBUFFER,nn);let Bt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await em(N,Bt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,pt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ye),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(pt),N.deleteSync(Bt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,J=0){let W=Math.pow(2,-J),X=Math.floor(E.image.width*W),ye=Math.floor(E.image.height*W),Ne=U!==null?U.x:0,_e=U!==null?U.y:0;$e.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,J,0,0,Ne,_e,X,ye),fe.unbindTexture()},this.copyTextureToTexture=function(E,U,J=null,W=null,X=0,ye=0){let Ne,_e,Se,Te,tt,ot,Ue,pt,nn,Bt=E.isCompressedTexture?E.mipmaps[ye]:E.image;if(J!==null)Ne=J.max.x-J.min.x,_e=J.max.y-J.min.y,Se=J.isBox3?J.max.z-J.min.z:1,Te=J.min.x,tt=J.min.y,ot=J.isBox3?J.min.z:0;else{let Tt=Math.pow(2,-X);Ne=Math.floor(Bt.width*Tt),_e=Math.floor(Bt.height*Tt),E.isDataArrayTexture?Se=Bt.depth:E.isData3DTexture?Se=Math.floor(Bt.depth*Tt):Se=1,Te=0,tt=0,ot=0}W!==null?(Ue=W.x,pt=W.y,nn=W.z):(Ue=0,pt=0,nn=0);let Ut=O.convert(U.format),yn=O.convert(U.type),Oe;U.isData3DTexture?($e.setTexture3D(U,0),Oe=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?($e.setTexture2DArray(U,0),Oe=N.TEXTURE_2D_ARRAY):($e.setTexture2D(U,0),Oe=N.TEXTURE_2D),fe.activeTexture(N.TEXTURE0),fe.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),fe.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),fe.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);let Pn=fe.getParameter(N.UNPACK_ROW_LENGTH),Rt=fe.getParameter(N.UNPACK_IMAGE_HEIGHT),Ds=fe.getParameter(N.UNPACK_SKIP_PIXELS),Mn=fe.getParameter(N.UNPACK_SKIP_ROWS),Jo=fe.getParameter(N.UNPACK_SKIP_IMAGES);fe.pixelStorei(N.UNPACK_ROW_LENGTH,Bt.width),fe.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Bt.height),fe.pixelStorei(N.UNPACK_SKIP_PIXELS,Te),fe.pixelStorei(N.UNPACK_SKIP_ROWS,tt),fe.pixelStorei(N.UNPACK_SKIP_IMAGES,ot);let fs=E.isDataArrayTexture||E.isData3DTexture,Ls=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){let Tt=Ge.get(E),xn=Ge.get(U),ci=Ge.get(Tt.__renderTarget),qt=Ge.get(xn.__renderTarget);fe.bindFramebuffer(N.READ_FRAMEBUFFER,ci.__webglFramebuffer),fe.bindFramebuffer(N.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let mn=0;mn<Se;mn++)fs&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ge.get(E).__webglTexture,X,ot+mn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ge.get(U).__webglTexture,ye,nn+mn)),N.blitFramebuffer(Te,tt,Te+Ne,tt+_e,Ue,pt,Ue+Ne,pt+_e,N.DEPTH_BUFFER_BIT,N.NEAREST);fe.bindFramebuffer(N.READ_FRAMEBUFFER,null),fe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(X!==0||E.isRenderTargetTexture||Ge.has(E)){let Tt=Ge.get(E),xn=Ge.get(U);fe.bindFramebuffer(N.READ_FRAMEBUFFER,A),fe.bindFramebuffer(N.DRAW_FRAMEBUFFER,z);for(let ci=0;ci<Se;ci++)fs?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tt.__webglTexture,X,ot+ci):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Tt.__webglTexture,X),Ls?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,xn.__webglTexture,ye,nn+ci):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,xn.__webglTexture,ye),X!==0?N.blitFramebuffer(Te,tt,Te+Ne,tt+_e,Ue,pt,Ue+Ne,pt+_e,N.COLOR_BUFFER_BIT,N.NEAREST):Ls?N.copyTexSubImage3D(Oe,ye,Ue,pt,nn+ci,Te,tt,Ne,_e):N.copyTexSubImage2D(Oe,ye,Ue,pt,Te,tt,Ne,_e);fe.bindFramebuffer(N.READ_FRAMEBUFFER,null),fe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ls?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(Oe,ye,Ue,pt,nn,Ne,_e,Se,Ut,yn,Bt.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(Oe,ye,Ue,pt,nn,Ne,_e,Se,Ut,Bt.data):N.texSubImage3D(Oe,ye,Ue,pt,nn,Ne,_e,Se,Ut,yn,Bt):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ye,Ue,pt,Ne,_e,Ut,yn,Bt.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ye,Ue,pt,Bt.width,Bt.height,Ut,Bt.data):N.texSubImage2D(N.TEXTURE_2D,ye,Ue,pt,Ne,_e,Ut,yn,Bt);fe.pixelStorei(N.UNPACK_ROW_LENGTH,Pn),fe.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Rt),fe.pixelStorei(N.UNPACK_SKIP_PIXELS,Ds),fe.pixelStorei(N.UNPACK_SKIP_ROWS,Mn),fe.pixelStorei(N.UNPACK_SKIP_IMAGES,Jo),ye===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&N.generateMipmap(Oe),fe.unbindTexture()},this.initRenderTarget=function(E){Ge.get(E).__webglFramebuffer===void 0&&$e.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?$e.setTextureCube(E,0):E.isData3DTexture?$e.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?$e.setTexture2DArray(E,0):$e.setTexture2D(E,0),fe.unbindTexture()},this.resetState=function(){V=0,H=0,Q=null,fe.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};var $l=class extends Vs{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Vt;e.deleteAttribute("uv");let t=new ei({side:un}),n=new ei,s=new Tn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new bt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Ri(e,n,6),o=new Ot;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new bt(e,aa(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new bt(e,aa(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new bt(e,aa(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new bt(e,aa(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new bt(e,aa(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new bt(e,aa(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function aa(i){return new fo({color:0,emissive:16777215,emissiveIntensity:i})}var No=new P;function ii(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;No.copy(e),No[n]=0,No.normalize();let l=.5*a/(a+o),h=1-No.angleTo(i)/c;return Math.sign(No[t])===1?h*l:o/(a+o)+l+l*(1-h)}var oa=class i extends Vt{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new P,l=new P,h=new P(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,x=new P,m=.5/a;for(let p=0,_=0;p<u.length;p+=3,_+=2)switch(c.fromArray(u,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),u[p+0]=h.x*Math.sign(c.x)+l.x*r,u[p+1]=h.y*Math.sign(c.y)+l.y*r,u[p+2]=h.z*Math.sign(c.z)+l.z*r,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/g)){case 0:x.set(1,0,0),f[_+0]=ii(x,l,"z","y",r,n),f[_+1]=1-ii(x,l,"y","z",r,t);break;case 1:x.set(-1,0,0),f[_+0]=1-ii(x,l,"z","y",r,n),f[_+1]=1-ii(x,l,"y","z",r,t);break;case 2:x.set(0,1,0),f[_+0]=1-ii(x,l,"x","z",r,e),f[_+1]=ii(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),f[_+0]=1-ii(x,l,"x","z",r,e),f[_+1]=1-ii(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),f[_+0]=1-ii(x,l,"x","y",r,e),f[_+1]=1-ii(x,l,"y","x",r,t);break;case 5:x.set(0,0,-1),f[_+0]=ii(x,l,"x","y",r,e),f[_+1]=1-ii(x,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function od(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Lt;c.morphTargetsRelative=o;let l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0,f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in u.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(u.attributes[g]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in u.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[g].length!==i[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;a[g]===void 0&&(a[g]=[]),a[g].push(u.morphAttributes[g]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=u.index.count;else if(u.attributes.position!==void 0)g=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,g,h),l+=g}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Vm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let g=Vm(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function Vm(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Kt(a,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let x=h.getComponent(d,g);o.setComponent(d+u,g,x)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function cd(i,e){if(e===Iu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===na||e===Ro){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===na)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Wm(i){let e=new Map,t=new Map,n=i.clone();return qm(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function qm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)qm(i.children[n],e.children[n],t)}var Zl=class extends Pi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new md(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new Td(t)}),this.register(function(t){return new Ad(t)}),this.register(function(t){return new Rd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new Md(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new Sd(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new Ed(t)}),this.register(function(t){return new wd(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new Ql(t,dt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ql(t,dt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Cd(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=cs.extractUrlBase(e);a=cs.resolveURL(l,this.path)}else a=cs.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Kr(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Ym){try{a[dt.KHR_BINARY_GLTF]=new Pd(e)}catch(u){s&&s(u);return}r=JSON.parse(a[dt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new kd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case dt.KHR_MATERIALS_UNLIT:a[u]=new fd;break;case dt.KHR_DRACO_MESH_COMPRESSION:a[u]=new Id(r,this.dracoLoader);break;case dt.KHR_TEXTURE_TRANSFORM:a[u]=new Dd;break;case dt.KHR_MESH_QUANTIZATION:a[u]=new Ld;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function pM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Jt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var dt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},dd=class{constructor(e){this.parser=e,this.name=dt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ke(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Ln);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Zs(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Tn(h),l.distance=u;break;case"spot":l=new xo(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Fi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},fd=class{constructor(){this.name=dt.KHR_MATERIALS_UNLIT}getMaterialType(){return an}extendParams(e,t,n){let s=[];e.color=new Ke(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ln),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Xt))}return Promise.all(s)}},pd=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},md=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new de(r,r)}return Promise.all(s)}},gd=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},bd=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},xd=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},_d=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Ke(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Ln)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Xt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},vd=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},yd=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ke().setRGB(r[0],r[1],r[2],Ln),Promise.all(s)}},Md=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IOR}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Sd=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ke().setRGB(r[0],r[1],r[2],Ln),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Xt)),Promise.all(s)}},wd=class{constructor(e){this.parser=e,this.name=dt.EXT_MATERIALS_BUMP}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Ed=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Td=class{constructor(e){this.parser=e,this.name=dt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Ad=class{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Rd=class{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Ql=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Cd=class{constructor(e){this.name=dt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==si.TRIANGLES&&l.mode!==si.TRIANGLE_STRIP&&l.mode!==si.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let x=new nt,m=new P,p=new rn,_=new P(1,1,1),M=new Ri(g.geometry,g.material,d);for(let w=0;w<d;w++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,w),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,w),c.SCALE&&_.fromBufferAttribute(c.SCALE,w),M.setMatrixAt(w,x.compose(m,p,_));let v=null;for(let w in c)if(w==="_COLOR_0"){let T=c[w];M.instanceColor=new Qi(T.array,T.itemSize,T.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(v===null){let b=M.geometry;v=new Lt,v.name=b.name;for(let y in b.attributes)v.setAttribute(y,b.attributes[y]);for(let y in b.morphAttributes)v.morphAttributes[y]=b.morphAttributes[y];b.index!==null&&v.setIndex(b.index),v.morphTargetsRelative=b.morphTargetsRelative;for(let y of b.groups)v.addGroup(y.start,y.count,y.materialIndex);b.boundingBox!==null&&(v.boundingBox=b.boundingBox.clone()),b.boundingSphere!==null&&(v.boundingSphere=b.boundingSphere.clone()),v.drawRange.start=b.drawRange.start,v.drawRange.count=b.drawRange.count,v.userData=Object.assign({},b.userData),M.geometry=v}let T=c[w];v.setAttribute(w,new Qi(T.array,T.itemSize,T.normalized))}Ot.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Ym="glTF",Fo=12,Xm={JSON:1313821514,BIN:5130562},Pd=class{constructor(e){this.name=dt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Fo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ym)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Fo,r=new DataView(e,Fo),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Xm.JSON){let l=new Uint8Array(e,Fo+a,o);this.content=n.decode(l)}else if(c===Xm.BIN){let l=Fo+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Id=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=dt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=Fd[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Fd[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=ca[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}u(f)},o,l,Ln,d)})})}},Dd=class{constructor(){this.name=dt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Ld=class{constructor(){this.name=dt.KHR_MESH_QUANTIZATION}},eh=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,x=g-l,m=-2*f+3*d,p=f-d,_=1-m,M=p-d+u;for(let v=0;v!==o;v++){let w=a[x+v+o],T=a[x+v+c]*h,b=a[g+v+o],y=a[g+v]*h;r[v]=_*w+M*T+m*b+p*y}return r}},mM=new rn,Nd=class extends eh{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return mM.fromArray(r).normalize().toArray(r),r}},si={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ca={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},jm={9728:en,9729:ln,9984:ol,9985:ea,9986:ir,9987:ti},Km={33071:Dn,33648:Dr,10497:fi},ld={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Fd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ts={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},gM={CUBICSPLINE:void 0,LINEAR:Hs,STEP:zs},hd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function bM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ei({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ii})),i.DefaultMaterial}function ar(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Fi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function xM(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function _M(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function vM(i){let e,t=i.extensions&&i.extensions[dt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ud(t.attributes):e=i.indices+":"+ud(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+ud(i.targets[n]);return e}function ud(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Ud(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function yM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var MM=new nt,kd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new pM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?(this.textureLoader=new Js(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new _o(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Kr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return ar(r,o,s),Fi(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[dt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(cs.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=ld[s.type],o=ca[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Kt(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=ld[s.type],l=ca[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(f&&f!==u){let p=Math.floor(d/f),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,M=t.cache.get(_);M||(x=new l(o,p*f,s.count*f/h),M=new Ws(x,f/h),t.cache.add(_,M)),m=new vs(M,c,d%f/h,g)}else o===null?x=new l(s.count*c):x=new l(o,d,s.count*c),m=new Kt(x,c,g);if(s.sparse!==void 0){let p=ld.SCALAR,_=ca[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,w=new _(a[1],M,s.sparse.count*p),T=new l(a[2],v,s.sparse.count*c);o!==null&&(m=new Kt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let b=0,y=w.length;b<y;b++){let L=w[b];if(m.setX(L,T[b*c]),c>=2&&m.setY(L,T[b*c+1]),c>=3&&m.setZ(L,T[b*c+2]),c>=4&&m.setW(L,T[b*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=jm[d.magFilter]||ln,h.minFilter=jm[d.minFilter]||ti,h.wrapS=Km[d.wrapS]||fi,h.wrapT=Km[d.wrapT]||fi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==en&&h.minFilter!==ln,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(f,g){t.parse(d,f,g)})});else{if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;let f=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(d){return new Promise(function(f,g){let x=f;t.isImageBitmapLoader===!0&&(x=function(m){let p=new hn(m);p.needsUpdate=!0,f(p)}),t.load(cs.resolveURL(d,r.path),x,void 0,g)})})}let u=h.then(function(d){return l===!0&&o.revokeObjectURL(c),Fi(d,a),d.userData.mimeType=a.mimeType||yM(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[dt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[dt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[dt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Vr,En.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Gr,En.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ei}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[dt.KHR_MATERIALS_UNLIT]){let u=s[dt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Ke(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Ln),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Xt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=$t);let h=r.alphaMode||hd.OPAQUE;if(h===hd.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===hd.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==an&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new de(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==an&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==an){let u=r.emissiveFactor;o.emissive=new Ke().setRGB(u[0],u[1],u[2],Ln)}return r.emissiveTexture!==void 0&&a!==an&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Xt)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Fi(u,r),t.associations.set(u,{materials:e}),r.extensions&&ar(s,u,r),u})}createUniqueName(e){let t=kt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[dt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Jm(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=vM(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[dt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Jm(new Lt,l,t),l.mode===si.TRIANGLE_STRIP?d=d.then(f=>cd(f,Ro)):l.mode===si.TRIANGLE_FAN&&(d=d.then(f=>cd(f,na))),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?bM(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],m=a[f],p,_=l[f];if(m.mode===si.TRIANGLES||m.mode===si.TRIANGLE_STRIP||m.mode===si.TRIANGLE_FAN||m.mode===void 0){let M=r.isSkinnedMesh===!0,v=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");M&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=M&&v?new Xa(x,_):new bt(x,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===si.LINES)p=new Ka(x,_);else if(m.mode===si.LINE_STRIP)p=new qs(x,_);else if(m.mode===si.LINE_LOOP)p=new Ja(x,_);else if(m.mode===si.POINTS)p=new es(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&_M(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Fi(p,r),m.extensions&&ar(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&ar(s,u[0],r),u[0];let d=new wt;r.extensions&&ar(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new cn(Ht.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new $s(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Fi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new nt;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ja(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,_=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",_)),l.push(g),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let M=0,v=d.length;M<v;M++){let w=d[M],T=f[M],b=g[M],y=x[M],L=m[M];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let C=n._createAnimationTracks(w,T,b,y,L);if(C)for(let D=0;D<C.length;D++)p.push(C[D])}let _=new mo(r,void 0,p);return Fi(_,s),_})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,MM)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new P().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new zr:l.length>1?h=new wt:l.length===1?h=l[0]:h=new Ot,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Fi(h,r),r.extensions&&ar(n,h,r),r.matrix!==void 0){let u=new nt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new wt;n.name&&(r.name=s.createUniqueName(n.name)),Fi(r,n),n.extensions&&ar(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(Wm(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof En||d instanceof hn)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Ts[r.path]===Ts.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(Ts[r.path]){case Ts.weights:h=rs;break;case Ts.rotation:h=as;break;case Ts.translation:case Ts.scale:h=ws;break;default:n.itemSize===1?h=rs:h=ws;break}let u=s.interpolation!==void 0?gM[s.interpolation]:Hs,d=this._getArrayFromAccessor(n);for(let f=0,g=c.length;f<g;f++){let x=new h(c[f]+"."+Ts[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Ud(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof as?Nd:eh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function SM(i,e,t){let n=e.attributes,s=new bn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),o.normalized){let h=Ud(ca[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new P,c=new P;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=Ud(ca[d.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Bn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Jm(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Fd[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return ut.workingColorSpace!==Ln&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ut.workingColorSpace}" not supported.`),Fi(i,e),SM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?xM(i,e.targets,t):i})}var $m=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var _=new Uint8Array(p.length),M=0;M<p.length;++M){var v=p.charCodeAt(M);_[M]=v>96?v-97:v>64?v-39:v+4}for(var w=0,M=0;M<p.length;++M)_[w++]=_[M]<60?n[_[M]]:(_[M]-60)*64+_[++M];return _.buffer.slice(0,w)}function c(p,_,M,v,w,T,b){var y=p.exports.sbrk,L=v+3&-4,C=y(L*w),D=y(T.length),k=new Uint8Array(p.exports.memory.buffer);k.set(T,D);var F=_(C,v,w,D,T.length);if(F==0&&b&&b(C,L,w),M.set(k.subarray(C,C+v*w)),y(C-y(0)),F!=0)throw new Error("Malformed buffer data: "+F)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var _={object:new Worker(p),pending:0,requests:{}};return _.object.onmessage=function(M){var v=M.data;_.pending-=v.count,_.requests[v.id][v.action](v.value),delete _.requests[v.id]},_}function g(p){for(var _="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),M=new Blob([_],{type:"text/javascript"}),v=URL.createObjectURL(M),w=u.length;w<p;++w)u[w]=f(v);for(var w=p;w<u.length;++w)u[w].object.postMessage({});u.length=p,URL.revokeObjectURL(v)}function x(p,_,M,v,w){for(var T=u[0],b=1;b<u.length;++b)u[b].pending<T.pending&&(T=u[b]);return new Promise(function(y,L){var C=new Uint8Array(M),D=++d;T.pending+=p,T.requests[D]={resolve:y,reject:L},T.object.postMessage({id:D,count:p,size:_,source:C,mode:v,filter:w},[C.buffer])})}function m(p){var _=p.data;self.ready.then(function(M){if(!_.id)return self.close();try{var v=new Uint8Array(_.count*_.size);c(M,M.exports[_.mode],v,_.count,_.size,_.source,M.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:v},[v.buffer])}catch(w){self.postMessage({id:_.id,count:_.count,action:"reject",value:w})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,_,M,v,w){c(r,r.exports.meshopt_decodeVertexBuffer,p,_,M,v,r.exports[l[w]])},decodeIndexBuffer:function(p,_,M,v){c(r,r.exports.meshopt_decodeIndexBuffer,p,_,M,v)},decodeIndexSequence:function(p,_,M,v){c(r,r.exports.meshopt_decodeIndexSequence,p,_,M,v)},decodeGltfBuffer:function(p,_,M,v,w,T){c(r,r.exports[h[w]],p,_,M,v,r.exports[l[T]])},decodeGltfBufferAsync:function(p,_,M,v,w){return u.length>0?x(p,_,M,h[v],l[w]):a.then(function(){var T=new Uint8Array(p*_);return c(r,r.exports[h[v]],T,p,_,M,r.exports[l[w]]),T})}}})();var Fe=window.TomesteadRoomHost||null,gt=i=>document.getElementById("rm-"+i),ai=new URLSearchParams(location.search),gg=performance.now(),wM=new URL("./",import.meta.url),fa=i=>new URL(i,wM).href,EM=fa("../tex/"),TM=[["#6E1F24","#F3E3C3"],["#1F3350","#F0DDB0"],["#4F6B3A","#F4E7C8"],["#C2902F","#2B1C0E"],["#5B2F4A","#F1DDBF"],["#2E5E5E","#F1E3C2"],["#9A4A25","#F7E6C6"],["#3A3A3F","#E9CF8F"],["#A57A4E","#24170C"],["#D9CBA8","#3A2614"],["#2F4A33","#E8C766"],["#8B3A3A","#F5E2C0"]],oh={walnut:["#8d6440","#7a5232","#5a3a22","#3b2415","#2a190e","#2c1a0f"],oak:["#c99d66","#b48654","#95693d","#6e4b2a","#4f3520","#3a2a1a"],cherry:["#ad5b3e","#8f4530","#6f3222","#4c2116","#331610","#2c130d"],ebony:["#57504b","#3a3532","#2a2624","#1b1817","#121010","#141110"],sage:["#9cad92","#7f9277","#67795f","#4d5c47","#38432f","#2b3328"],white:["#eee6d6","#d4c8b2","#b9ab93","#968872","#7a6d59","#4a4236"]},th={oak:"oak_veneer_01",walnut:"walnut_veneer",cherry:"oak_veneer_01",ebony:"walnut_veneer",sage:"oak_veneer_01",white:"oak_veneer_01"},AM={oak:"#f0c890",walnut:"#ffffff",cherry:"#d27a52",ebony:"#6a5f57",sage:"#b2c9a2",white:"#fbf4e8"};function ch(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function nh(i){try{return JSON.parse(localStorage.getItem(i))}catch{return null}}function RM(){let i=null;try{i=localStorage.getItem("tomestead.uid")}catch{}let e=i?":"+i:"",t=nh("tomestead.books.v1"+e);if(!Array.isArray(t)||!t.length){t=[];try{for(let s=0;s<localStorage.length;s++){let r=localStorage.key(s);if(!r||!r.startsWith("tomestead.books.v1"))continue;let a=nh(r);Array.isArray(a)&&a.length>t.length&&(t=a)}}catch{}}t=(t||[]).filter(s=>s&&s.id&&s.title);let n=nh("tomestead.prefs.v1"+e)||nh("tomestead.prefs.v1")||{};return{books:t,theme:n.theme||{},trophies:n.trophies||{},sample:!1}}var CM=[["The Hobbit","J.R.R. Tolkien",310,5,"read"],["Jane Eyre","Charlotte Bront\xEB",532,4,"read"],["Dune","Frank Herbert",688,5,"read"],["Little Women","Louisa May Alcott",449,4,"read"],["Persuasion","Jane Austen",249,5,"read"],["The Name of the Wind","Patrick Rothfuss",662,4,"reading"],["Middlemarch","George Eliot",880,0,"want"],["Piranesi","Susanna Clarke",272,0,"want"],["Rebecca","Daphne du Maurier",410,4,"read"],["East of Eden","John Steinbeck",601,5,"read"],["Emma","Jane Austen",474,3,"read"],["The Secret Garden","Frances Hodgson Burnett",331,4,"read"],["Circe","Madeline Miller",393,5,"read"],["A Wizard of Earthsea","Ursula K. Le Guin",183,4,"read"],["Les Mis\xE9rables","Victor Hugo",1232,0,"want"],["The Count of Monte Cristo","Alexandre Dumas",1276,5,"read"],["Anne of Green Gables","L.M. Montgomery",320,4,"read"],["Frankenstein","Mary Shelley",280,3,"read"],["The Night Circus","Erin Morgenstern",387,4,"read"],["Wuthering Heights","Emily Bront\xEB",416,3,"read"],["North and South","Elizabeth Gaskell",521,0,"want"],["Watership Down","Richard Adams",476,4,"read"],["The Hound of the Baskervilles","Arthur Conan Doyle",256,4,"read"],["Mansfield Park","Jane Austen",507,3,"read"],["Great Expectations","Charles Dickens",544,4,"read"],["Treasure Island","Robert Louis Stevenson",292,4,"read"],["The Remains of the Day","Kazuo Ishiguro",258,5,"read"],["Howl\u2019s Moving Castle","Diana Wynne Jones",329,5,"reading"],["Moby-Dick","Herman Melville",720,0,"want"],["The Wind in the Willows","Kenneth Grahame",224,4,"read"],["Pride and Prejudice","Jane Austen",432,5,"read"],["Kindred","Octavia E. Butler",287,5,"read"],["The Princess Bride","William Goldman",456,4,"read"],["Stardust","Neil Gaiman",248,4,"read"]];function PM(){return{books:CM.map(([e,t,n,s,r],a)=>({id:"s"+a,title:e,author:t,pages:n,rating:s,status:r,addedAt:1e12-a*1e7,progress:r==="reading"?Math.round(n*(a%2?.62:.31)):void 0,finished:r==="read"?`2026-${String(1+a%10).padStart(2,"0")}-1${a%9}`:void 0})),theme:{},sample:!0}}function bg(){let i=Fe.data();return{books:(i.books||[]).filter(e=>e&&e.id&&e.title),theme:i.theme||{},trophies:i.trophies||{},sample:!1}}var Qe=Fe?bg():(()=>{let i=RM();return i.books.length&&ai.get("sample")!=="1"?i:Object.assign(PM(),{theme:i.theme})})(),la=oh[Qe.theme.wood]||oh.oak,IM=i=>i.format==="audio"&&i.hours?i.hours*30:Number(i.pages)||0,bh=i=>TM[((Number.isInteger(i.color)?i.color:ch(i.id+i.title)%12)%12+12)%12];function sf(i){if(i==="day"||i==="night")return i;if(i==="clock"){let e=new Date,t=e.getHours()+e.getMinutes()/60,n=e.getMonth(),[s,r]=n>=3&&n<=8?[6.5,20.25]:n===2||n===9?[7.25,19.25]:[7.25,17.75];return t>=s&&t<r?"day":"night"}return matchMedia("(prefers-color-scheme: dark)").matches?"night":"day"}var on=ai.get("t")==="night"||ai.get("t")==="day"?ai.get("t"):sf(Qe.theme.light||"system"),Oi=gt("scene"),It;try{It=new Kl({canvas:Oi,antialias:!0,powerPreference:"high-performance"})}catch(i){throw console.error("WebGL renderer failed:",i&&i.message),Fe?Fe.unavailable():(gt("nogl").hidden=!1,gt("veil").remove()),new Error("WebGL unavailable")}var xh=matchMedia("(pointer: coarse)").matches,bi=Math.min(window.devicePixelRatio||1,xh?2:1.75);It.setPixelRatio(bi);It.toneMapping=yo;It.shadowMap.enabled=!0;It.shadowMap.type=Qs;It.shadowMap.autoUpdate=!1;var rf=Math.min(8,It.capabilities.getMaxAnisotropy()),mt=new Vs;mt.background=new Ke("#140d08");var xg=new sa(It);mt.environment=xg.fromScene(new $l,.04).texture;xg.dispose();var Et=new cn(50,1,.05,30),DM=i=>new Promise(e=>{let t=new Image;t.onload=()=>e(t),t.onerror=()=>e(null),t.src=i});function xt(i,{repeat:e=!0,srgb:t=!0}={}){let n=new $a(i);return t&&(n.colorSpace=Xt),e&&(n.wrapS=n.wrapT=fi),n.anisotropy=rf,n}function pn(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function ri(i,e,t=.85){let[n,s]=pn(i?i.width:64,i?i.height:64);return s.fillStyle=e,s.fillRect(0,0,n.width,n.height),i&&(s.globalCompositeOperation="overlay",s.globalAlpha=t,s.drawImage(i,0,0)),n}function _g(i){let e=i.attributes.position,t=i.attributes.normal,n=i.attributes.uv;for(let s=0;s<e.count;s++){let r=Math.abs(t.getX(s)),a=Math.abs(t.getY(s)),o=Math.abs(t.getZ(s));r>=a&&r>=o?n.setXY(s,e.getZ(s)*Math.sign(t.getX(s)||1)*-1,e.getY(s)):a>=o?n.setXY(s,e.getX(s),e.getZ(s)):n.setXY(s,e.getX(s)*Math.sign(t.getZ(s)||1),e.getY(s))}return n.needsUpdate=!0,i}function Rn(i,e,t){let n=i.clone();return n.repeat.set(1/e,1/t),n.needsUpdate=!0,n}var $n={},Wd=new Js,Zm=["golden_hills","mountain_path","misty_pines","winter_wood","lake_dawn","evening_water","forest_cliffs","pastoral","highland"],qd={mantel:"golden_hills",nook:"pastoral"},af={},LM=i=>{let e=ai.get(i==="mantel"?"paint":"nookpaint");if(e&&Zm.includes(e))return e;let t=Qe.theme&&Qe.theme.paintings||{},n=typeof t[i]=="string"&&t[i].startsWith("fam:")&&Fe&&Fe.familyPainting&&Fe.familyPainting(t[i].slice(4));return t[i]==="mine"||n||Zm.includes(t[i])?t[i]:qd[i]},Xd=()=>JSON.stringify(Qe.theme&&Qe.theme.paintings||{})+(Fe&&Fe.familySig?Fe.familySig():"");async function Qm(i){let e=af[i];if(!e)return;let t=LM(i),n=t.startsWith("fam:")&&Fe&&Fe.familyPainting?Fe.familyPainting(t.slice(4)):null,s=t==="mine"?`mine:${(Qe.theme.paintings||{})[i+"At"]||""}`:t.startsWith("fam:")?`${t}|${n||""}`:t;if(e.userData.key===s)return;e.userData.key=s;let r=null;t==="mine"?r=Fe&&Fe.paintingPhoto?await Fe.paintingPhoto(i).catch(()=>null):null:t.startsWith("fam:")&&(r=n),r||(t=qd[i],r=fa(`tex/paintings/${t}.webp`));try{let a=await Wd.loadAsync(r).catch(d=>/^(https?:)?\/\//.test(r)&&!r.startsWith(location.origin)?Wd.loadAsync(fa(`tex/paintings/${qd[i]}.webp`)):Promise.reject(d));if(e.userData.key!==s){a.dispose();return}a.colorSpace=Xt,a.flipY=!1,a.anisotropy=rf;let[o,c,l,h]=[.032,.969,.125,.82];a.repeat.set(1/(c-o),1/(h-l)),a.offset.set(-o/(c-o),-l/(h-l));let u=e.map;e.map=a,e.color.set("#ffffff"),e.needsUpdate=!0,u&&u.userData&&u.userData.painting&&u.dispose(),a.userData.painting=!0,yt()}catch(a){console.warn("painting failed",i,a&&a.message)}}var vg=()=>{Qm("mantel"),Qm("nook")};function ua(i,e){return new Promise(t=>Wd.load(fa("tex/"+i+".webp"),n=>{e&&(n.colorSpace=Xt),n.wrapS=n.wrapT=fi,n.anisotropy=rf,t(n)},void 0,()=>t(null)))}async function eg(i){let[e,t,n]=await Promise.all([ua(i+"_diff",!0),ua(i+"_nor"),ua(i+"_arm")]);return e?{map:e,normal:t,arm:n}:null}function Vn(i,e,t,{color:n="#ffffff",rot:s=!1,normalScale:r=1,roughness:a=1}={}){let o=l=>{if(!l)return null;let h=l.clone();return h.repeat.set(1/e,1/t),s&&(h.rotation=Math.PI/2),h.needsUpdate=!0,h},c=o(i.arm);return Je({map:o(i.map),normalMap:o(i.normal),normalScale:new de(r,r),roughnessMap:c,aoMap:c,aoMapIntensity:.7,roughness:a,color:n})}var tg=["deskchair","armchair","ottoman","sidetable","oillamp","chandelier","plant","teacup","painting","grandfather","clock","candlestick","vase","elephant"],yg=new Zl().setMeshoptDecoder($m);function NM(i){return yg.loadAsync(fa("models/"+i+".glb")).then(e=>e.scene).catch(e=>(console.warn("model failed",i,e&&e.message),null))}var lh={pottedplant:{h:.3},aloe:{h:.18,small:!0},bookstack:{},camera:{small:!0,turn:.25},compass:{small:!0,turn:.3},binoculars:{small:!0,turn:.3},horse:{turn:.45},bust:{h:.25,centre:!0,turn:.2},lion:{h:.24,centre:!0,turn:.15},photo:{h:.2,ry:-Math.PI/2,turn:.35},stonecat:{h:.2,turn:.3},oillantern:{h:.26},seashell:{small:!0,turn:.3},brassvase:{turn:.1},chinavase:{h:.24,centre:!0,turn:.1},frog:{small:!0,turn:.35}},FM={plant:"pottedplant",succulent:"aloe",stack:"bookstack",cat:"stonecat",globe:"compass",teacup:"chinavase",candle:"brassvase",lantern:"oillantern",frame:"photo",hourglass:"binoculars",crystal:"seashell",clock:"lion"},UM=["pottedplant","bookstack","compass","bust","chinavase","stonecat"];function kM(){let i=Qe.theme&&Array.isArray(Qe.theme.trinkets)?Qe.theme.trinkets:UM;return[...new Set(i.map(e=>lh[e]?e:FM[e]).filter(e=>e&&lh[e]))]}var Od=new Map;function Mg(i,e={}){let t=i+"|"+(e.h||"")+"|"+(e.ry||"")+"|"+(e.lie?1:"");return Od.has(t)||Od.set(t,yg.loadAsync(fa(`models/${i}.glb`)).then(n=>{let s=n.scene;if(e.parts){s.updateMatrixWorld(!0);for(let u of[...s.children]){let d=new bn().setFromObject(u).getCenter(new P);u.position.x-=d.x,u.position.z-=d.z}}e.lie&&(s.rotation.x=-Math.PI/2),s.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0,u.userData.dyn=!0)});let r=new wt;r.add(s),r.rotation.y=e.ry||0;let a=new wt;a.add(r);let o=new bn().setFromObject(a);e.h&&a.scale.setScalar(e.h/(o.max.y-o.min.y)),o=new bn().setFromObject(a);let c=o.getCenter(new P);a.position.set(-c.x,-o.min.y,-c.z);let l=new wt;l.add(a),l.userData.dyn=!0;let h=o.getSize(new P);return{obj:l,w:h.x,h:h.y,d:h.z}})),Od.get(t)}var OM=i=>Mg(`trinkets/${i}`,lh[i]),ha={lamp:{file:"desk/desklamp",slots:["backR","backL"],light:!0},candle:{file:"candlestick",slots:["backL","backR"]},tea:{file:"teacup",parts:!0,h:.06,slots:["frontR","frontL","backM"]},teapot:{file:"desk/teapot",slots:["backL","backM","backR"]},glasses:{file:"desk/glasses",slots:["frontL","frontR","backM"]},magnifier:{file:"desk/magnifier",lie:!0,slots:["frontL","frontR","backM"]},plant:{file:"trinkets/aloe",h:.16,slots:["backL","backM","backR"]},books:{file:"trinkets/bookstack",slots:["backM","backL","backR"]},watch:{file:"desk/watch",lie:!0,slots:["frontL","frontR","backM"]},journal:{file:"desk/journal",slots:["frontL","frontR"]},apple:{file:"desk/apple",slots:["frontR","backM","frontL"]},frog:{file:"trinkets/frog",slots:["backL","frontL","backM"]}},BM={mug:"teapot",inkwell:"magnifier"};function zM(){let i=Qe.theme&&Array.isArray(Qe.theme.tableItems)?Qe.theme.tableItems:["lamp","tea","glasses"];return[...new Set(i.map(e=>ha[e]?e:BM[e]).filter(e=>e&&ha[e]))].slice(0,5)}function Fn(i,e,t,n,s=0,r=1,{cast:a=!0}={}){return i?(i.position.set(e,t,n),i.rotation.y=s,i.scale.setScalar(r),i.traverse(o=>{o.isMesh&&(o.castShadow=a,o.receiveShadow=!0,o.userData.model=!0)}),mt.add(i),i):null}function HM(i,e){let t=[];Fn(i.armchair,1.75,0,-2,-.5,1),Fn(i.ottoman,1.2,0,-1.2,-.4,.8);let n=null;if(i.teacup){i.teacup.updateMatrixWorld(!0);for(let u of[...i.teacup.children]){let d=new bn().setFromObject(u).getCenter(new P);u.position.x-=d.x,u.position.z-=d.z}Fn(i.teacup,2.47,.762,-2.3,2.2,1),n=ZM(),n.position.set(2.47,.83,-2.3),mt.add(n)}Fn(i.sidetable,2.55,0,-2.38,0,1),Fn(i.painting,1.85,1.78,-2.69,0,1.6,{cast:!1})&&i.painting.traverse(u=>{u.isMesh&&/canvas/.test(u.material.name)&&(u.material=u.material.clone(),af.nook=u.material,u.material.userData.key="pastoral")});let s=null,r=[],a=null;if(i.oillamp){Fn(i.oillamp,2.61,.761,-2.44,.4,.9),i.oillamp.traverse(d=>{d.isMesh&&(/flame/.test(d.material.name)&&r.push(d.material),/glass/.test(d.material.name)&&(d.visible=!1))}),s=new Tn("#ffae55",0,3.4,2),s.position.set(2.58,1.2,-2.38),mt.add(s),a=Je({map:xt(QM(),{repeat:!1}),roughness:.9,side:$t,emissive:"#ffb86b",emissiveIntensity:0});let u=rt(new zn(.075,.165,.17,40,1,!0),a,mt,{cast:!0,recv:!1});u.position.set(2.61,.761+.72*.62,-2.44);for(let[d,f]of[[.085,.075],[-.085,.165]])rt(new Ks(f,.004,6,40).rotateX(Math.PI/2),e.brass,mt,{cast:!1}).position.copy(u.position).add(new P(0,d,0))}Fn(i.grandfather,-1.6,0,-2.5,0,.95)&&i.grandfather.traverse(u=>{u.isMesh&&/glass/.test(u.material.name)&&(u.material.transparent=!0,u.material.opacity=.18,u.material.depthWrite=!1,u.castShadow=!1)}),Fn(i.plant,-2.5,0,-2.25,.6,1.3);let o=null,c=null,l=[];if(i.chandelier){Fn(i.chandelier,0,2.97-.908*.85,.05,0,.85,{cast:!1}),i.chandelier.userData.cut=!0,lf.push(i.chandelier),i.chandelier.traverse(d=>{d.isMesh&&/bulb/.test(d.material.name)&&l.push(d.material)}),o=new Tn("#ffc27a",0,7,2),o.position.set(0,2.35,.05),mt.add(o);let u=new Br({map:xt(wg(),{repeat:!1}),color:"#ffcf8a",blending:Jn,depthWrite:!1,transparent:!0});c=new qa(u),c.scale.set(1.1,1.1,1),c.position.set(0,2.42,.05),mt.add(c)}let h=of(i);return{hearth:h,tick(u){n&&(n.material.uniforms.uTime.value=u),h.tick(u)},setLight(u){h.setLight(u),s&&(s.intensity=u.oil),a&&(a.emissiveIntensity=u.oil?.55:0),n&&(n.material.uniforms.uA.value=on==="night"?.7:.65),r.forEach(d=>{d.emissive&&d.emissive.set("#ffb35c"),d.emissiveIntensity=u.oil?3:.4}),o&&(o.intensity=u.chand),c&&(c.visible=u.chand>0),l.forEach(d=>{d.emissive&&d.emissive.set("#ffd9a0"),d.emissiveIntensity=u.chand?2.5:.1})}}}function rt(i,e,t=mt,{cast:n=!0,recv:s=!0}={}){let r=new bt(i,e);return r.castShadow=n,r.receiveShadow=s,t.add(r),r}function Ze(i,e,t,n,s,r,a,o=mt,c){let l=new Vt(i,e,t);return l.translate(s,r,a),_g(l),rt(l,n,o,c)}function GM(i,e=28){return new ho(i.map(([t,n])=>new de(t,n)),e)}var Je=i=>new ei(i);async function VM(){let i=Promise.race([document.fonts?document.fonts.load('40px "IM Fell English"').catch(()=>{}):Promise.resolve(),new Promise(ce=>setTimeout(ce,1800))]),e=th[Qe.theme.wood||"oak"]||th.oak,t=["herringbone_parquet","plastered_wall","wooden_panels","dark_wooden_planks",e,"bark_willow_02","marble_01","castle_brick_07","slate_floor_03"],[n,s,r]=await Promise.all([Promise.all(["floor","wood-v","wood-h","plaster","cloth","leather"].map(ce=>DM(EM+ce+".webp"))),Promise.all(t.map(eg)).then(ce=>Object.fromEntries(t.map((Le,ze)=>[Le,ce[ze]]))),Promise.all(tg.map(NM)).then(ce=>Object.fromEntries(tg.map((Le,ze)=>[Le,ce[ze]]))),Promise.all([ua("wool_boucle_nor"),ua("brown_leather_nor"),ua("rug_claret",!0)]).then(([ce,Le,ze])=>{$n.wool=ce,$n.leather=Le,$n.rug=ze})]),[a,o,c,l,h,u]=n;gt("veil-sub").textContent="Shelving the books\u2026";let d=xt(ri(o,la[1],.55)),f=xt(ri(c,la[1],.55)),g=xt(ri(o,la[3],.6)),x=xt(ri(c,la[3],.6)),m={caseSide:Je({map:Rn(d,.5,2),roughness:.55}),caseShelf:Je({map:Rn(f,1.6,.3),roughness:.55}),caseDark:Je({map:Rn(g,.5,2),roughness:.6}),recess:Je({color:la[5],roughness:.9}),trim:Je({map:Rn(x,1.6,.3),roughness:.5}),beam:Je({map:Rn(x,2.4,.45),roughness:.75}),brass:Je({color:"#c9a15b",metalness:1,roughness:.32}),gold:Je({color:"#e0b860",metalness:1,roughness:.22}),ceramic:Je({color:"#f1ead9",roughness:.25}),paper:Je({color:"#efe3c8",roughness:.9}),candle:Je({color:"#efe6cf",roughness:.6,emissive:"#ffb35c",emissiveIntensity:0}),velvet:Je({color:"#2f4a33",roughness:.92,side:$t}),terracotta:Je({color:"#a4593a",roughness:.85}),leaf:Je({color:"#3f6b35",roughness:.7,side:$t}),stone:Je({map:Rn(xt(ri(l,"#7b8092",.9)),.6,.6),roughness:.75}),tomeLeather:Je({map:xt(ri(u,"#3b2350",.9)),roughness:.6}),dark:Je({color:"#1b120b",roughness:.8})},p=(ce,Le)=>{let ze=oh[ce]||oh.oak;if(!Le){let Mt=xt(ri(o,ze[1],.55)),He=xt(ri(c,ze[1],.55)),ct=xt(ri(o,ze[3],.6)),fe=xt(ri(c,ze[3],.6));return{caseSide:Je({map:Rn(Mt,.5,2),roughness:.55}),caseShelf:Je({map:Rn(He,1.6,.3),roughness:.55}),caseDark:Je({map:Rn(ct,.5,2),roughness:.6}),trim:Je({map:Rn(fe,1.6,.3),roughness:.5}),recessWood:Je({color:ze[5],roughness:.9})}}let N=AM[ce]||ze[0];return{caseSide:Vn(Le,.7,1.4,{color:N,roughness:1}),caseShelf:Vn(Le,.7,1.4,{color:N,rot:!0}),caseDark:Vn(Le,.7,1.4,{color:new Ke(N).multiplyScalar(.55)}),trim:Vn(Le,.7,1.4,{color:new Ke(N).multiplyScalar(.5),rot:!0}),recessWood:Vn(Le,.5,1.4,{color:new Ke(N).multiplyScalar(.2)})}};Object.assign(m,p(Qe.theme.wood||"oak",s[e]));async function _(ce){let Le=th[ce]||th.oak,ze=s[Le]||(s[Le]=await eg(Le)),N=p(ce,ze);for(let Mt of Object.keys(N))m[Mt]&&(m[Mt].copy(N[Mt]),m[Mt].needsUpdate=!0),N[Mt].dispose();It.shadowMap.needsUpdate=!0,yt()}s.dark_wooden_planks&&(m.beam=Vn(s.dark_wooden_planks,2.2,2.2,{color:"#b9a48c"})),$n.leather&&(m.tomeLeather.normalMap=Rn($n.leather,.15,.15),m.tomeLeather.needsUpdate=!0),m.bark=s.bark_willow_02?Vn(s.bark_willow_02,.3,.6,{color:"#b49a80"}):Je({color:"#5a4430",roughness:.9}),m.logs=s.bark_willow_02?Vn(s.bark_willow_02,.3,.6,{color:"#6d5a48"}):Je({color:"#3a2a1c",roughness:.9}),m.stoneSurround=s.marble_01?Vn(s.marble_01,1,1,{color:"#f4e6d0"}):Je({color:"#cbbd9f",roughness:.7}),m.firebrick=s.castle_brick_07?Vn(s.castle_brick_07,.7,.7,{color:"#6a4a3e"}):Je({color:"#3a2420",roughness:.9}),m.slate=s.slate_floor_03?Vn(s.slate_floor_03,.9,.9,{color:"#bdb2a6"}):Je({color:"#3c3a38",roughness:.6}),m.iron=Je({color:"#1c1a19",roughness:.55,metalness:.8});let M=xt(a||ri(null,"#8e5f35")),v=s.herringbone_parquet?Vn(s.herringbone_parquet,1.5,1.5,{color:"#f2dcc2"}):Je({map:Rn(M,2.2,.52),roughness:.62}),w=xt(ri(l,"#c7ab82",.9)),T=xt(ng()),b=s.plastered_wall,y=b?Vn(b,2.2,2.2,{color:"#ecc995",normalScale:.6}):Je({map:Rn(w,1.6,1.6),roughness:.92}),L=y.map,C=Rn(T,1.8,1.8),D=s.wooden_panels?Vn(s.wooden_panels,1.2,1.2,{color:"#d9b48f"}):Je({map:xt(qM(c)),roughness:.6});s.wooden_panels||D.map.repeat.set(1/1.2,1/.9);let k=rt(new zt(6,5.4).rotateX(-Math.PI/2),v,mt,{cast:!1});_g(k.geometry);let F=ce=>(ce.userData.cut=!0,lf.push(ce),ce);F(Ze(6.2,.1,5.6,m.beam,0,3.05,0));for(let ce of[-2.25,-.75,.75,2.25])F(Ze(.18,.22,5.4,m.beam,ce,2.89,0));Ze(6.2,3.1,.1,y,0,1.5,-2.75),F(Ze(.1,3.1,5.6,y,3.05,1.5,0)),F(Ze(6.2,3.1,.1,y,0,1.5,2.75));for(let ce of[Ze(6.3,.34,5.7,m.beam,-.05,-.17,0),Ze(6.42,.06,5.82,m.trim,-.05,-.37,0)])ce.userData.plinth=!0,ce.visible=!1,Lg.push(ce);let A={z0:-1.3,z1:.1,y0:.85,y1:2.45};Ze(.1,A.y0,5.6,y,-3.05,A.y0/2,0),Ze(.1,3.1-A.y1,5.6,y,-3.05,(A.y1+3.1)/2,0),Ze(.1,A.y1-A.y0,2.8+A.z0,y,-3.05,(A.y0+A.y1)/2,(-2.8+A.z0)/2),Ze(.1,A.y1-A.y0,2.8-A.z1,y,-3.05,(A.y0+A.y1)/2,(2.8+A.z1)/2),Ze(6,.9,.03,D,0,.45,-2.685),F(Ze(.03,.9,5.4,D,2.985,.45,0)),Ze(.03,.82,5.4,D,-2.985,.41,0),Ze(6,.045,.06,m.trim,0,.92,-2.67),F(Ze(.06,.045,5.4,m.trim,2.97,.92,0)),Ze(.06,.045,5.4,m.trim,-2.97,.84,0);let z=(A.z0+A.z1)/2,V=A.z1-A.z0,H=A.y1-A.y0;Ze(.08,.1,V+.24,m.trim,-2.97,A.y1+.05,z),Ze(.09,.04,V+.3,m.trim,-2.965,A.y0-.02,z),Ze(.08,H,.1,m.trim,-2.97,(A.y0+A.y1)/2,A.z0-.05),Ze(.08,H,.1,m.trim,-2.97,(A.y0+A.y1)/2,A.z1+.05),Ze(.04,H,.035,m.trim,-3.04,(A.y0+A.y1)/2,z);for(let ce of[A.y0+H/3,A.y0+2*H/3])Ze(.04,.035,V,m.trim,-3.04,ce,z);let Q=new an({map:xt(ig("day"),{repeat:!1})});rt(new zt(2.6,2.4).rotateY(Math.PI/2),Q,mt,{cast:!1,recv:!1}).position.set(-3.6,1.65,z),rt(new zn(.018,.018,V+1.5,12).rotateX(Math.PI/2),m.brass).position.set(-2.9,A.y1+.2,z);for(let[ce,Le]of[[A.z0-.33,.48],[A.z1+.33,.48]]){let ze=new zt(Le,2.15,28,1).rotateY(Math.PI/2),N=ze.attributes.position;for(let He=0;He<N.count;He++)N.setX(He,.035*Math.sin(N.getZ(He)*38)+.015*Math.sin(N.getZ(He)*97));ze.computeVertexNormals(),rt(ze,m.velvet).position.set(-2.88,A.y1+.18-1.075,ce)}let ie=$M(m,{cloth:h,leather:u}),we=sS(m,c,r);of.M=m;let We=HM(r,m),Z=oS(m),Me=$n.rug?Object.assign($n.rug,{wrapS:Dn,wrapT:Dn}):xt(XM(),{repeat:!1});rt(new zt($n.rug?2.8*1580/1520:2.8,1.9).rotateX(-Math.PI/2),Je({map:Me,roughness:.96,alphaTest:$n.rug?.5:0,normalMap:$n.wool?Rn($n.wool,.18,.18):null,normalScale:new de(.6,.6)}),mt,{cast:!1}).position.set(0,.004,-.35);let je=rt(new zt(1,1.25).rotateY(-Math.PI/2),Je({map:xt(ng(!0),{repeat:!1}),roughness:.8}),mt,{cast:!1});je.position.set(2.985,1.75,.1),F(je),F(Ze(.04,.05,1.12,m.gold,2.98,2.4,.1)),F(Ze(.04,.05,1.12,m.gold,2.98,1.1,.1)),F(Ze(.04,1.35,.05,m.gold,2.98,1.75,-.45)),F(Ze(.04,1.35,.05,m.gold,2.98,1.75,.65));let ve=new go("#ffe6c4","#4a3020",1);mt.add(ve);let Be=new P(1,-.62,-.3).normalize(),At=new P(-1,.3,-1.1),Ie=new Zs("#ffb26b",4);Ie.position.copy(At).addScaledVector(Be,-8),Ie.target.position.copy(At),Ie.castShadow=!0;let Re=xh?1024:2048;Ie.shadow.mapSize.set(Re,Re),Object.assign(Ie.shadow.camera,{left:-4,right:4,top:4,bottom:-4,near:2,far:16}),Ie.shadow.bias=-4e-4,Ie.shadow.normalBias=.02,Ie.shadow.radius=3,mt.add(Ie,Ie.target);let qe=new Tn("#ffb87a",1,5,2);qe.position.set(-.9,.35,-1),mt.add(qe);let re=new Tn("#ffa64d",0,3.2,2);re.position.set(.55,1.6,-1.7),mt.add(re);let me=new Tn("#ffd9a8",1,7,2);me.position.set(.6,2.4,1.2),mt.add(me);let ge=hS(A,Be),Ee=uS(A,Be),xe={day:{hemi:["#ffe8c8","#4a3020",.55],sun:["#ffb46b",8.5],bounce:3,fill:1.3,fillC:"#ffd9a8",lamp:.6,candle:0,tome:.5,shelf:0,oil:0,chand:0,env:.3,exposure:1,beam:[1,.78,.5],beamA:.85,mote:[1,.9,.7],moteA:1,wall:L,wallC:"#ecc995",sky:"day",bg:"#1a120c"},night:{hemi:["#5c5070","#120a08",.2],sun:["#8fa8ff",.8],bounce:.18,fill:.42,fillC:"#ffb47a",lamp:4.8,candle:2.1,tome:1.8,shelf:1.7,oil:4,chand:4.2,env:.06,exposure:1.16,beam:[.55,.66,1],beamA:.14,mote:[.9,.75,.5],moteA:.38,wall:L,wallC:"#5d7055",sky:"night",bg:"#0b0a0f"}},Ye={day:Q.map,night:xt(ig("night"),{repeat:!1})};function De(){let ce=xe[on],Le=on==="night"&&Qe.theme.nightWall==="stars";ve.color.set(Le?"#6f86c0":ce.hemi[0]),ve.groundColor.set(ce.hemi[1]),ve.intensity=Le?.34:ce.hemi[2],Ie.color.set(ce.sun[0]),Ie.intensity=ce.sun[1],qe.intensity=ce.bounce,qe.color.set(on==="day"?"#ffb87a":"#7d90d0"),me.intensity=ce.fill,me.color.set(ce.fillC),re.intensity=ce.shelf,we.setLight(ce.lamp,ce.candle),We.setLight(ce),Z.setLight(ce.tome),mt.environmentIntensity=ce.env,It.toneMappingExposure=ce.exposure,ge.material.uniforms.uColor.value.set(...ce.beam),ge.material.uniforms.uA.value=ce.beamA,Ee.material.uniforms.uColor.value.set(...ce.mote),Ee.material.uniforms.uA.value=ce.moteA;let ze=on==="night"&&Qe.theme.nightWall==="stars";y.map=ze?C:ce.wall,y.color.set(ze?"#ffffff":ce.wallC),y.needsUpdate=!0,Q.map=Ye[ce.sky],Q.needsUpdate=!0,mt.background.set(ce.bg),gt("light")&&(gt("light").textContent=on==="day"?"\u263E":"\u2600",gt("light").setAttribute("aria-label",on==="day"?"Switch to night":"Switch to day")),document.querySelector('meta[name="theme-color"]').setAttribute("content",ce.bg)}return await i,ie.paint(),De(),WM(),mt.traverse(ce=>{ce.isMesh&&!ce.userData.dyn&&(ce.updateMatrix(),ce.matrixAutoUpdate=!1)}),It.shadowMap.needsUpdate=!0,{books:ie,desk:we,tome:Z,beam:ge,motes:Ee,applyLook:De,furniture:We,setWood:_}}function WM(){mt.updateMatrixWorld(!0);let i=new Map;mt.traverse(e=>{if(!e.isMesh||e.isInstancedMesh||Array.isArray(e.material)||!e.material.visible||Object.keys(e.userData).length)return;for(let n=e.parent;n;n=n.parent)if(n.userData&&n.userData.dyn)return;let t=e.material.uuid+(e.castShadow?"c":"")+(e.receiveShadow?"r":"");i.has(t)||i.set(t,[]),i.get(t).push(e)});for(let e of i.values()){if(e.length<2)continue;let t=e.map(r=>{let a=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();a.applyMatrix4(r.matrixWorld);for(let o of Object.keys(a.attributes))["position","normal","uv"].includes(o)||a.deleteAttribute(o);return a.clearGroups(),a}),n=od(t,!1);if(!n)continue;let s=new bt(n,e[0].material);s.castShadow=e[0].castShadow,s.receiveShadow=e[0].receiveShadow,mt.add(s);for(let r of e)r.parent.remove(r),r.geometry.dispose()}}function Un(i){let e=i>>>0;return()=>(e=Math.imul(e^e>>>15,1|e)+1831565813>>>0)/4294967296}function ng(i){let e=i?512:1024,[t,n]=pn(e,i?640:e),s=Un(i?9:7);n.fillStyle="#0f1a2b",n.fillRect(0,0,t.width,t.height);let r=n.createRadialGradient(t.width/2,t.height/2,10,t.width/2,t.height/2,t.width*.8);if(r.addColorStop(0,"rgba(60,80,130,.35)"),r.addColorStop(1,"rgba(0,0,0,.25)"),n.fillStyle=r,n.fillRect(0,0,t.width,t.height),n.strokeStyle="rgba(201,161,91,.18)",n.lineWidth=1.5,i){for(let a of[120,180,240])n.beginPath(),n.arc(256,320,a,0,Math.PI*2),n.stroke();for(let a=0;a<12;a++)n.beginPath(),n.moveTo(256,320),n.lineTo(256+Math.cos(a*Math.PI/6)*240,320+Math.sin(a*Math.PI/6)*240),n.stroke()}else n.beginPath(),n.arc(e/2,e/2,e*.42,0,Math.PI*2),n.stroke(),n.beginPath(),n.moveTo(0,e/2),n.lineTo(e,e/2),n.stroke();for(let a=0;a<(i?260:520);a++){let o=s()*t.width,c=s()*t.height,l=s()<.08?2.4:s()*1.3+.4;n.fillStyle=s()<.25?"rgba(230,200,134,.9)":"rgba(239,227,200,.8)",n.beginPath(),n.arc(o,c,l,0,Math.PI*2),n.fill()}n.strokeStyle="rgba(230,200,134,.45)",n.lineWidth=1.2;for(let a=0;a<(i?5:7);a++){let o=s()*t.width,c=s()*t.height;n.beginPath(),n.moveTo(o,c);for(let l=0;l<4;l++)o+=(s()-.5)*140,c+=(s()-.5)*140,n.lineTo(o,c);n.stroke()}return t}function ig(i){let[e,t]=pn(512,512),n=t.createLinearGradient(0,0,0,512);i==="day"?(n.addColorStop(0,"#f7c98d"),n.addColorStop(.55,"#ffdca6"),n.addColorStop(1,"#f2a35e")):(n.addColorStop(0,"#08102a"),n.addColorStop(.6,"#15244a"),n.addColorStop(1,"#25335c")),t.fillStyle=n,t.fillRect(0,0,512,512);let s=Un(3);if(i==="day"){let r=t.createRadialGradient(330,300,5,330,300,220);r.addColorStop(0,"rgba(255,250,230,1)"),r.addColorStop(.15,"rgba(255,230,170,.8)"),r.addColorStop(1,"rgba(255,200,120,0)"),t.fillStyle=r,t.fillRect(0,0,512,512)}else{for(let r=0;r<120;r++)t.fillStyle=`rgba(255,255,240,${.3+s()*.6})`,t.fillRect(s()*512,s()*330,1.6,1.6);t.fillStyle="#f4efd8",t.beginPath(),t.arc(170,150,34,0,Math.PI*2),t.fill(),t.fillStyle="rgba(244,239,216,.12)",t.beginPath(),t.arc(170,150,80,0,Math.PI*2),t.fill()}t.fillStyle=i==="day"?"rgba(120,90,60,.55)":"rgba(10,14,30,.9)",t.beginPath(),t.moveTo(0,430),t.quadraticCurveTo(250,360,512,420),t.lineTo(512,512),t.lineTo(0,512),t.fill(),t.fillStyle=i==="day"?"rgba(70,60,35,.85)":"#05070f";for(let r=0;r<22;r++){let a=r*25+s()*10,o=50+s()*70;t.beginPath(),t.ellipse(a,470-o/3,18+s()*10,o/2,0,0,Math.PI*2),t.fill()}return t.fillRect(0,465,512,47),e}function qM(i){let[e,t]=pn(512,384);return t.fillStyle=la[2],t.fillRect(0,0,512,384),i&&(t.globalCompositeOperation="overlay",t.globalAlpha=.8,t.drawImage(i,0,0,1024,192,0,0,512,384),t.globalCompositeOperation="source-over",t.globalAlpha=1),t.strokeStyle="rgba(0,0,0,.4)",t.lineWidth=10,t.strokeRect(46,46,420,292),t.strokeStyle="rgba(255,230,190,.18)",t.lineWidth=4,t.strokeRect(58,58,396,268),t.fillStyle="rgba(0,0,0,.35)",t.fillRect(0,0,8,384),t.fillRect(504,0,8,384),e}function XM(){let[i,e]=pn(1024,696);e.fillStyle="#6a2128",e.fillRect(0,0,1024,696);let t=Un(11);for(let n=0;n<14e3;n++)e.fillStyle=`rgba(${t()<.5?"20,4,6":"150,70,70"},${t()*.07})`,e.fillRect(t()*1024,t()*696,3,2);return e.strokeStyle="#4a1419",e.lineWidth=64,e.strokeRect(32,32,960,632),e.strokeStyle="#e3cfa8",e.lineWidth=4,e.strokeRect(78,78,868,540),e.strokeStyle="rgba(201,161,91,.55)",e.lineWidth=2,e.strokeRect(88,88,848,520),i}function jM(i,e,t){let s=(o,c)=>[(t?34-o:o)*.00155,(110-c)*.00155],r=new wt,a=(o,c,l=.11)=>{let h=rt(new js(o,{depth:l,bevelEnabled:!0,bevelSize:.002,bevelThickness:.002,bevelSegments:2,curveSegments:10}),c,r);return h.position.z=-l/2,h};if(i==="brass"){let o=new ns;o.moveTo(...s(4,110)),o.lineTo(...s(4,30)),o.quadraticCurveTo(...s(4,8),...s(26,6)),o.quadraticCurveTo(...s(14,22),...s(14,40)),o.lineTo(...s(14,96)),o.lineTo(...s(30,96)),o.lineTo(...s(30,110)),o.lineTo(...s(4,110)),a(o,e.brass,.1)}else if(i==="oak"||i==="marble"){let o=new ns;i==="oak"?(o.moveTo(...s(2,110)),o.lineTo(...s(2,24)),o.quadraticCurveTo(...s(2,6),...s(18,6)),o.quadraticCurveTo(...s(34,6),...s(34,24)),o.lineTo(...s(34,110)),o.lineTo(...s(2,110))):(o.moveTo(...s(2,110)),o.lineTo(...s(2,18)),o.lineTo(...s(32,18)),o.lineTo(...s(32,110)),o.lineTo(...s(2,110))),a(o,i==="oak"?e.caseDark:Je({color:"#e9e4da",roughness:.3}),.1),i==="oak"&&rt(new is(.005,10,8),e.brass,r).position.set(18*.00155,84*.00155,.052)}else if(i==="owl"){let o=Je({color:"#3e3e44",roughness:.5,metalness:.6});Ze(.056,.025,.08,o,20*.00155,.0125,0,r);let c=rt(new is(.03,16,12),o,r);c.scale.set(.95,1.45,.85),c.position.set(20*.00155,.065,0);let l=rt(new is(.024,16,12),o,r);l.scale.set(1.05,.95,.9),l.position.set(20*.00155,.118,.002);for(let u of[-1,1]){let d=rt(new Wr(.007,.022,8),o,r);d.position.set(20*.00155+u*.016,.142,0),d.rotation.z=-u*.35,rt(new is(.0065,10,8),Je({color:"#e6c886",roughness:.3,metalness:.4,emissive:"#3a2a08"}),r).position.set(20*.00155+u*.0095,.121,.02)}let h=rt(new Wr(.004,.01,6),e.brass,r);h.rotation.x=Math.PI,h.position.set(20*.00155,.11,.023)}else if(i==="stones"){let o=[["#6d6a64",19,10,100],["#8c877d",15,9,82],["#5e5b56",12,8,66],["#a39d90",9,6.5,52]];for(let[c,l,h,u]of o){let d=rt(new is(1,16,10),Je({color:c,roughness:.6}),r);d.scale.set(l*.00155,h*.00155,l*.00155*.8),d.position.set(20*.00155,(110-u)*.00155,0)}}return r}function KM(i){let[e,t]=pn(128,128);t.fillStyle=i?"#4f7a3a":"#3d6b2f",t.beginPath(),t.moveTo(64,6),t.bezierCurveTo(118,40,104,104,64,122),t.bezierCurveTo(24,104,10,40,64,6),t.fill(),t.strokeStyle="rgba(210,235,170,.45)",t.lineWidth=3,t.beginPath(),t.moveTo(64,14),t.lineTo(64,118),t.stroke(),t.lineWidth=1.5;for(let n=0;n<5;n++){let s=30+n*17;t.beginPath(),t.moveTo(64,s+8),t.lineTo(38,s),t.moveTo(64,s+8),t.lineTo(90,s),t.stroke()}return e}function JM(){let[i,e]=pn(128,128);e.translate(64,64);for(let t=54;t>6;t-=9){e.fillStyle=`hsl(350, ${55+(54-t)*.4}%, ${82-(54-t)*.55}%)`,e.beginPath();for(let n=0;n<=6.3;n+=.3){let s=t*(.82+.18*Math.sin(n*5+t));e.lineTo(Math.cos(n)*s,Math.sin(n)*s)}e.fill(),e.strokeStyle="rgba(120,30,50,.25)",e.lineWidth=1.5,e.stroke()}return i}function YM(i,{W:e,top:t,RISE:n,ZF:s,ivy:r}){let a=Un(5),o=[],c=e/2-.02;for(let w=0;w<=10;w++){let T=.12+(t-.12)*(w/10);o.push(new P(c+Math.sin(w*1.3)*.012,T,s+.025))}for(let w=.08;w<1.25;w+=.12)o.push(new P(Math.cos(w)*(e/2+.005),t+Math.sin(w)*(n+.01)+Math.cos(w*7)*.01,s+.025));let l=new Ss(o);rt(new jr(l,120,.006,6,!1),Je({color:"#5a4a2a",roughness:.9}),i,{recv:!1});let h=Je({map:xt(KM(!r),{repeat:!1}),alphaTest:.5,side:$t,roughness:.75}),u=150,d=new Ri(new zt(.045,.045),h,u),f=new nt,g=new rn,x=new On,m=new P,p=new P;for(let w=0;w<u;w++){let T=Math.min(1,w/u*1.02+a()*.01);l.getPointAt(T,p),p.x+=(a()-.5)*.07,p.y+=(a()-.5)*.05,p.z+=.005+a()*.02,x.set((a()-.5)*.9,(a()-.5)*.9,a()*6.28),g.setFromEuler(x);let b=.7+a()*.6;m.set(b,b,b),d.setMatrixAt(w,f.compose(p,g,m))}if(d.castShadow=!0,i.add(d),r)return;let _=Je({map:xt(JM(),{repeat:!1}),alphaTest:.4,roughness:.7,side:$t}),M=22,v=new Ri(new eo(.022,16),_,M);for(let w=0;w<M;w++){l.getPointAt(.12+w/M*.86,p),p.x+=(a()-.5)*.05,p.z+=.03,p.y+=(a()-.5)*.04,x.set((a()-.5)*.5,(a()-.5)*.5,a()*6.28),g.setFromEuler(x);let T=.7+a()*.6;m.set(T,T,T),v.setMatrixAt(w,f.compose(p,g,m))}i.add(v)}function sh(i,e=512,t=96){let[n,s]=pn(e,t),r=s.createLinearGradient(0,0,0,t);return r.addColorStop(0,"#e6c886"),r.addColorStop(.6,"#c9a15b"),r.addColorStop(1,"#9c7637"),s.fillStyle=r,s.beginPath(),s.roundRect(2,2,e-4,t-4,10),s.fill(),s.strokeStyle="rgba(255,255,255,.35)",s.lineWidth=3,s.beginPath(),s.moveTo(12,6),s.lineTo(e-12,6),s.stroke(),s.fillStyle="#3a2610",s.font=`italic ${Math.round(t*.58)}px "IM Fell English", Georgia, serif`,s.textAlign="center",s.textBaseline="middle",s.fillText(i,e/2,t/2+3),n}function $M(i,{cloth:e,leather:t}){let n=new wt;mt.add(n);let s=1.65,r=.4,a=.055,o=.12,c=.43,l=.035,h=3,u=.16,d=.3,f=-2.68,g=f+r,x=f+r/2,m=Re=>o+Re*(c+l),p=m(h),_=Object.assign({bookend:"brass",vine:"roses"},Qe.theme);Ze(s+.04,o,r+.03,i.caseDark,0,o/2,x+.015,n);for(let Re of[-1,1])Ze(a,p+.04-o,r,i.caseSide,Re*(s/2-a/2),o+(p+.04-o)/2,x,n);let M=i.recessWood||i.recess;Ze(s-2*a,p+.04-o,.02,M,0,o+(p+.04-o)/2,f+.01,n);let v=[];for(let Re=0;Re<h;Re++)Ze(s-2*a,l,r-.015,i.caseShelf,0,m(Re)+l/2,x+.0075,n),v.push(m(Re)+l);Ze(s+.03,.045,r+.035,i.caseShelf,0,p+.0225,x+.0175,n);let w=p+.045,T=s/2,b=s/2-a,y=new ns;y.moveTo(-T,0),y.lineTo(-T,u),y.absellipse(0,u,T,d,Math.PI,0,!0),y.lineTo(T,0),y.lineTo(b,0),y.lineTo(b,u),y.absellipse(0,u,b,d-a*.8,0,Math.PI,!1),y.lineTo(-b,0),y.lineTo(-T,0),rt(new js(y,{depth:r,bevelEnabled:!1,curveSegments:48}),i.caseSide,n).position.set(0,w,f);let C=new ns;C.moveTo(-b,0),C.lineTo(-b,u),C.absellipse(0,u,b,d-a*.8,Math.PI,0,!0),C.lineTo(b,0),C.lineTo(-b,0),rt(new js(C,{depth:.02,bevelEnabled:!1,curveSegments:48}),M,n).position.set(0,w,f);let k=[];for(let Re=0;Re<=48;Re++){let qe=Math.PI-Re/48*Math.PI;k.push(new P(Math.cos(qe)*(T+.004),w+u+Math.sin(qe)*(d+.004),g+.002))}rt(new jr(new Ss(k),64,.009,8,!1),i.caseShelf,n);let F=p+.045,A=x+.02,z=new wt;z.userData.dyn=!0,n.add(z);let V=Re=>{for(let qe of[...z.children])z.remove(qe),qe.geometry&&qe.geometry.dispose();Re!=="none"&&YM(z,{W:s,top:w+u,RISE:d,ZF:g,ivy:Re==="ivy"}),It.shadowMap.needsUpdate=!0};V(_.vine);let H=new wt;H.userData.dyn=!0,n.add(H);let Q={meshes:[],hidden:0,count:0,order:null,page:0,pages:1,all:[],paint(){},refill(){Be(Q.page),Q.paint()},showPage(Re){Be(Re),Q.paint()}},j=n,ee=new wt;ee.userData.dyn=!0,n.add(ee);let ie=0,we=s/2-a,We=d-a*.8,Z=Re=>u+We*Math.sqrt(Math.max(0,1-(Re/we)**2))-.03,Me=Re=>v[Re],Pe=c-.035;async function je(Re,qe,{endW:re,innerL:me,innerR:ge}){let Ee=++ie;ee.clear();let xe=kM();if(!xe.length)return;let Ye=await Promise.all(xe.map(B=>OM(B).catch(()=>null)));if(Ee!==ie)return;let De=xe.map((B,se)=>Ye[se]&&{k:B,...Ye[se],spec:lh[B]}).filter(Boolean);if(!De.length)return;let ce=Un(ch(xe.join("|"))),Le=(B,se=0)=>(B.spec.turn||0)*(se||1)+(ce()-.5)*.2,ze=(B,se)=>Math.abs(B.w*Math.cos(se))+Math.abs(B.d*Math.sin(se)),N=(B,se,q,K,oe)=>{let I=B.obj.clone(!0);return I.position.set(se,q,K),I.rotation.y=oe,ee.add(I),I},Mt=(B,se)=>{let q=Math.abs(B.d*Math.cos(se))+Math.abs(B.w*Math.sin(se));return Math.max(f+.03+q/2,g-.05-q/2)},He=[...De],ct=B=>(He=He.filter(se=>se!==B),B),fe=He.find(B=>B.k==="bookstack"),vt=null;fe&&(vt=He.filter(B=>B!==fe&&B.spec.small).sort((B,se)=>B.h-se.h)[0]||null,vt&&ct(vt));let Ge=B=>B===fe&&vt?{p:B,top:vt,h:B.h+vt.h,w:Math.max(B.w,vt.w)}:{p:B,h:B.h,w:B.w},$e=[],R=He.find(B=>B.spec.centre&&B.h<=Z(0))||He.find(B=>B.h>=.16&&B.h<=Z(0)&&B!==fe);if(R){ct(R);let B=[{pile:Ge(R),x:0}],se=He.filter(q=>q.h<R.h&&q.h<=Z(.4)).sort((q,K)=>K.h-q.h).slice(0,2);se.forEach((q,K)=>{ct(q),B.push({pile:Ge(q),x:(K?-1:1)*Math.min(.46,Math.max(.3,R.w/2+q.w/2+.16))})}),se.length===1&&(B[1].x=-B[1].x),$e.push(B)}let S=(ve(qe)+1)*h,G=[];for(let B=0;B<S;B++){let se=qe.filter(oe=>oe.abs===B),q=se.length?Math.max(...se.map(oe=>oe.x+(oe.kind==="book"?oe.t+oe.lean:re(oe.sec))+(oe.kind==="end"&&oe.flip?.006:0))):null,K=q===null?me+.03:q+.05;G.push({abs:B,page:Math.floor(B/h),row:h-1-B%h,books:q!==null,from:K,to:ge-.03,piles:[]})}let le=He.map(Ge).filter(B=>B.p!==vt);le.sort((B,se)=>se.w*se.h-B.w*B.h);for(let B of le){if(B.h>Pe)continue;let se=null,q=1/0;for(let K of G){let oe=K.books?2:3;if(K.piles.length>=oe)continue;let I=K.piles.reduce((Y,be)=>Y+be.w+.1,0);if(K.to-K.from-I<B.w+.04)continue;let $=K.page*3+K.piles.length*1.2+(K.books&&B.w>.2?.6:0)+K.abs%h*.05;$<q&&(q=$,se=K)}se&&se.piles.push(B)}for(let B=1;B<=ve(qe);B++){let se=le.find(q=>!G.some(K=>K.piles.includes(q))&&q.h<=Z(0));if(se)$e[B]=[{pile:se,x:0}];else break}let te=(B,se,q,K,oe)=>{let I=Le(B.p,oe),$=K??Mt(B.p,I);if(N(B.p,se,q,$,I),B.top){let Y=Le(B.top,-oe);N(B.top,se+(ce()-.5)*Math.max(0,B.p.w-B.top.w)*.6,q+B.p.h,$+(ce()-.5)*.03,Y)}};for(let B of $e[Re]||[])te(B.pile,B.x,F,A,B.x===0?0:-Math.sign(B.x));for(let B of G.filter(se=>se.page===Re&&se.piles.length)){let se=Me(B.row),q=B.to-B.from,K=B.piles.reduce((I,$)=>I+$.w,0),oe;if(B.books){let I=q-K;oe=B.piles.length===1?[B.from+Math.min(.04+ce()*.06,I*.4)]:[B.from+.03,I>.3?B.to-B.piles[1].w-.02-ce()*.05:B.from+.03+B.piles[0].w+Math.min(.08,I*.4)]}else{let I={1:[.5+(ce()-.5)*.2],2:[.27,.71],3:[.14,.5,.84]}[B.piles.length],$=B.from;oe=B.piles.map((Y,be)=>{let O=B.from+I[be]*q-Y.w/2+(ce()-.5)*.04;return O=Math.max(O,$+(be?.08:0)),O=Math.min(O,B.to-Y.w-B.piles.slice(be+1).reduce((ae,pe)=>ae+pe.w+.08,0)),$=O+Y.w,O})}B.piles.forEach((I,$)=>te(I,oe[$]+I.w/2,se,null,$?-1:1))}It.shadowMap.needsUpdate=!0,yt()}let ve=Re=>Math.floor((Re.length?Re[Re.length-1].abs:0)/h);function Be(Re=0){H.traverse(O=>{O.isMesh&&(O.geometry.dispose(),O.material&&O.material.map&&O.material!==Q.mat&&O.material.map.dispose())}),H.clear(),Q.mat&&(Q.mat.map.dispose(),Q.mat.dispose(),Q.mat=null);let qe=H,re=Qe.books.filter(O=>(O.status||"read")==="read").length;rt(new zt(.2,.034),Je({map:xt(sh(`${re} read`),{repeat:!1}),roughness:.35,metalness:.6}),qe,{cast:!1}).position.set(0,p+.0225,g+.035/2+.0185);let ge=["reading","want","read"],Ee=(O,ae)=>(Number(ae.addedAt)||0)-(Number(O.addedAt)||0),xe=[...Qe.books.filter(O=>(O.status||"read")==="reading").sort(Ee),...Xg(Qe.books.filter(O=>O.status==="want")),...Qe.books.filter(O=>(O.status||"read")==="read").sort(Ee)],Ye={};xe.forEach(O=>{let ae=O.status||"read";Ye[ae]=(Ye[ae]||0)+1});let De=Object.keys(Ye).length>1,ce={reading:["owl","stones","oak","marble","brass"],want:["oak","marble","stones","owl","brass"]},Le=O=>{if(O!=="reading"&&O!=="want")return _.bookend;let ae=_.bookends&&_.bookends[O];if(ae)return ae;if(_.bookend==="none")return"none";let pe=[_.bookend];return O==="want"&&pe.push(Le("reading")),ce[O].find(Ve=>!pe.includes(Ve))||_.bookend},ze=O=>Le(O)==="none"?0:Le(O)==="owl"||Le(O)==="stones"?.064:.054,N=-s/2+a+.02,Mt=s/2-a-.02,He=Mt-N,ct=[],fe=null;for(let O of xe){let ae=O.status||"read",pe=ch(O.id+"|"+O.title),Ve=IM(O),he=(Ve>0?Math.min(66,Math.max(24,18+Ve/16)):26+(pe>>>5)%30)*82e-5,ke=(176+pe%66)*.00118,it=.15+pe%5*.011;ae!==fe&&(fe!==null&&ct.push({kind:"end",sec:fe,w:ze(fe)+.035,flip:!0}),ct.push({kind:"end",sec:ae,w:ze(ae)+.004,start:!0}),fe=ae);let ne=ae==="reading"?.012:0;ct.push({kind:"book",w:he+.0025+ne,b:O,t:he,h:ke,d:it,lean:ne,st:ae,variant:(pe>>>9)%4})}fe!==null&&ct.push({kind:"end",sec:fe,w:ze(fe),flip:!0});let vt=ct.reduce((O,ae)=>O+ae.w,0),Ge=Math.ceil(vt/He),$e=Ge>h,R=$e?h:Math.min(h,Math.max(Ge,Math.ceil(vt/(He*.72)))),S=$e?He:Math.min(He,vt/R+.06),G=0,le=N,te=[];for(let O of ct){if(le+O.w>N+S&&le>N){if(O.kind==="end"&&O.flip){te.push({...O,abs:G,x:le}),le+=O.w;continue}G++,le=N}te.push({...O,abs:G,x:le}),le+=O.w}let B=O=>Math.floor(O.abs/h),se=B(te[te.length-1]||{abs:0})+1,q=Math.max(0,Math.min(se-1,Re||0)),K=te.filter(O=>O.kind==="book").map(O=>({b:O.b,page:B(O),st:O.st})),oe=te.filter(O=>B(O)===q).map(O=>({...O,row:h-1-O.abs%h})),I=oe.find(O=>O.kind==="book");q>0&&I&&!oe.some(O=>O.kind==="end"&&O.start&&O.sec===I.st)&&oe.unshift({kind:"label",sec:I.st,row:I.row,x:I.x-.004});let $=[];for(let O of oe){let ae=v[O.row];if(O.kind==="label"){if(De){let he={reading:"Reading now",want:"To read",read:"Read"}[O.sec];rt(new zt(.15,.022),Je({map:xt(sh(`${he} \xB7 ${Ye[O.sec]}`,640,96),{repeat:!1}),roughness:.35,metalness:.6}),qe,{cast:!1}).position.set(O.x+.075,ae-l/2,g+6e-4)}continue}if(O.kind==="end"){let he=Le(O.sec);if(he!=="none"){let ke=jM(he,i,!!O.flip);qe.add(ke),ke.position.set(O.x+(O.flip?.006:0),ae,g-.1)}if(O.start&&De){let ke={reading:"Reading now",want:"To read",read:"Read"}[O.sec];rt(new zt(.15,.022),Je({map:xt(sh(`${ke} \xB7 ${Ye[O.sec]}`,640,96),{repeat:!1}),roughness:.35,metalness:.6}),qe,{cast:!1}).position.set(O.x+.08,ae-l/2,g+6e-4)}continue}let pe=new Vt(O.t,O.h,O.d),Ve=rt(pe,void 0,qe);if(Ve.position.set(O.x+O.t/2+O.lean,ae+O.h/2,g-.025-O.d/2),O.lean&&(Ve.rotation.z=-.07,Ve.position.x-=.004),Ve.userData={book:O.b,home:Ve.position.clone(),homeRot:Ve.rotation.clone(),dyn:!0,it:O},O.st==="reading"){let he=new bt(new Vt(Math.max(.006,O.t*.28),.045,.002),Je({color:"#9b1d22",roughness:.6}));he.position.set(0,O.h/2+.012,O.d/2-.02),Ve.add(he)}$.push(Ve)}je(q,te,{endW:ze,innerL:N,innerR:Mt});let Y=null;function be(){let O=$.length,ae=2048,pe=O<=128?64:O<=252?48:40,Ve=pe*7,he=Math.floor(ae/pe),ke=Math.max(1,Math.ceil(O/he)),[it,ne]=pn(ae,Math.min(ae,Ht.ceilPowerOfTwo(ke*Ve))),St=it.height,Qt=Gi=>Gi?ne.createPattern(Gi,"repeat"):null,wi=Qt(e),Xo=Qt(t);$.forEach((Gi,va)=>{let{book:Ps,it:Cn}=Gi.userData,[hr,ds]=bh(Ps),Yt=va%he*pe,Wt=Math.floor(va/he)*Ve,kn=Ve-14;ne.save(),ne.beginPath(),ne.rect(Yt,Wt,pe,Ve),ne.clip(),ne.fillStyle=hr,ne.fillRect(Yt,Wt,pe,Ve);let ya=Cn.variant===3?Xo:wi;ya&&(ne.globalCompositeOperation="overlay",ne.globalAlpha=Cn.st==="want"?.35:.6,ne.fillStyle=ya,ne.fillRect(Yt,Wt,pe,kn),ne.globalCompositeOperation="source-over",ne.globalAlpha=1);let oi=ne.createLinearGradient(Yt,0,Yt+pe,0);oi.addColorStop(0,"rgba(0,0,0,.42)"),oi.addColorStop(.22,"rgba(255,255,255,.12)"),oi.addColorStop(.55,"rgba(0,0,0,0)"),oi.addColorStop(1,"rgba(0,0,0,.45)"),ne.fillStyle=oi,ne.fillRect(Yt,Wt,pe,kn);let jo=Cn.st==="want"?ds:"#e6c886";ne.fillStyle=jo,ne.strokeStyle=jo;let Gt=pe/64;Cn.variant!==2&&(ne.fillRect(Yt,Wt+22*Gt,pe,3*Gt),ne.fillRect(Yt,Wt+kn-26*Gt,pe,3*Gt)),Cn.variant===1&&(ne.fillRect(Yt,Wt+28*Gt,pe,1.5*Gt),ne.fillRect(Yt,Wt+kn-32*Gt,pe,1.5*Gt));let ur=Cn.st==="read"?Math.max(0,Math.min(5,Math.floor(Ps.rating||0))):0;ne.font=`${Math.round(13*Gt)}px serif`,ne.textAlign="center",ne.textBaseline="middle";for(let Te=0;Te<ur;Te++)ne.fillText("\u2605",Yt+pe/2,Wt+38*Gt+Te*13*Gt);let Ko=Wt+(ur?38*Gt+ur*13*Gt+6*Gt:40*Gt),Ma=Wt+kn-64*Gt-Ko;ne.save(),ne.translate(Yt+pe/2,Ko+Ma/2),ne.rotate(Math.PI/2);let Is=Math.min(26*Gt,pe*.5);ne.font=`${Is}px "IM Fell English", Georgia, serif`;let E=String(Ps.title);for(;ne.measureText(E).width>Ma&&Is>14*Gt;)Is-=1,ne.font=`${Is}px "IM Fell English", Georgia, serif`;for(;ne.measureText(E).width>Ma&&E.length>3;)E=E.slice(0,-2).trimEnd()+"\u2026";ne.fillStyle=Cn.st==="want"?ds:ds==="#2B1C0E"||ds==="#24170C"||ds==="#3A2614"?"#2a1a0c":"#ead19a",ne.fillText(E,0,1),ne.restore();let U=String(Ps.author||"").trim().split(/\s+/).pop()||"";if(U){ne.save(),ne.translate(Yt+pe/2,Wt+kn-44*Gt),ne.rotate(Math.PI/2);let Te=15*Gt;for(ne.font=`${Te}px "IM Fell English", Georgia, serif`;ne.measureText(U).width>34*Gt&&Te>9*Gt;)Te-=1,ne.font=`${Te}px "IM Fell English", Georgia, serif`;ne.fillText(U,0,1),ne.restore()}ne.fillStyle=hr,ne.fillRect(Yt,Wt+kn,pe,7),ne.fillStyle="#e9dcbc",ne.fillRect(Yt,Wt+kn+7,pe,7),ne.restore();let J=Yt/ae,W=(Yt+pe)/ae,X=1-Wt/St,ye=1-(Wt+kn)/St,Ne=[(Yt+pe/2)/ae,1-(Wt+kn+3.5)/St],_e=[(Yt+pe/2)/ae,1-(Wt+kn+10.5)/St],Se=Gi.geometry.attributes.uv;for(let Te=0;Te<6;Te++)for(let tt=0;tt<4;tt++){let ot=Te*4+tt;if(Te===4){let Ue=Se.getX(ot),pt=Se.getY(ot);Se.setXY(ot,J+Ue*(W-J),ye+pt*(X-ye))}else Te===2||Te===3?Se.setXY(ot,_e[0],_e[1]):Se.setXY(ot,Ne[0],Ne[1])}Se.needsUpdate=!0});let _a=xt(it,{repeat:!1});Y=Je({map:_a,roughness:.72}),$.forEach(Gi=>{Gi.material=Y}),Q.mat=Y}Object.assign(Q,{meshes:$,paint:be,hidden:0,count:xe.length,order:null,page:q,pages:se,all:K,byId:new Map($.map(O=>[O.userData.book.id,O]))})}Be();let At=w+u+d,Ie=new bt(new Vt(s+.1,At,r),new an({visible:!1}));return Ie.position.set(0,At/2,x),Ie.userData.station="shelf",mt.add(Ie),Q.setVine=V,Q}var Sg=`
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f*f*(3.0-2.0*f);
    return mix(mix(hash(i), hash(i+vec2(1,0)), u.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), u.x), u.y); }
  float fbm(vec2 p){ float v = 0.0, a = 0.5; for (int i = 0; i < 5; i++){ v += a*noise(p); p *= 2.03; a *= 0.5; } return v; }`;function ZM(){let i=new _n({uniforms:{uTime:{value:0},uA:{value:.42}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform float uTime, uA; varying vec2 vUv;"+Sg+`
      void main(){ vec2 uv = vUv;
        float sway = (fbm(vec2(uv.y*2.0 - uTime*0.4, 3.1)) - 0.5) * 0.7 * uv.y;
        float n = fbm(vec2((uv.x + sway)*4.0, uv.y*3.0 - uTime*0.55));
        float col = smoothstep(0.42, 0.0, abs(uv.x - 0.5 + sway));
        float a = min(1.0, col * smoothstep(0.0, 0.18, uv.y) * pow(1.0 - uv.y, 1.1) * smoothstep(0.3, 0.62, n) * uA * 2.2);
        gl_FragColor = vec4(vec3(0.93, 0.93, 0.95), a); }`,transparent:!0,depthWrite:!1,side:$t}),e=new wt;e.userData.dyn=!0;for(let t of[0,Math.PI/2]){let n=new bt(new zt(.14,.32).translate(0,.16,0),i);n.rotation.y=t,n.userData.dyn=!0,n.renderOrder=7,e.add(n)}return e.material=i,e}function QM(){let[i,e]=pn(512,128);e.fillStyle="#efe2c6",e.fillRect(0,0,512,128);for(let t=0;t<64;t++)e.fillStyle=t%2?"rgba(120,90,50,.10)":"rgba(255,255,255,.10)",e.fillRect(t*8,0,4,128);return e.fillStyle="#b8935a",e.fillRect(0,0,512,6),e.fillRect(0,122,512,6),i}function of(i){let e=new wt;mt.add(e);let t=of.M,n=-3,s=1.68,r=.32,a=1.6,o=.9,c=.75,l=1.06;Ze(r,l,(a-o)/2,t.stoneSurround,n+r/2,l/2,s-o/2-(a-o)/4,e),Ze(r,l,(a-o)/2,t.stoneSurround,n+r/2,l/2,s+o/2+(a-o)/4,e),Ze(r,l-c,o,t.stoneSurround,n+r/2,c+(l-c)/2,s,e),Ze(.03,c,o,t.firebrick,n+.05,c/2,s,e),Ze(r-.07,c,.025,t.firebrick,n+.065+(r-.07)/2,c/2,s-o/2+.0125,e),Ze(r-.07,c,.025,t.firebrick,n+.065+(r-.07)/2,c/2,s+o/2-.0125,e),Ze(r-.07,.02,o-.05,t.firebrick,n+.065+(r-.07)/2,c-.011,s,e),Ze(.72,.04,a+.3,t.slate,n+.36,.02,s,e),Ze(.44,.065,a+.26,t.trim,n+.22,l+.0325,s,e),Ze(.38,.035,a+.12,t.trim,n+.19,l-.0175,s,e);for(let F of[-1,1])Ze(.06,.12,.06,t.trim,n+r+.02,l-.07,s+F*(a/2-.08),e);for(let F of[-.2,0,.2])Ze(.26,.015,.012,t.iron,n+.17,.09,s+F,e);for(let F of[-1,1])Ze(.012,.09,.012,t.iron,n+.27,.045,s+F*.26,e);let h=[[n+.12,.12,s,.05,.62,.08,0],[n+.21,.125,s-.02,.045,.58,-.12,.05],[n+.16,.19,s+.03,.04,.5,.25,-.2]];for(let[F,A,z,V,H,Q,j]of h){let ee=rt(new zn(V,V*1.05,H,12).rotateX(Math.PI/2),t.logs,e);ee.position.set(F,A,z),ee.rotation.set(j,Q,0)}rt(new zt(.24,.6).rotateX(-Math.PI/2),new an({map:xt(tS(),{repeat:!1}),color:"#ffffff"}),e,{cast:!1}).position.set(n+.16,.045,s);let d=new _n({uniforms:{uTime:{value:0},uI:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform float uTime, uI; varying vec2 vUv;"+Sg+`
      void main(){ vec2 uv = vUv;
        float n = fbm(vec2(uv.x*3.2 + 7.0, uv.y*2.4 - uTime*1.7));
        float n2 = fbm(vec2(uv.x*6.0 - 3.0, uv.y*4.0 - uTime*2.6));
        float width = 1.0 - pow(abs(uv.x - 0.5)*2.0, 1.4);
        float f = (n*1.15 + n2*0.35 - uv.y*1.05) * width + 0.25*(1.0 - uv.y)*width;
        f = smoothstep(0.08, 0.62, f);
        vec3 c = mix(vec3(0.85,0.16,0.02), vec3(1.0,0.62,0.16), smoothstep(0.15, 0.6, f));
        c = mix(c, vec3(1.0,0.93,0.68), smoothstep(0.7, 1.0, f));
        gl_FragColor = vec4(c*f*uI, f*uI); }`,transparent:!0,blending:Jn,depthWrite:!1,side:$t}),f=[];for(let[F,A,z,V]of[[0,.62,.55,0],[.9,.42,.5,-.08],[-.9,.42,.48,.09],[Math.PI/2,.3,.45,0]]){let H=new bt(new zt(A,z).translate(0,z/2,0),d);H.rotation.y=Math.PI/2+F,H.position.set(n+.17,.08,s+V),H.renderOrder=8,H.userData.dyn=!0,e.add(H),f.push(H)}let g=50,x=new Float32Array(g*3),m=Un(17);for(let F=0;F<g*3;F++)x[F]=m();let p=new Lt;p.setAttribute("position",new Kt(x,3));let _=new _n({uniforms:{uTime:{value:0},uSize:{value:14*bi},uO:{value:new P(n+.17,.12,s)}},vertexShader:`uniform float uTime, uSize; uniform vec3 uO; varying float vA;
      void main(){ vec3 s = position; float life = fract(s.x + uTime*(0.25 + 0.3*s.y));
        vec3 p = uO + vec3((s.z-0.5)*0.12 + sin(uTime*3.0 + s.y*20.0)*0.02, life*0.65, (s.y-0.5)*0.5 + sin(uTime*2.0 + s.z*9.0)*0.03);
        vA = (1.0 - life) * smoothstep(0.0, 0.1, life);
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_PointSize = uSize*(0.4 + s.z)/-mv.z; gl_Position = projectionMatrix*mv; }`,fragmentShader:"varying float vA; void main(){ float d = length(gl_PointCoord-0.5); float a = smoothstep(0.5,0.0,d)*vA; gl_FragColor = vec4(vec3(1.0,0.6,0.2)*a, a); }",transparent:!0,blending:Jn,depthWrite:!1}),M=new es(p,_);M.frustumCulled=!1,M.userData.dyn=!0,e.add(M);let v=new Tn("#ff8c3a",2,5.5,2);v.position.set(n+.55,.45,s),e.add(v);let w=new bt(new zt(1.8,1.6).rotateX(-Math.PI/2),new an({map:xt(wg(),{repeat:!1}),color:"#ff9a4a",transparent:!0,blending:Jn,depthWrite:!1,opacity:.35}));w.position.set(n+.6,.046,s),w.renderOrder=4,e.add(w);let T=new bt(new Vt(.8,1.3,a+.2),new an({visible:!1}));T.position.set(n+.4,.65,s),T.userData.station="hearth",e.add(T);let b=l+.065;Fn(i.clock,n+.2,b,s,Math.PI/2,1.05);for(let F of[-1,1]){let A=i.candlestick&&(F<0?i.candlestick:i.candlestick.clone());A&&Fn(A,n+.2,b,s+F*.78,0,1.15)}let y=Fn(i.vase,n+.19,b,s-.42,.3,.45);if(i.painting){let F=i.painting.clone(!0);F.traverse(A=>{A.isMesh&&/canvas/.test(A.material.name)&&(A.material=A.material.clone(),A.material.map=null,A.material.color.set("#3a2a1c"),af.mantel=A.material,A.material.needsUpdate=!0)}),Fn(F,n+.005,b+.62,s,Math.PI/2,2.25,{cast:!1})}let L=Fn(i.elephant,n+.2,b,s+.42,Math.PI/2+.3,1.7),C=new wt;C.userData.dyn=!0,e.add(C);function D(F){C.traverse(Q=>{Q.isMesh&&(Q.geometry.dispose(),Q.material.map&&(Q.material.map.dispose(),Q.material.dispose()))}),C.clear();let A=Object.keys(F||{}).sort(),z=A.length,V;if(z<=2)V=[-.42,.42].slice(0,z);else{let Q=Math.ceil(z/2),j=z-Q,ee=(ie,we,We)=>We*(.2+(ie+.5)*(.48/we));V=[...Array.from({length:Q},(ie,we)=>ee(we,Q,-1)),...Array.from({length:j},(ie,we)=>ee(we,j,1))]}V.sort((Q,j)=>Math.abs(j)-Math.abs(Q));let H=z>2?Math.min(.85,.48/Math.ceil(z/2)/.17):.85;A.forEach((Q,j)=>{let ee=eS(Q,t);ee.scale.setScalar(H),ee.position.set(n+.21,b,s+V[j]),ee.traverse(ie=>{ie.userData.dyn=!0,ie.isMesh&&(ie.userData.trophy=Q)}),C.add(ee)}),y&&(y.visible=!A.length),L&&(L.visible=A.length<2),It.shadowMap.needsUpdate=!0}let k=2;return{setTrophies:D,setLight(F){k=on==="night"?4.2:1.6},tick(F){d.uniforms.uTime.value=F,_.uniforms.uTime.value=F;let A=.82+.1*Math.sin(F*9.1)+.08*Math.sin(F*23.7+1.3)*Math.sin(F*3.3);v.intensity=k*A,w.material.opacity=(on==="night"?.5:.28)*A}}}function eS(i,e){let t=new wt,n=rt(new oa(.12,.045,.12,2,.006),e.trim,t);n.position.y=.0225,rt(new zt(.08,.024).rotateY(Math.PI/2),Je({map:xt(sh(String(i),256,76),{repeat:!1}),roughness:.35,metalness:.6}),t,{cast:!1}).position.set(.0605,.0225,0);let r=new wt;r.position.y=.045,r.rotation.y=Math.PI/2,t.add(r),rt(GM([[0,0],[.05,0],[.05,.016],[.03,.026],[.011,.046],[.011,.09],[.028,.11],[.06,.155],[.067,.205],[.061,.205],[.019,.12],[0,.12]],32),e.gold,r);for(let a of[-1,1]){let o=rt(new Ks(.032,.0055,8,20,Math.PI),e.gold,r);o.rotation.z=a*-Math.PI/2,o.position.set(a*.064,.17,0)}return t}function tS(){let[i,e]=pn(128,256);e.fillStyle="#1a0a04",e.fillRect(0,0,128,256);let t=Un(8);for(let n=0;n<160;n++){let s=t()*128,r=t()*256,a=3+t()*9,o=e.createRadialGradient(s,r,0,s,r,a);o.addColorStop(0,`rgba(255,${120+t()*100},40,1)`),o.addColorStop(1,"rgba(120,20,0,0)"),e.fillStyle=o,e.beginPath(),e.arc(s,r,a,0,7),e.fill()}return i}function nS(i,e,t){let r=t-.04,a=rt(new oa(.66,.04,1.32,2,.008),i.trim,e);a.position.y=t-.02;let o=rt(new zt(.66-.14,1.32-.2).rotateX(-Math.PI/2),Je({map:xt(iS(),{repeat:!1}),roughness:.55,normalMap:$n.leather?Rn($n.leather,.2,.2):null}),e,{cast:!1});o.position.y=t+8e-4;for(let h of[-1,1]){let u=h*.45000000000000007;Ze(.66-.06,r-.06,.4,i.caseDark,0,.06+(r-.06)/2,u,e),Ze(.66-.02,.06,.42,i.trim,0,.03,u,e);let d=(r-.08)/3;for(let f=0;f<3;f++){let g=.07+d*f+d/2;Ze(.014,d-.016,.36,i.caseSide,.66/2-.03+.007,g,u,e),rt(new zn(.006,.006,.09,8).rotateX(Math.PI/2),i.brass,e).position.set(.66/2-.01,g+d*.15,u);for(let m of[-.045,.045])rt(new zn(.004,.004,.02,6).rotateZ(Math.PI/2),i.brass,e).position.set(.66/2-.018,g+d*.15,u+m)}}let c=1.32-.84;Ze(.66-.06,.1,c,i.caseDark,0,r-.05,0,e),Ze(.014,.08,c-.03,i.caseSide,.66/2-.023,r-.05,0,e),rt(new zn(.006,.006,.12,8).rotateX(Math.PI/2),i.brass,e).position.set(.66/2-.008,r-.05,0),Ze(.02,r-.2,c,i.caseDark,-.66/2+.06,.1+(r-.2)/2,0,e)}function iS(){let[i,e]=pn(512,1024);e.fillStyle="#284531",e.fillRect(0,0,512,1024);let t=Un(3);for(let n=0;n<5e3;n++)e.fillStyle=`rgba(${t()<.5?"0,0,0":"120,160,120"},${t()*.06})`,e.fillRect(t()*512,t()*1024,3,3);return e.strokeStyle="#c9a15b",e.lineWidth=5,e.strokeRect(14,14,484,996),e.lineWidth=2,e.strokeRect(28,28,456,968),i}function sS(i,e,t){let n=new wt;mt.add(n),n.position.set(-2.655,0,-.6);let s=.736;nS(i,n,s+.022);let r=new Tn("#ffb35c",0,3.2,2);n.add(r);let a=0,o=!1,c=Qe.books.find(b=>b.status==="reading")||null,l=new wt;n.add(l),l.userData.dyn=!0,l.position.set(.06,s+.024,0),l.rotation.y=-Math.PI/2;let[h]=c?bh(c):["#6E1F24"];Ze(.36,.008,.25,Je({color:h,roughness:.6}),0,.004,0,l);let u=Je({map:xt(rS(c),{repeat:!1}),roughness:.9}),d=new zt(.34,.23,24,1).rotateX(-Math.PI/2),f=d.attributes.position;for(let b=0;b<f.count;b++){let y=f.getX(b);f.setY(b,.012+.02*Math.sin(Math.min(1,Math.abs(y)/.17)*Math.PI*.5)*(1-Math.abs(y)/.34)-(Math.abs(y)<.01?.006:0))}d.computeVertexNormals();let g=rt(d,u,l,{cast:!1});g.userData.deskBook=!0;let x={backR:[-.17,-.46],backL:[-.19,.47],backM:[-.17,.24],frontR:[.17,-.45],frontL:[.18,.35]},m=new wt;m.userData.dyn=!0,n.add(m);let p=0;async function _(){let b=++p,y=zM(),L=await Promise.all(y.map(k=>Mg(ha[k].file,ha[k]).catch(()=>null)));if(b!==p)return;m.clear(),o=!1;let C=Un(ch("desk|"+y.join("|"))),D=new Set(Object.keys(x));y.forEach((k,F)=>{let A=L[F];if(!A)return;let z=ha[k].slots.find(we=>D.has(we))||[...D][0];if(!z)return;D.delete(z);let V=Math.PI/2+(k==="lamp"?z==="backR"?Math.PI+1.3:Math.PI-1.3:(C()-.5)*.5),H=Math.abs(A.w*Math.cos(V))+Math.abs(A.d*Math.sin(V)),Q=Math.abs(A.w*Math.sin(V))+Math.abs(A.d*Math.cos(V)),j=Ht.clamp(x[z][0],-.31+H/2,.31-H/2),ee=Ht.clamp(x[z][1],-.64+Q/2,.64-Q/2),ie=A.obj.clone(!0);ie.position.set(j,s+.022,ee),ie.rotation.y=V,m.add(ie),ha[k].light&&(o=!0,r.position.set(j+.06,s+.022+A.h*.8,ee+(z==="backR"?.08:-.08)))}),r.intensity=o?a:0,It.shadowMap.needsUpdate=!0,yt()}_(),t.deskchair&&Fn(t.deskchair,-1.98,0,-.6,-Math.PI/2,1);let M=new wt;t.deskchair||n.add(M),M.position.set(.68,0,0),M.rotation.y=Math.PI/2;let v=rt(new oa(.44,.04,.42,2,.015),i.trim,M);v.position.y=.46;for(let[b,y]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let L=rt(new zn(.014,.018,.47,10),i.trim,M);L.position.set(b*.17,.225,y*.15),L.rotation.set(y*.08,0,-b*.08)}for(let b=0;b<6;b++){let y=rt(new zn(.008,.008,.42,8),i.trim,M);y.position.set(-.15+b*.06,.69,.19),y.rotation.x=-.1}let w=rt(new Ks(.24,.018,8,24,Math.PI*.55),i.trim,M);w.rotation.set(-.1,0,Math.PI*.225),w.position.set(0,.68,.21),w.scale.set(1,.5,1);let T=new bt(new Vt(1,1.4,1.6),new an({visible:!1}));return T.position.set(0,.7,0),T.userData.station="desk",n.add(T),{reading:c,openBook:l,dress:_,setLight(b){a=b,r.intensity=o?b:0},tick(){}}}function rS(i){let[e,t]=pn(1024,692);t.fillStyle="#efe3c8",t.fillRect(0,0,1024,692);let n=t.createLinearGradient(440,0,584,0);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(.5,"rgba(60,40,20,.28)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(440,0,144,692),t.fillStyle="#3a2a1c",t.textAlign="center",t.font='italic 34px "IM Fell English", Georgia, serif',t.fillText(i?String(i.title).slice(0,34):"Chapter One",256,86),t.font='26px "IM Fell English", Georgia, serif',t.fillText(i&&i.author?String(i.author).slice(0,40):"",256,124);let s=Un(21);t.fillStyle="rgba(58,42,28,.55)";for(let[r,a]of[[70,170],[574,70]])for(let o=0;o<(a===70?19:15);o++){let c=r+(o===0?36:0);for(;c<r+380;){let l=14+s()*46;t.fillRect(c,a+o*30,Math.min(l,r+380-c),7),c+=l+9}}return e}function wg(){let[i,e]=pn(128,128),t=e.createRadialGradient(64,64,2,64,64,64);return t.addColorStop(0,"rgba(255,240,210,.9)"),t.addColorStop(.25,"rgba(255,200,120,.35)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),i}function aS(i,e,t,n){let s=i.computeFrenetFrames(e,!1),r=i.getLength(),a=[],o=[],c=[],l=[];for(let u=0;u<=e;u++){let d=u/e,f=i.getPointAt(d),g=s.normals[u],x=s.binormals[u],m=n(d);for(let p=0;p<=t;p++){let _=p/t*Math.PI*2,M=Math.cos(_),v=Math.sin(_),w=new P().addScaledVector(g,M).addScaledVector(x,v).normalize();a.push(f.x+w.x*m,f.y+w.y*m,f.z+w.z*m),o.push(w.x,w.y,w.z),c.push(p/t*.25,d*r)}}for(let u=0;u<e;u++)for(let d=0;d<t;d++){let f=u*(t+1)+d,g=f+t+1;l.push(f,g,f+1,g,g+1,f+1)}let h=new Lt;return h.setAttribute("position",new at(a,3)),h.setAttribute("normal",new at(o,3)),h.setAttribute("uv",new at(c,2)),h.setIndex(l),h.toNonIndexed()}function oS(i){let e=new wt;mt.add(e),e.position.set(2.25,0,.1),e.rotation.y=-1.1;let t=Un(31),n=[];for(let y=0;y<7;y++){let L=y/7*Math.PI*2+t()*.4,C=1.5+t()*.5,D=.3+t()*.18,k=(A,z,V)=>new P(Math.cos(L+V)*A,z,Math.sin(L+V)*A),F=new Ss([k(D+.12,0,-.25),k(D,.025,0),k(.2,.09,.35),k(.075,.32,C*.45),k(.055,.55,C*.75),k(.07,.7,C),k(.11+t()*.03,.79,C+.3),k(.14+t()*.03,.815,C+.5)]);n.push(aS(F,90,10,A=>1.35*(A<.14?.01+.042*(A/.14):A<.55?.052-.016*((A-.14)/.41):.036-.026*((A-.55)/.45))))}rt(od(n,!1),i.bark,e);let s=Ze(.44,.03,.32,i.trim,0,0,0,e);s.position.set(0,.905,0),s.rotation.x=.32;let r=new wt;e.add(r),r.position.set(0,.93,0),r.rotation.x=.32,r.userData.dyn=!0;let a=xt(cS(),{repeat:!1}),o=Je({color:"#cfc2a2",roughness:.9,emissive:"#7fc4ff",emissiveMap:a,emissiveIntensity:.6}),c=[];for(let y of[-1,1]){let L=new wt;r.add(L),L.userData.dyn=!0;let C=rt(new Vt(.21,.014,.3),i.tomeLeather,L,{cast:!1});C.position.x=y*.105;let D=rt(new Vt(.195,.03,.28),[i.paper,i.paper,o,i.paper,i.paper,i.paper],L,{cast:!1});D.position.set(y*.1,.022,0);let k=D.geometry.attributes.uv;for(let F=8;F<12;F++)k.setX(F,y<0?k.getX(F)*.5:.5+k.getX(F)*.5);for(let F of[-1,1])rt(new Vt(.03,.016,.03),i.gold,L,{cast:!1}).position.set(y*.195,.001,F*.135);L.userData.sx=y,c.push(L),L.traverse(F=>{F.userData.tome=!0,F.userData.dyn=!0})}let l=xt(lS(),{repeat:!1}),h=new an({map:l,transparent:!0,blending:Jn,depthWrite:!1,side:$t,color:"#9fd0ff"}),u=[.34,.24].map((y,L)=>{let C=rt(new uo(y*.78,y,64).rotateX(-Math.PI/2),h,e,{cast:!1,recv:!1});return C.position.y=1.18+L*.1,C.userData.dyn=!0,C}),d=new Tn("#9db8ff",1,3.2,2);d.position.set(0,1.55,.25),e.add(d);let f=140,g=new Float32Array(f*3),x=Un(99);for(let y=0;y<f;y++)g[y*3]=x(),g[y*3+1]=x(),g[y*3+2]=x();let m=new Lt;m.setAttribute("position",new Kt(new Float32Array(f*3),3)),m.setAttribute("seed",new Kt(g,3));let p=new _n({uniforms:{uTime:{value:0},uSize:{value:30*bi},uA:{value:1},uBoost:{value:0}},vertexShader:`uniform float uTime, uSize, uBoost; attribute vec3 seed; varying float vA;
      void main(){ float life = fract(seed.x + uTime*(0.06+0.05*seed.y)*(1.0+uBoost*2.0));
        float a = seed.z*6.283 + life*5.0; float rad = 0.08 + 0.22*seed.y*(1.0-life*0.5);
        vec3 p = vec3(cos(a)*rad, 0.98 + life*(0.7+0.5*uBoost), sin(a)*rad);
        vA = smoothstep(0.0,0.15,life)*(1.0-life);
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_PointSize = uSize*(0.5+seed.y)/-mv.z; gl_Position = projectionMatrix*mv; }`,fragmentShader:`uniform float uA; varying float vA;
      void main(){ float d = length(gl_PointCoord-0.5); float a = smoothstep(0.5,0.0,d)*vA*uA; gl_FragColor = vec4(vec3(0.7,0.85,1.0)*a, a); }`,transparent:!0,blending:Jn,depthWrite:!1}),_=new es(m,p);_.frustumCulled=!1,e.add(_);let M=new bt(new zn(.5,.5,1.6,12),new an({visible:!1}));M.position.y=.8,M.userData.station="tome",e.add(M);let v=.32,w=.32,T=0,b=1;return{group:e,setLight(y){b=y},wake(){v=.06,T=1},rest(){v=.32},tick(y,L){w+=(v-w)*Math.min(1,L*3),T=Math.max(0,T-L*.25);for(let D of c)D.rotation.z=D.userData.sx*w;u[0].rotation.y=y*.25*(1+T*3),u[1].rotation.y=-y*.4*(1+T*3);let C=.8+.2*Math.sin(y*1.7)+T;h.opacity=(on==="night"?.9:.55)*Math.min(1.3,C),o.emissiveIntensity=(on==="night"?.8:.7)*C,d.intensity=b*C,p.uniforms.uTime.value=y,p.uniforms.uBoost.value=T,p.uniforms.uA.value=on==="night"?1:.6},setDpr(y){p.uniforms.uSize.value=30*y}}}function cS(){let[i,e]=pn(512,256);e.fillStyle="#000",e.fillRect(0,0,512,256);let t=Un(42);e.strokeStyle="#fff",e.lineWidth=2.2,e.lineCap="round";for(let n of[0,256])for(let s=0;s<7;s++)for(let r=0;r<6;r++){let a=n+36+r*34,o=30+s*32;e.globalAlpha=.4+t()*.6,e.beginPath();for(let c=0;c<3;c++){let l=t()*6.28;e.moveTo(a+Math.cos(l)*9,o+Math.sin(l)*9),e.lineTo(a+Math.cos(l+2+t())*9,o+Math.sin(l+2+t())*9)}t()<.4&&e.arc(a,o,4+t()*4,0,6.28),e.stroke()}return e.globalAlpha=1,i}function lS(){let[i,e]=pn(512,512);e.translate(256,256),e.strokeStyle="rgba(255,255,255,.9)",e.lineWidth=3,e.beginPath(),e.arc(0,0,250,0,7),e.stroke(),e.beginPath(),e.arc(0,0,206,0,7),e.stroke();let t=Un(77);e.lineWidth=2.5;for(let n=0;n<28;n++){e.save(),e.rotate(n/28*Math.PI*2),e.translate(0,-228),e.beginPath();for(let s=0;s<3;s++){let r=t()*6.28;e.moveTo(Math.cos(r)*9,Math.sin(r)*9),e.lineTo(Math.cos(r+2.2)*9,Math.sin(r+2.2)*9)}e.stroke(),e.restore()}return i}function hS(i,e){let n=[[i.y0,i.z0],[i.y1,i.z0],[i.y1,i.z1],[i.y0,i.z1]].map(([h,u])=>new P(-3,h,u)),s=n.map(h=>h.clone().addScaledVector(e,3.9)),r=[],a=[];for(let h=0;h<4;h++){let u=(h+1)%4;for(let[d,f]of[[n[h],0],[n[u],0],[s[u],1],[n[h],0],[s[u],1],[s[h],1]])r.push(d.x,d.y,d.z),a.push(f)}let o=new Lt;o.setAttribute("position",new at(r,3)),o.setAttribute("along",new at(a,1)),o.computeVertexNormals();let c=new _n({uniforms:{uColor:{value:new P(1,.8,.5)},uA:{value:.14},uTime:{value:0},uDir:{value:e}},vertexShader:`attribute float along; varying float vAl; varying vec3 vN; varying vec3 vV; varying vec3 vW;
      void main(){ vAl = along; vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix)*normal); vV = normalize(cameraPosition - w.xyz);
        gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`uniform vec3 uColor, uDir; uniform float uA, uTime; varying float vAl; varying vec3 vN; varying vec3 vV; varying vec3 vW;
      void main(){ float facing = pow(abs(dot(normalize(vN), normalize(vV))), 1.6);
        float fade = pow(1.0 - vAl, 1.4) * smoothstep(0.0, 0.08, vAl + 0.02);
        vec3 q = vW - uDir*((vW.x + 3.0)/uDir.x);   // where this bit of light came through the window
        float shafts = 0.65 + 0.35*sin(q.z*13.0 + 1.3*sin(q.y*5.0)) * sin(q.z*5.3 - q.y*2.1 + 0.7);
        float shimmer = shafts * (0.9 + 0.1*sin(q.z*9.0 + uTime*0.35));
        float a = uA * facing * fade * shimmer; gl_FragColor = vec4(uColor*a, a); }`,transparent:!0,blending:Jn,depthWrite:!1,side:$t}),l=new bt(o,c);return l.frustumCulled=!1,l.renderOrder=5,l.userData.dyn=!0,mt.add(l),l}function uS(i,e){let t=xh?260:420,n=new Float32Array(t*3),s=Un(5);for(let c=0;c<t;c++)n[c*3]=-2.95+s()*3.4,n[c*3+1]=s()*2.7,n[c*3+2]=-2.3+s()*3;let r=new Lt;r.setAttribute("position",new Kt(n,3));let a=new _n({uniforms:{uTime:{value:0},uDir:{value:e},uWin:{value:new Ct(i.y0,i.y1,i.z0,i.z1)},uSize:{value:7*bi},uColor:{value:new P(1,.9,.7)},uA:{value:1}},vertexShader:`uniform float uTime, uSize; uniform vec3 uDir; uniform vec4 uWin; varying float vA;
      void main(){ vec3 s = position; vec3 p = s;
        p.y = mod(s.y - uTime*0.012*(0.5+fract(s.x*7.31)), 2.7) + 0.05;
        p.x += sin(uTime*0.21 + s.z*5.0)*0.06; p.z += cos(uTime*0.17 + s.x*4.0)*0.06;
        float k = (p.x + 3.0)/uDir.x; vec3 q = p - uDir*k;
        float inB = step(0.0,k)*step(uWin.x,q.y)*step(q.y,uWin.y)*step(uWin.z,q.z)*step(q.z,uWin.w);
        float tw = 0.55 + 0.45*sin(uTime*1.7 + s.x*31.0 + s.z*17.0);
        vA = mix(0.07, 1.0, inB) * tw;
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_PointSize = uSize*(0.6+fract(s.z*13.7))*(1.0+inB*0.6)/-mv.z; gl_Position = projectionMatrix*mv; }`,fragmentShader:`uniform vec3 uColor; uniform float uA; varying float vA;
      void main(){ float d = length(gl_PointCoord-0.5); float a = smoothstep(0.5,0.0,d)*vA*uA*0.8; gl_FragColor = vec4(uColor*a, a); }`,transparent:!0,blending:Jn,depthWrite:!1}),o=new es(r,a);return o.frustumCulled=!1,o.userData.dyn=!0,o.renderOrder=6,mt.add(o),o}var zi={house:{p:[9.6,9,11],t:[-.3,.5,-.2],w:9.4,h:6.8,max:90,fov:24,free:!0},room:{p:[1,1.65,2.55],t:[-.7,1.05,-1.5],w:4.4,h:2.6,max:5.2},shelf:{p:[0,1.4,-.95],t:[0,1.2,-2.4],w:1.25,h:1,max:2.15},desk:{p:[-1.25,1.55,.55],t:[-2.65,.82,-.6],w:1.5,h:1.2,max:2.4},hearth:{p:[-.5,1.45,2.3],t:[-2.7,.95,1.6],w:2.1,h:2,max:2.9},tome:{p:[.6,1.6,.95],t:[2.25,1.08,.1],w:1.3,h:1.4,max:2.4},nook:{p:[1.45,1.3,-1.35],t:[2.55,.85,-2.35],w:.8,h:.8,max:1.6},case:{p:[0,1.2,.4],t:[0,1.12,-2.5],w:2,h:2.25,max:4.2},read:{p:[-.1,1.8,.75],t:[2,.3,-2.2],w:2.2,h:1.5,max:4.6}},ue={pos:new P,dir:new P(0,0,-1),dist:2,yaw:0,pitch:0,vyaw:0,vpitch:0,vx:0},Ft="room",ft=null,Eg="tomestead.roomhome",jd=(()=>{try{return localStorage.getItem(Eg)==="room"?"room":"house"}catch{return"house"}})(),vi=()=>jd,_h=i=>i==="house"||i==="room";function Tg(i){jd=i==="room"?"room":"house";try{localStorage.setItem(Eg,jd)}catch{}}var dS=()=>vh()?62:50,Bo=i=>zi[i]&&zi[i].fov||dS();function Ag(i){document.querySelectorAll(".stations button").forEach(e=>e.setAttribute("aria-pressed",String(e.dataset.go===i||e.dataset.go==="room"&&_h(i))))}var zo={r:0,b:0},_i=!1,hh=()=>Math.max(1,innerWidth-zo.r),Ho=()=>Math.max(1,innerHeight-zo.b);function vh(){return hh()/Ho()<1}var Go=null,Rg=null;function ba(i){let e=zi[i],t=new P(...e.p),n=new P(...e.t),s=n.clone().sub(t),r=s.length();s.normalize();let a=Bo(i),o=Math.tan(Ht.degToRad(a)/2),c=2*Math.atan(o*Et.aspect);if(i==="house")return fS(e,n,s,o,c);let l=Math.max(e.w/2/Math.tan(c/2),e.h/2/o),h=Math.min(e.max,Math.max(r,l)),u=n.clone().addScaledVector(s,-h);return i==="shelf"&&Go?pS(s):(u.x=Ht.clamp(u.x,-2.75,2.75),u.z=Math.min(u.z,2.6),{pos:u,dir:n.clone().sub(u).normalize(),dist:n.distanceTo(u)})}function fS(i,e,t,n,s){let r=Ho(),a=_i?.03:Math.min(.35,cf()/r),o=_i?12:84+(Jg()&&vh()&&Fe?170:0),c=Math.max(a+.35,(r-o)/r),l=c-a,h=(a+c)/2,u=Math.max(i.w/2/Math.tan(s/2),i.h/2/n/l),d=2*u*n,f=new P().crossVectors(new P().crossVectors(t,new P(0,1,0)).normalize(),t).normalize();return{pos:e.clone().addScaledVector(f,(h-.5)*d).clone().addScaledVector(t,-u),dir:t.clone(),dist:u}}function cf(){let i=64;for(let e of[".topbar",".toolbar","#timerChip","#roomGoals"]){let t=Fe?document.querySelector(e):null;t&&!t.hidden&&t.offsetParent!==null&&(i=Math.max(i,t.getBoundingClientRect().bottom+6))}return i}function pS(i){let e=Math.tan(Ht.degToRad(Et.fov)/2),t=e*Et.aspect,n=Ho(),s=_i?.04:Math.min(.3,cf()/n),r=Math.max(s+.4,(n-(_i?16:132))/n),a=r-s,o=(s+r)/2,[c,l]=Go,[h,u]=Rg,d=(u-h+.08)/a/2/e,f=Math.min(l-c,vh()?.66:1.25)/2/t,g=Ht.clamp(Math.max(d,f),.75,zi.shelf.max),x=2*g*t,m=2*g*e,p;if(l-c<=x-.1)p=(c+l)/2;else{let v=Ce&&Ce.books.meshes.length?Ng(Math.max(0,Hi)):null;p=Ht.clamp(v?v.userData.home.x:c,c+x/2-.05,l-x/2+.05)}return{pos:new P(p,(h+u)/2-(.5-o)*m,zi.shelf.t[2]).clone().addScaledVector(i,-g),dir:i.clone(),dist:g}}function yh(){if(!Go)return null;let i=Math.tan(Ht.degToRad(Et.fov)/2)*Et.aspect,e=2*Math.max(.3,ue.pos.z-zi.shelf.t[2])*i,[t,n]=Go;return n-t<=e-.1?null:{lo:t+e/2-.05,hi:n-e/2+.05,perPx:e/hh()}}var da=matchMedia("(prefers-reduced-motion: reduce)");function Ui(i,e=1.5,{arrive:t=!0}={}){_t||(tn(),Pt&&(Pt.userData.anim=-1,Pt=null),pa(i,e,t),i!=="tome"&&Ce&&Ce.tome.rest(),i==="shelf"&&Ce&&!Ce.books.meshes.length&&Fe?Si('<h2>Your shelves are empty</h2><div class="meta">Add the first book and it will stand here, or bring your library over from Goodreads or StoryGraph.</div><div class="acts"><button type="button" data-act="add">Add a book</button><button type="button" class="quiet" data-act="import">Import</button></div>'):i==="shelf"&&Ce&&gS())}function pa(i,e,t){da.matches&&(e=Math.min(e,.35)),Ft==="house"&&!ft&&yS(),(i==="house"||Ft==="house")&&(e=Math.max(e,da.matches?.35:1.9)),Ft=i,ue.vx=0,Ag(i);let n=ba(i);n.fov=Bo(i),ft={t:0,dur:e,flat:da.matches||i==="house",from:{pos:ue.pos.clone(),dir:xa(),dist:ue.dist,fov:Et.fov},to:n,arrive:t?i:null},ue.yaw=0,ue.pitch=0,ue.vyaw=0,ue.vpitch=0,Mi()}function mS(i){i!==Ft||!Fe||_t||!gt("card").hidden||document.querySelector("dialog[open]")||(i==="desk"?Mh():i==="hearth"?bf():i==="tome"?vS():_h(i)&&xS())}var sg="tomestead.shelfhint";function gS(){let i=0;try{i=Number(localStorage.getItem(sg))||0}catch{}if(!(i>=3)){try{localStorage.setItem(sg,String(i+1))}catch{}bS("Tap a spine to pull it out \xB7 tap it again to read it",4200,1400)}}var rg=0;function bS(i,e,t=0){setTimeout(()=>{let n=gt("hint");n.textContent=i,n.classList.add("show"),clearTimeout(rg),rg=setTimeout(()=>n.classList.remove("show"),e)},t)}var Cg="tomestead.tour.v1",Pg=()=>{try{return localStorage.getItem(Cg)==="1"}catch{return!0}},Ig=()=>{try{localStorage.setItem(Cg,"1")}catch{}};function xS(){if(Fe){if(!Qe.books.length)return _S();Pg()||Vo(0)}}function _S(){Si(`<div class="eyebrow">Welcome</div><h2>This is your reading room</h2>
    <div class="meta">Every book you\u2019ve read, are reading or want to read gets its own spine on the bookcase. Start with one book, or bring your whole library over.</div>
    <div class="acts"><button type="button" data-act="add">Add your first book</button><button type="button" class="quiet" data-act="import">Import from Goodreads or StoryGraph</button><button type="button" class="quiet" data-act="tour">Show me around</button></div>`,"welcome")}var Bd=[["Getting around","Tap a place (Shelf, Desk, Fireside or Tome) on the room or along the bottom to walk over. Drag to look around. Step inside stands you in the room; Whole room takes you back out to the dollhouse."],["Your bookcase","Tap a spine and it slides out a little. Tap it again and it comes down to the desk and opens. Drag to slide along the shelves; the magnifier finds any book."],["Desk, fire and tome","The desk keeps a reading timer. The fireside holds your streak, calendar, goals and year in books, and your trophies stand on the mantel. Wake the tome for what to read next."],["Everything else","Your reading goals stay at the top. + Add is up there too, and the \u2022\u2022\u2022 menu has imports, backups, tags, Customize the room (paintings, the bookcase, trinkets and the desk) and Send feedback."]];function Vo(i){let[e,t]=Bd[i],n=i===Bd.length-1;Si(`<div class="eyebrow">A quick tour \xB7 ${i+1} of ${Bd.length}</div><h2>${e}</h2><div class="meta">${t}</div>
    <div class="acts">${n?'<button type="button" data-act="tour-done">Got it</button>':`<button type="button" data-act="tour-next" data-i="${i+1}">Next</button><button type="button" class="quiet" data-act="tour-done">Skip</button>`}</div>`,"tour")}function vS(){Si(`<div class="eyebrow">The magic tome</div><h2>What should I read next?</h2>
    <div class="meta">The tome reads the books you rate highest and suggests a few you haven\u2019t logged.</div>
    <div class="acts"><button type="button" data-act="wake">Wake the tome</button></div>`,"tome")}var or=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;function xa(){let i=ue.dir.clone(),e=new P().crossVectors(i,new P(0,1,0)).normalize();return i.applyAxisAngle(e,ue.pitch).applyAxisAngle(new P(0,1,0),ue.yaw),i}function Dg(i){if(ft){ft.t+=i/ft.dur;let n=or(Math.min(1,ft.t));if(ue.pos.lerpVectors(ft.from.pos,ft.to.pos,n),ue.pos.y+=Math.sin(n*Math.PI)*.08,ue.dir.copy(ft.from.dir).lerp(ft.to.dir,n).normalize(),ue.dist=Ht.lerp(ft.from.dist,ft.to.dist,n),ft.flat&&(ue.pos.y-=Math.sin(n*Math.PI)*.08),ft.from.fov&&ft.to.fov&&uh(Ht.lerp(ft.from.fov,ft.to.fov,n)),ft.t>=1){let s=ft.arrive;ft.to.fov&&uh(ft.to.fov),ft=null,s&&mS(s)}}else if(!vn&&(ue.yaw+=ue.vyaw,ue.pitch+=ue.vpitch,ue.vyaw*=.9,ue.vpitch*=.9,Math.abs(ue.vyaw)<1e-5&&(ue.vyaw=0),Math.abs(ue.vpitch)<1e-5&&(ue.vpitch=0),ue.vx)){let n=Ft==="shelf"?yh():null;ue.pos.x+=ue.vx*i*1e3,ue.vx*=Math.pow(.9,i*60),(!n||ue.pos.x<=n.lo||ue.pos.x>=n.hi)&&(n&&(ue.pos.x=Ht.clamp(ue.pos.x,n.lo,n.hi)),ue.vx=0),Math.abs(ue.vx)<2e-6&&(ue.vx=0)}let e=Ft==="house"&&!ft,t=e?.55:vh()?.7:.5;if(ue.yaw=Ht.clamp(ue.yaw,-t,t),ue.pitch=Ht.clamp(ue.pitch,e?-.12:-.3,e?.22:.3),e){let n=ue.pos.clone().addScaledVector(ue.dir,ue.dist),s=ue.pos.clone().sub(n).applyAxisAngle(ag,-ue.yaw);s.applyAxisAngle(new P().crossVectors(s,ag).normalize(),ue.pitch),Et.position.copy(n).add(s),Et.lookAt(n)}else Et.position.copy(ue.pos),Et.lookAt(ue.pos.clone().addScaledVector(xa(),ue.dist));MS()}var ag=new P(0,1,0);function uh(i){Math.abs(Et.fov-i)>.001&&(Et.fov=i,Et.updateProjectionMatrix())}function yS(){ue.pos.copy(Et.position),ue.dir.copy(Et.getWorldDirection(new P)),ue.yaw=0,ue.pitch=0,ue.vyaw=0,ue.vpitch=0}var lf=[],Lg=[],og=!1;function MS(){let i=Et.position,e=Math.max(0,Math.abs(i.x)-3.1),t=Math.max(0,i.y-3.1,-i.y),n=Math.max(0,Math.abs(i.z)-2.8),s=Math.hypot(e,t,n),r=s>.02,a=r?Ht.clamp(s*.5,.05,3):.05,o=30+s*2;if((Math.abs(Et.near-a)>.01||Math.abs(Et.far-o)>.5)&&(Et.near=a,Et.far=o,Et.updateProjectionMatrix()),r!==og){og=r;for(let c of lf)c.visible=!r;for(let c of Lg)c.visible=r;It.shadowMap.needsUpdate=!0}}var vn=null,cg=new vo,lg=new de;Oi.addEventListener("pointerdown",i=>{vn={x:i.clientX,y:i.clientY,x0:i.clientX,y0:i.clientY,t:i.timeStamp,moved:0,trail:[[i.timeStamp,i.clientX]]},ue.vx=0,ft&&ft.pan&&(ft=null),Oi.setPointerCapture(i.pointerId),Oi.classList.add("dragging"),yt()});Oi.addEventListener("pointermove",i=>{if(!vn)return;let e=i.clientX-vn.x,t=i.clientY-vn.y;if(vn.x=i.clientX,vn.y=i.clientY,vn.moved+=Math.abs(e)+Math.abs(t),vn.moved<6||_t)return;if(Ft==="shelf"&&!Cs){let s=yh();if(s){if(ft)return;vn.trail.push([i.timeStamp,i.clientX]),vn.trail.length>8&&vn.trail.shift(),ue.pos.x=Ht.clamp(ue.pos.x-e*s.perPx,s.lo,s.hi),yt();return}}let n=2.2/Math.max(innerWidth,innerHeight);ue.yaw+=e*n,ue.pitch+=t*n*.8,ue.vyaw=e*n*.6,ue.vpitch=t*n*.5,yt()});function SS(i){if(!vn)return;let e=vn;if(vn=null,Oi.classList.remove("dragging"),e.moved<8&&i.timeStamp-e.t<450){wS(i.clientX,i.clientY);return}if(Ft==="shelf"&&!_t&&!Cs&&!da.matches&&e.trail.length>1){let t=yh(),n=i.timeStamp,s=e.trail.filter(([r])=>n-r<110);if(t&&s.length>1){let[r,a]=s[0],[o,c]=s[s.length-1],l=(c-a)/Math.max(16,o-r);Math.abs(l)>.3&&(ue.vx=-l*t.perPx,yt(600))}}}Oi.addEventListener("pointerup",SS);Oi.addEventListener("pointercancel",()=>{vn=null,Oi.classList.remove("dragging")});function wS(i,e){if(_i||!Ce)return;if(_t){_t.phase==="out"||_t.phase==="open"?XS():!Fe&&_t.phase==="desk"&&Wo();return}if(Ft==="shelf"){if(Cs)return Uo();if(yi)return;let r=AS(i,e);if(r&&r===Pt)return cr(r.userData.book.id);if(r)return ma(fh(r));if(Pt)return As()}lg.set(i/innerWidth*2-1,-(e/innerHeight)*2+1),cg.setFromCamera(lg,Et);let t=cg.intersectObjects(mt.children,!0),n=r=>r.book?"shelf":r.tome?"tome":r.deskBook?"desk":r.trophy?"hearth":r.station||null,s=t.find(r=>n(r.object.userData));if(s){let r=n(s.object.userData),a=t.find(c=>{let l=c.object.userData;return(l.book||l.tome||l.deskBook)&&n(l)===r&&c.distance<s.distance+.8});if(Ft!==r)return Ui(r);if(a&&a.object.userData.book)return ma(fh(a.object));let o=t.find(c=>c.object.userData.trophy&&c.distance<s.distance+.8);if(o)return $S(o.object.userData.trophy);if(r==="tome")return jg();if(r==="desk")return Mh();if(r==="hearth"&&Fe)return bf()}Pt&&As(),tn()}var Hi=0,Cs=!1,dh="",Bi=()=>Ce?Ce.books.all:[],Ng=i=>{let e=Bi()[i];return e&&e.page===Ce.books.page&&Ce.books.byId.get(e.b.id)||null},fh=i=>Bi().findIndex(e=>e.b.id===i.userData.book.id),ES=new an({color:"#ffcf7a",side:un,transparent:!0,opacity:0,depthWrite:!1,blending:Jn});function Fg(i){if(!i.userData.glow){let e=new bt(i.geometry,ES.clone());e.scale.set(1+.007/i.userData.it.t,1+.007/i.userData.it.h,1+.004/i.userData.it.d),e.castShadow=e.receiveShadow=!1,e.renderOrder=2,i.add(e),i.userData.glow=e}return i.userData.glow}function ma(i,{focus:e=!0}={}){let t=Bi();if(!t.length||i<0)return!1;if(i=Math.min(t.length-1,i),t[i].page!==Ce.books.page)return hf(t[i].page,i),!0;Hi=i;let n=Ng(i);return n?(Pt!==n&&(Pt&&(Pt.userData.anim=-1),Pt=n,n.userData.anim=0,Fg(n),Hg(n.userData.book)),e&&RS(n),yt(900),!0):!1}var yi=null;function hf(i,e){if(yi){yi.page=i,yi.then=e;return}ue.vx=0,Pt&&(Pt.userData.anim=-1,Pt=null),Ce.books.meshes.forEach((t,n)=>{t.userData.leave=-n*.004}),yi={page:i,then:e,t:0},yt(1500)}function TS(){let{page:i,then:e}=yi;yi=null,Ce.books.showPage(i),vf(),It.shadowMap.needsUpdate=!0,Ce.books.meshes.forEach((s,r)=>{s.userData.enter=-r*.006});let t=Bi();if(Hi=e>=0?Math.min(t.length-1,e):Math.max(0,t.findIndex(s=>s.page===i)),yt(1600),Mi(),Ft!=="shelf")return;let n=ba("shelf");ue.yaw=0,ue.pitch=0,ft={t:0,dur:.7,flat:!0,from:{pos:ue.pos.clone(),dir:xa(),dist:ue.dist},to:n},e>=0&&ma(Hi,{focus:!1})}var Kd=i=>{let e=i.clone().project(Et);return[(e.x+1)/2*innerWidth,(1-e.y)/2*innerHeight,e]};function AS(i,e){let t=null,n=Math.max(30,innerWidth/16);for(let s of Ce.books.meshes){let r=s.userData.it.h/2,[a,o]=Kd(s.userData.home.clone().add(new P(0,r,0))),[,c]=Kd(s.userData.home.clone().add(new P(0,-r,0)));if(e<o-24||e>c+24)continue;let l=Math.abs(i-a);l<n&&(n=l,t=s)}return t}function RS(i){let[,,e]=Kd(i.userData.home);if(Math.abs(e.x)<.7&&e.y>-.75&&e.y<.8)return;let t=xa(),n=Math.max(.5,i.userData.home.clone().sub(ue.pos).dot(t)),s=Math.tan(Ht.degToRad(Et.fov)/2),r=s*Et.aspect,o=new P().crossVectors(t,new P(0,1,0)).normalize().multiplyScalar(Math.abs(e.x)>=.7?e.x*r*n*.8:0).add(new P(0,e.y<=-.75||e.y>=.8?(e.y-.25)*s*n:0,0)),c=ue.pos.clone().add(o),l=Ft==="shelf"?yh():null;l&&(c.x=Ht.clamp(c.x,l.lo,l.hi)),ue.dir.copy(t),ue.yaw=0,ue.pitch=0,ft={t:0,dur:.45,flat:!0,pan:!0,from:{pos:ue.pos.clone(),dir:t.clone(),dist:ue.dist},to:{pos:c,dir:t.clone(),dist:ue.dist}}}var Ug=i=>i.status||"read",kg='<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="m15.5 15.5 5 5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',ki=document.createElement("div");ki.className="shelf-tools";ki.hidden=!0;ki.innerHTML=`<button type="button" class="st-find" aria-label="Find a book">${kg}</button>
  <span class="st-case"><button type="button" data-case="-1" aria-label="Previous bookcase">\u2039</button><span class="st-n"></span><button type="button" data-case="1" aria-label="Next bookcase">\u203A</button></span>`;gt("card").parentElement.appendChild(ki);function Mi(){let i=qo&&Ft==="shelf"&&!!Ce&&Ce.books.meshes.length>0&&!_t&&!Cs;if(ki.hidden=!i,!i)return;let e=Ce.books.pages,t=ki.querySelector(".st-case");t.hidden=e<2,e>1&&(ki.querySelector(".st-n").textContent=`Bookcase ${Ce.books.page+1} of ${e}`,ki.querySelector('[data-case="-1"]').disabled=Ce.books.page===0,ki.querySelector('[data-case="1"]').disabled=Ce.books.page===e-1)}ki.addEventListener("click",i=>{if(_t)return;if(i.target.closest(".st-find")){Og();return}let e=i.target.closest("[data-case]");if(e&&Ce&&!yi){let t=Ce.books.page+Number(e.dataset.case);t>=0&&t<Ce.books.pages&&(tn(),hf(t,-1))}yt()});var zd=i=>String(i||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function CS(i){let e=zd(i).split(/\s+/).filter(Boolean);if(!e.length)return[];let t=new Map(Bi().map((s,r)=>[s.b.id,r])),n=[];for(let s of Qe.books){let r=zd([s.title,s.author,s.series,s.genre,...Array.isArray(s.tags)?s.tags:[]].join(" "));if(!e.every(c=>r.includes(c)))continue;let a=zd(s.title),o=(a.startsWith(e.join(" "))?0:a.includes(e[0])?1:2)+(t.has(s.id)?0:.5);n.push({b:s,i:t.has(s.id)?t.get(s.id):-1,score:o})}return n.sort((s,r)=>s.score-r.score||String(s.b.title).localeCompare(String(r.b.title))).slice(0,7)}function Og(){Cs=!0,ue.vx=0,Si(`<form class="sf" role="search" onsubmit="return false">
      <span class="sf-icon">${kg}</span>
      <input type="search" id="rm-find" placeholder="Title, author, series or tag" autocomplete="off" enterkeyhint="go" aria-label="Find a book" value="${Nt(dh)}">
      <button type="button" class="sf-cancel" data-find-cancel>Cancel</button>
    </form>
    <ul class="sf-list" id="rm-find-list" role="listbox"></ul>`,"search"),Mi();let i=gt("find");i.addEventListener("input",()=>{dh=i.value,hg()}),i.addEventListener("keydown",e=>{if(e.key==="Enter"){let t=gt("find-list").querySelector("[data-hit]");t&&t.click()}e.key==="Escape"&&Uo()}),hg(),setTimeout(()=>i.focus(),30)}function hg(){let i=CS(dh);gt("find-list").innerHTML=dh.trim()?i.length?i.map(e=>`<li><button type="button" data-hit="${e.i}" data-id="${Nt(e.b.id)}" role="option">
        <span class="sf-t">${Nt(e.b.title)}</span><span class="sf-s">${Nt([e.b.author,e.i<0?"Set aside \xB7 opens the book":pf[Ug(e.b)]+(Ce.books.pages>1?` \xB7 bookcase ${Bi()[e.i].page+1}`:"")].filter(Boolean).join(" \xB7 "))}</span></button></li>`).join(""):'<li class="sf-empty">No book on your shelves matches that.</li>':'<li class="sf-empty">Type to find any book on your shelves.</li>'}function Uo(i){if(Cs=!1,document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),tn(),i!=null&&i>=0){let e=Bi()[i];if(e.page!==Ce.books.page){hf(e.page,i);return}Hi=i;let t=ba("shelf");ft={t:0,dur:.8,flat:!0,from:{pos:ue.pos.clone(),dir:xa(),dist:ue.dist},to:t},ma(i,{focus:!1})}}gt("card-body").addEventListener("click",i=>{if(i.target.closest("[data-find-cancel]")){Uo();return}let e=i.target.closest("[data-hit]");if(e){let n=Number(e.dataset.hit);if(n<0){Uo(),cr(e.dataset.id);return}Uo(n);return}let t=i.target.closest("[data-act]");if(t&&t.dataset.act==="putback"){Wo();return}if(t&&Fe){let n=t.dataset.id,s=t.dataset.act;s==="progress"?Fe.openProgress(n):s==="open"?cr(n):s==="add"?Fe.addBook():s==="goals"?Fe.openGoals():s==="year"?Fe.openYear():s==="calendar"?Fe.openCalendar():s==="timer-start"?(Fe.startTimer(n),ga||Mh()):s==="settle"?(tn(),Fe.settle(n)):s==="life"?(tn(),Fe.openLife()):s==="timer-stop"?(tn(),Fe.stopTimer()):s==="start"?(tn(),Fe.startBook(n)):s==="import"?(tn(),Fe.openImport()):s==="tour"?Vo(0):s==="tour-next"?Vo(Number(t.dataset.i)):s==="tour-done"?(Ig(),tn()):s==="wake"&&(tn(),jg())}});var Pt=null;function As(){Pt&&(Pt.userData.anim=-1,Pt=null),tn()}function Bg(i,e){let{home:t,homeRot:n}=i.userData;i.position.copy(t),i.position.z+=e*.075,i.position.y+=e*.012,i.rotation.set(n.x+e*.12,n.y+e*.04,n.z*(1-e))}function zg(i){let{home:e,homeRot:t}=i.userData;return{pos:e.clone().add(new P(0,.012,.075)),q:new rn().setFromEuler(new On(t.x+.12,t.y+.04,0))}}function PS(i){let e=!1;for(let t of Ce.books.meshes){if(t.userData.fly)continue;if(t.userData.leave!==void 0||t.userData.enter!==void 0){let a=t.userData.leave!==void 0,o=a?"leave":"enter";t.userData[o]+=i*(a?5:3.2);let c=or(Ht.clamp(t.userData[o],0,1));t.position.copy(t.userData.home),t.rotation.copy(t.userData.homeRot),t.position.z-=(a?c:1-c)*.32,!a&&t.userData.enter>=1?(delete t.userData.enter,t!==Pt&&t.position.copy(t.userData.home)):(!a||t.userData.leave<1)&&(e=!0);continue}if(t.userData.anim===void 0)continue;let s=t===Pt;t.userData.p=Ht.clamp((t.userData.p||0)+(s?i:-i)*4,0,1);let r=or(t.userData.p);Bg(t,r),t.userData.glow&&(t.userData.glow.material.opacity=.22*r),!s&&t.userData.p===0?(delete t.userData.anim,t.position.copy(t.userData.home),t.rotation.copy(t.userData.homeRot)):s&&t.userData.p===1||(e=!0)}return e&&(It.shadowMap.needsUpdate=!0),e}var IS=new P(-2.57,.758,-.66),_t=null,DS={t:.032,h:.24,d:.16},ug=new rn().setFromEuler(new On(0,-.16,Math.PI/2,"YXZ"));function uf(i){return{pos:IS.clone().add(new P(0,i.t/2+.001,0)).add(new P(0,0,-i.d/2).applyQuaternion(ug)),q:ug.clone()}}var LS=(i,e,t,n)=>new P().copy(i).multiplyScalar((1-n)*(1-n)).addScaledVector(e,2*(1-n)*n).addScaledVector(t,n*n);function dg(i,e){let{home:t,homeRot:n}=i.m.userData,s=i.carry.root,r=new rn().setFromEuler(n),a=t.clone().add(new P(0,.03,.3)),o=uf(i.it),c=a.clone().lerp(o.pos,.5).add(new P(0,.3,.35)),l=.24;if(e<l){let h=or(e/l);s.position.lerpVectors(i.p0,a,h),s.quaternion.slerpQuaternions(i.q0,r,h)}else{let h=or((e-l)/(1-l));s.position.copy(LS(a,c,o.pos,h)),s.quaternion.slerpQuaternions(r,o.q,h)}}function NS(i,e){let t=e?e.userData.it:DS,{t:n,h:s,d:r}=t,a=Math.min(.0035,n*.14),o=s-.006,c=r-.005,[l,h]=bh(i),u=Je({color:l,roughness:.7}),d=Je({color:"#e7dabb",roughness:.95}),f=Je({map:xt(US(i,r/s),{repeat:!1}),roughness:.55}),g=b=>{let y=xt(BS(i,b,c/o),{repeat:!1});return Je({map:y,roughness:.95,emissive:"#ffffff",emissiveMap:y,emissiveIntensity:.3})},x=new wt;x.userData.dyn=!0,mt.add(x);let m=(b,y,L,C,D,k)=>{let F=new bt(b,y);return F.castShadow=!0,F.receiveShadow=!0,F.position.set(C,D,k),L.add(F),F},p=r/2-c/2-5e-4;m(new Vt(a,s,r),u,x,-n/2+a/2,0,0),m(new Vt(n/2-a,o,c),d,x,(-n/2+a)/2,0,p),m(new zt(c-.004,o-.004).rotateY(Math.PI/2),g("right"),x,4e-4,0,p);let _=b=>{let y=new zt(n/2,s),L=u;if(e&&e.material&&e.geometry.attributes.uv){let C=e.geometry.attributes.uv,D=C.getX(16),k=C.getX(17),F=C.getY(16),A=C.getY(18),z=(D+k)/2,[V,H]=b?[z,k]:[D,z];y.attributes.uv.array.set([V,F,H,F,V,A,H,A]),y.attributes.uv.needsUpdate=!0,L=e.material}return{g:y,mat:L}},M=_(!1);m(M.g,M.mat,x,-n/4,0,r/2+4e-4);let v=new wt;v.position.set(0,0,r/2),x.add(v),m(new Vt(a,s,r),u,v,n/2-a/2,0,-r/2),m(new Vt(n/2-a,o,c),d,v,(n/2-a)/2,0,p-r/2),m(new zt(r,s).rotateY(Math.PI/2),f,v,n/2+4e-4,0,-r/2),m(new zt(c-.004,o-.004).rotateY(-Math.PI/2),g("left"),v,-4e-4,0,p-r/2);let w=_(!0);m(w.g,w.mat,v,n/4,0,4e-4),x.traverse(b=>{b.userData.dyn=!0});let T=!0;return Hg(i).then(b=>{if(!T||!b)return;let y=f.map;f.map=xt(FS(b,r/s),{repeat:!1}),f.needsUpdate=!0,y.dispose(),yt()}),{root:x,it:t,setOpen(b){v.rotation.y=-Math.PI*b},dispose(){T=!1,x.traverse(b=>{b.isMesh&&(b.geometry.dispose(),b.material!==(e&&e.material)&&(b.material.map&&b.material.map.dispose(),b.material.dispose()))}),mt.remove(x)}}}var Hd=new Map;function Hg(i){let e=i.id+"|"+JSON.stringify(i.art||null);return Hd.has(e)||Hd.set(e,(async()=>{let t=window.TomesteadCovers;if(!t||!t.coverSrc)return null;let n=null;try{n=await t.coverSrc(i,"L")}catch{}return n?new Promise(s=>{let r=new Image;/^(data|blob):/.test(n)||(r.crossOrigin="anonymous");let a=setTimeout(()=>s(null),8e3);r.onload=()=>{clearTimeout(a),s(r.naturalWidth>2?r:null)},r.onerror=()=>{clearTimeout(a),s(null)},r.src=n}):null})()),Hd.get(e)}var ph=512;function FS(i,e){let[t,n]=pn(ph,Math.round(ph/e)),s=Math.max(t.width/i.naturalWidth,t.height/i.naturalHeight),r=i.naturalWidth*s,a=i.naturalHeight*s;n.drawImage(i,(t.width-r)/2,(t.height-a)/2,r,a);let o=n.createLinearGradient(0,0,t.width*.08,0);return o.addColorStop(0,"rgba(0,0,0,.35)"),o.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=o,n.fillRect(0,0,t.width*.08,t.height),t}var Wn='"IM Fell English", Georgia, serif',Gd='-apple-system, "Segoe UI", Roboto, sans-serif';function Jd(i,e,t){let n=[];for(let s of String(e).split(/\n/)){let r="";for(let a of s.split(/\s+/).filter(Boolean)){let o=r?r+" "+a:a;i.measureText(o).width>t&&r?(n.push(r),r=a):r=o}n.push(r)}return n}function US(i,e){let[t,n]=pn(ph,Math.round(ph/e)),s=t.width,r=t.height,[a,o]=bh(i);n.fillStyle=a,n.fillRect(0,0,s,r);let c=n.createRadialGradient(s/2,r*.4,s*.1,s/2,r/2,s*.9);c.addColorStop(0,"rgba(255,255,255,.08)"),c.addColorStop(1,"rgba(0,0,0,.28)"),n.fillStyle=c,n.fillRect(0,0,s,r);let l="#d9b46a";n.strokeStyle=l,n.lineWidth=6,n.strokeRect(s*.09,s*.09,s*.82,r-s*.18),n.lineWidth=2,n.strokeRect(s*.12,s*.12,s*.76,r-s*.24),n.fillStyle=l,n.textAlign="center",n.textBaseline="middle",n.font=`${Math.round(s*.07)}px ${Wn}`,n.fillText("\u2726",s/2,r*.22);let h=s*.11;n.font=`${h}px ${Wn}`;let u=Jd(n,i.title||"",s*.66);for(;u.length>4&&h>s*.07;)h-=2,n.font=`${h}px ${Wn}`,u=Jd(n,i.title||"",s*.66);u=u.slice(0,5);let d=r*.44-(u.length-1)*h*.6;u.forEach((x,m)=>n.fillText(x,s/2,d+m*h*1.2));let f=d+u.length*h*1.2;n.fillRect(s*.4,f,s*.2,3),i.author&&(n.font=`italic ${Math.round(s*.058)}px ${Wn}`,n.fillText(i.author,s/2,f+s*.1));let g=n.createLinearGradient(0,0,s*.08,0);return g.addColorStop(0,"rgba(0,0,0,.35)"),g.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=g,n.fillRect(0,0,s*.08,r),t}var kS={read:"My review",reading:"Thoughts so far",want:"Why I want to read it",dnf:"Why I put it down"},OS={read:"You haven\u2019t written a review yet.",reading:"Nothing noted yet.",want:"No note yet.",dnf:"No note yet."};function BS(i,e,t){let s=Math.round(900/t),r=innerWidth<720,[a,o]=pn(900,s);o.fillStyle="#f3e9d2",o.fillRect(0,0,900,s);let c=e==="right"?o.createLinearGradient(0,0,900*.14,0):o.createLinearGradient(900,0,900*.86,0);c.addColorStop(0,"rgba(90,60,25,.28)"),c.addColorStop(1,"rgba(90,60,25,0)"),o.fillStyle=c,o.fillRect(0,0,900,s);let l=900*.1,h=900-l*2,u=s-900*.12,d=900*.12;o.textBaseline="alphabetic",o.textAlign="left";let f="#22170f",g="#5a4a3a",x="#9a6e22",m=(C,D,k,F,A=99)=>{o.font=D,o.fillStyle=k;let z=Jd(o,C,h);for(let V of z.slice(0,A)){if(d+F>u)return!1;d+=F,o.fillText(V,l,d)}return!0},p=C=>{d+=C},_=Ug(i),M=Number(i.rating)||0,v=()=>{m(i.title||"",`${900*.072}px ${Wn}`,f,900*.082,3),i.author&&(p(900*.01),m("by "+i.author,`italic ${900*.04}px ${Wn}`,g,900*.05,2)),_==="read"&&(p(900*.02),m(M?qg(M):"Not rated",`${900*.045}px ${Wn}`,x,900*.06,1));let C=_==="reading"?mf(i):null;p(900*.02),m([pf[_],C?C.text:""].filter(Boolean).join(" \xB7 "),`600 ${900*.03}px ${Gd}`,_==="reading"?"#8b2a1f":g,900*.045,1);let D=[i.finished?`Finished ${ff(i.finished)}`:"",i.series?`Series: ${i.series}${i.seriesNo?" #"+i.seriesNo:""}`:"",i.pages?`${i.pages} pages`:""].filter(Boolean);for(let k of D)m(k,`${900*.03}px ${Gd}`,g,900*.045,1)},w=()=>{p(900*.04),!(d+900*.06>u)&&(o.font=`${900*.04}px ${Wn}`,o.fillStyle=x,o.textAlign="center",o.fillText("\u2766",900/2,d+900*.03),o.textAlign="left",d+=900*.06)},T=C=>{p(900*.03),m(C,`${900*.045}px ${Wn}`,f,900*.06,1),p(900*.01)},b=()=>{T(kS[_]||"My review"),i.review?m(i.review,`${900*.036}px ${Wn}`,f,900*.052):m(OS[_]||"",`italic ${900*.034}px ${Wn}`,g,900*.05)},y=()=>{T("Favorite lines");let C=Array.isArray(i.quotes)?i.quotes:[];C.length||m("+ Save a line you loved",`${900*.03}px ${Gd}`,"#7a4a1a",900*.045,1);for(let D of C.slice(0,3))m("\u201C"+D.text+"\u201D",`italic ${900*.034}px ${Wn}`,f,900*.05,4),p(900*.015)},L=()=>{T("About the book");let C=i.about&&i.about.text;m(C||"No summary yet.",`${C?"":"italic "}${900*.032}px ${Wn}`,C?f:g,900*.048)};return e==="left"?(r||(v(),w()),L()):r?(v(),w(),b(),w(),y()):(b(),w(),y()),(!r||e==="left")&&(o.font=`italic ${900*.032}px ${Wn}`,o.fillStyle=g,o.textAlign="center",o.fillText(e==="left"?"i":"ii",900/2,s-900*.05)),a}function df(i){let e=innerWidth,t=innerHeight,n=e<720,s,r;n?(s=Math.min(e*.9,440),r=Math.min(s/.68,t*.72),s=r*.68):(r=Math.min(t*.78,660,e*.92/2/.68),s=r*.68);let a=n?e*.05+s/2:e/2,o=t*(n?.45:.47),{h:c,d:l}=i.it,h=l-.005,u=c-.006,d=l/2-h/2-5e-4,f=i.carry.root;f.updateMatrixWorld(!0);let g=new P(0,0,n?d:l/2).applyMatrix4(f.matrixWorld),x=new P(1,0,0).transformDirection(f.matrixWorld),m=new P(0,1,0).transformDirection(f.matrixWorld),p=.2,_=x.clone().multiplyScalar(-Math.cos(p)).addScaledVector(m,Math.sin(p)).normalize(),M=Math.tan(Ht.degToRad(Et.fov)/2),v=Math.max(u/r,h/(s*1.08))*t/(2*M),w=new P(0,1,0).addScaledVector(_,-_.y).normalize(),T=new P().crossVectors(_,w).normalize(),b=2*v*M/t;return{pos:g.clone().addScaledVector(T,-(a-e/2)*b).addScaledVector(w,(o-t/2)*b).clone().addScaledVector(_,-v),dir:_,dist:v}}function Gg(i,e){da.matches&&(e=Math.min(e,.35)),ue.yaw=0,ue.pitch=0,ue.vyaw=0,ue.vpitch=0,ft={t:0,dur:e,flat:!0,from:{pos:ue.pos.clone(),dir:xa(),dist:ue.dist},to:i}}var zS=1.45,HS=.8,GS=1,VS=.65,WS=1.45,ko=i=>da.matches?Math.min(i,.4):i;function cr(i){if(!Ce)return;if(_t){_t.phase==="back"&&(_t.pending=i);return}let e=Qe.books.find(r=>r.id===i);if(!e)return;tn(),ue.vx=0;let t=Ce.books.byId.get(i)||null;Pt&&Pt!==t&&(Pt.userData.anim=-1),Pt=null;let n=NS(e,t),s={id:i,b:e,m:t,it:n.it,carry:n,from:Ft,phase:"out",t:0,dur:ko(zS),camGo:!1,zoomGo:!1,p0:null,q0:null,pending:null};if(t)delete t.userData.anim,t.userData.p=0,t.userData.glow&&(t.userData.glow.material.opacity=0),n.root.position.copy(t.position),n.root.quaternion.copy(t.quaternion),s.p0=t.position.clone(),s.q0=t.quaternion.clone(),t.visible=!1,Hi=Math.max(0,fh(t));else{let r=uf(s.it);n.root.position.copy(r.pos),n.root.quaternion.copy(r.q),n.root.visible=!1}_t=s,Ce.desk.openBook.visible=!1,Ce.tome&&Ce.tome.rest(),Mi(),yt(4e3)}function qS(i){let e=_t;if(!(!e||e.phase==="desk")){if(e.t+=i,e.phase==="out"){let t=Math.min(1,e.t/e.dur);!e.camGo&&t>=.12&&(e.camGo=!0,pa("desk",e.dur*.92,!1)),e.m&&dg(e,t),t>=1&&e.camGo&&!ft&&(e.carry.root.visible=!0,e.phase="open",e.t=0)}else if(e.phase==="open"){let t=Math.min(1,e.t/ko(HS));e.carry.setOpen(or(t)),!e.zoomGo&&t>=.3&&(e.zoomGo=!0,Gg(df(e),GS)),t>=1&&e.zoomGo&&!ft&&Vg()}else if(e.phase==="close"){let t=Math.min(1,Math.max(0,(e.t-ko(.3))/ko(VS)));e.carry.setOpen(1-or(t)),t>=1&&!ft&&jS()}else if(e.phase==="back"){let t=Math.min(1,e.t/e.dur);e.m&&dg(e,1-t),t>=1&&KS()}It.shadowMap.needsUpdate=!0,yt(300)}}function XS(){let i=_t;if(!i||i.phase!=="out"&&i.phase!=="open")return;let e=uf(i.it);i.carry.root.position.copy(e.pos),i.carry.root.quaternion.copy(e.q),i.carry.root.visible=!0,i.carry.setOpen(1),Ft="desk",document.querySelectorAll(".stations button").forEach(n=>n.setAttribute("aria-pressed",String(n.dataset.go==="desk")));let t=df(i);ft=null,ue.pos.copy(t.pos),ue.dir.copy(t.dir),ue.dist=t.dist,ue.yaw=0,ue.pitch=0,i.camGo=i.zoomGo=!0,It.shadowMap.needsUpdate=!0,Vg()}function Vg(){let i=_t;if(i.phase="desk",It.shadowMap.needsUpdate=!0,yt(),Fe&&Fe.openOnDesk){Fe.openOnDesk(i.id,{onClosed:()=>{_t===i&&Wo()}})===!1&&Wo();return}YS(i.b)}function Wo(){let i=_t;!i||i.phase!=="desk"||(us==="book"&&tn(),i.phase="close",i.t=0,Gg(ba("desk"),.9),yt(2500))}function jS(){let i=_t;if(i.phase="back",i.t=0,i.dur=ko(WS),i.m){let t=i.from==="shelf"?zg(i.m):{pos:i.m.userData.home.clone(),q:new rn().setFromEuler(i.m.userData.homeRot)};i.p0=t.pos,i.q0=t.q,Hi=Math.max(0,fh(i.m))}else i.carry.root.visible=!1;let e=i.from||vi();pa(e,1.4,!i.pending&&(e==="desk"||e==="hearth"||e==="tome")),yt(2e3)}function KS(){let i=_t;_t=null,i.carry.dispose(),Ce.desk.openBook.visible=!0;let e=i.m;e&&(e.visible=!0,i.from==="shelf"&&Ft==="shelf"?(Pt=e,e.userData.anim=0,e.userData.p=1,Fg(e).material.opacity=.22,Bg(e,1)):(e.position.copy(e.userData.home),e.rotation.copy(e.userData.homeRot))),It.shadowMap.needsUpdate=!0,Mi(),yt(),i.pending&&setTimeout(()=>cr(i.pending),60)}function JS(){let i=_t;if(!i)return;let e=Ce.books.byId.get(i.id)||null;if(i.m=e,!!e&&(e.visible=!1,i.phase==="back")){let t=i.from==="shelf"?zg(e):{pos:e.userData.home.clone(),q:new rn().setFromEuler(e.userData.homeRot)};i.p0=t.pos,i.q0=t.q}}function Wg(){let i=_t;i&&(_t=null,i.carry.dispose(),Ce&&(Ce.desk.openBook.visible=!0),i.m&&(i.m.visible=!0,i.m.position.copy(i.m.userData.home),i.m.rotation.copy(i.m.userData.homeRot)))}var Nt=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function ff(i){try{return new Date(i+"T12:00:00").toLocaleDateString(void 0,{month:"long",day:"numeric",year:"numeric"})}catch{return i}}var pf={read:"Read",reading:"Reading now",want:"To read",dnf:"Set aside"},qg=i=>{let e=Math.round((Number(i)||0)*2)/2,t=Math.floor(e),n=e-t?1:0;return"\u2605".repeat(t)+(n?"\xBD":"")+"\u2606".repeat(5-t-n)};function mf(i){let e=Number(i.pages)||0,t=Number(i.progress)||0;return t?i.format==="ebook"||i.format==="audio"||!e?{pct:Math.min(100,t),text:`${Math.round(t)}%`}:{pct:Math.min(100,t/e*100),text:`Page ${t} of ${e}`}:null}function gf(){return Qe.sample?'<div class="note">These are sample books. Open this page on the phone where you use Tomestead to see your own shelf here.</div>':""}function YS(i){let e=Number(i.rating)||0,t=i.status==="reading"?mf(i):null,n=[pf[i.status||"read"],i.pages?`${i.pages} pages`:"",i.format==="audio"&&i.hours?`${i.hours} h audiobook`:"",i.finished?`Finished ${ff(i.finished)}`:""].filter(Boolean).join(" \xB7 ");Si(`<h2>${Nt(i.title)}</h2>${i.author?`<div class="by">${Nt(i.author)}</div>`:""}
    ${e&&(i.status||"read")==="read"?`<div class="stars">${qg(e)}</div>`:""}
    <div class="meta">${Nt(n)}</div>
    ${t?`<div class="bar"><i style="width:${t.pct}%"></i></div><div class="meta">${Nt(t.text)}</div>`:""}
    <div class="note">In the app, the book opens here on the desk to your review.</div>${gf()}
    <div class="acts"><button type="button" data-act="putback">Put it back</button></div>`,"book")}function $S(i){let e=(Qe.trophies||{})[i]||{},t=Number(e.goal)||0;Si(`<div class="eyebrow">On the mantel</div><h2>${Nt(i)} reading goal</h2>
    <div class="meta">${t?`You set out to read ${t} ${t===1?"book":"books"} and did it${e.at?` (${Nt(ff(e.at))})`:""}.`:"Goal reached."}</div>`,"trophy")}function Mh(){let i=Qe.books.filter(n=>n.status==="reading"),e=Fe&&Fe.timer?Fe.timer():null,t=n=>{let s=mf(n),r=e&&e.id===n.id,a=Fe?r?`<div class="acts"><button type="button" class="timer-on" data-act="timer-stop" data-id="${Nt(n.id)}"><span class="rec"></span><span data-since="${e.start}">0:00</span> \xB7 Stop</button>${Fe.settle?`<button type="button" class="quiet" data-act="settle" data-id="${Nt(n.id)}">Settle in</button>`:""}<button type="button" class="quiet" data-act="open" data-id="${Nt(n.id)}">Open the book</button></div>`:`<div class="acts"><button type="button" data-act="timer-start" data-id="${Nt(n.id)}">${e?"Switch timer here":"Start reading"}</button><button type="button" class="quiet" data-act="progress" data-id="${Nt(n.id)}">Update progress</button><button type="button" class="quiet" data-act="open" data-id="${Nt(n.id)}">Open</button></div>`:"";return`<li${r?' class="timing"':""}><b>${Nt(n.title)}</b>${n.author?` \xB7 <i>${Nt(n.author)}</i>`:""}${s?`<div class="bar"><i style="width:${s.pct}%"></i></div><span class="meta">${Nt(s.text)}</span>`:""}${a}</li>`};if(Fe)return Si(`<div class="eyebrow">On the desk</div><h2>${i.length?"Reading now":"Nothing open yet"}</h2>
      ${i.length?`<ul>${i.map(t).join("")}</ul><div class="meta desk-tip">${e?"When you stop, tap Stop and tell it where you got to.":"Start reading dims the room, starts a timer and lights the fire. Stop it to log your time and page."}</div>`:ZS()}`,"desk");Si(`<div class="eyebrow">On the desk</div><h2>${i.length?"Reading now":"Nothing open yet"}</h2>
    ${i.length?`<ul>${i.map(t).join("")}</ul>`:'<div class="meta">Start a book and it will lie open here.</div>'}
    <div class="note">In the app, the desk has a reading timer: start it when you sit down, stop it to log your time and page.</div>${gf()}`,"desk")}function ZS(){let i=Xg(Qe.books.filter(t=>t.status==="want")).slice(0,3);if(!i.length)return'<div class="meta">Start a book and it will lie open here.</div><div class="acts"><button type="button" data-act="add">Add a book</button></div>';let e=Qe.books.filter(t=>t.status==="want").length;return`<div class="meta">Pick one from your to-read pile${e>3?` (${e} waiting)`:""} and it will lie open here.</div>
    <ul>${i.map(t=>`<li><b>${Nt(t.title)}</b>${t.author?` \xB7 <i>${Nt(t.author)}</i>`:""}${t.upNext?' <span class="upnext">Up next</span>':""}
      <div class="acts"><button type="button" data-act="start" data-id="${Nt(t.id)}">Start reading</button><button type="button" class="quiet" data-act="open" data-id="${Nt(t.id)}">Open</button></div></li>`).join("")}</ul>
    <div class="acts"><button type="button" class="quiet" data-act="add">Add a different book</button></div>`}function Xg(i){return[...i].sort((e,t)=>!e.upNext-!t.upNext||(Number(e.upNext)||0)-(Number(t.upNext)||0)||(Number(t.addedAt)||0)-(Number(e.addedAt)||0))}function jg(){if(Ce.tome.wake(),Fe){setTimeout(()=>Fe.openRecs(),650);return}let i=Qe.books.filter(e=>e.status==="want").slice(0,4);Si(`<div class="eyebrow">The tome stirs\u2026</div><h2>What to read next</h2>
    ${i.length?`<div class="meta">Waiting on your to-read pile:</div><ul>${i.map(e=>`<li><b>${Nt(e.title)}</b>${e.author?` \xB7 <i>${Nt(e.author)}</i>`:""}</li>`).join("")}</ul>`:'<div class="meta">Your to-read pile is empty.</div>'}
    <div class="note">In the app, this is where "What to read next" would open, with picks from Open Library based on the books you rate highest.</div>${gf()}`)}function bf(){let i=Fe&&Fe.streak?Fe.streak():null,e=i?i.cur?`<div class="streak"><span class="flame" aria-hidden="true"></span><b>${i.cur}</b> ${i.cur===1?"day":"days"} in a row${i.readToday?"":" \xB7 read today to keep it going"}</div>`:`<div class="meta">${i.best?`Your longest streak is ${i.best} ${i.best===1?"day":"days"}. Read today to start a new one.`:"Read today to start a streak."}</div>`:"";Si(`<div class="eyebrow">By the fire</div><h2>Goals, streaks and trophies</h2>
    ${e}
    <div class="meta">Your streak, goals and year in books live by the fire. Trophies you earn stand on the mantel.</div>
    <div class="acts"><button type="button" data-act="calendar">Reading calendar</button><button type="button" class="quiet" data-act="goals">Reading goals</button><button type="button" class="quiet" data-act="year">Year in review</button>${Fe&&Fe.openLife?'<button type="button" class="quiet" data-act="life">Your reading life</button>':""}</div>`,"hearth")}var us="",Oo=null;function Si(i,e=""){if(us=e,gt("card-body").innerHTML=i,gt("card").hidden=!1,gt("card").classList.toggle("searchcard",e==="search"),e!=="search"&&(Cs=!1),Mi(),clearInterval(Oo),Oo=null,gt("card-body").querySelector("[data-since]")){let t=()=>gt("card-body").querySelectorAll("[data-since]").forEach(n=>{n.textContent=QS(Date.now()-Number(n.dataset.since))});t(),Oo=setInterval(t,1e3)}}function tn(){gt("card").hidden=!0,us="",Cs=!1,clearInterval(Oo),Oo=null,Mi()}function QS(i){let e=Math.max(0,Math.floor(i/1e3)),t=Math.floor(e/3600),n=Math.floor(e%3600/60),s=r=>String(r).padStart(2,"0");return t?`${t}:${s(n)}:${s(e%60)}`:`${n}:${s(e%60)}`}gt("card").querySelector(".card-x").addEventListener("click",()=>{if(us==="tour"&&Ig(),_t){Wo();return}us!=="search"&&As(),tn()});document.querySelectorAll(".stations button").forEach(i=>i.addEventListener("click",()=>{As(),Ui(i.dataset.go==="room"?vi():i.dataset.go),yt()}));gt("light")&&gt("light").addEventListener("click",()=>{on=on==="day"?"night":"day",Ce.applyLook(),yt()});addEventListener("keydown",i=>{if(!qo||_t||document.querySelector("dialog[open]")||/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement&&document.activeElement.tagName||""))return;let e=[vi(),"shelf","desk","hearth","tome"];if(Ft==="shelf"&&(i.key==="ArrowRight"||i.key==="ArrowLeft")){ma(Hi+(i.key==="ArrowRight"?1:-1)),yt();return}if(Ft==="shelf"&&i.key==="Enter"&&Pt){i.preventDefault(),cr(Pt.userData.book.id);return}if(Ft==="shelf"&&(i.key==="/"||i.key==="f"&&(i.metaKey||i.ctrlKey))){i.preventDefault(),Og();return}(i.key==="ArrowRight"||i.key==="ArrowLeft")&&Ui(e[(Math.max(0,e.indexOf(_h(Ft)?vi():Ft))+(i.key==="ArrowRight"?1:4))%5]),i.key==="Escape"&&(As(),tn()),yt()});var xf=Oi.parentElement,Kg=[["shelf","Shelf",[0,2.3,-2.45]],["desk","Desk",[-2.55,1.15,-.6]],["hearth","Fireside",[-2.72,1.5,1.6]],["tome","Tome",[2.25,1.55,.1]]],lr=document.createElement("div");lr.className="pins";lr.hidden=!0;lr.innerHTML=Kg.map(([i,e])=>`<button type="button" class="pin" data-pin="${i}"><span class="pin-label">${e}</span><span class="pin-dot" aria-hidden="true"></span></button>`).join("");xf.appendChild(lr);lr.addEventListener("click",i=>{let e=i.target.closest("[data-pin]");e&&(Ui(e.dataset.pin),yt())});var xi=document.createElement("button");xi.type="button";xi.className="view-swap";xi.hidden=!0;xf.appendChild(xi);xi.addEventListener("click",()=>{Tg(vi()==="house"?"room":"house"),Ui(vi()),yt()});var Rs=document.createElement("section");Rs.className="now-card";Rs.hidden=!0;Rs.setAttribute("aria-label","Reading now");xf.appendChild(Rs);Rs.addEventListener("click",i=>{let e=i.target.closest("[data-now]");if(!e||!Fe)return;let t=e.dataset.id;if(e.dataset.now==="settle"){let n=Fe.timer&&Fe.timer();n&&n.id===t&&Fe.settle?Fe.settle(t):Fe.startTimer(t)}else e.dataset.now==="open"&&cr(t);yt()});function Jg(){let i=Qe.books.filter(t=>t.status==="reading");if(!i.length)return null;let e=t=>Math.max(Number(t.progressAt)||0,Date.parse(t.started||"")||0,Number(t.addedAt)||0);return i.sort((t,n)=>e(n)-e(t))[0]}function ew(i){let e=Number(i.progress)||0;return i.format==="ebook"||i.format==="audio"||!i.pages?e?`${Math.round(e)}%`:"Just started":e?`p. ${e} of ${i.pages}`:"Just started"}function tw(i){let e=Number(i.progress)||0;return i.format==="ebook"||i.format==="audio"||!i.pages?Math.min(100,e):Math.min(100,Math.round(e/i.pages*100))}var fg="";function nw(i){let e=Fe&&Fe.timer?Fe.timer():null,t=i?[i.id,i.title,i.progress,i.pages,e&&e.id].join("|"):"";if(t===fg)return;if(fg=t,!i){Rs.innerHTML="";return}let n=e&&e.id===i.id;Rs.innerHTML=`<div class="now-row"><span class="now-spine" style="background:${Nt(i.color||"#7a2f2f")}" aria-hidden="true"></span>
    <div class="now-text"><p class="now-eyebrow">Reading now \xB7 ${Nt(ew(i))}</p><p class="now-title">${Nt(i.title)}</p>
    <div class="now-bar"><span style="width:${tw(i)}%"></span></div></div></div>
    <div class="now-acts"><button type="button" class="now-go" data-now="settle" data-id="${Nt(i.id)}">${n?"Back to reading":"Settle in and read"}</button>
    <button type="button" class="now-open" data-now="open" data-id="${Nt(i.id)}">Open</button></div>`}var Vd=new P;function iw(){let i=!!ft||_i||ga||!!_t||!Ce,e=Ft==="house"&&!i;lr.hidden=!e,e&&lr.querySelectorAll(".pin").forEach((s,r)=>{Vd.set(...Kg[r][2]).project(Et),s.style.transform=`translate(${(Vd.x+1)/2*innerWidth}px, ${(1-Vd.y)/2*innerHeight}px) translate(-50%, -100%)`});let t=!i&&_h(Ft)&&!!Fe;if(xi.hidden=!t,t){let s=Ft==="house",r=s?"Step inside":"Whole room";xi.dataset.k!==r&&(xi.dataset.k=r,xi.innerHTML=s?`<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M4 20V5.5L12 3l8 2.5V20M9 20v-6h6v6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>${r}`:`<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M3 9l9-6 9 6-9 6-9-6zM3 9v6l9 6 9-6V9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>${r}`,xi.setAttribute("aria-label",s?"Step inside the room":"See the whole room, like a dollhouse")),xi.style.top=`${Math.round(cf()+2)}px`}let n=e&&Fe&&gt("card").hidden?Jg():null;nw(n),Rs.hidden=!n}var Ce=null,mh=performance.now(),pg=0,Yg=0,Yd=0,Zt={busy:[],fpsMoving:0,frames:0,fpsNow:0,tick:performance.now()};function yt(i=1200){Yg=performance.now()+i}function gh(){if(Et.aspect=hh()/Ho(),ft||(Et.fov=Bo(Ft)),zo.r||zo.b?Et.setViewOffset(hh(),Ho(),0,0,innerWidth,innerHeight):Et.clearViewOffset(),Et.updateProjectionMatrix(),It.setSize(innerWidth,innerHeight,!1),Ce&&!ft){let i=_t&&_t.phase==="desk"?df(_t):ba(Ft);ue.pos.copy(i.pos),ue.dir.copy(i.dir),ue.dist=i.dist}yt()}addEventListener("resize",gh);var qo=!0;function $g(i){if(requestAnimationFrame($g),!qo)return;let e=!!ft||!!vn||!!yi||_t&&_t.phase!=="desk"||!!ue.vx||Math.abs(ue.vyaw)+Math.abs(ue.vpitch)>1e-4||i<Yg;if(!e&&i-pg<(ga?66:32))return;let t=Math.min(.1,(i-mh)/1e3);mh=i;let n=i/1e3;yi&&(yi.t+=t)>.34&&TS(),Dg(t),iw(),qS(t),PS(t)&&yt(300),Ce.desk.tick(n),Ce.tome.tick(n,t),Ce.furniture.tick(n),Ce.beam.material.uniforms.uTime.value=n,Ce.motes.material.uniforms.uTime.value=n;let r=performance.now();if(It.render(mt,Et),pg=i,Yd||(Yd=performance.now()),Zt.frames++,e){for(Zt.busy.push(i);Zt.busy.length&&i-Zt.busy[0]>1e3;)Zt.busy.shift();Zt.busy.length>20&&(Zt.fpsMoving=Zt.busy.length),sw(performance.now()-r)}i-Zt.tick>500&&(Zt.fpsNow=Math.round(Zt.frames*1e3/(i-Zt.tick)),Zt.frames=0,Zt.tick=i,gt("perf").hidden||_f())}var ih=0;function sw(){if(Zt.busy.length<20)return;let i=Zt.busy[Zt.busy.length-1]-Zt.busy[0];(Zt.busy.length-1)*1e3/Math.max(1,i)<40&&bi>1?++ih>45&&(bi=Math.max(1,bi-.25),It.setPixelRatio(bi),It.setSize(innerWidth,innerHeight,!1),Ce.tome.setDpr(bi),Ce.motes.material.uniforms.uSize.value=7*bi,ih=0):ih=Math.max(0,ih-1)}function _f(){let i=performance.getEntriesByType("resource").concat(performance.getEntriesByType("navigation")),e=o=>Math.round(i.filter(o).reduce((c,l)=>c+(l.transferSize||l.encodedBodySize||0),0)/1024),t=e(()=>!0),n=e(o=>/room\.js/.test(o.name)),s=It.info.render,r=Zt.fpsMoving,a=r>=50?"ok":r>=30?"meh":r?"bad":"";gt("perf").innerHTML=`<b>Speed check</b><br>
    First view: ${((Yd-gg)/1e3).toFixed(1)} s<br>
    Downloaded: ${t} KB <span style="opacity:.7">(3D code ${n} KB)</span><br>
    While moving: <span class="${a}">${r?r+" fps":"move to measure"}</span><br>
    Right now: ${Zt.fpsNow} fps${Zt.fpsNow<=31?" (resting)":""}<br>
    Draw calls: ${s.calls} \xB7 ${Math.round(s.triangles/1e3)}k triangles<br>
    Resolution: ${bi.toFixed(2)}\xD7 \xB7 Shadows: drawn once<br>
    Books on the shelf: ${Ce.books.meshes.length}${Ce.books.hidden?` (+${Ce.books.hidden} that don't fit)`:""}`}Fe&&ai.get("perf")!=="1"&&(gt("perf-btn").hidden=!0);gt("perf-btn").addEventListener("click",()=>{let i=gt("perf");i.hidden=!i.hidden,gt("perf-btn").setAttribute("aria-expanded",String(!i.hidden)),i.hidden||_f()});document.addEventListener("visibilitychange",()=>{mh=performance.now()});function vf(){let i=Ce.books.meshes.map(n=>n.userData.home.y);if(i.length){let n=(Math.min(...i)+Math.max(...i))/2;zi.shelf.t[1]=n,zi.shelf.p[1]=n+.2}let e=Ce.books.meshes.flatMap(n=>[n.userData.home.y-n.userData.it.h/2,n.userData.home.y+n.userData.it.h/2+.03]);Rg=e.length?[Math.min(...e),Math.max(...e)]:null;let t=Ce.books.meshes.flatMap(n=>[n.userData.home.x-n.userData.it.t/2,n.userData.home.x+n.userData.it.t/2]);Go=t.length?[Math.min(...t)-.07,Math.max(...t)+.07]:null}var Zg=()=>JSON.stringify([Qe.books.map(i=>[i.id,i.title,i.author,i.status,i.rating,i.pages,i.hours,i.format,i.color,i.addedAt,i.upNext]),Qe.theme.bookend,Qe.theme.bookends,Qe.theme.trinkets]),$d=()=>JSON.stringify(Qe.trophies||{}),Zd=()=>JSON.stringify(Qe.theme.tableItems||null),Qd="",ef="",tf="",nf="",rh="",ah="";function rw(){if(!Fe||!Ce)return;Qe=bg();let i=Zg();if(i!==Qd){Qd=i;let t=Pt&&Pt.userData.book.id;if(Pt=null,Ce.books.refill(),vf(),JS(),Hi=Math.min(Hi,Math.max(0,Bi().length-1)),It.shadowMap.needsUpdate=!0,t&&Ft==="shelf"&&!_t){let n=Bi().findIndex(s=>s.b.id===t);n>=0&&Bi()[n].page===Ce.books.page&&ma(n,{focus:!1})}Ft==="shelf"&&!Ce.books.meshes.length&&us!=="search"&&tn(),Mi()}$d()!==tf&&(tf=$d(),Ce.furniture.hearth.setTrophies(Qe.trophies)),Zd()!==nf&&(nf=Zd(),Ce.desk.dress()),Xd()!==ef&&(ef=Xd(),vg()),(Qe.theme.wood||"oak")!==rh&&(rh=Qe.theme.wood||"oak",Ce.setWood(rh)),(Qe.theme.vine||"roses")!==ah&&(ah=Qe.theme.vine||"roses",Ce.books.setVine(ah),yt()),!gt("card").hidden&&us==="desk"&&Mh(),!gt("card").hidden&&us==="hearth"&&bf(),!gt("card").hidden&&us==="welcome"&&Qe.books.length&&(tn(),Pg()||Vo(0));let e=sf(Qe.theme.light||"system");e!==on&&!ga?(on=e,Ce.applyLook()):(Qe.theme.nightWall||"green")!==mg&&Ce.applyLook(),mg=Qe.theme.nightWall||"green",yt()}var mg="",ga=!1;function aw(i){if(!(!Ce||i===ga)){if(ga=i,i)_t||(As(),tn(),pa("read",2.4,!1)),on!=="night"&&(on="night",Ce.applyLook(),It.shadowMap.needsUpdate=!0);else{let e=sf(Qe.theme.light||"system");e!==on&&(on=e,Ce.applyLook(),It.shadowMap.needsUpdate=!0),_t||pa(vi(),2,!1)}yt(2600)}}function ow(i){qo=!!i,qo?(mh=performance.now(),gh(),yt()):(Wg(),As(),tn()),Mi()}(async()=>{gh(),Ce=await VM(),Qd=Zg(),ef=Xd(),vg(),tf=$d(),Ce.furniture.hearth.setTrophies(Qe.trophies),nf=Zd(),rh=Qe.theme.wood||"oak",ah=Qe.theme.vine||"roses",vf();let i=ai.get("st")&&zi[ai.get("st")]?ai.get("st"):null,e=ba(i||"room");ue.pos.copy(e.pos),ue.dir.copy(e.dir),ue.dist=e.dist,i||(ue.pos.z=Math.min(2.6,ue.pos.z+.9),ue.pos.y+=.3,ue.pitch=-.12),i==="house"&&uh(Bo("house")),ai.get("yaw")&&(ue.yaw=Number(ai.get("yaw"))),Dg(0),It.compile(mt,Et),requestAnimationFrame($g);let t=(o,c=0,l=0)=>{o&&!_i&&(Wg(),As(),tn(),Pt&&(Pt.userData.anim=-1,Pt=null)),_i=!!o,zo=o?{r:c,b:l}:{r:0,b:0},document.documentElement.classList.toggle("rm-customizing",_i),gh(),Mi()},n=o=>{zi[o]&&(_i?(pa(o,1.1,!1),yt()):Ui(o))};window.TomesteadRoom={refresh:rw,setActive:ow,customize:t,show:n,settle:aw,go:o=>Ui(o),openBook:o=>cr(o),tour:()=>{Ui(vi(),1.5,{arrive:!1}),Vo(0),yt()},home:()=>vi(),setHome:o=>{Tg(o),Ui(vi()),yt()}},Fe&&Fe.ready&&Fe.ready(window.TomesteadRoom);let s=window.TomesteadQuotes,r=gt("veil"),a=Math.max(0,(s?gg+s.readMs:0)-performance.now());await new Promise(o=>{if(!a)return o();r.classList.add("ready"),gt("veil-sub").textContent="Tap to step inside";let c=setTimeout(o,a);r.addEventListener("pointerup",()=>{clearTimeout(c),o()},{once:!0})}),s&&s.seen(),requestAnimationFrame(()=>{r.classList.add("gone"),setTimeout(()=>r.remove(),1400),!i&&!_i?Ui(vi(),2.6):(Ft=i,Ag(i),i==="house"&&uh(Bo("house")),Mi()),setTimeout(()=>{gt("hint").classList.add("show"),setTimeout(()=>gt("hint").classList.remove("show"),4200)},i?300:2600),ai.get("perf")==="1"&&(gt("perf").hidden=!1,_f())})})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
