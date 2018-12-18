import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

//Components
import Cars from './components/Cars';
import Header from './components/Header';
import AddCars from './components/AddCars';

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
        <Header/>
        <center>Graphql Api's Luguito CARS</center>
        <Cars/>
        <AddCars/>
      </div>
    </ApolloProvider>
    );
  }
}

export default App;
