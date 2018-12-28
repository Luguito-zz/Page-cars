import React, {Component} from 'react';


import {Button,Jumbotron} from 'react-bootstrap';

class Header extends Component{
    render(){
        return( 
        <Jumbotron >
            <center>
                <h1>Welcome</h1>
                <p>
                This page is built with React, Graphql and Bootstrap. <br/> Of course it is in progress
                </p>
                <p>
                    <Button bsStyle="primary" href="https://github.com/Luguito/Page-cars">Learn more</Button>
                </p>
            </center>
        </Jumbotron>
        )
    }
}

export default Header;