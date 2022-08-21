function fizzBuzz(number) {
  
    if (number % 3  == 0) {
        if(number % 5 == 0)
        {
            return "FizzBuzz";
        }
        else{
            return "Fizz";
        }
    } 
    else{
        return "Buzz";
    }
  }
  
  console.log(fizzBuzz(27)); //output: Fizz
  console.log(fizzBuzz(35)); //output: Buzz
  console.log(fizzBuzz(60)); //output: FizzBuzz
  console.log(fizzBuzz(120)); //output: FizzBuzz
  