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
            <NavItem eventKey={1} href="#">
                Link
            </NavItem>
            <NavItem eventKey={2} href="#">
                Link
            </NavItem>
        </Nav>
        <Nav pullRight>
        <NavItem eventKey={1} href='./AddCars.js'>
            Add Cars
        </NavItem>
        <NavItem eventKey={2} href="#">
            Link Right
        </NavItem>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
        )
    }
}

export default NavBarH;