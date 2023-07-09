<template>
  <div class="v-card">
    <h6 v-if="$slots.title || title" class="v-card-title">
      <slot name="title">{{ title }}</slot>
    </h6>
    <div v-if="$slots.default" class="v-card-text">
      <slot></slot>
    </div>
    <div v-if="$slots.actions" class="v-card-actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      default: null,
    },
  })
</script>

<style lang="scss">
  .v-card {
    display: flex;
    flex-direction: column;

    &-title {
      color: var(--color-black);
      font-size: 16px;
      font-weight: 500;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;

      & + .v-card-text {
        margin-top: 20px;
      }
    }
    &-text {
      & + .v-card-actions {
        margin-top: 30px;
      }
    }
  }
</style>
