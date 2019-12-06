import axios from 'axios'
const ajx = axios.create({
    baseURL: '/api',
    timeout: 1000 * 180,
    withCredentials: true,
    // headers: {
    //     'Content-Type': "application/x-www-form-urlencoded"
    // }
})

export function HttpGet(url, params = {}) {
    return new Promise((resolve, reject) => {
      ajx.get(url, {
        params
      })
        .then((response) => {
          resolve(response.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
}


export function HttpPost(url, data = {}) {
    return new Promise((resolve, reject) => {
      ajx.post(url, data)
        .then((response) => {
         resolve(response.data)
        }, (err) => {
          reject(err)
        })
    })
  }