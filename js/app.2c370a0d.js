(function(t){function e(e){for(var a,l,r=e[0],c=e[1],o=e[2],u=0,v=[];u<r.length;u++)l=r[u],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&v.push(i[l][0]),i[l]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(v.length)v.shift()();return n.push.apply(n,o||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,r=1;r<s.length;r++){var c=s[r];0!==i[c]&&(a=!1)}a&&(n.splice(e--,1),t=l(l.s=s[0]))}return t}var a={},i={app:0},n=[];function l(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=t,l.c=a,l.d=function(t,e,s){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(s,a,function(e){return t[e]}.bind(null,a));return s},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var f=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034b":function(t,e,s){},"551e":function(t,e,s){"use strict";s("e4f4")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Navigation"),s("div",{staticClass:"container-fluid p-0"},[s("About"),s("hr",{staticClass:"m-0"}),s("Experience"),s("hr",{staticClass:"m-0"}),s("Education"),s("hr",{staticClass:"m-0"}),s("Skills"),s("hr",{staticClass:"m-0"}),s("Projects"),s("hr",{staticClass:"m-0"}),s("Articles")],1)],1)},n=[],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",attrs:{id:"sideNav"}},[s("a",{staticClass:"navbar-brand js-scroll-trigger",attrs:{href:"#page-top"},on:{click:function(e){return t.onClickCollapse()}}},[s("span",{staticClass:"d-block d-lg-none"},[t._v("Brent Vanwildemeersch")]),t._m(0)]),t._m(1),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link js-scroll-trigger",class:{active:0===t.activeNav},attrs:{href:"#about"},on:{click:function(e){return t.onClickNavItem(0)}}},[t._v("About")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link js-scroll-trigger",class:{active:1===t.activeNav},attrs:{href:"#experience"},on:{click:function(e){return t.onClickNavItem(1)}}},[t._v("Experience")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link js-scroll-trigger",class:{active:2===t.activeNav},attrs:{href:"#education"},on:{click:function(e){return t.onClickNavItem(2)}}},[t._v("Education")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link js-scroll-trigger",class:{active:3===t.activeNav},attrs:{href:"#skills"},on:{click:function(e){return t.onClickNavItem(3)}}},[t._v("Skills")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link js-scroll-trigger",class:{active:4===t.activeNav},attrs:{href:"#projects"},on:{click:function(e){return t.onClickNavItem(4)}}},[t._v("Projects")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link js-scroll-trigger",class:{active:5===t.activeNav},attrs:{href:"#articles"},on:{click:function(e){return t.onClickNavItem(5)}}},[t._v("Tech-Blog")])])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"d-none d-lg-block"},[a("img",{staticClass:"img-fluid img-profile rounded-circle mx-auto mb-2",attrs:{src:s("61ae"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],c={name:"navigation",data:function(){return{activeNav:0}},methods:{onClickNavItem:function(t){this.activeNav=t,document.querySelector(".navbar-collapse").classList.remove("show")},onClickCollapse:function(){document.querySelector(".navbar-collapse").classList.remove("show")}}},o=c,f=s("2877"),u=Object(f["a"])(o,l,r,!1,null,null,null),v=u.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"resume-section",attrs:{id:"about"}},[s("div",{staticClass:"resume-section-content"},[s("h1",{staticClass:"mb-0"},[t._v(" Brent "),s("span",{staticClass:"text-primary"},[t._v("Vanwildemeersch")])]),s("div",{staticClass:"subheading mb-5"},[t._v(" Kortrijk, Belgium "),s("a",{attrs:{href:"mailto:name@email.com"}},[t._v("vanwildemeersch.brent@gmail.com")])]),s("p",{staticClass:"lead mb-5"},[t._v(" I am a developer specialized in Full-Stack software and platform development. I have build several online platforms and applications in different frameworks and I am eager to explore new technologies ")]),s("div",{staticClass:"social-icons"},[s("a",{staticClass:"social-icon",attrs:{href:"https://www.linkedin.com/in/brent-vanwildemeersch-05334092/",target:"_blank",rel:"noreferrer"}},[s("i",{staticClass:"fab fa-linkedin-in"})]),s("a",{staticClass:"social-icon",attrs:{href:"https://github.com/VanwildemeerschBrent",target:"_blank",rel:"noreferrer"}},[s("i",{staticClass:"fab fa-github"})]),s("a",{staticClass:"social-icon",attrs:{href:"https://twitter.com/BrentVanwildem",target:"_blank",rel:"noreferrer"}},[s("i",{staticClass:"fab fa-twitter"})]),s("a",{staticClass:"social-icon",attrs:{href:"https://dev.to/vanwildemeerschbrent",target:"_blank",rel:"noreferrer"}},[s("i",{staticClass:"fab fa-dev"})])])])])}],p={name:"About"},h=p,b=(s("551e"),Object(f["a"])(h,m,d,!1,null,"16a8a01e",null)),C=b.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"resume-section",attrs:{id:"experience"}},[s("div",{staticClass:"resume-section-content"},[s("h2",{staticClass:"mb-5"},[t._v("Experience")]),s("div",{staticClass:"d-flex flex-column flex-md-row justify-content-between mb-5"},[s("div",{staticClass:"flex-grow-1"},[s("h3",{staticClass:"mb-0"},[t._v("Software Consultant")]),s("div",{staticClass:"subheading mb-3"},[t._v("Positive Thinking Company, Belgium")]),s("p",[t._v(" Software consultant for The Positive Thinking Company. Focus creating ")])]),s("div",{staticClass:"flex-shrink-0"},[s("span",{staticClass:"text-primary"},[t._v("September 2020 - Present")])])]),s("div",{staticClass:"d-flex flex-column flex-md-row justify-content-between mb-5"},[s("div",{staticClass:"flex-grow-1"},[s("h3",{staticClass:"mb-0"},[t._v("Full-stack Developer")]),s("div",{staticClass:"subheading mb-3"},[t._v("Ocular Bvba, Belgium")]),s("p",[t._v(" Full Stack developer focused on development of web-based CMS platforms and audio-visual interactives ")])]),s("div",{staticClass:"flex-shrink-0"},[s("span",{staticClass:"text-primary"},[t._v("July 2017 - August 2020")])])]),s("div",{staticClass:"d-flex flex-column flex-md-row justify-content-between mb-5"},[s("div",{staticClass:"flex-grow-1"},[s("h3",{staticClass:"mb-0"},[t._v("Mobile App Intern")]),s("div",{staticClass:"subheading mb-3"},[t._v(" University of the Western Cape, South Africa ")]),s("p",[t._v(" Responsible for the develoment of the mobile community integration app UDUBSIT for the University of the Western Cape ")])]),s("div",{staticClass:"flex-shrink-0"},[s("span",{staticClass:"text-primary"},[t._v("February 2017 - June 2017")])])])])])}],w={name:"Experience"},x=w,k=Object(f["a"])(x,g,_,!1,null,null,null),y=k.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"resume-section",attrs:{id:"education"}},[s("div",{staticClass:"resume-section-content"},[s("h2",{staticClass:"mb-5"},[t._v("Education")]),s("div",{staticClass:"d-flex flex-column flex-md-row justify-content-between mb-5"},[s("div",{staticClass:"flex-grow-1"},[s("h3",{staticClass:"mb-0"},[t._v("Hogeschool West-Vlaanderen")]),s("div",{staticClass:"subheading mb-3"},[t._v(" Bachelor of Media and Communication Technologies ")])]),s("div",{staticClass:"flex-shrink-0"},[s("span",{staticClass:"text-primary"},[t._v("September 2013 - June 2017")])])]),s("div",{staticClass:"d-flex flex-column flex-md-row justify-content-between"},[s("div",{staticClass:"flex-grow-1"},[s("h3",{staticClass:"mb-0"},[t._v("VTI Poperinge")]),s("div",{staticClass:"subheading mb-3"},[t._v("Industrial Science")])]),s("div",{staticClass:"flex-shrink-0"},[s("span",{staticClass:"text-primary"},[t._v("September 2007 - June 2013")])])])])])}],E={name:"Education"},A=E,P=Object(f["a"])(A,j,S,!1,null,null,null),B=P.exports,O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"resume-section",attrs:{id:"skills"}},[s("div",{staticClass:"resume-section-content"},[s("h2",{staticClass:"mb-5"},[t._v("Skills")]),s("div",{staticClass:"subheading mb-3"},[t._v("Programming Languages & Tools")]),s("ul",{staticClass:"list-inline dev-icons"},[s("li",{staticClass:"list-inline-item"},[s("i",{staticClass:"fab fa-js-square"})]),s("li",{staticClass:"list-inline-item"},[s("i",{staticClass:"fab fa-vuejs"})]),s("li",{staticClass:"list-inline-item"},[s("i",{staticClass:"fab fa-angular"})]),s("li",{staticClass:"list-inline-item"},[s("i",{staticClass:"fab fa-ember"})]),s("li",{staticClass:"list-inline-item"},[s("i",{staticClass:"fab fa-node-js"})]),s("li",{staticClass:"list-inline-item"},[s("i",{staticClass:"fab fa-html5"})]),s("li",{staticClass:"list-inline-item"},[s("i",{staticClass:"fab fa-css3-alt"})]),s("li",{staticClass:"list-inline-item"},[s("i",{staticClass:"fab fa-sass"})]),s("li",{staticClass:"list-inline-item"},[s("i",{staticClass:"fab fa-gulp"})]),s("li",{staticClass:"list-inline-item"},[s("i",{staticClass:"fab fa-npm"})]),s("li",{staticClass:"list-inline-item"},[s("i",{staticClass:"fab fa-aws"})]),s("li",{staticClass:"list-inline-item"},[s("i",{staticClass:"fab fa-git"})]),s("li",{staticClass:"list-inline-item"},[s("i",{staticClass:"fab fa-docker"})])]),s("div",{staticClass:"subheading mb-3"},[t._v("Workflow")]),s("ul",{staticClass:"fa-ul mb-0"},[s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-check"})]),t._v(" Agile Development & Scrum ")]),s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-check"})]),t._v(" Mobile-First, Responsive Design ")]),s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-check"})]),t._v(" Cross Browser Testing & Debugging ")]),s("li",[s("span",{staticClass:"fa-li"},[s("i",{staticClass:"fas fa-check"})]),t._v(" Cross Functional Teams ")])])])])}],N={name:"skills"},$=N,V=Object(f["a"])($,O,T,!1,null,null,null),I=V.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"resume-section",attrs:{id:"projects"}},[s("div",{staticClass:"resume-section-content"},[s("h2",{staticClass:"mb-5"},[t._v("Side-projects")]),s("div",{staticClass:"d-flex flex-column flex-md-row justify-content-between mb-5"},[s("div",{staticClass:"flex-grow-1"},[s("a",{attrs:{href:"https://vanwildemeerschbrent.github.io/Trello_Clone/",target:"_blank",rel:"noreferrer"}},[s("h3",{staticClass:"mb-0"},[t._v("Trello Clone")])]),s("p",[t._v(" A clone of Trello with basic functionalities to advance my knowledge of the Angular framework and backend technologies. "),s("br"),t._v("Made with Angular, Express & MongoDB ")])]),s("div",{staticClass:"flex-shrink-0"},[s("span",{staticClass:"text-primary"},[s("a",{attrs:{href:"https://github.com/VanwildemeerschBrent/Trello_clone",target:"_blank",rel:"noreferrer"}},[t._v("Repository ")]),t._v("| "),s("a",{attrs:{href:"https://vanwildemeerschbrent.github.io/Trello_Clone",target:"_blank",rel:"noreferrer"}},[t._v(" App")])])])]),s("div",{staticClass:"d-flex flex-column flex-md-row justify-content-between mb-5"},[s("div",{staticClass:"flex-grow-1"},[s("a",{attrs:{href:"https://rsspersonalfeed.herokuapp.com/",target:"_blank",rel:"noreferrer"}},[s("h3",{staticClass:"mb-0"},[t._v("Personal RSS Feed")])]),s("p",[t._v(" A RSS-feed/RSS-Reader to group all latest articles from news-outlets together and reduce time spent on searching for news "),s("br"),t._v(" Made with Node.js, Express and Handlebars ")])]),s("div",{staticClass:"flex-shrink-0"},[s("span",{staticClass:"text-primary"},[s("a",{attrs:{href:"https://github.com/VanwildemeerschBrent/RSS_Feed",target:"_blank",rel:"noreferrer"}},[t._v("Repository ")]),t._v("| "),s("a",{attrs:{href:"https://rsspersonalfeed.herokuapp.com/",target:"_blank",rel:"noreferrer"}},[t._v(" App")])])])]),s("div",{staticClass:"d-flex flex-column flex-md-row justify-content-between mb-5"},[s("div",{staticClass:"flex-grow-1"},[s("a",{attrs:{href:"https://vanwildemeerschbrent-js-sorting-algorithms.netlify.app/",target:"_blank",rel:"noreferrer"}},[s("h3",{staticClass:"mb-0"},[t._v("Javascript Sorting Algorithm Visualizer")])]),s("p",[t._v(" Personal project to educate myself on the available sorting algorithms, how they work, what advantages and disadvantages they have,... "),s("br"),t._v(" Made with Vue.js ")])]),s("div",{staticClass:"flex-shrink-0"},[s("span",{staticClass:"text-primary"},[s("a",{attrs:{href:"hhttps://github.com/VanwildemeerschBrent/SortingVisualizer",target:"_blank",rel:"noreferrer"}},[t._v("Repository ")]),t._v("| "),s("a",{attrs:{href:"https://vanwildemeerschbrent-js-sorting-algorithms.netlify.app/",target:"_blank",rel:"noreferrer"}},[t._v(" App")])])])])])])}],F={name:"Projects"},J=F,D=Object(f["a"])(J,M,R,!1,null,null,null),U=D.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"resume-section",attrs:{id:"articles"}},[s("div",{staticClass:"resume-section-content"},[s("h2",{staticClass:"mb-5"},[t._v("Tech-Blog")]),t._l(t.articles,(function(e){return s("div",{key:e.id,staticClass:"d-flex flex-column flex-md-row justify-content-between mb-5"},[s("div",{staticClass:"flex-grow-1"},[s("a",{attrs:{href:e.canonical_url,target:"_blank",rel:"noreferrer"}},[s("h3",{staticClass:"mb-0"},[t._v(t._s(e.title))])]),s("p",[t._v(" "+t._s(e.description)+" ")])]),s("div",{staticClass:"flex-shrink-0"},[s("a",{attrs:{href:e.canonical_url,target:"_blank",rel:"noreferrer"}},[s("span",{staticClass:"text-primary"},[t._v("Read article")])])])])}))],2)])},q=[],z=(s("d3b7"),{name:"Articles",data:function(){return{articles:1}},created:function(){this.fetchAllArticles()},methods:{fetchAllArticles:function(){var t=this;fetch("https://dev.to/api/articles?username=vanwildemeerschbrent").then((function(t){return t.json()})).then((function(e){return t.articles=e}))}}}),H=z,L=Object(f["a"])(H,W,q,!1,null,null,null),K=L.exports,G={name:"App",metaInfo:{title:"Brent Vanwildemeersch | Portofolio",titleTemplate:"Brent Vanwildemeersch | Portofolio",meta:[{charset:"utf-8"},{name:"description",content:"Brent Vanwildemeersch, Portofolio, Projects, Resume"},{name:"viewport",content:"width=device-width, initial-scale=1"}]},components:{Navigation:v,About:C,Experience:y,Education:B,Skills:I,Projects:U,Articles:K}},Q=G,X=Object(f["a"])(Q,i,n,!1,null,null,null),Y=X.exports,Z=s("58ca"),tt=s("0284"),et=s.n(tt),st=s("8c4f"),at=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div")},it=[],nt={name:"Home"},lt=nt,rt=Object(f["a"])(lt,at,it,!1,null,null,null),ct=rt.exports;a["a"].use(st["a"]);var ot=new st["a"]({routes:[{path:"/",component:ct,name:"home",meta:{title:"Brent Vanwildemeersch | Portofolio"}}],mode:"hash",linkExactActiveClass:"active"});s("034b"),a["a"].config.productionTip=!1,a["a"].use(ot),a["a"].use(Z["a"]),a["a"].use(et.a,{id:"UA-145072945-1",router:ot}),ot.beforeEach((function(t,e,s){document.title=t.meta.title,s()})),new a["a"]({router:ot,render:function(t){return t(Y)}}).$mount("#app")},"61ae":function(t,e,s){t.exports=s.p+"img/brent.ea79e381.png"},e4f4:function(t,e,s){}});
//# sourceMappingURL=app.2c370a0d.js.map