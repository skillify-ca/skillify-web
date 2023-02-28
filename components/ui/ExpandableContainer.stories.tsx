import { Meta, Story } from "@storybook/react";
import ExpandableContainer, {
  ExpandableContainerProps,
} from "./ExpandableContainer";

export default {
  title: "UI/Expandable Container",
  component: ExpandableContainer,
} as Meta;

const Template: Story<ExpandableContainerProps> = (args) => (
  <ExpandableContainer {...args}>
    <div>
      <ul>Item 1</ul>
      <ul>Item 2</ul>
      <ul>Item 3</ul>
      <ul>Item 4</ul>
      <ul>Item 5</ul>
      <ul>Item 6</ul>
    </div>
  </ExpandableContainer>
);

export const Primary = Template.bind({});
Primary.args = {
  open: false,
  title: "Click to Open",
};
