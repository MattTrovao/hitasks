<script setup>
import { onMounted, ref } from 'vue';

const time = ref('')

const setTimeToHello = () => {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 6 && hour < 12) {
    time.value = 'Bom dia';
  } else if (hour >= 12 && hour < 18) {
    time.value = 'Boa tarde';
  } else {
    time.value = 'Boa noite';
  }
}

onMounted(() => {
  setTimeToHello()
})
</script>

<template>
  <Title>
    {{time}}, bem vindo ao Task Manager
  </Title>

  <p>
    Para começar a utilizar o sistema navegue pelo menu acima
  </p>

</template>

<style scoped>

</style>
