<template>
  <form class="form" @submit.prevent>
    <v-card title="Персональные данные" title-class="">
      <v-label-input v-model="user.name" label="Имя" type="text" />
      <v-label-input v-model="user.age" label="Возраст" type="number" />
    </v-card>
    <v-card>
      <template #title>
        <div
          class="d-flex align-center md-column justify-space-between gap-20 flex-grow-1"
        >
          <span>Дети (макс. 5)</span>
          <v-btn
            v-if="user.children?.length < 5"
            class="d-flex align-center"
            variant="outlined"
            @click="addChild"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
            </svg>
            <span class="ml-4">Добавить ребенка</span>
          </v-btn>
        </div>
      </template>
      <template #default>
        <transition-group
          name="children-list"
          tag="il"
          class="children-list"
          mode="out-in"
        >
          <li
            v-for="(child, index) in user.children"
            :key="index"
            class="children-list-item"
          >
            <span class="d-flex md-column w-100 gap-10">
              <v-label-input v-model="child.name" label="Имя" type="text" />
              <v-label-input
                v-model="child.age"
                label="Возраст"
                type="number"
              />
            </span>
            <v-btn
              variant="text"
              text="Удалить"
              @click="deleteChildren(index)"
            />
          </li>
          <li
            v-if="!user.children?.length"
            :key="-1"
            class="children-list-item"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
              />
            </svg>
            <span class="ml-4">Список детей пуст</span>
          </li>
        </transition-group>

        <transition name="fade"></transition>
      </template>
      <template #actions>
        <v-btn text="Сохранить" @click="saveUser" />
      </template>
    </v-card>
  </form>
</template>

<script setup lang="ts">
  import VCard from '@/shared/components/ui/VCard'
  import VLabelInput from '@/shared/components/ui/VLabelInput'
  import VBtn from '@/shared/components/ui/VBtn'
  import { onMounted, ref } from 'vue'
  import { Person, User } from '@/entities/user/schem'
  import { useStore } from '@/store'

  const store = useStore()

  const user = ref<User>({
    name: null,
    age: null,
    children: [] as Array<Person>,
  })

  function addChild() {
    user.value.children.push({ name: null, age: null })
  }

  function deleteChildren(index: number) {
    user.value.children.splice(index, 1)
  }

  const saveUser = () => {
    store.setUser(user.value)
  }

  onMounted(() => {
    user.value = { ...store.user, children: store.user.children?.slice(0) || [] }
  })
</script>

<style lang="scss">
  .form {
    .v-card-text {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .v-card + .v-card {
      margin-top: 30px;
    }

    .children-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      &-item {
        display: flex;
        align-items: center;
        gap: 20px;
      }
    }

    svg {
      width: 28px;
      fill: var(--color-primary);
    }
  }

  .children-list {
    &-move,
    &-enter-active,
    &-leave-active {
      transition: all 0.5s ease;
    }
    &-enter-from,
    &-leave-to {
      opacity: 0;
      transform: translateX(50px);
    }

    &-leave-active {
      position: absolute;
    }
  }
</style>
