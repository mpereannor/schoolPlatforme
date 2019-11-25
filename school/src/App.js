import React from 'react';
import './App.css';
import FormikLogin from './components/Login';
import FormikRegister from './components/Register';

function App() {
  return (
    <div className="App">
      <FormikLogin/>
      <FormikRegister/>
    </div>
  );
}

export default App;
