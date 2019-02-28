import React, { Component } from 'react';
import TestComponent from './TestComponent';
import TestComponentTwo from './TestComponentTwo';
import NavBarComponent from './NavBarComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
              <div className="topPart">
                    <NavBarComponent />
              </div>
              <div className="bottomPart">
                    <h1>Hey this is a lyft clone where i'm going to practice parallax</h1>
                    <TestComponent />
                    ----------------
                    <TestComponentTwo />
              </div>
            
            </div>
    );
  }
}

export default App;
