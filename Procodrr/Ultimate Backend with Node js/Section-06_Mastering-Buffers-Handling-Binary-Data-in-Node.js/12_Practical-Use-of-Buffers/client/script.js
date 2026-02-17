// fetch('http://localhost:3000/', {
//     method: "POST",
//     body: "Kaushik"
// })
// .then((res)=> res.text())
// .then((data)=> console.log(data))

const file = document.getElementById("file");

file.addEventListener("change", (e) => {
  const file = event.target.files[0];
  const fileName = file.name;
  const reader = new FileReader();
  reader.addEventListener("load", function (e) {
    const arrayBuffer = e.target.result;
    console.log(arrayBuffer);
    fetch("http://localhost:3000/", {
      method: "POST",
      // body: arrayBuffer,
      body: JSON.stringify({
        fileName,
        FileBuffer: arrayBuffer,
      }),
    })
      .then((res) => res.text())
      .then((data) => console.log(data));
  });

  reader.readAsArrayBuffer(file);
});
