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
		        Furkan K.
		      </div>
		      <div className="written-date">1 March, 2019</div>
		    </div>
		     <div className="content-image">
		      <img src="https://images.pexels.com/photos/48898/wood-cube-abc-cube-letters-48898.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""></img>
		    </div>
		    <div className="content-text">
		      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
		    </div>
    </div>
  </div>
        )
    }
}
export default ProjectCardComponent;
