import { ResponseData } from "../codingBasics/introduction";

export function getDataForSetupToolsLesson(): ResponseData {
    return {
      lessonComponents: [
        {
          component: "title",
          text: "Setting up your tools",
        },
        {
          component: "description",
          text: `Welcome to the Vibe Coding course! Vibe Coding is an excellent way to prototype your ideas and validate if you are on the right track. \n\nBut vibe coding has limitations that make it difficult to build and maintain a production ready applications with real users.\n\nMake sure you download or sign up for these programs to start. Message Vithushan if you're having trouble.`,
        },
        {
          component: "resource-list",
          resources: [   
            {
              title: "Github",
              description: "A platform for hosting and collaborating on code.",
              link: "https://github.com/",
              image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgithub.githubassets.com%2Fassets%2FGitHub-Mark-ea2971cee799.png&f=1&nofb=1&ipt=5a0c08166208adea369f3181702e3fe07f25bce1b75034a129fbf81e3ed03f0c",
            },
            {
              title: "Github Desktop",
              description: "A desktop application for Github.",
              link: "https://desktop.github.com/",
              image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.techspot.com%2Fimages2%2Fdownloads%2Ftopdownload%2F2021%2F04%2F2021-04-07-ts3_thumbs-8ba.png&f=1&nofb=1&ipt=791a82a20d5fedcd6e1fa08094afca7f74dfaa1d56517959ca78567cde0bae19",
            },
            {
              title: "Google AI Studio",
              description:
                "A suite of tools for developers to build with Google's latest generative AI models.",
              link: "https://aistudio.google.com/prompts/new_chat",
              image:
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fregistry.npmmirror.com%2F%40lobehub%2Ficons-static-png%2Flatest%2Ffiles%2Fdark%2Faistudio-color.png&f=1&nofb=1&ipt=596c84ab89b56dff884ac5334141fb139704df07051c2ad90d863ae326d9b4f5",
            },
            {
              title: "Vercel",
              description:
                "A platform for deploying and scaling web applications.",
              link: "https://vercel.com/",
              image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.uEi-BYi_M-Rnv9abB82xqwHaHa%3Fpid%3DApi&f=1&ipt=25a367dae41815f21a2025d1dc44dace3940ae7805e7ac02cea437d2b5a5413c",
            },
            {
              title: "Visual Studio Code",
              description:
                "Just like how Microsoft Word is a text editor for editing text, Visual Studio Code is a free code editor for editing code and also made by Microsoft.",
              link: "https://code.visualstudio.com/",
              image: "/images/studentPortal/basics/introduction/vs-code.png",
            },
            {
              title: "Cline",
              description:
                "Cline is an AI software engineer that helps you build software faster.",
              link: "https://cline.bot/",
              image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fworkablehr.s3.amazonaws.com%2Fuploads%2Faccount%2Fopen_graph_logo%2F688344%2Fsocial&f=1&nofb=1&ipt=23e75e6ae7c3deee9004752f5f0ee9437fb85b76414ab91f9198df78b8792d2f",
            },
          ],
        },
        {
          component: "checkboxForm",
          title: "Completion Criteria",
          items: [
            {
              label: "Required - I have a Github account, Google AI Studio account and Vercel account.",
              required: true,
            },
            {
              label: "Optional - I have installed Github Desktop, Visual Studio Code and Cline. (For technical students only).",
              required: false,
            },
          ],
          url: "/studentPortal/courses/vibeCoding/deploy-to-vercel",
  
        },
      ],
      currentNode: 0,
      nextNode: 0,
      nextSlug: "deploy-to-vercel",
    };
  }