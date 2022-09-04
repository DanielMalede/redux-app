import { CREATE_USER } from "../action/user-types"

export default function userReducer(state,action) {
    switch (action.type) {
        case CREATE_USER:
            return action.payload
        default:
            return
    }
}