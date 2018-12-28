import React, {Component} from 'react';
import logo from '../images/logo.svg';


import {Navbar,Nav,NavItem} from 'react-bootstrap';

class NavBarH extends Component{
    render(){
        return( 
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar.Toggle />
        </Navbar.Header>
    <Navbar.Collapse>
        <Nav>
            <NavItem eventKey={1} href="/cars">
                Cars
            </NavItem>
            <NavItem eventKey={2}>
                
            </NavItem>
        </Nav>
        <Nav pullRight>
        <NavItem eventKey={1} href='/addcars'>
            Add Cars
        </NavItem>
        <NavItem eventKey={2} href="/cars">
            Cars
        </NavItem>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
        )
    }
}

export default NavBarH;