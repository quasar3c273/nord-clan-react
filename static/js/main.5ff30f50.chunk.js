(this["webpackJsonpnord-clan-react"]=this["webpackJsonpnord-clan-react"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(5),a=n.n(r),l=(n(10),n(2)),o=n(3),i=n(0),u=function(e){var t=e.isActive,n=e.setDisplay,c=e.filteredUsers,s=e.isMulti,r=e.onToggle,a=e.handleClick,l=e.classesSelectComponent;return Object(i.jsx)("ul",{className:"".concat(t?l.popupListAllNonDisplay:"").concat(l.popupListAll),onClick:n.bind(null,!0),children:c.length>0?c.map((function(e){return Object(i.jsxs)("li",{onClick:s?r.bind(null,e.userId):a.bind(null,e.userId),className:"".concat(e.checked?l.checkedInPopupList:"").concat(l.usersPopupListItems),children:[Object(i.jsx)("span",{children:e.userName},e.userName),s&&Object(i.jsx)("input",{type:"checkbox",checked:e.checked,readOnly:!0},"".concat(e.userId,"qwertyqweq"))]},"".concat(e.userId,"qwerty"))})):Object(i.jsx)("div",{className:l.notSearchOnList,children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})},"list-popup")},p=function(e){var t=e.userInfo,n=e.onToggle,c=e.isMulti,s=e.classesSelectComponent;return Object(i.jsx)("div",{className:s.classCheckListWpapper,children:t.map((function(e,t){return!0===e.checked&&Object(i.jsxs)("div",{className:s.inputWrapperItem,children:[e.userName,Object(i.jsx)("button",{className:s.classDelete,onClick:n.bind(null,e.userId)}),c?",":""]},t)}))})},d=function(e,t){var n=Object(c.useRef)(0);return function(){for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];clearTimeout(n.current),n.current=window.setTimeout((function(){return e.apply(void 0,s)}),t)}},j=function(e){var t=e.handleChange,n=e.setDisplay,c=e.onToggle,s=e.handleToggle,r=e.arrowStatus,a=e.classesSelectComponent;return Object(i.jsxs)("div",{className:a.selectFieldWrapper,children:[Object(i.jsx)("input",{type:"text",id:"entry-field",onChange:d(t,500),onFocus:n.bind(null,!1)}),Object(i.jsx)("button",{className:a.classDelete,onClick:c.bind(null,"closeAll")}),Object(i.jsx)("button",{className:r?a.chevronDown:a.chevronUp,onClick:s})]})};var h=function(e){return fetch(e).then((function(e){if(e.ok)return e.json().then((function(e){return e.map((function(e){return{userId:e.id,userName:e.username,checked:!1}}))}));throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445")})).catch((function(e){console.log(e)}))},b=function(e){var t=e.urlData,n=e.isMulti,r=void 0!==n&&n,a=e.nameOnLocalStorage,d=e.classesSelectComponent,b=Object(c.useState)(!0),m=Object(o.a)(b,2),O=m[0],f=m[1],g=s.a.useState(""),k=Object(o.a)(g,2),v=k[0],S=k[1],x=Object(c.useState)([]),C=Object(o.a)(x,2),w=C[0],y=C[1],I=Object(c.useState)(!1),N=Object(o.a)(I,2),L=N[0],D=N[1],T=function(e){f(e)};function _(e){"Enter"===e.key?(console.log(e.key),f(!1)):"Escape"===e.key&&f(!0)}var W=function(e){var t=w.map((function(t){return t.userId===e?Object(l.a)(Object(l.a)({},t),{},{checked:!t.checked}):"closeAll"===e?Object(l.a)(Object(l.a)({},t),{},{checked:!1}):t}));localStorage.setItem(a,JSON.stringify(t)),y(t)};Object(c.useEffect)((function(){if(null!==localStorage.getItem(a)){var e=localStorage.getItem(a)||"";y(JSON.parse(e))}else h(t).then((function(e){"undefined"===typeof e?(D(!0),localStorage.removeItem(a)):(localStorage.setItem(a,JSON.stringify(e)),y(e))}))}),[]),Object(c.useEffect)((function(){window.document.body.addEventListener("keydown",_)}),[]);var A=""===v?w:w.filter((function(e){return e.userName.toLowerCase().includes(v.toLowerCase())}));return Object(i.jsx)(i.Fragment,{children:L?Object(i.jsx)("h3",{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"}):Object(i.jsxs)("div",{className:d.classWpapperSelect,children:[Object(i.jsxs)("div",{className:d.classInputWrapper,children:[Object(i.jsx)(p,{onToggle:W,userInfo:w,isMulti:r,classesSelectComponent:d}),Object(i.jsx)(j,{arrowStatus:O,handleChange:function(e){S(e.target.value)},setDisplay:T,onToggle:W,handleToggle:function(){f(!O)},classesSelectComponent:d})]}),Object(i.jsx)(u,{isActive:O,setDisplay:T,filteredUsers:A,isMulti:r,onToggle:W,handleClick:function(e){var t=w.map((function(t){return t.userId===e?Object(l.a)(Object(l.a)({},t),{},{checked:!t.checked}):Object(l.a)(Object(l.a)({},t),{},{checked:!1})}));localStorage.setItem(a,JSON.stringify(t)),y(t)},classesSelectComponent:d})]})})},m={classWpapperSelect:"users",classInputWrapper:"input-wrapper",classCheckListWpapper:"check-list-wrapper",inputWrapperItem:"input-wrapper__item",classDelete:"input-wrapper__item-close",selectFieldWrapper:"wrapper",chevronUp:"input-wrapper__chevron-up",chevronDown:"input-wrapper__chevron-down",popupListAll:"users__list",popupListAllNonDisplay:"display-none ",checkedInPopupList:"checked-user ",usersPopupListItems:"users__list__item",checkboxUserClassName:"",notSearchOnList:"not-search"},O="https://jsonplaceholder.typicode.com/users";var f=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"Test Task Nord Clan"}),Object(i.jsx)("span",{children:"\u0418\u043d\u043f\u0443\u0442 \u0441 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e \u043c\u0443\u043b\u044c\u0442\u0438\u0432\u044b\u0431\u043e\u0440\u0430"}),Object(i.jsx)(b,{isMulti:!0,nameOnLocalStorage:"users42",classesSelectComponent:m,urlData:O}),Object(i.jsx)("span",{children:"\u0418\u043d\u043f\u0443\u0442 \u0431\u0435\u0437 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u043c\u0443\u043b\u044c\u0442\u0438\u0432\u044b\u0431\u043e\u0440\u0430"}),Object(i.jsx)(b,{isMulti:!1,nameOnLocalStorage:"users422",classesSelectComponent:m,urlData:O})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root")),g()}},[[12,1,2]]]);
//# sourceMappingURL=main.5ff30f50.chunk.js.map