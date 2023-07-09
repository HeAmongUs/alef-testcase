<template>
  <button class="v-btn" :class="`v-btn_${variant}`">
    <slot>
      {{ text }}
    </slot>
  </button>
</template>

<script setup lang="ts">
  import type { Nullable, Variant } from '@/shared/types'

  interface Props {
    variant?: Variant
    text?: Nullable<string>
  }
  withDefaults(defineProps<Props>(), {
    variant: 'tonal',
    text: null,
  })
</script>

<style lang="scss">
  .v-btn {
    border-radius: 100px;
    font-size: 14px;
    line-height: 24px;
    height: 44px;
    width: fit-content;
    padding: 10px 20px;
    border: none;

    &:hover {
      cursor: pointer;
    }

    &:focus {
      outline: none;
    }

    &_tonal {
      background: var(--color-primary);
      color: var(--color-right-white);
    }

    &_outlined {
      background: transparent;
      color: var(--color-primary);
      border: 2px solid var(--color-primary);
    }

    &_text {
      background: transparent;
      color: var(--color-primary);
    }
  }
</style>
