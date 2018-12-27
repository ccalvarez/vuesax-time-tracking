import Vue from 'vue';
import App from './App.vue';
import Vuesax from 'vuesax';

import { store } from './store';

import './assets/css/0.styles.09b05f6a.css';
import 'material-icons/iconfont/material-icons.css';

Vue.use(Vuesax);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
  beforeCreate() {
    console.log('beforeCreate');
    this.$store
      .dispatch('getTasks')
      .then()
      .catch(); // TODO: esperar y actuar según el resultado de la Promise
  },
}).$mount('#app');
