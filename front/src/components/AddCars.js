import React, { Component } from 'react';
import {graphql,compose} from 'react-apollo';
import { getCars, addCarsMutation,getModel } from '../queries/queries';



class AddCars extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            price:"" ,
            models:"",

        }
    }
displayModels(){
    var data = this.props.getModel;
    if(data.loading){
        return(<option disabled>loading Models...</option>)
    }else{
        return data.models.map(model=>{
            return(<option key={model.id} value={model.id}>{model.name}</option>)
        })
    }
}


submitForm(e){
    e.preventDefault();
    this.props.addCarsMutation({
        variables:{
            name:this.state.name,
            price:Number(this.state.price),
            models:this.state.models
        },
        refetchQueries:[{query:getCars}]
    })
}

render() {
    console.log(this.props.getModel)
    return (
      <div>
        <form onSubmit={this.submitForm.bind(this)}>

            <div className="field">
                <label>Car Name:</label>
                <input type="text" onChange={(e)=> this.setState({name:e.target.value})}/>
            </div>

            <div className="field">
                <label>Price:</label>
                <input type="text" onChange={(e)=> this.setState({price:e.target.value})} />
            </div>

            <div className="field">
                <label>Model:</label>
                <select onChange={(e)=> this.setState({models:e.target.value})}>
                    <option>Select Model</option>
                    {this.displayModels()}
                </select>
            </div>

            <button>+</button>
        </form>
      </div>
    );
  }
}

export default compose(

    graphql(getModel,{name:"getModel"}),
    graphql(addCarsMutation,{name:"addCarsMutation"})

)(AddCars)