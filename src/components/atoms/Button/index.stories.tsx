import { ComponentStory, ComponentMeta } from "@storybook/react";
import Component from "./index";

export default {
  title: "atoms/Button",
  component: Component,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args}>{args.text || "Button"}</Component>
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  full: false,
  text: "Button",
};

export const Lg = Template.bind({});
Lg.args = {
  size: "lg",
  text: "Button",
};

export const Md = Template.bind({});
Md.args = {
  size: "md",
  text: "Button",
};

export const Sm = Template.bind({});
Sm.args = {
  size: "sm",
  text: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
