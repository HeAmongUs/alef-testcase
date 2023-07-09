import { Nullable } from '@/shared/types'

interface Person {
  name?: Nullable<string>
  age?: Nullable<number>
}

interface User extends Person {
  children: Array<Person>
}

export { Person, User }
