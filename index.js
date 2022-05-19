(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardTemplate=n,this._cardOwner=e.owner,this._title=e.name,this._id=e._id,this._image=e.link,this._likes=e.likes?e.likes:[],this._handleCardClick=r,this._handleDeleteIconClick=o,this._handleLikeClick=i,this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".card__image"),this._cardTitle=this._element.querySelector(".card__title"),this._cardDeleteButton=this._element.querySelector(".card__delete-button"),this._cardLikeButton=this._element.querySelector(".card__like-button"),this._cardLikeCounter=this._element.querySelector(".card__like-counter")}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(e){return this._cardOwner&&this._cardOwner._id===e&&this._cardDeleteButton.classList.add("card__delete-button_show"),this._likes.some((function(t){return t._id===e}))&&this._cardLikeButton.classList.add("card__like-button_active"),this._cardTitle.textContent=this._title,this._cardImage.alt=this._title,this._cardImage.src=this._image,this._cardLikeCounter.textContent=this._likes.length,this._setEventListeners(),this._element}},{key:"updateLikes",value:function(e){this._cardLikeButton.classList.toggle("card__like-button_active"),this._cardLikeCounter.textContent=e.likes.length}},{key:"deleteCard",value:function(e){e._element.remove()}},{key:"isLiked",value:function(){return this._cardLikeButton.classList.contains("card__like-button_active")}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",(function(){e._handleCardClick({name:e._title,link:e._image})})),this._cardDeleteButton.addEventListener("click",(function(){e._handleDeleteIconClick(e)})),this._cardLikeButton.addEventListener("click",(function(){e._handleLikeClick(e)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formData=t,this._form=n,this._sendFormButton=this._form.querySelector(this._formData.submitButtonSelector),this._inputList=this._form.querySelectorAll(this._formData.inputSelector)}var t,r;return t=e,(r=[{key:"_handleFormSubmit",value:function(e){e.preventDefault()}},{key:"_handleFormInput",value:function(e){var t=e.target;this._showFieldError(t),this._setInputError(t),this._toggleButtonState()}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.classList.remove(e._formData.inputErrorClass)}))}},{key:"_setInputError",value:function(e){e.validity.valid?e.classList.remove(this._formData.inputErrorClass):e.classList.add(this._formData.inputErrorClass)}},{key:"_showFieldError",value:function(e){this._form.querySelector("#".concat(e.id,"-error")).textContent=e.validationMessage}},{key:"_toggleButtonState",value:function(){var e=this._sendFormButton;this._form.checkValidity()?(e.classList.remove(this._formData.inactiveButtonClass),e.removeAttribute("disabled","disabled")):(e.classList.add(this._formData.inactiveButtonClass),e.setAttribute("disabled","disabled"))}},{key:"enableValidation",value:function(){var e=this;this._form.addEventListener("submit",(function(t){return e._handleFormSubmit(t)})),this._form.addEventListener("input",(function(t){return e._handleFormInput(t)}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderCards",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"prependItem",value:function(e){this._container.prepend(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.baseUrl,this._headers=t.headers}var t,n;return t=e,n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._checkResponse).then((function(e){return e}))}},{key:"addCard",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/cards";return fetch(this._url+n,{method:e,headers:this._headers,body:JSON.stringify(t)}).then(this._checkResponse)}},{key:"deleteCard",value:function(e,t){return fetch("".concat(this._url,"/cards/").concat(t),{headers:this._headers,method:e}).then(this._checkResponse)}},{key:"changeLikeCard",value:function(e,t){return fetch("".concat(this._url,"/cards/likes/").concat(t),{headers:this._headers,method:e}).then(this._checkResponse)}},{key:"setProfile",value:function(){return fetch(this._url+"/users/me",{method:"GET",headers:this._headers}).then(this._checkResponse).then((function(e){return e}))}},{key:"updateUserInfo",value:function(e){return fetch(this._url+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse).then((function(e){return e}))}},{key:"updateAvatar",value:function(e){return fetch(this._url+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse).then((function(e){return e}))}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}],n&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popup.classList.remove("popup_opened")}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleCloseOverlay",value:function(e){e.target.classList.contains("popup_opened")&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close-button").addEventListener("click",(function(){e.close()})),this._popup.addEventListener("mousedown",(function(t){e._handleCloseOverlay(t)}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=d(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function d(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function y(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popup=e,t._title=t._popup.querySelector("#card-title"),t._image=t._popup.querySelector("#card-image"),t}return t=a,(n=[{key:"open",value:function(e){this._title.alt=e.name,this._image.src=e.link,this._title.textContent=e.name,p(_(a.prototype),"open",this).call(this)}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function S(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._popup=t,n._handleSubmit=e,n._form=n._popup.querySelector(".popup__form"),n._submitButton=n._popup.querySelector(".popup__button"),n}return t=a,(n=[{key:"_getInputValues",value:function(){return Array.from(this._form.elements)}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){e._handleSubmit(t,e._getInputValues())})),k(O(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._form.reset(),k(O(a.prototype),"close",this).call(this)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._about=t.about,this._avatar=t.avatar,this._id=t._id}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent,avatar:this._avatar.src,_id:this._id}}},{key:"setProfile",value:function(e){var t=e.name,n=e.about,r=e.avatar,o=e._id;this._name.textContent=t,this._about.textContent=n,this._avatar.src=r,this._id=o}}],n&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),j=document.querySelector(".discover__edit-button"),P=document.querySelector(".discover__avatar"),q=document.querySelector(".profile__add-button"),R=document.querySelector("#popup-show-card"),T=(R.querySelector("#card-title"),R.querySelector("#card-image"),document.querySelector("#popup-edit-avatar")),I=document.querySelector("#popup-submit"),B=document.querySelector("#popup-edit-profile"),D=document.querySelector("#popup-new-card"),x=document.querySelector(".discover__title"),A=document.querySelector(".discover__subtitle"),V=B.querySelector("#discover"),F=B.querySelector("#job"),U=(D.querySelector(".popup__form"),document.querySelectorAll(".popup"),D.querySelector("#title"),D.querySelector("#link"),{});function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(){return G="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=H(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},G.apply(this,arguments)}function H(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=K(e)););return e}function z(e,t){return z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},z(e,t)}function M(e,t){if(t&&("object"===N(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function K(e){return K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},K(e)}var Q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&z(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=K(r);if(o){var n=K(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return M(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._popup=t,n._handleSubmit=e,n._form=n._popup.querySelector(".popup__form"),n._button=n._popup.querySelector(".popup__button"),n}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;this._button.addEventListener("click",(function(){e._handleSubmit(e._cardId)})),G(K(a.prototype),"setEventListeners",this).call(this)}},{key:"setCardId",value:function(e){this._cardId=e}}])&&J(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l),W=new E((function(e,t){le(B,!0),e.preventDefault();var n={name:t.find((function(e){return"discover"===e.name})).value,about:t.find((function(e){return"job"===e.name})).value};te.updateUserInfo(n).then((function(e){e&&(oe.setProfile(e),W.close())})).catch((function(e){console.log(e)})).finally((function(){le(I,!1)}))}),B);W.setEventListeners();var X=new E((function(e,t){le(D,!0),e.preventDefault();var n={name:t.find((function(e){return"title"===e.name})).value,link:t.find((function(e){return"link"===e.name})).value};te.addCard("POST",n).then((function(e){if(e){var t=ie(e,ne);re.prependItem(t),X.close()}})).catch((function(e){console.log(e)})).finally((function(){le(I,!1)}))}),D);X.setEventListeners();var Y=new Q((function(e){le(I,!0),console.log(I),te.deleteCard("DELETE",e._id).then((function(){e.deleteCard(e),Y.close()})).catch((function(e){console.log(e)})).finally((function(){le(I,!1,"Да")}))}),I);Y.setEventListeners();var Z=new E((function(e,t){le(T,!0),e.preventDefault();var n={avatar:t.find((function(e){return"avatar-link"===e.name})).value};te.updateAvatar(n).then((function(e){e&&(oe.setProfile(e),Z.close())})).catch((function(e){console.log(e)})).finally((function(){le(I,!1)}))}),T);Z.setEventListeners();var $,ee=new v(R),te=new c({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-41",headers:{authorization:"4045a2f6-6d0f-4850-b94d-3526b10ebe4b","Content-Type":"application/json"},method:"GET"}),ne=null,re=new i({renderer:function(e){var t=ie(e,ne);re.addItem(t)}},".cards"),oe=new L({name:x,about:A,avatar:P,_id:null});function ie(e,n){return new t(e,"#card",ae,ce,ue).generateCard(n)}function ae(e){ee.open(e)}function ce(e){Y.open(),Y.setCardId(e)}function ue(e){(e.isLiked()?te.changeLikeCard("DELETE",e._id):te.changeLikeCard("PUT",e._id)).then((function(t){e.updateLikes(t)})).catch((function(e){console.log(e)}))}function le(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранить",r=e.querySelector(".popup__button");r.textContent=t?"Сохранение...":n}ee.setEventListeners(),te.setProfile().then((function(e){oe.setProfile(e),ne=e._id,te.getInitialCards().then((function(e){!function(e){re.renderCards(e)}(e)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)})),j.addEventListener("click",(function(){return function(){U.profile.resetValidation();var e=oe.getUserInfo(),t=e.name,n=e.about;V.value=t,F.value=n,W.open()}()})),q.addEventListener("click",(function(){return U["new-card"].resetValidation(),X.open()})),P.addEventListener("click",(function(){return U["edit-avatar"].resetValidation(),void Z.open()})),$={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll($.formSelector)).forEach((function(e){var t=new r($,e),n=e.getAttribute("name");U[n]=t,t.enableValidation(e)}))})();