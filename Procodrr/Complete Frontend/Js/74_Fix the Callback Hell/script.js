function makeHttpRequest(method, url) {
  const xhr = new XMLHttpRequest();

  xhr.responseType = "json";

  const promise = new Promise((resolve, reject) => {
    xhr.addEventListener("load", () => {
      resolve(xhr.response);
    });
  });

  xhr.open(method, url);
  xhr.send();
  return promise
}

makeHttpRequest('GET', 'https://dummyjson.com/users')
.then((usersData)=>{
  console.log(usersData)
  return usersData.users
}).then(usersData =>{
  console.log(usersData[0].id)
})