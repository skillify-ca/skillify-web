import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "./Button";
import DragAndDropPuzzle, { DragAndDropPuzzleProps } from "./DragAndDropPuzzle";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

export default {
  title: "Example/DragAndDropPuzzle",
  component: DragAndDropPuzzle,
  argTypes: {},
} as Meta;

const Template: Story<DragAndDropPuzzleProps> = (args) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <DragAndDropPuzzle {...args} onSubmit={(it) => console.log(it)} />
    </DndProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  question: "Button",
};
