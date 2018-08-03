import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://10.0.38.117:3000/api/`,
    headers: {
      'Accept': 'application/JSON',
      'Content-Type': 'application/JSON'
    }
  })
}
