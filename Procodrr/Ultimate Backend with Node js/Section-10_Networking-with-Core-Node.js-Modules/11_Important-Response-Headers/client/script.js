const response = await fetch("http://127.0.0.1:4000/");

// console.log(response.body)

response.headers.forEach((value, key) => {
  console.log({[key]:value});
});

// for await(const chunk of response.body){
//     console.log(chunk)
// }
