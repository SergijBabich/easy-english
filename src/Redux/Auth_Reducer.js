import {authAPI} from "../api/api.js";
import {stopSubmit} from "redux-form";
import { Redirect } from 'react-router-dom';
import {userData} from './Profile_Reducer.js';
const SET_USER_DATA =  'SET-USER-DATA';
const GET_USER_DATA  = 'GET-USER-DATA';
const GET_ERROR = 'GET-ERROR';
let initialState = {
  login:null,
  password:null,
  id:null
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_USER_DATA:
        return {
          login: action.login,
          password: action.password
         }
         case GET_USER_DATA:
           return {
          ...state ,  login:action.login,
                      password:action.login,
                      id:action._id
            }
            case GET_ERROR:
              return {
             ...state ,  message:action.message
               }

     default:
          return state;
    }
}

export let setAuthData = (login, password) => {
  return {
    type: SET_USER_DATA,
    login,
    password
  }
}
export let getUserAuth = (login, password, _id) => {
  return {
    type: GET_USER_DATA,
    login, password, _id

  }
}
export let getError = (message) => {
  return {
    type: GET_ERROR,
    message

  }
}



 export const register = (login, password) => {
 return  async (dispatch) => {
    let data = await authAPI.register(login, password);
        dispatch(setAuthData(login, password))
          dispatch(getUserAuth(data.login, data.password, data._id));
          dispatch(getError(data.sendCode));
            dispatch(getError(data.sendCode));
      }
}

 export const login = (login, password, ) => {
 return  async (dispatch) => {
    let data = await authAPI.login(login, password);
       dispatch(setAuthData(login, password))
      dispatch(getUserAuth(data.login, data.password, data._id));
      dispatch(getError(data.sendCode));
      dispatch(userData(data))
          console.log(data.login);
          console.log(data.password);

  }
}

export const logOut = (id) => {
   return   async (dispatch) => {
      console.log(id);
      let response  = await authAPI.logOut(id);
   }
       console.log("DFSDFS");
}

export default authReducer;
