import Link from 'next/link';

import { Separator } from '@/components/shadcn';

type ProjectDateAndWebsiteprops = {
  date: string;
  website: string;
};

function ProjectDateAndWebsite({ date, website }: ProjectDateAndWebsiteprops) {
  return (
    <div className='space-y-5 dark:text-highlight'>
      <Separator className='bg-foreground' />
      <div className='flex items-center justify-between'>
        <span className='font-semibold'>Date</span>
        <span data-testid='project-date'>{date}</span>
      </div>
      <Separator className='bg-foreground' />
      <div className='flex items-center justify-between'>
        <span className='font-semibold' data-testid='project-website'>
          Website
        </span>
        <Link
          className='underline underline-offset-4 transition-colors hover:text-primary'
          href={website}
        >
          {website}
        </Link>
      </div>
      <Separator className='bg-foreground' />
    </div>
  );
}

export default ProjectDateAndWebsite;
