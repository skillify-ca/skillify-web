import Link from 'next/link';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button } from './stories/Button';
import TopicItem from './stories/TopicItem';

export type SkillCardProps = {
	title: string;
	image?: string;
	disabled?: boolean;
	link?: string;
	rating?: number;
};
const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: '20%',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		padding: '16px',
		borderRadius: '8px',
	}
};
export const SkillCard: React.FC<SkillCardProps> = ({ title, image, disabled, link, rating }: SkillCardProps) => {
	const [modalIsOpen, setIsOpen] = React.useState(false);
	const [level, setLevel] = React.useState('1');
	function openModal() {
		if (!disabled) {
			setIsOpen(true);
		}
	}

	function closeModal() {
		setIsOpen(false);
	}
	function onLevelSelect(e) {
		setLevel(e.target.value);
	}

	return (
		<div className="">
			<TopicItem onClick={openModal} disabled={disabled} image={image} title={title} rating={rating} />
			<div className="">
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					contentLabel="Example Modal"
					ariaHideApp={false}
				>
					<div className="flex flex-col justify-between h-full">
						<div>
							<button onClick={closeModal}>
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
						<div className="p-4 flex flex-col items-center gap-8">
							<p className="text-xl font-bold">{title}</p>

							<select
								className="block w-52 text-gray-700 my-4 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
								name="level"
								value={level}
								onChange={onLevelSelect}
							>
								<option value="">Select Level</option>
								<option value="1">Easy</option>
								{rating > 0 && <option value="2">Medium</option>}
								{rating > 1 && <option value="3">Hard</option>}
							</select>

							<div className="flex">
								<Link href={link + '?level=' + level}>
									<Button backgroundColor="blue" label="Quiz" />
								</Link>
							</div>
						</div>
						<div>
						</div>
					</div>
				</Modal>
			</div>
		</div>
	);
};

export default SkillCard;
