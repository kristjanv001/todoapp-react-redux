export function addTodo(todoObj) {
  return {
    type: "ADD_TODO",
    id: todoObj.id,
    todosText: todoObj.todosText,
    completed: todoObj.completed,
  };
}

export function toggleTodo(id) {
  return {
    type: "TOGGLE_TODO",
    id: id,
  };
}
