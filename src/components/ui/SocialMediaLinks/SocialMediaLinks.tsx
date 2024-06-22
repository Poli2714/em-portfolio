import Link from 'next/link';

import { Button } from '@/components/shadcn';
import { SocialMediaIcon } from './components';

import { smAccounts } from '@/lib/sm-accounts';

function SocialMediaLinks() {
  return (
    <ul className='flex self-end'>
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
