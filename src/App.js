import React, { Component } from 'react';
import TestComponent from './TestComponent';
import TestComponentTwo from './TestComponentTwo';
import NavBarComponent from './NavBarComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <div>
              <div className="topPart">
                  <header className="navBar">
                    <NavBarComponent />
                  </header>
                  <section>
                    <h1>Hey this is a lyft clone where i'm going to practice parallax</h1>
                    <TestComponent />
                    ----------------
                    <TestComponentTwo />
                  </section>
              </div>
              <div className="bottomPart">
                <footer>
                </footer>
              </div>
            </div>
        </div>
      </div>

    );
  }
}

export default App;
