// Problem Statement - 1

function leapYearFinder(year) {
    if (year % 4 === 0) {
      return true;
    } else if (year % 4 !== 0) {
      return false;
    } else {
      return "Provide a valid Year";
    }
}
function leapYearFinder2(year) {
  return (year % 4) === 0;
}

console.log(leapYearFinder2(2023));
