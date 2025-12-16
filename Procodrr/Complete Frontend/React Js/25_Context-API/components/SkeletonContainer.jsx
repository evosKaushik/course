import React from "react";
import SkeletonCard from "./SkeletonCard";

const SkeletonContainer = () => {
  return (
    <div className="countries-container">
      {Array.from({ length: 20 }).map((el, index) => {
        return <SkeletonCard  key={index}/>;
      })}
    </div>
  );
};

export default SkeletonContainer;
