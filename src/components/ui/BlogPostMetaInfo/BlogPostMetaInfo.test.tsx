import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import BlogPostMetaInfo from './BlogPostMetaInfo';

test('renders BlogPostMetaInfo', () => {
  render(<BlogPostMetaInfo author='Elgun' date='June 30, 2024' readTime={5} />);

  expect(
    screen.getByRole('heading', { level: 4, name: 'Elgun' })
  ).toBeInTheDocument();
  expect(screen.getByRole('paragraph')).toHaveTextContent(
    /^June 30, 2024.*5 min read$/
  );
});
