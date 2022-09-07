import { GET_BY_ID,ADD_USER,UPDATE_USER,DELETE_USER } from "../types/users-types";


export default function usersReducer({users}, action) {
  switch (action.type) {
    case GET_BY_ID :
      return ;
    case ADD_USER:
      return [...users,action.payload];
    case UPDATE_USER:
      return ;
    case DELETE_USER:
      return ;
    default:
      return {users};
  }
}
