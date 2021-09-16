function throttle(func, wait, option = {leading: true, trailing: true}) {
  let isWaiting = false
  let lastArgs = null
  const { leading, trailing } = option

  return (...args) => {
    if (!isWaiting) {
      if (leading) {
        func(...args)
      } else {
        lastArgs = args
      }
      
      isWaiting = true
      setTimeout(() => {
        if (lastArgs && trailing) func(...lastArgs)
        isWaiting = false
        lastArgs = null
      }, wait)
    } else {
      lastArgs = args
    }
  }
}