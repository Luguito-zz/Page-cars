import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {getCars} from '../queries/queries';
import '../css/car.css'


class Cars extends Component{
    displayCars(){
        const data = this.props.data;
       if(data.loading){
        return (<div>loading</div>)
       }else{
        return data.cars.map(car=>{
            return(
                <div key={car.id}>
                    <ul>
                        <li>{car.name} <ul>
                            <li>{car.price}</li>
                            <li>{car.models.name}</li>
                            </ul>
                         </li>
                    </ul>
                </div>
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