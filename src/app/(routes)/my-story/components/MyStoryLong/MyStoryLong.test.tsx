import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import MyStoryLong from './MyStoryLong';

test('renders MyStoryLong with three paragraphs', () => {
  render(<MyStoryLong myStory={['Test 1', 'Test 2', 'Test 3']} />);
  const paragraphs = screen.getAllByRole('paragraph');

  expect(
    screen.getByRole('heading', { level: 1, name: /^my story$/i })
  ).toBeInTheDocument();
  expect(paragraphs).toHaveLength(3);
  paragraphs.forEach((paragraph, i) => {
    expect(paragraph).toHaveTextContent(`Test ${i + 1}`);
  });
});
