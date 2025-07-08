<script setup>
const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
  }
});

const emit = defineEmits(["close"]);
</script>


<template>
  <Transition name="fade">
    <div class="overlay" v-if="props.open">
      <div class="modal">
        <Btn type="delete" class="__close" @click="$emit('close')">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.99999 5.58574L11.95 0.635742L13.364 2.04974L8.41399 6.99974L13.364 11.9497L11.95 13.3637L6.99999 8.41374L2.04999 13.3637L0.635986 11.9497L5.58599 6.99974L0.635986 2.04974L2.04999 0.635742L6.99999 5.58574Z"
              fill="var(--red)"
            />
          </svg>
        </Btn>

        <Title>
          {{ props.title }}
        </Title>

        <div class="__content">
          <slot name="content" />
        </div>

        <footer class="__footer" >
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </Transition>
</template>

<style lang="css" scoped>
.overlay{
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.6);
  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    background: #fff;
    width: 50dvw;
    border-radius: 16px;
    padding: 1.5rem;

    .__close {
      position: absolute;
      top: 25px;
      right: 20px;
    }

    .__footer {
      margin-top: 2rem;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>