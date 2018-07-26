import {post, service} from '../index'
export default {
  login (param) {
    return post(service + '/xxx/xxx222.do', param)
  },
  test (param) {
    return post(service + '/cert/certInfoChangeStatistics/list', param)
  }
}
