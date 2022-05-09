import axios from 'axios'
let baseURL
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  baseURL = process.env.REACT_APP_DEV_API_URL
} else {
  baseURL = process.env.REACT_APP_PRO_API_URL
}
console.log(baseURL)
export default axios.create({
  baseURL,
})
