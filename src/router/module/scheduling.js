const calendars = (resolve) => { require(['@/pages/class/calendars'], resolve) }
const addSchedu = (resolve) => { require(['@/pages/class/editSchedu'], resolve) }
export default [
  {
    name: 'calendars',
    component: calendars,
    path: '/calendars'
  },
  {
    name: 'editSchedu',
    component: addSchedu,
    path: '/editSchedu'
  }
]
