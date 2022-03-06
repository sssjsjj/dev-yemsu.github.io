<template>
  <header>
    <h1><Logo :size="'medium'" /></h1>
    <!-- <nav>
      <ul>
        <li><a href="">menu 1</a></li>
        <li><a href="">menu 2</a></li>
        <li><a href="">menu 3</a></li>
        <li><a href="">menu 4</a></li>
      </ul>
    </nav> -->
    <div class="links">
      <LinkGithub />
    </div>
  </header>
</template>

<script>
import Logo from '@/components/Logo.vue'
import LinkGithub from '@/components/LinkGithub.vue'

export default {
  components: {
    Logo,
    LinkGithub
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 50px 30px;
}
nav {
  ul {
    display: flex;
    gap: 20px;
  }
}
</style>