import React from "react";
import Beer from "./Beer";

const masterTapList = [ ... ];

function TapList(props){
  return (
    <React.Fragment>
    <hr/>
    {props.TapList.map((beer, index) =>
      <Beer name={beer.name}
        brand={beer.brand}
        alcoholContent={beer.alcoholContent}
        price={beer.price}
        count={beer.count}
        key={index}/>
    )}
  </React.Fragment>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array
};

export default TapList;
