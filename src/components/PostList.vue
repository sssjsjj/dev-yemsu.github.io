 <template>  
  <div :class="['wrap-list-post', `view-${isCardList ? 'card' : 'list'}`]">
    <div class="list-top-area">
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
        v-for="(post, i) in posts"
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
      isCardList: true
    }
  },
  methods: {
    randomRgba() {
      return randomRgba(120, 180, 0.6)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/PostList.scss';
</style>