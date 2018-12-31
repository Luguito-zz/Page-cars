import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {ProgressBar} from 'react-bootstrap';
import 'materialize-css';
import './css/App.css'
//Components
import NavBarH from './components/NavBar';
import Header from './components/Jumbotron';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer';
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
        <NavBarH/>
        <Header/>
        <center><ProgressBar active now={40} bsStyle="warning"/>Pagina en Construccion</center>
        <AppRoutes/>
        <Footer/>
      </div>
    </ApolloProvider>
    
    );
  }
}

export default App;
