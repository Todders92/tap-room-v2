import React from "react";

function Beer(props) {
  const beer1 = 'stuff'
  const beer2 = "Crux Pilsner";
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

export default Beer;