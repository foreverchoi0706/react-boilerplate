import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRHF } from 'decorators/WithRHF';
import Component from './index';

export default {
    title: 'molecules/FormInputCheckbox',
    component: Component,
    decorators: [withRHF(false)]
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />


export const Default = Template.bind({});
Default.args = {
    label: "Test",
    name: "Test",
    required: true,
}