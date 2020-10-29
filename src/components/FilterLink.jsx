import React from "react";
import store from "../redux/store";

function FilterLink({ currentFilter, filterString, children }) {
  if (filterString === currentFilter) {
    return <span>{children}</span>;
  }
  return (
    <a
      href="#"
      onClick={(e) => {
        store.dispatch({
          type: "SET_FILTER",
          payload: filterString,
        });
      }}
    >
      {children}
    </a>
  );
}

export default FilterLink;
