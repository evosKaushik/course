
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
      {likesCount >= 1000 ? `${likesCount / 1000}k` : likesCount} Likes
    </div>
  );
};

export default Likes;
