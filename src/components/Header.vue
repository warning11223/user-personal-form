<template>
  <header class="header">
   <div class="wrapper">
     <RouterLink to="/">
       <Logo />
     </RouterLink>
     <div class="link-wrapper">
       <RouterLink
         :class="['link', { active: route.path === '/' }]"
         to="/">
         Форма
       </RouterLink>

       <RouterLink
         :class="['link', { active: route.path === '/preview' }]"
         to="/preview">
         Превью
       </RouterLink>
     </div>
     <div class="block"></div>
   </div>
  </header>
</template>

<script setup>
import Logo from '@/components/icons/Logo.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style lang="scss" scoped>
.header {
  box-shadow: 0px 1px 0px 0px rgba(17, 17, 17, 0.1);
  padding: 0 92px;

  .wrapper {
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1366px;
    margin: 0 auto;

    .block {
      width: 175px;
    }

    .link-wrapper {
      display: flex;
      align-items: center;
      gap: 24px;

      .link {
        color: rgba(17, 17, 17, 0.48);
        font-size: 14px;
        font-weight: 400;
        text-decoration: none;
        border-bottom: 2px solid transparent;
        padding-bottom: 5px;

        &:hover {
          border-bottom: 2px solid rgba(17, 17, 17, 0.48);
        }

        &.active {
          border-bottom: 2px solid rgb(1, 167, 253);
        }
      }
    }
  }
}
</style>
