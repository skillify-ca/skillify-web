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
          ]}
        />
      </div>
      <div className="p-4 bg-slate-400 text-murkrow">
        <h2 className="text-5xl font-bold text-murkrow">Games</h2>
        {gameList.map((game) => (
          <Link href={game.link}>
            <div className="w-64 p-4 my-4 bg-gray-100 shadow-lg cursor-pointer rounded-xl">
              <p>{game.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const games = {
    finance: [{ title: "Credit Card Lesson", link: "finance/credit-card" }],
    math1: [
      { title: "Multiplication Game", link: "multiplication/game" },
      {
        title: "Multiplication Connect Four",
        link: "multiplication-connect/Index",
      },
    ],
  };
  return {
    props: { courseId: params.courseId, gameList: games[params.courseId] },
  };
}
