import { random } from "lodash";
import { name } from "./names";
import {
  aligators,
  apples,
  bannanas,
  copper,
  ducks,
  gold,
  ItemContainerObj,
  lions,
  map,
  noun,
  oranges,
  silver,
} from "./WordProblemModelObjects";
export type WordProblemModel = {
  name: string;
  operator: string;
  itemContainer: ItemContainerObj;
  nounType: string;
  item1: noun;
  item2?: noun;
};

const nameSelector = () => {
  const random = Math.floor(Math.random() * name.length);
  return name[random];
};

const itemGroup = Object.keys(map);
const itemContainerSelector = () => {
  const randomItemGroup = Math.floor(Math.random() * itemGroup.length);
  const foo = itemGroup[randomItemGroup];
  return map[foo];
};
export enum ItemType {
  PETS = "pets",
  COINS = "coins",
  FRUITS = "fruits",
}
const itemTypeSelector = () => {
  const randomItemType = Math.floor(
    Math.random() * Object.keys(ItemType).length
  );
  switch (randomItemType) {
    case 0:
      return ItemType.PETS;
    case 1:
      return ItemType.COINS;
    case 2:
      return ItemType.FRUITS;
    default:
      console.log("ERROR");
  }
};
const itemSelector = (itemType) => {
  let itemList = [];
  switch (itemType) {
    case ItemType.PETS:
      itemList = [lions, ducks, aligators];
      break;
    case ItemType.COINS:
      itemList = [gold, silver, copper];
      break;
    case ItemType.FRUITS:
      itemList = [apples, oranges, bannanas];
      break;
    default:
      console.log("Error");
  }
  const randomNoun = Math.floor(Math.random() * itemList.length);
  let item = itemList[randomNoun];
  return item;
};
export function createWordProblemModel(operator): WordProblemModel {
  let itemType = itemTypeSelector();
  if (operator == "+") {
    return {
      name: nameSelector(),
      operator: operator,
      itemContainer: itemContainerSelector(),
      nounType: itemType,
      item1: itemSelector(itemType),
      item2: itemSelector(itemType),
    };
  } else {
    return {
      name: nameSelector(),
      operator: operator,
      itemContainer: itemContainerSelector(),
      nounType: itemType,
      item1: itemSelector(itemType),
    };
  }
}
