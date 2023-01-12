 <template>  
  <div :class="['wrap-list-post', `view-${isCardList ? 'card' : 'list'}`]">
    <div class="list-top-area">
      <nav class="area-tag">
        <h2 class="ir">category</h2>
        <ul class="tags">
          <li
            v-for="(tag, i) in tags"
            :key="`tag${i}`"
            :class="[
              {selected : selectedTagIndex === i },
              'tag'
            ]"
          >
            <button class="btn-tag" @click="clickTag(i)">{{ tag }}</button>
          </li>
        </ul>
      </nav>
      
      <button
        class="toggle-list-type"
        @click="(isCardList = !isCardList)"
        :title="isCardList ? '리스트 스타일로 보기' : '카드 스타일로 보기'"
      >
        <Icon :type="isCardList ? 'list' : 'grid'" />
      </button>
    </div>
    <div class="list-post">
      <div
        v-for="(post, i) in selectedPostList()"
        :key="`post${i}`"
        class="post"
      >
        <router-link
          :to="post.name"
          class="link-post"
        >
          <p v-if="!isCardList" class="date">{{ post.date }}</p>
          <h3
            class="title"
            :style="isCardList ?`background-color:${randomRgba()};` : ''"
          >
            <span
              class="title-text"
              v-html="post.title"
            ></span>
          </h3>
          <div class="wrap-info">
            <!-- <p class="description">{{ post.description }}</p> -->
            <ul class="keywords">
              <li
                v-for="(keyword, keywordIndex) in post.keywords"
                :key="`keyword${keywordIndex}`"
                class="keyword"
              >
                {{ keyword }}
              </li>
            </ul>
            <p v-if="isCardList" class="date">{{ post.date }}</p>
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
  data() {
    return {
      isCardList: true,
      tags: ["javascript", "Vue", "Dart / Flutter", "HTML / CSS", "개발기", "라이브러리", "번역", "접근성", "etc"],
      selectedTagIndex: null,
    }
  },
  computed: {
    selectedTag() {
      return this.tags[this.selectedTagIndex]
    }
  },
  methods: {
    randomRgba() {
      return randomRgba(120, 180, 0.6)
    },
    selectedPostList() {
      if(this.selectedTagIndex === null) return this.posts

      const result = this.posts.filter(({ tags }) => tags.includes(this.selectedTag))

      return result
    },
    clickTag(i) {
      if(this.selectedTagIndex === i) {
        this.selectedTagIndex = null
        return
      }
      this.selectedTagIndex = i
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/PostList.scss';
</style>