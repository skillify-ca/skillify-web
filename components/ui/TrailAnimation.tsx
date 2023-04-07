import { animated, useTrail } from "@react-spring/web";
import React from "react";

export const TrailAnimation: React.FC<{
  open: boolean;
  children: React.ReactNode;
}> = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 200, friction: 200, duration: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 0,
    height: open ? "auto" : 0,
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

export default TrailAnimation;
