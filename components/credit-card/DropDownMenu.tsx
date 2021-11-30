export interface DropDownMenuProps {
    words: string[];
    value?: string;
    setValue?: (val: string) => void;
}

export const DropDownMenu = ({ words, value, setValue }: DropDownMenuProps) => {


    return (
        <div className="inline-block border border-grey-500">
            <select value={value} onChange={e => setValue(e.target.value)}>
                <option>...</option>
                {words
                    .map((word) => ({ word, sort: Math.random() }))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({ word, }) => (<option key={word} value={word}>{word}</option>
                    ))
                }
            </select>
        </div>
    )
}