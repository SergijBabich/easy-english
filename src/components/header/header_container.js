import React from 'react';
import {BrowserRouter, Route} from  'react-router-dom';
import {connect} from   'react-redux';
import authReducer from "../../Redux/Auth_Reducer";
import {logOut} from  '../../Redux/Auth_Reducer.js';
import Header from './header.js';


let mapStateToProps = (state) => {
  return {
    id:state.auth.id

  }
}

 let HeaderContainer =  connect(mapStateToProps, {logOut})(Header);
export default HeaderContainer;
