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
  let roman = str

  while (roman.length > 0) {
    if (map[roman[0]] < map[roman[1]]) {
      sum += map[`${roman[0]}${roman[1]}`]
      roman = roman.slice(2)
    } else {
      sum += map[roman[0]]
      roman = roman.slice(1)
    }
  }
}