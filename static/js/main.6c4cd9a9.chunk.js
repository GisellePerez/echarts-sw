(this["webpackJsonpecharts-sw"]=this["webpackJsonpecharts-sw"]||[]).push([[0],{28:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(20),s=n.n(i),a=(n(28),n(9)),o=n(2),u=n(8),l=n.n(u),h=n(12),j=n(11),d=n(23),f="https://swapi.dev/api",b=function(){return new Promise((function(e,t){fetch("".concat(f,"/films")).then((function(e){return e.json()})).then((function(n){(null===n||void 0===n?void 0:n.error)?t(null===n||void 0===n?void 0:n.error):e(null===n||void 0===n?void 0:n.results)})).catch((function(e){t(e)}))}))},v=n(1),O=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)([]),s=Object(j.a)(i,2),o=s[0],u=s[1],f=function(){var e=Object(h.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,b();case 4:t=e.sent,u(t),r(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),u([]),r(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),O=function(e){var t=new RegExp(/(?<=films\/)./,"gi"),n=e.match(t);return n&&n.length?n[0]:""},p={series:[{type:"treemap",data:o&&o.length?o.map((function(e){var t,n,c=(null===(t=e.characters)||void 0===t?void 0:t.length)&&(null===(n=e.characters)||void 0===n?void 0:n.length);return{name:"".concat(e.title," - Personajes: ").concat(c),value:c}})):[]}]};return Object(c.useEffect)((function(){f()}),[]),Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"HOME"}),n&&"Loading...",!n&&o&&o.length?Object(v.jsx)("ul",{children:o.map((function(e){return Object(v.jsx)("li",{children:Object(v.jsx)(a.b,{to:"films/".concat(O(e.url)),children:Object(v.jsx)("h2",{children:e.title})})},e.title)}))}):null,Object(v.jsx)(d.a,{style:{height:400},option:p})]})},p=function(e){return new Promise((function(t,n){fetch("".concat(f,"/films/").concat(e)).then((function(e){return e.json()})).then((function(e){(null===e||void 0===e?void 0:e.error)?n(null===e||void 0===e?void 0:e.error):t(e)})).catch((function(e){n(e)}))}))},x=function(){var e=Object(o.f)().id,t=Object(c.useState)(null),n=Object(j.a)(t,2),r=n[0],i=n[1],s=function(){var e=Object(h.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(t);case 3:n=e.sent,i(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),i(null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){s(e)}),[e]),Object(c.useEffect)((function(){})),Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"FILM"}),r&&Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:r.title}),Object(v.jsx)("h3",{children:r.created})]})]})};var m=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)("div",{children:[Object(v.jsxs)(a.a,{children:[Object(v.jsx)("header",{children:"Header"}),Object(v.jsxs)(o.c,{children:[Object(v.jsx)(o.a,{exact:!0,path:"/echarts-sw",component:O}),Object(v.jsx)(o.a,{path:"/echarts-sw/films/:id",component:x})]})]}),Object(v.jsx)("footer",{children:"Footer"})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(m,{})}),document.getElementById("root")),g()}},[[44,1,2]]]);
//# sourceMappingURL=main.6c4cd9a9.chunk.js.map