export interface DropDownMenuProps {
  words: string[];
  value?: string;
  setValue?: (val: string) => void;
  answer?: string;
  getPoint?: (val: number) => void;
}

export const DropDownMenu = ({
  words,
  value,
  setValue,
  answer,
  getPoint,
}: DropDownMenuProps) => {
  const onChange = (e) => {
    setValue(e.target.value);
    if (answer === e.target.value) {
      getPoint(1);
    } else getPoint(0);
  };

  return (
    <div className="inline-block border border-grey-500">
      <select value={value} onChange={onChange}>
        <option>...</option>
        {words
          .map((word) => ({ word, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ word }) => (
            <option key={word} value={word}>
              {word}
            </option>
          ))}
      </select>
    </div>
  );
};
