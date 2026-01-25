var ea=Object.defineProperty,pn=Object.getOwnPropertySymbols,ra=Object.prototype.hasOwnProperty,ta=Object.prototype.propertyIsEnumerable,bn=(o,e,r)=>e in o?ea(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,na=(o,e)=>{for(var r in e||(e={}))ra.call(e,r)&&bn(o,r,e[r]);if(pn)for(var r of pn(e))ta.call(e,r)&&bn(o,r,e[r]);return o};function Vt(o){return o==null||o===""||Array.isArray(o)&&o.length===0||!(o instanceof Date)&&typeof o=="object"&&Object.keys(o).length===0}function $t(o,e,r=new WeakSet){if(o===e)return!0;if(!o||!e||typeof o!="object"||typeof e!="object"||r.has(o)||r.has(e))return!1;r.add(o).add(e);let t=Array.isArray(o),n=Array.isArray(e),i,l,a;if(t&&n){if(l=o.length,l!=e.length)return!1;for(i=l;i--!==0;)if(!$t(o[i],e[i],r))return!1;return!0}if(t!=n)return!1;let c=o instanceof Date,d=e instanceof Date;if(c!=d)return!1;if(c&&d)return o.getTime()==e.getTime();let s=o instanceof RegExp,f=e instanceof RegExp;if(s!=f)return!1;if(s&&f)return o.toString()==e.toString();let p=Object.keys(o);if(l=p.length,l!==Object.keys(e).length)return!1;for(i=l;i--!==0;)if(!Object.prototype.hasOwnProperty.call(e,p[i]))return!1;for(i=l;i--!==0;)if(a=p[i],!$t(o[a],e[a],r))return!1;return!0}function ia(o,e){return $t(o,e)}function gi(o){return typeof o=="function"&&"call"in o&&"apply"in o}function ao(o){return!Vt(o)}function hn(o,e){if(!o||!e)return null;try{let r=o[e];if(ao(r))return r}catch{}if(Object.keys(o).length){if(gi(e))return e(o);if(e.indexOf(".")===-1)return o[e];{let r=e.split("."),t=o;for(let n=0,i=r.length;n<i;++n){if(t==null)return null;t=t[r[n]]}return t}}return null}function ry(o,e,r){return r?hn(o,r)===hn(e,r):ia(o,e)}function de(o,e=!0){return o instanceof Object&&o.constructor===Object&&(e||Object.keys(o).length!==0)}function pi(o={},e={}){let r=na({},o);return Object.keys(e).forEach(t=>{let n=t;de(e[n])&&n in o&&de(o[n])?r[n]=pi(o[n],e[n]):r[n]=e[n]}),r}function bi(...o){return o.reduce((e,r,t)=>t===0?r:pi(e,r),{})}function ty(o,e){let r=-1;if(ao(o))try{r=o.findLastIndex(e)}catch{r=o.lastIndexOf([...o].reverse().find(e))}return r}function se(o,...e){return gi(o)?o(...e):o}function ue(o,e=!0){return typeof o=="string"&&(e||o!=="")}function mn(o){return ue(o)?o.replace(/(-|_)/g,"").toLowerCase():o}function la(o,e="",r={}){let t=mn(e).split("."),n=t.shift();if(n){if(de(o)){let i=Object.keys(o).find(l=>mn(l)===n)||"";return la(se(o[i],r),t.join("."),r)}return}return se(o,r)}function ny(o,e=!0){return Array.isArray(o)&&(e||o.length!==0)}function aa(o){return ao(o)&&!isNaN(o)}function iy(o=""){return ao(o)&&o.length===1&&!!o.match(/\S| /)}function we(o,e){if(e){let r=e.test(o);return e.lastIndex=0,r}return!1}function ly(...o){return bi(...o)}function vn(o){return o&&o.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function ay(o){if(o&&/[\xC0-\xFF\u0100-\u017E]/.test(o)){let e={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let r in e)o=o.replace(e[r],r)}return o}function cy(o){return ue(o,!1)?o[0].toUpperCase()+o.slice(1):o}function hi(o){return ue(o)?o.replace(/(_)/g,"-").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase():o}function ca(){let o=new Map;return{on(e,r){let t=o.get(e);return t?t.push(r):t=[r],o.set(e,t),this},off(e,r){let t=o.get(e);return t&&t.splice(t.indexOf(r)>>>0,1),this},emit(e,r){let t=o.get(e);t&&t.forEach(n=>{n(r)})},clear(){o.clear()}}}function sa(...o){if(o){let e=[];for(let r=0;r<o.length;r++){let t=o[r];if(!t)continue;let n=typeof t;if(n==="string"||n==="number")e.push(t);else if(n==="object"){let i=Array.isArray(t)?[sa(...t)]:Object.entries(t).map(([l,a])=>a?l:void 0);e=i.length?e.concat(i.filter(l=>!!l)):e}}return e.join(" ").trim()}}function da(o,e){return o?o.classList?o.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(o.className):!1}function yn(o,e){if(o&&e){let r=t=>{da(o,t)||(o.classList?o.classList.add(t):o.className+=" "+t)};[e].flat().filter(Boolean).forEach(t=>t.split(" ").forEach(r))}}function ua(){return window.innerWidth-document.documentElement.offsetWidth}function sy(o){typeof o=="string"?yn(document.body,o||"p-overflow-hidden"):(o!=null&&o.variableName&&document.body.style.setProperty(o.variableName,ua()+"px"),yn(document.body,o?.className||"p-overflow-hidden"))}function kn(o,e){if(o&&e){let r=t=>{o.classList?o.classList.remove(t):o.className=o.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")};[e].flat().filter(Boolean).forEach(t=>t.split(" ").forEach(r))}}function dy(o){typeof o=="string"?kn(document.body,o||"p-overflow-hidden"):(o!=null&&o.variableName&&document.body.style.removeProperty(o.variableName),kn(document.body,o?.className||"p-overflow-hidden"))}function Bt(o){for(let e of document?.styleSheets)try{for(let r of e?.cssRules)for(let t of r?.style)if(o.test(t))return{name:t,value:r.style.getPropertyValue(t).trim()}}catch{}return null}function mi(o){let e={width:0,height:0};if(o){let[r,t]=[o.style.visibility,o.style.display],n=o.getBoundingClientRect();o.style.visibility="hidden",o.style.display="block",e.width=n.width||o.offsetWidth,e.height=n.height||o.offsetHeight,o.style.display=t,o.style.visibility=r}return e}function vi(){let o=window,e=document,r=e.documentElement,t=e.getElementsByTagName("body")[0],n=o.innerWidth||r.clientWidth||t.clientWidth,i=o.innerHeight||r.clientHeight||t.clientHeight;return{width:n,height:i}}function _t(o){return o?Math.abs(o.scrollLeft):0}function fa(){let o=document.documentElement;return(window.pageXOffset||_t(o))-(o.clientLeft||0)}function ga(){let o=document.documentElement;return(window.pageYOffset||o.scrollTop)-(o.clientTop||0)}function pa(o){return o?getComputedStyle(o).direction==="rtl":!1}function uy(o,e,r=!0){var t,n,i,l;if(o){let a=o.offsetParent?{width:o.offsetWidth,height:o.offsetHeight}:mi(o),c=a.height,d=a.width,s=e.offsetHeight,f=e.offsetWidth,p=e.getBoundingClientRect(),b=ga(),y=fa(),w=vi(),z,R,A="top";p.top+s+c>w.height?(z=p.top+b-c,A="bottom",z<0&&(z=b)):z=s+p.top+b,p.left+d>w.width?R=Math.max(0,p.left+y+f-d):R=p.left+y,pa(o)?o.style.insetInlineEnd=R+"px":o.style.insetInlineStart=R+"px",o.style.top=z+"px",o.style.transformOrigin=A,r&&(o.style.marginTop=A==="bottom"?`calc(${(n=(t=Bt(/-anchor-gutter$/))==null?void 0:t.value)!=null?n:"2px"} * -1)`:(l=(i=Bt(/-anchor-gutter$/))==null?void 0:i.value)!=null?l:"")}}function fy(o,e){o&&(typeof e=="string"?o.style.cssText=e:Object.entries(e||{}).forEach(([r,t])=>o.style[r]=t))}function gy(o,e){return o instanceof HTMLElement?o.offsetWidth:0}function py(o,e,r=!0,t=void 0){var n;if(o){let i=o.offsetParent?{width:o.offsetWidth,height:o.offsetHeight}:mi(o),l=e.offsetHeight,a=e.getBoundingClientRect(),c=vi(),d,s,f=t??"top";if(!t&&a.top+l+i.height>c.height?(d=-1*i.height,f="bottom",a.top+d<0&&(d=-1*a.top)):d=l,i.width>c.width?s=a.left*-1:a.left+i.width>c.width?s=(a.left+i.width-c.width)*-1:s=0,o.style.top=d+"px",o.style.insetInlineStart=s+"px",o.style.transformOrigin=f,r){let p=(n=Bt(/-anchor-gutter$/))==null?void 0:n.value;o.style.marginTop=f==="bottom"?`calc(${p??"2px"} * -1)`:p??""}}}function yi(o){if(o){let e=o.parentNode;return e&&e instanceof ShadowRoot&&e.host&&(e=e.host),e}return null}function by(o){return!!(o!==null&&typeof o<"u"&&o.nodeName&&yi(o))}function Le(o){return typeof Element<"u"?o instanceof Element:o!==null&&typeof o=="object"&&o.nodeType===1&&typeof o.nodeName=="string"}function ki(o,e={}){if(Le(o)){let r=(t,n)=>{var i,l;let a=(i=o?.$attrs)!=null&&i[t]?[(l=o?.$attrs)==null?void 0:l[t]]:[];return[n].flat().reduce((c,d)=>{if(d!=null){let s=typeof d;if(s==="string"||s==="number")c.push(d);else if(s==="object"){let f=Array.isArray(d)?r(t,d):Object.entries(d).map(([p,b])=>t==="style"&&(b||b===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${b}`:b?p:void 0);c=f.length?c.concat(f.filter(p=>!!p)):c}}return c},a)};Object.entries(e).forEach(([t,n])=>{if(n!=null){let i=t.match(/^on(.+)/);i?o.addEventListener(i[1].toLowerCase(),n):t==="p-bind"||t==="pBind"?ki(o,n):(n=t==="class"?[...new Set(r("class",n))].join(" ").trim():t==="style"?r("style",n).join(";").trim():n,(o.$attrs=o.$attrs||{})&&(o.$attrs[t]=n),o.setAttribute(t,n))}})}}function hy(o,e={},...r){{let t=document.createElement(o);return ki(t,e),t.append(...r),t}}function ba(o,e){return Le(o)?Array.from(o.querySelectorAll(e)):[]}function ha(o,e){return Le(o)?o.matches(e)?o:o.querySelector(e):null}function my(o,e){o&&document.activeElement!==o&&o.focus(e)}function vy(o,e){if(Le(o)){let r=o.getAttribute(e);return isNaN(r)?r==="true"||r==="false"?r==="true":r:+r}}function xi(o,e=""){let r=ba(o,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [href]:not([tabindex = "-1"]):not([style*="display:none"]):not([hidden])${e},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`),t=[];for(let n of r)getComputedStyle(n).display!="none"&&getComputedStyle(n).visibility!="hidden"&&t.push(n);return t}function yy(o,e){let r=xi(o,e);return r.length>0?r[0]:null}function ky(o){if(o){let e=o.offsetHeight,r=getComputedStyle(o);return e-=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),e}return 0}function xy(o,e){let r=xi(o,e);return r.length>0?r[r.length-1]:null}function wy(o){if(o){let e=o.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||_t(document.documentElement)||_t(document.body)||0)}}return{top:"auto",left:"auto"}}function Cy(o,e){return o?o.offsetHeight:0}function wi(o,e=[]){let r=yi(o);return r===null?e:wi(r,e.concat([r]))}function $y(o){let e=[];if(o){let r=wi(o),t=/(auto|scroll)/,n=i=>{try{let l=window.getComputedStyle(i,null);return t.test(l.getPropertyValue("overflow"))||t.test(l.getPropertyValue("overflowX"))||t.test(l.getPropertyValue("overflowY"))}catch{return!1}};for(let i of r){let l=i.nodeType===1&&i.dataset.scrollselectors;if(l){let a=l.split(",");for(let c of a){let d=ha(i,c);d&&n(d)&&e.push(d)}}i.nodeType!==9&&n(i)&&e.push(i)}}return e}function By(o){if(o){let e=o.offsetWidth,r=getComputedStyle(o);return e-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)+parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth),e}return 0}function _y(){return/(android)/i.test(navigator.userAgent)}function Sy(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Ry(o,e=""){return Le(o)?o.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`):!1}function zy(o){return!!(o&&o.offsetParent!=null)}function Ey(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Ty(o,e="",r){Le(o)&&r!==null&&r!==void 0&&o.setAttribute(e,r)}var vr={};function Oy(o="pui_id_"){return Object.hasOwn(vr,o)||(vr[o]=0),vr[o]++,`${o}${vr[o]}`}function ma(){let o=[],e=(l,a,c=999)=>{let d=n(l,a,c),s=d.value+(d.key===l?0:c)+1;return o.push({key:l,value:s}),s},r=l=>{o=o.filter(a=>a.value!==l)},t=(l,a)=>n(l).value,n=(l,a,c=0)=>[...o].reverse().find(d=>!0)||{key:l,value:c},i=l=>l&&parseInt(l.style.zIndex,10)||0;return{get:i,set:(l,a,c)=>{a&&(a.style.zIndex=String(e(l,!0,c)))},clear:l=>{l&&(r(i(l)),l.style.zIndex="")},getCurrent:l=>t(l)}}var Ay=ma(),va=Object.defineProperty,ya=Object.defineProperties,ka=Object.getOwnPropertyDescriptors,zr=Object.getOwnPropertySymbols,Ci=Object.prototype.hasOwnProperty,$i=Object.prototype.propertyIsEnumerable,xn=(o,e,r)=>e in o?va(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,Oo=(o,e)=>{for(var r in e||(e={}))Ci.call(e,r)&&xn(o,r,e[r]);if(zr)for(var r of zr(e))$i.call(e,r)&&xn(o,r,e[r]);return o},ct=(o,e)=>ya(o,ka(e)),Vo=(o,e)=>{var r={};for(var t in o)Ci.call(o,t)&&e.indexOf(t)<0&&(r[t]=o[t]);if(o!=null&&zr)for(var t of zr(o))e.indexOf(t)<0&&$i.call(o,t)&&(r[t]=o[t]);return r};function xa(...o){return bi(...o)}var wa=ca(),be=wa,rr=/{([^}]*)}/g,Bi=/(\d+\s+[\+\-\*\/]\s+\d+)/g,_i=/var\([^)]+\)/g;function wn(o){return ue(o)?o.replace(/[A-Z]/g,(e,r)=>r===0?e:"."+e.toLowerCase()).toLowerCase():o}function Ca(o){return de(o)&&o.hasOwnProperty("$value")&&o.hasOwnProperty("$type")?o.$value:o}function $a(o){return o.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function St(o="",e=""){return $a(`${ue(o,!1)&&ue(e,!1)?`${o}-`:o}${e}`)}function Si(o="",e=""){return`--${St(o,e)}`}function Ba(o=""){let e=(o.match(/{/g)||[]).length,r=(o.match(/}/g)||[]).length;return(e+r)%2!==0}function Ri(o,e="",r="",t=[],n){if(ue(o)){let i=o.trim();if(Ba(i))return;if(we(i,rr)){let l=i.replaceAll(rr,a=>{let c=a.replace(/{|}/g,"").split(".").filter(d=>!t.some(s=>we(d,s)));return`var(${Si(r,hi(c.join("-")))}${ao(n)?`, ${n}`:""})`});return we(l.replace(_i,"0"),Bi)?`calc(${l})`:l}return i}else if(aa(o))return o}function _a(o,e,r){ue(e,!1)&&o.push(`${e}:${r};`)}function ze(o,e){return o?`${o}{${e}}`:""}function zi(o,e){if(o.indexOf("dt(")===-1)return o;function r(l,a){let c=[],d=0,s="",f=null,p=0;for(;d<=l.length;){let b=l[d];if((b==='"'||b==="'"||b==="`")&&l[d-1]!=="\\"&&(f=f===b?null:b),!f&&(b==="("&&p++,b===")"&&p--,(b===","||d===l.length)&&p===0)){let y=s.trim();y.startsWith("dt(")?c.push(zi(y,a)):c.push(t(y)),s="",d++;continue}b!==void 0&&(s+=b),d++}return c}function t(l){let a=l[0];if((a==='"'||a==="'"||a==="`")&&l[l.length-1]===a)return l.slice(1,-1);let c=Number(l);return isNaN(c)?l:c}let n=[],i=[];for(let l=0;l<o.length;l++)if(o[l]==="d"&&o.slice(l,l+3)==="dt(")i.push(l),l+=2;else if(o[l]===")"&&i.length>0){let a=i.pop();i.length===0&&n.push([a,l])}if(!n.length)return o;for(let l=n.length-1;l>=0;l--){let[a,c]=n[l],d=o.slice(a+3,c),s=r(d,e),f=e(...s);o=o.slice(0,a)+f+o.slice(c+1)}return o}var Dy=o=>{var e;let r=tr.getTheme(),t=Rt(r,o,void 0,"variable"),n=(e=t?.match(/--[\w-]+/g))==null?void 0:e[0],i=Rt(r,o,void 0,"value");return{name:n,variable:t,value:i}},Ue=(...o)=>Rt(tr.getTheme(),...o),Rt=(o={},e,r,t)=>{if(e){let{variable:n,options:i}=tr.defaults||{},{prefix:l,transform:a}=o?.options||i||{},c=we(e,rr)?e:`{${e}}`;return t==="value"||Vt(t)&&a==="strict"?tr.getTokenValue(e):Ri(c,void 0,l,[n.excludedKeyRegex],r)}return""};function Fy(o,...e){if(o instanceof Array){let r=o.reduce((t,n,i)=>{var l;return t+n+((l=se(e[i],{dt:Ue}))!=null?l:"")},"");return zi(r,Ue)}return se(o,{dt:Ue})}function Sa(o,e={}){let r=tr.defaults.variable,{prefix:t=r.prefix,selector:n=r.selector,excludedKeyRegex:i=r.excludedKeyRegex}=e,l=[],a=[],c=[{node:o,path:t}];for(;c.length;){let{node:s,path:f}=c.pop();for(let p in s){let b=s[p],y=Ca(b),w=we(p,i)?St(f):St(f,hi(p));if(de(y))c.push({node:y,path:w});else{let z=Si(w),R=Ri(y,w,t,[i]);_a(a,z,R);let A=w;t&&A.startsWith(t+"-")&&(A=A.slice(t.length+1)),l.push(A.replace(/-/g,"."))}}}let d=a.join("");return{value:a,tokens:l,declarations:d,css:ze(n,d)}}var To={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(o){return{type:"class",selector:o,matched:this.pattern.test(o.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(o){return{type:"attr",selector:`:root${o},:host${o}`,matched:this.pattern.test(o.trim())}}},media:{pattern:/^@media (.*)$/,resolve(o){return{type:"media",selector:o,matched:this.pattern.test(o.trim())}}},system:{pattern:/^system$/,resolve(o){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(o.trim())}}},custom:{resolve(o){return{type:"custom",selector:o,matched:!0}}}},resolve(o){let e=Object.keys(this.rules).filter(r=>r!=="custom").map(r=>this.rules[r]);return[o].flat().map(r=>{var t;return(t=e.map(n=>n.resolve(r)).find(n=>n.matched))!=null?t:this.rules.custom.resolve(r)})}},_toVariables(o,e){return Sa(o,{prefix:e?.prefix})},getCommon({name:o="",theme:e={},params:r,set:t,defaults:n}){var i,l,a,c,d,s,f;let{preset:p,options:b}=e,y,w,z,R,A,W,T;if(ao(p)&&b.transform!=="strict"){let{primitive:N,semantic:U,extend:G}=p,D=U||{},{colorScheme:C}=D,I=Vo(D,["colorScheme"]),K=G||{},{colorScheme:_}=K,Y=Vo(K,["colorScheme"]),O=C||{},{dark:X}=O,H=Vo(O,["dark"]),V=_||{},{dark:Z}=V,Ro=Vo(V,["dark"]),Ho=ao(N)?this._toVariables({primitive:N},b):{},zo=ao(I)?this._toVariables({semantic:I},b):{},bo=ao(H)?this._toVariables({light:H},b):{},Me=ao(X)?this._toVariables({dark:X},b):{},br=ao(Y)?this._toVariables({semantic:Y},b):{},hr=ao(Ro)?this._toVariables({light:Ro},b):{},te=ao(Z)?this._toVariables({dark:Z},b):{},[_e,je]=[(i=Ho.declarations)!=null?i:"",Ho.tokens],[mr,pe]=[(l=zo.declarations)!=null?l:"",zo.tokens||[]],[dn,u]=[(a=bo.declarations)!=null?a:"",bo.tokens||[]],[g,h]=[(c=Me.declarations)!=null?c:"",Me.tokens||[]],[x,m]=[(d=br.declarations)!=null?d:"",br.tokens||[]],[v,S]=[(s=hr.declarations)!=null?s:"",hr.tokens||[]],[B,$]=[(f=te.declarations)!=null?f:"",te.tokens||[]];y=this.transformCSS(o,_e,"light","variable",b,t,n),w=je;let k=this.transformCSS(o,`${mr}${dn}`,"light","variable",b,t,n),P=this.transformCSS(o,`${g}`,"dark","variable",b,t,n);z=`${k}${P}`,R=[...new Set([...pe,...u,...h])];let E=this.transformCSS(o,`${x}${v}color-scheme:light`,"light","variable",b,t,n),F=this.transformCSS(o,`${B}color-scheme:dark`,"dark","variable",b,t,n);A=`${E}${F}`,W=[...new Set([...m,...S,...$])],T=se(p.css,{dt:Ue})}return{primitive:{css:y,tokens:w},semantic:{css:z,tokens:R},global:{css:A,tokens:W},style:T}},getPreset({name:o="",preset:e={},options:r,params:t,set:n,defaults:i,selector:l}){var a,c,d;let s,f,p;if(ao(e)&&r.transform!=="strict"){let b=o.replace("-directive",""),y=e,{colorScheme:w,extend:z,css:R}=y,A=Vo(y,["colorScheme","extend","css"]),W=z||{},{colorScheme:T}=W,N=Vo(W,["colorScheme"]),U=w||{},{dark:G}=U,D=Vo(U,["dark"]),C=T||{},{dark:I}=C,K=Vo(C,["dark"]),_=ao(A)?this._toVariables({[b]:Oo(Oo({},A),N)},r):{},Y=ao(D)?this._toVariables({[b]:Oo(Oo({},D),K)},r):{},O=ao(G)?this._toVariables({[b]:Oo(Oo({},G),I)},r):{},[X,H]=[(a=_.declarations)!=null?a:"",_.tokens||[]],[V,Z]=[(c=Y.declarations)!=null?c:"",Y.tokens||[]],[Ro,Ho]=[(d=O.declarations)!=null?d:"",O.tokens||[]],zo=this.transformCSS(b,`${X}${V}`,"light","variable",r,n,i,l),bo=this.transformCSS(b,Ro,"dark","variable",r,n,i,l);s=`${zo}${bo}`,f=[...new Set([...H,...Z,...Ho])],p=se(R,{dt:Ue})}return{css:s,tokens:f,style:p}},getPresetC({name:o="",theme:e={},params:r,set:t,defaults:n}){var i;let{preset:l,options:a}=e,c=(i=l?.components)==null?void 0:i[o];return this.getPreset({name:o,preset:c,options:a,params:r,set:t,defaults:n})},getPresetD({name:o="",theme:e={},params:r,set:t,defaults:n}){var i,l;let a=o.replace("-directive",""),{preset:c,options:d}=e,s=((i=c?.components)==null?void 0:i[a])||((l=c?.directives)==null?void 0:l[a]);return this.getPreset({name:a,preset:s,options:d,params:r,set:t,defaults:n})},applyDarkColorScheme(o){return!(o.darkModeSelector==="none"||o.darkModeSelector===!1)},getColorSchemeOption(o,e){var r;return this.applyDarkColorScheme(o)?this.regex.resolve(o.darkModeSelector===!0?e.options.darkModeSelector:(r=o.darkModeSelector)!=null?r:e.options.darkModeSelector):[]},getLayerOrder(o,e={},r,t){let{cssLayer:n}=e;return n?`@layer ${se(n.order||n.name||"primeui",r)}`:""},getCommonStyleSheet({name:o="",theme:e={},params:r,props:t={},set:n,defaults:i}){let l=this.getCommon({name:o,theme:e,params:r,set:n,defaults:i}),a=Object.entries(t).reduce((c,[d,s])=>c.push(`${d}="${s}"`)&&c,[]).join(" ");return Object.entries(l||{}).reduce((c,[d,s])=>{if(de(s)&&Object.hasOwn(s,"css")){let f=vn(s.css),p=`${d}-variables`;c.push(`<style type="text/css" data-primevue-style-id="${p}" ${a}>${f}</style>`)}return c},[]).join("")},getStyleSheet({name:o="",theme:e={},params:r,props:t={},set:n,defaults:i}){var l;let a={name:o,theme:e,params:r,set:n,defaults:i},c=(l=o.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:l.css,d=Object.entries(t).reduce((s,[f,p])=>s.push(`${f}="${p}"`)&&s,[]).join(" ");return c?`<style type="text/css" data-primevue-style-id="${o}-variables" ${d}>${vn(c)}</style>`:""},createTokens(o={},e,r="",t="",n={}){let i=function(a,c={},d=[]){if(d.includes(this.path))return console.warn(`Circular reference detected at ${this.path}`),{colorScheme:a,path:this.path,paths:c,value:void 0};d.push(this.path),c.name=this.path,c.binding||(c.binding={});let s=this.value;if(typeof this.value=="string"&&rr.test(this.value)){let f=this.value.trim().replace(rr,p=>{var b;let y=p.slice(1,-1),w=this.tokens[y];if(!w)return console.warn(`Token not found for path: ${y}`),"__UNRESOLVED__";let z=w.computed(a,c,d);return Array.isArray(z)&&z.length===2?`light-dark(${z[0].value},${z[1].value})`:(b=z?.value)!=null?b:"__UNRESOLVED__"});s=Bi.test(f.replace(_i,"0"))?`calc(${f})`:f}return Vt(c.binding)&&delete c.binding,d.pop(),{colorScheme:a,path:this.path,paths:c,value:s.includes("__UNRESOLVED__")?void 0:s}},l=(a,c,d)=>{Object.entries(a).forEach(([s,f])=>{let p=we(s,e.variable.excludedKeyRegex)?c:c?`${c}.${wn(s)}`:wn(s),b=d?`${d}.${s}`:s;de(f)?l(f,p,b):(n[p]||(n[p]={paths:[],computed:(y,w={},z=[])=>{if(n[p].paths.length===1)return n[p].paths[0].computed(n[p].paths[0].scheme,w.binding,z);if(y&&y!=="none")for(let R=0;R<n[p].paths.length;R++){let A=n[p].paths[R];if(A.scheme===y)return A.computed(y,w.binding,z)}return n[p].paths.map(R=>R.computed(R.scheme,w[R.scheme],z))}}),n[p].paths.push({path:b,value:f,scheme:b.includes("colorScheme.light")?"light":b.includes("colorScheme.dark")?"dark":"none",computed:i,tokens:n}))})};return l(o,r,t),n},getTokenValue(o,e,r){var t;let n=(a=>a.split(".").filter(c=>!we(c.toLowerCase(),r.variable.excludedKeyRegex)).join("."))(e),i=e.includes("colorScheme.light")?"light":e.includes("colorScheme.dark")?"dark":void 0,l=[(t=o[n])==null?void 0:t.computed(i)].flat().filter(a=>a);return l.length===1?l[0].value:l.reduce((a={},c)=>{let d=c,{colorScheme:s}=d,f=Vo(d,["colorScheme"]);return a[s]=f,a},void 0)},getSelectorRule(o,e,r,t){return r==="class"||r==="attr"?ze(ao(e)?`${o}${e},${o} ${e}`:o,t):ze(o,ze(e??":root,:host",t))},transformCSS(o,e,r,t,n={},i,l,a){if(ao(e)){let{cssLayer:c}=n;if(t!=="style"){let d=this.getColorSchemeOption(n,l);e=r==="dark"?d.reduce((s,{type:f,selector:p})=>(ao(p)&&(s+=p.includes("[CSS]")?p.replace("[CSS]",e):this.getSelectorRule(p,a,f,e)),s),""):ze(a??":root,:host",e)}if(c){let d={name:"primeui"};de(c)&&(d.name=se(c.name,{name:o,type:t})),ao(d.name)&&(e=ze(`@layer ${d.name}`,e),i?.layerNames(d.name))}return e}return""}},tr={defaults:{variable:{prefix:"p",selector:":root,:host",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(o={}){let{theme:e}=o;e&&(this._theme=ct(Oo({},e),{options:Oo(Oo({},this.defaults.options),e.options)}),this._tokens=To.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var o;return((o=this.theme)==null?void 0:o.preset)||{}},get options(){var o;return((o=this.theme)==null?void 0:o.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(o){this.update({theme:o}),be.emit("theme:change",o)},getPreset(){return this.preset},setPreset(o){this._theme=ct(Oo({},this.theme),{preset:o}),this._tokens=To.createTokens(o,this.defaults),this.clearLoadedStyleNames(),be.emit("preset:change",o),be.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(o){this._theme=ct(Oo({},this.theme),{options:o}),this.clearLoadedStyleNames(),be.emit("options:change",o),be.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(o){this._layerNames.add(o)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(o){return this._loadedStyleNames.has(o)},setLoadedStyleName(o){this._loadedStyleNames.add(o)},deleteLoadedStyleName(o){this._loadedStyleNames.delete(o)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(o){return To.getTokenValue(this.tokens,o,this.defaults)},getCommon(o="",e){return To.getCommon({name:o,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(o="",e){let r={name:o,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return To.getPresetC(r)},getDirective(o="",e){let r={name:o,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return To.getPresetD(r)},getCustomPreset(o="",e,r,t){let n={name:o,preset:e,options:this.options,selector:r,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return To.getPreset(n)},getLayerOrderCSS(o=""){return To.getLayerOrder(o,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(o="",e,r="style",t){return To.transformCSS(o,e,t,r,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(o="",e,r={}){return To.getCommonStyleSheet({name:o,theme:this.theme,params:e,props:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(o,e,r={}){return To.getStyleSheet({name:o,theme:this.theme,params:e,props:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(o){this._loadingStyles.add(o)},onStyleUpdated(o){this._loadingStyles.add(o)},onStyleLoaded(o,{name:e}){this._loadingStyles.size&&(this._loadingStyles.delete(e),be.emit(`theme:${e}:load`,o),!this._loadingStyles.size&&be.emit("theme:load"))}},Iy=(...o)=>xa(...o),Ra={transitionDuration:"{transition.duration}"},za={borderWidth:"0 0 1px 0",borderColor:"{content.border.color}"},Ea={color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",activeHoverColor:"{text.color}",padding:"1.125rem",fontWeight:"600",borderRadius:"0",borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",hoverBackground:"{content.background}",activeBackground:"{content.background}",activeHoverBackground:"{content.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",activeHoverColor:"{text.color}"},first:{topBorderRadius:"{content.border.radius}",borderWidth:"0"},last:{bottomBorderRadius:"{content.border.radius}",activeBottomBorderRadius:"0"}},Ta={borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",color:"{text.color}",padding:"0 1.125rem 1.125rem 1.125rem"},Oa={root:Ra,panel:za,header:Ea,content:Ta},Aa={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},Da={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},Fa={padding:"{list.padding}",gap:"{list.gap}"},Ia={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},Pa={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},La={width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Na={borderRadius:"{border.radius.sm}"},Ma={padding:"{list.option.padding}"},ja={light:{chip:{focusBackground:"{surface.200}",focusColor:"{surface.800}"},dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",focusColor:"{surface.0}"},dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}},Wa={root:Aa,overlay:Da,list:Fa,option:Ia,optionGroup:Pa,dropdown:La,chip:Na,emptyMessage:Ma,colorScheme:ja},Ha={width:"2rem",height:"2rem",fontSize:"1rem",background:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},Va={size:"1rem"},Ka={borderColor:"{content.background}",offset:"-0.75rem"},Ua={width:"3rem",height:"3rem",fontSize:"1.5rem",icon:{size:"1.5rem"},group:{offset:"-1rem"}},Ya={width:"4rem",height:"4rem",fontSize:"2rem",icon:{size:"2rem"},group:{offset:"-1.5rem"}},Ga={root:Ha,icon:Va,group:Ka,lg:Ua,xl:Ya},Xa={borderRadius:"{border.radius.md}",padding:"0 0.5rem",fontSize:"0.75rem",fontWeight:"700",minWidth:"1.5rem",height:"1.5rem"},qa={size:"0.5rem"},Ja={fontSize:"0.625rem",minWidth:"1.25rem",height:"1.25rem"},Za={fontSize:"0.875rem",minWidth:"1.75rem",height:"1.75rem"},Qa={fontSize:"1rem",minWidth:"2rem",height:"2rem"},oc={light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}},ec={root:Xa,dot:qa,sm:Ja,lg:Za,xl:Qa,colorScheme:oc},rc={borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},tc={transitionDuration:"0.2s",focusRing:{width:"1px",style:"solid",color:"{primary.color}",offset:"2px",shadow:"none"},disabledOpacity:"0.6",iconSize:"1rem",anchorGutter:"2px",primary:{50:"{emerald.50}",100:"{emerald.100}",200:"{emerald.200}",300:"{emerald.300}",400:"{emerald.400}",500:"{emerald.500}",600:"{emerald.600}",700:"{emerald.700}",800:"{emerald.800}",900:"{emerald.900}",950:"{emerald.950}"},formField:{paddingX:"0.75rem",paddingY:"0.5rem",sm:{fontSize:"0.875rem",paddingX:"0.625rem",paddingY:"0.375rem"},lg:{fontSize:"1.125rem",paddingX:"0.875rem",paddingY:"0.625rem"},borderRadius:"{border.radius.md}",focusRing:{width:"0",style:"none",color:"transparent",offset:"0",shadow:"none"},transitionDuration:"{transition.duration}"},list:{padding:"0.25rem 0.25rem",gap:"2px",header:{padding:"0.5rem 1rem 0.25rem 1rem"},option:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}"},optionGroup:{padding:"0.5rem 0.75rem",fontWeight:"600"}},content:{borderRadius:"{border.radius.md}"},mask:{transitionDuration:"0.3s"},navigation:{list:{padding:"0.25rem 0.25rem",gap:"2px"},item:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}",gap:"0.5rem"},submenuLabel:{padding:"0.5rem 0.75rem",fontWeight:"600"},submenuIcon:{size:"0.875rem"}},overlay:{select:{borderRadius:"{border.radius.md}",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},popover:{borderRadius:"{border.radius.md}",padding:"0.75rem",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},modal:{borderRadius:"{border.radius.xl}",padding:"1.25rem",shadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"},navigation:{shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"}},colorScheme:{light:{surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"},primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.600}",activeColor:"{primary.700}"},highlight:{background:"{primary.50}",focusBackground:"{primary.100}",color:"{primary.700}",focusColor:"{primary.800}"},mask:{background:"rgba(0,0,0,0.4)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.200}",filledBackground:"{surface.50}",filledHoverBackground:"{surface.50}",filledFocusBackground:"{surface.50}",borderColor:"{surface.300}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.400}",color:"{surface.700}",disabledColor:"{surface.500}",placeholderColor:"{surface.500}",invalidPlaceholderColor:"{red.600}",floatLabelColor:"{surface.500}",floatLabelFocusColor:"{primary.600}",floatLabelActiveColor:"{surface.500}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.700}",hoverColor:"{surface.800}",mutedColor:"{surface.500}",hoverMutedColor:"{surface.600}"},content:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.200}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.100}",activeBackground:"{surface.100}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}}},dark:{surface:{0:"#ffffff",50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"},primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledHoverBackground:"{surface.800}",filledFocusBackground:"{surface.800}",borderColor:"{surface.600}",hoverBorderColor:"{surface.500}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",invalidPlaceholderColor:"{red.400}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.400}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.300}"},content:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.800}",activeBackground:"{surface.800}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}}}}},nc={primitive:rc,semantic:tc},ic={borderRadius:"{content.border.radius}"},lc={root:ic},ac={padding:"1rem",background:"{content.background}",gap:"0.5rem",transitionDuration:"{transition.duration}"},cc={color:"{text.muted.color}",hoverColor:"{text.color}",borderRadius:"{content.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",hoverColor:"{navigation.item.icon.focus.color}"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},sc={color:"{navigation.item.icon.color}"},dc={root:ac,item:cc,separator:sc},uc={borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",gap:"0.5rem",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",iconOnlyWidth:"2.5rem",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}",iconOnlyWidth:"2rem"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}",iconOnlyWidth:"3rem"},label:{fontWeight:"500"},raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"},badgeSize:"1rem",transitionDuration:"{form.field.transition.duration}"},fc={light:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{surface.100}",hoverBorderColor:"{surface.200}",activeBorderColor:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}",focusRing:{color:"{surface.600}",shadow:"none"}},info:{background:"{sky.500}",hoverBackground:"{sky.600}",activeBackground:"{sky.700}",borderColor:"{sky.500}",hoverBorderColor:"{sky.600}",activeBorderColor:"{sky.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{sky.500}",shadow:"none"}},success:{background:"{green.500}",hoverBackground:"{green.600}",activeBackground:"{green.700}",borderColor:"{green.500}",hoverBorderColor:"{green.600}",activeBorderColor:"{green.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{green.500}",shadow:"none"}},warn:{background:"{orange.500}",hoverBackground:"{orange.600}",activeBackground:"{orange.700}",borderColor:"{orange.500}",hoverBorderColor:"{orange.600}",activeBorderColor:"{orange.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{orange.500}",shadow:"none"}},help:{background:"{purple.500}",hoverBackground:"{purple.600}",activeBackground:"{purple.700}",borderColor:"{purple.500}",hoverBorderColor:"{purple.600}",activeBorderColor:"{purple.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{purple.500}",shadow:"none"}},danger:{background:"{red.500}",hoverBackground:"{red.600}",activeBackground:"{red.700}",borderColor:"{red.500}",hoverBorderColor:"{red.600}",activeBorderColor:"{red.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{red.500}",shadow:"none"}},contrast:{background:"{surface.950}",hoverBackground:"{surface.900}",activeBackground:"{surface.800}",borderColor:"{surface.950}",hoverBorderColor:"{surface.900}",activeBorderColor:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}",activeColor:"{surface.0}",focusRing:{color:"{surface.950}",shadow:"none"}}},outlined:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",borderColor:"{primary.200}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",borderColor:"{green.200}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",borderColor:"{sky.200}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",borderColor:"{orange.200}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",borderColor:"{purple.200}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",borderColor:"{red.200}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.700}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.700}"}},text:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.700}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{surface.800}",hoverBorderColor:"{surface.700}",activeBorderColor:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}",focusRing:{color:"{surface.300}",shadow:"none"}},info:{background:"{sky.400}",hoverBackground:"{sky.300}",activeBackground:"{sky.200}",borderColor:"{sky.400}",hoverBorderColor:"{sky.300}",activeBorderColor:"{sky.200}",color:"{sky.950}",hoverColor:"{sky.950}",activeColor:"{sky.950}",focusRing:{color:"{sky.400}",shadow:"none"}},success:{background:"{green.400}",hoverBackground:"{green.300}",activeBackground:"{green.200}",borderColor:"{green.400}",hoverBorderColor:"{green.300}",activeBorderColor:"{green.200}",color:"{green.950}",hoverColor:"{green.950}",activeColor:"{green.950}",focusRing:{color:"{green.400}",shadow:"none"}},warn:{background:"{orange.400}",hoverBackground:"{orange.300}",activeBackground:"{orange.200}",borderColor:"{orange.400}",hoverBorderColor:"{orange.300}",activeBorderColor:"{orange.200}",color:"{orange.950}",hoverColor:"{orange.950}",activeColor:"{orange.950}",focusRing:{color:"{orange.400}",shadow:"none"}},help:{background:"{purple.400}",hoverBackground:"{purple.300}",activeBackground:"{purple.200}",borderColor:"{purple.400}",hoverBorderColor:"{purple.300}",activeBorderColor:"{purple.200}",color:"{purple.950}",hoverColor:"{purple.950}",activeColor:"{purple.950}",focusRing:{color:"{purple.400}",shadow:"none"}},danger:{background:"{red.400}",hoverBackground:"{red.300}",activeBackground:"{red.200}",borderColor:"{red.400}",hoverBorderColor:"{red.300}",activeBorderColor:"{red.200}",color:"{red.950}",hoverColor:"{red.950}",activeColor:"{red.950}",focusRing:{color:"{red.400}",shadow:"none"}},contrast:{background:"{surface.0}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{surface.0}",hoverBorderColor:"{surface.100}",activeBorderColor:"{surface.200}",color:"{surface.950}",hoverColor:"{surface.950}",activeColor:"{surface.950}",focusRing:{color:"{surface.0}",shadow:"none"}}},outlined:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",borderColor:"{primary.700}",color:"{primary.color}"},secondary:{hoverBackground:"rgba(255,255,255,0.04)",activeBackground:"rgba(255,255,255,0.16)",borderColor:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",borderColor:"{green.700}",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",borderColor:"{sky.700}",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",borderColor:"{orange.700}",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",borderColor:"{purple.700}",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",borderColor:"{red.700}",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.500}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.600}",color:"{surface.0}"}},text:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",color:"{primary.color}"},secondary:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}},gc={root:uc,colorScheme:fc},pc={background:"{content.background}",borderRadius:"{border.radius.xl}",color:"{content.color}",shadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"},bc={padding:"1.25rem",gap:"0.5rem"},hc={gap:"0.5rem"},mc={fontSize:"1.25rem",fontWeight:"500"},vc={color:"{text.muted.color}"},yc={root:pc,body:bc,caption:hc,title:mc,subtitle:vc},kc={transitionDuration:"{transition.duration}"},xc={gap:"0.25rem"},wc={padding:"1rem",gap:"0.5rem"},Cc={width:"2rem",height:"0.5rem",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},$c={light:{indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"}},dark:{indicator:{background:"{surface.700}",hoverBackground:"{surface.600}",activeBackground:"{primary.color}"}}},Bc={root:kc,content:xc,indicatorList:wc,indicator:Cc,colorScheme:$c},_c={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},Sc={width:"2.5rem",color:"{form.field.icon.color}"},Rc={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},zc={padding:"{list.padding}",gap:"{list.gap}",mobileIndent:"1rem"},Ec={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",icon:{color:"{list.option.icon.color}",focusColor:"{list.option.icon.focus.color}",size:"0.875rem"}},Tc={color:"{form.field.icon.color}"},Oc={root:_c,dropdown:Sc,overlay:Rc,list:zc,option:Ec,clearIcon:Tc},Ac={borderRadius:"{border.radius.sm}",width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},Dc={size:"0.875rem",color:"{form.field.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.75rem"},lg:{size:"1rem"}},Fc={root:Ac,icon:Dc},Ic={borderRadius:"16px",paddingX:"0.75rem",paddingY:"0.5rem",gap:"0.5rem",transitionDuration:"{transition.duration}"},Pc={width:"2rem",height:"2rem"},Lc={size:"1rem"},Nc={size:"1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"}},Mc={light:{root:{background:"{surface.100}",color:"{surface.800}"},icon:{color:"{surface.800}"},removeIcon:{color:"{surface.800}"}},dark:{root:{background:"{surface.800}",color:"{surface.0}"},icon:{color:"{surface.0}"},removeIcon:{color:"{surface.0}"}}},jc={root:Ic,image:Pc,icon:Lc,removeIcon:Nc,colorScheme:Mc},Wc={transitionDuration:"{transition.duration}"},Hc={width:"1.5rem",height:"1.5rem",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Vc={shadow:"{overlay.popover.shadow}",borderRadius:"{overlay.popover.borderRadius}"},Kc={light:{panel:{background:"{surface.800}",borderColor:"{surface.900}"},handle:{color:"{surface.0}"}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}"},handle:{color:"{surface.0}"}}},Uc={root:Wc,preview:Hc,panel:Vc,colorScheme:Kc},Yc={size:"2rem",color:"{overlay.modal.color}"},Gc={gap:"1rem"},Xc={icon:Yc,content:Gc},qc={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},Jc={padding:"{overlay.popover.padding}",gap:"1rem"},Zc={size:"1.5rem",color:"{overlay.popover.color}"},Qc={gap:"0.5rem",padding:"0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"},os={root:qc,content:Jc,icon:Zc,footer:Qc},es={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},rs={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},ts={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},ns={mobileIndent:"1rem"},is={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},ls={borderColor:"{content.border.color}"},as={root:es,list:rs,item:ts,submenu:ns,submenuIcon:is,separator:ls},cs=`
    li.p-autocomplete-option,
    div.p-cascadeselect-option-content,
    li.p-listbox-option,
    li.p-multiselect-option,
    li.p-select-option,
    li.p-listbox-option,
    div.p-tree-node-content,
    li.p-datatable-filter-constraint,
    .p-datatable .p-datatable-tbody > tr,
    .p-treetable .p-treetable-tbody > tr,
    div.p-menu-item-content,
    div.p-tieredmenu-item-content,
    div.p-contextmenu-item-content,
    div.p-menubar-item-content,
    div.p-megamenu-item-content,
    div.p-panelmenu-header-content,
    div.p-panelmenu-item-content,
    th.p-datatable-header-cell,
    th.p-treetable-header-cell,
    thead.p-datatable-thead > tr > th,
    .p-treetable thead.p-treetable-thead>tr>th {
        transition: none;
    }
`,ss={transitionDuration:"{transition.duration}"},ds={background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},us={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{datatable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},fs={fontWeight:"600"},gs={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},ps={borderColor:"{datatable.border.color}",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},bs={background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},hs={fontWeight:"600"},ms={background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},vs={color:"{primary.color}"},ys={width:"0.5rem"},ks={width:"1px",color:"{primary.color}"},xs={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},ws={size:"2rem"},Cs={hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},$s={inlineGap:"0.5rem",overlaySelect:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},overlayPopover:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}",gap:"0.5rem"},rule:{borderColor:"{content.border.color}"},constraintList:{padding:"{list.padding}",gap:"{list.gap}"},constraint:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",separator:{borderColor:"{content.border.color}"},padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"}},Bs={borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},_s={borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},Ss={light:{root:{borderColor:"{content.border.color}"},row:{stripedBackground:"{surface.50}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},row:{stripedBackground:"{surface.950}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},Rs=`
    .p-datatable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`,zs={root:ss,header:ds,headerCell:us,columnTitle:fs,row:gs,bodyCell:ps,footerCell:bs,columnFooter:hs,footer:ms,dropPoint:vs,columnResizer:ys,resizeIndicator:ks,sortIcon:xs,loadingIcon:ws,rowToggleButton:Cs,filter:$s,paginatorTop:Bs,paginatorBottom:_s,colorScheme:Ss,css:Rs},Es={borderColor:"transparent",borderWidth:"0",borderRadius:"0",padding:"0"},Ts={background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",borderRadius:"0"},Os={background:"{content.background}",color:"{content.color}",borderColor:"transparent",borderWidth:"0",padding:"0",borderRadius:"0"},As={background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"1px 0 0 0",padding:"0.75rem 1rem",borderRadius:"0"},Ds={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},Fs={borderColor:"{content.border.color}",borderWidth:"1px 0 0 0"},Is={root:Es,header:Ts,content:Os,footer:As,paginatorTop:Ds,paginatorBottom:Fs},Ps={transitionDuration:"{transition.duration}"},Ls={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}"},Ns={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",padding:"0 0 0.5rem 0"},Ms={gap:"0.5rem",fontWeight:"500"},js={width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Ws={color:"{form.field.icon.color}"},Hs={hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},Vs={hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},Ks={borderColor:"{content.border.color}",gap:"{overlay.popover.padding}"},Us={margin:"0.5rem 0 0 0"},Ys={padding:"0.25rem",fontWeight:"500",color:"{content.color}"},Gs={hoverBackground:"{content.hover.background}",selectedBackground:"{primary.color}",rangeSelectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{primary.contrast.color}",rangeSelectedColor:"{highlight.color}",width:"2rem",height:"2rem",borderRadius:"50%",padding:"0.25rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Xs={margin:"0.5rem 0 0 0"},qs={padding:"0.375rem",borderRadius:"{content.border.radius}"},Js={margin:"0.5rem 0 0 0"},Zs={padding:"0.375rem",borderRadius:"{content.border.radius}"},Qs={padding:"0.5rem 0 0 0",borderColor:"{content.border.color}"},od={padding:"0.5rem 0 0 0",borderColor:"{content.border.color}",gap:"0.5rem",buttonGap:"0.25rem"},ed={light:{dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"},today:{background:"{surface.200}",color:"{surface.900}"}},dark:{dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"},today:{background:"{surface.700}",color:"{surface.0}"}}},rd={root:Ps,panel:Ls,header:Ns,title:Ms,dropdown:js,inputIcon:Ws,selectMonth:Hs,selectYear:Vs,group:Ks,dayView:Us,weekDay:Ys,date:Gs,monthView:Xs,month:qs,yearView:Js,year:Zs,buttonbar:Qs,timePicker:od,colorScheme:ed},td={background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},nd={padding:"{overlay.modal.padding}",gap:"0.5rem"},id={fontSize:"1.25rem",fontWeight:"600"},ld={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},ad={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",gap:"0.5rem"},cd={root:td,header:nd,title:id,content:ld,footer:ad},sd={borderColor:"{content.border.color}"},dd={background:"{content.background}",color:"{text.color}"},ud={margin:"1rem 0",padding:"0 1rem",content:{padding:"0 0.5rem"}},fd={margin:"0 1rem",padding:"0.5rem 0",content:{padding:"0.5rem 0"}},gd={root:sd,content:dd,horizontal:ud,vertical:fd},pd={background:"rgba(255, 255, 255, 0.1)",borderColor:"rgba(255, 255, 255, 0.2)",padding:"0.5rem",borderRadius:"{border.radius.xl}"},bd={borderRadius:"{content.border.radius}",padding:"0.5rem",size:"3rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},hd={root:pd,item:bd},md={background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",shadow:"{overlay.modal.shadow}"},vd={padding:"{overlay.modal.padding}"},yd={fontSize:"1.5rem",fontWeight:"600"},kd={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},xd={padding:"{overlay.modal.padding}"},wd={root:md,header:vd,title:yd,content:kd,footer:xd},Cd={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}"},$d={color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},Bd={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}",padding:"{list.padding}"},_d={focusBackground:"{list.option.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},Sd={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},Rd={toolbar:Cd,toolbarItem:$d,overlay:Bd,overlayOption:_d,content:Sd},zd={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",padding:"0 1.125rem 1.125rem 1.125rem",transitionDuration:"{transition.duration}"},Ed={background:"{content.background}",hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",borderRadius:"{content.border.radius}",borderWidth:"1px",borderColor:"transparent",padding:"0.5rem 0.75rem",gap:"0.5rem",fontWeight:"600",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Td={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},Od={padding:"0"},Ad={root:zd,legend:Ed,toggleIcon:Td,content:Od},Dd={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},Fd={background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"unset",borderWidth:"0",borderRadius:"0",gap:"0.5rem"},Id={highlightBorderColor:"{primary.color}",padding:"0 1.125rem 1.125rem 1.125rem",gap:"1rem"},Pd={padding:"1rem",gap:"1rem",borderColor:"{content.border.color}",info:{gap:"0.5rem"}},Ld={gap:"0.5rem"},Nd={height:"0.25rem"},Md={gap:"0.5rem"},jd={root:Dd,header:Fd,content:Id,file:Pd,fileList:Ld,progressbar:Nd,basic:Md},Wd={color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",activeColor:"{form.field.float.label.active.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",positionY:"{form.field.padding.y}",fontWeight:"500",active:{fontSize:"0.75rem",fontWeight:"400"}},Hd={active:{top:"-1.25rem"}},Vd={input:{paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"},active:{top:"{form.field.padding.y}"}},Kd={borderRadius:"{border.radius.xs}",active:{background:"{form.field.background}",padding:"0 0.125rem"}},Ud={root:Wd,over:Hd,in:Vd,on:Kd},Yd={borderWidth:"1px",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},Gd={background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.100}",hoverColor:"{surface.0}",size:"3rem",gutter:"0.5rem",prev:{borderRadius:"50%"},next:{borderRadius:"50%"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Xd={size:"1.5rem"},qd={background:"{content.background}",padding:"1rem 0.25rem"},Jd={size:"2rem",borderRadius:"{content.border.radius}",gutter:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Zd={size:"1rem"},Qd={background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}",padding:"1rem"},ou={gap:"0.5rem",padding:"1rem"},eu={width:"1rem",height:"1rem",activeBackground:"{primary.color}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},ru={background:"rgba(0, 0, 0, 0.5)"},tu={background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.6)",activeBackground:"rgba(255, 255, 255, 0.9)"},nu={size:"3rem",gutter:"0.5rem",background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.50}",hoverColor:"{surface.0}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},iu={size:"1.5rem"},lu={light:{thumbnailNavButton:{hoverBackground:"{surface.100}",color:"{surface.600}",hoverColor:"{surface.700}"},indicatorButton:{background:"{surface.200}",hoverBackground:"{surface.300}"}},dark:{thumbnailNavButton:{hoverBackground:"{surface.700}",color:"{surface.400}",hoverColor:"{surface.0}"},indicatorButton:{background:"{surface.700}",hoverBackground:"{surface.600}"}}},au={root:Yd,navButton:Gd,navIcon:Xd,thumbnailsContent:qd,thumbnailNavButton:Jd,thumbnailNavButtonIcon:Zd,caption:Qd,indicatorList:ou,indicatorButton:eu,insetIndicatorList:ru,insetIndicatorButton:tu,closeButton:nu,closeButtonIcon:iu,colorScheme:lu},cu={color:"{form.field.icon.color}"},su={icon:cu},du={color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",top:"{form.field.padding.y}",fontSize:"0.75rem",fontWeight:"400"},uu={paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"},fu={root:du,input:uu},gu={transitionDuration:"{transition.duration}"},pu={icon:{size:"1.5rem"},mask:{background:"{mask.background}",color:"{mask.color}"}},bu={position:{left:"auto",right:"1rem",top:"1rem",bottom:"auto"},blur:"8px",background:"rgba(255,255,255,0.1)",borderColor:"rgba(255,255,255,0.2)",borderWidth:"1px",borderRadius:"30px",padding:".5rem",gap:"0.5rem"},hu={hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}",size:"3rem",iconSize:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},mu={root:gu,preview:pu,toolbar:bu,action:hu},vu={size:"15px",hoverSize:"30px",background:"rgba(255,255,255,0.3)",hoverBackground:"rgba(255,255,255,0.3)",borderColor:"unset",hoverBorderColor:"unset",borderWidth:"0",borderRadius:"50%",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"rgba(255,255,255,0.3)",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},yu={handle:vu},ku={padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",gap:"0.5rem"},xu={fontWeight:"500"},wu={size:"1rem"},Cu={light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}}},$u={root:ku,text:xu,icon:wu,colorScheme:Cu},Bu={padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{transition.duration}"},_u={hoverBackground:"{content.hover.background}",hoverColor:"{content.hover.color}"},Su={root:Bu,display:_u},Ru={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},zu={borderRadius:"{border.radius.sm}"},Eu={light:{chip:{focusBackground:"{surface.200}",color:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",color:"{surface.0}"}}},Tu={root:Ru,chip:zu,colorScheme:Eu},Ou={background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.icon.color}",borderRadius:"{form.field.border.radius}",padding:"0.5rem",minWidth:"2.5rem"},Au={addon:Ou},Du={transitionDuration:"{transition.duration}"},Fu={width:"2.5rem",borderRadius:"{form.field.border.radius}",verticalPadding:"{form.field.padding.y}"},Iu={light:{button:{background:"transparent",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.500}",activeColor:"{surface.600}"}},dark:{button:{background:"transparent",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.300}",activeColor:"{surface.200}"}}},Pu={root:Du,button:Fu,colorScheme:Iu},Lu={gap:"0.5rem"},Nu={width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"}},Mu={root:Lu,input:Nu},ju={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},Wu={root:ju},Hu={transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Vu={background:"{primary.color}"},Ku={background:"{content.border.color}"},Uu={color:"{text.muted.color}"},Yu={root:Hu,value:Vu,range:Ku,text:Uu},Gu={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",borderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",shadow:"{form.field.shadow}",borderRadius:"{form.field.border.radius}",transitionDuration:"{form.field.transition.duration}"},Xu={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},qu={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},Ju={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},Zu={color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},Qu={padding:"{list.option.padding}"},of={light:{option:{stripedBackground:"{surface.50}"}},dark:{option:{stripedBackground:"{surface.900}"}}},ef={root:Gu,list:Xu,option:qu,optionGroup:Ju,checkmark:Zu,emptyMessage:Qu,colorScheme:of},rf={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",verticalOrientation:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},horizontalOrientation:{padding:"0.5rem 0.75rem",gap:"0.5rem"},transitionDuration:"{transition.duration}"},tf={borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},nf={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},lf={padding:"0",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"{overlay.navigation.shadow}",gap:"0.5rem"},af={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},cf={padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},sf={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},df={borderColor:"{content.border.color}"},uf={borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},ff={root:rf,baseItem:tf,item:nf,overlay:lf,submenu:af,submenuLabel:cf,submenuIcon:sf,separator:df,mobileButton:uf},gf={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},pf={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},bf={focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},hf={padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},mf={borderColor:"{content.border.color}"},vf={root:gf,list:pf,item:bf,submenuLabel:hf,separator:mf},yf={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.5rem 0.75rem",transitionDuration:"{transition.duration}"},kf={borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},xf={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},wf={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",mobileIndent:"1rem",icon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"}},Cf={borderColor:"{content.border.color}"},$f={borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Bf={root:yf,baseItem:kf,item:xf,submenu:wf,separator:Cf,mobileButton:$f},_f={borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},Sf={padding:"0.5rem 0.75rem",gap:"0.5rem",sm:{padding:"0.375rem 0.625rem"},lg:{padding:"0.625rem 0.875rem"}},Rf={fontSize:"1rem",fontWeight:"500",sm:{fontSize:"0.875rem"},lg:{fontSize:"1.125rem"}},zf={size:"1.125rem",sm:{size:"1rem"},lg:{size:"1.25rem"}},Ef={width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},Tf={size:"1rem",sm:{size:"0.875rem"},lg:{size:"1.125rem"}},Of={root:{borderWidth:"1px"}},Af={content:{padding:"0"}},Df={light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}},outlined:{color:"{blue.600}",borderColor:"{blue.600}"},simple:{color:"{blue.600}"}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}},outlined:{color:"{green.600}",borderColor:"{green.600}"},simple:{color:"{green.600}"}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}},outlined:{color:"{yellow.600}",borderColor:"{yellow.600}"},simple:{color:"{yellow.600}"}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}},outlined:{color:"{red.600}",borderColor:"{red.600}"},simple:{color:"{red.600}"}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}},outlined:{color:"{surface.500}",borderColor:"{surface.500}"},simple:{color:"{surface.500}"}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}},outlined:{color:"{surface.950}",borderColor:"{surface.950}"},simple:{color:"{surface.950}"}}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}},outlined:{color:"{blue.500}",borderColor:"{blue.500}"},simple:{color:"{blue.500}"}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}},outlined:{color:"{green.500}",borderColor:"{green.500}"},simple:{color:"{green.500}"}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}},outlined:{color:"{yellow.500}",borderColor:"{yellow.500}"},simple:{color:"{yellow.500}"}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}},outlined:{color:"{red.500}",borderColor:"{red.500}"},simple:{color:"{red.500}"}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}},outlined:{color:"{surface.400}",borderColor:"{surface.400}"},simple:{color:"{surface.400}"}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}},outlined:{color:"{surface.0}",borderColor:"{surface.0}"},simple:{color:"{surface.0}"}}}},Ff={root:_f,content:Sf,text:Rf,icon:zf,closeButton:Ef,closeIcon:Tf,outlined:Of,simple:Af,colorScheme:Df},If={borderRadius:"{content.border.radius}",gap:"1rem"},Pf={background:"{content.border.color}",size:"0.5rem"},Lf={gap:"0.5rem"},Nf={size:"0.5rem"},Mf={size:"1rem"},jf={verticalGap:"0.5rem",horizontalGap:"1rem"},Wf={root:If,meters:Pf,label:Lf,labelMarker:Nf,labelIcon:Mf,labelList:jf},Hf={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},Vf={width:"2.5rem",color:"{form.field.icon.color}"},Kf={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},Uf={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},Yf={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",gap:"0.5rem"},Gf={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},Xf={color:"{form.field.icon.color}"},qf={borderRadius:"{border.radius.sm}"},Jf={padding:"{list.option.padding}"},Zf={root:Hf,dropdown:Vf,overlay:Kf,list:Uf,option:Yf,optionGroup:Gf,chip:qf,clearIcon:Xf,emptyMessage:Jf},Qf={gap:"1.125rem"},og={gap:"0.5rem"},eg={root:Qf,controls:og},rg={gutter:"0.75rem",transitionDuration:"{transition.duration}"},tg={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{content.border.color}",color:"{content.color}",selectedColor:"{highlight.color}",hoverColor:"{content.hover.color}",padding:"0.75rem 1rem",toggleablePadding:"0.75rem 1rem 1.25rem 1rem",borderRadius:"{content.border.radius}"},ng={background:"{content.background}",hoverBackground:"{content.hover.background}",borderColor:"{content.border.color}",color:"{text.muted.color}",hoverColor:"{text.color}",size:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},ig={color:"{content.border.color}",borderRadius:"{content.border.radius}",height:"24px"},lg={root:rg,node:tg,nodeToggleButton:ng,connector:ig},ag={outline:{width:"2px",color:"{content.background}"}},cg={root:ag},sg={padding:"0.5rem 1rem",gap:"0.25rem",borderRadius:"{content.border.radius}",background:"{content.background}",color:"{content.color}",transitionDuration:"{transition.duration}"},dg={background:"transparent",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},ug={color:"{text.muted.color}"},fg={maxWidth:"2.5rem"},gg={root:sg,navButton:dg,currentPageReport:ug,jumpToPageInput:fg},pg={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},bg={background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"{content.border.color}",borderWidth:"0",borderRadius:"0"},hg={padding:"0.375rem 1.125rem"},mg={fontWeight:"600"},vg={padding:"0 1.125rem 1.125rem 1.125rem"},yg={padding:"0 1.125rem 1.125rem 1.125rem"},kg={root:pg,header:bg,toggleableHeader:hg,title:mg,content:vg,footer:yg},xg={gap:"0.5rem",transitionDuration:"{transition.duration}"},wg={background:"{content.background}",borderColor:"{content.border.color}",borderWidth:"1px",color:"{content.color}",padding:"0.25rem 0.25rem",borderRadius:"{content.border.radius}",first:{borderWidth:"1px",topBorderRadius:"{content.border.radius}"},last:{borderWidth:"1px",bottomBorderRadius:"{content.border.radius}"}},Cg={focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",gap:"0.5rem",padding:"{navigation.item.padding}",borderRadius:"{content.border.radius}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},$g={indent:"1rem"},Bg={color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}"},_g={root:xg,panel:wg,item:Cg,submenu:$g,submenuIcon:Bg},Sg={background:"{content.border.color}",borderRadius:"{content.border.radius}",height:".75rem"},Rg={color:"{form.field.icon.color}"},zg={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",padding:"{overlay.popover.padding}",shadow:"{overlay.popover.shadow}"},Eg={gap:"0.5rem"},Tg={light:{strength:{weakBackground:"{red.500}",mediumBackground:"{amber.500}",strongBackground:"{green.500}"}},dark:{strength:{weakBackground:"{red.400}",mediumBackground:"{amber.400}",strongBackground:"{green.400}"}}},Og={meter:Sg,icon:Rg,overlay:zg,content:Eg,colorScheme:Tg},Ag={gap:"1.125rem"},Dg={gap:"0.5rem"},Fg={root:Ag,controls:Dg},Ig={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},Pg={padding:"{overlay.popover.padding}"},Lg={root:Ig,content:Pg},Ng={background:"{content.border.color}",borderRadius:"{content.border.radius}",height:"1.25rem"},Mg={background:"{primary.color}"},jg={color:"{primary.contrast.color}",fontSize:"0.75rem",fontWeight:"600"},Wg={root:Ng,value:Mg,label:jg},Hg={light:{root:{colorOne:"{red.500}",colorTwo:"{blue.500}",colorThree:"{green.500}",colorFour:"{yellow.500}"}},dark:{root:{colorOne:"{red.400}",colorTwo:"{blue.400}",colorThree:"{green.400}",colorFour:"{yellow.400}"}}},Vg={colorScheme:Hg},Kg={width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},Ug={size:"0.75rem",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.5rem"},lg:{size:"1rem"}},Yg={root:Kg,icon:Ug},Gg={gap:"0.25rem",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Xg={size:"1rem",color:"{text.muted.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"},qg={root:Gg,icon:Xg},Jg={light:{root:{background:"rgba(0,0,0,0.1)"}},dark:{root:{background:"rgba(255,255,255,0.3)"}}},Zg={colorScheme:Jg},Qg={transitionDuration:"{transition.duration}"},op={size:"9px",borderRadius:"{border.radius.sm}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},ep={light:{bar:{background:"{surface.100}"}},dark:{bar:{background:"{surface.800}"}}},rp={root:Qg,bar:op,colorScheme:ep},tp={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},np={width:"2.5rem",color:"{form.field.icon.color}"},ip={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},lp={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},ap={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},cp={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},sp={color:"{form.field.icon.color}"},dp={color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},up={padding:"{list.option.padding}"},fp={root:tp,dropdown:np,overlay:ip,list:lp,option:ap,optionGroup:cp,clearIcon:sp,checkmark:dp,emptyMessage:up},gp={borderRadius:"{form.field.border.radius}"},pp={light:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}},dark:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}}},bp={root:gp,colorScheme:pp},hp={borderRadius:"{content.border.radius}"},mp={light:{root:{background:"{surface.200}",animationBackground:"rgba(255,255,255,0.4)"}},dark:{root:{background:"rgba(255, 255, 255, 0.06)",animationBackground:"rgba(255, 255, 255, 0.04)"}}},vp={root:hp,colorScheme:mp},yp={transitionDuration:"{transition.duration}"},kp={background:"{content.border.color}",borderRadius:"{content.border.radius}",size:"3px"},xp={background:"{primary.color}"},wp={width:"20px",height:"20px",borderRadius:"50%",background:"{content.border.color}",hoverBackground:"{content.border.color}",content:{borderRadius:"50%",hoverBackground:"{content.background}",width:"16px",height:"16px",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Cp={light:{handle:{content:{background:"{surface.0}"}}},dark:{handle:{content:{background:"{surface.950}"}}}},$p={root:yp,track:kp,range:xp,handle:wp,colorScheme:Cp},Bp={gap:"0.5rem",transitionDuration:"{transition.duration}"},_p={root:Bp},Sp={borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"},Rp={root:Sp},zp={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",transitionDuration:"{transition.duration}"},Ep={background:"{content.border.color}"},Tp={size:"24px",background:"transparent",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Op={root:zp,gutter:Ep,handle:Tp},Ap={transitionDuration:"{transition.duration}"},Dp={background:"{content.border.color}",activeBackground:"{primary.color}",margin:"0 0 0 1.625rem",size:"2px"},Fp={padding:"0.5rem",gap:"1rem"},Ip={padding:"0",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},Pp={color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},Lp={background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"},Np={padding:"0.875rem 0.5rem 1.125rem 0.5rem"},Mp={background:"{content.background}",color:"{content.color}",padding:"0",indent:"1rem"},jp={root:Ap,separator:Dp,step:Fp,stepHeader:Ip,stepTitle:Pp,stepNumber:Lp,steppanels:Np,steppanel:Mp},Wp={transitionDuration:"{transition.duration}"},Hp={background:"{content.border.color}"},Vp={borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},Kp={color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},Up={background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"},Yp={root:Wp,separator:Hp,itemLink:Vp,itemLabel:Kp,itemNumber:Up},Gp={transitionDuration:"{transition.duration}"},Xp={borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},qp={background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Jp={color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},Zp={height:"1px",bottom:"-1px",background:"{primary.color}"},Qp={root:Gp,tablist:Xp,item:qp,itemIcon:Jp,activeBar:Zp},o0={transitionDuration:"{transition.duration}"},e0={borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},r0={background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},t0={background:"{content.background}",color:"{content.color}",padding:"0.875rem 1.125rem 1.125rem 1.125rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"inset {focus.ring.shadow}"}},n0={background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",width:"2.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},i0={height:"1px",bottom:"-1px",background:"{primary.color}"},l0={light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}},a0={root:o0,tablist:e0,tab:r0,tabpanel:t0,navButton:n0,activeBar:i0,colorScheme:l0},c0={transitionDuration:"{transition.duration}"},s0={background:"{content.background}",borderColor:"{content.border.color}"},d0={borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},u0={background:"{content.background}",color:"{content.color}"},f0={background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}"},g0={light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}},p0={root:c0,tabList:s0,tab:d0,tabPanel:u0,navButton:f0,colorScheme:g0},b0={fontSize:"0.875rem",fontWeight:"700",padding:"0.25rem 0.5rem",gap:"0.25rem",borderRadius:"{content.border.radius}",roundedBorderRadius:"{border.radius.xl}"},h0={size:"0.75rem"},m0={light:{primary:{background:"{primary.100}",color:"{primary.700}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.100}",color:"{green.700}"},info:{background:"{sky.100}",color:"{sky.700}"},warn:{background:"{orange.100}",color:"{orange.700}"},danger:{background:"{red.100}",color:"{red.700}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"color-mix(in srgb, {primary.500}, transparent 84%)",color:"{primary.300}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",color:"{green.300}"},info:{background:"color-mix(in srgb, {sky.500}, transparent 84%)",color:"{sky.300}"},warn:{background:"color-mix(in srgb, {orange.500}, transparent 84%)",color:"{orange.300}"},danger:{background:"color-mix(in srgb, {red.500}, transparent 84%)",color:"{red.300}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}},v0={root:b0,icon:h0,colorScheme:m0},y0={background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",height:"18rem",padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{form.field.border.radius}"},k0={gap:"0.25rem"},x0={margin:"2px 0"},w0={root:y0,prompt:k0,commandResponse:x0},C0={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},$0={root:C0},B0={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},_0={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},S0={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},R0={mobileIndent:"1rem"},z0={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},E0={borderColor:"{content.border.color}"},T0={root:B0,list:_0,item:S0,submenu:R0,submenuIcon:z0,separator:E0},O0={minHeight:"5rem"},A0={eventContent:{padding:"1rem 0"}},D0={eventContent:{padding:"0 1rem"}},F0={size:"1.125rem",borderRadius:"50%",borderWidth:"2px",background:"{content.background}",borderColor:"{content.border.color}",content:{borderRadius:"50%",size:"0.375rem",background:"{primary.color}",insetShadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}},I0={color:"{content.border.color}",size:"2px"},P0={event:O0,horizontal:A0,vertical:D0,eventMarker:F0,eventConnector:I0},L0={width:"25rem",borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},N0={size:"1.125rem"},M0={padding:"{overlay.popover.padding}",gap:"0.5rem"},j0={gap:"0.5rem"},W0={fontWeight:"500",fontSize:"1rem"},H0={fontWeight:"500",fontSize:"0.875rem"},V0={width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},K0={size:"1rem"},U0={light:{root:{blur:"1.5px"},info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}}}},dark:{root:{blur:"10px"},info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",detailColor:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}}}}},Y0={root:L0,icon:N0,content:M0,text:j0,summary:W0,detail:H0,closeButton:V0,closeIcon:K0,colorScheme:U0},G0={padding:"0.25rem",borderRadius:"{content.border.radius}",gap:"0.5rem",fontWeight:"500",disabledBackground:"{form.field.disabled.background}",disabledBorderColor:"{form.field.disabled.background}",disabledColor:"{form.field.disabled.color}",invalidBorderColor:"{form.field.invalid.border.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",padding:"0.25rem"},lg:{fontSize:"{form.field.lg.font.size}",padding:"0.25rem"}},X0={disabledColor:"{form.field.disabled.color}"},q0={padding:"0.25rem 0.75rem",borderRadius:"{content.border.radius}",checkedShadow:"0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)",sm:{padding:"0.25rem 0.75rem"},lg:{padding:"0.25rem 0.75rem"}},J0={light:{root:{background:"{surface.100}",checkedBackground:"{surface.100}",hoverBackground:"{surface.100}",borderColor:"{surface.100}",color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}",checkedBorderColor:"{surface.100}"},content:{checkedBackground:"{surface.0}"},icon:{color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}"}},dark:{root:{background:"{surface.950}",checkedBackground:"{surface.950}",hoverBackground:"{surface.950}",borderColor:"{surface.950}",color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}",checkedBorderColor:"{surface.950}"},content:{checkedBackground:"{surface.800}"},icon:{color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}"}}},Z0={root:G0,icon:X0,content:q0,colorScheme:J0},Q0={width:"2.5rem",height:"1.5rem",borderRadius:"30px",gap:"0.25rem",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},borderWidth:"1px",borderColor:"transparent",hoverBorderColor:"transparent",checkedBorderColor:"transparent",checkedHoverBorderColor:"transparent",invalidBorderColor:"{form.field.invalid.border.color}",transitionDuration:"{form.field.transition.duration}",slideDuration:"0.2s"},ob={borderRadius:"50%",size:"1rem"},eb={light:{root:{background:"{surface.300}",disabledBackground:"{form.field.disabled.background}",hoverBackground:"{surface.400}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.0}",disabledBackground:"{form.field.disabled.color}",hoverBackground:"{surface.0}",checkedBackground:"{surface.0}",checkedHoverBackground:"{surface.0}",color:"{text.muted.color}",hoverColor:"{text.color}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}},dark:{root:{background:"{surface.700}",disabledBackground:"{surface.600}",hoverBackground:"{surface.600}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.400}",disabledBackground:"{surface.900}",hoverBackground:"{surface.300}",checkedBackground:"{surface.900}",checkedHoverBackground:"{surface.900}",color:"{surface.900}",hoverColor:"{surface.800}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}}},rb={root:Q0,handle:ob,colorScheme:eb},tb={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.75rem"},nb={root:tb},ib={maxWidth:"12.5rem",gutter:"0.25rem",shadow:"{overlay.popover.shadow}",padding:"0.5rem 0.75rem",borderRadius:"{overlay.popover.border.radius}"},lb={light:{root:{background:"{surface.700}",color:"{surface.0}"}},dark:{root:{background:"{surface.700}",color:"{surface.0}"}}},ab={root:ib,colorScheme:lb},cb={background:"{content.background}",color:"{content.color}",padding:"1rem",gap:"2px",indent:"1rem",transitionDuration:"{transition.duration}"},sb={padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.color}",hoverColor:"{text.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},gap:"0.25rem"},db={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}"},ub={borderRadius:"50%",size:"1.75rem",hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedHoverColor:"{primary.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},fb={size:"2rem"},gb={margin:"0 0 0.5rem 0"},pb=`
    .p-tree-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`,bb={root:cb,node:sb,nodeIcon:db,nodeToggleButton:ub,loadingIcon:fb,filter:gb,css:pb},hb={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},mb={width:"2.5rem",color:"{form.field.icon.color}"},vb={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},yb={padding:"{list.padding}"},kb={padding:"{list.option.padding}"},xb={borderRadius:"{border.radius.sm}"},wb={color:"{form.field.icon.color}"},Cb={root:hb,dropdown:mb,overlay:vb,tree:yb,emptyMessage:kb,chip:xb,clearIcon:wb},$b={transitionDuration:"{transition.duration}"},Bb={background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},_b={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{treetable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},Sb={fontWeight:"600"},Rb={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},zb={borderColor:"{treetable.border.color}",padding:"0.75rem 1rem",gap:"0.5rem"},Eb={background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},Tb={fontWeight:"600"},Ob={background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},Ab={width:"0.5rem"},Db={width:"1px",color:"{primary.color}"},Fb={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},Ib={size:"2rem"},Pb={hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Lb={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},Nb={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},Mb={light:{root:{borderColor:"{content.border.color}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},jb=`
    .p-treetable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`,Wb={root:$b,header:Bb,headerCell:_b,columnTitle:Sb,row:Rb,bodyCell:zb,footerCell:Eb,columnFooter:Tb,footer:Ob,columnResizer:Ab,resizeIndicator:Db,sortIcon:Fb,loadingIcon:Ib,nodeToggleButton:Pb,paginatorTop:Lb,paginatorBottom:Nb,colorScheme:Mb,css:jb},Hb={mask:{background:"{content.background}",color:"{text.muted.color}"},icon:{size:"2rem"}},Vb={loader:Hb},Kb=Object.defineProperty,Ub=Object.defineProperties,Yb=Object.getOwnPropertyDescriptors,Cn=Object.getOwnPropertySymbols,Gb=Object.prototype.hasOwnProperty,Xb=Object.prototype.propertyIsEnumerable,$n=(o,e,r)=>e in o?Kb(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,Bn,Py=(Bn=((o,e)=>{for(var r in e||(e={}))Gb.call(e,r)&&$n(o,r,e[r]);if(Cn)for(var r of Cn(e))Xb.call(e,r)&&$n(o,r,e[r]);return o})({},nc),Ub(Bn,Yb({components:{accordion:Oa,autocomplete:Wa,avatar:Ga,badge:ec,blockui:lc,breadcrumb:dc,button:gc,card:yc,carousel:Bc,cascadeselect:Oc,checkbox:Fc,chip:jc,colorpicker:Uc,confirmdialog:Xc,confirmpopup:os,contextmenu:as,datatable:zs,dataview:Is,datepicker:rd,dialog:cd,divider:gd,dock:hd,drawer:wd,editor:Rd,fieldset:Ad,fileupload:jd,floatlabel:Ud,galleria:au,iconfield:su,iftalabel:fu,image:mu,imagecompare:yu,inlinemessage:$u,inplace:Su,inputchips:Tu,inputgroup:Au,inputnumber:Pu,inputotp:Mu,inputtext:Wu,knob:Yu,listbox:ef,megamenu:ff,menu:vf,menubar:Bf,message:Ff,metergroup:Wf,multiselect:Zf,orderlist:eg,organizationchart:lg,overlaybadge:cg,paginator:gg,panel:kg,panelmenu:_g,password:Og,picklist:Fg,popover:Lg,progressbar:Wg,progressspinner:Vg,radiobutton:Yg,rating:qg,ripple:Zg,scrollpanel:rp,select:fp,selectbutton:bp,skeleton:vp,slider:$p,speeddial:_p,splitbutton:Rp,splitter:Op,stepper:jp,steps:Yp,tabmenu:Qp,tabs:a0,tabview:p0,tag:v0,terminal:w0,textarea:$0,tieredmenu:T0,timeline:P0,toast:Y0,togglebutton:Z0,toggleswitch:rb,toolbar:nb,tooltip:ab,tree:bb,treeselect:Cb,treetable:Wb,virtualscroller:Vb},css:cs})));function Kt(o){const e=Object.create(null);for(const r of o.split(","))e[r]=1;return r=>r in e}const Q={},Oe=[],Wo=()=>{},Ei=()=>!1,Nr=o=>o.charCodeAt(0)===111&&o.charCodeAt(1)===110&&(o.charCodeAt(2)>122||o.charCodeAt(2)<97),Ut=o=>o.startsWith("onUpdate:"),co=Object.assign,Yt=(o,e)=>{const r=o.indexOf(e);r>-1&&o.splice(r,1)},qb=Object.prototype.hasOwnProperty,oo=(o,e)=>qb.call(o,e),L=Array.isArray,Ae=o=>Mr(o)==="[object Map]",Ti=o=>Mr(o)==="[object Set]",M=o=>typeof o=="function",io=o=>typeof o=="string",ee=o=>typeof o=="symbol",ro=o=>o!==null&&typeof o=="object",Oi=o=>(ro(o)||M(o))&&M(o.then)&&M(o.catch),Ai=Object.prototype.toString,Mr=o=>Ai.call(o),Jb=o=>Mr(o).slice(8,-1),Di=o=>Mr(o)==="[object Object]",jr=o=>io(o)&&o!=="NaN"&&o[0]!=="-"&&""+parseInt(o,10)===o,Ye=Kt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wr=o=>{const e=Object.create(null);return(r=>e[r]||(e[r]=o(r)))},Zb=/-\w/g,So=Wr(o=>o.replace(Zb,e=>e.slice(1).toUpperCase())),Qb=/\B([A-Z])/g,ge=Wr(o=>o.replace(Qb,"-$1").toLowerCase()),Hr=Wr(o=>o.charAt(0).toUpperCase()+o.slice(1)),st=Wr(o=>o?`on${Hr(o)}`:""),xo=(o,e)=>!Object.is(o,e),dt=(o,...e)=>{for(let r=0;r<o.length;r++)o[r](...e)},Fi=(o,e,r,t=!1)=>{Object.defineProperty(o,e,{configurable:!0,enumerable:!1,writable:t,value:r})},oh=o=>{const e=parseFloat(o);return isNaN(e)?o:e},eh=o=>{const e=io(o)?Number(o):NaN;return isNaN(e)?o:e};let _n;const Vr=()=>_n||(_n=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Kr(o){if(L(o)){const e={};for(let r=0;r<o.length;r++){const t=o[r],n=io(t)?ih(t):Kr(t);if(n)for(const i in n)e[i]=n[i]}return e}else if(io(o)||ro(o))return o}const rh=/;(?![^(]*\))/g,th=/:([^]+)/,nh=/\/\*[^]*?\*\//g;function ih(o){const e={};return o.replace(nh,"").split(rh).forEach(r=>{if(r){const t=r.split(th);t.length>1&&(e[t[0].trim()]=t[1].trim())}}),e}function Ur(o){let e="";if(io(o))e=o;else if(L(o))for(let r=0;r<o.length;r++){const t=Ur(o[r]);t&&(e+=t+" ")}else if(ro(o))for(const r in o)o[r]&&(e+=r+" ");return e.trim()}function Ly(o){if(!o)return null;let{class:e,style:r}=o;return e&&!io(e)&&(o.class=Ur(e)),r&&(o.style=Kr(r)),o}const lh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ah=Kt(lh);function Ii(o){return!!o||o===""}const Pi=o=>!!(o&&o.__v_isRef===!0),ch=o=>io(o)?o:o==null?"":L(o)||ro(o)&&(o.toString===Ai||!M(o.toString))?Pi(o)?ch(o.value):JSON.stringify(o,Li,2):String(o),Li=(o,e)=>Pi(e)?Li(o,e.value):Ae(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((r,[t,n],i)=>(r[ut(t,i)+" =>"]=n,r),{})}:Ti(e)?{[`Set(${e.size})`]:[...e.values()].map(r=>ut(r))}:ee(e)?ut(e):ro(e)&&!L(e)&&!Di(e)?String(e):e,ut=(o,e="")=>{var r;return ee(o)?`Symbol(${(r=o.description)!=null?r:e})`:o};let uo;class Ni{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=uo,!e&&uo&&(this.index=(uo.scopes||(uo.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,r;if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].pause();for(e=0,r=this.effects.length;e<r;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,r;if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].resume();for(e=0,r=this.effects.length;e<r;e++)this.effects[e].resume()}}run(e){if(this._active){const r=uo;try{return uo=this,e()}finally{uo=r}}}on(){++this._on===1&&(this.prevScope=uo,uo=this)}off(){this._on>0&&--this._on===0&&(uo=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let r,t;for(r=0,t=this.effects.length;r<t;r++)this.effects[r].stop();for(this.effects.length=0,r=0,t=this.cleanups.length;r<t;r++)this.cleanups[r]();if(this.cleanups.length=0,this.scopes){for(r=0,t=this.scopes.length;r<t;r++)this.scopes[r].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0}}}function Mi(o){return new Ni(o)}function ji(){return uo}function sh(o,e=!1){uo&&uo.cleanups.push(o)}let no;const ft=new WeakSet;class Wi{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,uo&&uo.active&&uo.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ft.has(this)&&(ft.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Vi(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Sn(this),Ki(this);const e=no,r=Ao;no=this,Ao=!0;try{return this.fn()}finally{Ui(this),no=e,Ao=r,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)qt(e);this.deps=this.depsTail=void 0,Sn(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ft.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){zt(this)&&this.run()}get dirty(){return zt(this)}}let Hi=0,Ge,Xe;function Vi(o,e=!1){if(o.flags|=8,e){o.next=Xe,Xe=o;return}o.next=Ge,Ge=o}function Gt(){Hi++}function Xt(){if(--Hi>0)return;if(Xe){let e=Xe;for(Xe=void 0;e;){const r=e.next;e.next=void 0,e.flags&=-9,e=r}}let o;for(;Ge;){let e=Ge;for(Ge=void 0;e;){const r=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(t){o||(o=t)}e=r}}if(o)throw o}function Ki(o){for(let e=o.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ui(o){let e,r=o.depsTail,t=r;for(;t;){const n=t.prevDep;t.version===-1?(t===r&&(r=n),qt(t),dh(t)):e=t,t.dep.activeLink=t.prevActiveLink,t.prevActiveLink=void 0,t=n}o.deps=e,o.depsTail=r}function zt(o){for(let e=o.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Yi(e.dep.computed)||e.dep.version!==e.version))return!0;return!!o._dirty}function Yi(o){if(o.flags&4&&!(o.flags&16)||(o.flags&=-17,o.globalVersion===nr)||(o.globalVersion=nr,!o.isSSR&&o.flags&128&&(!o.deps&&!o._dirty||!zt(o))))return;o.flags|=2;const e=o.dep,r=no,t=Ao;no=o,Ao=!0;try{Ki(o);const n=o.fn(o._value);(e.version===0||xo(n,o._value))&&(o.flags|=128,o._value=n,e.version++)}catch(n){throw e.version++,n}finally{no=r,Ao=t,Ui(o),o.flags&=-3}}function qt(o,e=!1){const{dep:r,prevSub:t,nextSub:n}=o;if(t&&(t.nextSub=n,o.prevSub=void 0),n&&(n.prevSub=t,o.nextSub=void 0),r.subs===o&&(r.subs=t,!t&&r.computed)){r.computed.flags&=-5;for(let i=r.computed.deps;i;i=i.nextDep)qt(i,!0)}!e&&!--r.sc&&r.map&&r.map.delete(r.key)}function dh(o){const{prevDep:e,nextDep:r}=o;e&&(e.nextDep=r,o.prevDep=void 0),r&&(r.prevDep=e,o.nextDep=void 0)}let Ao=!0;const Gi=[];function Zo(){Gi.push(Ao),Ao=!1}function Qo(){const o=Gi.pop();Ao=o===void 0?!0:o}function Sn(o){const{cleanup:e}=o;if(o.cleanup=void 0,e){const r=no;no=void 0;try{e()}finally{no=r}}}let nr=0;class uh{constructor(e,r){this.sub=e,this.dep=r,this.version=r.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Yr{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!no||!Ao||no===this.computed)return;let r=this.activeLink;if(r===void 0||r.sub!==no)r=this.activeLink=new uh(no,this),no.deps?(r.prevDep=no.depsTail,no.depsTail.nextDep=r,no.depsTail=r):no.deps=no.depsTail=r,Xi(r);else if(r.version===-1&&(r.version=this.version,r.nextDep)){const t=r.nextDep;t.prevDep=r.prevDep,r.prevDep&&(r.prevDep.nextDep=t),r.prevDep=no.depsTail,r.nextDep=void 0,no.depsTail.nextDep=r,no.depsTail=r,no.deps===r&&(no.deps=t)}return r}trigger(e){this.version++,nr++,this.notify(e)}notify(e){Gt();try{for(let r=this.subs;r;r=r.prevSub)r.sub.notify()&&r.sub.dep.notify()}finally{Xt()}}}function Xi(o){if(o.dep.sc++,o.sub.flags&4){const e=o.dep.computed;if(e&&!o.dep.subs){e.flags|=20;for(let t=e.deps;t;t=t.nextDep)Xi(t)}const r=o.dep.subs;r!==o&&(o.prevSub=r,r&&(r.nextSub=o)),o.dep.subs=o}}const Er=new WeakMap,Ce=Symbol(""),Et=Symbol(""),ir=Symbol("");function fo(o,e,r){if(Ao&&no){let t=Er.get(o);t||Er.set(o,t=new Map);let n=t.get(r);n||(t.set(r,n=new Yr),n.map=t,n.key=r),n.track()}}function Xo(o,e,r,t,n,i){const l=Er.get(o);if(!l){nr++;return}const a=c=>{c&&c.trigger()};if(Gt(),e==="clear")l.forEach(a);else{const c=L(o),d=c&&jr(r);if(c&&r==="length"){const s=Number(t);l.forEach((f,p)=>{(p==="length"||p===ir||!ee(p)&&p>=s)&&a(f)})}else switch((r!==void 0||l.has(void 0))&&a(l.get(r)),d&&a(l.get(ir)),e){case"add":c?d&&a(l.get("length")):(a(l.get(Ce)),Ae(o)&&a(l.get(Et)));break;case"delete":c||(a(l.get(Ce)),Ae(o)&&a(l.get(Et)));break;case"set":Ae(o)&&a(l.get(Ce));break}}Xt()}function fh(o,e){const r=Er.get(o);return r&&r.get(e)}function Se(o){const e=J(o);return e===o?e:(fo(e,"iterate",ir),_o(o)?e:e.map(Do))}function Gr(o){return fo(o=J(o),"iterate",ir),o}function le(o,e){return oe(o)?Pe(Jo(o)?Do(e):e):Do(e)}const gh={__proto__:null,[Symbol.iterator](){return gt(this,Symbol.iterator,o=>le(this,o))},concat(...o){return Se(this).concat(...o.map(e=>L(e)?Se(e):e))},entries(){return gt(this,"entries",o=>(o[1]=le(this,o[1]),o))},every(o,e){return Ko(this,"every",o,e,void 0,arguments)},filter(o,e){return Ko(this,"filter",o,e,r=>r.map(t=>le(this,t)),arguments)},find(o,e){return Ko(this,"find",o,e,r=>le(this,r),arguments)},findIndex(o,e){return Ko(this,"findIndex",o,e,void 0,arguments)},findLast(o,e){return Ko(this,"findLast",o,e,r=>le(this,r),arguments)},findLastIndex(o,e){return Ko(this,"findLastIndex",o,e,void 0,arguments)},forEach(o,e){return Ko(this,"forEach",o,e,void 0,arguments)},includes(...o){return pt(this,"includes",o)},indexOf(...o){return pt(this,"indexOf",o)},join(o){return Se(this).join(o)},lastIndexOf(...o){return pt(this,"lastIndexOf",o)},map(o,e){return Ko(this,"map",o,e,void 0,arguments)},pop(){return He(this,"pop")},push(...o){return He(this,"push",o)},reduce(o,...e){return Rn(this,"reduce",o,e)},reduceRight(o,...e){return Rn(this,"reduceRight",o,e)},shift(){return He(this,"shift")},some(o,e){return Ko(this,"some",o,e,void 0,arguments)},splice(...o){return He(this,"splice",o)},toReversed(){return Se(this).toReversed()},toSorted(o){return Se(this).toSorted(o)},toSpliced(...o){return Se(this).toSpliced(...o)},unshift(...o){return He(this,"unshift",o)},values(){return gt(this,"values",o=>le(this,o))}};function gt(o,e,r){const t=Gr(o),n=t[e]();return t!==o&&!_o(o)&&(n._next=n.next,n.next=()=>{const i=n._next();return i.done||(i.value=r(i.value)),i}),n}const ph=Array.prototype;function Ko(o,e,r,t,n,i){const l=Gr(o),a=l!==o&&!_o(o),c=l[e];if(c!==ph[e]){const f=c.apply(o,i);return a?Do(f):f}let d=r;l!==o&&(a?d=function(f,p){return r.call(this,le(o,f),p,o)}:r.length>2&&(d=function(f,p){return r.call(this,f,p,o)}));const s=c.call(l,d,t);return a&&n?n(s):s}function Rn(o,e,r,t){const n=Gr(o);let i=r;return n!==o&&(_o(o)?r.length>3&&(i=function(l,a,c){return r.call(this,l,a,c,o)}):i=function(l,a,c){return r.call(this,l,le(o,a),c,o)}),n[e](i,...t)}function pt(o,e,r){const t=J(o);fo(t,"iterate",ir);const n=t[e](...r);return(n===-1||n===!1)&&qr(r[0])?(r[0]=J(r[0]),t[e](...r)):n}function He(o,e,r=[]){Zo(),Gt();const t=J(o)[e].apply(o,r);return Xt(),Qo(),t}const bh=Kt("__proto__,__v_isRef,__isVue"),qi=new Set(Object.getOwnPropertyNames(Symbol).filter(o=>o!=="arguments"&&o!=="caller").map(o=>Symbol[o]).filter(ee));function hh(o){ee(o)||(o=String(o));const e=J(this);return fo(e,"has",o),e.hasOwnProperty(o)}class Ji{constructor(e=!1,r=!1){this._isReadonly=e,this._isShallow=r}get(e,r,t){if(r==="__v_skip")return e.__v_skip;const n=this._isReadonly,i=this._isShallow;if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return i;if(r==="__v_raw")return t===(n?i?_h:el:i?ol:Qi).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(t)?e:void 0;const l=L(e);if(!n){let c;if(l&&(c=gh[r]))return c;if(r==="hasOwnProperty")return hh}const a=Reflect.get(e,r,lo(e)?e:t);if((ee(r)?qi.has(r):bh(r))||(n||fo(e,"get",r),i))return a;if(lo(a)){const c=l&&jr(r)?a:a.value;return n&&ro(c)?lr(c):c}return ro(a)?n?lr(a):Xr(a):a}}class Zi extends Ji{constructor(e=!1){super(!1,e)}set(e,r,t,n){let i=e[r];const l=L(e)&&jr(r);if(!this._isShallow){const d=oe(i);if(!_o(t)&&!oe(t)&&(i=J(i),t=J(t)),!l&&lo(i)&&!lo(t))return d||(i.value=t),!0}const a=l?Number(r)<e.length:oo(e,r),c=Reflect.set(e,r,t,lo(e)?e:n);return e===J(n)&&(a?xo(t,i)&&Xo(e,"set",r,t):Xo(e,"add",r,t)),c}deleteProperty(e,r){const t=oo(e,r);e[r];const n=Reflect.deleteProperty(e,r);return n&&t&&Xo(e,"delete",r,void 0),n}has(e,r){const t=Reflect.has(e,r);return(!ee(r)||!qi.has(r))&&fo(e,"has",r),t}ownKeys(e){return fo(e,"iterate",L(e)?"length":Ce),Reflect.ownKeys(e)}}class mh extends Ji{constructor(e=!1){super(!0,e)}set(e,r){return!0}deleteProperty(e,r){return!0}}const vh=new Zi,yh=new mh,kh=new Zi(!0);const Tt=o=>o,yr=o=>Reflect.getPrototypeOf(o);function xh(o,e,r){return function(...t){const n=this.__v_raw,i=J(n),l=Ae(i),a=o==="entries"||o===Symbol.iterator&&l,c=o==="keys"&&l,d=n[o](...t),s=r?Tt:e?Pe:Do;return!e&&fo(i,"iterate",c?Et:Ce),co(Object.create(d),{next(){const{value:f,done:p}=d.next();return p?{value:f,done:p}:{value:a?[s(f[0]),s(f[1])]:s(f),done:p}}})}}function kr(o){return function(...e){return o==="delete"?!1:o==="clear"?void 0:this}}function wh(o,e){const r={get(n){const i=this.__v_raw,l=J(i),a=J(n);o||(xo(n,a)&&fo(l,"get",n),fo(l,"get",a));const{has:c}=yr(l),d=e?Tt:o?Pe:Do;if(c.call(l,n))return d(i.get(n));if(c.call(l,a))return d(i.get(a));i!==l&&i.get(n)},get size(){const n=this.__v_raw;return!o&&fo(J(n),"iterate",Ce),n.size},has(n){const i=this.__v_raw,l=J(i),a=J(n);return o||(xo(n,a)&&fo(l,"has",n),fo(l,"has",a)),n===a?i.has(n):i.has(n)||i.has(a)},forEach(n,i){const l=this,a=l.__v_raw,c=J(a),d=e?Tt:o?Pe:Do;return!o&&fo(c,"iterate",Ce),a.forEach((s,f)=>n.call(i,d(s),d(f),l))}};return co(r,o?{add:kr("add"),set:kr("set"),delete:kr("delete"),clear:kr("clear")}:{add(n){!e&&!_o(n)&&!oe(n)&&(n=J(n));const i=J(this);return yr(i).has.call(i,n)||(i.add(n),Xo(i,"add",n,n)),this},set(n,i){!e&&!_o(i)&&!oe(i)&&(i=J(i));const l=J(this),{has:a,get:c}=yr(l);let d=a.call(l,n);d||(n=J(n),d=a.call(l,n));const s=c.call(l,n);return l.set(n,i),d?xo(i,s)&&Xo(l,"set",n,i):Xo(l,"add",n,i),this},delete(n){const i=J(this),{has:l,get:a}=yr(i);let c=l.call(i,n);c||(n=J(n),c=l.call(i,n)),a&&a.call(i,n);const d=i.delete(n);return c&&Xo(i,"delete",n,void 0),d},clear(){const n=J(this),i=n.size!==0,l=n.clear();return i&&Xo(n,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(n=>{r[n]=xh(n,o,e)}),r}function Jt(o,e){const r=wh(o,e);return(t,n,i)=>n==="__v_isReactive"?!o:n==="__v_isReadonly"?o:n==="__v_raw"?t:Reflect.get(oo(r,n)&&n in t?r:t,n,i)}const Ch={get:Jt(!1,!1)},$h={get:Jt(!1,!0)},Bh={get:Jt(!0,!1)};const Qi=new WeakMap,ol=new WeakMap,el=new WeakMap,_h=new WeakMap;function Sh(o){switch(o){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rh(o){return o.__v_skip||!Object.isExtensible(o)?0:Sh(Jb(o))}function Xr(o){return oe(o)?o:Zt(o,!1,vh,Ch,Qi)}function zh(o){return Zt(o,!1,kh,$h,ol)}function lr(o){return Zt(o,!0,yh,Bh,el)}function Zt(o,e,r,t,n){if(!ro(o)||o.__v_raw&&!(e&&o.__v_isReactive))return o;const i=Rh(o);if(i===0)return o;const l=n.get(o);if(l)return l;const a=new Proxy(o,i===2?t:r);return n.set(o,a),a}function Jo(o){return oe(o)?Jo(o.__v_raw):!!(o&&o.__v_isReactive)}function oe(o){return!!(o&&o.__v_isReadonly)}function _o(o){return!!(o&&o.__v_isShallow)}function qr(o){return o?!!o.__v_raw:!1}function J(o){const e=o&&o.__v_raw;return e?J(e):o}function Qt(o){return!oo(o,"__v_skip")&&Object.isExtensible(o)&&Fi(o,"__v_skip",!0),o}const Do=o=>ro(o)?Xr(o):o,Pe=o=>ro(o)?lr(o):o;function lo(o){return o?o.__v_isRef===!0:!1}function Jr(o){return rl(o,!1)}function Eh(o){return rl(o,!0)}function rl(o,e){return lo(o)?o:new Th(o,e)}class Th{constructor(e,r){this.dep=new Yr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=r?e:J(e),this._value=r?e:Do(e),this.__v_isShallow=r}get value(){return this.dep.track(),this._value}set value(e){const r=this._rawValue,t=this.__v_isShallow||_o(e)||oe(e);e=t?e:J(e),xo(e,r)&&(this._rawValue=e,this._value=t?e:Do(e),this.dep.trigger())}}function Zr(o){return lo(o)?o.value:o}function De(o){return M(o)?o():Zr(o)}const Oh={get:(o,e,r)=>e==="__v_raw"?o:Zr(Reflect.get(o,e,r)),set:(o,e,r,t)=>{const n=o[e];return lo(n)&&!lo(r)?(n.value=r,!0):Reflect.set(o,e,r,t)}};function tl(o){return Jo(o)?o:new Proxy(o,Oh)}class Ah{constructor(e){this.__v_isRef=!0,this._value=void 0;const r=this.dep=new Yr,{get:t,set:n}=e(r.track.bind(r),r.trigger.bind(r));this._get=t,this._set=n}get value(){return this._value=this._get()}set value(e){this._set(e)}}function nl(o){return new Ah(o)}function Dh(o){const e=L(o)?new Array(o.length):{};for(const r in o)e[r]=il(o,r);return e}class Fh{constructor(e,r,t){this._object=e,this._key=r,this._defaultValue=t,this.__v_isRef=!0,this._value=void 0,this._raw=J(e);let n=!0,i=e;if(!L(e)||!jr(String(r)))do n=!qr(i)||_o(i);while(n&&(i=i.__v_raw));this._shallow=n}get value(){let e=this._object[this._key];return this._shallow&&(e=Zr(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&lo(this._raw[this._key])){const r=this._object[this._key];if(lo(r)){r.value=e;return}}this._object[this._key]=e}get dep(){return fh(this._raw,this._key)}}class Ih{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Ph(o,e,r){return lo(o)?o:M(o)?new Ih(o):ro(o)&&arguments.length>1?il(o,e,r):Jr(o)}function il(o,e,r){return new Fh(o,e,r)}class Lh{constructor(e,r,t){this.fn=e,this.setter=r,this._value=void 0,this.dep=new Yr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=nr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!r,this.isSSR=t}notify(){if(this.flags|=16,!(this.flags&8)&&no!==this)return Vi(this,!0),!0}get value(){const e=this.dep.track();return Yi(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Nh(o,e,r=!1){let t,n;return M(o)?t=o:(t=o.get,n=o.set),new Lh(t,n,r)}const xr={},Tr=new WeakMap;let ke;function Mh(o,e=!1,r=ke){if(r){let t=Tr.get(r);t||Tr.set(r,t=[]),t.push(o)}}function jh(o,e,r=Q){const{immediate:t,deep:n,once:i,scheduler:l,augmentJob:a,call:c}=r,d=T=>n?T:_o(T)||n===!1||n===0?qo(T,1):qo(T);let s,f,p,b,y=!1,w=!1;if(lo(o)?(f=()=>o.value,y=_o(o)):Jo(o)?(f=()=>d(o),y=!0):L(o)?(w=!0,y=o.some(T=>Jo(T)||_o(T)),f=()=>o.map(T=>{if(lo(T))return T.value;if(Jo(T))return d(T);if(M(T))return c?c(T,2):T()})):M(o)?e?f=c?()=>c(o,2):o:f=()=>{if(p){Zo();try{p()}finally{Qo()}}const T=ke;ke=s;try{return c?c(o,3,[b]):o(b)}finally{ke=T}}:f=Wo,e&&n){const T=f,N=n===!0?1/0:n;f=()=>qo(T(),N)}const z=ji(),R=()=>{s.stop(),z&&z.active&&Yt(z.effects,s)};if(i&&e){const T=e;e=(...N)=>{T(...N),R()}}let A=w?new Array(o.length).fill(xr):xr;const W=T=>{if(!(!(s.flags&1)||!s.dirty&&!T))if(e){const N=s.run();if(n||y||(w?N.some((U,G)=>xo(U,A[G])):xo(N,A))){p&&p();const U=ke;ke=s;try{const G=[N,A===xr?void 0:w&&A[0]===xr?[]:A,b];A=N,c?c(e,3,G):e(...G)}finally{ke=U}}}else s.run()};return a&&a(W),s=new Wi(f),s.scheduler=l?()=>l(W,!1):W,b=T=>Mh(T,!1,s),p=s.onStop=()=>{const T=Tr.get(s);if(T){if(c)c(T,4);else for(const N of T)N();Tr.delete(s)}},e?t?W(!0):A=s.run():l?l(W.bind(null,!0),!0):s.run(),R.pause=s.pause.bind(s),R.resume=s.resume.bind(s),R.stop=R,R}function qo(o,e=1/0,r){if(e<=0||!ro(o)||o.__v_skip||(r=r||new Map,(r.get(o)||0)>=e))return o;if(r.set(o,e),e--,lo(o))qo(o.value,e,r);else if(L(o))for(let t=0;t<o.length;t++)qo(o[t],e,r);else if(Ti(o)||Ae(o))o.forEach(t=>{qo(t,e,r)});else if(Di(o)){for(const t in o)qo(o[t],e,r);for(const t of Object.getOwnPropertySymbols(o))Object.prototype.propertyIsEnumerable.call(o,t)&&qo(o[t],e,r)}return o}function gr(o,e,r,t){try{return t?o(...t):o()}catch(n){Qr(n,e,r)}}function Fo(o,e,r,t){if(M(o)){const n=gr(o,e,r,t);return n&&Oi(n)&&n.catch(i=>{Qr(i,e,r)}),n}if(L(o)){const n=[];for(let i=0;i<o.length;i++)n.push(Fo(o[i],e,r,t));return n}}function Qr(o,e,r,t=!0){const n=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:l}=e&&e.appContext.config||Q;if(e){let a=e.parent;const c=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${r}`;for(;a;){const s=a.ec;if(s){for(let f=0;f<s.length;f++)if(s[f](o,c,d)===!1)return}a=a.parent}if(i){Zo(),gr(i,null,10,[o,c,d]),Qo();return}}Wh(o,r,n,t,l)}function Wh(o,e,r,t=!0,n=!1){if(n)throw o;console.error(o)}const vo=[];let Mo=-1;const Fe=[];let ae=null,Ee=0;const ll=Promise.resolve();let Or=null;function ot(o){const e=Or||ll;return o?e.then(this?o.bind(this):o):e}function Hh(o){let e=Mo+1,r=vo.length;for(;e<r;){const t=e+r>>>1,n=vo[t],i=ar(n);i<o||i===o&&n.flags&2?e=t+1:r=t}return e}function on(o){if(!(o.flags&1)){const e=ar(o),r=vo[vo.length-1];!r||!(o.flags&2)&&e>=ar(r)?vo.push(o):vo.splice(Hh(e),0,o),o.flags|=1,al()}}function al(){Or||(Or=ll.then(sl))}function Vh(o){L(o)?Fe.push(...o):ae&&o.id===-1?ae.splice(Ee+1,0,o):o.flags&1||(Fe.push(o),o.flags|=1),al()}function zn(o,e,r=Mo+1){for(;r<vo.length;r++){const t=vo[r];if(t&&t.flags&2){if(o&&t.id!==o.uid)continue;vo.splice(r,1),r--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function cl(o){if(Fe.length){const e=[...new Set(Fe)].sort((r,t)=>ar(r)-ar(t));if(Fe.length=0,ae){ae.push(...e);return}for(ae=e,Ee=0;Ee<ae.length;Ee++){const r=ae[Ee];r.flags&4&&(r.flags&=-2),r.flags&8||r(),r.flags&=-2}ae=null,Ee=0}}const ar=o=>o.id==null?o.flags&2?-1:1/0:o.id;function sl(o){try{for(Mo=0;Mo<vo.length;Mo++){const e=vo[Mo];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),gr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Mo<vo.length;Mo++){const e=vo[Mo];e&&(e.flags&=-2)}Mo=-1,vo.length=0,cl(),Or=null,(vo.length||Fe.length)&&sl()}}let so=null,dl=null;function Ar(o){const e=so;return so=o,dl=o&&o.type.__scopeId||null,e}function Kh(o,e=so,r){if(!e||o._n)return o;const t=(...n)=>{t._d&&Pr(-1);const i=Ar(e);let l;try{l=o(...n)}finally{Ar(i),t._d&&Pr(1)}return l};return t._n=!0,t._c=!0,t._d=!0,t}function Ny(o,e){if(so===null)return o;const r=it(so),t=o.dirs||(o.dirs=[]);for(let n=0;n<e.length;n++){let[i,l,a,c=Q]=e[n];i&&(M(i)&&(i={mounted:i,updated:i}),i.deep&&qo(l),t.push({dir:i,instance:r,value:l,oldValue:void 0,arg:a,modifiers:c}))}return o}function he(o,e,r,t){const n=o.dirs,i=e&&e.dirs;for(let l=0;l<n.length;l++){const a=n[l];i&&(a.oldValue=i[l].value);let c=a.dir[t];c&&(Zo(),Fo(c,r,8,[o.el,a,o,e]),Qo())}}function Uh(o,e){if(po){let r=po.provides;const t=po.parent&&po.parent.provides;t===r&&(r=po.provides=Object.create(t)),r[o]=e}}function qe(o,e,r=!1){const t=Ne();if(t||Be){let n=Be?Be._context.provides:t?t.parent==null||t.ce?t.vnode.appContext&&t.vnode.appContext.provides:t.parent.provides:void 0;if(n&&o in n)return n[o];if(arguments.length>1)return r&&M(e)?e.call(t&&t.proxy):e}}function Yh(){return!!(Ne()||Be)}const Gh=Symbol.for("v-scx"),Xh=()=>qe(Gh);function qh(o,e){return en(o,null,{flush:"sync"})}function $e(o,e,r){return en(o,e,r)}function en(o,e,r=Q){const{immediate:t,deep:n,flush:i,once:l}=r,a=co({},r),c=e&&t||!e&&i!=="post";let d;if(ur){if(i==="sync"){const b=Xh();d=b.__watcherHandles||(b.__watcherHandles=[])}else if(!c){const b=()=>{};return b.stop=Wo,b.resume=Wo,b.pause=Wo,b}}const s=po;a.call=(b,y,w)=>Fo(b,s,y,w);let f=!1;i==="post"?a.scheduler=b=>{mo(b,s&&s.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(b,y)=>{y?b():on(b)}),a.augmentJob=b=>{e&&(b.flags|=4),f&&(b.flags|=2,s&&(b.id=s.uid,b.i=s))};const p=jh(o,e,a);return ur&&(d?d.push(p):c&&p()),p}function Jh(o,e,r){const t=this.proxy,n=io(o)?o.includes(".")?ul(t,o):()=>t[o]:o.bind(t,t);let i;M(e)?i=e:(i=e.handler,r=e);const l=pr(this),a=en(n,i.bind(t),r);return l(),a}function ul(o,e){const r=e.split(".");return()=>{let t=o;for(let n=0;n<r.length&&t;n++)t=t[r[n]];return t}}const fl=Symbol("_vte"),gl=o=>o.__isTeleport,Je=o=>o&&(o.disabled||o.disabled===""),En=o=>o&&(o.defer||o.defer===""),Tn=o=>typeof SVGElement<"u"&&o instanceof SVGElement,On=o=>typeof MathMLElement=="function"&&o instanceof MathMLElement,Ot=(o,e)=>{const r=o&&o.to;return io(r)?e?e(r):null:r},pl={name:"Teleport",__isTeleport:!0,process(o,e,r,t,n,i,l,a,c,d){const{mc:s,pc:f,pbc:p,o:{insert:b,querySelector:y,createText:w,createComment:z}}=d,R=Je(e.props);let{shapeFlag:A,children:W,dynamicChildren:T}=e;if(o==null){const N=e.el=w(""),U=e.anchor=w("");b(N,r,t),b(U,r,t);const G=(C,I)=>{A&16&&s(W,C,I,n,i,l,a,c)},D=()=>{const C=e.target=Ot(e.props,y),I=bl(C,e,w,b);C&&(l!=="svg"&&Tn(C)?l="svg":l!=="mathml"&&On(C)&&(l="mathml"),n&&n.isCE&&(n.ce._teleportTargets||(n.ce._teleportTargets=new Set)).add(C),R||(G(C,I),_r(e,!1)))};R&&(G(r,U),_r(e,!0)),En(e.props)?(e.el.__isMounted=!1,mo(()=>{D(),delete e.el.__isMounted},i)):D()}else{if(En(e.props)&&o.el.__isMounted===!1){mo(()=>{pl.process(o,e,r,t,n,i,l,a,c,d)},i);return}e.el=o.el,e.targetStart=o.targetStart;const N=e.anchor=o.anchor,U=e.target=o.target,G=e.targetAnchor=o.targetAnchor,D=Je(o.props),C=D?r:U,I=D?N:G;if(l==="svg"||Tn(U)?l="svg":(l==="mathml"||On(U))&&(l="mathml"),T?(p(o.dynamicChildren,T,C,n,i,l,a),cn(o,e,!0)):c||f(o,e,C,I,n,i,l,a,!1),R)D?e.props&&o.props&&e.props.to!==o.props.to&&(e.props.to=o.props.to):wr(e,r,N,d,1);else if((e.props&&e.props.to)!==(o.props&&o.props.to)){const K=e.target=Ot(e.props,y);K&&wr(e,K,null,d,0)}else D&&wr(e,U,G,d,1);_r(e,R)}},remove(o,e,r,{um:t,o:{remove:n}},i){const{shapeFlag:l,children:a,anchor:c,targetStart:d,targetAnchor:s,target:f,props:p}=o;if(f&&(n(d),n(s)),i&&n(c),l&16){const b=i||!Je(p);for(let y=0;y<a.length;y++){const w=a[y];t(w,e,r,b,!!w.dynamicChildren)}}},move:wr,hydrate:Zh};function wr(o,e,r,{o:{insert:t},m:n},i=2){i===0&&t(o.targetAnchor,e,r);const{el:l,anchor:a,shapeFlag:c,children:d,props:s}=o,f=i===2;if(f&&t(l,e,r),(!f||Je(s))&&c&16)for(let p=0;p<d.length;p++)n(d[p],e,r,2);f&&t(a,e,r)}function Zh(o,e,r,t,n,i,{o:{nextSibling:l,parentNode:a,querySelector:c,insert:d,createText:s}},f){function p(w,z,R,A){z.anchor=f(l(w),z,a(w),r,t,n,i),z.targetStart=R,z.targetAnchor=A}const b=e.target=Ot(e.props,c),y=Je(e.props);if(b){const w=b._lpa||b.firstChild;if(e.shapeFlag&16)if(y)p(o,e,w,w&&l(w));else{e.anchor=l(o);let z=w;for(;z;){if(z&&z.nodeType===8){if(z.data==="teleport start anchor")e.targetStart=z;else if(z.data==="teleport anchor"){e.targetAnchor=z,b._lpa=e.targetAnchor&&l(e.targetAnchor);break}}z=l(z)}e.targetAnchor||bl(b,e,s,d),f(w&&l(w),e,b,r,t,n,i)}_r(e,y)}else y&&e.shapeFlag&16&&p(o,e,o,l(o));return e.anchor&&l(e.anchor)}const My=pl;function _r(o,e){const r=o.ctx;if(r&&r.ut){let t,n;for(e?(t=o.el,n=o.anchor):(t=o.targetStart,n=o.targetAnchor);t&&t!==n;)t.nodeType===1&&t.setAttribute("data-v-owner",r.uid),t=t.nextSibling;r.ut()}}function bl(o,e,r,t){const n=e.targetStart=r(""),i=e.targetAnchor=r("");return n[fl]=i,o&&(t(n,o),t(i,o)),i}const Go=Symbol("_leaveCb"),Cr=Symbol("_enterCb");function Qh(){const o={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return rn(()=>{o.isMounted=!0}),Cl(()=>{o.isUnmounting=!0}),o}const Eo=[Function,Array],hl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Eo,onEnter:Eo,onAfterEnter:Eo,onEnterCancelled:Eo,onBeforeLeave:Eo,onLeave:Eo,onAfterLeave:Eo,onLeaveCancelled:Eo,onBeforeAppear:Eo,onAppear:Eo,onAfterAppear:Eo,onAppearCancelled:Eo},ml=o=>{const e=o.subTree;return e.component?ml(e.component):e},om={name:"BaseTransition",props:hl,setup(o,{slots:e}){const r=Ne(),t=Qh();return()=>{const n=e.default&&kl(e.default(),!0);if(!n||!n.length)return;const i=vl(n),l=J(o),{mode:a}=l;if(t.isLeaving)return bt(i);const c=An(i);if(!c)return bt(i);let d=At(c,l,t,r,f=>d=f);c.type!==go&&cr(c,d);let s=r.subTree&&An(r.subTree);if(s&&s.type!==go&&!xe(s,c)&&ml(r).type!==go){let f=At(s,l,t,r);if(cr(s,f),a==="out-in"&&c.type!==go)return t.isLeaving=!0,f.afterLeave=()=>{t.isLeaving=!1,r.job.flags&8||r.update(),delete f.afterLeave,s=void 0},bt(i);a==="in-out"&&c.type!==go?f.delayLeave=(p,b,y)=>{const w=yl(t,s);w[String(s.key)]=s,p[Go]=()=>{b(),p[Go]=void 0,delete d.delayedLeave,s=void 0},d.delayedLeave=()=>{y(),delete d.delayedLeave,s=void 0}}:s=void 0}else s&&(s=void 0);return i}}};function vl(o){let e=o[0];if(o.length>1){for(const r of o)if(r.type!==go){e=r;break}}return e}const em=om;function yl(o,e){const{leavingVNodes:r}=o;let t=r.get(e.type);return t||(t=Object.create(null),r.set(e.type,t)),t}function At(o,e,r,t,n){const{appear:i,mode:l,persisted:a=!1,onBeforeEnter:c,onEnter:d,onAfterEnter:s,onEnterCancelled:f,onBeforeLeave:p,onLeave:b,onAfterLeave:y,onLeaveCancelled:w,onBeforeAppear:z,onAppear:R,onAfterAppear:A,onAppearCancelled:W}=e,T=String(o.key),N=yl(r,o),U=(C,I)=>{C&&Fo(C,t,9,I)},G=(C,I)=>{const K=I[1];U(C,I),L(C)?C.every(_=>_.length<=1)&&K():C.length<=1&&K()},D={mode:l,persisted:a,beforeEnter(C){let I=c;if(!r.isMounted)if(i)I=z||c;else return;C[Go]&&C[Go](!0);const K=N[T];K&&xe(o,K)&&K.el[Go]&&K.el[Go](),U(I,[C])},enter(C){let I=d,K=s,_=f;if(!r.isMounted)if(i)I=R||d,K=A||s,_=W||f;else return;let Y=!1;const O=C[Cr]=X=>{Y||(Y=!0,X?U(_,[C]):U(K,[C]),D.delayedLeave&&D.delayedLeave(),C[Cr]=void 0)};I?G(I,[C,O]):O()},leave(C,I){const K=String(o.key);if(C[Cr]&&C[Cr](!0),r.isUnmounting)return I();U(p,[C]);let _=!1;const Y=C[Go]=O=>{_||(_=!0,I(),O?U(w,[C]):U(y,[C]),C[Go]=void 0,N[K]===o&&delete N[K])};N[K]=o,b?G(b,[C,Y]):Y()},clone(C){const I=At(C,e,r,t,n);return n&&n(I),I}};return D}function bt(o){if(et(o))return o=fe(o),o.children=null,o}function An(o){if(!et(o))return gl(o.type)&&o.children?vl(o.children):o;if(o.component)return o.component.subTree;const{shapeFlag:e,children:r}=o;if(r){if(e&16)return r[0];if(e&32&&M(r.default))return r.default()}}function cr(o,e){o.shapeFlag&6&&o.component?(o.transition=e,cr(o.component.subTree,e)):o.shapeFlag&128?(o.ssContent.transition=e.clone(o.ssContent),o.ssFallback.transition=e.clone(o.ssFallback)):o.transition=e}function kl(o,e=!1,r){let t=[],n=0;for(let i=0;i<o.length;i++){let l=o[i];const a=r==null?l.key:String(r)+String(l.key!=null?l.key:i);l.type===wo?(l.patchFlag&128&&n++,t=t.concat(kl(l.children,e,a))):(e||l.type!==go)&&t.push(a!=null?fe(l,{key:a}):l)}if(n>1)for(let i=0;i<t.length;i++)t[i].patchFlag=-2;return t}function jy(o,e){return M(o)?co({name:o.name},e,{setup:o}):o}function Wy(){const o=Ne();return o?(o.appContext.config.idPrefix||"v")+"-"+o.ids[0]+o.ids[1]++:""}function xl(o){o.ids=[o.ids[0]+o.ids[2]+++"-",0,0]}const Dr=new WeakMap;function Ze(o,e,r,t,n=!1){if(L(o)){o.forEach((y,w)=>Ze(y,e&&(L(e)?e[w]:e),r,t,n));return}if(Ie(t)&&!n){t.shapeFlag&512&&t.type.__asyncResolved&&t.component.subTree.component&&Ze(o,e,r,t.component.subTree);return}const i=t.shapeFlag&4?it(t.component):t.el,l=n?null:i,{i:a,r:c}=o,d=e&&e.r,s=a.refs===Q?a.refs={}:a.refs,f=a.setupState,p=J(f),b=f===Q?Ei:y=>oo(p,y);if(d!=null&&d!==c){if(Dn(e),io(d))s[d]=null,b(d)&&(f[d]=null);else if(lo(d)){d.value=null;const y=e;y.k&&(s[y.k]=null)}}if(M(c))gr(c,a,12,[l,s]);else{const y=io(c),w=lo(c);if(y||w){const z=()=>{if(o.f){const R=y?b(c)?f[c]:s[c]:c.value;if(n)L(R)&&Yt(R,i);else if(L(R))R.includes(i)||R.push(i);else if(y)s[c]=[i],b(c)&&(f[c]=s[c]);else{const A=[i];c.value=A,o.k&&(s[o.k]=A)}}else y?(s[c]=l,b(c)&&(f[c]=l)):w&&(c.value=l,o.k&&(s[o.k]=l))};if(l){const R=()=>{z(),Dr.delete(o)};R.id=-1,Dr.set(o,R),mo(R,r)}else Dn(o),z()}}}function Dn(o){const e=Dr.get(o);e&&(e.flags|=8,Dr.delete(o))}Vr().requestIdleCallback;Vr().cancelIdleCallback;const Ie=o=>!!o.type.__asyncLoader,et=o=>o.type.__isKeepAlive;function rm(o,e){wl(o,"a",e)}function tm(o,e){wl(o,"da",e)}function wl(o,e,r=po){const t=o.__wdc||(o.__wdc=()=>{let n=r;for(;n;){if(n.isDeactivated)return;n=n.parent}return o()});if(rt(e,t,r),r){let n=r.parent;for(;n&&n.parent;)et(n.parent.vnode)&&nm(t,e,r,n),n=n.parent}}function nm(o,e,r,t){const n=rt(e,o,t,!0);$l(()=>{Yt(t[e],n)},r)}function rt(o,e,r=po,t=!1){if(r){const n=r[o]||(r[o]=[]),i=e.__weh||(e.__weh=(...l)=>{Zo();const a=pr(r),c=Fo(e,r,o,l);return a(),Qo(),c});return t?n.unshift(i):n.push(i),i}}const re=o=>(e,r=po)=>{(!ur||o==="sp")&&rt(o,(...t)=>e(...t),r)},im=re("bm"),rn=re("m"),lm=re("bu"),am=re("u"),Cl=re("bum"),$l=re("um"),cm=re("sp"),sm=re("rtg"),dm=re("rtc");function um(o,e=po){rt("ec",o,e)}const tn="components",fm="directives";function Hy(o,e){return nn(tn,o,!0,e)||o}const Bl=Symbol.for("v-ndc");function Vy(o){return io(o)?nn(tn,o,!1)||o:o||Bl}function Ky(o){return nn(fm,o)}function nn(o,e,r=!0,t=!1){const n=so||po;if(n){const i=n.type;if(o===tn){const a=qm(i,!1);if(a&&(a===e||a===So(e)||a===Hr(So(e))))return i}const l=Fn(n[o]||i[o],e)||Fn(n.appContext[o],e);return!l&&t?i:l}}function Fn(o,e){return o&&(o[e]||o[So(e)]||o[Hr(So(e))])}function Uy(o,e,r,t){let n;const i=r,l=L(o);if(l||io(o)){const a=l&&Jo(o);let c=!1,d=!1;a&&(c=!_o(o),d=oe(o),o=Gr(o)),n=new Array(o.length);for(let s=0,f=o.length;s<f;s++)n[s]=e(c?d?Pe(Do(o[s])):Do(o[s]):o[s],s,void 0,i)}else if(typeof o=="number"){n=new Array(o);for(let a=0;a<o;a++)n[a]=e(a+1,a,void 0,i)}else if(ro(o))if(o[Symbol.iterator])n=Array.from(o,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(o);n=new Array(a.length);for(let c=0,d=a.length;c<d;c++){const s=a[c];n[c]=e(o[s],s,c,i)}}else n=[];return n}function Yy(o,e){for(let r=0;r<e.length;r++){const t=e[r];if(L(t))for(let n=0;n<t.length;n++)o[t[n].name]=t[n].fn;else t&&(o[t.name]=t.key?(...n)=>{const i=t.fn(...n);return i&&(i.key=t.key),i}:t.fn)}return o}function Gy(o,e,r={},t,n){if(so.ce||so.parent&&Ie(so.parent)&&so.parent.ce){const d=Object.keys(r).length>0;return e!=="default"&&(r.name=e),Lt(),Nt(wo,null,[Co("slot",r,t&&t())],d?-2:64)}let i=o[e];i&&i._c&&(i._d=!1),Lt();const l=i&&_l(i(r)),a=r.key||l&&l.key,c=Nt(wo,{key:(a&&!ee(a)?a:`_${e}`)+(!l&&t?"_fb":"")},l||(t?t():[]),l&&o._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function _l(o){return o.some(e=>dr(e)?!(e.type===go||e.type===wo&&!_l(e.children)):!0)?o:null}const Dt=o=>o?Ul(o)?it(o):Dt(o.parent):null,Qe=co(Object.create(null),{$:o=>o,$el:o=>o.vnode.el,$data:o=>o.data,$props:o=>o.props,$attrs:o=>o.attrs,$slots:o=>o.slots,$refs:o=>o.refs,$parent:o=>Dt(o.parent),$root:o=>Dt(o.root),$host:o=>o.ce,$emit:o=>o.emit,$options:o=>Rl(o),$forceUpdate:o=>o.f||(o.f=()=>{on(o.update)}),$nextTick:o=>o.n||(o.n=ot.bind(o.proxy)),$watch:o=>Jh.bind(o)}),ht=(o,e)=>o!==Q&&!o.__isScriptSetup&&oo(o,e),gm={get({_:o},e){if(e==="__v_skip")return!0;const{ctx:r,setupState:t,data:n,props:i,accessCache:l,type:a,appContext:c}=o;if(e[0]!=="$"){const p=l[e];if(p!==void 0)switch(p){case 1:return t[e];case 2:return n[e];case 4:return r[e];case 3:return i[e]}else{if(ht(t,e))return l[e]=1,t[e];if(n!==Q&&oo(n,e))return l[e]=2,n[e];if(oo(i,e))return l[e]=3,i[e];if(r!==Q&&oo(r,e))return l[e]=4,r[e];Ft&&(l[e]=0)}}const d=Qe[e];let s,f;if(d)return e==="$attrs"&&fo(o.attrs,"get",""),d(o);if((s=a.__cssModules)&&(s=s[e]))return s;if(r!==Q&&oo(r,e))return l[e]=4,r[e];if(f=c.config.globalProperties,oo(f,e))return f[e]},set({_:o},e,r){const{data:t,setupState:n,ctx:i}=o;return ht(n,e)?(n[e]=r,!0):t!==Q&&oo(t,e)?(t[e]=r,!0):oo(o.props,e)||e[0]==="$"&&e.slice(1)in o?!1:(i[e]=r,!0)},has({_:{data:o,setupState:e,accessCache:r,ctx:t,appContext:n,props:i,type:l}},a){let c;return!!(r[a]||o!==Q&&a[0]!=="$"&&oo(o,a)||ht(e,a)||oo(i,a)||oo(t,a)||oo(Qe,a)||oo(n.config.globalProperties,a)||(c=l.__cssModules)&&c[a])},defineProperty(o,e,r){return r.get!=null?o._.accessCache[e]=0:oo(r,"value")&&this.set(o,e,r.value,null),Reflect.defineProperty(o,e,r)}};function Fr(o){return L(o)?o.reduce((e,r)=>(e[r]=null,e),{}):o}function Xy(o,e){return!o||!e?o||e:L(o)&&L(e)?o.concat(e):co({},Fr(o),Fr(e))}let Ft=!0;function pm(o){const e=Rl(o),r=o.proxy,t=o.ctx;Ft=!1,e.beforeCreate&&In(e.beforeCreate,o,"bc");const{data:n,computed:i,methods:l,watch:a,provide:c,inject:d,created:s,beforeMount:f,mounted:p,beforeUpdate:b,updated:y,activated:w,deactivated:z,beforeDestroy:R,beforeUnmount:A,destroyed:W,unmounted:T,render:N,renderTracked:U,renderTriggered:G,errorCaptured:D,serverPrefetch:C,expose:I,inheritAttrs:K,components:_,directives:Y,filters:O}=e;if(d&&bm(d,t,null),l)for(const V in l){const Z=l[V];M(Z)&&(t[V]=Z.bind(r))}if(n){const V=n.call(r,r);ro(V)&&(o.data=Xr(V))}if(Ft=!0,i)for(const V in i){const Z=i[V],Ro=M(Z)?Z.bind(r,r):M(Z.get)?Z.get.bind(r,r):Wo,Ho=!M(Z)&&M(Z.set)?Z.set.bind(r):Wo,zo=lt({get:Ro,set:Ho});Object.defineProperty(t,V,{enumerable:!0,configurable:!0,get:()=>zo.value,set:bo=>zo.value=bo})}if(a)for(const V in a)Sl(a[V],t,r,V);if(c){const V=M(c)?c.call(r):c;Reflect.ownKeys(V).forEach(Z=>{Uh(Z,V[Z])})}s&&In(s,o,"c");function H(V,Z){L(Z)?Z.forEach(Ro=>V(Ro.bind(r))):Z&&V(Z.bind(r))}if(H(im,f),H(rn,p),H(lm,b),H(am,y),H(rm,w),H(tm,z),H(um,D),H(dm,U),H(sm,G),H(Cl,A),H($l,T),H(cm,C),L(I))if(I.length){const V=o.exposed||(o.exposed={});I.forEach(Z=>{Object.defineProperty(V,Z,{get:()=>r[Z],set:Ro=>r[Z]=Ro,enumerable:!0})})}else o.exposed||(o.exposed={});N&&o.render===Wo&&(o.render=N),K!=null&&(o.inheritAttrs=K),_&&(o.components=_),Y&&(o.directives=Y),C&&xl(o)}function bm(o,e,r=Wo){L(o)&&(o=It(o));for(const t in o){const n=o[t];let i;ro(n)?"default"in n?i=qe(n.from||t,n.default,!0):i=qe(n.from||t):i=qe(n),lo(i)?Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:()=>i.value,set:l=>i.value=l}):e[t]=i}}function In(o,e,r){Fo(L(o)?o.map(t=>t.bind(e.proxy)):o.bind(e.proxy),e,r)}function Sl(o,e,r,t){let n=t.includes(".")?ul(r,t):()=>r[t];if(io(o)){const i=e[o];M(i)&&$e(n,i)}else if(M(o))$e(n,o.bind(r));else if(ro(o))if(L(o))o.forEach(i=>Sl(i,e,r,t));else{const i=M(o.handler)?o.handler.bind(r):e[o.handler];M(i)&&$e(n,i,o)}}function Rl(o){const e=o.type,{mixins:r,extends:t}=e,{mixins:n,optionsCache:i,config:{optionMergeStrategies:l}}=o.appContext,a=i.get(e);let c;return a?c=a:!n.length&&!r&&!t?c=e:(c={},n.length&&n.forEach(d=>Ir(c,d,l,!0)),Ir(c,e,l)),ro(e)&&i.set(e,c),c}function Ir(o,e,r,t=!1){const{mixins:n,extends:i}=e;i&&Ir(o,i,r,!0),n&&n.forEach(l=>Ir(o,l,r,!0));for(const l in e)if(!(t&&l==="expose")){const a=hm[l]||r&&r[l];o[l]=a?a(o[l],e[l]):e[l]}return o}const hm={data:Pn,props:Ln,emits:Ln,methods:Ke,computed:Ke,beforeCreate:ho,created:ho,beforeMount:ho,mounted:ho,beforeUpdate:ho,updated:ho,beforeDestroy:ho,beforeUnmount:ho,destroyed:ho,unmounted:ho,activated:ho,deactivated:ho,errorCaptured:ho,serverPrefetch:ho,components:Ke,directives:Ke,watch:vm,provide:Pn,inject:mm};function Pn(o,e){return e?o?function(){return co(M(o)?o.call(this,this):o,M(e)?e.call(this,this):e)}:e:o}function mm(o,e){return Ke(It(o),It(e))}function It(o){if(L(o)){const e={};for(let r=0;r<o.length;r++)e[o[r]]=o[r];return e}return o}function ho(o,e){return o?[...new Set([].concat(o,e))]:e}function Ke(o,e){return o?co(Object.create(null),o,e):e}function Ln(o,e){return o?L(o)&&L(e)?[...new Set([...o,...e])]:co(Object.create(null),Fr(o),Fr(e??{})):e}function vm(o,e){if(!o)return e;if(!e)return o;const r=co(Object.create(null),o);for(const t in e)r[t]=ho(o[t],e[t]);return r}function zl(){return{app:null,config:{isNativeTag:Ei,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ym=0;function km(o,e){return function(t,n=null){M(t)||(t=co({},t)),n!=null&&!ro(n)&&(n=null);const i=zl(),l=new WeakSet,a=[];let c=!1;const d=i.app={_uid:ym++,_component:t,_props:n,_container:null,_context:i,_instance:null,version:Qm,get config(){return i.config},set config(s){},use(s,...f){return l.has(s)||(s&&M(s.install)?(l.add(s),s.install(d,...f)):M(s)&&(l.add(s),s(d,...f))),d},mixin(s){return i.mixins.includes(s)||i.mixins.push(s),d},component(s,f){return f?(i.components[s]=f,d):i.components[s]},directive(s,f){return f?(i.directives[s]=f,d):i.directives[s]},mount(s,f,p){if(!c){const b=d._ceVNode||Co(t,n);return b.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),o(b,s,p),c=!0,d._container=s,s.__vue_app__=d,it(b.component)}},onUnmount(s){a.push(s)},unmount(){c&&(Fo(a,d._instance,16),o(null,d._container),delete d._container.__vue_app__)},provide(s,f){return i.provides[s]=f,d},runWithContext(s){const f=Be;Be=d;try{return s()}finally{Be=f}}};return d}}let Be=null;function qy(o,e,r=Q){const t=Ne(),n=So(e),i=ge(e),l=El(o,n),a=nl((c,d)=>{let s,f=Q,p;return qh(()=>{const b=o[n];xo(s,b)&&(s=b,d())}),{get(){return c(),r.get?r.get(s):s},set(b){const y=r.set?r.set(b):b;if(!xo(y,s)&&!(f!==Q&&xo(b,f)))return;const w=t.vnode.props;w&&(e in w||n in w||i in w)&&(`onUpdate:${e}`in w||`onUpdate:${n}`in w||`onUpdate:${i}`in w)||(s=b,d()),t.emit(`update:${e}`,y),xo(b,y)&&xo(b,f)&&!xo(y,p)&&d(),f=b,p=y}}});return a[Symbol.iterator]=()=>{let c=0;return{next(){return c<2?{value:c++?l||Q:a,done:!1}:{done:!0}}}},a}const El=(o,e)=>e==="modelValue"||e==="model-value"?o.modelModifiers:o[`${e}Modifiers`]||o[`${So(e)}Modifiers`]||o[`${ge(e)}Modifiers`];function xm(o,e,...r){if(o.isUnmounted)return;const t=o.vnode.props||Q;let n=r;const i=e.startsWith("update:"),l=i&&El(t,e.slice(7));l&&(l.trim&&(n=r.map(s=>io(s)?s.trim():s)),l.number&&(n=r.map(oh)));let a,c=t[a=st(e)]||t[a=st(So(e))];!c&&i&&(c=t[a=st(ge(e))]),c&&Fo(c,o,6,n);const d=t[a+"Once"];if(d){if(!o.emitted)o.emitted={};else if(o.emitted[a])return;o.emitted[a]=!0,Fo(d,o,6,n)}}const wm=new WeakMap;function Tl(o,e,r=!1){const t=r?wm:e.emitsCache,n=t.get(o);if(n!==void 0)return n;const i=o.emits;let l={},a=!1;if(!M(o)){const c=d=>{const s=Tl(d,e,!0);s&&(a=!0,co(l,s))};!r&&e.mixins.length&&e.mixins.forEach(c),o.extends&&c(o.extends),o.mixins&&o.mixins.forEach(c)}return!i&&!a?(ro(o)&&t.set(o,null),null):(L(i)?i.forEach(c=>l[c]=null):co(l,i),ro(o)&&t.set(o,l),l)}function tt(o,e){return!o||!Nr(e)?!1:(e=e.slice(2).replace(/Once$/,""),oo(o,e[0].toLowerCase()+e.slice(1))||oo(o,ge(e))||oo(o,e))}function Nn(o){const{type:e,vnode:r,proxy:t,withProxy:n,propsOptions:[i],slots:l,attrs:a,emit:c,render:d,renderCache:s,props:f,data:p,setupState:b,ctx:y,inheritAttrs:w}=o,z=Ar(o);let R,A;try{if(r.shapeFlag&4){const T=n||t,N=T;R=jo(d.call(N,T,s,f,b,p,y)),A=a}else{const T=e;R=jo(T.length>1?T(f,{attrs:a,slots:l,emit:c}):T(f,null)),A=e.props?a:Cm(a)}}catch(T){or.length=0,Qr(T,o,1),R=Co(go)}let W=R;if(A&&w!==!1){const T=Object.keys(A),{shapeFlag:N}=W;T.length&&N&7&&(i&&T.some(Ut)&&(A=$m(A,i)),W=fe(W,A,!1,!0))}return r.dirs&&(W=fe(W,null,!1,!0),W.dirs=W.dirs?W.dirs.concat(r.dirs):r.dirs),r.transition&&cr(W,r.transition),R=W,Ar(z),R}const Cm=o=>{let e;for(const r in o)(r==="class"||r==="style"||Nr(r))&&((e||(e={}))[r]=o[r]);return e},$m=(o,e)=>{const r={};for(const t in o)(!Ut(t)||!(t.slice(9)in e))&&(r[t]=o[t]);return r};function Bm(o,e,r){const{props:t,children:n,component:i}=o,{props:l,children:a,patchFlag:c}=e,d=i.emitsOptions;if(e.dirs||e.transition)return!0;if(r&&c>=0){if(c&1024)return!0;if(c&16)return t?Mn(t,l,d):!!l;if(c&8){const s=e.dynamicProps;for(let f=0;f<s.length;f++){const p=s[f];if(l[p]!==t[p]&&!tt(d,p))return!0}}}else return(n||a)&&(!a||!a.$stable)?!0:t===l?!1:t?l?Mn(t,l,d):!0:!!l;return!1}function Mn(o,e,r){const t=Object.keys(e);if(t.length!==Object.keys(o).length)return!0;for(let n=0;n<t.length;n++){const i=t[n];if(e[i]!==o[i]&&!tt(r,i))return!0}return!1}function _m({vnode:o,parent:e},r){for(;e;){const t=e.subTree;if(t.suspense&&t.suspense.activeBranch===o&&(t.el=o.el),t===o)(o=e.vnode).el=r,e=e.parent;else break}}const Ol={},Al=()=>Object.create(Ol),Dl=o=>Object.getPrototypeOf(o)===Ol;function Sm(o,e,r,t=!1){const n={},i=Al();o.propsDefaults=Object.create(null),Fl(o,e,n,i);for(const l in o.propsOptions[0])l in n||(n[l]=void 0);r?o.props=t?n:zh(n):o.type.props?o.props=n:o.props=i,o.attrs=i}function Rm(o,e,r,t){const{props:n,attrs:i,vnode:{patchFlag:l}}=o,a=J(n),[c]=o.propsOptions;let d=!1;if((t||l>0)&&!(l&16)){if(l&8){const s=o.vnode.dynamicProps;for(let f=0;f<s.length;f++){let p=s[f];if(tt(o.emitsOptions,p))continue;const b=e[p];if(c)if(oo(i,p))b!==i[p]&&(i[p]=b,d=!0);else{const y=So(p);n[y]=Pt(c,a,y,b,o,!1)}else b!==i[p]&&(i[p]=b,d=!0)}}}else{Fl(o,e,n,i)&&(d=!0);let s;for(const f in a)(!e||!oo(e,f)&&((s=ge(f))===f||!oo(e,s)))&&(c?r&&(r[f]!==void 0||r[s]!==void 0)&&(n[f]=Pt(c,a,f,void 0,o,!0)):delete n[f]);if(i!==a)for(const f in i)(!e||!oo(e,f))&&(delete i[f],d=!0)}d&&Xo(o.attrs,"set","")}function Fl(o,e,r,t){const[n,i]=o.propsOptions;let l=!1,a;if(e)for(let c in e){if(Ye(c))continue;const d=e[c];let s;n&&oo(n,s=So(c))?!i||!i.includes(s)?r[s]=d:(a||(a={}))[s]=d:tt(o.emitsOptions,c)||(!(c in t)||d!==t[c])&&(t[c]=d,l=!0)}if(i){const c=J(r),d=a||Q;for(let s=0;s<i.length;s++){const f=i[s];r[f]=Pt(n,c,f,d[f],o,!oo(d,f))}}return l}function Pt(o,e,r,t,n,i){const l=o[r];if(l!=null){const a=oo(l,"default");if(a&&t===void 0){const c=l.default;if(l.type!==Function&&!l.skipFactory&&M(c)){const{propsDefaults:d}=n;if(r in d)t=d[r];else{const s=pr(n);t=d[r]=c.call(null,e),s()}}else t=c;n.ce&&n.ce._setProp(r,t)}l[0]&&(i&&!a?t=!1:l[1]&&(t===""||t===ge(r))&&(t=!0))}return t}const zm=new WeakMap;function Il(o,e,r=!1){const t=r?zm:e.propsCache,n=t.get(o);if(n)return n;const i=o.props,l={},a=[];let c=!1;if(!M(o)){const s=f=>{c=!0;const[p,b]=Il(f,e,!0);co(l,p),b&&a.push(...b)};!r&&e.mixins.length&&e.mixins.forEach(s),o.extends&&s(o.extends),o.mixins&&o.mixins.forEach(s)}if(!i&&!c)return ro(o)&&t.set(o,Oe),Oe;if(L(i))for(let s=0;s<i.length;s++){const f=So(i[s]);jn(f)&&(l[f]=Q)}else if(i)for(const s in i){const f=So(s);if(jn(f)){const p=i[s],b=l[f]=L(p)||M(p)?{type:p}:co({},p),y=b.type;let w=!1,z=!0;if(L(y))for(let R=0;R<y.length;++R){const A=y[R],W=M(A)&&A.name;if(W==="Boolean"){w=!0;break}else W==="String"&&(z=!1)}else w=M(y)&&y.name==="Boolean";b[0]=w,b[1]=z,(w||oo(b,"default"))&&a.push(f)}}const d=[l,a];return ro(o)&&t.set(o,d),d}function jn(o){return o[0]!=="$"&&!Ye(o)}const ln=o=>o==="_"||o==="_ctx"||o==="$stable",an=o=>L(o)?o.map(jo):[jo(o)],Em=(o,e,r)=>{if(e._n)return e;const t=Kh((...n)=>an(e(...n)),r);return t._c=!1,t},Pl=(o,e,r)=>{const t=o._ctx;for(const n in o){if(ln(n))continue;const i=o[n];if(M(i))e[n]=Em(n,i,t);else if(i!=null){const l=an(i);e[n]=()=>l}}},Ll=(o,e)=>{const r=an(e);o.slots.default=()=>r},Nl=(o,e,r)=>{for(const t in e)(r||!ln(t))&&(o[t]=e[t])},Tm=(o,e,r)=>{const t=o.slots=Al();if(o.vnode.shapeFlag&32){const n=e._;n?(Nl(t,e,r),r&&Fi(t,"_",n,!0)):Pl(e,t)}else e&&Ll(o,e)},Om=(o,e,r)=>{const{vnode:t,slots:n}=o;let i=!0,l=Q;if(t.shapeFlag&32){const a=e._;a?r&&a===1?i=!1:Nl(n,e,r):(i=!e.$stable,Pl(e,n)),l=e}else e&&(Ll(o,e),l={default:1});if(i)for(const a in n)!ln(a)&&l[a]==null&&delete n[a]},mo=Pm;function Am(o){return Dm(o)}function Dm(o,e){const r=Vr();r.__VUE__=!0;const{insert:t,remove:n,patchProp:i,createElement:l,createText:a,createComment:c,setText:d,setElementText:s,parentNode:f,nextSibling:p,setScopeId:b=Wo,insertStaticContent:y}=o,w=(u,g,h,x=null,m=null,v=null,S=void 0,B=null,$=!!g.dynamicChildren)=>{if(u===g)return;u&&!xe(u,g)&&(x=_e(u),bo(u,m,v,!0),u=null),g.patchFlag===-2&&($=!1,g.dynamicChildren=null);const{type:k,ref:P,shapeFlag:E}=g;switch(k){case nt:z(u,g,h,x);break;case go:R(u,g,h,x);break;case vt:u==null&&A(g,h,x,S);break;case wo:_(u,g,h,x,m,v,S,B,$);break;default:E&1?N(u,g,h,x,m,v,S,B,$):E&6?Y(u,g,h,x,m,v,S,B,$):(E&64||E&128)&&k.process(u,g,h,x,m,v,S,B,$,pe)}P!=null&&m?Ze(P,u&&u.ref,v,g||u,!g):P==null&&u&&u.ref!=null&&Ze(u.ref,null,v,u,!0)},z=(u,g,h,x)=>{if(u==null)t(g.el=a(g.children),h,x);else{const m=g.el=u.el;g.children!==u.children&&d(m,g.children)}},R=(u,g,h,x)=>{u==null?t(g.el=c(g.children||""),h,x):g.el=u.el},A=(u,g,h,x)=>{[u.el,u.anchor]=y(u.children,g,h,x,u.el,u.anchor)},W=({el:u,anchor:g},h,x)=>{let m;for(;u&&u!==g;)m=p(u),t(u,h,x),u=m;t(g,h,x)},T=({el:u,anchor:g})=>{let h;for(;u&&u!==g;)h=p(u),n(u),u=h;n(g)},N=(u,g,h,x,m,v,S,B,$)=>{if(g.type==="svg"?S="svg":g.type==="math"&&(S="mathml"),u==null)U(g,h,x,m,v,S,B,$);else{const k=u.el&&u.el._isVueCE?u.el:null;try{k&&k._beginPatch(),C(u,g,m,v,S,B,$)}finally{k&&k._endPatch()}}},U=(u,g,h,x,m,v,S,B)=>{let $,k;const{props:P,shapeFlag:E,transition:F,dirs:j}=u;if($=u.el=l(u.type,v,P&&P.is,P),E&8?s($,u.children):E&16&&D(u.children,$,null,x,m,mt(u,v),S,B),j&&he(u,null,x,"created"),G($,u,u.scopeId,S,x),P){for(const to in P)to!=="value"&&!Ye(to)&&i($,to,null,P[to],v,x);"value"in P&&i($,"value",null,P.value,v),(k=P.onVnodeBeforeMount)&&No(k,x,u)}j&&he(u,null,x,"beforeMount");const q=Fm(m,F);q&&F.beforeEnter($),t($,g,h),((k=P&&P.onVnodeMounted)||q||j)&&mo(()=>{k&&No(k,x,u),q&&F.enter($),j&&he(u,null,x,"mounted")},m)},G=(u,g,h,x,m)=>{if(h&&b(u,h),x)for(let v=0;v<x.length;v++)b(u,x[v]);if(m){let v=m.subTree;if(g===v||Wl(v.type)&&(v.ssContent===g||v.ssFallback===g)){const S=m.vnode;G(u,S,S.scopeId,S.slotScopeIds,m.parent)}}},D=(u,g,h,x,m,v,S,B,$=0)=>{for(let k=$;k<u.length;k++){const P=u[k]=B?ce(u[k]):jo(u[k]);w(null,P,g,h,x,m,v,S,B)}},C=(u,g,h,x,m,v,S)=>{const B=g.el=u.el;let{patchFlag:$,dynamicChildren:k,dirs:P}=g;$|=u.patchFlag&16;const E=u.props||Q,F=g.props||Q;let j;if(h&&me(h,!1),(j=F.onVnodeBeforeUpdate)&&No(j,h,g,u),P&&he(g,u,h,"beforeUpdate"),h&&me(h,!0),(E.innerHTML&&F.innerHTML==null||E.textContent&&F.textContent==null)&&s(B,""),k?I(u.dynamicChildren,k,B,h,x,mt(g,m),v):S||Z(u,g,B,null,h,x,mt(g,m),v,!1),$>0){if($&16)K(B,E,F,h,m);else if($&2&&E.class!==F.class&&i(B,"class",null,F.class,m),$&4&&i(B,"style",E.style,F.style,m),$&8){const q=g.dynamicProps;for(let to=0;to<q.length;to++){const eo=q[to],yo=E[eo],ko=F[eo];(ko!==yo||eo==="value")&&i(B,eo,yo,ko,m,h)}}$&1&&u.children!==g.children&&s(B,g.children)}else!S&&k==null&&K(B,E,F,h,m);((j=F.onVnodeUpdated)||P)&&mo(()=>{j&&No(j,h,g,u),P&&he(g,u,h,"updated")},x)},I=(u,g,h,x,m,v,S)=>{for(let B=0;B<g.length;B++){const $=u[B],k=g[B],P=$.el&&($.type===wo||!xe($,k)||$.shapeFlag&198)?f($.el):h;w($,k,P,null,x,m,v,S,!0)}},K=(u,g,h,x,m)=>{if(g!==h){if(g!==Q)for(const v in g)!Ye(v)&&!(v in h)&&i(u,v,g[v],null,m,x);for(const v in h){if(Ye(v))continue;const S=h[v],B=g[v];S!==B&&v!=="value"&&i(u,v,B,S,m,x)}"value"in h&&i(u,"value",g.value,h.value,m)}},_=(u,g,h,x,m,v,S,B,$)=>{const k=g.el=u?u.el:a(""),P=g.anchor=u?u.anchor:a("");let{patchFlag:E,dynamicChildren:F,slotScopeIds:j}=g;j&&(B=B?B.concat(j):j),u==null?(t(k,h,x),t(P,h,x),D(g.children||[],h,P,m,v,S,B,$)):E>0&&E&64&&F&&u.dynamicChildren&&u.dynamicChildren.length===F.length?(I(u.dynamicChildren,F,h,m,v,S,B),(g.key!=null||m&&g===m.subTree)&&cn(u,g,!0)):Z(u,g,h,P,m,v,S,B,$)},Y=(u,g,h,x,m,v,S,B,$)=>{g.slotScopeIds=B,u==null?g.shapeFlag&512?m.ctx.activate(g,h,x,S,$):O(g,h,x,m,v,S,$):X(u,g,$)},O=(u,g,h,x,m,v,S)=>{const B=u.component=Km(u,x,m);if(et(u)&&(B.ctx.renderer=pe),Um(B,!1,S),B.asyncDep){if(m&&m.registerDep(B,H,S),!u.el){const $=B.subTree=Co(go);R(null,$,g,h),u.placeholder=$.el}}else H(B,u,g,h,m,v,S)},X=(u,g,h)=>{const x=g.component=u.component;if(Bm(u,g,h))if(x.asyncDep&&!x.asyncResolved){V(x,g,h);return}else x.next=g,x.update();else g.el=u.el,x.vnode=g},H=(u,g,h,x,m,v,S)=>{const B=()=>{if(u.isMounted){let{next:E,bu:F,u:j,parent:q,vnode:to}=u;{const Po=Ml(u);if(Po){E&&(E.el=to.el,V(u,E,S)),Po.asyncDep.then(()=>{u.isUnmounted||B()});return}}let eo=E,yo;me(u,!1),E?(E.el=to.el,V(u,E,S)):E=to,F&&dt(F),(yo=E.props&&E.props.onVnodeBeforeUpdate)&&No(yo,q,E,to),me(u,!0);const ko=Nn(u),Io=u.subTree;u.subTree=ko,w(Io,ko,f(Io.el),_e(Io),u,m,v),E.el=ko.el,eo===null&&_m(u,ko.el),j&&mo(j,m),(yo=E.props&&E.props.onVnodeUpdated)&&mo(()=>No(yo,q,E,to),m)}else{let E;const{el:F,props:j}=g,{bm:q,m:to,parent:eo,root:yo,type:ko}=u,Io=Ie(g);me(u,!1),q&&dt(q),!Io&&(E=j&&j.onVnodeBeforeMount)&&No(E,eo,g),me(u,!0);{yo.ce&&yo.ce._def.shadowRoot!==!1&&yo.ce._injectChildStyle(ko);const Po=u.subTree=Nn(u);w(null,Po,h,x,u,m,v),g.el=Po.el}if(to&&mo(to,m),!Io&&(E=j&&j.onVnodeMounted)){const Po=g;mo(()=>No(E,eo,Po),m)}(g.shapeFlag&256||eo&&Ie(eo.vnode)&&eo.vnode.shapeFlag&256)&&u.a&&mo(u.a,m),u.isMounted=!0,g=h=x=null}};u.scope.on();const $=u.effect=new Wi(B);u.scope.off();const k=u.update=$.run.bind($),P=u.job=$.runIfDirty.bind($);P.i=u,P.id=u.uid,$.scheduler=()=>on(P),me(u,!0),k()},V=(u,g,h)=>{g.component=u;const x=u.vnode.props;u.vnode=g,u.next=null,Rm(u,g.props,x,h),Om(u,g.children,h),Zo(),zn(u),Qo()},Z=(u,g,h,x,m,v,S,B,$=!1)=>{const k=u&&u.children,P=u?u.shapeFlag:0,E=g.children,{patchFlag:F,shapeFlag:j}=g;if(F>0){if(F&128){Ho(k,E,h,x,m,v,S,B,$);return}else if(F&256){Ro(k,E,h,x,m,v,S,B,$);return}}j&8?(P&16&&te(k,m,v),E!==k&&s(h,E)):P&16?j&16?Ho(k,E,h,x,m,v,S,B,$):te(k,m,v,!0):(P&8&&s(h,""),j&16&&D(E,h,x,m,v,S,B,$))},Ro=(u,g,h,x,m,v,S,B,$)=>{u=u||Oe,g=g||Oe;const k=u.length,P=g.length,E=Math.min(k,P);let F;for(F=0;F<E;F++){const j=g[F]=$?ce(g[F]):jo(g[F]);w(u[F],j,h,null,m,v,S,B,$)}k>P?te(u,m,v,!0,!1,E):D(g,h,x,m,v,S,B,$,E)},Ho=(u,g,h,x,m,v,S,B,$)=>{let k=0;const P=g.length;let E=u.length-1,F=P-1;for(;k<=E&&k<=F;){const j=u[k],q=g[k]=$?ce(g[k]):jo(g[k]);if(xe(j,q))w(j,q,h,null,m,v,S,B,$);else break;k++}for(;k<=E&&k<=F;){const j=u[E],q=g[F]=$?ce(g[F]):jo(g[F]);if(xe(j,q))w(j,q,h,null,m,v,S,B,$);else break;E--,F--}if(k>E){if(k<=F){const j=F+1,q=j<P?g[j].el:x;for(;k<=F;)w(null,g[k]=$?ce(g[k]):jo(g[k]),h,q,m,v,S,B,$),k++}}else if(k>F)for(;k<=E;)bo(u[k],m,v,!0),k++;else{const j=k,q=k,to=new Map;for(k=q;k<=F;k++){const $o=g[k]=$?ce(g[k]):jo(g[k]);$o.key!=null&&to.set($o.key,k)}let eo,yo=0;const ko=F-q+1;let Io=!1,Po=0;const We=new Array(ko);for(k=0;k<ko;k++)We[k]=0;for(k=j;k<=E;k++){const $o=u[k];if(yo>=ko){bo($o,m,v,!0);continue}let Lo;if($o.key!=null)Lo=to.get($o.key);else for(eo=q;eo<=F;eo++)if(We[eo-q]===0&&xe($o,g[eo])){Lo=eo;break}Lo===void 0?bo($o,m,v,!0):(We[Lo-q]=k+1,Lo>=Po?Po=Lo:Io=!0,w($o,g[Lo],h,null,m,v,S,B,$),yo++)}const un=Io?Im(We):Oe;for(eo=un.length-1,k=ko-1;k>=0;k--){const $o=q+k,Lo=g[$o],fn=g[$o+1],gn=$o+1<P?fn.el||jl(fn):x;We[k]===0?w(null,Lo,h,gn,m,v,S,B,$):Io&&(eo<0||k!==un[eo]?zo(Lo,h,gn,2):eo--)}}},zo=(u,g,h,x,m=null)=>{const{el:v,type:S,transition:B,children:$,shapeFlag:k}=u;if(k&6){zo(u.component.subTree,g,h,x);return}if(k&128){u.suspense.move(g,h,x);return}if(k&64){S.move(u,g,h,pe);return}if(S===wo){t(v,g,h);for(let E=0;E<$.length;E++)zo($[E],g,h,x);t(u.anchor,g,h);return}if(S===vt){W(u,g,h);return}if(x!==2&&k&1&&B)if(x===0)B.beforeEnter(v),t(v,g,h),mo(()=>B.enter(v),m);else{const{leave:E,delayLeave:F,afterLeave:j}=B,q=()=>{u.ctx.isUnmounted?n(v):t(v,g,h)},to=()=>{v._isLeaving&&v[Go](!0),E(v,()=>{q(),j&&j()})};F?F(v,q,to):to()}else t(v,g,h)},bo=(u,g,h,x=!1,m=!1)=>{const{type:v,props:S,ref:B,children:$,dynamicChildren:k,shapeFlag:P,patchFlag:E,dirs:F,cacheIndex:j}=u;if(E===-2&&(m=!1),B!=null&&(Zo(),Ze(B,null,h,u,!0),Qo()),j!=null&&(g.renderCache[j]=void 0),P&256){g.ctx.deactivate(u);return}const q=P&1&&F,to=!Ie(u);let eo;if(to&&(eo=S&&S.onVnodeBeforeUnmount)&&No(eo,g,u),P&6)hr(u.component,h,x);else{if(P&128){u.suspense.unmount(h,x);return}q&&he(u,null,g,"beforeUnmount"),P&64?u.type.remove(u,g,h,pe,x):k&&!k.hasOnce&&(v!==wo||E>0&&E&64)?te(k,g,h,!1,!0):(v===wo&&E&384||!m&&P&16)&&te($,g,h),x&&Me(u)}(to&&(eo=S&&S.onVnodeUnmounted)||q)&&mo(()=>{eo&&No(eo,g,u),q&&he(u,null,g,"unmounted")},h)},Me=u=>{const{type:g,el:h,anchor:x,transition:m}=u;if(g===wo){br(h,x);return}if(g===vt){T(u);return}const v=()=>{n(h),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(u.shapeFlag&1&&m&&!m.persisted){const{leave:S,delayLeave:B}=m,$=()=>S(h,v);B?B(u.el,v,$):$()}else v()},br=(u,g)=>{let h;for(;u!==g;)h=p(u),n(u),u=h;n(g)},hr=(u,g,h)=>{const{bum:x,scope:m,job:v,subTree:S,um:B,m:$,a:k}=u;Wn($),Wn(k),x&&dt(x),m.stop(),v&&(v.flags|=8,bo(S,u,g,h)),B&&mo(B,g),mo(()=>{u.isUnmounted=!0},g)},te=(u,g,h,x=!1,m=!1,v=0)=>{for(let S=v;S<u.length;S++)bo(u[S],g,h,x,m)},_e=u=>{if(u.shapeFlag&6)return _e(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const g=p(u.anchor||u.el),h=g&&g[fl];return h?p(h):g};let je=!1;const mr=(u,g,h)=>{let x;u==null?g._vnode&&(bo(g._vnode,null,null,!0),x=g._vnode.component):w(g._vnode||null,u,g,null,null,null,h),g._vnode=u,je||(je=!0,zn(x),cl(),je=!1)},pe={p:w,um:bo,m:zo,r:Me,mt:O,mc:D,pc:Z,pbc:I,n:_e,o};return{render:mr,hydrate:void 0,createApp:km(mr)}}function mt({type:o,props:e},r){return r==="svg"&&o==="foreignObject"||r==="mathml"&&o==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:r}function me({effect:o,job:e},r){r?(o.flags|=32,e.flags|=4):(o.flags&=-33,e.flags&=-5)}function Fm(o,e){return(!o||o&&!o.pendingBranch)&&e&&!e.persisted}function cn(o,e,r=!1){const t=o.children,n=e.children;if(L(t)&&L(n))for(let i=0;i<t.length;i++){const l=t[i];let a=n[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=n[i]=ce(n[i]),a.el=l.el),!r&&a.patchFlag!==-2&&cn(l,a)),a.type===nt&&(a.patchFlag!==-1?a.el=l.el:a.__elIndex=i+(o.type===wo?1:0)),a.type===go&&!a.el&&(a.el=l.el)}}function Im(o){const e=o.slice(),r=[0];let t,n,i,l,a;const c=o.length;for(t=0;t<c;t++){const d=o[t];if(d!==0){if(n=r[r.length-1],o[n]<d){e[t]=n,r.push(t);continue}for(i=0,l=r.length-1;i<l;)a=i+l>>1,o[r[a]]<d?i=a+1:l=a;d<o[r[i]]&&(i>0&&(e[t]=r[i-1]),r[i]=t)}}for(i=r.length,l=r[i-1];i-- >0;)r[i]=l,l=e[l];return r}function Ml(o){const e=o.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ml(e)}function Wn(o){if(o)for(let e=0;e<o.length;e++)o[e].flags|=8}function jl(o){if(o.placeholder)return o.placeholder;const e=o.component;return e?jl(e.subTree):null}const Wl=o=>o.__isSuspense;function Pm(o,e){e&&e.pendingBranch?L(o)?e.effects.push(...o):e.effects.push(o):Vh(o)}const wo=Symbol.for("v-fgt"),nt=Symbol.for("v-txt"),go=Symbol.for("v-cmt"),vt=Symbol.for("v-stc"),or=[];let Bo=null;function Lt(o=!1){or.push(Bo=o?null:[])}function Lm(){or.pop(),Bo=or[or.length-1]||null}let sr=1;function Pr(o,e=!1){sr+=o,o<0&&Bo&&e&&(Bo.hasOnce=!0)}function Hl(o){return o.dynamicChildren=sr>0?Bo||Oe:null,Lm(),sr>0&&Bo&&Bo.push(o),o}function Jy(o,e,r,t,n,i){return Hl(Kl(o,e,r,t,n,i,!0))}function Nt(o,e,r,t,n){return Hl(Co(o,e,r,t,n,!0))}function dr(o){return o?o.__v_isVNode===!0:!1}function xe(o,e){return o.type===e.type&&o.key===e.key}const Vl=({key:o})=>o??null,Sr=({ref:o,ref_key:e,ref_for:r})=>(typeof o=="number"&&(o=""+o),o!=null?io(o)||lo(o)||M(o)?{i:so,r:o,k:e,f:!!r}:o:null);function Kl(o,e=null,r=null,t=0,n=null,i=o===wo?0:1,l=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:o,props:e,key:e&&Vl(e),ref:e&&Sr(e),scopeId:dl,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:t,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:so};return a?(sn(c,r),i&128&&o.normalize(c)):r&&(c.shapeFlag|=io(r)?8:16),sr>0&&!l&&Bo&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Bo.push(c),c}const Co=Nm;function Nm(o,e=null,r=null,t=0,n=null,i=!1){if((!o||o===Bl)&&(o=go),dr(o)){const a=fe(o,e,!0);return r&&sn(a,r),sr>0&&!i&&Bo&&(a.shapeFlag&6?Bo[Bo.indexOf(o)]=a:Bo.push(a)),a.patchFlag=-2,a}if(Jm(o)&&(o=o.__vccOpts),e){e=Mm(e);let{class:a,style:c}=e;a&&!io(a)&&(e.class=Ur(a)),ro(c)&&(qr(c)&&!L(c)&&(c=co({},c)),e.style=Kr(c))}const l=io(o)?1:Wl(o)?128:gl(o)?64:ro(o)?4:M(o)?2:0;return Kl(o,e,r,t,n,l,i,!0)}function Mm(o){return o?qr(o)||Dl(o)?co({},o):o:null}function fe(o,e,r=!1,t=!1){const{props:n,ref:i,patchFlag:l,children:a,transition:c}=o,d=e?Wm(n||{},e):n,s={__v_isVNode:!0,__v_skip:!0,type:o.type,props:d,key:d&&Vl(d),ref:e&&e.ref?r&&i?L(i)?i.concat(Sr(e)):[i,Sr(e)]:Sr(e):i,scopeId:o.scopeId,slotScopeIds:o.slotScopeIds,children:a,target:o.target,targetStart:o.targetStart,targetAnchor:o.targetAnchor,staticCount:o.staticCount,shapeFlag:o.shapeFlag,patchFlag:e&&o.type!==wo?l===-1?16:l|16:l,dynamicProps:o.dynamicProps,dynamicChildren:o.dynamicChildren,appContext:o.appContext,dirs:o.dirs,transition:c,component:o.component,suspense:o.suspense,ssContent:o.ssContent&&fe(o.ssContent),ssFallback:o.ssFallback&&fe(o.ssFallback),placeholder:o.placeholder,el:o.el,anchor:o.anchor,ctx:o.ctx,ce:o.ce};return c&&t&&cr(s,c.clone(s)),s}function jm(o=" ",e=0){return Co(nt,null,o,e)}function Zy(o="",e=!1){return e?(Lt(),Nt(go,null,o)):Co(go,null,o)}function jo(o){return o==null||typeof o=="boolean"?Co(go):L(o)?Co(wo,null,o.slice()):dr(o)?ce(o):Co(nt,null,String(o))}function ce(o){return o.el===null&&o.patchFlag!==-1||o.memo?o:fe(o)}function sn(o,e){let r=0;const{shapeFlag:t}=o;if(e==null)e=null;else if(L(e))r=16;else if(typeof e=="object")if(t&65){const n=e.default;n&&(n._c&&(n._d=!1),sn(o,n()),n._c&&(n._d=!0));return}else{r=32;const n=e._;!n&&!Dl(e)?e._ctx=so:n===3&&so&&(so.slots._===1?e._=1:(e._=2,o.patchFlag|=1024))}else M(e)?(e={default:e,_ctx:so},r=32):(e=String(e),t&64?(r=16,e=[jm(e)]):r=8);o.children=e,o.shapeFlag|=r}function Wm(...o){const e={};for(let r=0;r<o.length;r++){const t=o[r];for(const n in t)if(n==="class")e.class!==t.class&&(e.class=Ur([e.class,t.class]));else if(n==="style")e.style=Kr([e.style,t.style]);else if(Nr(n)){const i=e[n],l=t[n];l&&i!==l&&!(L(i)&&i.includes(l))&&(e[n]=i?[].concat(i,l):l)}else n!==""&&(e[n]=t[n])}return e}function No(o,e,r,t=null){Fo(o,e,7,[r,t])}const Hm=zl();let Vm=0;function Km(o,e,r){const t=o.type,n=(e?e.appContext:o.appContext)||Hm,i={uid:Vm++,vnode:o,type:t,parent:e,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ni(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(n.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Il(t,n),emitsOptions:Tl(t,n),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:t.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=xm.bind(null,i),o.ce&&o.ce(i),i}let po=null;const Ne=()=>po||so;let Lr,Mt;{const o=Vr(),e=(r,t)=>{let n;return(n=o[r])||(n=o[r]=[]),n.push(t),i=>{n.length>1?n.forEach(l=>l(i)):n[0](i)}};Lr=e("__VUE_INSTANCE_SETTERS__",r=>po=r),Mt=e("__VUE_SSR_SETTERS__",r=>ur=r)}const pr=o=>{const e=po;return Lr(o),o.scope.on(),()=>{o.scope.off(),Lr(e)}},Hn=()=>{po&&po.scope.off(),Lr(null)};function Ul(o){return o.vnode.shapeFlag&4}let ur=!1;function Um(o,e=!1,r=!1){e&&Mt(e);const{props:t,children:n}=o.vnode,i=Ul(o);Sm(o,t,i,e),Tm(o,n,r||e);const l=i?Ym(o,e):void 0;return e&&Mt(!1),l}function Ym(o,e){const r=o.type;o.accessCache=Object.create(null),o.proxy=new Proxy(o.ctx,gm);const{setup:t}=r;if(t){Zo();const n=o.setupContext=t.length>1?Xm(o):null,i=pr(o),l=gr(t,o,0,[o.props,n]),a=Oi(l);if(Qo(),i(),(a||o.sp)&&!Ie(o)&&xl(o),a){if(l.then(Hn,Hn),e)return l.then(c=>{Vn(o,c)}).catch(c=>{Qr(c,o,0)});o.asyncDep=l}else Vn(o,l)}else Yl(o)}function Vn(o,e,r){M(e)?o.type.__ssrInlineRender?o.ssrRender=e:o.render=e:ro(e)&&(o.setupState=tl(e)),Yl(o)}function Yl(o,e,r){const t=o.type;o.render||(o.render=t.render||Wo);{const n=pr(o);Zo();try{pm(o)}finally{Qo(),n()}}}const Gm={get(o,e){return fo(o,"get",""),o[e]}};function Xm(o){const e=r=>{o.exposed=r||{}};return{attrs:new Proxy(o.attrs,Gm),slots:o.slots,emit:o.emit,expose:e}}function it(o){return o.exposed?o.exposeProxy||(o.exposeProxy=new Proxy(tl(Qt(o.exposed)),{get(e,r){if(r in e)return e[r];if(r in Qe)return Qe[r](o)},has(e,r){return r in e||r in Qe}})):o.proxy}function qm(o,e=!0){return M(o)?o.displayName||o.name:o.name||e&&o.__name}function Jm(o){return M(o)&&"__vccOpts"in o}const lt=(o,e)=>Nh(o,e,ur);function Zm(o,e,r){try{Pr(-1);const t=arguments.length;return t===2?ro(e)&&!L(e)?dr(e)?Co(o,null,[e]):Co(o,e):Co(o,null,e):(t>3?r=Array.prototype.slice.call(arguments,2):t===3&&dr(r)&&(r=[r]),Co(o,e,r))}finally{Pr(1)}}const Qm="3.5.27";let jt;const Kn=typeof window<"u"&&window.trustedTypes;if(Kn)try{jt=Kn.createPolicy("vue",{createHTML:o=>o})}catch{}const Gl=jt?o=>jt.createHTML(o):o=>o,ov="http://www.w3.org/2000/svg",ev="http://www.w3.org/1998/Math/MathML",Yo=typeof document<"u"?document:null,Un=Yo&&Yo.createElement("template"),rv={insert:(o,e,r)=>{e.insertBefore(o,r||null)},remove:o=>{const e=o.parentNode;e&&e.removeChild(o)},createElement:(o,e,r,t)=>{const n=e==="svg"?Yo.createElementNS(ov,o):e==="mathml"?Yo.createElementNS(ev,o):r?Yo.createElement(o,{is:r}):Yo.createElement(o);return o==="select"&&t&&t.multiple!=null&&n.setAttribute("multiple",t.multiple),n},createText:o=>Yo.createTextNode(o),createComment:o=>Yo.createComment(o),setText:(o,e)=>{o.nodeValue=e},setElementText:(o,e)=>{o.textContent=e},parentNode:o=>o.parentNode,nextSibling:o=>o.nextSibling,querySelector:o=>Yo.querySelector(o),setScopeId(o,e){o.setAttribute(e,"")},insertStaticContent(o,e,r,t,n,i){const l=r?r.previousSibling:e.lastChild;if(n&&(n===i||n.nextSibling))for(;e.insertBefore(n.cloneNode(!0),r),!(n===i||!(n=n.nextSibling)););else{Un.innerHTML=Gl(t==="svg"?`<svg>${o}</svg>`:t==="mathml"?`<math>${o}</math>`:o);const a=Un.content;if(t==="svg"||t==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,r)}return[l?l.nextSibling:e.firstChild,r?r.previousSibling:e.lastChild]}},ne="transition",Ve="animation",fr=Symbol("_vtc"),Xl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},tv=co({},hl,Xl),nv=o=>(o.displayName="Transition",o.props=tv,o),Qy=nv((o,{slots:e})=>Zm(em,iv(o),e)),ve=(o,e=[])=>{L(o)?o.forEach(r=>r(...e)):o&&o(...e)},Yn=o=>o?L(o)?o.some(e=>e.length>1):o.length>1:!1;function iv(o){const e={};for(const _ in o)_ in Xl||(e[_]=o[_]);if(o.css===!1)return e;const{name:r="v",type:t,duration:n,enterFromClass:i=`${r}-enter-from`,enterActiveClass:l=`${r}-enter-active`,enterToClass:a=`${r}-enter-to`,appearFromClass:c=i,appearActiveClass:d=l,appearToClass:s=a,leaveFromClass:f=`${r}-leave-from`,leaveActiveClass:p=`${r}-leave-active`,leaveToClass:b=`${r}-leave-to`}=o,y=lv(n),w=y&&y[0],z=y&&y[1],{onBeforeEnter:R,onEnter:A,onEnterCancelled:W,onLeave:T,onLeaveCancelled:N,onBeforeAppear:U=R,onAppear:G=A,onAppearCancelled:D=W}=e,C=(_,Y,O,X)=>{_._enterCancelled=X,ye(_,Y?s:a),ye(_,Y?d:l),O&&O()},I=(_,Y)=>{_._isLeaving=!1,ye(_,f),ye(_,b),ye(_,p),Y&&Y()},K=_=>(Y,O)=>{const X=_?G:A,H=()=>C(Y,_,O);ve(X,[Y,H]),Gn(()=>{ye(Y,_?c:i),Uo(Y,_?s:a),Yn(X)||Xn(Y,t,w,H)})};return co(e,{onBeforeEnter(_){ve(R,[_]),Uo(_,i),Uo(_,l)},onBeforeAppear(_){ve(U,[_]),Uo(_,c),Uo(_,d)},onEnter:K(!1),onAppear:K(!0),onLeave(_,Y){_._isLeaving=!0;const O=()=>I(_,Y);Uo(_,f),_._enterCancelled?(Uo(_,p),Zn(_)):(Zn(_),Uo(_,p)),Gn(()=>{_._isLeaving&&(ye(_,f),Uo(_,b),Yn(T)||Xn(_,t,z,O))}),ve(T,[_,O])},onEnterCancelled(_){C(_,!1,void 0,!0),ve(W,[_])},onAppearCancelled(_){C(_,!0,void 0,!0),ve(D,[_])},onLeaveCancelled(_){I(_),ve(N,[_])}})}function lv(o){if(o==null)return null;if(ro(o))return[yt(o.enter),yt(o.leave)];{const e=yt(o);return[e,e]}}function yt(o){return eh(o)}function Uo(o,e){e.split(/\s+/).forEach(r=>r&&o.classList.add(r)),(o[fr]||(o[fr]=new Set)).add(e)}function ye(o,e){e.split(/\s+/).forEach(t=>t&&o.classList.remove(t));const r=o[fr];r&&(r.delete(e),r.size||(o[fr]=void 0))}function Gn(o){requestAnimationFrame(()=>{requestAnimationFrame(o)})}let av=0;function Xn(o,e,r,t){const n=o._endId=++av,i=()=>{n===o._endId&&t()};if(r!=null)return setTimeout(i,r);const{type:l,timeout:a,propCount:c}=cv(o,e);if(!l)return t();const d=l+"end";let s=0;const f=()=>{o.removeEventListener(d,p),i()},p=b=>{b.target===o&&++s>=c&&f()};setTimeout(()=>{s<c&&f()},a+1),o.addEventListener(d,p)}function cv(o,e){const r=window.getComputedStyle(o),t=y=>(r[y]||"").split(", "),n=t(`${ne}Delay`),i=t(`${ne}Duration`),l=qn(n,i),a=t(`${Ve}Delay`),c=t(`${Ve}Duration`),d=qn(a,c);let s=null,f=0,p=0;e===ne?l>0&&(s=ne,f=l,p=i.length):e===Ve?d>0&&(s=Ve,f=d,p=c.length):(f=Math.max(l,d),s=f>0?l>d?ne:Ve:null,p=s?s===ne?i.length:c.length:0);const b=s===ne&&/\b(?:transform|all)(?:,|$)/.test(t(`${ne}Property`).toString());return{type:s,timeout:f,propCount:p,hasTransform:b}}function qn(o,e){for(;o.length<e.length;)o=o.concat(o);return Math.max(...e.map((r,t)=>Jn(r)+Jn(o[t])))}function Jn(o){return o==="auto"?0:Number(o.slice(0,-1).replace(",","."))*1e3}function Zn(o){return(o?o.ownerDocument:document).body.offsetHeight}function sv(o,e,r){const t=o[fr];t&&(e=(e?[e,...t]:[...t]).join(" ")),e==null?o.removeAttribute("class"):r?o.setAttribute("class",e):o.className=e}const Qn=Symbol("_vod"),dv=Symbol("_vsh"),uv=Symbol(""),fv=/(?:^|;)\s*display\s*:/;function gv(o,e,r){const t=o.style,n=io(r);let i=!1;if(r&&!n){if(e)if(io(e))for(const l of e.split(";")){const a=l.slice(0,l.indexOf(":")).trim();r[a]==null&&Rr(t,a,"")}else for(const l in e)r[l]==null&&Rr(t,l,"");for(const l in r)l==="display"&&(i=!0),Rr(t,l,r[l])}else if(n){if(e!==r){const l=t[uv];l&&(r+=";"+l),t.cssText=r,i=fv.test(r)}}else e&&o.removeAttribute("style");Qn in o&&(o[Qn]=i?t.display:"",o[dv]&&(t.display="none"))}const oi=/\s*!important$/;function Rr(o,e,r){if(L(r))r.forEach(t=>Rr(o,e,t));else if(r==null&&(r=""),e.startsWith("--"))o.setProperty(e,r);else{const t=pv(o,e);oi.test(r)?o.setProperty(ge(t),r.replace(oi,""),"important"):o[t]=r}}const ei=["Webkit","Moz","ms"],kt={};function pv(o,e){const r=kt[e];if(r)return r;let t=So(e);if(t!=="filter"&&t in o)return kt[e]=t;t=Hr(t);for(let n=0;n<ei.length;n++){const i=ei[n]+t;if(i in o)return kt[e]=i}return e}const ri="http://www.w3.org/1999/xlink";function ti(o,e,r,t,n,i=ah(e)){t&&e.startsWith("xlink:")?r==null?o.removeAttributeNS(ri,e.slice(6,e.length)):o.setAttributeNS(ri,e,r):r==null||i&&!Ii(r)?o.removeAttribute(e):o.setAttribute(e,i?"":ee(r)?String(r):r)}function ni(o,e,r,t,n){if(e==="innerHTML"||e==="textContent"){r!=null&&(o[e]=e==="innerHTML"?Gl(r):r);return}const i=o.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?o.getAttribute("value")||"":o.value,c=r==null?o.type==="checkbox"?"on":"":String(r);(a!==c||!("_value"in o))&&(o.value=c),r==null&&o.removeAttribute(e),o._value=r;return}let l=!1;if(r===""||r==null){const a=typeof o[e];a==="boolean"?r=Ii(r):r==null&&a==="string"?(r="",l=!0):a==="number"&&(r=0,l=!0)}try{o[e]=r}catch{}l&&o.removeAttribute(n||e)}function bv(o,e,r,t){o.addEventListener(e,r,t)}function hv(o,e,r,t){o.removeEventListener(e,r,t)}const ii=Symbol("_vei");function mv(o,e,r,t,n=null){const i=o[ii]||(o[ii]={}),l=i[e];if(t&&l)l.value=t;else{const[a,c]=vv(e);if(t){const d=i[e]=xv(t,n);bv(o,a,d,c)}else l&&(hv(o,a,l,c),i[e]=void 0)}}const li=/(?:Once|Passive|Capture)$/;function vv(o){let e;if(li.test(o)){e={};let t;for(;t=o.match(li);)o=o.slice(0,o.length-t[0].length),e[t[0].toLowerCase()]=!0}return[o[2]===":"?o.slice(3):ge(o.slice(2)),e]}let xt=0;const yv=Promise.resolve(),kv=()=>xt||(yv.then(()=>xt=0),xt=Date.now());function xv(o,e){const r=t=>{if(!t._vts)t._vts=Date.now();else if(t._vts<=r.attached)return;Fo(wv(t,r.value),e,5,[t])};return r.value=o,r.attached=kv(),r}function wv(o,e){if(L(e)){const r=o.stopImmediatePropagation;return o.stopImmediatePropagation=()=>{r.call(o),o._stopped=!0},e.map(t=>n=>!n._stopped&&t&&t(n))}else return e}const ai=o=>o.charCodeAt(0)===111&&o.charCodeAt(1)===110&&o.charCodeAt(2)>96&&o.charCodeAt(2)<123,Cv=(o,e,r,t,n,i)=>{const l=n==="svg";e==="class"?sv(o,t,l):e==="style"?gv(o,r,t):Nr(e)?Ut(e)||mv(o,e,r,t,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$v(o,e,t,l))?(ni(o,e,t),!o.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ti(o,e,t,l,i,e!=="value")):o._isVueCE&&(/[A-Z]/.test(e)||!io(t))?ni(o,So(e),t,i,e):(e==="true-value"?o._trueValue=t:e==="false-value"&&(o._falseValue=t),ti(o,e,t,l))};function $v(o,e,r,t){if(t)return!!(e==="innerHTML"||e==="textContent"||e in o&&ai(e)&&M(r));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&o.tagName==="IFRAME"||e==="form"||e==="list"&&o.tagName==="INPUT"||e==="type"&&o.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const n=o.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return ai(e)&&io(r)?!1:e in o}const Bv=["ctrl","shift","alt","meta"],_v={stop:o=>o.stopPropagation(),prevent:o=>o.preventDefault(),self:o=>o.target!==o.currentTarget,ctrl:o=>!o.ctrlKey,shift:o=>!o.shiftKey,alt:o=>!o.altKey,meta:o=>!o.metaKey,left:o=>"button"in o&&o.button!==0,middle:o=>"button"in o&&o.button!==1,right:o=>"button"in o&&o.button!==2,exact:(o,e)=>Bv.some(r=>o[`${r}Key`]&&!e.includes(r))},ok=(o,e)=>{const r=o._withMods||(o._withMods={}),t=e.join(".");return r[t]||(r[t]=((n,...i)=>{for(let l=0;l<e.length;l++){const a=_v[e[l]];if(a&&a(n,e))return}return o(n,...i)}))},Sv=co({patchProp:Cv},rv);let ci;function Rv(){return ci||(ci=Am(Sv))}const ek=((...o)=>{const e=Rv().createApp(...o),{mount:r}=e;return e.mount=t=>{const n=Ev(t);if(!n)return;const i=e._component;!M(i)&&!i.render&&!i.template&&(i.template=n.innerHTML),n.nodeType===1&&(n.textContent="");const l=r(n,!1,zv(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),l},e});function zv(o){if(o instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&o instanceof MathMLElement)return"mathml"}function Ev(o){return io(o)?document.querySelector(o):o}let ql;const at=o=>ql=o,Jl=Symbol();function Wt(o){return o&&typeof o=="object"&&Object.prototype.toString.call(o)==="[object Object]"&&typeof o.toJSON!="function"}var er;(function(o){o.direct="direct",o.patchObject="patch object",o.patchFunction="patch function"})(er||(er={}));function rk(){const o=Mi(!0),e=o.run(()=>Jr({}));let r=[],t=[];const n=Qt({install(i){at(n),n._a=i,i.provide(Jl,n),i.config.globalProperties.$pinia=n,t.forEach(l=>r.push(l)),t=[]},use(i){return this._a?r.push(i):t.push(i),this},_p:r,_a:null,_e:o,_s:new Map,state:e});return n}const Zl=()=>{};function si(o,e,r,t=Zl){o.add(e);const n=()=>{o.delete(e)&&t()};return!r&&ji()&&sh(n),n}function Re(o,...e){o.forEach(r=>{r(...e)})}const Tv=o=>o(),di=Symbol(),wt=Symbol();function Ht(o,e){o instanceof Map&&e instanceof Map?e.forEach((r,t)=>o.set(t,r)):o instanceof Set&&e instanceof Set&&e.forEach(o.add,o);for(const r in e){if(!e.hasOwnProperty(r))continue;const t=e[r],n=o[r];Wt(n)&&Wt(t)&&o.hasOwnProperty(r)&&!lo(t)&&!Jo(t)?o[r]=Ht(n,t):o[r]=t}return o}const Ov=Symbol();function Av(o){return!Wt(o)||!Object.prototype.hasOwnProperty.call(o,Ov)}const{assign:ie}=Object;function Dv(o){return!!(lo(o)&&o.effect)}function Fv(o,e,r,t){const{state:n,actions:i,getters:l}=e,a=r.state.value[o];let c;function d(){a||(r.state.value[o]=n?n():{});const s=Dh(r.state.value[o]);return ie(s,i,Object.keys(l||{}).reduce((f,p)=>(f[p]=Qt(lt(()=>{at(r);const b=r._s.get(o);return l[p].call(b,b)})),f),{}))}return c=Ql(o,d,e,r,t,!0),c}function Ql(o,e,r={},t,n,i){let l;const a=ie({actions:{}},r),c={deep:!0};let d,s,f=new Set,p=new Set,b;const y=t.state.value[o];!i&&!y&&(t.state.value[o]={});let w;function z(D){let C;d=s=!1,typeof D=="function"?(D(t.state.value[o]),C={type:er.patchFunction,storeId:o,events:b}):(Ht(t.state.value[o],D),C={type:er.patchObject,payload:D,storeId:o,events:b});const I=w=Symbol();ot().then(()=>{w===I&&(d=!0)}),s=!0,Re(f,C,t.state.value[o])}const R=i?function(){const{state:C}=r,I=C?C():{};this.$patch(K=>{ie(K,I)})}:Zl;function A(){l.stop(),f.clear(),p.clear(),t._s.delete(o)}const W=(D,C="")=>{if(di in D)return D[wt]=C,D;const I=function(){at(t);const K=Array.from(arguments),_=new Set,Y=new Set;function O(V){_.add(V)}function X(V){Y.add(V)}Re(p,{args:K,name:I[wt],store:N,after:O,onError:X});let H;try{H=D.apply(this&&this.$id===o?this:N,K)}catch(V){throw Re(Y,V),V}return H instanceof Promise?H.then(V=>(Re(_,V),V)).catch(V=>(Re(Y,V),Promise.reject(V))):(Re(_,H),H)};return I[di]=!0,I[wt]=C,I},T={_p:t,$id:o,$onAction:si.bind(null,p),$patch:z,$reset:R,$subscribe(D,C={}){const I=si(f,D,C.detached,()=>K()),K=l.run(()=>$e(()=>t.state.value[o],_=>{(C.flush==="sync"?s:d)&&D({storeId:o,type:er.direct,events:b},_)},ie({},c,C)));return I},$dispose:A},N=Xr(T);t._s.set(o,N);const G=(t._a&&t._a.runWithContext||Tv)(()=>t._e.run(()=>(l=Mi()).run(()=>e({action:W}))));for(const D in G){const C=G[D];if(lo(C)&&!Dv(C)||Jo(C))i||(y&&Av(C)&&(lo(C)?C.value=y[D]:Ht(C,y[D])),t.state.value[o][D]=C);else if(typeof C=="function"){const I=W(C,D);G[D]=I,a.actions[D]=C}}return ie(N,G),ie(J(N),G),Object.defineProperty(N,"$state",{get:()=>t.state.value[o],set:D=>{z(C=>{ie(C,D)})}}),t._p.forEach(D=>{ie(N,l.run(()=>D({store:N,app:t._a,pinia:t,options:a})))}),y&&i&&r.hydrate&&r.hydrate(N.$state,y),d=!0,s=!0,N}function tk(o,e,r){let t;const n=typeof e=="function";t=n?r:e;function i(l,a){const c=Yh();return l=l||(c?qe(Jl,null):null),l&&at(l),l=ql,l._s.has(o)||(n?Ql(o,e,t,l):Fv(o,t,l)),l._s.get(o)}return i.$id=o,i}var nk=`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    .p-collapsible-enter-active {
        animation: p-animate-collapsible-expand 0.2s ease-out;
        overflow: hidden;
    }

    .p-collapsible-leave-active {
        animation: p-animate-collapsible-collapse 0.2s ease-out;
        overflow: hidden;
    }

    @keyframes p-animate-collapsible-expand {
        from {
            grid-template-rows: 0fr;
        }
        to {
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-collapsible-collapse {
        from {
            grid-template-rows: 1fr;
        }
        to {
            grid-template-rows: 0fr;
        }
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: var(--px-mask-background, dt('mask.background'));
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter-active {
        animation: p-animate-overlay-mask-enter dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave-active {
        animation: p-animate-overlay-mask-leave dt('mask.transition.duration') forwards;
    }

    @keyframes p-animate-overlay-mask-enter {
        from {
            background: transparent;
        }
        to {
            background: var(--px-mask-background, dt('mask.background'));
        }
    }
    @keyframes p-animate-overlay-mask-leave {
        from {
            background: var(--px-mask-background, dt('mask.background'));
        }
        to {
            background: transparent;
        }
    }

    .p-anchored-overlay-enter-active {
        animation: p-animate-anchored-overlay-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-anchored-overlay-leave-active {
        animation: p-animate-anchored-overlay-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    @keyframes p-animate-anchored-overlay-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-anchored-overlay-leave {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`,ik=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`,lk=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,ak=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`,ck=`
    .p-dialog {
        max-height: 90%;
        transform: scale(1);
        border-radius: dt('dialog.border.radius');
        box-shadow: dt('dialog.shadow');
        background: dt('dialog.background');
        border: 1px solid dt('dialog.border.color');
        color: dt('dialog.color');
        will-change: transform;
    }

    .p-dialog-content {
        overflow-y: auto;
        padding: dt('dialog.content.padding');
    }

    .p-dialog-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('dialog.header.padding');
    }

    .p-dialog-title {
        font-weight: dt('dialog.title.font.weight');
        font-size: dt('dialog.title.font.size');
    }

    .p-dialog-footer {
        flex-shrink: 0;
        padding: dt('dialog.footer.padding');
        display: flex;
        justify-content: flex-end;
        gap: dt('dialog.footer.gap');
    }

    .p-dialog-header-actions {
        display: flex;
        align-items: center;
        gap: dt('dialog.header.gap');
    }

    .p-dialog-top .p-dialog,
    .p-dialog-bottom .p-dialog,
    .p-dialog-left .p-dialog,
    .p-dialog-right .p-dialog,
    .p-dialog-topleft .p-dialog,
    .p-dialog-topright .p-dialog,
    .p-dialog-bottomleft .p-dialog,
    .p-dialog-bottomright .p-dialog {
        margin: 1rem;
    }

    .p-dialog-maximized {
        width: 100vw !important;
        height: 100vh !important;
        top: 0px !important;
        left: 0px !important;
        max-height: 100%;
        height: 100%;
        border-radius: 0;
    }

    .p-dialog-maximized .p-dialog-content {
        flex-grow: 1;
    }

    .p-dialog .p-resizable-handle {
        position: absolute;
        font-size: 0.1px;
        display: block;
        cursor: se-resize;
        width: 12px;
        height: 12px;
        right: 1px;
        bottom: 1px;
    }

    .p-dialog-enter-active {
        animation: p-animate-dialog-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-dialog-leave-active {
        animation: p-animate-dialog-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    @keyframes p-animate-dialog-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-dialog-leave {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`,sk=`
    .p-iconfield {
        position: relative;
        display: block;
    }

    .p-inputicon {
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * (dt('icon.size') / 2));
        color: dt('iconfield.icon.color');
        line-height: 1;
        z-index: 1;
    }

    .p-iconfield .p-inputicon:first-child {
        inset-inline-start: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputicon:last-child {
        inset-inline-end: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputtext:not(:first-child),
    .p-iconfield .p-inputwrapper:not(:first-child) .p-inputtext {
        padding-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield .p-inputtext:not(:last-child) {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield:has(.p-inputfield-sm) .p-inputicon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
        margin-top: calc(-1 * (dt('form.field.sm.font.size') / 2));
    }

    .p-iconfield:has(.p-inputfield-lg) .p-inputicon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
        margin-top: calc(-1 * (dt('form.field.lg.font.size') / 2));
    }
`,dk=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`,uk=`
    .p-virtualscroller-loader {
        background: dt('virtualscroller.loader.mask.background');
        color: dt('virtualscroller.loader.mask.color');
    }

    .p-virtualscroller-loading-icon {
        font-size: dt('virtualscroller.loader.icon.size');
        width: dt('virtualscroller.loader.icon.size');
        height: dt('virtualscroller.loader.icon.size');
    }
`,fk=`
    .p-select {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
        background: dt('select.background');
        border: 1px solid dt('select.border.color');
        transition:
            background dt('select.transition.duration'),
            color dt('select.transition.duration'),
            border-color dt('select.transition.duration'),
            outline-color dt('select.transition.duration'),
            box-shadow dt('select.transition.duration');
        border-radius: dt('select.border.radius');
        outline-color: transparent;
        box-shadow: dt('select.shadow');
    }

    .p-select:not(.p-disabled):hover {
        border-color: dt('select.hover.border.color');
    }

    .p-select:not(.p-disabled).p-focus {
        border-color: dt('select.focus.border.color');
        box-shadow: dt('select.focus.ring.shadow');
        outline: dt('select.focus.ring.width') dt('select.focus.ring.style') dt('select.focus.ring.color');
        outline-offset: dt('select.focus.ring.offset');
    }

    .p-select.p-variant-filled {
        background: dt('select.filled.background');
    }

    .p-select.p-variant-filled:not(.p-disabled):hover {
        background: dt('select.filled.hover.background');
    }

    .p-select.p-variant-filled:not(.p-disabled).p-focus {
        background: dt('select.filled.focus.background');
    }

    .p-select.p-invalid {
        border-color: dt('select.invalid.border.color');
    }

    .p-select.p-disabled {
        opacity: 1;
        background: dt('select.disabled.background');
    }

    .p-select-clear-icon {
        align-self: center;
        color: dt('select.clear.icon.color');
        inset-inline-end: dt('select.dropdown.width');
    }

    .p-select-dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: transparent;
        color: dt('select.dropdown.color');
        width: dt('select.dropdown.width');
        border-start-end-radius: dt('select.border.radius');
        border-end-end-radius: dt('select.border.radius');
    }

    .p-select-label {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        flex: 1 1 auto;
        width: 1%;
        padding: dt('select.padding.y') dt('select.padding.x');
        text-overflow: ellipsis;
        cursor: pointer;
        color: dt('select.color');
        background: transparent;
        border: 0 none;
        outline: 0 none;
        font-size: 1rem;
    }

    .p-select-label.p-placeholder {
        color: dt('select.placeholder.color');
    }

    .p-select.p-invalid .p-select-label.p-placeholder {
        color: dt('select.invalid.placeholder.color');
    }

    .p-select.p-disabled .p-select-label {
        color: dt('select.disabled.color');
    }

    .p-select-label-empty {
        overflow: hidden;
        opacity: 0;
    }

    input.p-select-label {
        cursor: default;
    }

    .p-select-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('select.overlay.background');
        color: dt('select.overlay.color');
        border: 1px solid dt('select.overlay.border.color');
        border-radius: dt('select.overlay.border.radius');
        box-shadow: dt('select.overlay.shadow');
        min-width: 100%;
        transform-origin: inherit;
        will-change: transform;
    }

    .p-select-header {
        padding: dt('select.list.header.padding');
    }

    .p-select-filter {
        width: 100%;
    }

    .p-select-list-container {
        overflow: auto;
    }

    .p-select-option-group {
        cursor: auto;
        margin: 0;
        padding: dt('select.option.group.padding');
        background: dt('select.option.group.background');
        color: dt('select.option.group.color');
        font-weight: dt('select.option.group.font.weight');
    }

    .p-select-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        padding: dt('select.list.padding');
        gap: dt('select.list.gap');
        display: flex;
        flex-direction: column;
    }

    .p-select-option {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: dt('select.option.padding');
        border: 0 none;
        color: dt('select.option.color');
        background: transparent;
        transition:
            background dt('select.transition.duration'),
            color dt('select.transition.duration'),
            border-color dt('select.transition.duration'),
            box-shadow dt('select.transition.duration'),
            outline-color dt('select.transition.duration');
        border-radius: dt('select.option.border.radius');
    }

    .p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {
        background: dt('select.option.focus.background');
        color: dt('select.option.focus.color');
    }

    .p-select-option:not(.p-select-option-selected):not(.p-disabled):hover {
        background: dt('select.option.focus.background');
        color: dt('select.option.focus.color');
    }

    .p-select-option.p-select-option-selected {
        background: dt('select.option.selected.background');
        color: dt('select.option.selected.color');
    }

    .p-select-option.p-select-option-selected.p-focus {
        background: dt('select.option.selected.focus.background');
        color: dt('select.option.selected.focus.color');
    }
   
    .p-select-option-blank-icon {
        flex-shrink: 0;
    }

    .p-select-option-check-icon {
        position: relative;
        flex-shrink: 0;
        margin-inline-start: dt('select.checkmark.gutter.start');
        margin-inline-end: dt('select.checkmark.gutter.end');
        color: dt('select.checkmark.color');
    }

    .p-select-empty-message {
        padding: dt('select.empty.message.padding');
    }

    .p-select-fluid {
        display: flex;
        width: 100%;
    }

    .p-select-sm .p-select-label {
        font-size: dt('select.sm.font.size');
        padding-block: dt('select.sm.padding.y');
        padding-inline: dt('select.sm.padding.x');
    }

    .p-select-sm .p-select-dropdown .p-icon {
        font-size: dt('select.sm.font.size');
        width: dt('select.sm.font.size');
        height: dt('select.sm.font.size');
    }

    .p-select-lg .p-select-label {
        font-size: dt('select.lg.font.size');
        padding-block: dt('select.lg.padding.y');
        padding-inline: dt('select.lg.padding.x');
    }

    .p-select-lg .p-select-dropdown .p-icon {
        font-size: dt('select.lg.font.size');
        width: dt('select.lg.font.size');
        height: dt('select.lg.font.size');
    }

    .p-floatlabel-in .p-select-filter {
        padding-block-start: dt('select.padding.y');
        padding-block-end: dt('select.padding.y');
    }
`,gk=`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`;const Iv=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Pv=Object.prototype.toString,Lv=o=>Pv.call(o)==="[object Object]",Nv=()=>{};function Mv(...o){if(o.length!==1)return Ph(...o);const e=o[0];return typeof e=="function"?lr(nl(()=>({get:e,set:Nv}))):Jr(e)}function jv(o,e){function r(...t){return new Promise((n,i)=>{Promise.resolve(o(()=>e.apply(this,t),{fn:e,thisArg:this,args:t})).then(n).catch(i)})}return r}const oa=o=>o();function Wv(o=oa,e={}){const{initialState:r="active"}=e,t=Mv(r==="active");function n(){t.value=!1}function i(){t.value=!0}return{isActive:lr(t),pause:n,resume:i,eventFilter:(...a)=>{t.value&&o(...a)}}}function Ct(o){return Array.isArray(o)?o:[o]}function Hv(o){return Ne()}function Vv(o,e,r={}){const{eventFilter:t=oa,...n}=r;return $e(o,jv(t,e),n)}function Kv(o,e,r={}){const{eventFilter:t,initialState:n="active",...i}=r,{eventFilter:l,pause:a,resume:c,isActive:d}=Wv(t,{initialState:n});return{stop:Vv(o,e,{...i,eventFilter:l}),pause:a,resume:c,isActive:d}}const Uv=Kv;function Yv(o,e=!0,r){Hv()?rn(o,r):e?o():ot(o)}function Gv(o,e,r){return $e(o,e,{...r,immediate:!0})}const Te=Iv?window:void 0;function Xv(o){var e;const r=De(o);return(e=r?.$el)!==null&&e!==void 0?e:r}function ui(...o){const e=(t,n,i,l)=>(t.addEventListener(n,i,l),()=>t.removeEventListener(n,i,l)),r=lt(()=>{const t=Ct(De(o[0])).filter(n=>n!=null);return t.every(n=>typeof n!="string")?t:void 0});return Gv(()=>{var t,n;return[(t=(n=r.value)===null||n===void 0?void 0:n.map(i=>Xv(i)))!==null&&t!==void 0?t:[Te].filter(i=>i!=null),Ct(De(r.value?o[1]:o[0])),Ct(Zr(r.value?o[2]:o[1])),De(r.value?o[3]:o[2])]},([t,n,i,l],a,c)=>{if(!t?.length||!n?.length||!i?.length)return;const d=Lv(l)?{...l}:l,s=t.flatMap(f=>n.flatMap(p=>i.map(b=>e(f,p,b,d))));c(()=>{s.forEach(f=>f())})},{flush:"post"})}const $r=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Br="__vueuse_ssr_handlers__",qv=Jv();function Jv(){return Br in $r||($r[Br]=$r[Br]||{}),$r[Br]}function Zv(o,e){return qv[o]||e}function Qv(o){return o==null?"any":o instanceof Set?"set":o instanceof Map?"map":o instanceof Date?"date":typeof o=="boolean"?"boolean":typeof o=="string"?"string":typeof o=="object"?"object":Number.isNaN(o)?"any":"number"}const oy={boolean:{read:o=>o==="true",write:o=>String(o)},object:{read:o=>JSON.parse(o),write:o=>JSON.stringify(o)},number:{read:o=>Number.parseFloat(o),write:o=>String(o)},any:{read:o=>o,write:o=>String(o)},string:{read:o=>o,write:o=>String(o)},map:{read:o=>new Map(JSON.parse(o)),write:o=>JSON.stringify(Array.from(o.entries()))},set:{read:o=>new Set(JSON.parse(o)),write:o=>JSON.stringify(Array.from(o))},date:{read:o=>new Date(o),write:o=>o.toISOString()}},fi="vueuse-storage";function ey(o,e,r,t={}){var n;const{flush:i="pre",deep:l=!0,listenToStorageChanges:a=!0,writeDefaults:c=!0,mergeDefaults:d=!1,shallow:s,window:f=Te,eventFilter:p,onError:b=O=>{console.error(O)},initOnMounted:y}=t,w=(s?Eh:Jr)(typeof e=="function"?e():e),z=lt(()=>De(o));if(!r)try{r=Zv("getDefaultStorage",()=>Te?.localStorage)()}catch(O){b(O)}if(!r)return w;const R=De(e),A=Qv(R),W=(n=t.serializer)!==null&&n!==void 0?n:oy[A],{pause:T,resume:N}=Uv(w,O=>I(O),{flush:i,deep:l,eventFilter:p});$e(z,()=>_(),{flush:i});let U=!1;const G=O=>{y&&!U||_(O)},D=O=>{y&&!U||Y(O)};f&&a&&(r instanceof Storage?ui(f,"storage",G,{passive:!0}):ui(f,fi,D)),y?Yv(()=>{U=!0,_()}):_();function C(O,X){if(f){const H={key:z.value,oldValue:O,newValue:X,storageArea:r};f.dispatchEvent(r instanceof Storage?new StorageEvent("storage",H):new CustomEvent(fi,{detail:H}))}}function I(O){try{const X=r.getItem(z.value);if(O==null)C(X,null),r.removeItem(z.value);else{const H=W.write(O);X!==H&&(r.setItem(z.value,H),C(X,H))}}catch(X){b(X)}}function K(O){const X=O?O.newValue:r.getItem(z.value);if(X==null)return c&&R!=null&&r.setItem(z.value,W.write(R)),R;if(!O&&d){const H=W.read(X);return typeof d=="function"?d(H,R):A==="object"&&!Array.isArray(H)?{...R,...H}:H}else return typeof X!="string"?X:W.read(X)}function _(O){if(!(O&&O.storageArea!==r)){if(O&&O.key==null){w.value=R;return}if(!(O&&O.key!==z.value)){T();try{const X=W.write(w.value);(O===void 0||O?.newValue!==X)&&(w.value=K(O))}catch(X){b(X)}finally{O?ot(N):N()}}}}function Y(O){_(O.detail)}return w}function pk(o,e,r={}){const{window:t=Te}=r;return ey(o,e,t?.localStorage,r)}export{yn as $,ki as A,ik as B,ny as C,sa as D,Ue as E,la as F,Gy as G,ly as H,jm as I,ch as J,Oy as K,cy as L,de as M,be as N,lk as O,kn as P,vy as Q,ky as R,tr as S,by as T,By as U,gy as V,Cy as W,ay as X,vn as Y,wy as Z,Ty as _,Jr as a,hy as a0,ak as a1,Hy as a2,Ky as a3,Ny as a4,Nt as a5,Kh as a6,Zy as a7,Ur as a8,Vy as a9,py as aA,uy as aB,_y as aC,iy as aD,Ly as aE,Yy as aF,ok as aG,gk as aH,pk as aI,jy as aJ,Xy as aK,qy as aL,Zr as aM,tk as aN,$l as aO,ek as aP,rk as aQ,Iy as aR,Py as aS,xy as aa,my as ab,yy as ac,Ry as ad,My as ae,dy as af,Dy as ag,sy as ah,ck as ai,vi as aj,fy as ak,Ay as al,lt as am,Co as an,Qy as ao,wo as ap,$y as aq,sk as ar,dk as as,uk as at,zy as au,Uy as av,fk as aw,ty as ax,xi as ay,Ey as az,Fy as b,ao as c,ca as d,Xr as e,Wm as f,Ne as g,ue as h,mn as i,gi as j,ry as k,Le as l,se as m,ot as n,rn as o,hn as p,Vt as q,lr as r,nk as s,Sy as t,Wy as u,Jy as v,$e as w,Lt as x,Kl as y,ha as z};
