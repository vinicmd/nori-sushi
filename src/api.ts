import axios from 'axios'

const url = process.env.REACT_APP_API_URL
const authorization = process.env.REACT_APP_AUTHORIZATION
console.log(url, authorization)
export const api = axios.create({
  baseURL: url,
  timeout: 5000,

  headers: {
    Authorization: authorization,
  },
})
