<script setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
  }
});
</script>

<template>
  <button :class="`btn ${props.type ? `--${props.type}` : ''}`" :disabled="props.disabled">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  background: none;
  border: 2px solid var(--blue);
  color: var(--blue);
  border-radius: 10px;
  font-size: 1rem;
  padding: .5rem;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: .7;
  }

  &:not(:disabled):hover {
    filter: saturate(2);
  }

  &.--new {
    border-color: var(--green);
    color: var(--green);
  }

  &.--delete {
    border-color: var(--red);
    color: var(--red);
  }
}
</style>