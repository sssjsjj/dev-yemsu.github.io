<template>
  <div class="wrap-list-post">
    <div class="list-post">
      <div
        v-for="(post, i) in posts"
        :key="`post${i}`"
        class="post"
      >
        <a
          :href="post.name"
          :title="post.title"
        >
          <h4
            class="title"
          >
            <span
              class="title-text"
              v-html="post.title"
            ></span>
          </h4>
          <div class="wrap-info">
            <p class="description">{{ post.description }}</p>
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
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/PostList.scss';
</style>