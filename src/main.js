// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icons/iconfont.css'

import axios from 'axios'
import Qs from 'qs'

// axios.interceptors.request.use(
//   config => {
//       config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

//       return config;
//   },
//   error => {
//       return Promise.reject(error.response);
//   }
// );

axios.defaults.transformRequest = function(data) {
  data = Qs.stringify(data);
  return data;
}

// axios.interceptors.response.use(
//   response => {
//       if(response.data.resultCode == '404') {
//           return;
//       }else {
//           return response;
//       }
//   },
//   error => {
//       return Promise.reject(error.response);
//   }
// );


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.goBack = function() {
  history.go(-1);
}

Vue.prototype.$http=axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
