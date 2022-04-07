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
    <article class="contents" v-html="contents"></article>
    <div class="article-bottom">
      <p class="text-ps">
        <strong>수정이 필요한 부분</strong> 혹은 <strong>더 나은 방법</strong>을 알고계신가요? <br>
        댓글로 알려주시면 저에게 큰 도움이 됩니다! 😊💜
      </p>
      <vue-utterances repo="yemsu/yemsu.github.io" :theme="`github-${colorTheme}`" issue-term="pathname" />
    </div>
  </container-comp>
</template>

<script>
import VueUtterances from "vue-utterances";
import ContainerComp from '@/components/layout/Container.vue'
import { mapGetters } from 'vuex';

export default {
  components: {
    VueUtterances,
    ContainerComp
  },
  computed: {
    ...mapGetters({
      contents: 'getMD',
      post: 'getPost'
    }),
    colorTheme() {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return isDark ? 'dark' : 'light'
    }
  },
  created() {
    const postName = this.$route.params.title
    this.$store.dispatch('GET_MD', postName)
    this.$store.dispatch('GET_POST', postName)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/PostDetail.scss';
</style>