import axios from 'axios'

export const loginAPI = credentials =>
    axios.post('/api/auth/login', credentials)
        .then(response => response.data.user)