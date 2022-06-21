function runningPaceCalculator(distanceMiles, totalTimeMinutes) {
  /*
  * Long distance runners often calculate a target average "pace" during training to help them reach their race goal
  * Pace is measured in minutes per mile, i.e how long it takes you to run one mile. 
  * If your goal is to run a marathon (26.2 miles) in under 4 hours, you need to average under 9:10 per mile 
  
  * In this challenge you will write a function that calculates running pace given the following parameters:
    * 1) the race distance in miles
    * 2) the total time to run the race in minutes

  * The function should output pace in the format HH:MM. 
    * e.g for a 13.1 mile race that takes 105 minutes to complete, the function should output 8:35 

  * Hints / Tips:
    
    * The modulo (%) operator returns the remainder of integer division. 
      * "8.32 % 1" returns the decimal remainder .32
    
    * Math.floor() and Math.round() are useful rounding functions:
      * Math.floor(100.43) ==> 100
      * Math.round(5.93) ==> 6

  * When returning pace in the HH:MM format, it's useful to convert numbers to strings using the .toString() method

  * You can then concatenate string represetations of numbers using the '+' operator.
    * 7.toString() + '/' + 11.toString() returns the string "7/11"

  */
}

console.log(paceCalculator(26.2, 3, 45)); // 8:35
console.log(paceCalculator(13.1, 1, 7)); // 5:07
console.log(paceCalculator(6.1, 0, 40)); // 6:33
console.log(paceCalculator(6.1, 0, 31)); // 5:05
