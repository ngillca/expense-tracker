import React, { Component } from "react";
import Modal from './Modal'
class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <div onClick={this.showModal}>
            details
   
        </div>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>static details</p>
        </Modal>
        {/* <button type="button" onClick={this.showModal}>
          Open
        </button> */}
      </div>
    );
  }
}

export default Dashboard