function throttle(func, wait) {
  let isWaiting = false
  let nextArgs = null
  
  return (...args) => {
    if (!isWaiting) {
      isWaiting = true
      
      func(...args)

      setTimeout(() => {
        if (nextArgs) func(...nextArgs)
        isWaiting = false
        nextArgs = null
      }, wait)
    } else {
      nextArgs = args
    }
  }
}