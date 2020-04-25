import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from "./routes";
import store from "./store/store";

Vue.use(VueRouter);

Vue.config.productionTip = false;

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

const router = new VueRouter({
  mode: 'history',
  routes: routes,
})

new Vue({
  render: h => h(App),
  router: router,
  store,
}).$mount('#app');
