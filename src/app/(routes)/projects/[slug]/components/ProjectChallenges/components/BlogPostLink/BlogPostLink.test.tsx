import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import BlogPostLink from './BlogPostLink';

test('renders BlogPostLink', () => {
  render(<BlogPostLink blogPostLink='/blog/blog-post1' />);
  const paragraph = screen.getByRole('paragraph');
  const link = screen.getByRole('link');

  expect(paragraph).toBeInTheDocument();
  expect(paragraph).toHaveTextContent(/read my detailed.*here.$/i);

  expect(link).toBeInTheDocument();
  expect(link).toHaveTextContent(/^here.$/i);
  expect(link).toHaveAttribute('href', '/blog/blog-post1');
});
