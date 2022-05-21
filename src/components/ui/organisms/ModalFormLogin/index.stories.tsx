import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRHF } from 'components/WithRHF';
import Component from './index';

export default {
    title: 'organisms/FormLogin',
    component: Component,
    decorators: [withRHF(false)]
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component />;

export const Default = Template.bind({});