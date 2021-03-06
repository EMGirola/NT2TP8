import Vue from 'vue'
import App from './App.vue'


import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './form'
import './axios'

import store from './store'


import { router } from './routes';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
