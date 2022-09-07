 function basketball(threepointRaptors, twopointRaptors, threepointWarriors, twopointWarriors) {
    
    let totalA = (threepointRaptors * 3) + (twopointRaptors * 2);
    let totalB = (threepointWarriors * 3) + (twopointWarriors * 2);

    if (totalA > totalB)
    {
        return "The final score is " + totalA + " to " + totalB +  " therefore the Raptors are the winner ! "
    }

    else
    {
        return "The final score is " + totalA + " to " + totalB +  " therefore the Warriors are the winner ! "
    }
}
    
  
  
  console.log(basketball(4,3,2,5)); //output: The final score is 18 to 15, therefore the Raptors are the winner !
  console.log(basketball(10,0,4,4)); //output: The final score is 30 to 20, therefore the Raptors are the winner !
  console.log(basketball(0,6,10,0)); //output: The final score is 18 to 30, therefore the Warriors are the winner !
  
  
  