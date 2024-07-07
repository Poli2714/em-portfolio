import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import FooterNavLinks from './FooterNavLinks';

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

test('renders FooterNavLinks', () => {
  render(<FooterNavLinks />);

  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(3);
  expect(screen.getAllByRole('link')).toHaveLength(3);
});
