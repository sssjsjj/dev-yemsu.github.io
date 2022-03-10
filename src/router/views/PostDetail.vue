<template>
  <div v-html="contents"></div>
</template>

<script>
import axios from 'axios'
import htmlConverter from "@/utils/htmlConverter";

export default {
  data() {
    return {
      contents: null,
      baseUrl: process.env.VUE_APP_BASE_URL,
    }
  },
  created() {
    const param = this.$route.params.title
    axios.get(`${this.baseUrl}/posts/${param}.md`)
      .then(res => this.contents = htmlConverter(res.data))
      .catch(e => console.log(`ERROR🙄 ${e.response.status} : ${e.request.responseURL}`))
  },
}
</script>