import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import('@/views/HomeView.vue'),
    children: [
      {
        path: '',
        name: 'TheHeader',
        component: () => import('@/views/TheHeader.vue'),
      },
      {
        path: '',
        name: 'TheSlider',
        component: () => import('@/components/TheSlider.vue'),
      },
      {
        path: '',
        name: 'TheNavigation',
        component: () => import('@/components/TheNavigation.vue'),
      },
      {
        path: '',
        name: 'KnowMore',
        component: () => import('@/views/KnowMore.vue'),
      },
      {
        path: '',
        name: 'TheServices',
        component: () => import('@/views/TheServices.vue'),
      },

      {
        path: '',
        name: 'TheFooter',
        component: () => import('@/views/TheFooter.vue'),
      },
    ],
  },
]

// Створюємо екземпляр роутера
const router = createRouter({
  history: createWebHistory(),
  routes, // Використовуємо маршрути, визначені вище
})

// Експортуємо роутер як `export default`
export default router
