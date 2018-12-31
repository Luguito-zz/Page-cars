import React ,{Component} from 'react';
import DeletedButton from './DeletedCar';
import ferrari from '../images/ferrari.jpg';

class DisplayCarsInCard extends Component{
    render(){ console.log(this.props.Car);
        const {Car} = this.props;
        return(
                <div className="col s4 ">
                    <div className="card">
                        <div className="card-image">
                            <img src={ferrari} alt=""/>
                            <DeletedButton CarId={Car.id}/>
                        </div>
                        <div className="card-content">
                            <span className="card-title">{Car.name}</span>
                            <p><span>Price</span> {Car.price}</p>
                            <p><span>Models</span> {Car.models.name}</p> 
                        </div>
                        <div className="card-action">
                            <a href="#">Testing</a>
                            <a href="#">You</a>
                        </div>
                    </div>
                </div>
        )
    }
}

export default DisplayCarsInCard;