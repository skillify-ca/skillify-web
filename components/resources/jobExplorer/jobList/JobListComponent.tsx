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
      title: "Job 2",
      image: "/images/resources/jobExplorer/frontEndDev.jpg",
      width: 100,
      height: 100,
      link: "././frontEndDev",
    },
    {
      title: "Job 3",
      image: "/images/resources/jobExplorer/frontEndDev.jpg",
      width: 100,
      height: 100,
      link: "././frontEndDev",
    },
    {
      title: "Job 4",
      image: "/images/resources/jobExplorer/frontEndDev.jpg",
      width: 100,
      height: 100,
      link: "././frontEndDev",
    },
    {
      title: "Job 5",
      image: "/images/resources/jobExplorer/frontEndDev.jpg",
      width: 100,
      height: 100,
      link: "././frontEndDev",
    },
    {
      title: "Job 6",
      image: "/images/resources/jobExplorer/frontEndDev.jpg",
      width: 100,
      height: 100,
      link: "././frontEndDev",
    },
    {
      title: "Job 7",
      image: "/images/resources/jobExplorer/frontEndDev.jpg",
      width: 100,
      height: 100,
      link: "././frontEndDev",
    },
    {
      title: "Job 8",
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
            className="flex flex-col items-center justify-center w-full h-64 p-6 bg-orange-500 rounded"
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
