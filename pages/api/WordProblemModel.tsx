import { random } from "lodash";
import { name } from "./names";
import {
  animalsMap,
  fruitsMap,
  coinsMap,
  ItemContainerObj,
  map,
  noun,
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
const getRandomItemFromMap = (map) => {
  const keyList = Object.keys(map); //get keys of map
  const randomIndex = Math.floor(Math.random() * keyList.length);
  const randomKey = keyList[randomIndex];
  return map[randomKey];
};
const itemSelector = (itemType) => {
  switch (itemType) {
    case ItemType.PETS:
      return getRandomItemFromMap(animalsMap);
    case ItemType.COINS:
      return getRandomItemFromMap(coinsMap);
    case ItemType.FRUITS:
      return getRandomItemFromMap(fruitsMap);
    default:
      console.log("Error");
  }
};
export function createWordProblemModel(operator): WordProblemModel {
  let itemType = itemTypeSelector();
  if (operator == "+") {
    return {
      name: nameSelector(),
      operator: operator,
      itemContainer: getRandomItemFromMap(map),
      nounType: itemType,
      item1: itemSelector(itemType),
      item2: itemSelector(itemType),
    };
  } else {
    return {
      name: nameSelector(),
      operator: operator,
      itemContainer: getRandomItemFromMap(map),
      nounType: itemType,
      item1: itemSelector(itemType),
    };
  }
}
