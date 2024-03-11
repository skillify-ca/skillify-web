import React from "react";
const MobileAppProject = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Mobile App Project</h2>
      <p className="text-gray-800">
        The goal of this project is to develop a mobile app for iOS or Android platform. You will showcase your mobile app development skills by creating a user-friendly and functional app.
      </p>
      <p className="text-gray-800 mt-2">
        Follow the objectives and requirements mentioned below to complete the project within 3-4 weeks.
      </p>
      <h3 className="text-xl font-bold mt-4">Project Objectives:</h3>
      <ul className="list-disc list-inside text-gray-800 pl-4">
        <li>Design an intuitive user interface and user experience (UI/UX) for the mobile app.</li>
        <li>Implement front-end functionality using a mobile app development framework (React Native, Flutter, etc.).</li>
        <li>Integrate with back-end services or APIs for data retrieval and manipulation.</li>
        <li>Handle user authentication and session management (if applicable).</li>
        <li>Utilize device features like camera, location services, or push notifications.</li>
        <li>Ensure the app's responsiveness and performance on various devices.</li>
        <li>Conduct testing and debugging to ensure the app is stable and free of major issues.</li>
        <li>Include proper error handling and implement security measures to protect user data.</li>
        <li>Prepare the app for deployment to the respective app stores (iOS App Store, Google Play Store).</li>
      </ul>
      <h3 className="text-xl font-bold mt-4">Requirements:</h3>
      <ul className="list-disc list-inside text-gray-800 pl-4">
        <li>Proficiency in mobile app development using React Native, Flutter, or similar frameworks.</li>
        <li>Knowledge of front-end technologies like JavaScript, CSS, and HTML.</li>
        <li>Familiarity with back-end integration and API consumption in mobile apps.</li>
        <li>Understanding of mobile app design principles and UI/UX best practices.</li>
        <li>Experience with mobile app testing and debugging on real devices and emulators.</li>
        <li>Ability to manage project dependencies and use version control (e.g., Git).</li>
        <li>Knowledge of app store guidelines and publishing process (optional but recommended).</li>
      </ul>

      <div className="mt-6">
        <h3 className="text-xl font-bold">Submission</h3>
        <p className="text-gray-800 mt-2">
          To submit your assignment, create a GitHub repository for your mobile app project and share the link with us.
        </p>
        <p className="text-gray-800 mt-2">
          Your repository should include the mobile app source code, any necessary documentation, and instructions on how to run the app on a simulator or physical device.
        </p>
      </div>
    </div>
  );
};

export default MobileAppProject;
