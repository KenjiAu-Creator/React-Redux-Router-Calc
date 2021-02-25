(this["webpackJsonpreact-redux-calculator-practice"]=this["webpackJsonpreact-redux-calculator-practice"]||[]).push([[0],{22:function(e,t,a){e.exports=a(37)},27:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a.n(c),u=(a(27),a(14)),o=a(8),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{input:"",inputOne:0,inputTwo:0,operator:"+",result:[],expression:[],counter:0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INPUT_ONE":var a=Object(o.a)({},e);return a.inputOne=t.payload,a;case"ADD_INPUT_TWO":var n=Object(o.a)({},e);return n.inputTwo=t.payload,n;case"CALCULATE":var r=Object(o.a)({},e);return r.result.push(t.payload),r.expression.push(t.payloadTwo),r.counter++,r;case"ADD_NEW_OPERATION":var c=Object(o.a)({},e);return c.operator=t.payload,c;case"ADD_NEW_VARIABLE":var l=Object(o.a)({},e);return l.input+=t.payload,l;case"SET_INPUT_VARIABLES":var u=Object(o.a)({},e);return u.input=t.payload,u;case"DELETE_INPUT_VARIABLE":var i=Object(o.a)({},e);return i.input.slice(0,i.input.length-2),console.log(i.input),i;default:return e}},m=a(2),s=function(e,t){return{type:"CALCULATE",payload:e,payloadTwo:t}},E=function(e){return{type:"ADD_NEW_VARIABLE",payload:e}},p=function(e){return{type:"SET_INPUT_VARIABLES",payload:e}},f=function(e){var t=Object(m.c)((function(e){return e.inputOne})),a=Object(m.c)((function(e){return e.inputTwo})),n=Object(m.c)((function(e){return e.operator})),c=Object(m.b)();return r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},"Welcome to my Calculator!"),r.a.createElement("h3",null,"Head to the Results page to see your results!"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var r=parseInt(t),l=parseInt(a);switch(n){case"+":var u=function(e,t){return e+t}(r,l);c(s(u,"".concat(r," + ").concat(l," = ").concat(u)));break;case"-":var o=function(e,t){return e-t}(r,l);c(s(o,"".concat(r," - ").concat(l," = ").concat(o)));break;case"*":var i=function(e,t){return e*t}(r,l);c(s(i,"".concat(r," * ").concat(l," = ").concat(i)));break;case"/":var m=function(e,t){return e/t}(r,l);c(s(m,"".concat(r," / ").concat(l," = ").concat(m)));break;default:return 0}}},r.a.createElement("label",{htmlFor:"input-1"},"Input 1:"),r.a.createElement("input",{type:"number",id:"input-1",onChange:function(e){c({type:"ADD_INPUT_ONE",payload:e.target.value})}}),r.a.createElement("label",{htmlFor:"operations"},"Operation:"),r.a.createElement("select",{onChange:function(e){c({type:"ADD_NEW_OPERATION",payload:e.target.value})},id:"operations"},r.a.createElement("option",{value:"+"},"+"),r.a.createElement("option",{value:"-"},"-"),r.a.createElement("option",{value:"*"},"*"),r.a.createElement("option",{value:"/"},"/")),r.a.createElement("label",{htmlFor:"input-2"},"Input 2:"),r.a.createElement("input",{type:"number",id:"input-2",onChange:function(e){c({type:"ADD_INPUT_TWO",payload:e.target.value})}}),r.a.createElement("input",{id:"bttn",type:"submit",value:"calculate"})))},b=(a(32),function(){var e=Object(m.c)((function(e){return e.expression}));Object(m.c)((function(e){return e.counter}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Previous Results:"),r.a.createElement("ul",null,e.map((function(e,t){return r.a.createElement("li",{className:"resultExpressions",key:t},e)}))))}),v=(a(33),function(e){var t=e.text,a=Object(m.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){a(E(t))}},t))}),d=function(e){var t=e.text,a=Object(m.c)((function(e){return e.input})),n=Object(m.b)(),c=a.split(/[+-/\\*\\]/),l=a.split(/[0123456789]/);l=l.slice(1,l.length-1);var u=function(e,t){return e+t},o=function(e,t){return e-t},i=function(e,t){return e/t};return r.a.createElement("button",{id:"calculatebttn",onClick:function(e){e.preventDefault();for(var t,r,m=l.join("").trim().split("");m.length>=1&&""!==m[0];){for(var E=m.indexOf("*");E>=0;){var p=(t=Number(c[E]),r=Number(c[E+1]),t*r);m.splice(E,1),c.splice(E,2,p),E=m.indexOf("*")}for(var f=m.indexOf("/");f>=0;){var b=i(Number(c[f]),Number(c[f+1]));m.splice(f,1),c.splice(f,2,b),f=m.indexOf("/")}for(var v=m.indexOf("+");v>=0;){var d=u(Number(c[v]),Number(c[v+1]));m.splice(v,1),c.splice(v,2,d),console.log(c),v=m.indexOf("+")}for(var O=m.indexOf("-");O>=0;){var x=o(Number(c[O]),Number(c[O+1]));m.splice(O,1),c.splice(O,2,x),O=m.indexOf("-")}}n(s(c[0],"".concat(a," = ").concat(c[0])))}},t)},O=function(e){var t=e.text,a=Object(m.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){a(p(""))}},t))},x=function(e){var t=e.text,a=Object(m.b)(),n=Object(m.c)((function(e){return e.result}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){var e=n[n.length-1];a(E(e))}},t))},N=function(e){var t=e.text,a=Object(m.b)(),n=Object(m.c)((function(e){return e.input}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){var e=n.slice(0,n.length-1);a(p(e))}},t))},_=(a(34),function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.input}));return r.a.createElement("div",{className:"singleCalculatorContainer"},r.a.createElement("section",{className:"headers"},r.a.createElement("h1",null,"Welcome to my React Calculator!"),r.a.createElement("h3",null,"Head to the Results page to see your results!")),r.a.createElement("div",{className:"calculatorContainer"},r.a.createElement("input",{id:"expressions",type:"text",value:t,onChange:function(t){e(p(t.target.value))}}),r.a.createElement("div",{className:"row",id:"row3"},r.a.createElement(v,{text:"7"}),r.a.createElement(v,{text:"8"}),r.a.createElement(v,{text:"9"}),r.a.createElement(v,{text:"+"}),r.a.createElement(v,{text:"-"})),r.a.createElement("div",{className:"row",id:"row2"},r.a.createElement(v,{text:"4"}),r.a.createElement(v,{text:"5"}),r.a.createElement(v,{text:"6"}),r.a.createElement(v,{text:"*"}),r.a.createElement(v,{text:"/"})),r.a.createElement("div",{className:"row",id:"row1"},r.a.createElement(v,{text:"1"}),r.a.createElement(v,{text:"2"}),r.a.createElement(v,{text:"3"}),r.a.createElement(N,{text:"Del"}),r.a.createElement(O,{text:"Clear"})),r.a.createElement("div",{className:"row",id:"row0"},r.a.createElement(v,{text:"0"}),r.a.createElement(v,{text:"."}),r.a.createElement(x,{text:"Ans"}),r.a.createElement(d,{text:"="}))))}),h=a(10),y=a(3);a(35);var g=function(){return r.a.createElement("nav",null,r.a.createElement("h2",null,"Calculator Navigation"),r.a.createElement("ul",null,r.a.createElement("li",{className:"nav-links"},r.a.createElement(h.b,{to:"/"},"Double Input Calc")),r.a.createElement("li",{className:"nav-links"},r.a.createElement(h.b,{to:"/results"},"Results")),r.a.createElement("li",{className:"nav-links"},r.a.createElement(h.b,{to:"/singleCalc"},"Interactive Calc"))))},j=Object(u.b)(i,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(r.a.createElement(m.a,{store:j},r.a.createElement(h.a,null,r.a.createElement(g,null),r.a.createElement(y.a,{path:"/",exact:!0},r.a.createElement(f,null)),r.a.createElement(y.a,{path:"/results",exact:!0},r.a.createElement(b,null)),r.a.createElement(y.a,{path:"/singleCalc",exact:!0},r.a.createElement(_,null)))),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.b1a685ca.chunk.js.map