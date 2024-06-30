import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import ProjectTechStack from './ProjectTechStack';

const stack = ['nextjs', 'react', 'tailwind css', 'typescript'];

test('renders ProjectStackList', () => {
  render(<ProjectTechStack stack={stack} />);

  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(4);
});
