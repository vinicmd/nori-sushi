import axios from 'axios'
import {API_URL} from '@env'

const url = API_URL || 'http://192.168.123.46:3001'

export const api = axios.create({
  baseURL: url,
  timeout: 5000,
})
