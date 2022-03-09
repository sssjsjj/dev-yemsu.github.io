<template>
  <container-comp>
    <post-list :posts="posts" />
  </container-comp>
</template>

<script>
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
      posts: []
    }
  },
  async created() {
    await fetch('/posts/index.json')
      .then(res => res.json())
      .then(data => this.posts = data)
      .catch(e => console.log(e))
    
  }
}
</script>

<style lang="scss" scoped>
</style>