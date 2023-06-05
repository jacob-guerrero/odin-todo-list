(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>i});var o=n(81),r=n.n(o),a=n(645),d=n.n(a)()(r());d.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Patua+One&display=swap);"]),d.push([t.id,"html {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n*, *:before, *:after {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  box-sizing: inherit;\n}\n:root {\n  --main-color: #6B8F71;\n  --second-color: #AAD2BA;\n  --third-color: #B9F5D8;\n  --side-color: #D9FFF5;\n  --contrast-color: #1D1E18;\n  --gray: #f5f5f5;\n  --gray-second: #d6d6d6;\n  --gray-darker: #a0a0a0;\n}\nhtml, body {\n  margin: 0;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  width: 100%;\n  height: 100%;\n}\nh1, h2, h3, p {\n  margin: 0;\n}\n\n/* Icons */\n@font-face {\n  font-family: 'Material Symbols Outlined';\n  font-style: normal;\n  font-weight: 100 700;\n  src: url(https://fonts.gstatic.com/s/materialsymbolsoutlined/v110/kJEhBvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oFsI.woff2) format('woff2');\n}\n.material-symbols-outlined, .material-symbols-outlined-2, .material-symbols-outlined-3, .material-symbols-outlined-4, .material-symbols-outlined-5 {\n  font-family: 'Material Symbols Outlined';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased;\n}\n/* Fonts */\n\n/* Close Icon */\n.material-symbols-outlined {\n      font-variation-settings:\n          'FILL' 0,\n          'wght' 500,\n          'GRAD' 0,\n          'opsz' 48;\n      transform: scale(0.9);\n      cursor: pointer;\n      position: absolute;\n      right: 0.2rem;\n      top: 0.2rem;\n      transition: all .1s ease-in-out;\n}\n.material-symbols-outlined:hover {\n      transform: scale(1);\n}\n/* Double Arrow Icon */\n.material-symbols-outlined-2 {\n  font-variation-settings:\n  'FILL' 0,\n  'wght' 400,\n  'GRAD' 0,\n  'opsz' 48;\n  transform: scale(0.9);\n  transition: all .2s ease-out;\n  cursor: pointer;\n\t/* animation: bounce 5s infinite; */\n}\n.material-symbols-outlined-2:hover {\n  /* animation-play-state: paused; */\n  transform: scale(1) translateY(0.1rem);\n}\n.material-symbols-outlined-2.up:hover {\n  transform: scale(1) translateY(-0.1rem);\n}\n/* Edit Icon */\n.material-symbols-outlined-3 {\n  font-variation-settings:\n  'FILL' 0,\n  'wght' 400,\n  'GRAD' 0,\n  'opsz' 48;\n  transform: scale(0.9);\n  transition: all .2s ease-out;\n  cursor: pointer;\n}\n/* Save Icon */\n.material-symbols-outlined-4 {\n  font-variation-settings:\n  'FILL' 0,\n  'wght' 400,\n  'GRAD' 0,\n  'opsz' 48;\n  transform: scale(0.9);\n  transition: all .2s ease-out;\n  cursor: pointer;\n}\n/* Cancel Icon */\n.material-symbols-outlined-5 {\n  font-variation-settings:\n  'FILL' 0,\n  'wght' 400,\n  'GRAD' 0,\n  'opsz' 48;\n  transform: scale(0.9);\n  transition: all .2s ease-out;\n  cursor: pointer;\n}\n\n/* Style */\nbody {\n  background-color: var(--side-color);\n}\n.wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.main-title {\n  font-size: clamp(2rem, 6vw, 3.5rem);\n  text-align: center;\n  padding: 2rem 0.5rem;\n}\n.new-project {\n  width: max-content;\n  padding: 0.5rem 1rem;\n  font-weight: 700;\n}\n\n#project-form {\n  display: grid;\n  justify-content: center;\n  margin: 2rem 0;\n}\n.form-container {\n  max-width: 400px;\n  padding: 1rem 0.5rem;\n  background-color: var(--third-color);\n  display: grid;\n  border: 3px solid var(--main-color);\n  color: var(--contrast-color);\n}\n.form-title {\n  margin-bottom: 0.5rem;\n}\n.form-container input {\n  display: block;\n  padding: 0.5rem 0.6rem;\n  border: none;\n  border-radius: 4px;\n  font-size: 1rem;\n}\n.btn-container {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 1.2rem;\n}\n.btn-container .btn {\n  padding: 0.5rem 1rem;\n  font-weight: 700;\n}\n\n#content {\n  background-color: var(--main-color);\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  padding: 1rem 0.8rem;\n  gap: 0.6rem;\n  justify-content: center;\n  max-width: 1200px;\n  margin: 0 auto;\n  border-radius: 1.5rem;\n}\n.project {\n  position: relative;\n  background-color: var(--third-color);\n  border: 4px solid var(--second-color);\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n  z-index: 0;\n}\n.project-title {\n  border-bottom: 1px solid black;\n  font-family: 'Patua One', cursive, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  font-weight: 400;\n  font-size: clamp(1.5rem, 6vw, 2.5rem);\n}\n\n.todo {\n  border: 1px solid black;\n  margin: 0.6rem 0.5rem 0 0.5rem;\n}\n.todo {\n  position: relative;\n  background-color: #ffc;\n  padding: 2rem;\n  text-align: center;\n}\n.todo::before {\n  content: \"\";\n\n  position: absolute;\n  z-index: -1;\n  bottom: 15px;\n  right: 5px;\n  width: 50%;\n  top: 80%;\n\n  box-shadow: 0px 13px 10px black;\n  rotate: 4deg;\n}\n.todo input {\n  width: 100%;\n  padding: 2px 4px;\n}\n.option-container {\n  margin-top: 6px;\n}\n\n.add-todo-form {\n  float: right;\n  margin: 1rem 2rem 0 0;\n  border-radius: 50%;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid var(--contrast-color);\n  background-color: var(--main-color);\n  color: var(--contrast-color);\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n\n.show-todo {\n  display: flex;\n  justify-content: center;\n  margin-top: 1rem;\n}\n.todo-form-title {\n  margin-bottom: 0.5rem;\n}\n.todo-form-container input {\n  display: block;\n  width: 100%;\n  max-width: 300px;\n  border: none;\n  border-radius: 4px;\n  padding: 0.3rem 0.5rem;\n  margin-bottom: 0.3rem;\n  background-color: var(--gray);\n}\n.todo-form-container select {\n  border-radius: 4px;\n  padding: 0.2rem 0rem;\n  margin: 0 0 0.4rem 0.5rem;\n  border: none;\n  background-color: var(--gray);\n}\n.btn-todo-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.4rem;\n  margin-top: 0.4rem;\n}\n.btn-todo-container .btn {\n  padding: 0.5rem;\n  font-weight: 700;\n}\n\n/* Hide content */\n.hide-content/* , .show-todo.active, .show-form  */{\n  max-height: 0;\n  overflow: hidden;\n  /* Fix transition delay: */\n  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);\n}\n.hide-content.active, .show-todo, .show-form.active {\n  max-height: 1000px;\n  transition: max-height 1s ease-in;\n}\n.add-todo-form {\n  transform: rotate(0deg);\n  transition: transform 0.2s ease-in-out;\n}\n.add-todo-form.active {\n  transform: rotate(-45deg);\n  transition: transform 0.2s ease-in-out;\n}\n\n/* Animations */\n@keyframes bounce {\n\t0%, 30%, 100% {\n    transform: translateY(0);\n  }\n\t15% \n  {\n    transform: translateY(0.3rem);\n  }\n}\n\n@media (min-width: 480px) {\n  .todo::before {\n    rotate: 2deg;\n  }\n}\n@media (min-width: 800px) {\n  .todo::before {\n    bottom: 16px;\n    box-shadow: 1px 8px 13px black;\n  }\n}",""]);const i=d},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var d={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(d[c]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);o&&d[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var a={},d=[],i=0;i<t.length;i++){var c=t[i],s=o.base?c[0]+o.base:c[0],l=a[s]||0,m="".concat(s," ").concat(l);a[s]=l+1;var u=n(m),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var f=r(p,o);o.byIndex=i,e.splice(i,0,{identifier:m,updater:f,references:1})}d.push(m)}return d}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var a=o(t=t||[],r=r||{});return function(t){t=t||[];for(var d=0;d<a.length;d++){var i=n(a[d]);e[i].references--}for(var c=o(t,r),s=0;s<a.length;s++){var l=n(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{const t=document.querySelector("#content"),e=(e,n)=>{let o=document.querySelector("#project").value;""===o&&(o="Project"),e?o=n:function(t){f.push(t),localStorage.setItem("projects",JSON.stringify(f))}(o);const r=document.createElement("div");r.classList.add("project"),r.dataset.projectId=d.length;const a=document.createElement("span");a.textContent="close",a.classList.add("material-symbols-outlined","close"),a.dataset.closeBtnId=d.length,a.onclick=i;const c=document.createElement("h2");c.textContent=o,c.classList.add("project-title");const l=document.createElement("button");l.classList.add("add-todo-form"),l.dataset.projectBtnId=d.length,l.textContent="+",l.onclick=s,r.append(a,c,l),t.append(r)},o=t=>{const e=t.target.closest(".project").dataset.projectId,n=t.target.closest(".todo").dataset.todoItemId,o=document.querySelector(`[data-todo-item-id = "${t.target.dataset.saveTodoId}"]`),a=t.target.closest(".todo"),i=a.querySelectorAll("input"),c=t.target.parentElement;let s,l,m,u;if(t.target.classList.contains("save-todo")&&(s=o.querySelector(".input-title").value,l=o.querySelector(".input-description").value,m=o.querySelector(".input-date").value,u=o.querySelector(".input-priority").value),t.target.classList.contains("cancel-todo")){const t=d[e][n];s=t.title,l=t.description,m=t.dueDate,u=t.priority}const f=document.createElement("h3");f.textContent=s,f.classList.add("todo-title");const g=document.createElement("p");g.textContent=l,g.classList.add("todo-description","hide-content","active");const y=document.createElement("p");y.textContent=m,y.classList.add("todo-date");const h=document.createElement("p");h.textContent=u,h.classList.add("todo-priority","hide-content","active"),c.before(f,y,g,h),i.forEach((t=>{t.remove()})),a.querySelector("select").remove();const v=a.querySelector(".save-todo"),b=a.querySelector(".cancel-todo"),x=document.createElement("span");x.textContent="edit_square",x.classList.add("material-symbols-outlined-3","edit-todo"),v.dataset.saveTodoId=a.dataset.todoItemId,x.onclick=p,a.querySelector(".option-container").append(x),a.querySelector(".option-container").removeChild(v),a.querySelector(".option-container").removeChild(b),t.target.classList.contains("save-todo")&&r(e,n,s,l,m,u)},r=(t,e,n,o,r,a)=>{d[t][e].title=n,d[t][e].description=o,d[t][e].dueDate=r,d[t][e].priority=a},a=t=>{d.push(t)},d=[],i=((()=>{const t=document.querySelector(".new-project"),n=document.querySelector(".add-project"),o=document.querySelector(".hide-options");t.addEventListener("click",(()=>{document.querySelector(".show-form").classList.toggle("active")})),n.addEventListener("click",(t=>{t.preventDefault(),e(!1,""),a([]),console.log(d)})),o.addEventListener("click",(()=>{document.querySelector(".show-form").classList.toggle("active")}))})(),t=>{const e=t.target.dataset.closeBtnId;var n;n=e,d.splice(n,1),document.querySelector(`[data-project-id = "${n}"] `).remove(),(t=>{const e=document.querySelectorAll("[data-project-id]"),n=document.querySelectorAll("[data-close-btn-id]"),o=document.querySelectorAll("[data-project-btn-id]");for(let r=t;r<d.length;r++)e[r].dataset.projectId=r,n[r].dataset.closeBtnId=r,o[r].dataset.projectBtnId=r;if(document.querySelector("[data-todo-id]")){const t=document.querySelector("[data-todo-id]"),e=document.querySelector("[data-todo-btn-id]");t.dataset.todoId=t.parentElement.dataset.projectId,e.dataset.todoBtnId=t.parentElement.dataset.projectId}})(e),function(t){const e=JSON.parse(localStorage.getItem("projects"));e&&e.length>t&&(e.splice(t,1),f.splice(t,1),localStorage.setItem("projects",JSON.stringify(e)))}(e)}),c=t=>{document.querySelector("[data-todo-id]").classList.toggle("active"),t.target.classList.toggle("active")},s=t=>{const e=document.querySelector("[data-todo-id]"),n=document.querySelector(".add-todo-form.active");e&&(t.target.dataset.projectBtnId===e.dataset.todoId?c(t):((t=>{t.remove()})(e),n.classList.remove("active"))),document.querySelector("[data-todo-id]")||((t=>{const e=document.createElement("div");e.classList.add("show-todo"),e.dataset.todoId=t.target.dataset.projectBtnId,e.setAttribute("id","myTodo");const n=document.createElement("form");n.classList.add("todo-form-container");const o=document.createElement("h2");o.classList.add("todo-form-title"),o.textContent="Add New Todo";const r=document.createElement("label");r.for="todo",r.textContent="Todo Title:";const a=document.createElement("input");a.type="text",a.name="todo",a.id="todo",a.required="true";const d=document.createElement("label");d.for="todo-desc",d.textContent="Todo Description:";const i=document.createElement("input");i.type="text",i.name="todo-desc",i.id="todo-desc",i.required="true";const s=document.createElement("label");s.for="todo-date",s.textContent="Due Date:";const l=document.createElement("input");l.type="date",l.name="todo-date",l.id="todo-date",l.required="true";const m=document.createElement("label");m.for="todo-prior",m.textContent="Priority:";const u=document.createElement("select");u.name="todo-prior",u.id="todo-prior",u.required="true";const p=document.createElement("option");p.textContent="High",p.value="high";const f=document.createElement("option");f.textContent="Medium",f.value="medium";const g=document.createElement("option");g.textContent="Low",g.value="low",u.append(p,f,g);const y=document.createElement("div");y.classList.add("btn-todo-container");const h=document.createElement("button");h.classList.add("btn","add-todo"),h.dataset.todoBtnId=t.target.dataset.projectBtnId,h.type="submit",h.textContent="Add Todo";const v=document.createElement("button");v.classList.add("btn","hide-todo"),v.type="button",v.textContent="Close",v.onclick=c,y.append(h,v),n.append(o,r,a,d,i,s,l,m,u,y);const b=t.target.parentElement;e.append(n),b.append(e)})(t),l(),t.target.classList.add("active"))},l=()=>{document.querySelectorAll(".add-todo").forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault();(t=>{const e=(t=>{const e=document.querySelector("#todo").value,n=document.querySelector("#todo-desc").value,o=document.querySelector("#todo-date").value,r=document.querySelector("#todo-prior").value,a=document.createElement("div");a.classList.add("todo"),a.dataset.todoItemId=d[t].length;const i=document.createElement("span");i.textContent="close",i.classList.add("material-symbols-outlined","close-todo"),i.dataset.closeTodoId=d[t].length,i.onclick=m;const c=document.createElement("h3");c.textContent=e,c.classList.add("todo-title");const s=document.createElement("p");s.textContent=n,s.classList.add("todo-description","hide-content");const l=document.createElement("p");l.textContent=o,l.classList.add("todo-date");const f=document.createElement("p");f.textContent=r,f.classList.add("todo-priority","hide-content");const g=document.createElement("div");g.classList.add("option-container","hide-content");const y=document.createElement("span");y.textContent="edit_square",y.classList.add("material-symbols-outlined-3","edit-todo"),y.dataset.editTodoId=d[t].length,y.onclick=p,g.append(y);const h=document.createElement("div");h.classList.add("expand-container");const v=document.createElement("span");v.textContent="keyboard_double_arrow_down",v.classList.add("material-symbols-outlined-2","expand"),v.onclick=u,h.append(v);const b=document.querySelector(`[data-project-id = "${t}"]`),x=document.querySelector(`[data-project-btn-id = "${t}"]`);return a.append(i,c,l,s,f,g,h),b.insertBefore(a,x),{todoName:e,todoDesc:n,todoDate:o,todoPrior:r}})(t);var n,o,r,a;((t,...e)=>{d[t].push(...e)})(t,(n=e.todoName,o=e.todoDesc,r=e.todoDate,a=e.todoPrior,{title:n,description:o,dueDate:r,priority:a,sayTask:()=>{console.log({title:n,description:o,dueDate:r,priority:a})}}))})(t.target.dataset.todoBtnId),console.log(d)}))}))},m=t=>{const e=t.target.dataset.closeTodoId,n=t.target.closest(".project").dataset.projectId;((t,e)=>{const n=document.querySelector(`[data-project-id = "${e}"]`);d[e].splice(t,1),n.querySelector(`[data-todo-item-id = "${t}"] `).remove()})(e,n),((t,e)=>{const n=document.querySelector(`[data-project-id = "${e}"]`),o=n.querySelectorAll("[data-todo-item-id]"),r=n.querySelectorAll("[data-close-todo-id]");for(let n=t;n<d[e].length;n++)o[n].dataset.todoItemId=n,r[n].dataset.closeTodoId=n})(e,n)},u=t=>{"keyboard_double_arrow_down"===t.target.textContent?(t.target.textContent="keyboard_double_arrow_up",t.target.classList.add("up")):(t.target.textContent="keyboard_double_arrow_down",t.target.classList.remove("up")),t.target.closest(".todo").querySelectorAll(".hide-content").forEach((t=>{t.classList.toggle("active")}))},p=t=>{const e=t.target.closest(".todo"),n=e.querySelector(".todo-title"),r=document.createElement("input");r.type="text",r.value=n.textContent,r.placeholder="Title",r.classList.add("input-title"),e.insertBefore(r,n),e.removeChild(n);const a=e.querySelector(".todo-description"),d=document.createElement("input");d.type="text",d.value=a.textContent,d.placeholder="Description",d.classList.add("input-description"),e.insertBefore(d,a),e.removeChild(a);const i=e.querySelector(".todo-date"),c=document.createElement("input");c.type="date",c.value=i.textContent,c.classList.add("input-date"),e.insertBefore(c,i),e.removeChild(i);const s=e.querySelector(".todo-priority"),l=document.createElement("select"),m=document.createElement("option");m.textContent="High",m.value="high";const u=document.createElement("option");u.textContent="Medium",u.value="medium";const p=document.createElement("option");p.textContent="Low",p.value="low",l.append(m,u,p),l.value=s.textContent,l.classList.add("input-priority"),e.insertBefore(l,s),e.removeChild(s);const f=e.querySelector(".edit-todo"),g=document.createElement("span");g.textContent="check_circle",g.classList.add("material-symbols-outlined-4","save-todo"),g.dataset.saveTodoId=e.dataset.todoItemId,g.onclick=o;const y=document.createElement("span");y.textContent="cancel",y.classList.add("material-symbols-outlined-5","cancel-todo"),y.onclick=o,e.querySelector(".option-container").append(g,y),e.querySelector(".option-container").removeChild(f)};let f=[];0===localStorage.length?document.querySelector(".add-project").click():function(){const t=function(){const t=localStorage.getItem("projects");return t?JSON.parse(t):null}();t&&t.forEach((t=>{f.push(t),e(!0,t),a([])}))}();var g=n(379),y=n.n(g),h=n(795),v=n.n(h),b=n(569),x=n.n(b),S=n(565),w=n.n(S),E=n(216),I=n.n(E),L=n(589),q=n.n(L),C=n(426),j={};j.styleTagTransform=q(),j.setAttributes=w(),j.insert=x().bind(null,"head"),j.domAPI=v(),j.insertStyleElement=I(),y()(C.Z,j),C.Z&&C.Z.locals&&C.Z.locals,console.log(d),console.log(f.length)})()})();