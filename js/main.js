new Vue({
  el: "#app",
  data: {
    todos: [
      { text: "Imparare Vue", done: false },
      { text: "Costruire un'app todo", done: true },
      { text: "Master JavaScript", done: false },
    ],
    newTodoText: "",
  },
  methods: {
    // Milestone 2
    removeTodo: function (index) {
      this.todos.splice(index, 1);
    },
    // Milestone 3
    addTodo: function () {
      if (this.newTodoText.trim() !== "") {
        this.todos.push({ text: this.newTodoText, done: false });
        this.newTodoText = "";
      }
    },
  },
});
