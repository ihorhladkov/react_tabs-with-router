(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{30:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var a=c(23),s=c.n(a),n=c(9),i=(c(28),c(29),c(30),c(17)),b=c.n(i),j=c(2),l=(c(0),c(4)),r=function(e){var t=e.tabs,c=Object(j.q)().tabId,a=t.find((function(e){return c===e.id}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"Tabs page"}),Object(l.jsx)("div",{className:"tabs is-boxed",children:Object(l.jsx)("ul",{children:t.map((function(e){return Object(l.jsx)("li",{"data-cy":"Tab",className:b()({"is-active":c===e.id}),children:Object(l.jsx)(n.b,{to:"../".concat(e.id),children:e.title})},e.id)}))})}),Object(l.jsx)("div",{className:"block","data-cy":"TabContent",children:(null===a||void 0===a?void 0:a.content)||"Please select a tab"})]})},d=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],o=function(e){var t=e.isActive;return b()("navbar-item",{"is-active":t})},h=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(n.c,{to:"/",className:o,children:"Home"}),Object(l.jsx)(n.c,{to:"/tabs",className:o,children:"Tabs"})]})})}),Object(l.jsx)("div",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(j.d,{children:[Object(l.jsx)(j.b,{path:"/",element:Object(l.jsx)("h1",{className:"title",children:"Home page"})}),Object(l.jsx)(j.b,{path:"home",element:Object(l.jsx)(j.a,{to:"/"})}),Object(l.jsx)(j.b,{path:"tabs",children:Object(l.jsx)(j.b,{path:":tabId?",element:Object(l.jsx)(r,{tabs:d})})}),Object(l.jsx)(j.b,{path:"*",element:Object(l.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};s.a.render(Object(l.jsx)(n.a,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.77f01925.chunk.js.map