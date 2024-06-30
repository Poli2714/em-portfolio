import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import FeatureList from './FeatureList';

const features = [
  {
    name: 'Test name 1',
    description: 'Test description 1',
  },
  {
    name: 'Test name 2',
    description: 'Test description 2',
  },
];

test('renders FeatureList', () => {
  render(<FeatureList features={features} />);
  const paragraphs = screen.getAllByRole('paragraph');

  expect(screen.getAllByTestId('feature-item')).toHaveLength(2);
  expect(screen.getAllByTestId('square-check-icon')).toHaveLength(2);
  expect(paragraphs).toHaveLength(2);
  paragraphs.forEach((paragraph, i) => {
    expect(paragraph).toHaveTextContent(
      `Test name ${i + 1}. Test description ${i + 1}`
    );
  });
});
