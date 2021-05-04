import React from 'react';
import { Button } from './Button';
//from Vithushan's button
export interface ButtonProps {
	/**
   * What background color to use
   */
	backgroundColor?:  'blue' | 'green' | 'red' | 'purple' | 'pink' | 'yellow' | 'white';
	/**
   * What text color to use
   * Can be white, black, gray-500, blue-200, blue-900, red-500, etc..
   */
	textColor?: string;
	/**
   * Button contents
   */
	label: string;
	/**
   * Optional click handler
   */
	onClick?: (e) => void;
}
//end

/**
 * Primary UI component for user interaction
 */
export const LavanButton: React.FC <ButtonProps>= ({...props}) => {
	let bgStyles;
	switch (props.backgroundColor) {
		case 'blue':
			bgStyles = 'from-blue-100 via-blue-200 to-blue-400 border-blue-900 hover:from-blue-400'
			break;
		case 'green':
			bgStyles = 'from-green-100 via-green-200 to-green-400 border-green-900 hover:from-green-400'
			break;
		case 'red':
			bgStyles = 'from-red-100 via-red-200 to-red-400 border-red-900 hover:from-red-400'
			break;
		case 'purple':
			bgStyles = 'from-purple-100 via-purple-200 to-purple-400 border-purple-900 hover:from-purple-400'
			break;
		case 'pink':
			bgStyles = 'from-pink-100 via-pink-200 to-pink-400 border-pink-900 hover:from-pink-400'
			break;
		case 'yellow':
			bgStyles = 'from-yellow-100 via-yellow-200 to-yellow-400 border-yellow-900 hover:from-yellow-400'
			break;
		case 'white':
			bgStyles = 'bg-gray-100 border-blue-200 hover:bg-yellow-400 active:bg-green-700'
			break;
	}
	return (
		<button type="button"
		onClick={props.onClick}
		className={`bg-gradient-to-tr px-4 py-1 font-semibold border-b-8 rounded-tr-full rounded-bl-full active:border-b-2 ${bgStyles}`}

		>
			<span className={`text-${props.textColor}`}>Smart {props.label}</span>
		</button>
	);
};
