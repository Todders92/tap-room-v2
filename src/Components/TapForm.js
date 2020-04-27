import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";


function TapForm(props){
  
  const beer = {};
  beer.id = v4()
  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    props.onNewTapCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, count: event.target.count.value, id: v4()});
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewTapFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Beer Name' />
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
        <input
          name='price'
          placeholder='Price Per Pint' />
        <input
          name='alcholContent'
          placeholder='alcohol Content' />
        <input
          name='count'
          placeholder='pints left on tap' />
        <button type='submit'>Add Beer</button>
      </form>
    </React.Fragment>
  );
  
  
}
TapForm.propTypes = {
  onNewTapCreation: PropTypes.func
};

export default TapForm;