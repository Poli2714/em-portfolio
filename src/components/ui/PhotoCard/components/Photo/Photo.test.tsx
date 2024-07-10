import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import Photo from './Photo';

test('renders ProjectCardImage with one image if project screenshot with light background is not provided', () => {
  render(
    <Photo
      altDescription='ImageBox website screenshot'
      lightMode='/dark.png'
      darkMode={undefined}
    />
  );

  expect(screen.getAllByRole('img')).toHaveLength(1);
});

test('renders ProjectCardImage with two images if project screenshot with light background is provided', () => {
  render(
    <Photo
      altDescription='Audiophile website screenshot'
      lightMode='/dark.png'
      darkMode='/light.png'
    />
  );

  expect(screen.getAllByRole('img')).toHaveLength(2);
});
