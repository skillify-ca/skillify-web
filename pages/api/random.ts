export function getRandomItemFromArray(arr: any[]) {
  const randomIndex = getRndInteger(0, arr.length);
  return arr[randomIndex];
}

// Get random number between min (inclusive) and max (exclusive)
export function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getRndColour() {
  let colourArray = ["red", "blue", "green", "yellow", "purple"]; 
  let colour = getRandomItemFromArray(colourArray); 
  return colour;
}


/*
  return red

  return ["bg-red-500", "bg-red-200"]
  return {
    "background": "bg-red-500",
    "hover": ...
  }
  "bg-${color}-500 hover:bg-${color}-200"
*/
//getranitem as helper