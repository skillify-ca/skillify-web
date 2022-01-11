function temperatureConverter(convertFrom, value) {
  if (convertFrom == "Celsius") {
    return value * (9 / 5) + 32;
  } else {
    return (value - 32) / (9 / 5);
  }
}

console.log(temperatureConverter("Celsius", 50)); //output: 122
console.log(temperatureConverter("Celsius", 0)); //output: 32
console.log(temperatureConverter("Fahrenheit", 273)); //output: 133.88888888888889
console.log(temperatureConverter("Fahrenheit", -10)); //output: -23.333333333333332
