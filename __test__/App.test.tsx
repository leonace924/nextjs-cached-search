import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';

import Index from '@pages/index';

describe('renders App', () => {
  it('renders App', async () => {
    render(<Index />);

    const titleElement = screen.getByText(/Cached Search God/i);
    expect(titleElement).toBeInTheDocument();
  });
});
