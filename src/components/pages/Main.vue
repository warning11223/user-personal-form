<template>
  <div class="container">
    <SetPersonalData
      v-model:name="form.name"
      v-model:age="form.age"
    />
    <SetChildren
      :children="children"
      @add-child="addChild"
      @remove-child="removeChild"
    />
    <SaveDataButton
      v-if="showSaveBtn"
      @save-data="saveData"
    />
  </div>
</template>

<script setup>
import SetChildren from '@/components/SetChildren.vue'
import SetPersonalData from '@/components/SetPersonalData.vue'
import SaveDataButton from '@/components/SaveDataButton.vue'
import { computed, reactive } from 'vue'
import { globalData } from '@/store/form.js'

const form = reactive({
  name: '',
  age: ''
})

const children = reactive([])

const showSaveBtn = computed(() => {
  return form.age !== '' || form.name !== '' || children.length > 0
})

let idCounter = 0

const addChild = () => {
  if (children.length < 5) {
    children.push({
      id: idCounter++,
      name: '',
      age: ''
    })
  }
}

const removeChild = (index) => {
  children.splice(index, 1)
}

const saveData = () => {
  globalData.personalData.name = form.name
  globalData.personalData.age = form.age
  globalData.children.splice(0, globalData.children.length, ...children.map(c => ({ ...c })))

  form.name = ''
  form.age = ''
  children.splice(0, children.length)
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 616px;
  padding-top: 30px;
  margin: 0 auto 30px;
}
</style>
