(function(e){function t(t){for(var n,s,o=t[0],c=t[1],l=t[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],n=!0,o=1;o<i.length;o++){var c=i[o];0!==r[c]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=i[0]))}return e}var n={},r={app:0},a=[];function s(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=n,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034b":function(e,t,i){},"0889":function(e,t,i){"use strict";var n=i("e55b"),r=i.n(n);r.a},"0fb8":function(e,t,i){},1639:function(e,t,i){},"16eb":function(e,t,i){},"1a0a":function(e,t,i){},"20b6":function(e,t,i){"use strict";var n=i("62ca"),r=i.n(n);r.a},4487:function(e,t,i){e.exports=i.p+"img/Sorting_Visualizer.3b8bfcda.png"},"4ed1":function(e,t,i){e.exports=i.p+"img/Trello_Clone.2ed986f7.png"},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("router-view")},a=[],s={name:"App",metaInfo:{title:"Brent Vanwildemeersch | Portofolio",titleTemplate:"Brent Vanwildemeersch | Portofolio",meta:[{charset:"utf-8"},{name:"description",content:"Brent Vanwildemeersch, Portofolio, Projects, Resume"},{name:"viewport",content:"width=device-width, initial-scale=1"}]}},o=s,c=i("2877"),l=Object(c["a"])(o,r,a,!1,null,null,null),u=l.exports,d=i("58ca"),p=i("0284"),f=i.n(p),v=i("8c4f"),m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("c-navigation"),i("c-header"),i("c-about"),i("c-experience"),i("c-education"),i("c-projects"),i("c-skills"),i("c-articles"),i("c-contact"),i("c-footer")],1)},h=[],_=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"navigation"},[i("div",{staticClass:"shadow-large",attrs:{id:"mobile-menu-open"},on:{click:e.onOpenMobileMenu}},[i("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"}})]),e.isMenuVisible?i("header",[i("div",{attrs:{id:"mobile-menu-close"},on:{click:e.onCloseMobileMenu}},[i("span",[e._v("Close")]),i("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),i("ul",{staticClass:"shadow",attrs:{id:"menu"}},[i("li",{on:{click:function(t){return e.onClickNavigation("about")}}},[i("a",{attrs:{title:"about"}},[e._v("About")])]),i("li",{on:{click:function(t){return e.onClickNavigation("experience")}}},[i("a",{attrs:{title:"experience"}},[e._v("Experience")])]),i("li",{on:{click:function(t){return e.onClickNavigation("education")}}},[i("a",{attrs:{title:"education"}},[e._v("Education")])]),i("li",{on:{click:function(t){return e.onClickNavigation("projects")}}},[i("a",{attrs:{title:"projects"}},[e._v("Projects")])]),i("li",{on:{click:function(t){return e.onClickNavigation("articles")}}},[i("a",{attrs:{title:"articles"}},[e._v("Articles")])]),i("li",{on:{click:function(t){return e.onClickNavigation("skills")}}},[i("a",{attrs:{title:"skills"}},[e._v("Skills")])]),e._m(0)])]):e._e()])},b=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",[i("a",{attrs:{href:"#contact",title:"contact"}},[e._v("Contact")])])}],g=null,C={name:"navigation",data:function(){return{isMenuVisible:document.getElementsByTagName("body")[0].clientWidth>770}},created:function(){this.initResizeObserver(),g=this},methods:{onClickNavigation:function(e){document.getElementsByTagName("body")[0].clientWidth<770&&(this.isMenuVisible=!1),document.getElementById(e).scrollIntoView({behavior:"smooth"})},onOpenMobileMenu:function(){this.isMenuVisible=!0},onCloseMobileMenu:function(){this.isMenuVisible=!1},initResizeObserver:function(){var e=new ResizeObserver((function(){g.isMenuVisible=document.getElementsByTagName("body")[0].clientWidth>770}));e.observe(document.body)}}},w=C,k=(i("9592"),Object(c["a"])(w,_,b,!1,null,"6602d60a",null)),j=k.exports,y=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"header"},[i("div",{attrs:{id:"lead"}},[e._m(0),i("div",{attrs:{id:"lead-overlay"}}),i("div",{attrs:{id:"lead-down"},on:{click:e.onScrollToAbout}},[e._m(1)])])])},E=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"lead-content"}},[n("img",{attrs:{src:i("61ae")}}),n("h1",[e._v("Brent Vanwildemeersch")]),n("h2",[e._v("Software Engineer")]),n("a",{staticClass:"btn-rounded-white",attrs:{href:"https://vanwildemeerschbrent.github.io/pdf/BRENTVANWILDEMEERSCH_RESUME.pdf",download:""}},[e._v("Resume")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",[i("i",{staticClass:"fa fa-chevron-down",attrs:{"aria-hidden":"true"}})])}],S={name:"Header",methods:{onScrollToAbout:function(){document.getElementById("about").scrollIntoView()},onClickDownloadResume:function(){var e=document.createElement("a");e.href="/assets/pdf/BRENT_VANWILDEMEERSCH.pdf",e.download="file.pdf",e.click()}}},x=S,T=(i("0889"),Object(c["a"])(x,y,E,!1,null,"47eb5920",null)),M=T.exports,O=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},V=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"about",attrs:{id:"about"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[i("h2",{staticClass:"heading"},[e._v("About Me")])]),i("div",{staticClass:"col-md-8"},[i("p",[e._v(" Hi, I am Brent, and I am a developer specialized in Full-Stack software and platform development. "),i("br"),e._v("I have build several online platforms and applications in different frameworks and I am eager to explore new technologies ")])])])])])}],A={name:"About"},R=A,B=Object(c["a"])(R,O,V,!1,null,"6dd5e89c",null),$=B.exports,P=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"background-alt",attrs:{id:"experience"}},[i("h2",{staticClass:"heading"},[e._v("Experience")]),i("div",{attrs:{id:"experience-timeline"}},e._l(e.experience,(function(e){return i("div",{key:e.id},[i("c-experience-item",{attrs:{date:e.date,title:e.title,subTitle:e.subTitle,description:e.description}})],1)})),0)])},I=[],N=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vtimeline-point"},[e._m(0),i("div",{staticClass:"vtimeline-block"},[i("span",{staticClass:"vtimeline-date"},[e._v(e._s(e.date))]),i("div",{staticClass:"vtimeline-content",attrs:{"data-date":e.date}},[i("h3",[e._v(e._s(e.title))]),i("h4",[e._v(e._s(e.subTitle))]),i("div",{domProps:{innerHTML:e._s(e.description)}})])])])},U=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vtimeline-icon"},[i("i",{staticClass:"fa fa-map-marker"})])}],L={name:"experience-item",props:{date:{required:!0,type:String},title:{required:!0,type:String},subTitle:{required:!0,type:String},description:{required:!0,type:String}}},D=L,q=Object(c["a"])(D,N,U,!1,null,"44d116a2",null),W=q.exports,H={name:"Experience",components:{"c-experience-item":W},data:function(){return{experience:[{id:3,date:"September 2020 – Now",title:"The Positive Thinking Company",subTitle:"Software Consultant",description:"<p>Javascript software consultant for The Positive Thinking Comany</p>"},{id:0,date:"July 2017 – August 2020",title:"Ocular BVBA",subTitle:"Full Stack Developer",description:"<p>Full Stack developer focused on development of web-based CMS platforms and audio-visual interactives</p>"},{id:1,date:"February 2017 – June 2017",title:"University of the Western Cape, Cape Town",subTitle:"Mobile App developer (Internship)",description:"<p>Responsible for the develoment of the mobile community integration app <i>UDUBSIT</i> for the University of the Western Cape</p>"},{id:2,date:"August 2016 – September 2016",title:"Van Maele Benelux",subTitle:"E-commerce Developer (Student)",description:"<p>Front-end developer for the online e-commerce web-shop</p>"}]}}},J=H,z=Object(c["a"])(J,P,I,!1,null,null,null),F=z.exports,Y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},G=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"education"}},[i("h2",{staticClass:"heading"},[e._v("Education")]),i("div",{staticClass:"education-block"},[i("h3",[e._v("Howest University College")]),i("span",{staticClass:"education-date"},[e._v("Sept 2013 - Sept 2017")]),i("h4",[e._v("Bachelor of New Media and Communication Technologies")]),i("p")]),i("div",{staticClass:"education-block"},[i("h3",[e._v("Vrij Technisch Instituut Poperinge")]),i("span",{staticClass:"education-date"},[e._v("Sept 2007- Sept 2013")]),i("h4",[e._v("Industrial Sciences")])])])}],K={name:"Education"},Q=K,X=Object(c["a"])(Q,Y,G,!1,null,"1b4f3373",null),Z=X.exports,ee=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"background-alt",attrs:{id:"projects"}},[i("h2",{staticClass:"heading"},[e._v("Projects")]),i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[e._m(0),i("p",{staticClass:"text-right"},[e._v("― A.A. Milne, Winnie-the-Pooh")]),i("br"),e._l(e.projects,(function(e){return i("div",{key:e.id},[i("c-project",{attrs:{projectTitle:e.title,projectDescription:e.description,projectImage:e.image,projectURL:e.url,repoURL:e.repoURL}})],1)}))],2)])])},te=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[i("i",[e._v(" “Rivers know this: there is no hurry. We shall get there some day.” ")])])}],ie=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"project shadow-large"},[i("div",{staticClass:"project-image"},[i("a",{ref:"noreferrer",attrs:{href:e.projectURL,target:"_blank"}},[e.projectImage?i("img",{staticClass:"project__background",attrs:{alt:"project__background",src:e.projectImage}}):e._e()])]),i("div",{staticClass:"project-info"},[i("h3",[e._v(e._s(e.projectTitle))]),i("div",{domProps:{innerHTML:e._s(e.projectDescription)}}),e.projectURL?i("a",{ref:"noreferrer",attrs:{href:e.projectURL,target:"_blank"}},[e._v("View Project")]):e._e(),e.repoURL?i("a",{ref:"noreferrer",attrs:{href:e.repoURL,target:"_blank"}},[e._v("View Repo")]):e._e()])])},ne=[],re={name:"project-component",props:{projectTitle:{required:!0,type:String},projectDescription:{required:!0,type:String},projectImage:{required:!1},projectURL:{required:!1},repoURL:{required:!0,type:String}}},ae=re,se=(i("7ef8"),Object(c["a"])(ae,ie,ne,!1,null,"7a228ac7",null)),oe=se.exports,ce={name:"Projects",components:{"c-project":oe},data:function(){return{projects:[{id:0,title:"Javascript Sorting Algorithm Visualizer (VueJS)",description:"<p>Personal project to educate myself on the available sorting algorithms, how they work, what advantages and disadvantages they have, ...</p>",image:i("4487"),url:"https://vanwildemeerschbrent-js-sorting-algorithms.netlify.app",repoURL:"https://github.com/VanwildemeerschBrent/SortingVisualizer"},{id:1,title:"Trello Clone",description:"<p>A clone of Trello with basic functionalities to advance my knowledge of the Angular framework and backend technologies. Made with Angular, Express & MongoDB</p>",image:i("4ed1"),url:"https://vanwildemeerschbrent.github.io/Trello_Clone/",repoURL:"https://github.com/VanwildemeerschBrent/Trello_clone"}]}}},le=ce,ue=Object(c["a"])(le,ee,te,!1,null,"2551226d",null),de=ue.exports,pe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},fe=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"skills"}},[i("h2",{staticClass:"heading"},[e._v("Skills")]),i("ul",[i("li",[e._v("JavaScript")]),i("li",[e._v("Vue.js")]),i("li",[e._v("Angular")]),i("li",[e._v("Node.js")]),i("li",[e._v("Ember.js")]),i("li",[e._v("CSS3")]),i("li",[e._v("ES6")]),i("li",[e._v("TailWindCSS")]),i("li",[e._v("NodeJS")]),i("li",[e._v("Express")]),i("li",[e._v("MongoDB")]),i("li",[e._v("Linux")]),i("li",[e._v("Windows")])])])}],ve={name:"skills"},me=ve,he=Object(c["a"])(me,pe,fe,!1,null,null,null),_e=he.exports,be=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ge=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"contact"}},[i("h2",[e._v("Get in Touch")]),i("div",{attrs:{id:"contact-form"}},[i("form",{attrs:{method:"POST",action:"https://formspree.io/vanwildemeersch.brent@gmail.com"}},[i("input",{attrs:{"aria-label":"not_important_input",type:"hidden",name:"_subject",value:"Contact request from personal website"}}),i("input",{attrs:{"aria-label":"email",type:"email",name:"_replyto",placeholder:"Your email",required:""}}),i("textarea",{attrs:{"aria-label":"message",name:"message",placeholder:"Your message",required:""}}),i("button",{attrs:{type:"submit"}},[e._v("Send")])])])])}],Ce={name:"Contact"},we=Ce,ke=Object(c["a"])(we,be,ge,!1,null,"5d505be0",null),je=ke.exports,ye=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("footer",[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-5 copyright"},[i("p",[e._v(" Copyright © "),i("span",{staticClass:"copyright__year"},[e._v(e._s((new Date).getFullYear()))]),e._v(" BRENT VANWILDEMEERSCH ")])]),i("div",{staticClass:"col-sm-2 top",on:{click:e.onScrollToTop}},[e._m(0)]),e._m(1)])])])},Ee=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{attrs:{id:"to-top"}},[i("i",{staticClass:"fa fa-chevron-up",attrs:{"aria-hidden":"true"}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"col-sm-5 social"},[i("ul",[i("li",[i("a",{attrs:{title:"github__account",href:"https://github.com/VanwildemeerschBrent",target:"_blank",rel:"noreferrer"}},[i("i",{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}})])]),i("li",[i("a",{attrs:{title:"stackoverflow__account",href:"https://stackoverflow.com/users/7634313/brent-vanwildemeersch",target:"_blank",rel:"noreferrer"}},[i("i",{staticClass:"fa fa-stack-overflow",attrs:{"aria-hidden":"true"}})])]),i("li",[i("a",{attrs:{title:"linkedin__account",href:"https://www.linkedin.com/in/brent-vanwildemeersch-05334092/",target:"_blank",rel:"noreferrer"}},[i("i",{staticClass:"fa fa-linkedin",attrs:{"aria-hidden":"true"}})])]),i("li",[i("a",{attrs:{href:"https://dev.to/vanwildemeerschbrent"}},[i("img",{staticClass:"icon--devto",attrs:{src:"https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg",alt:"Brent Vanwildemeersch's DEV Profile",height:"20px",width:"20px",target:"_blank",rel:"noreferrer"}})])])])])}],Se={name:"Footer",methods:{onScrollToTop:function(){document.getElementsByClassName("navigation")[0].scrollIntoView()}}},xe=Se,Te=(i("20b6"),Object(c["a"])(xe,ye,Ee,!1,null,"33d12ad4",null)),Me=Te.exports,Oe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"background-alt",attrs:{id:"articles"}},[i("h2",{staticClass:"heading"},[e._v("Articles")]),i("div",{staticClass:"container"},[i("a",{ref:"noreferrer",attrs:{href:"https://dev.to/vanwildemeerschbrent/series-js-tips-tricks-ep-1-4a8j",target:"_blank"}},e._l(e.articles,(function(e){return i("div",{key:e.id,staticClass:"article"},[i("img",{staticClass:"article-image",attrs:{src:e.social_image}})])})),0)])])},Ve=[],Ae=(i("d3b7"),{name:"Articles",data:function(){return{articles:1}},created:function(){this.fetchAllArticles()},methods:{fetchAllArticles:function(){var e=this;fetch("https://dev.to/api/articles?username=vanwildemeerschbrent").then((function(e){return e.json()})).then((function(t){return e.articles=t}))}}}),Re=Ae,Be=(i("c1b0"),Object(c["a"])(Re,Oe,Ve,!1,null,"672a7829",null)),$e=Be.exports,Pe={name:"Home",components:{"c-navigation":j,"c-header":M,"c-about":$,"c-experience":F,"c-education":Z,"c-projects":de,"c-skills":_e,"c-contact":je,"c-footer":Me,"c-articles":$e}},Ie=Pe,Ne=Object(c["a"])(Ie,m,h,!1,null,"e9c2790e",null),Ue=Ne.exports;n["a"].use(v["a"]);var Le=new v["a"]({routes:[{path:"/",component:Ue,name:"home",meta:{title:"Brent Vanwildemeersch | Portofolio"}}],mode:"hash",linkExactActiveClass:"active"});i("034b"),i("df25"),i("1639"),i("1a0a"),n["a"].config.productionTip=!1,n["a"].use(Le),n["a"].use(d["a"]),n["a"].use(f.a,{id:"UA-145072945-1",router:Le}),Le.beforeEach((function(e,t,i){document.title=e.meta.title,i()})),new n["a"]({router:Le,render:function(e){return e(u)}}).$mount("#app")},"61ae":function(e,t,i){e.exports=i.p+"img/brent.71abaeb2.png"},"62ca":function(e,t,i){},"7ef8":function(e,t,i){"use strict";var n=i("add2"),r=i.n(n);r.a},9592:function(e,t,i){"use strict";var n=i("16eb"),r=i.n(n);r.a},add2:function(e,t,i){},c1b0:function(e,t,i){"use strict";var n=i("0fb8"),r=i.n(n);r.a},df25:function(e,t,i){},e55b:function(e,t,i){}});
//# sourceMappingURL=app.3036efd3.js.map