import { AspectRatio } from '@/components/shadcn';
import { BlogPostMetaInfo, Photo } from '@/components/ui';
import { LatestBlogPostHeader } from './components';

import { TBlogPost } from '@/types/blog-post';

type LatestBlogPostProps = {
  blogPost: TBlogPost;
};

function LatestBlogPost({ blogPost }: LatestBlogPostProps) {
  return (
    <div className='grid gap-12 lg:grid-cols-2' data-testid='latest-blog-post'>
      <AspectRatio ratio={5 / 4}>
        <Photo
          altDescription={blogPost.images[0].alt_description}
          lightMode={blogPost.images[0].light_mode}
          darkMode={blogPost.images[0].dark_mode}
        />
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
