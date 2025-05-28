<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
</script>

<template>
  <Header />

  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  margin-bottom: 150px;
}
</style>
