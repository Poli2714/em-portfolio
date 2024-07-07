import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import SendBtn from './SendBtn';

test('renders SendBtn with enabled state', () => {
  render(<SendBtn isPending={false} />);
  const sendBtn = screen.getByRole('button');

  expect(sendBtn).toBeInTheDocument();
  expect(sendBtn).not.toHaveAttribute('disabled');

  expect(screen.queryByTestId('loader-icon')).not.toBeInTheDocument();
});

test('renders SendBtn with disabled state', () => {
  render(<SendBtn isPending={true} />);
  const sendBtn = screen.getByRole('button');

  expect(sendBtn).toBeInTheDocument();
  expect(sendBtn).toHaveAttribute('disabled');

  expect(screen.getByTestId('loader-icon')).toBeInTheDocument();
});
