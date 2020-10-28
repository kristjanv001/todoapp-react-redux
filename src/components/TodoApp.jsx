import React from "react";
import TodosList from "./TodosList";
import TodosForm from "./TodosForm";
import FilterLinks from "./FilterLinks";

function TodoApp() {
  return (
    <div style={{ border: "1px solid black", padding: 15 }}>
      <h3>this is a todoapp component</h3>
      <TodosForm />
      <TodosList />
      <FilterLinks />
    </div>
  );
}

export default TodoApp;
