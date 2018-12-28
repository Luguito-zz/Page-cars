import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {ProgressBar} from 'react-bootstrap';

//Components
import NavBarH from './components/NavBar';
import Header from './components/Jumbotron';
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
      <div className="App">
        <NavBarH/>
        <Header/>
        <center><ProgressBar active now={20} bsStyle="warning"/>Pagina en Construccion</center>
        <AppRoutes/>
      </div>
    </ApolloProvider>
    
    );
  }
}

export default App;
