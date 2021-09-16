
/**
 * @param {string[][]} message
 * @return {string}
 */
 function decode(message) {
  let result = ''

  if (!message || !message[0] || !message[0][0])
    return result

  let reverse = false
  let j = 0
  let i = 0

  while(j < message[0].length) {
    result += message[i][j]

    if (!message[i+1] && !reverse || reverse && !message[i-1]) {
      reverse = !reverse
    }

    if (reverse) {
      i--
    } else {
      i++
    }

    j++
  }

  return result
}