"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[407],{424:function(t,e,n){var r=n(689),a=n(87),c=n(184);e.Z=function(t){var e=t.movie,n=e.id,i=e.poster_path,u=e.original_title,s=e.original_name,o=e.title,p=e.name,l=(0,r.TH)();return(0,c.jsxs)("li",{children:[l.pathname.includes(n)?(0,c.jsx)("img",{src:i?"https://image.tmdb.org/t/p/w300".concat(i):"https://dummyimage.com/300x450/616161/b5b5b5.jpg&text=Image+is+not+available",alt:null!==u&&void 0!==u?u:s}):(0,c.jsx)(a.rU,{to:"/goit-react-hw-05-movies/movies/".concat(n),children:(0,c.jsx)("img",{src:i?"https://image.tmdb.org/t/p/w300".concat(i):"https://dummyimage.com/300x450/616161/b5b5b5.jpg&text=Image+is+not+available",alt:null!==u&&void 0!==u?u:s})}),(0,c.jsx)("p",{children:null!==o&&void 0!==o?o:p})]})}},407:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r=n(861),a=n(439),c=n(687),i=n.n(c),u=n(617),s=n(791),o=n(689),p=n(87),l=n(424),f=n(184),h=function(){var t=(0,s.useState)({}),e=(0,a.Z)(t,2),n=e[0],c=e[1],h=(0,o.UO)().movieId;return(0,s.useEffect)((function(){var t=function(){var t=(0,r.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.TP)(h);case 3:e=t.sent,c(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[h]),(0,f.jsxs)("div",{style:{paddingLeft:"16px"},children:[(0,f.jsx)("p",{children:"Details"}),(0,f.jsx)(l.Z,{movie:n}),(0,f.jsx)(p.rU,{style:{marginRight:"16px"},to:"cast",children:"Cast"}),(0,f.jsx)(p.rU,{to:"reviews",children:"Reviews"}),(0,f.jsx)(o.j3,{})]})},d=function(){return(0,f.jsx)(h,{})}},617:function(t,e,n){n.d(e,{M1:function(){return d},Ph:function(){return p},TP:function(){return f},cu:function(){return s},tx:function(){return v}});var r=n(861),a=n(687),c=n.n(a),i=n(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u={method:"GET",params:{include_adult:"false",language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxN2IyOGI2N2ZhY2YwZGUwZGVhMWI1YzIwYjQzODJmYiIsInN1YiI6IjY0OGE4NjRkMjYzNDYyMDE0ZTU2MDkxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IGRpPwwg9WreG7ODGxMmPXdHj3eBwMPKy6uxkDfpKQ4"}};function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.Z)("trending/all/day?",u);case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(c().mark((function t(e){var n,r,a,s=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:1,t.next=3,(0,i.Z)("search/movie?query=".concat(e,"&page=").concat(n),u);case 3:return r=t.sent,a=r.data,t.abrupt("return",a.results);case 6:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.Z)("movie/".concat(e),u);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.Z)("movie/".concat(e,"/credits"),u);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return x.apply(this,arguments)}function x(){return x=(0,r.Z)(c().mark((function t(e){var n,r,a,s=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:1,t.next=3,(0,i.Z)("movie/".concat(e,"/reviews?page=").concat(n),u);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)}))),x.apply(this,arguments)}}}]);
//# sourceMappingURL=407.a8ab0307.chunk.js.map