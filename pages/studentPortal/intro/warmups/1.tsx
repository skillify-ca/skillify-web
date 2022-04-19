import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Card, { CardData } from "../../../../components/coding/Card";
import LessonComponent, {
  LessonComponentData,
  Resource,
} from "../../../../components/coding/studentPortal/LessonComponent";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";
import { Button } from "../../../../components/ui/Button";
import Navbar from "../../../../components/ui/Navbar";
import { COMPLETE_USER_INTRO_NODE } from "../../../../graphql/coding/completeUserIntroNode";
import { FETCH_USER_INTRO_NODES } from "../../../../graphql/coding/fetchUserIntroNodes";
import { UNLOCK_USER_INTRO_NODE } from "../../../../graphql/coding/unlockUserIntroNode";
import { useAuth } from "../../../../lib/authContext";

const Warmups1 = ({ lessonComponents }) => {
  const { user } = useAuth();
  const router = useRouter();
  const [unlockUserNode] = useMutation(UNLOCK_USER_INTRO_NODE);
  const [completeUserNode] = useMutation(COMPLETE_USER_INTRO_NODE);

  const handleContinue = () => {
    completeUserNode({
      variables: {
        user_id: user.uid,
        node_id: 1,
        completed: true,
      },
    }).then((res) => {
      unlockUserNode({
        variables: {
          user_id: user.uid,
          node_id: 2,
          locked: false,
        },
        refetchQueries: [{ query: FETCH_USER_INTRO_NODES }],
      });
      router.push("/studentPortal/intro/HTML/1");
    });
  };
  return (
    <div className="grid grid-cols-1 gap-8 px-4 md:px-8 lg:px-12">
      <ProgressBar completed={100} />
      {lessonComponents.map((it) => (
        <LessonComponent data={it} />
      ))}
      <div className="grid grid-cols-1 gap-8"></div>
      <div className="flex mt-8 sm:justify-end">
        <Button onClick={handleContinue} label="Continue" disabled={false} />
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const resources: Resource[] = [
    {
      title: "Visual Studio Code",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
      link: "https://code.visualstudio.com/download",
      description:
        "Just like how Microsoft Word is a text editor for editing text, Visual Studio Code is a code editor for editing code and also made by Microsoft.",
    },
    {
      title: "Grasshopper",
      image:
        "https://grasshopper.app/assets/static/images/home-touts/adventure__waving.svg",
      link: "https://grasshopper.app",
      description:
        "Go through the Fundamentals 1 course and finish all the levels and challenges. This app is a good introduction to learning JavaScript.",
    },
    {
      title: "Tuple (MacOS only)",
      image: "https://tuple.app/img/logo-white.jpg",
      link: "https://tuple.app/",
      description:
        "Tuple is a pair programming tool that lets us code on the same screen together.",
    },
    {
      title: "Codecademy",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEUQFi////8AACAIECsAABiWmJ8tMUUAACLDxMgAAAf6+vqGh5AAAAB/gIgLEi0bIDa2t70AAB0AACUAABcAABOpq7EACiltb3gAABBLTlwABScAAAwlKT6mp607P0/t7u9lZ3NYW2eam6Pj4+bU1dg0OElER1bIyM12eIKNj5fQ0dRVV2MeIzmztLkWGzWPLQo/AAADL0lEQVR4nO3ba1uiQBiAYUCUPE2ANIKlppaHDvv/f97W6gKWjLLG0mvP/a3R5vK5pOGYZQEAAAAAAAAAAAAAAAAAAAAAAAAAAOAYdduugFd3VkapTgXszfdJbLTsKqzcusNSFRVeUfj/UEghhfX7UYVNfX2mu29e2PfUmXrfvvDcySisBYWlUFgLCkuhsBYUlkJhLSgshcJaUFgKhbWgsBQKa0FhKTILG6HnBIHjjdTxyeQVqnAQtYbd+Xg8796HUaCPTCatUAXB8KqTvmwvxpPY3CisMAzmubythyQybayyCqPZ9GPfO98zfI2iCuPmob4308fiJVdSYe+mIPBNEhZNJqgw2BQH2vZjo2AyOYV6aQq0l/IL24t80HTl+6ts2Zm25G+l4TDX5y/jgetG0eRq+/ODLl5MxRRGD1ngsL0L0rfJ++7R7xVtopacwvzDC+vcJw1fpvbm1jSZlEIvW0ifevn36rvE/MGlFA5W6dBstP/mI4feUgrb6brZGZSbTEih8rKNNCo3mZDCxmM6chOUm0xIoX5ORzZOucmEFI7u05FuySs38grLXpsSUpg7ZqPwIyGFl7+VjmbZWnqZhTpJR+aXubdQL//8OYUUWlE6sjCeK30mpTDOrmFcn3CzIkdKoetnS83+H2J4ZOWRUhiu06Hp3kX8wboZG79UKYVK29kn7aVJqt237dXAdBIspdAa+LlEL9DqvdoN/4wuXgqvJQoq1JOs0O6Mk6DXc57HuxtRnaT4pFFMoRXlvsTP1oXHAXIKlf505zBvVvS3KKfQGk0Ole0sdNGCKqjQcmbFgWHhVW9JhZazPHgL2LZfDfe5RRVao/D1QN/03rTPl1Voqaj1cUld9CPD3lBc4dtrbrj2F3/3g0/zZXQhx6U5Kgxi926ZJJNfceQce2BIYuH2LVrrxkmnUVILT0dhLSgshcJa/KjCdeyc6UChZ/wFw5MrVRQ+bZpnuvlUODLOOS98fqyawq+0K9x7uuqAsrfRKaSQQgoppLAiYb/79TaT7a5cXftGhdeWvzbRq8DfYxUVuAZH/5EKAAAAAAAAAAAAAAAAAAAAAAAAAADgBL8BQQRVxH2O170AAAAASUVORK5CYII=",
      link: "https://www.codecademy.com/learn/introduction-to-javascript",
      description:
        "This is an online course on Javascript. This should solidify the concepts you learned in Grasshopper. There is also a mobile app called Codecademy GO that has challenges as well.",
    },
  ];
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Warmups",
    },
    {
      component: "description",
      text: "Welcome to the Skillify learning path! Let me start by congratulating you on this journey. You are learning an in-demand skill that will future-proof your career. Just like learning to play the guitar, coding is a skill that requires practice, but mastering a few key competencies will unlock high-paying and remote career opportunities from all over the world.",
    },
    {
      component: "description",
      text: " Make sure you download or sign up for all of these programs to get started. Message Vithushan if you're having trouble.",
    },
    {
      component: "resource-list",
      resources,
    },
  ];
  return { props: { lessonComponents } };
}

export default Warmups1;
