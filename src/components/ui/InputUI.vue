<template>
  <div class="field">
    <input
      class="input"
      :type="type"
      required
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <label class="label">{{label}}</label>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  modelValue: String,
  type: String
})

defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
.field {
  position: relative;

  .input {
    width: 100%;
    border: 1px solid rgb(241, 241, 241);
    border-radius: 4px;
    background: rgb(255, 255, 255);
    padding: 26px 16px 6px 16px;
    outline: none;
    transition: all 0.2s linear;
    color: rgb(17, 17, 17);
    font-size: 14px;
    font-weight: 400;

    &:focus {
      border: 1px solid rgb(203, 203, 203);
    }

    &:focus + .label,
    &:not(:placeholder-shown) + .label {
      top: 6px;
      left: 16px;
      font-size: 12px;
    }
  }

  .label {
    position: absolute;
    top: 18px;
    left: 16px;
    pointer-events: none;
    color: rgba(17, 17, 17, 0.48);
    font-size: 13px;
    font-weight: 400;
  }
}
</style>
