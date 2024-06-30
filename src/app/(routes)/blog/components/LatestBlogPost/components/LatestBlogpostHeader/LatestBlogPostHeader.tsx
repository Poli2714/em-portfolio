import Link from 'next/link';

type LatestBlogPostHeaderProps = {
  category: string;
  description: string;
  slug: string;
  title: string;
};

function LatestBlogPostHeader({
  category,
  description,
  slug,
  title,
}: LatestBlogPostHeaderProps) {
  return (
    <div className='space-y-4'>
      <p className='text-sm font-semibold'>{category}</p>
      <h3 className='text-[clamp(1.5rem,4.2dvw,2rem)] font-bold leading-[clamp(2rem,5.25dvw,2.5rem)]'>
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h3>
      <p className='text-base md:text-lg'>{description}</p>
    </div>
  );
}

export default LatestBlogPostHeader;
