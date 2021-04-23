const Toggle = () => {
  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id="candidates"
          name="candidates"
          type="checkbox"
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
      </div>
    </div>
  );
};

export default Toggle;
