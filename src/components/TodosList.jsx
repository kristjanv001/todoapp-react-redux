import React from "react";
import TodoItem from "./TodItem";
import { connect } from "react-redux";
import { getFilteredTodos } from "../redux/filterReducer";

function TodosList(props) {
  const filteredTodos = getFilteredTodos(props.todos, props.filter);
  return (
    <div>
      <ul style={{ listStyle: "none", cursor: "pointer" }}>
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    filter: state.filter,
  };
}

export default connect(mapStateToProps)(TodosList);
