(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[6],{44:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(50);t.a=function(e){return r.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(46);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},46:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},47:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return l}));var a=n(17);var r=function(){return{type:"REQUIRE"}},i=function(e){return{type:"MINLENGTH",val:e}},c=function(){return{type:"EMAIL"}},l=function(e,t){var n,r=!0,i=function(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(a.a)(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,c=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw i}}}}(t);try{for(i.s();!(n=i.n()).done;){var c=n.value;"REQUIRE"===c.type&&(r=r&&e.trim().length>0),"MINLENGTH"===c.type&&(r=r&&e.trim().length>=c.val),"MAXLENGTH"===c.type&&(r=r&&e.trim().length<=c.val),"MIN"===c.type&&(r=r&&+e>=c.val),"MAX"===c.type&&(r=r&&+e<=c.val),"EMAIL"===c.type&&(r=r&&/^\S+@\S+\.\S+$/.test(e))}}catch(l){i.e(l)}finally{i.f()}return r}},50:function(e,t,n){},53:function(e,t,n){"use strict";var a=n(10),r=n(45),i=n(0),c=n.n(i),l=(n(54),n(47)),u=function(e,t){switch(t.type){case"CHANGE":return Object(r.a)(Object(r.a)({},e),{},{inputValue:t.payload,isValid:Object(l.d)(t.payload,t.validators)});case"TOUCH":return Object(r.a)(Object(r.a)({},e),{},{isTouched:!0});default:return e}};t.a=function(e){var t=Object(i.useReducer)(u,{inputValue:e.initialValue||"",isValid:e.initialIsValid||!1,isTouched:!1}),n=Object(a.a)(t,2),r=n[0],l=n[1],o=e.id,s=e.onInput,p=r.inputValue,d=r.isValid;Object(i.useEffect)((function(){s(o,p,d)}),[o,p,s,d]);var f=function(t){l({type:"CHANGE",payload:t.target.value,validators:e.validators})},b=function(){l({type:"TOUCH"})},v="input"===e.element?c.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,value:r.value,onChange:f,onBlur:b}):c.a.createElement("textarea",{id:e.id,rows:e.rows||3,value:r.value,onChange:f,onBlur:b});return c.a.createElement("div",{className:"form-control ".concat(!r.isValid&&r.isTouched&&"form-control--invalid")},c.a.createElement("label",{htmlFor:e.id},e.label),v,!r.isValid&&r.isTouched&&c.a.createElement("p",null,e.errorText))}},54:function(e,t,n){},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(10),r=n(46),i=n(45),c=n(0),l=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var a in e.inputs)e.inputs[a]&&(n=a===t.inputId?n&&t.isValid:n&&e.inputs[a].isValid);return Object(i.a)(Object(i.a)({},e),{},{inputs:Object(i.a)(Object(i.a)({},e.inputs),{},Object(r.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},u=function(e,t){var n=Object(c.useReducer)(l,{inputs:e,isValid:t}),r=Object(a.a)(n,2),i=r[0],u=r[1];return[i,Object(c.useCallback)((function(e,t,n){u({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),Object(c.useCallback)((function(e,t){u({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},56:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(48),r=n.n(a),i=n(49),c=n(10),l=n(0),u=n.n(l),o=n(1),s=n(53),p=n(15),d=n(44),f=n(16),b=n(51),v=n(47),m=n(55),y=n(52),O=n(11);n(56);t.default=function(){var e=Object(l.useContext)(O.a),t=Object(y.a)(),n=t.isLoading,a=t.errorMessage,j=t.sendRequest,h=t.clearError,E=Object(l.useState)(),V=Object(c.a)(E,2),T=V[0],I=V[1],w=Object(o.h)().placeId,g=Object(o.g)(),N=Object(m.a)({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!1),A=Object(c.a)(N,3),C=A[0],P=A[1],x=A[2];Object(l.useEffect)((function(){(function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("".concat("https://places-app-server.herokuapp.com/","/api/places/").concat(w));case 3:t=e.sent,I(t.place),x({title:{value:t.place.title,isValid:!0},description:{value:t.place.description,isValid:!0}},!0),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[j,w,x]);var S=function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,j("".concat("https://places-app-server.herokuapp.com/","/api/places/").concat(w),"PATCH",JSON.stringify({title:C.inputs.title.value,description:C.inputs.description.value}),{"Content-Type":"application/json",Authorization:"Bearer "+e.token});case 4:g.push("/"+e.userId+"/places"),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}();return n?u.a.createElement("div",{className:"center"},u.a.createElement(f.a,null)):T||a?u.a.createElement(u.a.Fragment,null,u.a.createElement(b.a,{error:a,onClear:h}),!n&&T&&u.a.createElement("form",{className:"place-form",onSubmit:S},u.a.createElement(s.a,{id:"title",element:"input",type:"text",label:"Title",validators:[Object(v.c)()],errorText:"Please enter a valid title.",onInput:P,initialValue:T.title,initialValid:!0}),u.a.createElement(s.a,{id:"description",element:"textarea",label:"Description",validators:[Object(v.b)(5)],errorText:"Please enter a valid description (min. 5 characters).",onInput:P,initialValue:T.description,initialValid:!0}),u.a.createElement(p.a,{type:"submit",disabled:!C.isValid},"UPDATE PLACE"))):u.a.createElement("div",{className:"center"},u.a.createElement(d.a,null,u.a.createElement("h2",null,"Could not find place!")))}}}]);
//# sourceMappingURL=6.fab0e3ae.chunk.js.map