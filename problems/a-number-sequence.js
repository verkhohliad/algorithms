function getNthNum(n) {
  let str = '1'

  for (let i = 1; i < n; i++) {
    let newStr = ''
    let num
    let times = 0

    for (let j = 0; j < str.length; j++) {
      if (num && num !== str[j]) {
        newStr += `${times}${num}`
        times = 0
      }

      num = str[j]
      times++
    }

    newStr += `${times}${num}`

    str = newStr
  }

  return str
}

console.log(getNthNum(5)) //.toBe('111221')
console.log(getNthNum(6)) // 312211
console.log(getNthNum(7)) // 13112221
