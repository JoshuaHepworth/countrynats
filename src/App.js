import React, { Component } from 'react';
import NavBarComponent from './NavBarComponent';
import BottomComponent from './BottomComponent';
import ProjectCardComponent from './ProjectCardComponent';
import ProjectCardComponentTwo from './ProjectCardComponentTwo';
import { Divider } from 'semantic-ui-react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

class App extends Component {
  render() {
    return (
      <div className="App">
              <div className="topPart">
                    <NavBarComponent />
                    <div className="welcomeButton">Filip Tatarnik
                    </div>
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
