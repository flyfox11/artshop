// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import Lazyload from "vue-lazyload-img"
// import 'mescroll.js/mescroll.min.css';
// import MeScroll from 'mescroll.js';
//Vue.prototype.MeScroll=MeScroll;
Vue.use(Lazyload,{ fade: true, speed: 20, time: 300 })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
