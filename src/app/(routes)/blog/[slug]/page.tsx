import { notFound } from 'next/navigation';

import { BlogPostHeader, BlogPostSection } from './components';

import { blog_posts } from '@/lib/blog-posts';

type BlogPostSlugPageProps = {
  params: {
    slug: string;
  };
};

export default function BlogPostSlugPage({ params }: BlogPostSlugPageProps) {
  const [blogPost] = blog_posts.filter(
    (blogPost) => blogPost.slug === params.slug
  );

  if (!blogPost) return notFound();

  return (
    <>
      <BlogPostHeader blogPost={blogPost} />
      <div className='mx-auto max-w-[80ch] space-y-12'>
        {blogPost.sections.map((section, i) => (
          <BlogPostSection
            code={section.code}
            key={i}
            image={section.image}
            paragraphs={section.paragraphs}
            subtitle={section.subtitle}
          />
        ))}
      </div>
    </>
  );
}
