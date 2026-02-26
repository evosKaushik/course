const response = await fetch("http://localhost:4000/");
// const data = await res.text()

const decoder = new TextDecoder();

console.log(response);

for await (const chunk of response.body) {
  console.log(decoder.decode(chunk));
}
