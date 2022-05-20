<template>
  <div class="wrap-list-post">
    <div class="list-post">
      <div
        v-for="(post, i) in posts"
        :key="`post${i}`"
        class="post"
      >
        <router-link
          :to="post.name"
          :title="post.title.replace(/<br>/ig, '')"
          class="link-post"
        >
          <h3
            class="title"
            :style="`background-color:${randomRgba()};`"
          >
            <span
              class="title-text"
              v-html="post.title"
            ></span>
          </h3>
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
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { randomRgba } from '@/utils'

export default {
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    randomRgba() {
      return randomRgba(120, 170)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/PostList.scss';
</style>