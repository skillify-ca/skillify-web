import {
  Arrow,
  Content,
  Portal,
  Provider,
  Root,
  Trigger,
} from "@radix-ui/react-tooltip";
import React from "react";

export interface TooltipComponentProps {
  message: string;
  icon?: string;
}

const TooltipComponent: React.FC<TooltipComponentProps> = ({
  children,
  message,
  icon,
}) => {
  return (
    <Provider>
      <Root>
        <Trigger asChild>{children}</Trigger>
        <Portal>
          <Content
            className={`data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade select-none rounded-lg bg-white p-2 text-base leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]`}
            sideOffset={0}
            align="center"
            style={{ whiteSpace: "normal", width: "200px", lineHeight: "1.5" }}
          >
            <div className="flex flex-row items-center">
              {message}
              {icon && (
                <img
                  src={icon}
                  className="w-10 h-10 info-icon animate-iconPulse hover:bg-backgroundhover rounded-full p-2"
                />
              )}
            </div>
            <Arrow className="fill-white w-4 h-2" />
          </Content>
        </Portal>
      </Root>
    </Provider>
  );
};

export default TooltipComponent;
