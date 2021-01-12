import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/todosActions";
import { v4 as uuidv4 } from "uuid";

function TodosForm(props) {
  const [todoInput, setTodoInput] = useState("");

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addTodo({ id: uuidv4(), todosText: todoInput, completed: false });

    setTodoInput("");
  };

  return (
    <div style={{ marginTop: 20 }}>
      <form onSubmit={handleSubmit}>
        <input value={todoInput} onChange={handleChange} />
        <button type="submit">Add a todo</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  addTodo,
};

export default connect(null, mapDispatchToProps)(TodosForm);
