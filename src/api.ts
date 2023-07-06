import axios from 'axios'

const url = 'https://nori-sushi-api.onrender.com/'

export const api = axios.create({
  baseURL: url,
  timeout: 5000,

  headers: {
    Authorization: 'beda9f421b4636b096c1fdc7dc6eb24e',
  },
})
