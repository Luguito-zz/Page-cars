import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {ProgressBar} from 'react-bootstrap';
//Components
import Cars from './components/Cars';
import NavBarH from './components/NavBar';
import AddCars from './components/AddCars';
import Header from './components/Jumbotron';

//Apollo Setup
const client = new ApolloClient({
  uri:'http://localhost:4000/graphql'
})

//===============
class App extends Component {
  render() {
    return (
    <ApolloProvider client={client}>
      <div className="App">
        <NavBarH/>
        <Header/>
        <center><ProgressBar active now={20} bsStyle="warning"/>Pagina en Construccion</center>
        <Cars/>
        <AddCars/>
      </div>
    </ApolloProvider>
    );
  }
}

export default App;
