<script setup>
const props = defineProps({
  required: {
    type: Boolean,
    default: false,
  }
});
</script>

<template>
  <label class="label">
    <slot />
    <span class="__required" v-if="props.required">
      *
    </span>
  </label>
</template>

<style scoped>
.label {
  font-size: .9rem;
  color: var(--black);
  margin: 0 0;

  .__required{
    color: var(--red);
  }
}
</style>