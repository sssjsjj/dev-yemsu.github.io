import { getMD, getPosts } from '../utils/https'

export default {
  GET_MD({ commit }, postName) {
    return getMD(postName)
      .then(({data}) => {
        commit(`SET_MARKDOWN`, {data, type: 'markdown'})
        return data
      })
      .catch(error => console.log('GET_MD', error))
  },
  GET_POSTS({ commit }) {
    return getPosts()
      .then(({data}) => {
        const visiblePosts = data.filter(item => !item.hidden)
        commit(`SET_DATA`, {data: visiblePosts, type: 'posts'})
        return visiblePosts
      })
      .catch(error => console.log('GET_POSTS', error))
  },
  GET_POST({ commit }, postName) {
    return getPosts()
      .then(({data}) => {
        const postData = data.filter(info => info.name === postName)[0]
        commit(`SET_DATA`, {data: postData, type: 'post'})
        return postData
      })
      .catch(error => console.log('GET_POST', error))
  }
}