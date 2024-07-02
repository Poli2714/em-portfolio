import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import MenuLinks from './MenuLinks';

vi.mock('@/components/shadcn', () => ({
  SheetClose: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
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

test('renders MenuLinks', () => {
  render(<MenuLinks />);

  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(3);
  expect(screen.getAllByRole('link')).toHaveLength(3);
});
