<template>
    <div>
        <hello-world>
            <template #header>
                <h1>Header <span>ABC</span></h1>
            </template>
            <template #footer>
                <h1>Footer</h1>
            </template>
        </hello-world>
        <div class='ui basic content center aligned segment'>
            <router-link to="/add">
                <button class='ui basic button icon'>
                    <i class='plus icon'></i>
                </button>
            </router-link>
        </div>
        <div class="todolist-container">
            <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
            <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
            <todo v-for="(todo, index) in todos" :todo="todo" :key="index"></todo>
        </div>
    </div>
</template>
<script type = "text/javascript" >
    import HelloWorld from "./HelloWorld";
    import Todo from './Todo';
    export default {
        components: {
            Todo, HelloWorld
        },
        computed: {
            todos() {
                return this.$store.getters.TODOS
            }
        },
        methods: {
        },
    };
</script>
<style>
    .todolist-container {
        margin-bottom: 100px;
    }
</style>