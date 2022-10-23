import React from "react";
import Navbar from "../components/ui/Navbar";
import Image from "next/image";
import googleClassroomImg from "../public/images/assignments/google-classroom.svg";
import { resources } from "./api/resources";
import ContactForms from "../components/ContactForms";
import { Popover } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Student Portal", href: "/studentPortal" },
  { name: "Resources", href: "/resources" },
];

interface ArticleProps {
  image: string;
  link: string;
  title: string;
  description: string;
}

const articles: ArticleProps[] = [
  {
    image:
      "https://media.blogto.com/articles/20220119-1-password-toronto.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70",
    link:
      "https://www.blogto.com/tech/2022/01/toronto-startup-hiring-1-password/",
    title: "Toronto startup now worth $6.8B is hiring hundreds of people",
    description:
      "What do Justin Timberlake, Matthew McConaughey, Scarlett Johansson, Rita Wilson, Pharrell Williams, Robert Downey Jr., Trevor Noah, Chris Evans and...",
  },
  {
    image:
      "https://www.narcity.com/media-library/canada-s-top-remote-jobs-in-2022-were-unveiled-so-you-can-make-money-from-your-couch.jpg?id=28847731&width=1245&quality=85&coordinates=0%2C0%2C0%2C0&height=700",
    link:
      "https://www.narcity.com/canada-top-remote-jobs-in-2022-were-unveiled-so-you-can-make-money-from-your-couch",
    title:
      "Canada's Top Remote Jobs In 2022 Were Unveiled So You Can Make Money From Your Couch",
    description: "No need to commute to an office!",
  },
  {
    image:
      "https://www.narcity.com/media-library/twitter-is-currently-hiring-in-toronto-there-are-so-many-different-positions-available.jpg?id=29206499&width=1245&quality=85&coordinates=2%2C0%2C3%2C0&height=700",
    link:
      "https://www.narcity.com/toronto/twitter-is-currently-hiring-in-toronto-there-are-so-many-different-positions-available",
    title:
      "Twitter Is Currently Hiring In Toronto & There Are So Many Different Positions Available",
    description: "Get your resume ready.",
  },
];
const Article = ({ link, image, title, description }: ArticleProps) => {
  return (
    <div className="object-contain w-full p-4 transition duration-500 ease-in-out transform bg-white rounded-lg shadow-lg hover:scale-110">
      <a href={link} target="_blank">
        <p className="mb-4 font-bold">{title}</p>
        <p className="mb-4 text-sm">{description}</p>
        <img src={image}></img>
      </a>
    </div>
  );
};
export default function Blog(props) {
  return (
    <div className="flex flex-col overflow-auto bg-scroll bg-white">
      <div className="pb-4">
        <Popover>
          <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
            <nav
              className="relative flex items-center justify-between sm:h-10 lg:justify-start"
              aria-label="Global"
            >
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="/">
                    <span className="sr-only">Skillify</span>
                    <img
                      className="w-auto h-8 sm:h-10"
                      src="/images/logo.svg"
                    />
                  </a>
                  <div className="flex items-center -mr-2 md:hidden">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-medium text-gray-500 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <div>
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
            >
              <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img className="w-auto h-8" src="/images/logo.svg" alt="" />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                      <span className="sr-only">Close main menu</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </div>
        </Popover>
      </div>
      <div className="flex flex-col items-center justify-center p-4 bg-gray-100">
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between border-b-4 border-blue-800">
            <p className="p-4 text-2xl font-bold">Research and News</p>
          </div>

          <div className="grid grid-cols-1 gap-8 p-8 sm:grid-cols-3">
            {articles.map((it) => (
              <Article
                image={it.image}
                link={it.link}
                title={it.title}
                description={it.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Blog.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
