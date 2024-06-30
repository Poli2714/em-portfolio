import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/shadcn';
import { VisitProject } from '@/components/ui';

import GithubLogo from '/public/github-mark.svg';

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
          <Image alt='Github icon' height={24} src={GithubLogo} width={24} />
        </Link>
      </Button>
    </div>
  );
}

export default ProjectLinks;
