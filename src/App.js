import React, { Component } from 'react';
import NavBar from './nav-bar';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' Component='Welcome'/>
        </Switch>
      </div>
    );
  }
}

export default App;
