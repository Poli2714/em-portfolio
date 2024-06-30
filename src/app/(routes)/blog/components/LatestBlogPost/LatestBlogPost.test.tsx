import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import LatestBlogPost from './LatestBlogPost';
import { blog_posts } from '@/lib/blog-posts';

vi.mock('@/components/shadcn', () => ({
  AspectRatio: () => <div>Mock blogpost image</div>,
}));

vi.mock('@/components/ui', () => ({
  BlogPostMetaInfo: () => <div>Mock meta info</div>,
}));

vi.mock('./components', () => ({
  LatestBlogPostHeader: () => <div>Mock blogpost header</div>,
}));

test('renders LatestBlogPost', () => {
  render(<LatestBlogPost blogPost={blog_posts[0]} />);

  expect(screen.getByTestId('latest-blog-post')).toBeInTheDocument();
});
