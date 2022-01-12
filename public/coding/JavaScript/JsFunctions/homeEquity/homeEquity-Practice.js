function homeEquity(homePrice, downPayment, mortgagePeriod, month) {
  /*
   * In this challenge you will be calculating how much home equity you own from the given parameter:
   * the total value of the home, the down payment in dollars, and the number of months after home purchase.
   * Note the formula of equity is Equity = Assets - Liabilities
   * So, Equity = (downPayment + (number of months after home purchase * Monthly Mortgage Payments))
   * Note: since we are dealing with outputting money, to output to 2 decimal places do .toFixed(2)
   */
  return;
}

console.log(homeEquity(900000, 50000, 36, 5)); //output: $168055.56
console.log(homeEquity(1000000, 150000, 120, 14)); //output: $249166.67
console.log(homeEquity(1500000, 375000, 360, 179)); //output: $934375.00
