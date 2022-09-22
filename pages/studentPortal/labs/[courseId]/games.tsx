import Link from "next/link";
import CourseNavbar from "../../../../components/textbook/CourseNavbar";

export default function CourseGamesPage({ courseId, gameList }) {
  return (
    <div>
      <div>
        <CourseNavbar
          navbarLinks={[
            { name: "Practice", href: `/studentPortal/labs/${courseId}` },
            { name: "Games", href: `/studentPortal/labs/${courseId}/games` },
            { name: "Stats", href: `/studentPortal/labs/${courseId}/stats` },
          ]}
        />
      </div>
      <div className="p-4 bg-slate-300 dark:bg-slate-700 text-murkrow">
        <h2 className="text-5xl font-bold text-murkrow dark:text-white">
          Games
        </h2>
        <div className="flex gap-8">
          {gameList.map((game) => (
            <Link href={game.link}>
              <div className="flex flex-col items-center w-64 my-4 transition-all bg-gray-100 shadow-lg cursor-pointer hover:bg-slate-200 hover:scale-110 rounded-xl">
                <img src={game.image} className="w-full h-40 rounded-t-lg" />
                <p className="p-4">{game.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const games = {
    finance: [{ title: "Credit Card Lesson", link: "finance/credit-card" }],
    math1: [
      {
        title: "Longest Streak",
        link: "/studentPortal/labs/multiplication/game",
        image:
          "https://images.unsplash.com/photo-1502214380024-fec72aa40e76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
      },
      {
        title: "Multiplication Connect Four",
        link: "/studentPortal/labs/multiplication-connect/Index",
        image:
          "https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      },
      {
        title: "Alien Pathway",
        link: "/studentPortal/labs/alien-pathway/Index",
        image:
          "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
    ],
  };
  return {
    props: { courseId: params.courseId, gameList: games[params.courseId] },
  };
}
