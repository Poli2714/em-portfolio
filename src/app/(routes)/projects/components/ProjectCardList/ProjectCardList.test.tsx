import { expect, test, vi } from 'vitest';
import { screen, render } from '@testing-library/react';

import ProjectCardList from './ProjectCardList';
import { __projects__ } from '@/__mocks__/__projects__';

vi.mock('@/components/ui', () => ({
  ProjectCard: () => <div>Mock project card</div>,
}));

test('renders ProjectCardList', () => {
  render(<ProjectCardList projects={__projects__} />);

  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(2);
});
