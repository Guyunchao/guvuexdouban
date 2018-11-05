// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 插件的作用 把router存储到store中 
import {sync} from 'vuex-router-sync'
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/css/index.css'
Vue.config.productionTip = false
// 把router存储到store中
sync(store,router);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
