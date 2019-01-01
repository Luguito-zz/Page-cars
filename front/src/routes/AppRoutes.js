import React, { Component } from 'react';
import { Switch, Route,BrowserRouter  } from 'react-router-dom';
//Component
import Cars from '../components/Cars';
import  AddCars from '../components/AddCars';
import Home from '../components/Home';

class AppRoutes extends Component{
    render(){
        return(
            <BrowserRouter>
               <Switch>
                   <Route exact path="/cars"  component={Cars}/>
                   <Route exact path="/addcars" component={AddCars} />
                   <Route exact path="/" component={Home} />
                </Switch>
            </BrowserRouter>    
        )
    }
}

export default AppRoutes;