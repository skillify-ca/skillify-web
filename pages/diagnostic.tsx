import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import { Button } from '../components/stories/Button';
import DiagnosticTestForm from '../components/stories/DiagnosticTestForm';
import Dropdown from '../components/stories/Dropdown';
import QuestionSet from '../components/stories/QuestionSet';
import Toggle from '../components/stories/Toggle';
import { generateQuestionsForDiagnostic, Question, TestLength, Topic } from './api/questionGenerator';
import { QuestionType } from './api/questionTypes';

enum STAGE {
	CREATE,
	TEST
}

export default function Diagnostic(props) {
	const [ questions, setQuestions ] = useState([]);
	const [ topics, setTopics ] = useState([]);
	const [ testLength, setTestLength ] = useState(TestLength.MEDIUM);
	const [ stage, setStage ] = useState(STAGE.CREATE);
	const [ index, setIndex ] = useState(0);
	const [ guess, setGuess ] = useState('');
	const [ correctGuesses, setCorrectGuesses ] = useState(0); 
	const [ questionData, setQuestionData ] = useState<Question[]>([
		{ text: '', answer: 0, questionType: QuestionType.HORIZONTAL_EQUATION }
	]);
	const inputElement = useRef(null);
	
	const submitGuess = (e) => {
		e.preventDefault();
		
		if (index < questions.length - 1) {
			setIndex(index + 1);
			
		}

		console.log(guess); //returns NaN instead of what user inputted
		console.log(questionData[index]); 
		
		let isCorrect = Number.parseInt(guess) == questionData[index].answer;
		if (isCorrect) {
			setCorrectGuesses(correctGuesses + 1);
		}
	};

	const createDiagnostic = (topics: Topic[], testLength: TestLength) => {
		setTopics(topics);
		setTestLength(testLength);
		setStage(STAGE.TEST);
	};

	useEffect(
		() => {
			setQuestions(generateQuestionsForDiagnostic(testLength, topics));
		},
		[ topics, testLength ]
	);


	let component;
	switch (stage) {
		case STAGE.CREATE:
			component = <DiagnosticTestForm onClick={createDiagnostic} />;
			break;
		case STAGE.TEST:
			component = (
				<QuestionSet
					title=""
					questionData={questions}
					index={index}
					guess={guess}
					setGuess={setGuess}
					inputElement={inputElement}
					submitGuess={submitGuess}
				/>
			);
			break;
	}

	return (
		<div className="flex flex-col justify-center overflow-auto bg-scroll bg-gray-200">
			<Navbar />
			<div className="p-8 flex flex-col items-center justify-center">{component}</div>
		</div>
	);
}
