import Link from "next/link";
import CourseNavbar from "../../../../components/textbook/CourseNavbar";

export default function CourseGamesPage({ courseId }) {
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
          Stats
        </h2>
        <div className="flex flex-col gap-8"></div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  return {
    props: { courseId: params.courseId },
  };
}
