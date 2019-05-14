// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuex from 'vuex'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VueRouter from 'vue-router'
import axios from 'axios'
import App from './App'
import router from './router'
import './assets/css/iconfont/iconfont.css'
import './assets/css/common.css'
import './api/service.js'

Vue.config.productionTip = false
// Vue.prototype.$api = api
Vue.prototype.$axios = axios
Vue.use(vuex)
Vue.use(VueRouter)
Vue.use(iView)
Vue.use(axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
