import Vue from 'vue';
import App from './App.vue';
import Vuesax from 'vuesax';
import VueCookie from 'vue-cookie';

import { store } from './store';
import router from './router';

import './assets/css/0.styles.09b05f6a.css';
import 'material-icons/iconfont/material-icons.css';

Vue.use(Vuesax);
Vue.use(VueCookie);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
  beforeCreate() {
    // TODO: refactorizar, garantizar que la aplicación se cargue hasta que se obtuvieron todos los datos
    this.$store
      .dispatch('getTasks')
      .then()
      .catch(); // TODO: esperar y actuar segÃºn el resultado de la Promise
    this.$store
      .dispatch('getProjects')
      .then()
      .catch(); // TODO: esperar y actuar según el resultado de la Promise
  },
}).$mount('#app');
