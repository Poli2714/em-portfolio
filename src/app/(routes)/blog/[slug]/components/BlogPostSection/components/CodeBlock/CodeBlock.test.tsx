import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CodeBlock from './CodeBlock';

vi.mock('lucide-react', () => ({
  CheckIcon: () => <div>Check icon</div>,
  ClipboardIcon: () => <div>Clipboard icon</div>,
}));

const code = '<p>Hello world!</>';

test('renders CodeBlock', () => {
  render(<CodeBlock code={code} language='tsx' />);
  const paragraph = screen.getByRole('paragraph');

  expect(paragraph).toBeInTheDocument();
  expect(paragraph).toHaveTextContent(/^typescript$/i);

  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(screen.queryByText(/^check icon$/i)).not.toBeInTheDocument();
  expect(screen.getByText(/^clipboard icon$/i)).toBeInTheDocument();

  expect(screen.getByRole('code')).toBeInTheDocument();
});

test('renders CodeBlock with check icon when user clicks on copy button', async () => {
  const user = userEvent.setup();
  render(<CodeBlock code={code} language='tsx' />);
  const copyBtn = screen.getByRole('button');

  await user.click(copyBtn);
  expect(screen.getByText(/^check icon$/i)).toBeInTheDocument();
  expect(screen.queryByText(/^clipboard icon$/i)).not.toBeInTheDocument();
});
