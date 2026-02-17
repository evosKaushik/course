// fetch('http://localhost:3000/', {
//     method: "POST",
//     body: "Kaushik"
// })
// .then((res)=> res.text())
// .then((data)=> console.log(data))

const file = document.getElementById("file");

file.addEventListener("change", (e) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.addEventListener("load", function (e) {
    const arrayBuffer = e.target.result;
    fetch("http://localhost:3000/", {
      method: "POST",
      body: arrayBuffer,
    })
      .then((res) => res.text())
      .then((data) => console.log(data));
  });

  reader.readAsArrayBuffer(file);
});
