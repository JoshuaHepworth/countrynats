import React, { Component } from 'react';
import NavBarComponent from './NavBarComponent';
import BottomComponent from './BottomComponent';
import ImageContainer from './ImageContainer'
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
            <div className="welcomePageDiv">
              <img className="logo" src="https://i.imgur.com/h7jS0qv.png" />
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
                <ImageContainer />

                <BottomComponent />
              </div>
              <div className="bottomBlueBar">

              </div>
              <Divider>
              </Divider>
              <div className="bottomBlueBar">

              </div>
            
            </div>
    );
  }
}

export default App;
