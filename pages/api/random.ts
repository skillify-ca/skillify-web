export function getRandomItemFromArray(arr: any[]) {
  const randomIndex = getRndInteger(0, arr.length);
  return arr[randomIndex];
}

// Get random number between min (inclusive) and max (exclusive)
export function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}
