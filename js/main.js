Vue.component('todo-item', {
  template: `
        <li>
          {{title}}
          <button v-on:click="$emit('remove')">X</button>
        </li>
    `,
    props: ['title']
})

new Vue({
  el: '#todoList',
    data: {
      newTodoText: '',
      todos: [
        'Complete app',
        'Fix UI issues',
        'Create Interactive Atlas',
        'Profit'
      ]
    },
    methods: {
      addNewTodo: function(){
        this.todos.push(this.newTodoText)
        this.newTodoText = ''
      }
    }
})
