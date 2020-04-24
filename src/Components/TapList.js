import React from "react";
import Beer from "./Beer";

const masterTapList = [
  {
    name : "Dead Guy Ale",
    brand : "Rogue Brewery",
    price : "$6.00",
    alcoholContent : "6.7%",
    count : "124" 
  },
  {
    name : "Pilsner",
    brand : "Crux", 
    price : "$5.00", 
    alcoholContent : "5.0%",
    count : "124" 
  },
  {
    name : "IPA",
    brand : "Double Mountain Brewery", 
    price : "$5.00", 
    alcoholContent : "6.7%",
    count : "124" 
  }
];

function TapList(){
  return (
    <React.Fragment>
    <hr/>
    {masterTapList.map((beer, index) =>
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

export default TapList;
