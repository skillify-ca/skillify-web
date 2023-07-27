const Feedback = () => {
    return (
        <div className="h-screen flex flex-col">
          {/* Top Half */}
            <div className="flex-1 flex items-center justify-center">
                <div className="h-1/2 w-2/3 bg-yellow-500 rounded-t-lg">
                Feedback
                </div>
            </div>
    
          {/* Bottom Half */}
            <div className="h-1/2 bg-white rounded-b-lg">
                {/* Add content for the bottom half here */}
                {/* This will be a rectangle with a rubric format */}
            </div>
        </div>
    );    
};

export default Feedback;
