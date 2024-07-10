import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import PhotoCard from './PhotoCard';
import { __projects__ } from '@/__mocks__/__projects__';

vi.mock('./components', () => ({
  Photo: () => <div data-testid='photo'>Mock photo</div>,
  Shade: () => <div data-testid='shade'>Mock shade</div>,
}));

test('renders PhotoCard with shade', () => {
  render(<PhotoCard image={__projects__[0].images[0]} />);

  expect(screen.getByTestId('shade')).toBeInTheDocument();
  expect(screen.getByTestId('photo')).toBeInTheDocument();
});

test('renders PhotoCard without shade', () => {
  render(<PhotoCard image={__projects__[0].images[0]} shade={false} />);

  expect(screen.queryByTestId('shade')).not.toBeInTheDocument();
  expect(screen.getByTestId('photo')).toBeInTheDocument();
});
