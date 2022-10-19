<template>
  <metainfo />
  <header-comp />
  <router-view />
  <footer-comp />
</template>

<script>
import HeaderComp from '@/components/layout/Header.vue'
import FooterComp from '@/components/layout/Footer.vue'

export default {
  components: {
    HeaderComp,
    FooterComp
  },
}
</script>

<style lang="scss">
@import '@/assets/style/common.scss';
</style>