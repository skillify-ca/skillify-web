import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { MinusCircleIcon } from "@heroicons/react/solid";
import { useHeight } from "../../pages/api/useHeight";

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
  const [heightRef, height] = useHeight();

  const mapSpring = useSpring({
    from: { opacity: 0, height: 0 },
    to: {
      opacity: isOpen ? 1 : 0,
      height: isOpen ? height : 0,
    },
    config: { mass: 5, tension: 2000, friction: 200, duration: 600 },
  });

  return (
    <>
      <div
        className={`border-4 border-gray-900 rounded-lg max-h-full ${
          isOpen ? "shadow-lg shadow-gray-900" : ""
        } `}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="flex flex-row items-center p-4 space-x-2">
          {!isOpen ? (
            <PlusCircleIcon className="w-6 h-6 cursor-pointer hover:text-yellow-600" />
          ) : (
            <MinusCircleIcon className="w-6 h-6 cursor-pointer hover:text-yellow-600" />
          )}

          <h6 className="text-2xl font-bold pb-2 md:text-3xl mt-3">{title}</h6>
        </div>
        <animated.div
          style={{ ...mapSpring }}
          className="border-bottom max-height-full"
        >
          {isOpen && (
            <div ref={heightRef} className="p-0 sm:p-2">
              {children}
            </div>
          )}
        </animated.div>
      </div>
    </>
  );
};

export default ExpandableContainer;
