import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRHF } from 'components/WithRHF';
import Component from './index';

export default {
    title: 'molecules/FormInput',
    component: Component,
    decorators: [withRHF(false)]
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
    return <div>
        <Component {...args} />
    </div>

};

export const Default = Template.bind({});

