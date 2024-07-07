import { PageFooter, PageHeader } from '@/components/ui';

type ProjectsLayoutProps = {
  children: React.ReactNode;
};

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
  return (
    <>
      <PageHeader />
      <main className='my-[clamp(4rem,10dvw,7rem)] space-y-[clamp(3rem,7.5dvw,5rem)]'>
        {children}
      </main>
      <PageFooter />
    </>
  );
}
