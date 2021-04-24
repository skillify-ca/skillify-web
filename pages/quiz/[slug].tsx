import React, { useEffect, useRef, useState } from 'react';
import { Modal, ModalTransition } from 'react-simple-hook-modal';
import apiData from '../api/practice.json';
import 'react-simple-hook-modal/dist/styles.css';
import Navbar from '../../components/Navbar';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { CREATE_GUESS } from '../../graphql/createGuess';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_USER_SKILLS } from '../../graphql/updateUserSkills';
import { FETCH_USER_SKILLS } from '../../graphql/fetchUserSkills';
import { FETCH_USER_SKILL } from '../../graphql/fetchUserSkill';
import { UNLOCK_NEXT_SKILL } from '../../graphql/unlockNextSkill';
import { generateQuestions, Question } from '../api/questionGenerator';
import { v4 as uuidv4 } from 'uuid';
import { getSkillIdFromSlug, userId } from '../../graphql/utils/constants';
import { useSession } from 'next-auth/client';
import Card from '../../components/stories/Card';
import { Button } from '../../components/stories/Button';
import { VerticalEquation } from '../../components/stories/VerticalEquation';
import QuestionSet from '../../components/stories/QuestionSet';

const Quiz = ({ slug }) => {
	const { query } = useRouter();
	const [ session ] = useSession();
	const [ index, setIndex ] = useState(0);
	const [ guess, setGuess ] = useState('');
	const [ correctGuesses, setCorrectGuesses ] = useState(0);
	const [ isGameOver, setGameOver ] = useState(false);
	const [ secondsElapsed, setSecondsElapsed ] = useState(0);
	const [ interval, setMyInterval ] = useState(null);
	const [ questionData, setQuestionData ] = useState<Question[]>([
		{ text: '', answer: 0, type: 'horizontal-equation' }
	]);
	const [ currentLevel, setCurrentLevel ] = React.useState(0);
	const inputElement = useRef(null);
	const length = questionData.length;
	const [ sessionId, setSessionId ] = React.useState('');
	const [ starsAlreadyEarnedForSkill, setStarsAlreadyEarnForSkill ] = React.useState(0);

	useEffect(() => {
		const level = Number.parseInt(query.level as string);
		setCurrentLevel(level);
		setQuestionData(generateQuestions(slug, level));
		setSessionId(uuidv4());
	}, []);

	useEffect(() => {
		if (inputElement.current) {
			inputElement.current.focus();
		}
	}, []);

	useEffect(() => {
		var newInterval = setInterval(() => {
			setSecondsElapsed((secondsElapsed) => secondsElapsed + 1);
		}, 1000);
		setMyInterval(newInterval);

		return () => clearInterval(interval);
	}, []);

	const [ createFlashcardGuess, createGuessData ] = useMutation(CREATE_GUESS);
	const [ updateUserSkillStars, updateUserSkillsData ] = useMutation(UPDATE_USER_SKILLS, {
		refetchQueries: [
			{
				query: FETCH_USER_SKILLS,
				variables: {
					userId: userId(session) // TODO what if someone runs this with null
				}
			}
		] // whenever we update a skill, we should refetch
	});
	const userSkillResult = useQuery(FETCH_USER_SKILL, {
		variables: {
			skillId: getSkillIdFromSlug(slug),
			userId: userId(session)
		}
	});
	const userSkillsResult = useQuery(FETCH_USER_SKILLS, {
		variables: {
			userId: userId(session)
		}
	});
	const [ unlockNextSkill, unlockNextSkillData ] = useMutation(UNLOCK_NEXT_SKILL, {
		refetchQueries: [
			{
				query: FETCH_USER_SKILLS,
				variables: {
					userId: userId(session)
				}
			}
		]
	});

	useEffect(
		() => {
			if (userSkillResult.data) {
				setStarsAlreadyEarnForSkill(userSkillResult.data.user_skills[0].stars);
			}
		},
		[ session ]
	);

	const submitGuess = (e) => {
		e.preventDefault();

		let isCorrect = Number.parseInt(guess) == questionData[index].answer;
		if (isCorrect) {
			setCorrectGuesses(correctGuesses + 1);
		}
		createFlashcardGuess({
			variables: {
				userId: userId(session),
				question: questionData[index].text,
				guess: guess,
				timeTaken: 3,
				sessionId: sessionId,
				is_correct: isCorrect,
				skillId: getSkillIdFromSlug(slug)
			}
		});
		if (index < length - 1) {
			setIndex(index + 1);
			setGuess('');
			if (inputElement.current) {
				inputElement.current.focus();
			}
		} else {
			clearInterval(interval);
			setMyInterval(null);
			setGameOver(true);

			// TODO make it harder to unlock a star
			// if pass unlock star
			if (starsAlreadyEarnedForSkill < currentLevel) {
				updateUserSkillStars({
					variables: {
						skillId: getSkillIdFromSlug(slug),
						stars: currentLevel,
						userId: userId(session)
					}
				});
				if (currentLevel === 3) {
					// unlock next skill
					const lockedSkills = userSkillsResult.data.user_skills.filter((it) => it.locked == true);
					const unmasteredSkills = userSkillsResult.data.user_skills.filter(
						(it) => it.locked == false && it.stars !== 3
					);
					if (unmasteredSkills.length < 1 && lockedSkills.length > 1) {
						unlockNextSkill({
							variables: {
								skillId: lockedSkills[0].skill.id,
								locked: false,
								userId: userId(session)
							}
						});
					}
				}
			}
		}
	};

	const onCloseGameOver = () => {
		setIndex(0);
		setCorrectGuesses(0);
		setGuess('');
		setGameOver(false);
		setSecondsElapsed(0);
		setQuestionData(generateQuestions(slug, currentLevel));
		var newInterval = setInterval(() => {
			setSecondsElapsed((secondsElapsed) => secondsElapsed + 1);
		}, 1000);
		setMyInterval(newInterval);
	};

	const getAccuracy = () => {
		return Math.round(100 * correctGuesses / length);
	};

	return (
		<div>
			<Navbar />

			<QuestionSet
				slug={slug}
				questionData={questionData}
				index={index}
				guess={guess}
				setGuess={setGuess}
				inputElement={inputElement}
				submitGuess={submitGuess}
			/>
			<Modal id="game-over-model" isOpen={isGameOver} transition={ModalTransition.SCALE}>
				<div className="py-16 m-8 space-y-8 bg-white flex flex-col justify-center items-center">
					<p className="text-2xl">Speed </p> {secondsElapsed} seconds
					<p className="text-2xl">Accuracy</p>
					{getAccuracy()}%
					<button
						type="submit"
						className="group relative w-3/4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						onClick={onCloseGameOver}
					>
						Replay
					</button>
					<Link href="/">
						<button className="group relative w-3/4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							Home
						</button>
					</Link>
				</div>
			</Modal>
		</div>
	);
};

export async function getStaticProps({ params }) {
	return {
		props: {
			slug: params.slug
		}
	};
}

export async function getStaticPaths() {
	return {
		paths: [
			{ params: { slug: 'addition', level: '1' } },
			{ params: { slug: 'subtraction' } },
			{ params: { slug: 'multiplication' } }
		],
		fallback: true
	};
}

export default Quiz;
