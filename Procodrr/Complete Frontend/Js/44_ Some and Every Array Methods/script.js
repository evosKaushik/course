const evennumbers = [0, 2, 4, 6, 8, 3];

const somenumber = evennumbers.some((num, i) => {
  // console.log(num);
  if ((num % 2) !== 0) {
    console.log(i);
  }
  return (num % 2) === 0;
});

console.log(somenumber);
