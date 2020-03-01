import React from 'react';
import profileReducer from '../../Redux/Profile_Reducer.js';
import authReducer from '../../Redux/Auth_Reducer.js';
import {connect} from   'react-redux';
import {getUserInformation} from  '../../Redux/Profile_Reducer.js';
import {getUserPhoto} from  '../../Redux/Profile_Reducer.js';
import Profile from './profile.js';
export let mapStateToprops = (state) => {
  return {
    name: state.profile.name,
    status: state.profile.status,
    position: state.profile.position,
    level: state.profile.level,
    id:state.auth.id,
    avatar:state.profile.avatar,
    isProps: state.profile.isProps,
    surname: state.profile.surname,
    country: state.profile.country,
    placeOfWork: state.profile.placeOfWork
  }
}

 const ProfileContainer = connect(mapStateToprops, {getUserInformation, getUserPhoto})(Profile)
 export default ProfileContainer;
