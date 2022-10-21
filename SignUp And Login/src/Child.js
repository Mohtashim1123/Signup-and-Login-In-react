import React, { Component, Fragment } from 'react';
import './App.css';

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