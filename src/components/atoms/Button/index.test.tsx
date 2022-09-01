import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './index.stories';

const { Primary } = composeStories(stories);

test('text props에 들어가는 값이 render될까요?', () => {
    render(<Primary text="Button" />);
    expect(screen.getByText(/Button/i)).not.toBeNull()
});