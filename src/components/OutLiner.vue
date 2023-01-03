<template>
  <nav class="outLiner">
    <ul>
      <li 
        v-for="(title,i) in outlines"
        :key="`outline${i}`"
        :class="[{'active':activeIndex === i}, {'subTitle':title.isSubIndex}]"
      >
        <a :href="`#${title.id}`">
          {{ title.numbering }}. {{ title.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    outlines: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activeIndex: -1,
      scrolling: false
    }
  },
  mounted() {
    document.addEventListener('scroll', () => {
      if(this.scrolling) return 
      this.scrolling = true

      this.setActiveTitle()

      setTimeout(() => {
        this.scrolling = false
      }, 200);
    })

  },
  methods: {
    setActiveTitle() {
      const titleEls = document.querySelectorAll('h3, h4')
      const articleEl = document.querySelector('.article')
      const articleOffsetBottom = articleEl.offsetTop + articleEl.offsetHeight
      const windowScrY = window.scrollY + 100

      titleEls.forEach((titleEl, i) => {
        const isLastIndex = titleEls.length === i + 1
        const nextOffset = isLastIndex ? articleOffsetBottom : titleEls[i + 1].offsetTop
        const isTitleOnScroll = titleEl.offsetTop <= windowScrY && windowScrY < nextOffset
        const isScrollArticleOut = windowScrY < titleEls[0].offsetTop || articleOffsetBottom < windowScrY

        this.activeIndex = isScrollArticleOut ? -1
          : (isTitleOnScroll ? i : this.activeIndex)
      })
    }
  }
}
</script>

<style lang="scss">
$top: 120px;
.outLiner {
  overflow-y: auto;
  position: fixed;
  top: $top;
  left: calc(50% + ($container-narrow-width / 2) + 20px);
  max-height: calc(100vh - $top - 35px);
  margin-left: 10px;
  padding: 0 5px 0 15px;
  border-left: 1px solid var(--line-light-gray);
  font-weight: var(--font-light);
  font-size: 14px;
  @include scrollDesign;
  ul {
    li {
      opacity: .5;
      transition: 0.2s opacity;
      &.active {
        font-weight: var(--font-medium);
        opacity: 1;
      }
      &:nth-child(n+2) {
        margin-top: 0.25em;
      }
      &.subTitle {
        padding-left: 1em;
      }
    }
  }
}
</style>