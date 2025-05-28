<template>
  <div class="container">
    <div class="header">
      <p class="desc">Дети (макс. 5)</p>
      <button
        v-if="children.length < 5"
        class="add-btn"
        @click="emit('add-child')"
        :disabled="children.length >= 5"
      >
        <Plus color="rgb(1, 167, 253)" />
        Добавить ребенка
      </button>
    </div>

    <div class="children-wrapper">
      <ChildrenItem
        v-for="(child, index) in children"
        :key="child.id"
        v-model:name="child.name"
        v-model:age="child.age"
        @remove="$emit('remove-child', index)"
      />
    </div>
  </div>
</template>

<script setup>
import Plus from '@/components/icons/Plus.vue'
import ChildrenItem from '@/components/ChildrenItem.vue'

defineProps({
  children: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['add-child', 'remove-child'])
</script>

<style lang="scss" scoped>
.container {
  .header {
    display: flex;
    justify-content: space-between;
    align-content: center;
    height: 44px;
    margin-bottom: 11px;

    .desc {
      color: rgb(17, 17, 17);
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      align-self: center;
    }

    .add-btn {
      width: 204px;
      height: 44px;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 20px 10px 20px;
      border: 2px solid rgb(1, 167, 253);
      border-radius: 100px;
      color: rgb(1, 167, 253);
      cursor: pointer;
      background: transparent;
      transition: all .2s linear;

      &:hover {
        background: rgba(110, 65, 226, 0.04);
      }
    }
  }

  .children-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
