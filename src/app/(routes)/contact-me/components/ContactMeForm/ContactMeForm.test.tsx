import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactMeForm from './ContactMeForm';
import { ContactMeFormSchemaProps } from '@/validations/ContactMeFormValidation';

vi.mock('./components', () => ({
  SendBtn: () => (
    <button form='contact-me-form' type='submit'>
      Mock send button
    </button>
  ),
}));

vi.mock('@/lib/sendEmail', () => ({
  sendEmail: (data: ContactMeFormSchemaProps) => console.log(data),
}));

test('renders ContactMeForm', () => {
  render(<ContactMeForm />);
  const nameInput = screen.getByLabelText('Name');
  const emailInput = screen.getByLabelText('Email');
  const MessageTextbox = screen.getByLabelText('Message');

  expect(screen.getByRole('form')).toBeInTheDocument();
  expect(nameInput).toBeInTheDocument();
  expect(nameInput).toHaveValue('');
  expect(emailInput).toBeInTheDocument();
  expect(emailInput).toHaveValue('');
  expect(MessageTextbox).toBeInTheDocument();
  expect(MessageTextbox).toHaveValue('');
});

test('renders user inputs on screen', async () => {
  const user = userEvent.setup();
  render(<ContactMeForm />);
  const nameInput = screen.getByLabelText('Name');
  const emailInput = screen.getByLabelText('Email');
  const MessageTextbox = screen.getByLabelText('Message');

  await user.type(nameInput, 'Elgun');
  expect(nameInput).toHaveValue('Elgun');
  await user.type(emailInput, 'elgun@email.com');
  expect(emailInput).toHaveValue('elgun@email.com');
  await user.type(MessageTextbox, 'Hello');
  expect(MessageTextbox).toHaveValue('Hello');

  await user.clear(nameInput);
  expect(nameInput).toHaveValue('');
  await user.clear(emailInput);
  expect(emailInput).toHaveValue('');
  await user.clear(MessageTextbox);
  expect(MessageTextbox).toHaveValue('');
});
