import { animated, useTrail } from "@react-spring/web";
import React from "react";

export const FadeAnimation: React.FC<{
  triggerAnimation: boolean;
  children: React.ReactNode;
}> = ({ triggerAnimation, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200, duration: 400 },
    opacity: triggerAnimation ? 1 : 0,
    x: triggerAnimation ? 0 : 20,
    height: triggerAnimation ? "auto" : 0,
    from: { opacity: 0, y: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <animated.div key={index} style={style}>
          <animated.div style={{ height }}>{items[index]}</animated.div>
        </animated.div>
      ))}
    </div>
  );
};

export default FadeAnimation;
