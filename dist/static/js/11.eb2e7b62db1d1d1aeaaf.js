webpackJsonp([11],{YVNm:function(e,r){},xJsL:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=n("Xxa5"),s=n.n(o),t=n("exGp"),a=n.n(t),i={name:"login_page",data:function(){return{loginForm:{username:"",password:""},checked:!1,rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},loginShow:!0}},methods:{submitFrom:function(e){var r=this;return a()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r.$router.push("management"),r.loginShow=!1;case 2:case"end":return e.stop()}},e,r)}))()}}},l={render:function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",{staticClass:"login_page fillcontain"},[n("transition",[n("section",{directives:[{name:"show",rawName:"v-show",value:e.loginShow,expression:"loginShow"}],staticClass:"form_contianer"},[n("div",{staticClass:"login_title"},[n("p",[e._v("Nursing management platform")])]),e._v(" "),n("el-form",{ref:"loginForm",attrs:{"label-width":"80px",model:e.loginForm,rules:e.rules}},[n("el-row",[n("el-form-item",{attrs:{label:"Username:",prop:"username"}},[n("el-input",{model:{value:e.loginForm.username,callback:function(r){e.$set(e.loginForm,"username",r)},expression:"loginForm.username"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"Password:",prop:"password"}},[n("el-input",{model:{value:e.loginForm.password,callback:function(r){e.$set(e.loginForm,"password",r)},expression:"loginForm.password"}})],1),e._v(" "),n("el-form-item",[n("el-checkbox",[e._v("Remember user name and password")])],1),e._v(" "),n("el-form-item",[n("el-button",{staticClass:"submit_btn",on:{click:function(r){e.submitFrom("loginForm")}}},[e._v("Login")])],1)],1)],1)])],1)},staticRenderFns:[]};var m=n("VU/8")(i,l,!1,function(e){n("YVNm")},"data-v-0dc224e2",null);r.default=m.exports}});
//# sourceMappingURL=11.eb2e7b62db1d1d1aeaaf.js.map