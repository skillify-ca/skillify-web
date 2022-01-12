function homeEquity(homePrice, downPayment, mortgagePeriod, month) {
  let loans = homePrice - downPayment;
  let equity = downPayment;
  let mortgagePayment = loans / mortgagePeriod;

  for (let i = 1; i <= month; i++) {
    equity += mortgagePayment;
  }

  return "$" + equity.toFixed(2);
}

console.log(homeEquity(900000, 50000, 36, 5)); //output: $168055.56
console.log(homeEquity(1000000, 150000, 120, 14)); //output: $249166.67
console.log(homeEquity(1500000, 375000, 360, 179)); //output: $934375.00

//price, down payment, month
