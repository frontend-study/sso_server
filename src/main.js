// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
// import axios from 'axios'
import http from './util/http'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(iView)

// axios.defaults.withCredentials = true 解决不了 session(同一个 session) 问题
// axios.defaults.withCredentials = true
// Vue.prototype.$myajax = axios
Vue.prototype.$http = http;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
