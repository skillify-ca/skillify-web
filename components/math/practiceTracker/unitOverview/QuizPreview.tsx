import Link from "next/link";
import { useSelector } from "react-redux";
import { Canvas } from "react-three-fiber";
import { practiceTrackerSelector } from "../../../../redux/studentProfileSlice";
import { Button } from "../../../ui/Button";

const QuizPreview = ({ isQuizLocked, unitTitle, loading, data, courseId }) => {
  const getColourForAccuracy = (accuracy: any) => {
    if (accuracy >= 75) {
      return "text-green-500";
    } else if (accuracy >= 50) {
      return "text-yellow-500";
    } else {
      return "text-red-500";
    }
  };

  const practiceTrackerState = useSelector(practiceTrackerSelector);

  const getMaxAccuracy = (userQuizzes) => {
    let accuracyList = [];
    let maxAccuracy;

    accuracyList = userQuizzes.map((it) => it.accuracy);
    if (accuracyList.length == 0) {
      maxAccuracy = "Not Attempted";
    } else {
      maxAccuracy = Math.max(...accuracyList);
    }

    return maxAccuracy;
  };

  return (
    <div>
      <div className="grid grid-cols-6 p-8 space-y-8 bg-white shadow-lg sm:grid-cols-12 rounded-xl">
        <div className="flex flex-col col-span-6 space-y-4">
          {isQuizLocked && (
            <p className="text-4xl font-bold text-blue-900">QUIZ LOCKED</p>
          )}
          {isQuizLocked && (
            <p className="text">
              To unlock the quiz you must be confident with all of this unit's
              skills. Practice questions from above and rate each skill
              confidence with <span className="text-3xl">😄</span>
            </p>
          )}
          {!isQuizLocked && (
            <p className="text-4xl font-bold text-blue-900"> QUIZ TIME! </p>
          )}
          {!isQuizLocked && (
            <p className="text">
              Take a quiz to test out your {unitTitle} skills. Get at least a
              Level 4 to unlock a badge. You can take this quiz as many times as
              you wish to perfect your skills. Good luck!
            </p>
          )}
          {!isQuizLocked && (
            <div className="flex space-y-8">
              <div className="text-xl font-bold text-white border-blue-900 rounded-xl">
                <Link
                  href={`/course/${courseId}/quiz/${unitTitle}?level=${practiceTrackerState.mathLevel}`}
                >
                  <Button
                    backgroundColor="blue"
                    textColor="white"
                    label="Quiz Yourself"
                  />
                </Link>
              </div>
            </div>
          )}
          {!isQuizLocked && (
            <div className="flex flex-row items-center text-lg">
              <p className="text-xl font-bold text-blue-900"> Best Attempt: </p>
              <p
                className={`${getColourForAccuracy(
                  data && !loading && getMaxAccuracy(data.user_quizzes)
                )} p-4 text-2xl font-extrabold`}
              >
                {!loading && data && getMaxAccuracy(data.user_quizzes)}
                {data &&
                !loading &&
                getMaxAccuracy(data.user_quizzes) != "Not Attempted"
                  ? "%"
                  : ""}
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center justify-center col-span-6 m-4 space-y-8 text-white bg-gradient-to-r from-gray-200 via-gray-400 to-gray-500 rounded-2xl h-72">
          {isQuizLocked && <img src="/images/lock.png" className="w-28" />}
          {!isQuizLocked &&
            !loading &&
            data &&
            data.user_badges.map((badge) => {
              return badge.locked ? (
                <div className="flex flex-col items-center justify-center h-full p-4">
                  <img src="/images/lock.png" className="w-3/4 h-full" />
                  <p className="flex items-center -mt-4 text-md">
                    {"   "}
                    Badge: <b> &nbsp;Locked</b>{" "}
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-gray-500 heropattern-overlappingdiamonds-gray-700 rounded-xl">
                  {/* TODO fix importing react three fiber into this project */}
                  <Canvas camera={{ position: [10, 2, -10], fov: 60 }}>
                    <img
                      src={
                        badge.badge.image
                          ? badge.badge.image
                          : "/images/lock.png"
                      }
                    />
                    {/* <Preload all /> */}
                    {/* <group> 
                    <Box
                      url={
                        badge.badge.image
                          ? badge.badge.image
                          : "/images/lock.png"
                      }
                    /> 
                     <OrbitControls
                      hasEventListener={false}
                      removeEventListener={() => {}}
                      addEventListener={() => {}}
                      dispatchEvent={() => {}}
                    />
                    <Stars /> 
                   </group> */}
                  </Canvas>
                  {/* <img
                    src={badge.badge.image}
                    className="object-scale-down w-3/4 h-full mb-8"
                  /> */}
                  <p className="flex items-center p-4 bg-gray-800 rounded-full text-md">
                    {"   "}
                    Badge: <b> &nbsp;Unlocked</b>{" "}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default QuizPreview;
