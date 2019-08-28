import Vue from 'vue'
import Vuex from 'vuex'

import todos from './modules/todos'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    todos
  }
})
