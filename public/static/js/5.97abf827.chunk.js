(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[5],{45:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(46);function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},46:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},47:function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c})),a.d(t,"d",(function(){return l}));var n=a(17);var r=function(){return{type:"REQUIRE"}},i=function(e){return{type:"MINLENGTH",val:e}},c=function(){return{type:"EMAIL"}},l=function(e,t){var a,r=!0,i=function(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,c=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw i}}}}(t);try{for(i.s();!(a=i.n()).done;){var c=a.value;"REQUIRE"===c.type&&(r=r&&e.trim().length>0),"MINLENGTH"===c.type&&(r=r&&e.trim().length>=c.val),"MAXLENGTH"===c.type&&(r=r&&e.trim().length<=c.val),"MIN"===c.type&&(r=r&&+e>=c.val),"MAX"===c.type&&(r=r&&+e<=c.val),"EMAIL"===c.type&&(r=r&&/^\S+@\S+\.\S+$/.test(e))}}catch(l){i.e(l)}finally{i.f()}return r}},53:function(e,t,a){"use strict";var n=a(10),r=a(45),i=a(0),c=a.n(i),l=(a(54),a(47)),u=function(e,t){switch(t.type){case"CHANGE":return Object(r.a)(Object(r.a)({},e),{},{inputValue:t.payload,isValid:Object(l.d)(t.payload,t.validators)});case"TOUCH":return Object(r.a)(Object(r.a)({},e),{},{isTouched:!0});default:return e}};t.a=function(e){var t=Object(i.useReducer)(u,{inputValue:e.initialValue||"",isValid:e.initialIsValid||!1,isTouched:!1}),a=Object(n.a)(t,2),r=a[0],l=a[1],o=e.id,s=e.onInput,p=r.inputValue,d=r.isValid;Object(i.useEffect)((function(){s(o,p,d)}),[o,p,s,d]);var f=function(t){l({type:"CHANGE",payload:t.target.value,validators:e.validators})},b=function(){l({type:"TOUCH"})},v="input"===e.element?c.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,value:r.value,onChange:f,onBlur:b}):c.a.createElement("textarea",{id:e.id,rows:e.rows||3,value:r.value,onChange:f,onBlur:b});return c.a.createElement("div",{className:"form-control ".concat(!r.isValid&&r.isTouched&&"form-control--invalid")},c.a.createElement("label",{htmlFor:e.id},e.label),v,!r.isValid&&r.isTouched&&c.a.createElement("p",null,e.errorText))}},54:function(e,t,a){},55:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(10),r=a(46),i=a(45),c=a(0),l=function(e,t){switch(t.type){case"INPUT_CHANGE":var a=!0;for(var n in e.inputs)e.inputs[n]&&(a=n===t.inputId?a&&t.isValid:a&&e.inputs[n].isValid);return Object(i.a)(Object(i.a)({},e),{},{inputs:Object(i.a)(Object(i.a)({},e.inputs),{},Object(r.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:a});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},u=function(e,t){var a=Object(c.useReducer)(l,{inputs:e,isValid:t}),r=Object(n.a)(a,2),i=r[0],u=r[1];return[i,Object(c.useCallback)((function(e,t,a){u({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),Object(c.useCallback)((function(e,t){u({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},56:function(e,t,a){},57:function(e,t,a){"use strict";var n=a(10),r=a(0),i=a.n(r),c=(a(58),a(15));t.a=function(e){var t=Object(r.useState)(),a=Object(n.a)(t,2),l=a[0],u=a[1],o=Object(r.useState)(),s=Object(n.a)(o,2),p=s[0],d=s[1],f=Object(r.useState)(!0),b=Object(n.a)(f,2),v=b[0],m=b[1],O=Object(r.useRef)();Object(r.useEffect)((function(){if(l){var e=new FileReader;e.onload=function(){d(e.result)},e.readAsDataURL(l)}else console.log("File upload has been failed")}),[l]);return i.a.createElement("div",{className:"form-control"},i.a.createElement("input",{onChange:function(t){var a,n=v;t.target.files&&1===t.target.files.length?(a=t.target.files[0],u(a),m(!0),n=!0):(m(!1),n=!1),e.onInput(e.id,a,n)},ref:O,id:e.id,type:"file",style:{display:"none"},accept:".jpg,.png,.jpeg"}),i.a.createElement("div",{className:"image-upload ".concat(e.center&&"center")},i.a.createElement("div",{className:"image-upload__preview"},p&&i.a.createElement("img",{src:p,alt:"preview"}),!p&&i.a.createElement("p",null,"Please pick an image.")),i.a.createElement(c.a,{type:"button",onClick:function(){O.current.click()}},"PICK IMAGE")),!v&&i.a.createElement("p",null,e.errorText))}},58:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(48),r=a.n(n),i=a(49),c=a(10),l=a(0),u=a.n(l),o=a(1),s=(a(56),a(15)),p=a(53),d=a(47),f=a(55),b=a(52),v=a(11),m=a(51),O=a(16),y=a(57);t.default=function(){var e=Object(l.useContext)(v.a),t=Object(b.a)(),a=t.isLoading,n=t.errorMessage,j=t.sendRequest,E=t.clearError,h=Object(o.g)(),g=Object(f.a)({title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1},image:{value:null,isValid:!1}},!1),I=Object(c.a)(g,2),V=I[0],T=I[1],w=function(){var t=Object(i.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,(n=new FormData).append("title",V.inputs.title.value),n.append("description",V.inputs.description.value),n.append("address",V.inputs.address.value),n.append("image",V.inputs.image.value),n.append("creator",e.userId),t.next=10,j("".concat("https://places-app-server.herokuapp.com/","/api/places"),"POST",n,{Authorization:"Bearer "+e.token});case 10:t.next=14;break;case 12:t.prev=12,t.t0=t.catch(1);case 14:h.push("/");case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{error:n,onClear:E}),u.a.createElement("form",{className:"place-form",onSubmit:w},a&&u.a.createElement(O.a,{asOverlay:!0}),u.a.createElement(y.a,{id:"image",onInput:T,errorText:"Please provide an image"}),u.a.createElement(p.a,{id:"title",element:"input",type:"text",label:"Title",validators:[Object(d.c)()],errorText:"Please enter a valid title.",onInput:T}),u.a.createElement(p.a,{id:"description",element:"textarea",label:"Description",validators:[Object(d.b)(5)],errorText:"Please enter a valid description (at least 5 characters).",onInput:T}),u.a.createElement(p.a,{id:"address",element:"input",label:"Address",validators:[Object(d.c)()],errorText:"Please enter a valid address.",onInput:T}),u.a.createElement(s.a,{type:"submit",disabled:!V.isValid},"ADD PLACE")))}}}]);
//# sourceMappingURL=5.97abf827.chunk.js.map