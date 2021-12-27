import Link from "next/link";
import { useSelector } from "react-redux";
import { studentProfileSelector } from "../../../redux/studentProfileSlice";
import { Button } from "../../ui/Button";

const QuizPreview = ({ isQuizLocked, unitTitle, loading, data }) => {
    const getColourForAccuracy = (accuracy: any) => {
        if (accuracy >= 75) {
            return "text-green-500";
        } else if (accuracy >= 50) {
            return "text-yellow-500";
        } else {
            return "text-red-500";
        }
    };

    const studentGrade = useSelector(studentProfileSelector);

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



    return <div>
        <div className="grid grid-cols-12 bg-white shadow-lg rounded-xl p-8 space-y-8">
            <div className="col-span-12 flex flex-col space-y-4">
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
                        Take a quiz to test out your {unitTitle} skills. Get at least a Level 4
                        to unlock a badge. You can take this quiz as many times as you
                        wish to perfect your skills. Good luck!
                    </p>
                )}
                {!isQuizLocked && (
                    <div className="flex space-y-8">
                        <div className="text-white text-xl border-blue-900 font-bold rounded-xl">
                            <Link
                                href={`/quiz/${unitTitle}?level=${studentGrade.mathLevel}`}
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
                    <div className="flex items-center text-lg flex-row">
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
            <div className="col-span-12 m-4 flex flex-col items-center justify-center space-y-8 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-500 rounded-2xl h-72">
                {isQuizLocked && <img src="/images/lock.png" className="w-28" />}
                {!isQuizLocked &&
                    !loading &&
                    data &&
                    data.user_badges.map((badge) => {
                        return badge.locked ? (
                            <div className="flex h-full flex-col items-center p-4 justify-center">

                                <img src="/images/lock.png" className="w-3/4 h-full" />
                                <p className="text-md -mt-4 flex items-center">
                                    {"   "}
                                    Badge: <b> &nbsp;Locked</b>{" "}
                                </p>
                            </div>
                        ) : (
                            <div className="flex h-full flex-col items-center p-4 justify-center bg-gradient-to-b to-blue-400 from-blue-200">
                                {/* TODO fix importing react three fiber into this project */}
                                {/* <Canvas camera={{ position: [10, 2, -10], fov: 60 }}> */}
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
                                {/* </Canvas> */}
                                <img src={badge.badge.image} className="w-3/4 h-full object-scale-down mb-8" />
                                <p className="text-md -mt-4 flex items-center">
                                    {"   "}
                                    Badge: <b> &nbsp;Unlocked</b>{" "}
                                </p>
                            </div>
                        );
                    })}
            </div>
        </div>
    </div>
}

export default QuizPreview;