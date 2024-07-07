import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/shadcn';

import Error404Code from '/public/404.svg';

export default function NotFoundPage() {
  return (
    <div className='flex min-h-dvh flex-col items-center justify-center gap-y-12'>
      <Image
        alt='404 vector image'
        height={256}
        src={Error404Code}
        width={256}
      />
      <div className='space-y-4 text-center [&>p]:text-lg'>
        <h1 className='text-[clamp(2rem,5.5dvw,2.5rem)] font-bold'>
          Oops! Page Not Found
        </h1>
        <p>
          It looks like the page you&apos;re looking for doesn&apos;t exist.
        </p>
        <p>You might have mistyped the URL or the page may have been moved.</p>
        <Button asChild>
          <Link href='/'>Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
