import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import ProjectImage from './ProjectImage';

test('renders ProjectCardImage with one image if project screenshot with light background is not provided', () => {
  render(
    <ProjectImage
      altDescription='ImageBox website screenshot'
      imgDark='/dark.png'
      imgLight={undefined}
    />
  );

  expect(screen.getAllByRole('img')).toHaveLength(1);
});

test('renders ProjectCardImage with two images if project screenshot with light background is provided', () => {
  render(
    <ProjectImage
      altDescription='Audiophile website screenshot'
      imgDark='/dark.png'
      imgLight='/light.png'
    />
  );

  expect(screen.getAllByRole('img')).toHaveLength(2);
});
