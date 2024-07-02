import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import AllPosts from './AllPosts';

test('renders AllPosts', () => {
  render(<AllPosts />);
  const link = screen.getByRole('link');
  const paragraph = screen.getByRole('paragraph');

  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', '/blog');
  expect(link).toHaveTextContent(/^all posts$/i);
  expect(screen.getByTestId('chevron-left-icon')).toBeInTheDocument();
  expect(paragraph).toBeInTheDocument();
  expect(paragraph).toHaveTextContent(/^all posts$/i);
});
