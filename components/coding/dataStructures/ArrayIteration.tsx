type ArrayIterationProps = {
    data: any[];
    currentIndex: number;
}
const ArrayIteration = ({ data, currentIndex }: ArrayIterationProps) => {
    const getBackgroundColour = (index) => {
        if (index === currentIndex) {
            return "bg-blue-300"
        } else {
            return "bg-white"
        }
    }
    return <div className="flex space-x-2">
        {data.length === 0 && <p className="bg-green-200">Empty String</p>}
        {data.length > 0 && data.map((it, index) => (
            <div className="flex flex-col">
                <p className={`p-4 border-2 rounded-xl whitespace-pre ${getBackgroundColour(index)}`}>
                    {'"' + it + '"'}
                </p>
            </div>
        ))}
    </div>
}

export default ArrayIteration;