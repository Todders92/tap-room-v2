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

  handleAddingNewBeerToList = (newBeer) => {
    const newMasterTapList = this.state.masterTapList.concat(newBeer);
    this.setState({masterTapList: newMasterTapList,
                  formVisibleOnPage: false });
    }
  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <TapForm onNewBeerCreation={this.handleAddingNewBeerToList}  />;
      buttonText = "Return to Tap List";
    } else {
      currentlyVisibleState = <TapList tapList={this.state.masterTapList} />;
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