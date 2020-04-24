  
import React from 'react';
import './App.css';
import Header from './Header';
import TapForm from './TapForm';
import TapList from './TapList';
import KegDetails from './KegDetails';

function App() {
  return (
    <React.Fragment>
      <Header />
      <TapForm />
      <TapList />
      <KegDetails />
    </React.Fragment>
  )
 }

export default App;
