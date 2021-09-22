function clearAllTimeout() {
  window.__timers.forEach(timer => clearTimeout(timer))
}

window.setTimeoutOrig = window.setTimeout

window.setTimeout = function(cb, time) {
  if (!Array.isArray(window.__timers)) {
    window.__timers = []
  }

  const timeout = window.setTimeoutOrig(cb, time)

  window.__timers.push(timeout)

  return timeout
}