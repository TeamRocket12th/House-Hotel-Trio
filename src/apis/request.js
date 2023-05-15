import axios from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: import.meta.env.VITE_API_TOKEN
  }
})

export default request
