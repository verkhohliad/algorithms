// more optimized O(items * 3(item params)) -> O(n)
function excludeItems(items, excludes) {
  const excludeMap = new Map()

  for (let exclude of excludes) {
    if (!excludeMap.has(exclude.k)) {
      excludeMap.set(exclude.k, new Set())
    }

    excludeMap.get(exclude.k).add(exclude.v)
  }

  return items.filter(item => {
    return !Object.entries(item).some(([key, value]) => {
      return excludeMap.has(key) && excludeMap.get(key).has(value)
    })
  })
}

// O(items * excludes)
function excludeItems(items, excludes) {
  return items.filter(item => {
    return !excludes.some(exclude => {
      return item[exclude.k] === exclude.v
    })
  })
}

let items = [
   {color: 'red', type: 'tv', age: 18}, 
   {color: 'silver', type: 'phone', age: 20},
   {color: 'blue', type: 'book', age: 17}
]

const excludes = [ 
 {k: 'color', v: 'silver'}, 
 {k: 'type', v: 'tv'}, 
] 

console.log(excludeItems(items, excludes))
console.log(items.slice(2))