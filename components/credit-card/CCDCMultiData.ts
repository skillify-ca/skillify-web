export interface multiQuestion {
  question: string;
  options: Array<questionOption>;
}

export interface questionOption {
  id: string;
  answer: string;
}

export const multiQuestionData: multiQuestion[] = [
  {
    question: "Which of the following describes a credit card but not a debit card?",
    options: [
      {
        id: "a",
        answer: "a small plastic card with a magnetic strip on the back",
      },
      {
        id: "b",
        answer: "purchases with the card are withdrawn directly from a bank account"
      },
      {
        id: "c",
        answer: "has a PIN associated with the card"
      },
      {
        id: "d",
        answer: "purchases with the card can be paid over time"
      },
    ]
  },
  {
    question: "What is an advantage of using a debit card instead of a credit card to pay for a purchase?",
    options: [
      {
        id: "a",
        answer: "using a debit card allows someone to pay for a purchase over time",
      },
      {
        id: "b",
        answer: "using a debit card builds a person's credit history if it is used responsibly"
      },
      {
        id: "c",
        answer: "using a debit card pulls money directly from a person's checking account so it's more difficult to overspend"
      },
      {
        id: "d",
        answer: "using a debit card is never an advantage over a credit card"
      },
    ]
  },
  {
    question: "Ryan wants to make a tuition payment for school but does not have enough money. Which is NOT an option for Ryan?",
    options: [
      {
        id: "a",
        answer: "Use his credit card to pay for tuition now",
      },
      {
        id: "b",
        answer: "Use a debit card to pay for tuition now"
      },
      {
        id: "c",
        answer: "Save money and use his debit card to pay for tuition at a later date"
      },
      {
        id: "d",
        answer: "save money and write a check to pay for tuition at a later date"
      },
    ]
  },
  {
    question: "Which of the following best describes purchases made with a credit card?",
    options: [
      {
        id: "a",
        answer: "a PIN is used at the time of transaction to verify a person's identity",
      },
      {
        id: "b",
        answer: "purchases made with the card are withdrawn from a person's checking account"
      },
      {
        id: "c",
        answer: "purchases made with the card can be paid over time"
      },
      {
        id: "d",
        answer: "if a person does not have enough money, an overdraft fee may be charged"
      },
    ]
  },
]