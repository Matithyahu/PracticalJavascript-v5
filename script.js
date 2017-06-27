var todoList = {
  todos: [],
  displayTodos: function() {
    var loopTodos = function() {
      for (var i = 0; i < todoList.todos.length; i++){
        if (todoList.todos[i].completed === false) {
          var checkMark = " * ";
        } else {
          var checkMark = " x ";
        }
        console.log(checkMark + todoList.todos[i].todoText );
        }
    }
    console.log("My Todos: ");
    loopTodos();
  },

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos(); // Display aftr adding a todo
  },

  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },

  toggleCompleted: function(position) {
    var toggle = this.todos[position];
    toggle.completed = !toggle.completed;
    this.displayTodos();
  }
}


/*  Commented out the intro exercise

var testArray = ["item 1", "item 2", "item 3"];

for (var i = 0; i < testArray.length; i++) {
  console.log(testArray[i]);
}
*/
