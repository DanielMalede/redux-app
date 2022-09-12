import { ADD_USER ,GET_BY_ID,UPDATE_USER,DELETE_USER} from "../types/users-types"
const addUserAction = () => {
    return { type: ADD_USER }
}
const getByIdAction = () => {
    return { type: GET_BY_ID, payload: userObj }
}
const updateUserAction = () => {
    return { type: UPDATE_USER, payload: userObj }
}
const deleteUserAction = () => {
    return { type: DELETE_USER, payload: userObj }
}

