const palindromes = function (str) {
  const processed = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // make str 'flat'
  return processed === processed.split("").reverse().join(""); // to use .reverse()
};

// Do not edit below this line
module.exports = palindromes;
