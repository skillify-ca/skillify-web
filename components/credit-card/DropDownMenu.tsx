export interface DropDownMenuProps {
    words: string[];
}

export const DropDownMenu = ({ words }: DropDownMenuProps) => {


    return (
        <div className="inline-block border border-grey-500">
            <select>
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