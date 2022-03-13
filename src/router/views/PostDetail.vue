<template>
  <container-comp :size="'narrow'">
    <div v-if="post" class="wrap-info">
      <h2 class="title">{{ post.title.split('<br>').join(' ') }}</h2>
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
import htmlConverter from "@/utils/htmlConverter";
import { getMD, getPostInfo } from '@/utils/https'

export default {
  components: {
    ContainerComp
  },
  data() {
    return {
      contents: null,
      post: null
    }
  },
  async created() {
    const param = this.$route.params.title
    
    await getMD(param)
      .then(data => this.contents = htmlConverter(data))

    await getPostInfo({"name": param})
      .then(data => this.post = data)
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/PostDetail.scss';
</style>