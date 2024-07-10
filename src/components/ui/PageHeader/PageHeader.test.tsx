import { expect, test, vi } from 'vitest';
import { screen, render } from '@testing-library/react';

import PageHeader from './PageHeader';
import { __nav_items__ } from '@/__mocks__/__nav-items__';

vi.mock('./components', () => ({
  Menu: () => <div>Mock menu</div>,
  ModeToggle: () => <div>Mock ModeToggle</div>,
}));

vi.mock('@/components/ui', () => ({
  Logo: () => <div>Mock logo</div>,
  MainNav: () => <div>Mock nav items</div>,
}));

test('renders PageHeader', async () => {
  render(<PageHeader navItems={__nav_items__} />);

  expect(screen.queryByRole('banner')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Contact me' })).toBeInTheDocument();
});
