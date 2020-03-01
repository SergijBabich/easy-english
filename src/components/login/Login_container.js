import React from 'react';
import {setAuthData} from '../../Redux/Auth_Reducer.js';
import authReducer from '../../Redux/Auth_Reducer.js';
import {connect} from   'react-redux';
import {login} from '../../Redux/Auth_Reducer.js'
import Login from './login.js';

let mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    password:state.auth.password,
    id:state.auth.id,
    message:state.auth.message
  }
}

const LoginContainer =  connect(mapStateToProps, {login})(Login);
export default LoginContainer;
