// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueLodash from 'vue-lodash'
import VueRouter from 'vue-router'

import TodoList from './components/TodoList'
import CreateTodo from './components/CreateTodo'
import HelloWorld from './components/HelloWorld'

import { store } from './store'

Vue.use(VueLodash)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: TodoList },
  { path: '/add', component: CreateTodo },
  { path: '/hello', component: HelloWorld }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
