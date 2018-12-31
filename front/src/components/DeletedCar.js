import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {deletedCar, getCars} from '../queries/queries';
import { graphql ,compose } from 'react-apollo';


class DeletedButton extends Component{
    constructor(props){
        super(props);
        this.state={
            id:'',
        }
        this.deleteButton.bind(this);
    }
    deleteButton(e){
        e.preventDefault();
        this.props.deletedCar({
            variables:{
                id:this.props.CarId
            },
            refetchQueries:[{query:getCars}]
        })
    }

    render(){
        return(
            <div>
            <Button className="halfway-fab btn-floating pink pulse"  onClick={(e)=>
                window.confirm("Are you sure you wish to delete this item?") &&
                this.deleteButton(e)}><i className="material-icons">cancel</i></Button>
            </div>
        )
    }
}

export default compose(
    graphql(deletedCar,{name:"deletedCar"}),
    graphql(getCars,{name:"getCars"}),
)(DeletedButton)