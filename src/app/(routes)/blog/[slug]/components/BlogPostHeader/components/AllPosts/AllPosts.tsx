import { ChevronLeftIcon } from 'lucide-react';
import Link from 'next/link';

function AllPosts() {
  return (
    <div className='inline-block'>
      <Link
        className='group flex items-center gap-x-2 text-foreground/70 hover:text-foreground dark:text-foreground dark:hover:text-highlight'
        href='/blog'
      >
        <ChevronLeftIcon
          className='transition-transform group-hover:-translate-x-1'
          data-testid='chevron-left-icon'
          size={16}
        />
        <p>All Posts</p>
      </Link>
    </div>
  );
}

export default AllPosts;
