import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import NavItems from './NavItems';

vi.mock('./components', () => ({
  NavItem: () => <div>Mock nav item</div>,
}));

vi.mock('@/lib/nav-items', () => ({
  navItems: [
    {
      id: 'home',
      label: 'Home',
      href: '/',
    },
    {
      id: 'my-story',
      label: 'My Story',
      href: '/my-story',
    },
    {
      id: 'projects',
      label: 'Projects',
      href: '/projects',
    },
  ],
}));

test('renders NavItems', () => {
  render(<NavItems />);

  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(3);
});
