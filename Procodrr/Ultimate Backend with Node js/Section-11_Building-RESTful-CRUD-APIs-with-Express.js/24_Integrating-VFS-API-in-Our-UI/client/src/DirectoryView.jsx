import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function DirectoryView() {
  const BASE_URL = "http://localhost:4000";
  const [directoryItems, setDirectoryItems] = useState([]);
  const [progress, setProgress] = useState(0);
  const [newFilename, setNewFilename] = useState("");
  const [dirname, setDirname] = useState("");
  const { "*": dirPath } = useParams();

  async function getDirectoryItems() {
    const response = await fetch(`${BASE_URL}/directory/${dirPath}`);
    const data = await response.json();
    console.log(data.files);
    setDirectoryItems(data);
  }
  useEffect(() => {
    getDirectoryItems();
  }, [dirPath]);

  async function uploadFile(e) {
    const file = e.target.files[0];
    console.log(file.name);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${BASE_URL}/file/${file.name}`, true);
    xhr.addEventListener("load", () => {
      console.log(xhr.response);
      getDirectoryItems();
    });
    xhr.upload.addEventListener("progress", (e) => {
      const totalProgress = (e.loaded / e.total) * 100;
      setProgress(totalProgress.toFixed(2));
    });
    xhr.send(file);
  }

  async function handleDelete(fileId) {
    console.log(fileId);
    const response = await fetch(`${BASE_URL}/file/${fileId}`, {
      method: "DELETE",
    });
    const data = await response.text();
    console.log(data);
    getDirectoryItems();
  }

  async function renameFile(oldFilename) {
    console.log({ oldFilename, newFilename });
    setNewFilename(oldFilename);
  }

  async function saveFilename(id) {
    // setNewFilename(oldFilename);
    const response = await fetch(`${BASE_URL}/file/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newName: newFilename }),
    });
    const data = await response.text();
    console.log(data);
    setNewFilename("");
    getDirectoryItems();
  }

  const handleCreateDirectory = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${BASE_URL}/directory${dirPath ? "/" + dirPath : ""}/${dirname}`,
        {
          method: "POST",
        },
      );
      await res.json();
      setDirname("");
      getDirectoryItems();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <h1>My Files</h1>
      <input type="file" onChange={uploadFile} />
      <input
        type="text"
        onChange={(e) => setNewFilename(e.target.value)}
        value={newFilename}
      />
      <p>Progress: {progress}%</p>

      <form onSubmit={handleCreateDirectory}>
        <input
          type="text"
          value={dirname}
          onChange={(e) => setDirname(e.target.value)}
        />
        <button>Create Directory</button>
      </form>

      {directoryItems.files?.map(({ name, id, extension }) => (
        <div key={id}>
          <span>
            {name}
            {extension}
          </span>{" "}
          <a href={`${BASE_URL}/file/${id}?action=open`}>Open</a>{" "}
          <a href={`${BASE_URL}/file/${id}?action=download`}> Download</a>{" "}
          <button onClick={() => renameFile(name + extension)}>Rename</button>{" "}
          <button onClick={() => saveFilename(id)}>Save</button>{" "}
          <button
            onClick={() => {
              handleDelete(id);
            }}
          >
            Delete
          </button>
          <br />
        </div>
      ))}
    </>
  );
}

export default DirectoryView;
