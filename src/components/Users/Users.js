import React from 'react';
import us from './Users.module.css';
import Paginator from '../../Utils/Paginator/Paginator.js';
const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.page);
    let pages = [];
    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i);
    }
     return (
        <div>
        <div>
        <Paginator
               users={props.users}
               page={props.page}
               pageCount={props.pageCount}
               totalUsersCount={props.totalUsersCount}
               getUsers = {props.getUsers} />
        </div>
    </div>
  )
}

export default Users;
