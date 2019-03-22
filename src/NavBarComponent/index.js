import React, { Component } from 'react';
import './styles.css';


class NavBarComponent extends Component {
    render(){
        return(
        	<ul className="navBarComponent">
        		<li className="ft">Geneva, IL</li>
        		<li>Home</li>
        		<li>About</li>
        		<li>Contact</li>
        	</ul>
        )
    }
}
export default NavBarComponent;
