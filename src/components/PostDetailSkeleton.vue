<template>
  <article>
    <div class="wrap-info">
      <h2 class="skeleton skeleton-h2">title</h2>
    </div>
    <div class="article">
      <!-- outliner 타겟에서 제외되기 위해 skeleton 클래스명 추가 -->
      <div class="skeleton skeleton-h3">ddd</div>
      <div class="skeleton skeleton-text long">ddd</div>
      <div class="skeleton skeleton-text normal">ddd</div>
      <div class="skeleton skeleton-text short">ddd</div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/PostDetail.scss';
.skeleton {
  background-color: var(--bg-gray);
  border-radius: 5px;
  color: transparent;
}

.date {
  display: inline-block;
  color: transparent !important;
}
.skeleton-h2 {
  width: 80%;
  margin: 0 auto;
}
.skeleton-h3 {
  width: 40%;
}
.skeleton-text {
  &.short {
    width: 50%;
  }
  &.normal {
    width: 70%;
  }
}
</style>