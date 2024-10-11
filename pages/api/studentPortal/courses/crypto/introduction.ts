import { LessonComponentData } from "../../../../../components/studentPortal/lessons/LessonComponent";
import { ResponseData } from "../codingBasics/introduction";

export const getIntroductionCryptoLesson = (): ResponseData => {
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Introduction to Crypto and Web3",
    },
    {
      component: "description",
      text: `In this course, you will learn the basics of crypto and web3. The world of crypto is vast and can be overwhelming. The further you go down the rabbit hole, the more there is to learn.
      
      The reason why crypto was created was to solve the problem of trust. In the traditional financial system, we rely on banks and governments to keep our money safe. With crypto, we aim to remove a centralized authority and replace it with a decentralized network.

      Unfortunately, the world of crypto is filled with scams and bad actors. It is important to do your own research and be cautious when investing in crypto. At this point, most people feel safer keeping their money in a bank rather than a crypto wallet.

      The appeal of crypto is that you are able to transfer money to anyone in the world even if they don't have a bank account. This is a huge advantage for people in developing countries who don't have access to traditional banking services, but do have access to a smartphone.
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
