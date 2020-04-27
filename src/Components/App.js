  
import React from 'react';
import './App.css';
import Header from './Header';
import TapForm from './TapForm';
import KegDetails from './KegDetails';
import TapRoomControl from './TapRoomControl';

function App() {
  return (
    <React.Fragment>
      <Header />
      <TapRoomControl />
      <TapForm />
      <KegDetails />
    </React.Fragment>
  )
 }

export default App;
