import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'House-Hotel'
      },
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/reservation/:id',
      name: 'reservation',
      meta: {
        title: 'House-Hotel-訂房'
      },
      component: () => import('../views/ReservationView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      meta: {
        title: 'Page Not Found'
      },
      component: () => import('../views/NotFound.vue')
    }
  ]
})

router.afterEach((to) => {
  document.title = to.meta.title
})

export default router
