import React, { Component } from 'react';
import { Button,ButtonToolbar,Modal,ButtonGroup } from 'react-bootstrap';


class CenteredModal extends Component {
  render() {
    return (
        <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h4 className="center">{this.props.ModalError}</h4>
        </Modal.Body>
      </Modal>
    );
  }
}

export default CenteredModal