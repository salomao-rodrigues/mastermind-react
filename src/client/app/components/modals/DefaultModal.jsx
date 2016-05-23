import React from 'react';
import Modal from 'react-modal';

class DefaultModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modalIsOpen: true };
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <Modal
        className={this.props.className}
        overlayClassName={this.props.overlayClassName}
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal.bind(this)}>

        <h2>{this.props.message}</h2>
      </Modal>
    );
  }
}

export default DefaultModal;
