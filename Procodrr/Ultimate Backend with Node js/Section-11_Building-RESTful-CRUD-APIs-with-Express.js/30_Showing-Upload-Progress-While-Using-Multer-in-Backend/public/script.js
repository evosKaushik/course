const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  formData.append("parentDirId", "as-23fase3-rfasdfv-q34w-rfasdf-3rsf23r");

  const xhr = new XMLHttpRequest();
  xhr.open("POST", `http://localhost:4000/upload`, true);
  xhr.responseType = "json";
  xhr.addEventListener("load", () => {
    console.log(xhr.response);
  });
  xhr.upload.addEventListener("progress", (e) => {
    const totalProgress = (e.loaded / e.total) * 100;
    document.querySelector("p").innerText = `${totalProgress.toFixed(2)}%`;
  });
  xhr.send(formData);
});
