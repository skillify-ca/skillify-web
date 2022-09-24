function pokemonBattle(pokemonType) {
    
    if (pokemonType == "Water")
    {
        return "Win"
    }

    else if (pokemonType == "Grass")
    {
        return "Loss"
    }
    else{
        return "No Contest"
    }
}
    
  
  
  console.log(pokemonBattle("Water")); //output: Win
  console.log(pokemonBattle("Fire")); //output: No Contest
  console.log(pokemonBattle("Grass")); //output: Loss
  
  
  