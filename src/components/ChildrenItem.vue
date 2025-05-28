<template>
  <div class="item-wrapper">
    <InputUI
      label="Имя"
      :modelValue="name"
      @update:modelValue="$emit('update:name', $event)"
      type="text"
    />
    <InputUI
      label="Возраст"
      :modelValue="age"
      @update:modelValue="$emit('update:age', $event)"
      type="number"
    />
    <button @click="$emit('remove')">Удалить</button>
  </div>
</template>

<script setup>
import InputUI from '@/components/ui/InputUI.vue'

defineProps({
  name: String,
  age: String
})

defineEmits(['update:name', 'update:age', 'remove'])
</script>

<style lang="scss" scoped>
.item-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 18px;

  div {
    width: 100%;
  }

  button {
    color: rgb(1, 167, 253);
    font-size: 14px;
    font-weight: 400;
    background: transparent;
    border: none;
    cursor: pointer;
    height: fit-content;
  }
}
</style>
