import { ComponentStory, ComponentMeta } from '@storybook/react';
import Component from './index';

export default {
    title: 'organisms/Header',
    component: Component,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Default = Template.bind({});