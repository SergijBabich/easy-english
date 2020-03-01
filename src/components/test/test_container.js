import React from 'react';
import {BrowserRouter, Route} from  'react-router-dom';
import {connect} from   'react-redux';
import authReducer from "../../Redux/Auth_Reducer";
import Test from './test.js';


let mapStateToProps = (state) => {
  return {
    id:state.auth.id

  }
}

 let TestContainer =  connect(mapStateToProps)(Test);
export default TestContainer;
