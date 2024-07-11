import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import LatestBlogPost from './LatestBlogPost';
import { __blog_posts__ } from '@/__mocks__/__block-posts__';

vi.mock('@/components/ui', () => ({
  BlogPostMetaInfo: () => <div>Mock meta info</div>,
  PhotoCard: () => <div>Mock photo card</div>,
}));

test('renders LatestBlogPost', () => {
  render(<LatestBlogPost blogPost={__blog_posts__[0]} />);
  const paragraphs = screen.getAllByRole('paragraph');
  const links = screen.getAllByRole('link');

  expect(screen.getByTestId('latest-blog-post')).toBeInTheDocument();

  expect(links).toHaveLength(2);
  links.forEach((link) => {
    expect(link).toHaveAttribute('href', '/blog/test-slug1');
  });

  expect(paragraphs).toHaveLength(2);
  expect(paragraphs[0]).toHaveTextContent(/^test category1$/i);
  expect(paragraphs[1]).toHaveTextContent(/^test description1$/i);

  expect(
    screen.getByRole('heading', { level: 3, name: /^test title1$/i })
  ).toBeInTheDocument();
});
