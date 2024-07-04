import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/shadcn';
import { VisitProject } from '@/components/ui';

import GithubLogoLightMode from '/public/github-mark.svg';
import GithubLogoDarkMode from '/public/github-mark-white.svg';

type ProjectLinksProps = {
  githubRepo: string;
  website: string;
};

function ProjectLinks({ githubRepo, website }: ProjectLinksProps) {
  return (
    <div
      className='flex items-center justify-center gap-x-2'
      data-testid='project-links'
    >
      <VisitProject className='self-center' label='View Live' route={website} />
      <Button asChild size='icon' variant='ghost'>
        <Link href={githubRepo}>
          <Image
            alt='Github icon'
            className='h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
            height={24}
            src={GithubLogoLightMode}
            width={24}
          />
          <Image
            alt='Github icon'
            className='absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
            height={24}
            src={GithubLogoDarkMode}
            width={24}
          />
        </Link>
      </Button>
    </div>
  );
}

export default ProjectLinks;
