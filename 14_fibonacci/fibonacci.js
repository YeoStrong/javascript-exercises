const fibonacci = function (num) {
  num = Number(num);
  if (num === 0) return 0;
  if (num < 0) return "OOPS";

  const fib = [0, 1];
  for (let i = 2; i <= num; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib[num];
};

// 0 1 1 2 3 5 8 13

// Do not edit below this line
module.exports = fibonacci;
