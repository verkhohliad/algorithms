function debounce(func, wait) {
  let timeout = null

  return (arg) => {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      func(arg)
    }, wait)
  }
}