<template>
  <header-comp />
  <router-view />
</template>

<script>
import HeaderComp from '@/components/layout/Header.vue'
export default {
  components: {
    HeaderComp
  }
}
</script>

<style lang="scss">
@import '@/assets/style/common.scss';
</style>