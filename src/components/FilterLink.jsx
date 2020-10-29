import React from "react";
import store from "../redux/store";

function FilterLink({ currentFilter, filterString, children }) {
  if (filterString === currentFilter) {
    return <button>{children}</button>;
  }
  return (
    <button
      style={{ color: "grey" }}
      onClick={() => {
        store.dispatch({
          type: "SET_FILTER",
          payload: filterString,
        });
      }}
    >
      {children}
    </button>
  );
}

export default FilterLink;
