

// v1
var rec = (words, map, index) => {
  if (words.length === 1) {
      return true
  }
  
  for (let i = 0; i < words.length - 1; i++) {
      const value = map.get(words[i].charAt(index))
      const nextValue = map.get(words[i+1].charAt(index)) ?? -1
      
      if (value < nextValue) {
          newWords = []
          
          for (let j = 0; j < words.length; j++) {
              if (i+1 !== j) {
                  newWords.push(words[j])
              }
          }
          
          return rec(newWords, map, index+1)
      }
      
      if (value > nextValue) {
          return false
      }
      
      if (value === nextValue) {
          return rec(words, map, index+1)
      }
  }
  
  return true
}

/**
* @param {string[]} words
* @param {string} order
* @return {boolean}
*/
var isAlienSorted = function(words, order) {
  const orderMap = new Map()
  
  order.split('').forEach((chart, index) => {
      orderMap.set(chart, index)
  })
  
  return rec(words, orderMap, 0)
};