import React, { useState } from "react";
import { connect } from "react-redux";
import addTodo from "../redux/todosActions";

function TodosForm(props) {
  console.log(props);
  const [todoInput, setTodoInput] = useState("");

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addTodo({ id: Date.now(), todosText: todoInput, completed: false });

    setTodoInput("");
  };

  return (
    <div>
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
