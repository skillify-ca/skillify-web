export function getRandomItemFromArray(arr: any[]) {
  const randomIndex = getRndInteger(0, arr.length);
  return arr[randomIndex];
}

// Get random number between min (inclusive) and max (exclusive)
export function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}
export function getRndDecimal(min: number, max: number) {
  const decimal = (Math.random() * (max - min) + min).toFixed(1);
  return parseFloat(decimal);
}

export function getRndColour() {
  let colourArray = ["red", "blue", "green", "yellow", "purple"];
  let colour = getRandomItemFromArray(colourArray);
  return colour;
}
