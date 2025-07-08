<script setup>
import { ref } from 'vue';

const year = ref(new Date().getFullYear())

</script>
<template>
  <footer class="footer">
    <p>
      {{ year != '2025' ? '2025 - ' + year : year }}
      - Desenvolvido por 
      <a href="https://github.com/MattTrovao" target="_blank" rel="noopener noreferrer" class="link">Matheus Trovão</a>
    </p>
  </footer>
</template>

<style scoped>
.footer{
  width: 100dvw;
  display: flex;
  justify-content: center;
  border-top: 2px solid var(--blue);
  padding-top: 1rem;
  position: absolute;
  bottom: 0;
  left: 0;

  p{
    font-size: .8rem;
    .link {
      color: var(--red);
      &:hover{
        color: var(--blue);
      }
    }
  }
}
</style>