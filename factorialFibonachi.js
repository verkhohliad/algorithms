
function factorial(n) {
  if (n === 1) {
    return n;
  }

  return n * factorial(n - 1);
}

function factorialLoop(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result
}

console.log(factorial(10))
console.log(factorialLoop(10))

// 1,1,2,3,5,8,13,21,34,55,89

function fibonachi(n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fibonachi(n - 1) + fibonachi(n - 2);
}

console.log(fibonachi(32))
