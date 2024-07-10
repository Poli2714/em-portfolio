import { AspectRatio } from '@/components/shadcn';
import { Photo } from '@/components/ui';

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
      {!!code ? (
        <pre className='overflow-auto rounded-md bg-foreground p-4 text-background dark:bg-highlight'>
          <code>{code}</code>
        </pre>
      ) : null}
      {!!image ? (
        <AspectRatio ratio={16 / 9}>
          <Photo
            altDescription={image.alt_description}
            lightMode={image.light_mode}
            darkMode={image.dark_mode}
          />
        </AspectRatio>
      ) : null}
    </div>
  );
}

export default BlogPostSection;
