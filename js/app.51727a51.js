(function(e){function t(t){for(var n,u,l=t[0],i=t[1],s=t[2],c=0,b=[];c<l.length;c++)u=l[c],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&b.push(o[u][0]),o[u]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(t);while(b.length)b.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var i=r[u];0!==o[i]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={app:0},a=[];function u(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"fa1ad757"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=u(e);var s=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(c);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",s.name="ChunkLoadError",s.type=n,s.request=a,r[1](s)}o[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var f=s;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0e87":function(e,t,r){"use strict";var n=r("35b2"),o=r.n(n);o.a},"35b2":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("b-navbar",{staticClass:"border-dark border-bottom",attrs:{id:"nav",type:"light",variant:"light",sticky:""}},[r("b-container",[r("b-navbar-brand",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#app",offset:-60},expression:"{el:'#app',offset:-60}"}],attrs:{href:"#app"}},[e._v("digiCo Project")]),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item-dropdown",{staticClass:"mr-2",attrs:{text:"Projects",right:""}},[r("b-dropdown-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#aboutnlp",offset:-60},expression:"{el:'#aboutnlp',offset:-60}"}],attrs:{href:"#aboutnlp"}},[e._v("NLP")]),r("b-dropdown-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#aboutvtuber",offset:-60},expression:"{el:'#aboutvtuber',offset:-60}"}],attrs:{href:"#aboutvtuber"}},[e._v("VTuber")])],1),r("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#about",offset:-60},expression:"{el:'#about',offset:-60}"}],staticClass:"mr-2",attrs:{href:"#about"}},[e._v("About")]),r("b-nav-item",{attrs:{href:"https://digicre.net/",target:"_blank"}},[e._v("digicre.net")])],1)],1)],1),r("router-view")],1)},a=[],u=(r("5c0b"),r("2877")),l={},i=Object(u["a"])(l,o,a,!1,null,null,null),s=i.exports,c=(r("d3b7"),r("8c4f")),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home bg-light text-dark"},[r("HelloWorld"),r("b-container",[r("About",{staticClass:"mb-4"}),r("AboutNLP",{staticClass:"mb-4"}),r("AboutVTuber")],1)],1)},b=[],d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("b-jumbotron",{attrs:{header:"digiCo Project",lead:"芝浦工業大学 デジクリ","bg-variant":"dark","text-variant":"light",fluid:""}},[r("section",[r("h2",[e._v("NLP Project")]),r("p",[e._v("digiCo Natural Language Processing project")]),r("p",[r("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#aboutnlp",offset:-60},expression:"{el:'#aboutnlp',offset:-60}"}],attrs:{href:"#aboutnlp"}},[e._v("Learn more »")])])]),r("section",[r("h2",[e._v("VTuber Project")]),r("p",[e._v("digiCo Virtual YouTuber project")]),r("p",[r("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#aboutvtuber",offset:-60},expression:"{el:'#aboutvtuber',offset:-60}"}],attrs:{href:"#aboutvtuber"}},[e._v("Learn more »")])])])])],1)},p=[],v={name:"HelloWorld"},m=v,h=(r("6d41"),Object(u["a"])(m,d,p,!1,null,"8ab49e10",null)),g=h.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"about"}},[r("vue-markdown",{attrs:{source:e.mdtext,breaks:!1}})],1)},_=[],x=r("9ce6"),y=r.n(x),j={name:"About",components:{VueMarkdown:y.a},data:function(){return{mdtext:'\n# digiCoとは\ndigiCo（デジコ）は、芝浦工業大学デジクリにおけるキャラクターです。\n\n芝浦工業大学デジクリについては<a href="https://digicre.net/" target="_blank">こちら</a>。\n'}}},P=j,k=Object(u["a"])(P,w,_,!1,null,null,null),C=k.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"aboutnlp"}},[r("vue-markdown",{attrs:{source:e.mdtext,breaks:!1}})],1)},T=[],N={name:"AboutNLP",components:{VueMarkdown:y.a},data:function(){return{mdtext:'\n# NLP Project\n自然言語処理による質問応答システム「デジコ」の開発を行っています。\n\n<a href="https://digico.cordx.net/" target="_blank">成果物</a>\n'}}},A=N,L=Object(u["a"])(A,O,T,!1,null,null,null),V=L.exports,E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"aboutvtuber"}},[r("vue-markdown",{attrs:{source:e.mdtext,breaks:!1}})],1)},M=[],$={name:"AboutVTuber",components:{VueMarkdown:y.a},data:function(){return{mdtext:'\n# VTuber Project\nVTuberとしてのコンテンツを制作しています。\n\n<iframe width="560" height="315" src="https://www.youtube.com/embed/HTKSWzQRUK4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n\n![digiCo poster](/img/vtuber/poster_digico-1.png)\n'}}},S=$,H=(r("0e87"),Object(u["a"])(S,E,M,!1,null,"25594680",null)),W=H.exports,J={name:"home",components:{HelloWorld:g,About:C,AboutNLP:V,AboutVTuber:W}},K=J,q=Object(u["a"])(K,f,b,!1,null,null,null),z=q.exports;n["default"].use(c["a"]);var Q=[{path:"/",name:"home",component:z},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],R=new c["a"]({mode:"history",base:"/",routes:Q}),U=R,Y=r("5f5b"),B=(r("f9e3"),r("2dd8"),r("f13c")),D=r.n(B);n["default"].use(Y["a"]),n["default"].use(D.a),n["default"].config.productionTip=!1,new n["default"]({router:U,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),o=r.n(n);o.a},"6d41":function(e,t,r){"use strict";var n=r("ba2f"),o=r.n(n);o.a},"9c0c":function(e,t,r){},ba2f:function(e,t,r){}});
//# sourceMappingURL=app.51727a51.js.map