<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

</script>

<template>
  <header class="header">
    <router-link to="/" class="logo" >
      <img src="@/assets/logo.png" alt="" class="logo">
      <p>Task Manager</p>
    </router-link>

    <div class="menu">
      <router-link to="/" class="__link">
        Home
      </router-link>
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
      width: 40px;
      height: 50px;
    }
    p {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--black);
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
      position: relative;

      &:before{
        content: '';
        width: 10%;
        height: 3px;
        display: block;
        background: var(--blue);
        position: absolute;
        bottom: -2px;
        left: 0;
        opacity: 0;
        transition: inherit;
      }

      &.router-link-exact-active {
        color: var(--blue);
        &::before{
          width: 110%;
          opacity: 1;
        }
      }

      &:hover{
        opacity: .5;
        &::before{
          width: 110%;
          opacity: 1;
        }
      }
    }
  }
}
@media only screen and (max-width : 900px) {
  .header {
    .menu {
      gap: .5rem;
    }
  }
}
</style>