import React from 'react';
import {BrowserRouter, Route} from  'react-router-dom';
import {connect} from   'react-redux';
import settings from './settings.js'
import authReducer from "../../Redux/Auth_Reducer";
import {logOut} from  '../../Redux/Auth_Reducer.js';
import Settings from './settings.js';


let mapStateToProps = (state) => {
  return {
    id:state.auth.id

  }
}

 let SettingsContainer =  connect(mapStateToProps, {logOut})(Settings);
export default SettingsContainer;
