import { useEffect, useState } from "react";
import Model from "./components/Model";
import FilePath from "./components/FilePath";
import ShowDirectory from "./components/ShowDirectory";

function App() {
  const URL = "http://localhost:4000";
  const [directoryItems, setDirectoryItems] = useState([]);
  const [showModel, setShowModel] = useState(false);
  const [path, setPath] = useState({
    path: "/",
    url: "/",
  });

  useEffect(() => {
    async function getDirectoryItems(URL) {
      console.log(URL);
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setDirectoryItems(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getDirectoryItems(`${URL}${path.url}`);
  }, [path]);

  return (
    <>
      <main style={{ width: "90%", maxWidth: "720px", marginInline: "auto" }}>
        <header className="spaceBetween">
          <h1>My Files</h1>
          <span
            className="binIcon"
            onClick={() => setShowModel((prev) => !prev)}
          >
            🗑️
            <Model showModel={showModel} setShowModel={setShowModel}>
              <ShowDirectory showModel={showModel} />
            </Model>
          </span>
        </header>
        <FilePath path={path.path} />
        <input type="file" style={{ marginBottom: "4rem" }} />
        {directoryItems.map(({ name, isDirectory }, i) => (
          <div key={i} className="spaceBetween">
            <span>{name}</span>
            <div>
              {isDirectory ? (
                <button
                  onClick={() => {
                    setPath(({path, url}) => ({
                      path: `${path}${path === "/" ? "" : "/"}${name}`,
                      url: `${path}${path === "/" ? "" : "/"}${name}?isDirectory=${isDirectory}`,
                    }));
                  }}
                >
                  Open
                </button>
              ) : (
                <a href={`${URL}${name}?action=open`}>Open</a>
              )}{" "}
              <a href={`${URL}${name}?action=download`}>Download</a>{" "}
              <button
                onClick={async () => {
                  if (isDirectory) return;
                  try {
                    const res = await fetch(`${URL}/${name}`, {
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
              <button>Rename</button>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}

export default App;
