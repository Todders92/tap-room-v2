import React from "react";
import PropTypes from "prop-types";

function Beer(props) {
  return (
    <React.Fragment>
      <h3>{props.name} - {props.brand}</h3>
      <p>alcohol content: {props.alcoholContent}</p>
      <p><em>{props.price}</em></p>
  <p>pints on tap: {props.count}</p>
      <hr/>
    </React.Fragment>
  );
}
Beer.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  alcoholContent: PropTypes.string,
  count: PropTypes.string
};

export default Beer;