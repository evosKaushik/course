import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function DirectoryView() {
  const BASE_URL = "http://localhost:4000";
  const [directoryItems, setDirectoryItems] = useState([]);
  const [progress, setProgress] = useState(0);
  const [newFilename, setNewFilename] = useState("");
  const [dirname, setDirname] = useState("");
  const { dirId } = useParams();

  async function getDirectoryItems() {
    const response = await fetch(`${BASE_URL}/directory/${dirId || ""}`, {
      headers: {
        parentid: dirId,
      },
    });
    const data = await response.json();
    console.log(data.files);
    setDirectoryItems(data);
  }
  useEffect(() => {
    getDirectoryItems();
  }, [dirId]);

  async function uploadFile(e) {
    const file = e.target.files[0];
    console.log(file.name);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${BASE_URL}/file/${dirId || ""}`, true);
    xhr.setRequestHeader("filename", file.name);
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

  async function handleDelete(fileId, item) {
    console.log(fileId);
    const response = await fetch(`${BASE_URL}/${item}/${fileId}`, {
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

  async function saveFilename(id, item) {
    // setNewFilename(oldFilename);
    const response = await fetch(`${BASE_URL}/${item}/${id}`, {
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
      const res = await fetch(`${BASE_URL}/directory/${dirId || ""}`, {
        method: "POST",
        headers: {
          dirname,
        },
      });
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

      <h1>Files</h1>
      {directoryItems.files?.map(({ name, id, extension }) => (
        <div key={id}>
          <span>
            {name}
            {extension}
          </span>{" "}
          <a href={`${BASE_URL}/file/${id}?action=open`}>Open</a>{" "}
          <a href={`${BASE_URL}/file/${id}?action=download`}> Download</a>{" "}
          <button onClick={() => renameFile(name + extension)}>Rename</button>{" "}
          <button onClick={() => saveFilename(id, "file")}>Save</button>{" "}
          <button
            onClick={() => {
              handleDelete(id, "file");
            }}
          >
            Delete
          </button>
          <br />
        </div>
      ))}
      <h1>Folder</h1>
      {directoryItems.directories?.map(({ name, id }) => (
        <div key={id}>
          <span>{name}</span> <Link to={`/directory/${id}`}>Open</Link>{" "}
          <button onClick={() => renameFile(name)}>Rename</button>{" "}
          <button onClick={() => saveFilename(id, "directory")}>Save</button>{" "}
          <button
            onClick={() => {
              handleDelete(id, "directory");
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
