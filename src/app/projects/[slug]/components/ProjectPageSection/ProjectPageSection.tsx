type ProjectPageSectionProps = {
  children: React.ReactNode;
  title: string;
};

function ProjectPageSection({ children, title }: ProjectPageSectionProps) {
  return (
    <section
      className='grid gap-y-5 lg:grid-cols-7'
      data-testid='project-page-section'
    >
      <h2 className='text-[clamp(2rem,5dvw,2.5rem)] font-bold lg:col-span-3'>
        {title}
      </h2>
      <div className='space-y-[clamp(3rem,7.5dvw,5rem)] lg:col-span-4'>
        {children}
      </div>
    </section>
  );
}

export default ProjectPageSection;
