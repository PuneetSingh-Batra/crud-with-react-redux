import React from 'react';
import { Table, Pagination } from 'react-bootstrap';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import UserListItem from './UserListItem';
import UserDeleteModal from './UserDeleteModal';

class UserList extends React.Component {
  changePage(page) {
    this.props.dispatch(push('/?page=' + page));
  }

  render() {
    const per_page = 10;
    const pages = Math.ceil(this.props.users.length / per_page);
    const current_page = this.props.page;
    const start_offset = (current_page - 1) * per_page;
    let start_count = 0;

    const userListItems = this.props.users.map((user, index) => {
      if(index >= start_offset && start_count < per_page){
        start_count++;
        return(
          <UserListItem user={ user } key={ user.id } />
        );
      }
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

        <Pagination className="users-pagination pull-right" bsSize="medium"
          maxButtons={ 10 } first last next prev boundaryLinks
          items={ pages } activePage={ current_page } onSelect={ this.changePage.bind(this) } />

        <UserDeleteModal />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return({
    users: state.users.list,
    page: Number(state.routing.locationBeforeTransitions.query.page) || 1
  });
}

export default connect(mapStateToProps)(UserList);
