import { cn } from '@/lib/utils';

type ShaeProps = {
  shadeColor?: string;
};

function Shade({ shadeColor }: ShaeProps) {
  return (
    <div
      className={cn(
        'absolute left-0 top-0 z-10 hidden h-full w-full dark:block',
        shadeColor ?? 'bg-foreground/15'
      )}
      data-testid='shade'
    ></div>
  );
}

export default Shade;
