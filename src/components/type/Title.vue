<script setup></script>

<template>
  <h1 class="title">
    <slot />
  </h1>
</template>

<style scoped>
.title {
  font-size: 2rem;
  color: var(--blue);
  border-bottom: 2px solid var(--blue);
  padding-bottom: 1rem;
  margin-top: 0;
  margin-bottom: 2rem;
}

@media only screen and (max-width : 900px) {
  .title{
    font-size: 1.6rem;
  }
}
</style>