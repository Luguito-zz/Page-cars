import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {getCars} from '../../queries/queries';
import {Button} from 'react-bootstrap';
import NavBarH from '../Home/NavBar';
//Component
import DisplayCarsInCard from './Displaycars';

class Cars extends Component{
    displayCars(){
        const data = this.props.data;
       if(data.loading){
        return (<div>loading</div>)
       }else{
        return data.cars.map(car=>{
            return(         
                <DisplayCarsInCard Car={car} key={car.id} />
            )
        })
       }
    }
    render(){
        return(
    <div>
        <NavBarH/>
        <div className="container">
        
            <div className="row">
                <h2>Cars</h2>
            {this.displayCars()}
          <div className="row">
              <div className="col s12">
                  <center>
                  <Button bsStyle="primary" className="ButtonMain" href="/addcars">Add Cars</Button>    
                  </center>
              </div>
          </div>
         </div>
         </div>
    </div>     
        )
    }
}
export default graphql(getCars)(Cars);