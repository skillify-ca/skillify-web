import React from "react";
import {
  Provider,
  Root,
  Trigger,
  Portal,
  Content,
  Arrow,
} from "@radix-ui/react-tooltip";
import { getTooltipClass } from "../../../../pages/api/radixClasses/getTooltipClass";

interface TooltipComponentProps {
  message: string;
  active: boolean;
}

const TooltipComponent: React.FC<TooltipComponentProps> = ({
  children,
  message,
  active,
}) => {
  return active ? (
    <Provider>
      <Root>
        <Trigger asChild>{children}</Trigger>
        <Portal>
          <Content
            className={`${getTooltipClass()} `}
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
