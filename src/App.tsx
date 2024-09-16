import React from 'react';
import TokenDisplay from './Components/GetToken';
import Login from './Components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Login />
      <TokenDisplay />
    </div>
  );
}

export default App;
