<template>
    <div class="todolist-container">
        <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
        <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
        <todo 
            v-on:delete-todorrrrr="deleteTodo" 
            v-on:complete-todorrrrr="completeTodo" 
            v-for="(todo, index) in todos" :todo="todo" :key="index"></todo>
    </div>
</template>
<script type = "text/javascript" >
import Todo from './Todo';
export default {
    props: ['todos'],
    components: {
        Todo,
    },
    methods: {
        deleteTodo(todo) {
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1);
        },
        completeTodo(todo) {
            const todoIndex = this.todos.indexOf(todo);
            this.todos = [...this.todos].map((todo, idx) => idx === todoIndex ? {...todo, done : true} : todo);
        }
    },
};
</script>
<style>
    .todolist-container {
        margin-bottom: 100px;
    }
</style>