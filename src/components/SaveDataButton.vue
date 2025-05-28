<template>
  <button class="save-btn" @click="emit('saveData')">Сохранить</button>
</template>

<script setup>
defineProps({
  saveData: Function,
})

const emit = defineEmits(['saveData'])
</script>

<style lang="scss" scoped>
.save-btn {
  width: 118px;
  height: 44px;
  padding: 10px 20px 10px 20px;
  border-radius: 100px;
  background: rgb(1, 167, 253);
  color: rgb(255, 255, 255);
  border: none;
  cursor: pointer;
  transition: all .2s linear;

  &:hover {
    background: rgba(1, 167, 253, 0.8);
  }
}
</style>
