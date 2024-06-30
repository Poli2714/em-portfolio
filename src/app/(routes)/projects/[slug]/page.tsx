import { notFound } from 'next/navigation';

import {
  ProjectChallenges,
  ProjectFeatures,
  ProjectGoal,
  ProjectSlugHeader,
} from './components';

import { projects } from '@/lib/projects';

type ProjectSlugPageProps = {
  params: {
    slug: string;
  };
};

export default function ProjectSlugPage({ params }: ProjectSlugPageProps) {
  const [project] = projects.filter((project) => project.id === params.slug);

  if (!project) return notFound();

  return (
    <div className='space-y-[clamp(4rem,10dvw,7rem)]'>
      <ProjectSlugHeader project={project} />
      <ProjectGoal project={project} />
      <ProjectFeatures project={project} />
      <ProjectChallenges project={project} />
    </div>
  );
}
