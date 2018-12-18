import React, {Component} from 'react';
import logo from '../images/logo.svg';
import '../css/Header.css';

class Header extends Component{
    render(){
        return( 
            <div className="Header">
                <img src={logo} className="App-logo" alt="logo" />
                    <ul>
                        <li>Home</li>
                        <li>Find Car</li>
                        <li>About us</li>
                        <li>Contact</li>
                    </ul>
            </div>
        )
    }
}

export default Header;