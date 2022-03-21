import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;

Vue.use(VueRouter);
// Vue.component('app', App);

new Vue({
  render: (h) => h(App),
	router,
	store,
}).$mount("#app");

// const app = new Vue({
// 	el: "#app",
// 	router,
// 	store,
// 	render: h => h(App),
// });
