export default [
  {
    path: '/form',
    name: 'form',
    component: () =>
      import(/* webpackChunkName: "form" */ '../views/FormView.vue'),
    meta: { name: 'Форма' },
  },
  {
    path: '/preview',
    name: 'preview',
    component: () =>
      import(/* webpackChunkName: "preview" */ '../views/PreviewView.vue'),
    meta: { name: 'Превью' },
  },
]
