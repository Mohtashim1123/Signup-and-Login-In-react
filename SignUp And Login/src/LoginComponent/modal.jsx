import React, { Component } from 'react';
import { Button,ButtonToolbar,Modal,ButtonGroup } from 'react-bootstrap';
import Swal from "sweetalert2"



class CenteredModal extends Component {
  sweetalert() {
    console.log('button clicked')
   Swal('Login Success','You clicked the button!','success')
  }
  render() {
    const {modalShow} = this.props
    console.log(modalShow)
    return (
      <div className="createAccount">
      {
      modalShow?this.sweetalert():
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
