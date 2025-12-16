// function hi() {
//   console.log('Hello');

//   throw new Error("error in program");

//   console.log('hi');

// }

// async function makeRequest() {
  
// }

// makeRequest()

// function addTwoNumbers() {
//   return 5 + 8
// }

const url = "https://dummyjson.com/users";
  const response = await fetch(url)
  const data = await response.json()
  console.log(data.users[0])