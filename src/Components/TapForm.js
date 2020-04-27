import React from "react";
import { v4 } from 'uuid';

function TapForm(props){
  
  const beer = {};
  beer.id = v4()
  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.names.value);
    console.log(event.target.location.value);
    console.log(event.target.issue.value);
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

export default TapForm;