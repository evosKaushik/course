import { createPortal } from "react-dom";

const RenameModel = ({ showRenameModel, setShowRenameModel, children }) => {
  return createPortal(
    showRenameModel && (
      <div
        className={`modelbg`}
        onClick={(e) => {
          if (e.target !== e.currentTarget) {
            setShowRenameModel(false);
          }
        }}
      >
        <div className="modelContent">{children}</div>
      </div>
    ),
    document.getElementById("portal"),
  );
};

export default RenameModel;
