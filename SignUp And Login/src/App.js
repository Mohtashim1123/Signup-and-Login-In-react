import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Login from './LoginComponent/login'
import Signup from './LoginComponent/signup'
import Home from './LoginComponent/home';


class App extends Component {
  render() {
    return (
      <div>
       <Router >
         <div>
         <Route exact path='/' component={Signup} />
         <Route  path='/login' component={Login} />
         <Route  path='/home' component={Home} />
         </div>

        
       </Router>
      </div>
      
    );
  }
}

export default App;