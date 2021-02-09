import Rules from "./Rules";

const TeacherControls = ({ onClick }) => {
  return (
    <div>
      <Rules />
      <form className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label className="sr-only">Target Number</label>
            <input
              id="target-number"
              name="target"
              type="number"
              defaultValue={15}
              className="appearance-none rounded-none relative block w-3/4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Target Number"
            />
          </div>
          <div>
            <label className="sr-only">Game Numbers</label>
            <input
              id="numbers"
              name="numbers"
              type="text"
              defaultValue={"1,2,3,4,5,6,7,8,9"}
              className="appearance-none rounded-none relative block w-3/4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Numbers to use in game (eg. 1,2,3,4,5,6,7,8,9)"
            />
          </div>
          <div>
            <label className="sr-only">Player One Name</label>
            <input
              id="player-one"
              name="player-one"
              type="text"
              className="appearance-none rounded-none relative block w-3/4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Enter Player One's Name"
            />
          </div>
          <div>
            <label className="sr-only">Player Two Name</label>
            <input
              id="player-two"
              name="player-two"
              type="text"
              className="appearance-none rounded-none relative block w-3/4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Enter Player Two's Name"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="group relative w-3/4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={onClick}
          >
            Create Game
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeacherControls;
