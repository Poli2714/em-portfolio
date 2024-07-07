import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import ModeToggle from './ModeToggle';

test('renders ModeToggle', () => {
  render(<ModeToggle />);

  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(screen.getByTestId('sun-icon')).toBeInTheDocument();
  expect(screen.getByTestId('moon-icon')).toBeInTheDocument();
});

test('renders dropdown with toggle options when user clicks on trigger button', async () => {
  const user = userEvent.setup();
  render(<ModeToggle />);
  const triggerBtn = screen.getByRole('button');

  await user.click(triggerBtn);

  expect(screen.getByRole('menu')).toBeInTheDocument();
  expect(screen.getAllByRole('menuitem')).toHaveLength(3);
});

test('closes the dropdown when user clicks on one of the toggle options', async () => {
  const user = userEvent.setup();
  render(<ModeToggle />);
  const triggerBtn = screen.getByRole('button');

  await user.click(triggerBtn);
  const lightMode = screen.getAllByRole('menuitem')[0];
  await user.click(lightMode);

  expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  expect(screen.queryAllByRole('menuitem')).toHaveLength(0);
});
