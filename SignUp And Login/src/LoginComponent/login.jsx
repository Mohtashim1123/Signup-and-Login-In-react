import React, { Component } from 'react'

class Login extends Component {
    render(){
        return(
            <div className="parent">
            <div className = "Child">
             <h1 className="Login">Login</h1>
            <div className="inputLogin">
            
            <p>Email: </p><input type = "text" placeholder/>
            </div>
            <p className="Error"></p>
            <div className="inputLogin">
            <p>Password: </p><hr/><input type = "password" placeholder/>
            </div>
            <p className="Error"></p>
            <button className= "ButtonLogin">Submit</button>
            </div>
        </div>
        )
    }
}

export default Login