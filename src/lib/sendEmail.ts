import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

import { ContactMeFormSchemaProps } from '@/validations/ContactMeFormValidation';
import { Dispatch, SetStateAction } from 'react';
import { UseFormReturn } from 'react-hook-form';

type SendEmailProps = {
  data: ContactMeFormSchemaProps;
  form: UseFormReturn<ContactMeFormSchemaProps, any, undefined>;
  setIsPending: Dispatch<SetStateAction<boolean>>;
};

export const sendEmail = ({ data, form, setIsPending }: SendEmailProps) => {
  setIsPending(true);
  form.reset();
  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    message: data.message,
  };

  emailjs
    .send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      templateParams,
      {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      }
    )
    .then(
      () => {
        setIsPending(false);
        toast.success('Success! Your message has been sent.');
      },
      (error) => {
        setIsPending(false);
        console.log(error.text);
        toast.error('Error! Failed to send your message. Please try again.');
      }
    );
};
