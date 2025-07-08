<script setup></script>

<template>
  <Header />

  <main class="page">
    <div class="container">
      <div class="row">
        <router-view />
      </div>
    </div>
  </main>

  <Footer />
</template>

<style scoped>
.page{
  max-height: 75dvh;
  overflow-y: scroll;
}
</style>