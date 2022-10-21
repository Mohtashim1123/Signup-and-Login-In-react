import  React, {Component}  from 'react';
import User from './user';

class Users extends Component{
  state ={
    users: [
      {name: "john", age:20},
      {name: "Davit", age:20},
      {name: "steven", age:20},

    ],
    title: "Users List"
  };
// }
clickMe = () => {

  const newState = this.state.users.map((user) => {
    const tempUser = user;
    tempUser.age -=10;
    return tempUser;
  })
  this.setState({
    newState
  });
  console.log(this.state.users)
}

  render(){
    return(<div>
      <button onClick = {this.clickMe}>Click Me</button>
      <br/>
      <h1>{this.state.title}</h1>
      <User
      user={this.state.users}
      />
      </div>)
  }
}


  
export default Users;