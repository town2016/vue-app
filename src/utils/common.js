/**
 *  存放公共方法
 **/
export function timeFormat (_date, format) {
  var type = Object.prototype.toString.call(_date)
  var newDate = null
  var year = ''
  var month = ''
  var month2 = ''
  var day = ''
  var day2 = ''
  var formatDate = ''
  newDate = _date
  if (type !== '[object Date]') {
    newDate = new Date(_date)
  }
  year = newDate.getFullYear()
  month = newDate.getMonth() + 1
  month2 = month > 10 ? month : '0' + month
  day = newDate.getDate()
  day2 = day > 10 ? day : '0' + day
  switch (format) {
    case 'yyyy-mm-dd':
      formatDate = strJoint([year, month2, day2], '-')
      break
    case 'yyyy-m-d':
      formatDate = strJoint([year, month, day], '-')
      break
    case 'yyyy/m/d':
      formatDate = strJoint([year, month, day], '/')
      break
    default:
      formatDate = strJoint([year, month2, day2], '/')
  }
  return formatDate
}

export function strJoint (arr, unit = '/') {
  var str = arr.join(unit)
  return str
}
