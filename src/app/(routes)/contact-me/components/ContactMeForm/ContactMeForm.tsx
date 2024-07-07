'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
} from '@/components/shadcn';
import { SendBtn } from './components';

import {
  ContactMeFormSchemaProps,
  contactMeFormSchema,
} from '@/validations/ContactMeFormValidation';
import { sendEmail } from '@/lib/sendEmail';

function ContactMeForm() {
  const [isPending, setIsPending] = useState(false);
  const form = useForm<ContactMeFormSchemaProps>({
    resolver: zodResolver(contactMeFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactMeFormSchemaProps) =>
    sendEmail({ data, form, setIsPending });

  return (
    <Form {...form}>
      <form
        className='grid gap-y-6 md:grid-cols-2 md:gap-x-4'
        name='contact-me-form'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder='Enter your name' type='text' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='Enter your email' type='email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem className='md:col-span-2'>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  rows={7}
                  placeholder='Write your message here (20-500 characters)'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SendBtn isPending={isPending} />
      </form>
    </Form>
  );
}

export default ContactMeForm;
