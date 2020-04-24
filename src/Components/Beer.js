import React from "react";

function Beer() {
  const beer1 = "Dead Guy Ale";
  const beer2 = "Crux Pilsner";
  return (
    <React.Fragment>
      <h3>3a</h3>
      <h3>{beer1} and {beer2}</h3>
      <p><em>Firebase entries not saving!</em></p>
      <hr/>
    </React.Fragment>
  );
}

export default Beer;