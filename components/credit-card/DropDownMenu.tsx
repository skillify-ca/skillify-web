export interface DropDownMenuProps {
    words: string[];
    value: string;
}

export const DropDownMenu = ({words, value}: DropDownMenuProps) => {
    

    return (
        <div className="inline-block">
            <select>
                <option selected>...</option>
                {words
                    .map((word) => ({ word, sort: Math.random()}))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({word}) => ( <option value={value}>{word}</option>
                    ))
                }
            </select>
        </div>
    )
}