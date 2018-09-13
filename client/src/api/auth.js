import axios from 'axios'

export const loginAPI = (data) => axios.post('/api/auth/login', data)