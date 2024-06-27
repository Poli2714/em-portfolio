import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import ProjectStackList from './ProjectStackList';

const stack = ['nextjs', 'react', 'tailwind css', 'typescript'];

test('renders ProjectStackList', () => {
  render(<ProjectStackList stack={stack} />);

  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(4);
});
