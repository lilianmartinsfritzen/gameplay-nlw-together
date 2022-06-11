import axios from 'axios'

const { URL_DIRCORD } = process.env

const api = axios.create({
  baseURL: URL_DIRCORD
})

export { api }