export default function addTodo(payload) {
  return {
    type: "ADD_TODO",
    id: payload.id,
    todosText: payload.todosText,
    completed: payload.completed,
  };
}
