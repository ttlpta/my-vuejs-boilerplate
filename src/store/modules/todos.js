import random from "lodash/random";

export default {
  state: {
    todos: [{
      id: random(5),
      title: 'Todo AAAA',
      project: 'Project A',
      done: false
    }, {
      id: random(5),
      title: 'Todo B',
      project: 'Project B',
      done: true
    }, {
      id: random(5),
      title: 'Todo C',
      project: 'Project C',
      done: false
    }, {
      id: random(5),
      title: 'Todo D',
      project: 'Project D',
      done: false
    }]
  },
  getters: {
    TODOS: state => {
      return state.todos
    }
  },
  mutations: {
    add (state, todo) {
      state.todos = [...state.todos, {id: random(5), ...todo}]
    },
    edit (state, todo) {
      state.todos = [...state.todos].map((t, idx) => todo.id === t.id ? todo : t)
    },
    delete (state, id) {
      state.todos = [...state.todos].filter((t, idx) => t.id !== id)
    },
    complete (state, id) {
      state.todos = [...state.todos].map((todo, idx) => id === todo.id ? {...todo, done: true} : todo)
    }
  },
  actions: {
    add (context, todo) {
      context.commit('add', todo)
    },
    edit (context, todo) {
      context.commit('edit', todo)
    },
    delete (context, id) {
      context.commit('delete', id)
    },
    complete (context, id) {
      context.commit('complete', id)
    }
  }
}
