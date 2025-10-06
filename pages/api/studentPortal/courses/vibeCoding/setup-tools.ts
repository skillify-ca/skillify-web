import { LessonPageData } from "./types";

export function getDataForSetupToolsLesson(): LessonPageData {
    return {
      lessonComponents: [
        {
          component: "title",
          text: "Setting up your tools",
        },
        {
          component: "description",
          text: `Welcome to the Vibe Coding course! Vibe Coding is an excellent way to prototype your ideas and validate if you are on the right track. 

But vibe coding has limitations that make it difficult to build and maintain a production ready applications with real users.

Make sure you download or sign up for these programs to start. Message Vithushan if you're having trouble.`,
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
          ],
        },
        {
          component: "video",
          url: "https://firebasestorage.googleapis.com/v0/b/math-champ-b7e77.appspot.com/o/vibeCoding%2Fsetting-up-tools.mov?alt=media"
        },
        {
          component: "checkboxForm",
          title: "Completion Criteria",
          items: [
            {
              label: "I have a Github account, Google AI Studio account and Vercel account. I have downloaded Github Desktop.",
              required: true,
            },
          ],
          url: "/studentPortal/courses/vibeCoding/hello-world-ai-studio",
  
        },
      ],
      lessonId: 1,
      lessonCount: 8,
    };
  }