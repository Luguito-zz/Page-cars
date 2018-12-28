import React, { Component } from 'react';
import {graphql,compose} from 'react-apollo';
import { getCars, addCarsMutation,getModel } from '../queries/queries';
import {Button,Form,FormGroup,Col,FormControl,ControlLabel} from 'react-bootstrap';


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
    <div>
        <Form horizontal onSubmit={this.submitForm.bind(this)} className="Form">
            <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={5}>
                Name
                </Col>
                <Col sm={3}>
                    <FormControl type="text" onChange={(e)=>this.setState({name:e.target.value})} />
                </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={5}>
                Price
                </Col>
                <Col sm={3}>
                    <FormControl type="text" onChange={(e)=>this.setState({price:e.target.value})} />
                </Col>
            </FormGroup>

            <FormGroup>
                <Col componentClass={ControlLabel} sm={5}>
                    Model
                </Col>
                <Col sm={5}>
                    <select onChange={(e)=> this.setState({model:e.target.value})}>
                        <option>Select Model</option>
                        {this.displayModels()}
                    </select>
                </Col>
            </FormGroup>

            <FormGroup>
                <Col smOffset={5} sm={10}>
                <Button type="submit" bsStyle="primary">Add Cars</Button>
                </Col>
            </FormGroup>
        </Form>
    </div>



      
    );
  }
}

export default compose(

    graphql(getModel,{name:"getModel"}),
    graphql(addCarsMutation,{name:"addCarsMutation"})

)(AddCars)