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

// recursion
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
  let left = 0
  let middle
  
  var checkVersion = function(n) {
      middle = Math.floor((left + n) / 2)
      
      if (isBadVersion(middle)) {
          if (!isBadVersion(middle-1)) return middle
          
          n = middle - 1
      } else {
          left = middle + 1
      }
      
      return checkVersion(n)
  };
  
  return checkVersion
};