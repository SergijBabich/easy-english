import {profileAPI} from "../api/api.js";
const CHANGE_USER_INFORMATIONS = 'CHANGE-USER-INFORMATIONS';
const GET_USER_INFORMATIONS = 'GET-USER-INFORMATIONS';
const SET_USER_PHOTO = 'SET-USER-PHOTO';
const SET_LEVEL_USER = 'SET-LEVEL-USER';
let initialState = {
  name:'',
  status:'',
  position:'',
  profile:'',
  level:'',
  avatar:'',
  surname: '',
  country: '',
  placeOfWork: '',
  isProps:true
}

const profileReducer = (state = initialState, action) => {
 switch (action.type) {
   case  CHANGE_USER_INFORMATIONS:
     return {
       ...state,name:action.changeData.name,
       status:action.changeData.status,
       position:action.changeData.position,
       profile:action.changeData.profile,
       level:action.changeData.level,
       surname: action.changeData.surname,
       country: action.changeData.country,
       placeOfWork: action.changeData.placeOfWork,
     }
     case  GET_USER_INFORMATIONS:
       return {
         ...state,  name:action.name,
         status:action.status,
         position:action.position
       }
       case SET_USER_PHOTO:
        return {
          ...state,
          avatar: action.avatar
        }
        case SET_LEVEL_USER:
        return {
          ...state,
          level:action.level
        }
   default:
     return state;
 }
}
/*
export const getCangeUserData = (changeUserData) => {
  return {
    type:GET_USER_INFORMATIONS,
    changeUserData
  }
}
*/
export const userData = (changeData) => {
  return {
    type:CHANGE_USER_INFORMATIONS,
    changeData
  }
}

export const setUserPhoto = (avatar) => {
  return {
    type:SET_USER_PHOTO,
    avatar
  }
}

export const setUserLevel = (level ) => {
 return {
   type: SET_LEVEL_USER,
    level

 }
}

export const getUserPhoto = (avatar, id) => {
  return async(dispatch) => {
      let data = await profileAPI.setUserPhoto(avatar, id );
      dispatch(setUserPhoto(avatar));
  }
}
export const getUserInformation = (name, status, position, surname,country, placeOfWork, level, id) => {
    return  async(dispatch) => {
    let data = await profileAPI.getUserInformation(name, status, position, surname,country, placeOfWork, level, id );
      dispatch(userData(name, status, position, surname,country, placeOfWork, level));
        dispatch(userData(data.value));
  }
}


export default profileReducer;
