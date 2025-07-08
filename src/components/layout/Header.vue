<script setup></script>

<template>
  <header class="header">
    <div class="logo">
      <img src="@/assets/logo.png" alt="" class="logo">
      <p>HiTASKS</p>
    </div>

    <div class="menu">
      <router-link to="/about" class="__link">
        Sobre
      </router-link>
      <router-link to="/tasks" class="__link">
        Tarefas
      </router-link>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: .5rem;
  background: var(--yellow);
  padding: 1rem 2rem;
  margin-bottom: 2rem;
  
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    img{
      width: 50px;
      height: 50px;
    }
    p {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 700;
    }
  }

  .menu{
    display: flex;
    gap: 2rem;

    .__link {
      color: var(--blue);
      font-size: .9rem;
      font-weight: 700;
      text-transform: uppercase;

      &:hover{
        opacity: .5;
      }
    }
  }
}
</style>