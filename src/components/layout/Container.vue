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
  padding: 50px $container-padding-x-pc;
  @include pc {
    &.size-narrow {
      main {
        width: 800px;
        margin: 0 auto;
      }
    }
  }
  @include mobile {
    padding: 30px $container-padding-x-m;
  }
}
</style>