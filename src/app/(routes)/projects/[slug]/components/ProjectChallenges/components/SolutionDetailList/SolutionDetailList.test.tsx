import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import SolutionDetailList from './SolutionDetailList';

const solutionDetails = [
  {
    id: 'test1',
    item: 'Test item1',
  },
  {
    id: 'test2',
    item: 'Test item2',
  },
  {
    id: 'test3',
    item: 'Test item3',
  },
];

test('renders SolutionDetailList with three items', () => {
  render(<SolutionDetailList solutionDetails={solutionDetails} />);
  const paragraphs = screen.getAllByRole('paragraph');

  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(3);

  expect(paragraphs).toHaveLength(3);
  paragraphs.forEach((paragraph, i) => {
    expect(paragraph).toHaveTextContent(`Test item${i + 1}`);
  });
});
