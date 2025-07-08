<script setup>
const props = defineProps({
  checked: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <div class="checkbox">
    <label class="__content">
      <input type="checkbox" :checked="checked" />
      <span class="__icon"></span>
    </label>
  </div>
</template>

<style scoped>
.checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  input {
    display: none;
  }
  .__icon {
    width: 20px;
    height: 20px;
    border: 2px solid var(--black);
    border-radius: 4px;
    display: inline-block;
    margin-right: 8px;
    position: relative;
    transition: var(--transition);
    cursor: pointer;
  }

  input:checked + .__icon::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 6px;
    width: 6px;
    height: 12px;
    border: solid var(--blue);
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  .input:checked + .__icon {
    background: #2196f3;
    border-color: #2196f3;
  }
}
</style>