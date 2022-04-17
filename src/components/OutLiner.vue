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
    window.addEventListener('scroll', () => {
      if(this.scrolling) return 
      this.scrolling = true

      const titleEls = document.querySelectorAll('h3, h4')
      titleEls.forEach((titleEl, i) => {
        const isLastIndex = titleEls.length === i + 1
        const articleEl = document.querySelector('.article')
        const articleOffsetBottom = articleEl.offsetTop + articleEl.offsetHeight
        const next = isLastIndex ? articleOffsetBottom : titleEls[i + 1].offsetTop
        const windowScrY = window.scrollY + 100
        if(titleEl.offsetTop <= windowScrY && windowScrY < next) {
          this.activeIndex = i
        } else if(windowScrY < titleEls[0].offsetTop || articleOffsetBottom < windowScrY) {
          this.activeIndex = -1
        }
      })

      setTimeout(() => {
        this.scrolling = false
      }, 200);
      console.log(this.activeIndex)
    })

  },
  methods: {

  }
}
</script>

<style lang="scss">
.outLiner {
  position: fixed;
  left: calc(50% + ($container-narrow-width / 2));
  margin-left: 10px;
  padding-left: 20px;
  border-left: 1px solid var(--line-light-gray);
  font-weight: 200;
  font-size: 14px;
  ul {
    li {
      opacity: .5;
      &.active {
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