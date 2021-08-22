export interface SurpriseComponentProps {}

export const SurpriseComponent = ({}: SurpriseComponentProps) => {
  return (
    <div className=" border-black border-4 w-5/12">
      <div className="text-center text-4xl">Surprise!</div>
      <div className="flex flex-nowrap justify-center pl-4">
        Take a wild card! Add this value to or deduct this value from your Total
        Money Remaing in section 7. How much money do you have left over?
        <img
          src="/images/BirthdayCake.png"
          className="flex flex-nowrap w-2/12 h-1/12 pb-1 "
        />
      </div>
    </div>
  );
};
