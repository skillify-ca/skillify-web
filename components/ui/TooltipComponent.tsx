import React from "react";
import {
  Provider,
  Root,
  Trigger,
  Portal,
  Content,
  Arrow,
} from "@radix-ui/react-tooltip";

export interface TooltipComponentProps {
  message: string;
}

const TooltipComponent: React.FC<TooltipComponentProps> = ({
  children,
  message,
}) => {
  return (
    <Provider>
      <Root>
        <Trigger asChild>{children}</Trigger>
        <Portal>
          <Content
            className={`data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]`}
            sideOffset={0}
            align="center"
            style={{ whiteSpace: "normal", width: "200px", lineHeight: "1.5" }}
          >
            {message}
            <Arrow className="fill-white" />
          </Content>
        </Portal>
      </Root>
    </Provider>
  );
};

export default TooltipComponent;