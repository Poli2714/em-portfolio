import { expect, test, vi } from 'vitest';
import { screen, render } from '@testing-library/react';

import PageHeader from './PageHeader';

vi.mock('./components', () => ({
  Menu: () => <div>Mock menu</div>,
  ModeToggle: () => <div>Mock ModeToggle</div>,
}));

vi.mock('@/components/ui', () => ({
  Logo: () => <div>Mock logo</div>,
  NavItems: () => <div>Mock nav items</div>,
}));

test('renders PageHeader', async () => {
  render(<PageHeader />);

  expect(screen.queryByRole('banner')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Contact me' })).toBeInTheDocument();
});
