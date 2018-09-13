import { loginAPI } from './../api/auth'
import { USER_LOGGED_IN } from './../constant/types'

export const userLoggedInAction = user => {
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}

export const loginAction = credentials => dispatch =>
    loginAPI(credentials).then(user => dispatch(userLoggedInAction(user)))