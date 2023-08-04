import React, { useState } from 'react';
import { InterviewPrepCourse } from '.';
import LandingNavbar from '../../../components/landingPage/LandingNavbar';
import Link from 'next/link';

export default function Dictionary() {
  return (
    <div>
      <DictionaryContent />
    </div>
  );
}

const DictionaryContent = () => {
  const jobTerms = [
    {
      term: '1. Software Developer',
      sections: [
        {
          title: 'Programming Languages',
          definition:
            'Programming languages are formal languages used to communicate instructions to a computer. Common programming languages include Java, Python, C++, JavaScript, Ruby, etc.',
          items: [
            {
              term: 'Java',
              definition:
                'Java is a versatile and widely used programming language...',
              pros: [
                'Widely used and versatile',
                'Strong community support and resources',
                'Extensive libraries and frameworks available',
              ],
              cons: [
                'May have performance limitations',
                'Steep learning curve for some developers',
              ],
            },
            {
              term: 'Python',
              definition:
                'Python is a high-level programming language known for its simplicity...',
              pros: [
                'Clear and readable syntax',
                'Large standard library and third-party packages available',
                'Ideal for rapid prototyping and development',
              ],
              cons: [
                'Slower execution speed compared to low-level languages',
                'Global Interpreter Lock (GIL) in CPython',
              ],
            },
            // Add more items for this section...
          ],
        },
        {
          title: 'Frameworks',
          definition:
            'Frameworks are pre-written code libraries that provide a foundation for building applications and simplify the development process. Examples include Spring, Django, React, Angular, Rails, etc.',
          items: [
            {
              term: 'Spring',
              definition: 'Spring is a Java-based framework...',
              pros: [
                'Comprehensive and modular framework',
                'Supports dependency injection and aspect-oriented programming',
                'Robust ecosystem with numerous extensions',
              ],
              cons: [
                'Steep learning curve for beginners',
                'Configurations can be complex',
              ],
            },
            {
              term: 'Django',
              definition: 'Django is a high-level Python framework...',
              pros: [
                'Batteries-included framework with built-in features',
                'Follows the "Don\'t Repeat Yourself" (DRY) principle',
                'Built-in administration interface for easy content management',
              ],
              cons: [
                'May limit flexibility for certain use cases',
                "Requires understanding of Django's conventions",
              ],
            },
            // Add more items for this section...
          ],
        },
        {
          title: 'Version Control',
          definition:
            'Version control systems allow developers to track changes in their codebase and collaborate with other team members. Examples include Git and SVN.',
          items: [
            {
              term: 'Git',
              definition: 'Git is a distributed version control system...',
              pros: [
                'Supports fast branching and merging',
                'Offline operations possible',
                'Wide adoption in the industry',
              ],
              cons: [
                'Steep learning curve for some developers',
                'Can lead to large repository sizes',
              ],
            },
            {
              term: 'SVN',
              definition:
                'SVN (Subversion) is a centralized version control system...',
              pros: [
                'Simpler branching and merging compared to Git',
                'Better suited for binary files',
                'Permissions control',
              ],
              cons: [
                'Single point of failure in centralized repositories',
                'Slower performance for large repositories',
              ],
            },
            // Add more items for this section...
          ],
        },
        {
          title: 'Databases',
          definition:
            'Databases are systems used to store, manage, and retrieve data. Common database technologies include SQL, MongoDB, MySQL, PostgreSQL, etc.',
          items: [
            {
              term: 'SQL',
              definition:
                'SQL (Structured Query Language) is a language used to manage relational databases...',
              pros: [
                'Standardized language for querying and manipulating data',
                'Supports complex queries and joins',
                'Widely used in various industries',
              ],
              cons: [
                'May have limitations for handling unstructured data',
                'Requires maintaining a schema for structured data',
              ],
            },
            {
              term: 'MongoDB',
              definition:
                'MongoDB is a popular NoSQL database known for its flexibility...',
              pros: [
                'Schemaless and flexible document-based data model',
                'Suitable for handling large volumes of unstructured data',
                'Scalable and distributed architecture',
              ],
              cons: [
                'May not be ideal for complex transactions',
                'Lacks ACID (Atomicity, Consistency, Isolation, Durability) properties of traditional databases',
              ],
            },
            // Add more items for this section...
          ],
        },
        {
          title: 'API',
          definition:
            'API (Application Programming Interface) allows different software applications to communicate and interact with each other. Common API types include REST and GraphQL.',
          items: [
            {
              term: 'REST',
              definition:
                'REST (Representational State Transfer) is an architectural style...',
              pros: [
                'Simple and easy to understand',
                'Stateless communication between client and server',
                'Wide adoption and support',
              ],
              cons: [
                'May lead to overfetching or underfetching of data',
                'Lacks standardized specification like GraphQL',
              ],
            },
            {
              term: 'GraphQL',
              definition: 'GraphQL is a query language for APIs...',
              pros: [
                'Allows clients to request specific data they need',
                'Reduces overfetching and underfetching of data',
                'Strongly typed and introspective',
              ],
              cons: [
                'Requires more complex setup and server-side processing',
                'May lead to inefficient queries if not optimized',
              ],
            },
            // Add more items for this section...
          ],
        },
        {
          title: 'IDEs/Editors',
          definition:
            'IDEs (Integrated Development Environments) and text editors are tools used by developers for writing, debugging, and testing code.',
          items: [
            {
              term: 'Visual Studio Code',
              definition:
                'Visual Studio Code (VS Code) is a popular code editor...',
              pros: [
                'Lightweight and fast',
                'Rich extensions marketplace for enhanced functionality',
                'Supports various programming languages',
              ],
              cons: [
                'May require more configuration for certain languages',
                'Resource-intensive for larger projects',
              ],
            },
            {
              term: 'IntelliJ',
              definition: 'IntelliJ is an IDE for Java development...',
              pros: [
                'Specifically tailored for Java development',
                'Robust support for Java frameworks and libraries',
                'Advanced code analysis and debugging tools',
              ],
              cons: [
                'Can be memory-intensive',
                'Paid license required for some features',
              ],
            },
            // Add more items for this section...
          ],
        },
        // Add more sections for this job...
      ],
    },
    {
      term: '2. Web Developer',
      sections: [
        {
          title: 'Front-end',
          definition:
            'Front-end development involves working on the user interface and user experience aspects of a website or web application. Common technologies include HTML, CSS, JavaScript, jQuery, Bootstrap, etc.',
          items: [
            {
              term: 'HTML',
              definition:
                'HTML is the standard markup language for creating web pages...',
              pros: [
                'Structure and semantic elements for web content',
                'Supported by all modern browsers',
              ],
              cons: [
                'Limited control over page layout',
                'May be vulnerable to cross-site scripting (XSS) attacks',
              ],
            },
            {
              term: 'CSS',
              definition:
                'CSS is the style sheet language used for styling web pages...',
              pros: [
                'Enables separation of content and presentation',
                'Flexibility in defining styles and layouts',
              ],
              cons: [
                'Specificity and inheritance can lead to unintended styling conflicts',
              ],
            },
            // Add more items for this section...
          ],
        },
        {
          title: 'Back-end',
          definition:
            'Back-end development involves working on the server-side logic and databases of a website or web application. Technologies include Node.js, Express, PHP, Ruby on Rails, etc.',
          items: [
            {
              term: 'Node.js',
              definition:
                'Node.js is a JavaScript runtime that allows server-side execution...',
              pros: [
                'Uses a single language (JavaScript) for both front-end and back-end',
                'Asynchronous and event-driven programming model',
                'Large package ecosystem with npm',
              ],
              cons: [
                'Single-threaded nature may not fully utilize multi-core processors',
                'Callback hell',
              ],
            },
            {
              term: 'Express',
              definition:
                'Express is a minimalist web framework for Node.js...',
              pros: [
                'Lightweight and flexible framework',
                'Middleware support for enhancing functionality',
              ],
              cons: [
                'Lacks built-in features compared to larger frameworks',
                'Steeper learning curve for beginners',
              ],
            },
            // Add more items for this section...
          ],
        },
        {
          title: 'CMS',
          definition:
            'CMS (Content Management System) allows users to create, edit, and manage digital content on websites without advanced technical knowledge.',
          items: [
            {
              term: 'WordPress',
              definition: 'WordPress is a popular open-source CMS...',
              pros: [
                'User-friendly and easy to set up',
                'Large community and extensive plugin support',
                'Wide selection of themes for design customization',
              ],
              cons: [
                'May require performance optimization for larger sites',
                'Customization may lead to code complexity',
              ],
            },
            {
              term: 'Drupal',
              definition: 'Drupal is a flexible and powerful CMS...',
              pros: [
                'Suitable for large and complex websites',
                'Highly customizable and scalable',
                'Robust user access control and permissions',
              ],
              cons: [
                'Steep learning curve for beginners',
                'Requires more technical knowledge for advanced configurations',
              ],
            },
            // Add more items for this section...
          ],
        },
        {
          title: 'Responsive Design',
          definition:
            'Responsive design ensures that websites and web applications adapt to different screen sizes and devices, providing an optimal user experience.',
          items: [
            {
              term: 'Media Queries',
              definition:
                'Media queries are CSS techniques used to apply styles based on different screen sizes...',
              pros: [
                'One codebase for multiple devices',
                'User-friendly experience on all devices',
                'Search engine friendly (SEO)',
              ],
              cons: [
                'Complex layouts may require more effort',
                'Design and testing challenges for various devices',
              ],
            },
            {
              term: 'Flexbox and Grid',
              definition: 'Flexbox and Grid are CSS layout systems...',
              pros: [
                'Simplified layout and positioning of elements',
                'Efficient use of available space on different screens',
                'Control over content order and alignment',
              ],
              cons: [
                'Limited browser support for older versions',
                'More complex layouts may require additional code',
              ],
            },
            // Add more items for this section...
          ],
        },
        // Add more sections for this job...
      ],
    },
    // Add other job sections here
    // ...
  ];

  const [selectedTerm, setSelectedTerm] = useState(null);
  const [selectedDefinition, setSelectedDefinition] = useState('');
  const [selectedPros, setSelectedPros] = useState([]); // Initialize as an empty array
  const [selectedCons, setSelectedCons] = useState([]); // Initialize as an empty array
  const [selectedJob, setSelectedJob] = useState(jobTerms[0]);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const handleTermClick = (term, definition, pros, cons) => {
    setSelectedTerm(term);
    setSelectedDefinition(definition);
    setSelectedPros(pros);
    setSelectedCons(cons);
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
    const jobElement = document.getElementById(job.term);
    if (jobElement) {
      jobElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to show the sidebar
  const showSidebar = () => {
    setSidebarVisible(true);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <div>
      <div className="max-w-3xl mx-auto mt-8"></div>
      <div className="flex items-center justify-between mb-6">
        <Link href="./lesson3">
          <button className="px-4 py-2 mr-2 text-white bg-gray-500 rounded-lg">
            Back
          </button>
        </Link>
        <h1 className="text-3xl font-bold">Software Dictionary</h1>
        <Link href="./assign1">
          <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">
            Next
          </button>
        </Link>
      </div>
      {/* Navigation Bar */}
      <div className="w-1/4 px-4 bg-gray-200 text-gray-800 font-bold text-lg mb-2 p-2">
        List of Jobs
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="float-right w-8 h-8 cursor-pointer"
          onClick={sidebarVisible ? hideSidebar : showSidebar}
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="flex flex-row">
        {sidebarVisible && (
          <div className="w-1/4 h-screen overflow-y-auto px-4">
            {jobTerms.map((job) => (
              <div
                key={job.term}
                className={`cursor-pointer p-2 ${
                  selectedJob.term === job.term ? 'bg-gray-300' : ''
                }`}
                onClick={() => handleJobClick(job)}
              >
                {job.term}
              </div>
            ))}
          </div>
        )}
        <div className="w-full p-4">
          <div className="bg-gray-100 p-4 mb-4">
            {selectedTerm && (
              <div className="mb-2">
                <h3 className="text-lg font-bold">{selectedTerm}</h3>
                <p>{selectedDefinition}</p>

                {selectedPros.length > 0 && (
                  <div className="bg-green-100 p-2 my-2">
                    <h3 className="text-md font-bold">Pros</h3>
                    <ul>
                      {selectedPros.map((pro) => (
                        <li key={pro}>{pro}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedCons.length > 0 && (
                  <div className="bg-red-100 p-2 my-2">
                    <h3 className="text-md font-bold">Cons</h3>
                    <ul>
                      {selectedCons.map((con) => (
                        <li key={con}>{con}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
          {jobTerms.map((job) => (
            <div key={job.term} id={job.term} className="mb-6">
              <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
                <h2 className="text-xl font-bold mt-2">{job.term}</h2>
                {job.sections.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-lg font-bold mt-2 cursor-pointer hover:text-blue-500">
                      <span
                        onClick={() =>
                          handleTermClick(
                            section.title,
                            section.definition,
                            [],
                            []
                          )
                        }
                      >
                        {section.title}
                      </span>
                    </h3>
                    <ul>
                      {section.items.map((item) => (
                        <li
                          key={item.term}
                          className="cursor-pointer hover:text-blue-500"
                        >
                          <span
                            onClick={() =>
                              handleTermClick(
                                item.term,
                                item.definition,
                                item.pros,
                                item.cons
                              )
                            }
                          >
                            {item.term}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Dictionary.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      <div className="grid h-screen grid-cols-1 lg:grid-cols-12">
        {
          <div className="hidden col-span-5 -mb-16 overflow-scroll lg:block">
            <InterviewPrepCourse />
          </div>
        }
        <div className="col-span-7 p-4 overflow-scroll">{page}</div>
      </div>
    </div>
  );
};
