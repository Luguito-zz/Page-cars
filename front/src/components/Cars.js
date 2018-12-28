import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {getCars} from '../queries/queries';
import '../css/car.css';
import {Row,Col,Grid,Button} from 'react-bootstrap';

//Component
import DeletedButton from '../components/DeletedCar';


class Cars extends Component{
    displayCars(){
        const data = this.props.data;
       if(data.loading){
        return (<div>loading</div>)
       }else{
        return data.cars.map(car=>{
            return(
            <Col sm={10} md={3} key={car.id} className="Cars">
            <label htmlFor=""><h2>{car.name}</h2></label><br/>
              <label>Price :</label> {car.price}<br/>
              <label>Model :</label> {car.models.name} <br/> 
               <DeletedButton CarId={car.id}/>
            </Col>
            )
        })
       }
    }
    render(){
        return(
        <div>
        <Grid >
            <Row  >
            {this.displayCars()}
            </Row>
            
        </Grid>
       <center><Button bsStyle="primary" className="ButtonMain" href="/addcars">Add Cars</Button></center>  
        </div>
        )
    }
}
export default graphql(getCars)(Cars);