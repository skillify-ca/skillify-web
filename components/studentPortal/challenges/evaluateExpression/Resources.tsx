interface ResourcesProps {
  videoUrl: string;
}

const Resources = () => {
  return (
    <div className="flex flex-col justify-center gap-4 p-8 bg-white shadow-lg rounded-xl">
      <p className="font-bold">Resources</p>
      <a
        href="https://leetcode.com/problems/basic-calculator/"
        className="text-blue-500 underline"
      >
        Leetcode #224
      </a>
      <a
        href="https://www.geeksforgeeks.org/expression-evaluation/"
        className="text-blue-500 underline"
      >
        GeeksForGeeks Article
      </a>
      <iframe
        width="560"
        height="315"
        className="w-full"
        src="https://www.youtube.com/embed/081AqOuasw0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default Resources;
