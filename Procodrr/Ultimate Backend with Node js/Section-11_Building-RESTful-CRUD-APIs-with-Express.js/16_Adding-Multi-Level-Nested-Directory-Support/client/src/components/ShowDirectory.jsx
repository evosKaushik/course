import { useState } from "react";
import { useEffect } from "react";

const URL = "http://localhost:4000";
const ShowDirectory = () => {
  const [directory, setDirectory] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetch(`${URL}/trash`);
      const data = await res.json();
      setDirectory(data);
      
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {directory.map(({ name, isDirectory }, i) => (
        <div key={i} className="spaceBetween">
          <span>{name}</span>
          <div>
            <button>Restore</button>{" "}
            <button className="redBtn">Delete Permentaly</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowDirectory;
