import { useEffect, useState } from "react";
import Model from "./components/Model";
import ShowDirectory from "./components/ShowDirectory";
import RenameModel from "./components/RenameModel";
import Modal from "./components/Model";
import { useNavigate, useParams } from "react-router-dom";

function App() {
  const BASE_URL = "http://localhost:4000";
  const [directoryItems, setDirectoryItems] = useState([]);
  const [progress, setProgress] = useState(0);
  const [modalType, setModalType] = useState(null);
  const [renameFile, setRenameFile] = useState({
    oldName: null,
    newName: null,
  });
  const { "*": params } = useParams();
  const navigate = useNavigate();

  async function getDirectoryItems(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setDirectoryItems(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getDirectoryItems(`${BASE_URL}/directory/${params === "" ? "" : params}`);
  }, [params]);

  const handleChange = (e) => {
    const file = e.target.files[0];
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${BASE_URL}/${file.name}`, true);
    xhr.addEventListener("load", (e) => console.log(JSON.parse(xhr.response)));
    xhr.upload.addEventListener("progress", (e) => {
      const totalProgress = (e.loaded / e.total) * 100;
      setProgress(totalProgress.toFixed(2));
    });
    xhr.send(file);
  };

  return (
    <>
      <main style={{ width: "90%", maxWidth: "720px", marginInline: "auto" }}>
        <header className="spaceBetween">
          <h1>My Files</h1>
          <span
            className="binIcon"
            onClick={() => {
              setModalType("trash");
            }}
          >
            🗑️
          </span>
        </header>
        <p>{progress}</p>
        <input
          type="file"
          style={{ marginBottom: "4rem" }}
          onChange={handleChange}
        />
        {directoryItems.map(({ name, isDirectory }, i) => (
          <div key={i} className="spaceBetween">
            <span>{name}</span>
            <div>
              {isDirectory ? (
                <button
                  onClick={() => {
                    navigate(name);
                  }}
                >
                  Open
                </button>
              ) : (
                <a href={`${BASE_URL}/files/${name}?action=open`}>Open</a>
              )}{" "}
              {!isDirectory && (
                <a href={`${BASE_URL}/files/${name}?action=download`}>
                  Download
                </a>
              )}{" "}
              <button
                onClick={async () => {
                  if (isDirectory) return;
                  try {
                    const res = await fetch(`${BASE_URL}/files/${name}`, {
                      method: "DELETE",
                    });
                    const data = await res.json();
                    if (!data.success) return;
                    setDirectoryItems((prevState) =>
                      prevState.filter((item) => item.name !== name),
                    );
                  } catch (error) {
                    console.log(error.message);
                  }
                }}
              >
                Move to Trash Bin
              </button>{" "}
              <button
                onClick={() => {
                  setRenameFile((prev) => ({ oldName: name, newName: name }));
                  setModalType("rename");
                }}
              >
                Rename
              </button>
            </div>
          </div>
        ))}
      </main>
      <Modal isOpen={modalType !== null} onClose={() => setModalType(null)}>
        {modalType === "trash" && <ShowDirectory />}

        {modalType === "rename" && (
          <>
            <input
              type="text"
              placeholder="Enter new filename"
              value={renameFile.newName || ""}
              onChange={(e) =>
                setRenameFile((prev) => ({ ...prev, newName: e.target.value }))
              }
            />
            <button
              onClick={async () => {
                try {
                  const res = await fetch(`${BASE_URL}/files/rename`, {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(renameFile),
                  });
                  console.log(JSON.stringify(renameFile));
                  const data = await res.json();
                  // if (!data.success) return;
                  // setDirectoryItems((prevState) =>
                  //   prevState.filter((item) => item.name !== name),
                  // );
                } catch (error) {
                  console.log(error.message);
                }
              }}
            >
              Rename
            </button>
          </>
        )}
      </Modal>
    </>
  );
}

export default App;
