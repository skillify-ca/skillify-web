import { name } from './names';
/* Word problems are made with a specific template. The template is as follows: (name) has an (itemContainer) of (itemType). 
Inside there are [randomNumber1] (item1.title) and [randomNumber2] (item2.title). How many (itemType) are in the (itemContainer)? */
export type WordProblemModel = {
	name: string;
	itemContainer: string;
	nounType: string;
	item1: noun;
	item2: noun;
};
export type noun = {
	type: string;
	singleTitle: string;
	pluralTitle: string;
	colour: string;
	image: string;
};
const apples = {
	type: 'fruits',
	singleTitle: 'apples',
	pluralTitle: 'apples',
	colour: 'text-red-500 font-black',
	image: '/images/apple.jpeg'
};
const bannanas = {
	type: 'fruits',
	singleTitle: 'banana',
	pluralTitle: 'bananas',
	colour: 'text-yellow-500 font-black',
	image: '/images/banana.png'
};
const oranges = {
	type: 'fruits',
	singleTitle: 'orange',
	pluralTitle: 'oranges',
	colour: 'text-yellow-600 font-black',
	image: '/images/orange.jpeg'
};
const lions = {
	type: 'pets',
	singleTitle: 'lion',
	pluralTitle: 'lions',
	colour: 'text-yellow-600 font-black',
	image: '/images/lion.png'
};
const ducks = {
	type: 'pets',
	singleTitle: 'duck',
	pluralTitle: 'ducks',
	colour: 'text-yellow-500 font-black',
	image: '/images/duck.jpeg'
};
const aligators = {
	type: 'pets',
	singleTitle: 'aligator',
	pluralTitle: 'aligators',
	colour: 'text-green-700 font-black',
	image: '/images/aligator.png'
};
const gold = {
	type: 'coins',
	singleTitle: 'gold coin',
	pluralTitle: 'gold coins',
	colour: 'text-yellow-400 font-black',
	image: '/images/gold__coins2.jpeg'
};
const silver = {
	type: 'coins',
	singleTitle: 'silver coin',
	pluralTitle: 'silver coins',
	colour: 'text-gray-400 font-black',
	image: '/images/silver__coin.jpeg'
};
const copper = {
	type: 'coins',
	singleTitle: 'copper coins',
	pluralTitle: 'copper coins',
	colour: 'text-yellow-800 font-black',
	image: '/images/copper__coins.jpeg'
};
const nameSelector = () => {
	const random = Math.floor(Math.random() * name.length);
	return name[random];
};

const itemGroup = [ 'box', 'bag', 'basket', 'case', 'package', 'drawer' ];
const itemContainerSelector = () => {
	const randomItemGroup = Math.floor(Math.random() * itemGroup.length);
	return itemGroup[randomItemGroup];
};
export enum ItemType {
	PETS = 'pets',
	COINS = 'coins',
	FRUITS = 'fruits'
}
const itemTypeSelector = () => {
	const randomItemType = Math.floor(Math.random() * Object.keys(ItemType).length);
	switch (randomItemType) {
		case 0:
			return ItemType.PETS;
		case 1:
			return ItemType.COINS;
		case 2:
			return ItemType.FRUITS;
		default:
			console.log('ERROR');
	}
};
const itemSelector = (itemType) => {
	var itemList = [];
	switch (itemType) {
		case ItemType.PETS:
			itemList = [ lions, ducks, aligators ];
			break;
		case ItemType.COINS:
			itemList = [ gold, silver, copper ];
			break;
		case ItemType.FRUITS:
			itemList = [ apples, oranges, bannanas ];
			break;
		default:
			console.log('Error');
	}
	const randomNoun = Math.floor(Math.random() * itemList.length);
	let item = itemList[randomNoun];
	return item;
};
export function createWordProblemModel(): WordProblemModel {
	let itemType = itemTypeSelector();
	return {
		name: nameSelector(),
		itemContainer: itemContainerSelector(),
		nounType: itemType,
		item1: itemSelector(itemType),
		item2: itemSelector(itemType)
	};
}
