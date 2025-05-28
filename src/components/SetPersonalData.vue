<template>
  <div class="personal">
    <p class="text">Персональные данные</p>
    <div class="input-wrapper">
      <InputUI
        type="text"
        v-model="modelName"
        label="Имя"
      />
      <InputUI
        type="number"
        v-model="modelAge"
        label="Возраст"
      />
    </div>
  </div>
</template>

<script setup>
import InputUI from '@/components/ui/InputUI.vue'
import { computed } from 'vue'

const props = defineProps({
  name: String,
  age: String
})

const emit = defineEmits(['update:name', 'update:age'])

const modelName = computed({
  get: () => props.name,
  set: val => emit('update:name', val)
})

const modelAge = computed({
  get: () => props.age,
  set: val => emit('update:age', val)
})
</script>

<style lang="scss" scoped>
.personal {
  margin-bottom: 33px;

  .text {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 20px;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
