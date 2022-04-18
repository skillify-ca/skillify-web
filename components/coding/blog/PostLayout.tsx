import LandingNavbar from "../../LandingNavbar";

export default function PostLayout({ children }) {
  return (
    <div className="flex flex-col items-center bg-pikachu-200 heropattern-parkayfloor-white bg-opacity-10">
      <LandingNavbar />
      <div className="flex flex-col items-center max-w-5xl gap-4 p-4 mx-16 my-8 bg-white shadow-lg">
        {children}
      </div>
    </div>
  );
}
