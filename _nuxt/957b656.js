(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{211:function(t,e,n){},213:function(t,e,n){},242:function(t,e,n){"use strict";var o={data:function(){return{drawer:!1}}},r=(n(280),n(85)),c=n(107),l=n.n(c),v=n(341),h=n(347),d=n(342),x=n(343),_=n(348),m=n(165),w=n(137),f=n(334),k=n(332),C=n(344),$=n(346),y=n(345),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{dark:""}},[o("v-app-bar",{attrs:{dense:"",fixed:"",app:"","clipped-left":""}},[o("v-app-bar-nav-icon",{attrs:{id:"navbar-icon"},on:{click:function(e){t.drawer=!t.drawer}}}),t._v(" "),o("v-app-bar-title",{staticClass:"pa-0"},[o("nuxt-link",{attrs:{to:"/"}},[o("v-img",{attrs:{src:n(279),height:"45",width:"45"}})],1)],1),t._v(" "),o("v-spacer"),t._v(" "),o("div",{attrs:{id:"links"}},[o("nuxt-link",{staticClass:"white--text text-decoration-none text-h6 mr-3",attrs:{to:t.localePath("/")}},[t._v("\n        "+t._s(t.$t("nav.home"))+"\n      ")]),t._v(" "),o("nuxt-link",{staticClass:"white--text text-decoration-none text-h6 mr-3",attrs:{to:t.localePath("/about")}},[t._v("\n        "+t._s(t.$t("nav.aboutme"))+"\n      ")]),t._v(" "),o("nuxt-link",{staticClass:"white--text text-decoration-none text-h6 mr-3",attrs:{to:t.localePath("/work")}},[t._v("\n        "+t._s(t.$t("nav.projects"))+"\n      ")]),t._v(" "),o("nuxt-link",{staticClass:"white--text text-decoration-none text-h6 mr-3",attrs:{to:t.localePath("/gallery")}},[t._v("\n        "+t._s(t.$t("nav.photography"))+"\n      ")]),t._v(" "),o("nuxt-link",{staticClass:"white--text text-decoration-none text-h6",attrs:{to:t.localePath("/contact")}},[t._v("\n        "+t._s(t.$t("nav.contact"))+"\n      ")])],1),t._v(" "),o("div",{staticClass:"ml-3"},[o("nuxt-link",{staticClass:"text-overline white--text mx-1 text-decoration-none font-weight-bold",attrs:{to:t.switchLocalePath("en")}},[t._v("EN")]),t._v("/\n      "),o("nuxt-link",{staticClass:"text-overline white--text mx-1 text-decoration-none font-weight-bold",attrs:{to:t.switchLocalePath("fr")}},[t._v("FR")])],1)],1),t._v(" "),o("v-navigation-drawer",{attrs:{app:"",fixed:"",bottom:"",temporary:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",[o("v-list-item",{staticClass:"text-h6"},[o("nuxt-link",{staticClass:"white--text text-decoration-none",attrs:{to:t.localePath("/")}},[t._v("\n          "+t._s(t.$t("nav.home"))+"\n        ")])],1),t._v(" "),o("v-list-item",{staticClass:"text-h6"},[o("nuxt-link",{staticClass:"white--text text-decoration-none",attrs:{to:t.localePath("/about")}},[t._v("\n          "+t._s(t.$t("nav.aboutme"))+"\n        ")])],1),t._v(" "),o("v-list-item",{staticClass:"text-h6"},[o("nuxt-link",{staticClass:"white--text text-decoration-none",attrs:{to:t.localePath("/work")}},[t._v("\n          "+t._s(t.$t("nav.projects"))+"\n        ")])],1),t._v(" "),o("v-list-item",{staticClass:"text-h6"},[o("nuxt-link",{staticClass:"white--text text-decoration-none",attrs:{to:t.localePath("/gallery")}},[t._v("\n          "+t._s(t.$t("nav.photography"))+"\n        ")])],1),t._v(" "),o("v-list-item",{staticClass:"text-h6"},[o("nuxt-link",{staticClass:"white--text text-decoration-none",attrs:{to:t.localePath("/contact")}},[t._v("\n          "+t._s(t.$t("nav.contact"))+"\n        ")])],1)],1)],1),t._v(" "),o("v-main",{attrs:{id:"bg"}},[o("div",[o("v-container",{staticClass:"py-0",attrs:{id:"container"}},[o("nuxt")],1),t._v(" "),o("footer",{staticClass:"py-10",attrs:{id:"bg2"}},[o("p",{staticClass:"text-overline"},[t._v(t._s(t.$t("common.network")))]),t._v(" "),o("div",[o("a",{staticClass:"mr-3",attrs:{href:"https://github.com/sickb0i"}},[o("v-icon",{attrs:{large:""}},[t._v("$vuetify.icons.mdiGithub")])],1),t._v(" "),o("a",{staticClass:"mr-3",attrs:{href:"https://www.linkedin.com/in/alexis-skodak/"}},[o("v-icon",{attrs:{large:""}},[t._v("$vuetify.icons.mdiLinkedin")])],1),t._v(" "),o("a",{attrs:{href:"https://www.instagram.com/alexisskodak/"}},[o("v-icon",{attrs:{large:""}},[t._v("$vuetify.icons.mdiInstagram")])],1)])])],1)])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:v.a,VAppBar:h.a,VAppBarNavIcon:d.a,VAppBarTitle:x.a,VContainer:_.a,VIcon:m.a,VImg:w.a,VList:f.a,VListItem:k.a,VMain:C.a,VNavigationDrawer:$.a,VSpacer:y.a})},251:function(t,e,n){n(252),t.exports=n(253)},275:function(t,e,n){"use strict";n(211)},279:function(t,e,n){t.exports=n.p+"img/logo_dark.f16d5ed.png"},280:function(t,e,n){"use strict";n(213)},76:function(t,e,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(275),n(85)),c=n(107),l=n.n(c),v=n(341),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;l()(component,{VApp:v.a})}},[[251,9,1,10]]]);