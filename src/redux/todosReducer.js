const initialTodosState = [
  {
    id: 1,
    todosText: "learn redux",
    completed: true,
  },
];

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
    case "TOGGLE_TODO":
      return state.map((todo) => {
        if (todo.id !== action.id) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      });

    default:
      return state;
  }
}
