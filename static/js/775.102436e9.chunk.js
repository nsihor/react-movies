"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[775],{424:function(t,e,n){var r=n(689),a=n(87),u=n(791),i=n(184);e.Z=function(t){var e,n,c=t.movie,s=c.id,o=c.poster_path,p=c.original_title,l=c.original_name,f=c.title,h=c.name,d=(0,r.TH)(),m=(0,u.useRef)(null!==(e=null===(n=d.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");return(0,i.jsxs)("li",{children:[d.pathname.includes(s)?(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[(0,i.jsx)(a.rU,{to:m.current,children:"Back"}),(0,i.jsx)("img",{width:500,src:o?"https://image.tmdb.org/t/p/w500".concat(o):"https://dummyimage.com/300x450/616161/b5b5b5.jpg&text=Image+is+not+available",alt:null!==p&&void 0!==p?p:l})]}):(0,i.jsx)(a.rU,{to:"/movies/".concat(s),state:{from:d},children:(0,i.jsx)("img",{src:o?"https://image.tmdb.org/t/p/w300".concat(o):"https://dummyimage.com/300x450/616161/b5b5b5.jpg&text=Image+is+not+available",alt:null!==p&&void 0!==p?p:l})}),(0,i.jsx)("p",{children:null!==f&&void 0!==f?f:h})]})}},775:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(861),a=n(439),u=n(687),i=n.n(u),c=n(791),s=n(87),o=n(617),p=n(424),l=n(184),f=function(){var t,e=(0,c.useState)([]),n=(0,a.Z)(e,2),u=n[0],f=n[1],h=(0,s.lr)(),d=(0,a.Z)(h,2),m=d[0],v=d[1],x=null!==(t=m.get("query"))&&void 0!==t?t:"";(0,c.useEffect)((function(){var t=function(){var t=(0,r.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.Ph)(x);case 3:e=t.sent,f(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[x,m]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("label",{children:(0,l.jsx)("input",{style:{marginLeft:"16px"},type:"text",value:x,onChange:function(t){var e=""!==t.target.value?{query:t.target.value}:{};return v(e)}})}),(0,l.jsx)("ul",{style:{minHeight:"100vw"},children:u.map((function(t){return(0,l.jsx)(p.Z,{movie:t},t.id)}))})]})},h=function(){return(0,l.jsx)(f,{})}},617:function(t,e,n){n.d(e,{M1:function(){return d},Ph:function(){return p},TP:function(){return f},cu:function(){return s},tx:function(){return v}});var r=n(861),a=n(687),u=n.n(a),i=n(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c={method:"GET",params:{include_adult:"false",language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxN2IyOGI2N2ZhY2YwZGUwZGVhMWI1YzIwYjQzODJmYiIsInN1YiI6IjY0OGE4NjRkMjYzNDYyMDE0ZTU2MDkxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IGRpPwwg9WreG7ODGxMmPXdHj3eBwMPKy6uxkDfpKQ4"}};function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.Z)("trending/all/day?",c);case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(u().mark((function t(e){var n,r,a,s=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:1,t.next=3,(0,i.Z)("search/movie?query=".concat(e,"&page=").concat(n),c);case 3:return r=t.sent,a=r.data,t.abrupt("return",a.results);case 6:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.Z)("movie/".concat(e),c);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.Z)("movie/".concat(e,"/credits"),c);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return x.apply(this,arguments)}function x(){return x=(0,r.Z)(u().mark((function t(e){var n,r,a,s=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:1,t.next=3,(0,i.Z)("movie/".concat(e,"/reviews?page=").concat(n),c);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)}))),x.apply(this,arguments)}}}]);
//# sourceMappingURL=775.102436e9.chunk.js.map