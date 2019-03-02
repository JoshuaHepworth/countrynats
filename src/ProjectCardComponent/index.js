import React, { Component } from 'react';
import './styles.css';


class ProjectCardComponent extends Component {
    render(){
        return(
        <div className="container">
		  <div className="article-card">
		    <div className="author">
		      <div className="user-avatar">
		        <img src="https://cdn1.iconfinder.com/data/icons/gestureworks_gesture_glyphs/512/stroke_letter_f_lowercase_gestureworks.png" alt=""></img>
		      </div>
		      <div className="user-name">
		        Leash Pals
		      </div>
		      <div className="written-date">December 2018</div>
		    </div>
		     <div className="content-image">
		      <img src="https://i.imgur.com/YlmawDA.png" alt=""></img>
		    </div>
		    <div className="content-text">
				This app is a Full Stack Web App used to schedule dog walks with registered Walkers. There is an interface for walkers to setup their available schedule and approve scheduled walks, and an interface for pet owners needing walkers to request visits from walkers. This application implements a user authentication and permission system, as well as calendar scheduling.		    
			</div>
    </div>
  </div>
        )
    }
}
export default ProjectCardComponent;
