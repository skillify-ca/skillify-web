function paceCalculator(distanceMiles, timeHours, timeMinutes) {
  const totalTimeMinutes = timeHours * 60 + timeMinutes;
  const pacePerMile = totalTimeMinutes / distanceMiles;

  const pacePerMileHours = Math.floor(pacePerMile).toString();
  const pacePerMileMinutes = Math.round((pacePerMile % 1) * 60).toString();

  if (pacePerMileMinutes.length === 1) {
    return pacePerMileHours + ":" + "0" + pacePerMileMinutes;
  } else {
    return pacePerMileHours + ":" + pacePerMileMinutes;
  }
}

console.log(paceCalculator(26.2, 3, 45));
console.log(paceCalculator(13.1, 1, 7));
console.log(paceCalculator(6.1, 0, 40));
console.log(paceCalculator(6.1, 0, 31));
