<template>
  <div v-if="globalData.personalData.age || globalData.personalData.name" class="wrapper up">
    <p class="text">Персональные данные</p>
    <p class="info">
      {{ globalData.personalData.name }}
      <template v-if="globalData.personalData.age">, {{ globalData.personalData.age }} лет</template>
    </p>
  </div>

  <div v-if="globalData.children.length" class="wrapper children">
    <p class="text children">Дети</p>

    <DisplayChildren
      v-for="item in globalData.children"
      :key="item.id"
      :age="item.age"
      :name="item.name"
    />
  </div>
</template>

<script setup>
import DisplayChildren from '@/components/DisplayChildren.vue'
import { globalData } from '@/store/form.js'
</script>

<style lang="scss" scoped>
.wrapper {

  &.up {
    margin-bottom: 60px;
  }

  &.children {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .text {
    color: rgb(17, 17, 17);
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 20px;

    &.children {
      margin-bottom: 0;
    }
  }

  .info {
    color: rgb(17, 17, 17);
    font-size: 16px;
    font-weight: 700;
  }

  .children-name {
    color: rgb(0, 0, 0);
    font-size: 16px;
    font-weight: 700;
    border-radius: 5px;
    padding: 10px 20px 10px 20px;
    background: rgb(241, 241, 241);
  }
}
</style>
