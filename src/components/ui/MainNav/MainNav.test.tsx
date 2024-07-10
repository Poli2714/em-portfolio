import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import MainNav from './MainNav';
import { __nav_items__ } from '@/__mocks__/__nav-items__';

vi.mock('./components', () => ({
  NavItem: () => <div>Mock nav item</div>,
}));

test('renders MainNav', () => {
  render(<MainNav navItems={__nav_items__} />);

  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(3);
});
