import { LessonComponentData } from "../../../../../components/studentPortal/lessons/LessonComponent";
import { ResponseData } from "../codingBasics/introduction";

export const getBenefitsOfCryptoLesson = (): ResponseData => {
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Benefits of Crypto",
    },
    {
      component: "description",
      text: `
      In this lesson, we will discuss the benefits of crypto and why it is important to learn about this new technology.

      One of the biggest benefits of crypto is that it is decentralized. This means that there is no central authority overseeing the market. People like crypto because it is decentralized, but this also means that there is no one to turn to if something goes wrong. Crypto was invented as a response to the 2008 financial crisis, where banks misused their power and causes a global recessions.

      Another benefit of crypto is that it is transparent. All transactions are recorded on a public ledger called the blockchain. This means that anyone can see where the money is going and how it is being used. This is a huge advantage over the traditional financial system, where transactions are hidden from the public.

      Crypto is also secure. The blockchain is immutable, meaning that once a transaction is made, it cannot be changed. This makes it very difficult for hackers to steal your money. 

      Another benefit of crypto is that it is borderless. You can send money to anyone in the world, even if they don't have a bank account. This is a huge advantage for people in developing countries who don't have access to traditional banking services, but do have access to a smartphone.

      Finally, crypto is permissionless. This means that anyone can use the network without asking for permission. This is a huge advantage over the traditional financial system, where you need to go through a bank to send money.

      In conclusion, crypto has many benefits over the traditional financial system. It is decentralized, transparent, secure, borderless, and permissionless. It is important to learn about this new technology and how it can change the world.
      `,
    },
  ];

  /**
   *
   */

  return {
    lessonComponents,
    currentNode: 0,
    nextNode: 0,
    nextSlug: "introduction",
  };
};
