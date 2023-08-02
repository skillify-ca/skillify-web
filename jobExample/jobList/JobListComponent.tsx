import Image from 'next/image';
import frontEndDeveloperImage from './images/FrontEndDev.jpg';
import job2Image from './images/FrontEndDev2.jpg';
import job3Image from './images/FrontEndDev3.jpg';
import job4Image from './images/FrontEndDev4.jpg';
import job5Image from './images/FrontEndDev5.jpg';
import job6Image from './images/FrontEndDev6.jpg';
import job7Image from './images/FrontEndDev7.jpg';
import job8Image from './images/FrontEndDev8.jpg';

const JobListComponent = () => {
  const jobs = [
    { title: "Front End Developer", image: frontEndDeveloperImage, width: 100, height: 100, link: "././frontEndDev" },
    { title: "Job 2", image: job2Image, width: 100, height: 100, link: "././frontEndDev" },
    { title: "Job 3", image: job3Image, width: 100, height: 100, link: "././frontEndDev" },
    { title: "Job 4", image: job4Image, width: 100, height: 100, link: "././frontEndDev" },
    { title: "Job 5", image: job5Image, width: 100, height: 100, link: "././frontEndDev" },
    { title: "Job 6", image: job6Image, width: 100, height: 100, link: "././frontEndDev" },
    { title: "Job 7", image: job7Image, width: 100, height: 100, link: "././frontEndDev" },
    { title: "Job 8", image: job8Image, width: 100, height: 100, link: "././frontEndDev" },
  ];

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="grid grid-cols-4 gap-4 w-4/5">
        {jobs.map((job, index) => (
          <div key={job.title} className="flex flex-col items-center justify-center w-full h-64 p-6 bg-orange-500 rounded">
            <h2 className="text-lg font-semibold mb-4">
              <a href={job.link} className="text-blue-600 hover:underline">{job.title}</a>
            </h2>
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <div className="w-full h-full object-cover rounded-full">
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
