<template>
  <div class="input-wrapper" @click="focus()">
    <input
      ref="input"
      class="input"
      :value="lazyModelValue"
      :class="{ fulled: ![null, undefined, ''].includes(lazyModelValue) }"
      :type="type"
      @input="updateModelValue($event.target.value)"
    />
    <span v-if="label" class="label">{{ label }}</span>
  </div>
</template>

<script setup>
  import { ref, watch } from 'vue'

  const props = defineProps({
    modelValue: {
      type: [String, Number, null],
      default: null,
    },
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
      validator: (value) => {
        if (['text', 'number'].includes(value)) return true
        console.warn('Invalid prop value "type"')
        return false
      },
    },
    borderRadius: {
      type: String,
      default: '4px',
    },
  })
  const emits = defineEmits(['update:modelValue'])

  const input = ref(null)
  const focus = () => {
    input.value.focus()
  }

  const updateModelValue = (v) => {
    lazyModelValue.value = v
    emits('update:modelValue', v)
  }

  const lazyModelValue = ref(null)
  watch(
    () => props.modelValue,
    (value) => {
      lazyModelValue.value = value
    },
    { immediate: true }
  )
</script>

<style scoped lang="scss">
  .input {
    padding: 20px 4px 0 16px;
    height: 56px;
    width: 100%;
    border: 1px solid var(--color-grey-light);
    border-radius: v-bind(borderRadius);

    &:focus {
      outline: none;
    }
  }
  .input-wrapper {
    position: relative;
    width: 100%;
    border-radius: v-bind(borderRadius);
    cursor: text;
    .input:focus,
    .input.fulled {
      transition: $transition-duration;
      & + .label {
        top: 5px;
        left: 0;
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
        height: 40%;
        transition: $transition-duration;
      }
    }
    .input:focus {
      border-color: var(--color-primary);
      & + .label {
        color: var(--color-primary);
      }
    }
    .label {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      display: flex;
      align-items: center;
      margin-left: 16px;
      transition: font-size, left, top, $transition-duration;
      user-select: none;
      color: var(--color-grey-light);
    }
  }
</style>
