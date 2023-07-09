<template>
  <div class="preview" @submit.prevent>
    <v-card title="Персональные данные" content-class="form-content">
      <p v-if="user?.name" class="info-item">
        {{ `${user?.name}${user?.age ? ', '+ $filters.ageToStr(user?.age): ''}` }}
      </p>
      <p v-else class="d-flex align-center gap-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
          />
        </svg>
        <span class="ml-4">Данные не заполнены</span>
      </p>
    </v-card>
    <v-card v-if="user.children?.length" title="Дети">
      <ul class="child-info-list">
        <li
          v-for="(child, index) in user.children"
          :key="index"
          class="child-info-list-item info-item"
        >
          {{ `${child?.name}, ${$filters.ageToStr(child?.age)}` }}
        </li>
      </ul>
    </v-card>
  </div>
</template>

<script setup lang="ts">
  import VCard from '@/shared/components/ui/VCard'
  import { onMounted, ref } from 'vue'
  import { Person, User } from '@/entities/user/schem'
  import { useStore } from '@/store'

  const store = useStore()

  const user = ref<User>({
    name: null,
    age: null,
    children: [] as Array<Person>,
  })

  onMounted(() => {
    user.value = { ...store.user, children: store.user.children?.slice(0) || [] }
  })
</script>

<style lang="scss">
  .preview {
    .v-card + .v-card {
      margin-top: 60px;
    }

    .info-item {
      font-weight: bold;
      font-size: 16px;
      display: inline-block;
      width: fit-content;
    }

    svg {
      width: 28px;
      fill: var(--color-primary);
    }

    .child-info-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
      &-item {
        padding: 10px 20px;
        background: var(--color-grey-light);
      }
    }
  }
</style>
