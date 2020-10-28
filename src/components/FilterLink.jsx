import React from "react";
import store from "../redux/store";

function FilterLink({ filterString, children }) {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
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
