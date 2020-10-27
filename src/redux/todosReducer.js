const initialTodosState = [];

export default function todosReducer(state = initialTodosState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          todosText: action.todosText,
          completed: false,
        },
      ];
    default:
      return state;
  }
}
