import Image from 'next/image';

import EMPicture from '/public/profile-picture/EM_square.jpeg';

type BlogPostMetaInfoProps = {
  author: string;
  date: string;
  readTime: number;
};

function BlogPostMetaInfo({ author, date, readTime }: BlogPostMetaInfoProps) {
  return (
    <div className='grid grid-cols-[min-content,1fr] grid-rows-2 gap-x-4'>
      <div className='row-span-2 h-12 w-12 rounded-full'>
        <Image
          alt="Elgun Mehdiyev's profile picture"
          className='h-full w-full rounded-full object-cover'
          height={48}
          src={EMPicture}
          width={48}
        />
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
