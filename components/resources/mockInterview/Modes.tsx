
const Modes = ({ onNext }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="flex space-x-4">
        <div
          className="flex-1 bg-green-500 rounded-lg p-10 cursor-pointer"
          onClick={onNext}
        >
          <div className="mb-4">Timed</div>
        </div>
        <div
          className="flex-1 bg-green-500 rounded-lg p-10 cursor-pointer"
          onClick={onNext}
        >
          <div className="mb-4">Untimed</div>
        </div>
        <div
          className="flex-1 bg-green-500 rounded-lg p-10 cursor-pointer"
          onClick={onNext}
        >
          <div className="mb-4">Random</div>
        </div>
      </div>
    </div>
  );
};

export default Modes;
