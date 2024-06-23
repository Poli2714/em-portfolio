import Link from 'next/link';

import { Button } from '@/components/shadcn';
import { SocialMediaIcon } from './components';

import { cn } from '@/lib/utils';
import { smAccounts } from '@/lib/sm-accounts';

type SocialMediaLinksProps = {
  className?: string;
};

function SocialMediaLinks({ className }: SocialMediaLinksProps) {
  return (
    <ul className={cn('flex', className)}>
      {smAccounts.map((account) => (
        <li key={account.name}>
          <Button asChild className='rounded-full' size='icon' variant='ghost'>
            <Link href={account.href}>
              <SocialMediaIcon
                name={account.name}
                srcDark={account.logoDark}
                srcLight={account.logoLight}
              />
            </Link>
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default SocialMediaLinks;
