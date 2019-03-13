import React, { Component } from 'react';
import Child from './Child'

const parent = (props)=>{
    console.dir(props)
    return(
        <div>
<Child {...props}/>
        </div>
    
    )
}

export default parent
