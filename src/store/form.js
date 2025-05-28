import { reactive } from 'vue'

export const globalData = reactive({
  personalData: {
    name: '',
    age: ''
  },
  children: []
})
