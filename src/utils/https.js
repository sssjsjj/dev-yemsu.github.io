import axios from 'axios'

const $axios = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL
})

const Https = {
  async get(url = '', params = {}) {
    return $axios.get(url, params)
      .then(res => res.data)
      .catch(e => console.log(`ERROR🙄 ${e.response.status} : ${e.request.responseURL}`))
  }
}

export const getPostsInfo = () => {
  return Https.get('/posts/index.json')
}

export const getPostInfo = (param = {}) => {
  const key = Object.keys(param)[0]
  const value = Object.values(param)[0]

  return getPostsInfo()
    .then((data) => {
      for(const info of data) {
        if(info[key] === value) return info
      }
    })
}

export const getMD = (param = '') => {
  return Https.get(`/posts/${param}.md`)
}