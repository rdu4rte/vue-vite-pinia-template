const breadcrumbsHome = { name: 'Home', pathName: '/' }

export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/views/Home.vue'),
    meta: {
      title: 'Home',
      breadcrumbs: [breadcrumbsHome]
    }
  }
]