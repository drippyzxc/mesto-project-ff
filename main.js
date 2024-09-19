(()=>{"use strict";function e(e){e.classList.add("popup_is-animated"),setTimeout((function(){return e.classList.add("popup_is-opened")}),100),document.addEventListener("keydown",n),e.addEventListener("click",r)}function t(e){setTimeout((function(){return e.classList.remove("popup_is-animated")}),600),document.removeEventListener("keydown",n),e.removeEventListener("click",r),e.classList.remove("popup_is-opened")}function n(e){"Escape"===e.key&&t(document.querySelector(".popup_is-opened"))}function r(e){e.currentTarget===e.target&&t(e.currentTarget)}var o={baseUrl:"https://nomoreparties.co/v1/wff-cohort-19",headers:{authorization:"3e2c6372-3109-4d25-8024-2df5d5eafb4c","Content-Type":"application/json"}},c=function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))},a=document.querySelector(".places__list"),i=(Array.from(document.querySelectorAll(".popup")),document.querySelector(".popup_type_edit")),u=document.querySelector(".popup_type_new-card"),l=document.querySelector(".popup_type_image"),s=l.querySelector(".popup__image"),d=l.querySelector(".popup__caption"),p=document.querySelector(".profile__edit-button"),f=document.querySelector(".profile__title"),m=document.querySelector(".profile__description"),v=document.querySelector(".profile__add-button"),_=document.querySelector(".popup_type_avatar"),y=document.querySelector(".popup_type_delete-card"),h=document.querySelector(".profile__image"),b=document.querySelector(".popup__input_type_name"),S=document.querySelector(".popup__input_type_description"),C=document.querySelectorAll(".popup__close"),k=document.forms["edit-profile"],g=document.forms["new-place"],L=document.forms["edit-avatar"],E=document.forms["delete-card"],q=g.elements["place-name"],A=g.elements.link;function x(e,t,n){var r=t.deleteCardCallback,o=t.openImageCallback,c=t.handleLikesCallback,a=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),i=a.querySelector(".card__image"),u=a.querySelector(".card__title"),p=a.querySelector(".card__like-button"),f=a.querySelector(".card__like-counter");i.src=e.link,i.alt=e.name,u.textContent=e.name,f.textContent=e.likes.length;var m=a.querySelector(".card__delete-button");return n!==e.owner._id?m.style.display="none":m.addEventListener("click",(function(){var t=e._id;r(a,t)})),e.likes.some((function(e){return e._id===n}))&&p.classList.add("card__like-button_is-active"),p.addEventListener("click",(function(){c(f,p,e)})),i.addEventListener("click",(function(){o(i,s,d,l)})),a}var T,U,w=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent="",t.setCustomValidity("")},j=function(e,t){e.classList.add(t.inactiveButtonClass),e.disabled=!0},O=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):j(t,n)},B=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(t,n){w(e,t,n),t.value="",t.setCustomValidity("")})),j(r,t)};function P(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранить",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Сохранение...";t.textContent=e?r:n}function I(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранение...";t.preventDefault();var r=t.submitter,o=r.textContent;P(!0,r,o,n),e().then((function(){t.target.reset()})).catch((function(e){console.error("Ошибка: ".concat(e))})).finally((function(){P(!1,r,o,n)}))}function M(){b.value=f.textContent,S.value=m.textContent}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var N={deleteCardCallback:function(t,n){T=t,U=n,e(y)},openImageCallback:function(t,n,r,o){n.src=t.src,n.alt=t.alt,r.textContent=t.alt,e(o)},handleLikesCallback:function(e,t,n){var r;t.classList.contains("card__like-button_is-active")?(r=n._id,fetch("".concat(o.baseUrl,"/cards/likes/").concat(r),{method:"DELETE",headers:o.headers}).then(c)).then((function(n){t.classList.toggle("card__like-button_is-active"),e.textContent=n.likes.length})).catch((function(e){console.error("Не удалось убрать лайк. Пожалуйста, попробуйте еще раз:",e)})):function(e){return fetch("".concat(o.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:o.headers}).then(c)}(n._id).then((function(n){t.classList.toggle("card__like-button_is-active"),e.textContent=n.likes.length})).catch((function(e){console.error("Не удалось добавить лайк. Пожалуйста, попробуйте еще раз:",e)}))}},V={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);O(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?w(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),O(n,r,t)}))}))}(t,e)}))}(V),p.addEventListener("click",(function(){B(k,V),M(),e(i)})),v.addEventListener("click",(function(){B(u,V),e(u)})),h.addEventListener("click",(function(){B(_,V),e(_)})),C.forEach((function(e){var n=e.closest(".popup");e.addEventListener("click",(function(){t(n)}))}));var H="";i.addEventListener("submit",(function(e){I((function(){var n=b.value,r=S.value;return function(e,t){return fetch("".concat(o.baseUrl,"/users/me"),{method:"PATCH",headers:o.headers,body:JSON.stringify({name:e,about:t})}).then(c)}(n,r).then((function(o){f.textContent=o.name,m.textContent=o.about,console.dir(n,r),M(),t(e.target.closest(".popup_is-opened"))}))}),e)})),u.addEventListener("submit",(function(e){!function(e,n,r){I((function(){return(e=q.value,i=A.value,fetch("".concat(o.baseUrl,"/cards"),{method:"POST",headers:o.headers,body:JSON.stringify({name:e,link:i})}).then(c)).then((function(e){var o=x(e,n,r);a.prepend(o),t(u)}));var e,i}),e)}(e,N,H)})),_.addEventListener("submit",(function(e){I((function(){return(e=L.elements["avatar-link"].value,fetch("".concat(o.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:o.headers,body:JSON.stringify({avatar:e})}).then(c)).then((function(e){h.setAttribute("style","background-image: url('".concat(e.avatar,"')")),t(_)}));var e}),e)})),E.addEventListener("submit",(function(e){e.preventDefault(),function(e,n){var r;(r=n,fetch("".concat(o.baseUrl,"/cards/").concat(r),{method:"DELETE",headers:o.headers}).then(c)).then((function(){e.remove(),t(y)})).catch((function(e){console.error("Не удалось удалить карточку. Пожалуйста, попробуйте еще раз:",e)}))}(T,U)})),Promise.all([fetch("".concat(o.baseUrl,"/users/me"),{method:"GET",headers:o.headers}).then(c),fetch("".concat(o.baseUrl,"/cards"),{method:"GET",headers:o.headers}).then(c)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];!function(e){f.textContent=e.name,m.textContent=e.about,h.setAttribute("style","background-image: url('".concat(e.avatar,"')")),H=e._id}(o),function(e,t,n){a.innerHTML="",e.forEach((function(e){var r=x(e,t,n);a.appendChild(r)}))}(c,N,o._id)})).catch((function(e){console.error("Произошла ошибка при получении данных:",e)}))})();