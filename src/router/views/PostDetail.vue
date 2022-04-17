<template>
  <container-comp :size="'narrow'">
    <article>
      <out-liner :outlines="outlines"/>
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
      <article class="article" v-html="article" ref="article"></article>
      <div class="article-bottom">
        <p class="text-ps">
          <strong>수정이 필요한 부분</strong> 혹은 <strong>더 나은 방법</strong>을 알고계신가요? <br>
          댓글로 알려주시면 저에게 큰 도움이 됩니다! 😊💜
        </p>
        <vue-utterances repo="yemsu/yemsu.github.io" :theme="`github-${colorTheme}`" issue-term="pathname" />
      </div>
    </article>
  </container-comp>
</template>

<script>
import VueUtterances from "vue-utterances";
import ContainerComp from '@/components/layout/Container.vue'
import OutLiner from '@/components/OutLiner.vue'
import { mapGetters } from 'vuex';

export default {
  components: {
    VueUtterances,
    ContainerComp,
    OutLiner
  },
  data() {
    return {
      outlines: []
    }
  },
  computed: {
    ...mapGetters({
      article: 'getMD',
      post: 'getPost'
    }),
    colorTheme() {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return isDark ? 'dark' : 'light'
    }
  },
  async created() {
    const postName = this.$route.params.title
    await this.$store.dispatch('GET_MD', postName)
    await this.$store.dispatch('GET_POST', postName)
    this.readyOutLiner()
  },
  methods: {
    readyOutLiner() {
      const titleEls = document.querySelectorAll('h3, h4')
      let index = 0
      let subIndex = 0
      for(const titleEl of titleEls) {
        const isMainTitle = titleEl.tagName === 'H3'
        const text = titleEl.innerText
        const id = text.replace(/ /ig, '-')
        // set index
        isMainTitle && index++
        subIndex = isMainTitle ? 0 : subIndex + 1
        // set article titles
        this.outlines.push({
          text,
          id,
          numbering: isMainTitle ? `${index}` : `${index}-${subIndex}`,
          isSubIndex: !isMainTitle
        })     
        // set element's ID
        titleEl.id = id
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/PostDetail.scss';
</style>