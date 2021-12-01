export interface StackProps {
  items: string[];
}
const Stack = ({ items }: StackProps) => {
  return (
    <div className="flex flex-col gap-4">
      {items.map((it) => (
        <div className="flex items-center justify-center w-24 h-24 bg-purple-200">
          <p className="text-2xl">{it}</p>
        </div>
      ))}
    </div>
  );
};

export default Stack;
