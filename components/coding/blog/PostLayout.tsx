import LandingNavbar from "../../LandingNavbar";

export default function PostLayout({ children }) {
  return (
    <div className="md:flex md:flex-col items-center bg-gray-100 heropattern-hideout-gray-300">
      <LandingNavbar />
      <div className="md:flex md:flex-col items-center max-w-5xl gap-4 md:p-4 md:mx-16 md:my-8 bg-white shadow-lg">
        {children}
      </div>
    </div>
  );
}
