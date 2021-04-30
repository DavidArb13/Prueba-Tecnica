import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import cualquiera from './components/cualquiera';
import Home from './components/Home';
import Registro from './components/Registro';




Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuelidate);


Vue.config.productionTip = false


//rutas
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path:'/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cualquiera',
      name: 'cualquiera',
      component: cualquiera
    },
    {
      path: '/Registro',
      name: 'Registro',
      component: Registro
    }
  ]
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
