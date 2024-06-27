import { ProjectCardList, ProjectsPageHeader } from './components';

export default function ProjectsHomePage() {
  return (
    <main className='my-[clamp(4rem,10dvw,7rem)] space-y-[clamp(3rem,7.5dvw,5rem)]'>
      <ProjectsPageHeader />
      <ProjectCardList />
    </main>
  );
}
