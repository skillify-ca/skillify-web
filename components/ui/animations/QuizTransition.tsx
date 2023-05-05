import React from "react";
import { animated, useSpring } from "react-spring";

export const QuizTransition: React.FC<{
  setTriggerAnimation: (triggerAnimation: boolean) => void;
  triggerAnimation: boolean;
  children: React.ReactNode;
}> = ({ setTriggerAnimation, triggerAnimation, children }) => {
  const items = React.Children.toArray(children);
  const spring = useSpring({
    config: {
      mass: 1,
      tension: 120,
      friction: 14,
      duration: 200,
      ease: "easeInOut",
    },
    opacity: triggerAnimation ? 1 : 0,
    onRest: () => {
      setTriggerAnimation(true);
    },
  });
  return (
    <div>
      {items.map((item, index) => (
        <animated.div key={index} style={spring}>
          <animated.div>{item}</animated.div>
        </animated.div>
      ))}
    </div>
  );
};

export default QuizTransition;
