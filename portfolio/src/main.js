import Vue from 'vue'
import App from './App.vue'
import router from './router'



import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

