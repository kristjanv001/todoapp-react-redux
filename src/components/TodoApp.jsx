import React from "react";
import TodosList from "./TodosList";
import TodosForm from "./TodosForm";
import FilterLinks from "./FilterLinks";

function TodoApp() {
  return (
    <div style={{ border: "1px solid black", padding: 15 }}>
      <FilterLinks />
      <TodosForm />
      <TodosList />
    </div>
  );
}

export default TodoApp;
