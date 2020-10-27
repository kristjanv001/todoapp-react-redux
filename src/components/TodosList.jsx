import React from "react";
import TodoItem from "./TodItem";
import { connect } from "react-redux";

function TodosList(props) {
  console.log(props.todos);
  return (
    <div>
      <ul>
        {props.todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

export default connect(mapStateToProps)(TodosList);
