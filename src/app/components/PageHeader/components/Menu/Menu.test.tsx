import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import Menu from './Menu';

vi.mock('@/components/ui', () => ({
  Logo: () => (
    <a href='#' data-testid='mock-logo'>
      Mock logo
    </a>
  ),
}));

vi.mock('./components', () => ({
  ContactMeLink: () => <div>Mock contact me link</div>,
  MenuLinks: () => <div>Mock menu links</div>,
}));

test('renders Menu', () => {
  render(<Menu />);

  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(screen.getByTestId('menu-icon')).toBeInTheDocument();
});

test('displays sheet when user clicks on trigger button', async () => {
  const user = userEvent.setup();
  render(<Menu />);
  const triggerBtn = screen.getByRole('button');

  await user.click(triggerBtn);
  expect(screen.getByRole('dialog')).toBeInTheDocument();
});
