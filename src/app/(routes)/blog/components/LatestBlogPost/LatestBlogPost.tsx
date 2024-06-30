import { AspectRatio } from '@/components/shadcn';
import { BlogPostMetaInfo } from '@/components/ui';
import { LatestBlogPostHeader } from './components';

import { BlogPost } from '@/types/blog-post';

type LatestBlogPostProps = {
  blogPost: BlogPost;
};

function LatestBlogPost({ blogPost }: LatestBlogPostProps) {
  return (
    <div className='grid gap-12 lg:grid-cols-2' data-testid='latest-blog-post'>
      <AspectRatio ratio={5 / 4}>
        <div className='h-full w-full bg-primary'></div>
      </AspectRatio>
      <div className='flex flex-col gap-y-8 lg:justify-center'>
        <LatestBlogPostHeader
          category={blogPost.category}
          description={blogPost.description}
          slug={blogPost.slug}
          title={blogPost.title}
        />
        <BlogPostMetaInfo
          author={blogPost.author}
          date={blogPost.date}
          readTime={blogPost.read_time}
        />
      </div>
    </div>
  );
}

export default LatestBlogPost;
