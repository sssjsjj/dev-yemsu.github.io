<template>
  <container-comp :size="'narrow'">
    <div class="wrap-info">
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
import axios from 'axios'
import htmlConverter from "@/utils/htmlConverter";

export default {
  components: {
    ContainerComp
  },
  data() {
    return {
      post: null,
      baseUrl: process.env.VUE_APP_BASE_URL,
    }
  },
  created() {
    const param = this.$route.params.title
    axios.get(`${this.baseUrl}/posts/${param}.md`)
      .then(res => this.post = htmlConverter(res.data))
      .catch(e => console.log(`ERROR🙄 ${e.response.status} : ${e.request.responseURL}`))
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/PostDetail.scss';
</style>