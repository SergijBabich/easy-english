import React from 'react';
import authReducer from '../../Redux/Auth_Reducer.js';
import {connect} from   'react-redux';
import Nav from './nav.js';

let mapStateToProps = (state) => {
  return {
   authData:state.auth.authData
  }
}

const NavContainer =  connect(mapStateToProps)(Nav);
export default NavContainer;
