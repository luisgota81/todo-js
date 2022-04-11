(()=>{"use strict";var t={d:(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};function e(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.d({},{L:()=>v});var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.tarea=e,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date}var o,r,n;return o=t,n=[{key:"fromJson",value:function(e){var o=e.id,r=e.tarea,n=e.completado,a=e.creado,i=new t(r);return i.id=o,i.completado=n,i.creado=a,i}}],(r=[{key:"imprimirClase",value:function(){console.log("".concat(this.tarea," - ").concat(this.id))}}])&&e(o.prototype,r),n&&e(o,n),Object.defineProperty(o,"prototype",{writable:!1}),t}();function r(t,e){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n(t,e)}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return l=t.done,t},e:function(t){c=!0,i=t},f:function(){try{l||null==o.return||o.return()}finally{if(c)throw i}}}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}var a=document.querySelector(".todo-list"),i=document.querySelector(".new-todo"),l=document.querySelector(".clear-completed"),c=document.querySelector(".filters"),u=document.querySelectorAll(".filtro"),s=function(t){var e='\n    <li class="'.concat(t.completado?"completed":"",'" data-id="').concat(t.id,'">\n    <div class="view">\n        <input class="toggle" type="checkbox" ').concat(t.completado?"checked":"",">\n        <label>").concat(t.tarea,'</label>\n        <button class="destroy"></button>\n    </div>\n    <input class="edit" value="Create a TodoMVC template">\n</li>'),o=document.createElement("div");return o.innerHTML=e,a.append(o.firstElementChild),o.firstElementChild};function d(t,e){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var r=0,n=function(){};return{s:n,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return i=t.done,t},e:function(t){l=!0,a=t},f:function(){try{i||null==o.return||o.return()}finally{if(l)throw a}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}function m(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}i.addEventListener("keyup",(function(t){if(13===t.keyCode&&i.value.length>0){var e=new o(i.value);v.nuevoTodo(e),s(e),i.value=""}})),a.addEventListener("click",(function(t){console.log("click");var e=t.target.localName,o=t.target.parentElement.parentElement,r=o.getAttribute("data-id");e.includes("input")?(v.marcarCompletado(r),o.classList.toggle("completed")):e.includes("button")&&(v.eliminaTodo(r),a.removeChild(o)),console.log(v)})),l.addEventListener("click",(function(){v.eliminarCompletados();for(var t=a.children.length-1;t>=0;t--){var e=a.children[t];e.classList.contains("completed")&&a.removeChild(e)}})),c.addEventListener("click",(function(t){console.log(t.target.text);var e=t.target.text;if(e){u.forEach((function(t){return t.classList.remove("selected")})),console.log(t.target),t.target.classList.add("selected");var o,n=r(a.children);try{for(n.s();!(o=n.n()).done;){var i=o.value;i.classList.remove("hidden");var l=i.classList.contains("completed");switch(e){case"Pendientes":l&&i.classList.add("hidden");break;case"Completados":l||i.classList.add("hidden")}}}catch(t){n.e(t)}finally{n.f()}}}));var v=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cargarLocalStorage()}var e,r,n;return e=t,(r=[{key:"nuevoTodo",value:function(t){this.todos.push(t),this.guardarLocalStorage()}},{key:"eliminaTodo",value:function(t){this.todos=this.todos.filter((function(e){return e.id!=t})),this.guardarLocalStorage()}},{key:"marcarCompletado",value:function(t){var e,o=d(this.todos);try{for(o.s();!(e=o.n()).done;){var r=e.value;if(console.log(t,r.id),r.id==t){r.completado=!r.completado,this.guardarLocalStorage();break}}}catch(t){o.e(t)}finally{o.f()}}},{key:"eliminarCompletados",value:function(){this.todos=this.todos.filter((function(t){return!t.completado})),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){localStorage.getItem("todo")?this.todos=JSON.parse(localStorage.getItem("todo")):this.todos=[],this.todos=this.todos.map((function(t){return o.fromJson(t)}))}}])&&m(e.prototype,r),n&&m(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}());v.todos.forEach((function(t){return s(t)})),console.log("todos",v.todos)})();