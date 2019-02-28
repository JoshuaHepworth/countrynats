import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import './styles.css'
import { Container, Row, Col } from 'reactstrap';


class BottomComponent extends Component {
    render(){
        return(
            	<footer>
	  				<div className="rounded-social-buttons">
	                    <a className="social-button facebook" href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>
	                    <a className="social-button twitter" href="https://www.twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
	                    <a className="social-button linkedin" href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin"></i></a>
	                    <a className="social-button youtube" href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i></a>
	                    <a className="social-button instagram" href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
	                </div>
				</footer>
        )
    }
}
export default BottomComponent;
