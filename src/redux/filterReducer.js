const initialFilterState = "SHOW_ALL";

export function filterReducer(state = initialFilterState, action) {
  switch (action.type) {
    case "SET_FILTER":
      return action.payload;
    default:
      return state;
  }
}

export function getFilteredTodos(todos, payload) {
  switch (payload) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_DONE":
      return todos.filter((todo) => todo.completed);
    case "SHOW_UNDONE":
      return todos.filter((todo) => !todo.completed);
    default:
      return todos;
  }
}
