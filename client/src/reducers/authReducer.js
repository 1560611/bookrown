import { USER_LOGGED_IN } from './../constant/types'

export default (state = {}, action = {}) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return action.payload
        default:
            return state
    }
}