import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { MinusCircleIcon } from "@heroicons/react/solid";
import { useHeight } from "../../pages/api/profile/useHeight";

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
  const [heightRef, height] = useHeight({ on: isOpen });
  const handleOpenExpandableContainer = () => {
    setIsOpen((prev) => !prev);
  };

  const mapSpring = useSpring({
    from: { opacity: 0, height: 0 },
    to: {
      opacity: isOpen ? 1 : 0,
      height: isOpen ? height : 0,
    },
    config: { mass: 5, tension: 2000, friction: 200, duration: 200 },
  });
  return (
    <>
      <div
        className={`border-2 border-gray-900 rounded-lg ${
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
            <h6 className="text-lg pb-2 md:text-2xl mt-3">{title}</h6>
          </div>
        </div>

        <div className="border-bottom">
          <animated.div style={{ ...mapSpring }} className="max-height-full">
            {isOpen && (
              <div ref={heightRef} className="p-0 sm:p-2">
                {children}
              </div>
            )}
          </animated.div>
        </div>
      </div>
    </>
  );
};

export default ExpandableContainer;
