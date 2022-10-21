import React from 'react';

const child = (props) => {
    console.dir(props)
return(
    <div>
        <h1>kjkd</h1>
        <button style={{fontSize:'13px'}} onClick={props.doWhatEver}>{props.title}</button>
    </div>
)
}

export default child;