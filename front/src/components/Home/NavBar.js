import React, {Component} from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import '../../css/Header.css'

class NavBarH extends Component{
    render(){
        return( 
  <Navbar inverse collapseOnSelect>
    <Navbar.Collapse>
        <Nav>
            <NavItem eventKey={1} href="/">
                Home
            </NavItem>
        </Nav>
        <Nav pullRight>
        <NavItem eventKey={1} href='/cars'>
            Cars
        </NavItem>
        <NavItem eventKey={2} href="/addcars">
            Add Cars
        </NavItem>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
        )
    }
}

export default NavBarH;