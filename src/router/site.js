/* Layout */
import Layout from '@/layout'

export default [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index'),
    hidden: true,
    meta: { requiresAuth: false }
  },

  {
    path: 'external-link',
    name: 'helpDocs',
    component: Layout,
    hidden: process.env.NODE_ENV !== 'development',
    children: [
      {
        path: 'https://panjiachen.gitee.io/vue-element-admin-site/zh/',
        meta: { title: '模板文档', icon: 'link' }
      }
    ]
  },

  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/site',
    children: [{
      path: 'site',
      name: 'HomeIndex',
      component: () => import('@/views/site/index'),
      meta: {
        title: '首页',
        icon: 'dashboard',
        affix: true,
        allow: true,
        requiresAuth: false
      }
    }]
  }
]
