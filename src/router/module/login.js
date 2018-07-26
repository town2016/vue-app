import login from '@/pages/login/index'
import register from '@/pages/login/register'
import resetPassword from '@/pages/login/resetPassword'
import error from '@/pages/error/index'
export default [
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/resetPassword',
    name: 'resetPassword',
    component: resetPassword
  },
  {
    path: '/error',
    name: 'error',
    component: error
  }
]
