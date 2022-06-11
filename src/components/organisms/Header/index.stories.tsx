import { ComponentStory, ComponentMeta } from "@storybook/react";
import Component from "./index";

export default {
  title: "organisms/Header",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Default = Template.bind({});
