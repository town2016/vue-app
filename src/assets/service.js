const services = [
  {
    service: location.origin,
    description: 'ip访问'
  },
  {
    service: '',
    description: 'dev'
  },
  {
    service: 'http://192.168.95.53:10020/apis',
    description: 'uat'
  }
]
let serviceId = 2
console.log(process.env)
export default services[serviceId].service
