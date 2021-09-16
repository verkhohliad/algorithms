function firstBadVersion(isBad) {
  return (version) => {
    let tempVersion

    let left = 0
    let right = version

    while (left <= right) {
      tempVersion = Math.floor((right + left) / 2)

      if (isBad(tempVersion)) {
        right = tempVersion - 1
      }

      if (!isBad(tempVersion)) {
        left = tempVersion + 1
      }
    }

    return left > version ? -1 : left
  }
}