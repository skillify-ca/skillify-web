function paceCalculator(distanceMiles, totalTimeMinutes) {
  const pacePerMile = totalTimeMinutes / distanceMiles;

  const pacePerMileHours = Math.floor(pacePerMile).toString();
  const pacePerMileMinutes = Math.round((pacePerMile % 1) * 60).toString();

  if (pacePerMileMinutes.length === 1) {
    return pacePerMileHours + ":" + "0" + pacePerMileMinutes;
  } else {
    return pacePerMileHours + ":" + pacePerMileMinutes;
  }
}

console.log(paceCalculator(26.2, 225)); // 8:35
console.log(paceCalculator(13.1, 67)); // 5:07
console.log(paceCalculator(6.1, 40)); // 6:33
console.log(paceCalculator(6.1, 31)); // 5:05
