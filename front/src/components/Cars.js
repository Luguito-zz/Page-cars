import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {getCars} from '../queries/queries';
import '../css/car.css'
import {Row,Col,Grid} from 'react-bootstrap';


class Cars extends Component{
    displayCars(){
        const data = this.props.data;
       if(data.loading){
        return (<div>loading</div>)
       }else{
        return data.cars.map(car=>{
            return(
            <Grid key={car.id}>
                <Row className="show-grid" >
                    <Col sm={6} md={3}>
                        <h1>{car.name}</h1>
                        <br/>
                        <p>{car.price}</p>
                        <p>{car.models.name}</p>
                    </Col>
                </Row>
            </Grid>
            )
        })
       }
    }
    render(){
        console.log(this.props.data)
        return(
        <div className="Cars">
              {this.displayCars()}
        </div>
        );
    }
}

export default graphql(getCars)(Cars);