import Vue from 'vue'
import Router from 'vue-router'

import Login from "./views/Login.vue";
import Index from "./views/Index.vue";

Vue.use(Router);

const router = new Router({
	mode: "hash",
	routers: [{
		path: '/',
		name: 'index',
		component: Index
	},
	{
		path: '/login',
		name: 'login',
		component: Login
	}
]
})

export default router;