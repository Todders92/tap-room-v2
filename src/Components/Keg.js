import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick= {() => props.whenKegClicked(props.id)}>
        <h3 className="clickable" >
          {props.name} - {props.brand}
        </h3>
        <p>
          <em>{props.price}</em>
        </p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string,
  count: PropTypes.stringisRequired,
  id: PropTypes.string.isRequired,
  whenKegClicked: PropTypes.func
};

export default Keg;