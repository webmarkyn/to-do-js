!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class o{constructor(e,t){this._id=e,this._name=t,this._todos=[]}getId(){return this._id}getName(){return this._name}getTodos(){return[...this._todos]}getTodo(e){return this._todos[e]}setTodos(e){this._todos=e}addTodo(e){const t=this.getTodos();t.push(e),this.setTodos(t)}removeTodo(e){const t=this.getTodos();t.splice(e,1),this.setTodos(t)}updateTodo(e,t){const n=this.getTodos();n[e]=t,this.setTodos(n)}}const r=()=>null!==localStorage.getItem("projects"),s=()=>{if(r()){const e=[];return JSON.parse(localStorage.getItem("projects")).forEach(t=>{const n=new o(t._id,t._name);e.push(n)}),e}return null},c=e=>{const t=document.createElement("li"),n=document.createElement("button");return t.innerText=e.getName(),t.appendChild(n),n.innerText="X",n.addEventListener("click",()=>{alert("this should remove project "+e.getName())}),t};let i=r()?s():[];const u=document.getElementById("projectList"),l=document.getElementById("newProjectBtn");if(r())s().forEach(e=>{u.appendChild(c(e))});else{const e=new o(0,"My first Project");u.appendChild(c(e)),i.push(e),d=i,localStorage.setItem("projects",JSON.stringify(d))}var d;l.addEventListener("click",()=>{const e=(()=>{const e=document.getElementById("newProjectInput"),t=e.value;return e.value="",t})();if(e){const t=document.createElement("li"),n=i.length,r=new o(n,e);i.push(r),t.innerText=r.getName(),u.appendChild(t),localStorage.setItem("projects",JSON.stringify(i))}else alert("Project name can't be blank")})}]);