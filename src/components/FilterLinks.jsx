import React from "react";
import FilterLink from "./FilterLink";
import { connect } from "react-redux";

function FilterLinks(props) {
  return (
    <div>
      <span>Filter: </span>
      <FilterLink currentFilter={props.filter} filterString="SHOW_ALL">
        All
      </FilterLink>{" "}
      <FilterLink currentFilter={props.filter} filterString="SHOW_DONE">
        Done
      </FilterLink>{" "}
      <FilterLink currentFilter={props.filter} filterString="SHOW_UNDONE">
        Undone
      </FilterLink>{" "}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    filter: state.filter,
  };
}

export default connect(mapStateToProps)(FilterLinks);

// export default FilterLinks;
