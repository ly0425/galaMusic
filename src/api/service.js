import axios from 'axios'

const request = {
  async get (url) {
    let res = await axios.get(url)
    res = res.data
    return new Promise(resolve => {
      resolve(res)
    })
  },
  async post (url, params) {
    let res = await axios.post(url, params)
    res = res.data
    return new Promise(resolve => {
      resolve(res)
    })
  }
}
export default request
