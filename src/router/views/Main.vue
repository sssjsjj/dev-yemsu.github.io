<template>
  <container-comp :size="'wide'">
    <post-list :posts="posts" />
  </container-comp>
</template>

<script>
import ContainerComp from '@/components/layout/Container.vue'
import PostList from '@/components/PostList.vue'
import { mapGetters } from 'vuex';

export default {
  components: {
    ContainerComp,
    PostList
  },
  computed: {
    ...mapGetters({
      posts: 'getPosts'
    })
  },
  created() {
    this.$store.dispatch('GET_POSTS')
  },
}
</script>