(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/uZM":function(t,e,n){},Bl7J:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var a=n("q1tI"),r=n.n(a),i=n("Wbzz"),o=n("CWHW"),c=n.n(o),u=[{href:"/about-me/",label:"About Me"},{href:"/services-and-pricing/",label:"Services and Pricing"},{href:"/areas-covered/",label:"Areas Covered"},{href:"/contact-me/",label:"Contact Me"}];function d(t){var e=t.currentPath,n=function(t){return Object(i.d)(t)===e?c.a.selected:""};return r.a.createElement("header",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.a,{className:c.a.headerText,to:"/"},"Matty's Mobile Valeting & Detailing")),u.map((function(t){return r.a.createElement("li",{className:n(t.href),key:t.href},r.a.createElement(i.a,{to:t.href,className:n(t.href)+" "+c.a.navItem},t.label))}))))}n("/uZM");var f=n("wx14"),l=n("H2TA"),s={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},p=function(t){return Object(f.a)({color:t.palette.text.primary},t.typography.body2,{backgroundColor:t.palette.background.default,"@media print":{backgroundColor:t.palette.common.white}})};var g=Object(l.a)((function(t){return{"@global":{html:s,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:t.typography.fontWeightBold},body:Object(f.a)({margin:0},p(t),{"&::backdrop":{backgroundColor:t.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(t){var e=t.children,n=void 0===e?null:e;return t.classes,a.createElement(a.Fragment,null,n)})),b=(n("E9XD"),n("Ff2n")),h=n("rePB"),m=n("iuhU"),v=n("TrhM");function y(t){if("string"!=typeof t)throw new Error(Object(v.a)(7));return t.charAt(0).toUpperCase()+t.slice(1)}var x=a.forwardRef((function(t,e){var n=t.classes,r=t.className,i=t.component,o=void 0===i?"div":i,c=t.disableGutters,u=void 0!==c&&c,d=t.fixed,l=void 0!==d&&d,s=t.maxWidth,p=void 0===s?"lg":s,g=Object(b.a)(t,["classes","className","component","disableGutters","fixed","maxWidth"]);return a.createElement(o,Object(f.a)({className:Object(m.a)(n.root,r,l&&n.fixed,u&&n.disableGutters,!1!==p&&n["maxWidth".concat(y(String(p)))]),ref:e},g))})),O=Object(l.a)((function(t){return{root:Object(h.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:t.spacing(2),paddingRight:t.spacing(2),display:"block"},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(t.breakpoints.values).reduce((function(e,n){var a=t.breakpoints.values[n];return 0!==a&&(e[t.breakpoints.up(n)]={maxWidth:a}),e}),{}),maxWidthXs:Object(h.a)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),maxWidthSm:Object(h.a)({},t.breakpoints.up("sm"),{maxWidth:t.breakpoints.values.sm}),maxWidthMd:Object(h.a)({},t.breakpoints.up("md"),{maxWidth:t.breakpoints.values.md}),maxWidthLg:Object(h.a)({},t.breakpoints.up("lg"),{maxWidth:t.breakpoints.values.lg}),maxWidthXl:Object(h.a)({},t.breakpoints.up("xl"),{maxWidth:t.breakpoints.values.xl})}}),{name:"MuiContainer"})(x);function j(t){var e=t.children,n=t.currentPath;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement(O,null,r.a.createElement(d,{currentPath:n}),e))}},CWHW:function(t,e,n){t.exports={headerText:"navigation-module--headerText--1Voc9",navItem:"navigation-module--navItem--2ysf0",selected:"navigation-module--selected--U7RPl"}},DSFK:function(t,e,n){"use strict";function a(t){if(Array.isArray(t))return t}n.d(e,"a",(function(){return a}))},H2TA:function(t,e,n){"use strict";var a=n("wx14"),r=n("ucgz"),i=n("cNwE");e.a=function(t,e){return Object(r.a)(t,Object(a.a)({defaultTheme:i.a},e))}},PYwp:function(t,e,n){"use strict";function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(e,"a",(function(){return a}))},TrhM:function(t,e,n){"use strict";function a(t){for(var e="https://material-ui.com/production-error/?code="+t,n=1;n<arguments.length;n+=1)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified Material-UI error #"+t+"; visit "+e+" for the full message."}n.d(e,"a",(function(){return a}))},cNwE:function(t,e,n){"use strict";n("E9XD");var a=n("rePB"),r=n("Ff2n"),i=n("2+6g"),o=n("wx14"),c=["xs","sm","md","lg","xl"];function u(t){var e=t.values,n=void 0===e?{xs:0,sm:600,md:960,lg:1280,xl:1920}:e,a=t.unit,i=void 0===a?"px":a,u=t.step,d=void 0===u?5:u,f=Object(r.a)(t,["values","unit","step"]);function l(t){var e="number"==typeof n[t]?n[t]:t;return"@media (min-width:".concat(e).concat(i,")")}function s(t,e){var a=c.indexOf(e);return a===c.length-1?l(t):"@media (min-width:".concat("number"==typeof n[t]?n[t]:t).concat(i,") and ")+"(max-width:".concat((-1!==a&&"number"==typeof n[c[a+1]]?n[c[a+1]]:e)-d/100).concat(i,")")}return Object(o.a)({keys:c,values:n,up:l,down:function(t){var e=c.indexOf(t)+1,a=n[c[e]];return e===c.length?l("xs"):"@media (max-width:".concat(("number"==typeof a&&e>0?a:t)-d/100).concat(i,")")},between:s,only:function(t){return s(t,t)},width:function(t){return n[t]}},f)}function d(t,e,n){var r;return Object(o.a)({gutters:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(o.a)({paddingLeft:e(2),paddingRight:e(2)},n,Object(a.a)({},t.up("sm"),Object(o.a)({paddingLeft:e(3),paddingRight:e(3)},n[t.up("sm")])))},toolbar:(r={minHeight:56},Object(a.a)(r,"".concat(t.up("xs")," and (orientation: landscape)"),{minHeight:48}),Object(a.a)(r,t.up("sm"),{minHeight:64}),r)},n)}var f=n("TrhM"),l={black:"#000",white:"#fff"},s={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#d5d5d5",A200:"#aaaaaa",A400:"#303030",A700:"#616161"},p={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe"},g={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162"},b={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},h={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},m={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},v={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.min(Math.max(e,t),n)}function x(t){if(t.type)return t;if("#"===t.charAt(0))return x(function(t){t=t.substr(1);var e=new RegExp(".{1,".concat(t.length>=6?2:1,"}"),"g"),n=t.match(e);return n&&1===n[0].length&&(n=n.map((function(t){return t+t}))),n?"rgb".concat(4===n.length?"a":"","(").concat(n.map((function(t,e){return e<3?parseInt(t,16):Math.round(parseInt(t,16)/255*1e3)/1e3})).join(", "),")"):""}(t));var e=t.indexOf("("),n=t.substring(0,e);if(-1===["rgb","rgba","hsl","hsla"].indexOf(n))throw new Error(Object(f.a)(3,t));var a=t.substring(e+1,t.length-1).split(",");return{type:n,values:a=a.map((function(t){return parseFloat(t)}))}}function O(t){var e=t.type,n=t.values;return-1!==e.indexOf("rgb")?n=n.map((function(t,e){return e<3?parseInt(t,10):t})):-1!==e.indexOf("hsl")&&(n[1]="".concat(n[1],"%"),n[2]="".concat(n[2],"%")),"".concat(e,"(").concat(n.join(", "),")")}function j(t){var e="hsl"===(t=x(t)).type?x(function(t){var e=(t=x(t)).values,n=e[0],a=e[1]/100,r=e[2]/100,i=a*Math.min(r,1-r),o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(t+n/30)%12;return r-i*Math.max(Math.min(e-3,9-e,1),-1)},c="rgb",u=[Math.round(255*o(0)),Math.round(255*o(8)),Math.round(255*o(4))];return"hsla"===t.type&&(c+="a",u.push(e[3])),O({type:c,values:u})}(t)).values:t.values;return e=e.map((function(t){return(t/=255)<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)})),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function A(t,e){if(t=x(t),e=y(e),-1!==t.type.indexOf("hsl"))t.values[2]*=1-e;else if(-1!==t.type.indexOf("rgb"))for(var n=0;n<3;n+=1)t.values[n]*=1-e;return O(t)}function k(t,e){if(t=x(t),e=y(e),-1!==t.type.indexOf("hsl"))t.values[2]+=(100-t.values[2])*e;else if(-1!==t.type.indexOf("rgb"))for(var n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;return O(t)}var w={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:l.white,default:s[50]},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},M={text:{primary:l.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",hint:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:s[800],default:"#303030"},action:{active:l.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function W(t,e,n,a){var r=a.light||a,i=a.dark||1.5*a;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:"light"===e?t.light=k(t.main,r):"dark"===e&&(t.dark=A(t.main,i)))}function S(t){var e=t.primary,n=void 0===e?{light:p[300],main:p[500],dark:p[700]}:e,a=t.secondary,c=void 0===a?{light:g.A200,main:g.A400,dark:g.A700}:a,u=t.error,d=void 0===u?{light:b[300],main:b[500],dark:b[700]}:u,y=t.warning,x=void 0===y?{light:h[300],main:h[500],dark:h[700]}:y,O=t.info,A=void 0===O?{light:m[300],main:m[500],dark:m[700]}:O,k=t.success,S=void 0===k?{light:v[300],main:v[500],dark:v[700]}:k,T=t.type,R=void 0===T?"light":T,E=t.contrastThreshold,z=void 0===E?3:E,F=t.tonalOffset,B=void 0===F?.2:F,I=Object(r.a)(t,["primary","secondary","error","warning","info","success","type","contrastThreshold","tonalOffset"]);function L(t){return function(t,e){var n=j(t),a=j(e);return(Math.max(n,a)+.05)/(Math.min(n,a)+.05)}(t,M.text.primary)>=z?M.text.primary:w.text.primary}var C=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:700;if(!(t=Object(o.a)({},t)).main&&t[e]&&(t.main=t[e]),!t.main)throw new Error(Object(f.a)(4,e));if("string"!=typeof t.main)throw new Error(Object(f.a)(5,JSON.stringify(t.main)));return W(t,"light",n,B),W(t,"dark",a,B),t.contrastText||(t.contrastText=L(t.main)),t},P={dark:M,light:w};return Object(i.a)(Object(o.a)({common:l,type:R,primary:C(n),secondary:C(c,"A400","A200","A700"),error:C(d),warning:C(x),info:C(A),success:C(S),grey:s,contrastThreshold:z,getContrastText:L,augmentColor:C,tonalOffset:B},P[R]),I)}function T(t){return Math.round(1e5*t)/1e5}var R={textTransform:"uppercase"};function E(t,e){var n="function"==typeof e?e(t):e,a=n.fontFamily,c=void 0===a?'"Roboto", "Helvetica", "Arial", sans-serif':a,u=n.fontSize,d=void 0===u?14:u,f=n.fontWeightLight,l=void 0===f?300:f,s=n.fontWeightRegular,p=void 0===s?400:s,g=n.fontWeightMedium,b=void 0===g?500:g,h=n.fontWeightBold,m=void 0===h?700:h,v=n.htmlFontSize,y=void 0===v?16:v,x=n.allVariants,O=n.pxToRem,j=Object(r.a)(n,["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"]);var A=d/14,k=O||function(t){return"".concat(t/y*A,"rem")},w=function(t,e,n,a,r){return Object(o.a)({fontFamily:c,fontWeight:t,fontSize:k(e),lineHeight:n},'"Roboto", "Helvetica", "Arial", sans-serif'===c?{letterSpacing:"".concat(T(a/e),"em")}:{},r,x)},M={h1:w(l,96,1.167,-1.5),h2:w(l,60,1.2,-.5),h3:w(p,48,1.167,0),h4:w(p,34,1.235,.25),h5:w(p,24,1.334,0),h6:w(b,20,1.6,.15),subtitle1:w(p,16,1.75,.15),subtitle2:w(b,14,1.57,.1),body1:w(p,16,1.5,.15),body2:w(p,14,1.43,.15),button:w(b,14,1.75,.4,R),caption:w(p,12,1.66,.4),overline:w(p,12,2.66,1,R)};return Object(i.a)(Object(o.a)({htmlFontSize:y,pxToRem:k,round:T,fontFamily:c,fontSize:d,fontWeightLight:l,fontWeightRegular:p,fontWeightMedium:b,fontWeightBold:m},M),j,{clone:!1})}function z(){return["".concat(arguments.length<=0?void 0:arguments[0],"px ").concat(arguments.length<=1?void 0:arguments[1],"px ").concat(arguments.length<=2?void 0:arguments[2],"px ").concat(arguments.length<=3?void 0:arguments[3],"px rgba(0,0,0,").concat(.2,")"),"".concat(arguments.length<=4?void 0:arguments[4],"px ").concat(arguments.length<=5?void 0:arguments[5],"px ").concat(arguments.length<=6?void 0:arguments[6],"px ").concat(arguments.length<=7?void 0:arguments[7],"px rgba(0,0,0,").concat(.14,")"),"".concat(arguments.length<=8?void 0:arguments[8],"px ").concat(arguments.length<=9?void 0:arguments[9],"px ").concat(arguments.length<=10?void 0:arguments[10],"px ").concat(arguments.length<=11?void 0:arguments[11],"px rgba(0,0,0,").concat(.12,")")].join(",")}var F=["none",z(0,2,1,-1,0,1,1,0,0,1,3,0),z(0,3,1,-2,0,2,2,0,0,1,5,0),z(0,3,3,-2,0,3,4,0,0,1,8,0),z(0,2,4,-1,0,4,5,0,0,1,10,0),z(0,3,5,-1,0,5,8,0,0,1,14,0),z(0,3,5,-1,0,6,10,0,0,1,18,0),z(0,4,5,-2,0,7,10,1,0,2,16,1),z(0,5,5,-3,0,8,10,1,0,3,14,2),z(0,5,6,-3,0,9,12,1,0,3,16,2),z(0,6,6,-3,0,10,14,1,0,4,18,3),z(0,6,7,-4,0,11,15,1,0,4,20,3),z(0,7,8,-4,0,12,17,2,0,5,22,4),z(0,7,8,-4,0,13,19,2,0,5,24,4),z(0,7,9,-4,0,14,21,2,0,5,26,4),z(0,8,9,-5,0,15,22,2,0,6,28,5),z(0,8,10,-5,0,16,24,2,0,6,30,5),z(0,8,11,-5,0,17,26,2,0,6,32,5),z(0,9,11,-5,0,18,28,2,0,7,34,6),z(0,9,12,-6,0,19,29,2,0,7,36,6),z(0,10,13,-6,0,20,31,3,0,8,38,7),z(0,10,13,-6,0,21,33,3,0,8,40,7),z(0,10,14,-6,0,22,35,3,0,8,42,7),z(0,11,14,-7,0,23,36,3,0,9,44,8),z(0,11,15,-7,0,24,38,3,0,9,46,8)],B={borderRadius:4},I=n("DSFK");var L=n("BsWD"),C=n("PYwp");function P(t,e){return Object(I.a)(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],a=!0,r=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(a=(o=c.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(u){r=!0,i=u}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}return n}}(t,e)||Object(L.a)(t,e)||Object(C.a)()}n("KQm4");var H=n("U8pU");n("17x9");var N=function(t,e){return e?Object(i.a)(t,e,{clone:!1}):t},D={xs:0,sm:600,md:960,lg:1280,xl:1920},X={keys:["xs","sm","md","lg","xl"],up:function(t){return"@media (min-width:".concat(D[t],"px)")}};var U,Y,G={m:"margin",p:"padding"},J={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},V={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},K=(U=function(t){if(t.length>2){if(!V[t])return[t];t=V[t]}var e=P(t.split(""),2),n=e[0],a=e[1],r=G[n],i=J[a]||"";return Array.isArray(i)?i.map((function(t){return r+t})):[r+i]},Y={},function(t){return void 0===Y[t]&&(Y[t]=U(t)),Y[t]}),Z=["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY"];function q(t){var e=t.spacing||8;return"number"==typeof e?function(t){return e*t}:Array.isArray(e)?function(t){return e[t]}:"function"==typeof e?e:function(){}}function Q(t,e){return function(n){return t.reduce((function(t,a){return t[a]=function(t,e){if("string"==typeof e||null==e)return e;var n=t(Math.abs(e));return e>=0?n:"number"==typeof n?-n:"-".concat(n)}(e,n),t}),{})}}function $(t){var e=q(t.theme);return Object.keys(t).map((function(n){if(-1===Z.indexOf(n))return null;var a=Q(K(n),e),r=t[n];return function(t,e,n){if(Array.isArray(e)){var a=t.theme.breakpoints||X;return e.reduce((function(t,r,i){return t[a.up(a.keys[i])]=n(e[i]),t}),{})}if("object"===Object(H.a)(e)){var r=t.theme.breakpoints||X;return Object.keys(e).reduce((function(t,a){return t[r.up(a)]=n(e[a]),t}),{})}return n(e)}(t,r,a)})).reduce(N,{})}$.propTypes={},$.filterProps=Z;function _(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;if(t.mui)return t;var e=q({spacing:t}),n=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return 0===n.length?e(1):1===n.length?e(n[0]):n.map((function(t){if("string"==typeof t)return t;var n=e(t);return"number"==typeof n?"".concat(n,"px"):n})).join(" ")};return Object.defineProperty(n,"unit",{get:function(){return t}}),n.mui=!0,n}var tt={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},et={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function nt(t){return"".concat(Math.round(t),"ms")}var at={easing:tt,duration:et,create:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["all"],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.duration,a=void 0===n?et.standard:n,i=e.easing,o=void 0===i?tt.easeInOut:i,c=e.delay,u=void 0===c?0:c;Object(r.a)(e,["duration","easing","delay"]);return(Array.isArray(t)?t:[t]).map((function(t){return"".concat(t," ").concat("string"==typeof a?a:nt(a)," ").concat(o," ").concat("string"==typeof u?u:nt(u))})).join(",")},getAutoHeightDuration:function(t){if(!t)return 0;var e=t/36;return Math.round(10*(4+15*Math.pow(e,.25)+e/5))}},rt={mobileStepper:1e3,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};var it=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.breakpoints,n=void 0===e?{}:e,a=t.mixins,o=void 0===a?{}:a,c=t.palette,f=void 0===c?{}:c,l=t.spacing,s=t.typography,p=void 0===s?{}:s,g=Object(r.a)(t,["breakpoints","mixins","palette","spacing","typography"]),b=S(f),h=u(n),m=_(l),v=Object(i.a)({breakpoints:h,direction:"ltr",mixins:d(h,m,o),overrides:{},palette:b,props:{},shadows:F,typography:E(b,p),spacing:m,shape:B,transitions:at,zIndex:rt},g),y=arguments.length,x=new Array(y>1?y-1:0),O=1;O<y;O++)x[O-1]=arguments[O];return v=x.reduce((function(t,e){return Object(i.a)(t,e)}),v)}();e.a=it}}]);
//# sourceMappingURL=commons-a8b6ead837e6c11d8ea1.js.map