import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { MinusCircleIcon } from "@heroicons/react/solid";
import useMeasure from "react-use-measure";
import { Trail } from "./Trail";
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
    config: { tension: 100 },
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

export function useHeight({ on = true /* no value means on */ } = {} as any) {
  const ref = useRef<any>();
  const [height, set] = useState(0);
  const heightRef = useRef(height);
  const [ro] = useState(
    () =>
      new ResizeObserver((packet) => {
        if (ref.current && heightRef.current !== ref.current.offsetHeight) {
          heightRef.current = ref.current.offsetHeight;
          set(ref.current.offsetHeight);
        }
      })
  );
  useLayoutEffect(() => {
    if (on && ref.current) {
      set(ref.current.offsetHeight);
      ro.observe(ref.current, {});
    }
    return () => ro.disconnect();
  }, [on, ref.current]);
  return [ref, height as any];
}
