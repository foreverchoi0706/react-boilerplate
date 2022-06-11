import { ComponentStory, ComponentMeta } from "@storybook/react";
import Component from "./index";

export default {
  title: "pages/Home",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = () => <Component />;

export const Default = Template.bind({});
