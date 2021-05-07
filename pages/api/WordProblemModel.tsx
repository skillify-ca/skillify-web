import { name } from './names';
/*(name) has a (groupItem) of (nounType). Inside there are [ranNum1] (item1.title) and [ranNum2] (item2.title).
How many (nounType) are in the (groupItem)?*/
export type WordProblemModel = {
	name: string;
	groupItem: string;
	nounType: string;
	item1: noun;
	item2: noun;
};
export type noun = {
	type: string;
	title: string;
	colour: string;
	image: string;
};
const apples = {
	type: 'fruits',
	title: 'apples',
	colour: 'text-red-500 font-black',
	image: '/images/apple.jpeg'
};
const bannanas = {
	type: 'fruits',
	title: 'bannanas',
	colour: 'text-yellow-500 font-black',
	image: '/images/banana.png'
};
const oranges = {
	type: 'fruits',
	title: 'oranges',
	colour: 'text-yellow-600 font-black',
	image: '/images/orange.jpeg'
};
const lions = {
	type: 'pets',
	title: 'lions',
	colour: 'text-yellow-600 font-black',
	image: '/images/lion.png'
};
const ducks = {
	type: 'pets',
	title: 'ducks',
	colour: 'text-yellow-500 font-black',
	image: '/images/duck.jpeg'
};
const aligators = {
	type: 'pets',
	title: 'aligators',
	colour: 'text-green-700 font-black',
	image: '/images/aligator.png'
};
const gold = {
	type: 'coins',
	title: 'gold coins',
	colour: 'text-yellow-400 font-black',
	image: '/images/gold__coins2.jpeg'
};
const silver = {
	type: 'coins',
	title: 'silver coins',
	colour: 'text-gray-400 font-black',
	image: '/images/silver__coin.jpeg'
};
const copper = {
	type: 'coins',
	title: 'copper coins',
	colour: 'text-yellow-800 font-black',
	image: '/images/copper__coins.jpeg'
};
const nameSelector = () => {
	const random = Math.floor(Math.random() * name.length);
	return name[random];
};

const itemGroup = [ 'box', 'bag', 'basket', 'case', 'package', 'drawer' ];
const itemGroupSelector = () => {
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
		groupItem: itemGroupSelector(),
		nounType: itemType,
		item1: itemSelector(itemType),
		item2: itemSelector(itemType)
	};
}
