<template>
  <div :class="`container size-${size}`">
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "wide"
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 50px;
  &.size-narrow {
    main {
      width: 800px;
      margin: 0 auto;
    }
  }
}
</style>