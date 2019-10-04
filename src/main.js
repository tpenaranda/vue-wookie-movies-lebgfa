import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueRouter)


axios.defaults.headers.common['Authorization'] = 'Bearer Wookie2019'
Vue.use(VueAxios, axios)

import Home from './components/Home.vue'
import Detail from './components/Detail.vue'

const routes = [
  { path: '*', component: Home },
  { path: '/detail/:movie', component: Detail, name: 'detail' }
]

const router = new VueRouter({
  routes
})

axios.get('https://wookie.codesubmit.io/movies').then((response) => {
    new Vue({
        router,
        data: {
            movies: response.data.movies
        },
        render: h => h(App),
    }).$mount('#app')
})
