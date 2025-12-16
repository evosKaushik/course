function makeHttpRequest(method, url, callback) {

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", () => {
    let a = JSON.parse(xhr.response);
    callback(a)
  });

  xhr.open(method, url);
  xhr.send();
}

makeHttpRequest('GET', 'https://dummyjson.com/users', (data)=>{
  console.log(data)
  makeHttpRequest('GET', `https://dummyjson.com/post/user/${data.users[0].id}`, (data)=>{
    console.log(data)
  })
})