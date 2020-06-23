import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav'
import Game from './components/game';
import Home from './components/home';
import { Route } from "react-router-dom"; 
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav/>
        <Route exact path='/' component={Home} />
        <Route path='/game' component={Game} />
      <Footer/>
      </div>
    );
  }
}

export default App;