import React from "react";
import FilterLink from "./FilterLink";

function FilterLinks() {
  return (
    <div>
      <p>Filter: </p>
      <FilterLink filterString="SHOW_ALL">All</FilterLink>{" "}
      <FilterLink filterString="SHOW_DONE">Done</FilterLink>{" "}
      <FilterLink filterString="SHOW_UNDONE">Undone</FilterLink>{" "}
    </div>
  );
}

export default FilterLinks;
