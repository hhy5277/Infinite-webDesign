webpackJsonp([5],{"awp/":function(t,e){},mJTh:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("3nlj"),n=a("/sA3"),o=a("9rMa"),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t},r="",c={data:function(){return{phoneNumber:"",passwd:"",slidename:"slide-back",mainarea:!1}},components:{Headersec:s.a},mounted:function(){},activated:function(){this.mainarea=!0,this.slidename="/register"==r||"/forgetpasswd"==r?"slide-back":"slide-up"},deactivated:function(){this.mainarea=!1},beforeRouteEnter:function(t,e,a){r=e.path,a()},methods:i({onLogin:function(){var t=this;n.b.test(this.phoneNumber)?""==this.passwd?this.$toastBox.showToastBox({toast:"请输入密码"}):this.$http.post(this.$baseURL+"user/login",{phoneNumber:this.phoneNumber,passwd:this.passwd}).then(function(e){e.data.success?(t.$toastBox.showToastBox({toast:"登录成功"}),t.setLogin(!0),t.setUserinfo(e.data.data),setTimeout(function(){t.$router.replace({path:"./member"})},1e3)):t.$toastBox.showToastBox({toast:e.data.data})}).catch(function(t){console.log(t)}):this.$toastBox.showToastBox({toast:"请输入正确手机号码"})}},Object(o.c)({setLogin:"SET_LOGIN",setUserinfo:"SET_USERINFO"}))},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("headersec",{attrs:{tabname:"登录"}}),t._v(" "),a("transition",{attrs:{name:t.slidename}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.mainarea,expression:"mainarea"}],staticClass:"container"},[a("div",{staticClass:"login_item flex"},[a("span",[t._v("手机:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNumber,expression:"phoneNumber"}],attrs:{type:"text",placeholder:"输入手机号码"},domProps:{value:t.phoneNumber},on:{input:function(e){e.target.composing||(t.phoneNumber=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"login_item flex"},[a("span",[t._v("密码:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.passwd,expression:"passwd"}],attrs:{type:"password",placeholder:"输入登录密码"},domProps:{value:t.passwd},on:{input:function(e){e.target.composing||(t.passwd=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"flex_between"},[a("router-link",{staticClass:"noacount",attrs:{tag:"div",to:"./register"}},[t._v("\n                前往注册!\n              ")]),t._v(" "),a("router-link",{staticClass:"forget_passwd",attrs:{tag:"div",to:"./forgetpasswd"}},[t._v("\n                忘记密码\n            ")])],1),t._v(" "),a("div",{staticClass:"login_btn",on:{click:t.onLogin}},[t._v("\n                登录\n            ")])])])],1)},staticRenderFns:[]};var l=a("vSla")(c,d,!1,function(t){a("awp/")},"data-v-5cccecad",null);e.default=l.exports}});