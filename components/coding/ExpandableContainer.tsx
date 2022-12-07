import React, { useState } from "react";

import { PlusCircleIcon } from "@heroicons/react/solid";
import { MinusCircleIcon } from "@heroicons/react/solid";

interface ExpandableContainerProps {
  open: boolean;
  title: string;
}

const ExpandableContainer: React.FC<ExpandableContainerProps> = ({
  open,
  children,
  title,
}) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleOpenExpandableContainer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div>
        <div>
          <div className="p-2 border-bottom flex float left">
            <button
              className="mr-2"
              type="button"
              onClick={handleOpenExpandableContainer}
            >
              {!isOpen ? (
                <PlusCircleIcon className="w-6 h-6 cursor-pointer hover:text-yellow-600" />
              ) : (
                <MinusCircleIcon className="w-6 h-6 cursor-pointer hover:text-yellow-600" />
              )}
            </button>
            <h6 className="">{title}</h6>
          </div>
        </div>

        <div className="border-bottom">
          <div>{isOpen && <div className="p-2">{children}</div>}</div>
        </div>
      </div>
    </>
  );
};

export default ExpandableContainer;
