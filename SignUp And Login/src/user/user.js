import React, { Component } from 'react'

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
        </div>
    )

}
export default User