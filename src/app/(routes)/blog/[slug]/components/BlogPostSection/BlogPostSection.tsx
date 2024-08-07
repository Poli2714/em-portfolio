import { CodeBlock } from './components';
import { PhotoCard } from '@/components/ui';

import { TBlogPostSection } from '@/types/blog-post';

function BlogPostSection({
  code,
  image,
  paragraphs,
  subtitle,
}: TBlogPostSection) {
  return (
    <div className='space-y-7'>
      {!!subtitle ? (
        <h3 className='text-[clamp(1.5rem,5dvw,2rem)] font-semibold leading-[clamp(2rem,5.5dvw,2.25rem)] dark:text-highlight'>
          {subtitle}
        </h3>
      ) : null}
      {paragraphs.map((paragraph, i) => (
        <p key={i} className='just text-pretty break-words text-lg'>
          {paragraph}
        </p>
      ))}
      {!!code ? <CodeBlock code={code} language='tsx' /> : null}
      {!!image ? <PhotoCard image={image} shade={false} /> : null}
    </div>
  );
}

export default BlogPostSection;
