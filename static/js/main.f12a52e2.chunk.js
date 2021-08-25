(this["webpackJsonpautocomplete-react"]=this["webpackJsonpautocomplete-react"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(4),r=n.n(s),a=(n(9),n(2)),u=(n(10),function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Object(c.useState)("idle"),i=Object(a.a)(n,2),s=i[0],r=i[1],u=Object(c.useState)(null),o=Object(a.a)(u,2),l=o[0],d=o[1],j=Object(c.useState)(null),h=Object(a.a)(j,2),b=h[0],v=h[1],f=Object(c.useCallback)((function(){return r("pending"),d(null),v(null),e.apply(void 0,arguments).then((function(e){d(e),r("success")})).catch((function(e){v(e),r("error")}))}),[e]);return Object(c.useEffect)((function(){t&&f()}),[f,t]),{execute:f,status:s,value:l,error:b}});var o={development:{API_KEY:"65199301"},test:{API_KEY:"65199301"},production:{API_KEY:"695c6d8d"}}.production.API_KEY,l={searchByTitle:function(e){return fetch("https://www.omdbapi.com/?s=".concat(e,"&apikey=").concat(o,"&type=movie")).then((function(e){return e.json()})).then((function(e){return e.Search}))},getById:function(e){return fetch("https://www.omdbapi.com/?i=".concat(e,"&apikey=").concat(o)).then((function(e){return e.json()}))}},d=n(0),j=function(e){var t,n,i=e.movie,s=Object(c.useCallback)((function(){return l.getById(i.imdbID)}),[i]),r=u(s),a=r.value,o=r.status;return Object(d.jsxs)("div",{className:"card","data-testid":"movie-card",children:[Object(d.jsx)("img",{src:i.Poster,alt:"Avatar",style:{width:100}}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h4",{children:Object(d.jsx)("b",{children:i.Title})}),"pending"===o&&Object(d.jsx)("p",{children:"Loading..."}),"success"===o&&Object(d.jsx)("p",{"data-testid":"ratings",children:null===a||void 0===a||null===(t=a.Ratings)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.Value})]})]})},h=function(e){var t=e.onClickMovie,n=e.movies,c=e.status;return Object(d.jsxs)(d.Fragment,{children:["pending"===c&&Object(d.jsx)("h1",{children:"Loading..."}),"success"===c&&Object(d.jsxs)(d.Fragment,{children:[n&&Object(d.jsx)("ul",{className:"search-results","data-testid":"search-results",tabIndex:-1,children:n.slice(0,5).map((function(e){return Object(d.jsx)("li",{onClick:function(){return t(e)},children:e.Title},e.imdbID)}))}),!n&&Object(d.jsx)("h1",{children:"Not Found!"})]})]})};var b=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(!1),r=Object(a.a)(s,2),o=r[0],b=r[1],v=Object(c.useState)(void 0),f=Object(a.a)(v,2),O=f[0],p=f[1],m=u(l.searchByTitle,!1),g=m.execute,x=m.value,y=m.status,I=Object(c.useMemo)((function(){return function(e){var t,n=this,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];clearTimeout(t),t=setTimeout((function(){e.apply(n,s)}),c)}}(g,300)}),[g]);return Object(c.useEffect)((function(){n.length>=3&&I(n)}),[n,I]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Search for Movies"}),Object(d.jsxs)("div",{className:"search-container",children:[Object(d.jsx)("input",{type:"search","data-testid":"search-input",value:n,placeholder:"Movie Title",onChange:function(e){return i(e.target.value)},onFocus:function(){return b(!0)},onBlur:function(){return setTimeout((function(){return b(!1)}),100)}}),o&&n.length>=3&&Object(d.jsx)(h,{onClickMovie:function(e){p(e),i(e.Title)},movies:x,status:y})]}),O&&Object(d.jsx)("div",{className:"movie-container",children:Object(d.jsx)(j,{movie:O})})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),v()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.f12a52e2.chunk.js.map