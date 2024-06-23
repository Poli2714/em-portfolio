import { FooterNavLinks } from './components';
import { Logo, SocialMediaLinks } from '@/components/ui';
import { Separator } from '@/components/shadcn';

function PageFooter() {
  return (
    <footer className='flex flex-col py-20'>
      <div className='mb-20 flex flex-col items-center justify-center gap-y-8'>
        <Logo />
        <FooterNavLinks />
        <SocialMediaLinks className='gap-x-1' />
      </div>
      <Separator className='bg-foreground' />
      <div className='mt-8'>
        <p className='text-center'>© 2024. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default PageFooter;
