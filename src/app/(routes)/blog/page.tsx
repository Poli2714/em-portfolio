import { ChildPageHeader } from '@/components/ui';
import { LatestBlogPost } from './components';

import { blog_posts } from '@/lib/blog-posts';

export default function BlogPage() {
  return (
    <>
      <ChildPageHeader
        className='space-y-2'
        description='Follow along as I share my adventures in learning web development. Discover my thoughts, projects and helpful resources.'
        mainTitle='Blog'
        secondaryTitle='My Learning Journey'
      />
      <LatestBlogPost blogPost={blog_posts[0]} />
    </>
  );
}
