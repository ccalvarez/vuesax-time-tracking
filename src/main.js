import Vue from 'vue';
import App from './App.vue';
import Vuesax from 'vuesax';
import './assets/css/0.styles.09b05f6a.css';
import 'material-icons/iconfont/material-icons.css';

Vue.use(Vuesax);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
