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
    <div className="grid grid-cols-2  border-4 w-5/6 rounded-xl shadow-xl	">
      <div className="text-center text-5xl py-4 row-span-1 pl-2">
        {mainHeader}
      </div>
      <div>
        <img src={imgHeader} className="grid row-end-1 place-items-end pl-32" />
      </div>
      <div className="grid row-start-2 text-center  text-xl pb-4 pl-4">
        {subHeader}
      </div>
    </div>
  );
};
