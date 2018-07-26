const wallet = (resolve) => { require(['pages/wallet/wallet'], resolve) }
const balance = (resolve) => { require(['pages/wallet/balance'], resolve) }
const recharge = (resolve) => { require(['pages/wallet/recharge'], resolve) }
const cash = (resolve) => { require(['pages/wallet/cash'], resolve) }
const walletRoutes = [
  {
    name: 'wallet',
    component: wallet,
    path: '/wallet'
  },
  {
    name: 'balance',
    component: balance,
    path: '/balance'
  },
  {
    name: 'recharge',
    component: recharge,
    path: '/recharge'
  },
  {
    name: 'cash',
    component: cash,
    path: '/cash'
  }
]

export default walletRoutes
