import { cn } from '@/lib/utils';

type SectionTitleProps = {
  className?: string;
  title: string;
};

function SectionTitle({ className, title }: SectionTitleProps) {
  return (
    <div className={cn('relative inline-block', className)}>
      <h2 className='text-[clamp(1.5rem,6dvw,3rem)] font-bold leading-none'>
        {title}
      </h2>
      <div className='absolute -right-[clamp(0.75rem,3dvw,1.5rem)] bottom-1 h-[clamp(0.5rem,2dvw,1rem)] w-[clamp(0.5rem,2dvw,1rem)] bg-primary'></div>
    </div>
  );
}

export default SectionTitle;
