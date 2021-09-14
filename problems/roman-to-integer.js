// v2
function romanToInteger(str) {
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }

  let sum = 0

  for (let i = 0; i < str.length; i++) {
    const sign = map[str[i]] < map[str[i+1]] ? -1 : 1

    sum += map[str[i]] * sign
  }

  return sum
}

// v1
function romanToInteger(str) {
  const map = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000,
  }

  let sum = 0

  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] < map[str[i+1]]) {
      sum += map[`${str[i]}${str[i+1]}`]
      i += 1
    } else {
      sum += map[str[i]]
    }
  }

  return sum
}

console.log(romanToInteger('MMMCDXX'))