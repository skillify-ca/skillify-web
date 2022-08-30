import React, { useState, useEffect } from "react";
import { GuessData } from "../../pages/api/guessData";
// import { name } from "../../pages/api/names";
import { Button } from "../ui/Button";

export interface SalesTaxQuestionProps{
    personName: string;
    commission: number;
    price: number;
    numberOfSales: number;
    submitGuess: (guess: GuessData) => void;
    image1: string;
    answer: string;
    text: string;
  }