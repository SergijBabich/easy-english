import descReducer from '../../Redux/Desc_Reducer.js';
import History from './history.js';
import React from 'react';
import {connect} from   'react-redux';
let mapStateToprops = (state) => {
  return {
      descriptionPicture:state.description.myAnswer
  }
}
const HistoryContainer = connect(mapStateToprops)(History);
export default HistoryContainer;
