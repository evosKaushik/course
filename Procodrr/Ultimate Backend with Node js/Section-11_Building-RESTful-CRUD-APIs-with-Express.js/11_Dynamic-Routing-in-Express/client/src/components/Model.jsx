import { createPortal } from "react-dom";

const Model = ({ showModel, setShowModel, children }) => {
  return createPortal(
    <div
      className={`modelbg ${showModel ? "show" : "hidden"}`}
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          setShowModel(false);
        }
      }}
    >
      <div className="modelContent">{children}</div>
    </div>,
    document.getElementById("portal"),
  );
};

export default Model;
