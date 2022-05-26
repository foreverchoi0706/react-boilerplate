import { ComponentStory, ComponentMeta } from '@storybook/react';
import useInput from 'hooks/useInput';
import Component from './index';

export default {
    title: 'atoms/Input',
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
    const [state, handleChange] = useInput("");
    return <Component {...args} value={state} onChange={handleChange} />
};

export const Text = Template.bind({});

Text.args = {
    type: "text"
}

export const Checkbox = Template.bind({});

Checkbox.args = {
    type: "checkbox"
}

export const Radio = Template.bind({});

Radio.args = {
    type: "radio"
}
