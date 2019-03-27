import React, { Component } from 'react';
import NavBarComponent from './NavBarComponent';
import BottomComponent from './BottomComponent';
import AppBarComponent from './AppBarComponent'
import ImageContainer from './ImageContainer'
import {Route, Switch} from 'react-router-dom'
import AboutContainer from './AboutContainer'
import FooterComponent from './FooterComponent'
import ProjectCardComponent from './ProjectCardComponent';
import ProjectCardComponentTwo from './ProjectCardComponentTwo';
import Divider from '@material-ui/core/Divider';
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
          <AppBarComponent />
          
            <div className="welcomePageDiv">
              <img className="logo" src="https://i.imgur.com/ZABKfFN.png" />
            </div>
        </div>
         

                <ImageContainer />
                <br/>
                <br/>
                <br/>
                <Divider />
                <FooterComponent/>
            
            </div>
    );
  }
}

export default App;
