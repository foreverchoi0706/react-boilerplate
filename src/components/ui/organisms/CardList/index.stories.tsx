import { ComponentStory, ComponentMeta } from '@storybook/react';
import Component from './index';

export default {
    title: 'organisms/CardList',
    component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Default = Template.bind({});

Default.args = {
    items: new Array(20).fill("").map((_, index) => index)
}