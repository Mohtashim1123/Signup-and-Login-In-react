import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Modal from './modal'
import Swal from "sweetalert2"
import alertify from 'alertifyjs'


const emailRegExp = RegExp(/^[a-zA-Z0-9.!#$%&`*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const formValid = formError => {
  let valid = true;
  Object.values(formError).forEach(val => {
    val.length > 0 && (valid = false)
  });
  return valid;
}

class Login extends Component {
  constructor(props) {
    super(props);
    // this.sweetalert = this.sweetalert.bind(this)
    this.state = {
      email: '',
      // sweetalert: false,
      modalShow: false,
      ModalError: '',
      ModalRight: false,
      password: '',
      formError: {
        email: "",
        password: ""
      }
    }
  }

 

  handleChange = e => {
   
    const { name, value } = e.target
    let formError = this.state.formError;
    this.setState({ [name]: value });
    console.log(e.target.name)
    console.log(e.target.value)
    switch (name) {
      case "email":
        formError.email = emailRegExp.test(value) ? '' : 'Invalid email address';
        break;
      case "password":
        formError.password = value.length < 3 ? "minimum 3 character required" : "";
        break;
      default:
        break;
    }
    this.setState({ formError, [name]: value }, () => console.log(this.state))
  }

  handleSubmit = e => {
    e.preventDefault();
    let result = JSON.parse(localStorage.getItem('SignUp'))
    console.log(this.state.email)
    console.log(result.email)
    if (result.email === this.state.email && result.password === this.state.password) {
      
      alertify.set('notifier','position', 'bottom-left');
 alertify.success('Current position : ' + alertify.get('notifier','position'));
      setTimeout(() => {
        // this.props.history.push('/home')
      }, 2000);


      // this.setState({ ModalRight: true });
      // this.setState({ modalShow: true });
    
      // setTimeout(() => {
      //   props.history.push('/home')
      // }, 2000);
      // this.setState({sweetalert:true})
            //  props.history.push('/home')
    }
    else {
      console.error('invalid')
      this.setState({ ModalRight: 'error' })
      this.setState({ modalShow: true });
    }
  };

  render() {
    // let modalClose = () => this.setState({ modalShow: false });
    return (<div className="wrapper">
      <div className="form-wrapper">
        <h1>Login</h1>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit} noValidate>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={this.state.email}
              placeholder="Email"
              name="email"
              noValidate
            ></input>
          </div>

          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              noValidate
            ></input>
          </div>
          <Modal
          modalShow={this.state.modalShow}
          ModalRight = {this.state.ModalRight}
          history={this.props.history}
          />
        </form>
      </div>
    </div>)
  }
}

export default Login