let userData;

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => {
    console.log('Got the data');
    console.log(json);
    userData = json
  });
