export default {
  state: {
    todos: [{
      id: 1,
      title: 'Todo AAAA',
      project: 'Project A',
      done: false
    }, {
      id: 2,
      title: 'Todo B',
      project: 'Project B',
      done: true
    }, {
      id: 3,
      title: 'Todo C',
      project: 'Project C',
      done: false
    }, {
      id: 4,
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
      state.todos = [...state.todos, todo]
    }
  },
  actions: {
    add (context, todo) {
      context.commit('add', todo)
    }
  }
}
