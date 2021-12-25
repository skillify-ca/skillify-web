export interface HashMapProps {
  data: Map<string, number>;
}
const HashMap = ({ data }: HashMapProps) => {
  return (
    <div className="flex flex-col items-center gap-4 bg-red-200">
      {data.size === 0 && <p className="py-4 text-2xl w-full bg-green-200 text-center">{"Empty Dictionary"}</p>}


      {data.size !== 0 && <div className="grid grid-cols-2 w-full bg-green-200">
        <p className="text-2xl">{"Key"}</p>
        <p className="text-2xl">{"Value"}</p>

        {Array.from(data, ([key, value]) => ({ key, value })).map((it) => (
          <div className="flex items-center col-span-2 justify-center bg-purple-200">
            <p className="text-2xl bg-yellow-200 w-full">{it.key}</p>
            <p className="text-2xl w-full">{it.value}</p>
          </div>
        ))}
      </div>}
    </div>
  );
};

export default HashMap;
