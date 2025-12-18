
export default function Welcome() {
  return (
    <div className="space-y-2 md:space-y-10">
      <h1 className="mt-4 text-lg font-bold text-center md:text-3xl text-murkrow">
        Welcome to Skillify K-12 Tutoring!
      </h1>
      <div className="flex flex-col items-center md:flex-row h-80 md:h-full">
        <div className="flex flex-col p-6 mt-4 space-y-4 text-sm rounded-lg md:space-y-8 md:text-base text-murkrow bg-mewtwo md:mt-0">
          <p>
            Reach out to us discuss academic tutoring options for K-12
            students. 
          </p>
          <p>
            Virtual or in-person in downtown Toronto.
          </p>
        </div>
        <img
          className="md:w-[475px] md:visible invisible"
          src="/images/freemium/learning.svg"
        ></img>
      </div>
    </div>
  );
}
