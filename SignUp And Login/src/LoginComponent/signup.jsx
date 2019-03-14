import React, { Component } from "react";


const emailRegExp = RegExp(/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
)

const formValid = formError => {
  let valid = true;

  Object.values(formError).forEach(val =>{
    val.length > 0 && (valid = false)});
  return valid;
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      firstNames: '',
      formError: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    }
  }
  handleChange = e => {
    const { name, value } = e.target
    let { firstName, lastName, email, password } = this.state.formError;
    let formError  = this.state.formError;
    this.setState({ [name]: value });
    console.log(e.target.name)
    console.log(e.target.value)
    // if (value.length < 3 && name !== "email")
    //   this.setState({ formError: { ...this.state.formError, [name]: "minimum 3 character required" } })
    // else {
    //   email = emailRegExp.test(value) && value.length < 3 ? '' : 'Invalid email address';
    //   this.setState({ formError: { ...this.state.formError, [name]: email } })
    // }

    switch (name) {
      case "firstName":
      this.setState({formError:value.length < 3 ? "minimum 3 character required" : ""})
        break;

      case "lastName":
        lastName = value.length < 3 ? "minimum 3 character required" : "";
        break;

      case "email":
        email = emailRegExp.test(value) && value.length < 3 ? '' : 'Invalid email address';
        break;

      case "password":
        password = value.length < 3 ? "minimum 3 character required" : "";
        break;

      default:
    }

    this.setState({formError, [name]: value }, () => console.log(this.state))
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state.formError)) {
      console.log(`
firstName:${this.state.firstName}
lastName:${this.state.lastName}
Email:${this.state.email}
password:${this.state.password}
`)
    } else {
      console.error('form-invalid')
    }
  };

  render() {
    return (<div className="wrapper">
      <div className="form-wrapper">
        <h1>Sign Up</h1>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit} noValidate>
          <div className="firstName">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              className=""
              placeholder="First Name"
              name="firstName"
              value={this.state.firstName}
              noValidate

            ></input>
          </div>

          <div className="lastName">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className=""
              placeholder="Last Name"
              value={this.state.lastName}
              name="lastName"
              noValidate

            ></input>
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className=""
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
              className=""
              placeholder="Password"
              name="password"
              value={this.state.password}
              noValidate

            ></input>
          </div>
          <div className="createAccount">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>)
  }

}

export default App;