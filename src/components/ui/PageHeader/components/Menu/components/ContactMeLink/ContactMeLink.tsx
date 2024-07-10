import { ArrowUpRightIcon } from 'lucide-react';
import Link from 'next/link';

function ContactMeLink() {
  return (
    <Link
      className='group flex gap-x-2 text-3xl font-semibold hover:text-primary'
      href='/contact-me'
    >
      CONTACT ME
      <ArrowUpRightIcon
        className='transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
        data-testid='arrow-right-icon'
        size={32}
        strokeWidth={3}
      />
    </Link>
  );
}

export default ContactMeLink;
