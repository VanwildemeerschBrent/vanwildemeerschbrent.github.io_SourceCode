(function(e){function t(t){for(var n,o,l=t[0],s=t[1],c=t[2],d=0,p=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],n=!0,l=1;l<i.length;l++){var s=i[l];0!==a[s]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=i[0]))}return e}var n={},a={app:0},r=[];function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=n,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034b":function(e,t,i){},1639:function(e,t,i){},"1a0a":function(e,t,i){},"1f55":function(e,t,i){"use strict";var n=i("3895"),a=i.n(n);a.a},3895:function(e,t,i){},"52e5":function(e,t,i){e.exports=i.p+"img/codeBG.663d5f5b.jpg"},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("router-view")},r=[],o={name:"App",metaInfo:{title:"Brent Vanwildemeersch | Portofolio",titleTemplate:"Brent Vanwildemeersch | Portofolio",meta:[{charset:"utf-8"},{name:"description",content:"Brent Vanwildemeersch, Portofolio, Projects, Resume"},{name:"viewport",content:"width=device-width, initial-scale=1"}]}},l=o,s=i("2877"),c=Object(s["a"])(l,a,r,!1,null,null,null),u=c.exports,d=i("58ca"),p=i("0284"),f=i.n(p),v=i("8c4f"),m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("c-navigation"),i("c-header"),i("c-about"),i("c-experience"),i("c-education"),i("c-projects"),i("c-skills"),i("c-contact"),i("c-footer")],1)},h=[],_=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"navigation"},[i("div",{staticClass:"shadow-large",attrs:{id:"mobile-menu-open"},on:{click:e.onOpenMobileMenu}},[i("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"}})]),e.isMenuVisible?i("header",[i("div",{attrs:{id:"mobile-menu-close"},on:{click:e.onCloseMobileMenu}},[i("span",[e._v("Close")]),i("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),i("ul",{staticClass:"shadow",attrs:{id:"menu"}},[i("li",{on:{click:function(t){return e.onClickNavigation("about")}}},[i("a",{attrs:{title:"about"}},[e._v("About")])]),i("li",{on:{click:function(t){return e.onClickNavigation("experience")}}},[i("a",{attrs:{title:"experience"}},[e._v("Experience")])]),i("li",{on:{click:function(t){return e.onClickNavigation("education")}}},[i("a",{attrs:{title:"education"}},[e._v("Education")])]),i("li",{on:{click:function(t){return e.onClickNavigation("projects")}}},[i("a",{attrs:{title:"projects"}},[e._v("Projects")])]),i("li",{on:{click:function(t){return e.onClickNavigation("skills")}}},[i("a",{attrs:{title:"skills"}},[e._v("Skills")])]),e._m(0)])]):e._e()])},b=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",[i("a",{attrs:{href:"#contact",title:"contact"}},[e._v("Contact")])])}],g=null,C={name:"navigation",data:function(){return{isMenuVisible:document.getElementsByTagName("body")[0].clientWidth>770}},created:function(){this.initResizeObserver(),g=this},methods:{onClickNavigation:function(e){document.getElementsByTagName("body")[0].clientWidth<770&&(this.isMenuVisible=!1),document.getElementById(e).scrollIntoView({behavior:"smooth"})},onOpenMobileMenu:function(){this.isMenuVisible=!0},onCloseMobileMenu:function(){this.isMenuVisible=!1},initResizeObserver:function(){var e=new ResizeObserver((function(){g.isMenuVisible=document.getElementsByTagName("body")[0].clientWidth>770}));e.observe(document.body)}}},j=C,w=(i("1f55"),Object(s["a"])(j,_,b,!1,null,"aa849dbe",null)),y=w.exports,k=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"header"},[i("div",{attrs:{id:"lead"}},[e._m(0),i("div",{attrs:{id:"lead-overlay"}}),i("div",{attrs:{id:"lead-down"},on:{click:e.onScrollToAbout}},[e._m(1)])])])},E=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"lead-content"}},[i("h1",[e._v("Brent Vanwildemeersch")]),i("h2",[e._v("Software Engineer")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",[i("i",{staticClass:"fa fa-chevron-down",attrs:{"aria-hidden":"true"}})])}],S={name:"Header",methods:{onScrollToAbout:function(){document.getElementById("about").scrollIntoView()}}},x=S,T=Object(s["a"])(x,k,E,!1,null,"c5fe7eb6",null),O=T.exports,M=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},$=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"about",attrs:{id:"about"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[i("h2",{staticClass:"heading"},[e._v("About Me")])]),i("div",{staticClass:"col-md-8"},[i("p",[e._v(" Hi, I am Brent, and I am a developer specialized in Full-Stack software and platform development. "),i("br"),e._v("I have build several online platforms and applications in different frameworks and I am eager to explore new technologies ")])])])])])}],P={name:"About"},I=P,V=Object(s["a"])(I,M,$,!1,null,"6dd5e89c",null),B=V.exports,N=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"background-alt",attrs:{id:"experience"}},[i("h2",{staticClass:"heading"},[e._v("Experience")]),i("div",{attrs:{id:"experience-timeline"}},e._l(e.experience,(function(e){return i("div",{key:e.id},[i("c-experience-item",{attrs:{date:e.date,title:e.title,subTitle:e.subTitle,description:e.description}})],1)})),0)])},A=[],R=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vtimeline-point"},[e._m(0),i("div",{staticClass:"vtimeline-block"},[i("span",{staticClass:"vtimeline-date"},[e._v(e._s(e.date))]),i("div",{staticClass:"vtimeline-content",attrs:{"data-date":e.date}},[i("h3",[e._v(e._s(e.title))]),i("h4",[e._v(e._s(e.subTitle))]),i("div",{domProps:{innerHTML:e._s(e.description)}})])])])},q=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vtimeline-icon"},[i("i",{staticClass:"fa fa-map-marker"})])}],L={name:"experience-item",props:{date:{required:!0,type:String},title:{required:!0,type:String},subTitle:{required:!0,type:String},description:{required:!0,type:String}}},U=L,W=Object(s["a"])(U,R,q,!1,null,"44d116a2",null),D=W.exports,H={name:"Experience",components:{"c-experience-item":D},data:function(){return{experience:[{id:0,date:"July 2017 – Now",title:"Ocular BVBA",subTitle:"Full Stack Developer",description:"<p>Full Stack developer focused on development of web-based CMS platforms and audio-visual interactives</p>"},{id:1,date:"February 2017 – June 2017",title:"University of the Western Cape, Cape Town",subTitle:"Mobile App developer (Internship)",description:"<p>Responsible for the develoment of the mobile community integration app <i>UDUBSIT</i> for the University of the Western Cape</p>"},{id:2,date:"August 2016 – September 2016",title:"Van Maele Benelux",subTitle:"E-commerce Developer (Student)",description:"<p>Front-end developer for the online e-commerce web-shop</p>"}]}}},F=H,J=Object(s["a"])(F,N,A,!1,null,null,null),z=J.exports,Y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},G=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"education"}},[i("h2",{staticClass:"heading"},[e._v("Education")]),i("div",{staticClass:"education-block"},[i("h3",[e._v("Howest University College")]),i("span",{staticClass:"education-date"},[e._v("Sept 2013 - Sept 2017")]),i("h4",[e._v("Bachelor of New Media and Communication Technologies")]),i("p")]),i("div",{staticClass:"education-block"},[i("h3",[e._v("Vrij Technisch Instituut Poperinge")]),i("span",{staticClass:"education-date"},[e._v("Sept 2007- Sept 2013")]),i("h4",[e._v("Industrial Sciences")])])])}],Q={name:"Education"},K=Q,X=Object(s["a"])(K,Y,G,!1,null,"1b4f3373",null),Z=X.exports,ee=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"background-alt",attrs:{id:"projects"}},[i("h2",{staticClass:"heading"},[e._v("Projects")]),i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[e._m(0),i("p",{staticClass:"text-right"},[e._v("― A.A. Milne, Winnie-the-Pooh")]),i("br"),e._l(e.projects,(function(e){return i("div",{key:e.id},[i("c-project",{attrs:{projectTitle:e.title,projectDescription:e.description,projectImage:e.image,projectURL:e.url}})],1)}))],2)])])},te=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[i("i",[e._v(" “Rivers know this: there is no hurry. We shall get there some day.” ")])])}],ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"project shadow-large"},[n("div",{staticClass:"project-image"},[e.projectImage?e._e():n("img",{attrs:{alt:"project__background",src:i("52e5")}}),e.projectImage?n("img",{attrs:{alt:"project__background",src:e.projectImage}}):e._e()]),n("div",{staticClass:"project-info"},[n("h3",[e._v(e._s(e.projectTitle))]),n("div",{domProps:{innerHTML:e._s(e.projectDescription)}}),e.projectURL?n("a",{ref:"noreferrer",attrs:{href:e.projectURL,target:"_blank"}},[e._v("View Project")]):e._e()])])},ne=[],ae={name:"project-component",props:{projectTitle:{required:!0,type:String},projectDescription:{required:!0,type:String},projectImage:{required:!1},projectURL:{required:!1}}},re=ae,oe=Object(s["a"])(re,ie,ne,!1,null,"9d66eb88",null),le=oe.exports,se={name:"Projects",components:{"c-project":le},data:function(){return{projects:[{id:0,title:"CNC Cutting Tool Speed calculator (under construction ...)",description:"<p>To fill in the needs of a local metal-workshop, I've built a calculator application that helps employees calculate the specific cutting speed for the selected metal-type and cutting tool.</p>",image:null,url:null},{id:1,title:"Event Tracker (React Native)",description:"<p>To fill in the needs of a local metal-workshop, I've built a calculator application that helps employees calculate the specific cutting speed for the selected metal-type and cutting tool.</p>",image:null,url:null}]}}},ce=se,ue=Object(s["a"])(ce,ee,te,!1,null,"48ce120e",null),de=ue.exports,pe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},fe=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"skills"}},[i("h2",{staticClass:"heading"},[e._v("Skills")]),i("ul",[i("li",[e._v("JavaScript")]),i("li",[e._v("MySQL")]),i("li",[e._v("Ember.js")]),i("li",[e._v("Vue.js")]),i("li",[e._v("SQL")]),i("li",[e._v("Node.js")]),i("li",[e._v("CSS3")]),i("li",[e._v("ES6")]),i("li",[e._v("PHP")]),i("li",[e._v("Laravel")]),i("li",[e._v("TailWindCSS")]),i("li",[e._v("Linux")])])])}],ve={name:"skilss"},me=ve,he=Object(s["a"])(me,pe,fe,!1,null,"40975b98",null),_e=he.exports,be=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ge=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"contact"}},[i("h2",[e._v("Get in Touch")]),i("div",{attrs:{id:"contact-form"}},[i("form",{attrs:{method:"POST",action:"https://formspree.io/vanwildemeersch.brent@gmail.com"}},[i("input",{attrs:{"aria-label":"not_important_input",type:"hidden",name:"_subject",value:"Contact request from personal website"}}),i("input",{attrs:{"aria-label":"email",type:"email",name:"_replyto",placeholder:"Your email",required:""}}),i("textarea",{attrs:{"aria-label":"message",name:"message",placeholder:"Your message",required:""}}),i("button",{attrs:{type:"submit"}},[e._v("Send")])])])])}],Ce={name:"Contact"},je=Ce,we=Object(s["a"])(je,be,ge,!1,null,"5d505be0",null),ye=we.exports,ke=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("footer",[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-5 copyright"},[i("p",[e._v(" Copyright © "),i("span",{staticClass:"copyright__year"},[e._v(e._s((new Date).getFullYear()))]),e._v(" BRENT VANWILDEMEERSCH ")])]),i("div",{staticClass:"col-sm-2 top",on:{click:e.onScrollToTop}},[e._m(0)]),e._m(1)])])])},Ee=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{attrs:{id:"to-top"}},[i("i",{staticClass:"fa fa-chevron-up",attrs:{"aria-hidden":"true"}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"col-sm-5 social"},[i("ul",[i("li",[i("a",{attrs:{title:"github__account",href:"https://github.com/VanwildemeerschBrent",target:"_blank",rel:"noreferrer"}},[i("i",{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}})])]),i("li",[i("a",{attrs:{title:"stackoverflow__account",href:"https://stackoverflow.com/users/7634313/brent-vanwildemeersch",target:"_blank",rel:"noreferrer"}},[i("i",{staticClass:"fa fa-stack-overflow",attrs:{"aria-hidden":"true"}})])]),i("li",[i("a",{attrs:{title:"linkedin__account",href:"https://www.linkedin.com/in/brent-vanwildemeersch-05334092/",target:"_blank",rel:"noreferrer"}},[i("i",{staticClass:"fa fa-linkedin",attrs:{"aria-hidden":"true"}})])])])])}],Se={name:"Footer",methods:{onScrollToTop:function(){document.getElementsByClassName("navigation")[0].scrollIntoView()}}},xe=Se,Te=Object(s["a"])(xe,ke,Ee,!1,null,"5f9ec112",null),Oe=Te.exports,Me={name:"Home",components:{"c-navigation":y,"c-header":O,"c-about":B,"c-experience":z,"c-education":Z,"c-projects":de,"c-skills":_e,"c-contact":ye,"c-footer":Oe}},$e=Me,Pe=Object(s["a"])($e,m,h,!1,null,"6f15b4da",null),Ie=Pe.exports;n["a"].use(v["a"]);var Ve=new v["a"]({routes:[{path:"/",component:Ie,name:"home",meta:{title:"Brent Vanwildemeersch | Portofolio"}},{path:"*",redirect:"/404"}],mode:"hash",linkExactActiveClass:"active"});i("034b"),i("df25"),i("1639"),i("1a0a"),n["a"].config.productionTip=!1,n["a"].use(Ve),n["a"].use(d["a"]),n["a"].use(f.a,{id:"UA-145072945-1",router:Ve}),Ve.beforeEach((function(e,t,i){document.title=e.meta.title,i()})),new n["a"]({router:Ve,render:function(e){return e(u)}}).$mount("#app")},df25:function(e,t,i){}});
//# sourceMappingURL=app.042e5977.js.map