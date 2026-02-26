const input = document.querySelector("input");

const decoder = new TextDecoder();
input.addEventListener("change", async () => {
  const file = input.files[0];
  const readStream = file.stream();
//   const reader = readStream.getReader();

  for await (const chunk of readStream){
    console.log(chunk)
  }
});
