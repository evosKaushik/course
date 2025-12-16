function getBiggestNumFromArray(numArray) {
  let biggestNumber = numArray[0];

  for (let index = 0; index < numArray.length; index++) {
    if (numArray[index] > biggestNumber) {
      biggestNumber = numArray[index];
    }
  }
  return biggestNumber;
}

let abc = [2, 3, 4, 5, 6, 7, 8, 9, 5, 14];

console.log(getBiggestNumFromArray(abc));
