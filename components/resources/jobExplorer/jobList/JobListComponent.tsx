import Image from "next/image";
import React from "react";

const JobListComponent = () => {
  const jobs = [
    {
      title: "Front End Developer",
      image: "/images/resources/jobExplorer/frontEndDev.jpg",
      width: 100,
      height: 100,
      link: "././frontEndDev",
    },
    {
      title: "Back End Developer",
      image: "/images/resources/jobExplorer/frontEndDev.jpg",
      width: 100,
      height: 100,
      link: "././frontEndDev",
    },
    {
      title: "Fullstack Developer",
      image: "/images/resources/jobExplorer/frontEndDev.jpg",
      width: 100,
      height: 100,
      link: "././frontEndDev",
    },
    {
      title: "AI Engineer",
      image: "/images/resources/jobExplorer/frontEndDev.jpg",
      width: 100,
      height: 100,
      link: "././frontEndDev",
    },
    {
      title: "Data Scientist",
      image: "/images/resources/jobExplorer/frontEndDev.jpg",
      width: 100,
      height: 100,
      link: "././frontEndDev",
    },
    {
      title: "DevOps Engineer",
      image: "/images/resources/jobExplorer/frontEndDev.jpg",
      width: 100,
      height: 100,
      link: "././frontEndDev",
    },
    {
      title: "Cyber Security Analyst",
      image: "/images/resources/jobExplorer/frontEndDev.jpg",
      width: 100,
      height: 100,
      link: "././frontEndDev",
    },
    {
      title: "Mobile App Developer",
      image: "/images/resources/jobExplorer/frontEndDev.jpg",
      width: 100,
      height: 100,
      link: "././frontEndDev",
    },
    {
      title: "Game Developer",
      image: "/images/resources/jobExplorer/frontEndDev.jpg",
      width: 100,
      height: 100,
      link: "././frontEndDev",
    },
    {
      title: "UX Designer",
      image: "/images/resources/jobExplorer/frontEndDev.jpg",
      width: 100,
      height: 100,
      link: "././frontEndDev",
    },
    {
      title: "Product Manager",
      image: "/images/resources/jobExplorer/frontEndDev.jpg",
      width: 100,
      height: 100,
      link: "././frontEndDev",
    },
    {
      title: "UX Researcher",
      image: "/images/resources/jobExplorer/frontEndDev.jpg",
      width: 100,
      height: 100,
      link: "././frontEndDev",
    },
  ];

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid w-4/5 grid-cols-4 gap-4">
        {jobs.map((job, index) => (
          <div
            key={job.title}
            className={`flex flex-col items-center justify-center w-full h-64 p-6  rounded ${
              index < 5 ? "bg-orange-500 cursor-pointer" : "bg-gray-100"
            }`}
          >
            <h2 className="mb-4 text-lg font-semibold">
              <a href={job.link} className="text-blue-600 hover:underline">
                {job.title}
              </a>
            </h2>
            <div className="w-32 h-32 overflow-hidden rounded-full">
              <div className="object-cover w-full h-full rounded-full">
                <Image
                  src={job.image}
                  alt={job.title}
                  width={job.width}
                  height={job.height}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListComponent;
