import { LessonComponentData } from "../../../../../components/studentPortal/lessons/LessonComponent";
import { ResponseData } from "../javascript/introduction-coding-basics";

export const getDangersOfCryptoLesson = (): ResponseData => {
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Dangers of Crypto",
    },
    {
      component: "description",
      text: `In this lesson, we will discuss the dangers of crypto. The world of crypto is filled with scams and bad actors. It is important to do your own research and be cautious when investing in crypto.

      One of the biggest dangers of crypto is that it is unregulated. This means that there is no central authority overseeing the market. People like crypto because it is decentralized, but this also means that there is no one to turn to if something goes wrong.

      Another danger of crypto is that it is irreversible. Once you send your money to someone, there is no way to get it back. This is why it is important to be cautious and do your own research before investing in crypto. People send money to the wrong address all the time and there is no way to get it back. This is because the blockchain is immutable, meaning that once a transaction is made, it cannot be changed. Wallet addresses are long strings of random characters, so it is easy to make a mistake when sending money.

      Another danger of crypto is that it can lead to gambling addiction. People get caught up in the hype and start investing more money than they can afford to lose. It is important to set a budget and stick to it. Only invest money that you can afford to lose.

      A common scam in the world of crypto is the pump and dump scheme. This is when a group of people artificially inflate the price of a coin and then sell it at a profit. This leaves everyone else holding worthless tokens. It is important to be cautious and do your own research before investing in any coin.

      One of the most famous scams in the world of crypto was the collapse of the crypto exchange FTX. A crypto exchange is an online platform where users can buy and sell different cryptocurrencies. FTX was one of the largest exchanges in the world, but it collapsed in 2022, leaving millions of users without access to their funds. 
      `,
    },
    {
      component: "resource-list",
      resources: [
        {
          title:
            "The Collapse of FTX: What Went Wrong With the Crypto Exchange?",
          link: "https://www.investopedia.com/what-went-wrong-with-ftx-6828447",
          image:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bworldonline.com%2Fwp-content%2Fuploads%2F2022%2F11%2FFTX_logo-640x427.jpg&f=1&nofb=1&ipt=0342bf16ebf356c17b9554227c9480e2ab10cfb1bdf93a4ee7e8413b03f0935b&ipo=images",
        },
      ],
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
