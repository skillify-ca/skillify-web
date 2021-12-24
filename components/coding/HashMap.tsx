export interface HashMapProps {
  data: Map<string, number>;
  title: string;
}
const HashMap = ({ data, title }: HashMapProps) => {
  return (
    <div className="flex flex-col items-center gap-4 pt-8 border-b-2 border-l-2 border-r-2 border-black">
      { Array.from(data, ([key, value]) => ({ key, value })).map((it) => (
        <div className="flex items-center justify-center bg-purple-200">
          <p className="text-2xl">{JSON.stringify(it)}</p>
        </div>
      ))}
    </div>
  );
};

export default HashMap;
