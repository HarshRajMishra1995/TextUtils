(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(5),l=a.n(s),r=(a(10),a(2)),o=(a(4),a(0));function i(e){return e.alert&&Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:e.alert.msg})," ",e.alert.type]})})}function b(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"/about",children:"About"})})]}),Object(o.jsxs)("div",{class:"form-check form-switch text-".concat("light"===e.modeText?"dark":"light"),children:[Object(o.jsx)("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.togglemode}),Object(o.jsxs)("label",{class:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:["Enable ",e.text]})]})]})]})})}function d(e){var t=Object(c.useState)(""),a=Object(r.a)(t,2),n=a[0],s=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h2",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",id:"mybox",rows:"8",value:n,onChange:function(e){s(e.target.value)}})}),Object(o.jsx)("button",{className:"btn btn-primary",onClick:function(){console.log(typeof n);var e=n.toUpperCase();s(e),console.log(e)},children:"convert in uppercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var e=n.toLowerCase();s(e)},children:"convert in lowercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){s("")},children:"Clear Text"})]}),Object(o.jsxs)("div",{className:"container my-3",children:[Object(o.jsx)("h2",{children:"Your Text summary"}),Object(o.jsxs)("p",{children:["Number of characters in your text are :-",n.length]}),Object(o.jsxs)("p",{children:["Number of words in your text are :-",n.split(" ").length]}),Object(o.jsxs)("p",{children:["Time to read the text :-",.008*n.split(" ").length]})]})]})}var j=function(){var e=Object(c.useState)("light"),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)("light"),l=Object(r.a)(s,2),j=l[0],h=l[1],u=Object(c.useState)("Dark Mode"),m=Object(r.a)(u,2),x=m[0],g=m[1],O=Object(c.useState)(null),v=Object(r.a)(O,2),p=v[0],f=v[1],y=function(e,t){f({msg:e,type:t}),setTimeout((function(){f(null)}),1500)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b,{title:"Text Utils",togglemode:function(){"light"==a?(n("dark"),h("dark"),g("Light Mode"),document.body.style.backgroundColor="#495057",document.body.style.color="white",y("Dark Mode Enabled","success")):(n("light"),h("light"),g("Dark Mode"),document.body.style.backgroundColor="white",document.body.style.color="black",y("Light Mode Enabled","success"))},mode:a,modeText:j,text:x}),Object(o.jsx)(i,{alert:p}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(d,{heading:"Enter the Text Below"})})]})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),c(e),n(e),s(e),l(e)}))};l.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),h()}},[[12,1,2]]]);
//# sourceMappingURL=main.f291a68b.chunk.js.map