export default [
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/error/not-found'),
    hidden: true,
    meta: { allow: true }
  },

  {
    path: '/401',
    name: 'NotAuth',
    component: () => import('@/views/error/not-auth'),
    hidden: true,
    meta: { allow: true }
  },

  { path: '*', redirect: '/404', hidden: true }
]
