import { ImageIcon } from 'lucide-react';

type BlogPostMetaInfoProps = {
  author: string;
  date: string;
  readTime: number;
};

function BlogPostMetaInfo({ author, date, readTime }: BlogPostMetaInfoProps) {
  return (
    <div className='grid grid-cols-[min-content,1fr] grid-rows-2 gap-x-4'>
      <div className='row-span-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/15'>
        <ImageIcon className='text-foreground/30' size={20} strokeWidth={1} />
      </div>
      <h4 className='font-medium dark:text-highlight'>{author}</h4>
      <p className='flex items-center gap-x-2 text-sm'>
        {date} <span className='h-1 w-1 rounded-full bg-foreground'></span>{' '}
        {readTime} min read
      </p>
    </div>
  );
}

export default BlogPostMetaInfo;
