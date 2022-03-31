export default [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/views/Login.vue'),
    meta: {
      title: 'Login',
      hideNavbar: true
    }
  }
]