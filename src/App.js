import React, { Component } from 'react';
import './style/App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'


class App extends Component {

  render() {

    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
          <Route exact path="/signup" component={ Signup }/>
          <Route exact path="/login" component={ Login }/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
