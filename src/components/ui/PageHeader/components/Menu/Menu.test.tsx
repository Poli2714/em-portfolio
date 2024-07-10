import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import Menu from './Menu';
import { __nav_items__ } from '@/__mocks__/__nav-items__';

vi.mock('@/components/ui', () => ({
  Logo: () => (
    <a href='#' data-testid='mock-logo'>
      Mock logo
    </a>
  ),
  SocialMediaLinks: () => <div>Mock sm links</div>,
}));

vi.mock('./components', () => ({
  ContactMeLink: () => <div>Mock contact me link</div>,
  MenuNav: () => <div>Mock menu links</div>,
}));

test('renders Menu', () => {
  render(<Menu navItems={__nav_items__} />);

  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(screen.getByTestId('menu-icon')).toBeInTheDocument();
});

test('displays sheet when user clicks on trigger button', async () => {
  const user = userEvent.setup();
  render(<Menu navItems={__nav_items__} />);
  const triggerBtn = screen.getByRole('button');

  await user.click(triggerBtn);
  expect(screen.getByRole('dialog')).toBeInTheDocument();
});

test('hides sheet when user clicks on escape while sheet is open', async () => {
  const user = userEvent.setup();
  render(<Menu navItems={__nav_items__} />);
  const triggerBtn = screen.getByRole('button');

  await user.click(triggerBtn);
  await user.keyboard('{Escape}');

  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});
