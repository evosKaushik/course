const response = await fetch("http://192.168.43.130:4000");

console.log({ response });

// const data = await response.text()

// console.log(data)

const decoder = new TextDecoder();
for await (const chunk of response.body) {
  document.body.append(decoder.decode(chunk));
}
