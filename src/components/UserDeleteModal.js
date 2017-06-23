import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class UserDeleteModal extends React.Component {

  hideDeleteModal(event) {
    this.props.dispatch({
      type: 'HIDE_DELETE_MODAL'
    });
  }

  deleteUser(event) {
    //Delete the user
    this.props.dispatch({
      type: 'DELETE_USER',
      id: this.props.delete_modal.id
    });
    //and hides the modal
    this.props.dispatch({
      type: 'HIDE_DELETE_MODAL'
    });
  }

  render() {
    return(
      <Modal show={ this.props.delete_modal.show }>
        <Modal.Header>
          <Modal.Title>
            Are you sure, you want to delete <strong>{ this.props.delete_modal.name }</strong>?
          </Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button onClick={ this.hideDeleteModal.bind(this) }>No</Button>
          <Button bsStyle="primary" onClick={ this.deleteUser.bind(this) }>Yes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

function mapStateToProps (state) {
  let delete_modal;
  if(state.users.modal && state.users.modal.delete_list){
    delete_modal = state.users.modal.delete_list;
  }
  else{
    delete_modal = {
      show: false,
      id: 0,
      name: ''
    };
  }

  return {
      delete_modal: delete_modal
  }
}

export default connect(mapStateToProps)(UserDeleteModal);
