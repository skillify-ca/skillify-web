import React from "react";
import { animated, useSpring } from "react-spring";

export const QuizTransition: React.FC<{
  setAnimationComplete: (animationComplete: boolean) => void;
  animationComplete: boolean;
  children: React.ReactNode;
}> = ({ setAnimationComplete, animationComplete, children }) => {
  const items = React.Children.toArray(children);
  const spring = useSpring({
    config: {
      mass: 1,
      tension: 120,
      friction: 14,
      duration: 200,
      ease: "easeInOut",
    },
    opacity: animationComplete ? 0.75 : 0,
    onRest: () => {
      setAnimationComplete(true);
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
