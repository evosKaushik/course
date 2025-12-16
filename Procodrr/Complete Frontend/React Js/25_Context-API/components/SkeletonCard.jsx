import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => {
  return (
    <div className="country-card skeletonContainer">
      <div style={{ marginTop: "-10px" }}>
        <Skeleton height={170} />
      </div>
      <div style={{ marginTop: "1rem", width: "90%", marginInline: "auto" }}>
        <Skeleton height={30} />
      </div>
      <div style={{ marginTop: "20px", width: "90%", marginInline: "auto" }}>
        <div style={{ marginTop: "10px" }}>
          <Skeleton height={20} />
        </div>
        <div style={{ marginTop: "10px" }}>
          <Skeleton height={20} />
        </div>
        <div style={{ marginTop: "10px" }}>
          <Skeleton height={20} />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
