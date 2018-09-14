import { loginAPI } from './../api/auth'
import { USER_LOGGED_IN, USER_LOGGED_OUT } from './../constant/types'

export const userLoggedInAction = user => {
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}

export const userLoggedOutAction = () => {
    return {
        type: USER_LOGGED_OUT
    }
}

export const loginAction = credentials => dispatch =>
    loginAPI(credentials).then(user => {
        localStorage.setItem('bookwormJWT', user.token)
        dispatch(userLoggedInAction(user))
    })

export const logoutAction = () => dispatch => {
    localStorage.removeItem('bookwormJWT')
    dispatch(userLoggedOutAction())
}