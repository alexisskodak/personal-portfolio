(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{353:function(e,t,n){},359:function(e,t,n){"use strict";n(353)},399:function(e,t,n){"use strict";n.r(t);var l,c=n(7),o=(n(55),n(23),n(14),{name:"contact.vue",data:function(){return{valid:!0,message:{fullname:"",phone:"",email:"",subject:"",body:""},msg:"",snackbar:!1}},computed:{labels:function(){return{fname:this.$t("contact.labels.fname"),number:this.$t("contact.labels.number"),email:this.$t("contact.labels.email"),subject:this.$t("contact.labels.subject"),message:this.$t("contact.labels.message"),submit:this.$t("contact.labels.submit")}},rules:function(){var e=this;return{nameRules:[function(t){return t&&t.length<=25||e.$t("contact.nameRules")}],phoneRules:[function(t){return t.length<=10||e.$t("contact.phoneRules")}],subjectRules:[function(t){return!!t||e.$t("contact.subjectRules.req")},function(t){return t&&t.length<=25||e.$t("contact.subjectRules.count")}],emailRules:[function(t){return!!t||e.$t("contact.emailRules.req")},function(t){return/.+@.+\..+/.test(t)||e.$t("contact.emailRules.count")}],bodyRules:[function(t){return!!t||e.$t("contact.bodyRules.req")},function(t){return t.length<=250||e.$t("contact.bodyRules.count")}]}}},methods:{handleResponse:function(e){this.msg="Failed"===e.status?this.$t("common.emailError"):this.$t("common.emailSuccess"),this.snackbar=!0},handleForm:(l=Object(c.a)(regeneratorRuntime.mark((function e(data){var t,n,body,l,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return body={authCode:"b0d7adec-c95d-4b3b-aa47-955a076da7e5",toEmail:"skodak95alexis@gmail.com",ToCCEmail:data.email,subject:data.subject,mailBody:"".concat(data.email,", ").concat(null!==(t=data.fullname)&&void 0!==t?t:"Name not submitted",", ").concat(null!==(n=data.phone)&&void 0!==n?n:"Number not submitted",", wrote: ").concat(data.body)},l={method:"POST",body:JSON.stringify(body)},e.prev=3,e.next=6,fetch("https://emailyt.com/DispatchEmail",l);case 6:return c=e.sent,e.next=9,c.json();case 9:o=e.sent,this.handleResponse(o),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),this.handleResponse(e.t0);case 16:case"end":return e.stop()}}),e,this,[[3,13]])}))),function(e){return l.apply(this,arguments)})}}),r=(n(359),n(85)),m=n(107),d=n.n(m),f=n(243),h=n(352),v=n(390),x=n(69),$=n(391),k=n(384),y=n(392),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h1",{staticClass:"text-h4 text-md-h2 font-weight-bold mt-3 mb-10"},[e._v("Contact")]),e._v(" "),n("v-form",[n("v-sheet",{staticClass:"rounded-xl pa-3 pa-md-10 mb-10"},[n("v-card-title",[e._v(e._s(e.$t("contact.title")))]),e._v(" "),n("v-card-subtitle",[e._v(e._s(e.$t("contact.subtitle")))]),e._v(" "),n("v-card-text",[n("div",{staticClass:"inline-form"},[n("v-text-field",{attrs:{color:"secondary",label:e.labels.fname,counter:"25",rules:e.rules.nameRules},model:{value:e.message.fullname,callback:function(t){e.$set(e.message,"fullname",t)},expression:"message.fullname"}}),e._v(" "),n("v-text-field",{attrs:{color:"secondary",label:e.labels.number,rules:e.rules.phoneRules},model:{value:e.message.phone,callback:function(t){e.$set(e.message,"phone",t)},expression:"message.phone"}})],1),e._v(" "),n("v-text-field",{attrs:{color:"secondary",label:e.labels.email,type:"email",rules:e.rules.emailRules},model:{value:e.message.email,callback:function(t){e.$set(e.message,"email",t)},expression:"message.email"}}),e._v(" "),n("v-text-field",{attrs:{color:"secondary",label:e.labels.subject,counter:"32",rules:e.rules.subjectRules},model:{value:e.message.subject,callback:function(t){e.$set(e.message,"subject",t)},expression:"message.subject"}}),e._v(" "),n("v-textarea",{attrs:{color:"secondary",rows:"4",label:e.labels.message,rules:e.rules.bodyRules,counter:"250"},model:{value:e.message.body,callback:function(t){e.$set(e.message,"body",t)},expression:"message.body"}}),e._v(" "),n("v-btn",{staticClass:"mt-3",attrs:{outlined:"",color:"secondary"},on:{click:function(t){return e.handleForm(e.message)}}},[e._v(e._s(e.labels.submit))])],1)],1)],1),e._v(" "),n("v-snackbar",{scopedSlots:e._u([{key:"action",fn:function(t){var l=t.attrs;return[n("v-btn",e._b({attrs:{color:"secondary",outlined:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",l,!1),[e._v("\n        Close\n      ")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n    "+e._s(e.msg)+"\n    ")])],1)}),[],!1,null,"e2fdd76c",null);t.default=component.exports;d()(component,{VBtn:f.a,VCardSubtitle:h.a,VCardText:h.b,VCardTitle:h.c,VForm:v.a,VSheet:x.a,VSnackbar:$.a,VTextField:k.a,VTextarea:y.a})}}]);