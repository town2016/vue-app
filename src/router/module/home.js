import home from '@/pages/home/home'
import index from '@/pages/home/index'
import students from '@/pages/home/students'
import grade from '@/pages/home/class'
import self from '@/pages/home/self'

export default [
  {
    path: '/home',
    name: 'home', // students
    component: home,
    children: [
      {
        path: 'index',
        name: 'index',
        component: index
      },
      {
        path: 'students',
        name: 'students',
        component: students
      },
      {
        path: 'class',
        name: 'class',
        component: grade
      },
      {
        path: 'self',
        name: 'self',
        component: self
      }
    ]
  }
]
