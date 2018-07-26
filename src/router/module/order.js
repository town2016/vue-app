const order = (resolve) => { require(['@/pages/order/order'], resolve) }
const detail = (resolve) => { require(['@/pages/order/orderDetail'], resolve) }
const refundRules = (resolve) => { require(['@/pages/order/refundRules'], resolve) }
const refund = (resolve) => { require(['@/pages/order/refund'], resolve) }
const orderRoutes = [
  {
    name: 'order',
    path: '/order',
    component: order,
    children: [
      {
        name: 'detail',
        path: 'detail',
        component: detail
      }
    ]
  }, {
    name: 'refundRules',
    path: '/refundRules',
    component: refundRules
  }, {
    name: 'refund',
    path: '/refund',
    component: refund
  }
]

export default orderRoutes
