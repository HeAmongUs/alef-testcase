<template>
  <the-header />
  <main class="main">
    <router-view v-slot="{ Component }">
      <transition mode="out-in" name="fade">
        <component
          :is="Component"
          :class="$route.meta?.name ?? ''"
          class="page"
        />
      </transition>
    </router-view>
  </main>
  <the-footer />
</template>

<script>
  import { defineComponent } from 'vue'
  import TheHeader from '@/shared/components/once/TheHeader'
  import TheFooter from '@/shared/components/once/TheFooter'

  export default defineComponent({
    name: 'DefaultLayout',
    components: { TheHeader, TheFooter },
  })
</script>

<style>
  .main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    padding: 30px;
  }
</style>
