<template>
  <div :class="`container size-${size}`">
    <slot></slot>
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
  max-width: 100%;
  padding: 50px $container-padding-x-pc;
  box-sizing: content-box;
  @include pc {
    $header-height: 121px;
    min-height: calc(100vh - #{$header-height});
    &.size-narrow {
      width: $container-narrow-width;
      margin: 0 auto;
    }
  }
  @include mobile {
    $header-height: 112px;
    min-height: calc(100vh - #{$header-height});
    padding: 30px $container-padding-x-mo;
  }
}
</style>