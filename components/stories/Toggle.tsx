type ToggleProps = {
  onClick: () => void
}
const Toggle = ({ onClick }: ToggleProps) => {
  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id="candidates"
          name="candidates"
          type="checkbox"
          onClick={e => onClick()}
          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
        />
      </div>
    </div>
  );
};

export default Toggle;
