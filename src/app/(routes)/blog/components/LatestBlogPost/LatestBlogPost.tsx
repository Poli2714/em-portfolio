import Link from 'next/link';

import { BlogPostMetaInfo, PhotoCard } from '@/components/ui';

import { TBlogPost } from '@/types/blog-post';

type LatestBlogPostProps = {
  blogPost: TBlogPost;
};

function LatestBlogPost({ blogPost }: LatestBlogPostProps) {
  return (
    <div className='grid gap-12 lg:grid-cols-2' data-testid='latest-blog-post'>
      <Link
        className='transition-opacity hover:opacity-95 dark:hover:opacity-90'
        href={`/blog/${blogPost.slug}`}
      >
        <PhotoCard image={blogPost.images[0]} ratio={5 / 4} shade={false} />
      </Link>
      <div className='flex flex-col gap-y-8 lg:justify-center'>
        <div className='space-y-4'>
          <p className='text-sm font-semibold'>{blogPost.category}</p>
          <h3 className='text-[clamp(1.5rem,4.2dvw,2rem)] font-bold leading-[clamp(2rem,5.25dvw,2.5rem)] decoration-from-font transition-all hover:underline hover:underline-offset-4 dark:text-highlight'>
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
