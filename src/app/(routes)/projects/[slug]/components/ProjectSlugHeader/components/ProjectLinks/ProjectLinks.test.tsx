import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import ProjectLinks from './ProjectLinks';

vi.mock('@/components/ui', () => ({
  VisitLink: () => <div>Mock visit project</div>,
}));

test('renders ProjectLinks', () => {
  render(<ProjectLinks githubRepo='test1' website='test2' />);

  expect(screen.getByTestId('project-links')).toBeInTheDocument();

  expect(screen.getByRole('link')).toHaveAttribute('href', 'test1');
});
