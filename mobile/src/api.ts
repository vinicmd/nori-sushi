import axios from 'axios'
import {API_URL} from '@env'

const url = API_URL

export const api = axios.create({
  baseURL: url,
  timeout: 5000,
})
