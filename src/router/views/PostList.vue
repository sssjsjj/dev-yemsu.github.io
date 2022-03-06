<template>
  <div class="container">
    <main>
      <div class="list-post">
        <div
          v-for="(post, i) in postMap"
          :key="`post${i}`"
          class="post"
        >
          <a :href="post.name" :title="post.title">
            <h4 class="title" v-html="post.title"></h4>
            <p class="description">{{ post.description }}</p>
            <p class="date">{{ post.date }}</p>
          </a>
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
      </div>
    </main>
  </div>
</template>

<script>
import posts from '@/contents/posts'

export default {
  data() {
    return {
      postMap: []
    }
  },
  created() {
    this.postMap = JSON.parse(posts)
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import '@/assets/style/PostList.scss';
</style>