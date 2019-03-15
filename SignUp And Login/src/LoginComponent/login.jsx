import React, { Component } from 'react'

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
    this.state = {
      email: '',
      password: '',
      formError: {
        email: "",
        password: ""
      }
    }
  }
  handleChange = e => {
    const { name, value } = e.target
    // let { firstName, lastName, email, password } = this.state.formError;
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
    
    if (formValid(this.state.formError)) {
      let result = JSON.parse(localStorage.getItem('SignUp'))
      console.log(result)
      console.log(`
Email:${this.state.email}
password:${this.state.password}
`


)
    } else {
      console.error('form-invalid')
    }
  };
    render() {
        return (<div className="wrapper">
            <div className="form-wrapper">
                <h1>Login</h1>
                <form onChange={this.handleChange} onSubmit={this.handleSubmit} noValidate>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            // className={formError.email.length > 0 ? "error" : null}
                            // value={this.state.email}
                            placeholder="Email"
                            name="email"
                            noValidate
                        ></input>
                        {/* {formError.email.length>0 &&(
                <span className="errorMessage">{formError.email}</span> */}

                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            // className={formError.password.length > 0 ? "error" : null}
                            placeholder="Password"
                            name="password"
                            // value={this.state.password}
                            noValidate
                        ></input>
                        {/* {formError.password.length>0 &&(
                <span className="errorMessage">{formError.password}</span> */}
                    </div>
                    <div className="createAccount">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>)
    }
}

export default Login