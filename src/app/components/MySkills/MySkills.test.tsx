import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import MySkills from './MySkills';

vi.mock('@/components/ui', () => ({
  SectionTitle: () => <h2>Mock title</h2>,
}));

vi.mock('./components', () => ({
  SkillCategory: () => <div data-testid='mock-category'>Mock category</div>,
}));

test('renders MySkills', () => {
  render(<MySkills />);

  expect(screen.getByTestId('skills-section')).toBeInTheDocument();
  expect(screen.getAllByTestId('mock-category')).toHaveLength(2);
});
