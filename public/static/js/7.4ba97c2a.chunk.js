(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[7],{44:function(e,t,a){"use strict";var n=a(0),c=a.n(n);a(50);t.a=function(e){return c.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},50:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(48),c=a.n(n),r=a(49),l=a(10),o=a(0),s=a.n(o),i=a(1),u=(a(65),a(44)),m=(a(66),a(15)),E=a(59),p=(a(67),function(e){var t=Object(o.useRef)(),a=e.center,n=e.zoom;return Object(o.useEffect)((function(){var e=new window.google.maps.Map(t.current,{center:a,zoom:n});new window.google.maps.Marker({position:a,map:e})}),[a,n]),s.a.createElement("div",{ref:t,className:"map ".concat(e.className),style:e.style})}),f=a(11),d=a(52),h=a(51),v=a(16),b=function(e){var t=e.id,a=e.image,n=e.title,i=e.address,b=e.description,g=e.creator,O=e.coordinates,j=e.onDelete,w=Object(d.a)(),N=w.isLoading,C=w.errorMessage,k=w.sendRequest,_=w.clearError,y=Object(o.useContext)(f.a),D=Object(o.useState)(!1),x=Object(l.a)(D,2),L=x[0],M=x[1],I=Object(o.useState)(!1),S=Object(l.a)(I,2),z=S[0],A=S[1],P=function(){M(!L)},T=function(){A(!1)},F=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(!1),e.prev=1,e.next=4,k("".concat("http://localhost:5000","/api/places/").concat(t),"DELETE",null,{Authorization:"Bearer "+y.token});case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:j(t);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}();return s.a.createElement(o.Fragment,null,s.a.createElement(h.a,{error:C,onClear:_}),s.a.createElement(E.a,{show:L,toggleModal:P,header:i,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:s.a.createElement(m.a,{onClick:P},"CLOSE")},s.a.createElement("div",{className:"map-container"},s.a.createElement(p,{center:O,zoom:16}))),s.a.createElement(E.a,{show:z,onCancel:T,header:"Are you sure?",footerClass:"place-item__modal-actions",footer:s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,{inverse:!0,onClick:T},"CANCEL"),s.a.createElement(m.a,{danger:!0,onClick:F},"DELETE"))},s.a.createElement("p",null,"Do you want to proceed and delete this place?")),s.a.createElement("li",{className:"place-item"},s.a.createElement(u.a,{className:"place-item__content"},N&&s.a.createElement(v.a,{asOverlay:!0}),s.a.createElement("div",{className:"place-item__image"},s.a.createElement("img",{src:"".concat("http://localhost:5000","/").concat(a),alt:n})),s.a.createElement("div",{className:"place-item__info"},s.a.createElement("h2",null,n),s.a.createElement("h3",null,i),s.a.createElement("p",null,b)),s.a.createElement("div",{className:"place-item__actions"},s.a.createElement(m.a,{inverse:!0,onClick:P},"VIEW ON MAP"),y.userId===g&&s.a.createElement(m.a,{to:"/places/".concat(t)},"EDIT"),y.userId===g&&s.a.createElement(m.a,{danger:!0,onClick:function(){A(!0)}},"DELETE")))))},g=function(e){return 0===e.items.length?s.a.createElement("div",{className:"place-list center"},s.a.createElement(u.a,null,s.a.createElement("h2",null,"No places found. Maybe create one&"),s.a.createElement(m.a,{to:"/places/new"},"Share Place"))):s.a.createElement("ul",{className:"place-list"},e.items.map((function(t){return s.a.createElement(b,Object.assign({key:t.id,coordinates:t.location,onDelete:e.onDeletePlace},t))})))};t.default=function(){var e=Object(d.a)(),t=e.isLoading,a=e.errorMessage,n=e.sendRequest,u=e.clearError,m=Object(o.useState)(),E=Object(l.a)(m,2),p=E[0],f=E[1],b=Object(i.h)().userId;Object(o.useEffect)((function(){(function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n("".concat("http://localhost:5000","/api/places/user/").concat(b));case 3:t=e.sent,f(t.places),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[n,b]);return s.a.createElement(s.a.Fragment,null,s.a.createElement(h.a,{error:a,onClear:u}),t&&s.a.createElement("div",{className:"center"},s.a.createElement(v.a,null)),!t&&p&&s.a.createElement(g,{items:p,onDeletePlace:function(e){f((function(t){return t.filter((function(t){return t.id!==e}))}))}}))}}}]);
//# sourceMappingURL=7.4ba97c2a.chunk.js.map