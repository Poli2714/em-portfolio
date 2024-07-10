import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import MenuNav from './MenuNav';
import { __nav_items__ } from '@/__mocks__/__nav-items__';

vi.mock('@/components/ui', () => ({
  NavItem: () => <div>Mock nav item</div>,
}));

vi.mock('@/components/shadcn', () => ({
  SheetClose: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

test('renders MenuNav', () => {
  render(<MenuNav navItems={__nav_items__} />);

  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(3);
});
