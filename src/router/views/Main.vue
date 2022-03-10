<template>
  <container-comp>
    <post-list :posts="posts" />
  </container-comp>
</template>

<script>
import axios from 'axios'
import ContainerComp from '@/components/layout/Container.vue'
import PostList from '@/components/PostList.vue'
// import posts from '@/contents/posts.js'

export default {
  components: {
    ContainerComp,
    PostList
  },
  data() {
    return {
      posts: [],
      baseUrl: process.env.VUE_APP_BASE_URL,
    }
  },
  created() {
    axios.get(`${this.baseUrl}/posts/index.json`)
      .then(res => this.posts = res.data)
      .catch(e => console.log(`ERROR🙄 ${e.response.status} : ${e.request.responseURL}`))
  }
}
</script>