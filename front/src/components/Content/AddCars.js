import React, { Component } from 'react';
import {graphql,compose} from 'react-apollo';
import { getCars, addCarsMutation,getModel } from '../../queries/queries';
import NavBarH from '../Home/NavBar';

class AddCars extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            price:'' ,
            model:'',

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
            model:this.state.model
        },
        refetchQueries:[{query:getCars}]
    })
}

 
render() {
    return (
<div className="addcarflexbox">
    <NavBarH/>
 <div className="container">
    <div className="row">
        <form className="col s12" onSubmit={this.submitForm.bind(this)}>
            <div className="row">
                <div className="container center align">
                <div className="input-field col s12">
                    <input id="name" type="text" className="validate" onChange={(e)=>this.setState({name:e.target.value})}/>
                    <label htmlFor="name">Name</label>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="container center align">
                <div className="input-field col s12">
                    <input id="price" type="text" className="validate" onChange={(e)=>this.setState({price:e.target.value})}/>
                    <label htmlFor="price">Price</label>
                </div>
                </div>
            </div>
            <div className="row">
            <div className="container center align">
                <div className="input-field col s12" onChange={(e)=>this.setState({model:e.target.value})}>
                    <select id="models">
                        <option>Choose your option</option>
                        {this.displayModels()}
                    </select>
                    <label htmlFor="models">Select a Model</label>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="container center align">
                <div className="col s12">
                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                    </button>
                </div>
                </div>
           </div>
        </form>
    </div>   
 </div>
</div>
    );
  }
}

export default compose(

    graphql(getModel,{name:"getModel"}),
    graphql(addCarsMutation,{name:"addCarsMutation"})

)(AddCars)