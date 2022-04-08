import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';

import { GodDto } from '@types';
import { GodCard } from '@components/Pages/Home';

const mockData: GodDto = {
  name: 'Athena',
  superpower: 'Wisdom',
  end_of_an_era: '0012-10-10T00:00:00.000+00:00',
};

describe('renders GodCard', () => {
  it('renders GodCard', () => {
    render(<GodCard god={mockData} />);

    const titleElement = screen.getByText(/Athena/i);
    expect(titleElement).toBeInTheDocument();

    const powerElement = screen.getByText(/Wisdom/i);
    expect(powerElement).toBeInTheDocument();
  });
});
