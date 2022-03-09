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
    const param = this.$route.params.title
    await fetch(`/posts/${param}.md`)
      .then(res => res.text())
      .then(data => this.contents = htmlConverter(data))
      .catch(e => console.log(e))
      
  },
}
</script>