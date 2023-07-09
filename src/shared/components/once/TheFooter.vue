<template>
  <footer class="footer">
    {{ text }}
  </footer>
</template>

<script setup>
  const text = 'all rights reserved'
</script>

<style scoped>
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px 0;
    font-size: 13px;
    background: var(--color-grey-m);
  }
</style>
