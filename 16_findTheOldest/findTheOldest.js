// using sort()
// const findTheOldest = function (arr) {
//   return arr.sort((a, b) => {
//     const oldest = getAge(a.yearOfBirth, a.yearOfDeath);
//     const current = getAge(b.yearOfBirth, b.yearOfDeath);
//     return current - oldest;
//   })[0];
// };

// using reduce()
const findTheOldest = function (arr) {
  return arr.reduce((oldest, current) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);

    return oldestAge < currentAge ? current : oldest;
  });
};

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
