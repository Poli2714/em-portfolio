import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import LatestBlogPost from './LatestBlogPost';
import { __blog_posts__ } from '@/__mocks__/__block-posts__';

vi.mock('@/components/shadcn', () => ({
  AspectRatio: () => <div>Mock blogpost image</div>,
}));

vi.mock('@/components/ui', () => ({
  BlogPostMetaInfo: () => <div>Mock meta info</div>,
  Photo: () => <div>Mock photo</div>,
}));

vi.mock('./components/LatestBlogPostHeader/LatestBlogPostHeader', () => ({
  default: () => <div>Mock blogpost header</div>,
}));

test('renders LatestBlogPost', () => {
  render(<LatestBlogPost blogPost={__blog_posts__[0]} />);

  expect(screen.getByTestId('latest-blog-post')).toBeInTheDocument();
});
