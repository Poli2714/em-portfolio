import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import ProjectLinks from './ProjectLinks';

vi.mock('@/components/ui', () => ({
  VisitProject: () => <div>Mock visit project</div>,
}));

vi.mock('@/components/shadcn', () => ({
  Button: () => <div>Mock button</div>,
}));

test('renders ProjectLinks', () => {
  render(<ProjectLinks githubRepo='test1' website='test2' />);

  expect(screen.getByTestId('project-links')).toBeInTheDocument();
});
