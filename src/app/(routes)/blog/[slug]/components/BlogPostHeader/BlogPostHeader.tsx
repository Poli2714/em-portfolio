import { AllPosts } from './components';
import { BlogPostMetaInfo, PhotoCard, SocialMediaLinks } from '@/components/ui';

import { TBlogPost } from '@/types/blog-post';

type BlogPostHeaderProps = {
  blogPost: TBlogPost;
};

function BlogPostHeader({ blogPost }: BlogPostHeaderProps) {
  return (
    <>
      <div
        className='mx-auto max-w-[80ch] space-y-[clamp(2rem,5dvw,3rem)]'
        data-testid='blog-post-header'
      >
        <div className='space-y-6'>
          <AllPosts />
          <h1 className='text-[clamp(2rem,5dvw,3rem)] font-bold dark:text-highlight'>
            {blogPost.title}
          </h1>
        </div>
        <div className='flex flex-col gap-y-4 md:flex-row md:items-center md:justify-between'>
          <BlogPostMetaInfo
            author={blogPost.author}
            date={blogPost.date}
            readTime={blogPost.read_time}
          />
          <SocialMediaLinks />
        </div>
      </div>
      <PhotoCard image={blogPost.images[0]} shade={false} />
    </>
  );
}

export default BlogPostHeader;
