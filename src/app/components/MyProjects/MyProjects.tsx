import { Button } from '@/components/shadcn';
import { ProjectCard } from './components';
import { SectionTitle } from '@/components/ui';

import { projects } from '@/lib/projects';
import Link from 'next/link';

function MyProjects() {
  return (
    <section
      className='my-[clamp(5rem,15dvw,10rem)] flex flex-col gap-y-10 lg:mt-0'
      data-testid='projects-section'
    >
      <SectionTitle className='self-start' title='My Projects' />
      <ul className='flex flex-col gap-12'>
        {projects.map((project) => (
          <li
            className='w-full max-w-[61rem] [&:nth-child(even)]:self-end'
            key={project.id}
          >
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
      {projects.length > 3 ? (
        <Button asChild className='mt-6 self-center' variant='outline'>
          <Link href='/projects'>View All</Link>
        </Button>
      ) : null}
    </section>
  );
}

export default MyProjects;
