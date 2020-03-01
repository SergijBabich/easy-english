import descReducer from '../../Redux/Profile_Reducer.js';
import DescribePicture from './describeThePicture.js';
import {setUserAnswer} from '../../Redux/Desc_Reducer.js';
import {putUserLevel} from '../../Redux/Desc_Reducer.js';
import authReducer from '../../Redux/Auth_Reducer.js';
import profileReducer from '../../Redux/Profile_Reducer.js';
import React from 'react';
import {connect} from   'react-redux';
let mapStateToprops = (state) => {
  return {
      decsriptionPicture:state.description.tasks,
      level:state.profile.level,
      id:state.auth.id

  }

}


const DescriptionContainer = connect(mapStateToprops, {putUserLevel} )(DescribePicture);
export default DescriptionContainer;
