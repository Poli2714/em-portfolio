import { z } from 'zod';

export const contactMeFormSchema = z.object({
  name: z.string().trim().min(1, {
    message: 'Name is too short. Please provide at least 1 character.',
  }),
  email: z
    .string()
    .email({ message: 'Invalid email address. Please enter a valid email.' }),
  message: z
    .string()
    .trim()
    .min(20, {
      message: 'Message is too short. Please provide at least 20 characters.',
    })
    .max(500, {
      message:
        'Message is too long. Please limit your message to 500 characters.',
    }),
});

export type ContactMeFormSchemaProps = z.infer<typeof contactMeFormSchema>;
