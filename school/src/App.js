import React from 'react';
import './App.css';
import FormikLogin from './components/Login';
import FormikRegister from './components/Register';
import Homepage from './components/Homepage';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <Homepage/>
      <Game/>
      {/* <FormikLogin/> */}
      {/* <FormikRegister/> */}
    </div>
  );
}

export default App;
