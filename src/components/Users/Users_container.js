import React from 'react';
import {connect} from   'react-redux';
import usersReducer from '../../Redux/Users_Reducer.js';
import {getUsers} from '../../Redux/Users_Reducer.js';
import {setCurrentPage} from '../../Redux/Users_Reducer.js';
import {setCurrentPageNumber}  from '../../Redux/Users_Reducer.js'; 
import Users from './Users.js';


class UsersAPIComponent extends React.Component  {

  componentDidMount(){
      setCurrentPageNumber(this.props.pageCount ,this.props.page);
     this.props.getUsers(this.props.pageCount ,this.props.page);
  }
  render() {
    console.log(this.props);
  return (
      <>
      <Users users={this.props.users}
             page={this.props.page}
             pageCount={this.props.pageCount}
             totalUsersCount={this.props.totalUsersCount}
             getUsers = {this.props.getUsers}
                        />
      </>
  )
}
}

let mapStateToProps = (state) => {
  console.log(state);
  return {
    users: state.users.users,
    page:state.users.page,
    pageCount: state.users.pageCount,
    totalUsersCount:state.users.totalUsersCount
  }
}

const UsersContainer = connect (mapStateToProps, {getUsers})(UsersAPIComponent);
export default UsersContainer;
