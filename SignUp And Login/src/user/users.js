import  React, {Component}  from 'react';
import User from './user';

// class Users extends Component{
//     render(){
//     return(
//         <div>
//           <h1>Funnal</h1>
//        <User age = "20">john</User>
//        <User></User>
//        <User age = "40">steven</User>
//         </div>
//         )
// }
// }

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
  // this.setState({
  //   users: [
  //     {name: "john", age:30},
  //     {name: "Davits", age:30},
  //     {name: "stevens", age:30},

  //   ]
  // })

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

// class Users extends Component{
  render(){
    return(<div>
      <button onClick = {this.clickMe}>Click Me</button>
      <br/>
      <h1>{this.state.title}</h1>
      <User
      user={this.state.users}
      />
      {/* <User age={this.state.users[1].age}>{this.state.users[1].name}</User> */}
      {/* <User age={this.state.users[2].age}>{this.state.users[2].name}</User> */}
      </div>)
  }
}


  
export default Users;