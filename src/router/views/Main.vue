<template>
  <container-comp>
    <post-list :posts="posts" />
  </container-comp>
</template>

<script>
import ContainerComp from '@/components/layout/Container.vue'
import PostList from '@/components/PostList.vue'
import posts from '@/contents/posts'

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
    this.posts = JSON.parse(posts)
  }
}
</script>

<style lang="scss" scoped>
</style>