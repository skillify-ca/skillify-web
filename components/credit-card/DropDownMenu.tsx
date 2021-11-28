export interface DropDownMenuProps {
    words: string[];
    value: string;
}

export const DropDownMenu = ({words, value}: DropDownMenuProps) => {
    

    return (
        <div className="inline-block border border-grey-500">
            <select defaultValue="...">
                <option>...</option>
                {words
                    .map((word) => ({ word, sort: Math.random()}))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({word,}) => ( <option key={word} value={value}>{word}</option>
                    ))
                }
            </select>
        </div>
    )
}