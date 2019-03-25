import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, ButtonToolbar, Modal, ButtonGroup } from 'react-bootstrap';
import Swal from "sweetalert2"



class CenteredModal extends Component {
  
  sweetalert() {
    const props = this.props
  
    const { ModalRight,modalShow } = this.props
    console.log(ModalRight)
    console.log('button clicked')
    Swal({
      position: 'top-center',
      type: modalShow?"success":"error",
      // eslint-disable-next-line no-dupe-keys
      type: modalShow?"error":null,
      title: 'Login Success',
      showConfirmButton: false,
      timer: 1500
    },modalShow?this.props.history.push('/home'):null)

    
    
  }
  render() {
    console.log(this.props.history)
    const { modalShow } = this.props
    console.log(modalShow)
    return (
      <div className="createAccount">
        {
          modalShow ? this.sweetalert() :
            null
        }
        <button variant="primary" // onClick={this.sweetalert}
          type="submit">Login
    </button>
      </div>
    );
  }
}
export default CenteredModal
