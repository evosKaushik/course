import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const URL = "http://127.0.0.1/";
  const [directoryItems, setDirectoryItems] = useState([]);
  const [progress, setProgress] = useState("");
  const [isEditing, setIsEditing] = useState({
    active: false,
    prevName: "",
    changeName: "",
  });

  async function getDirectoryItems() {
    const response = await fetch(URL);
    const data = await response.json();
    setDirectoryItems(data);
  }
  useEffect(() => {
    getDirectoryItems();
  }, []);
  const handleChange = (e) => {
    const file = e.target.files[0];
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${URL}upload`, true);
    xhr.setRequestHeader("filename", file.name);
    xhr.addEventListener("load", (e) => console.log(xhr.response));
    xhr.upload.addEventListener("progress", (e) => {
      const totalProgress = (e.loaded / e.total) * 100;
      setProgress(totalProgress.toFixed(2));
      console.log(totalProgress);
    });
    xhr.send(file);
  };
  return (
    <>
      <h1>My Files</h1>
      <input type="file" onChange={handleChange} />
      <p>{progress}</p>
      {directoryItems.map((item, i) => (
        <div key={i}>
          {item} <a href={`${URL}${item}?action=open`}>Open</a>{" "}
          <a href={`${URL}${item}?action=download`}>Download</a>{" "}
          <a href={`${URL}${item}?action=delete`}>Delete</a>{" "}
          <button
            onClick={(e) =>
              setIsEditing({
                active: true,
                prevName: item,
                changeName: "",
              })
            }
          >
            Rename
          </button>
          <br />
        </div>
      ))}
      {isEditing.active && (
        <>
          <input
            type="text"
            placeholder="Rename"
            onChange={(e) => {
              setIsEditing((prev) => ({ ...prev, changeName: e.target.value }));
            }}
          />
          <button
            onClick={async () => {
              console.log("Sucess");
              console.log(isEditing);
              fetch(URL, {
                method: "PUT",
                body: JSON.stringify({
                  prevFilename: isEditing.prevName,
                  renameFilename: isEditing.changeName,
                }),
              });
            }}
          >
            Done
          </button>
        </>
      )}
    </>
  );
}

export default App;
