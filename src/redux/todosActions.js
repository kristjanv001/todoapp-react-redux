export function addTodo(todoObj) {
  return {
    type: "ADD_TODO",
    id: todoObj.id,
    todosText: todoObj.todosText,
    completed: todoObj.completed,
  };
}

export function toggleTodo(id) {
  console.log("toggle todo action ran");
  return {
    type: "TOGGLE_TODO",
    id: id,
  };
}
