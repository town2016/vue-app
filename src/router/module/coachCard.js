/* 招生名片 */
import userInfo from '@/pages/coachCard/userInfo'
import coachCard from '@/pages/coachCard/index'
const editCoachCard = (resolve) => { require(['@/pages/coachCard/editCoachCard'], resolve) }
const coachFeature = (resolve) => { require(['@/pages/coachCard/coachFeature'], resolve) }
const handelClassType = (resolve) => { require(['@/pages/coachCard/handelClassType'], resolve) }
const classTypeList = (resolve) => { require(['@/pages/coachCard/classTypeList'], resolve) }
const studentList = (resolve) => { require(['@/pages/coachCard/studentList'], resolve) }
export default [
  {
    path: '/userInfo',
    name: 'userInfo',
    component: userInfo
  },
  {
    path: '/coachCard',
    name: 'coachCard',
    component: coachCard
  },
  {
    path: '/editCoachCard',
    name: 'editCoachCard',
    component: editCoachCard
  },
  {
    path: '/coachFeature',
    name: 'coachFeature',
    component: coachFeature
  },
  {
    path: '/handelClassType',
    name: 'handelClassType',
    component: handelClassType
  },
  {
    path: '/classTypeList',
    name: 'classTypeList',
    component: classTypeList
  },
  {
    path: '/studentList',
    name: 'studentList',
    component: studentList
  }
]
