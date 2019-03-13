import React, { Component, Fragment } from 'react';
import './App.css';


// function formatDate(date) {
//     return date.toLocaleDateString();
// }

// function comment(props) {
//     return (
//         <Fragment>
//             <div className="Comment">
//                 <div className="UserInfo">
//                     <img className="logo"
//                         src={props.author.avatarUrl}
//                         alt={props.author.name}
//                     />
//                     <div className="UserInfo-name">
//                         {props.author.name}
//                     </div>
//                 </div>
//                 <div className="Comment-text">
//                     {props.text}
//                 </div>
//                 <div className="comment-date">
//                     {formatDate(props.date)}
//                 </div>
//             </div>
//         </Fragment>
//     )
// }

// const comment = {
//     date: new Date(),
//     text: 'wellcome to React',
//     author: {
//         name: 'hello kitty',
//         avatarUrl: 'https://placekitten.com/g/64/64',

//     }
// }
//   class Render extends Component{
//       render(){
//           return(
//               <div className
//           )
//       }
//   }
class Child extends Component {
    constructor() {
        super();
        console.log('construtor')
    }

    componentWillMount() {
        console.log('child componentWillMount');
    }
    componentDidMount() {
        console.log('Child componentDidMount')
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Child shouldComponentUpdate')
        return false;
    }
    componentWillReceiveProps() {
        console.log('Child componentWillReceiveProps')
    }

    render() {
        console.log('child render')
        return (
            <div className="App">
                child Name:{this.props.name}
            </div>
        )
    }
}

export default Child;