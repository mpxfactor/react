(this.webpackJsonppractice=this.webpackJsonppractice||[]).push([[0],{40:function(e,n,t){"use strict";t.r(n);var c=t(15),a=t.n(c),r=t(3),i=t(2),u=t(0),o=function(e){var n=e.onSubmit,t=e.name,c=e.handleNameChange,a=(e.number,e.handleNumberChange);return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:n,children:[Object(u.jsxs)("div",{children:[" name: ",Object(u.jsx)("input",{value:t,onChange:c})," "]}),Object(u.jsxs)("div",{children:[" number: ",Object(u.jsx)("input",{value:t,onChange:a})," "]}),Object(u.jsxs)("div",{children:[" ",Object(u.jsx)("button",{type:"submit",children:"add"})]})]})})},s=function(e){e.person;var n=e.handleFilterChange;return Object(u.jsxs)("div",{children:["filter shown with ",Object(u.jsx)("input",{onChange:n})]})},j=t(4),b=t.n(j),d="/api/persons",l=function(){return b.a.get(d)},h=function(e){return b.a.post(d,e).then((function(e){return e.data}))},O=function e(n){b.a.delete("".concat(d,"/").concat(n));return e},m=function(e){var n=e.id,t=e.name,c=e.number;return Object(u.jsxs)("div",{children:[t," : ",c," ",Object(u.jsx)("button",{onSubmit:function(e){O(e)}(n),children:"delete"})]})},f=function(e){var n=e.person,t=e.newFilter;return Object(u.jsx)("div",{children:n.filter((function(e){return e.name.toLowerCase().includes(t)})).map((function(e){return Object(u.jsx)(m,{id:e.id,name:e.name,number:e.number},e.id)}))})},p=function(){var e=Object(i.useState)([]),n=Object(r.a)(e,2),t=n[0],c=n[1],a=Object(i.useState)(""),j=Object(r.a)(a,2),b=j[0],d=j[1],O=Object(i.useState)([]),m=Object(r.a)(O,2),p=m[0],x=m[1],v=Object(i.useState)(""),g=Object(r.a)(v,2),C=g[0],S=g[1],w=Object(i.useState)(""),N=Object(r.a)(w,2),k=N[0],F=N[1];Object(i.useEffect)((function(){console.log("effect"),l().then((function(e){c(e.data)}))}),[]),console.log("person",t.length,"rendered");return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(s,{person:t,handleFilterChange:function(e){F(e.target.value)}}),Object(u.jsx)("h2",{children:"add new"}),Object(u.jsx)(o,{onSubmit:function(e){(e.preventDefault(),-1!==p.indexOf(b))?alert("".concat(b," is already added to phonebook")):h({name:b,number:C}).then((function(e){c(t.concat(e.data)),x(p.concat(e.data.person)),d("")}))},name:t.name,handleNameChange:function(e){d(e.target.value),console.log(e.target.value)},number:C,handleNumberChange:function(e){S(e.target.value)}}),Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsx)(f,{person:t,newFilter:k})]})};a.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.73fe7c30.chunk.js.map