import React, { Component } from 'react';
import { Switch, Route,BrowserRouter  } from 'react-router-dom';
//Component
import Cars from '../components/Content/Cars';
import AddCars from '../components/Content/AddCars';
import Home from '../components/Home/Home';


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