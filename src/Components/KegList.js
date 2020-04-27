import React from "react";
import Beer from "./Beer";
import PropTypes from "prop-types";


function TapList(props) { 
  return (
    <React.Fragment>
      <hr />
      {props.tapList.map((beer, index) => 
        <Beer name={beer.name}
          brand={beer.brand}
          price={beer.price}
          alcoholContent={beer.alcoholContent}
          count={beer.count}
          key={index} />
      )}
    </React.Fragment>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array
};

export default TapList;
