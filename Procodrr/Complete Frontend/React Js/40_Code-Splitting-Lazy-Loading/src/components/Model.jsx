import { createPortal } from "react-dom";

const Modal = ({ isOpen, setIsOpen, header, footer, children }) => {
  return createPortal(
    <div
      className={`fixed inset-0 flex  items-center justify-center bg-black/40 px-4 ${
        isOpen ? "" : "hidden"
      }`}
      onClick={() => {
        setIsOpen(false);
      }}
    >
      <div
        className="max-w-2xl  grow rounded-lg bg-white p-4 shadow-lg"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="text-xl font-bold">{header}</div>
        <div className="-mx-4 my-3 flex flex-wrap gap-4 border-y px-4 py-4">
            {children}
        </div>
        <div className="flex justify-end gap-4">
          <button
            className="rounded-md bg-gray-300 px-6 py-2 font-semibold hover:bg-gray-400/80 active:bg-gray-400/60"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Cancel
          </button>
          <button
            className="rounded-md bg-blue-300 px-6 py-2 font-semibold hover:bg-blue-400/80 active:bg-blue-400/60"
            onClick={() => {
              alert("Form Submit");
              setIsOpen(false);
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
