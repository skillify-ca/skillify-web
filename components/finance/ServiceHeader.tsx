export interface ServiceHeaderProps {
  mainHeader: string;
  imgHeader: string;
  subHeader: string;
}

export const ServiceHeader = ({
  mainHeader,
  imgHeader,
  subHeader,
}: ServiceHeaderProps) => {
  return (
    <div className="grid grid-cols-2  ">
      <div className="text-left text-4xl row-span-1 mb-10">
        <div className={"mb-5"}>{mainHeader}</div>
        <div>
          <div className="grid row-start-2  text-base">{subHeader}</div>
        </div>
      </div>
      <div className={"flex justify-center items-center mb-10"}>
        <img
          src={imgHeader}
          className="grid row-end-1 place-items-end"
          width="60%"
          height="auto"
        />
      </div>
    </div>
  );
};
