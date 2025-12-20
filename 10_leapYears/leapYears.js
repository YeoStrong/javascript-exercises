const leapYears = function(year) {
  if (year % 4 == 0 && year % 100 != 0) {
    return true;
  } else if (year % 400 == 0) {
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = leapYears;
// year % 4 == 0 => leapyear, year % 100 == 0 => no leapyear, year % 400 == 0 => leapyear