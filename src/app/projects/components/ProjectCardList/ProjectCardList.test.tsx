import { expect, test, vi } from 'vitest';
import { screen, render } from '@testing-library/react';

import ProjectCardList from './ProjectCardList';

vi.mock('@/components/ui', () => ({
  ProjectCard: () => <div>Mock project card</div>,
}));

test('renders ProjectCardList', () => {
  render(<ProjectCardList />);

  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(2);
});
