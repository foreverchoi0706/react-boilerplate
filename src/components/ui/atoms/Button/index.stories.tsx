import { ComponentStory, ComponentMeta } from '@storybook/react';
import Component from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'atoms/Button',
    component: Component,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Component>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => <Component {...args}>{args.text || "Button"}</Component>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true,
    full: true,
    text: "Button",
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    text: "Button"
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
    text: "Button"
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    text: "Button"
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true
};
