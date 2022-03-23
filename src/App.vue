<template>
  <metainfo />
  <header-comp />
  <router-view />
</template>

<script>
import HeaderComp from '@/components/layout/Header.vue'
import { useMeta } from 'vue-meta'

export default {
  setup () {
    useMeta({
      title: process.env.VUE_APP_TITLE,
      meta: [
        {vmid: 'description', name: 'description', content: 'Vue3로 제작한 프론트엔드 개발 블로그'},
        {vmid: 'keywords', name: 'keywords', content: 'blog, frontend, vue3, vueCLI4'},
        {vmid: 'og:type', name: 'og:type', content: 'article'},
        {vmid: 'og:title', name: 'og:title', content: 'ENJOY DEV'},
        {vmid: 'og:description', name: 'og:description', content: 'Vue3로 제작한 프론트엔드 개발 블로그'},
        {vmid: 'og:url', name: 'og:url', content: 'https://yemsu.github.io/'},
        {vmid: 'og:image', name: 'og:image', content: 'og:image'}
      ]
    })
  },
  components: {
    HeaderComp
  }
}
</script>

<style lang="scss">
@import '@/assets/style/common.scss';
</style>