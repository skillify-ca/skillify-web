export interface HashMapProps {
  data: Map<string, number>;
}
const HashMap = ({ data }: HashMapProps) => {
  return (
    <div className="flex flex-col items-center gap-4 bg-red-200">
      {data.size === 0 && (
        <p className="w-full py-4 text-2xl text-center bg-green-200">
          {"Empty Dictionary"}
        </p>
      )}

      {data.size !== 0 && (
        <div className="grid w-full grid-cols-2 bg-slate-200">
          <p className="p-2 text-2xl text-center">{"Key"}</p>
          <p className="p-2 text-2xl text-center">{"Value"}</p>

          {Array.from(data, ([key, value]) => ({ key, value })).map((it) => (
            <div className="flex items-center justify-center col-span-2 border-b-2 bg-sky-200 border-sky-500">
              <p className="w-full p-4 text-2xl text-center text-white bg-slate-600">
                {it.key}
              </p>
              <p className="w-full p-4 text-2xl text-center">{it.value}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HashMap;
