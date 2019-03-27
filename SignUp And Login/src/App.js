import React, { Component } from 'react';
// import logo from './logo.svg';
// import Users from '../src/user/users';
// import User from '../src/user/user'
// import Child from './components/parentToChild/Child';
// import Parent from './components/parentToChild/parent';
// import User from './component/user'
// import Child from './Child'
import './App.css';
// import Route from 'react-router-dom/Route';
import { BrowserRouter as Router,Route } from 'react-router-dom';
// import uniqueId from 'react-html-id';
import Login from './LoginComponent/login'
import Signup from './LoginComponent/signup'
import Home from './LoginComponent/home';


class App extends Component {
  render() {
    return (
      <div>
        {/* <Modal/> */}
        
       <Router >
         <div>
           {/* <h1>hello</h1> */}
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