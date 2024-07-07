import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import LatestBlogPostHeader from './LatestBlogPostHeader';

test('renders LatestBlogPostHeader', () => {
  render(
    <LatestBlogPostHeader
      category='Webdev'
      description='Some description'
      slug='some-slug'
      title='Some title'
    />
  );
  const paragraphs = screen.getAllByRole('paragraph');

  expect(paragraphs).toHaveLength(2);
  expect(paragraphs[0]).toHaveTextContent('Webdev');
  expect(paragraphs[1]).toHaveTextContent('Some description');

  expect(
    screen.getByRole('heading', { level: 3, name: 'Some title' })
  ).toBeInTheDocument();

  expect(screen.getByRole('link')).toHaveAttribute('href', '/blog/some-slug');
});
