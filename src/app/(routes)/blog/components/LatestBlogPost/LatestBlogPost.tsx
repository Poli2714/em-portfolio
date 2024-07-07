import { AspectRatio } from '@/components/shadcn';
import { BlogPostMetaInfo, Photo } from '@/components/ui';

import { TBlogPost } from '@/types/blog-post';
import Link from 'next/link';

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
        <div className='space-y-4'>
          <p className='text-sm font-semibold'>{blogPost.category}</p>
          <h3 className='text-[clamp(1.5rem,4.2dvw,2rem)] font-bold leading-[clamp(2rem,5.25dvw,2.5rem)]'>
            <Link href={`/blog/${blogPost.slug}`}>{blogPost.title}</Link>
          </h3>
          <p className='text-base md:text-lg'>{blogPost.description}</p>
        </div>
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
