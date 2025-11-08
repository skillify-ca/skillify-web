import { LessonComponentData } from "../../../../../components/studentPortal/lessons/LessonComponent";
import { ResponseData } from "../javascript/introduction-coding-basics";

export const getBlockchainsLesson = (): ResponseData => {
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Different Types of Blockchains",
    },
    {
      component: "description",
      text: `
      In this lesson, we will discuss the different types of blockchains and how they work.

      The most popular type of blockchain is the public blockchain. This is a decentralized network that anyone can join. It is open to the public and anyone can participate in the network. Bitcoin, Ethereum and Solana are examples of public blockchains.

      Each blockchain is a separate world in the crypto universe with its own rules and regulations.

      Each blockchain has a native token that is used to pay for transactions on the network. For example, Bitcoin is the native token of the Bitcoin blockchain, and Ether is the native token of the Ethereum blockchain. Sol is the native token of the Solana blockchain. 

      Each blockchain has other tokens that are built on top of it that can be used for different purposes. You can create their own tokens on a blockchain and use them for various purposes. You can also swap between different tokens on a blockchain using a decentralized exchange.

      Blockchains are pretty independent from each other, but they can interact with each other through bridges. A bridge is a connection between two blockchains that allows tokens to move between them. This is important for the future of crypto because it allows different blockchains to work together and share information.

      Some people believe that the future of crypto is a single-chain world where one blockchain rules them all. Other people believe that the future of crypto is a multi-chain world where different blockchains work together to create a decentralized internet. This is known as Web3. Web3 is the next generation of the internet that is built on blockchain technology. 
      `,
    },
    {
      component: "resource-list",
      title: "Popular Blockchains",
      resources: [
        {
          title: "Bitcoin",
          description:
            "The first blockchain that was created in response to the 2008 financial crisis. It was created by an unknown person or group of people using the pseudonym Satoshi Nakamoto.",
          link: "https://bitcoin.org/en/",
          image:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fbitcoin%2Fsmall%2Fbitcoin_PNG47.png&f=1&nofb=1&ipt=fba1bde3bc8e72bb30c8c5c806a3cd85b5d433cf4b286d9af63f31b5d9a21401&ipo=images",
        },
        {
          title: "Ethereum",
          description:
            "The second popular blockchain to be created. It is known for its smart contracts which Bitcoin doesn't support very well. It was created by Vitalik Buterin when he was 19 years old.",
          link: "https://ethereum.org/en/",
          image:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2021%2F05%2F24%2F09%2F15%2Fethereum-logo-6278329_960_720.png&f=1&nofb=1&ipt=551d9ff77426255db8211f04e675db0a81db4932c350d8abef6ca5ae596afd22&ipo=images",
        },
        {
          title: "Solana",
          description:
            "A new blockchain that is known for its fast speed and low fees. It was created by Anatoly Yakovenko and is gaining popularity in the crypto world.",
          link: "https://solana.com/",
          image:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.JVFns9BrMRUaZCwqwwMBpgAAAA%26pid%3DApi&f=1&ipt=a9dd0dabeee374404954c227ff2a43359f5b14d9002fbae523dfb315ff6a8061&ipo=images",
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
