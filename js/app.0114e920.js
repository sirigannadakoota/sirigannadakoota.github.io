(function(t){function e(e){for(var s,r,l=e[0],o=e[1],c=e[2],u=0,v=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&v.push(n[r][0]),n[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);d&&d(e);while(v.length)v.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var o=a[r];0!==n[o]&&(s=!1)}s&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var s={},n={app:0},i=[];function r(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"30f5f557"}[t]+".js"}function l(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=n[t]=[e,s]}));e.push(a[2]=s);var i,o=document.createElement("script");o.charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.src=r(t);var c=new Error;i=function(e){o.onerror=o.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",c.name="ChunkLoadError",c.type=s,c.request=i,a[1](c)}n[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:o})}),12e4);o.onerror=o.onload=i,document.head.appendChild(o)}return Promise.all(e)},l.m=t,l.c=s,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(a,s,function(e){return t[e]}.bind(null,s));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"223e":function(t,e,a){t.exports=a.p+"img/Karnataka.99a28655.png"},"249a":function(t,e,a){"use strict";var s=a("3e49"),n=a.n(s);n.a},"2c4c":function(t,e,a){t.exports=a.p+"img/skm_girish.a011f6cd.png"},"3e49":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-app-bar",{attrs:{color:"#262626",dense:"",dark:"",app:""}},[s("span",{staticClass:"hidden-sm-and-down",staticStyle:{"margin-left":"6em"}}),s("span",{staticClass:"hidden-md-and-up",staticStyle:{"margin-left":"2em"}}),s("v-img",{attrs:{src:a("2c4c"),"max-width":"40px"}}),s("v-toolbar-title",{staticClass:"main-title ml-1",on:{click:function(e){return t.$router.push("/")}}},[t._v(" ಸಿರಿಗನ್ನಡ ಕೂಟ, ಮ್ಯೂನಿಕ್ ")]),s("v-spacer"),s("v-btn",{staticClass:"custom-btn hidden-sm-and-down",attrs:{small:"",text:""},on:{click:function(e){return t.$router.push("/")}}},[t._v(" Home ")]),s("v-btn",{staticClass:"custom-btn hidden-sm-and-down",attrs:{small:"",text:""},on:{click:function(e){return t.$router.push("/Events")}}},[t._v(" Events ")]),s("v-btn",{staticClass:"custom-btn hidden-sm-and-down",attrs:{small:"",text:""},on:{click:function(e){return t.$router.push("/About")}}},[t._v(" About ")]),s("v-btn",{staticClass:"custom-btn hidden-sm-and-down",attrs:{small:"",text:""},on:{click:function(e){return t.$router.push("/Subscribe")}}},[t._v(" Subscribe ")]),s("v-btn",{staticClass:"custom-btn hidden-sm-and-down",attrs:{small:"",text:""},on:{click:function(e){return t.$router.push("/Login")}}},[t._v(" Login ")]),s("span",{staticClass:"hidden-xs-and-down",staticStyle:{"margin-right":"6em"}}),s("v-menu",{staticClass:"hidden-md-and-up",attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[s("v-btn",t._g(t._b({staticClass:"custom-btn hidden-md-and-up",attrs:{small:"",text:""}},"v-btn",n,!1),a),[t._v(" Menu ")])]}}])},[s("v-list",[s("v-list-item",{staticClass:"subtitle-2",on:{click:function(e){return t.$router.push("/")}}},[t._v("Home")]),s("v-list-item",{staticClass:"subtitle-2",on:{click:function(e){return t.$router.push("/About")}}},[t._v(" About ")]),s("v-list-item",{staticClass:"subtitle-2",on:{click:function(e){return t.$router.push("/Subscribe")}}},[t._v(" Subscribe ")]),s("v-list-item",{staticClass:"subtitle-2",on:{click:function(e){return t.$router.push("/Login")}}},[t._v(" Login ")])],1)],1)],1),s("v-main",{attrs:{transition:"slide-x-transition",fluid:""}},[s("router-view")],1),s("Footer")],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid secondary lighten-1"},[a("v-row",{staticClass:"justify-center mt-6 mx-8"},[a("v-spacer",{staticClass:"hidden-sm-and-down"}),a("v-col",{staticClass:"text-left ",attrs:{cols:"9",md:"2"}},[a("h1",{staticClass:"headline white--text"},[t._v(" Contact us. ")]),a("h1",{staticClass:"subtitle-2 mt-3 white--text"},[t._v(" Email ")]),a("h1",{staticClass:"body-2 ml-4  hlink "},[a("a",{staticClass:"hlink white--text",attrs:{href:"mailto:oneerp-helpdesk@outlook.com",target:"_blank"}},[t._v(" oneerp-helpdesk@outlook.com ")])])]),a("v-spacer"),a("v-col",{staticClass:"text-left",attrs:{cols:"9",md:"2"}},[a("h1",{staticClass:"headline white--text"},[t._v(" Quick links. ")]),a("ul",{staticClass:"mt-3",staticStyle:{"list-style":"none","padding-left":"10px"}},[a("li",{staticClass:"subtitle-2 mt-1 hlink white--text",on:{click:function(e){return t.$router.push("/")}}},[t._v(" Home ")]),a("li",{staticClass:"subtitle-2 mt-1 hlink white--text",on:{click:function(e){return t.$router.push("/about")}}},[t._v(" About us ")]),a("li",{staticClass:"subtitle-2 mt-1 hlink white--text",on:{click:function(e){return t.$router.push("/events")}}},[t._v(" Events ")])])]),a("v-spacer"),a("v-col",{staticClass:"text-left",attrs:{cols:"9",md:"2"}},[a("h1",{staticClass:"headline white--text"},[t._v(" Legal terms ")]),a("ul",{staticClass:"mt-3",staticStyle:{"list-style":"none","padding-left":"10px"}},[a("li",{staticClass:"subtitle-2 mt-1 hlink white--text",on:{click:function(e){return t.$router.push("/privacy")}}},[t._v(" Data privacy ")]),a("li",{staticClass:"subtitle-2 mt-1 hlink white--text",on:{click:function(e){return t.$router.push("/imprint")}}},[t._v(" Imprint ")]),a("li",{staticClass:"subtitle-2 mt-1 hlink white--text",on:{click:function(e){return t.$router.push("/subscribe")}}},[t._v(" Subscribe ")])])]),a("v-spacer")],1),a("div",{staticClass:"mx-12 px-12"},[a("v-divider",{staticClass:"mx-12 mt-6 mb-3"})],1),a("h1",{staticClass:"caption mb-4 grey--text"},[t._v(" © SirigannadaKoota, All Right Reserved ")])],1)},l=[],o=(a("249a"),a("2877")),c=a("6544"),u=a.n(c),d=a("62ad"),v=a("ce7e"),f=a("0fd9"),p=a("2fa4"),m={},h=Object(o["a"])(m,r,l,!1,null,"4494a860",null),b=h.exports;u()(h,{VCol:d["a"],VDivider:v["a"],VRow:f["a"],VSpacer:p["a"]});var g={components:{Footer:b},data:function(){return{}},methods:{}},y=g,C=(a("5c0b"),a("7496")),_=a("40dc"),x=a("8336"),w=a("adda"),k=a("8860"),j=a("da13"),S=a("f6c4"),V=a("e449"),M=a("2a7f"),$=Object(o["a"])(y,n,i,!1,null,null,null),E=$.exports;u()($,{VApp:C["a"],VAppBar:_["a"],VBtn:x["a"],VImg:w["a"],VList:k["a"],VListItem:j["a"],VMain:S["a"],VMenu:V["a"],VSpacer:p["a"],VToolbarTitle:M["a"]});var O=a("f309");s["a"].use(O["a"]);var A=new O["a"]({}),D=(a("d3b7"),a("8c4f")),K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-container",{attrs:{fluid:"","pa-0":""}},[s("v-row",{staticStyle:{height:"85vh"},attrs:{align:"center",justify:"center",dense:""}},[s("v-col",{staticClass:"darkbg fill-height d-none d-lg-flex flex-column justify-center align-center",attrs:{cols:"12",lg:"6",md:"6"}},[s("v-card",{attrs:{flat:"",tile:""}},[s("v-img",{staticClass:"darkbg",attrs:{src:a("223e"),alt:"Karnataka","max-height":"85vh",contain:""}})],1)],1),s("v-col",{staticClass:"darkbg fill-height d-flex flex-column justify-center align-center",attrs:{cols:"12",lg:"6",md:"12"}},[s("v-card",{attrs:{flat:"",tile:""}},[s("v-img",{staticClass:"darkbg",attrs:{src:a("8393"),alt:"Karnataka","max-height":"75vh",contain:""}})],1)],1)],1)],1),s("v-container",{attrs:{fluid:"","pa-0":""}},[s("v-row",{staticClass:"my-10",attrs:{dense:"",justify:"center"}},[s("v-col",{attrs:{justify:"left",align:"left",cols:"10",lg:"9",xl:"8"}},[s("div",{staticClass:"display-1 pl-2",staticStyle:{"border-bottom":"2px solid #475767"}},[t._v(" Upcomming Events ")])])],1),s("v-row",{staticClass:"my-10",attrs:{dense:"",justify:"center"}},[s("v-col",{attrs:{justify:"left",align:"left",cols:"10",lg:"9",xl:"8"}},t._l(t.next_events,(function(e,a){return s("v-row",{key:a,staticClass:"pl-5 mb-8"},[s("v-card",{attrs:{tile:""}},[s("v-card-title",{staticClass:"mt-n2 justify-center headline font-weight-bold text--secondary"},[t._v(t._s(t.getDisplayDate(e.date)))]),s("v-card-subtitle",{staticClass:"mb-n2 justify-center"},[t._v(" "+t._s(t.getMonthYear(e.date)))])],1),s("v-card",{staticClass:"ml-lg-2 event",attrs:{tile:"",flat:""}},[s("v-card-title",{staticClass:"mt-n2 justify-center"},[t._v(t._s(e.title))]),s("v-card-subtitle",{staticClass:"mb-n2 justify-center"},[s("v-icon",{staticClass:"mt-n1",attrs:{small:""}},[t._v("mdi-map-marker-outline")]),t._v(" "+t._s(e.place)+" ")],1)],1)],1)})),1)],1)],1),s("v-container",{attrs:{fluid:"","pa-0":""}},[s("v-row",{staticClass:"my-10",attrs:{dense:"",justify:"center"}},[s("v-col",{attrs:{justify:"left",align:"left",cols:"10",lg:"9",xl:"8"}},[s("div",{staticClass:"display-1 pl-2",staticStyle:{"border-bottom":"2px solid #475767"}},[t._v(" Past Events ")])])],1),s("v-row",{staticClass:"my-10",attrs:{dense:"",justify:"center"}},[s("v-col",{attrs:{justify:"left",align:"left",cols:"10",lg:"9",xl:"8"}},t._l(t.past_events,(function(e,a){return s("v-row",{key:a,staticClass:"pl-5 mb-8"},[s("v-card",{attrs:{tile:""}},[s("v-card-title",{staticClass:"mt-n2 justify-center headline font-weight-bold text--secondary"},[t._v(t._s(t.getDisplayDate(e.date)))]),s("v-card-subtitle",{staticClass:"mb-n2 justify-center"},[t._v(" "+t._s(t.getMonthYear(e.date)))])],1),s("v-card",{staticClass:"ml-lg-2 event",attrs:{tile:"",flat:""}},[s("v-card-title",{staticClass:"mt-n2 justify-center"},[t._v(t._s(e.title))]),s("v-card-subtitle",{staticClass:"mb-n2 justify-center"},[s("v-icon",{staticClass:"mt-n1",attrs:{small:""}},[t._v("mdi-map-marker-outline")]),t._v(" "+t._s(e.place)+" ")],1)],1)],1)})),1)],1)],1)],1)},L=[],P=(a("25f0"),a("4d90"),{name:"Home",components:{},data:function(){return{next_events:[{date:"2020-10-03",title:"SKM Hiking Event in Wendelstein Mountains",place:"Wendelstein Mountains, 83730 Bayrischzell",description:"Wendelstein Mountains, 83730 Bayrischzell"}],past_events:[{date:"2020-09-05",title:"SKM Voluntrees Beer Garden Meetup - 2020",place:"Michaeligarten Biergarten, Feichtstraße 10, 81735 München",description:"Michaeligarten Biergarten, Feichtstraße 10, 81735 München"}]}},methods:{getDisplayDate:function(t){return new Date(t).getDate().toString().padStart(2,0)},getMonthYear:function(t){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return e[new Date(t).getMonth()]+" "+new Date(t).getFullYear().toString().substring(2,4)}}}),B=P,T=(a("6869"),a("b0af")),F=a("99d9"),I=a("a523"),H=a("132d"),R=Object(o["a"])(B,K,L,!1,null,"62d7b9e2",null),J=R.exports;u()(R,{VApp:C["a"],VCard:T["a"],VCardSubtitle:F["a"],VCardTitle:F["b"],VCol:d["a"],VContainer:I["a"],VIcon:H["a"],VImg:w["a"],VRow:f["a"]});var W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-container",{attrs:{fluid:"","pa-0":""}},[s("v-row",{staticClass:"mt-n1",attrs:{dense:"",justify:"center"}},[s("v-col",{attrs:{justify:"left",align:"left",cols:"10",lg:"9",xl:"8"}},[s("v-img",{staticClass:"darkbg",attrs:{src:a("ec24"),alt:"Karnataka",height:"350",eager:""}})],1)],1),s("v-row",{staticClass:"my-10",attrs:{dense:"",justify:"center"}},[s("v-col",{attrs:{justify:"left",align:"left",cols:"10",lg:"7"}},[s("div",{staticClass:"display-1 pl-2",staticStyle:{"border-bottom":"2px solid #475767"}},[t._v(" Subscribe for our notification's ")])])],1),s("v-row",{staticClass:"my-10",attrs:{dense:"",justify:"center"}},[s("v-col",{attrs:{justify:"left",align:"left",cols:"10",lg:"7"}},[s("div",[s("div",{staticClass:"subtitle-1 font-weight-regular pl-2 mt-n3 mb-6"},[t._v(" Sirigannadakoota Munich (SKM), is a Kannada community, with the motive of providing the platform to encourage cultural and social activities among people living in and around Munich. With respect to this we organize several events around the year. We need your Name, Email and your consent to keep you informed about the events organized by SMK, Please tick the below check box and subscribe to the mailing list. ")]),s("v-text-field",{staticClass:"mx-4",attrs:{outlined:"",placeholder:"Name"}}),s("v-text-field",{staticClass:"mx-4",attrs:{outlined:"",placeholder:"Email"}}),s("v-switch",{staticClass:"ml-6",attrs:{label:"I consent SKM to store my details to send me notification about there events, meetups and campaings."},model:{value:t.hideDetails,callback:function(e){t.hideDetails=e},expression:"hideDetails"}}),s("div",{staticClass:"caption font-weight-regular mx-6"},[t._v(" SKM do not spam your inbox, and do not share your details with any third party. All the information are stored securely, and you can withdraw your consent to use your information, or ask us to amend or delete, by emailing to "),s("a",{attrs:{href:"mailto:support@sirigannadakoota.org"}},[t._v("support@sirigannadakoota.org ")])]),s("v-btn",{staticClass:"my-6",attrs:{block:"",color:"success",tile:""}},[t._v(" subscribe ")])],1)])],1),s("v-row",{staticClass:"my-10",attrs:{dense:"",justify:"center"}},[s("div",{staticClass:"caption font-weight-regular mx-6 justify-center align-center"},[t._v(" For more information on the events, do follow us on "),s("b",[s("a",{attrs:{href:"https://www.facebook.com/groups/sirigannadakutamunich"}},[t._v("facebook")])]),t._v(" or you can also reach us on "),s("a",{attrs:{href:"mailto:support@sirigannadakoota.org"}},[t._v("info@sirigannadakoota.org")])])])],1)],1)},z=[],Y=a("b73d"),N=a("8654"),U={},q=Object(o["a"])(U,W,z,!1,null,null,null),G=q.exports;u()(q,{VApp:C["a"],VBtn:x["a"],VCol:d["a"],VContainer:I["a"],VImg:w["a"],VRow:f["a"],VSwitch:Y["a"],VTextField:N["a"]});var Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-container",{attrs:{fluid:"","pa-0":""}},[s("v-row",{staticClass:"mt-n1",attrs:{dense:"",justify:"center"}},[s("v-col",{attrs:{justify:"left",align:"left",cols:"10",lg:"9",xl:"8"}},[s("v-img",{staticClass:"darkbg",attrs:{src:a("ec24"),alt:"Karnataka",height:"350",eager:""}})],1)],1),s("v-row",{staticClass:"my-10",attrs:{dense:"",justify:"center"}},[s("v-col",{attrs:{justify:"left",align:"left",cols:"10",lg:"7"}},[s("div",{staticClass:"display-1 pl-2",staticStyle:{"border-bottom":"2px solid #475767"}},[t._v(" Login for administrative access ")])])],1),s("v-row",{staticClass:"my-10",attrs:{dense:"",justify:"center"}},[s("v-col",{attrs:{justify:"left",align:"left",cols:"10",lg:"7"}},[s("div",{staticClass:"subtitle-1 font-weight-regular pl-2"},[s("v-text-field",{attrs:{outlined:"",placeholder:"User Email"}}),s("v-text-field",{attrs:{type:"password",outlined:"",placeholder:"password"}}),s("v-btn",{attrs:{tile:"",color:"success",block:""}},[t._v(" Login ")])],1)])],1)],1)],1)},X=[],Z={},tt=Object(o["a"])(Z,Q,X,!1,null,null,null),et=tt.exports;u()(tt,{VApp:C["a"],VBtn:x["a"],VCol:d["a"],VContainer:I["a"],VImg:w["a"],VRow:f["a"],VTextField:N["a"]}),s["a"].use(D["a"]);var at=[{path:"/",name:"Home",component:J},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/subscribe",name:"Subscribe",component:G},{path:"/login",name:"Login",component:et}],st=new D["a"]({mode:"history",base:"/",routes:at,scrollBehavior:function(){return{x:0,y:0}}}),nt=st;s["a"].config.productionTip=!1,new s["a"]({vuetify:A,router:nt,render:function(t){return t(E)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},"66e4":function(t,e,a){},6869:function(t,e,a){"use strict";var s=a("66e4"),n=a.n(s);n.a},8393:function(t,e,a){t.exports=a.p+"img/2020_hiking.ea00db7f.jpg"},"9c0c":function(t,e,a){},ec24:function(t,e,a){t.exports=a.p+"img/banner.2da8b737.png"}});
//# sourceMappingURL=app.0114e920.js.map