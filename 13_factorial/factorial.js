const factorial = function (num) {
  if (num === 0) return 1;
  if (num < 0 || Number.isInteger(num) == false) return undefined;
  let result = 1n;
  for (let i = BigInt(num); i > 0; i--) {
    result *= i;
  }
  return Number(result);
};

// Do not edit below this line
module.exports = factorial;
