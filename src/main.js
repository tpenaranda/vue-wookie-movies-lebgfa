import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueRouter)

import Home from './components/Home.vue'
import Detail from './components/Detail.vue'

const routes = [
  { path: '*', component: Home },
  { path: '/detail/:movie', component: Detail }
]

const router = new VueRouter({
  routes
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
