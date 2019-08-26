import Vue from 'vue'
import App from './App.vue'

import './assets/css/bootstrap.min.css'
import './assets/css/magnific-popup.css'
import './assets/css/style.css'
import './assets/css/responsive.css'

import './assets/js/jquery.min.js'
import './assets/js/bootstrap.min.js'
// import './assets/js/jquery.magnific-popup.min.js'
import './assets/js/jquery.scrollUp.min.js'
import './assets/js/main.js'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
