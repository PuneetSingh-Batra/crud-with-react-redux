import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

import UserListItem from './UserListItem';
import UserDeleteModal from './UserDeleteModal';

class UserList extends React.Component {
  render() {

    const userListItems = this.props.users.map((user, index) => {
      return(
        <UserListItem user={ user } key={ user.id } />
      );
    });

    return(
      <div>
        <Table bordered hover responsive striped>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>Job</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            { userListItems }
          </tbody>
        </Table>

        <UserDeleteModal />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return({
    users: state.users.list
  });
}

export default connect(mapStateToProps)(UserList);
