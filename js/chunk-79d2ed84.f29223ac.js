(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79d2ed84"],{"3c0da":function(t,e,i){"use strict";i("b7ac")},"4bd4":function(t,e,i){"use strict";var a=i("5530"),r=(i("caad"),i("2532"),i("07ac"),i("4de4"),i("159b"),i("7db0"),i("58df")),s=i("7e2b"),n=i("3206");e["a"]=Object(r["a"])(s["a"],Object(n["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=i(t)))})):a.valid=i(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},5326:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loginpage"},[i("v-card",{staticClass:"logincard pb-5 px-4 ma-2",attrs:{elevation:"12","max-width":"500px"}},[i("v-card-title",[i("div",{staticClass:"text-center py-8 ma-auto"},[i("h2",[t._v("Mentorship")])])]),i("v-card-text",{staticClass:"mt-n6"},[i("v-form",[i("v-text-field",{attrs:{hint:"e.g. example@exmple.com",placeholder:"e.g. example@exmple.com",label:"E-mail",outlined:"",dense:""},model:{value:t.cred,callback:function(e){t.cred="string"===typeof e?e.trim():e},expression:"cred"}}),i("v-text-field",{attrs:{hint:"e.g. 601ca5x1d4780",placeholder:"e.g. 601ca5x1d4780","append-icon":t.show?"mdi-eye":"mdi-eye-off",autocomplete:"off",name:"password",label:"Password",type:t.show?"text":"password",required:"",outlined:"",dense:""},on:{"click:append":function(e){t.show=!t.show},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)}},model:{value:t.password,callback:function(e){t.password="string"===typeof e?e.trim():e},expression:"password"}})],1),this.$store.state.error?i("v-sheet",{staticClass:"pa-3",attrs:{color:"error",dark:""}},[t._v(t._s(this.$store.state.error))]):t._e()],1),i("v-card-actions",{staticClass:"mt-n3"},[i("v-btn",{staticClass:"ma-auto py-2",attrs:{color:"blue cursive",dark:"",large:"",block:"",loading:this.$store.state.loading},on:{click:t.login}},[t._v("Login")])],1),i("v-card-actions",[i("v-btn",{staticClass:"indigo",attrs:{block:"",dark:"",href:"https://docs.google.com/forms/d/e/1FAIpQLSfFbRYnKVjHXcwqnxAZJyT8ra4ENfEJAtfifyjWa6AcVmVY3g/viewform",target:"_blank",large:""}},[t._v(" Register ")])],1)],1)],1)},r=[],s={data:function(){return{cred:"",password:"",show:!1}},methods:{login:function(){if(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(this.cred)&&this.password){this.$store.commit("SET_ERROR","");var t={cred:this.cred,password:this.password};this.$store.dispatch("userLogin",t)}else this.$store.commit("SET_ERROR","Please provide valid credential.")}}},n=s,o=(i("3c0da"),i("2877")),d=i("6544"),c=i.n(d),l=i("8336"),u=i("b0af"),h=i("99d9"),f=i("4bd4"),p=i("8dd9"),m=i("8654"),v=Object(o["a"])(n,a,r,!1,null,"33b4e26a",null);e["default"]=v.exports;c()(v,{VBtn:l["a"],VCard:u["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VForm:f["a"],VSheet:p["a"],VTextField:m["a"]})},b7ac:function(t,e,i){}}]);
//# sourceMappingURL=chunk-79d2ed84.f29223ac.js.map