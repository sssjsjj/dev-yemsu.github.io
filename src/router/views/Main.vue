<template>
  <container-comp :size="'wide'">
    <post-list :posts="posts" />
  </container-comp>
</template>

<script>
import ContainerComp from '@/components/layout/Container.vue'
import PostList from '@/components/PostList.vue'
import { getPostsInfo } from '@/utils/https'

export default {
  components: {
    ContainerComp,
    PostList
  },
  data() {
    return {
      posts: []
    }
  },
  created() {
    getPostsInfo()
      .then(data => this.posts = data)
  }
}
</script>