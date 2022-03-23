// import Vue from 'vue'
import { createStore } from 'vuex'
import mutations from './mutations'
import actions from './actions'

// Vue.use(Vuex)

export default createStore({
  state: {
    markdown: '',
    posts: [],
    post: {}
  },
  getters: {
    getMD(state) {
      return state.markdown
    },
    getPosts(state) {
      return state.posts
    },
    getPost(state) {
      return state.post
    },
  },
  mutations,
  actions
})