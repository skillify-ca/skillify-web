import React, { useState } from 'react';
import { noun } from '../../pages/api/WordProblemModel';
import { Button } from './Button';
import { Input } from './Input';

export interface WordProblemProp {
	submitGuess: (e) => void;
	question: string;
	name: string;
	container: string;
	noun1: noun;
	noun2: noun;
}

/**
 * Primary UI component for user interaction
 */
export const WordProblem: React.FC<WordProblemProp> = ({
	submitGuess,
	question,
	name,
	container,
	noun1,
	noun2,
	...props
}) => {
	const [ guess, setGuess ] = useState('');
	const handleKeypress = (e) => {
		//it triggers by pressing the enter key
		if (e.charCode === 13) {
			submitGuess(e);
		}
	};
	const parse = () => {
		const parts = question.split(' ');
		return {
			first: parts[0],
			second: parts[2]
		};
	};
	console.log(noun1);
	return (
		<div className= "flex flex-col items-center gap-4">
			<div className="text-2xl flex flex-wrap">
				<p className="align-left">
					{name} has a {container} of {noun1.type}. Inside, there are
					<span className={noun1.colour}>{' ' + parse().first + ' '}</span>
					{/* text-yellow-600 replace yellow with noun1.ob.colour */}
					{noun1.title} and
					<span className={noun2.colour}>{' ' + parse().second + ' '}</span>
					{noun2.title}. How many {noun1.type} are in the {container}?
					{/* text-silver-600 replace silver with noun1.ob.colour */}
				</p>
			</div>
			<div className="text-2xl flex flex-wrap">
				<Input guess={guess} setGuess={setGuess} handleKeypress={handleKeypress} />
			</div>
			<div className="flex flex-wrap mt-3">
				<img src={noun1.image} width="30" height="45" className="ml-2" />
				<img src={noun2.image} width="30" height="45" className="ml-6" />
				<img src={noun1.image} width="30" height="45" className="ml-6" />
				<img src={noun2.image} width="30" height="45" className="ml-6" />
				<img src={noun1.image} width="30" height="45" className="ml-6" />
			</div>
			<Button onClick={submitGuess} label="Submit" backgroundColor="blue" textColor="white" />
		</div>
	);
};
