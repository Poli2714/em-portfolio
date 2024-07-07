import { ContactMeForm, ContactMePageHeader } from './components';

export default function ContactMePage() {
  return (
    <div className='mx-auto max-w-2xl space-y-6 md:space-y-8'>
      <ContactMePageHeader />
      <ContactMeForm />
    </div>
  );
}
