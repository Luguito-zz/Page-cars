import React ,{Component} from 'react';
import {ProgressBar} from 'react-bootstrap';
import Header from './Jumbotron';

class Home extends Component{
render(){
        return(
        <div>
            <Header/>
            <div className="container">
            <center><ProgressBar active now={40} bsStyle="warning"/>Pagina en Construccion</center>
                <div className="row">
                    <div className="col s12">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Adipisci, placeat. Eos inventore, qui aliquam iure eveniet ea non sunt praesentium,
                        saepe maxime laudantium laborum consequuntur provident accusantium officiis nemo nesciunt?</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Home