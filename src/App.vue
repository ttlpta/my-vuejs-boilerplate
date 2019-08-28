<template>
  <div id="app">
    <img src="./assets/logo.png">
    <create-todo v-on:create-todo="addTodo" />
    <todo-list v-bind:todos="todos"></todo-list>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import TodoList from './components/TodoList'
import CreateTodo from './components/CreateTodo'

export default {
  name: 'App',
  components: {
    TodoList,
    CreateTodo
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
    },
  },
  computed: {
    todos() {
      return this.$store.getters.TODOS
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
