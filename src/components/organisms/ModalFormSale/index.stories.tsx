import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withRHF } from "decorators/WithRHF";
import Component from "./index";

export default {
  title: "organisms/ModalFormLogin",
  component: Component,
  decorators: [withRHF(false)],
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Default = Template.bind({});
