<template>
  <i :class="['icon', `${type}`]"></i>  
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: '' // grid, list
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  display: block;
  &.list {
    width: 16px;
    height: 2px;
    margin: 6px 0;
    box-shadow: inset 0 0 0 30px, 0 -6px, 0 6px;
  }
  &.grid {
    $size: 3px;
    $shadow-size: ($size * 2);
    width: $size;
    height: $size;
    margin: 6px;
    box-shadow: 0 -6px 0, -6px -6px 0, 6px -6px 0, 0 0 0 24px inset, -6px 0 0, 6px 0 0, 0 6px 0, -6px 6px 0, 6px 6px 0;
  }
}
</style>