export interface StackProps {
  items: string[];
}
const Stack = ({ items }: StackProps) => {
  return (
    <div className="flex flex-col items-center w-32 gap-4 pt-8 border-b-2 border-l-2 border-r-2 border-black">
      {items.map((it) => (
        <div className="flex items-center justify-center w-24 h-24 bg-purple-200">
          <p className="text-2xl">{it}</p>
        </div>
      ))}
    </div>
  );
};

export default Stack;
