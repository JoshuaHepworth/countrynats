import React, { Component } from 'react';
import NavBarComponent from './NavBarComponent';
import BottomComponent from './BottomComponent';
import ProjectCardComponent from './ProjectCardComponent';
import ProjectCardComponentTwo from './ProjectCardComponentTwo';
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
                <ProjectCardComponent />
                <ProjectCardComponentTwo />

                <BottomComponent />
              </div>
            
            </div>
    );
  }
}

export default App;
