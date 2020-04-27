import React from 'react';
import TapForm from './TapForm';
import TapList from './TapList';

class TapRoomControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterTapList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <TapForm />;
      buttonText = "Return to Beer List"; 
    } else {
      currentlyVisibleState = <TapList />;
      buttonText = "Add Beer";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default TapRoomControl;