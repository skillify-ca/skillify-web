import { Button } from "../../ui/Button";
import {
  SurpriseCard,
  SurpriseCardType,
} from "../../../pages/api/finance/surprise";

export interface SurpriseComponentProps {
  close: () => void;
  surpriseData: SurpriseCardType;
}

export const SurpriseComponent = ({
  close,
  surpriseData,
}: SurpriseComponentProps) => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 ">
      <div className="col-start-1 row-start-1 col-span-2 pl-4 pt-4">
        <p className="text-4xl pb-5">Surprise!</p>
        {surpriseData && surpriseData.surpriseType} This amount will be added to
        your current total money remaining.
      </div>
      <div className="col-start-3 row-start-1 pl-24 pt-5">
        <img src="/images/BirthdayCake.png" width="80%" height="auto" />
      </div>
      <div className="col-start-1 row-start-2 col-span-2">
        <ul className="pl-9 list-disc">
          <li className="pb-2 text-red-500">
            If you have a negative balance after the surprise, please change
            some values from before to balance your budget.
          </li>
          <li className="text-green-500">
            If you have a positive balance after the surprise, feel free to
            select Submit again because you successfully balanced your budget OR
            adjust some values from before to increase your total money
            remaining. Remember: the more money you have, the better!
          </li>
        </ul>
      </div>
      <div className="col-start-1 row-start-3 pl-4 pb-4 pt-4">
        <Button
          label="Close"
          onClick={close}
          backgroundColor="green"
          textColor="white"
        ></Button>
      </div>
    </div>
  );
};
