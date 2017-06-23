import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';

class UserListItem extends React.Component {

  showDeleteModal(event) {
    const user_id = Number(event.target.dataset.id);
    const name = event.target.dataset.name;
    this.props.dispatch({
      type: 'SHOW_DELETE_MODAL',
      id: user_id,
      name: name
    });
  }

  render() {
    const user = this.props.user;
    return(
      <tr key={ user.id }>
        <td># { user.id }</td>
        <td>{ user.name }</td>
        <td>{ user.job }</td>
        <td>
          <a href={ "/user-edit/" + user.id }>
            <Button bsSize="xsmall">
              Edit <Glyphicon glyph="edit" />
            </Button>
          </a>
          </td>
        <td>
          <Button data-id={ user.id } data-name={ user.name } onClick={ this.showDeleteModal.bind(this) }>
            Delete <Glyphicon glyph="remove-circle" />
          </Button>
        </td>
      </tr>
    );
  }
}

UserListItem.PropTypes = {
  user: React.PropTypes.object.isRequired
};

export default connect()(UserListItem);
