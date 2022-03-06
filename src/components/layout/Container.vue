<template>
  <div class="container">
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 50px;
}
</style>