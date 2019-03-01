import React, { Component } from 'react';
import TestComponent from './TestComponent';
import TestComponentTwo from './TestComponentTwo';
import NavBarComponent from './NavBarComponent';
import BottomComponent from './BottomComponent';
import ProjectCardButton from './ProjectCardComponent';
import { Divider } from 'semantic-ui-react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
              <div className="topPart">
                    <NavBarComponent />
              </div>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>

              <Divider >
              </Divider>
              <div className="bottomPart">
                <ProjectCardButton />
                <ProjectCardButton />
                <ProjectCardButton />
                <BottomComponent />
              </div>
            
            </div>
    );
  }
}

export default App;
