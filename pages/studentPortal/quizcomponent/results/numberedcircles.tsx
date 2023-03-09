const NumberedCircles = () => {
  return (
    <div className="grid px-4 grid-cols-1 space-y-8 justify-center items-center">
      <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold mb-2">
        1
      </div>
      <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-white mb-2">
        2
      </div>
      <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold mb-2">
        3
      </div>
      <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold mb-2">
        4
      </div>
      <div className="text-black-600 font-bold mb-8"></div>
    </div>
  );
};

export default NumberedCircles;
