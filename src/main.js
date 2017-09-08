import Vue from 'vue'
import App from './App'
import Hello from './components/Hello'
import About from './components/About'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  // define route url of the application
  {path: '/', component: Hello},
  {path: '/about', component: About}
]

// create a VueRouter instance and pass the route options
const router = new VueRouter({
  routes,
  mode: 'history'
})

// instantiate the Vue instance
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount("#app")
