import axios from 'axios'

export const loginAPI = credentials =>
    axios.post('/api/auth/login', credentials)
        .then(response => {
            return response.data.user
        })

export const signupAPI = user =>
    axios.post('/api/auth/signup', user)
        .then(resposne => resposne.data.user)