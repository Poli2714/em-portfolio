type ProjectsLayoutProps = {
  children: React.ReactNode;
};

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
  return (
    <main className='my-[clamp(4rem,10dvw,7rem)] space-y-[clamp(3rem,7.5dvw,5rem)]'>
      {children}
    </main>
  );
}
