type SkillifyNavbarProps = {
  hidden: boolean;
  onBackClick: () => void;
};
const SkillifyNavbar = ({ hidden, onBackClick }: SkillifyNavbarProps) => {
  const className = hidden ? "w-16 p-4 opacity-0" : "w-16 p-4";
  return (
    <div className="flex justify-between">
      <div className="flex justify-center">
        <img
          src="/images/backarrow.svg"
          onClick={onBackClick}
          className={className}
        />
      </div>
      <div className="flex justify-center mr-4">
        <img src="/images/logo.svg" className="w-40 mr-8" />
      </div>
      <div></div>
    </div>
  );
};

export default SkillifyNavbar;
