import React from 'react';
import {setAuthData} from '../../Redux/Auth_Reducer.js';
import authReducer from '../../Redux/Auth_Reducer.js';
import {connect} from   'react-redux';
import {register} from '../../Redux/Auth_Reducer.js'
import Register from './register.js';

let mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    password:state.auth.password,
    id:state.auth.id,
    message:state.auth.message
  }
}

const RegisterContainer =  connect(mapStateToProps, {register})(Register);
export default RegisterContainer;
