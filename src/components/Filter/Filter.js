import React from "react";
import PropTypes from "prop-types";

const Filter = ({ onChange }) => {
  return (
    <label>
      Find contacts by name
      <br />
      <input onChange={onChange} name="filter" />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default Filter;
