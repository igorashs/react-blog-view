(this["webpackJsonpreact-blog-view"]=this["webpackJsonpreact-blog-view"]||[]).push([[0],{20:function(e,t,n){e.exports=n(38)},25:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),s=n.n(c),l=(n(25),n(2)),u=n.n(l),o=n(7),i=n(9),m=(n(27),n(6));function p(e){var t=e.post;return r.a.createElement("article",{className:"NewestPost"},r.a.createElement("header",null,r.a.createElement("h1",null,"New: ",r.a.createElement("span",{className:"Italic"},t.title),r.a.createElement("p",{className:"Date"},"Date: ",t.timestamp))),r.a.createElement("section",null,r.a.createElement("p",null,t.text.slice(0,3e3))),r.a.createElement("footer",null,r.a.createElement(m.b,{to:"/posts/".concat(t._id)},r.a.createElement("span",null,"Continue Reading"))))}function f(e){var t=e.posts;return r.a.createElement("aside",{className:"PostLists"},r.a.createElement("header",null,r.a.createElement("h2",null,"Recent Posts")),r.a.createElement("section",null,r.a.createElement("ul",null,t&&t.map((function(e){return r.a.createElement("li",{className:"PostListItem",key:e._id},r.a.createElement(m.b,{to:"/posts/".concat(e._id)},r.a.createElement("article",{className:"RecentPost"},r.a.createElement("h3",null,e.title.length>80?"".concat(e.title.slice(0,80),"..."):e.title),r.a.createElement("p",null,e.timestamp))))})))),r.a.createElement(m.b,{to:"/posts"},"View All"))}n(33);var E=function(){return r.a.createElement("div",{className:"Loading"},r.a.createElement("svg",{className:"Loading-img",xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"})))};n(34);var h=function(e){var t=e.posts;return t?r.a.createElement("div",{className:"HomePage"},r.a.createElement(p,{post:t[0]}),r.a.createElement(f,{posts:t})):r.a.createElement(E,null)};n(35);var v=function(e){var t=e.posts;return t?r.a.createElement("div",{className:"PostsPage"},r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{className:"PostListItem",key:e._id},r.a.createElement(m.b,{to:"/posts/".concat(e._id)},r.a.createElement("article",null,r.a.createElement("h3",null,e.title.length>200?"".concat(e.title.slice(0,200),"..."):e.title),r.a.createElement("p",null,e.timestamp))))})))):r.a.createElement(E,null)},d=n(1),b="http://localhost:9000/";function x(){return O.apply(this,arguments)}function O(){return(O=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(b);case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",{error:e.t0});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function j(){return N.apply(this,arguments)}function N(){return(N=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(b,"posts/published/"));case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",{error:e.t0});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function w(e){return g.apply(this,arguments)}function g(){return(g=Object(o.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(b,"posts/").concat(t,"/comments/"));case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",{error:e.t0});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function y(e){return P.apply(this,arguments)}function P(){return(P=Object(o.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"posts/").concat(t.post,"/comments/new/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=n(19),C=n.n(k);function S(e){e instanceof Array&&e.forEach((function(e){if(e.date)return e.timestamp=C()(e.date).calendar()}))}function T(e){return e?e.length>15?"should be less than 15 characters":"":"is required"}function _(e){return e?e.length>300?"should be less than 300 characters":"":"is required"}n(37);var A=function(e){var t=e.posts,n=Object(d.f)().postId,c=function(e,t){var n=Object(a.useState)(null),r=Object(i.a)(n,2),c=r[0],s=r[1];return Object(a.useEffect)((function(){var n=e&&e.find((function(e){return e._id===t}));n&&s(n)}),[t,e]),c}(t,n),s=function(e,t){var n=Object(a.useState)([]),r=Object(i.a)(n,2),c=r[0],s=r[1];return Object(a.useEffect)((function(){(function(){var n=Object(o.a)(u.a.mark((function n(){var a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=5;break}return n.next=3,w(t);case 3:(a=n.sent).error?s([]):(S(a),s(a));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[t,e]),c}(c,n),l=Object(a.useState)(null),m=Object(i.a)(l,2),p=m[0],f=m[1],h=Object(a.useState)(null),v=Object(i.a)(h,2),b=v[0],x=v[1],O=Object(a.useState)(""),j=Object(i.a)(O,2),N=j[0],g=j[1],P=Object(a.useState)(""),k=Object(i.a)(P,2),C=k[0],A=k[1];function I(){return(I=Object(o.a)(u.a.mark((function e(t){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=T(p),r=_(b),!a&&!r){e.next=8;break}t.preventDefault(),g(a),A(r),e.next=16;break;case 8:return e.prev=8,e.next=11,y({post:n,username:p,text:b,date:new Date});case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(8),console.error("could not submit the comment");case 16:case"end":return e.stop()}}),e,null,[[8,13]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){null!==p&&g(T(p))}),[p]),Object(a.useEffect)((function(){null!==b&&A(_(b))}),[b]),c?r.a.createElement("article",{className:"PostPage"},r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement("span",{className:"Italic"},c.title),r.a.createElement("p",{className:"Date"},"Posted: ",c.timestamp))),r.a.createElement("section",{className:"PostText"},r.a.createElement("p",null,c.text)),r.a.createElement("footer",null,r.a.createElement("section",{className:"PostComments"},r.a.createElement("h2",null,"Comments"),s.length>0?r.a.createElement("ul",null,s.map((function(e){return r.a.createElement("li",{key:e._id},r.a.createElement("article",{className:"PostComment"},r.a.createElement("h3",null,e.username),r.a.createElement("div",null,r.a.createElement("p",{className:"CommentText"},e.text),r.a.createElement("p",{className:"CommentDate"},e.timestamp))))}))):"No Comments",r.a.createElement("section",{className:"CommentFormSection"},r.a.createElement("form",{className:"CommentForm ".concat((N||C)&&"FormError"),onSubmit:function(e){return I.apply(this,arguments)}},r.a.createElement("label",{htmlFor:"username",className:N&&"Error"},"Username ",N),r.a.createElement("input",{type:"text",id:"username",name:"username",value:p||"",onChange:function(e){f(e.currentTarget.value)}}),r.a.createElement("label",{htmlFor:"text",className:C&&"Error"},"Text ",C),r.a.createElement("textarea",{type:"text",id:"text",name:"text",value:b||"",onChange:function(e){x(e.currentTarget.value)}}),r.a.createElement("button",null,"Add Comment")))))):r.a.createElement(E,null)};function I(e){return r.a.createElement("p",{className:e.status?"Online":"Offline"},e.status?"Online":"Offline")}var F=function(){var e=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=function(){var t=Object(o.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j();case 2:(n=t.sent).error?(console.error("Failed to fetch the data, Try to fetch again in 5sec"),setTimeout(e,5e3)):(S(n),n.sort((function(e,t){return e.date>t.date?-1:e.date<t.date?1:0})),r(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e()}),[]),n}(),t=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=function(){var t=Object(o.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:t.sent.error?(console.error("Failed connection to API, Try to reconnect in 10sec"),r(!1),setTimeout(e,1e4)):r(!0);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e()})),n}();return r.a.createElement(m.a,null,r.a.createElement("header",{className:"App_Header"},r.a.createElement("nav",{className:"App_Nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"/"},"-Blog-")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/posts"},"-Posts-")))),r.a.createElement(I,{status:t})),r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",exact:!0},r.a.createElement(h,{posts:e&&e.slice(0,5)})),r.a.createElement(d.a,{path:"/posts",exact:!0},r.a.createElement(v,{posts:e})),r.a.createElement(d.a,{path:"/posts/:postId",exact:!0},r.a.createElement(A,{posts:e})),r.a.createElement(d.a,{path:"/"},r.a.createElement(h,{posts:e}))))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.6141bf4b.chunk.js.map