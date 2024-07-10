import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import PageFooter from './PageFooter';
import { __nav_items__ } from '@/__mocks__/__nav-items__';

vi.mock('./components', () => ({
  FooterNav: () => <div>Mock nav links</div>,
}));

vi.mock('@/components/ui', () => ({
  Logo: () => <div>Mock logo</div>,
  SocialMediaLinks: () => <div>Mock sm links</div>,
}));

test('renders PageFooter', () => {
  render(<PageFooter navItems={__nav_items__} />);

  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  expect(screen.getByRole('paragraph')).toHaveTextContent(
    /^© 2024.*reserved.$/i
  );
});
