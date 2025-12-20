const sumAll = function(a, b) {
  if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
    return 'ERROR'
  }
  if (a < b) { 
    return ((b*(b+1)/2) - (a*(a-1)/2))
  }  else if (a > b) {
    return ((a*(a+1)/2) - (b*(b-1)/2))
  } else if (a == b) {
    return a;
  } 
};

// Do not edit below this line
module.exports = sumAll;