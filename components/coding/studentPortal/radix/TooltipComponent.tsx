import React from "react";
import {
  Provider,
  Root,
  Trigger,
  Portal,
  Content,
  Arrow,
} from "@radix-ui/react-tooltip";

interface TooltipComponentProps {
  message: string;
  active: boolean;
}

const TooltipComponent: React.FC<TooltipComponentProps> = ({
  children,
  message,
  active,
}) => {
  let tooltipClass =
    "text-red-500 select-none rounded-[4px] bg-white px-[10px] py-[10px] text-[15px] leading-none shadow-md ring-1 ring-gray-300 will-change-[transform,opacity]";
  return active ? (
    <Provider>
      <Root>
        <Trigger asChild>{children}</Trigger>
        <Portal>
          <Content
            className={`${tooltipClass} `}
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
  ) : null;
};

export default TooltipComponent;
