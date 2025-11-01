import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import useMeasure from "react-use-measure";

export interface ExpandableContainerProps {
  open: boolean;
  title: string;
  children: React.ReactNode;
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
  const [ref, bounds] = useMeasure();

  const mapSpring = useSpring({
    from: { opacity: 0, height: 0 },
    to: {
      opacity: isOpen ? 1 : 0,
      height: isOpen ? bounds.height : 0,
    },
    config: { mass: 5, tension: 2000, friction: 200, duration: 200 },
  });

  const mapContentSpring = useSpring({
    from: { opacity: 0 },
    to: {
      opacity: isOpen ? 1 : 0,
    },
    delay: isOpen ? 200 : 0,
  });

  return (
    <>
      <div
        className={`border-2 border-gray-900 rounded-lg w-full ${
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
            <h6 className="pb-2 mt-3 text-lg md:text-2xl">{title}</h6>
          </div>
        </div>

        <div className="border-bottom">
          <animated.div style={{ ...mapSpring }} className="max-height-full">
            {isOpen && (
              <animated.div style={{ ...mapContentSpring }}>
                <div ref={ref} className="p-0 sm:p-2">
                  {children}
                </div>
              </animated.div>
            )}
          </animated.div>
        </div>
      </div>
    </>
  );
};

export default ExpandableContainer;
