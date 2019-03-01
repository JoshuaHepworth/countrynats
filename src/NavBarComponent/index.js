import React, { Component } from 'react';
import './styles.css';


class NavBarComponent extends Component {
    render(){
        return(
        	<ul className="navBarComponent">
        		<li className="ft">FT</li>
        		<li>Home</li>
        		<li>About</li>
        		<li>Stuff</li>
        		<li>Contact</li>
        	</ul>
        )
    }
}
export default NavBarComponent;
