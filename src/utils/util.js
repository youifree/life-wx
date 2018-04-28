// 获取当前的时间
export function getNowDay () {
  let myDate = new Date()
  var twoTime = new Date(myDate.getTime() + 1 * 24 * 3600 * 1000) // 明天
  var threeTime = new Date(myDate.getTime() + 2 * 24 * 3600 * 1000) // 后天
  let oneDay = formDate(myDate.getMonth() + 1) + '-' + formDate(myDate.getDate())
  let twoDay = formDate(twoTime.getMonth() + 1) + '-' + formDate(twoTime.getDate())
  let threeDay = formDate(threeTime.getMonth() + 1) + '-' + formDate(threeTime.getDate())
  let list = [
    {time: myDate.getFullYear() + '-' + oneDay, name: oneDay + ' (今天)'},
    {time: twoTime.getFullYear() + '-' + twoDay, name: twoDay + ' (明天)'},
    {time: threeTime.getFullYear() + '-' + threeDay, name: threeDay + ' (后天)'},
  ]
  return list
}

function formDate (time) {
  time = time <= 9 ? '0' + time : time
  return time
}
export function getNowTime (day) {
  let list = []
  let i = 0
  let myDate = new Date()
  let hour = myDate.getHours()
  let min = myDate.getMinutes()
  // 今日 返回的数据从现在的时刻开始
  if (day === 0) {
    i = hour
  }
  for (i; i < 24; i++) {
    let j = i + 1
    j = j <= 9 ? '0' + j : j
    j = j == 24 ? '00' : j
    if (i <= 9) {
      i = '0' + i
    }
    if (min >= 30 && i === hour) {
      list.push({start: i + ':30', end: j + ':00'})
    } else {
      list.push({start: i + ':00', end: i + ':30'})
      list.push({start: i + ':30', end: j + ':00'})
    }
  }
  list[list.length - 1].end = '23:59'
  return list
}
