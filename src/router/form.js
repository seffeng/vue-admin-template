/* Layout */
import Layout from '@/layout'

export default [
  {
    path: '/form',
    name: 'Form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'FormIndex',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form', allow: true }
      }
    ]
  }
]
