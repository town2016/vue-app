const infoEdit = (resolve) => { require(['@/pages/self/infoEdit'], resolve) }
const selfRoutes = [
  {
    name: 'infoEdit',
    path: '/infoEdit',
    component: infoEdit
  }
]
export default selfRoutes
