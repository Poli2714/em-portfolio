import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import BlogPostHeader from './BlogPostHeader';
import { __blog_posts__ } from '@/__mocks__/__block-posts__';

vi.mock('./components', () => ({
  AllPosts: () => <div>Mock all posts</div>,
}));

vi.mock('@/components/shadcn', () => ({
  AspectRatio: () => <div>Mock aspect ratio</div>,
}));

vi.mock('@/components/ui', () => ({
  BlogPostMetaInfo: () => <div>Mock meta info</div>,
  Photo: () => <div>Mock photo</div>,
  SocialMediaLinks: () => <div>Mock sm links</div>,
}));

test('renders BlogpostHeader', () => {
  render(<BlogPostHeader blogPost={__blog_posts__[0]} />);

  expect(screen.getByTestId('blog-post-header')).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
});
