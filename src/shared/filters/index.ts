import { ageToStr } from '@/shared/filters/ageToStr'

export default function registerFilters(app: any) {
  app.config.globalProperties.$filters = {
    ageToStr,
  }
}
