import Image from "next/image";
import React from "react";


const JobGroup = ({ subheading, jobs }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-bold mb-4">{subheading}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {jobs.map((job) => (
        <div
          key={job.title}
          className={`flex flex-col items-center rounded-lg p-6 shadow-md ${
            (job.title.includes("Game Developer") ||
              job.title.includes("Cyber Security Analyst") ||
              job.title.includes("Product Manager") ||
              job.title.includes("Digital Marketer")) &&
            "bg-gray-300 text-black"
          } ${
            !(job.title.includes("Game Developer") ||
              job.title.includes("Cyber Security Analyst") ||
              job.title.includes("Product Manager") ||
              job.title.includes("Digital Marketer")) &&
            "bg-orange-500 text-white hover:bg-orange-600 hover:scale-105"
          } cursor-pointer transition duration-300`}
        >
          <h2 className="text-lg font-semibold mb-4">
            <a href={job.link} className="text-black hover:underline">
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
      link: "././backEndDev",
    },
    {
      title: "Fullstack Developer",
      image: "/images/resources/jobExplorer/frontEndDev.jpg",
      width: 100,
      height: 100,
      link: "././fullstackDev",
    },
    {
      title: "AI Engineer",
      image: "/images/resources/jobExplorer/frontEndDev.jpg",
      width: 100,
      height: 100,
      link: "././aiEngineer",
    },
    {
      title: "Data Scientist",
      image: "/images/resources/jobExplorer/frontEndDev.jpg",
      width: 100,
      height: 100,
      link: "././dataScientist",
    },
    {
      title: "DevOps Engineer",
      image: "/images/resources/jobExplorer/frontEndDev.jpg",
      width: 100,
      height: 100,
      link: "././devOpsEngineer",
    },
    {
      title: "Cyber Security Analyst",
      image: "/images/resources/jobExplorer/frontEndDev.jpg",
      width: 100,
      height: 100,
      link: "",
    },
    {
      title: "Mobile App Developer",
      image: "/images/resources/jobExplorer/frontEndDev.jpg",
      width: 100,
      height: 100,
      link: "././mobileAppDev",
    },
    {
      title: "Game Developer",
      image: "/images/resources/jobExplorer/frontEndDev.jpg",
      width: 100,
      height: 100,
      link: "",
    },
    {
      title: "UX Designer",
      image: "/images/resources/jobExplorer/frontEndDev.jpg",
      width: 100,
      height: 100,
      link: "././uxDesigner",
    },
    {
      title: "Product Manager",
      image: "/images/resources/jobExplorer/frontEndDev.jpg",
      width: 100,
      height: 100,
      link: "",
    },
    {
      title: "Digital Marketer",
      image: "/images/resources/jobExplorer/frontEndDev.jpg",
      width: 100,
      height: 100,
      link: "",
    },
  ];

  const beginnerJobs = jobs.filter((job) => job.title.includes("Front End Developer") || job.title.includes("Back End Developer") || job.title.includes("Data Scientist"));
  const intermediateJobs = jobs.filter((job) => job.title.includes("Fullstack Developer") || job.title.includes("Mobile App Developer") || job.title.includes("Game Developer"));
  const advancedJobs = jobs.filter((job) => job.title.includes("AI Engineer") || job.title.includes("Cyber Security Analyst") || job.title.includes("DevOps Engineer"));
  const nonTechnicalJobs = jobs.filter((job) => job.title.includes("UX Designer") || job.title.includes("Product Manager") || job.title.includes("Digital Marketer"));

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Job Explorer</h1>

        <p className="text-lg text-gray-700 mb-8 text-center w-3/4 mx-auto">
          Job Explorer is a helpful tool designed to assist students in learning about the requirements and workings of popular jobs in the tech industry. Explore various job roles, their responsibilities, and the skills needed to excel in these careers.
        </p>

        <div className="grid grid-cols-1 gap-8">
          <JobGroup subheading="Beginner" jobs={beginnerJobs} />
          <JobGroup subheading="Intermediate" jobs={intermediateJobs} />
          <JobGroup subheading="Advanced" jobs={advancedJobs} />
          <JobGroup subheading="Non-Technical" jobs={nonTechnicalJobs} />
        </div>
      </div>
    </div>
  );
};

export default JobListComponent;
