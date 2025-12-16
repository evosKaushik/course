const user = {
  name: "Anurag",
  age: 34,
};

try {
  console.log(user.address.city);
} catch (err) {
  console.dir(err.message);
} finally {
  console.log("Hello World");
}

console.log(3 + 7);

async function MakeAsyncRequest() {
  try {
    const url = "https://dummyjson.com/users";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error)
  }
}

MakeAsyncRequest();
