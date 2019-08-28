<template>
  <div class='ui centered card'>
    <div class="content" v-show="!isEditing">
      <div class='header'>
          {{ todo.title }}
      </div>
      <div class='meta'>
          {{ todo.project }}
      </div>
      <div class='extra content'>
        <span class='right floated edit icon' v-on:click="showForm">
          <i class='edit icon'></i>
        </span>
        <span class='right floated trash icon' v-on:click="deleteTodo(todo.id)">
          <i class='trash icon'></i>
        </span>
      </div>
    </div>
    <div class="content" v-show="isEditing">
      <div class='ui form'>
        <div class='field'>
          <label>Title</label>
          <input type='text' v-model="todo.title" v-on:change="onChange">
        </div>
        <div class='field'>
          <label>Project</label>
          <input type='text' v-model="todo.project" v-on:change="onChange">
        </div>
        <div class='ui two button attached buttons'>
          <button class='ui basic blue button' v-on:click="hideForm">
            Close X
          </button>
        </div>
      </div>
    </div>
    <div class='ui bottom attached green basic button' v-show="!isEditing &&todo.done" disabled >
        Completed
    </div>
    <div class='ui bottom attached red basic button' v-show="!isEditing && !todo.done" v-on:click="complete(todo.id)">
        Pending
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['todo'],
    data() {
        return {
            isEditing: false,
        };
    },
    methods: {
        showForm() {
          this.isEditing = true;
        },
        onChange() {
          this.updateTodo()
        },
        updateTodo() {
          this.$store.dispatch('edit', this.todo)
        },
        hideForm() {
            this.isEditing = false;
        },
        deleteTodo(id) {
          const yes = confirm('Are U sure?');
          if(yes) this.$store.dispatch('delete', id)
        },
        complete(id){
          this.$store.dispatch('complete', id)
        }
    },
  };
</script>