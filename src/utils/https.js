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
  const getPostInfo = getPostsInfo()
    .then((data) => data.filter(info => info[key] === value)[0])
  return getPostInfo
}

export const getMD = (param = '') => {
  return Https.get(`/posts/${param}.md`)
}