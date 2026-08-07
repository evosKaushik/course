const Bin = ({ showBin, setShowBin }) => {
  return (
    <div
      className="binBg"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setShowBin(false);
        }
      }}
    >
      <div className="binBox">Bin</div>
    </div>
  );
};

export default Bin;
