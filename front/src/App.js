import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import 'materialize-css';

//Components


import AppRoutes from './routes/AppRoutes';

//Apollo Setup
const client = new ApolloClient({
  uri:'http://localhost:4000/graphql'
})

//===============
class App extends Component {
  render() {
    return (
    <ApolloProvider client={client}>
      <div className="app">
        <AppRoutes/>
      </div>
    </ApolloProvider>
    
    );
  }
}

export default App;
