function runningPaceCalculator(distanceMiles, timeHours, timeMinutes) {
  /*
   * In this challenge you will calculate the running pace per mile given the following parameters:
   * 1) the race distance in miles, 2) the time in hours, and 3) time in minutes to complete the race
   * The pace per mile should be out put in the HH:MM format. If a 13.1 mile race takes 1:45 to complete, the pace per mile function should output 8:35
   *
   * Hints / Tips:
   *  Consider converting the total time to complete the race in minutes to help calculate pace per mile
   *  The modulo (%) operator returns the remainder of integer division. "8.32 % 1" returns the decimal remainder
   *  Math.floor() and Math.round() may be useful rounding functions
   * Math.floor(100.43) ==> 100
   * Math.round(5.93) ==> 6
   *  When outputting the pace per mile in HH:MM format, it's useful to convert your numbers to string using the .toString() method
   *  You can concatenate string represetnations of numbers using the '+' operator.
   *  7.toString() + '/' + 11.toString() returns "7/11"
   */
}

console.log(paceCalculator(26.2, 3, 45)); // 8:35
console.log(paceCalculator(13.1, 1, 7)); // 5:07
console.log(paceCalculator(6.1, 0, 40)); // 6:33
console.log(paceCalculator(6.1, 0, 31)); // 5:05
