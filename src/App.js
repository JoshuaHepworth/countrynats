import React, { Component } from 'react';
import TestComponent from './TestComponent';
import TestComponentTwo from './TestComponentTwo';
import NavBarComponent from './NavBarComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarComponent />
        <h1>Hey this is a lyft clone where i'm going to practice parallax</h1>
        <TestComponent />
        ----------------
        <TestComponentTwo />
      </div>

    );
  }
}

export default App;
