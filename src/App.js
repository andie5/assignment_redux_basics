import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import {createStore} from 'redux';
import GroceryList from './GroceryList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src ={logo} className="App-logo" alt="logo" /> */}
       
          <GroceryList />
      </header>
    </div>
  );
}

export default App;
