import React from 'react';
import nav from './nav_style/nav.module.css';
import {NavLink} from 'react-router-dom';

const Nav = (props) => {
  return (
    <div class={nav.sidebar__content}>
      <div class={nav.sidebar__wrapper}>
        <nav class={nav.sidebar__nav__items}>
          <div class={nav.items}>
            <NavLink to={!props.authData? `/profile/`: `/profile/${props.authData._id}`} activeClassName={nav.activeLink}>  Profile </NavLink>
          </div>
          <div class={nav.items}>
            <NavLink to='/test' activeClassName={nav.activeLink}>  Test </NavLink>
          </div>
          <div class={nav.items}>
              <NavLink to='/users' activeClassName={nav.activeLink}>  Users </NavLink>
          </div>
          <div class={nav.items}>
            <NavLink to='/settings' activeClassName={nav.activeLink}>  Settings </NavLink>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Nav;
