import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import ContactMePageHeader from './ContactMePageHeader';

test('renders ContactMePageHeader', () => {
  render(<ContactMePageHeader />);
  const paragraph = screen.getByRole('paragraph');

  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { level: 1, name: /^contact me$/i })
  ).toBeInTheDocument();

  expect(paragraph).toBeInTheDocument();
  expect(paragraph).toHaveTextContent(
    /^I'm always excited.*hearing from you!$/i
  );
});
