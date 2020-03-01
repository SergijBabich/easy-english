import {usersAPI} from "../api/api.js";
const GET_USERS = 'GET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: null,
  pageCount:1,
  page:10
}

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
     case GET_USERS:
      return {
        ...state, users:action.users
      }
      case SET_CURRENT_PAGE:
       return {
         ...state, pageCount:action.page
       }
       case SET_TOTAL_USERS_COUNT:
        return {
          ...state, totalUsersCount:action.totalCount
        }

     default:
      return state;
   }
}
 export let  getUsersData = (users) => {
  return {
     type: GET_USERS,
     users
  }
 }

 export let  setCurrentPageNumber = (page) => {
  return {
     type: SET_CURRENT_PAGE,
      page
  }
}
 export let  totalUsersCount = (totalCount) => {
  return {
     type: SET_TOTAL_USERS_COUNT,
     totalCount
  }
 }
 export const getUsers = (page) => {
   console.log(page);
   return async (dispatch) => {
     let data = await usersAPI.getUsers(page);
     dispatch(setCurrentPageNumber(page));
     dispatch(getUsersData(data.users));
     dispatch(totalUsersCount(data.totalCount));
   }
 }


export default usersReducer;
