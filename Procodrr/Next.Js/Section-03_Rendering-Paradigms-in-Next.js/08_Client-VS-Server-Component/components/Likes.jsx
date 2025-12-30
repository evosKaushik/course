

import { useState } from "react";

const Likes = () => {
  const [likesCount, setLikesCount] = useState(0);
  // console.log(window);
  if (typeof localStorage !== "undefined") {
    console.log(localStorage);
  }
  console.log("Like Component");
  return (
    <div
      onClick={() => {
        setLikesCount((prevState) => prevState + 1);
      }}
    >
      {likesCount >= 1000 ? `${likesCount}k` : likesCount} Likes{" "}
      {String(console.log("running on server"))}
    </div>
  );
};

export default Likes;
