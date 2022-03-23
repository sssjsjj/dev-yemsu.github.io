import axios from 'axios'

const $axios = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL
})

export const getMD = (postName) => {
  return $axios.get(`/posts/${postName}.md`)
}
export const getPosts = () => {
  return $axios.get('/posts/index.json')
}