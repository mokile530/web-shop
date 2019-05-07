import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
import Reg from "./views/Reg.vue";
 

/* 以上是引入Ele-UI内容 */
Vue.use(VueRouter)
Vue.use(ElementUI);
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/Reg',
      name: 'reg',
      component: Reg
    }
  ]
})

export default router;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
