import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../redux/todosActions";

function TodoItem(props) {
  const handleClick = () => {
    console.log(props.todo.id);
    props.toggleTodo(props.todo.id);
  };

  return (
    <li
      onClick={handleClick}
      style={
        props.todo.completed
          ? {
              textDecoration: "line-through",
              color: "grey",
            }
          : {}
      }
    >
      {props.todo.todosText}
    </li>
  );
}

const mapDispatchToProps = {
  toggleTodo,
};

export default connect(null, mapDispatchToProps)(TodoItem);
