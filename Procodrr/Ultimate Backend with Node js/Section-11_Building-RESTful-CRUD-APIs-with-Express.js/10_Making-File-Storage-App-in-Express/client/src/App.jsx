import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const URL = "http://localhost:4000/";
  const [directoryItems, setDirectoryItems] = useState([]);

  async function getDirectoryItems() {
    const response = await fetch("http://localhost:4000");
    const data = await response.json();
    setDirectoryItems(data);
  }
  useEffect(() => {
    getDirectoryItems();
  }, []);

  return (
    <main style={{ width: "90%", maxWidth: "720px", marginInline: "auto" }}>
      <h1>My Files</h1>
      <input type="file" style={{ marginBottom: "4rem" }} />
      {directoryItems.map(({name, isDirectory}, i) => (
        <div
        key={i}
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize:"1.25rem"
        }}
        >
          <span>{name}</span>
          <div>
            <a href={`${URL}${name}?action=open`}>Open</a>{" "}
            <a href={`${URL}${name}?action=download`}>Download</a>{" "}
            <button>Delete</button> <button>Rename</button>
          </div>
        </div>
      ))}
    </main>
  );
}

export default App;
