import React, { useState } from "react";
import { useSpring, animated, useTransition } from "react-spring";
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

  const spring = useSpring({
    opacity: isOpen ? 1 : 0,
    config: { duration: 600 },
  });

  const springHeight = useSpring({
    height: isOpen ? "auto" : 0,
  });

  return (
    <>
      <div
        className={`border-4 border-gray-900 rounded-lg ${
          isOpen ? "shadow-lg shadow-gray-900" : ""
        } `}
      >
        <div>
          <div className="flex flex-row items-center p-4 space-x-2">
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
            <h6 className="text-2xl font-bold pb-2 md:text-3xl mt-3">
              {title}
            </h6>
          </div>
        </div>
        <animated.div style={springHeight} className="border-bottom">
          <animated.div style={spring}>
            <div className="p-0 sm:p-2">{children}</div>
          </animated.div>
        </animated.div>
      </div>
    </>
  );
};

export default ExpandableContainer;
