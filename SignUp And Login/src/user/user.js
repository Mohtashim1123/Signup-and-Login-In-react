import React, { Component } from 'react'

// const User = (props) =>{
//     let  age  = props.age ? props.age : 'NA';
//     if(props.children){
//         return (<div>Name: {props.children} | Age: {age}</div>)
//     }else{
//         return<div>Invaild Entry</div>
//     }
//     }

const User = (props) => {
    return (
        <div>
            {
                props.user && props.user.map((d) => {
                    return (
                        <div>
                          Name:  {d.name}<br/>
                          Age:   {d.age}
                        </div>
                    )
                })
            }
            {/* < div > Name: {props.children} Age: {props.age}</div > */}
        </div>
    )

}
export default User