import React ,{Component} from 'react';
import {ProgressBar} from 'react-bootstrap';
import Header from './Jumbotron';
import '../../css/Home.css'

class Home extends Component{
render(){
        return(
        <div className="xd">
            <Header/> 
            <center><ProgressBar active now={60} bsStyle="warning"/>Pagina en Construccion</center>
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Adipisci, placeat. Eos inventore, qui aliquam iure eveniet ea non sunt praesentium,
                        saepe maxime laudantium laborum consequuntur provident accusantium officiis nemo nesciunt?</p>
                    </div>
                </div>
            </div>
            <div className="Alfa-Romeo">
                <div className="center-align">
                    <div className="container">
                        <h1>Alfa Romeo</h1>
                    </div>
                    <a href="/cars"><button className="btn small">Cars</button></a> 
                </div>
            </div>
            <div className="Audi">
            <div className="center-align">
                    <div className="container">
                        <h1>Audi</h1>
                    </div>
                    <a href="/cars"><button className="btn small">Cars</button></a> 
                </div>
            </div>
            <div className="Ferrari">
            <div className="center-align">
                    <div className="container">
                        <h1>Ferrari</h1>
                    </div>
                    <a href="/cars"><button className="btn small">Cars</button></a> 
                </div>
            </div>
        </div>
        )
    }
}

export default Home