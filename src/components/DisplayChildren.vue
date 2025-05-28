<template>
  <p v-if="name && age" class="children-name">{{name}}, {{age}} лет</p>
</template>

<script setup>
defineProps({
  name: String,
  age: String
})
</script>

<style lang="scss" scoped>

</style>
