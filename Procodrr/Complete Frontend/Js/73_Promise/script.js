const resolveBtn = document.querySelector(".resolveBtn");
const rejectBtn = document.querySelector(".rejectBtn");

const p = new Promise((resolve, reject) => {
  resolveBtn.addEventListener("click", () => {
      resolve("Promise Resolve");
  });
  rejectBtn.addEventListener("click", () => {
      reject("Promise Rejected");
  });
});

const p2 = p.then((data)=>{
  console.log('resolve', data)
  return 69
})

