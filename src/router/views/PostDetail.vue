<template>
  <container-comp :size="'narrow'">
    <div v-if="post && post.title" class="wrap-info">
      <h2 class="title">{{ post.title.replace(/<br>/ig, '') }}</h2>
      <p class="date">{{ post.date }}</p>
      <ul class="keywords">
        <li
          v-for="(keyword, keywordIndex) in post.keywords"
          :key="`keyword${keywordIndex}`"
          class="keyword"
        >
          {{ keyword }}
        </li>
      </ul>
    </div>
    <div class="contents" v-html="contents"></div>
  </container-comp>
</template>

<script>
import ContainerComp from '@/components/layout/Container.vue'
import { mapGetters } from 'vuex';

export default {
  components: {
    ContainerComp
  },
  computed: {
    ...mapGetters({
      contents: 'getMD',
      post: 'getPost'
    }),
  },
  async created() {
    const postName = this.$route.params.title
    await this.$store.dispatch('GET_MD', postName)
    await this.$store.dispatch('GET_POST', postName)
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/PostDetail.scss';
</style>