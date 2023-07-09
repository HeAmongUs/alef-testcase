import { defineStore } from 'pinia'
import type { User } from '@/entities/user/schem'

export const useStore = defineStore('store', {
  state: () => {
    return {
      user: {
        name: null,
        age: null,
        children: [],
      } as User,
    }
  },
  actions: {
    setUser(newUser: User) {
      this.user = {
        name: newUser.name,
        age: newUser.age,
        children: newUser.children?.filter((child) => !!child.name) || [],
      }
    },
  },
  persist: true,
})
