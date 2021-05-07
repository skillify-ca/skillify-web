import React, { useRef, useState } from 'react';
import { Question } from '../../pages/api/questionGenerator';
import { QuestionType } from '../../pages/api/questionTypes';
import { Button } from './Button';
import Card from './Card';
import { TrueorFalse } from './TrueorFalse';
import { HorizontalEquation } from './HorizontalEquation';
import { VerticalEquation } from './VerticalEquation';
import { WordProblem } from './WordProblem';
import { LongDivision } from './LongDivision';

type QuestionSetProps = {
	title: string;
	questionData: Question[];
	index: number;
	guess: any;
	setGuess: any;
	inputElement: any;
	submitGuess: any;
};

const QuestionSet = ({ title, questionData, index, submitGuess }: QuestionSetProps) => {
	const questionComponent = () => {
		if (questionData[index].questionType === QuestionType.VERTICAL_EQUATION) {
			return (
				<VerticalEquation
					question={questionData[index].text}
					operator={questionData[index].operator}
					submitGuess={submitGuess}
				/>
			);
		} else if (questionData[index].questionType == QuestionType.BINARY_WORD_PROBLEM) {
			return (
				<WordProblem
					question={questionData[index].text}
					name={questionData[index].wordProblem.name}
					submitGuess={submitGuess}
					containerItem={questionData[index].wordProblem.itemContainer}
					noun1={questionData[index].wordProblem.item1}
					noun2={questionData[index].wordProblem.item2}
				/>
			);
		} else if (questionData[index].questionType === QuestionType.TRUE_OR_FALSE_PROBLEM) {
			return <TrueorFalse question={questionData[index].text} />;
		} else if (questionData[index].questionType === QuestionType.LONG_DIVISION_PROBLEM) {
			return <LongDivision question={questionData[index].text} submitGuess={submitGuess} />;
		}

		return <HorizontalEquation question={questionData[index].text} submitGuess={submitGuess} />;
	};

	return (
		<div className="flex flex-col justify-center items-center bg-gray-200 gap-8 pb-24">
			<div className="flex justify-between w-full p-4">
				<p className="text-xl font-bold">{title}</p>
				<p className="font-bold text-gray-400">
					Question: {index + 1} / {questionData.length}
				</p>
			</div>
			<Card size="large">{questionData[index] && questionComponent()}</Card>
		</div>
	);
};

export default QuestionSet;
