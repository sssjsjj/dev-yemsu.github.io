<template>
  <div v-html="contents"></div>
</template>

<script>
import htmlConverter from "@/utils/htmlConverter";

export default {
  data() {
    return {
      contents: null
    }
  },
  async created() {
    try {
      const param = this.$route.params.title
      const post = await import(`@/contents/${param}.md`)
      this.contents = htmlConverter(post.default)
    } catch (e) {
      console.log(e)
    }
  },
}
</script>