import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import MySkills from './MySkills';
import { __core_skills__, __other_tools__ } from '@/__mocks__/__skills__';

vi.mock('@/components/ui', () => ({
  SectionTitle: () => <h2>Mock title</h2>,
}));

vi.mock('./components', () => ({
  SkillCategory: () => <div data-testid='mock-category'>Mock category</div>,
}));

test('renders MySkills', () => {
  render(
    <MySkills coreSkills={__core_skills__} otherTools={__other_tools__} />
  );

  expect(screen.getByTestId('skills-section')).toBeInTheDocument();
  expect(screen.getAllByTestId('mock-category')).toHaveLength(2);
});
