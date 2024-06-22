import { expect, test, vi } from 'vitest';
import { screen, render } from '@testing-library/react';

import SocialMediaLinks from './SocialMediaLinks';

vi.mock('./components', () => ({
  SocialMediaIcon: () => <div>Mock Icon</div>,
}));

test('renders SocialMediaLinks', () => {
  render(<SocialMediaLinks />);

  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(4);
  expect(screen.getAllByRole('link')).toHaveLength(4);
});
