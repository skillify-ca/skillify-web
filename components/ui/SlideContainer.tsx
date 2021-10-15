import React, { ReactNode } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

export interface SlideContainerProps {
  children: ReactNode;
  key: React.Key;
}

const SlideContainer = ({ children, key }: SlideContainerProps) => {
  return (
    <div>
      <style jsx>{`
        .fade-enter {
          opacity: 0;
          transform: translateX(100%);
        }
        .fade-exit {
          opacity: 1;
          transform: translateX(0%);
        }
        .fade-enter-active {
          opacity: 1;
          transform: translateX(0%);
        }
        .fade-exit-active {
          opacity: 0;
          transform: translateX(-100%);
        }
        .fade-enter-active,
        .fade-exit-active {
          transition: opacity 500ms, transform 500ms;
        }
      `}</style>
      <SwitchTransition mode={"out-in"}>
        <CSSTransition
          key={key}
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false);
          }}
          classNames="fade"
        >
          {children}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};
export default SlideContainer;
