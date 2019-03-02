import React, { Component } from 'react';
import './styles.css';


class ProjectCardComponentTwo extends Component {
    render(){
        return(
        <div className="container">
		  <div className="article-card">
		    <div className="author">
		      <div className="user-avatar">
		        <img src="https://cdn1.iconfinder.com/data/icons/gestureworks_gesture_glyphs/512/stroke_letter_f_lowercase_gestureworks.png" alt=""></img>
		      </div>
		      <div className="user-name">
		        InkBerrie
		      </div>
		      <div className="written-date">2018</div>
		    </div>
		     <div className="content-image">
		      <img src="https://i.imgur.com/qfCxlRx.png" alt=""></img>
		    </div>
		    <div className="content-text">
		      This is a social app that connects tattoo artists and potential clients. Artists are able to post their work, while potential clients can discover new artists, favorite them, and communicate with them to schedule appointments.(no frontend framework was used in developing this app)
		    </div>
    </div>
  </div>
        )
    }
}
export default ProjectCardComponentTwo;
