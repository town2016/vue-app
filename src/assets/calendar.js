export default class MonthCalendar {
  constructor (year = new Date().getFullYear(), month = new Date().getMonth() + 1) {
    this.year = year
    this.month = month
    this.firstDay = new Date(year + '/' + month + '/1').getDate()
    this.firstWeek = new Date(year + '/' + month + '/1').getDay()
    this.lastDay = getMonthLast(this.year, this.month).lastDay.getDate()
    this.lastWeek = getMonthLast(this.year, this.month).lastWeek
  }
}
function getMonthLast (year, month) {
  let newYear = year
  let newMonth = month++
  if (month > 12) {
    newMonth -= 12
    newYear++
  }
  let newDate = new Date(newYear, newMonth, 1)
  let calendar = {}
  calendar.lastDay = (new Date(newDate.getTime() - 1000 * 60 * 60 * 24))
  calendar.lastWeek = (new Date(newDate.getTime() - 1000 * 60 * 60 * 24)).getDay()
  return calendar
}
