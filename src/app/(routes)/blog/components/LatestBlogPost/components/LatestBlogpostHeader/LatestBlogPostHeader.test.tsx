import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import LatestBlogPostHeader from './LatestBlogpostHeader';

test('renders LatestBlogPostHeader', () => {
  render(
    <LatestBlogPostHeader
      category='Webdev'
      description='Some description'
      slug='some-slug'
      title='Some title'
    />
  );

  expect(screen.getAllByRole('paragraph')).toHaveLength(2);
  expect(
    screen.getByRole('heading', { level: 3, name: 'Some title' })
  ).toBeInTheDocument();
});
