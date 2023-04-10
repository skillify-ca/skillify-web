import React from "react";
import { animated, useSpring } from "react-spring";

export const QuizTransition: React.FC<{
  triggerAnimation: boolean;
  children: React.ReactNode;
}> = ({ triggerAnimation, children }) => {
  const items = React.Children.toArray(children);
  const spring = useSpring({
    config: { mass: 2, tension: 400, friction: 160, duration: 100 },
    opacity: triggerAnimation ? 1 : 0,
    x: open ? 0 : 0,
    height: open ? "auto" : 0,
    from: { opacity: 0, y: 0, height: 0 },
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
