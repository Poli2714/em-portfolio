type PageHeaderProps = {
  className?: string;
  description: string;
  mainTitle: string;
  secondaryTitle: string;
};

function PageHeader({
  className,
  description,
  mainTitle,
  secondaryTitle,
}: PageHeaderProps) {
  return (
    <header className={className}>
      <h1 className='mb-3 font-semibold md:mb-4'>{mainTitle}</h1>
      <h2 className='mb-5 text-[clamp(2.5rem,5dvw,3.5rem)] font-bold md:mb-6'>
        {secondaryTitle}
      </h2>
      <p className='text-lg'>{description}</p>
    </header>
  );
}

export default PageHeader;
