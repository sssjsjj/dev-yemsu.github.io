<template>
  <article>
    <div class="wrap-info">
      <h2 class="title">title</h2>
    </div>
    <div class="article">
      <h3>ddd</h3>
      <p class="text-long">ddd</p>
      <p class="text-normal">ddd</p>
      <p class="text-short">ddd</p>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/PostDetail.scss';
h2, h3, p, li {
  background-color: var(--bg-gray);
  border-radius: 5px;
  color: transparent;
}

.date {
  display: inline-block;
  color: transparent !important;
}
h2 {
  width: 80%;
  margin: 0 auto;
}
h3 {
  width: 40%;
}
.text-short {
  width: 50%;
}
.text-normal {
  width: 70%;
}
</style>