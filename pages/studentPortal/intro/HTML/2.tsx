import { useDispatch, useSelector } from "react-redux";
import LessonComponent, {
  LessonComponentData,
} from "../../../../components/coding/studentPortal/LessonComponent";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";
import Quiz from "../../../../components/coding/studentPortal/quiz/Quiz";
import { Button } from "../../../../components/ui/Button";
import { continueRequested, quizSelector } from "../../../../redux/quizSlice";

const HTML2 = () => {
  const dispatch = useDispatch();
  const { showSessionEnd } = useSelector(quizSelector);
  return (
    <div className="flex flex-col">
      <div className="p-4 mb-4">
        <ProgressBar completed={100} />
      </div>
      <div className="flex flex-col">
        <Quiz />
        <div className="fixed bottom-0 w-full p-8 h-36 ">
          <div className="flex justify-end w-full">
            {showSessionEnd ? (
              <a href="/studentPortal/intro/HTML/1">
                <Button label="Continue" disabled={false} />
              </a>
            ) : (
              <Button
                label="Continue"
                disabled={false}
                onClick={(e) => dispatch(continueRequested(null))}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HTML2;
